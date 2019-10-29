<?php

return array(

    "feedback_question"         => "Question to be shown to the user.",
    "open_new"                  => "Open New Ticket",
    "select_department"         => "Select a Department",
    "select_department_desc"    => "Please click on the relevant department for your issue below.",
    "no_departments"            => "No departments found.",
    "department_user_details"   => "Department and User Details",
    "enter_your_details"        => "Enter your details",
    "enter_ticket_details"      => "Enter Details",
    "enter_subject_message"     => "Enter Subject and Message",
    "invalid_user"              => "Please ensure valid user details have been entered to continue.",

    "registered_users"          => "Registered Users Only",

    "tickets"                   => "Ticket(s)",
    "ticket"                    => "Ticket|Tickets",
    "subject"                   => "Subject",
    "no_subject"                => "No Subject",
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
    "change_department_order"   => "Drag the rows to change the order that departments are shown to users when opening a new ticket.",
    "department_applicable"     => "Applicable Departments",
    "department_applicable_desc" => "The departments in which the priority will be available for users to select. Only applies to the frontend, all priorities will be available to operators for all departments.",

    "due_to_be_sent"            => "Due to be sent",
    "send_now"                  => "Send now",

    "tag"                       => "Tag|Tags",

    "track_ticket"              => "Track Ticket",
    "view_ticket"               => "View Ticket",

    // Recent activity
    "recent_activity"           => "Recent Activity",
    "no_recent_activity"        => "No recent activity",

    // Active operators
    "active_operators"          => "Active Operators",

    "ticket_number"             => "Ticket Number",
    "ticket_format"             => "Ticket Number Format",

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
    "email_user_on_email"       => "Email Users on Tickets Opened by Email",
    "email_user_on_email_desc"  => "Select whether users should be notified by email when an email they send results in a new ticket being opened.",
    "email_operators"           => "Notify Operators",
    "email_operators_desc"      => "Select whether to forward operator replies to other operators. By default checks the \"email operators\" option in the operator panel, and will automatically send an email for email replies by operators.",
    // Department email templates
    "new_ticket_opened"         => "New Ticket Opened",
    "reply_to_locked"           => "Reply to Locked Ticket",
    "waiting_for_response"      => "Waiting for Response",
    "ticket_auto_closed"        => "Ticket Auto Closed",
    "closed_by_operator"        => "Closed By Operator",

    // Feedback
    "feedback"                  => "Feedback",
    "feedback_form"             => "Feedback Form|Feedback Forms",
    "feedback_form_desc"        => "Feedback forms are processed in the order they appear. Drag the rows to reorder and adjust the priority of the feedback forms.",
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
    "response_rate"             => "Response Rate",
    "sent_forms"                => "Sent Feedback Forms",
    "rating"                    => "Rating",
    "good_ratings"              => "Good Ratings",
    "bad_ratings"               => "Bad Ratings",
    "customer_satisfaction"     => "Customer Satisfaction",
    "feedback_desc"             => "Thank you for contacting us and we hope we have resolved your query. Please could you rate your experience below.",
    "good_satisfied"            => "Good, I'm satisfied",
    "bad_not_satisfied"         => "Bad, I'm unsatisfied",
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
    "customfield_order"         => "Drag the rows to change the order that custom fields are shown to users when opening tickets via the web.",

    // Canned responses
    "cannedresponse"            => "Canned Response|Canned Responses",

    // Filters
    "filter"                    => "Filter|Filters",
    "filter_condition"          => "Filter Conditions",
    "filter_condition_desc"     => "Define the ticket conditions for which tickets are listed under this filter.",

    // Macros
    "macro"                     => "Macro|Macros",
    "macro_type"                => "Macro Type",
    "macro_type_desc"           => "By default the macro has to be manually called in the ticket view. It can be set to be an automatic macro that is checked and actioned when new tickets come in or on all tickets via a scheduled task, in either case the conditions will be checked and if true then the actions will be performed automatically. A macro can only run once on a ticket automatically, there is no limit for running it manually.",
    "macro_condition"           => "Macro Conditions",
    "macro_action"              => "Macro Actions",
    "macro_action_desc"         => "Define actions that are performed out when a macro is carried out. Please ensure actions are valid for the department the ticket is in or else they will be ignored.",

    "from"                      => "From",
    "to"                        => "To",
    "cc"                        => "CC",
    "cc_desc"                   => "You can CC other people on to this ticket by entering email addresses above.",

    "allowed_files"             => "Allowed Attachment File Types",

    // Drafts
    "also_viewing"              => "<strong>:name</strong> also viewing ticket.",
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

    // Schedule
    "schedule"                  => "Schedule|Schedules",
    "business_hour"             => "Business Hours",
    "business_hour_desc"        => "Business Hours indicate the times that the staff are available to answer queries for the schedule. The hours are taking into consideration when calculating ticket due times.",

    // Holidays
    "holiday"                   => "Holiday|Holidays",
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
    "pause_duetime"             => "Pause Due Time",
    "add_to_canned_responses"   => "Add to Canned Responses",
    "visible_to_all_operators"  => "Make visible to all operators",
    "set_status"                => "Set Status",
    "add_selfservice_link"      => "Add Self-Service Link",
    "search_selfservice"        => "Search for a self-service article",
    "search_canned"             => "Search for a canned response",

    "mark_resolved"             => "Mark as Resolved",

    "ticket_signature"          => "Ticket Signature",

    "default_open_status"       => "Default Open Status",

    "default_resolve_status"    => "Default Resolved Status",
    "default_resolve_status_desc" => "Select the default status that is used for tickets that have been resolved.",

    "waiting_response_time"      => "Waiting for Response Email",
    "waiting_response_time_desc" => "The time after which users are sent an email on inactive tickets, asking if they consider the ticket to be resolved. Set to 0 to disable this email.",

    "close_inactive_tickets"    => "Close Inactive Tickets",
    "close_inactive_tickets_desc" => "The time after which inactive tickets are automatically closed, set to 0 to never close tickets automatically.",

    "ticket_reply_order"        => "Ticket Reply Order",
    "ticket_reply_order_desc"   => "Select the order in which ticket messages are shown, ascending where the latest message is last or descending where the latest message is first.",

    "ticket_notes_position"     => "Ticket Notes Position",
    "ticket_notes_position_desc" => "Select where in the ticket view that ticket notes are shown.",
    "ticket_notes_top_messages" => "At top and in messages",
    "ticket_notes_top"          => "At top only",
    "ticket_notes_messages"     => "In messages only",

    "captcha_desc"              => "When the captcha should be shown to users opening new tickets.",
    "unregistered_only"         => "Unregistered users only",

    "allow_unauth_users"        => "Allow Unauthenticated Users",
    "allow_unauth_users_desc"   => "Allow users that are not logged in to view and reply to tickets. Disabling this will also remove the track ticket feature and users will need to be registered and login before being able to access tickets.",

    "default_department"        => "Default Department",
    "default_department_desc"   => "The default department set on all incoming tickets via this channel.",

    "show_related_articles"     => "Show Related Articles",
    "show_related_articles_desc" => "When the user is typing the subject, they may be shown related articles based on what they have entered. Requires the self-service module to be enabled and MySQL 5.6+.",

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

    "block_warning"             => "The user's email will also be blocked and no longer able to open tickets.",

    "mass_reply"                => "Mass Reply",

    "due_today"                 => "Due Today",
    "overdue"                   => "Overdue",
    "unassigned"                => "Unassigned",

    "pause_duetime_desc"        => "If there is an active SLA plan on this ticket, pause the remaining due time until after the follow up date. The due time will only start again once a reply or note has been added to the ticket (including from the follow up).",
    "delete_follow_up"          => "Delete Follow Up",

    "add_cc"                    => "Add CC",
    "reply_above_line"          => "Please reply above this line",

    "email_settings"            => "Email Settings",
    "web_settings"              => "Web Settings",
    "split_selected_replies"    => "Split Selected Replies",

    "track_ticket_not_found"    => "Could not find ticket with ticket number and user email address entered.",

    "channel_deactivated"       => "The ticket channel is currently deactivated, a reply cannot be posted.",

    "type_in_tags"              => "Type in tags",

    /*
     * 2.0.1
     */
    "allowed_files_desc"        => "A list of file extensions, separated by the pipe | character, that are permitted as attachments. For example: txt|png|jpg. To allow all attachments, input: ?.*",

    /*
     * 2.0.2
     */
    "no_operator_groups"        => "No operator groups found. Click <a href=':route'>here</a> to create one.",
    "no_user_groups"            => "No user groups found. Click <a href=':route'>here</a> to create one.",
    "remote_email_piping_desc"  => "Download the <a href='http://www.supportpal.com/manage/dl.php?type=d&id=8' target='_blank'>remote email piping script</a> and follow the <a href='https://docs.supportpal.com/current/Remote+Email+Piping' target='_blank'>documentation</a> on configuring it on your mail server.",

    /*
     * 2.0.3
     */
    "department_consume_all"    => "By default, SupportPal has email alias support and will check the TO address on incoming email to see which department the ticket should be opened in, a ticket is not opened if a matching department email address cannot be found. Enabling this setting will mean all emails without a matching department email address are imported as tickets in this department.",
    "default_reply_options"     => "Default Reply Options",
    "default_reply_options_desc" => "Select the default reply options to be set when opening or replying to a ticket. The ':reply_option' option will be ticked based on the ':department_option' department setting.",
    "associate_response_tag"    => "Associate canned response with a tag...",
    "canned_response_tags_desc" => "Add tags which may help finding a canned response when replying to a ticket.",
    "loading_tags"              => "Loading tags",
    "append_ip_address"         => "Append IP Address",
    "append_ip_address_desc"    => "Append the IP address of users to their messages when they are opening and replying to tickets from the frontend.",
    "unassign_operator"         => "Unassign Operator",
    "remove_tag"                => "Remove Tag",
    "message_clipped"           => "[Message Clipped]",
    "view_entire_message"       => "View entire message",
    "no_custom_fields"          => "No custom fields found. Click <a href=':route'>here</a> to create one.",
    "follow_up_active"          => "A <a class='view-followup' style='text-decoration: underline;'>follow up</a> is currently active on this ticket and will run <strong>:time</strong>.",
    "disable_user_email_replies" => "Disable User Email Replies",

    /*
     * 2.1.0
     */
    "default_ticket_filter"     => "Default Ticket Filter",
    "default_ticket_filter_desc" => "The ticket filter that is used by default when clicking the 'Manage Tickets' link. Can be set to 'None', the default option, which will show all unresolved tickets.",
    "recent_filters"            => "Recent Filters",
    "inactive_tickets"          => "Inactive Tickets",
    "default_open_status_desc"  => "Select the default status that should be automatically set when a user opens a new ticket or replies to a ticket without an operator response yet.",
    "default_reply_status"      => "Default Reply Status",
    "default_reply_status_desc" => "Select the default status that should be automatically set when a user replies to a ticket, only applies after an operator has replied to the ticket.",
    "drafting_reply"            => "<strong>:name</strong> started to draft a :type :time:",
    "ticket_reply_order_default" => "System default will use the value that is currently selected in the ticket general settings.",
    "select_a_parent"           => "Select a parent department...",
    "select_a_department"       => "Select a department...",
    "department_operator_desc"  => "You may also assign individual operators to the department. These operators will be in addition to any groups assigned above.",
    "department_group"          => "Department Groups",
    "department_group_desc"     => "You may assign whole operator groups to the department, recommended if your list of operators is large and/or changes frequently.",
    "ticket_other_brands"       => "Tickets in Other Brands",
    "add_for_department"        => "Add for department...",
    "record_order"              => "Drag the rows to change the order of records.",
    "ticket_token"              => "Ticket Token",
    "reply_all"                 => "Reply All",
    "reply_without_cc"          => "Reply (without CC)",
    "open_new_for_user"         => "Open New Ticket For User",
    "email_accounts"            => "Email Accounts",
    "add_another_email"         => "Add Another Email Address",
    "follow_up_date"            => "Follow Up Date",
    "post_reply"                => "Post Reply",
    "post_note"                 => "Post Note",
    "ticket_details"            => "Ticket Details",
    "organisation_tickets"      => "Organisation Tickets",
    "manage_tickets"            => "Manage Tickets",
    "via_channel"               => "via :channel",
    "department_parent"         => "Department Parent",
    "department_brands"         => "Department Brands",
    "email_item"                => "Email :item",
    "from_name"                 => "From Name",
    "from_address"              => "From Address",

    /*
     * 2.1.1
     */
    "edited_message"            => ":user at :date",
    "prioritise_reply-to"       => "Prioritise Reply-To",
    "prioritise_reply-to_desc"  => "Toggle to prioritise the Reply-To header over the From header. If enabled, tickets opened via email will be opened on behalf of the Reply-To name and address.",
    "note_options"              => "Note Options",
    "escalation_rules_desc"     => "The below SLA plan escalation rules are scheduled to run after the times listed. These times may change or the rules may be removed if an operator replies to this ticket.",

    /*
     * 2.1.2
     */
    "not_registered_user"       => "Not a registered user. Email channel settings set to only import emails from registered users.",
    "display_name"              => "Email Display Name",
    "display_name_desc"         => "Optional, only set to override the display name used on outgoing emails from this department, leave blank otherwise.",
    "display_name_options"      => "The following Twig variables may be used:<br >{{ brand.name }} - Brand name<br />{{ department.name }} - Department Name<br />{{ department.frontend_name }} - Shows the parent department name, if ticket belongs to a sub-department.<br />{{ operator.formatted_name }} - Operator Name<br /><em>The operator name won't always be available, so wrap it in a 'not empty' conditional i.e. {% if operator is not empty %}{{ operator.formatted_name }}{% endif %}</em>",
    "attachment_rejected"       => "Attachment Rejected",
    "enable_subaddresses"       => "Enable Sub-addresses",
    "enable_subaddresses_desc"  => "Toggle to enable using email sub-addressing for all departments. This will create a unique sub-address for each ticket that is set as the Reply-To address on all outgoing email. Your mail server must be able to handle sub-addressing, additional steps may be required if you are using email piping to ensure emails to these addresses are forwarded correctly. Enabling this will allow you to remove the ticket number from the subject of email templates.",
    "email_replies_disabled"    => "Email Replies Disabled",
    "disable_user_email_replies_desc" => "Enable to block email replies from users, and also remove the reply clipping line from outbound ticket emails. By default, the email will be silently ignored, but you can set an email to be sent to the user by changing the selected email template for the 'Email Replies Disabled' option below.",
    "bcc"                       => "BCC",
    "assigned_to_ticket"        => "Assigned to Ticket",
    "user_ticket_reply"         => "User Ticket Reply",
    "new_internal_ticket"       => "New Internal Ticket",
    "department_changed"        => "Department Changed",
    "operator_ticket_reply"     => "Operator Ticket Reply",
    "new_ticket_note"           => "New Ticket Note",
    "email_template_desc"       => "You may select an email template other than the default to be sent to the user or operators for any of the actions below. This template will become the default for this department only.",
    "create_new_user"           => "Create new user",
    "user_reply_internal_ticket" => "Not an operator. Only operators can reply to internal tickets.",
    "enter_email_address"       => "Enter email address...",
    "email_user_frontend"       => "Email Users on Tickets Opened at Frontend",
    "email_user_frontend_desc"  => "Select whether users should be notified by email when they open a ticket themselves on the frontend.",
    "department_template_disabled" => "The relevant department email template is disabled, so this email cannot be sent.",
    "verbose_email_log_desc"    => "If email collection should be logged on file, recommended to keep disabled unless instructed by support for debugging. Five days worth of logs are stored, older log files will be purged automatically by the system.",

    /*
     * 2.2.0
     */
    "user_ticket_existing_desc" => "Open new ticket on behalf of an existing user.",
    "canned_response_tag"       => "Canned Response Tag|Canned Response Tags",
    "response"                  => "Response|Responses",
    "response_desc"             => "The canned response can be written in several languages. The appropriate response will be used automatically based on the user's language preference.",
    "no_slaplans"               => "No SLA plans found. Click <a href=':route'>here</a> to create one.",
    "filter_performance"        => "Performance considerations and recommendations",
    "filter_performance_desc"   => "<li>Filters that match more tickets will be slower, in most cases try to exclude resolved tickets.</li><li>Filters using 'is not' conditions will usually be slower than using 'is' conditions.</li><li>Filters checking for NULL values (e.g. Ticket tag is None) will be slower.</li><li>Avoid multiple conditions that involve checking strings/words as they introduce more complexity.</li><li>Filters using 'begins with' or 'contains' conditions will generally be slower than using 'equals' or 'ends with' conditions.</li><li>Resolved tickets are excluded from the counts shown in the sidebar.</li>",
    "run_macro"                 => "Run Macro",
    "run_macro_desc"            => "<strong>:macro</strong><br /><em>:description</em>",

    /*
     * 2.3.0
     */
    "registered_users_desc"     => "Toggle to only show the department to logged in users and only accept emails from users actively registered in the help desk. If enabled, a bounce back email will be sent to unregistered users who email this department, to change or disable the email please see the 'Registered Users Only' template option below.",
    "form_fields_desc"          => "If you'd like to collect additional information when the user provides their feedback, you may set up custom fields to show on the form here. The field type will be locked once the form has been completed by a user.",
    "feedback_ratings"          => "Customer Satisfaction Ratings (affecting your Customer Satisfaction score)",
    "email_and_other_accounts"  => "Email and other channel accounts",
    "delete_message"            => "Delete message",
    "linked_tickets"            => "Linked Tickets",
    "add_linked_ticket"         => "Add Linked Ticket",
    "add_linked_ticket_desc"    => "Search by ticket number or subject:",
    "create_linked_ticket"      => "Create linked ticket",
    "copy_link"                 => "Copy link",
    "forward_message"           => "Forward this message",
    "forward_from_here"         => "Forward ticket from here",
    "forward"                   => "Forward",
    "forward_options"           => "Forward Options",
    "forwarded_to"              => "Forwarded to",
    "new_operator_reply"        => "New Operator Reply",
    "new_user_reply"            => "New User Reply",
    "add_bcc"                   => "Add BCC",
    "at_least_one_recipient"    => "Please specify at least one recipient.",
    "forwarded_message"         => "---------- Forwarded message ----------",

    /*
     * 2.3.1
     */
    "inactive_ticket_note"      => "Note: only affects tickets belonging to a status with 'Close Inactive Tickets' enabled.",
    "close_inactive_status_desc" => "Toggle to enable/disable automatic closure of inactive tickets and inactivity email reminders ('Waiting For Response' and 'Ticket Auto Closed' templates). If enabled, the time before reminders are sent can be configured via the ticket general settings.",
    "from_header_missing"       => "From: header missing from email.",
    "move_ticket"               => "Move Ticket",
    "move_ticket_step1"         => "Step 1: Choose a new brand to move ticket to",
    "move_ticket_step2"         => "Step 2: Choose a department from new brand",
    "current_record"            => "Current :record",
    "new_record"                => "New :record",
    "department_email"          => "Department Email",
    "select_a_department_email" => "Select a department email...",
    "record_public_desc"        => "Toggle to only let the :record be accessible by yourself.",
    "record_group_desc"         => "If you wish to make the :record visible to only certain operator groups, leave blank to make visible to all operators.",
    "ticket_format_desc"        => "Can contain alphanumeric characters and special characters <code>-_.+!*,</code><br />The following variables may also be used: %S for a sequential number | %N for a random number | %L for a random letter<br />Use {number} to repeat <strong>only</strong> after %N or %L, e.g. %N{4} equates to 4 random numbers, %L{3} equates to 3 random letters<br />The following <a href='http://php.net/manual/en/function.date.php' target='_blank'>PHP Date</a> Parameters prefixed with % Y,y,m,d,j,g,G,h,H,i,s",

    /*
     * 2.4.0
     */
    "macro_enabled_desc"        => "Toggle to disable the macro and prevent it from running automatically or showing in the ticket interface.",
    "macro_order_drag"          => "Drag the rows to change the order of the macros.",
    "macro_order_processed"     => ":type macros are processed in the order they appear.",
    "macro_type"                => "Macro Type",
    "macro_type_desc"           => "There are three types of macros available. Manual macros can only be ran from the ticket view or grid, automatic macros run on non-resolved tickets every hour, and hook macros run on specified ticket events. Automatic and hook macros can also be set to only run within specific schedules. Any hook macro actions won't trigger other hook macros to avoid the risk of loops.",
    "macro_run_at_most"         => "Run At Most",
    "macro_run_times"           => "times", // As in '5 times'
    "macro_run_at_most_desc"    => "Limit how many times an automatic macro can run on a single ticket, leave blank to let it run an unlimited number of times.",
    "macro_events_desc"         => "Select one or more events that the macro should run on. The conditions set below will be checked before the macro runs.",
    "macro_schedules_desc"      => "By default the macro will run 24/7, but you can select one or more help desk schedules so the macro is only active during those times.",
    "macro_condition_desc"      => "Define the conditions for which tickets this macro will be available to. By default, with no conditions, it will apply to all tickets. At least one condition must be defined for automatic macros.",
    "add_remove_headers"        => "Add/Remove Headers",
    "webhook_merge_fields"      => "Merge fields can be used in the URL and content field, <a href=\"https://docs.supportpal.com/current/Merge+Fields\">learn more</a>.",
    "webhook_ticket_required"   => "A ticket must exist for this functionality to work.",
    "not_permitted"             => "Sorry, you're not permitted to view the requested ticket(s). If you think this has been shown in error, please contact your administrator.",
    "watch"                     => "Watch",
    "unwatch"                   => "Unwatch",
    "watching"                  => "Watching",
    "internal_ticket"           => "Internal Ticket|Internal Tickets",

    /*
     * 2.4.1
     */
    "downloading"               => "Downloading...",
    "downloading_desc"          => "If the download doesn't start automatically in a few seconds, please <a href=':href'>click here</a> to access the download URL directly.",

    /*
     * 2.5.0
     */
    "belonging_to"              => "(Belonging to :name)",
    "block_user"                => "Block User",
    "merge_tickets"             => "Merge Tickets",
    "merge_tickets_confirm"     => "Please confirm you'd like to merge the following tickets:",

    /*
     * 2.5.1
     */
    "channel_account_removed"   => "The ticket channel account has been deactivated or removed, a reply cannot be posted.",

    /*
     * 2.6.0
     */
    "follow_ups"                => "Follow Ups",
    "follow_up_multiple_active" => "Multiple <a class='view-followup' style='text-decoration: underline;'>follow ups</a> are currently active on this ticket and the next scheduled will run <strong>:time</strong>.",
    "follow_up_no_actions"      => "The follow up has no actions set, please confirm if you'd like to continue.",
    "status_after_running"      => "Status After Running",
    "older_messages"            => ":count older messages",
    "holiday_single_day"        => "Single Day",
    "holiday_date_range"        => "Date Range",

);
