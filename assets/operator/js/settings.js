$(function() {
    // Add CodeMirror editor.
    if ($('textarea[name=global_email_header]').length) {
        $('textarea[name=global_email_header]').initCodeMirror();
    }
    if ($('textarea[name=global_email_footer]').length) {
        $('textarea[name=global_email_footer]').initCodeMirror();
    }

    // The editor needs refreshing if it's rendered while out-of-view for some reason..
    $('.tabs li').on('click', function () {
        $('.CodeMirror').each(function(i, el){
            el.CodeMirror.refresh();
        });
    });

    $('.validate-smtp').on('click', function () {
        // Get data
        var data = {
            smtp_host: document.getElementsByName('smtp_host')[0].value,
            smtp_port: document.getElementsByName('smtp_port')[0].value,
            smtp_encryption: $("[name='smtp_encryption']").val(),
            smtp_username: document.getElementsByName('smtp_username')[0].value,
            smtp_password: document.getElementsByName('smtp_password')[0].value
        };

        // Show in progress
        $('.smtp-validate').hide();
        $('.smtp-validate.text-progress').show();

        // Post SMTP data
        $.post(
            laroute.route('core.operator.generalsetting.validatesmtp'),
            data,
            function (response) {
                if (response.status == true) {
                    $('.smtp-validate.text-progress').hide();
                    $('.smtp-validate.text-success').show();
                } else {
                    $('.smtp-validate.text-progress').hide();
                    $('.smtp-validate .error-message').text('').text(response.message);
                    $('.smtp-validate.text-fail').show();
                }
            }, "json").fail(function () {
            $('.smtp-validate.text-progress').hide();
            $('.smtp-validate .error-message').text('');
            $('.smtp-validate.text-fail').show();
        });
    });

    // On page load, if the radio is checked, show the sections...
    if ($('input[name="email_method"][value="smtp"]').is(":checked")) {
        $('#smtp').show();
    }
    if ($('input[name="smtp_requires_auth"][value="1"]').is(":checked")) {
        $('#smtp_auth').show();
    }
    if ($('input[name="captcha_type"][value="2"]').is(":checked")
        || $('input[name="captcha_type"][value="3"]').is(":checked")
    ) {
        $('.recaptcha').show();
    }
});