$(document).ready(function() {
    var queryTimer;

    /**
     * Reload datables on changing filter
     */
    $('.filters :input').on('change input', function(event) {
        // Ignore if losing focus on text input
        if ($(this).is('input:text:not(.datepicker)') && event.type == 'change') { return; }
        // Delay query by 500ms so we don't run it on every keystroke
        clearTimeout(queryTimer);
        queryTimer = setTimeout(function () {
            // Reload table
            $('.dataTable').on('preXhr.dt', function (e, settings, data) {
                // Add conditions to parameters
                var conditions = $(".filters :input").serializeArray();
                $.each(conditions, function (index, value) {
                    if (value.value != '' && value.value != '-1') {
                        data[value.name] = value.value;
                    }
                });
            }).dataTable().api().ajax.reload(function () { });
        }, 500);
    });

    /**
     * Reset filter
     */
    $('.reset-filter').on('click', function(event) {
        // Get param and reset
        var $input = $(this).prev();
        if ($input.is('input:text')) {
            $input.val('');
        } else if ($input.is('select')) {
            $input.val('-1');
        }

        // Trigger input to reload table
        $input.trigger('input');
    });

    $('.datepicker').pikaday({
        format: $('meta[name=date_format]').prop('content'),
        onSelect: function() {
            $('.datepicker:first').trigger('change');
        }
    });
});
