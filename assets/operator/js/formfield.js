$(function() {
    // Disable items in first (hidden) row
    $('.field:first :input').prop('disabled', true);

    /*
     * Add filtering condition
     */
    $(document.body).on('click', '.add-field', function() {
        // Get unique index for this new group (before we insert the new DOM)
        var index = getUniqueGroupid();

        addNewItem('.field', $('.field-table'));

        // Set condition group ID on condition
        $('.field:last').find('input[name ^=fields][name $="[local_id]"]').val(index);

        // Disable first option
        $('.field:last').find('.option:first :input').prop('disabled', true);

        // Show table
        $('.field-table').show();
        // Show remove condition button
        $('.field .remove-button').show();
    });

    /**
     * Remove item from the DOM
     */
    $(document.body).on('click', '.field .remove-button', function() {
        // Hide the table if this is the only field
        if ($(this).parents('.field-table').find('.field:visible').length == 1) {
            // Hide table
            $('.field-table').hide();
        }

        // Remove the condition row
        $(this).parents('.field').remove();
    });

    // Show the options button if we need to
    $(document.body).on('change', '.field-type select', function() {
        var $this = $(this).parents('.field');
        if ($(this).val() == '2' || $(this).val() == '4' || $(this).val() == '5' || $(this).val() == '7' || $(this).val() == '10') {
            $this.find('.field-add-option').show();
        } else {
            $this.find('.field-option-container .option:not(:first)').remove();
            $this.find('.field-add-option').hide();
        }
    });

    // Disable first option
    $('.field').find('.option:first :input').prop('disabled', true);

    /**
     * Add a new option to the form
     */
    $(document.body).on('click', '.add-option', function() {
        var $this = $(this).parents('.field'),
            index = $this.find('.field-local-id').val();

        addNewItem('.option', $this.find('.field-option-container'));

        $this.find('.field-id').val(index);
    });

    /**
     * Remove an option from the DOM
     */
    $(document.body).on('click', '.remove-option', function() {
        var $this = $(this).parents('.field');

        $(this).parents('.option').remove();

        // If it was the last one, add an empty form back in
        if ($this.find('.option').length == 1) {
            addNewItem('.option', $this.find('.field-option-container'));
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
    // loop over all group IDs (selecting elements by those starting with "fields" and ending with "[id]"
    $('.field input[name ^=fields][name $="[id]"]').each(function() {
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