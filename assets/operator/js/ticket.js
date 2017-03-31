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
     * Message drafts.
     *
     * @type {{newMessage: null, newNote: null}}
     */
    var drafts = {
        'newMessage': null,
        'newNote': null
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
            $('.split-ticket').show();
        }

        // If we have one or more CC email, show the reply-all button, else hide it (if it's there)
        if ($('.cc-emails').is(':visible')) {
            if ($ccSelectize[0].selectize.getValue().length) {
                $('.reply-form .recipients').addClass('with-cc');
                $('.reply-form .recipients .reply-all').show();
            } else {
                $('.reply-form .recipients').removeClass('with-cc');
                $('.reply-form .recipients .reply-all').hide();
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
                } else {
                    $redactor.redactor('insert.set', '');
                    $redactor.redactor('insert.html', signature, false);
                    self.setMessageDraft(null);
                }
            }

            // If posting a reply to the user, update the status in the notes box.
            if ($form.find('input[name="reply_type"]').val() == '0') {
                $('.notes-form').find('select[name="to_status"]').val(
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

            // Hide edit form
            var message = $(response.data.view).replaceAll($form.parents('.message'));

            // Show the edited message (otherwise it's collapsed).
            message.click();

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

            $.get(laroute.route('ticket.operator.message.showJson', { id: $messageContainer.data('id') }))
                .success(function (ajax) {
                    // Load the message in, it should already be sanitized.
                    $text.children('.original')
                        .html(ajax.data.text)
                        .addClass('loaded');

                    // Load redactor for edit-message if not already loaded
                    if (! $messageContainer.find('textarea').parents('.redactor-box').length) {
                        redactor($messageContainer.find('textarea'));
                    }

                    // Update the edit-message form text too.
                    $messageContainer.find('form.edit textarea[name="text"]').redactor('code.set', ajax.data.text);

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

            // Run success callback if exists.
            typeof successCallback === 'function' && successCallback();
        }
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
                        $('.tabs #Messages').click();
                    }
                    // Hide the tab as no more rules exist
                    $('.tabs #EscalationRules').hide();
                }

                datatablesLoaded.escalationRules = true;
            });
        }
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
    $('.reply-type .option').click(function() {
        // Change active option
        $('.reply-type .option.active').removeClass('active');
        $(this).addClass('active');

        // Determine whether to show the notes or reply form.
        var $form = $('.message-form');
        if ($(this).data('type') == 1) {
            $form = $('.notes-form');
        }

        // Show the correct form.
        $('.message-form, .notes-form').hide();
        $form.show();
    });

    // Process take button
    $('.take-ticket').click(function() {
        ticketAction(laroute.route('ticket.operator.action.take'));
    });
    // Process close button
    $('.close-ticket').click(function() {
        ticketAction(laroute.route('ticket.operator.action.close'));
        $(document).ajaxStop(function () {
            // Go back to ticket grid
            window.location.href = ticketGridUrl;
        });
    });
    // Process lock button
    $('.lock-ticket').click(function() {
        ticketAction(laroute.route('ticket.operator.action.lock'));
        $(document).ajaxStop(function () {
            // Go back to ticket grid
            window.location.href = ticketGridUrl;
        });
    });
    // Process unlock button
    $('.unlock-ticket').click(function() {
        ticketAction(laroute.route('ticket.operator.action.unlock'));
    });

    // Process delete button
    $('.delete-ticket').on('click', function() {
        deleteTicket(false);
    });
    // Process block button
    $('.block-ticket').click(function() {
        deleteTicket(true);
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
        swal({
            title: Lang.get('messages.are_you_sure'),
            text: Lang.get('messages.warn_delete'),
            type: "warning",
            showCancelButton: true,
            confirmButtonColor: "#e74c3c",
            confirmButtonText: Lang.get('messages.yes_im_sure'),
            closeOnConfirm: false
        }, function(isConfirm) {
            if (isConfirm) {
                // Disable submit button
                swal.disableButtons();
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

    /*
     * Handle updating the ticket side bar
     */
    var $ticketDetails = $('.ticket-details');
    $ticketDetails.find('select[name=priority]').change(function() {
        updateTicket($(this).serializeArray());
    });

    $ticketDetails.find('select[name=department]').change(function() {
        changeDepartment({ department_id: $(this).val() });
    });

    $ticketDetails.find('select[name=status]').change(function() {
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
        $('.notes-form').find('select[name="to_status"]').val($(this).val());
    });

    // Update SLA plan
    $('select[name="slaplan"]').change(function() {
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
    $('.edit-duetime').click(function() {
        $('.update-duetime').toggle();
    });
    $('.update-duetime button').click(function() {
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
    var subject = $('.subject').text();

    // Show edit input
    $('.subject').click(function() {
        $(this).hide();
        $('.edit-subject').show().focus();
    });

    // Perform update
    $('.edit-subject').focusout(function() {
        // Only update if different
        if (subject !== $(this).val()) {
            // Hide input and show new subject
            $(this).hide();
            $('.subject').text($(this).val()).show();
            // Post data to perform action
            $.post(
                laroute.route('ticket.operator.ticket.updateSubject', { id: ticketId }),
                { subject: $(this).val() },
            function(response) {
                if (response.status == 'success') {
                    $('.ticket-update.success').show(500).delay(5000).hide(500);
                    // Update subject
                    subject = $('.edit-subject').val();
                } else {
                    $('.ticket-update.fail').show(500).delay(5000).hide(500);
                    // Show old subject
                    $('.subject').text(subject);
                }
            }, "json").fail(function() {
                $('.ticket-update.fail').show(500).delay(5000).hide(500);
                // Show old subject
                $('.subject').text(subject);
            });
        } else {
            // Hide input and show old subject
            $(this).hide();
            $('.subject').show();
        }
    });
    /*
     * END update subject
     */

    /*
     * Split to new ticket
     */
    // If more than one message, show split ticket button and checkboxes
    if ($('.messages-header').nextAll('.message').length > 1) {
        $('.split-ticket').show();
    }

    if (!$('input.split-ticket:visible').length) {
        $('button.split-ticket').parent().hide();
    }

    // Enable button if at least one checkbox ticked
    $(document.body).on('click', 'input.split-ticket', function(event) {
        event.stopPropagation();

        // Ensure if notes, any other instances of same message is ticked
        $('input.split-ticket[data-id="' + $(this).data('id') + '"]').prop('checked', $(this).prop('checked'));

        // Show button if at least one is ticked
        $('button.split-ticket').parent().show();
        if ($('input.split-ticket:checked').length) {
            $('button.split-ticket').prop('disabled', false);
        } else {
            $('button.split-ticket').prop('disabled', true);
        }
    });

    // Split checked messages to a new ticket
    $('button.split-ticket').click(function() {
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
        $(this).parent().submit();
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
     * Toggle long tickets (>5 messages)
     */
    var selector = replyOrder == 'ASC' ? ":last" : ":first";

    // Remove the collapsed class from the first/last message (depending on the reply order).
    $('.notes-header').nextUntil('.messages-header' + selector, '.message' + selector)
        .add($('.messages-header ~ .message' + selector))
        .toggleClass('collapsible collapsed')
        .find('.text')
        .children('.original, .trimmed').toggle();

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

    // Collapse tickets with >5 messages
    if ($('.message').size() > 5) {
        // Staff notes and ticket content regions of the screen
        var regions = [ ".notes-header", ".messages-header" ];

        for (var i = 0; i < regions.length; i++) {
            // If this region of the screen has > 5 messages, let's shrink it!
            if ($(regions[i] + ' ~ .message').size() > 5) {
                // Build the basic selector
                var basicSelector = $(regions[i] + ' ~ .message');
                if (regions[i] == ".notes-header")
                    basicSelector = $(regions[i]).nextUntil('.messages-header', '.message');

                // Group the middle section of messages and hide them
                var items;
                if (replyOrder == 'ASC') {
                    items = basicSelector.not(':first').not(':last').not(':eq(-1)');
                } else {
                    items = basicSelector.not(':first').not(':last').not(':eq(0)');
                }

                items.wrapAll(
                    "<div class='collapsed-messages'><span>" + items.size() + " older messages</span></div>"
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
    if ($('.message').size() > 2) {
        $('.expand-messages').show();
    }

    // Expand/collapse all messages on click
    $('.expand-messages, .collapse-messages').on('click', function() {
        if ($(this).hasClass('expand-messages')) {
            $('.collapsed-messages').click();
            $('#tabMessages .collapsed').click();
        } else {
            $('#tabMessages .collapsible .header').click();
        }
        $('.expand-messages, .collapse-messages').toggle();
    });
    /*
     * END Expand/collapse all messages
     */

    /*
     * Saving drafts automatically
     */
    function saveDraft($form, is_note) {
        var message = $form.find('textarea:not(.CodeMirror textarea):eq(0)').redactor('code.get');

        // Update draft message variable
        if (is_note == '1') {
            ticket.setNoteDraft(message);
        } else {
            ticket.setMessageDraft(message);
        }

        // Call the ajax to save draft
        $.ajax({
            method: 'POST',
            url: laroute.route('ticket.operator.message.store'),
            data: {
                ticket: [ ticketId ],
                reply_type: is_note,
                is_draft: 1,
                text: message
            },
            success: function(response) {
                if (typeof response.status !== 'undefined' && response.status == 'success') {
                    // Show saved message
                    $form.find('.draft-success').text(response.message).show();
                    // Show discard button
                    $form.find('.discard-draft').show();
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
    $('.save-draft').click(function(e) {
        var $form = $(this).parents('form'),
            replyType = $form.find('input[name="reply_type"]').val();

        saveDraft($form, replyType);
    });

    // Discard draft button
    $('.discard-draft').click(function() {
        // Post data to perform action
        var $form = $(this).parents('form'),
            replyType = $form.find('input[name="reply_type"]').val(),
            params = { ticket_id: ticketId, reply_type: replyType };

        $.post(laroute.route('ticket.operator.message.discard'), params, function(response) {
            if (response.status == 'success') {
                $('.ticket-update.success').show(500).delay(5000).hide(500);

                // Clear redactor
                if (replyType == 1) {
                    $('#newNote').redactor('insert.set', '');
                    ticket.setNoteDraft(null);
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
        applyMacro($(this).data('macro'));
    });

    // Hide reply all dropdown if clicking outside the reply-all div
    $(document).click(function() {
        $('.reply-all .dropdown:visible').hide();
    });

    // Handle reply all button to show dropdown
    $('.reply-all .button').on('click', function(e) {
        // This stops it closing from the code above.
        e.stopPropagation();

        $(this).parent().find('.dropdown').toggle();
    });

    // Reply all
    $('.reply-all .dropdown li').click(function() {
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

    // Regex for email
    var re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    // From email input
    $fromSelectize = $('select[name="department_email"]').selectize({
        persist: false,
        dropdownParent: 'body',
        plugins: ['disableDelete']
    });

    // CC email input
    $ccSelectize = $('select[name="cc[]"]').selectize({
        plugins: ['restore_on_backspace', 'remove_button'],
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
    $('.add-cc').on('click', function() {
        $('.cc-emails').toggle();
        $('.add-cc').hide();
    });

    /**
     * Edit user on ticket
     */
    $('.edit-user').click(function() {
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
                    '<img class="avatar" src="data:image/jpeg;base64, ' + escape(item.avatar) + '" width="16" /> &nbsp;' +
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

    $('.create-new-user').click(function() {
        // Show the alert
        swal({
            title: Lang.get('ticket.create_new_user'),
            html: '<form class="new-user form-row">'
                    + '<input type="hidden" name="ticket" value="' + ticketId + '" />'
                    + Lang.get('ticket.create_new_user_desc')
                    + (internal ? ' ' + Lang.get('ticket.convert_user_ticket_desc') : '')
                    + '<br /><br />'
                    + '<div class="input-group">'
                        + '<label>'
                            + '<span class="label">' + Lang.get('user.firstname') + '</span>'
                            + '<input type="text" name="firstname" />'
                        + '</label><br />'
                        + '<label>'
                            + '<span class="label">' + Lang.get('user.lastname') + '</span>'
                            + '<input type="text" name="lastname" />'
                        + '</label><br />'
                        + '<label>'
                            + '<span class="label">' + Lang.get('general.email') + ' *</span>'
                            + '<input type="text" name="email" />'
                        + '</label>'
                        + (organisationsEnabled ? '<br />'
                            + '<label>'
                                + '<span class="label">' + Lang.choice('user.organisation', 1) + '</span>'
                                + '<input type="text" name="organisation" />'
                            + '</label>' : '')
                    + '</div><br /><span class="description">* ' + Lang.get('messages.field_required') + '</span>'
                + '</form>',
            showCancelButton: true,
            confirmButtonText: Lang.get('general.save'),
            closeOnConfirm: false,
            allowOutsideClick: false
        }, function(isConfirm) {
            if (isConfirm) {
                // Disable submit button
                swal.disableButtons();

                // Post destroy data
                $.ajax({
                    url: laroute.route('ticket.operator.action.newuser'),
                    type: 'POST',
                    data: $('form.new-user').serializeArray(),
                    success: function(response) {
                        if (response.status == 'success') {
                            // We need to update a lot of details on the page. Quick fix, refresh the page.
                            window.location.reload();

                            swal(
                                Lang.get('messages.success'),
                                Lang.get('messages.success_created', { item: Lang.get('general.record') }),
                                'success'
                            );
                        } else {
                            swal(
                                Lang.get('messages.error'),
                                response.message,
                                'error'
                            );
                        }
                    }
                }).fail(function() {
                    swal(
                        Lang.get('messages.error'),
                        Lang.get('messages.error_created', { item: Lang.get('general.record') }),
                        'error'
                    );
                });
            }
        });
    });

    /**
     * Add tag on ticket
     */
    $tagSelectize = $('.assign-tags').selectize({
        plugins: ['remove_button'],
        valueField: 'name',
        labelField: 'name',
        searchField: [ 'name' ],
        create: true,
        createFilter: function(input) {
            return input.length <= 45;
        },
        maxItems: null,
        placeholder: Lang.get('ticket.type_in_tags') + '...',
        render: {
            item: function(item, escape) {
                return '<div class="item" style="background-color: ' + escape(item.colour) + '; color: ' + item.colour_text + '">'
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
                    + '<img class="avatar" src="data:image/jpeg;base64, ' + escape(item.avatar) + '" width="16" /> &nbsp;'
                    + escape(item.formatted_name)
                    + '</div>';
            },
            option: function(item, escape) {
                return '<div>'
                    + '<img class="avatar" src="data:image/jpeg;base64, ' + escape(item.avatar) + '" width="16" /> &nbsp;'
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
    $('.jump-to-reply button').click(function() {
        $('html, body').animate({
            scrollTop: $(".reply-header").offset().top - 25
        }, 1000);
    });

    // It should only show when needed, depending on the ticket replies order
    $(window).scroll(function() {
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
    });

    // If the order is ascending, show the down arrow instead
    if (replyOrder == 'ASC') {
        $('.jump-to-reply button .fa').toggleClass('fa-arrow-up fa-arrow-down');
    }

    // Pretend a scroll to see if we should be showing the jump to reply button straight away or not
    $(window).scroll();
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

    // It's a note
    if (code.hasClass('note')) {
        // Determine where to put the note
        if (notesPosition === 0 || notesPosition === 1) {
            // Show the headers (in case its first note)
            $('.notes-header, .messages-header').show();
            if (replyOrder == 'ASC') {
                if ($('.note')[0]) {
                    // Notes already exist
                    message = code.insertAfter($('.messages-header').prev('.note').add($('.message').last()));
                } else {
                    // First note at top
                    message = code.insertAfter($('.notes-header').add($('.message').last()));
                }
            } else {
                message = code.insertAfter('.notes-header, .messages-header');
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
        $('.reply-type button, #sidebar button, #sidebar select').prop('disabled', false);
    });
}

function ticketAction(route, data) {
    // Disable buttons and dropdowns
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
        $('.quick-actions button, #sidebar button, #sidebar select').prop('disabled', false);
    });
}

function changeDepartment(data) {
    // Disable buttons and dropdowns
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
                // Poll for new replies and updates
                pollReplies();

                // If the ticket has a department email dropdown
                if ($fromSelectize.length) {
                    // Update department emails list
                    var first = null;
                    $fromSelectize[0].selectize.clearOptions();
                    $.each(response.data.emails, function (index, value) {
                        if (first === null) first = index;
                        $fromSelectize[0].selectize.addOption({value: index, text: value});
                        $fromSelectize[0].selectize.refreshOptions(false);
                    });
                    // Select first option
                    $fromSelectize[0].selectize.addItem(first, true);
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
                        // Enable hide/show password toggle if needed
                        callHideShowPassword();
                    }
                }

                // Update department templates.
                departmentTemplates = response.data.templates;
                // Force run that code that checks if we can send the email to user/operators, by mocking events.
                $('.message-form select[name="to_status"]').change();
                $('.reply-type .option.active').click();

                // Refresh follow up tab
                refreshFollowUpTab();
            } else {
                $('.ticket-update.fail').show(500).delay(5000).hide(500);
            }
        }, "json").fail(function() {
        $('.ticket-update.fail').show(500).delay(5000).hide(500);
    }).always(function() {
        // Enable buttons and dropdowns
        $('.quick-actions button, #sidebar button, #sidebar select').prop('disabled', false);
    });
}

function deleteTicket(block) {
    var type, route, text;
    if (block == true) {
        type = 'POST';
        route = laroute.route('ticket.operator.action.block');
        text = Lang.get('messages.warn_delete') + ' ' + Lang.get('ticket.block_warning');
    } else {
        type = 'DELETE';
        route = laroute.route('ticket.operator.action.destroy');
        text = Lang.get('messages.warn_delete');
    }

    // Show the alert
    swal({
        title: Lang.get('messages.are_you_sure'),
        text: text,
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#e74c3c",
        confirmButtonText: Lang.get('messages.yes_im_sure'),
        closeOnConfirm: false
    }, function(isConfirm) {
        if (isConfirm) {
            // Disable submit button
            swal.disableButtons();
            // Post destroy data
            $.ajax({
                url: route,
                type: type,
                data: { ticket: ticketId },
                success: function(response) {
                    if (response.status == 'success') {
                        swal(
                            Lang.get('messages.deleted'),
                            Lang.get('messages.success_deleted', { item: Lang.get('general.record') }),
                            'success'
                        );
                        // Go back to ticket grid
                        window.location.href = ticketGridUrl;
                    } else {
                        swal(
                            Lang.get('messages.error'),
                            Lang.get('messages.error_deleted', { item: Lang.get('general.record') }),
                            'error'
                        );
                    }
                }
            }).fail(function() {
                swal(
                    Lang.get('messages.error'),
                    Lang.get('messages.error_deleted', { item: Lang.get('general.record') }),
                    'error'
                );
            });
        }
    });
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
            // Update log
            ticket.updateLogTable();
            // Poll for new replies and updates
            pollReplies(true);
        } else {
            $('.ticket-update.fail').show(500).delay(5000).hide(500);
        }
    }, "json").fail(function() {
        $('.ticket-update.fail').show(500).delay(5000).hide(500);
    });
}

function refreshFollowUpTab() {
    // Show loading icon
    $('form.followup-form').html('<i class="fa fa-spinner fa-pulse fa-3x fa-fw"></i>');

    // Fetch view
    $.get(
        laroute.route('ticket.operator.followup.render', { id: ticketId }), { },
        function(response) {
            if (response.status == 'success') {
                // Update form
                $('form.followup-form').html(response.data);
            } else {
                // Show message to refresh
                $('form.followup-form').html(Lang.get('messages.please_refresh'));
            }
        }, "json").fail(function() {
            // Show message to refresh
            $('form.followup-form').html(Lang.get('messages.please_refresh'));
        });
}

/*
 * Polling for new messages & other ticket related updates
 */
var lastReplyPoll;
var pollTimeout;
var $tagSelectize, $assignSelectize;

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
            if (typeof response.data != 'undefined') {
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
                $(window).resize();

                // Show other operator's draft
                if (response.data.draft !== '') {
                    $('.ticket-draft').html(response.data.draft).show(500);
                } else {
                    $('.ticket-draft').hide(500);
                }

                // Update ticket details
                $('.last-action').html(response.data.details.updated_at);
                if (response.data.details.update) {
                    // Update sidebar items
                    $('.edit-user').html(response.data.details.user);
                    $('select[name="department"]').val(response.data.details.department);
                    $('select[name="priority"]').val(response.data.details.priority);

                    // Update status in sidebar
                    if ($('select[name="status"]').val() != response.data.details.status) {
                        $('select[name="status"]').val(response.data.details.status);

                        // Update the status dropdown in the notes box (only if it's changed)
                        $('.notes-form').find('select[name="to_status"]').val(response.data.details.status);
                    }

                    $tagSelectize[0].selectize.clear(true);
                    $tagSelectize[0].selectize.refreshOptions(false);
                    $.each(response.data.details.tags, function(index, value) {
                        $tagSelectize[0].selectize.addOption({ id: value.id, name: value.name, colour: value.colour, colour_text: value.colour_text });
                        $tagSelectize[0].selectize.refreshOptions(false);
                        $tagSelectize[0].selectize.addItem(value.name, true);
                    });

                    $assignSelectize[0].selectize.clear(true);
                    $assignSelectize[0].selectize.refreshOptions(false);
                    $.each(response.data.details.assigned, function(index, value) {
                        $assignSelectize[0].selectize.addOption({ id: value.id, formatted_name: value.formatted_name, avatar: value.avatar });
                        $assignSelectize[0].selectize.refreshOptions(false);
                        $assignSelectize[0].selectize.addItem(value.id, true);
                    });

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
                        $('.close-ticket').hide();
                    } else {
                        $('.close-ticket').show();
                    }

                    // If locked, show unlock button instead
                    if (response.data.details.locked) {
                        $('.lock-ticket').hide();
                        $('h1 .fa-lock, .unlock-ticket').show();
                    } else {
                        $('.lock-ticket').show();
                        $('h1 .fa-lock, .unlock-ticket').hide();
                    }

                    // Update log and escalation rules tables
                    ticket.updateLogTable();
                    ticket.updateEscalationsTable();
                }

                // Update custom fields
                if (typeof response.data.customfields != 'undefined') {
                    $('#sidebar .customfields').html(response.data.customfields);
                    // Enable hide/show password toggle if needed
                    callHideShowPassword();
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