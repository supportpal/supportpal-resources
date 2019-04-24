$(document).ready(function () {
    //
    // jQuery print event callback helpers.
    //   - https://gist.github.com/shaliko/4110822#gistcomment-1543771
    //   - https://www.tjvantoll.com/2012/06/15/detecting-print-requests-with-javascript/
    $.fn.beforeprint = function (callback) {
        return $(this).each(function () {
            if (! $.isWindow(this)) {
                return;
            }
            if (this.onbeforeprint !== undefined) {
                $(this).on('beforeprint', callback);
            } else if (this.matchMedia) {
                this.matchMedia('print').addListener(callback);
            }
        });
    };
    $.fn.afterprint = function (callback) {
        return $(this).each(function () {
            if (! $.isWindow(this)) {
                return;
            }
            if (this.onafterprint !== undefined) {
                $(this).on('afterprint', callback);
            } else if (this.matchMedia) {
                $(this).one('mouseover', callback); // https://stackoverflow.com/a/15662720/2653593
            }
        });
    };

    // Preserves the mouse-over on top-level menu elements when hovering over children
    // Only do this on desktop view
    $("#nav ul").each(function() {
        $(this).on('hover', function() {
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
    $(document).on('click', 'ul.tabs li', function() {
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
    $('form[name=search_header]').on('submit', function(e) {
        if ($(this).find('input[name=query]').val() == '') {
            e.preventDefault();
        }
    });

    // Check / Uncheck all checkboxes in an input group.
    $(document).on('click', 'a.check_all, button.check_all', function (e) {
        e.preventDefault();

        $(this).parents('.input-group').find('input[type="checkbox"]').prop('checked', true);
    });
    $(document).on('click', 'a.uncheck_all, button.uncheck_all', function (e) {
        e.preventDefault();

        $(this).parents('.input-group').find('input[type="checkbox"]').prop('checked', false);
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
        $this.find('.hide').not('.translatable-modal').not('.translatable-modal .hide').toggle();
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

    // Responsive datatables
    if ($.fn.dataTable !== undefined) {
        $.extend($.fn.dataTable.defaults, {
            responsive: true
        });
    }

    // Time ago.
    if (typeof timeAgo !== 'undefined') {
        timeAgo.render($('time.timeago'));
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
            var json = JSON.parse(xhr.responseText);
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

    // Scrolling for sidebar on desktop
    var $sidebar = $('#sidebar');
    var isMobile = function () {
        return $(window).width() < 1080 || $(window).height() < 720;
    };
    if (typeof $.fn.overlayScrollbars !== 'undefined' && $sidebar.length && ! isMobile()) {
        /**
         * Initialise overlay scrollbars on the element.
         *
         * @param $elem
         * @returns {jQuery|*}
         */
        var initOverlayScrollars = function ($elem) {
            return $elem.overlayScrollbars({
                overflowBehavior: {
                    x: 'hidden'
                },
                scrollbars: {
                    autoHide: 'scroll'
                },
                callbacks: {
                    onUpdated: function (e) {
                        if (isMobile()) {
                            this.destroy();
                        }
                    }
                }
            });
        };

        /**
         * Destroy the overlay scrollbars instance.
         */
        var destroyOverlayScrollbars = function () {
            if (typeof $sidebar.overlayScrollbars() !== 'undefined') {
                $sidebar.overlayScrollbars().destroy();
            }
        };

        // Initialise overlay scrollbars on the sidebar.
        initOverlayScrollars($sidebar);

        // Destroy and reinitialise overlay scrollbars on print event otherwise overflow content is hidden.
        $(window).beforeprint(destroyOverlayScrollbars)
            .afterprint(initOverlayScrollars.bind(null, $sidebar));
    }

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
    // Clone the element
    var newElem = $(className + ':first').clone();

    // Clear the input values from the cloned DOM
    newElem.removeClass('first');

    // Update the index.. god damn you Laravel
    // Longwinded but ensures a unique key
    // Find the highest index first and add one
    var re = /^\w+\[(\d+)?]\[\w+]?$/;
    var m, index = 0;
    $(className + ' :input[name$="[id]"]').each(function () {
        if ((m = re.exec($(this).attr('name'))) !== null) {
            if (typeof m[1] != 'undefined') {
                if ((m = parseInt(m[1])) >= index) {
                    index = m + 1;
                }
            }
        }
    });

    // Update all the indexes in the new element
    newElem.find(':input, label').each(function () {
        var elem = $(this);
        elem.prop('disabled', false);
        [ 'name', 'for', 'id' ].map(function (attribute) {
            var attr = elem.attr(attribute);
            if (/^\w+\[(\d+)?](\[[\w:-]+])*(\[\])?$/g.test(attr))
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

    // Make it visible
    newElem.show();

    // Auto select first option of dropdowns - fix for firefox
    newElem.find('select').each(function () {
        $(this).find('option:first').prop('selected', 'selected');
    });

    return index;
}

// Adds a button to show/hide passwords
function callHideShowPassword() {
    $('input[type=password]').hideShowPassword(false, true, {
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

function emailSelectizeConfig(plugins)
{
    var re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    var config = {
        'restore_on_backspace': {},
        'remove_button': {},
        'max_items': {
            'message': Lang.get('general.show_count_more')
        }
    };

    for (var name in config) {
        if (config.hasOwnProperty(name) && plugins.indexOf(name) === -1) {
            delete config[name];
        }
    }

    return {
        plugins: config,
        delimiter: ',',
        persist: false,
        dropdownParent: 'body',
        placeholder: Lang.get('ticket.enter_email_address'),
        render: {
            item: function(item, escape) {
                return '<div class="item' + (item.unremovable ? ' unremovable' : '') + '">' + escape(item.value) + '</div>';
            }
        },
        createFilter: function(input) {
            var match = input.match(re);
            if (match) return !this.options.hasOwnProperty(match[0]);

            return false;
        },
        create: function(input) {
            if (re.test(input)) {
                return {
                    value: input,
                    text: input
                };
            }

            return false;
        }
    };
}
