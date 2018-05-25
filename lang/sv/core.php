<?php

return array(

    // SupportPal
    "product_name"              => "SupportPal",
    "slogan"                    => "Kundsupport, smart och enkelt.",
    "operator_panel"            => "Operatörspanel",
    "helpdesk_software"         => "Helpdeskmjukvara av",
    "carefully_crafted"         => "Noggrant utformad av",
    "welcome"                   => "Välkommen till SupportPal",
    "welcome_desc"              => "Du har gjort ett smart val. Klicka på start för att börja en snabb rundtur av våra inställningar och funktioner.",

    // Dashboard
    "welcome_back"              => "Välkommen tillbaka",
    "search_placeholder"        => "Sök i vår helpdesk...",
    "submit_ticket"             => "Skicka in ärende",
    "submit_ticket_desc"        => "Använd detta formulär för att skicka in ett ärende till oss.",
    "track_ticket"              => "Följ ett ärende",
    "track_ticket_desc"         => "Inte registrerad? Använd din e-postadress och ärendenummer för att följa ärendestatus.",
    "my_tickets"                => "Mina ärenden",
    "my_tickets_desc"           => "Följ dina ärenden. Du kan hitta både aktiva och tidigare inskickade ärenden här.",
    "no_modules"                => "Inga moduler är aktiverade.",
    "search_results"            => "Sökresultat",
    "found_results"             => "Hittade :total poster",

    // Maintenance
    "maintenance"               => "Vi utför underhåll för närvarande",
    "maintenance_desc"          => "Vår helpdesk är temporärt otillgänglig då vi utför underhåll. Tack för ditt tålamod medan vi utför ändringar. Vi är snart tillgängliga igen.",
    "maintenance_active"        => "Underhållsläge är aktivt.",

    // About
    "development_license"       => "Utvecklingslicens!",
    "development_license_desc"  => "Den här installationen använder en utvecklingslicens som bara är giltig för RFC1918-adresser. Du får inte använda denna licens i produktionsmiljö.",
    "license_status"            => "Licensstatus",
    "license_code"              => "Licenskod",
    "change_license"            => "Ändra licens",
    "license_info"              => "Licensinformation",
    "license_owner"             => "Licensägare",
    "license_created"           => "Licens skapad",
    "license_type"              => "Licenstyp",
    "no_branding"               => "Ingen varumärkning",
    "branding"                  => "Varumärke",
    "license_expires"           => "Licensen upphör",
    "license_valid_ip"          => "Tillåtna IP-adresser för licens",
    "license_valid_domain"      => "Tillåtna domänder för licens",
    "support_status"            => "Supportstatus",
    "support_expires"           => "Support upphör",
    "version_info"              => "Versioninformation",
    "installed_version"         => "Installerad version",
    "available_version"         => "Tillgänglig version",
    "monthly_product"           => "* Ditt utgångsdatum justeras automatiskt på månadsbasis när alla obetalda fakturor har betalats.",

    // API Tokens
    "api_token"                 => "API-token",
    "token"                     => "Token",
    "regenerate_token"          => "Regenerera token",
    "access_level"              => "Åtkomstnivå",
    "read_write"                => "Läs &amp; skriv",
    "read_only"                 => "Enbart läs",

    // Spam Rules & Filtering
    "spam_rule"                 => "Spamregel|Spamregler",
    "containing_text"           => "Innehåller text",
    "containing_text_desc"      => "Skriv in en textsträng (ett särskilt ord eller e-postadress som inte tillåts), stora eller små bokstäver spelar ingen roll (de hanteras likadant). <br />Textsträngen kan också innehålla <a href='http://www.regular-expressions.info/'>regular expressions</a>, t.ex.: 's.{1,}p.{1,}a.{1,}m'. Du behöver inte tänka på avgränsare (delimiters).",
    "ip_filtering"              => "IP-filtrering",
    "content_filtering"         => "Innehållsfiltrering",
    "filter_description"        => "Välj ett lämpligt innehållsfilter",
    "filter_new_message"        => "Nytt ärendemeddelande (från användare)",
    "filter_new_comment"        => "Ny självbetjäningskommentar (från användare)",
    "filter_user_login"         => "Användarlogin",
    "filter_operator_login"     => "Operatörslogin",
    "filter_api_access"         => "API-åtkomst",
    "content"                   => "Innehåll",
    "sender"                    => "Avsändare",
    "content_sender"            => "Innehåll & avsändare",

    // Company
    "company"                   => "Företag",
    "company_name"              => "Företagsnamn",
    "your_company"              => "Ditt företag",

    // Email
    "default_email_addr"        => "Standarde-postadress",
    "default_email_addr_desc"   => "Den e-post som kommer att användas i avsändarfältet i de flesta e-post som skickas av systemet.",
    "include_operator_name"     => "Inkludera operatörsnamnet",
    "include_operator_name_desc" => "Inkludera operatörsnamnet i e-postens 'Från'-fält för ärendesvarse-post. T.ex.: Från: Joe Bloggs (DittFöretagsnamns support)",
    "include_dept_name"         => "Inkludera avdelningsnamn",
    "include_dept_name_desc"    => "Inkludera avdelningsnamnet i 'Från'-fältet i någon ärenderelaterad e-post. Notera att detta antagligen kommer att skapa en ny e-posttråd om ett givet ärende ändrar avdelning.",
    "global_email_header"       => "Globalt e-posthuvud",
    "global_email_header_desc"  => "Lägg till ett huvud till all e-post som skickas av systemet. HTML accepteras.",
    "global_email_footer"       => "Global e-postfot",
    "global_email_footer_desc"  => "Lägg till en fot till all e-post som skickas av systemet. HTML accepteras.",
    "email_template"            => "E-postmall|E-postmallar",
    "email_log"                 => "E-postlog",
    "email_queue"               => "E-postkö",
    "email_queue_desc"          => "Här nedan finns den e-post i kö som skall skickas ut av systemet med cron.",
    "email_method"              => "E-postmetod",
    "php_mail_function"         => "PHPs mail()-funktion",
    "smtp"                      => "SMTP",
    "smtp_host"                 => "SMTP-värd",
    "smtp_port"                 => "SMTP-port",
    "smtp_encryption"           => "SMTP-kryptering",
    "smtp_requires_auth"        => "Kräver autentisering",
    "smtp_username"             => "SMTP-användarnamn",
    "smtp_password"             => "SMTP-lösenord",
    "ssl"                       => "SSL",
    "tls"                       => "TLS",
    "validate_smtp"             => "Validera SMTP",
    "email_content"             => "E-postinnehåll",
    "email_content_desc"        => "Skriv in ett standardämne och e-postinnehåll för denna mall. Du kan skriva denna mall i andra språk. Om en mall inte har ett annat språk så kommer den att använda standarddatan.",
    "outgoing"                  => "Utgående",
    "incoming"                  => "Inkommande",
    "incoming_spam"             => "Inkommande (avvisad - spam)",
    "incoming_throttled"        => "Inkommande (avvisad - strypt)",
    "email_subject"             => "E-postämne",
    "twig_html_warning"         => "Twig får inte finnas inuti HTML-taggar eller attribut och kommer automatiskt att tas bort vid sparning.",

    // Modules
    "modules"                   => "Modul|Moduler",
    "modules_desc"              => "Här nedanför finns en lista med alla tillgängliga moduler. Klicka på ändra-ikonen för att ändra inställningar för modulen.",
    "module_disable"            => "Avaktiverade moduler kommer att tas bort från framsidan och operatörsinterface.",

    // Scheduled tasks
    "scheduled_task"            => "Schemalagd aktivitet|Schemalagda aktiviteter",
    "interval_desc"             => "Ändra hur ofta denna aktivitet ska köras. Om du sätter t.ex. fem minuter betyder det att aktiviteten kommer att köras var femte minut om cron är aktivt och körs.",
    "cron_settings"             => "Cron-inställningar",
    "cron_makesure"             => "Skapa en cron-aktivitet med följande post: ",
    "cron_running"              => "Körs",
    "cron_not_running"          => "Körs inte",
    "task_ran"                  => "Den schemalagda aktiviteten kördes manuellt.",
    "task_failed"               => "Misslyckades med att köra aktiviteten manuellt.",

    // Plugins
    "plugins"                   => "Insticksmodul|Insticksmoduler",
    "installed_plugins"         => "Installerade Insticksmodul",
    "visit_plugin"              => "Besök Insticksmodulsidan",
    "uninstall_plugin_warning"  => "Avinstallation av insticksmodulen kommer att ta bort alla associerade filer och data. Vi rekommenderar avaktivering av insticksmodulen istället.",

    // Messages
    "last_activity"             => "Senaste aktivitet",
    "send_to"                   => "Skicka till",
    "inbox"                     => "Inkorg",
    "compose"                   => "Skriva",

    // Utilities
    "utilities"                 => "Verktyg",

    // System Cleanup
    "system_cleanup"            => "Systemrensning",
    "system_cleanup_desc"       => "Använd de tillgängliga inställningar för att ta bort den data som inte längre behövs.",
    "files"                     => "Filer",
    "files_desc"                => "Följande objekt är sparade som filer i filsystemet.",
    "logs"                      => "Loggar",
    "logs_desc"                 => "Följande objekt är sparade som poster i databasen.",
    "empty"                     => "Tom",
    "prune"                     => "Beskär",
    "total_records"             => "Totala poster",
    "system_cache"              => "Systemcache",
    "system_cache_desc"         => "Används för att lagra systemdata som inte ändras med jämna mellanrum för att snabba upp applikationen.",
    "template_cache"            => "Mallcache",
    "template_cache_desc"       => "Förkompilerade versioner av mallvyer lagras för att förbättra laddtider.",
    "attachments_desc"          => "Ärendebilagor sparas i filsystem men kan ta plats. Du kan ta bort bilagor före ett visst datum.",
    "system_activity_log_desc"  => "Lagrar all användar-, operatör- och systemaktivitet. Du kan ta bort poster före ett visst datum.",
    "email_log_desc"            => "Lagrar all inkommande och utgående e-post. Du kan ta bort poster före ett visst datum.",
    "operator_login_log_desc"   => "Lgras varje gång en operatör loggar in med sin IP. Du kan ta bort poster före ett visst datum.",

    // Captcha
    "captcha"                   => "Captcha",
    "show_captcha"              => "Visa captcha",

    // Widgets
    "dashboard"                 => "Instrumentpanel",
    "add_remove_widget"         => "Lägg till / ta bort widgetar",
    "todo_record"               => "att göra-post",
    "enable_tour"               => "Aktivera produktrundtur",

    // Product Tour
    "dashboard_desc"            => "Din egna personliga instrumentpanel. Widgetar kan tas bort, minimeras och flyttas runt!",
    "private_messages"          => "Privata meddelanden",
    "messages_desc"             => "Private meddelanden är användbara för 1:1-konversationer med andra helpdeskoperatörer.",
    "configure"                 => "Konfigurera din helpdesk",
    "configure_desc"            => "SupportPal innehåller ett antal inställningar som tillåter dig att konfigurera helpdesken till dina egna preferenser.",
    "company_name_desc"         => "Ditt företagsnamn används för all korrespondens med användare.",
    "default_email"             => "Standarde-postadress",
    "default_email_desc"        => "Standarde-postadress att använda för all utgående korrespondens med användare.",
    "dept_settings_desc"        => "Vi inser att olika avdelningar inom din organisation fungerar olika. Avdelningsinställningarna tillåter dig att skriva över globala inställningar.",
    "department_desc"           => "Avdelningar är som i din organisation. Användbara för att säkerställa att kundfrågor kommer till rätt anställd snabbt.",
    "department_email"          => "Avdelningens e-postadresser",
    "dept_email_desc"           => "Multipla e-postadresser kan ges till varje avdelning. E-postsamling utförs mot de konfigurerade e-postadresserna för att hämta e-post från dina kunder till helpdesken.",
    "dept_tmpl"                 => "Avdelningens e-postmallar",
    "dept_tmpl_desc"            => "Ibland kan det vara så att du vill ändra, eller avaktivera, avdelningens e-postmallar. Du kan definiera avdelningsspecifika e-postmallaroch aktivera dem här.",
    "schedule_task_desc"        => "Schemalagda uppgifter används för att automatisera olika processer inom SupportPal, inklusive e-postbaserad ärendesamling.",
    "schedule_task_2"           => "Schemalagda uppgifter kräver att ett cronjobb skapas för att fungera. Intervallet för varje uppgift utförd av cronjobbet kan justeras via ändringsformuläret.",
    "schedule_task_cron"        => "Cronjobb",
    "schedule_task_3"           => "Skapa ett cronjobb liknande exemplet nedan på din server för att schemalagda aktiviteter ska köras automatiskt.",
    "ticket_channel_desc"       => "Ärendekanaler är metoder för att skapa ärenden. De kan lätt bli utökade att inkludera dina egna kanaler till exempel ärenden öppnade via Instagram.",
    "ticket_channel_2"          => "Vi tillhandahåller ett antal standardkanaler. Du kan aktivera och konfigurera Facebook- och Twitter-kanalerna att samla ärenden genererade via sociala medier.",
    "user_desc"                 => "Användare som interagerar med ditt system visas här.Du kan lägga till, ändra och ta bort användare som du vill.",
    "organisation_desc"         => "Användare kan bli tilldelade organisationer som ger dem tillgång till ärenden öppnade av andra användare inom sin organisation.",
    "operator_desc"             => "Andra personalmedlemmar kan bli tillagda som operatörer här tillsammans med att hantera vilka avdelningar de tillhör.",
    "ticket_desc"               => "Ärenderutnätet innehåller en samling ärenden som är relevanta för dig.",
    "ticket_desc2"              => "Ärenderutnätet kan sorteras, filtreras och få sin kolumnlayout justerat till dina preferenser.",
    "ticket_toolbar"            => "Verktygsfält",
    "ticket_desc3"              => "Satshandlingar kan bli utförda på ärenden genom att använda ärendeverktygsfältet.",
    "tour_complete"             => "Rundvandring slutförd!",
    "tour_complete_desc"        => "Tack för att du använder SupportPal.<br /><br />Vi rekommenderar dig att följa kom igång-guiden nedan för att konfigurera helpdesken.",

    // IP Ban
    "ip_ban_time_desc"          => "Om bannlysningen är permanent eller temporär.",
    "expiry"                    => "Upphörande",
    "expired"                   => "Upphört",
    "expiry_time"               => "Upphörandetid",
    "expiry_time_desc"          => "Tiden då bannlysningen upphör. Om ett datum inte är satt eller är i det förflutna så blir det 24 timmar från och med nu.",
    "permanent"                 => "Permanent",

    // Languages
    "no_enabled_languages"      => "Misslyckades med att uppdatera :item. Åtminstone ett språk måste vara aktiverat hela tiden.",

    // General Settings
    "website"                   => "Hemsida",
    "locale"                    => "Plats",
    "simpleauth"                => "SimpleAuth",
    "admin_folder"              => "Administratörsmapp",
    "admin_folder_desc"         => "Sätt mappnamnet för att besöka operatörspanelen. Det är rekommenderat att ändra från standarden \"admin\" utifrån ett säkerhetsperspektiv.",
    "enable_ssl"                => "Aktivera SSL",
    "force_ssl"                 => "Tvinga SSL för operatörer",
    "force_ssl_desc"            => "Tvinga alla operatörer att använda en säker version av din webbsida för operatörspanelen.",
    "frontend_template"         => "Framsidans mall",
    "operator_template"         => "Operatörsmall",
    "maintenance_mode"          => "Underhållsläge",
    "maintenance_mode_desc"     => "Avaktivera den publika helpdeskfunktionaliteten och visa en underhållsnotifikation. Ändra resources/templates/frontend/[template]/core/maintenance.twig för att ändra meddelandet som visas för användare.",
    "default_user_country"      => "Standardanvändarland",
    "default_user_country_desc" => "Landet som väljs automatiskt när användare registrerar sig.",
    "system_timezone"           => "Systemtidszon",
    "system_timezone_desc"      => "Standardtidszonen som används igenom hela systemet. Operatörer kan ändra sin tidszon i sina personliga inställningar.",
    "date_format"               => "Datumformat",
    "date_format_desc"          => "Datumformatet som används globalt.",
    "time_format"               => "Tidsformat",
    "time_format_desc"          => "Tidsformatet som används globalt.",
    "simpleauth_key"            => "SimpleAuth-nyckel",
    "simpleauth_key_desc"       => "Nyckeln för vår \"single sign on\"-inställning, minst 16 tecken.",
    "simpleauth_operators"      => "Tillåt för operatörer",
    "frontend_logo"             => "Framsidans logotyp",
    "base_url"                  => "System-URL",
    "base_url_desc"             => "Skriv in den fulla webbadressen för din installation. Används för att generera URL:er som skickas till användare.",
    "debug"                     => "Felsökning",
    "debug_mode"                => "Felsökningsläge",
    "debug_mode_desc"           => "Aktivera felsökningsläge för att visa fel. Använd enbart om du felsöker eller instruerad av support. Fel lagras annars i /storage/logs.",
    "pretty_urls"               => "Fina URL:er",
    "pretty_urls_desc"          => "Aktivering av detta tar bort index.php från URL:er. Aktivera enbart om du kan komma åt operatörspanelen utan index.php. Avaktivera om du inte har mod_rewrite installerat, .htaccess-filer är inte tillåtna eller Apache-.htaccess-omskrivningsregler har inte konverterats för att fungera med din alternativa webbserver.",
    "send_diagnostic"           => "Skicka diagnostisk data",
    "send_diagnostic_desc"      => "För att hjälpa SupportPal att förbättra sina produkter kan din installation skicka diagnostisk data när något går fel.",

    /*
     * 2.0.1
     */
    "incoming_rejected"         => "Inkommande (avvisade)",
    "show_original"             => "Visa original",

    /*
     * 2.0.2
     */
    "cron_makesure"             => "För vägledning vid registrering av cronjobb, titta på <a target='_blank' href='http://docs.supportpal.com/display/DOCS/New+Installation#NewInstallation-CronJob'>cronjobbhjälpen</a>.",
    "widget"                    => "Widget|Widgetar",

    /*
     * 2.0.3
     */
    "enable_ssl_desc"           => "Aktivering av detta tvingar att hela framsidan och operatörsområdet använder säker anslutning, rekommenderas. Säkerställ att HTTPS fungerar korrekt på servern innan detta aktiveras.",
    "unexpected_template_error" => "Ett oväntat fel uppstod medan syntaxkontroll utfördes på mallen. Försök igen.",
    "empty_template_preview"    => "Tillhandahåll en giltig mall för att använda förhandsvisningsfunktionen.",
    "no_department_address"     => "Misslyckades med att hitta en avdelningsadress i mottagarlistan.",
    "email_loop_detected"       => "Loop upptäckt - e-post har skickats från en avdelningsadress.",
    "email_ticket_locked"       => "Ärende låst. Användaren har blivit ombedd att öppna ett nytt ärende via e-post.",
    "email_no_body"             => "Misslyckades med att identifiera e-postmeddelandets kropp.",
    "email_runtime_error"       => "Ett körtidsfel uppstod när ärendet/svaret skulle skapas.",
    "email_reply_disabled"      => "Envändare-postsvar har avaktiverats för denna avdelning.",
    "email_throttled"           => "För mycket inkommand e-post från användaren. Gränsen är :max_requests e-post var :decay_time minut.",

    /*
     * 2.1.0
     */
    "generalsetting_desc"       => "Ändra inställningarna som tillämpas över hela SupportPal. Om du vill ändra inställningar för en specifik sektion, t.ex. ärenden, öppna sektionen i sidomenyn för att visa tillgängliga inställningar för den modulen. Inställningar relaterade till ditt/dina varumärke/varumärken kan hittas genom att klicka på varumärken i sidomenyn.",
    "brand"                     => "Varumärke|Varumärken",
    "brand_desc"                => "Ett varumärke är din identitet gentemot kund inom SupportPal, som tillåter olika kommunikationskanaler. Flera olika varumärken kan hanteras sömlöst under en enhetlig operatörspanel.",
    "brand_name"                => "Varumärkesnamn",
    "default_brand"             => "Standardvarumärke",
    "default_brand_desc"        => "Välj det varumärke som kommer användas som standard när besökare besöker framsidan och ett matchande varumärke inte hittas.",
    "brand_name_desc"           => "Namnet på varumärket som som ses av slutanvändare.",
    "brand_enabled_desc"        => "Växla för att aktivera eller inaktivera detta varumärke. Avaktiverade varumärken kan inte användas och räknas inte som en del av de varumärken som ingår i licensen. Avaktivering kan användas till att temporärt gömma ett varumärke och/eller behålla information. Borttagning av ett varumärke tar bort all information inklusive användare och ärenden som tillhör den.",
    "inherit_global_setting"    => "Ärv global inställning",
    "brand_date_format_desc"    => "Datumformatet som används för detta varumärkes framsida.",
    "brand_time_format_desc"    => "Tidsformatet som används för detta varumärkes framsida.",
    "brand_timezone"            => "Varumärkestidszon",
    "brand_timezone_desc"       => "Den tidszon som används som standard på detta varumärkes framsida. Användare kommer att kunna ändra sin egna tidszon.",
    "brand_default_lang_desc"   => "Det språk som används som standard på detta varumärkes framsida.",
    "brand_lang_toggle_desc"    => "Om språkval skall visas på detta varumärkes framsida.",
    "brand_groups_desc"         => "Operatörer i de valda grupperna kommer att kunna skapa, uppdatera och ta bort (beroende på rollåtkomster) ärenden och annat innehåll i detta varumärke.",
    "select_brand"              => "Välj ett varumärke...",
    "add_another_language"      => "Lägg till ett annat språk...",
    "mass_email_brand_desc"     => "Välj vilket varumärke e-post ska skickas från. Det används för att sätta avsändare och adress, ladda den korrekta e-postmallen och sammanslagningsfälten. Om du skickar till en användargrupp får bara de användare som tillhör det valda varumärket e-posten.",
    "brand_limit_exceeded"      => "Din licens är för närvarande tillåten att använda :allowed varumärken samtidigt. För att köpa ytterliggare varumärken kan du besöka vårat kundområde.",
    "additional_brands"         => "Ytterliggare varumärken",
    "purchase_more"             => "Köp fler",
    "brand_limit_allowed"       => "Din licens är för närvarande tillåten att använda :allowed varumärke samtidigt.|Din licens är för närvarande tillåten att använda :allowed varumärken samtidigt.",
    "brand_limit_purchase"      => "Om detta är inkorrekt <strong>återutge</strong> din licens i vårat <a href='http://www.supportpal.com/manage/' target='_blank'>kundområde</a> och besök <a href=':route'>licensinformationsidan</a> för att synkronisera din helpdesk med vår licensserver.<br />För att köpa fler varumärken, <a href='https://www.supportpal.com/manage/upgrade.php?type=configoptions&id=:id' target='_blank'>uppgradera din licens</a>.",
    "support_no_expiry"         => "Din support och uppdateringar är giltiga.",
    "support_expiry"            => "Din support- och uppdateringsprenumeration är giltig till :date.",
    "support_status_desc"       => "<a href='https://www.supportpal.com/manage/cart.php?gid=addons' target='_blank'>Förnya din supportprenumeration</a> för att fortsätta få den senaste supporten och uppdateringarna från SupportPal.",
    "ip_ban"                    => "IP-bannlysning|IP-bannlysningar",
    "ip_whitelist"              => "IP-vitlista",
    "whitelisted_ip"            => "Vitlistad IP",
    "frontend_logo_desc"        => "Ändra standardloggan på framsidan för detta varumärke. Fältet kan antingen vara en sökväg relativ mot basmappen (vi rekommenderar dig att spara loggan i mappen resources/assets/) eller en direkt-URL till bilden.",
    "license_path"              => "Installationsväg",
    "php_info"                  => "PHP-information",
    "log"                       => "logg|Loggar",
    "invalid_department_brand"  => "Avdelningen tillhör inte ett ärendevarumärke.",
    "incoming_rejected"         => "Inkommande (avvisad)",
    "twig_operator_signature"   => "{{ operator.signature }} sammanslagningsfält kommer att bearbetas under körning så förhandsvisningen kan vara inkorrekt.",

    /*
     * 2.1.1
     */
    "file_manager"              => "Logfilshantering",
    "file_manager_desc"         => "Här nedan kan du ladda ner eller ta bort loggar som sparas när systemet används, de kan användas i felsökningssyfte. Händelser äldre än fem dagar tas bort automatiskt.",
    "app_logs"                  => "Applikationloggar",
    "app_logs_desc"             => "All warnings and errors from general usage of the help desk are logged here. You may be asked to provide one or more of these logs when requesting support.",
    "email_logs"                => "E-postloggar",
    "email_logs_desc"           => "Detaljer om inkommande e-post sparas i dessa filer när de blir analyserade och importerade som ärende.",
    "query_logs"                => "SQL-frågeloggar",
    "query_logs_desc"           => "Dessa loggar innehåller alla SQL-frågor som körs när kundtjänsten nyttjas och sparas bara när felsökningsläget är aktiverat.",

    /*
     * 2.1.2
     */
    "reply_to"                  => "Svara till",
    "and_number_others"         => "och :number andra",
    "user_templates"            => "Användarmall",
    "operator_templates"        => "Operatörsmallar",

    /*
     * 2.2.0
     */
    "attachment_size"           => "Begränsning av sammanlagd storlek på bifogade filer",
    "attachment_size_desc"      => "The maximum cumulative size of all attachments that are sent in a single email. Available options are K (for Kilobytes) and M (for Megabytes), anything else assumes bytes. Example value: 5M for 5 Megabytes. Set to 0 to not send any attachments by email and require users to download attachments via the help desk.",
    "attachment_limit_reached"  => "Cumulative file limit reached (:size). Please consider sending files via another medium (such as a download URL).",
    "upload_unknown_error"      => "The file \":file\" was not uploaded due to a server-side error.",
    "renew_support"             => "<a href='https://www.supportpal.com/manage/cart.php?gid=addons' target='_blank'>Renew</a>",
    "translations"              => "Översättning",
    "no_existing_translations"  => "Översättning saknas.",
    "add_translation"           => "Lägg till översättning",
    "todo_list"                 => "Att göra lista",
    "version_check"             => "Kontrollera uppdateringar",
    "system_overview"           => "Systemöversikt",
    "getting_started"           => "Här börjar vi",
    "operator_notes"            => "Operatörsnoteringar",
    "simpleauth_operators_desc" => "Allow operators to log in and out with SimpleAuth, we recommend to keep this disabled unless you are specifically using it for this purpose.",
    "upgrade_and_reactivate"    => "Uppgradera och återaktivera",
    "upgrade_pending"           => "Väntande uppdatering",
    "locale_in_uri"             => "Inkludera språkval i URL",
    "locale_in_uri_desc"        => "Disable to remove the locale from the URI, for example: http://support.mycompany.com/en/announcements becomes http://support.mycompany.com/announcements. Can only be disabled when there's one enabled language in the system.",

    /*
     * 2.3.0
     */
    "disabling_default_language" => "Detta är standardspråket. Om du avaktiverar detta kommer ett annat aktiverat språl sättas som stanarspråk.",

);
