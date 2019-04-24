$(document).ready(function() {
    // Open links in comments (not anchors) in a new window/tab
    $(".commentText a:not([href^='#'])").attr('target', '_blank');

    // Change ordering
    $('.commentOrdering').on('change', function() {
        // Show loading
        var $loading = $(this).parent().find('.loading');
        $loading.show();

        // Make call
        $.get(
            typeof commentRoute !== 'undefined' ? commentRoute : laroute.route('selfservice.comment'),
            {
                "articleId": articleId,
                "typeId": typeId,
                "order": $(this).val(),
            },
            function(response) {
                if (response.status == 'success') {
                    $('div.commentsBlock').html(response.data.comments);
                    if ($('.commentsBlock > ul.comments > li').length >= response.data.comment_total) {
                        // Hide show more option
                        $('.more-parents').parent().hide();
                    } else {
                        // Show option and update count
                        $('.more-parents').parent().show().data('count', $('.commentsBlock > ul.comments > li').length);
                    }
                } else {
                    // Show error
                    $('.comments-loading.fail').show(500).delay(5000).hide(500);
                }
            },
            'json'
        ).fail(function() {
            // Show error
            $('.comments-loading.fail').show(500).delay(5000).hide(500);
        }).always(function() {
            // Hide loading
            $loading.hide();
        });
    });

    // Fetch more comments
    $('.more-parents').on('click', function() {
        var $this = $(this);
        $this.prop('disabled', 'disabled');
        $.get(
            typeof commentRoute !== 'undefined' ? commentRoute : laroute.route('selfservice.comment'),
            {
                "articleId": articleId,
                "typeId": typeId,
                "order": $('.commentOrdering').val(),
                "last" : $('.commentsBlock > ul.comments > li:last-child').data('id'),
                "startParent": $this.data('count')
            },
            function(response) {
                // Re-enable button
                $this.prop('disabled', false);

                if (response.status == 'success') {
                    // Add the new comments to the end of the comments list
                    $(response.data.comments).children('li').appendTo('.commentsBlock > ul.comments');

                    // Hide the button if we've shown all the comments
                    if ($('.commentsBlock > ul.comments > li').length >= response.data.comment_total) {
                        $this.parent().hide();
                    } else {
                        // Update the number of parents
                        $this.data('count', $('.commentsBlock > ul.comments > li').length);
                    }
                } else {
                    // Show error
                    $('.comments-loading.fail').show(500).delay(5000).hide(500);
                }
            },
            'json'
        ).fail(function() {
            // Re-enable button
            $this.prop('disabled', false);
            // Show error
            $('.comments-loading.fail').show(500).delay(5000).hide(500);
        });
    });
    $(document.body).on('click', '.show-children', function() {
        var $this = $(this);
        $this.prop('disabled', 'disabled');
        $.get(
            typeof commentRoute !== 'undefined' ? commentRoute : laroute.route('selfservice.comment'),
            {
                "articleId": articleId,
                "typeId": typeId,
                "order": $('.commentOrdering').val(),
                "parentId": $this.data('parent')
            },
            function(response) {
                // Re-enable button
                $this.prop('disabled', false);

                if (response.status == 'success') {
                    // Replace current list with new list
                    $this.parent().find('ul.comments').replaceWith(response.data.comments);
                    // Remove link
                    $this.remove();
                } else {
                    // Show error
                    $('.comments-loading.fail').show(500).delay(5000).hide(500);
                }
            },
            'json'
        ).fail(function() {
            // Re-enable button
            $this.prop('disabled', false);
            // Show error
            $('.comments-loading.fail').show(500).delay(5000).hide(500);
        });
    });

    // Handle comment actions
    $('.commentsBlock')
        // Handles showing hidden comments
        .on('click', '.commentHidden', function(e) {
            // Show the form
            $(this).next().show();
            // Add comment parent id to the form
            $(this).remove();
        })

        // Handles the comment reply form
        .on('click', '.commentReply', function() {
            // Update parent ID on form
            $(".add-comment").find('input[name=parent_id]').val($(this).data('id'));

            // Get name of parent comment
            var name = $(this).parent().parent().parent().find('> .author').text();

            // Show name of being replied to
            $('.reply-name').text(name);
            $('.replying-to').show();

            // Add to textarea
            name = $.trim(name.replace(/\s/g, ''));
            $(".add-comment").find('textarea').val('@' + $.trim(name) + ' ').trigger('focus');

            // Show reply form if it's not already visible
            if (! $('.add-comment-form').next().is(':visible')) {
                $('.add-comment-form').trigger('click');
            }

            // Hover to the reply form
            $('html, body').animate({
                scrollTop: $(".add-comment-form").offset().top - 25
            }, 500);
        })

        // Handles the rating of a comment
        .on('click', '.commentRating', function(e) {
            e.preventDefault();

            // Save element for later
            var $this = $(this),
                // Get the other thumb so we can reset it
                $that = $this.data('score') == '1' ? $(this).next() : $(this).prev();

            // Post data
            $.post(
                laroute.route('selfservice.comment.rating'),
                {
                    "comment_id": $this.data('comment'),
                    "score": $this.data('score')
                },
                function(response) {
                    if (response.status == 'success') {
                        // Update image, reset other thumb
                        $this.toggleClass('clicked');
                        $that.removeClass('clicked');
                        // Update article rating
                        if (response.data !== null) {
                            $this.parent().find('.score').show().text(response.data);
                        }
                    }
                },
                'json'
            );
        });

    // Handles cancelling a reply
    $('.cancel-reply').on('click', function() {
        // Update parent ID on form to null
        $(".add-comment").find('input[name=parent_id]').val(null);

        // Hide name
        $('.replying-to').hide();

        // Clear textarea
        $(".add-comment").find('textarea').val('');
    });

    // Handles the rating of an article
    $('a.rate-article').on('click', function() {
        var score = $(this).data('score');

        // Post data
        $.post(
            laroute.route('selfservice.article.rating', {'id': articleId }),
            {
                "score": score
            },
            function(response) {
                if (response.status == 'success') {
                    $('span.rate-article').remove();
                    if (showRatings == '0' || loggedIn) {
                        if (score == 1) {
                            $('.positive-users').text(parseInt($('.positive-users').text()) + 1);
                        }
                        $('.total-users').text(parseInt($('.total-users').text()) + 1);
                        $('.article-rating').show();
                    }
                }
            },
            'json'
        );
    });

});
