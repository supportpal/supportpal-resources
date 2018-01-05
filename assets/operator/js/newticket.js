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
            placeholder: Lang.get('ticket.select_a_department')
        });

        // Enable user search
        var userSearch = $("select[name='user']").selectize({
                valueField: 'id',
                labelField: 'formatted_name',
                searchField: [ 'formatted_name', 'email' ],
                create: false,
                placeholder: Lang.get('user.search_for_user'),
                render: {
                    item: function(item, escape) {
                        return '<div class="item">' +
                            '<img class="avatar" src="data:image/jpeg;base64, ' + escape(item.avatar) + '" width="16" /> &nbsp;' +
                            escape(item.formatted_name) + (item.organisation ? ' (' + escape(item.organisation || '') + ')' : '') +
                            (item.email ? ' <span class="description">' + escape('<' + item.email + '>' || '') + '</span>' : '') +
                            '</div>';
                    },
                    option: function(item, escape) {
                        return '<div>' +
                            '<img class="avatar" src="data:image/jpeg;base64, ' + escape(item.avatar) + '" width="16" /> &nbsp;' +
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
                }
            });

        // Handle ticket type switching
        $('input[name="internal"]').change(function() {
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
        $('input[name="user_type"]').change(function() {
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
        $('input[name="internal"]:checked, input[name="user_type"]:checked').change();

        // If the brand already has a value, fetch the relevant departments. Usually happens on going back from step 2.
        if ($brand.length && $brand[0].selectize.getValue() !== '' && $department[0].selectize.getValue() === '') {
            $brand[0].selectize.setValue($brand[0].selectize.getValue())
        }
    } else {
        // STEP 2

        // Focus the subject input box.
        $('input[name="subject"]').focus();

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
                        + '<img class="avatar" src="data:image/jpeg;base64, ' + escape(item.avatar) + '" width="16" /> &nbsp;'
                        + escape(item.formatted_name)
                        + '</div>';
                },
                option: function(item, escape) {
                    return '<div>'
                        + '<img class="avatar" src="data:image/jpeg;base64, ' + escape(item.avatar) + '" width="16" /> &nbsp;'
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

        // Regex for email
        var re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

        // CC email input
        $('select[name="cc[]"]').selectize({
            plugins: ['restore_on_backspace', 'remove_button'],
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
        });

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
