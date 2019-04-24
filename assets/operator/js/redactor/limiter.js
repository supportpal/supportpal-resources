(function($) {

    // We need to pull out here, if Redactor hasn't been included.
    if (typeof $.Redactor === 'undefined') {
        return;
    }

    $.Redactor.prototype.limiter = function () {

        /**
         * Current redactor instance.
         *
         * @type {$.Redactor}
         */
        var redactor = null;

        /**
         * Count container element.
         *
         * @type {*|jQuery|HTMLElement}
         */
        var $container = $("<div/>", { class: 'redactor-plugin-limiter-count' });

        /**
         * Count element.
         *
         * @type {*|jQuery|HTMLElement}
         */
        var $count = $("<span/>", { class: 'text-count' });

        /**
         * Handle key event.
         *
         * @param e
         */
        var limit = function (e) {
            var key = e.which;
            var ctrl = e.ctrlKey || e.metaKey;
            var arrows = [37, 38, 39, 40];

            if (key === redactor.keyCode.BACKSPACE
                || key === redactor.keyCode.DELETE
                || key === redactor.keyCode.ESC
                || key === redactor.keyCode.SHIFT
                || (ctrl && key === 65)
                || (ctrl && key === 88)
                || (ctrl && key === 82)
                || (ctrl && key === 116)
                || (arrows.indexOf(key) !== -1)
            ) {
                return;
            }

            if (exceedsLimit()) {
                e.preventDefault();

                return false;
            }

            updateCounter();
        };

        /**
         * Check whether the characters exceeds the set limit.
         *
         * @returns {boolean}
         */
        var exceedsLimit = function () {
            return count() >= redactor.opts.limiter;
        };

        /**
         * Get the text from the textarea.
         *
         * @returns {string}
         */
        var getText = function () {
            // Remove invisible characters.
            return removeInvisibleChars(redactor.$editor.text());
        };

        /**
         * Number of characters in redactor.
         *
         * @returns {number}
         */
        var count = function () {
            return getText().length;
        };

        /**
         * Remove invisible characters from html.
         *
         * @param html
         * @returns {string}
         */
        var removeInvisibleChars = function (html) {
            return html.replace(/\uFEFF/g, '');
        };

        /**
         * Update the message length field.
         */
        var updateCounter = function () {
            $count.text(count());
        };

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

                // Disable plugin if there's no limit set.
                if (! redactor.opts.limiter) {
                    return;
                }

                // Force config.
                var originalCallback = redactor.opts.syncCallback;
                redactor.opts.syncCallback = function () {
                    if (typeof originalCallback === 'function') {
                        originalCallback();
                    }

                    updateCounter();
                };

                // Initialise count message.
                updateCounter();
                $container.append($count).append('/' + redactor.opts.limiter);
                redactor.$box.after($container);

                // Enable the plugin.
                redactor.limiter.enable();
            },

            /**
             * Enable the plugin.
             *
             * @return {void}
             */
            enable: function () {
                redactor.$editor.on('keydown.redactor-plugin-limiter', limit.bind(redactor));
                $container.show();
            },

            /**
             * Disable the plugin.
             *
             * @return {void}
             */
            disable: function () {
                redactor.$editor.off('.redactor-plugin-limiter');
                $container.hide()
            },

            /**
             * Update the counter.
             *
             * @return {void}
             */
            update: function () {
                updateCounter();
            },

        };

    };

})(jQuery);
