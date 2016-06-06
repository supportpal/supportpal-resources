var redactor;

$(document).ready(function() {

    // Date picker
    callPikaday();

    // Enable hide / show password toggle
    callHideShowPassword();

    // Redactor
    redactor = $('textarea[name=text]').redactor($.Redactor.default_opts);

    // Regex for email
    var re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    // CC email input
    $('select[name="cc[]"]').selectize({
        plugins: ['restore_on_backspace', 'remove_button'],
        delimiter: ',',
        persist: false,
        dropdownParent: 'body',
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
        }
    });

    // Update message
    $('.message-form').submit(function(event) {
        event.preventDefault();

        if ($(this).valid()) {
            saveMessage($(this));
        }
    });

    // Update ticket custom fields
    $('.save-fields').on('click', function() {
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
    });

});

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
            $('.ticket-update.success').show(500).delay(5000).hide(500);

            // Show new message
            var message = $(response.data.view).insertAfter($('.message').last());

            // Special effects
            message.css('border-left','3px solid #a4d0e9');
            setTimeout(function(){ message.css('border-left','0'); }, 10000);
            message.css('background','#e5f1f9');
            setTimeout(function(){ message.css('background',''); }, 10000);

            // Reset the form
            form.find('textarea[name="text"]').val('').prop('disabled', false);
            redactor.redactor('code.set', '');
            $('#attached-files').find('li:not(:first)').remove();
            $('.attachment-details').find('input[type=hidden][name^="attachment["]:not(:first)').remove();

            // Update status
            $('.ticket-status').text(response.data.status_name);
            $('.ticket-status').css("background-color", response.data.status_colour);
        } else {
            if (typeof response.message != 'undefined') {
                // Custom message
                $('.ticket-custom.fail').text(response.message).show(500).delay(5000).hide(500);
            } else {
                $('.ticket-update.fail').show(500).delay(5000).hide(500);
            }
            // Re-enable textarea
            form.find('textarea[name="text"]').prop('disabled', false);
        }
    }).fail(function() {
        // Show error
        $('.ticket-update.fail').show(500).delay(5000).hide(500);
        // Re-enable textarea
        form.find('textarea[name="text"]').prop('disabled', false);
    }).always(function() {
        // Reset form
        form.find('input[type="submit"]').prop('disabled', false);
    });
}