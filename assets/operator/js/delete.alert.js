$(function () {

    $(document.body).on('click', '.delete-confirm', function() {

        // Save the delete route
        var deleteRoute = $(this).data('route'),
            _self = this;

        // Show the alert
        swal({
            title: Lang.get('messages.are_you_sure'),
            text: Lang.get('messages.warn_delete'),
            type: "warning",
            showCancelButton: true,
            confirmButtonColor: "#e74c3c",
            confirmButtonText: Lang.get('messages.yes_im_sure'),
            closeOnConfirm: false
        }, function(isConfirm) {
            if (isConfirm) {
                // Disable submit button
                swal.disableButtons();
                // Delete record and reload table if successful
                $.ajax({
                    url: deleteRoute,
                    type: 'DELETE',
                    dataType: 'json',
                    success: function(response) {
                        if (response.status == 'success' || response.status == true) {
                            // Reload table
                            swal(
                                Lang.get('messages.deleted'),
                                Lang.get('messages.success_deleted', { item: Lang.get('general.record') }),
                                'success'
                            );

                            // Trigger an event for any custom handling on successful deletion
                            $(_self).trigger("delete-successful", [response]);

                            // Remove the row from the table. If we're using DataTables we'll refresh it via
                            // AJAX in a moment anyway... This resolves an issue with departments were refreshing
                            // DataTables doesn't actually remove the row.
                            $(_self).parents('tr').remove();

                            // Check if DataTables exists, otherwise try and delete the row
                            if (typeof $.fn.dataTable === 'function' && $('.dataTable').length >= 1) {
                                $('.dataTable').dataTable()._fnAjaxUpdate();
                            }
                        } else {
                            swal(
                                Lang.get('messages.error'),
                                Lang.get('messages.error_deleted', { item: Lang.get('general.record') }),
                                'error'
                            );
                        }
                    },
                    error: function() {
                        swal(
                            Lang.get('messages.error'),
                            Lang.get('messages.error_deleted', { item: Lang.get('general.record') }),
                            'error'
                        );
                    }
                });
            }
        });

    });

});