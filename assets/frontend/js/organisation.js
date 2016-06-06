$(document).ready(function() {

    $(document.body).on('click', '.existing-row .remove-button', function() {
        // Removing existing rows, need to make an AJAX call
        var row = $(this).parents('tr'),
            $this = $(this);

        // Show the alert
        swal({
            title: Lang.get('messages.are_you_sure'),
            text: Lang.get('user.organisation_no_longer'),
            type: "warning",
            showCancelButton: true,
            confirmButtonColor: "#e74c3c",
            confirmButtonText: Lang.get('messages.yes_im_sure'),
            closeOnConfirm: false
        }, function(isConfirm) {
            if (isConfirm) {
                // Disable the submit button
                swal.disableButtons();
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

    $('select[name="owner"]').selectize({
        sortField: 'text'
    });

});