/**
 * Initialise a new delete alert modal.
 *
 * @constructor
 */
function deleteAlert()
{
    "use strict";

    /**
     * The current instance.
     *
     * @type {deleteAlert}
     */
    var instance = this;

    /**
     * Delete options common to both delete alert types.
     *
     * @type {{closeOnConfirm: boolean, width: number, customClass: string}}
     */
    this.defaultOpts = $.extend(true, {}, deleteAlert.defaultOpts);

    /**
     * Checkbox selector for severe modal.
     *
     * @type {string}
     */
    this.checkboxSelector = $.extend(true, {}, deleteAlert.checkboxSelector);

    /**
     * List of translation keys to use in the alert modal.
     *
     * @type {{title: string, warning: string, relations: string, confirmButton: string, cancelButton: string}}
     */
    this.translationKeys = $.extend(true, {}, deleteAlert.translationKeys);

    /**
     * Make description for deleting a record with several relations.
     *
     * @param section
     * @param name
     * @param relations
     * @param disabled
     * @returns {string}
     */
    var makeRelationsDescription = function (section, name, relations, disabled)
    {
        disabled = disabled || false;

        // Make checklist.
        var checklist = [];
        for (var i = 0; i < relations.length; i++) {
            var str = '<label style="margin: 0 10px 0 20px">'
                + '<input type="checkbox" name="confirm-delete[]" style="margin: 0 15px 0 0" ' + (disabled ? 'disabled checked' : '') + ' />'
                + relations[i]
                + '</label>';
            checklist.push(str);
        }

        // Lang string replacements.
        var replacements = {"record": section.toLowerCase(), 'name': name};

        return '<span>' + Lang.get(instance.translationKeys.relations, replacements) + '</span>'
            + '<br />'
            + checklist.join('<br />');
    };

    /**
     * SWAL options for deleting a normal record.
     *
     * @param name
     * @param section
     * @param relations
     * @returns {{title: (*|String), html: (*|String), showCancelButton: boolean, confirmButtonColor: string, confirmButtonText: (*|String), cancelButtonText: (*|String), closeOnConfirm: boolean}}
     */
    this.getDefaultOpts = function (section, name, relations)
    {
        name = name || '';
        if (typeof section !== 'string' || typeof name !== 'string') {
            throw ("Expecting parameters 'section' and 'name' to be of type string.");
        }

        var message = Lang.get(this.translationKeys.warning, {"record": section.toLowerCase(), 'name': name});
        if (typeof relations === 'object' && relations.length > 0) {
            message = makeRelationsDescription(section, name, relations, true);
        }

        return $.extend(this.defaultOpts, {
            title: Lang.get(this.translationKeys.title, {'record': section }),
            html: '<div style="text-align: left">'
                    + '<div class="warning-box">'
                        + '<i class="fa fa-exclamation-triangle" aria-hidden="true"></i> &nbsp;'
                        + Lang.get('messages.cannot_be_undone')
                    + '</div>'
                    + message
                + '</div>',
            showCancelButton: true,
            confirmButtonColor: "#e74c3c",
            confirmButtonText: Lang.get(this.translationKeys.confirmButton, {'record': section}),
            cancelButtonText: Lang.get(this.translationKeys.cancelButton, {'record': section})
        });
    };

    /**
     * SWAL options for deleting a record that has severe consequences i.e. the delete will cascade and
     * wipe out several other related records.
     *
     * @param section
     * @param name
     * @param relations
     * @returns {{title: (*|String), html: string, showCancelButton: boolean, confirmButtonColor: string, confirmButtonText: (*|String), closeOnConfirm: boolean, width: number}}
     */
    this.getSevereOpts = function (section, name, relations)
    {
        name = name || '';
        relations = relations || [];
        if (typeof name !== 'string' || typeof section !== 'string') {
            throw ("Expecting parameters 'section' and 'name' to be of type string.");
        } else if (typeof relations !== 'object') {
            throw ("Expecting 'relations' parameter of type array.");
        }

        return $.extend(this.defaultOpts, {
            title: Lang.get(this.translationKeys.title, {'record': section }),
            html: '<div style="text-align: left;">'
                    + '<div class="warning-box">'
                        + '<i class="fa fa-exclamation-triangle" aria-hidden="true"></i> &nbsp;'
                        + Lang.get('messages.cannot_be_undone')
                    + '</div>'
                    + makeRelationsDescription(section, name, relations)
                    + '<br /><span>' + Lang.get('messages.please_check') + '</span>'
                + '</div>',
            showCancelButton: true,
            cancelButtonText: Lang.get(this.translationKeys.cancelButton, {'record': section}),
            confirmButtonColor: "#e74c3c",
            confirmButtonText: Lang.get(this.translationKeys.confirmButton, {'record': section})
        });
    };

    /**
     * Convert modal buttons to an 'in-progress' state to show AJAX is running in the background.
     */
    this.disableButtons = function ()
    {
        swal.disableButtons();
        $(this.checkboxSelector).prop('disabled', 'disabled');
        $('.sweet-alert').find('button.cancel').hide();
    };
}

