/*
 * DOMParser HTML extension
 * 2012-09-04
 *
 * By Eli Grey, http://eligrey.com
 * Public domain.
 * NO WARRANTY EXPRESSED OR IMPLIED. USE AT YOUR OWN RISK.
 */

/*! @source https://gist.github.com/1129031 */
/*global document, DOMParser*/

(function(DOMParser) {
    "use strict";

    var
        proto = DOMParser.prototype
        , nativeParse = proto.parseFromString
        ;

    // Firefox/Opera/IE throw errors on unsupported types
    try {
        // WebKit returns null on unsupported types
        if ((new DOMParser()).parseFromString("", "text/html")) {
            // text/html parsing is natively supported
            return;
        }
    } catch (ex) {}

    proto.parseFromString = function(markup, type) {
        if (/^\s*text\/html\s*(?:;|$)/i.test(type)) {
            var
                doc = document.implementation.createHTMLDocument("")
                ;
            if (markup.toLowerCase().indexOf('<!doctype') > -1) {
                doc.documentElement.innerHTML = markup;
            }
            else {
                doc.body.innerHTML = markup;
            }
            return doc;
        } else {
            return nativeParse.apply(this, arguments);
        }
    };
}(DOMParser));

(function($) {

    /**
     * Initialise a code mirror instance with HTMl+Twig syntax recognition.
     *
     * @return {CodeMirror}
     */
    $.fn.initCodeMirror = function () {
        // Define a new mode, that allows a mix of HTML and twig
        // See https://github.com/codemirror/CodeMirror/issues/3292
        CodeMirror.defineMode("htmltwig", function(config, parserConfig) {
            return CodeMirror.overlayMode(
                CodeMirror.getMode(config, parserConfig.backdrop || "text/html"),
                CodeMirror.getMode(config, "twig")
            );
        });

        return CodeMirror.fromTextArea(this[0], {
            lineNumbers: true,
            lineWrapping: true,
            autoRefresh: true,
            mode: "htmltwig"
        });
    };

    // We need to pull out here, if Redactor hasn't been included.
    if (typeof $.Redactor === 'undefined') {
        return;
    }

    /**
     * Register redactor plugin that adds a preview option and code mirror source editor.
     *
     * @returns {{init: init, showPreview: showPreview, showSource: showSource, showEditor: showEditor, syncEditor: syncEditor, insert: insert, instance: instance}}
     */
    $.Redactor.prototype.syntax = function () {

        /**
         * Current redactor instance.
         *
         * @type {$.Redactor}
         */
        var redactor = null;

        /**
         * List of node attributes that are permitted to contain twig template code.
         *
         * @type {{img: string[], a: string[]}}
         */
        var whitelisted = {
            'img': [ 'src' ],
            'a': [ 'href' ]
        };

        var $container = null,
            $toolbar = null,
            $preview = null,
            codeMirror = null;

        /**
         * Check whether we have all the required dependencies.
         *
         * @returns {boolean}
         */
        var hasDependencies = function () {
            return typeof CodeMirror !== 'undefined' && typeof swal !== 'undefined';
        };

        /**
         * HTML used to wrap plugin contents in the DOM.
         *
         * Use $.wrap() with this function.
         *
         * @return {string}
         */
        var createContainer = function () {
            return '<div class="merge-field_container"></div>';
        };

        /**
         * Create the textarea toolbar.
         *
         * @returns {string}
         */
        var createToolbar = function () {
            return '<div style="display: inline-block; margin-top: 10px;">' +
                        '<button class="switch-view visual-preview" type="button">' +
                            Lang.get('general.preview') +
                        '</button>' +
                        '<button class="switch-view code-editor hide" type="button">' +
                            Lang.get('general.editor') +
                        '</button>' +
                    '</div>';
        };

        /**
         * Create the preview HTML.
         *
         * @returns {string}
         */
        var createPreview = function () {
            return '<div class="merge-field_preview"></div>';
        };

        /**
         * Check whether the 'html' contains any twig code that exists within HTML nodes or its' attributes.
         *
         * @param html
         * @returns {boolean}
         */
        var containsTwig = function (html) {
            var parser = new DOMParser(),
                doc = parser.parseFromString(html, "text/html");

            var items = doc.getElementsByTagName("*");
            for (var i = items.length; i--;) {
                // Get the Element.
                var node = items[i];

                // Remove any whitelisted attributes.
                if (whitelisted.hasOwnProperty(node.tagName.toLowerCase())) {
                    var attributes = whitelisted[node.tagName.toLowerCase()];

                    for (var c = attributes.length; c--;) {
                        if (node.hasAttribute(attributes[c])) {
                            node.removeAttribute(attributes[c]);
                        }
                    }
                }

                // Get the node value (not including any children).
                var node_html = node.innerHTML
                    ? node.outerHTML.slice(0,node.outerHTML.indexOf(node.innerHTML))
                    : node.outerHTML;

                // Check if the node contains any twig.
                if (/<[^{>]*(\{\{(?:[^}]+|}(?!}))*}}|\{%(?:[^%]+|%(?!}))*%})[^>]*>/gi.test(node_html)) {
                    // Job done. Feet up, laughing.
                    return true;
                }
            }

            return false;
        };

        /**
         * Check whether the redactor instance contains {{ operator.signature }} and show a warning.
         *
         * @param html
         */
        var containsSignature = function (html) {

            // Check if the editor contains {{ operator.signature }}
            if (/\{\{\s*operator\.signature(\|raw)?\s*}}/.test(html)) {

                if (! $('.twig-sig-warning').length) {
                    redactor.$box.after($('<div class="box bottombox warning twig-sig-warning">'
                        + Lang.get('core.twig_operator_signature') + '</div>'))
                }
            } else {
                $container.find('.twig-sig-warning').remove();
            }
        };

        /**
         * Destroy the merge-field_container when redactor is destroyed.
         *
         * @returns {Function}
         */
        var destroyCallback = function () {

            return function () {

                // Destroy CodeMirror.
                codeMirror.toTextArea();

                // Move textarea outside merge-field_container
                var $textarea = redactor.$textarea.clone();
                $container.before($textarea);

                // Delete merge-field_container
                $container.remove();
            };
        };

        //
        // jQuery listeners etc.

        var registerjQuery = function () {

            $toolbar.on('click', 'button', function (e) {
                e.preventDefault();

                if ($(this).hasClass('visual-preview')) {
                    redactor.syntax.showPreview();
                } else {
                    if (redactor.$editor.is(':visible')) {
                        redactor.syntax.showEditor();
                    } else {
                        redactor.syntax.showSource();
                    }
                }

                // Switch buttons
                $container.find('.switch-view').toggle();
            });

        };

        //
        // PUBLIC API

        return {

            /**
             * Initialise the redactor plugin.
             *
             * @return {void}
             */
            init: function () {

                // Register redactor instance.
                redactor = this;

                // Set destroy callback.
                redactor.opts.destroyCallback = destroyCallback();

                // Enable CodeMirror integration.
                redactor.opts.codemirror = true;

                // Initialise editor.
                codeMirror = redactor.$element.initCodeMirror();

                // We only need Twig checking and preview button if we use merge fields.
                if ('mergeFields' in redactor.opts) {
                    // Add the toolbar after the redactor box.
                    $container = redactor.$box.siblings().addBack().wrapAll(createContainer()).parent();
                    $toolbar = $(createToolbar());
                    redactor.$box.siblings(':last').addBack().last().after($toolbar);

                    // Check if the editor contains {{ operator.signature }}.
                    containsSignature(codeMirror.getValue());

                    codeMirror.on('change', function (instance, changeObj) {
                        // Update redactor.
                        redactor.syntax.syncEditor();

                        // Check if the editor contains {{ operator.signature }}.
                        containsSignature(instance.getValue());

                        // Check any twig code exists within HTML nodes or its' attributes.
                        if (containsTwig(instance.getValue())) {
                            // Add a warning if there isn't one already
                            if (!$('.twig-html-warning').length) {
                                redactor.$box.after($('<div class="box bottombox warning twig-html-warning">'
                                    + Lang.get('core.twig_html_warning') + '</div>'))
                            }
                        } else {
                            // Remove warning if it exists
                            $container.find('.twig-html-warning').remove();
                        }
                    });

                    // Add the code preview container.
                    $preview = $(createPreview());
                    redactor.$box.after($preview.hide());
                } else {
                    // We need to set an empty jquery object for the below call to function.
                    $container = $toolbar = $preview = $([]);
                }

                // Register jQuery
                registerjQuery();

            },

            /**
             * Show the visual preview.
             *
             * @return {void}
             */
            showPreview : function () {

                var errorHandler = function (message) {
                    // Change the view back to how it was originally.
                    $toolbar.find('button:visible').prop('disabled', false).trigger('click');

                    swal(Lang.get('messages.error'), message || Lang.get('messages.general_error'), 'error');
                };

                // Determine the height of the redactor box.
                var height = redactor.$box.outerHeight(true);

                $toolbar.find('button.switch-view').prop('disabled', true);
                $preview.html('').css('height', height).addClass('loadinggif').show();

                // If the form has an input called brand_id, use that value else fall back to the
                // data-brand set on form-row. If nothing is set then it won't be included.
                var brandId = redactor.$box.parents('form').find(':input[name="brand_id"]').length
                    ? redactor.$box.parents('form').find(':input[name="brand_id"]').val()
                    : redactor.$box.parents('.form-row').data('brand');

                // Get ticket ID.
                var ticketId = redactor.$box.parents('form').find(':input[name="ticket_id"]').length
                    ? redactor.$box.parents('form').find(':input[name="ticket_id"]').val()
                    : null;

                // Attempt to get locale.
                var locale = redactor.$box.parents('.form-container').find(':input[name$="[language]"]').length
                    ? redactor.$box.parents('.form-container').find(':input[name$="[language]"]').val()
                    : Lang.locale();

                $.post(
                    laroute.route('core.operator.emailtemplate.preview'),
                    {
                        'template': codeMirror.getValue(),
                        'locale': locale,
                        'template_id': redactor.$box.parents('form').data('templateId'),
                        'brand_id': brandId,
                        'ticket_id': ticketId,
                        'is_email': (redactor.opts.syntaxEmailTemplate || false) ? 1 : 0
                    }
                )
                    .done(function (json) {
                        if (typeof json.data !== 'undefined') {
                            // Inject the HTML (this should be sanitized server-side).
                            $preview.html(json.data);
                        } else {
                            errorHandler();
                        }
                    })
                    .fail(function (jqXHR, textStatus, errorThrown) {
                        try {
                            var json = JSON.parse(jqXHR.responseText);

                            errorHandler(typeof json.message !== 'undefined' ? json.message : errorThrown);
                        } catch (e) {
                            errorHandler(errorThrown);
                        }
                    })
                    .always(function() {
                        $toolbar.find('button.switch-view').prop('disabled', false);
                        $preview.removeClass('loadinggif');
                    });

            },

            /**
             * Show the code editor.
             *
             * @return {void}
             */
            showSource : function () {
                // Force redactor to show the source editor.
                redactor.code.showCode();

                // Hide the preview container.
                $preview.hide();
            },

            /**
             * Show the WYSIWYG editor.
             *
             * @return {void}
             */
            showEditor : function () {
                // Force redactor to show the WYSIWYG editor.
                redactor.code.showVisual();

                // Hide the preview container.
                $preview.hide();
            },

            /**
             * Sync the code mirror editor and the textarea.
             *
             * @return {void}
             */
            syncEditor : function () {
                codeMirror.save();
            },

            /**
             * Insert text at the current cursor position in the editor.
             *
             * @param  text
             * @return {void}
             */
            insert : function (text) {
                var doc = codeMirror.getDoc(),
                    cursor = doc.getCursor(); // gets the line number in the cursor position

                doc.replaceRange(text, { line: cursor.line, ch: cursor.ch });
            },

            /**
             * Get the code mirror instance.
             *
             * @returns {CodeMirror}
             */
            instance : function () {
                return codeMirror;
            },

            /**
             * Determine whether code mirror is currently visible.
             *
             * @returns {*}
             */
            isActive: function () {
                return $container.find('.CodeMirror').is(':visible');
            }

        };
    };

})(jQuery);
