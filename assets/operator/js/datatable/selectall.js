$(function () {

    // Add select all checkbox
    $('.dataTable thead th:first').html('<input type="checkbox" name="select-all" />');

    // Toggle all checkboxes
    $('input[name="select-all"]').change(function() {
        $('.dataTable tbody tr').each(function(index, $item) {
            $(this).trigger('click');
        });
    });

    // Ability to select multiple rows
    $('.dataTable').find('tbody')
        .on('click', 'tr', function (e) {
            // Don't trigger the event if we click a link in the table
            if (typeof e.target === 'undefined'
                || (e.target.tagName != 'A' && e.target.parentNode.tagName != 'A')
            ) {
                var input = $(this).find(".selector");

                input.is(':checked') ? input.prop('checked', false) : input.prop('checked', true);
                $(this).toggleClass('selected');

                // Re-enable buttons if at least one row is selected
                if ($('tr.selected').length) {
                    $('.ticket-options :input').prop('disabled', false);
                } else {
                    $('.ticket-options :input').prop('disabled', true);
                }
            }
        })
        .on('click', '.selector', function() {
            // Ensure if checkbox clicked directly, it has the right state (as its changed by above code too)
            this.checked = ! $(this).is(':checked');

            // Check if we're in mobile view
            if ($(this).parents('.dataTable').hasClass('collapsed')) {
                // Click on the cell and the row, to ensure we have the right state overall
                $(this).parent().click();
                $(this).parent().parent().click();
            }
        })
        .on('click', 'td:first-child', function() {
            // Check if we're in mobile view
            if ($(this).parents('.dataTable').hasClass('collapsed')) {
                // Click on the row to ensure we have the right state overall
                $(this).parent().click();
            }
        });

});

function getSelectedRows() {
    return $('.dataTable tbody tr.selected').map(function() {
        return $(this).find('.selector').data("id");
    }).get().join(",");
}