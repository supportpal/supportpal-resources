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
    $('select[name=language]').change(function(e) {
        var valueSelected = this.value;

        $.post(laroute.route('core.set.language'), {
            language: valueSelected
        }).always(function(data) {
            window.location.reload();
        });
    });

    // Search - Don't submit if it's empty
    $('form[name=search]').submit(function(e) {
        if ($(this).find('input[name=query]').val() == '') {
            e.preventDefault();
        }
    });

    // Mobile navigation
    $('.mobile_nav_button .fa').click(function() {
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
        if (elem) {
            $('html, body').animate({
                scrollTop: elem.offset().top - 25
            }, 500);
        }
    }

    // Smooth scrolling for anchors
    $(document.body).on('click', 'a[href*=#]', function(event) {
        $('html, body').animate({
            scrollTop: $('[name="_' + $.attr(this, 'href').substr(1) + '"]').offset().top - 25
        }, 500);
        event.preventDefault();
    });

    // For opening/collapsing sidebar boxes
    $(document.body).on('click', 'h2.collapsable', function() {
        $(this).find('.arrow').toggleClass('down up');
        $(this).find('.fa').toggleClass('fa-chevron-down fa-chevron-up');
        $(this).next().toggle(500);
    });

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
        toggle: { className: 'show-hide' }
    });
}

// Date picker fields
function callPikaday() {
    $('.datepicker').pikaday({ format: $('meta[name=date_format]').prop('content') });
}