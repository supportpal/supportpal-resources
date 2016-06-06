/**
 * Convert bytes into a human readable string
 */
Object.defineProperty(Number.prototype,'fileSize',{value:function(a,b,c,d){
    return (a=a?[1e3,'k','B']:[1024,'K','iB'],b=Math,c=b.log,
            d=c(this)/c(a[0])|0,this/b.pow(a[0],d)).toFixed(2)
        +' '+(d?(a[1]+'MGTPEZY')[--d]+a[2]:'Bytes');
},writable:false,enumerable:false});

/**
 * Short-hand for jQuery document.ready()
 */
$(function () {

    /**
     * Blueimp file upload handler
     */
    $(document).on("click", "#fileupload", function () {

        var total_files_uploaded = 0;

        $('#fileupload').fileupload({
            dataType: 'json',
            formData: [],
            add: function (e, data) {
                // Foreach file add it to the DOM
                $.each(data.files, function (index, file) {
                    var ul = $('#attached-files');

                    // Copy the first li instance
                    ul.find('li:first').clone(true).appendTo(ul);

                    // Set the file information
                    ul.find('li:last span.information span.filename').text(file.name);
                    ul.find('li:last span.information span.filesize').text('(' + file.size.fileSize() + ')');
                    ul.find('li:last').removeClass('hide');

                    // Set the context of this file upload (where it is in the DOM) so we can manipulate it later
                    data.context = ul.find('li:last');

                    // Increment the counter
                    total_files_uploaded++;
                });

                // Submit the request
                data.submit();

                // Disable the form submit button, so they can't submit until file upload is complete
                $('#fileupload').parents('form').find('input[type=submit]').prop('disabled', 'disabled');
            },
            progress: function (e, data) {
                var progress = parseInt(data.loaded / data.total * 100, 10);
                $(data.context).find('.bar').css('width', progress + '%');
            },
            done: function (e, data) {
                $.each(data.result, function (index, file) {
                    // The file failed to upload
                    if (file.hasOwnProperty('error')) {
                        // Remove the list item
                        $(data.context).remove();
                        
                        // Show an error message
                        var box = $('.fail.attachment').length ? $('.fail.attachment') : $('.fail');
                        $('html, body').animate({
                            scrollTop: box.text('Failed to upload attachment "' + file.name + '", ' +
                                'reason: "' + file.error + '"').show().delay(5000).fadeOut()
                                .offset().top
                        }, 500);
                        return;
                    }

                    // The file successfully uploaded
                    $(data.context).find('.progress').hide();
                    $(data.context).find('.deleteAttachment').show();
                    $(data.context).find('.deleteAttachment').data('id', file.id);
                    $(data.context).find('.deleteAttachment').data('hash', file.hash);
                    $(data.context).find('.deleteAttachment').data('url', file.delete_url);

                    // Create attachment input - we use this to link it to the ticket message
                    var input = $('input[name="attachment[]"]').clone().removeAttr('disabled').appendTo('.attachment-details');
                    input.attr('name', 'attachment[' + file.hash + ']');
                    input.attr('id', 'attachment[' + file.hash + ']');
                    input.val(file.filename);
                });

                // Renable the form after all files have uploaded.
                if (--total_files_uploaded == 0) {
                    // Re-enable the form submit button
                    $('#fileupload').parents('form').find('input[type=submit]').removeAttr('disabled');
                }
            },
            fail: function (e, data) {
                // This function gets called separately for each upload that fails

                // Re-enable the form after all files have uploaded.
                if (--total_files_uploaded == 0) {
                    // Re-enable the form submit button
                    $('#fileupload').parents('form').find('input[type=submit]').removeAttr('disabled');
                }

                // Remove the list item
                $(data.context).remove();

                // Show an error message
                var box = $('.fail.attachment').length ? $('.fail.attachment') : $('.fail');
                $('html, body').animate({
                    scrollTop: box.text('Failed to upload attachment "' + data.files[0].name + '", ' +
                        'reason: "' + data.errorThrown + '"').show().delay(5000).fadeOut().offset().top
                }, 500);
            }
        });

    });

    /**
     * Handle deleting an existing attachment that belongs to a ticket message.
     */
    $(document).on('click', '.message .deleteAttachment', function(e) {

        // Fire AJAX
        deleteAttachment(
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
            }
        );
    });


    /**
     * Handle removing attachments from a new ticket reply (they aren't actually associated with
     * anything yet).
     * NOTE: Made to a function below so it can be unbinded.
     */
    $(document).on('click', '#attached-files .deleteAttachment', handleDelete);

});

/**
 * Handle removing attachments from a new ticket reply (they aren't actually associated with
 * anything yet).
 *
 * @param item 
 */
function handleDelete() {
    // Remove input from the hash
    deleteAttachment(
        this,
        $(this).data('url'),
        $(this).data('hash'),
        $(this).parents('li'),
        function(context) {
            $('div.attachment-details').find('input[name="attachment['+ $(context).data().hash +']"]').remove();
        }
    );
}

/**
 * Delete an attachment
 *
 * @param context
 * @param url
 * @param hash
 * @param $listItem
 * @param successCallback
 */
function deleteAttachment(context, url, hash, $listItem, successCallback)
{
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
}