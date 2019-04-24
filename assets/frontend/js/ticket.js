var redactor;

$(document).ready(function() {
    // Date picker
    callPikaday();

    // Enable hide / show password toggle
    callHideShowPassword();

    // Load attachment previews
    loadAttachmentPreviews($('.message'));

    // Ajax load messages.
    $(document).on('click', '.show_message', function (e) {
        e.preventDefault();
        e.stopPropagation();

        var $this = $(this),
            $message = $(this).parents('.message'),
            token = $('meta[name="token"]').prop('content'),
            route = laroute.route('ticket.frontend.message.showJson', { id: $message.data('id') });
        if (token.length !== 0) {
            route += "?token=" + token;
        }

        // Remove the show more link and replace it by a loading icon.
        $(this).hide();
        $message.find('.text').append(
            '<span class="loading-text description">'
                + '<i class="fa fa-spinner fa-pulse fa-fw"></i> ' + Lang.get('general.loading') + '...'
            + '</span>'
        );

        $.get(route)
            .done(function (ajax) {
                // Load the message in, it should already be sanitized.
                $message.find('.text').html(ajax.data.purified_text);
            })
            .fail(function () {
                swal(Lang.get('messages.error'), Lang.get('messages.error_loading_message'), 'error');
                $this.show();
                $message.find('.loading-text').remove();
            });
    });

    // Open links in a new window/tab
    $(document).on('click', '.message .text a', function() {
        $(this).attr('target', '_blank');
    });

    // Redactor
    redactor = $('textarea[name=text]').redactor($.Redactor.default_opts);

    // Regex for email
    var re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    // CC email input
    $('select[name="cc[]"]').selectize({
        plugins: {
            'restore_on_backspace': {},
            'remove_button': {},
            'max_items': {
                'message': Lang.get('general.show_count_more')
            }
        },
        delimiter: ',',
        persist: false,
        dropdownParent: 'body',
        placeholder: Lang.get('ticket.enter_email_address'),
        render: {
            item: function(item, escape) {
                return '<div class="item' + (item.unremovable ? ' unremovable' : '') + '">' + escape(item.value) + '</div>';
            }
        },
        createFilter: function(input) {
            var match = input.match(re);
            if (match) return !this.options.hasOwnProperty(match[0]);

            return false;
        },
        create: function(input) {
            if (re.test(input)) {
                return {
                    value: input,
                    text: input
                };
            }

            return false;
        },
        onDelete: function(input) {
            var self = this;
            $.each(input, function(key, value) {
                // Delete any items selected that don't have a 'unremovable' class.
                if (! $('.cc-emails div[data-value="' + value + '"]').hasClass('unremovable')) {
                    self.removeItem(value);
                }
            });

            // We handle the deletions above, no need to carry on with deleteSelect()
            return false;
        }
    });

    // Show CC email input
    $('.toggle-cc').on('click', function() {
        $('.recipients').show();
        $(this).hide();
    });

    // Backwards compatibility for JS changes in 2.1.2 (DEV-1032), this means the reply form continues to work.
    $('.message-form').data('ajax', 'ajax');

    // Add Reply.
    $('.message-form').on('form:submit', function() {
        saveMessage($(this));
    });

    // Update ticket custom fields
    $('.save-fields').on('click', function() {
        // Make sure data is valid before submitting
        if ($(this).parents('form').valid()) {
            // Get form data
            var data = $(this).parents('form').serializeArray();
            if (typeof $(this).data('token') !== 'undefined') {
                data.push({ name: 'token', value: $(this).data('token') });
            }

            // Post updated data
            $.ajax({
                url: laroute.route('ticket.frontend.ticket.saveFields', { 'number': $('input[name=ticket_number]').val() }),
                type: 'POST',
                data: data,
                dataType: 'json'
            }).done(function(response) {
                if (response.status == 'success') {
                    $('.ticket-update.success').show(500).delay(5000).hide(500);
                } else {
                    $('.ticket-update.fail').show(500).delay(5000).hide(500);
                }
            }).fail(function() {
                $('.ticket-update.fail').show(500).delay(5000).hide(500);
            });
        }
    });

    // Start polling for new replies
    pollReplies();
});

/*
 * Posts message to ticket
 */
