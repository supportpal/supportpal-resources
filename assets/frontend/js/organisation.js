$(document).ready(function() {

    $(document.body).on('click', '.existing-row .remove-button', function() {
        // Removing existing rows, need to make an AJAX call
        var row = $(this).parents('tr'),
            $this = $(this),
            name = $('<div/>').text(row.find('td:first .light').text().replace(/^<|>$/g, '')).html();

        // Show the alert
        swal(deleteAlert.getDefaultOpts(Lang.choice('user.organisation', 1), name), function(isConfirm) {
            if (isConfirm) {
                // Disable the submit button
                deleteAlert.disableButtons();
                // Delete record and reload table if successful
                $.ajax({
                    url: laroute.route('user.organisation.removeUser'),
                    type: 'DELETE',
                    data: {
                        user: $this.data('user')
                    },
                    success: function(response) {
                        if (response.status == 'success') {
                            swal(
                                Lang.get('messages.deleted'),
                                Lang.get('messages.success_deleted', {'item': Lang.choice('user.user', 1)}),
                                'success'
                            );

                            // Remove option from owner dropdown. We check for length to ensure the dropdown exists, it
                            // doesn't for normal managers.
                            if ($ownerSelectize.length !== 0) {
                                $ownerSelectize[0].selectize.removeOption($this.data('user'));
                            }

                            // Remove row
                            row.remove();
                        } else {
                            swal(
                                Lang.get('messages.error'),
                                Lang.get('messages.error_deleted', {'item': Lang.choice('user.user', 1)}),
                                'error'
                            );
                        }
                    }
                }).fail(function() {
                    swal(
                        Lang.get('messages.error'),
                        Lang.get('messages.error_deleted', {'item': Lang.choice('user.user', 1)}),
                        'error'
                    );
                });
            }
        });
    });

    var $ownerSelectize = $('select[name="owner"]').selectize({
        searchField: [ 'formatted_name', 'email' ],
        render: {
            item: function(item, escape) {
                return '<div class="item">' +
                    '<img class="avatar" src=" ' + escape(item.avatar_url) + '" width="16" /> &nbsp;' +
                    escape(item.formatted_name) +
                    (item.email ? ' <span class="description">' + escape('<' + item.email + '>') + '</span>' : '') +
                    '</div>';
            },
            option: function(item, escape) {
                return '<div>' +
                    '<img class="avatar" src="' + escape(item.avatar_url) + '" width="16" /> &nbsp;' +
                    escape(item.formatted_name) +
                    (item.email ? ' <span class="description">' + escape('<' + item.email + '>') + '</span>' : '') +
                    '</div>';
            }
        }
    });

});