function Filtering() {};
/**
 * Fetch a unique group ID.
 *
 * @returns {number}
 */
Filtering.getUniqueGroupId = function () {
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
};

/**
 * Remove any condition items that have an empty value dropdown.
 *
 * @param context
 */
Filtering.removeEmpty = function (context) {
    $(context).find('.condition-value select').each(function() {
        if (!$(this).find('option').length) {
            $(context).find('.condition-item select').find('option[value="' + $(this).data('item') + '"]').remove();
        }
    });
};

/**
 * Show a given condition.
 *
 * @param context
 */
Filtering.showCondition = function (context) {
    var item = parseInt($(context).val()),
        $selectedOption = $(context).find(':selected');

    $(context).parents('tr').find('.condition-value :input').prop('disabled', true).hide();
    $(context).parents('tr').find('.condition-value :input[data-item="' + item +'"]').prop('disabled', false).show();

    $(context).parents('tr').find('.condition-value .description').hide();
    $(context).parents('tr').find('.condition-value .description[data-item="' + item +'"]').show();

    $(context).parents('tr').find('.condition-operator select').prop('disabled', true).hide();
    var operator = $(context).parents('tr').find('.condition-value :input[data-item="' + item +'"]').data('operator');
    $(context).parents('tr').find('.condition-operator select.operator' + operator).prop('disabled', false).show();

    // Remove any items that have an empty dropdown
    Filtering.removeEmpty($(context).parents('tr'));

    // Special case: If a date picker, initialise pikaday
    if (operator === 2 || operator === 7) {
        $(context).parents('tr').find('.datepicker').pikaday({ format: $('meta[name=date_format]').prop('content') });
    }

    // Special case: need to enable the custom field ID value for custom fields (hide and disable it otherwise)
    var ids = [ 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58 ];
    $(context).parents('tr')
        .find('.condition-value select[name*="[value]"]')
        .filter(function () {
            return ids.indexOf($(this).data('item')) > -1;
        })
        .prop('disabled', true)
        .hide();
    if ($.inArray(item, ids) !== -1) {
        $(context).parents('tr')
            .find('.condition-value select[data-item=' + item + '][name*="[value]"]')
            .prop('disabled', false)
            .val($selectedOption.data('field'));
    }

    // Special case: only show options relevant to the selected custom field.
    if (item == 45 || item == 47 || item == 50 || item == 52 || item == 55 || item == 57) {
        var $conditionValue = $(context).parents('tr')
            .find('.condition-value select[data-item=' + item + '][name*="[value_extra]"]');

        $conditionValue.find('option').each(function () {
            if ($(this).is('[data-field="' + $selectedOption.data('field') + '"]')) {
                $(this).prop('disabled', false).show();
            } else {
                $(this).prop('disabled', true).hide();
            }
        });

        // Select the first option if currently selected value is not valid.
        if ($conditionValue.find('option:selected').is(':disabled')) {
            $conditionValue.find('option:selected').prop('selected', false);
            $conditionValue.find('option:not(:disabled):first').prop('selected', true);
        }
    }
};

/**
 * Initialise the filtering menus.
 */
