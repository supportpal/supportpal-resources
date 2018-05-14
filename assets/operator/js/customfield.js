jQuery(function($){

    /**
     * Class name for addNewItem() function.
     * We specify that we want only children of .customfield-options of class .option, otherwise it matches other
     * elements with class .option (for example: selectize).
     *
     * @type {string}
     */
    var className = '#sortable > .option';

    $(className + ":first :input").prop('disabled', true);

    /**
     * Add a new option to the form
     */
    $('.add-option').on('click', function() {
        addNewItem(className);

        // Refresh the sortable option.
        $("#sortable").sortable("refresh");
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

        // Refresh the sortable option.
        $("#sortable").sortable("refresh");
    });

    /**
     * Order options.
     */
    $("#sortable").sortable({
        placeholder: "ui-state-highlight",
        handle: ".handle"
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

        // Hide encrypt and regex fields if not password, text or textarea
        if ($(this).val() == '6' || $(this).val() == '8' || $(this).val() == '9') {
            $('.encrypt-field').show();
            $('.customfield-regex').show();
        } else {
            $('.encrypt-field').find('input').prop('checked', false);
            $('.encrypt-field').hide();
            $('.customfield-regex').hide();
        }
    });

    // Selectize for brands
    $('select[name="brand[]"]').selectize({
        plugins: ['remove_button'],
        placeholder: Lang.get('core.select_brand')
    });
    
    // Selectize for Depends On.
    var xhr,
        select_dependentField, $select_dependentField,
        select_dependentOption, $select_dependentOption;
    
    $select_dependentField = $('select[name="depends_on_field_id"]').selectize({
        allowEmptyOption: true,
        onChange: function (value) {
            var routeName = this.$input.data('route');
            
            // The field depends on another field, so hide the visibility options.
            if (value !== "") {
                $('.visibility').hide();

                // Get the options that are associated with the selected field.
                select_dependentOption.disable();
                select_dependentOption.load(function (callback) {
                    xhr && xhr.abort();
                    xhr = $.ajax({
                        url: laroute.route(routeName, {'id': value}),
                        success: function (res) {
                            // Clear options and add new ones
                            select_dependentOption.clearOptions();
                            select_dependentOption.enable();
                            callback(res.data.options);
                        },
                        error: function () {
                            callback();
                        }
                    })
                });
            } else {
                $('.visibility').show();

                select_dependentOption.disable();
                select_dependentOption.clearOptions();
            }
        }
    });

    $select_dependentOption = $('select[name="depends_on_option_id"]').selectize({
        valueField: 'id',
        labelField: 'value',
        searchField: 'value',
        placeholder: Lang.get('customfield.select_option')
    });

    select_dependentField  = $select_dependentField[0].selectize;
    select_dependentOption = $select_dependentOption[0].selectize;
});
