var installer = function () {

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
    var errorHandler = function (string)
    {
        alert('Something went wrong while contacting the server.');

        // Add the error message to the log.
        if (isValidJson(string)) {
            var json = JSON.parse(string);

            $('textarea').append($('<div>'+json.message+'</div>').text());
        } else {
            $('textarea').append($('<div>'+string+'</div>').text());
        }
    };

    return  {

        /**
         * Make new AJAX request. This will continuously process
         * all migrations until complete.
         * 
         * @param url
         * @param is_upgrade
         */
        makeRequest : function (url, is_upgrade)
        {
            if (!url) {
                alert('Please specify a URL when making a request!');
                return;
            }

            // Default AJAX parameters.
            var params = { '_token': csrf_token };

            // Determine if we're upgrading an existing install.
            is_upgrade = is_upgrade || false;
            if (is_upgrade) {
                params = $.extend(params, { 'upgrade': true });
            }

            $.post(url, params, 'json')
                .done(function( json, textStatus, jqXHR ) {
                    // Make sure we have valid json
                    if (isValidJson(jqXHR.responseText) == false) {
                        return errorHandler('<span>'+jqXHR.responseText+'</span>');
                    }

                    // Update the log.
                    $('textarea').append(json.data.verbose).scrollTop($('textarea')[0].scrollHeight);

                    // Fire the next request after 0.5 seconds
                    if (json.data.complete == true) {
                        $('textarea').append('Completed. Please click continue.\n').scrollTop($('textarea')[0].scrollHeight);
                        $('input[type=submit]').show().removeAttr('disabled');
                    } else {
                        window.setTimeout(function () {
                            installer.makeRequest(url, is_upgrade);
                        }, 500);
                    }
                })
                .fail(function (jqXHR, textStatus, errorThrown) {
                    errorHandler(jqXHR.responseText);
                })
                .always(function() {
                    $('textarea').removeClass('loadinggif');
                });
        }

    };

}();