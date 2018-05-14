$(document).ready(function() {
    var alert = new deleteAlert;
    alert.translationKeys.title = 'user.unlink_account';
    alert.translationKeys.warning = 'user.unlink_account_warning';
    alert.translationKeys.confirmButton = 'general.yes';
    alert.translationKeys.cancelButton = 'general.no';
    
    $(document.body).on('click', '.unlink-button', function () {
        // Removing existing rows, need to make an AJAX call
        var row = $(this).parents('tr'),
            $this = $(this),
            name = $(row).find('.provider-name').text();

        // Show the alert
        swal(alert.getDefaultOpts(name, name), function (isConfirm) {
            if (isConfirm) {
                // Disable the submit button
                alert.disableButtons();
                // Delete record and reload table if successful
                $.ajax({
                    url: unlinkRoute,
                    type: 'POST',
                    data: {
                        provider: $this.data('id')
                    },
                    success: function (response) {
                        if (response.status == 'success') {
                            swal(
                                Lang.get('messages.deleted'),
                                Lang.get('messages.success_deleted', {'item': Lang.choice('general.provider', 1)}),
                                'success'
                            );

                            // Remove row
                            row.remove();
                        } else {
                            swal(
                                Lang.get('messages.error'),
                                Lang.get('messages.error_deleted', {'item': Lang.choice('general.provider', 1)}),
                                'error'
                            );
                        }
                    }
                }).fail(function () {
                    swal(
                        Lang.get('messages.error'),
                        Lang.get('messages.error_deleted', {'item': Lang.choice('general.provider', 1)}),
                        'error'
                    );
                });
            }
        });
    });
});