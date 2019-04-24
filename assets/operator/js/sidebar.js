/**
 * Load the ticket grid sidebar.
 *
 * @type {{refresh}}
 */
var sideBar = (function ()
{
    "use strict";

    var storageName = 'sidebarData',
        storageExpiry = 3600000;

    /**
     * Convert string to HTML entities.
     *
     * @param string
     * @returns {*|jQuery}
     */
    var encode = function (string)
    {
        return $('<div/>').text(string).html();
    };

    /**
     * Update sidebar data.
     *
     * @param data
     */
    var updateSidebar = function (data)
    {
        // Update counts
        $.each(data.filters, function(key, value) {
            updateCount($('ul.filter-list .badge[data-id="' + key + '"]'), value);
        });
        $.each(data.obj_statuses, function(key, value) {
            updateCount($('ul.status-list .badge[data-id="' + key + '"]'), value);
        });
        $.each(data.obj_departments, function(key, value) {
            updateCount($('ul.department-list .badge[data-id="' + key + '"]'), value);
        });
        $.each(data.obj_brands, function(key, value) {
            updateCount($('ul.brand-list .badge[data-id="' + key + '"]'), value);
        });

        // Update recent activity
        $('ul.recent-activity').empty();
        $.each(data.recentActivity, function(key, value) {
            $("ul.recent-activity").append('<li class="clear">'
                + '<img src="' + value.user.avatar_url + '" width="21" height="21" alt="'
                + encode(value.user.formatted_name) + '"' + 'class="avatar" /> <strong>' + encode(value.user.formatted_name)
                + '</strong><br />' + value.event + '<div class="description">' + value.created_at + '</div>'
                + '</li>');
        });
        if ($('ul.recent-activity li').length == 0) {
            $('ul.recent-activity').parent().hide();
        } else {
            $('ul.recent-activity').parent().show();
        }

        // Update active operators
        $('ul.active-operators').empty();
        var count = 0;
        $.each(data.activeOperators, function(key, value) {
            count++;
            $("ul.active-operators").append('<li ' + (count > 10 ? 'class="hide"' : '') + '>' +
                '<img src="' + value.avatar_url
                + '" width="21" height="21" alt="' + encode(value.formatted_name) + '"'
                + 'class="avatar" /> ' + encode(value.formatted_name)
                + '</li>');
        });
        if (count == 0) {
            $('ul.active-operators').parent().hide();
        } else {
            $('ul.active-operators').parent().show();
        }

        // Refresh timeago.
        if (typeof timeAgo !== 'undefined') {
            timeAgo.render($('time.timeago'));
        }
    };

    /**
     * Update the count in the sidebar for a given badge
     *
     * @param $item
     * @param value
     */
    var updateCount = function ($item, value)
    {
        if (value == 0) {
            $item.hide();
        } else {
            $item.text(value > 999 ? '999+' : value).show();
        }
    };

    /*
     * Initialise sidebar.
     */

    // If we have the sidebar data stored in local storage, use that initially before refreshing it
    var sidebarData = localStorage.getItem(storageName);
    if (sidebarData !== null) {
        sidebarData = JSON.parse(sidebarData);
        if (sidebarData !== 'undefined' && sidebarData.expires !== 'undefined'
            && sidebarData.expires < (new Date).getTime() + storageExpiry
        ) {
            updateSidebar(sidebarData.data);
        } else {
            localStorage.removeItem(storageName);
        }
    }

    /**
     * Public API.
     */
    return {
        /**
         * Fetch the latest sidebar data.
         */
        refresh: function ()
        {
            $.get(laroute.route('ticket.operator.ticket.sidebar'))
                .done(function (response) {
                    if (response.status == 'success') {
                        // Update the sidebar
                        updateSidebar(response.data);

                        // Store the latest sidebar data in local storage.
                        localStorage.setItem(storageName, JSON.stringify({ data: response.data, expires: (new Date).getTime() + storageExpiry }))
                    }
                });
        }
    };
})();

// Force refresh of the sidebar to load the latest counts and store it in local storage.
sideBar.refresh();
