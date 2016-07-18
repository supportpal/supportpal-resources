(function($)
{
    'use strict';

    /**
     * The callback function for imageUploadErrorCallback in the imagemanager.js
     * redactor plugin.
     *
     * @param json
     */
    function embed_image_callback(json)
    {
        var message = json.error;
        if ((message.length === 0 || !message.trim())) {
            message = Lang.get('messages.error_embed_image');
        } else {
            message = Lang.get('messages.please_correct') + '<br /><br />' + message;
        }

        // Make sure swal is loaded (just in case?)
        if (typeof swal === 'function') {
            swal({
                title: Lang.get('messages.error'),
                html: message,
                type: 'error'
            });
        } else {
            alert(message.replace(/<br \/>/g, "\n"));
        }
    }

    /**
     * Callback function to handle changes to redactor.
     *
     * @param e Event object
     */
    function isValidCallback(e)
    {
        // 8  = back space
        // 46 = forward backspace or delete
        if (typeof $.fn.valid === 'function' && e.hasOwnProperty('keyCode') && e.keyCode != 8 && e.keyCode != 46) {
            this.$textarea.valid();
        }
    }

    $.Redactor.default_opts = {
        focus: true,
        linebreaks: true,
        imageUpload: laroute.route('core.embed.image'),
        uploadImageFields: {
            "_token": $('meta[name=csrf_token]').prop('content')
        },
        imageUploadErrorCallback: embed_image_callback,
        keyupCallback: isValidCallback,
        plugins: ['imagemanager', 'table', 'video', 'fontcolor', 'fontfamily', 'fontsize']
    };
})(jQuery);