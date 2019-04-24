$(document).ready(function() {

    if ($('.step1').is(':visible')) {
        // STEP 1

        var xhr;

        // Brand selection.
        var $brand = $('select[name=brand]').selectize({
            placeholder: Lang.get('core.select_brand'),
            onChange: function (value) {
                var selectize = $department[0].selectize;

                // Disable the department dropdown and clear the options
                selectize.disable();
                selectize.clearOptions();

                // Clear any selected user in the selectize dropdown
                userSearch[0].selectize.clearOptions();

                if (value !== '') {
                    // Show ticket type selection if hidden
                    $('.ticket-type').show();

                    // Enable the continue button if it's disabled
                    $('.continue-button input').prop('disabled', false);

                    // Load the departments for this brand
                    selectize.load(function (callback) {
                        xhr && xhr.abort();
                        xhr = $.ajax({
                            url: laroute.route('ticket.operator.ticket.brand_departments', {'brand': value}),
                            success: function (res) {
                                selectize.enable();
                                callback(res.data);
                            },
                            error: function () {
                                callback();
                            }
                        })
                    });
                } else {
                    // Hide the ticket type selection
                    $('.ticket-type').hide();

                    // Disable continue button
                    $('.continue-button input').prop('disabled', true);
                }
            }
        });

        // Department selection.
        var $department = $('select[name=department]').selectize({
            valueField: 'id',
            labelField: 'name',
            searchField: 'name',
            create: false,
            placeholder: Lang.get('ticket.select_a_department'),
            render: {
                item: function(item, escape) {
                    return '<div class="item">' + item.dashes + escape(item.name) + '</div>';
                },
                option: function(item, escape) {
                    return '<div>' + item.dashes + escape(item.name) + '</div>';
                }
            },
        });

        // Enable user search
        var $userSearch = $("select[name='user']"),
            setDefaultOpt = function () {
                var defaultOpt = $userSearch.data('default-opt'),
                    brand_id = $brand.length ? $brand[0].selectize.getValue() : null;

                if ((typeof defaultOpt === "object" && defaultOpt !== null)
                    && (! $brand.length || defaultOpt.brand_id == brand_id)
                ) {
                    this.addOption(defaultOpt);
                    this.addItem(defaultOpt.id);
                }
            },
            userSearch = $userSearch.selectize({
                valueField: 'id',
                labelField: 'formatted_name',
                searchField: [ 'formatted_name', 'email' ],
                create: false,
                placeholder: Lang.get('user.search_for_user'),
                render: {
                    item: function(item, escape) {
                        return '<div class="item">' +
                            '<img class="avatar" src="' + escape(item.avatar_url) + '" width="16" /> &nbsp;' +
                            escape(item.formatted_name) + (item.organisation ? ' (' + escape(item.organisation || '') + ')' : '') +
                            (item.email ? ' <span class="description">' + escape('<' + item.email + '>' || '') + '</span>' : '') +
                            '</div>';
                    },
                    option: function(item, escape) {
                        return '<div>' +
                            '<img class="avatar" src="' + escape(item.avatar_url) + '" width="16" /> &nbsp;' +
                            escape(item.formatted_name) + (item.organisation ? ' (' + escape(item.organisation || '') + ')' : '') +
                            (item.email ? '<br /><span class="description">' + escape(item.email || '') + '</span>' : '') +
                            '</div>';
                    }
                },
                load: function(query, callback) {
                    if (!query.length) return callback();
                    $.ajax({
                        url: laroute.route('user.operator.search'),
                        type: 'GET',
                        dataType: 'json',
                        data: {
                            brand_id: typeof $brand[0] !== "undefined" ? $brand[0].selectize.getValue() : null,
                            q: query,
                            operators: 0
                        },
                        error: function() {
                            callback();
                        },
                        success: function(res) {
                            callback(res.data);
                        }
                    });
                },
                onInitialize: setDefaultOpt,
                onOptionClear: setDefaultOpt,
                onClear: setDefaultOpt,
            });

        // Selecting organisation for new user form.
        $('select[name="user_organisation"]').selectize({
            valueField: 'id',
            labelField: 'name',
            searchField: 'name',
            create: true,
            placeholder: Lang.choice('user.organisation', 1),
            allowEmptyOption: true,
            load: function(query, callback) {
                if (!query.length) return callback();
                $.ajax({
                    url: laroute.route('user.organisation.search'),
                    type: 'GET',
                    dataType: 'json',
                    data: {
                        q: query,
                        brand_id: typeof $brand[0] !== "undefined" ? $brand[0].selectize.getValue() : null,
                    },
                    error: function() {
                        callback();
                    },
                    success: function(res) {
                        callback(res.data);
                    }
                });
            },
            onChange: function(value) {
                // We want to set a separate input if they enter an existing organisation.
                if (value.length > 0 && value !== this.getOption(value)[0].textContent) {
                    $('input[name="user_organisation_id"]').val(value);
                } else {
                    $('input[name="user_organisation_id"]').val("");
                }
            }
        });

        // Handle ticket type switching
        $('input[name="internal"]').on('change', function() {
            if ($(this).val() == 1) {
                $('.user-ticket').hide();
                $('.user-ticket').find(':input:not([name="user_type"])').prop('disabled', true);
                $('input[name="user"]').prop('disabled', false);
            } else {
                $('.user-ticket').show();
                $('.user-ticket').find(':input:not([name="user_type"])').prop('disabled', false);
                $('input[name="user"]').prop('disabled', true);
            }

            // Reset form validation.
            $('form.validate').validate().resetForm();
        });

        // Handle ticket type switching
        $('input[name="user_type"]').on('change', function() {
            if ($(this).val() == '0') {
                $('.existing-user').show();
                $('.new-user').hide();
            } else {
                $('.existing-user').hide();
                $('.new-user').show();
            }

            // Reset form validation.
            $('form.validate').validate().resetForm();
        });

        // Run the change events on load to ensure right fields are showing/enabled
        $('input[name="internal"]:checked, input[name="user_type"]:checked').trigger('change');

        // If the brand already has a value, fetch the relevant departments. Usually happens on going back from step 2.
        if ($brand.length && $brand[0].selectize.getValue() !== '' && $department[0].selectize.getValue() === '') {
            $brand[0].selectize.setValue($brand[0].selectize.getValue())
        }
    } else {
        // STEP 2

        // Tags
        $('select[name="tag[]"]').selectize({
            plugins: ['remove_button'],
            valueField: 'name',
            labelField: 'name',
            searchField: 'name',
            create: tagPermission ? true : false,
            createFilter: function(input) {
                return input.length <= 45;
            },
            maxItems: null,
            placeholder: Lang.get("ticket.type_in_tags"),
            render: {
                item: function(item, escape) {
                    return '<div class="item" style="background-color: ' + escape(item.colour) + '; color: ' + item.colour_text + '">'
                        + escape(item.name)
                        + '</div>';
                },
                option: function(item, escape) {
                    return '<div>'
                        + '<span class="statusIcon" style="background-color: ' + escape(item.colour) +'"></span>'
                        + '&nbsp; ' + escape(item.name)
                        + '</div>';
                }
            },
        });

        // Assigned operators
        $('select[name="assignedto[]"]').selectize({
            plugins: ['remove_button'],
            valueField: 'id',
            labelField: 'formatted_name',
            searchField: [ 'formatted_name', 'email' ],
            delimiter: ',',
            dropdownParent: 'body',
            placeholder: Lang.get('user.select_operators'),
            render: {
                item: function(item, escape) {
                    return '<div class="item">'
                        + '<img class="avatar" src="' + escape(item.avatar_url) + '" width="16" /> &nbsp;'
                        + escape(item.formatted_name)
                        + '</div>';
                },
                option: function(item, escape) {
                    return '<div>'
                        + '<img class="avatar" src="' + escape(item.avatar_url) + '" width="16" /> &nbsp;'
                        + escape(item.formatted_name)
                        + '</div>';
                }
            },
            onChange: function(value) {
                if ($.isEmptyObject(value)) {
                    // None assigned, show all
                    $('#toAddress span').removeClass('hide').show();
                } else {
                    // Only show those assigned
                    $('#toAddress span.operator').addClass('hide');
                    $.each(value, function(index, value) {
                        $('#toAddress span.operator-' + value).removeClass('hide');
                    });

                    // Hide the last visible comma if last operator not visible
                    $('#toAddress span.operator').each(function (index) {
                        if ($(this).is(':visible') && $(this).prev().prev().is(':visible')) {
                            $(this).prev().show();
                        } else {
                            $(this).prev().hide();
                        }
                    });
                    if ($('#toAddress span.operator:first').is(':visible')&& $('#toAddress span.operator:not(:first)').is(':visible')) {
                        // Special case when first item is visible and one after but comma is not showing due to above login
                        $('#toAddress span.operator:first').next().show();
                    }
                }
            }
        });

        // From email input
        $('select[name="department_email"]').selectize({
            persist: false,
            dropdownParent: 'body',
            plugins: ['disableDelete']
        });

        // CC email input
        var enablePlugins = ['restore_on_backspace', 'remove_button', 'max_items'];
        $('select[name="cc[]"]').selectize($.extend({ }, emailSelectizeConfig(enablePlugins), {
            render: {
                item: function(item, escape) {
                    return '<div class="item' + (item.unremovable ? ' unremovable' : '') + '">' + escape(item.value) + '</div>';
                },
                option: function(item, escape) {
                    return '<div>' +
                        '<img class="avatar" src="' + escape(item.avatar_url) + '" width="16" /> &nbsp;' +
                        escape(item.formatted_name) + (item.organisation ? ' (' + escape(item.organisation || '') + ')' : '') +
                        (item.email ? '<br /><span class="description">' + escape(item.email || '') + '</span>' : '') +
                        '</div>';
                }
            },
            load: function(query, callback) {
                if (!query.length) return callback();

                // Search for users
                $.get(laroute.route('user.operator.search'), { brand_id: brandId, q: query })
                    .done(function(res) {
                        // Remove user from list if included.
                        res.data = res.data
                            .filter(function(user) {
                                return user.id != userId;
                            })
                            .map(function(value) {
                                // Add needed info for search and selected item to work.
                                value.value = value.email;
                                value.text = value.firstname + ' ' + value.lastname + ' <' + value.email + '>';
                                return value;
                            });

                        callback(res.data);
                    })
                    .fail(function() { callback(); });
            },
            onDelete: function(input) {
                var self = this;
                $.each(input, function(key, value) {
                    // Delete any items selected that don't have a 'unremovable' class.
                    if (! $('.cc-emails div[data-value="' + value + '"]').hasClass('unremovable')) {
                        self.removeItem(value);
                    }
                });

                // We handle the deletions above, no need to carry on with deleteSelect()
                return false;
            }
        }));

        // Show CC email input
        $('.add-cc').on('click', function() {
            $('.cc-emails').toggle();
        });

        // Send email options, uncheck and show tooltip if disabled
        $.each([ $('input[name="send_user_email"]'), $('input[name="send_operators_email"]') ], function (index, value) {
            if (value.prop('disabled')) {
                value.prop('checked', false);
                value.parent().attr('title', Lang.get('ticket.department_template_disabled'));
            }
        });
    }

});
