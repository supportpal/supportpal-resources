$(function () {

    // Add select all checkbox
    $('.dataTable thead th:first').html('<input type="checkbox" name="select-all" />');

    // Toggle all checkboxes
    $('input[name="select-all"]').on('change', function() {
        // This is the state, after the checkbox has been changed...
        var is_checked = $(this).is(':checked');

        $('.dataTable tbody tr').each(function(index, $item) {
            // Grab the checkbox for the current row.
            var checkbox = $(this).find('input[type=checkbox].selector');

            // Check all checkboxes, regardless of their current state.
            if (is_checked && !checkbox.is(":checked")) $(this).trigger('click');

            // Unset all check boxes.
            if (!is_checked && checkbox.is(':checked')) $(this).trigger('click');
        });
    });

    // Ability to select multiple rows
    $('.dataTable')
        // Un-check the select-all checkbox after every AJAX request.
        .on('xhr.dt', function ( e, settings, json, xhr ) {
            $('input[name="select-all"]').prop('checked', false);

            $(this).find('input[type=checkbox]').prop('disabled', false);

            var table = $('.dataTable').dataTable().api().table();
            if (typeof table.fixedHeader !== 'undefined') {
                table.fixedHeader.disable();
            }
        } )

        // Disable checkboxes before every AJAX request.
        .on('preXhr.dt', function ( e, settings, data ) {
            $(this).find('input[type=checkbox]').prop('disabled', true);
        } )

        .find('tbody')
        .on('click', 'tr', function (e) {
            // Get the checkbox.
            var input = $(this).find(".selector");

            // Don't trigger the event if we click a link in the table or the checkbox is disabled.
            if ((typeof e.target === 'undefined' || (e.target.tagName != 'A' && e.target.parentNode.tagName != 'A'))
                && input.is(':enabled')
            ) {
                $(this).toggleClass('selected');

                // We want to un-check the checkbox.
                if (input.is(':checked')) {
                    input.prop('checked', false);

                    // Uncheck the select all box, as we've no longer got all selected!
                    $('input[name="select-all"]').prop('checked', false);
                } else {
                    // We want to check the checkbox.
                    input.prop('checked', true);

                    // Check if we've selected all the checkboxes..
                    if (input.parents('tbody').find('input[type=checkbox].selector').not(':checked').length === 0) {
                        $('input[name="select-all"]').prop('checked', true);
                    }
                }

                // Re-enable buttons (and make footer stick in some situations) if at least one row is selected
                var table = $('.dataTable').dataTable().api().table();
                if ($('tr.selected').length) {
                    $('.ticket-options :input').prop('disabled', false);
                    if (typeof table.fixedHeader !== 'undefined') {
                        table.fixedHeader.enable($(window).height() > 600 && $(window).width() > 768);
                    }
                } else {
                    $('.ticket-options :input').prop('disabled', true);
                    if (typeof table.fixedHeader !== 'undefined') {
                        table.fixedHeader.disable();
                    }
                }
            }
        })
        .on('click', '.selector', function() {
            // Ensure if checkbox clicked directly, it has the right state (as its changed by above code too)
            this.checked = ! $(this).is(':checked');

            // Check if we're in mobile view
            if ($(this).parents('.dataTable').hasClass('collapsed')) {
                // Click on the cell and the row, to ensure we have the right state overall
                $(this).parent().trigger('click');
                $(this).parent().parent().trigger('click');
            }
        })
        .on('click', 'td:first-child', function() {
            // Check if we're in mobile view
            if ($(this).parents('.dataTable').hasClass('collapsed')) {
                // Click on the row to ensure we have the right state overall
                $(this).parent().trigger('click');
            }
        });

});

function getSelectedRows() {
    return $('.dataTable tbody tr.selected').map(function() {
        return $(this).find('.selector').data("id");
    }).get().join(",");
}
