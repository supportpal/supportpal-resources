/**
 * Convert bytes into a human readable string
 */
Object.defineProperty(Number.prototype,'fileSize',{value:function(a,b,c,d){
    return (a=a?[1e3,'k','B']:[1024,'K','iB'],b=Math,c=b.log,
            d=c(this)/c(a[0])|0,this/b.pow(a[0],d)).toFixed(2)
        +' '+(d?(a[1]+'MGTPEZY')[--d]+a[2]:'Bytes');
},writable:false,enumerable:false});

/**
 * Functions to handle a file uploads.
 *
 * @param parameters
 * @constructor
 */
function FileUpload(parameters)
{
    "use strict";

    // Default function arguments.
    var DEFAULT = {
        $element: $('.fileupload'),
        $container: $('.fileupload').parents('form:visible'),
        inputName: 'attachment',
        registerEvents: true,
        blueimp: {
            //
        }
    };

    // Merge user provided parameters with the default.
    var settings = $.extend(true, {}, DEFAULT, parameters);

    /*
     * Instance variables.
     */
    var total_files_uploaded = 0,
        cumulative_file_size = 0,
        MAX_FILE_SIZE = FileUpload.MAX_FILE_SIZE,
        DEFAULT_OPTIONS = {
            singleFileUploads: true,
            acceptFileTypes: new RegExp($('meta[name="allowed_files"]').prop('content'), "i"),
            maxFileSize: MAX_FILE_SIZE,
            dataType: 'json',
            formData: [],
            messages: {
                acceptFileTypes: Lang.get('messages.upload_wrong_type'),
                maxFileSize: Lang.get('messages.upload_max_size', {'size': MAX_FILE_SIZE.fileSize()})
            }
        };

    /*
     * Initialise blueimp.
     */
    var $fileupload = settings.$element.fileupload($.extend({}, DEFAULT_OPTIONS, settings.blueimp, {
        add: function (e, data) {
            var $container = settings.$container,
                $this = $(this),
                that = $this.data('blueimp-fileupload') || $this.data('fileupload'),
                options = that.options;

            // Foreach file add it to the DOM
            $.each(data.files, function (index, file) {
                var ul = $container.find('.attached-files');

                // Copy the first li instance
                ul.find('li:first').clone(true).appendTo(ul);

                // Set the file information
                ul.find('li:last span.information span.filename').text(file.name);
                ul.find('li:last span.information span.filesize').text('(' + file.size.fileSize() + ')');
                ul.find('li:last').removeClass('hide');
                ul.find('li:last .deleteAttachment').hide();

                // Set the context of this file upload (where it is in the DOM) so we can manipulate it later
                data.context = ul.find('li:last');

                // Increment the counter
                total_files_uploaded++;
            });

            data.process(function () {
                return $this.fileupload('process', data);
            }).done(function () {
                if ((that._trigger('added', e, data) !== false) &&
                    (options.autoUpload || data.autoUpload) &&
                    data.autoUpload !== false
                ) {
                    // Disable the form submit button, so they can't submit until file upload is complete.
                    $this.parents('form').find('input[type=submit]').prop('disabled', 'disabled');

                    // Submit the request.
                    data.submit();
                }
            }).fail(function () {
                if (data.files.error) {
                    $.each(data.files, function (index, file) {
                        var error = file.error;
                        if (error) {
                            handleFailedUpload(data, error, $this);
                        }
                    });
                }
            });
        },
        progress: function (e, data) {
            var progress = parseInt(data.loaded / data.total * 100, 10);
            $(data.context).find('.bar').css('width', progress + '%');
        },
        submit: function (e, data) {
            var $this = $(this),
                that = $this.data('blueimp-fileupload') || $this.data('fileupload'),
                options = that.options;
            
            // Calculate cumulative size of attachments.
            $.each(data.files, function (index, file) {
                cumulative_file_size += file.size;
                $(data.context).find('.deleteAttachment').data('size', file.size);
            });
            
            // Block upload that exceed the cumulative limit.
            if (typeof options.cumulativeMaxFileSize !== 'undefined'
                && cumulative_file_size > options.cumulativeMaxFileSize
            ) {
                handleFailedUpload(
                    data,
                    Lang.get('core.attachment_limit_reached', { size: MAX_FILE_SIZE.fileSize() }),
                    $this
                );

                return false;
            }
        },
        done: function (e, data) {
            var $self = $(this);

            $.each(data.result, function (index, file) {
                // The file failed to upload
                if (file.hasOwnProperty('error')) {
                    handleFailedUpload(data, file.error, $self);
                    return true; // continue;
                }

                // The file successfully uploaded
                $(data.context).find('.progress').hide();
                $(data.context).find('.deleteAttachment').show();
                $(data.context).find('.deleteAttachment').data('id', file.id);
                $(data.context).find('.deleteAttachment').data('hash', file.hash);
                $(data.context).find('.deleteAttachment').data('url', file.delete_url);

                // Create attachment input - we use this to link it to the ticket message
                var input = settings.$container.find('input[name="' + settings.inputName + '[]"]')
                        .clone()
                        .removeAttr('disabled')
                        .appendTo( settings.$container.find('.attachment-details') );
                input.attr('name', settings.inputName + '[' + file.hash + ']');
                input.attr('id', settings.inputName + '[' + file.hash + ']');
                input.val(file.filename);
            });

            // Renable the form after all files have uploaded.
            if (--total_files_uploaded == 0) {
                // Re-enable the form submit button
                $self.parents('form').find('input[type=submit]').removeAttr('disabled');
            }
        },
        fail: function (e, data) {
            // This function gets called separately for each upload that fails.
            handleFailedUpload(data, data.errorThrown, $(this));
        }
    }));

    /**
     * Handle failed uploads.
     *
     * @param data
     * @param message
     * @param $context jQuery object for the input.fileupload element.
     */
    var handleFailedUpload = function (data, message, $context) {

        // Re-enable the form after all files have uploaded.
        if (--total_files_uploaded == 0) {
            // Re-enable the form submit button
            $context.parents('form').find('input[type=submit]').removeAttr('disabled');
        }
        
        // Decrement cumulative file size count.
        $.each(data.files, function (index, file) {
            cumulative_file_size -= file.size;
        });

        // Remove the list item
        $(data.context).remove();

        // Add an error box if there is not one there currently
        if (! $('.fail').length) {
            if ($context.parents('.form-container').length && false) {
                $context.parents('.form-container').before('<div class="fail box hide"></div>');
            } else {
                // In case it's not in a form-container
                $('label.file-input.button').before('<div class="fail box hide" style="margin: 10px 0;"></div>');
            }
        }

        // Show error message.
        var $box = $('.fail.attachment').length ? $('.fail.attachment') : $('.fail'),
            reason = Lang.get('messages.upload_error', { 'filename': data.files[0].name, 'reason': message });

        if ($box.is(':visible')) {
            $box.append('<br />' + reason);
        } else {
            $box.text(reason);
        }

        // Scroll up to message
        $('html, body').animate({ scrollTop: $box.show().delay(10000).fadeOut().offset().top - 25 }, 500);
    };

    /**
     * Register file upload events.
     *
     * @return void
     */
    var registerEvents = function () {

        /**
         * Handle deleting an existing attachment that belongs to a ticket message.
         */
        $(document).on('click', '.message .deleteAttachment', function (e) {

            FileUpload.deleteAttachment(
                this,
                $(this).data('url'),
                $(this).data('hash'),
                $(this).parents('li'),
                function(context) {
                    // Grab the message that the attachment belongs to
                    var $message = $(context).parents('.message');

                    // If we deleted the last attachment, hide the header text
                    if ( $message.find('div.attachments ul li').length == 1) {
                        $message.find('div.attachments').hide();
                    }
                    
                    // Decrement cumulative file size.
                    cumulative_file_size -= $(context).data('size');
                }
            );
        });

        /**
         * Handle removing attachments from a new ticket reply (they aren't actually associated with anything yet).
         */
        $(document).on('click', '.attached-files .deleteAttachment', function () {

            FileUpload.deleteAttachment(
                this,
                $(this).data('url'),
                $(this).data('hash'),
                $(this).parents('li'),
                function(context) {
                    settings.$container.find('input[name="' + settings.inputName + '['+ $(context).data().hash +']"]')
                        .remove();

                    // Decrement cumulative file size.
                    cumulative_file_size -= $(context).data('size');
                }
            );
        });

        /*
         * Show a drag and drop box when dragging a file over to give a visual guide. They can actually drop it anywhere
         * in the browser.
         */
        $(document).bind('dragover', function (e) {
            var dragover = $('.attachment-dragover'),
                timeout = window.dropZoneTimeout;

            // Show box if not currently visible
            if (! dragover.is(':visible')) {
                dragover.show();
            }

            // If timeout if there, clear it as we want to keep showing it
            if (timeout) {
                clearTimeout(timeout);
            }

            // Set a timeout to hide the box after we drop/drag out
            window.dropZoneTimeout = setTimeout(function () {
                window.dropZoneTimeout = null;
                dragover.hide();
            }, 500);
        });

        $(document).bind('drop', function (e) {
            $('.attachment-dragover').hide();
        });
    };


    // Register events.
    if (settings.registerEvents) {
        registerEvents();
    }
}

