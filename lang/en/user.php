<?php

return array(

    "user"                          => "User|Users",
    "user_details"                  => "User Details",
    "add_user"                      => "Add user",
    "account_active"                => "Account Active",
    "account_active_desc"           => "Toggle to enable and disable access to authenticated sections.",

    "operator_settings"             => "Operator Settings",
    "op_settings_dept_desc"         => "Select which departments the operator can view and reply to tickets in.",

    "organisation"                  => "Organisation|Organisations",
    "members"                       => "Member|Members",
    "owner"                         => "Owner",
    "manager"                       => "Manager",
    "access_level"                  => "Access Level",
    "access_level_desc"             => "Define the access level for the user in the organisation, based on the following schedule:<br /><strong>Manager</strong> - Can view tickets opened by all users in the organisation and manage users in the organisation<br /><strong>User</strong> - Can view tickets only opened by self",
    "manage_organisation"           => "Manage Organisation",
    "leave_organisation"            => "Leave Organisation",
    "user_membership"               => "User membership",
    "transfer_ownership"            => "Transfer ownership",
    "transfer_ownership_desc"       => "As the current owner of the organisation, you cannot be removed as a manager and only you can delete the organisation. You may transfer the ownership of the organisation to someone else, be aware that this action cannot be reversed.",
    "transfer_ownership_operator"   => "Only the owner can delete the organisation and cannot be removed from it. Use this option to change the ownership to another user in the organisation.",
    "start_typing_name"             => "Start typing a name...",
    "organisation_add_user"         => "Add user to organisation",
    "organisation_desc"             => "Each organisation can have <strong>managers</strong>, who can manage users and read and reply to other's tickets, and <strong>users</strong>, who can open tickets, but can't read or reply to other's tickets.",
    "organisation_operator_desc"    => "Add existing users to this organisation by clicking \"Add User\" and searching for their name, note that adding a user will remove any links they have with another organisation.",
    "organisation_user_desc"        => "<strong>Manager</strong> - Can manage other users and view &amp; reply to other user's tickets.<br /><strong>User</strong> - Can only open tickets on behalf of organisation and reply to own tickets.",
    "send_confirmation_email"       => "Send confirmation email to user",
    "send_password_reset"           => "Send Password Reset Link",

    "profile"                       => "Profile",
    "address"                       => "Address",
    "city"                          => "City",
    "state"                         => "State",
    "postcode"                      => "Postcode",
    "phone"                         => "Phone Number",
    "website"                       => "Website URL",

    "login"                         => "Login",
    "remember_me"                   => "Remember me",
    "logout"                        => "Logout",
    "return_to_login"               => "Return to Login",

    "user_register_disabled"        => "Sorry, public user registration is currently disabled.",
    "success_register"              => "Account successfully registered!",
    "success_register_desc"         => "Thank you for registering your account, you will just need to confirm your email address before you can login. We will shortly send you an email that contains a confirmation link to finish the process.",
    "register_now"                  => "Register now",
    "register"                      => "Register",
    "register_account"              => "Register Account",
    "register_confirm"              => "Registration Confirmation",
    "register_confirm_desc"         => "Thank you for confirming your email, please enter a password for your account below to finish your account set up.",
    "confirmation_success"          => "Confirmation was successful!",
    "confirmation_unsuccessful"     => "Confirmation was unsuccessful.",
    "thank_you_confirm"             => "Thank you for confirming your account. Please continue to <a href=':route'>login</a>.",
    "signed_up"                     => "Signed up",
    "last_active"                   => "Last active",

    "reset_request"                 => "Password reset request received",
    "reset_request_desc"            => "We will shortly send you an email that contains a confirmation link that will then let you reset the password.",
    "forgot_password"               => "Forgot password?",
    "password_reset"                => "Password Reset",
    "password_reset_confirm"        => "Reset Confirmation",
    "reset_password"                => "Reset Password",
    "password_reset_complete"       => "Reset Complete",
    "set_password"                  => "Set a password",
    "only_enter_to_change"          => "Only enter to change",
    "success_pass_reset"            => "Your password has successfully been reset. Please continue to <a href=':route'>login</a>.",
    "please_set_password"           => "Please set your new password below.",
    "emailed_pwd_reset_link"        => "You have been emailed a reset link.",
    "operator_email_not_found"      => "Operator email address not found.",
    "missing_email_or_reset"        => "Missing email address or reset token.",

    "firstname"                     => "First Name",
    "lastname"                      => "Last Name",
    "formatted_name"                => "Formatted Name",
    "country"                       => "Country",
    "avatar"                        => "Avatar",
    "generate_password"             => "Generate Random Password",
    "confirm_password"              => "Confirm Password",

    "confirmed"                     => "Confirmed",
    "confirmed_desc"                => "Toggle to enable and disable access to authenticated sections.",
    "unconfirmed"                   => "Unconfirmed",

    "group"                         => "User Group|User Groups",
    "group_members"                 => "Group Members",
    "operator_group"                => "Operator Group|Operator Groups",
    "add_group"                     => "Add to Group",

    "customfield"                   => "User Custom Field|User Custom Fields",
    "customfield_order"             => "Drag the rows to change the order custom fields appear to users.",

    "role"                          => "Role|Roles",

    "operator_login_log"            => "Operator Login Log",
    "system_activity_log"           => "System Activity Log",
    "activity_log"                  => "Activity Log",

    "mass_email"                    => "Send Mass Email",
    "send_email"                    => "Send Email",
    "choose_template"               => "Choose template...",

    "ldap_account"                  => "LDAP Account|LDAP Accounts",
    "ldap_operator_desc"            => "Searching for an existing operator, or create a new one.",
    "ldap_server"                   => "LDAP Server",
    "ldap_server_desc"              => "The server hostname. Alternatively, you can specify the full LDAP URI. For example: ldaps://ldap.server:1234/ will connect via SSL to the port 1234.",
    "ldap_username"                 => "LDAP Username",
    "ldap_username_desc"            => "The username that the operator will use to login to the helpdesk (their LDAP username.)",
    "ldap_rdn"                      => "LDAP RDN or DN",
    "ldap_rdn_desc"                 => "The distinguished name for the LDAP username, for example: cn=Sample User,ou=people,dc=example,dc=com",
    "ldap_details"                  => "LDAP Details",
    "ldap_extension_missing"        => "The php-ldap extension is not currently loaded. Users will not be able to login via LDAP.",

    "operator_details"              => "Operator Details",

    "email_notifications"           => "Email Notifications",
    "email_notifications_desc"      => "The email notifications that will be received from the system.",

    "enable_ldap"                   => "Enable LDAP Login",
    "enable_ldap_desc"              => "If you use LDAP, you can enable it for operator login. After enabling, go to the LDAP Accounts settings page to configure it.",
    "user_reg_enabled"              => "User Registration Enabled",
    "user_reg_enabled_desc"         => "Allow new users to register an account in the frontend.",
    "user_reg_captcha"              => "User Registration Captcha",
    "user_reg_captcha_desc"         => "If the captcha should be shown to new users registering.",
    "user_name_format"              => "Name Format",
    "first_last"                    => "First Last",
    "last_first"                    => "Last First",
    "first_l"                       => "First L.",
    "f_last"                        => "F. Last",
    "password_length"               => "Password Length",
    "password_length_desc"          => "The minimum length in characters for the password when registering or updating an account.",
    "password_strength"             => "Password Strength",
    "password_strength_desc"        => "Select which characters are required when registering a user password.",
    "password_str_must_contain"     => "Must contain:",
    "password_str_letters"          => "At least one alphabetic character.",
    "password_str_digits"           => "At least one digit.",
    "password_str_case"             => "Both upper and lowercase characters.",
    "password_str_symbols"          => "At least one symbol.",

    "load_template"                 => "Load Template",
    "load_template_desc"            => "Choosing a template will replace the current email subject and message.",
    "clear_template"                => "Clear Template",

    "personal_settings"             => "Personal Settings",
    "personal_settings_desc"        => "Update your own profile and modify settings that relate only to your operator account.",
    "two_fa"                        => "Two-Factor Authentication",
    "notifications"                 => "Notifications",
    "two_fa_success_disabled"       => "Two-factor authentication has successfully been disabled.",
    "two_fa_success_enabled"        => "Two-factor authentication has successfully been enabled.",
    "two_fa_incorrect"              => "The code was incorrect, ensure that the code you entered is correct and that the server time is in sync.",
    "two_fa_enabled"                => "2FA Enabled",
    "two_fa_disable"                => "To disable 2FA, please verify below.",
    "two_fa_enable"                 => "To enable 2FA, please set up the account on your phone using the details below and verify.",
    "verify_code"                   => "Verify Code",
    "verify_and_disable"            => "Verify & Disable",
    "verify_and_enable"             => "Verify & Enable",
    "verify_code_desc"              => "Enter a valid code for your 2FA account to disable 2FA authentication.",
    "qr_code"                       => "QR Code",
    "two_fa_code"                   => "2FA Code",
    "two_fa_secret"                 => "2FA Secret",
    "two_fa_secret_desc"            => "Please store this somewhere safe as you will need this to re-add the authenticator account to your phone should you lose access.",
    "two_fa_verify_desc"            => "Download and install one of the following applications and scan the QR code or enter the secret key. This will set up your account on your device, you will then be able to view the account and it will generate a 6 digit code that you must enter above to verify and complete the set up. Please ensure to click verify before the code expires. Your server time will need to be in sync with an NTP server to function properly.",
    "display_notifications"         => "Display Notifications",
    "display_notifications_desc"    => "The system will poll for new tickets, replies and other operators logging in while you have the operator panel open. You can choose between desktop notifications or in-browser notifications, or disabling it completely.",
    "desktop_notifications"         => "Desktop Notifications",
    "browser_notifications"         => "Browser Notifications",
    "operator_template"             => "Operator Template",

    "search_for_user"               => "Search for user...",
    "select_operator"               => "Select an operator...",
    "select_group"                  => "Select a group...",

    "your_ip_has_been_banned"       => "Your IP has been banned.",
    "password_reset_error"          => "User account or reset token not found, please verify details are correct or try to reset again.",
    "password_reset_not_found"      => "User not found or password cannot be reset.",
    "password_reset_expired"        => "Token has expired, please try to reset again.",
    "password_reset_invalid"        => "Invalid token, please verify details are correct or try to reset again.",
    "password_reset_success"        => "Password reset successfully!",
    "password_reset_already"        => "You have already confirmed your account, you may proceed to login.",
    "password_not_valid"            => "Passwords not valid or not the same.",
    "invalid_reset_request"         => "Invalid password reset request.",

    "simpleauth_token_expired"      => "The access token has expired.",
    "simpleauth_token_invalid"      => "The access token provided is invalid.",
    "simpleauth_invalid_guard"      => "Cannot login as not a valid user.",
    "simpleauth_not_allowed"        => "Operators cannot currently login with SimpleAuth.",
    
    /*
     * 2.0.2
     */
    
    "email_history"                 => "Email History",
    "view_email"                    => "View Email",

    "ban_after_count"               => "Ban IP after Failed Logins",
    "ban_after_count_user"          => "The number of failed logins after which the user IP is banned, and they are no longer able to login to the frontend for the configured amount of time. Setting to 0 will disable IP bans completely.",
    "ban_after_count_operator"      => "The number of failed logins after which the user IP is banned, and they are no longer able to login to the operator panel or API for the configured amount of time. Setting to 0 will disable IP bans completely.",
    "ban_length"                    => "Length of IP Ban",
    "ban_length_desc"               => "The length of the IP ban when they reach the configured number of failed logins in a single day.",
    "n_failed_logins"               => ":count failed logins within 24 hours",
    
    /*
     * 2.0.3
     */
    "taking_a_break"                => "Taking a break...",
    "operator_session_expired"      => "You were inactive for a while or logged in on another device so I took a quick nap. Please wake me up by logging back in.",
    "log_back_in"                   => "Log Back In",
    "all_users"                     => "All Users",
    "all_operators"                 => "All Operators",
    "email_per_batch"               => "Emails Per Batch",
    "email_per_batch_desc"          => "The number of emails that are sent together at a time.",
    "batch_interval"                => "Batch Interval",
    "batch_interval_desc"           => "The gap between the email batches in minutes, 1 minute is the minimum.",
    "select_user_groups"            => "Select user/operator groups or type in email addresses...",
    "mass_email_sending_time"       => "It will take approximately :time to send all emails.",
    "organisations_enabled"         => "Organisations Enabled",
    "organisations_enabled_desc"    => "By default, users can add an organisation to their profile and add other users to that organisation. If you are only dealing with consumers, you can disable the organisation option and hide it from the interface.",
    "manager_notifications"         => "Organisation Manager Notifications",
    "manager_notifications_desc"    => "If managers of organisations should receive email updates of tickets opened by other users in the organisation by default. Each manager will have their own personal option for this in their profile and can override this setting.",
    "manager_email_notifications_desc" => "If they should receive email notifications of updates to tickets opened by other users in the organisation.",
    "organisation_notifications_desc" => "If you'd like to receive email notifications of updates to tickets opened by other users in your organisation.",
    "select_operator_group_desc"    => "Please select at least one operator group for this operator.",
    
    /*
     * 2.1.0
     */
    "organisation_customfield"      => "Organisation Custom Field|Organisation Custom Fields",
    "recent_users"                  => "Recent Users",
    "recent_organisations"          => "Recent Organisations",
    "group_brand_desc"              => "Select which brands the operators in this group will be able to view, create and delete (depending on permissions) tickets and other content.",
    "select_operators"              => "Select operator(s)...",
    "select_groups"                 => "Select group(s)...",
    "group_department_desc"         => "Assign all members of this group to departments, operators can also be assigned individually in the department settings.",
    "op_settings_group_dept"        => "Assigned to via operator groups:",
    "op_settings_group_dept_desc"   => "These departments are inherited automatically from the operator groups selected above. To assign via an operator group, edit the operator group or department settings.",
    "op_settings_individual_dept"   => "Assigned to individually:",
    "op_settings_individual_dept_desc" => "These departments are in addition to any departments the operator is assigned to via their groups above.",
    "also_registered_other_brand"   => "This user is also registered in the :brands brand.|This user is also registered in the :brands brands.",
    "signature"                     => "Signature|Signatures",
    "signature_desc"                => "Create personal ticket signatures, with the option to customise based on the brand/department of the ticket. The default signature is used when a signature for a specific department and/or brand cannot be found.",
    "operator_signature"            => "Operator Signature|Operator Signatures",
    "ticket_signature_desc"         => "Set the operator's default ticket signature.",
    "operator_signature_desc"       => "Further signatures for specific departments and/or brands can be set in the <a href=':route' target='_blank'>Operator Signatures</a> section.",
    "view_organisation"             => "View Organisation",
    "new_owner"                     => "New Owner",
    "operator_role"                 => "Operator Role|Operator Roles",
    "manage_users"                  => "Manage Users",
    "manage_organisations"          => "Manage Organisations",
    "manage_operators"              => "Manage Operators",
    "user_profile"                  => "User Profile",
    "organisation_access_level"     => "Organisation Access Level",
    "organisation_notifications"    => "Organisation Notifications",
    "organisation_users"            => "Organisation Users",
    "organisation_users_ticket"     => "Above is a list of your organisation's managers that will be also emailed updates about this ticket.",

    /*
     * 2.1.1
     */
    "change_password"               => "Change Password",
    "current_password"              => "Current Password",
    "new_password"                  => "New Password",
    "personal_confirm_password"     => "Please confirm your current password to set a new password.",
    "operator_confirm_password"     => "Please confirm your password to make changes to the operator account.",

    /*
     * 2.1.2
     */
    "search_for_user_operator"      => "Search for user/operator...",
    "two_fa_personal_settings"      => "The operator can enable 2FA in their personal settings.",

    /*
     * 2.2.0
     */
    "user_name_format_desc"         => "The format that is used to display user names throughout the system.",
    "operator_name_format_desc"     => "The format that is used to display operator names throughout the system.",
    
    /*
     * 2.3.0
     */
    "remove_from"                   => "Remove From :record?",
    "remove_from_warn"              => "This will permanently remove the <strong>:name</strong> user from the :record.",

    /*
     * 2.3.1
     */
    "social_login"                  => "Social Login",
    "social_login_provider_desc"    => "Allow users to register and log in using their :provider account.",
    "social_login_provider_docs"    => "Please check over our documentation for setting up <a href=':link'>:provider Login</a>.",
    "facebook_app_id"               => "App ID",
    "facebook_app_secret"           => "App Secret",
    "facebook_redirect_url"         => "The following URL <strong>must</strong> be entered for the Facebook Login 'Valid OAuth redirect URIs':",
    "google_client_id"              => "Client ID",
    "google_client_secret"          => "Client Secret",
    "google_redirect_url"           => "The following URL <strong>must</strong> be entered for the Google 'Authorized redirect URIs':",
    "steam_api_key"                 => "API Key",
    "twitter_consumer_key"          => "Consumer Key",
    "twitter_consumer_secret"       => "Consumer Secret",
    "twitter_redirect_url"          => "The following URL <strong>must</strong> be entered for the Twitter Application 'Callback URL':",
    "login_via"                     => "Log in via :provider",
    "register_with"                 => "Register with :provider",
    "idp"                           => "IdP",
    "social_linking_login"          => "Please log in to complete linking of your social account.",
    "social_linking_register"       => "Please fill in the details below to complete registration of your account. Your social account will be automatically linked.",
    "already_registered"            => "Already registered?",
    "linked_accounts"               => "Linked Accounts",
    "unlink_account"                => "Unlink :record Account",
    "unlink_account_warning"        => "Unlinking the social account will mean it can no longer be used to log in directly to the account.",
    "failed_login"                  => "Failed Login|Failed Logins",
    "confirmaton_token_expired"     => "Token has expired, please try to register again.",
    "confirmaton_token_invalid"     => "Invalid token, please verify details are correct or try to register again.",
    "unconfirmed_account"           => "Your account is currently unconfirmed, please check your email for a confirmation link to complete your account registration.",
    "resend_confirmation"           => "<strong><a href=':link'>Click here</a></strong> to be sent a new confirmation email.",
    "resend_confirmation_sent"      => "A new confirmation email has been queued and will be sent to you shortly.",

    /*
     * 2.4.0
     */
    "must_have_permission"          => "must have \":permission\" permission",
    "deleted_user"                  => "Deleted User",
    "access_level_not_owner"        => "It is not possible to change the access level of organisation owners. Transfer organisation ownership to another user first by viewing the organisation and clicking the 'Users' tab.",

    /*
     * 2.4.1
     */
    "select_or_new_organisation"    => "Select an existing or enter a new organisation...",

);
