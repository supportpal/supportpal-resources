$(document).ready(function() {

    if ($('.step1').is(':visible')) {
        // STEP 1

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
                            (item.formatted_name ? '<span class="name">' + escape(item.formatted_name) + '</span>' : '') +
                            (item.email ? ' &lt;<span class="email">' + escape(item.email) + '</span>&gt;' : '') +
                            '</div>';
                    },
                    option: function(item, escape) {
                        return '<div>' +
                            '<img class="avatar" src="data:image/jpeg;base64, ' + escape(item.avatar) + '" width="16" /> &nbsp; ' +
                            '<span class="title">' +
                            '<span class="name">' + escape(item.formatted_name) + '</span> ' +
                            '</span>' +
                            (item.email ? '<span class="description">' + escape('<' + item.email + '>' || '') + '</span>' : '') +
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
            }),
            userSearchApi = userSearch[0].selectize;

        // Handle ticket type switching
        $('input[name="internal"]').change(function() {
            $('.user-ticket').toggle();
        });

        // Handle ticket type switching
        $('input[name="user_type"]').change(function() {
            $('.new-user, .existing-user').toggle();
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

        // Handling internal tickets
        if (internal) {
            $('.send-user-email').hide();
            $('input[name="send_operators_email"]').prop('checked', true);
        }

        // Tags
        $('select[name="tag[]"]').selectize({
            plugins: ['remove_button'],
            valueField: 'id',
            labelField: 'name',
            searchField: 'name',
            create: true,
            maxItems: null,
            placeholder: Lang.get("ticket.type_in_tags")
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
