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
                            brand_id: $brand[0].selectize.getValue(),
                            q: query
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
            $('.user-ticket').toggle();

            // Reset form validation.
            $('form.validate').validate().resetForm();

            // Toggle the disabled attribute.
            $('.user-ticket, .internal-ticket')
                .find(':input:not([name="user_type"]):not([name="internal"])')
                .prop('disabled', function(i, v) { return !v; });
        });

        // Handle ticket type switching
        $('input[name="user_type"]').change(function() {
            $('.new-user, .existing-user').toggle();

            // Reset form validation.
            $('form.validate').validate().resetForm();
        });

        if ($('input[name="internal"]:last:checked').length) {
            $('.user-ticket').hide();
        } else {
            $('.user-ticket').show();
        }

        if ($('input[name="user_type"]:checked').val() == '0') {
            $('.existing-user').show();
            $('.new-user').hide();
        } else {
            $('.existing-user').hide();
            $('.new-user').show();
        }

    } else {
        // STEP 2

        // Focus the subject input box.
        $('input[name="subject"]').focus();

        // Handling internal tickets
        if (internal) {
            $('.send-user-email').hide();
            $('input[name="send_operators_email"]').prop('checked', true);
        }

        // Tags
        $('select[name="tag[]"]').selectize({
            plugins: ['remove_button'],
            valueField: 'name',
            labelField: 'name',
            searchField: 'name',
            create: true,
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
            delimiter: ',',
            dropdownParent: 'body',
            placeholder: Lang.get('user.select_operators'),
            onChange: function(value) {
                if ($.isEmptyObject(value)) {
                    // None assigned, show all
                    $('#toAddress span').show();
                } else {
                    // Only show those assigned
                    $('#toAddress span').hide();
                    $.each(value, function(index, value) {
                        $('#toAddress span.operator-' + value).show();
                    });
                }
            }
        });

        // From email input
        $('select[name="department_email"]').selectize({
            persist: false,
            dropdownParent: 'body'
        });

        // Regex for email
        var re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

        // CC email input
        $('select[name="cc[]"]').selectize({
            plugins: ['restore_on_backspace', 'remove_button'],
            delimiter: ',',
            persist: false,
            dropdownParent: 'body',
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
        });

        // Show CC email input
        $('.add-cc').on('click', function() {
            $('.cc-emails').toggle();
        });
    }

});
