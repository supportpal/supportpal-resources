(function($)
{
    'use strict';

    /**
     * Delay execution of callback.
     */
    var delay = (function() {
        var timer = 0;
        return function(callback, ms){
            clearTimeout (timer);
            timer = setTimeout(callback, ms);
        };
    })();

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
            var textarea = this.$textarea;

            // Wait 1 second for the user to stop typing before checking if the textarea contents is valid. Otherwise
            // if jquery.validate is using remote (AJAX) rules then this can fire an AJAX for every single key press.
            delay(function () {
                textarea.valid();
            }, 1000);
        }
    }

    $.Redactor.default_opts = {
        pastePlainText: false,
        linebreaks: true,
        linkSize: 255,
        linkTarget: '_blank',
        linkifyCallback: function (elements) {
            $.each(elements,function(i, s) {
                if (s.tagName.toLowerCase() !== 'a' || s.target !== '') {
                    return;
                }

                s.target = $.Redactor.default_opts.linkTarget;
            });

            setTimeout($.proxy(function() {
                this.code.sync();
            }, this), 100);
        },
        modalOpenedCallback:function(name, modal) {
            if (name === 'link' && ! this.observe.isCurrent('a') && $.Redactor.default_opts.linkTarget === '_blank') {
                modal.find('#redactor-link-blank').prop('checked', 'checked');
            }
        },
        imageUpload: laroute.route('core.embed.image'),
        uploadImageFields: {
            "_token": $('meta[name=csrf_token]').prop('content')
        },
        imageUploadErrorCallback: embed_image_callback,
        keyupCallback: isValidCallback,
        plugins: ['imagemanager', 'table', 'video', 'fontcolor', 'fontfamily', 'fontsize']
    };
})(jQuery);