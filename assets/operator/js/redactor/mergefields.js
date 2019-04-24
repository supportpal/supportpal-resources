(function($) {

    // We need to pull out here, if Redactor hasn't been included.
    if (typeof $.Redactor === 'undefined') {
        return;
    }


    $.Redactor.prototype.mergeFields = function () {

        /**
         * Current redactor instance.
         *
         * @type {$.Redactor}
         */
        var redactor = null;

        /**
         * Whether to show ticket merge fields.
         *
         * @type {boolean}
         */
        var show_tickets = false;

        /**
         * Whether to show organisation based merge fields.
         *
         * @type {boolean}
         */
        var show_organisations = false;

        /**
         * Whether to show canned response merge field.
         *
         * @type {boolean}
         */
        var show_canned_responses = false;

        /**
         * Ticket merge fields template.
         *
         * @returns {string}
         */
        var ticketTemplate = function () {

            return String()
                + '<div class="item item50">'
                + '<strong class="title">' + Lang.choice('ticket.ticket', 2) + '</strong>'
                + '<table>'
                    + '<tr>'
                        + '<td colspan="2"><strong>' + Lang.get('operator.strings') + '</strong></td>'
                    + '</tr>'
                    + '<tr>'
                        + '<td>' + Lang.choice('ticket.ticket', 1) + ' ' + Lang.get('general.id') + '</td>'
                        + '<td><button class="as-link">{{ ticket.id }}</button></td>'
                    + '</tr>'
                    + '<tr>'
                        + '<td>' + Lang.get('ticket.ticket_number') + '</td>'
                        + '<td><button class="as-link">{{ ticket.number }}</button></td>'
                    + '</tr>'
                    + '<tr>'
                        + '<td>' + Lang.get('ticket.ticket_token') + '</td>'
                        + '<td><button class="as-link">{{ ticket.token }}</button></td>'
                    + '</tr>'
                    + '<tr>'
                        + '<td>' + Lang.choice('ticket.ticket', 1) + ' ' + Lang.get('ticket.subject') + '</td>'
                        + '<td><button class="as-link">{{ ticket.subject }}</button></td>'
                    + '</tr>'
                    + '<tr>'
                        + '<td>' + Lang.choice('ticket.ticket', 1) + ' ' + Lang.choice('ticket.department', 1) + ' ' + Lang.get('general.id') + '</td>'
                        + '<td><button class="as-link">{{ ticket.department.id }}</button></td>'
                    + '</tr>'
                    + '<tr>'
                        + '<td>' + Lang.choice('ticket.ticket', 1) + ' ' + Lang.choice('ticket.department', 1) + ' ' + Lang.get('general.name') + '</td>'
                        + '<td><button class="as-link">{{ ticket.department.name }}</button></td>'
                    + '</tr>'
                    + '<tr>'
                        + '<td>' + Lang.choice('ticket.ticket', 1) + ' ' + Lang.choice('ticket.department', 1) + ' ' + Lang.get('general.frontend') + ' ' + Lang.get('general.name') + '</td>'
                        + '<td><button class="as-link">{{ ticket.department.frontend_name }}</button></td>'
                    + '</tr>'
                    + '<tr>'
                        + '<td>' + Lang.choice('ticket.ticket', 1) + ' ' + Lang.choice('general.status', 1) + ' ' + Lang.get('general.id') + '</td>'
                        + '<td><button class="as-link">{{ ticket.status.id }}</button></td>'
                    + '</tr>'
                    + '<tr>'
                        + '<td>' + Lang.choice('ticket.ticket', 1) + ' ' + Lang.choice('general.status', 1) + ' ' + Lang.get('general.name') + '</td>'
                        + '<td><button class="as-link">{{ ticket.status.name }}</button></td>'
                    + '</tr>'
                    + '<tr>'
                        + '<td>' + Lang.choice('ticket.ticket', 1) + ' ' + Lang.choice('ticket.priority', 1) + ' ' + Lang.get('general.id') + '</td>'
                        + '<td><button class="as-link">{{ ticket.priority.id }}</button></td>'
                    + '</tr>'
                    + '<tr>'
                        + '<td>' + Lang.choice('ticket.ticket', 1) + ' ' + Lang.choice('ticket.priority', 1) + ' ' + Lang.get('general.name') + '</td>'
                        + '<td><button class="as-link">{{ ticket.priority.name }}</button></td>'
                    + '</tr>'
                    + '<tr>'
                        + '<td>' + Lang.choice('ticket.ticket', 1) + ' ' + Lang.choice('ticket.sla_plan', 1) + ' (' + Lang.get('general.if_exists') + ')</td>'
                        + '<td><button class="as-link">{{ ticket.slaplan.name }}</button></td>'
                    + '</tr>'
                    + '<tr>'
                        + '<td>' + Lang.choice('ticket.ticket', 1) + ' ' + Lang.get('ticket.due_time') + '</td>'
                        + '<td><button class="as-link">{{ formatDate(ticket.due_time) }}</button></td>'
                    + '</tr>'
                    + '<tr>'
                        + '<td>' + Lang.choice('ticket.ticket', 1) + ' ' + Lang.get('ticket.created_time') + '</td>'
                        + '<td><button class="as-link">{{ formatDate(ticket.created_at) }}</button></td>'
                    + '</tr>'
                    + '<tr>'
                        + '<td>' + Lang.choice('ticket.ticket', 1) + ' ' + Lang.get('ticket.last_action') + '</td>'
                        + '<td><button class="as-link">{{ formatDate(ticket.updated_at) }}</button></td>'
                    + '</tr>'
                    + '<tr>'
                        + '<td>' + Lang.choice('ticket.ticket', 1) + ' ' + Lang.get('ticket.last_message_text') + '</td>'
                        + '<td><button class="as-link">{{ ticket.lastReply.purified_text|raw }}</button></td>'
                    + '</tr>'
                    + '<tr>'
                        + '<td>' + Lang.choice('ticket.ticket', 1) + ' ' + Lang.get('operator.frontend_url') + '</td>'
                        + '<td><button class="as-link">{{ ticket.frontend_url }}</button></td>'
                    + '</tr>'
                    + '<tr>'
                        + '<td>' + Lang.choice('ticket.ticket', 1) + ' ' + Lang.get('operator.operator_url') + '</td>'
                        + '<td><button class="as-link">{{ ticket.operator_url }}</button></td>'
                    + '</tr>'
                    + '<tr>'
                        + '<td colspan="2"><strong>' + Lang.get('operator.collections') + '</strong></td>'
                    + '</tr>'
                    + '<tr>'
                        + '<td>' + Lang.choice('ticket.ticket', 1) + ' ' + Lang.choice('ticket.tag', 2) + '</td>'
                        + '<td><button class="as-link">{{ ticket.tags }}</button></td>'
                    + '</tr>'
                    + '<tr>'
                        + '<td>' + Lang.choice('ticket.ticket', 1) + ' ' + Lang.get('ticket.assigned_operator') + '</td>'
                        + '<td><button class="as-link">{{ ticket.assigned }}</button></td>'
                    + '</tr>'
                    + '<tr>'
                        + '<td>' + Lang.choice('ticket.customfield', 2) + '</td>'
                        + '<td><button class="as-link">{{ ticket.customfields }}</button></td>'
                    + '</tr>'
                    + (! show_canned_responses ? '' :
                        '<tr>'
                            + '<td colspan="2"><br /></td>'
                        + '</tr>'
                        + '<tr>'
                            + '<td><strong class="title">' + Lang.choice('ticket.cannedresponse', 2) + '</strong></td>'
                            + '<td><button class="as-link">{{ canned_response.[hash]|raw }}</button></td>'
                        + '</tr>'
                        + '<tr>'
                            + '<td colspan="2"><span class="description">' + Lang.get('operator.merge_field_canned_desc') + '</span></td>'
                        + '</tr>')
                + '</table>'
                + '</div>';
        };

        /**
         * User and system merge fields template.
         *
         * @returns {string}
         */
        var userAndSystemTemplate = function () {

            return String()
                + '<div class="item item50">'
                + '<strong class="title">' + Lang.choice('user.user', 2) + '</strong>'
                + '<table>'
                    + '<tr>'
                        + '<td colspan="2"><strong>' + Lang.get('operator.strings') + '</strong></td>'
                    + '</tr>'
                    + '<tr>'
                        + '<td>' + Lang.choice('user.user', 1) + ' ' + Lang.get('general.id') + '</td>'
                        + '<td><button class="as-link">{{ user.id }}</button></td>'
                    + '</tr>'
                    + '<tr>'
                        + '<td>' + Lang.choice('user.user', 1) + ' ' + Lang.get('user.formatted_name') + '</td>'
                        + '<td><button class="as-link">{{ user.formatted_name }}</button></td>'
                    + '</tr>'
                    + '<tr>'
                        + '<td>' + Lang.choice('user.user', 1) + ' ' + Lang.get('user.firstname') + '</td>'
                        + '<td><button class="as-link">{{ user.firstname }}</button></td>'
                    + '</tr>'
                    + '<tr>'
                        + '<td>' + Lang.choice('user.user', 1) + ' ' + Lang.get('user.lastname') + '</td>'
                        + '<td><button class="as-link">{{ user.lastname }}</button></td>'
                    + '</tr>'
                    + '<tr>'
                        + '<td>' + Lang.choice('user.user', 1) + ' ' + Lang.get('general.email') + '</td>'
                        + '<td><button class="as-link">{{ user.email }}</button></td>'
                    + '</tr>'
                    + '<tr>'
                        + '<td style="text-transform: capitalize">' + Lang.get('conditions.user_email_confirmed') + '</td>'
                        + '<td><button class="as-link">{{ user.confirmed }}</button></td>'
                    + '</tr>'
                    + '<tr>'
                        + '<td style="text-transform: capitalize">' + Lang.get('conditions.user_account_active') + '</td>'
                        + '<td><button class="as-link">{{ user.active }}</button></td>'
                    + '</tr>'
                    + (! show_organisations ? '' :
                        '<tr>'
                            + '<td>' + Lang.choice('user.user', 1) + ' ' + Lang.choice('user.organisation', 1) + ' ' + Lang.get('general.name') + '</td>'
                            + '<td><button class="as-link">{{ user.organisation.name }}</button></td>'
                        + '</tr>')
                    + '<tr>'
                        + '<td>' + Lang.choice('user.user', 1) + ' ' + Lang.get('user.country') + ' ' + Lang.get('general.code') + '</td>'
                        + '<td><button class="as-link">{{ user.country }}</button></td>'
                    + '</tr>'
                    + '<tr>'
                        + '<td>' + Lang.choice('user.user', 1) + ' ' + Lang.choice('general.language', 1) + ' ' + Lang.get('general.code') + '</td>'
                        + '<td><button class="as-link">{{ user.language_code }}</button></td>'
                    + '</tr>'
                    + '<tr>'
                        + '<td>' + Lang.choice('user.user', 1) + ' ' + Lang.get('ticket.created_time') + '</td>'
                        + '<td><button class="as-link">{{ formatDate(user.created_at) }}</button></td>'
                    + '</tr>'
                    + '<tr>'
                        + '<td colspan="2"><strong>' + Lang.get('operator.collections') + '</strong></td>'
                    + '</tr>'
                    + '<tr>'
                        + '<td>' + Lang.choice('user.group', 2) + '</td>'
                        + '<td><button class="as-link">{{ user.groups }}</button></td>'
                    + '</tr>'
                    + '<tr>'
                        + '<td>' + Lang.choice('user.customfield', 2) + '</td>'
                        + '<td><button class="as-link">{{ user.customfields }}</button></td>'
                    + '</tr>'
                    + '<tr>'
                        + '<td colspan="2">'
                            + '<br />'
                            + '<strong class="title">' + Lang.choice('core.brand', 1) + '</strong>'
                       + '</td>'
                    + '</tr>'
                    + '<tr>'
                        + '<td colspan="2"><strong>' + Lang.get('operator.strings') + '</strong></td>'
                    + '</tr>'
                    + '<tr>'
                        + '<td>' + Lang.get('core.brand_name') + '</td>'
                        + '<td><button class="as-link">{{ brand.name }}</button></td>'
                    + '</tr>'
                    + '<tr>'
                        + '<td>' + Lang.get('general.default') + ' ' + Lang.get('general.email_address') + '</td>'
                        + '<td><button class="as-link">{{ brand.default_email }}</button></td>'
                    + '</tr>'
                    + '<tr>'
                        + '<td>' + Lang.get('operator.frontend_url') + '</td>'
                        + '<td><button class="as-link">{{ brand.frontend_url }}</button></td>'
                    + '</tr>'
                + '</table>'
                + '</div>';
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

                // Load plugin config.
                show_tickets = this.opts.mergeFields.tickets || false;
                show_organisations = this.opts.mergeFields.organisations || false;
                show_canned_responses = typeof this.opts.mergeFields.canned_responses !== 'undefined'
                    ? this.opts.mergeFields.canned_responses : true;

                // Force config options.
                this.opts.sourceCallback = function () {
                    this.$toolbar.find('a.re-mergeFields').removeClass('redactor-button-disabled');
                };

                // Add button to redactor toolbar
                var button = this.button.add('mergeFields', Lang.get('operator.merge_fields'));
                this.button.addCallback(button, this.mergeFields.show);

                this.button.setAwesome('mergeFields', 'fa-database');

            },

            /**
             * Show the merge field modal.
             *
             * @return {void}
             */
            show: function () {

                this.modal.addTemplate('mergeFields', this.mergeFields.getTemplate());

                this.modal.load('mergeFields', Lang.get('operator.merge_fields'), 1000);

                $(this.$modal).on('click', 'button.as-link', function (e) {
                    redactor.mergeFields.insert( $(this).text() );
                });

                this.selection.save();

                this.modal.show();

            },

            /**
             * Insert the selected merge field into the editor at the current cursor position.
             *
             * @return void
             */
            insert: function (text) {

                this.modal.close();

                if (this.opts.plugins.indexOf('syntax') !== -1 && this.syntax.isActive()) {

                    this.syntax.insert( text );

                } else {

                    this.selection.restore();

                    this.insert.html(text);

                    this.code.sync();
                }

            },

            /**
             * Template for the modal.
             *
             * @returns {string}
             */
            getTemplate: function () {

                return String()
                    + '<section>'
                        + '<span class="description">' + Lang.get('operator.merge_fields_desc') + '</span>'
                        + '<br /><br />'
                        + '<div class="merge-fields row">'
                            + (show_tickets ? ticketTemplate() : '')
                            + userAndSystemTemplate()
                        + '</div>'
                    + '</section>';
            }

        };
    };

})(jQuery);