jQuery(function($){

    $(".option:first :input").prop('disabled', true);

    /**
     * Add a new option to the form
     */
    $('.add-option').on('click', function() {
        addNewItem('.option');
    });

    /**
     * Remove an option from the DOM
     */
    $(document.body).on('click', '.remove-option', function() {
        $(this).parents('.option').remove();

        // If it was the last one, add an empty form back in
        if ($('.option').length == 1) {
            addNewItem('.option');
        }
    });

    /**
     * Toggle settings
     */
    $('select[name="type"]').on('change', function() {
        // If checklist, multiple options, options or radio
        if ($(this).val() == '2' || $(this).val() == '4' || $(this).val() == '5' || $(this).val() == '7') {
            $('.customfield-options').show();
            if ($('.option').length == 1) {
                addNewItem('.option');
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
