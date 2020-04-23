<?php

return array(

    // Pre installation check
    "requirements_failed"       => "System Requirements Failed",

    // Index
    "supportpal_installer"      => "SupportPal Installer",
    "select_language"           => "Select Language",
    "install_type"              => "Installation Type",
    "install"                   => "Fresh Install",
    "upgrade"                   => "Upgrade Existing Installation",
    "support"                   => "The license code used for this installation does not have a valid support &amp; upgrades subscription, and as such, it is not eligible to install this version of SupportPal. Please <a href='https://www.supportpal.com/manage/cart.php?gid=addons' target='_blank'>renew</a> your support &amp; updates subscription or revert your installation files.",

    // Upgrade
    "successfully_updated"      => "Congratulations, SupportPal has been successfully upgraded.",

    // Install
    // Step 1
    "step_1"                    => "Step 1 of 7: Accept EULA",
    "step_1_desc"               => "Please read our software license agreement below. By continuing, you are agreeing to the license.",
    "i_accept_and_continue"     => "I Accept and Continue",

    // Step 2
    "step_2"                    => "Step 2 of 7: System Requirements",
    "not_available"             => "Not available",
    "php_version"               => "PHP Version",
    "php_version_not_found"     => "Not available, found PHP version: :version",
    "php_extensions"            => "PHP Extensions",
    "file_writeable"            => "File Permissions",
    "file_writeable_desc"       => "All of the below should be writable by the web server. We recommend using 755 file permissions, though some systems may require 777 if the files are not owned by the web server user. Directories should be recursively writable.",

    // Step 3
    "step_3"                    => "Step 3 of 7: Database",
    "step_3_desc"               => "Please enter the details of the database that you have set up for SupportPal.",
    "hostname"                  => "Hostname",
    "port"                      => "Port",
    "port_desc"                 => "(Only change if not default port 3306)",
    "database"                  => "Database",
    "database_not_empty"        => "The database must not contain any tables.",

    // Step 4
    "step_4"                    => "Step 4 of 7: Create Tables",
    "step_4_desc"               => "The migration will be performed in the background and a verbose log written below, this may take several minutes. Once complete, please click the continue button that will appear.",

    // Step 5
    "step_5"                    => "Step 5 of 7: Operator Account",
    "step_5_desc"               => "SupportPal requires a valid license to function, please enter one below.",
    "license_desc"              => "Your SupportPal license key is 23 characters long and begins with SP-",
    "operator_desc"             => "Please create an administrator account for the operator panel by entering all of the details below.",
    "validating_license"        => "Validating License...",

    // Step 6
    "step_6"                    => "Step 6 of 7: Quick Set-Up",
    "step_6_desc"               => "Enter your company and website details below.",
    "locale_desc"               => "Set the locale settings for your system.",
    "operator_success"          => "Your administrator account has been created.",

    // Step 7
    "step_7"                    => "Step 7 of 7: Installed!",
    "successfully_installed"    => "Congratulations, SupportPal has been successfully installed.",
    "operator_panel"            => "Operator Panel",
    "help_desc"                 => "Should you need any help in configuring or using SupportPal, we have two main sources of information:",
    "submit_a_ticket"           => "Submit a Ticket",

    /*
     * 2.0.1
     */

    "post_install"              => "For the system to function properly, a cron job must be set-up. Please read our <a href='https://docs.supportpal.com/current/New+Installation#PostInstallationSteps'>post installation steps</a> for details on this and other recommend actions to improve functionality and security.",

    /*
     * 2.0.2
     */
    "required_requirements"     => "You meet :required of :total required requirements.",
    "optional_requirements"     => "You meet :optional of :total optional requirements.",
    "both_requirements"         => "You meet :required of :total_required required requirements and :optional of :total_optional optional requirements.",
    "php_version_is"            => "Your PHP Version is :version.",
    "enabled"                   => "Enabled",
    "disabled"                  => "Disabled",
    "php_settings"              => "PHP Settings",
    "ipv6_support"              => "IPv6 Support",
    "memory_limit"              => ">= 128MB Memory",
    "memory_limit_error"        => "Your memory limit is ':limit'.",
    "permission_denied"         => "Permission Denied",
    "writable"                  => "Writable",
    "help_php_version"          => "For assistance installing a new version of PHP please contact your hosting provider or server administrator.",
    "help_php_extensions"       => "PHP extensions differ depending on your server, your host and other system variable. For assistance installing missing extensions, please contact your hosting provider or server administrator.",
    "help_php_settings"         => "For additional assistance, please read <a target=\"_blank\" href=\"https://docs.supportpal.com/current/System+Requirements#PHPSettings\">PHP Settings Help</a>.",
    "disabled_functions"        => "Disabled Functions",
    "help_mysql_version"        => "For assistance installing a new version of MySQL please contact your hosting provider or server administrator.",
    "mysql_version"             => "MySQL Version",
    "mysql_version_not_found"   => "Not available, found MySQL version: :version",

    /*
     * 2.1.0
     */
    "ipv6_failure"              => "If your server has IPv6 networking support, please install the php-sockets extension.",
    "email_address_desc"        => "Enter your main company email address, this will be set up as the default sending email address and the email address on your first department. You will be able to add other email addresses later.",

    /*
     * 2.2.0
     */
    "ioncube_version"           => "ionCube Loaders version :required or greater required. Found: ':version'.",

    /*
     * 2.3.0
     */
    "png_jpg_support"           => "PNG & JPEG Support",
    "allow_url_fopen"           => "'allow_url_fopen' Enabled",
    "allow_url_fopen_failure"   => "Enable 'allow_url_fopen' in your php.ini file to use Gravatar and other features.",
    "allowed_methods"           => "HTTP Allowed Methods",
    "help_allowed_methods"      => "Your web server must permit all of the below HTTP methods. Please check our <a href='https://docs.supportpal.com/current/New+Installation#PostInstallationSteps' target='_blank'>New Installation</a> documentation for more information.",

    /*
     * 2.4.0
     */
    "mysql_server_version"      => "Server Version >= :min",
    "mysql_server_version_desc" => "MySQL :min or greater is required to run SupportPal. Found: ':version'.",
    "mysql_client_version"      => "Client Version >= :min (:mysqlnd_min for MySQLnd)",
    "mysql_client_version_desc" => "MySQL client version :min or greater (:mysqlnd_min for MySQLnd) is required to run SupportPal. Found: ':version'.",

    "upgrade_step"              => "Step :num of :total: ",
    "accept_eula"               => "Accept EULA",
    "system_requirements"       => "System Requirements",
    "update_database"           => "Update Database",
    "upgrade_complete"          => "Upgrade Complete",

    "upgrade_support"           => "Should you find any problems or need any help using the new features in SupportPal, please read our documentation or open a ticket with us.",

    /*
     * 2.5.0
     */
    "press_to_begin"            => "Please press the button below to start.",
    "locked"                    => "Install/Upgrade In-Progress",
    "locked_desc"               => "Detected a lock file (:path).\nPlease check that the installer is not already running.\n\nYou can delete this file when you're certain that another installation or upgrade is not in progress.",

    "possible_permission_issue" => "[WARNING] It seems you are running this command as root or a different user to the owner of the files. The command must be ran by the right user so the web server can also read and write to the system afterwards.",
    "wish_to_continue"          => "It is advised to change the user unless you are sure what you are doing. Do you wish to continue?",
    "error_and_empty_database"  => "There was an error. You may need to empty the database before starting again.",
    "login_with_details"        => "You can login using the details specified earlier.",
    "command_not_available"     => "Command unavailable. If you think this has been shown in error, please run 'php artisan cache:clear' and then rerun this command.",
    "read_upgrade_guide"        => "Our Upgrade Guide contains useful information regarding breaking changes and best practices for upgrading:\nhttps://docs.supportpal.com/current/Upgrade+Guide",
    "confirm_backup_taken"      => "[WARNING] Ensure you have taken a backup of your SupportPal database and application files before proceeding any further.\nPlease confirm you have taken a backup, verified it's not corrupt and are ready to proceed.",
    "error_and_revert_database" => "There was an error. Please revert the database to your backup before starting again.",

    /*
     * 2.6.0
     */
    "database_config_exists"    => "The database configuration file already exists. If you are sure the application is not already installed, please delete /config/:environment/database.php and start again.",
    "index_desc"                => "Thank you for choosing SupportPal. Please verify the installation type below is correct and then click continue.",
    "license_valid"             => "License Valid",
    "registered_to"             => "Registered To",

);
