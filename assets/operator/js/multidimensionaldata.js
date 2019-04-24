// Allow defining your own attribute mapper.
var attributeMapper = function(elem, value, attribute) {
    var attr = elem.attr(attribute);
    if (/\[(Default|\d+)]\[]\[\w+]$/.test(attr))
        elem.attr(attribute, attr.replace(/\[]/, '[' + value + ']'));
};

$(document).ready(function() {
    /**
     * Add new item to DOM
     */
    var selector = '.add-item-selectize';
    $(selector).selectize({
        dropdownParent: 'body',
        placeholder: $(selector).attr('title'),
        onChange: function (value) {
            // Add the new DOM within the current tab.
            var $tab = this.$input.parents('.tabContent'),
                $container = $tab.find('.section-items');

            // Clone the DOM element.
            var newElem = $tab.find('.section-item:first').clone();

            // Show the remove button.
            newElem.find('button.remove-button').removeClass('hide');

            // Set the language code for all inputs in the new element.
            newElem.find('input[type="hidden"]:not(.mdd-ignore)').val(value);
            newElem.find('.item-type').text(this.options[value].text);
            newElem.find(':input, label').each(function(){
                var elem = $(this);
                if (elem.is(':not(.mdd-ignore)')) {
                    elem.prop('disabled', false);
                }
                [ 'name', 'for', 'id' ].map(attributeMapper.bind(null, elem, value));
            });

            // Initialise redactor on new textarea.
            if (newElem.find('textarea:not(.not-redactor)').length > 0) {
                newElem.find('textarea:not(.not-redactor)').redactor($.extend($.Redactor.default_opts, opts));
            }

            // Initialise file upload.
            if (typeof FileUpload !== 'undefined' && newElem.find('.fileupload').length > 0) {
                var settings = {
                        $element: newElem.find('.fileupload'),
                        $container: newElem
                    },
                    inputName = newElem.find('.attachment-details')
                        .find('input[type=hidden]')
                        .prop('name').replace('[]', '');

                // Fall back to default inputName, if we can't find an element...
                if (inputName.length !== 0) {
                    settings.inputName = inputName;
                }

                new FileUpload(settings);
            }

            // Append new element to the DOM and make it visible.
            $container.append(newElem);
            newElem.show();

            // Clear the selected value silently (don't fire onChange event).
            this.removeOption(value, true);
            this.refreshOptions(false);
            // Hack to get the placeholder to show... only god knows why it disappears.
            this.$control_input.css({"opacity": "1", "position": "relative", "left": "0px", "z-index": "-1"});

            // Focus and scroll to new element.
            $container.find('.section-item:last :input:first').trigger('focus');
            $('html, body').animate({
                scrollTop: $container.find('.section-item:last label:first').offset().top - 55
            }, 500);

            // Hide the drop-down if there are no options.
            if (Object.keys(this.options).length === 0) {
                this.$input.parents('.form-container').hide();
            }

            // Trigger DOM event.
            $container.trigger('multidimensionaldata:added', [ newElem ]);
        }
    });

    /**
     * Remove item from the DOM.
     */
    $('#sectionWrapper').on('click', '.remove-button', function() {
        var $selector = $(this).parents('.tabContent').find(selector),
            $sectionItem = $(this).parents('.section-item');

        // Add the language back to the drop-down.
        var selectize = $selector[0].selectize;
        selectize.addOption({
            value: $sectionItem.find('input[type="hidden"]').val(),
            text: $sectionItem.find('.item-type').text()
        });
        selectize.refreshOptions(false);

        // Show the language drop-down if there are now options.
        if (Object.keys(selectize.options).length !== 0) {
            $selector.parents('.form-container').show();
        }

        // Remove the template.
        $sectionItem.remove();
    });

});
