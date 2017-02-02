$(document).ready(function () {
    // For mobile retina images
    if (window.devicePixelRatio == 2) {
        var images = $("img.2x");

        // Loop through the images and make them hi-res
        for (var i = 0; i < images.length; i++) {
            // Get new image name for @2x version
            var imageType = images[i].src.substr(-4);
            var imageName = images[i].src.substr(0, images[i].src.length - 4);
            imageName += "@2x" + imageType;

            // Change image source
            images[i].src = imageName;
        }
    }

    // Preserves the mouse-over on top-level menu elements when hovering over children
    // Only do this on desktop view
    $("#nav ul").each(function() {
        $(this).hover(function() {
            if ($(window).width() > 1080) {
                $(this).parent().find("a").slice(0,1).addClass("activeParent");
            }
        }, function() {
            if ($(window).width() > 1080) {
                $(this).parent().find("a").slice(0,1).removeClass("activeParent");
            }
        });
    });

    // Tabs toggling
    $('ul.tabs li').on('click', function() {
        // Get name of tab
        var name = $(this).attr('id');

        // Hide current div
        $(this).parent().siblings('div.tabContent').hide();
        // Show new div
        $('#tab' + name).show();

        // Remove active from old tab
        $(this).parent().find('li.active').removeClass('active');
        // Set to active
        $(this).addClass('active');
    });

    // Search - Don't submit if it's empty
    $('form[name=search_header]').submit(function(e) {
        if ($(this).find('input[name=query]').val() == '') {
            e.preventDefault();
        }
    });

    // For opening/collapsing form containers
    $(document.body).on('click', '.form-container.open .arrow, .form-container.collapsed', function() {
        if ($(this).hasClass("arrow")) {
            $this = $(this).parent();
        } else {
            $this = $(this);
        }

        $this.find('.arrow .fa').toggleClass('fa-chevron-down fa-chevron-up');
        $this.toggleClass('open collapsed');
        $this.find('.hide').toggle();
    });

    // For opening/collapsing sidebar boxes
    $('#sidebar').on('click', 'h3.collapsable', function() {
        if (!$('#sidebar').hasClass('sidebar-close') || $(window).width() > 960) {
            $(this).find('.arrow .fa').toggleClass('fa-chevron-down fa-chevron-up');
            $(this).toggleClass('closed');
            $(this).next().toggle(500);
        }
    });

    // Toggle show/hide of the filters area
    $('.filter-results').on('click', function() {
        $('.filters').toggle();
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

    // Responsive datatables
    if ($.fn.dataTable !== undefined) {
        $.extend($.fn.dataTable.defaults, {
            responsive: true
        });
    }

    /**
     * Global AJAX setup handler to add the CSRF token to ALL POST requests.
     */
    $.ajaxPrefilter(function(options, originalOptions, jqXHR) {
        if (options.type.toLowerCase() === "post" || options.type.toLowerCase() === "put" ||
            options.type.toLowerCase() === "delete") {
            // Add _token entry
            jqXHR.setRequestHeader('X-CSRF-Token', $('meta[name=csrf_token]').prop('content'));
        }
    });

    /**
     * Global AJAX error handler to catch session timeouts.
     */
    $(document).ajaxError(function sessionHandler(event, xhr, ajaxOptions, thrownError) {
        if (xhr.status == 401) {
            // Logged out, redirect to login
            window.location.replace(laroute.route(
                'operator.sessionexpired',
                {'intended': btoa(window.location.href)}
            ));
            return false;
        } else if (xhr.status == 403) {
            // Ensure this is a session expired message (VerifyCsrfToken middleware)
            var json = $.parseJSON(xhr.responseText);
            if (json.message == Lang.get('messages.session_expired')) {
                // Show error and scroll to it
                if (!$('.session-error').is(':visible')) {
                    $('.desk_content_padding').prepend('<div class="session-error fail box">' +
                        Lang.get("messages.session_refresh") + '</div>');
                }
                $('html, body').animate({ scrollTop: 0 }, 1000);
                return false;
            }
        }
    });

});

/**
 * Add a new item to DOM container. This function expects a classname:input[name$="[id]"] to be present
 * for every unique DOM item within the container.
 *
 * @param className
 * @param container
 * @returns {number}
 */
function addNewItem(className, container) {
    // Clone the department e-mail form
    var newElem = $(className +':first').clone().toggle();
    // Clear the input values from the cloned DOM
    newElem.removeClass('first');
    // Update the index.. god damn you Laravel
    // Longwinded but ensures a unique key
    // Find the highest index first and add one
    var re = /^\w+\[(\d+)?]\[\w+]?$/;
    var m, index = 0;
    $(className + ' :input[name$="[id]"]').each(function() {
        if ((m = re.exec($(this).attr('name'))) !== null) {
            if (typeof m[1] != 'undefined') {
                if ((m = parseInt(m[1])) >= index) {
                    index = m + 1;
                }
            }
        }
    });
    // Update all the indexes in the new element
    newElem.find(':input, label').each(function(){
        var elem = $(this);
        elem.prop('disabled', false);
        [ 'name', 'for', 'id' ].map( function(attribute) {
            var attr = elem.attr(attribute);
            if (/^\w+\[(\d+)?](\[\w+])?(\[\])?$/.test(attr))
                elem.attr(attribute, attr.replace(/\[(\d+)?]/, '[' + index + ']'));
        });
    });
    // Where do we want to put it?
    if (typeof container !== 'undefined') {
        // Append cloned DOM to the end of the parent container
        $(container).append(newElem);
    } else {
        // Append cloned DOM to the end of the list
        $(className + ':last').after(newElem);
    }
    // Auto select first option of dropdowns - fix for firefox
    newElem.find('select').each(function() {
        $(this).find('option:first').prop('selected', 'selected');
    });

    return index;
}

// Adds a button to show/hide passwords
function callHideShowPassword() {
    $('input[type=password]').hideShowPassword(false, true);
}

// Date picker fields
function callPikaday() {
    $('.datepicker').pikaday({ format: $('meta[name=date_format]').prop('content') });
}

function array_map (callback) { // eslint-disable-line camelcase
                                //  discuss at: http://locutus.io/php/array_map/
                                // original by: Andrea Giammarchi (http://webreflection.blogspot.com)
                                // improved by: Kevin van Zonneveld (http://kvz.io)
                                // improved by: Brett Zamir (http://brett-zamir.me)
                                //    input by: thekid
                                //      note 1: If the callback is a string (or object, if an array is supplied),
                                //      note 1: it can only work if the function name is in the global context
                                //   example 1: array_map( function (a){return (a * a * a)}, [1, 2, 3, 4, 5] )
                                //   returns 1: [ 1, 8, 27, 64, 125 ]

    var argc = arguments.length
    var argv = arguments
    var obj = null
    var cb = callback
    var j = argv[1].length
    var i = 0
    var k = 1
    var m = 0
    var tmp = []
    var tmpArr = []

    var $global = (typeof window !== 'undefined' ? window : GLOBAL)

    while (i < j) {
        while (k < argc) {
            tmp[m++] = argv[k++][i]
        }

        m = 0
        k = 1

        if (callback) {
            if (typeof callback === 'string') {
                cb = $global[callback]
            } else if (typeof callback === 'object' && callback.length) {
                obj = typeof callback[0] === 'string' ? $global[callback[0]] : callback[0]
                if (typeof obj === 'undefined') {
                    throw new Error('Object not found: ' + callback[0])
                }
                cb = typeof callback[1] === 'string' ? obj[callback[1]] : callback[1]
            }
            tmpArr[i++] = cb.apply(obj, tmp)
        } else {
            tmpArr[i++] = tmp
        }

        tmp = []
    }

    return tmpArr
}