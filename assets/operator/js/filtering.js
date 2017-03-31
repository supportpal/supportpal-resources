$(function() {
    // Toggle filtering
    $('.toggle-filtering').click(function() {
        $('.conditiongroup').toggle();

        // If we're toggling to show and it's currently empty, insert new condition
        if ($('.conditiongroup').is(':visible') && ! $('.conditiongroup .condition:visible').length) {
            $('.conditiongroup .add-condition').click();
        }
    });

    // Remove any items that have an empty dropdown
    $('.condition:first .condition-value select').each(function() {
        if (!$(this).find('option').length) {
            $('.condition:first .condition-item select').find('option[value="' + $(this).data('item') + '"]').remove();
        }
    });

    // Disable items in first (hidden) row
    $('.condition:first :input').prop('disabled', true);
    $('.conditiongroup .add-condition').prop('disabled', false);

    // If we have default conditions
    if ($('.condition:not(.hide)').length) {
        // Show table
        $('.conditiongroup .settings').show();
        // Ensure right option and value is showing
        $('.condition:not(.hide) .condition-item select').each(function () {
            $(this).parents('tr').find('.condition-value :input').prop('disabled', true).hide();
            $(this).parents('tr').find('.condition-value :input[data-item="' + $(this).val() +'"]').prop('disabled', false).show();

            $(this).parents('tr').find('.condition-operator select').prop('disabled', true).hide();
            var operator = $(this).parents('tr').find('.condition-value :input[data-item="' + $(this).val() +'"]').data('operator');
            $(this).parents('tr').find('.condition-operator select.operator' + operator).prop('disabled', false).show();

            // Remove any items that have an empty dropdown
            $(this).parents('tr').find('.condition-value select').each(function() {
                if (!$(this).find('option').length) {
                    $(this).parents('tr').find('.condition-item select').find('option[value="' + $(this).data('item') + '"]').remove();
                }
            });
        });
    }

    /*
     * Add filtering condition
     */
    $(document.body).on('click', '.add-condition', function() {
        addNewItem('.condition', $('.conditiongroup .settings'));
        // Show table
        $('.conditiongroup .settings').show();
        // Disable and hide fields that are not needed now
        $('.condition:last .condition-value :input, .condition:last .condition-operator :input').prop('disabled', true).hide();
        // Show the right condition options and values
        var selected = $('.condition:last .condition-item select').val();
        $('.condition:last .condition-value :input[data-item="' + selected +'"]').prop('disabled', false).show();
        var operator = $('.condition:last .condition-value :input[data-item="' + selected +'"]').data('operator');
        $('.condition:last .condition-operator select.operator' + operator).prop('disabled', false).show();
        if (operator === 2) {
            $('.condition:last').find('.datepicker').pikaday({ format: $('meta[name=date_format]').prop('content') });
        }
        // Show remove condition button
        $('.condition .remove-button').show();
    });

    /**
     * Remove filtering condition
     */
    $(document.body).on('click', '.condition .remove-button', function() {
        // Remove the condition row
        $(this).parents('.condition').remove();
        // Hide table if no conditions left
        if ($('.condition:visible').length === 0) {
            $('.conditiongroup .settings').hide();
        }
    });

    // Showing the right fields when changing condition item
    $(document.body).on('change', '.condition-item select', function() {
        $(this).parents('tr').find('.condition-value :input').prop('disabled', true).hide();
        $(this).parents('tr').find('.condition-value :input[data-item="' + $(this).val() +'"]').prop('disabled', false).show();

        $(this).parents('tr').find('.condition-operator select').prop('disabled', true).hide();
        var operator = $(this).parents('tr').find('.condition-value :input[data-item="' + $(this).val() +'"]').data('operator');
        $(this).parents('tr').find('.condition-operator select.operator' + operator).prop('disabled', false).show();

        if (operator === 2) {
            $(this).parents('tr').find('.datepicker').pikaday({ format: $('meta[name=date_format]').prop('content') });
        }
    });
});