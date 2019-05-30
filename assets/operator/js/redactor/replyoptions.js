$(function() {
    // Check if send email checkbox should be checked on event based on relevant department email template
    function handleEmailCheckbox(template, name) {
        if (template != -1) {
            $checkboxes[name].checkbox.prop('disabled', false).prop('checked', $checkboxes[name].state);
            $checkboxes[name].checkbox.parent().attr('title', '');
        } else {
            $checkboxes[name].checkbox.prop('checked', false).prop('disabled', true);
            $checkboxes[name].checkbox.parent().attr('title', Lang.get('ticket.department_template_disabled'));
        }
    }

    var $checkboxes = {
        'user': {'checkbox': $('.message-form .send-user-email input[type="checkbox"]') },
        'operator_reply': {'checkbox': $('.message-form .send-operators-email input[type="checkbox"]')},
        'operator_note': {'checkbox': $('.notes-form .send-operators-email input[type="checkbox"]') }
    };

    $.each($checkboxes, function (index, value) {
        // Save the state of the checkbox initially and on change
        value.state = value.checkbox.is(':checked');
        value.checkbox.on('change', function() {
            value.state = $(this).is(':checked');
        });

        // If the checkbox is disabled, uncheck it
        if (value.checkbox.prop('disabled')) {
            value.checkbox.prop('checked', false);
        }
    });

    // Check if 'send email to user' should show based on ticket status set, message form only
    $(document).on('change', '.message-form select[name="to_status"]', function () {
        if ($(this).val() == closedStatusId && departmentTemplates.user_ticket_reply == -1) {
            // Only need to check this branch if the reply template is disabled (fallback for operator closed)
            handleEmailCheckbox(departmentTemplates.user_ticket_operatorclose, 'user');
        } else {
            handleEmailCheckbox(departmentTemplates.user_ticket_reply, 'user');
        }
    });

    // Mock a change on the status to have it run the above code
    $('.message-form select[name="to_status"]').trigger('change');

    // Check if 'send email to operator(s)' should show based on ticket message type
    $('.reply-type .option').on('click', function() {
        if ($(this).data('type') == 0) {
            handleEmailCheckbox(departmentTemplates.operator_operator_ticket_reply, 'operator_reply');
        } else {
            handleEmailCheckbox(departmentTemplates.operator_ticket_note, 'operator_note');
        }
    });

    // Handle expanding each option group
    $(document).on('click', '.option_header', function() {
        $(this).next(".option_content").slideToggle(500);
        $(this).find(".arrow .fa").toggleClass("fa-chevron-down fa-chevron-up");
    });

    // Add a new canned response
    $('input[name=add_canned]').on('change', function() {
        var $table = $(this).parents('.option').find('.cannedTr');

        this.checked ? $table.show() : $table.hide();
    });

    /*
     * Search for a canned response
     */
    $(document).on('donetyping', 'input[name=cannedResponseSearch]', function() {
        var $this = $(this),
            $list = $this.next('#cannedResponseResults');

        // Add a search icon
        $this.addClass('ui-autocomplete-loading');

        $(document).find('#cannedResponseTags a').addClass('disabled');

        // Fire the AJAX
        $.get(laroute.route('ticket.operator.cannedresponse.search',
            {
                term: $this.val(),
                tags: Object.keys(selectedTags).join(','),
                order: $('select[name=cannedResponseOrder]').val(),
                locale: $('select[name=cannedResponseLang]').val(),
                start: 0,
                ticket_id: typeof ticketId !== 'undefined' ? ticketId : null,
                user_id: typeof userId !== 'undefined' ? userId : null,
                brand_id: typeof brandId !== 'undefined' ? brandId : null
            }))
            .done(function (data) {
                // In case it's searched two requests at once (rare)
                $list.empty();

                // Add responses to list
                $list = addResponsesToList(data, $list);

                // Show the results
                $list.show();
            })
            .always(function () {
                $this.removeClass('ui-autocomplete-loading');
                $(document).find('#cannedResponseTags a').removeClass('disabled');
            });
    });

    /*
     * Load more canned responses
     */
    $(document).on('click', '#cannedResponseResults button.load-more', function() {
        var $list = $(this).parents('ul'),
            $this = $(this).parent();

        // Replace button with spinner icon
        $(this).replaceWith('<i class="fa fa-spinner fa-pulse fa-fw description"></i>');

        // Fire the AJAX
        $.get(laroute.route('ticket.operator.cannedresponse.search',
            {
                term: $('input[name=cannedResponseSearch]').val(),
                tags: Object.keys(selectedTags).join(','),
                order: $('select[name=cannedResponseOrder]').val(),
                locale: $('select[name=cannedResponseLang]').val(),
                start: $list.children('li.response-item').length,
                ticket_id: typeof ticketId !== 'undefined' ? ticketId : null,
                user_id: typeof userId !== 'undefined' ? userId : null,
                brand_id: typeof brandId !== 'undefined' ? brandId : null
            }))
            .done(function (data) {
                // Add responses to list
                addResponsesToList(data, $list);
            })
            .always(function () {
                // Remove row with spinning icon
                $this.remove();
            });
    });

    // Change order of responses
    $(document).on('change', 'select[name=cannedResponseOrder]', function() {
        // Create/update cookie for a year
        var d = new Date();
        d.setTime(d.getTime() + (365 * 24 * 60 * 60 * 1000));
        document.cookie = "cannedResponseOrder=" + $(this).val() + "; expires="+ d.toUTCString();

        $('input[name=cannedResponseSearch]').trigger('donetyping');
    });

    // Change language of responses
    $(document).on('change', 'select[name=cannedResponseLang]', function() {
        $('input[name=cannedResponseSearch]').trigger('donetyping');
    });

    // Clear all selected tags
    var selectedTags = {};
    $(document).on('click', '#redactor-modal-cannedResponses .clear-selected', function() {
        $('li.tag-item a.active').removeClass('active');
        selectedTags = {};
        $('.clear-selected').hide();
        $('input[name=cannedResponseSearch]').trigger('donetyping');
    });

    // Select/deselect tag
    $(document).on('click', 'li.tag-item a', function() {
        if ($(this).hasClass('disabled')) {
            return false;
        }

        var tagId = $(this).data('id');

        // Select / deselect the tag.
        selectedTags.hasOwnProperty(tagId) ? delete selectedTags[tagId] : selectedTags[tagId] = 1;

        $(this).toggleClass('active');
        $('.clear-selected').toggle(Object.keys(selectedTags).length !== 0);
        $('input[name=cannedResponseSearch]').trigger('donetyping');
    });

    $.Redactor.prototype.cannedResponses = function()
    {
        return {
            getTemplate: function()
            {
                // Try to get order that's saved in JS cookie
                var order = 0;
                if (getCookie('cannedResponseOrder') != "") {
                    order = getCookie('cannedResponseOrder');
                }

                // Create a list of language options for dropdown
                var languageOptions = '';
                var languageCount = 0;
                for (var code in allLanguages) {
                    languageOptions += '<option value="' + code + '" '
                        + (userLanguage == code ? 'selected="selected"' : '') + '>' + allLanguages[code] + '</option>';
                    languageCount++;
                }

                return String()
                    + '<section id="redactor-modal-cannedResponses">'
                        + '<div class="hide720 tags-column right">'
                            + '<h3>' + Lang.get('general.sort_by') + '</h3>'
                            + '<select name="cannedResponseOrder">'
                                + '<option value="0" ' + (order == 0 ? 'selected="selected"' : '') + '>' + Lang.get('general.frequently_used') + '</option>'
                                + '<option value="1" ' + (order == 1 ? 'selected="selected"' : '') + '>' + Lang.get('general.recently_used') + '</option>'
                                + '<option value="2" ' + (order == 2 ? 'selected="selected"' : '') + '>' + Lang.get('general.recently_created') + '</option>'
                            + '</select>'
                            + (languageCount > 1 ? '<h3>' + Lang.choice('general.language', 1) + '</h3>'
                                + '<select name="cannedResponseLang">' + languageOptions + '</select>' : '')
                            + '<span class="clear-selected description right hide">' + Lang.get('general.clear_selected') + '</span>'
                            + '<h3>' + Lang.choice('ticket.tag', 2) + '</h3>'
                            + '<ul id="cannedResponseTags"' + (languageCount > 1 ? ' class="with-language"' : '') + '>'
                                + '<li class="description"><i class="fa fa-spinner fa-pulse fa-fw"></i> ' + Lang.get('ticket.loading_tags') + '...</li>'
                            + '</ul>'
                        + '</div>'
                        + '<div class="search-column">'
                            + '<input type="text" name="cannedResponseSearch" placeholder="' + Lang.get('ticket.search_canned') + '" />'
                            + '<ul id="cannedResponseResults" class="redactor-search hide"></ul>'
                        + '</div>'
                        + '<div class="clear"></div>'
                        + (cannedResponsePermission ? '<div class="manage-link"><a class="description" target="_blank" href="'
                            + laroute.route('ticket.operator.cannedresponse.index') + '">' + Lang.get('general.manage') + ' '
                            + Lang.choice('ticket.cannedresponse', 2) + '</a></div>' : '')
                    + '</section>';
            },
            init: function ()
            {
                var button = this.button.add('cannedResponses', Lang.choice('ticket.cannedresponse', 2));
                this.button.addCallback(button, this.cannedResponses.show);

                // make your added button as Font Awesome's icon
                this.button.setAwesome('cannedResponses', 'fa-comments-o');
            },
            show: function()
            {
                this.modal.addTemplate('cannedResponses', this.cannedResponses.getTemplate());

                this.modal.load('cannedResponses', Lang.choice('ticket.cannedresponse', 2), $(document).width() / 1.2);

                $(document).off('click.cannedresponse')
                        .on('click.cannedresponse', '#cannedResponseResults li a', this.cannedResponses.insert);

                this.selection.save();
                this.modal.show();

                this.$modal.addClass('custom-redactor-plugin');

                $('input[name=cannedResponseSearch]').donetyping().trigger('donetyping').trigger('focus');
            },
            insert: function(e)
            {
                // Get the element that triggered this on click event handler
                var $modal = this,
                    $this = (e.target) ? $(e.target) : $(e.srcElement),
                    id;

                // Get the ID, sometimes it may be a div inside the a tag
                if ($this.is('a')) {
                    id = $this.data('id');
                } else {
                    id = $this.parents('a').data('id');
                }

                // Fetch canned response text and insert
                $.get(
                    laroute.route('ticket.operator.cannedresponse.show', { id: id }),
                    {
                        ticket_id: typeof ticketId !== 'undefined' ? ticketId : null,
                        user_id: typeof userId !== 'undefined' ? userId : null,
                        brand_id: typeof brandId !== 'undefined' ? brandId : null,
                        locale: $('select[name=cannedResponseLang]').val()
                    },
                function(response) {
                    // Restore the caret/cursor position
                    $modal.modal.close();
                    $modal.selection.restore();

                    if (response.status == 'success') {
                        // Set text to be inserted
                        $modal.insert.html(response.data, false);
                    }

                    $modal.code.sync();
                }, "json");
            }
        };
    };

    /*
     * Search for a self-service article
     */
    // Fire an AJAX request once they've entered the search term
    $(document).on("donetyping", 'input[name=selfServiceSearch]', function() {
        var $this = $(this),
            $list = $this.next('#selfServiceResults');

        // Clear the results
        $list.empty();

        // Only if there is at least one character
        if ($this.val().length) {
            // Add a search icon
            $this.addClass('ui-autocomplete-loading');

            // Fire the AJAX
            $.get(laroute.route('selfservice.operator.article.search', {
                    term: $this.val(),
                    brandId: brandId,
                    userId: userId,
                    locale: $('.selfServiceLang select').val()
                }))
                .done(function (data) {
                    // In case it's searched two requests at once (rare)
                    $list.empty();

                    if (data.data.length == 0) {
                        // No results were found
                        $list.append('<li class="no-results">' + Lang.get('messages.no_results') + '</li>');
                    } else {
                        // Add each result to the list
                        $.each(data.data, function (key, item) {
                            $list.append('<li><a data-url="' + item.frontend_url + '"><span class="title">'
                                + item.title + '</span><br /><div class="description">' + item.excerpt + '</div></a></li>');
                        });
                    }

                    // Show the results
                    $list.show();
                })
                .always(function () {
                    $this.removeClass('ui-autocomplete-loading');
                });
        }
    });

    // Change language of self-service links
    $(document).on('change', '.selfServiceLang select', function() {
        $('input[name=selfServiceSearch]').trigger('donetyping');
    });

    $.Redactor.prototype.ssLink = function()
    {
        return {
            getTemplate: function()
            {
                // Create a list of language options for dropdown
                var languageOptions = '';
                var languageCount = 0;
                for (var code in allLanguages) {
                    languageOptions += '<option value="' + code + '" '
                        + (userLanguage == code ? 'selected="selected"' : '') + '>' + allLanguages[code] + '</option>';
                    languageCount++;
                }

                return String()
                    + (languageCount > 1 ? '<span class="selfServiceLang">' + Lang.choice('general.language', 1) + ': '
                        + '<select>' + languageOptions + '</select></span>' : '')
                + '<section id="redactor-modal-ssLink">'
                + '<input type="text" name="selfServiceSearch" placeholder="' + Lang.get('ticket.search_selfservice') + '" />'
                + '<ul id="selfServiceResults" class="redactor-search hide"></ul>'
                + '</section>';
            },
            init: function ()
            {
                var button = this.button.add('ssLink', Lang.get('ticket.add_selfservice_link'));
                this.button.addCallback(button, this.ssLink.show);

                // make your added button as Font Awesome's icon
                this.button.setAwesome('ssLink', 'fa-external-link');
            },
            show: function()
            {
                this.modal.addTemplate('ssLink', this.ssLink.getTemplate());

                this.modal.load('ssLink', Lang.get('ticket.add_selfservice_link'), $(document).width() / 1.2);

                $(document).off('click.selfservice')
                        .on('click.selfservice', '#selfServiceResults li a', this.ssLink.insert);

                this.selection.save();
                this.modal.show();

                this.$modal.addClass('custom-redactor-plugin');

                $('input[name=selfServiceSearch]').donetyping().trigger('focus');
            },
            insert: function(e)
            {
                var $this = (e.target) ? $(e.target) : $(e.srcElement), url;

                // Get the URL, sometimes it may be a div inside the a tag
                if ($this.is('a')) {
                    url = $this.data('url');
                } else {
                    url = $this.parents('a').data('url');
                }

                // If we have a valid URL insert it into the DOM
                if (typeof url !== 'undefined') {
                    // Restore the caret/cursor position
                    this.modal.close();
                    this.selection.restore();

                    this.insert.html("<a href='"+url+"'>"+url+"</a>");

                    this.code.sync();
                }
            }
        };
    };

    function addResponsesToList(data, $list) {
        if (typeof data.data.results == "undefined" ||
            (data.data.results.length === 0 && $list.children('.response-item').length === 0)) {
            // No results were found
            $list.append('<li class="no-results description">' + Lang.get('messages.no_results') + '</li>');
        } else {
            $.each(data.data.results, function (key, item) {
                // Add tags if they exist
                var $tags = $('<span>');
                if (item.tags.length) {
                    $.each(item.tags, function (key, tag) {
                        $tags.append('<span class="tag">' + tag.name + '</span>');
                    });
                }

                // Add each result to the list
                $list.append('<li class="response-item"><a data-id="' + item.id + '">'
                    + '<span class="title">' + item.name + '</span>'
                    + '&nbsp;&nbsp;' + $tags.html()
                    + '<div class="description">' + $("<p>").html(item.text).text()
                    + '</div></a></li>');
            });
        }

        // Handle tags if they're included in results
        if (typeof data.data.tags != "undefined") {
            $('#cannedResponseTags').empty();
            if (data.data.tags.length === 0) {
                // No results were found
                $('#cannedResponseTags').append('<li class="no-results description">' + Lang.get('messages.no_results') + '</li>');
            } else {
                // Add each tag
                $.each(data.data.tags, function (key, item) {
                    $('#cannedResponseTags').append('<li class="tag-item"><a data-id="' + item.id + '">'
                        + item.name + '<span class="badge">' + item.count + '</span>'
                        + '</a></li>');
                });

                // Highlight selected tags if exists
                $.each(selectedTags, function (key, value) {
                    $('.tag-item a[data-id=' + key + ']').addClass('active');
                });
            }
        }

        // Show load more button if more items than what is showing
        if (data.count > $list.children('.response-item').length) {
            $list.append('<li style="padding: 10px; text-align: center;"><button class="load-more">'
                + Lang.get('general.load_more') + '</button></li>');
        }

        return $list;
    }

    function getCookie(cname) {
        var name = cname + "=";
        var ca = document.cookie.split(';');
        for(var i = 0; i <ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0)==' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                return c.substring(name.length,c.length);
            }
        }
        return "";
    }
});
