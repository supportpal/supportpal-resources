/**
 * Functions to handle a specific article.
 *
 * @param parameters
 * @constructor
 */
function Article(parameters)
{
    "use strict";

    /**
     * Array of AJAX instances, for each type dropdown.
     *
     * @type {Array}
     */
    var xhr = [];

    /**
     * Initialise the type and category drop-downs for a given ID.
     *
     * @param id
     */
    this.initDropdowns = function (id)
    {
        var self = this;

        // Initialise the visible type drop-down.
        $('select[name="category['+id+'][type]"]').selectize({
            onChange: function(value) {
                // Hide the URL/views for this type
                this.$input.parents('.form-container').find('.type-url, .type-views').remove();

                // Only carry on if we have a type
                if (!value.length) return;

                // Get the category selectize instance.
                var select_categories = this.$input.parents(self.getClassName()).find('select[name$="[categories][]"]');
                if (select_categories.length == 0 || typeof select_categories[0].selectize === 'undefined') {
                    console.log('Failed to find associated category drop-down.');

                    return;
                }

                // Load the categories for the selected self-service type.
                select_categories = select_categories[0].selectize;

                select_categories.disable();
                select_categories.clearOptions();
                select_categories.load(function(callback) {
                    xhr[id] && xhr[id].abort();
                    xhr[id] = $.ajax({
                        url: laroute.route('selfservice.operator.type.categories', { 'type': value }),
                        success: function(res) {
                            select_categories.enable();
                            callback(res.data);
                        },
                        error: function() {
                            callback();
                        }
                    })
                });
            }
        });

        // Initialise and disable the category drop-down (we will enable it once the user selects a type).
        var $select_category = $('select[name="category['+id+'][categories][]"]').selectize({
            plugins: ['remove_button'],
            valueField: 'id',
            labelField: 'name',
            searchField: 'name',
            create: false,
            maxItems: null,
            placeholder: Lang.get("selfservice.associate_category"),
            render: {
                item: function(item, escape) {
                    return '<div class="item">' + escape(item.name) +
                        '<span class="description">' + escape(item.hierarchy) + '</span>' +
                        '</div>';
                },
                option: function(item, escape) {
                    return '<div>' + escape(item.name) +
                        '<span class="description">' + escape(item.hierarchy) + '</span>' +
                        '</div>';
                }
            }
        });
        $select_category[0].selectize.disable();
    };

    /**
     * Initialise a new type / category drop-down.
     *
     * @returns void
     */
    this.addNewCategory = function ()
    {
        // Clone the DOM.
        var index = addNewItem(this.getClassName());

        // Initialise the type and category drop-downs with selectize.
        this.initDropdowns(index);
    };

    /**
     * Name of the class.
     *
     * @returns {string}
     */
    this.getClassName = function ()
    {
        return parameters.className;
    }
}

$(document).ready(function() {

    /**
     * Initialise a new article.
     *
     * @type {Article}
     */
    var article = new Article({ 'className': '.category' });

    // Focus the article title.
    $('input[name="title"]').focus();

    /*
     * Remove the dummy element when submitting the form...
     */
    $('form#articleForm').submit(function() {
        $('select[name^="category[]["]').remove();

        // Return true to send the form.
        return true;
    });

    /*
     * Add a new type selection
     */
    $('#add-type').on('click', function() {
        article.addNewCategory();
    });

    /*
     * Remove an type selection
     */
    $('#categories').on('click', '.remove-button', function() {
        $(this).parents(article.getClassName()).remove();

        // If it was the last one, add an empty form back in
        if ($(article.getClassName()).length == 1) {
            article.addNewCategory();
        }
    });

    // Initialise the visible type and category drop-down's.
    $('select[name^="category["]').each(function () {
        var results = $(this).prop('name').match(/^\w+\[(\d+)]\[\w+]\[]$/);

        if (results !== null && results.length == 2) {
            article.initDropdowns(results[1]);

            // Enable the category dropdowns... initDropdowns sets them to be disabled.
            if ($('select[name="category['+results[1]+'][type]"]')[0].selectize.getValue() !== '') {
                this.selectize.enable();
            }
        }
    });

    // Initialise redactor.
    $('textarea[name=text]').redactor($.extend($.Redactor.default_opts, {
        plugins: ['syntax', 'imagemanager', 'table', 'video', 'fontcolor', 'fontfamily', 'fontsize']
    }));

    /*
     * Initialise article tags.
     */
    $('select[name="tag[]"]').selectize({
        plugins: ['remove_button'],
        valueField: 'id',
        labelField: 'name',
        searchField: 'name',
        create: true,
        maxItems: null,
        placeholder: Lang.get("selfservice.associate_tag")
    });

    /*
     * Only show the toggle_protected row if the article is published
     */
    $('#toggle_public').on('change', function() {
        var $container = $('#toggle_protected_container');
        this.checked ? $container.show() : $container.hide();
    });

});