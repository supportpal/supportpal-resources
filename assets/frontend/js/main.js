$(document).ready(function() {

    // Change the cursor to wait when an AJAX request is fired
    $(document)
        .ajaxStart(function () {
            $(document.body).css({ 'cursor': 'wait' })
        })
        .ajaxComplete(function () {
            $(document.body).css({ 'cursor': 'default' })
        })
        .ajaxStop(function () {
            $(document.body).css({ 'cursor': 'default' });
        });

    // Change language
    $('select[name=language]').on('change', function(e) {
        var returnTo = $("option:selected", this).data('return-to'),
            valueSelected = this.value;

        $.post(laroute.route('core.set.language'), {
            language: valueSelected
        }).always(function(data) {
            if (typeof returnTo !== 'undefined' && returnTo !== '') {
                window.location.href = returnTo;
            } else {
                // Add the language in the URL and reload the page
                var separator = (window.location.search.indexOf("?") === -1) ? "?" : "&";
                window.location.search += separator + 'lang=' + valueSelected;
            }
        });
    });

    // Search - Don't submit if it's empty
    $('form[name=search]').on('submit', function(e) {
        if ($(this).find('input[name=query]').val() == '') {
            e.preventDefault();
        }
    });

    // Mobile navigation
    $('.mobile_nav_button .fa').on('click', function() {
        $('.mobile_nav').toggle();
    });

    // Tabs toggling
    $('ul.desk-tabs li').on('click', function() {
        // Get name of tab
        var name = $(this).attr('id');

        // Hide current div
        $('div.desk-tab').hide();
        // Show new div
        $('[id="tab'+name+'"]').show();

        // Remove active from old tab
        $('ul.desk-tabs li.active').removeClass('active');
        // Set to active
        $(this).addClass('active');
    });

    // Handle anchors on page load
    if (window.location.hash) {
        var elem = $('[name="_' + window.location.hash.replace('#', '') + '"]');
        if (elem.length) {
            // Scroll to top just in case
            scroll(0, 0);
            // Now scroll to anchor
            $('html, body').animate({
                scrollTop: elem.offset().top - 25
            }, 1000);
        }
    }

    // Smooth scrolling for anchors
    $(document.body).on('click', 'a[href^="#"]', function(event) {
        event.preventDefault();

        // Check if we have a name with an underscore (used in comments)
        var href = $.attr(this, 'href').substr(1),
            $elem = $('[name="_' + $.attr(this, 'href').substr(1) + '"]');

        // If not, check if it's an ID first or a name without an underscore
        // (normal usage)
        if ($elem.length === 0) {
            $elem = $('[id="' + $.attr(this, 'href').substr(1) + '"]');
            if ($elem.length === 0) {
                $elem = $('[name="' + $.attr(this, 'href').substr(1) + '"]');
            }
        }

        // Only handle it if we have an element
        if (href.length !== 0 && $elem.length !== 0) {
            $('html, body').animate({
                scrollTop: $elem.offset().top - 25
            }, 500);
        }
    });

    // For opening/collapsing sidebar boxes
    $(document.body).on('click', 'h2.collapsable', function() {
        $(this).find('.arrow').toggleClass('down up');
        $(this).find('.fa').toggleClass('fa-chevron-down fa-chevron-up');
        $(this).next().toggle(500);
    });

    // Time ago.
    if (typeof timeAgo !== 'undefined') {
        timeAgo.render($('time.timeago'));
    }

    /**
     * Global AJAX setup handler to add the CSRF token to ALL POST requests.
     */
    $.ajaxPrefilter(function(options, originalOptions, jqXHR){
        if (options.type.toLowerCase() === "post" || options.type.toLowerCase() === "put" ||
            options.type.toLowerCase() === "delete") {
            // Add _token entry
            jqXHR.setRequestHeader('X-CSRF-Token', $('meta[name=csrf_token]').prop('content'));
        }
    });

});

// Adds a button to show/hide passwords
function callHideShowPassword() {
    $('input[type=password]').hideShowPassword(false, 'focus', {
        toggle: { className: 'show-hide' },
        states: {
            shown: { toggle: { attr: { title: '' } } },
            hidden: { toggle: { attr: { title: '' } } }
        }
    });
}

// Date picker fields
function callPikaday() {
    $('.datepicker').pikaday({ format: $('meta[name=date_format]').prop('content') });
}
