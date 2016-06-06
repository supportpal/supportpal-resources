$(function() {
    // Remove any items that have an empty dropdown
    $('.condition:first .condition-value select').each(function() {
        if (!$(this).find('option').length) {
            $('.condition:first .condition-item select').find('option[value="' + $(this).data('item') + '"]').remove();
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

    // Showing the right fields based on default condition items
    $('.condition-item select').each(function() {
        $(this).parents('tr').find('.condition-value :input').prop('disabled', true).hide();
        $(this).parents('tr').find('.condition-value :input[data-item="' + $(this).val() +'"]').prop('disabled', false).show();

        $(this).parents('tr').find('.condition-operator select').prop('disabled', true).hide();
        var operator = $(this).parents('tr').find('.condition-value :input[data-item="' + $(this).val() +'"]').data('operator');
        $(this).parents('tr').find('.condition-operator select.operator' + operator).prop('disabled', false).show();

        if (operator === 2) {
            $(this).parents('tr').find('.datepicker').pikaday({ format: $('meta[name=date_format]').prop('content') });
        }

        // Remove any items that have an empty dropdown
        $(this).parents('tr').find('.condition-value select').each(function() {
            if (!$(this).find('option').length) {
                $(this).parents('tr').find('.condition-item select').find('option[value="' + $(this).data('item') + '"]').remove();
            }
        });
    });

    // If we more than one condition group, show the plan conditiongroup type dropdown
    if ($('.conditiongroup:visible').length > 1) {
        $('.plan-conditiongroup-type').show();
    } else {
        $('.plan-conditiongroup-type').hide();
    }

    // Show the condition group type dropdown if conditiongroup has 2 or more conditions
    $('.conditiongroup').each(function() {
        if ($(this).find('.condition:visible').length > 1) {
            $(this).find('.conditiongroup-type, .condition .remove-button').show();
        } else {
            $(this).find('.conditiongroup-type, .condition .remove-button').hide();
        }
    });

    // Disable the item that is used for copying
    $(".conditiongroup:first :input, .condition:first :input").prop('disabled', true);

    $(document.body).on('click', '.add-conditiongroup', function() {
        // Get unique index for this new group (before we insert the new DOM)
        var index = getUniqueGroupid(),
            $this = $('.conditiongroup:last');

        // Insert new group into the DOM
        addNewItem('.conditiongroup');

        // Add a condition by default
        $('.conditiongroup:last .condition').show();

        // Disable unnecessary condition operator and values
        $('.conditiongroup:last .condition-operator, .conditiongroup:last .condition-value').find(':input:not(:first)').prop('disabled', true);

        // Hide the delete button for now as there's only one condition
        $('.conditiongroup:last .conditiongroup-type, .conditiongroup:last .condition .remove-button').hide();

        // Set condition group ID on condition
        $this.find('input[name ^=conditiongroups][name $="[local_id]"]').val(index);
        $this.find('.conditiongroup-id, .condition-group-id').val(index);

        // If we more than one conditiongroup now, show the plan conditiongroup type dropdown
        if ($('.conditiongroup:visible').length > 1) {
            $('.plan-conditiongroup-type').show();
        } else {
            $('.plan-conditiongroup-type').hide();
        }
    });
    $(document.body).on('click', '.add-condition', function() {
        addNewItem('.condition', $(this).parents('.conditiongroup').find('.settings'));
        
        // Set condition group ID on condition
        var $this = $(this).parents('.conditiongroup'),
            index = $this.find('.condition-group-id:first').val(); // Take the first ID in the group container - this should be correct
        $this.find('.condition-group-id').val(index);              // as adding a group should set this value
        
        // Disable and hide fields that are not needed now
        $this.find('.condition:last .condition-value :input, .condition:last .condition-operator :input').prop('disabled', true).hide();

        // Show the right condition options and values
        var selected = $this.find('.condition:last .condition-item select').val();
        $this.find('.condition:last .condition-value :input[data-item="' + selected +'"]').prop('disabled', false).show();
        var operator = $this.find('.condition:last .condition-value :input[data-item="' + selected +'"]').data('operator');
        $this.find('.condition:last .condition-operator select.operator' + operator).prop('disabled', false).show();
        if (operator === 2) {
            $this.find('.condition:last').find('.datepicker').pikaday({ format: $('meta[name=date_format]').prop('content') });
        }

        // Show the conditiongroup type dropdown if conditiongroup now has 2 or more conditions
        if ($this.find('.condition:visible').length > 1) {
            $this.find('.conditiongroup-type, .condition .remove-button').show();
        } else {
            $this.find('.conditiongroup-type, .condition .remove-button').hide();
        }
    });

    /**
     * Remove item from the DOM
     */
    $(document.body).on('click', '.condition .remove-button', function() {
        // Hide the conditiongroup type dropdown if conditiongroup has at least 3 conditions before deleting this one
        if ($(this).parents('.conditiongroup').find('.condition:visible').length > 2) {
            $(this).parents('.conditiongroup').find('.conditiongroup-type, .condition .remove-button').show();
        } else {
            $(this).parents('.conditiongroup').find('.conditiongroup-type, .condition .remove-button').hide();
        }

        // Remove the condition row
        $(this).parents('.condition').remove();
    });
    $(document.body).on('click', '.conditiongroup-header .remove-button', function() {
        // Hide the plan conditiongroup type dropdown if just one conditiongroup now
        $(this).parents('.conditiongroup').remove();
        if ($('.conditiongroup:visible').length > 1) {
            $('.plan-conditiongroup-type').show();
        } else {
            $('.plan-conditiongroup-type').hide();
        }
    });
});

/**
 * Fetch a unique group ID
 * @returns {number}
 */
function getUniqueGroupid()
{
    var re = /^\w+\[(\d+)?]\[\w+]?$/;
    var m, index = 0;
    // loop over all group IDs (selecting elements by those starting with "conditiongroups" and ending with "[id]"
    $('.conditiongroup input[name ^=conditiongroups][name $="[id]"]').each(function() {
        if ((m = re.exec($(this).attr('name'))) !== null) {
            if (typeof m[1] != 'undefined') {
                if ((m = parseInt(m[1])) >= index) {
                    index = m + 1;
                }
            }
        }
    });

    return index;
}