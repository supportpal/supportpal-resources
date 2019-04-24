;(function (global) {

    /**
     * Init wrapper for the core module.
     *
     * @param {Object} context  The Object that the library gets attached to in
     *                          library.init.js.  If the library was not loaded with an AMD loader such as
     *                          require.js, this is the global Object.
     */
    function initCore (context) {
        'use strict';

        // PRIVATE CONSTANTS

        // Notification types.
        var DISABLED = 0,
            IN_BROWSER = 1,
            IN_DESKTOP = 2;

        // PRIVATE UTILITY HELPERS
        //

        /**
         * Poll for new notifications.
         *
         * @param instance SupportPalNotifications instance.
         */
        var poll = function (instance) {
            $.ajax({
                url: laroute.route('core.operator.notification'),
                data: {
                    lastPoll: instance._lastPoll,
                    lastTicket: instance._lastTicket,
                    lastMessage: instance._lastMessage
                },
                success: function(response) {
                    // Make sure we have some notifications...
                    if (typeof response.data === 'undefined') {
                        return;
                    }

                    // Fire each notification
                    $.each(response.data, function(index, value) {
                        if (instance._notificationType == IN_BROWSER) {
                            instance.showBrowserNotification(value.title, value.text);
                        } else {
                            instance.showDesktopNotification(value.title, value.text, value.route);
                        }
                    });

                    // Update the last poll time
                    instance._lastPoll = response.timestamp;
                    instance._lastTicket = response.lastTicket;
                    instance._lastMessage = response.lastMessage;
                },
                complete: function() {
                    // In 'timeout' seconds, poll again.
                    setTimeout(function () {
                        poll(instance);
                    }, instance._timeout);
                },
                timeout: instance._timeout,
                dataType: "json"
            });
        };

        /**
         * This is the constructor for the Object.  Note that the constructor is also being
         * attached to the context that the library was loaded in.
         *
         * @param {Object} opt_config Contains any properties that should be used to
         *                            configure this instance of the library.
         * @constructor
         */
        var SupportPalNotifications = context.SupportPalNotifications = function (opt_config) {
            opt_config = opt_config || {};

            // Instance variables (accessible only in the library).
            this._lastPoll = this._lastTicket = this._lastMessage = null;

            this._notificationType = opt_config.hasOwnProperty('type') ? opt_config['type'] : DISABLED;
            this._notificationIcon = opt_config.hasOwnProperty('icon') ? opt_config['icon'] : null;
            this._timeout = opt_config.hasOwnProperty('timeout') ? opt_config['timeout'] : 15000;

            return this;
        };

        // LIBRARY PROTOTYPE METHODS
        // These methods define the public API.

        /**
         * Start polling for notifications.
         *
         * @param timeout How often to poll for notifications in milliseconds.
         */
        SupportPalNotifications.prototype.poll = function () {
            if (this._notificationType == DISABLED) {
                console.log("Polling for notifications disabled in operator settings.");
                return;
            }

            // Start polling.
            poll(this);
        };

        /**
         * Show a browser notification.
         *
         * @param title
         * @param text
         */
        SupportPalNotifications.prototype.showBrowserNotification = function (title, text) {
            new PNotify({
                title: title,
                text: text,
                addclass: 'stack-bottomright warning',
                stack: {"dir1": "up", "dir2": "left"},
                icon: "fa fa-bell",
                styling: "fontawesome",
                buttons: {
                    closer: true,
                    closer_hover: false,
                    sticker: false
                }
            });
        };

        /**
         * Show a desktop notification.
         *
         * @param title
         * @param text
         */
        SupportPalNotifications.prototype.showDesktopNotification = function (title, text, route) {
            // Request permission for the browser to display notifications (a popup will show up).
            PNotify.desktop.permission();

            var notify = new PNotify({
                title: title,
                text: $('<p>' + text + '</p>').text(),
                desktop: {
                    desktop: true,
                    icon: this._notificationIcon,
                    tag: text
                }
            });

            // Handle click
            notify.get().on('click', function (e) {
                // Open the link if one is provided
                if (typeof route !== 'undefined') {
                    // Prevent the browser from focusing the Notification's tab
                    e.preventDefault();
                    window.open(route, '_blank');
                }

                // Close the notification
                notify.desktop.close();
            });
        };
    }

    var init = function (context) {
        initCore(context);

        return context.SupportPalNotifications;
    };

    // Load Library
    init(this);

})(this);
