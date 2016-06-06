$(function() {
    // Show desired value dropdown for given action
    $(document.body).on('change', '.rule-action select', function() {
        // Remove redactor first
        $(this).parents('tr').find('.rule-value .redactor-box').before(document.createElement("textarea"));
        $(this).parents('tr').find('.rule-value .redactor-box').remove();

        // Show right value
        $(this).parents('tr').find('.rule-value .action').hide()
            .find(':input').prop('disabled', true);
        $(this).parents('tr').find('.rule-value .action[data-action="' + $(this).val() +'"]').show()
            .find(':input').prop('disabled', false);

        // If it's a textarea, use redactor
        if ($(this).parents('tr').find('.rule-value .action[data-action="' + $(this).val() +'"] :input').is('textarea')) {
            redactor($(this).parents('tr').find('.rule-value .action[data-action="' + $(this).val() +'"] :input'));
        }
    });

    // Switching between rule times
    $(document.body).on('change', '.rule-when select', function() {
        if ($(this).val() == 1) {
            $(this).prev().show();
        } else {
            $(this).prev().hide();
        }
    });

    // Show value dropdown based on actions set by default
    $('.rule').filter(function() { return $(this).css("display") != "none"; }).find('.rule-action select').each(function() {
        // Show right value
        $(this).parents('tr').find('.rule-value .action').hide()
            .find(':input').prop('disabled', true);
        $(this).parents('tr').find('.rule-value .action[data-action="' + $(this).val() +'"]').show()
            .find(':input').prop('disabled', false);

        // If it's a textarea, use redactor
        if ($(this).parents('tr').find('.rule-value .action[data-action="' + $(this).val() +'"] :input').is('textarea')) {
            redactor($(this).parents('tr').find('.rule-value .action[data-action="' + $(this).val() +'"] :input'));
        }
    });

    // If we need to show the extra field based on default value
    $('.rule-when select').each(function() {
        if ($(this).val() == 1) {
            $(this).prev().show();
        }
    });

    // Disable the item that is used for copying
    $(".rule:first :input").prop('disabled', true);

    /**
     * Add a new item to the form
     */
    $(document.body).on('click', '.add-rule', function() {
        addNewItem('.rule');

        // Disable and hide fields that are not needed now
        $('.rule:last .rule-value .action:not(:first)').hide()
            .find(':input').prop('disabled', true);

        $('.rule:last .rule-action select').change();
    });

    /**
     * Remove item from the DOM
     */
    $(document.body).on('click', '.remove-button', function() {
        $(this).parents('tr').remove();
    });

    function redactor(element) {
        // Redactor
        element.redactor($.Redactor.default_opts);
    }
});