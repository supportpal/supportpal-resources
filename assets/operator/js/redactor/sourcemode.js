(function($) {

    // We need to pull out here, if Redactor hasn't been included.
    if (typeof $.Redactor === 'undefined') {
        return;
    }


    $.Redactor.prototype.sourceMode = function () {

        /**
         * Current redactor instance.
         *
         * @type {$.Redactor}
         */
        var redactor = null;

        //
        // PUBLIC API

        return {

            /**
             * Initialise the redactor plugin.
             *
             * @return {void}
             */
            init: function () {

                // Register redactor instance.
                redactor = this;

                // Disable all the buttons except merge fields.
                redactor.$toolbar.find('a.re-icon:not(.re-mergeFields)').addClass('redactor-button-disabled');

                // Hide all buttons except the source mode and merge fields buttons.
                redactor.$toolbar.find('a.redactor-button-disabled:not(.re-html)').hide();

                // Force source mode.
                redactor.code.showCode();

            },

        };
    };

})(jQuery);