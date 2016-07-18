$(function() {
    // Handle switching to ticket reply
    var $messageForm = $('.message-form');
    $messageForm.on('click', 'div.option[data-type="0"]', function(e) {
        $('#emailToUsers').show();
    });
    // Handle switching to ticket note
    $messageForm.on('click', 'div.option[data-type="1"]', function(e) {
        $('#emailToUsers').hide();
    });

    // Handle expanding each option group
    $(document).on('click', '.option_header', function(e) {
        $(this).next(".option_content").slideToggle(500);
        $(this).find(".arrow .fa").toggleClass("fa-chevron-down fa-chevron-up");
    });

    // Add a new canned response
    $('input[name=add_canned]').change(function() {
        var $table = $('#cannedTr'),
            $option = $(this).parents('.option');

        this.checked ? $table.show() : $table.hide();
    });

    /*
     * Search for a canned response
     */
    $(document).on('donetyping', 'input[name=cannedResponseSearch]', function() {
        var $this = $(this),
            $list = $this.next('#cannedResponseResults');

        // Clear the results
        $list.empty();

        // Only if there is at least one character
        if ($this.val().length) {
            // Add a search icon
            $this.addClass('ui-autocomplete-loading');

            // Fire the AJAX
            $.get(laroute.route('ticket.operator.cannedresponse.search', { term: $this.val() }))
                .done(function (data) {
                    // In case it's searched two requests at once (rare)
                    $list.empty();
                    
                    if (data.data.length === 0) {
                        // No results were found
                        $list.append('<li class="no-results">' + Lang.get('messages.no_results') + '</li>');
                    } else {
                        // Add each result to the list
                        $.each(data.data, function (key, item) {
                            $list.append('<li><a data-id="' + item.id + '"><span class="title">' + item.name
                                + '</span><br /><div class="description">' + $("<p>").html(item.text).text()
                                + '</div></a></li>');
                        });
                    }

                    // Show the results
                    $list.show();
                })
                .always(function () {
                    $this.removeClass('ui-autocomplete-loading');
                });
        }
    });

    $.Redactor.prototype.cannedResponses = function()
    {
        return {
            getTemplate: function()
            {
                return String() + '<section id="redactor-modal-ssLink">'
                    + '<input type="text" name="cannedResponseSearch" placeholder="' + Lang.get('ticket.search_canned') + '" />'
                    + '<ul id="cannedResponseResults" class="redactor-search" style="display: none"></ul>'
                    + '</section>';
            },
            init: function ()
            {
                var button = this.button.add('cannedResponses', Lang.choice('ticket.cannedresponse', 2));
                this.button.addCallback(button, this.cannedResponses.show);

                // make your added button as Font Awesome's icon
                this.button.setAwesome('cannedResponses', 'fa-comments-o');
            },
            show: function()
            {
                this.modal.addTemplate('cannedResponses', this.cannedResponses.getTemplate());

                this.modal.load('cannedResponses', Lang.choice('ticket.cannedresponse', 2), 400);

                $(document).off('click.cannedresponse')
                        .on('click.cannedresponse', '#cannedResponseResults li a', this.cannedResponses.insert);

                this.selection.save();
                this.modal.show();

                $('input[name=cannedResponseSearch]').donetyping().focus();
            },
            insert: function(e)
            {
                // Get the element that triggered this on click event handler
                var $modal = this,
                    $this = (e.target) ? $(e.target) : $(e.srcElement),
                    id;

                // Get the ID, sometimes it may be a div inside the a tag
                if ($this.is('a')) {
                    id = $this.data('id');
                } else {
                    id = $this.parents('a').data('id');
                }

                // Fetch canned response text and insert
                $.get(
                    laroute.route('ticket.operator.cannedresponse.show', { id: id }),
                    {
                        ticket_id: typeof ticketId !== 'undefined' ? ticketId : null,
                        user_id: typeof userId !== 'undefined' ? userId : null
                    },
                function(response) {
                    // Restore the caret/cursor position
                    $modal.modal.close();
                    $modal.selection.restore();

                    if (response.status == 'success') {
                        // Set text to be inserted
                        $modal.insert.html(response.data);
                    }

                    $modal.code.sync();
                }, "json");
            }
        };
    };

    /*
     * Search for a self-service article
     */
    // Fire an AJAX request once they've entered the search term
    $(document).on("donetyping", 'input[name=selfServiceSearch]', function() {
        var $this = $(this),
            $list = $this.next('#selfServiceResults');

        // Clear the results
        $list.empty();

        // Only if there is at least one character
        if ($this.val().length) {
            // Add a search icon
            $this.addClass('ui-autocomplete-loading');

            // Fire the AJAX
            $.get(laroute.route('selfservice.operator.article.search', { term: $this.val() }))
                .done(function (data) {
                    // In case it's searched two requests at once (rare)
                    $list.empty();

                    if (data.data.length == 0) {
                        // No results were found
                        $list.append('<li class="no-results">' + Lang.get('messages.no_results') + '</li>');
                    } else {
                        // Add each result to the list
                        $.each(data.data, function (key, item) {
                            $list.append('<li><a data-url="' + item.frontend_url + '"><span class="title">'
                                + item.title + '</span><br /><div class="description">' + item.excerpt + '</div></a></li>');
                        });
                    }

                    // Show the results
                    $list.show();
                })
                .always(function () {
                    $this.removeClass('ui-autocomplete-loading');
                });
        }
    });

    $.Redactor.prototype.ssLink = function()
    {
        return {
            getTemplate: function()
            {
                return String()
                + '<section id="redactor-modal-ssLink">'
                + '<input type="text" name="selfServiceSearch" placeholder="' + Lang.get('ticket.search_selfservice') + '" />'
                + '<ul id="selfServiceResults" class="redactor-search" style="display: none"></ul>'
                + '</section>';
            },
            init: function ()
            {
                var button = this.button.add('ssLink', Lang.get('ticket.add_selfservice_link'));
                this.button.addCallback(button, this.ssLink.show);
     
                // make your added button as Font Awesome's icon
                this.button.setAwesome('ssLink', 'fa-external-link');
            },
            show: function()
            {
                this.modal.addTemplate('ssLink', this.ssLink.getTemplate());
     
                this.modal.load('ssLink', Lang.get('ticket.add_selfservice_link'), 400);
                
                $(document).off('click.selfservice')
                        .on('click.selfservice', '#selfServiceResults li a', this.ssLink.insert);
     
                this.selection.save();
                this.modal.show();

                $('input[name=selfServiceSearch]').donetyping().focus();
            },
            insert: function(e)
            {
                var $this = (e.target) ? $(e.target) : $(e.srcElement), url;

                // Get the URL, sometimes it may be a div inside the a tag
                if ($this.is('a')) {
                    url = $this.data('url');
                } else {
                    url = $this.parents('a').data('url');
                }

                // If we have a valid URL insert it into the DOM
                if (typeof url !== 'undefined') {
                    // Restore the caret/cursor position
                    this.modal.close();
                    this.selection.restore();

                    this.insert.html("<a href='"+url+"'>"+url+"</a>");

                    this.code.sync();
                }
            }
        };
    };

});