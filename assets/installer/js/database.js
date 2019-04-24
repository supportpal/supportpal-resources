/**
 * Initialise an database migrations + seeds installer.
 *
 * @param parameters
 */
var installer = function (parameters) {
    "use strict";

    // Validate constructor arguments.
    (function () {
        if (typeof parameters.url !== 'string') {
            throw new Error('Invalid argument "url", expecting string.');
        }

        if (typeof parameters.is_upgrade !== 'undefined' && typeof parameters.is_upgrade !== 'boolean') {
            throw new Error('Invalid argument "is_upgrade", expecting boolean.');
        }
    })();

    /**
     * URL for AJAX to run.
     */
    var url = parameters.url;

    /**
     * Whether this is a fresh install or an upgrade.
     */
    var is_upgrade = parameters.is_upgrade || false;

    /**
     * jQuery #migration instance.
     */
    var $preMigration, $migration;

    /**
     * Determine if a string is valid JSON.
     *
     * @param str
     * @return boolean
     */
    var isValidJson = function (str) {
        try {
            JSON.parse(str);

            return true;
        } catch (e) {
            return false;
        }
    };

    /**
     * AJAX error handler.
     *
     * @param string
     * @return void
     */
    var errorHandler = function (string) {
        alert('Something went wrong while contacting the server.');

        // Add the error message to the log.
        if (isValidJson(string)) {
            var json = JSON.parse(string);

            $migration.find('textarea').append($('<div>' + json.message + '</div>').text());
        } else {
            $migration.find('textarea').append($('<div>' + string + '</div>').text());
        }
    };

    /**
     * Make new AJAX request. This will continuously process all migrations until complete.
     */
    var makeRequest = function () {
        // Default AJAX parameters.
        var params = { '_token': csrf_token },
            $textarea = $migration.find('textarea');

        // Determine if we're upgrading an existing install.
        if (is_upgrade) {
            params = $.extend(params, { 'upgrade': true });
        }

        $.post(url, params, 'json')
            .done(function (json, textStatus, jqXHR) {
                // Make sure we have valid json
                if (isValidJson(jqXHR.responseText) == false) {
                    return errorHandler('<span>' + jqXHR.responseText + '</span>');
                }

                // Update the log.
                $textarea.append(json.data.verbose).scrollTop($textarea[0].scrollHeight);

                // Fire the next request after 0.5 seconds
                if (json.data.complete == true) {
                    $textarea.scrollTop($textarea[0].scrollHeight);
                    $migration.find('input[type=submit]').show().removeAttr('disabled');

                    // Remove alert when clicking continue.
                    window.onbeforeunload = null;
                } else {
                    window.setTimeout(function () {
                        makeRequest();
                    }, 500);
                }
            })
            .fail(function (jqXHR, textStatus, errorThrown) {
                errorHandler(jqXHR.responseText);
            })
            .always(function () {
                $textarea.removeClass('loadinggif');
            });
    };

    $(function () {
        $preMigration = $('#pre-migration');
        $migration = $('#migration');

        // Prevent closing of the browser window.
        window.onbeforeunload = function (e) {
            return "Are you sure you want to close the browser window?";
        };

        // Register click event handler, we need page interaction in order for the onbeforeunload event to fire.
        $preMigration.on('click', '#beginMigration', function (e) {
            e.preventDefault();

            // Hide pre-migration and show migration log.
            $preMigration.toggle();
            $migration.toggle();

            // Start migration AJAX requests.
            makeRequest();
        });
    });
};
