$(function() {
    // Show desired value dropdown for given action
    $(document.body).on('change', '.rule-action select', function() {
        // Remove redactor (if it exists).
        if ($(this).parents('tr').find('.rule-value .action[data-action="' + $(this).val() + '"] .redactor-box').length) {
            $(this).parents('tr').find('.rule-value .action[data-action="' + $(this).val() + '"] textarea.text')
                .redactor('core.destroy');
        }

        // Show right value
        $(this).parents('tr').find('.rule-value .action').hide()
            .find(':input').prop('disabled', true);
        $(this).parents('tr').find('.rule-value .action[data-action="' + $(this).val() +'"]').show()
            .find(':input').prop('disabled', false);

        // Handle custom fields
        if ($(this).val() == '13') {
            $(this).parents('tr').find('.rule-customfield').hide()
                .find(':input').prop('disabled', true);
            $(this).parents('tr').find('.rule-customfield[data-id="' + $(this).parents('tr').find('.value-id').val() +'"]').show()
                .find(':input').prop('disabled', false);

            // Pikaday if needed
            if ($(this).parents('tr').find('.datepicker').is(':visible')) {
                $(this).parents('tr').find('.datepicker').pikaday({ format: $('meta[name=date_format]').prop('content') });
            }
        }

        // If it's a textarea, use redactor
        if ($(this).parents('tr').find('.rule-value .action[data-action="' + $(this).val() +'"] :input').is('textarea.text')) {
            redactor($(this).parents('tr').find('.rule-value .action[data-action="' + $(this).val() +'"] :input'));
        }
    });

    // Handle custom field option change
    $(document.body).on('change', '.rule-value .value-id', function() {
        if ($(this).parents('tr').find('.rule-action select').val() == '13') {
            $(this).parents('tr').find('.rule-customfield').hide()
                .find(':input').prop('disabled', true);
            $(this).parents('tr').find('.rule-customfield[data-id="' + $(this).val() +'"]').show()
                .find(':input').prop('disabled', false);
        }

        // Pikaday if needed
        if ($(this).parents('tr').find('.datepicker').is(':visible')) {
            $(this).parents('tr').find('.datepicker').pikaday({ format: $('meta[name=date_format]').prop('content') });
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

        // Handle custom fields
        if ($(this).val() == '13') {
            $(this).parents('tr').find('.rule-customfield').hide()
                .find(':input').prop('disabled', true);
            $(this).parents('tr').find('.rule-customfield[data-id="' + $(this).parents('tr').find('.value-id').val() +'"]').show()
                .find(':input').prop('disabled', false);

            // Pikaday if needed
            if ($(this).parents('tr').find('.datepicker').is(':visible')) {
                $(this).parents('tr').find('.datepicker').pikaday({ format: $('meta[name=date_format]').prop('content') });
            }
        }

        // If it's a textarea, use redactor
        if ($(this).parents('tr').find('.rule-value .action[data-action="' + $(this).val() +'"] :input').is('textarea.text')) {
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

        // Refresh the sortable option.
        $("#sortable").sortable("refresh");
    });

    /**
     * Remove item from the DOM
     */
    $(document.body).on('click', '.remove-button', function() {
        $(this).parents('tr').remove();

        // Refresh the sortable option.
        $("#sortable").sortable("refresh");
    });

    /**
     * Order escalation rules.
     */
    $("#sortable").sortable({
        placeholder: "ui-state-highlight",
        handle: ".handle",
        start: function(event, ui) {
            // Undo styling set by jqueryUI
            ui.helper.css("height", "auto").css("width", "auto");
        }
    });

    function redactor(element) {
        var opts = {
            focus: false,
            mergeFields: {
                tickets: true,
                organisations: organisationsEnabled
            },
            plugins: ['syntax', 'imagemanager', 'table', 'video', 'fontcolor', 'fontfamily', 'fontsize', 'mergeFields']
        };

        // Redactor
        element.redactor($.extend($.Redactor.default_opts, opts));
    }
});