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
            brand_id: document.getElementsByName('brand_id')[0].value,
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

/**
 * SSL Warning.
 *
 * @param parameters
 * @constructor
 */
function SslWarning(parameters)
{
    "use strict";

    // Make sure the required parameters exist.
    if (! parameters.hasOwnProperty('route')) {
        throw Error('InvalidArgumentException. Missing argument: \'route\'.');
    }

    /**
     * Brand URL.
     *
     * @type {string}
     */
    var brand_route = parameters.route;

    /**
     * Current instance.
     *
     * @type {SslWarning}
     */
    var instance = this;

    /**
     * Set brand route.
     *
     * @param route
     */
    this.setRoute = function (route)
    {
        brand_route = route;
    };

    /**
     * Get brand route.
     *
     * @returns {string}
     */
    this.getRoute = function ()
    {
        return brand_route;
    };

    /**
     * Get the SSL route (replace http:// with https://)
     *
     * @returns {string}
     */
    this.getSslRoute = function ()
    {
        return brand_route.replace('http://', 'https://');
    };

    /**
     * Register the modal.
     */
    this.init = function () {
        // Show warning on enabling SSL
        var currentSSLValue = $('input[name="enable_ssl"]:checked').val();
        $('input[name="enable_ssl"]').on('change', function() {
            var self = this,
                type = $(self).attr('type'),
                value = $('input[name="enable_ssl"]:checked').val();

            if (value == 1) {
                swal({
                    customClass: 'delete-modal',
                    title: Lang.get('messages.does_look_correct'),
                    html: '<div class="warning-box">' + Lang.get('core.enable_ssl_warning') + '</div>'
                    + Lang.get('core.verify_frontend_loads') + '<br /><br />'
                    + '<iframe style="width: 100%;" src="' + instance.getSslRoute() + '"></iframe>',
                    type: "warning",
                    showCancelButton: true,
                    confirmButtonColor: "#e74c3c",
                    confirmButtonText: Lang.get('messages.no_revert'),
                    cancelButtonText: Lang.get('general.yes'),
                    allowOutsideClick: false
                }, function (isConfirm) {
                    if (isConfirm) {
                        if (type == 'checkbox') {
                            $(self).prop('checked', false);
                        } else {
                            $('input[name="enable_ssl"]').val([currentSSLValue]);
                        }
                    }
                });
            } else {
                // Set another value, update the current value
                currentSSLValue = value;
            }
        });  
    };
}