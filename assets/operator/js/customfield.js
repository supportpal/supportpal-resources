jQuery(function($){

    /**
     * Class name for addNewItem() function.
     * We specify that we want only children of .customfield-options of class .option, otherwise it matches other
     * elements with class .option (for example: selectize).
     *
     * @type {string}
     */
    var className = '.customfield-options > .option';

    $(className + ":first :input").prop('disabled', true);

    /**
     * Add a new option to the form
     */
    $('.add-option').on('click', function() {
        addNewItem(className);
    });

    /**
     * Remove an option from the DOM
     */
    $(document.body).on('click', '.remove-option', function() {
        $(this).parents(className).remove();

        // If it was the last one, add an empty form back in
        if ($(className).length == 1) {
            addNewItem(className);
        }
    });

    /**
     * Toggle settings
     */
    $('select[name="type"]').on('change', function() {
        // If checklist, multiple options, options or radio
        if ($(this).val() == '2' || $(this).val() == '4' || $(this).val() == '5' || $(this).val() == '7') {
            $('.customfield-options').show();
            if ($(className).length == 1) {
                addNewItem(className);
            }
        } else {
            $('.customfield-options').hide();
        }

        // Hide required field if checkbox, checklist or multiple options
        if ($(this).val() == '1' || $(this).val() == '2' || $(this).val() == '4') {
            $('.required-field').find('input').prop('checked', false);
            $('.required-field').hide();
        } else {
            $('.required-field').show();
        }

        // Hide encrypt field if not password, text or textarea
        if ($(this).val() == '6' || $(this).val() == '8' || $(this).val() == '9') {
            $('.encrypt-field').show();
        } else {
            $('.encrypt-field').find('input').prop('checked', false);
            $('.encrypt-field').hide();
        }
    });

    // Selectize for brands
    $('select[name="brand[]"]').selectize({
        plugins: ['remove_button'],
        placeholder: Lang.get('core.select_brand')
    });
});
