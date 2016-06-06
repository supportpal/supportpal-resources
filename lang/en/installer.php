<?php

return [

    // Pre installation check
    "requirements_failed"       => "System Requirements Failed",

    // Index
    "supportpal_installer"      => "SupportPal Installer",
    "index_desc"                => "Thank you for choosing SupportPal. Please verify the installation type below is correct and then continue.",
    "select_language"           => "Select Language:",
    "begin_installation"        => "Begin Installation",
    "install_type"              => "Installation Type",
    "install"                   => "Fresh Install",
    "upgrade"                   => "Upgrade Existing Installation",
    "support"                   => "The license code used for this installation does not have a valid support &amp; upgrades subscription, and as such, it is not eligible to install this version of SupportPal. Please <a href='https://www.supportpal.com/manage/cart.php?gid=addons' target='_blank'>renew</a> your support &amp; updates subscription or revert your installation files.",

    // Upgrade
    "upgrade_step_1"            => "Step 1 of 3: System Requirements",
    "upgrade_step_2"            => "Step 2 of 3: Update Database",
    "upgrade_step_3"            => "Step 3 of 3: Upgrade Complete",
    "upgrade_step_3_support"    => "Should you find any problems or need any help in configuring/using the new features in SupportPal, you can check our documentation, post on our forums or open a ticket with us.",
    "upgrade_step_3_continue"   => "To continue using SupportPal, log in to the operator panel here",
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
    "file_writeable"            => "Files/Directories Writable",
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
    "diagnostic_desc"           => "To help improve our products, we would like to receive diagnostic data from your installation when something goes wrong. You may disable this below if you do not wish to send us data.",
    "operator_success"          => "Your administrator account has been created.",

    // Step 7
    "step_7"                    => "Step 7 of 7: Installed!",
    "successfully_installed"    => "Congratulations, SupportPal has been successfully installed.",
    "operator_panel"            => "Operator Panel",
    "post_install"              => "We recommend carrying out the detailed <a href='http://docs.supportpal.com/display/DOCS/New+Installation#NewInstallation-PostInstallationSteps'>post installation steps</a> for better functionality and security.",
    "help_desc"                 => "Should you need any help in configuring or using SupportPal, we have three main sources of information:",
    "submit_a_ticket"           => "Submit a Ticket",

];
