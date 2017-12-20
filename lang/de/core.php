<?php

return array(

    // SupportPal
    "product_name"              => "HelpDesk",
    "slogan"                    => "Kundensupport, clever und einfach.",
    "operator_panel"            => "Mitarbeiter-Bereich",
    "helpdesk_software"         => "HelpDesk von",
    "carefully_crafted"         => "Erstellt von",
    "welcome"                   => "Willkommen im HelpDesk",
    "welcome_desc"              => "You've made a smart decision. Click start to begin a quick product tour of our settings and features.",

    // Dashboard
    "welcome_back"              => "Willkommen zurück",
    "search_placeholder"        => "Helpdesk durchsuchen...",
    "submit_ticket"             => "Ticket erstellen",
    "submit_ticket_desc"        => "Senden Sie unserem Team ein neues Ticket - Wir antworten schnellstmöglich.",
    "track_ticket"              => "Ticket verfolgen",
    "track_ticket_desc"         => "Nicht registriert? Hier können Sie per E-Mail und Ticketnummer Ihren Status einsehen.",
    "my_tickets"                => "Tickets",
    "my_tickets_desc"           => "Verfolgen Sie Ihre Tickets - Aktive und geschlossene.",
    "no_modules"                => "Keine Module aktiviert.",
    "search_results"            => "Suchergebnisse",
    "found_results"             => ":total Ergebnisse für die Suche nach",

    // Maintenance
    "maintenance"               => "Derzeit führen wir Wartungsarbeiten durch",
    "maintenance_desc"          => "Unser HelpDesk ist derzeit nicht erreichbar, da wir Wartungsarbeiten durchführen. Wir danken für Ihre Geduld.",
    "maintenance_active"        => "Wartungsmodus ist aktiv.",

    // About
    "development_license"       => "Entwickler-Lizenz!",
    "development_license_desc"  => "Diese Installation nutzt eine Entwickler-Lizenz und darf nur auf gültigen RFC1918-Adressen genutzt werden. Es ist verboten diese Lizenz in einer produktiv zu nutzen.",
    "license_status"            => "Lizenz-Status",
    "license_code"              => "Lizenz-Code",
    "change_license"            => "Lizenz ändern",
    "license_info"              => "Lizenz-Information",
    "license_owner"             => "Lizenz-Inhaber",
    "license_created"           => "Erstellungsdatum der Lizenz",
    "license_type"              => "Lizenz-Art",
    "no_branding"               => "Ohne \"Branding\"",
    "branding"                  => "Mit \"Branding\"",
    "license_expires"           => "Ablaufdatum der Lizenz",
    "license_valid_ip"          => "Gültige Lizenz-IP(s)",
    "license_valid_domain"      => "Gültige Lizenz-Domain(s)",
    "support_status"            => "Support-Status",
    "support_expires"           => "Ablaufdatum des Support",
    "version_info"              => "Version-Informationen",
    "installed_version"         => "Installierte Version",
    "available_version"         => "Verfügbare Version",
    "monthly_product"           => "* Ihr Ablaufdatum passt sich automatisch (auf Monatsbasis) an, sobald ausstehende Rechnungen bezahlt wurden.",

    // API Tokens
    "api_token"                 => "API Schlüssel|API Schlüssel",
    "token"                     => "Schlüssel",
    "regenerate_token"          => "Schlüssel neu generieren",
    "access_level"              => "Zugriffslevel",
    "read_write"                => "Lesen &amp; Schreiben",
    "read_only"                 => "Lesen",

    // Spam Rules & Filtering
    "spam_rule"                 => "SPAM Regel|SPAM Regeln",
    "containing_text"           => "enthaltener Text",
    "containing_text_desc"      => "Please enter a string (particular word to ban or e-mail address), all strings are case-insenstive. <br />The string can also take advantage of <a href='http://www.regular-expressions.info/'>regular expressions</a>, an example of this would be: 's.{1,}p.{1,}a.{1,}m'. You do not need to worry about delimiters.",
    "ip_filtering"              => "IP-Filter",
    "content_filtering"         => "Inhalts-Filter",
    "filter_description"        => "Bitte wählen Sie einen passenden Inhalts-Filter",
    "filter_new_message"        => "Neue Ticket-Nachricht (von Benutzer)",
    "filter_new_comment"        => "Neuer Self-Service Kommentar (von Benutzer)",
    "filter_user_login"         => "Benutzer-Login",
    "filter_operator_login"     => "Mitarbeiter-Login",
    "filter_api_access"         => "API-Zugriff",
    "content"                   => "Inhalt",
    "sender"                    => "Absender",
    "content_sender"            => "Inhalt & Empfänger",

    // Company
    "company"                   => "Firma|Firmen",
    "company_name"              => "Firmenname",
    "your_company"              => "Ihre Firma",

    // Email
    "default_email_addr"        => "E-Mail (Standard)",
    "default_email_addr_desc"   => "Die Adresse, die als Absender der meisten Systemmails genutzt wird.",
    "include_operator_name"     => "Name anzeigen",
    "include_operator_name_desc"=> "Der Mitarbeiter-Name wird im Absender-Feld angezeigt. Z.b.: Von: Max Mustermann (Musterfirma)",
    "include_dept_name"         => "Abteilung anzeigen",
    "include_dept_name_desc"    => "Der Abteilungsname wird im Absender-Feld angezeigt. Bitte beachten Sie, dass dadurch automatisch ein neues Ticket erstellt wird, sobald die Abteilung später geändert wird.",
    "global_email_header"       => "E-Mail Header (global)",
    "global_email_header_desc"  => "Dieser Header wird allen ausgehenden E-Mails hinzugefügt. HTML ist erlaubt.",
    "global_email_footer"       => "E-Mail Footer (global)",
    "global_email_footer_desc"  => "Dieser Footer wird allen ausgehenden E-Mails hinzugefügt. HTML ist erlaubt.",
    "email_template"            => "E-Mail Template|E-Mail Templates",
    "email_log"                 => "E-Mail Protokoll",
    "email_queue"               => "E-Mail Warteschlange",
    "email_queue_desc"          => "Im Folgenden finden Sie die ausstehenden E-Mails...",
    "email_method"              => "Versandart",
    "php_mail_function"         => "PHP mail() Funktion",
    "smtp"                      => "SMTP",
    "smtp_host"                 => "SMTP Host",
    "smtp_port"                 => "SMTP Port",
    "smtp_encryption"           => "SMTP Verschlüsselung",
    "smtp_requires_auth"        => "Authentifizierung erforderlich",
    "smtp_username"             => "SMTP Benutzer",
    "smtp_password"             => "SMTP Passwort",
    "ssl"                       => "SSL",
    "tls"                       => "TLS",
    "validate_smtp"             => "SMTP testen",
    "email_content"             => "Inhalt der E-Mail",
    "email_content_desc"        => "Geben Sie einen Betreff und Inhaltstext für diese Vorlage ein. Sie können für unterschiedliche Sprachen eigene Inhalte definieren. Sollte für eine Sprachversion kein eigener Inhalt hinterlegt sein, wird die Voreinstellung genutzt.",
    "outgoing"                  => "Ausgehend",
    "incoming"                  => "Ankommend",
    "incoming_spam"             => "Ankommend (Abgelehnt - SPAM)",
    "incoming_throttled"        => "Ankommend (Abgelehnt - Gedrosselt)",
    "email_subject"             => "E-Mail Betreff",
    "twig_html_warning"         => "Twig-Syntax ist innerhalb von HTML-Tags/Attributen nicht erlaubt und wird beim Speichern entfernt.",

    // Modules
    "modules"                   => "Modul|Module",
    "modules_desc"              => "Im Folgenden finden Sie eine Übersicht der verfügbaren Module. Wählen Sie \"Bearbeiten\", um die Einstellunge anzupassen.",
    "module_disable"            => "Deaktivierte Module werden Disabled im Front- und Backend ausgeblendet.",

    // Scheduled tasks
    "scheduled_task"            => "Geplante Aufgabe|Geplante Aufgaben",
    "interval_desc"             => "Bestimmen Sie, wie häufig eine Aufgabe ausgeführt wird.",
    "cron_settings"             => "Cron-Job Einstellung",
    "cron_makesure"             => "Bitte erstellen Sie einen Corn-Job mit folgendem Inhalt: ",
    "cron_running"              => "Aktiv",
    "cron_not_running"          => "Inaktiv",
    "task_ran"                  => "Die Aufgabe wurde erfolgreich manuell ausgeführt.",
    "task_failed"               => "Beim manuellen Ausführen der Aufgabe ist ein Fehler aufgereten.",

    // Plugins
    "plugins"                   => "Erweiterung|Erweiterungen",
    "installed_plugins"         => "Installierte Erweiterungen",
    "visit_plugin"              => "Erweiterung anzeigen",
    "uninstall_plugin_warning"  => "Die Deinstallation löscht alle zugehörigen Dateien und Daten der Erweiterung. Wir empfehlen die Erweiterung lediglich zu deaktivieren.",

    // Messages
    "last_activity"             => "Letzt Aktivität",
    "send_to"                   => "Gesendet an",
    "inbox"                     => "Posteingang",
    "compose"                   => "Verfasssen",

    // Utilities
    "utilities"                 => "Extras",

    // System Cleanup
    "system_cleanup"            => "System aufräumen",
    "system_cleanup_desc"       => "Benutzen Sie die folgenden Optionen, um nicht mehr benötigte Daten zu löschen.",
    "files"                     => "Dateien",
    "files_desc"                => "Die folgenden Elemente sind als Dateien auf dem Server gespeichert.",
    "logs"                      => "Protokolle",
    "logs_desc"                 => "Die folgenden Elemente sind als Datensätze in der Datenbank gespeichert.",
    "empty"                     => "Leeren",
    "prune"                     => "Säubern",
    "total_records"             => "Datensätze/Dateien",
    "system_cache"              => "System-Cache",
    "system_cache_desc"         => "Hier werden Dateien gespeichert, die nicht häufig angepasst werden, um das System zu beschleunigen.",
    "template_cache"            => "Vorlagen-Cache",
    "template_cache_desc"       => "Gespeicherte Vorlagen der Software.",
    "attachments_desc"          => "Hier sind Anhänge der Ticket auf dem Server gespeichert. Sie können Speicherplatz schaffen, indem Sie Anhänge, die vor einem entsprechenden Datum liegen, säubern.",
    "system_activity_log_desc"  => "Hier sind alle Aktivitäten der Benutzer, Mitarbeiter und des Systems gespeichert. Sie können Speicherplatz schaffen, indem Sie Datensätze, die vor einem entsprechenden Datum liegen, säubern.",
    "email_log_desc"            => "Hier sind alle ein- und ausgehenden E-Mails gespeichert. Sie können Speicherplatz schaffen, indem Sie E-Mails, die vor einem entsprechenden Datum liegen, säubern.",
    "operator_login_log_desc"   => "Hier werden alle Mitarbeiter-Logins (inkl. IP) gespeichert. Sie können Speicherplatz schaffen, indem Sie Datensätze, die vor einem entsprechenden Datum liegen, säubern.",

    // Captcha
    "captcha"                   => "Sicherheitsabfrage",
    "show_captcha"              => "Sicherheitsabfrage anzeigen",

    // Widgets
    "dashboard"                 => "Übersicht",
    "add_remove_widget"         => "Widget hinzufügen/entfernen",
    "todo_record"               => "\"To Do\" hinzufügen",
    "enable_tour"               => "Einführen ansehen",

    // Product Tour
    "dashboard_desc"            => "Your own personal dashboard. Widgets can be removed, minimised and moved around!",
    "private_messages"          => "Private Messages",
    "messages_desc"             => "Private Messages serve as a useful way for 1:1 conversations with other help desk operators.",
    "configure"                 => "Configure Your Help Desk",
    "configure_desc"            => "SupportPal contains a number of settings enabling you to configure the help desk to your own preference.",
    "company_name_desc"         => "Your company name is used for all correspondence with users.",
    "default_email"             => "Default Email Address",
    "default_email_desc"        => "The default email address to use for all outbound correspondence to users.",
    "dept_settings_desc"        => "We realise that departments within your organisation operate differently. Department settings enable you to override global settings.",
    "department_desc"           => "Departments are just like those within your organisation. Useful for ensuring customer enquiries get to the correct staff member(s) quickly.",
    "department_email"          => "Department Email Addresses",
    "dept_email_desc"           => "Multiple email addresses can be assigned to a given department. Email collection is performed against the configured addresses to pull emails from your customers into the help desk.",
    "dept_tmpl"                 => "Department Email Templates",
    "dept_tmpl_desc"            => "Sometimes you may wish to change, or completely disable, department email templates. You can define department specific email templates and enable them here.",
    "schedule_task_desc"        => "Scheduled Tasks are used to automate various processes within SupportPal, including email-based ticket collection.",
    "schedule_task_2"           => "Scheduled Tasks require a cron job to be created in order to operate. The interval for each task performed by the cron job can be adjusted via the edit form.",
    "schedule_task_cron"        => "Cron Job",
    "schedule_task_3"           => "Create a cron job similar to the example provided below on your server for the scheduled tasks to run automatically.",
    "ticket_channel_desc"       => "Ticket Channels are methods for creating tickets. They can be easily extended to include your own channels, for example tickets opened via Instagram.",
    "ticket_channel_2"          => "We provide a number of default channels. You may wish to activate and configure the Facebook and Twitter channels to collect tickets generated via social media.",
    "user_desc"                 => "Users who interact with your system are displayed here. You can add, edit, and delete users as appropriate.",
    "organisation_desc"         => "Users can be assigned to organisations enabling them access to tickets opened by other users within their organisation.",
    "operator_desc"             => "Other members of staff can be added as operators here, along with managing which departments they are assigned to.",
    "ticket_desc"               => "The ticket grid contains a collection of all tickets relevant to you.",
    "ticket_desc2"              => "The ticket grid can be ordered, filtered and its column layout adjusted to your preference.",
    "ticket_toolbar"            => "Tool Bar",
    "ticket_desc3"              => "Bulk actions can be performed on tickets using the ticket tool bar.",
    "tour_complete"             => "Tour Complete!",
    "tour_complete_desc"        => "Thank you for using SupportPal.<br /><br />We now recommend that you follow the getting started guide below to configure your help desk.",

    // IP Ban
    "ip_ban_time_desc"          => "Ob die Sperre temporär oder dauerhaft ist.",
    "expiry"                    => "Ablaufdatum",
    "expired"                   => "Abgelaufen",
    "expiry_time"               => "Ablaufdatum",
    "expiry_time_desc"          => "Das Datum/Uhrzeit van die Sperre aufgehoben wird. Wird kein Datum oder ein Datum in der Vergangenheit hinterlegt, gilt die Sperre automatisch für 24 Stunden.",
    "permanent"                 => "Permanent",

    // Languages
    "no_enabled_languages"      => "Die Aktualisierung von :item ist fehlgeschlafen. Mindestens eine Sprache muss aktiviert sein.",

    // General Settings
    "website"                   => "Webseite",
    "locale"                    => "Lokalisierung",
    "simpleauth"                => "SimpleAuth",
    "admin_folder"              => "Admin-Pfad",
    "admin_folder_desc"         => "Hier kann der Pfad zum Mitarbeiterlogin angepasst werden. Wir empfehlen die Änderung.",
    "enable_ssl"                => "SSL aktivieren",
    "force_ssl"                 => "SSL für Mitarbeiter",
    "force_ssl_desc"            => "SSL wird für den Mitarbeiter-Login erzwungen.",
    "frontend_template"         => "Frontend-Vorlage",
    "operator_template"         => "Mitarbeiter-Vorlage",
    "maintenance_mode"          => "Wartungs-Modus",
    "maintenance_mode_desc"     => "Hierdurch wird der HelpDesk deaktiviert und ein Wartungshinweis angezeigt. Sie finden die Vorlage unter: \"resources/templates/frontend/[template]/core/maintenance.twig\" .",
    "default_user_country"      => "Land",
    "default_user_country_desc" => "Voreinstellung bei der Benutzerregistrierung.",
    "system_timezone"           => "Zeitzone",
    "system_timezone_desc"      => "Voreinstellung für das System. Mitarbeiter können Ihre Zeitzone anpassen.",
    "date_format"               => "Datumsformat",
    "date_format_desc"          => "Voreinstellung für das System.",
    "time_format"               => "Zeitformat",
    "time_format_desc"          => "Voreinstellung für das System.",
    "simpleauth_key"            => "SimpleAuth-Schlüssel",
    "simpleauth_key_desc"       => "Der Single-Sign-On Schlüssel. Mindestlänge 16 Zeichen.",
    "simpleauth_operators"      => "Für Mitarbeiter aktivieren",
    "simpleauth_operators_desc" => "Mitarbeiter können sich per SimpleAuth im System anmelden.",
    "frontend_logo"             => "Frontend-Logo",
    "base_url"                  => "System-URL",
    "base_url_desc"             => "Geben Sie vollständige Adresse des Systems an.",
    "debug"                     => "Debug",
    "debug_mode"                => "Debug-Modus",
    "debug_mode_desc"           => "Aktivieren Sie den Debug-Modus um Fehler auszugeben. Bitte aktivieren Sie dies nur, wenn Sie wissen, was Sie tun, oder Sie vom Support dazu aufgefordert werden. Fehler werden ansonsten auchunter \"/storage/logs\" gespeichert.",
    "pretty_urls"               => "Sprechende URLs",
    "pretty_urls_desc"          => "Entfernt index.php  aus den Adressen. Bitte nur aktivieren, sofern Sie den Mitarbeiter-Bereich ohne index.php aufrufen könenn. Voraussetzungen: mod_rewrite.",
    "send_diagnostic"           => "Diagnosedaten schicken",
    "send_diagnostic_desc"      => "Um dem Support zu helfen kann Ihr System automatisch Diagnosedaten versenden, sofern Fehler auftreten.",

    /*
     * 2.0.1
     */
    "incoming_rejected"         => "Ankommend (Abgelehnt)",
    "show_original"             => "Original anzeigen",

    /*
     * 2.0.2
     */
    "cron_makesure"             => "Wenn Sie Hilfe bei der Einrichtung eines Cron Jobs benötigen, finden Sie <a target='_blank' href='http://docs.supportpal.com/display/DOCS/New+Installation#NewInstallation-CronJob'>hier</a> Informationen.",
    "widget"                    => "Widget|Widgets",

    /*
     * 2.0.3
     */
    "enable_ssl_desc"           => "SSL wird für das komplette System erzwungen. Bitte stellen Sie vorab sicher, dass Sie über eine funktionierende HTTPS-Verbindung verfügen.",
    "unexpected_template_error" => "Ein unerwarteter Fehler ist aufgetreten während die Syntax in der Vorlage überprüft wurde.",
    "empty_template_preview"    => "Bitte nutzen Sie eine valide Vorlage um die Vorschaufunktion zu nutzen.",
    "no_department_address"     => "Es konnte keine Abteilungs-Adresse in der Empfängerliste gefunden werden.",
    "email_loop_detected"       => "Schleife entdeckt - E-Mail wurde von einer Abteilung-Adresse gesendet.",
    "email_ticket_locked"       => "Ticket gesperrt. Der Benutzer wurde benachrichtigt, dass er ein neues Ticket per E-Mail öffnen muss.",
    "email_no_body"             => "Der E-Mail-Body konnte nicht erkannt werden.",
    "email_runtime_error"       => "Ein System-Fehler ist aufgetreten während das Ticket / die Antwort erstellt werden sollte.",
    "email_reply_disabled"      => "E-Mails an Benutzer wurde für diese Abteilung deaktiviert.",
    "email_throttled"           => "Dieser Benutzer hat in kurzer Zeit viele E-Mails an das System gesendet. Es sind :max_requests E-Mails alle :decay_time minutes erlaubt.",
    /*
         * 2.1.0
         */
    "generalsetting_desc"       => "Edit the settings that apply to all of SupportPal. If you wish to edit settings for a specific section, e.g. Tickets, open the section in the sidebar to view available settings for that module. Settings related to your brand(s) can be found by clicking Brands in the sidebar.",
    "brand"                     => "Brand|Brands",
    "brand_desc"                => "A brand is your customer-facing identity within SupportPal, allowing several channels of communication. Several brands can be operated seamlessly under a single, unified operator panel.",
    "brand_name"                => "Brand Name",
    "default_brand"             => "Default Brand",
    "default_brand_desc"        => "Select the brand that will be used by default when visitors visit the frontend and a matching brand cannot be found.",
    "brand_name_desc"           => "The name of the brand as seen by end-users.",
    "brand_enabled_desc"        => "Toggle to enable or disable the brand. Disabled brands cannot be utilised and won't count as part of the brands allowed on your license, disabling can be used to temporarily hide a brand and/or retain information. Deleting a brand will remove all information including users and tickets that are related to it.",
    "inherit_global_setting"    => "Inherit Global Setting",
    "brand_date_format_desc"    => "The date format used for this brand's frontend.",
    "brand_time_format_desc"    => "The time format used for this brand's frontend.",
    "brand_timezone"            => "Brand Timezone",
    "brand_timezone_desc"       => "The timezone that is used by default on this brand's frontend, users will have the option to select their own timezone.",
    "brand_default_lang_desc"   => "The language that is used by default on this brand's frontend.",
    "brand_lang_toggle_desc"    => "If the language dropdown should show on this brand's frontend.",
    "brand_groups_desc"         => "Operators in the selected groups will be able to create, update and delete (depending on role permissions) tickets and other content in this brand.",
    "select_brand"              => "Select a brand...",
    "add_another_language"      => "Add another language...",
    "mass_email_brand_desc"     => "Please select which brand the email will be sent from. It will be used to set the sending from name and address, load the correct email template and in the merge fields. If you send to a user group, only users who belong to the selected brand will be emailed.",
    "brand_limit_exceeded"      => "Your license is only permitted to use :allowed brand(s) simultaneously. To purchase additional brands please visit our client area.",
    "additional_brands"         => "Additional Brands",
    "purchase_more"             => "Purchase more",
    "brand_limit_allowed"       => "Your license is currently permitted to use :allowed brand simultaneously.|Your license is currently permitted to use :allowed brands simultaneously.",
    "brand_limit_purchase"      => "If this is incorrect, please <strong>reissue</strong> your license at our <a href='http://www.supportpal.com/manage/' target='_blank'>client area</a> and visit the <a href=':route'>License Information</a> page to synchronise your help desk with our license server.<br />To purchase additional brands, please <a href='https://www.supportpal.com/manage/upgrade.php?type=configoptions&id=:id' target='_blank'>upgrade your license</a>.",
    "support_no_expiry"         => "Your support and updates are valid.",
    "support_expiry"            => "Your support and updates subscription is valid until :date.",
    "support_status_desc"       => "Please <a href='https://www.supportpal.com/manage/cart.php?gid=addons' target='_blank'>renew your support subscription</a> in order to get the latest support and updates from SupportPal.",
    "ip_ban"                    => "IP Ban|IP Bans",
    "ip_whitelist"              => "IP Whitelist",
    "whitelisted_ip"            => "Whitelisted IP",
    "frontend_logo_desc"        => "Change the default logo on the frontend interface for this brand. The field can either be a path relative to the base directory (we recommend to store your logo in the resources/assets/ folder) or a direct URL to the image.",
    "license_path"              => "Installation Path",
    "php_info"                  => "PHP Information",
    "log"                       => "Log|Logs",
    "invalid_department_brand"  => "Department is not assigned to ticket brand.",
    "incoming_rejected"         => "Incoming (Rejected)",
    "twig_operator_signature"   => "The {{ operator.signature }} merge field will be processed at runtime hence the preview may be incorrect.",

    /*
     * 2.1.1
     */
    "file_manager"              => "Log File Manager",
    "file_manager_desc"         => "Below you can download or delete the logs that are stored by the system during operation, they can be used for debugging purposes. The log files are automatically cycled, storing only up to the latest 5 days of entries.",
    "app_logs"                  => "Application Logs",
    "app_logs_desc"             => "All warnings and errors from general usage of the help desk are logged here. You may be asked to provide one or more of these logs when requesting support.",
    "email_logs"                => "Email Logs",
    "email_logs_desc"           => "Details about incoming emails are stored in these files when they are being parsed and imported as tickets.",
    "query_logs"                => "SQL Query Logs",
    "query_logs_desc"           => "These logs contain all MySQL queries that are run when utilising the help desk and are only stored when debug mode is enabled.",

    /*
     * 2.1.2
     */
    "reply_to"                  => "Reply To",
    "and_number_others"         => "and :number other|and :number others",
    "user_templates"            => "User Templates",
    "operator_templates"        => "Operator Templates",

);
