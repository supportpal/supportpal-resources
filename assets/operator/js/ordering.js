function tableDnd(route)
{
    var $table = $(".dataTable");
    $table.tableDnD({
        onDragStart: function(table, row) {
            // Don't do anything if the table is filtered
            if ($(row).hasClass('nodrag') || $(row).hasClass('nodrop')) {
                return;
            }

            // Set a background colour on the row temporarily.
            $(row).css("background-color", "#fdf6ea");
            setTimeout(function () {
                $(row).css("background-color", "");
            }, 1500);
        },
        onDrop: function(table, row) {
            $(row).css("background-color", "");
            // Convert to a comma delimited list
            var newOrder = '';
            $.each($.tableDnD.serialize().split('&'), function(key, value) {
                var id = value.split('=');
                if (typeof id[1] !== 'undefined' && id[1] !== '') {
                    newOrder += id[1] + ',';
                }
            });

            // Show the alert
            swal({
                text: Lang.get('messages.save_order'),
                showConfirmButton: true,
                showCancelButton: false,
                confirmButtonColor: "#e74c3c",
                confirmButtonText: Lang.get('general.update'),
                closeOnConfirm: false
            });
            swal.disableButtons();

            // Post new order and save it
            $.post(route, {
                "order": newOrder.slice(0, -1)
            }, function(response) {
                if (response.status == 'success') {
                    $('.ordering.success').show(500).delay(5000).hide(500);
                } else {
                    $('.ordering.fail').show(500).delay(5000).hide(500);
                    // Refresh grid so they are back in the original place
                    $('.dataTable').dataTable()._fnAjaxUpdate();
                }
            }, "json").fail(function() {
                $('.ordering.fail').show(500).delay(5000).hide(500);
                // Refresh grid so they are back in the original place
                $('.dataTable').dataTable()._fnAjaxUpdate();
            }).always(function() {
                // Close the alert
                swal.closeModal();
            });
        }
    });

    // If we're filtering the table, disable row ordering as it might cause unexpected results.
    $table.on( 'draw.dt', function () {
        var api = $table.DataTable(),
            searchTerms = api.columns().search();

        searchTerms.push(api.search());

        // Check that we have a search term
        var nonEmpty = $.grep(searchTerms, function(v) {
            return v !== "";
        });

        if (nonEmpty.length > 0) {
            disableDndOrdering();
        } else {
            enableDndOrdering();
        }
    } );
}

/**
 * Enable row ordering on the DataTable.
 */
function enableDndOrdering()
{
    $(".dataTable").find('tr').removeClass('nodrag nodrop').css('cursor', 'move');
    $('#dndOrderNote').show();
}

/**
 * Disable row ordering on the DataTable.
 */
function disableDndOrdering()
{
    $(".dataTable").find('tr').addClass('nodrag nodrop').css('cursor', '');
    $('#dndOrderNote').hide();
}
