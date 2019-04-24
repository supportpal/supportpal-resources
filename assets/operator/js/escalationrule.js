$(function() {
    // Show desired value dropdown for given action
    $(document.body).on('change', '.rule-action select', function() {
        initAction($(this));
    });

    // Handle custom field option change
    $(document.body).on('change', '.rule-value .value-id', function() {
        if ($(this).parents('tr').find('.rule-action select').val() == '13') {
            initCustomFields($(this).parents('tr'), $(this).val());
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
        initAction($(this));
    });

    // If we need to show the extra field based on default value
    $('.rule-when select').each(function() {
        if ($(this).val() == 1) {
            $(this).prev().show();
        }
    });

    // Disable the item that is used for copying
    $(".rule:first :input").prop('disabled', true);

    // Show/hide exclude CC option if the email user option is clicked (Add Reply action only)
    $(document).on('click', 'label.email-user', function() {
        $(this).parent().find('label.exclude-cc').toggle($(this).find(':input').is(':checked'));
    });

    // Web hooks.
    $(document).on('click', '.er-wh-toggle-headers', function (e) {
        e.preventDefault();

        $(this).next().toggle();
        $(this).next().find('textarea.codemirror').each(function () {
            codeMirror($(this));
        });
    });
    $(document).on('change', 'select.er-wh-method', function () {
        var $wrapper = $(this).parents('tr').find('.er-wh-content');

        // Only show content for options listed below.
        $wrapper.toggle($.inArray($(this).val(), ['POST','PUT','PATCH']) !== -1);
    });
    $(document).on('click', '.test-webhook', function (e) {
        e.preventDefault();

        var route = $(this).data('route'),
            $action = $(this).parents('.action'),
            getCodeMirror = function ($element) {
                var $codemirror = $element.next('.CodeMirror');
                if ($codemirror.length) {
                    return $codemirror[0].CodeMirror.getValue();
                }

                return '';
            },
            data = {
                headers: getCodeMirror($action.find('textarea[name$="[headers]"]')),
                method: $action.find('select[name$="[method]"]').val(),
                url: $action.find('input[name$="[url]"]').val(),
                content_type: $action.find('select[name$="[content_type]"]').val(),
                content: getCodeMirror($action.find('textarea[name$="[content]"]')),
                ticket_id: typeof ticketId !== 'undefined' ? ticketId : null
            };

        $action.find('.test-webhook-response')
            .removeClass('text-success text-fail')
            .html('<i class="fa fa-spinner fa-pulse fa-fw"></i> ' + Lang.get('general.loading') + '...');

        $.post(route, data)
            .done(function (data) {
                $action.find('.test-webhook-response')
                    .removeClass('text-success text-fail')
                    .addClass(data.status === 'success' ? 'text-success' : 'text-fail')
                    .text(data.message);
            })
            .fail(function (jqXHR, textStatus, errorThrown) {
                $action.find('.test-webhook-response')
                    .removeClass('text-success')
                    .addClass('text-fail')
                    .text(jqXHR.responseText);
            });
    });

    /**
     * Add a new item to the form
     */
    $(document.body).on('click', '.add-rule', function() {
        addNewItem('.rule');

        // Disable and hide fields that are not needed now
        $('.rule:last .rule-value .action:not(:first)').hide()
            .find(':input').prop('disabled', true);

        $('.rule:last .rule-action select').trigger('change');

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

    function redactor(element, plugins) {
        // Back out if it's already been initialised.
        if (element.data('init')) {
            return;
        }

        var plugins = plugins || [],
            opts = {
                mergeFields: {
                    tickets: true,
                    organisations: organisationsEnabled
                },
                plugins: [
                    'syntax', 'imagemanager', 'table', 'video', 'fontcolor', 'fontfamily', 'fontsize', 'mergeFields'
                ].concat(plugins)
            };

        // Redactor
        element.redactor($.extend($.Redactor.default_opts, opts));

        // Save that this element has been initialised, as redactor keeps duplicating
        element.data('init', true);
    }

    /**
     * Initialise code mirror instance.
     *
     * @param $element
     */
    function codeMirror($element)
    {
        // Back out if it's already been initialised.
        if ($element.data('init')) {
            return;
        }

        $element.initCodeMirror();
        $element.data('init', true);
    }

    /**
     * Initialise the selected action.
     *
     * @param $dropdown
     */
    function initAction($dropdown)
    {
        var $tr = $dropdown.parents('tr'),
            $action = $tr.find('.rule-value .action[data-action="' + $dropdown.val() + '"]');

        // Hide all actions, and then show the "chosen one".
        $tr.find('.rule-value .action').hide().find(':input').prop('disabled', true);
        $action.show().find(':input').prop('disabled', false);

        // Handle custom fields
        if ($dropdown.val() == '13') {
            initCustomFields($tr, $dropdown.parents('tr').find('.value-id').val());
        }

        // Pikaday if needed
        if ($tr.find('.datepicker').is(':visible')) {
            $tr.find('.datepicker').pikaday({ format: $('meta[name=date_format]').prop('content') });
        }

        // If it's a textarea, use redactor
        $action.find('textarea.text').each(function () {
            redactor($(this), $(this).data('plugins'));
        });

        // Initialise visible codemirror instances (we don't initialise on hidden textareas because CodeMirror
        // doesn't render correctly.
        $action.find('textarea.codemirror:visible').each(function () {
            codeMirror($(this));
        });

        // Initialise selectize, we have to do this on a per instance basis as the configuration / events is too complex
        // to do dynamically.
        $action.find('select[name$="[value_text][to][]"], select[name$="[value_text][cc][]"], select[name$="[value_text][bcc][]"]').each(function () {
            $(this).selectize($.extend({ }, emailSelectizeConfig(['restore_on_backspace', 'remove_button']), {
                render: {
                    item: function(item, escape) {
                        return '<div class="item' + (item.unremovable ? ' unremovable' : '') + '">' + escape(item.value) + '</div>';
                    },
                    option: function(item, escape) {
                        return '<div>' +
                            '<img class="avatar" src="' + escape(item.avatar_url) + '" width="16" /> &nbsp;' +
                            escape(item.formatted_name) + (item.organisation ? ' (' + escape(item.organisation || '') + ')' : '') +
                            (item.email ? '<br /><span class="description">' + escape(item.email || '') + '</span>' : '') +
                            '</div>';
                    }
                },
                load: function(query, callback) {
                    if (!query.length) return callback();

                    // Search for users
                    $.get(laroute.route('user.operator.search'), { brand_id: typeof brandId !== 'undefined' ? brandId : null, q: query })
                        .done(function(res) {
                            res.data = res.data.map(function(value) {
                                // Add needed info for search and selected item to work.
                                value.value = value.email;
                                value.text = value.firstname + ' ' + value.lastname + ' <' + value.email + '>';
                                return value;
                            });

                            callback(res.data);
                        })
                        .fail(function() { callback(); });
                }
            }));
        });
    }

    /**
     * Initialise custom fields.
     *
     * @param $tr
     * @param id
     */
    function initCustomFields($tr, id)
    {
        $tr.find('.rule-customfield').hide()
            .find(':input').prop('disabled', true);

        $tr.find('.rule-customfield[data-id="' + id + '"]').show()
            .find(':input').prop('disabled', false);
    }
});
