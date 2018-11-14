function AllowedMethods(parameters)
{
    "use strict";
    
    // Validate parameters.
    var sameStepRoute = parameters.sameStepRoute,
        nextStepRoute = parameters.nextStepRoute,
        methodRoute = parameters.route,
        LANG = parameters.LANG;

    /**
     * Handle the isAllowed response.
     *
     * @param method
     * @param data
     * @returns {boolean}
     */
    var isExpected = function (method, data)
    {
        var expected = 'method is allowed.',
            $td = $('.allowed-methods').find('.'+method.toLowerCase()).find('td');

        if (data === expected) {
            $td.html('<i class="fa fa-check fa-success" aria-hidden="true"></i>&nbsp;' + LANG.success);

            return true;
        } else {
            $td.html('<i class="fa fa-times fa-error" aria-hidden="true"></i>&nbsp;' + LANG.notAvailable);

            return false;
        }
    };

    /**
     * Fire an AJAX call to the allowed method installer route.
     *
     * @param method
     * @param deferred
     * @returns {*}
     */
    var isAllowed = function (method, deferred)
    {
        // We need to force a BODY for POST requests, otherwise a 411 error may be thrown by the web server.
        $.ajax({ url: methodRoute, type: method, data: "{}" })
            .done(function (data, statusText, jqXHR) {
                isExpected(method, data);
            })
            .fail(function () {
                isExpected(method, false);
            })
            .always(deferred.resolve);

        // This is a bit of a hack, to ensure that $.when().then() fires after all the AJAX
        // have completed. The issue is that .then() will immediately fire the failure callback
        // rather than waiting until all requests have completed.
        // https://stackoverflow.com/questions/5824615/jquery-when-callback-for-when-all-deferreds-are-no-longer-unresolved-either
        return deferred;
    };

    /**
     * Run the validation routine.
     *
     * @returns {void}
     */
    this.validate = function ()
    {
        // Make whether each HTTP method is allowed.
        $.when(isAllowed('GET', $.Deferred()), isAllowed('POST', $.Deferred()), isAllowed('PUT', $.Deferred()), isAllowed('DELETE', $.Deferred()))
            .then(function() {
                // Set the status of all requirements in the group.
                var $elem = $('.allowed-methods'),
                    actualValid = $elem.find('.toggle').find('.fa-success').length,
                    expectedValid = $elem.find('.toggle').find('table tr').length,
                    isValid = actualValid === expectedValid,
                    message = LANG.requirements.replace(':count', actualValid);

                // Show total number of valid requirements.
                $elem.find('.is-valid').html(message);

                // Show success/error icon.
                if (! isValid) {
                    $elem.find('.status').find('.fa-error').show();
                    $elem.find('.status').find('.fa-orange, .fa-success').hide();
                } else {
                    $elem.find('.status').find('.fa-success').show();
                    $elem.find('.status').find('.fa-orange, .fa-error').hide();
                }

                // Determine where the form should submit to.
                var $form = $('form');
                if (isValid && $form.find('input[type=hidden][name="_valid"]').val() === "1") {
                    $form.prop('action', nextStepRoute);
                } else {
                    $form.prop('action', sameStepRoute);
                    $form.find('input[type=submit]').val(LANG.retry);
                }

                $form.find('input[type=submit]').removeAttr('disabled');
            });
    }
}

$(document).ready(function() {
    $('button').click(function () {
        alert($("<div/>").html($(this).next('pre').html()).text());
    });
});