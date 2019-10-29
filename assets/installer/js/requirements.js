function AllowedMethods(parameters) {
    "use strict";

    // Validate parameters.
    var sameStepRoute = parameters.sameStepRoute,
        nextStepRoute = parameters.nextStepRoute,
        methodRoute = parameters.route,
        LANG = parameters.LANG;

    // Base DOM element.
    var $elem = $('.allowed-methods');

    /**
     * Handle the isAllowed response.
     *
     * @param method
     * @param data
     * @returns {boolean}
     */
    var isExpected = function (method, data) {
        var expected = 'method is allowed.',
            $td = $elem.find('.' + method.toLowerCase() + '-request').find('td');

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
     * Count how many required requirements pass.
     *
     * @returns {number}
     */
    var countRequiredSuccess = function () {
        return $elem.find('.toggle').find('table.required-methods .fa-success').length;
    };

    /**
     * Count how many required requirements there are.
     *
     * @returns {number}
     */
    var totalRequired = function () {
        return $elem.find('.toggle').find('table.required-methods tr').length;
    };

    /**
     * Count how many optional requirements passed.
     *
     * @returns {number}
     */
    var countOptionalSuccess = function ()
    {
        return $elem.find('.toggle').find('table.optional-methods .fa-success').length;
    };

    /**
     * Count how many optional requirements there are.
     *
     * @returns {number}
     */
    var totalOptional = function ()
    {
        return $elem.find('.toggle').find('table.optional-methods tr').length;
    };

    /**
     * Check if the required requirements pass.
     *
     * @returns {boolean}
     */
    var requiredValid = function ()
    {
        return countRequiredSuccess() === totalRequired();
    };

    /**
     * Check if the optional requirements pass.
     *
     * @returns {boolean}
     */
    var optionalValid = function ()
    {
        return countOptionalSuccess() === totalOptional();
    };

    /**
     * Run the validation routine.
     *
     * @returns {void}
     */
    this.validate = function ()
    {
        $.when(
            isAllowed('GET', $.Deferred()),
            isAllowed('POST', $.Deferred()),
            isAllowed('PUT', $.Deferred()),
            isAllowed('DELETE', $.Deferred()),
            isAllowed('OPTIONS', $.Deferred())
        ).then(function () {
            // Show total number of valid requirements.
            $elem.find('.is-valid').html(
                LANG.requirements
                    .replace(':required_count', countRequiredSuccess())
                    .replace(':total_required', totalRequired())
                    .replace(':optional_count', countOptionalSuccess())
                    .replace(':total_optional', totalOptional())
            );

            // Show success/error icon.
            $elem.find('.status').find('.fa-success, .fa-orange, .fa-error').hide();
            if (requiredValid()) {
                $elem.find('.status').find(optionalValid() ? '.fa-success' : '.fa-orange').show();
            } else {
                $elem.find('.status').find('.fa-error').show();
            }

            // Determine where the form should submit to.
            var $form = $('form');
            if (requiredValid() && $form.find('input[type=hidden][name="_valid"]').val() === "1") {
                $form.prop('action', nextStepRoute);
            } else {
                $form.prop('action', sameStepRoute);
                $form.find('input[type=submit]').val(LANG.retry);
            }

            $form.find('input[type=submit]').removeAttr('disabled');
        });
    }
}
