<script>
    jQuery(document).ready(function(){

        /**
         * Ignore hidden fields, except for those listed below.
         */
        $.validator.setDefaults({
            ignore: ':hidden:not(.redactor):not(input[type=hidden])'
        });

        /**
         * Check whether a child element is overflowing its parent container.
         * Example: $('.parent_container').isChildOverflowing('#child-element')
         *
         * @param child
         * @return boolean
         */
        jQuery.fn.isChildOverflowing = function (child) {
            var p = jQuery(this).get(0);
            var el = jQuery(child).get(0);

            // Check we actually have valid DOM elements otherwise .offsetTop etc will throw an error
            if (typeof p !== 'undefined' && typeof el !== 'undefined') {
                return (el.offsetTop < p.offsetTop || el.offsetLeft < p.offsetLeft) ||
                    (el.offsetTop + el.offsetHeight > p.offsetTop + p.offsetHeight
                        || el.offsetLeft + el.offsetWidth > p.offsetLeft + p.offsetWidth);
            }

            return false;
        };

        var validator = $("<?php echo $validator['selector']; ?>").validate({
            errorElement: 'span',
            errorClass: 'field-error',

            errorPlacement: function(error, element) {
                var position = element;

                // If it's redactor, codemirror, show/hide button, recaptcha, a checkbox or radio, add after parent
                if (element.parent('.redactor-box').length || element.parent('.merge-field_container').length
                    || element.parent('.hideShowPassword-wrapper').length || element.parent('.input-group').length
                    || element.parent().parent('.g-recaptcha').length || element.prop('type') === 'checkbox'
                    || element.prop('type') === 'radio'
                ) {
                    position = element.parent();
                }

                // If it's selectize, add after sibling.
                if (element.next().hasClass('selectize-control')) {
                    position = element.next();
                }

                // If it's got a translatable model, add afterwards.
                if (element.next().hasClass('fa-globe')) {
                    position = element.next().next();
                }

                // Show error
                var displayingError = error.insertAfter(position);

                // If the form field is too big or it's a selectize box, put the error below.
                if ($('.desk_content_padding').isChildOverflowing('span[id="' + displayingError.prop('id') + '"]')
                    || position.hasClass('selectize-control')
                ) {
                    displayingError.addClass('field-error-below');
                }
            },

            highlight: function(element, errorClass, validClass) {
                // If there's multiple inputs in the row, add the class to the input instead of the row
                // Excluding If it's redactor, codemirror, show/hide button, a checkbox or radio
                var $row = $(element).closest('.form-row'),
                    $elm = $row.find(':input').length > 1 &&
                        (! $(element).parent('.redactor-box').length && ! $(element).parent('.merge-field_container').length
                            && ! $(element).parent('.hideShowPassword-wrapper').length
                            && ! $(element).parent('.input-group').length && $(element).prop('type') !== 'checkbox'
                            && $(element).prop('type') !== 'radio'
                        ) ? $(element) : $row;

                // Add the Bootstrap error class to the control group
                $elm.addClass('has-error');
            },

            unhighlight: function(element, errorClass, validClass) {
                // If there's multiple inputs in the row, add the class to the input instead of the row
                // Excluding If it's redactor, codemirror, show/hide button, a checkbox or radio
                var $row = $(element).closest('.form-row'),
                    $elm = $row.find(':input').length > 1 &&
                        (! $(element).parent('.redactor-box').length && ! $(element).parent('.merge-field_container').length
                            && ! $(element).parent('.hideShowPassword-wrapper').length
                            && ! $(element).parent('.input-group').length && $(element).prop('type') !== 'checkbox'
                            && $(element).prop('type') !== 'radio'
                        ) ? $(element) : $row;

                // Remove the Bootstrap error class from the control group
                $elm.removeClass('has-error');

                // Hide error if it's "pending" (remote validation).
                var describer = $(element).attr( "aria-describedby" );
                if (describer) {
                    $row.find('#' + describer.replace(/\s+/g, ", #")).hide();
                }
            },

            success: function (label, element) {
                //
            },

            // Custom submit handler.
            submitHandler: function (form) {
                $(form).find('input[type="submit"], button[type="submit"]').prop('disabled', 'disabled');

                // Validate the form.
                if (validator.form()) {
                    // Handle remote validation rules.
                    if (validator.pendingRequest) {
                        validator.formSubmitted = true;
                        return false;
                    }

                    // Form is valid, trigger form submission event.
                    $(form).trigger('form:submit');

                    // If the form is marked as using AJAX, then return false to prevent the page refreshing.
                    if (typeof $(form).data('ajax') !== "undefined") {
                        return false;
                    }

                    // Submit the form (will cause the page to refresh etc).
                    form.submit();
                } else {
                    $(form).find('input[type="submit"], button[type="submit"]').prop('disabled', false);
                    validator.focusInvalid();
                    return false;
                }
            },

            focusInvalid: true,

            invalidHandler: function(event, validator) {
                // Enable submit button again (necessary for invalid remote validation).
                $(this).find(':submit').prop('disabled', false);

                if (!validator.numberOfInvalids())
                    return;

                // If the error is on another tab, switch to it.
                if ($(validator.errorList[0].element).parents('.tabContent').length) {
                    // Get tab ID
                    var id = $(validator.errorList[0].element).parents('.tabContent').attr('id');
                    // Get name from ID and click on the tab
                    if (typeof id !== 'undefined' && id.substring(0, 3) == 'tab') {
                        $('.tabs li#' + id.substring(3)).trigger('click');
                    }
                }

                // Move towards the first error.
                $('html, body').animate({
                    scrollTop: $(validator.errorList[0].element).offset().top - 46
                }, <?php echo Config::get('jsvalidation.duration_animate') ?>);

            },

            rules: <?php echo json_encode($validator['rules']); ?>
        });

        // Element we want to validate might not actually exist.
        if (typeof validator !== 'undefined') {
            // Enable custom submit handler.
            validator.cancelSubmit = true;
        }
    });
</script>
