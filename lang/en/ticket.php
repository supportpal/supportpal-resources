<?php

return [

	"feedback_question"			=> "Question to be shown to the user.",
    "open_new"                  => "Open New Ticket",
    "select_department"         => "Select a Department",
    "select_department_desc"    => "Please click on the relevant department for your issue below.",
    "no_departments"            => "No departments found.",
    "department_user_details"   => "Department and User Details",
    "enter_your_details"        => "Enter your details",
    "enter_ticket_details"      => "Enter Details",
    "enter_subject_message"     => "Enter Subject and Message",
    "invalid_user"              => "Please ensure valid user details have been entered to continue.",

	"registered_users"			=> "Registered Users Only",
	"registered_users_desc"		=> "Toggle to only import tickets from users with an account in the help desk.",

    "tickets"                   => "Ticket(s)",
    "ticket"                    => "Ticket|Tickets",
    "subject"                   => "Subject",
	"no_subject"				=> "No Subject",
    "last_action"               => "Last Action",
    "due_time"                  => "Due Time",
    "created_time"              => "Created Time",
    "submitted"                 => "Submitted",
    "add_reply"                 => "Add Reply",
    "ticket_reply"              => "Ticket Reply",
    "ticket_note"               => "Ticket Note",
    "ticket_type"               => "Ticket Type",

    "user_ticket"               => "User Ticket",
    "user_ticket_desc"          => "Open new ticket on behalf of a new or existing user.",
    "existing_user"             => "Existing User",
    "new_user"                  => "New User",
    "internal"                  => "Internal",
    "internal_ticket"           => "Internal Ticket",
    "internal_ticket_desc"      => "Open a ticket for internal use only. This ticket will be associated with you, rather than a user.",
    "ticket_opened"             => "Your ticket has successfully been opened.",
    "enter_user_details"        => "Please enter your details below, or login to your account if you have one.",
    "already_have_account"      => "You already have an account, please login and then open the ticket. Please use the forgot password feature if you cannot remember your login.",

    "recent_tickets"            => "Recent Tickets",
    "last_message_text"         => "Last Message Text",

    "set_due_time"              => "Set a due time",

    "settings"                  => "Ticket Settings",

	"priority"                  => "Priority|Priorities",

    "channel"                   => "Channel|Channels",
    "account"                   => "Account|Accounts",

    "assign_operator"           => "Assign Operator",
    "assigned_operator"         => "Assigned Operators",
    "assigned_to"               => "Assigned To",
    "assigned"                  => "Assigned",

    "department"                => "Department|Departments",
	"change_department_order"	=> "Drag the rows to change the order that departments are shown to users when opening a new ticket.",
    "department_order"          => "Department Order",
    "department_applicable"     => "Applicable Departments",
    "department_applicable_desc" => "The departments in which the priority will be available for users to select. Only applies to the frontend, all priorities will be available to operators for all departments.",

    "due_to_be_sent"            => "Due to be sent",
    "send_now"                  => "Send now",

    "tag"                       => "Tag|Tags",

    "track_ticket"              => "Track Ticket",
    "view_ticket"               => "View Ticket",

    // Recent activity
    "recent_activity"	        => "Recent Activity",
    "no_recent_activity"        => "No recent activity",

    // Active operators
    "active_operators"          => "Active Operators",

    "ticket_number"             => "Ticket Number",
    "ticket_format"             => "Ticket Number Format",
    "ticket_format_desc"        => "The following variables may be used:<br />%S for a sequential number | %N for a random number | %L for a random letter<br />Use {number} to repeat <strong>only</strong> after %N or %L, e.g. %N{4} equates to 4 random numbers, %L{3} equates to 3 random letters<br />The following <a href='http://php.net/manual/en/function.date.php' target='_blank'>PHP Date</a> Parameters prefixed with % Y,y,m,d,j,g,G,h,H,i,s",

    // Departments
    "department_public_desc"    => "If the department is visible to users on the web help desk.",
    "department_parent_desc"    => "If the department is a subdepartment, please select a parent. Subdepartments are intended for internal escalation and management, therefore setting this will remove some of the options below.",
    "department_priority"       => "Department Priorities",
    "department_priority_desc"  => "The priorities that will be available to users when opening a ticket in this department, at least one needs to be selected. By default, all priorities will be available in the department.",
    "department_no_format"      => "Optional, only set to override the default ticket number format, leave blank otherwise.",
    "department_operator"       => "Department Operators",
    "department_default_assign" => "Default Assigned To",
    "dept_default_assign_desc"  => "Use this if you wish for tickets that are opened in this department to be automatically assigned to one or more operators.",

    // Department emails
    "email_accounts_desc"       => "Set up email addresses for the department, any incoming email to these email addresses will open tickets in this department. The first email address is used as the default sender email address for outgoing email.",
    "department_password"       => "Only enter a password to replace existing saved password or to validate email account details.",
    "department_port"           => "Default values are: 110 for POP3, 995 for secure POP3, 143 for IMAP, and 993 for secure IMAP. Leave blank to use the default value.",
    "department_encryption"     => "Some email providers require SSL or TLS encryption in order to connect, if you are unsure leave this setting as None.",
    "department_delete_mail"    => "If using IMAP, you can choose to not delete emails on the server after they've been imported as tickets.",
    "department_consume_all"    => "By default, SupportPal has email alias support and will check the TO address on incoming email to see which department the ticket should be opened in. Enabling this setting will mean all emails are imported as tickets in this department regardless of the TO address.",
    "another_email"             => "Add Another Email Address",
    "protocol"                  => "Protocol",
    "server"                    => "Mail Server",
    "port"                      => "Port",
    "username"                  => "Username",
    "password"                  => "Password",
    "encryption"                => "Encryption",
    "delete_downloaded"         => "Delete Downloaded Email",
    "consume_all"               => "Consume All Email",
    "email_download"            => "Email Download",
    "email_piping"              => "Email Piping",
    "email_piping_desc"         => "Set up an email forwarder like the following, the PHP executable path may be different on your server.",
    "remote_email_piping"       => "Remote Email Piping",

    // Department email options
    "email_options"             => "Email Options",
    "email_auto_close"          => "Email Users on Ticket Auto-Close",
    "email_auto_close_desc"     => "Select whether users should be emailed when tickets belonging to them are automatically closed by the system.",
    "email_closed_by_operator"  => "Email Users when Ticket Closed by Operator",
    "email_closed_by_op_desc"   => "Select whether users should be emailed when tickets belonging to them are closed by an operator.",
    "email_user_on_email"       => "Email Users on Tickets Opened by Email",
    "email_user_on_email_desc"  => "Select whether users should be notified by email when an email they send results in a new ticket being opened.",
    "email_operators"           => "Notify Operators",
    "email_operators_desc"      => "Select whether to forward operator replies to other operators. By default checks the \"email operators\" option in the operator panel, and will automatically send an email for email replies by operators.",
    // Department e-mail templates
    "email_template_desc"       => "You may select an email template other than the default to be sent to the user for any of the actions below. This template will become the default for this department only.",
    "new_ticket_reply"          => "New Ticket Reply",
    "new_ticket_opened"         => "New Ticket Opened",
    "reply_to_locked"           => "Reply to Locked Ticket",
	"waiting_for_response"		=> "Waiting for Response",
    "ticket_auto_closed"        => "Ticket Auto Closed",
    "closed_by_operator"        => "Closed By Operator",

    // Feedback
    "feedback"                  => "Feedback",
    "feedback_form"             => "Feedback Form|Feedback Forms",
    "feedback_form_desc"        => "Feedback forms are processed in the order they appear. Drag the rows to reorder and adjust the priority of the feedback forms.",
    "view_feedback_report"      => "View Feedback Report",
    "view_feedback"             => "View Feedback",
    "ticket_feedback"           => "Ticket Feedback",
    "feedback_fields_error"     => "There was a problem fetching the feedback fields.",
    "time_after_resolved"       => "Time After Resolved",
    "time_after_resolved_desc"  => "The time after which a ticket is marked as resolved that the feedback form is sent to the user.",
    "expires_after"             => "Expires After",
    "expires_after_desc"        => "The time after which a feedback form has expired can no longer answered. While we recommend setting 7 days, you may enter 0 in all the fields to set no expiry time.",
    "form_conditions"           => "Form Conditions",
    "form_conditions_desc"      => "Define the ticket conditions for which newly resolved tickets are checked to see if they fall under this form. If a resolved ticket fits multiple forms, it will be selected on the form priority, which can be modified by going to the list of forms and reordering.",
    "form_fields"               => "Form Fields",
    "form_fields_desc"          => "If you'd like to collect additional information when the user provides their feedback, you may set up custom fields to show on the form here.",
    "add_field"                 => "Add Field",
    "add_option"                => "Add Option",
    "response_rate"             => "Response Rate",
    "sent_forms"                => "Sent Feedback Forms",
	"rating"					=> "Rating",
    "good_ratings"              => "Good Ratings",
    "bad_ratings"               => "Bad Ratings",
    "customer_satisfaction"     => "Customer Satisfaction",
    "feedback_desc"             => "Thank you for contacting us and we hope we have resolved your query. Please could you rate your experience below.",
    "good_satisfied"            => "Good, I'm satisifed",
    "bad_not_satisfied"         => "Bad, I'm unsatisifed",
    "feedback_not_found"        => "Your feedback could not be accepted, please open a ticket with us if you wish to share your feedback.",
    "feedback_malformed_token"  => "Your feedback could not be accepted due to a malformed token. Please open a ticket with us if you wish to share your feedback.",
    "feedback_already_done"     => "You have already provided your feedback for this ticket, thank you.",
    "feedback_expired"          => "The ticket has been resolved for a while, and it can unfortunately no longer be rated.",
    "feedback_questions"        => "If you could spare a few moments, please answer the following questions to help us further improve the support that we offer.",
    "feedback_thank_you"        => "Thank you for providing your feedback on this ticket.",
    "feedback_for_ticket"       => "Feedback for Ticket #:number",
    "feedback_rating_desc"      => "The support received on this ticket has been rated as <strong>:rating</strong> by the user.",

    // Custom fields
    "customfield"               => "Ticket Custom Field|Ticket Custom Fields",
	"customfield_order"			=> "Drag the rows to change the order that custom fields are shown to users when opening tickets via the web.",

    // Canned responses
    "cannedresponse"            => "Canned Response|Canned Responses",
    "canned_response_category"  => "Canned Response Category|Canned Response Categories",
    "response"                  => "Response",
    "canned_public_desc"        => "Toggle to only let the canned response be accessible by yourself.",
    "canned_group_desc"         => "If you wish to make the canned response visible to only certain operator groups, leave blank to make visible to all operators.",

    // Filters
    "filter"                    => "Filter|Filters",
    "filter_condition"          => "Filter Conditions",
    "filter_condition_desc"     => "Define the ticket conditions for which tickets are listed under this filter.",
    "filter_public_desc"        => "Toggle to only let the filter be accessible by yourself.",
    "filter_group_desc"         => "If you wish to make the filter visible to only certain operator groups, leave blank to make visible to all operators.",

    // Macros
    "macro"                     => "Macro|Macros",
    "macro_type"                => "Macro Type",
    "macro_type_desc"           => "By default the macro has to be manually called in the ticket view. It can be set to be an automatic macro that is checked and actioned when new tickets come in or on all tickets via a scheduled task, in either case the conditions will be checked and if true then the actions will be performed automatically. A macro can only run once on a ticket automatically, there is no limit for running it manually.",
    "manual"                    => "Manual",
    "macro_type_auto1"          => "Automatic - On new tickets only",
    "macro_type_auto2"          => "Automatic - All tickets (scheduled task)",
    "macro_condition"           => "Macro Conditions",
    "macro_condition_desc"      => "Define the conditions for which tickets this macro will be available to. By default, with no conditions, it will apply to all tickets.",
    "macro_action"              => "Macro Actions",
    "macro_action_desc"         => "Define actions that are performed out when a macro is carried out. Please ensure actions are valid for the department the ticket is in or else they will be ignored.",
    "add_action"                => "Add Action",

    "from"                      => "From",
    "to"                        => "To",
    "cc"                        => "CC",
    "cc_desc"                   => "You can CC other people on to this ticket by entering email addresses above.",

    "allowed_files"             => "Allowed Attachment File Types",

    // Drafts
    "also_viewing"              => "<strong>:name</strong> also viewing ticket.",
    "drafting_reply"            => "<strong>:name</strong> started to draft a reply :time:",
    "draft_saved"               => "Draft saved at :time",
    "save_draft"                => "Save Draft",
    "discard_draft"             => "Discard Draft",

    // Locked
    "error_ticket_locked"       => "This ticket has been locked and cannot be updated again, please open a new ticket if you need further support.",

    // Ticket Followups
    "follow_up"                 => "Follow Up",
    "follow_up_status_desc"     => "Set the ticket to a different status until the follow up date.",
    "exact_date_time"           => "Exact date & time",
    "time_from_now"             => "Time from now",
	"follow_up_active"			=> "A <a class='view-followup' style='text-decoration: underline;'>follow up</a> is currently active on this ticket and will run in the near future.",

    // Schedule
    "schedule"                  => "Schedule|Schedules",
    "business_hour"             => "Business Hours",
    "business_hour_desc"        => "Business Hours indicate the times that the staff are available to answer queries for the schedule. The hours are taking into consideration when calculating ticket due times.",

    // Holidays
    "holiday"                   => "Holiday|Holidays",
    "all_holidays"              => "All Holidays",
    "specific_holidays"         => "Specific Holidays",
    "holiday_or_on_the"         => "or, on the",
    "holiday_month_year_desc"   => "Year is optional if the holiday is recurring. Select a year only if the holiday happens on this date in a particular year.",

    // SLA Plans
    "sla_plan"                  => "SLA Plan|SLA Plans",
    "specific_schedule"         => "Specific Schedules",
    "calendar_hours_24"         => "Calendar Hours (24 Hours)",
    "resolution_time"           => "Resolution Times",
    "resolution_time_desc"      => "Set times that a ticket must be responded to by and resolved by per priority. The time will be counted only during business hours based on the schedule(s) chosen, decimal values can be used.",
    "reply_within"              => "Reply within",
    "resolve_within"            => "Resolve within",
    "plan"                      => "Plan",
    "sla_condition"             => "SLA Conditions",
    "sla_condition_desc"        => "Define the ticket conditions for which new tickets are checked to see if they fall under this plan. If a new ticket fits multiple SLA plans, it will be selected on plan priority, which can be modified by going to the list of plans and reordering.",
    "escalation_rule"           => "Escalation Rules",
    "escalation_rule_desc"      => "Define actions that are carried out when a ticket under this SLA plan is close to or has become overdue. Please ensure rules are valid for the department the ticket is in or else they will be ignored.",
    "condition"                 => "Condition",
    "condition_group"           => "Condition Group",
    "all_groups"                => "ALL groups must be true",
    "any_group"                 => "ANY group can be true",
    "all_conditions"            => "ALL conditions in group must be true",
    "any_condition"             => "ANY condition in group can be true",
    "sla_plan_desc"             => "SLA Plans are processed in the order they appear. Drag the rows to reorder and adjust the priority of the SLA Plans.",

    // Reply options
    "reply_options"             => "Reply Options",
    "send_email_to_users"       => "Send Email To User(s)",
    "send_email_to_operators"   => "Send Email To Operator(s)",
    "back_to_grid"              => "Go Back to Ticket Grid",
    "take"                      => "Take",
    "take_ownership"            => "Take Ownership",
	"pause_duetime"				=> "Pause Due Time",
    "add_to_canned_responses"   => "Add to Canned Responses",
    "visible_to_all_operators"  => "Make visible to all operators",
    "set_status"                => "Set Status",
    "add_selfservice_link"      => "Add Self-Service Link",
    "search_selfservice"        => "Search for a self-service article",
    "add_canned_response"       => "Add Canned Response",
    "search_canned"             => "Search for a canned response",

    "mark_resolved"             => "Mark as Resolved",

    "ticket_signature"          => "Ticket Signature",

    "default_open_status"       => "Default Open Status",
    "default_open_status_desc"  => "Select the default status with which new tickets are automatically set to.",

    "default_resolve_status"    => "Default Resolved Status",
    "default_resolve_status_desc"=> "Select the default status that is used for tickets that have been resolved.",

	"waiting_response_time"		=> "Waiting for Response Email",
	"waiting_response_time_desc"=> "The time after which users are sent an email on inactive tickets, asking if they consider the ticket to be resolved. Set to 0 to disable this email.",

    "close_inactive_tickets"    => "Close Inactive Tickets",
    "close_inactive_tickets_desc"=> "The time after which inactive tickets are automatically closed, set to 0 to never close tickets automatically.",
    "close_inactive_status_desc"=> "Automatically close tickets that have become inactive without a follow up from the user (defined by the number of days since the last reply by an operator in the ticket general settings).",

    "ticket_reply_order"        => "Ticket Reply Order",
    "ticket_reply_order_desc"   => "Select the order in which ticket messages are shown, ascending where the latest message is last or descending where the latest message is first.",

    "ticket_notes_position"     => "Ticket Notes Position",
    "ticket_notes_position_desc"=> "Select where in the ticket view that ticket notes are shown.",
    "ticket_notes_top_messages" => "At top and in messages",
    "ticket_notes_top"          => "At top only",
    "ticket_notes_messages"     => "In messages only",

    "captcha_desc"              => "When the captcha should be shown to users opening new tickets.",
    "unregistered_only"         => "Unregistered users only",

    "allow_unauth_users"        => "Allow Unauthenticated Users",
    "allow_unauth_users_desc"   => "Allow users that are not logged in to view and reply to tickets. Disabling this will also remove the track ticket feature and users will need to be registered and login before being able to access tickets.",

    "default_department"        => "Default Department",
    "default_department_desc"   => "The default department set on all incoming tickets via this channel.",

	"show_related_articles"		=> "Show Related Articles",
	"show_related_articles_desc" =>	"When the user is typing the subject, they may be shown related articles based on what they have entered. Requires the self-service module to be enabled and MySQL 5.6+.",

    // Email Channel Settings
    "default_priority"          => "Default Priority",
    "default_priority_desc"     => "The default priority set on all incoming tickets via this channel.",
    "verbose_email_log"         => "Verbose Email Log",

    "adjust_columns"            => "Adjust Columns",
    "last_reply"                => "Last Reply",
    "opened_at"                 => "Opened At",

    "change_department"         => "Change Department",
    "change_status"             => "Change Status",
    "no_statuses"               => "No statuses found. Click <a href=':route'>here</a> to create one.",
    "no_priorities"             => "No priorities found. Click <a href=':route'>here</a> to create one.",
    "no_templates"              => "No custom email templates found. Click <a href=':route'>here</a> to create one.",
    "no_tags"                   => "No ticket tags found. Click <a href=':route'>here</a> to create one.",
    "no_departments_found"      => "No departments found. Click <a href=':route'>here</a> to create one.",
    "no_operators_found"        => "No operators found. Click <a href=':route'>here</a> to create one.",
    "change_priority"           => "Change Priority",
    "add_tag"                   => "Add tag",

    "unlock"                    => "Unlock",
    "merge"                     => "Merge",
    "merged"                    => "Merged",
    "unmerge"                   => "Unmerge",
    "close_and_lock"            => "Close & Lock",
    "delete_and_block"          => "Delete & Block",

    "block_warning"             => "The user's email will also be blocked and no longer able to open tickets.",

    "mass_reply"                => "Mass Reply",

    "delete_warning"            => "Once these tickets have been deleted, they cannot be recovered.",

    "due_today"                 => "Due Today",
    "overdue"                   => "Overdue",
    "unassigned"                => "Unassigned",

	"pause_duetime_desc"		=> "If there is an active SLA plan on this ticket, pause the remaining due time until after the follow up date. The due time will only start again once a reply or note has been added to the ticket (including from the follow up).",
    "delete_follow_up"          => "Delete Follow Up",

    "add_cc"                    => "Add CC",
    "send_email_to_user"        => "Send email to user",
    "send_email_to_operator"    => "Send email to operators",
    "reply_above_line"          => "Please reply above this line",

	"oauth2_token"              => "OAuth2 Token",
    "email_settings"            => "Email Settings",
    "web_settings"              => "Web Settings",
    "split_selected_replies"    => "Split Selected Replies",

    "track_ticket_not_found"    => "Could not find ticket with ticket number and user email address entered.",

    "channel_deactivated"       => "The ticket channel is currently deactivated, a reply cannot be posted.",

	"type_in_tags"				=> "Type in tags",

    /*
     * 2.0.1
     */
	"allowed_files_desc"        => "A list of file extensions, separated by the pipe | character, that are permitted as attachments. For example: txt|png|jpg. To allow all attachments, input: ?.*",

	/*
	 * 2.0.2
	 */
	"no_operator_groups"        => "No operator groups found. Click <a href=':route'>here</a> to create one.",
    "no_user_groups"            => "No user groups found. Click <a href=':route'>here</a> to create one.",
    "opened_by"                 => "(Opened by :name)",
    "remote_email_piping_desc"  => "Download the <a href='http://www.supportpal.com/manage/dl.php?type=d&id=8' target='_blank'>remote email piping script</a> and follow the <a href='http://docs.supportpal.com/display/DOCS/Remote+Email+Piping' target='_blank'>documentation</a> on configuring it on your mail server.",
	"not_assigned_department"   => "Sorry, you're not permitted to view tickets in the :department department. If you think this has been shown in error, please contact your administrator.",
	"verbose_email_log_desc"    => "If email collection should be logged on file. We recommend to keep enabled to help with debugging purposes. Five days worth of logs are stored, older log files will be purged automatically by the system.",

];
