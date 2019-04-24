$(function () {

    // Reference to the current open modal.
    // We use this to close any modals that are already open (only one modal open at a time).
    var $currentModal;

    // Open Modal when clicking input box.
    $(document).on('click', '.translatable input.default, .translatable i.fa-globe', function (e) {
        open($(this).siblings('.translatable-modal'));

        // Prevent propagation - this prevents clashes with global click event to close the modal.
        e.stopPropagation();
    });

    // Close Modal.
    $(document).on('click', '.translatable-modal .close', function (e) {
        close($(this).parents('.translatable-modal'));
    });

    // Close Modal when tabbing on last item in it (and moving out of modal).
    $(document).on('keydown', '.translatable-modal', function(e) {
        // jQuery normalises the .which property so be used to reliably fetch the pressed key code across browsers.
        // https://api.jquery.com/keydown/
        if (e.which === 9) {
            // Get srcElement if target is false (IE, Safari2).
            var target = e.target || e.srcElement;
            if (!target) {
                return;
            }

            // Is it the selectize or last translation option if selectize is not there
            if ($(target).parent('.selectize-input').length
                || ($(this).find('.options').length && $(target).parents('.translation').is(':last-child'))
            ) {
                // If so, we've tabbed outside, close it.
                close($(this));
            }
        }
    });

    // Delete a translation.
    $(document).on('click', '.remove-translation', function (e) {
        var $modal = $(this).parents('.translatable-modal'),
            $translation = $(this).parents('div.translation'),
            locale = $translation.data('locale');

        // Hide translation.
        if ($translation.parent().hasClass('existing-translations')) {
            // Delete existing translation.
            var $clonedTranslation = $translation.clone();
            $translation.remove();

            // Move to missing, disable inputs and hide it.
            $modal.find('.missing-translations').append($clonedTranslation);
            $clonedTranslation.find(':input').val('').prop('disabled', 'disabled');
            $clonedTranslation.hide();
        } else {
            // Disable inputs and hide it.
            $translation.find(':input').prop('disabled', 'disabled');
            $translation.hide();
        }

        // If there's no translation's left, show "No existing translations".
        if ($modal.find('.existing-translations .translation').length === 0 &&
            $modal.find('.missing-translations .translation:visible').length === 0
        ) {
            $modal.find('.no-translations').show();
        }

        // Build option and add it to the dropdown.
        var selectize = $modal.find('select[name="translation"]')[0].selectize;
        selectize.addOption({
            value: $translation.data('locale'),
            text: $translation.data('display-name')
        });

        selectize.refreshOptions(false);

        // Ensure selectize is showing.
        $modal.find('.options').show();
    });

    // If the user clicks outside of the modal, close it.
    $(window).on('click', function() {
        var $visibleModal = $('.translatable-modal:visible');

        // Hide modal if visible.
        if ($visibleModal.length !== 0) {
            close($visibleModal);
        }
    });

    // Do not move - it is important that this is at the bottom of the propagation chain.
    $(document).on('click', '.translatable-modal', function (e) {
        e.stopPropagation();
    });

    /**
     * Open given modal.
     *
     * @param {jQuery} $modal
     */
    function open($modal)
    {
        // If there's another modal open, close it.
        if ($($currentModal).length === 1 && $currentModal.get(0) !== $modal.get(0)) {
            $currentModal.hide();
        }

        // Initialise selectize.
        registerSelectize( $modal.find('select[name="translation"]') );

        // Show modal.
        $modal.show();
        $currentModal = $modal;
    }

    /**
     * Close the given modal.
     *
     * @param {jQuery} $modal
     */
    function close($modal)
    {
        $modal.hide();
        $currentModal = null;
    }

    /**
     * Register selectize.
     *
     * @param $selector
     * @returns {*}
     */
    function registerSelectize($selector)
    {
        return $selector.selectize({
            // Invoked when an item is selected.
            //      Insert a new translation.
            onItemAdd: function (value, $option) {
                var $modal = this.$dropdown.parents('.translatable-modal');

                // Find template in missing list.
                var $translation = $modal.find('.missing-translations .translation[data-locale="' + value + '"]');
                $translation.find(':input').removeAttr('disabled');
                $translation.show();

                // Hide "No Existing Translations" if it's currently visible.
                if ($modal.find('.no-translations').is(':visible')) {
                    $modal.find('.no-translations').hide();
                    $modal.find('div.translations').show();
                }

                // Remove option from the menu.
                this.clear(true); // Clear selected option, otherwise selectize gets confused when we delete it..
                this.removeOption(value);

                // If no more options, hide the selectize box.
                if ($.isEmptyObject(this.options)) {
                    $modal.find('.options').hide();
                }

                // Focus the input box.
                $translation.find('input:first').trigger('focus');
            }
        });
    }

});
