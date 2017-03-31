$(function () {

    var $sidebar = $('#sidebar');

    // Collapse appropriate side boxes on DOM load.
    if (typeof Cookies !== 'undefined') {
        toggleAllCookieState();
    }

    // Toggle side box visibility when sidebar is refreshed.
    $sidebar.on('refreshedSidebar', function () {
        toggleAllCookieState();
    });

    // Toggle side box visibility when clicked.
    $sidebar.on('click', 'h3.collapsable', function() {
        toggleSidebox(this);

        // The sidebox must have an ID to store the cookie.
        if (typeof Cookies !== 'undefined' && typeof $(this).prop('id') !== 'undefined') {
            Cookies.set($(this).prop('id'), $(this).hasClass('closed') ? 'collapsed' : 'expanded');
        }
    });

    /**
     * Toggle the visibility of a given side box.
     *
     * @param context
     * @param slide   (optional) If we want an animation to occur, does by default.
     */
    function toggleSidebox(context, slide) {
        if (! $sidebar.hasClass('sidebar-close') || $(window).width() > 960) {
            $(context).find('.arrow .fa').toggleClass('fa-chevron-down fa-chevron-up');
            $(context).toggleClass('closed');

            if (typeof slide === 'undefined' || slide) {
                $(context).next().slideToggle(500);
            } else {
                $(context).next().toggle();
            }
        }
    }

    /**
     * Loop over each side box and collapse it depending on the state of the cookie. By default,
     * all side boxes are expected to be open on DOM load.
     */
    function toggleAllCookieState() {
        $sidebar.find('h3.collapsable').each(function (index) {
            if (typeof $(this).prop('id') !== 'undefined') {
                var cookie = Cookies.get($(this).prop('id'));

                // Side box is currently open but cookie says it should be closed.
                if (! $(this).hasClass('closed') && cookie == 'collapsed') {
                    toggleSidebox(this, false);
                }
            }
        });
    }

});