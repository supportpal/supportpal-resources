var $select;

$(function() {
    // Handle schedule switching
    $('input[name="all_hours"]').on('change', function() {
        if ($(this).val() == 0) {
            $('.schedules').show();
            schedules();
        } else {
            $('.schedules').hide();
            $select[0].selectize.clear();
        }
    });

    // Default action based on current value
    if ($('input[name="all_hours"]:checked').val() == 0) {
        schedules();
    } else {
        $('.schedules').hide();
    }
});

function schedules() {
    $select = $('select[name="schedules[]"]').selectize({
        plugins: ['remove_button']
    });
}
