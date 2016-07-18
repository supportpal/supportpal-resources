$(document).ready(function() {

    // Removes address bar on mobiles and tablets
    window.addEventListener("load", function() {
        setTimeout(function() {
            window.scrollTo(0, 0);
        });
    });

    // Mobile navigation bars button
    $('.mobile-nav').on('click', function() {
        // Toggle navigation
        $('#navarea').toggle(500);
        $(this).toggleClass('active');

        // Scroll to top if mobile
        if ($(window).height() <= 720) {
            $('html, body').animate({
                scrollTop: 0
            }, 500);
        }
    });

    // Clicking navigation menu
    $('a.dropdownmenu').on('click', function() {
        if ($(window).width() <= 1080) {
            if (!$(this).hasClass('activeParent')) {
                // Close other open lists
                var $other = $('.activeParent').not($(this).parents('ul').prev('.activeParent'));
                $other.toggleClass('activeParent');
                $other.next().toggle(500);
                $other.find('.fa').toggleClass('fa-chevron-down fa-chevron-up');
            }

            // Toggle this list
            $(this).toggleClass('activeParent');
            $(this).find('.fa').toggleClass('fa-chevron-down fa-chevron-up');
            $(this).next().toggle(500);
        }
    });

    $(window).on('resize', function() {
        // Change any arrows back to normal
        $('#navarea .activeParent').removeClass('activeParent').find('.fa').each(function() {
            $(this).removeClass('fa-chevron-up fa-chevron-down');
            if (!$(this).hasClass('fa-chevron-right')) {
                $(this).addClass('fa-chevron-down');
            }
        });

        // Show/hide navigation lists depending on screen format (desktop/mobile)
        if ($(this).width() > 1080) {
            $('#navarea, ul#nav ul').css('display', 'block');
        } else {
            $('#navarea, ul#nav ul').css('display', 'none');
            $('.mobile-nav').removeClass('active');
        }

        // Ticket viewing sticks and adds margin at top or bottom
        if ($('.ticket-viewing').is(':visible')) {
            if ($(this).height() <= 720) {
                // Mobile
                $('.desk_content_padding').css({ 'margin-bottom': $('.ticket-viewing').outerHeight(), 'margin-top': 0 });
            } else {
                // Desktop
                $('.desk_content_padding').css({ 'margin-bottom': 0, 'margin-top': $('.ticket-viewing').outerHeight() });
            }
        } else {
            // Not visible so remove any margin
            $('.desk_content_padding').css({ 'margin-bottom': 0, 'margin-top': 0 });
        }
    });

    // Hide the header on clicking the sidebar or main area
    $('#sidebar, #main').on('click', function() {
        if ($('.mobile-nav').is(':visible')) {
            closeHeader();
        }
    });

    // Hide the sidebar on clicking the header or main area
    $('#header, #main').on('click', function() {
        if ($('.toggle-sidebar').is(':visible')) {
            $('body').removeClass('sidebar-open');
            $('#sidebar').addClass('sidebar-close');
            $('.toggle-sidebar').removeClass('fa-angle-double-left').addClass('fa-angle-double-right');
        }
    });

    // Toggle sidebar
    $('.toggle-sidebar, #sidebar .icon').on('click', function(e) {
        // For icons, only if responsive view and sidebar is closed
        if ($(this).hasClass('toggle-sidebar') || ($(window).width() < 960 && !$('body').hasClass('sidebar-open'))) {
            $('body').toggleClass('sidebar-open');
            $('#sidebar').toggleClass('sidebar-close');
            $('.toggle-sidebar').toggleClass('fa-angle-double-right fa-angle-double-left');

            // Close header
            closeHeader();

            // Scroll to icon clicked on
            if (!$(this).hasClass('toggle-sidebar')) {
                $('#sidebar').animate({
                    scrollTop: $(this).offset().top - 75
                }, 500);
            }

            if ($(this).parent().find('.arrow .fa').hasClass('fa-chevron-down')) {
                // Don't run other JS
                e.stopPropagation();
            }
        }
    });


});


/*
 * Closes header (used when sidebar or main area clicked on)
 */
function closeHeader() {
    // Change any arrows back to normal
    $('#navarea .activeParent').removeClass('activeParent').find('.fa').each(function() {
        $(this).removeClass('fa-chevron-up fa-chevron-down');
        if (!$(this).hasClass('fa-chevron-right')) {
            $(this).addClass('fa-chevron-down');
        }
    });

    // Hide mobile navigation
    $('#navarea, ul#nav ul').css('display', 'none');
    $('.mobile-nav').removeClass('active');
}