Filtering.initialise = function () {
    // Add custom fields to every condition-item drop-down (the hidden <tr> used for new conditions and any other
    // <tr> for current conditions).
    // Important: We need to do this before we delete empty dropdowns.
    var ids = [ 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58 ],
        $ticketCustomFields = $('.condition .condition-item select').find('option[value=44]'),
        $userCustomFields = $('.condition .condition-item select').find('option[value=49]'),
        $organisationCustomFields = $('.condition .condition-item select').find('option[value=54]');

    // Only get custom fields from the first condition, otherwise we get several duplicates...
    var customFields = $('.condition:first .condition-value select[name*="[value]"]')
        .filter(function () {
            return ids.indexOf($(this).data('item')) > -1;
        })
        .find('option')
        .map(function () {
            return { item: $(this).parents('select').data('item'), option: this };
        })
        .sort(function (a, b) {
            // Sort alphabetically, and then flip it because we insert backwards...
            return a.option.text.toUpperCase().localeCompare(b.option.text.toUpperCase());
        })
        .get()
        .reverse();

    // Insert the custom field conditions.
    $(customFields).each(function (index, value) {
        var condition = parseInt(value.item);

        // Target the right section
        if (condition <= 48) {
            var $text = Lang.get('conditions.ticket_custom_field'),
                $section = $ticketCustomFields;
        } else if (condition >= 49 && condition <= 53) {
            var $text = Lang.get('conditions.user_custom_field'),
                $section = $userCustomFields;
        } else {
            var $text = Lang.get('conditions.user_organisation_custom_field'),
                $section = $organisationCustomFields;
        }

        var $option = $('<option>', {
            value: condition,
            text: $text + ': ' + value.option.text,
            "data-field": value.option.value
        });

        $section.after($option);
    });
    $ticketCustomFields.remove();
    $userCustomFields.remove();
    $organisationCustomFields.remove();

    // Remove any items that have an empty dropdown
    Filtering.removeEmpty('.condition:first');

    // Ensure right operator and value is showing for each condition.
    $('.condition-item select').each(function () {
        // Set selected item for existing conditions.
        var data = $(this).data();
        if (typeof data.selected !== 'undefined' && data.field !== '') {
            $(this).find('option[value="' + data.selected + '"][data-field="' + data.field + '"]').prop('selected', true);
        }

        // Show relevant condition fields.
        Filtering.showCondition(this);
    });

    // Disable items in first (hidden) row
    $(".conditiongroup:first:not(:visible) :input, .condition:first :input").prop('disabled', true);
    $('.conditiongroup .add-condition, .conditiongroup-buttons button').prop('disabled', false);

    // If we have default conditions, show them.
    if ($('.condition:not(.hide)').length) {
        $('.conditiongroup .settings').show();
    }

    // If we more than one condition group, show the plan conditiongroup type dropdown
    if ($('.conditiongroup:visible').length > 1) {
        $('.plan-conditiongroup-type').show();
    } else {
        $('.plan-conditiongroup-type').hide();
    }

    // Show the condition group type dropdown if conditiongroup has 2 or more conditions
    // Show the remove button always if using in grid filtering
    $('.conditiongroup').each(function() {
        if ($(this).find('.condition:visible').length > 1 || $(this).parents('.grid-options').length) {
            $(this).find('.conditiongroup-type, .condition .remove-button').show();
        } else {
            $(this).find('.conditiongroup-type, .condition .remove-button').hide();
        }
    });
};

$(function() {
    // Toggle filtering
    $('.toggle-filtering').on('click', function() {
        $('.conditiongroup').toggle();

        // If we're toggling to show and it's currently empty, insert new condition
        if ($('.conditiongroup').is(':visible') && ! $('.conditiongroup .condition:visible').length) {
            $('.conditiongroup .add-condition').trigger('click');
        }
    });

    Filtering.initialise();

    /**
     * When selecting a condition, show the appropriate operator and value fields.
     */
    $(document.body).on('change', '.condition-item select', function() {
        Filtering.showCondition(this);
    });

    /**
     * Add Condition Group.
     */
    $(document.body).on('click', '.add-conditiongroup', function() {
        // Get unique index for this new group (before we insert the new DOM)
        var index = Filtering.getUniqueGroupId(),
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

    /**
     * Remove Condition Group.
     */
    $(document.body).on('click', '.conditiongroup-header .remove-button', function() {
        // Hide the plan conditiongroup type dropdown if just one conditiongroup now
        $(this).parents('.conditiongroup').remove();
        if ($('.conditiongroup:visible').length > 1) {
            $('.plan-conditiongroup-type').show();
        } else {
            $('.plan-conditiongroup-type').hide();
        }
    });

    /**
     * Add filtering condition
     */
    $(document.body).on('click', '.add-condition', function() {
        addNewItem('.condition', $(this).parents('.conditiongroup').find('.settings'));

        // Set condition group ID on condition
        var $this = $(this).parents('.conditiongroup'),
            index = $this.find('.condition-group-id:first').val(); // Take the first ID in the group container - this should be correct
        $this.find('.condition-group-id').val(index);              // as adding a group should set this value

        // Show table
        $this.find('.settings').show();

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

        // Show the conditiongroup type dropdown and condition remove button if conditiongroup now has 2 or more conditions
        // Show the remove button always if using in grid filtering
        if ($this.find('.condition:visible').length > 1 || $this.parents('.grid-options').length) {
            $this.find('.conditiongroup-type, .condition .remove-button').show();
        } else {
            $this.find('.conditiongroup-type, .condition .remove-button').hide();
        }
    });

    /**
     * Remove filtering condition
     */
    $(document.body).on('click', '.condition .remove-button', function() {
        // Hide the conditiongroup type dropdown if conditiongroup has at least 3 conditions before deleting this one
        // Show the remove button always if using in grid filtering
        if ($(this).parents('.conditiongroup').find('.condition:visible').length > 2 || $(this).parents('.grid-options').length) {
            $(this).parents('.conditiongroup').find('.conditiongroup-type, .condition .remove-button').show();
        } else {
            $(this).parents('.conditiongroup').find('.conditiongroup-type, .condition .remove-button').hide();
        }

        // Remove the condition row
        $(this).parents('.condition').remove();

        // Hide table if no conditions left
        if ($('.condition:visible').length === 0) {
            $('.conditiongroup .settings').hide();
        }
    });
});