/**
 * Delete options common to both delete alert types.
 *
 * @type {{closeOnConfirm: boolean, width: number, customClass: string}}
 */
deleteAlert.defaultOpts = {
    closeOnConfirm: false,
    width: 550,
    customClass: 'delete-modal'
};

/**
 * Checkbox selector for severe modal.
 *
 * @type {string}
 */
deleteAlert.checkboxSelector = 'input[name="confirm-delete[]"]';

deleteAlert.translationKeys = {
    title: 'messages.delete_record',
    warning: 'messages.warn_delete',
    relations: 'messages.delete_relations',
    confirmButton: 'messages.delete_confirm',
    cancelButton: 'messages.keep_record'
};

/**
 * Convert modal buttons to an 'in-progress' state to show AJAX is running in the background.
 */
deleteAlert.disableButtons = function ()
{
    return (new deleteAlert).disableButtons();
};

/**
 * SWAL options for deleting a normal record.
 *
 * @param name
 * @param section
 * @param relations
 * @returns {{title: (*|String), html: (*|String), showCancelButton: boolean, confirmButtonColor: string, confirmButtonText: (*|String), cancelButtonText: (*|String), closeOnConfirm: boolean}}
 */
deleteAlert.getDefaultOpts = function (section, name, relations)
{
    return (new deleteAlert).getDefaultOpts(section, name, relations);
};

/**
 * SWAL options for deleting a record that has severe consequences i.e. the delete will cascade and
 * wipe out several other related records.
 *
 * @param section
 * @param name
 * @param relations
 * @returns {{title: (*|String), html: string, showCancelButton: boolean, confirmButtonColor: string, confirmButtonText: (*|String), closeOnConfirm: boolean, width: number}}
 */
deleteAlert.getSevereOpts = function (section, name, relations)
{
    return (new deleteAlert).getSevereOpts(section, name, relations);
};

$(function () {

    var checkboxSelector = 'input[name="confirm-delete[]"]';
    $(document).on('change', checkboxSelector, function (e) {
        if ($(checkboxSelector+':checked').length === $(checkboxSelector).length) {
            $('.sweet-alert').find('button.confirm').removeAttr('disabled').removeClass('disabled');
            $('.sweet-alert').find('button.cancel').hide();
        } else {
            $('.sweet-alert').find('button.confirm').prop('disabled', 'disabled').addClass('disabled');
            $('.sweet-alert').find('button.cancel').show();
        }
    });
    
    $(document.body).on('click', '.delete-confirm', function() {

        // Save the delete route
        var deleteRoute = $(this).data('route'),
            name = $('<div/>').text($(this).data('name')).html(),
            LANG = $(this).data('lang'),
            section = typeof LANG === 'object' ? LANG.section : Lang.get('general.record'), // backwards compatibility.
            relations = typeof LANG === 'object' ? LANG.relations : [],
            _self = this;

        // Show the alert
        var func = $(this).data('severe') ? 'getSevereOpts' : 'getDefaultOpts';
        swal(deleteAlert[func](section, name, relations), function(isConfirm) {
            if (isConfirm) {
                // Show AJAX in progress (spinning icon), hide cancel button and disable the checkboxes.
                deleteAlert.disableButtons();

                // Delete record and reload table if successful
                $.ajax({
                    url: deleteRoute,
                    type: 'DELETE',
                    dataType: 'json',
                    success: function(response) {
                        if (response.status == 'success' || response.status == true) {
                            // Reload table
                            swal(
                                Lang.get('messages.deleted'),
                                Lang.get('messages.success_deleted', { item: Lang.get('general.record') }),
                                'success'
                            );

                            // Trigger an event for any custom handling on successful deletion
                            $(_self).trigger("delete-successful", [response]);

                            // Remove the row from the table. If we're using DataTables we'll refresh it via
                            // AJAX in a moment anyway... This resolves an issue with departments were refreshing
                            // DataTables doesn't actually remove the row.
                            $(_self).parents('tr').remove();

                            // Check if DataTables exists, otherwise try and delete the row
                            if (typeof $.fn.dataTable === 'function' && $('.dataTable').length >= 1) {
                                $('.dataTable').dataTable()._fnAjaxUpdate();
                            }
                        } else {
                            swal(
                                Lang.get('messages.error'),
                                Lang.get('messages.error_deleted', { item: Lang.get('general.record') }),
                                'error'
                            );
                        }
                    },
                    error: function() {
                        swal(
                            Lang.get('messages.error'),
                            Lang.get('messages.error_deleted', { item: Lang.get('general.record') }),
                            'error'
                        );
                    }
                });
            }
        });

        // User must confirm before the button will unlock.
        if ($(this).data('severe')) {
            $('.sweet-alert').find('button.confirm').prop('disabled', 'disabled').addClass('disabled');
        }

    });

});