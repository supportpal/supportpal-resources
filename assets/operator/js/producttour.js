var tour = {
    id: "getting-started-supportpal",
    i18n: {
        nextBtn: Lang.get('general.next'),
        prevBtn: Lang.get('general.back'),
        doneBtn: Lang.get('general.dismiss')
    },
    onEnd: function () {
        $.post(laroute.route('core.operator.product_tour.toggle'));
    },
    steps: [
        {
            title: Lang.get('core.dashboard'),
            content: Lang.get('core.dashboard_desc'),
            target: 'dashboardTitle',
            placement: 'bottom'
        },
        {
            title: Lang.get('core.private_messages'),
            content: Lang.get('core.messages_desc'),
            target: 'privateMessages',
            placement: 'bottom',
            xOffset: '-240px',
            arrowOffset: '250px'
        },
        {
            title: Lang.get('core.configure'),
            content: Lang.get('core.configure_desc'),
            target: 'settingsNavigation',
            placement: 'bottom',
            multipage: true,
            onNext: function () {
                window.location = laroute.route('core.operator.setting');
            }
        },
        {
            title: Lang.choice('core.brand', 2),
            content: Lang.get('core.brand_desc'),
            target: 'brandSettings',
            placement: 'right',
            showPrevButton: true,
            xOffset: '20px',
            yOffset: '-22px',
            multipage: true,
            onNext: function () {
                window.location = laroute.route('core.operator.brand.edit', { brand: 1 });
            }
        },
        {
            title: Lang.get('core.company_name'),
            content: Lang.get('core.company_name_desc'),
            target: 'name',
            placement: 'right',
            xOffset: '10px',
            yOffset: '-15px',
            onNext: function () {
                $('#Email').trigger('click');
            }
        },
        {
            title: Lang.get('core.default_email'),
            content: Lang.get('core.default_email_desc'),
            target: 'default_email',
            placement: 'right',
            xOffset: '10px',
            yOffset: '-15px',
            showPrevButton: true,
            onNext: function () {
                $('#generalSettingsBox').trigger('click');
                $('#ticketSettingsBox').trigger('click');
            },
            onShow: function () {
                $('#Email').trigger('click');
            },
            onPrev: function () {
                $('#General').trigger('click');
            }
        },
        {
            title: Lang.choice('ticket.department', 2),
            content: Lang.get('core.department_desc'),
            target: 'ticketDeptSetting',
            placement: 'right',
            showPrevButton: true,
            xOffset: '20px',
            yOffset: '-22px',
            multipage: true,
            onNext: function () {
                window.location = laroute.route('ticket.operator.department.edit', { department: 0 });
            }
        },
        {
            title: Lang.choice('ticket.department', 2),
            content: Lang.get('core.dept_settings_desc'),
            target: 'departmentSettings',
            placement: 'top',
            showPrevButton: false,
            onShow: function () {
                $('#departmentSettings').find('.input-container').trigger('click');
            }
        },
        {
            title: Lang.get('core.department_email'),
            content: Lang.get('core.dept_email_desc'),
            target: 'emails[0][address]',
            placement: 'top',
            showPrevButton: true
        },
        {
            title: Lang.get('core.dept_tmpl'),
            content: Lang.get('core.dept_tmpl_desc'),
            target: 'department-templates',
            placement: 'top',
            showPrevButton: true,
            onNext: function () {
                $('#ticketSettingsBox').trigger('click');
                $('#generalSettingsBox').trigger('click');
            }
        },
        {
            title: Lang.choice('core.scheduled_task', 2),
            content: Lang.get('core.schedule_task_desc'),
            target: 'scheduledTaskSetting',
            placement: 'right',
            xOffset: '-100px',
            yOffset: '-18px',
            showPrevButton: true,
            multipage: true,
            onNext: function () {
                window.location = laroute.route('core.operator.scheduledtask.index');
            }
        },
        {
            title: Lang.choice('core.scheduled_task', 2),
            content: Lang.get('core.schedule_task_2'),
            target: 'scheduledTaskTable',
            placement: 'top',
            showPrevButton: false
        },
        {
            title: Lang.get('core.schedule_task_cron'),
            content: Lang.get('core.schedule_task_3'),
            target: 'scheduledTaskCron',
            placement: 'top',
            showPrevButton: false,
            onNext: function () {
                $('#generalSettingsBox').trigger('click');
                $('#ticketSettingsBox').trigger('click');
            }
        },
        {
            title: Lang.choice('ticket.channel', 2),
            content: Lang.get('core.ticket_channel_desc'),
            target: 'channelSettings',
            placement: 'right',
            xOffset: '20px',
            yOffset: '-22px',
            showPrevButton: true,
            multipage: true,
            onNext: function () {
                window.location = laroute.route('ticket.operator.channel.index');
            }
        },
        {
            title: Lang.choice('ticket.channel', 2),
            content: Lang.get('core.ticket_channel_2'),
            target: 'ticketChannelTable',
            placement: 'top',
            showPrevButton: false,
            multipage: true,
            onNext: function () {
                window.location = laroute.route('ticket.channel.web.settings');
            }
        },
        {
            title: Lang.get('ticket.web_settings'),
            content: Lang.get('core.web_settings_desc'),
            target: 'unauthenticated_users_desc',
            placement: 'bottom',
            showPrevButton: false,
            onNext: function () {
                // Show the Users drop down in the header
                $('#userHeaderDropdown').addClass('hover');
            }
        },
        {
            title: Lang.choice('user.user', 2),
            content: Lang.get('core.user_desc'),
            target: 'manageUserSetting',
            placement: 'right',
            yOffset: '-13px',
        },
        {
            title: Lang.choice('user.organisation', 2),
            content: Lang.get('core.organisation_desc'),
            target: 'manageOrgSetting',
            placement: 'right',
            yOffset: '-13px',
        },
        {
            title: Lang.choice('general.operator', 2),
            content: Lang.get('core.operator_desc'),
            target: 'manageOperatorSetting',
            placement: 'right',
            yOffset: '-13px',
            onNext: function () {
                // Open the Tickets drop down in the header
                $('#ticketHeaderDropdown').addClass('hover');
                // Hide the users drop down in the header
                $('#userHeaderDropdown').removeClass('hover');
            }
        },
        {
            title: Lang.choice('ticket.ticket', 2),
            content: Lang.get('core.ticket_desc'),
            target: 'ticketHeaderDropdown',
            placement: 'right',
            xOffset: '100px',
            yOffset: '40px',
            multipage: true,
            onNext: function () {
                window.location = laroute.route('ticket.operator.ticket');
            }
        },
        {
            title: Lang.choice('ticket.ticket', 2),
            content: Lang.get('core.ticket_desc2'),
            target: 'openNewTicket',
            placement: 'bottom'
        },
        {
            title: Lang.get('core.ticket_toolbar'),
            content: Lang.get('core.ticket_desc3'),
            target: 'gridFooter',
            placement: 'top',
            multipage: true,
            onNext: function () {
                window.location = laroute.route('core.operator.dashboard');
            }
        },
        {
            title: Lang.get('core.tour_complete'),
            content: Lang.get('core.tour_complete_desc'),
            target: 'GettingStarted',
            placement: 'right'
        }
    ]
};

// If we've started a tour, resume it
if (hopscotch.getState() !== null && hopscotch.getState().match(/:0$/) === null) {
    // Get the current page URL
    currentUrl = [location.protocol, '//', location.host, location.pathname].join('');

    // If this is the dashboard, we need to wait for the AJAX to complete...
    // hopscotch only waits for document.ready to fire - AJAX completes after this
    if (currentUrl == laroute.route('core.operator.dashboard')) {
        $('#widgets').on('widgetsLoaded', function (e) {
            hopscotch.startTour(tour);
        });
    } else {
        // For all other pages, start the tour when document.ready is fired
        hopscotch.startTour(tour);
    }
}
