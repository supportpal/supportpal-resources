/**
 * SupportPal slug generator instance.
 *
 * @param parameters
 * @constructor
 */
var SupportPalSlugGenerator = function (parameters)
{
    "use strict";

    // Make sure the required parameters exist.
    if (! parameters.hasOwnProperty('route') || ! parameters.route.hasOwnProperty('url')) {
        throw Error('InvalidArgumentException. Missing argument: \'route.url\'.');
    }

    /**
     * The SupportPal controller to call to generate the slug.
     *
     * @type {route.url}
     */
    var route = parameters.route.url;

    /**
     * Custom parameters to send to the controller (can either be a callable or an object).
     *
     * @type {route.parameters}
     */
    var customParameters = parameters.route.parameters;

    /**
     * Set a new slug.
     *
     * @param $slug
     * @param value
     * @param preventDuplicate
     * @param alwaysCallback
     */
    var makeSlug = function ($slug, value, preventDuplicate, alwaysCallback)
    {
        var $slugText = $slug.find('.slug-text'),
            parameters = customParameters || {};
        if (typeof parameters === 'function') {
            parameters = parameters($slug);
        }

        // Get the slug for the given name.
        $.get(route, $.extend({}, {value: value, prevent_duplicate: preventDuplicate|0}, parameters))
            .done(function (json) {
                $slugText.text(json.data);
                $slug.find(':input').val(json.data);
                $slug.find('.slug-uri').contents().unwrap();

                var default_frontend_locale = $('meta[name="default_frontend_locale"]').prop('content'),
                    locale = $slug.parents('.form-container').find('input[name="locale"][type="hidden"]').val(),
                    $brandUri = $slug.find('.brand-uri'),
                    regex = new RegExp("\/" + default_frontend_locale + "$", "");

                $brandUri.text($brandUri.text().replace(regex, "/" + (typeof locale === 'undefined' ? default_frontend_locale : locale)));

                $slug.show();
            })
            .fail(function (jqXHR, textStatus, errorThrown) {
                console.log(jqXHR.responseText);
            })
            .always(function () {
                typeof alwaysCallback === 'function' && alwaysCallback();
            });
    };

    var selector = '.name-input input[type="text"]';
    $(document).on('donetyping', selector, function () {
        var $slug = $(this).parents('.form-container').find('.slug');

        // Only make a slug if one doesn't already exist on edit (or edited manually first on create), or we don't want
        // it (e.g. external link type).
        if ($slug.hasClass('not-edited') && ! $slug.hasClass('dont-show')) {
            makeSlug($slug, $(this).val(), true);
        }
    });

    // Register the donetyping events for existing and dynamically generated elements.
    $(selector).donetyping();
    $(document).on('multidimensionaldata:added', function (event, $element) {
        $element.find(selector).donetyping();
    });

    // Allow editing the slug.
    $('.section-items').on('click', '.edit-slug', function () {
        var self = this,
            value = $(this).parents('.input-container').find('.slug-text').html();

        swal({
            title: Lang.get('selfservice.change_slug'),
            html: "<p><input type='text' value='" + value + "' id='slug-modal-input' size='30' /></p>",
            showCancelButton: true,
            confirmButtonText: Lang.get('general.update'),
            closeOnConfirm: false
        }, function() {
            swal.disableButtons();

            var value = $('#slug-modal-input').val();
            if (value.length > 0) {
                makeSlug($(self).parents('.slug'), value, false, function () {
                    swal.closeModal();

                    // Mark the slug as edited
                    $(self).parents('.slug').removeClass('not-edited');
                });
            } else {
                swal.closeModal();
            }
        });
    });
};
