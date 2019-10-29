/**
 * Functions to handle a specific ticket.
 *
 * @param parameters
 * @constructor
 */
function Ticket(parameters)
{
    "use strict";

    /**
     * Copy Link message identifiers.
     *
     * @type {string}
     */
    var NOTES_PLACEHOLDER = $('meta[name="notes-url-id"]').prop('content'),
        MESSAGE_PLACEHOLDER = $('meta[name="messages-url-id"]').prop('content');

    /**
     * Message drafts.
     *
     * @type {{newMessage: null, newNote: null, newForward: null}}
     */
    var drafts = {
        'newMessage': null,
        'newNote': null,
        'newForward': null
    };

    /**
     * If the Datatables have been loaded
     *
     * @type {{log: false, escalationRules: false}}
     */
    var datatablesLoaded = {
        'log': false,
        'escalationRules': false
    };

    /**
     * Show a success / failure message for a short period.
     */
    var showFeedback = function(failure)
    {
        failure = failure || false;

        $('.ticket-update.'+(failure ? 'fail' : 'success')).show(500).delay(5000).hide(500);
    };

    /**
     * Function to run every time a store / update message AJAX call is made.
     *
     * @param form
     */
    var always_message_handler = function(form)
    {
        // Reset form
        form.find('textarea').prop('disabled', false);
        form.find('input[type="submit"]').prop('disabled', false);

        // Remove draft related elements
        form.find('.draft-success, .discard-draft').hide();

        // If more than one message, show split ticket button and checkboxes
        if ($('.message').length > 1) {
            $('.split-ticket').fadeIn();
        }

        // If we have one or more CC email in the reply form, show the reply-all button, else hide it (if it's there)
        if ($('.message-form .cc-emails').is(':visible')) {
            if ($ccSelectize[0].selectize.getValue().length) {
                $('.message-form .recipients').addClass('with-cc');
                $('.message-form .recipients .reply-all').show();
            } else {
                $('.message-form .recipients').removeClass('with-cc');
                $('.message-form .recipients .reply-all').hide();
            }
        }
    };

    /**
     * Pre-process the createMessage and updateMessage form functions. This will return false
     * if the message should not be processed.
     *
     * @param $form
     * @param $redactor
     * @returns {boolean}
     */
    var handleMessageForm = function($form, $redactor)
    {
        if ($redactor.parent('.redactor-box').length) {
            var $textarea = $redactor.redactor('core.getTextarea'),
                textarea_id = $textarea.uniqueId().prop('id'),
                isEmpty = $textarea.redactor('utils.isEmpty', $textarea.redactor('code.get'));

            // Validation.
            // We're using manual validation here because jquery validate does not support multiple fields with the
            // same name. We use the same name for replies and notes so this causes a problem.
            if (isEmpty) {
                var error_id = textarea_id + '-error';

                // Make sure we don't duplicate the error message.
                if ($("#" + error_id).length == 0) {
                    $textarea.parents('.form-row, .edit-message').addClass('has-error');
                    $redactor.redactor('core.getBox').after(
                        '<span id="' + error_id + '" class="field-error">' +
                            Lang.get('validation.required', {'attribute': Lang.get('general.text').toLowerCase()}) +
                        '</span>'
                    );
                } else {
                    // If it already exists, show it.
                    $('#'+error_id).show();
                }

                return false;
            }
        } else {
            var textarea_id = $redactor.prop('id');
        }

        // Remove 'split' checkboxes from form data
        $form.find('input[name="split"]').remove();

        // We want to disable all textarea's except the one that we want to submit (otherwise serializeArray contains everything).
        $form.find('textarea:not(#'+textarea_id+')').prop('disabled', true);

        // Disable the submit button, so they don't submit multiple messages.
        $form.find('input[type="submit"]').prop('disabled', true);
    };

    /**
     * Create a new message reply to the user or new operator note.
     *
     * @param $form
     * @param $redactor
     * @returns {boolean}
     */
    this.createMessage = function($form, $redactor)
    {
        var self = this;

        // Validation & remove unnecessary items from the form.
        if (handleMessageForm($form, $redactor) === false) {
            return false;
        }

        // Now that we've modified the form, add the ticket id to the POST data.
        var data = $form.serializeArray();
        data.push({ name: 'ticket[0]', value: $form.find(':input[name=ticket_id]').val() });

        $.ajax({
            url: laroute.route('ticket.operator.message.store'),
            type: 'POST',
            data: data,
            dataType: 'json'
        }).done(function (response) {
            if (response.status != 'success') {
                showFeedback(true);
                $form.trigger("supportpal.new_message:failed");
                return;
            }

            // Add message
            showFeedback();
            showMessage(response.data.view);

            $form.trigger(
                "supportpal.new_message:success",
                [ $redactor.parent('.redactor-box').length ? $redactor.redactor('core.getTextarea') : $redactor ]
            );

            // Only clear the editor if it's a redactor instance
            if ($redactor.parent('.redactor-box').length) {
                // Clear current text
                $redactor.redactor('insert.set', '');
                $redactor.redactor('core.getTextarea').val('');

                // Only add the signature back to the message reply box (not notes).
                if ($form.find('input[name="reply_type"]').val() == '1') {
                    self.setNoteDraft(null);
                } else if ($form.find('input[name="reply_type"]').val() == '2') {
                    self.setForwardDraft(null);
                } else {
                    $redactor.redactor('insert.set', '');
                    $redactor.redactor('insert.html', signature, false);
                    self.setMessageDraft(null);
                }
            }

            // If posting a reply to the user, update the status in the notes and forwarding box.
            if ($form.find('input[name="reply_type"]').val() == '0') {
                $('.notes-form, .forward-form').find('select[name="to_status"]').val(
                    $('.message-form').find('select[name="to_status"]').val()
                );
            }

            // Clear ticket attachments
            $form.find('input[name^=attachment]:not(:first)').remove();
            $form.find('ul.attached-files').find('li:not(:first)').remove();

            // Redirect to the ticket grid
            if (response.data.redirect !== false) {
                window.location.href = response.data.redirect;
            }
        }).fail(function () {
            showFeedback(true);
        }).always(function () {
            always_message_handler($form);

            // Update log and escalation rules tables
            self.updateLogTable();
            self.updateEscalationsTable();
        });
    };

    /**
     * Edit an existing message.
     *
     * @param $form
     * @param $redactor
     */
    this.updateMessage = function($form, $redactor)
    {
        // Validation.
        if (handleMessageForm($form, $redactor) === false) {
            return false;
        }

        var self = this;

        $.ajax({
            url: $form.data('route'),
            type: 'PUT',
            data: $form.serializeArray(),
            dataType: 'json'
        }).done(function (response) {
            if (response.status != 'success') {
                showFeedback(true);
                return;
            }

            // Replace message view with response (we use the message ID in case it's a note as it could be showing in
            // two places).
            var message = $(response.data.view).replaceAll($('.message.message-' + $form.parents('.message').data('id')));

            // Show the edited message (otherwise it's collapsed).
            message.trigger('click');

            // Register email details.
            self.registerEmailDetails(message.find('.show-email-details'));

            // Update editor for editing this updated message
            showFeedback();
            redactor(message.find('textarea'));
        }).fail(function () {
            showFeedback(true);
        }).always(function () {
            always_message_handler($form);

            // Update log table
            self.updateLogTable();
        });
    };

    /**
     * AJAX load a large message into the view.
     *
     * @param $messageContainer
     * @param successCallback
     */
    this.loadMessage = function($messageContainer, successCallback)
    {
        // This holds the trimmed and original versions of the message.
        var $text = $messageContainer.find('.text');

        // If we're not currently in the processing of loading the message, and the message has not previously
        // been fetched then fire an AJAX request to load the message into the DOM.
        if (! $messageContainer.hasClass('loading') && ! $text.children('.original').hasClass('loaded')) {
            $messageContainer.find('.text').append(
                '<span class="loading-text description">'
                + '<i class="fa fa-spinner fa-pulse fa-fw"></i> ' + Lang.get('general.loading') + '...'
                + '</span>'
            );
            $messageContainer.addClass('loading');

            return $.get(laroute.route('ticket.operator.message.showJson', { id: $messageContainer.data('id') }))
                .done(function (ajax) {
                    // Load the message in, it should already be sanitized.
                    $text.children('.original')
                        .html(ajax.data.purified_text)
                        .addClass('loaded');

                    // Remove expandable - ONLY when expanding a message.
                    // We must do this after the content has been made visible to the user!
                    ticket.removeExpandable($messageContainer);

                    // Load attachment previews if needed.
                    ticket.loadAttachmentPreviews($messageContainer);

                    // Load redactor for edit-message if not already loaded
                    if (! $messageContainer.find('textarea').parents('.redactor-box').length) {
                        redactor($messageContainer.find('textarea'));
                    }

                    // Update the edit-message form text too.
                    $messageContainer.find('form.edit textarea[name="text"]').redactor('code.set', ajax.data.purified_text);

                    // If a callback exists, run it.
                    typeof successCallback === 'function' && successCallback();
                })
                .fail(function () {
                    swal(Lang.get('messages.error'), Lang.get('messages.error_loading_message'), 'error');
                })
                .always(function () {
                    // Unset loading icon.
                    $messageContainer.removeClass('loading');
                    $messageContainer.find('.text .loading-text').remove();
                });
        } else {
            // Message has already been loaded.

            // Remove expandable if there's no other text visible.
            ticket.removeExpandable($messageContainer);

            // Load attachment previews if needed.
            ticket.loadAttachmentPreviews($messageContainer);

            // Run success callback if exists.
            typeof successCallback === 'function' && successCallback();
        }
    };

    /**
     * Scroll to a message in the view.
     *
     * @param $message
     */
    this.scrollToMessage = function($message)
    {
        // AJAX load the message into the view.
        ticket.loadMessage($message);

        // Toggle collapsed state.
        if ($message.hasClass('collapsed')) {
            $message.toggleClass('collapsible collapsed').find('.text').children('.original, .trimmed').toggle();
        }

        // Scroll to the right position, offset based on what is showing. If no other operator viewing, ticket-viewing
        // outerHeight may be undefined so need to force it to 0.
        var position = $message.offset().top - ($('.ticket-viewing:visible').outerHeight() || 0);
        if ($(window).height() > 720) {
            position = position - $('#header').outerHeight() - $('.quick-actions').outerHeight();
        }

        $('html, body').animate({scrollTop: position}, 1000);
    };

    /**
     * Quote the specified message into the active reply box (message or note).
     *
     * @param $messageContainer
     */
    this.quoteMessage = function($messageContainer)
    {
        var message = $messageContainer.find('.text');

        // In case it's a collapsed message, get the original text
        if (message.children('.original').length) {
            message = message.children('.original');
        }

        // Put the HTML in a new container
        var $currentHtml = $('<div>').append(message.html());

        // Remove any currently quoted section in that message
        $currentHtml.find('.expandable, .supportpal_quote').remove();

        // Trim and convert break lines
        message = htmlDecodeWithLineBreaks($currentHtml.html()).trim();

        var length = 100;
        var finalText = '';

        // Split into lines
        for (var i = 0; i < message.length; i++) {

            // Trim the string to the maximum length
            var trimmedString = message.substr(i, length);

            // Check for a line break first
            var x = Math.min(trimmedString.length, trimmedString.indexOf("\n"));

            if (x >= 0) {
                // Trim up to the \n
                trimmedString = trimmedString.substr(0, x);
            } else if (trimmedString.length == length) {
                // Re-trim if we are in the middle of a word
                x = Math.min(trimmedString.length, trimmedString.lastIndexOf(" "));
                if (x >= 0) {
                    trimmedString = trimmedString.substr(0, x);
                }
            }

            // Progress pointer
            i += (x >= 0 ? x : length - 1);

            // Add string
            finalText += '> ' + trimmedString + '<br />';

        }

        // Which textarea is currently active
        var $textarea;
        if ($('.reply-type .option.active').data('type')) {
            $textarea = $('#newNote');
        } else {
            $textarea = $('#newMessage');
        }

        // Insert into the textarea where the cursor/caret currently is, sets to start if not in focus
        if (!$textarea.redactor('focus.isFocused')) {
            $textarea.redactor('focus.setStart');
        }

        $textarea.redactor('insert.html', finalText + '<br />');

        // Scroll to textarea
        $('html, body').animate({
            scrollTop: $('.reply-form').offset().top - 25
        }, 1000);
    };

    /**
     * Register email details.
     *
     * @param $element
     */
    this.registerEmailDetails = function($element)
    {
        $element.webuiPopover({ placement: 'vertical', padding: false, offsetTop: 2 });
    };

    /**
     * Get the drafts object.
     *
     * @returns {{newMessage: null, newNote: null}}
     */
    this.getDrafts = function()
    {
        return drafts;
    };

    /**
     * Set a new draft.
     *
     * @param key
     * @param value
     */
    this.setDraft = function(key, value)
    {
        drafts[key] = value;
    };

    /**
     * Check whether a draft is different to a given value.
     *
     * @param key
     * @param new_value
     * @returns {boolean}
     */
    this.draftHasChanged = function (key, new_value)
    {
        return new_value !== drafts[key] && new_value !== '';
    };

    /**
     * Determine whether the message draft has changed.
     *
     * @param new_value
     * @returns {boolean}
     */
    this.messageDraftHasChanged = function(new_value)
    {
        return this.draftHasChanged('newMessage', new_value);
    };

    /**
     * Set a new message to the user draft.
     *
     * @param message
     */
    this.setMessageDraft = function(message)
    {
        drafts.newMessage = message;
    };

    /**
     * Get the current message draft.
     *
     * @returns {string}
     */
    this.getMessageDraft = function()
    {
        return drafts.newMessage;
    };

    /**
     * Determine whether the notes has changed.
     *
     * @param new_value
     * @returns {boolean}
     */
    this.noteDraftHasChanged = function (new_value)
    {
        return this.draftHasChanged('newNote', new_value);
    };

    /**
     * Set a new message note draft.
     *
     * @param message
     */
    this.setNoteDraft = function(message)
    {
        drafts.newNote = message;
    };

    /**
     * Get the current note draft.
     *
     * @returns {string}
     */
    this.getNoteDraft = function()
    {
        return drafts.newNote;
    }

    /**
     * Determine whether the forward draft has changed.
     *
     * @param new_value
     * @returns {boolean}
     */
    this.forwardDraftHasChanged = function (new_value)
    {
        return this.draftHasChanged('newForward', new_value);
    };

    /**
     * Set a new forward draft.
     *
     * @param message
     */
    this.setForwardDraft = function(message)
    {
        drafts.newForward = message;
    };

    /**
     * Get the current forward draft.
     *
     * @returns {string}
     */
    this.getForwardDraft = function()
    {
        return drafts.newForward;
    }

    /**
     * Get if the ticket log table has been loaded yet.
     *
     * @returns {boolean}
     */
    this.isLogTableLoaded = function()
    {
        return datatablesLoaded.log;
    }

    /**
     * Refresh the log datatable if it's been loaded.
     *
     * @param {boolean} force
     */
    this.updateLogTable = function(force)
    {
        force = force || false;

        if (this.isLogTableLoaded() || force) {
            // Refresh the table
            $('#tabLog .dataTable').dataTable().api().ajax.reload(function () {
                datatablesLoaded.log = true;
            });
        }
    }

    /**
     * Get if the escalations table has been loaded yet.
     *
     * @returns {boolean}
     */
    this.isEscalationsTableLoaded = function()
    {
        return datatablesLoaded.escalationRules;
    }

    /**
     * Refresh the escalations rules datatable if it's been loaded.
     *
     * @param {boolean} force
     */
    this.updateEscalationsTable = function(force)
    {
        force = force || false;

        if (this.isEscalationsTableLoaded() || force) {
            // Refresh the table
            $('#tabEscalationRules .dataTable').dataTable().api().ajax.reload(function (data) {
                if (data.iTotalRecords > 0) {
                    // Show the tab if hidden and update the count of rules
                    $('.tabs #EscalationRules').show();
                } else {
                    // Switch to messages if we're currently on escalation rules
                    if ($('.tabs #EscalationRules').hasClass('active')) {
                        $('.tabs #Messages').trigger('click');
                    }
                    // Hide the tab as no more rules exist
                    $('.tabs #EscalationRules').hide();
                }

                datatablesLoaded.escalationRules = true;
            });
        }
    };

    /**
     * Check whether a message with the ID exists.
     *
     * @param id
     * @returns {boolean}
     */
    this.getMessage = function (id)
    {
        // id should be in the format notes-%ID% so we need to split it into those two components.
        var components = id.split('-');
        if (components.length !== 2) {
            return false;
        }

        // Check whether a note (displayed at the top) or a message has been requested.
        var notesOnly = components[0].toUpperCase() === NOTES_PLACEHOLDER.replace('-%ID%', '').toUpperCase();

        // Get messages.
        var messages = $('.message-' + components[1]).filter(function() {
            var len = $(this).prevAll('.messages-header').length;

            return notesOnly ? len === 0 : len > 0;
        });

        return messages.length >= 1 ? messages.first() : false;
    };

    /**
     * Get message ID for Copy Link functionality.
     *
     * @param $message
     * @returns {string}
     */
    this.getId = function ($message)
    {
        // If the .messages-header doesn't exist in the previous siblings then we've been given
        // a note that's displayed at the top of the page.
        if ($message.prevAll('.messages-header').length === 0) {
            return NOTES_PLACEHOLDER.replace('%ID%', $message.data('id'))
        } else {
            return MESSAGE_PLACEHOLDER.replace('%ID%', $message.data('id'));
        }
    };

    /**
     * Remove expandable if there's no content before it.
     *
     * @param $message
     */
    this.removeExpandable = function ($message)
    {
        var $quote = $message.find('.supportpal_quote:first');
        if ($quote.length === 0) {
            return;
        }

        var content = false,
            $original = $message.children('.text').children('.original'),
            $parent = $quote;

        // Loop backwards from the quote element back up to the original class
        while (! $parent.is($original)) {
            $parent = $parent.parent();

            // It needs to check if this container has any visible text in it (but not in invisible elements inside it)
            // https://stackoverflow.com/questions/1846177/how-do-i-get-just-the-visible-text-with-jquery-or-javascript
            var visibleText = $parent.find('*:not(:has(*)):visible').text(),
                textNodes = $parent.contents().filter(function () { return this.nodeType === 3; }).text();

            if (visibleText.trim().length || textNodes.trim().length) {
                content = true;
                break;
            }
        }

        // If no content found, remove the quote and expand button
        if (! content) {
            $quote.removeClass('supportpal_quote');
            $quote.prev('.expandable').remove();
        }
    };

    /**
     * Populate redactor with the specified messages to forward.
     *
     * @param $messages
     */
    this.forward = function ($messages)
    {
        // Switch to Forward tab.
        $('.reply-type .option[data-type="2"]').removeClass('fresh').show().trigger('click');

        // Delete any attachments currently tied to the form.
        var deferred = [];
        $('.forward-form .attached-files li:not(.hide) .deleteAttachment').each(function (index, element) {
            deferred.push(forwardFileUpload.deleteNewFile(element, true));
        });

        // Load any messages that need to be AJAX loaded.
        $messages.each(function (index, message) {
            deferred.push(ticket.loadMessage($(message)));
        });

        // Lock the interface and show a waiting spinner (this may take a while on a large ticket).
        swal({
            title: Lang.get('general.loading'),
            allowOutsideClick: false
        });
        swal.disableButtons();

        // Can't pass a literal array, so use apply.
        $.when.apply($, deferred).then(function () {
            // Grab the text of all prior messages (excluding notes).
            var subject = $(document).find('.subject').html().trim(),
                messages = [],
                attachments = [],
                failed_attachments = [];

            $messages.each(function (index, message) {
                var $message = $(message),
                    message_attachments = [];

                // Message has attachments.
                $message.find('.attachments ul li').each(function (index, attachment) {
                    var $attachment = $(attachment),
                        size = $attachment.find('.deleteAttachment').data('size'),
                        filename = $attachment.find('.hover-name').text().trim();

                    // If we've gone above the cumulative file size, don't attach any more.
                    forwardFileUpload.incrementTotalUploadedFileSize(size);
                    if (forwardFileUpload.totalUploadedFileSize() > forwardFileUpload.cumulativeMaxFileSize) {
                        forwardFileUpload.decrementTotalUploadedFileSize(size);
                        failed_attachments.push(filename);
                    } else {
                        attachments.push({
                            hash: $attachment.find('.deleteAttachment').data('hash'),
                            filename: filename,
                            size: size
                        });

                        message_attachments.push(filename);
                    }
                });

                messages.push(
                    '<strong>' + Lang.get('ticket.from') + ':</strong> ' + $message.find('.name').html().trim() + '<br />'
                    + '<strong>' + Lang.get('customfield.date') + ':</strong> ' + $message.find('time').prop('title') + '<br />'
                    + '<strong>' + Lang.get('ticket.subject') + ':</strong> ' + subject + '<br />'
                    + (message_attachments.length > 0
                    ? '<strong>' + Lang.choice('general.attachment', 2) + ':</strong> ' + message_attachments.join(', ') + '<br />'
                    : '')
                    + '<br />'
                    + $message.find('.text .original').html().trim()
                );
            });

            // Make forwarded message.
            var message = signature
                + '<br /><br />'
                + '<div class="expandable"></div>'
                + '<div class="supportpal_quote">'
                + '<span>' + Lang.get('ticket.forwarded_message') + '</span><br />'
                + messages.join('<br /><br />')
                + '</div>';

            $('#newForward').redactor('insert.set', '');
            $('#newForward').redactor('insert.html', message, false);
            $('#newForward').redactor('focus.setStart');

            // Set attachments.
            for (var i = 0; i < attachments.length; i++) {
                var filename = attachments[i].filename,
                    hash = attachments[i].hash,
                    $item = forwardFileUpload.addFile(filename, attachments[i].size);

                forwardFileUpload.registerFile($item, filename, hash);
            }

            // Show an alert of which attachments we failed to attach.
            if (failed_attachments.length > 0) {
                swal({
                    title: Lang.get('messages.failed_attachments'),
                    html: failed_attachments.join(', ') + '<br /><br />'
                    + Lang.get('core.attachment_limit_reached', {size: forwardFileUpload.cumulativeMaxFileSize.fileSize()}),
                    type: 'info'
                });
            } else {
                // Close the please wait modal...
                swal.closeModal();
            }

            // Update draft message variable so it doesn't save a draft automatically
            // Redactor is a bit slow to update so have to delay it slightly
            setTimeout(function() {
                ticket.setForwardDraft($('.forward-form textarea:not(.CodeMirror textarea):eq(0)').redactor('code.get'));
            }, 1000);
        });
    }

    /**
     * Load attachment previews within message div if needed.
     *
     * @param $message
     */
    this.loadAttachmentPreviews = function ($message)
    {
        // Preview certain attachments
        $($message).find(".attachments").lightGallery({
            selector: '.attachment-preview',
            counter: false
        });

        // Load preview image if it exists
        $($message).find('span[data-preview-url]').each(function(index) {
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
}

$(document).ready(function() {

    pollReplies();

    // Expand quoted areas
    $(document).on('click', '.expandable', function () {
        $(this).next().toggle('show');
    });

    // Open links in a new window/tab
    $(document).on('click', '.message .text a', function() {
        $(this).attr('target', '_blank');
    });

    // Reply type
    $('.reply-type .option').on('click', function() {
        // Change active option
        $('.reply-type .option.active').removeClass('active');
        $(this).addClass('active');

        // Determine whether to show the notes or reply form.
        var $form;
        switch ($(this).data('type')) {
            case 1:
                $form = $('.notes-form');
                break;

            case 2:
                $form = $('.forward-form');

                // If it's not been used before, forward the whole ticket.
                if ($(this).hasClass('fresh')) {
                    // Choose right message depending on reply order.
                    var $message;
                    if (replyOrder == 'ASC') {
                        $message = $('#tabMessages .message:not(.note, .forward):last');
                    } else {
                        $message = $('#tabMessages .message:not(.note, .forward):first');
                    }

                    $message.find('a.forward-from-here').trigger('click');
                }

                break;

            default:
                $form = $('.message-form:not(.edit)');
        }

        // Show the correct form.
        $('.message-form:not(.edit), .notes-form, .forward-form').hide();
        $form.show();
    });

    // Process take button
    $('.take-ticket').on('click', function() {
        ticketAction(laroute.route('ticket.operator.action.take'));
    });
    // Process close button
    $('.close-ticket').on('click', function() {
        ticketAction(laroute.route('ticket.operator.action.close'));
        $(document).ajaxStop(function () {
            // Go back to ticket grid
            window.location.href = ticketGridUrl;
        });
    });
    // Process lock button
    $('.lock-ticket').on('click', function() {
        ticketAction(laroute.route('ticket.operator.action.lock'));
        $(document).ajaxStop(function () {
            // Go back to ticket grid
            window.location.href = ticketGridUrl;
        });
    });
    // Process unlock button
    $('.unlock-ticket').on('click', function() {
        ticketAction(laroute.route('ticket.operator.action.unlock'));
    });
    // Process watch button
    $('.watch-ticket').on('click', function() {
        ticketAction(laroute.route('ticket.operator.action.watch'));
        $('.watch-ticket').hide();
        $('.unwatch-ticket').show();
    });
    // Process unwatch button
    $('.unwatch-ticket').on('click', function() {
        ticketAction(laroute.route('ticket.operator.action.unwatch'));
        $('.watch-ticket').show();
        $('.unwatch-ticket').hide();
    });

    $('.restore-ticket').on('click', function () {
        restoreTicket();
    });

    // Process delete button
    $('.delete-forever-ticket').on('click', function () {
        deleteTicket(false, true);
    });
    $('.delete-ticket').on('click', function() {
        deleteTicket(false, false);
    });
    // Process block button
    $('.block-ticket').on('click', function() {
        deleteTicket(true, false);
    });

    // Handle message actions button to show dropdown
    $(document).on('click', '.message-actions .button', function(e) {
        var $message = $(this).parents('.message');

        // Don't collapse message if it's currently open
        // However we need to stop the propagation so the dropdown doesn't close itself
        if (! $message.hasClass('collapsible')) {
            $message.trigger('click');
        }
        e.stopPropagation();

        $(this).parent().find('.dropdown').toggle();
    });

    // Message actions
    $(document).on('click', '.message-actions .dropdown li', function() {
        // Hide dropdown
        $(this).parents('.dropdown').hide();
    });

    // Toggle edit form
    $(document.body).on('click', '.edit-button', function(event) {
        var $message = $(this).parents('.message');

        // Don't collapse message if it's currently open
        if ($message.hasClass('collapsible')) {
            event.stopPropagation();
        }

        if ($message.find('.text .original').hasClass('clipped')) {
            // Message is too big, so load the "View entire message" window.
            var url = $message.find('.text .original a.supportpal_clipped_vem').prop('href');
            window.open(url + '?edit=true');
        } else {
            // AJAX load the message if it hasn't already been loaded.
            var successCallback = function () {
                // Initialise redactor.
                if (! $message.find('textarea').parents('.redactor-box').length) {
                    redactor($message.find('textarea'));
                }

                $message.find('.text, .edit-message').toggle();

                // Focus the textarea, when editing the message.
                if ($message.find('.edit-message').is(':visible')) {
                    $message.find('textarea:not(.CodeMirror textarea):eq(0)').redactor('focus.setStart');
                }
            };

            ticket.loadMessage($message, successCallback);
        }
    });

    // Delete ticket message
    $(document.body).on('click', '.delete-confirm', function(event) {
        // Don't collapse or expand message
        event.stopPropagation();

        // Save the delete route and message ID
        var deleteRoute = $(this).data('route');
        var messageId = $(this).data('id');

        // Show the alert
        swal(deleteAlert.getDefaultOpts(Lang.choice('general.message', 1)), function(isConfirm) {
            if (isConfirm) {
                // Disable submit button
                deleteAlert.disableButtons();
                // Delete record and reload table if successful
                $.ajax({
                    url: deleteRoute,
                    type: 'DELETE',
                    dataType: 'json',
                    success: function(response) {
                        if (response.status == 'success') {
                            $('.ticket-update.success').show(500).delay(5000).hide(500);
                            // Close alert
                            swal.closeModal();
                            // Remove message from view
                            $('.message-' + messageId).remove();
                            if (!$('.message').length) {
                                // No more messages exist, ticket will likely have been deleted, redirect to grid
                                // We use replace() here as we don't want them to click back to ticket.
                                window.location.replace(ticketGridUrl);
                            }
                            if (!$('.note').length) {
                                // No more notes, hide the headers
                                $('.notes-header, .messages-header').hide();
                            }
                        } else {
                            $('.ticket-update.fail').show(500).delay(5000).hide(500);
                            // Close alert
                            swal.closeModal();
                        }
                    },
                    error: function() {
                        $('.ticket-update.fail').show(500).delay(5000).hide(500);
                        // Close alert
                        swal.closeModal();
                    }
                });
            }
        });

    });

    $(document).on('click', '.link-ticket', function (event) {
        // Don't collapse or expand message
        event.stopPropagation();
        event.preventDefault();

        // Go to link.
        window.location.href = $(this).data('href');
    });

    $(document).on('click', 'a.forward-message', function (event) {
        // Don't collapse or expand message
        event.stopPropagation();
        event.preventDefault();

        ticket.forward($(this).parents('.message'));
    });

    $(document).on('click', 'a.forward-from-here', function (event) {
        // Don't collapse or expand message
        event.stopPropagation();
        event.preventDefault();

        // Uncollapse messages first
        $('.collapsed-messages').trigger('click');

        // Fetch the list of messages from this one based on the reply order
        var $messages;
        if (replyOrder == 'ASC') {
            $messages = $(this).parents('.message').prevUntil('#tabMessages', '.message:not(.note, .forward)').addBack();
        } else {
            $messages = $(this).parents('.message').nextUntil('#tabMessages', '.message:not(.note, .forward)').addBack();
        }

        ticket.forward($messages);
    });

    /*
     * Handle updating the ticket side bar
     */
    var $ticketDetails = $('.ticket-details');
    $ticketDetails.find('select[name=priority]').on('change', function() {
        updateTicket($(this).serializeArray());
    });

    $ticketDetails.find('select[name=department]').on('change', function() {
        changeDepartment({ department_id: $(this).val() });
    });

    $ticketDetails.find('select[name=status]').on('change', function() {
        if (typeof closedStatusId !== 'undefined' && $(this).val() == closedStatusId) {
            // If they closed the ticket, we want to handle this differently...
            ticketAction(laroute.route('ticket.operator.action.close'));
            $(document).ajaxStop(function () {
                // Update escalation rules table
                ticket.updateEscalationsTable();
            });
        } else {
            updateTicket($(this).serializeArray());
        }

        // Update the status in the notes box.
        $('.notes-form, .forward-form').find('select[name="to_status"]').val($(this).val());
    });

    // Update SLA plan
    $('select[name="slaplan"]').on('change', function() {
        // Post data
        $.post(
            laroute.route('ticket.operator.ticket.updateSlaPlan', { id: ticketId }),
            { slaplan: $(this).val() },
        function(response) {
            if (response.status == 'success') {
                $('.ticket-update.success').show(500).delay(5000).hide(500);
                // Show escalation rules tabs if we have any
                if (response.data.escalationrules) {
                    $('.tabs #EscalationRules').show();
                } else {
                    $('.tabs #EscalationRules').hide();
                }
                // Update due time
                $('.edit-duetime').html(response.data.time);
                // If it says 'set a due time', hide the trash can icon, else show it
                if (response.data.time == Lang.get('ticket.set_due_time')) {
                    $('.update-duetime .remove-duetime').hide();
                } else {
                    $('.update-duetime .remove-duetime').show();
                }
                // Update log and escalation rules tables
                ticket.updateLogTable();
                ticket.updateEscalationsTable();
            } else {
                $('.ticket-update.fail').show(500).delay(5000).hide(500);
            }
        }, "json").fail(function() {
            $('.ticket-update.fail').show(500).delay(5000).hide(500);
        });
    });

    // Update due time
    $('.edit-duetime').on('click', function() {
        $('.update-duetime').toggle();
    });
    $('.update-duetime button').on('click', function() {
        var date, time;

        // Are we updating or removing?
        if ($(this).hasClass('update')) {
            date = $('input[name="duetime_date"]').val();
            time = $('input[name="duetime_time"]').val();
        }

        // Post data
        $.post(
            laroute.route('ticket.operator.ticket.updateDueTime', { id: ticketId }),
            {
                duetime_date: date,
                duetime_time: time
            },
        function(response) {
            if (response.status == 'success') {
                $('.ticket-update.success').show(500).delay(5000).hide(500);
                // Update due time and hide form
                $('.edit-duetime').html(response.data);
                $('.update-duetime').hide();
                // If it says 'set a due time', hide the trash can icon, else show it
                if (response.data == Lang.get('ticket.set_due_time')) {
                    $('.update-duetime .remove-duetime').hide();
                } else {
                    $('.update-duetime .remove-duetime').show();
                }
                // Update log and escalation rules tables
                ticket.updateLogTable();
                ticket.updateEscalationsTable();
            } else {
                $('.ticket-update.fail').show(500).delay(5000).hide(500);
            }
        }, "json").fail(function() {
            $('.ticket-update.fail').show(500).delay(5000).hide(500);
        });
    });

    // Update ticket custom fields
    $('.save-fields').on('click', function() {
        var data = $(this).parents('form').serializeArray();
        updateTicket(data);
    });

    // Forward message.
    $(document.body).on('submit', '.forward-form', function(event) {
        event.preventDefault();

        // Make sure we have at least one recipient to forward the message to.
        if ($forwardToSelectize[0].selectize.getValue().length === 0
            && $forwardCcSelectize[0].selectize.getValue().length === 0
            && $forwardBccSelectize[0].selectize.getValue().length === 0
        ) {
            swal(Lang.get('messages.error'), Lang.get('ticket.at_least_one_recipient'), 'error');
        } else {
            ticket.createMessage($(this), $('#newForward'));
        }
    });

    // Reset the forwarding form after posting a message.
    $(document).on('supportpal.new_message:success', 'form.forward-form', function (event, $textarea) {
        // Reset address boxes.
        $forwardToSelectize[0].selectize.clear(true);
        $forwardCcSelectize[0].selectize.clear(true);
        $forwardBccSelectize[0].selectize.clear(true);

        // Reset subject.
        $(this).find('input[name="subject"]').val('FW: ' + $('<div/>').html($(document).find('.subject').html()).text().trim());
    });

    // Update message
    $(document.body).on('submit', '.message-form, .notes-form', function(event) {
        event.preventDefault();

        // If it's an edit or new message
        if ($(this).hasClass('edit')) {
            ticket.updateMessage($(this), $(this).find('textarea:not(.CodeMirror textarea):eq(0)'));
        } else {
            var selector = $(this).find('input[name="reply_type"]').val() == 1 ? '#newNote' : '#newMessage';

            ticket.createMessage($(this), $(selector));
        }
    });

    /*
     * Update subject
     */
    var subject = $('.edit-subject').val(),
        updateSubject = function (context) {
            // Only update if different
            if (subject !== $(context).val()) {
                // Hide input and show new subject
                $(context).hide();
                $('.subject').text($(context).val()).show();

                // Post data to perform action
                var url = laroute.route('ticket.operator.ticket.updateSubject', { id: ticketId });
                $.post(url, { subject: $(context).val() })
                    .done(function (response) {
                        if (response.status == 'success') {
                            $('.ticket-update.success').show(500).delay(5000).hide(500);
                            // Update subject
                            subject = $('.edit-subject').val();
                        } else {
                            $('.ticket-update.fail').show(500).delay(5000).hide(500);
                            // Show old subject
                            $('.subject').text(subject);
                        }
                    })
                    .fail(function () {
                        $('.ticket-update.fail').show(500).delay(5000).hide(500);
                        // Show old subject
                        $('.subject').text(subject);
                    });
            } else {
                // Hide input and show old subject
                $(context).hide();
                $('.subject').show();
            }
        };

    // Show edit input
    $('.subject').on('click', function() {
        var self = this;
        setTimeout(function() {
            var selectedText = "";
            if (document.selection && document.selection.createRange) {
                selectedText = document.selection.createRange().text || "";
            }
            if (window.getSelection) {
                selectedText = window.getSelection().toString();
            }

            // If they haven't selected any text, then show the edit form.
            if (selectedText === "") {
                $(self).hide();
                $('.edit-subject').show().trigger('focus');
            }
        }, 250);
    });

    $('.edit-subject')
        .on('keyup', function (e) {
            if (e.keyCode === 13) {
                updateSubject(this);
            }
        })
        .on('focusout', function () {
            updateSubject(this);
        });
    /*
     * END update subject
     */

    /*
     * Split to new ticket
     */
    // If more than one message, show split ticket button and checkboxes
    if ($('.messages-header').nextAll('.message').length > 1) {
        $('input.split-ticket').show();
    }

    // Enable button if at least one checkbox ticked
    $(document.body).on('click', 'input.split-ticket', function(event) {
        event.stopPropagation();

        // Ensure if notes, any other instances of same message is ticked
        $('input.split-ticket[data-id="' + $(this).data('id') + '"]').prop('checked', $(this).prop('checked'));

        // Show button if at least one is ticked
        if ($('input.split-ticket:checked').length) {
            $('.split-ticket-button').fadeIn();
            $('.split-ticket-button button').prop('disabled', false);
        } else {
            $('.split-ticket-button').fadeOut();
            $('.split-ticket-button button').prop('disabled', true);
        }
    });

    // Split checked messages to a new ticket
    $('.split-ticket-button button').on('click', function() {
        var selected = '';
        // Add checked fields to form
        $('input.split-ticket:checked').each(function() {
            selected += $(this).data('id') + ',';
        });
        $('<input>').attr({
            type: 'hidden',
            name: 'message_id',
            value: selected.slice(0, -1)
        }).appendTo($(this).parent());
        // Submit form
        $(this).parent().trigger('submit');
    });
    /*
     * END Split to new ticket
     */

    // Hide group with split/expand buttons when going to another tab
    $('ul.tabs').on('click', 'li', function() {
        if ($(this).is('#Messages') && $(window).width() > 720) {
            // Only show it if window screen is above 720px in width
            $('.messages-button-group').show();
        } else {
            $('.messages-button-group').hide();
        }
    });

    /*
     * Scroll to message
     */
    var hash = window.location.hash.substring(1),
        $message = ticket.getMessage(hash),
        scrollToMessage = false;
    if ($message !== false) {
        // Remove the collapsed class if the URL wants to scroll to a specific message (/view/18#message-2).
        scrollToMessage = true;

        // Wait 1 seconds to start, due to page moving about
        setTimeout(function() {
            ticket.scrollToMessage($message);
        }, 1000);
    }

    $(document).on('click', '.link-message', function(event) {
        var $message = $(this).parents('.message'),
            id = ticket.getId($message),
            url = laroute.route('ticket.operator.ticket.show', {'view': ticketId}) + '#' + id;

        // Don't expand or collapse message, but close dropdown
        event.stopPropagation();
        $message.find('.message-actions .dropdown').hide();

        // Update URL (and don't jump to top)
        var scrollmem = $('html,body').scrollTop();
        window.location.hash = id;
        $('html, body').scrollTop(scrollmem);

        // Scroll to message
        ticket.scrollToMessage($message);

        // Copy URL
        var $temp = $("<input>");
        $('body').append($temp);
        $temp.val(url).trigger('select');
        document.execCommand('copy');
        $temp.remove();
    });
    /*
     * END Scroll to message
     */

    /*
     * Toggle long tickets (>5 messages)
     */

    // Remove expandable from visible messages.
    $('.collapsible').each(function () {
        ticket.removeExpandable($(this));
    });

    // Collapsing or opening message
    $(document).on('click', '#tabMessages .collapsed, #tabMessages .collapsible .header', function() {
        // Get right object
        var $this = $(this);
        if ($this.parents('.collapsible').length) {
            $this = $this.parent();
        }

        // AJAX load the message into the view.
        ticket.loadMessage($this);

        // Toggle between collapsed and collapsible mode
        $this.find('.text').children('.original, .trimmed').toggle();
        $this.toggleClass('collapsible collapsed');
    });

    // Collapse tickets with more than 2 collapsed messages
    if ($('.message.collapsed').length > 2 && ! scrollToMessage) {
        // Staff notes and ticket content regions of the screen
        var regions = [ ".notes-header", ".messages-header" ];

        for (var i = 0; i < regions.length; i++) {
            // Build the basic selector
            var basicSelector = $(regions[i] + ' ~ .message.collapsed');
            if (regions[i] == ".notes-header")
                basicSelector = $(regions[i]).nextUntil('.messages-header', '.message.collapsed');

            // If this region of the screen has more than 2 collapsed messages, let's shrink it!
            if (basicSelector.length > 2) {
                // Group the middle section of messages and hide them
                var items;
                if (replyOrder == 'ASC') {
                    items = basicSelector.not(':first').not(':eq(-1)');
                } else {
                    items = basicSelector.not(':last').not(':eq(0)');
                }

                items.wrapAll(
                    "<div class='collapsed-messages'><span>" + Lang.get('ticket.older_messages', {'count': items.length}) + "</span></div>"
                );
            }
        }

        $('.collapsed-messages').children().children().hide();

        // Make the new hidden group displayable again
        $('.collapsed-messages').on('click', function(event) {
            $(this).find('.message').show();
            $(this).children().children().insertBefore($(this));
            $(this).remove();
        });
    }
    /*
     * END Toggle long tickets (>5 messages)
     */

    /*
     * Expand/collapse all messages
     */
    // Show button that allows expanding all if more than 2 messages
    if ($('.message').length > 2) {
        $('.expand-messages').show();
    }

    // Expand/collapse all messages on click
    $('.expand-messages, .collapse-messages').on('click', function() {
        if ($(this).hasClass('expand-messages')) {
            $('.collapsed-messages').trigger('click');
            $('#tabMessages .collapsed').trigger('click');
        } else {
            $('#tabMessages .collapsible .header').trigger('click');
        }
        $('.expand-messages, .collapse-messages').toggle();
    });
    /*
     * END Expand/collapse all messages
     */

    /*
     * Show ticket attachment previews
     */
    ticket.loadAttachmentPreviews($('.message.collapsible'));
    /*
     * END Show ticket attachment previews
     */

    /*
     * Saving drafts automatically
     */
    function saveDraft($form, type) {
        var message = $form.find('textarea:not(.CodeMirror textarea):eq(0)').redactor('code.get');

        // Update draft message variable
        if (type == '1') {
            ticket.setNoteDraft(message);
        } else if (type == '2') {
            ticket.setForwardDraft(message);
        } else {
            ticket.setMessageDraft(message);
        }

        // Make AJAX data.
        var data = {
            ticket: [ ticketId ],
            reply_type: type,
            is_draft: 1,
            text: message,
            from_address: type == '2' ? $form.find('select[name="from_address"]').val() : null,
            to_address: type == '2' ? $form.find('select[name="to_address[]"]').val() : null,
            cc_address: type == '2' ? $form.find('select[name="cc_address[]"]').val() : null,
            bcc_address: type == '2' ? $form.find('select[name="bcc_address[]"]').val() : null,
            subject: type == '2' ? $form.find('input[name="subject"]').val() : null
        };

        // Add attachments to AJAX data.
        $($form.find('input[name^="attachment["]:not(:disabled)').serializeArray()).each(function(index, obj) {
            data[obj.name] = obj.value;
        });

        // Call the ajax to save draft
        $.ajax({
            method: 'POST',
            url: laroute.route('ticket.operator.message.store'),
            data: data,
            success: function(response) {
                if (typeof response.status !== 'undefined' && response.status == 'success') {
                    // Show saved message
                    $form.find('.draft-success').text(response.message).show();
                    // Show discard button
                    $form.find('.discard-draft').show();
                    // Add attachment-id data to each attachment.
                    var attachments = response.data.attachments;
                    for (var upload_hash in attachments) {
                        if (! attachments.hasOwnProperty(upload_hash)) {
                            continue;
                        }

                        var id = attachments[upload_hash];
                        $form.find('.deleteAttachment').each(function () {
                            if ($(this).data('hash') === upload_hash || $(this).prop('data-hash') === upload_hash) {
                                $(this).data('attachment-id', id);
                            }
                        });
                    }
                }
            },
            dataType: "json"
        });
    }

    (function autoSaveDraft(pass) {
        // Only if draft button is available on either reply or note form
        if ($('.save-draft').length) {
            // Skip first time - redactor changes HTML after page load
            if (pass) {
                var drafts = ticket.getDrafts();

                // Check both message drafts and note drafts.
                for (var redactor_id in drafts) {
                    var $textarea = $('#'+redactor_id),
                        $form = $textarea.parents('form');

                    // Only if it's a redactor editor (e.g. not for Twitter replies)
                    if ($($textarea).siblings('.redactor-editor').length) {
                        // skip loop if the property is from prototype
                        if (!drafts.hasOwnProperty(redactor_id) || $form.find('input[type="submit"]').prop('disabled')) {
                            continue;
                        }

                        // Get the draft message.
                        var draftMessage = drafts[redactor_id];

                        if (draftMessage == null) {
                            // Save current message
                            ticket.setDraft(redactor_id, $textarea.redactor('code.get'));
                        } else {
                            var currentMessage = $textarea.redactor('code.get');

                            // Check if message has changed
                            if (ticket.draftHasChanged(redactor_id, currentMessage)) {
                                // Disable button while saving
                                $form.find('.save-draft').prop('disabled', true);

                                // Save draft
                                saveDraft($form, $form.find('input[name="reply_type"]').val());

                                // Re-enable button
                                $form.find('.save-draft').prop('disabled', false);
                            }
                        }
                    }
                }

                // Delay the next poll by 30 seconds
                setTimeout(function() {
                    autoSaveDraft(true);
                }, 30000);
            } else {
                // Wait 2 seconds to start, due to redactor changing HTML
                setTimeout(function() {
                    autoSaveDraft(true);
                }, 2000);
            }
        }
    })();
    /*
     * END Saving drafts automatically
     */

    // Save draft button
    $('.save-draft').on('click', function(e) {
        var $form = $(this).parents('form'),
            replyType = $form.find('input[name="reply_type"]').val();

        saveDraft($form, replyType);
    });

    // Discard draft button
    $('.discard-draft').on('click', function() {
        // Post data to perform action
        var $form = $(this).parents('form'),
            replyType = $form.find('input[name="reply_type"]').val(),
            params = { ticket_id: ticketId, reply_type: replyType };

        // Delete any attachments currently showing
        $form.find('input[name="attachment[]"]:not(:first)').remove();
        $form.find('.attached-files li:not(.hide) .deleteAttachment').attr('data-silent', true).trigger('click');

        $.post(laroute.route('ticket.operator.message.discard'), params, function(response) {
            if (response.status == 'success') {
                $('.ticket-update.success').show(500).delay(5000).hide(500);

                // Clear redactor
                if (replyType == 1) {
                    $('#newNote').redactor('insert.set', '');
                    ticket.setNoteDraft(null);
                } else if (replyType == 2) {
                    $('#newForward').redactor('insert.set', '');
                    $('.reply-type .option[data-type="2"]').addClass('fresh');
                    ticket.setForwardDraft(null);
                } else {
                    $('#newMessage').redactor('insert.set', '');
                    $('#newMessage').redactor('insert.html', signature, false);
                    $('#newMessage').redactor('focus.setStart');
                    ticket.setMessageDraft(null);
                }

                // Hide button
                $form.find('.discard-draft, .draft-success').hide();
            } else {
                $('.ticket-update.fail').show(500).delay(5000).hide(500);
            }
        }, "json").fail(function() {
            $('.ticket-update.fail').show(500).delay(5000).hide(500);
        });
    });

    // Apply macro
    $('.apply-macro').on('click', function() {
        var text = he.encode($(this).text()),
            description = he.encode($(this).data('description')),
            data = $(this).data('macro');

        // Show the alert
        swal({
            title: Lang.get('ticket.run_macro'),
            html: Lang.get('ticket.run_macro_desc', {'macro': text, 'description': description}),
            type: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3B91CE",
            confirmButtonText: Lang.get('general.run'),
            closeOnConfirm: false
        }, function(isConfirm) {
            if (isConfirm) {
                // Disable submit button
                swal.disableButtons();

                // Apply macro
                applyMacro(data);

                // Close modal
                swal.closeModal();
            }
        });
    });

    // Hide reply all dropdown if clicking outside the dropdown div
    $(document).on('click', function() {
        $('.dropdown-container .dropdown:visible').hide();
    });

    // Handle reply all button to show dropdown
    $('.reply-all .button').on('click', function(e) {
        // This stops it closing from the code above.
        e.stopPropagation();

        $(this).parent().find('.dropdown').toggle();
    });

    // Reply all
    $('.reply-all .dropdown li').on('click', function() {
        var value = $(this).data('value');

        // Update reply_all input
        $('input[name="reply_all"]').val(value);

        // Change active dropdown option
        $(this).parent().find('li').removeClass('selected');
        $(this).addClass('selected');

        // Update icon in button and show/hide CC emails based on value
        $(this).parents('.reply-all').find('.button .icon .fa').removeClass('fa-reply fa-reply-all');
        if (value == '1') {
            $(this).parents('.reply-all').find('.button .icon .fa').addClass('fa-reply-all');
            $('.cc-emails').show();
        } else {
            $(this).parents('.reply-all').find('.button .icon .fa').addClass('fa-reply');
            $('.cc-emails').hide();
        }

        // Hide dropdown
        $(this).parents('.dropdown').hide();
    });

    // From email input
    var fromSelectizeConfig = {
        persist: false,
        dropdownParent: 'body',
        plugins: ['disableDelete']
    };
    $('select[name="department_email"]').selectize(fromSelectizeConfig);

    // CC email input
    var enablePlugins = ['restore_on_backspace', 'remove_button', 'max_items'];
    $ccSelectize = $('.message-form select[name="cc[]"]').selectize($.extend({ }, emailSelectizeConfig(enablePlugins), {
        render: {
            item: function(item, escape) {
                return '<div class="item' + (item.unremovable ? ' unremovable' : '') + '">' + escape(item.value) + '</div>';
            },
            option: function(item, escape) {
                // pollReplies doesn't return full user attributes.
                if (! item.email) {
                    return '<div>' + escape(item.value) + '</div>';
                }

                return '<div>' +
                    '<img class="avatar" src="' + escape(item.avatar_url) + '" width="16" /> &nbsp;' +
                    escape(item.formatted_name) + (item.organisation ? ' (' + escape(item.organisation || '') + ')' : '') +
                    (item.email ? '<br /><span class="description">' + escape(item.email || '') + '</span>' : '') +
                    '</div>';
            }
        },
        load: function(query, callback) {
            if (!query.length) return callback();

            // Search for users
            $.get(laroute.route('user.operator.search'), { brand_id: brandId, q: query })
                .done(function(res) {
                    // Remove user from list if included.
                    res.data = res.data
                        .filter(function(user) {
                            return user.id != userId;
                        })
                        .map(function(value) {
                            // Add needed info for search and selected item to work.
                            value.value = value.email;
                            value.text = value.firstname + ' ' + value.lastname + ' <' + value.email + '>';
                            return value;
                        });

                    callback(res.data);
                })
                .fail(function() { callback(); });
        },
        onChange: function(input) {
            if (! input) {
                // In case of removing all emails
                input = [];
            }
            // Detach and re-attach the list of CC addresses
            $.post(laroute.route('ticket.operator.ticket.updateCc', { id: ticketId }), { 'cc': input } )
                .done(function(data) {
                    if (data.status == 'success') {
                        $('.ticket-update.success').show(500).delay(5000).hide(500);
                        return;
                    }

                    // Else, an error occurred
                    $('.ticket-update.fail').show(500).delay(5000).hide(500);
                })
                .fail(function(data) {
                    $('.ticket-update.fail').show(500).delay(5000).hide(500);
                });
        },
        onDelete: function(input) {
            var self = this;
            $.each(input, function(key, value) {
                // Delete any items selected that don't have a 'unremovable' class.
                if (! $('.cc-emails div[data-value="' + value + '"]').hasClass('unremovable')) {
                    self.removeItem(value);
                    self.removeOption(value);
                }
            });

            // We handle the deletions above, no need to carry on with deleteSelect()
            return false;
        }
    }));

    // Show CC email input
    $('.add-cc').on('click', function() {
        $('.cc-emails').toggle();
        $('.add-cc').hide();
    });

    /**
     * Initialise Forward tab.
     */
    var userSearchSelectizeConfig = {
        render: {
            item: function(item, escape) {
                return '<div class="item' + (item.unremovable ? ' unremovable' : '') + '">' + escape(item.value) + '</div>';
            },
            option: function(item, escape) {
                return '<div>' +
                    '<img class="avatar" src="' + escape(item.avatar_url) + '" width="16" /> &nbsp;' +
                    escape(item.formatted_name) + (item.organisation ? ' (' + escape(item.organisation || '') + ')' : '') +
                    (item.email ? '<br /><span class="description">' + escape(item.email || '') + '</span>' : '') +
                    '</div>';
            }
        },
        load: function(query, callback) {
            if (!query.length) return callback();

            // Hide Add CC / Add BCC to stop spinner from overlapping.
            var $elements = $('.add-cc:visible, .add-bcc:visible');
            $elements.hide();

            // Search for users
            $.get(laroute.route('user.operator.search'), { brand_id: brandId, q: query })
                .done(function(res) {
                    res.data = res.data.map(function(value) {
                        // Add needed info for search and selected item to work.
                        value.value = value.email;
                        value.text = value.firstname + ' ' + value.lastname + ' <' + value.email + '>';
                        return value;
                    });

                    callback(res.data);
                })
                .fail(function() { callback(); })
                .always(function () {
                    $elements.show();
                });
        }
    },
        $forwardFromSelectize = $('select[name="from_address"]').selectize(fromSelectizeConfig),
        $forwardToSelectize = $('select[name="to_address[]"]').selectize($.extend({ }, emailSelectizeConfig(enablePlugins), userSearchSelectizeConfig)),
        $forwardCcSelectize = $('select[name="cc_address[]"]').selectize($.extend({ }, emailSelectizeConfig(enablePlugins), userSearchSelectizeConfig)),
        $forwardBccSelectize = $('select[name="bcc_address[]"]').selectize($.extend({ }, emailSelectizeConfig(enablePlugins), userSearchSelectizeConfig));

    $('.add-bcc').on('click', function() {
        $('.bcc-emails').toggle();
        $('.add-bcc').hide();
    });

    /**
     * Edit user on ticket
     */
    $('.edit-user').on('click', function() {
        $('.update-user').toggle();
    });
    $userSelectize = $('select[name="user"]').selectize({
        valueField: 'id',
        labelField: 'formatted_name',
        searchField: [ 'formatted_name', 'email' ],
        placeholder: Lang.get('user.search_for_user_operator'),
        create: false,
        render: {
            optgroup_header: function(item, escape) {
                return '<div class="optgroup_header">' + escape(item.label) + '</div>';
            },
            option: function(item, escape) {
                return '<div>' +
                    '<img class="avatar" src="' + escape(item.avatar_url) + '" width="16" /> &nbsp;' +
                    escape(item.formatted_name) + (item.organisation ? ' (' + escape(item.organisation || '') + ')' : '') +
                    (item.email ? '<br /><span class="description">' + escape(item.email || '') + '</span>' : '') +
                    '</div>';
            }
        },
        load: function(query, callback) {
            if (!query.length) return callback();

            var self = this;

            $.get(laroute.route('user.operator.search'), {
                    q: query,
                    brand_id: brandId,
                    operators: 1
                })
                .done(function(res) {
                    self.addOptionGroup(Lang.choice('user.user', 1), { label: Lang.choice('user.user', 2) });
                    self.addOptionGroup(Lang.choice('general.operator', 1), { label: Lang.choice('general.operator', 2) });
                    self.refreshOptions();
                    callback(res.data);
                })
                .fail(function() { callback(); });
        },
        onChange: function(value) {
            if (value) {
                // Attempt to update user
                updateTicket($('select[name="user"]').serializeArray());
            }
        }
    });

    /**
     * Create new user and update ticket.
     */
    $('.create-new-user .new-user-toggle').on('click', function() {
        // Toggle the form
        $('form.new-user-form').toggle();

        // Submit form
        $('form.new-user-form button').on('click', function () {
            var $button = $(this);
            $button.prop('disabled', true);

            $.ajax({
                url: laroute.route('ticket.operator.action.newuser'),
                type: 'POST',
                data: $('form.new-user-form').serializeArray(),
                success: function(response) {
                    if (response.status == 'success') {
                        // We need to update a lot of details on the page. Quick fix, refresh the page.
                        window.location.reload();

                        // Show success message while page loads
                        $('.ticket-update.success').show(500).delay(5000).hide(500);
                    } else {
                        swal(
                            Lang.get('messages.error'),
                            response.message,
                            'error'
                        );

                        $button.prop('disabled', false);
                    }
                }
            }).fail(function() {
                swal(
                    Lang.get('messages.error'),
                    Lang.get('messages.error_created', { item: Lang.get('general.record') }),
                    'error'
                );

                $button.prop('disabled', false);
            });
        });
    });

    /**
     * Selecting organisation for new user form.
     */
    $('form.new-user-form select[name="organisation"]').selectize({
        valueField: 'id',
        labelField: 'name',
        searchField: 'name',
        create: true,
        placeholder: Lang.choice('user.organisation', 1),
        allowEmptyOption: true,
        load: function(query, callback) {
            if (!query.length) return callback();
            $.ajax({
                url: laroute.route('user.organisation.search'),
                type: 'GET',
                dataType: 'json',
                data: {
                    q: query,
                    brand_id: brandId
                },
                error: function() {
                    callback();
                },
                success: function(res) {
                    callback(res.data);
                }
            });
        },
        onChange: function(value) {
            // We want to set a separate input if they enter an existing organisation.
            if (value.length > 0 && value !== this.getOption(value)[0].textContent) {
                $('form.new-user-form input[name="organisation_id"]').val(value);
            } else {
                $('form.new-user-form input[name="organisation_id"]').val("");
            }
        }
    });

    /**
     * Add tag on ticket
     */
    $tagSelectize = $('.assign-tags').selectize({
        plugins: ['remove_button'],
        valueField: 'original_name',
        labelField: 'name',
        searchField: [ 'name' ],
        create: tagPermission ? true : false,
        createFilter: function(input) {
            return input.length <= 45;
        },
        maxItems: null,
        placeholder: Lang.get('ticket.type_in_tags') + '...',
        render: {
            item: function(item, escape) {
                return '<div class="item" style="background-color: ' + escape(item.colour) + '; color: ' + escape(item.colour_text) + '">'
                        + escape(item.name)
                    + '</div>';
            },
            option: function(item, escape) {
                return '<div>'
                        + '<span class="statusIcon" style="background-color: ' + escape(item.colour) +'"></span>'
                        + '&nbsp; ' + escape(item.name)
                    + '</div>';
            }
        },
        load: function(query, callback) {
            if (!query.length) return callback();

            $.get(laroute.route('ticket.operator.tag.search'), { q: query })
                .done(function(res) { callback(res.data); })
                .fail(function() { callback(); });
        },
        onChange: function(tags) {
            if (!tags) {
                // In case of removing all tags
                tags = [];
            }
            // Detach and re-attach the list of assigned tags
            $.post(laroute.route('ticket.operator.ticket.assignTags', { id: ticketId }), { 'tags': tags } )
                .done(function(data) {
                    if (data.status == 'success') {
                        $('.ticket-update.success').show(500).delay(5000).hide(500);
                        return;
                    }

                    // Else, an error occurred
                    $('.ticket-update.fail').show(500).delay(5000).hide(500);
                })
                .fail(function(data) {
                    $('.ticket-update.fail').show(500).delay(5000).hide(500);
                });
        }
    });

    /**
     * Assign operator to ticket
     */
    $assignSelectize = $('#assignOperator').selectize({
        plugins: ['remove_button'],
        valueField: 'id',
        labelField: 'formatted_name',
        searchField: [ 'formatted_name', 'email' ],
        create: false,
        maxItems: null,
        placeholder: Lang.get('ticket.assign_operator') + '...',
        render: {
            item: function(item, escape) {
                return '<div class="item">'
                    + '<img class="avatar" src="' + escape(item.avatar_url) + '" width="16" /> &nbsp;'
                    + escape(item.formatted_name)
                    + '</div>';
            },
            option: function(item, escape) {
                return '<div>'
                    + '<img class="avatar" src="' + escape(item.avatar_url) + '" width="16" /> &nbsp;'
                    + escape(item.formatted_name)
                    + '</div>';
            }
        },
        load: function(query, callback) {
            if (!query.length) return callback();

            // Set the route for the current department
            var route = laroute.route('ticket.operator.department.search', { id: $('select[name="department"]').val() });

            $.get( route, { s: query, brand_id: brandId })
                .done(function(res) { callback(res.data); })
                .fail(function() { callback(); });
        },
        onChange: function(assigned_operators) {
            if (!assigned_operators) {
                // In case of removing all operators
                assigned_operators = [];
            }
            // Detach and re-attach the list of assigned operators
            $.post( laroute.route('ticket.operator.action.assign'), { ticket: ticketId, operator: assigned_operators, replace: true } )
                .done(function(data) {
                    if (data.status == 'success') {
                        $('.ticket-update.success').show(500).delay(5000).hide(500);

                        // Poll for new replies and updates
                        pollReplies();

                        return;
                    }

                    // Else, an error occurred
                    $('.ticket-update.fail').show(500).delay(5000).hide(500);
                })
                .fail(function(data) {
                    $('.ticket-update.fail').show(500).delay(5000).hide(500);
                });
        }
    });

    /**
     * Linked Tickets
     */
    $(document).on('click', '.add-link', function () {
        // Show the alert
        swal({
            title: Lang.get('ticket.add_linked_ticket'),
            html: '<form class="add-link-form">'
                + Lang.get('ticket.add_linked_ticket_desc')
                + '<br /><br />'
                + '<input type="text" name="linked_search" autocomplete="off" />'
                + '<ul class="results"></ul>'
                + '</form>',
            showConfirmButton: false,
            showCancelButton: true,
        });

        $('input[name=linked_search]').donetyping().trigger('donetyping').trigger('focus');

        // Don't allow hitting enter (reloads the page)
        $('input[name=linked_search]').on('keydown', function(event) {
            if (event.keyCode == 13) {
                event.preventDefault();
                return false;
            }
        });
    });

    $(document).on('donetyping', 'input[name=linked_search]', function() {
        var $this = $(this),
            $term = $this.val(),
            $list = $this.next('.results');

        // Empty the list
        $list.empty();

        // Add a search icon
        $this.addClass('ui-autocomplete-loading');

        if ($term.length > 0) {
            // Only search if term is one character or more
            $.ajax({
                url: laroute.route('ticket.operator.linked.search', { id: ticketId }),
                dataType: "json",
                data: { term: $term },
                method: 'POST',
                success: function(data) {
                    // Empty the list (in case we've somehow run this twice)
                    $list.empty();

                    // In case there is no results
                    if (data.status == "error" || data.data.length === 0) {
                        $list.append($("<li class='no-results'>" + Lang.get('messages.no_results') + "</li>"));
                    } else {
                        // Add responses to list
                        $.each(data.data, function (key, item) {
                            $list.append($("<li data-id='" + item.id + "'>")
                                .append($("<strong>" + "#" + item.number + "</strong>&nbsp; " + item.subject + "</span>"
                                    + "<br /><span class='description'>" + item.user.formatted_name + " &nbsp;&middot;&nbsp; "
                                    + item.department.name + " &nbsp;&middot;&nbsp; " + item.brand.name + "</span>")));
                        });
                    }
                }
            }).always(function() {
                // Remove spinning circle
                $this.removeClass('ui-autocomplete-loading');
            });
        } else {
            // Remove spinning circle
            $this.removeClass('ui-autocomplete-loading');
        }
    });

    $(document).on('click', '.add-link-form .results li:not(".no-results")', function() {
        // Close modal
        swal.closeModal();

        // Post data
        $.ajax({
            url: laroute.route('ticket.operator.linked.link'),
            type: 'POST',
            data: { 'ticket': ticketId + ',' + $(this).data('id') },
            dataType: 'json'
        }).done(function(response) {
            if (response.status == 'success') {
                $('.ticket-update.success').show(500).delay(5000).hide(500);

                // Update linked tickets list
                $('.linked-tickets-list').html(response.data);

                // Update log
                ticket.updateLogTable();
            } else {
                $('.ticket-update.fail').show(500).delay(5000).hide(500);
            }
        }).fail(function() {
            $('.ticket-update.fail').show(500).delay(5000).hide(500);
        });
    });

    $(document).on('click', '.linked-tickets .unlink', function () {
        var $this = $(this);

        $.ajax({
            url: $this.data('route'),
            type: 'POST',
            data: { 'ticket': ticketId + ',' + $this.data('id') },
            dataType: 'json'
        }).done(function(response) {
            if (response.status == 'success') {
                $('.ticket-update.success').show(500).delay(5000).hide(500);

                // Update linked tickets list
                $('.linked-tickets-list').html(response.data);

                // Update log
                ticket.updateLogTable();
            } else {
                $('.ticket-update.fail').show(500).delay(5000).hide(500);
            }
        }).fail(function() {
            $('.ticket-update.fail').show(500).delay(5000).hide(500);
        });
    });

    // Show email details popup
    ticket.registerEmailDetails($('.show-email-details'));

    // Quote message
    $(document).on('click', '.quoteMessage', function(event) {
        // Don't expand or collapse message
        event.stopPropagation();

        // Get the message container.
        var $message = $(this).parents('.message'),
            callback = function() {
                ticket.quoteMessage($message);
            };

        ticket.loadMessage($message, callback);
    });

    /*
     * Jump to reply
     */
    // Jump to the reply area when clicking the button
    $('.jump-to-reply button').on('click', function() {
        $('html, body').animate({
            scrollTop: $(".reply-header").offset().top - 25
        }, 1000);

        // Focus redactor.
        var $textarea = $('.reply-type .option.active').data('type') ? $('#newNote') : $('#newMessage');
        $textarea.redactor('focus.setStart');
    });

    // It should only show when needed, depending on the ticket replies order
    var scroll = 0;
    $(window).on('scroll', function() {
        // Don't run on first page load
        if (scroll > 0) {
            var $form = $('form.message-form:not(.edit)');
            if ($('.reply-type .option.active').data('type') == 1) {
                $form = $('form.notes-form');
            }

            // Only do this if the message tab is visible currently
            if ($('#tabMessages').is(':visible') && $form.is(':visible')) {
                var y;
                if (replyOrder == 'ASC') {
                    y = $(".reply-header").offset().top;
                    // Show until you reach the start of the add reply
                    if ($(this).scrollTop() + $(this).height() < y) {
                        $('.jump-to-reply').fadeIn();
                    } else {
                        $('.jump-to-reply').fadeOut();
                    }
                } else {
                    // Show once you pass the post button
                    y = $form.offset().top + $form.outerHeight(true);
                    if ($(this).scrollTop() > y) {
                        $('.jump-to-reply').fadeIn();
                    } else {
                        $('.jump-to-reply').fadeOut();
                    }
                }
            }
        }

        // Increase counter
        scroll++;
    });

    // If the order is ascending, show the down arrow instead
    if (replyOrder == 'ASC') {
        $('.jump-to-reply button .fa').toggleClass('fa-arrow-up fa-arrow-down');
    }

    // Pretend a scroll to see if we should be showing the jump to reply button straight away or not
    $(window).trigger('scroll');
    /*
     * END Jump to reply
     */

    // Load ticket log table on clicking tab for first time
    $(document).on('click','.tabs #Log', function () {
        if (! ticket.isLogTableLoaded()) {
            // Load table (force it)
            ticket.updateLogTable(true);
        }
    });

    // Load escalation rules table on clicking tab for first time
    $(document).on('click','.tabs #EscalationRules', function () {
        if (! ticket.isEscalationsTableLoaded()) {
            // Load table (force it)
            ticket.updateEscalationsTable(true);
        }
    });

    /*
     * FOLLOW UP TAB
     */

    // Load follow up tab for the first time.
    $(document).on('click','.tabs #Followup', function () {
        // The #FollowUp node will be empty if we haven't loaded it before.
        if ($('#tabFollowup').is(':empty')) {
            refreshFollowUpTab();
        }
    });

    // Follow up is active, show the follow up tab.
    $(document).on('click', '.view-followup', function () {
        $('li#Followup').trigger('click');
    });

    var setDateType = function() {
        if ($(this).val() == 0) {
            $('.followup-exact').show().find(':input').prop('disabled', false);
            $('.followup-difference').hide().find(':input').prop('disabled', 'disabled');
        } else {
            $('.followup-exact').hide().find(':input').prop('disabled', 'disabled');
            $('.followup-difference').show().find(':input').prop('disabled', false);
        }
    };

    $(document).on('change', 'input[name="date_type"]', setDateType);

    // Show add follow up form.
    $(document).on('click', '.add-followup', function () {
        $('form.followup-form').show();
        $('.followup-table').hide();
    });

    $(document).on('click', '.cancel-followup', function() {
        refreshFollowUpTab();
    });

    $(document).on('click', '.edit-followup', function() {
        // Reload follow up tab with edit form
        refreshFollowUpTab($(this).data('id'));
    });

    $(document).on('click', '.save-followup', function() {
        var $button = $(this),
            saveFollowUp = function ($button) {
                // Disable button
                $button.prop('disabled', true);

                var data = $('.followup-form').serializeArray();
                data.push({ name: 'ticket', value: ticketId });

                // Post updated data
                return $.ajax({
                    url: $('.followup-form').data('uri'),
                    type: $('.followup-form').data('method'),
                    data: data,
                    dataType: 'json'
                }).done(function(response) {
                    if (response.status == 'success') {
                        $('.ticket-update.success').show(500).delay(5000).hide(500);

                        // Show warning message
                        $('.followup-warning').show().find('span').html(response.message);

                        // Reload follow up tab
                        refreshFollowUpTab();
                    } else {
                        $('.ticket-update.fail').show(500).delay(5000).hide(500);

                        // Re-enable button
                        $(this).prop('disabled', false);
                    }

                    return response;
                }).fail(function() {
                    $('.ticket-update.fail').show(500).delay(5000).hide(500);

                    // Re-enable button
                    $button.prop('disabled', false);
                });
            };

        if ($('table.rule-table tr.rule:visible').length === 0) {
            // Show the alert
            swal({
                title: Lang.get('messages.are_you_sure'),
                html: Lang.get('ticket.follow_up_no_actions'),
                type: "warning",
                showCancelButton: true,
                confirmButtonColor: "#e74c3c",
                confirmButtonText: Lang.get('messages.yes_im_sure'),
                showLoaderOnConfirm: true,
            }, function (isConfirm) {
                if (isConfirm) {
                    swal.disableButtons();
                    saveFollowUp($button);
                }
            });
        } else {
            saveFollowUp($button);
        }
    });

    $(document).on('click', '.delete-followup', function() {
        var $followUp = $(this).data('id');

        // Show the alert
        swal(deleteAlert.getDefaultOpts(Lang.get('ticket.follow_up')), function(isConfirm) {
            if (isConfirm) {
                // Disable submit button
                deleteAlert.disableButtons();

                // Post delete data
                $.ajax({
                    url: laroute.route('ticket.operator.followup.destroy', {'followup': $followUp}),
                    type: 'DELETE',
                    dataType: 'json'
                }).done(function(response) {
                    if (response.status == 'success') {
                        $('.ticket-update.success').show(500).delay(5000).hide(500);

                        // Update warning message or hide it if no more follow ups.
                        if (response.message != null && response.message.length > 0) {
                            $('.followup-warning').show().find('span').html(response.message);
                        } else {
                            $('.followup-warning').hide();
                        }

                        // Reload table
                        $('#tabFollowup .dataTable').dataTable().api().ajax.reload();
                    } else {
                        $('.ticket-update.fail').show(500).delay(5000).hide(500);
                    }
                }).fail(function() {
                    $('.ticket-update.fail').show(500).delay(5000).hide(500);
                }).always(function() {
                    // Close alert
                    swal.closeModal();
                });
            }
        });
    });
});

function htmlDecodeWithLineBreaks(html) {
    var breakToken = '_______break_______',
        lineBreakedHtml = html.replace(/(\r\n|\n|\r)/gm, "").replace(/<br\s?\/?>/gi, breakToken).replace(/<p\.*?>(.*?)<\/p>/gi, breakToken + '$1' + breakToken);

    // Encode the return text for redactor, so it doesn't try to parse any of it
    return he.encode($('<div>').html(lineBreakedHtml).text().replace(new RegExp(breakToken, 'g'), '\n'));
}

function showMessage(html) {
    // Add message to right place
    var message, code = $(html);

    // Make the message visible.
    code.removeClass('collapsed').addClass('collapsible');
    code.find('.text').children('.trimmed').hide();
    code.find('.text').children('.original').show();

    // Remove expandable if appropriate.
    ticket.removeExpandable(code);

    // It's a note
    if (code.hasClass('note')) {
        // Determine where to put the note
        if (notesPosition === 0 || notesPosition === 1) {
            // Show the headers (in case its first note)
            $('.notes-header, .messages-header').show();
            if (replyOrder == 'ASC') {
                // Check if notes already exist.
                var place = $('.note')[0] ? $('.messages-header').prev('.note') : $('.notes-header');

                // Also want to add to end of message area
                if (notesPosition === 0) {
                    place = place.add($('.message').last());
                }

                message = code.insertAfter(place);
            } else {
                if (notesPosition === 0) {
                    // Show in both notes and messages blocks
                    message = code.insertAfter('.notes-header, .messages-header');
                } else {
                    // Only show in notes block
                    message = code.insertAfter('.notes-header');
                }
            }
        } else {
            if (replyOrder == 'ASC') {
                message = code.insertAfter($('.message').last());
            } else {
                message = code.insertAfter('.messages-header');
            }
        }
    } else {
        // It's a message
        // Determine where to put the message
        if (replyOrder == 'ASC') {
            message = code.insertAfter($('.message').last());
        } else {
            message = code.insertAfter('.messages-header');
        }
    }

    // Load attachment previews if needed.
    ticket.loadAttachmentPreviews(message);

    // Special effects
    message.css('border-left','2px solid #a4d0e9');
    setTimeout(function(){ message.css('border-left',''); }, 10000);
    message.css('background','#e5f1f9');
    setTimeout(function(){ message.css('background',''); }, 10000);

    // Update editor for editing this new message
    redactor(message.find('textarea'));

    // Handle email details popup if it exists
    ticket.registerEmailDetails(message.find('.show-email-details'));
}

function updateTicket(data) {
    // Disable buttons and dropdowns
    $('.reply-type button:disabled, #sidebar button:disabled, #sidebar select:disabled').data('disabled', true);
    $('.reply-type button, #sidebar button, #sidebar select').prop('disabled', true);

    // Add ticket ID
    data.push({ name: 'ticket', value: ticketId });

    // Post updated data
    $.post(
        laroute.route('ticket.operator.action.update'),
        data,
    function(response) {
        if (response.status == 'success') {
            $('.ticket-update.success').show(500).delay(5000).hide(500);
            // Update log
            ticket.updateLogTable();
            // Specific case for updating user
            if (response.message != 'undefined' && response.message == 'ticket_user_updated') {
                $('.edit-user').text(response.data);
                $('.update-user').hide();

                // We need to update a lot of details on the page. Quick fix, refresh the page.
                window.location.reload();

                // Show success message while page loads
                $('.ticket-update.success').show(500).delay(5000).hide(500);
            }
            // Poll for new replies and updates
            pollReplies();
        } else {
            $('.ticket-update.fail').show(500).delay(5000).hide(500);
        }
    }, "json").fail(function() {
        $('.ticket-update.fail').show(500).delay(5000).hide(500);
    }).always(function() {
        // Enable buttons and dropdowns
        $('.reply-type button:not(:data(disabled)), #sidebar button:not(:data(disabled)), #sidebar select:not(:data(disabled))')
            .prop('disabled', false);
        $('.reply-type button, #sidebar button, #sidebar select').removeData('disabled');
    });
}

function ticketAction(route, data) {
    // Disable buttons and dropdowns
    $('.quick-actions button:disabled, #sidebar button:disabled, #sidebar select:disabled').data('disabled', true);
    $('.quick-actions button, #sidebar button, #sidebar select').prop('disabled', true);

    // Post data to perform action
    $.post(
        route,
        $.extend(data || {}, { ticket: ticketId }),
    function(response) {
        if (response.status == 'success') {
            $('.ticket-update.success').show(500).delay(5000).hide(500);
            // Update log
            ticket.updateLogTable();
            // Poll for new replies and updates
            pollReplies();
        } else {
            $('.ticket-update.fail').show(500).delay(5000).hide(500);
        }
    }, "json").fail(function() {
        $('.ticket-update.fail').show(500).delay(5000).hide(500);
    }).always(function() {
        // Enable buttons and dropdowns
        $('.quick-actions button:not(:data(disabled)), #sidebar button:not(:data(disabled)), #sidebar select:not(:data(disabled))')
            .prop('disabled', false);
        $('.quick-actions button, #sidebar button, #sidebar select').removeData('disabled');
    });
}

function changeDepartment(data) {
    // Disable buttons and dropdowns
    $('.quick-actions button:disabled, #sidebar button:disabled, #sidebar select:disabled').data('disabled', true);
    $('.quick-actions button, #sidebar button, #sidebar select').prop('disabled', true);

    // Post data to perform action
    $.post(
        laroute.route('ticket.operator.action.department'),
        $.extend(data || {}, { ticket: ticketId }),
        function(response) {
            if (response.status == 'success') {
                $('.ticket-update.success').show(500).delay(5000).hide(500);
                // Update log
                ticket.updateLogTable();

                // Update assigned operators and remove operators from the dropdown that are no longer assigned.
                $assignSelectize[0].selectize.loadedSearches = {};
                $assignSelectize[0].selectize.setValue(response.data.assigned, true);
                $.each($assignSelectize[0].selectize.options, function (index, value) {
                    if ($.inArray(value.id, response.data.assigned) === -1) {
                        $assignSelectize[0].selectize.removeOption(value.id);
                    }
                });
                $assignSelectize[0].selectize.refreshOptions(false);

                // Poll for new replies and updates
                pollReplies();

                // If the ticket has a department email dropdown
                var first,
                    $fromSelectize = $('select[name="department_email"]');
                if ($fromSelectize.length) {
                    // Update department emails list
                    first = null;
                    $fromSelectize[0].selectize.clearOptions();
                    $.each(response.data.emails, function (index, value) {
                        if (first === null) first = index;
                        $fromSelectize[0].selectize.addOption({value: index, text: value});
                        $fromSelectize[0].selectize.refreshOptions(false);
                    });
                    // Select first option
                    $fromSelectize[0].selectize.addItem(first, true);
                }

                // Update the forward department email list.
                var $forwardFromSelectize = $('select[name="from_address"]');
                if ($forwardFromSelectize.length) {
                    first = null;

                    // Get the "me" option.
                    var me = $('select[name="from_address"]')[0].selectize.options.me;

                    // Reset the list.
                    $forwardFromSelectize[0].selectize.clearOptions();
                    $.each(response.data.emails, function (index, value) {
                        if (first === null) first = index;
                        $forwardFromSelectize[0].selectize.addOption({value: index, text: value});
                        $forwardFromSelectize[0].selectize.refreshOptions(false);
                    });

                    // Add "me" option back.
                    $forwardFromSelectize[0].selectize.addOption({value: me.value, text: me.text});
                    $forwardFromSelectize[0].selectize.refreshOptions(false);

                    // Select first option
                    $forwardFromSelectize[0].selectize.addItem(first, true);
                }

                // Update custom fields
                if (typeof response.data.customfields != 'undefined') {
                    $('#sidebar .customfields').html(response.data.customfields);

                    // Just check to see if we have any custom fields for this department
                    if ($('#sidebar .customfields').html().trim() == '') {
                        // None - hide custom fields box
                        $('#sidebar .customfields').parents('.sidebox').hide();
                    } else {
                        // We do - show custom fields box
                        $('#sidebar .customfields').parents('.sidebox').show();
                        // Enable hide/show password toggle and textarea redactor if needed
                        callHideShowPassword();
                        customfieldRedactor();
                    }
                }

                // Update department templates.
                departmentTemplates = response.data.templates;
                // Force run that code that checks if we can send the email to user/operators, by mocking events.
                $('.message-form select[name="to_status"]').trigger('change');
                $('.reply-type .option.active').trigger('click');

                // Refresh follow up tab
                refreshFollowUpTab();
            } else {
                $('.ticket-update.fail').show(500).delay(5000).hide(500);
            }
        }, "json").fail(function() {
        $('.ticket-update.fail').show(500).delay(5000).hide(500);
    }).always(function() {
        // Enable buttons and dropdowns
        $('.quick-actions button:not(:data(disabled)), #sidebar button:not(:data(disabled)), #sidebar select:not(:data(disabled))')
            .prop('disabled', false);
        $('.quick-actions button, #sidebar button, #sidebar select').removeData('disabled');
    });
}

function restoreTicket() {
    $.ajax({
        url: laroute.route('ticket.operator.action.restore'),
        type: 'POST',
        data: { ticket: ticketId },
        dataType: 'json'
    }).done(function(response) {
        if (response.status == 'success') {
            // Reload ticket.
            window.location.reload();

            // Show success message while page loads
            $('.ticket-update.success').show(500).delay(5000).hide(500);
        } else {
            $('.tickets-update.fail').show(500).delay(5000).hide(500);
        }
    }).fail(function() {
        $('.tickets-update.fail').show(500).delay(5000).hide(500);
    });
}

function deleteTicket(block, force) {
    var type = block ? 'POST' : 'DELETE',
        route = block ? laroute.route('ticket.operator.action.block') :
            (force ? laroute.route('ticket.operator.action.destroy') : laroute.route('ticket.operator.action.trash')),
        successMessage = force ? 'messages.success_deleted' : 'messages.success_trashed',
        errorMessage = force ? 'messages.error_deleted' : 'messages.error_trashed';

    var ajax = function () {
        $.ajax({
            url: route,
            type: type,
            data: { ticket: ticketId },
            success: function(response) {
                if (response.status == 'success') {
                    swal(
                        Lang.get('messages.success'),
                        Lang.get(successMessage, { item: Lang.get('general.record') }),
                        'success'
                    );
                    // Go back to ticket grid
                    window.location.href = ticketGridUrl;
                } else {
                    swal(
                        Lang.get('messages.error'),
                        Lang.get(errorMessage, { item: Lang.get('general.record') }),
                        'error'
                    );
                }
            }
        }).fail(function() {
            swal(
                Lang.get('messages.error'),
                Lang.get(errorMessage, { item: Lang.get('general.record') }),
                'error'
            );
        });
    };

    if (force) {
        var opts = deleteAlert.getDefaultOpts(Lang.choice('ticket.ticket', 1), '', deleteRelations);
        swal(opts, function (isConfirm) {
            if (isConfirm) {
                // Disable submit button
                deleteAlert.disableButtons();
                // Post destroy data
                ajax();
            }
        });
    } else {
        ajax();
    }
}

function applyMacro(macroId) {
    // Post macro/ticket data
    $.post(
        laroute.route('ticket.operator.macro.apply'),
        {
            macro: macroId,
            ticket: ticketId
        },
    function(response) {
        if (response.status == 'success') {
            $('.ticket-update.success').show(500).delay(5000).hide(500);
            if (response.data.deleted) {
                // Deleted ticket - go back to ticket grid
                setTimeout(function() {
                    window.location.href = ticketGridUrl;
                }, 2000);
            } else {
                // Update log
                ticket.updateLogTable();
                // Poll for new replies and updates
                pollReplies(true);
            }
        } else {
            $('.ticket-update.fail').show(500).delay(5000).hide(500);
        }
    }, "json").fail(function() {
        $('.ticket-update.fail').show(500).delay(5000).hide(500);
    });
}

function refreshFollowUpTab(edit) {
    // If we want to edit a follow up.
    edit = (typeof edit === 'undefined') ? 0 : edit;

    // Show loading icon
    $('#tabFollowup').html('<i class="fa fa-spinner fa-pulse fa-fw"></i>');

    // Fetch view
    $.get(
        laroute.route('ticket.operator.followup.render', {id: ticketId, edit: edit}), { },
        function(response) {
            if (response.status == 'success') {
                // Update form
                $('#tabFollowup').html(response.data);

                // Initialise date picker.
                callPikaday();

                // Initialise sortable.
                $("#sortable").sortable({
                    placeholder: "ui-state-highlight",
                    handle: ".handle",
                    start: function(event, ui) {
                        // Undo styling set by jqueryUI
                        ui.helper.css("height", "auto").css("width", "auto");
                    }
                });

                // Initialise timepicker.
                $('.followup-form')
                    .find('.timepicker')
                    .timepicker({ 'timeFormat': $('meta[name="time_format"]').prop('content'), 'scrollDefault': 'now' });

                // Handle rules on refreshing tab, this will call code in escalationrule.js
                $(".rule:first :input").prop('disabled', true);
                $('.rule').filter(function() { return $(this).css("display") != "none"; }).find('.rule-action select').trigger('change');
            } else {
                // Show message to refresh
                $('#tabFollowup').html(Lang.get('messages.please_refresh'));
            }
        }, "json").fail(function() {
            // Show message to refresh
            $('#tabFollowup').html(Lang.get('messages.please_refresh'));
        });
}

/*
 * Polling for new messages & other ticket related updates
 */
var lastReplyPoll;
var pollTimeout;
var $tagSelectize, $assignSelectize, $ccSelectize;

function pollReplies(allMessages) {
    // Fetch all messages (included authed user) or just other users
    allMessages = (typeof allMessages === 'undefined') ? 0 : 1;

    // Clear the timeout incase it's been manually declared
    clearTimeout(pollTimeout);

    // Call the ajax
    $.ajax({
        url: laroute.route('ticket.operator.message.poll'),
        data: {
            ticket_id: ticketId,
            lastPoll: lastReplyPoll,
            all: allMessages
        },
        success: function(response) {
            // If there are notifications, show them
            if (response.status == 'success' && typeof response.data != 'undefined' && response.data !== null) {
                if (response.data.messages.length) {
                    // Add each message
                    $.each(response.data.messages, function (index, value) {
                        showMessage(value);
                    });

                    $('form.message-form').trigger("supportpal.polled_messages");
                }

                // Show other operators viewing ticket
                $('.ticket-viewing').replaceWith(response.data.viewing).show(500);
                // Depending on view, add margin to top or bottom of content area if visible (code in mobile.js)
                $(window).trigger('resize');

                // Show other operator's draft
                if (response.data.draft !== '') {
                    $('.ticket-draft').html(response.data.draft).show(500);
                } else {
                    $('.ticket-draft').hide(500);
                }

                // Update ticket details
                $('.last-action').html(response.data.details.updated_at);
                if (response.data.details.update) {
                    // Update subject
                    $('.ticket-subject .subject').text(response.data.details.subject);
                    $('.ticket-subject .edit-subject').val(response.data.details.subject);

                    // Update sidebar items
                    $('.edit-user').html(response.data.details.user);
                    $('select[name="department"]').val(response.data.details.department);
                    $('select[name="priority"]').val(response.data.details.priority);

                    // Update status in sidebar
                    if ($('select[name="status"]').val() != response.data.details.status) {
                        $('select[name="status"]').val(response.data.details.status);

                        // Update the status dropdown in the notes box (only if it's changed)
                        $('.notes-form, .forward-form').find('select[name="to_status"]').val(response.data.details.status);
                    }

                    $tagSelectize[0].selectize.clear(true);
                    $tagSelectize[0].selectize.refreshOptions(false);
                    $.each(response.data.details.tags, function(index, value) {
                        $tagSelectize[0].selectize.addOption({ id: value.id, name: value.name, original_name: value.original_name, colour: value.colour, colour_text: value.colour_text });
                        $tagSelectize[0].selectize.refreshOptions(false);
                        $tagSelectize[0].selectize.addItem(value.original_name, true);
                    });

                    $assignSelectize[0].selectize.clear(true);
                    $assignSelectize[0].selectize.refreshOptions(false);
                    $.each(response.data.details.assigned, function(index, value) {
                        $assignSelectize[0].selectize.addOption({ id: value.id, formatted_name: value.formatted_name, avatar_url: value.avatar_url });
                        $assignSelectize[0].selectize.refreshOptions(false);
                        $assignSelectize[0].selectize.addItem(value.id, true);
                    });

                    if (typeof $ccSelectize[0] !== 'undefined') {
                        // We need to keep a list of the 'unremovable' options so they get added back properly.
                        var options = [];
                        $.each($ccSelectize[0].selectize.options, function (index, option) {
                            if (typeof option.unremovable !== 'undefined' && option.unremovable) {
                                options.push(option);
                            }
                        });
                        $.each(response.data.details.cc, function (index, value) {
                            options.push({ text: value, value: value });
                        });
                        $ccSelectize[0].selectize.clear(true);
                        $ccSelectize[0].selectize.refreshOptions(false);
                        $.each(options, function (index, value) {
                            $ccSelectize[0].selectize.addOption(value);
                            $ccSelectize[0].selectize.refreshOptions(false);
                            $ccSelectize[0].selectize.addItem(value.value, true);
                        });
                    }

                    $('select[name="slaplan"]').val(response.data.details.sla_plan);
                    $('.edit-duetime').html(response.data.details.due_time);
                    // If it says 'set a due time', hide the trash can icon, else show it
                    if (response.data.details.due_time == Lang.get('ticket.set_due_time')) {
                        $('.update-duetime .remove-duetime').hide();
                    } else {
                        $('.update-duetime .remove-duetime').show();
                    }

                    // Update reply options status and if closed, hide close button
                    if (response.data.details.status == closedStatusId) {
                        $('.close-ticket').addClass('hide');
                    } else {
                        $('.close-ticket').removeClass('hide');
                    }

                    // Show/hide take button depending if self is assigned to ticket and only one assigned.
                    var assigned = response.data.details.assigned.some(function(obj) {
                        return obj.hasOwnProperty('id') && obj['id'] == operatorId;
                    });
                    if (assigned && response.data.details.assigned.length === 1) {
                        $('.take-ticket').addClass('hide');
                    } else {
                        $('.take-ticket').removeClass('hide');
                    }

                    // If locked, show unlock button instead
                    if (response.data.details.locked) {
                        $('.lock-ticket').addClass('hide');
                        $('h1 .fa-lock, .unlock-ticket').removeClass('hide');
                    } else {
                        $('.lock-ticket').removeClass('hide');
                        $('h1 .fa-lock, .unlock-ticket').addClass('hide');
                    }

                    // Update log and escalation rules tables
                    ticket.updateLogTable();
                    ticket.updateEscalationsTable();
                }

                // Update custom fields
                if (typeof response.data.customfields != 'undefined') {
                    $('#sidebar .customfields').html(response.data.customfields);
                    // Enable hide/show password toggle, textarea redactor and pikaday if needed
                    callHideShowPassword();
                    customfieldRedactor();
                    callPikaday();
                }

                $('#sidebar').trigger('refreshedSidebar');

                // Refresh timeago.
                if (typeof timeAgo !== 'undefined') {
                    timeAgo.render($('time.timeago'));
                }
            }

            // Update the last poll time
            lastReplyPoll = response.timestamp;
        },
        dataType: "json",
        complete: function() {
            // Delay the next poll by 15 seconds
            pollTimeout = setTimeout(function() {
                pollReplies();
            }, 15000);
        }
    });
}
/*
 * END polling of new messages
 */
