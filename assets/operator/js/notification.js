var lastPoll;
var stack = {"dir1": "up", "dir2": "left"};

if (notificationType !== 0) {

    // Poller for notifications
    (function pollNotifications() {
        // Calll the ajax
        $.ajax({
            url: laroute.route('core.operator.notification'),
            data: {
                lastPoll: lastPoll
            },
            success: function(response) {
                // If there are notifications, show them
                if (typeof response.data != 'undefined') {
                    // Make sure we have desktop permission if needed
                    if (notificationType == '2') {
                        PNotify.desktop.permission();
                    }
                    // Fire each notification
                    $.each(response.data, function(index, value) {
                        if (notificationType == '1') {
                            // Browser notification
                            new PNotify({
                                title: value.title,
                                text: value.text,
                                addclass: 'stack-bottomright warning',
                                stack: stack,
                                icon: "fa fa-bell",
                                styling: "fontawesome",
                                buttons: {
                                    closer: true,
                                    closer_hover: false,
                                    sticker: false
                                }
                            });
                        } else {
                            // Desktop notification
                            new PNotify({
                                title: value.title,
                                text: $('<p>' + value.text + '</p>').text(),
                                desktop: {
                                    desktop: true,
                                    icon: notificationIcon,
                                    tag: value.text
                                }
                            });
                        }
                    });
                }

                // Update the last poll time
                lastPoll = response.timestamp;
            },
            dataType: "json",
            complete: function() {
                setTimeout(function() {
                    pollNotifications();
                }, 15000);
            } // Delay the next poll by 10 seconds
        });
    })();

}