/*
 * Static FileUpload properties.
 */
FileUpload.MAX_FILE_SIZE = Number($('meta[name="max_file_size"]').prop('content'));

/*
 * Static FileUpload functions.
 */
FileUpload.deleteAttachment = function (context, url, hash, $listItem, successCallback) {

    swal({
        title: Lang.get('messages.are_you_sure'),
        text: Lang.get('messages.warn_delete'),
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#DD6B55",
        confirmButtonText: Lang.get('messages.yes_im_sure'),
        closeOnConfirm: false
    }, function() {

        swal.disableButtons();

        // DELETE the file!
        $.ajax({
            url: url,
            type: 'DELETE',
            data: { 'hash': hash },
            success: function(result) {
                if (result.success == true
                    && (typeof $listItem !== 'undefined' && $listItem instanceof jQuery)
                ) {
                    // Call the success callback
                    if (typeof successCallback === 'function') {
                        successCallback.call(this, context);
                    }

                    // Remove the list item from the interface
                    swal(
                        Lang.get('messages.deleted'),
                        Lang.get('messages.success_deleted', {'item': Lang.choice('general.attachment', 1)}),
                        'success'
                    );

                    $listItem.remove();
                }
            },
            error: function( jqXHR, textStatus, errorThrown ) {
                swal(
                    Lang.get('messages.error'),
                    Lang.get('messages.error_deleted', {'item':Lang.choice('general.attachment', 1)}),
                    'error'
                );
            }
        });
    });
};