function saveMessage(form) {
    // Make sure there is a message there
    form.find('textarea[name="text"]').valid();

    // Save data here before disabling fields
    var data = form.serializeArray();

    // Disable form and submit button
    form.find('textarea[name="text"]').prop('disabled', true);
    form.find('input[type="submit"]').prop('disabled', true);

    // Post updated data
    $.ajax({
        url: laroute.route('ticket.frontend.message.store'),
        type: 'POST',
        data: data,
        dataType: 'json'
    }).done(function(response) {
        if (response.status == 'success') {
            $('.ticket-reply.success').show(500).delay(5000).hide(500);

            // Show new message
            showMessage(response.data.view);

            // Reset the form
            form.find('textarea[name="text"]').val('').prop('disabled', false);
            redactor.redactor('code.set', '');
            $('.attached-files').find('li:not(:first)').remove();
            $('.attachment-details').find('input[type=hidden][name^="attachment["]:not(:first)').remove();

            // Update status
            $('.ticket-status').text(response.data.status_name);
            $('.ticket-status').css("background-color", response.data.status_colour);
        } else {
            if (typeof response.message != 'undefined' && response.message != '') {
                // Custom message
                $('.ticket-custom.fail').text(response.message).show(500).delay(5000).hide(500);
            } else {
                $('.ticket-reply.fail').show(500).delay(5000).hide(500);
            }
            // Re-enable textarea
            form.find('textarea[name="text"]').prop('disabled', false);
        }
    }).fail(function() {
        // Show error
        $('.ticket-reply.fail').show(500).delay(5000).hide(500);
        // Re-enable textarea
        form.find('textarea[name="text"]').prop('disabled', false);
    }).always(function() {
        // Reset form
        form.find('input[type="submit"]').prop('disabled', false);
    });
}

var lastReplyPoll;

/*
 * Poll for new replies
 */
function pollReplies() {
    $.ajax({
        url: laroute.route('ticket.frontend.message.poll'),
        data: {
            ticket_number: ticketNumber,
            token: $('meta[name="token"]').prop('content'),
            lastPoll: lastReplyPoll,
        },
        success: function (response) {
            // If there are notifications, show them
            if (typeof response.data != 'undefined') {
                if (response.data.messages.length) {
                    // Add each message
                    $.each(response.data.messages, function (index, value) {
                        showMessage(value);
                    });
                }

                // Update ticket details
                if (response.data.details.update) {
                    // Update sidebar items
                    $('.ticket-department').text(response.data.details.department);
                    $('.ticket-status').text(response.data.details.status);
                    $('.ticket-status').css('background-color', response.data.details.status_colour);
                    $('.ticket-priority').text(response.data.details.priority);
                    $('.ticket-priority').css('background-color', response.data.details.priority_colour);
                    $('.ticket-updated').html(response.data.details.updated_at);

                    // If closed, hide mark as resolved button
                    if (response.data.details.status_id == closedStatusId) {
                        $('.mark-resolved').hide();
                    } else {
                        $('.mark-resolved').show();
                    }

                    // If changed to locked or unlocked, refresh page
                    if (response.data.details.locked) {
                        if ($('.add-reply').length) {
                            location.reload();
                        }
                    } else {
                        if ($('.ticket-locked').length) {
                            location.reload();
                        }
                    }
                }

                // Refresh timeago.
                if (typeof timeAgo !== 'undefined') {
                    timeAgo.render($('time.timeago'));
                }
            }

            // Update the last poll time
            lastReplyPoll = response.timestamp;
        },
        dataType: "json",
        complete: function () {
            // Delay the next poll by 15 seconds
            pollTimeout = setTimeout(function () {
                pollReplies();
            }, 15000);
        }
    });
}

/*
 * Displays message and highlights it temporarily
 */
function showMessage(message) {
    // Show new message
    if (descReplyOrder) {
        message = $(message).prependTo($('.message-block'));
    } else {
        message = $(message).insertAfter($('.message').last());
    }

    // Load attachment previews if needed
    loadAttachmentPreviews(message);

    // Special effects
    message.css('border-left','3px solid #a4d0e9');
    setTimeout(function(){ message.css('border-left','0'); }, 10000);
    message.css('background','#e5f1f9');
    setTimeout(function(){ message.css('background',''); }, 10000);
}


/**
 * Load attachment previews within message div if needed.
 *
 * @param $message
 */
function loadAttachmentPreviews(message) {
    // Preview certain attachments
    $(message).find(".attachments").lightGallery({
        selector: '.attachment-preview',
        counter: false
    });

    // Load preview image if it exists
    $(message).find('span[data-preview-url]').each(function(index) {
        var $this = $(this);

        // Set it in image so it tries to download it
        $('<img>').attr("src", $this.data('preview-url')).prependTo($(this));

        // Handle image load/error
        $(this).find('img').on('load', function() {
            // Handler for .load() called.
            $this.find('.fa').remove();
        }).on('error', function() {
            // If 404 or other error
            // Replace preview link with download link
            $this.parents('a').removeClass('attachment-preview').attr('href', $this.data('download-url'));
            $this.parents('li').find('.preview-hover strong').html('<i class="fa fa-download"></i> &nbsp; '
                + Lang.get('general.download'));

            // Stop the lightbox working for this item
            var $lg = $this.parents('.attachments');
            $lg.data('lightGallery').destroy(true);
            $lg.lightGallery({
                selector: '.attachment-preview',
                counter: false
            });

            // Show the default icon
            $this.replaceWith('<span class="fiv-viv fiv-icon-' + $this.data('icon') + '"></span>');
        })

        $(this).removeAttr('data-preview-url');
    });
}
