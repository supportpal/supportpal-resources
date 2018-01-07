<?php

return array(

    "feedback_question"         => "Frågor som ska visas för användaren.",
    "open_new"                  => "Öppna ett nytt ärende",
    "select_department"         => "Välj en avdelning",
    "select_department_desc"    => "Klicka på den relevanta avdelningen för ditt ärende här nedanför.",
    "no_departments"            => "Inga avdelningar funna.",
    "department_user_details"   => "Avdelning- och användardetaljer",
    "enter_your_details"        => "Skriv in dina detaljer",
    "enter_ticket_details"      => "Skriv in detaljer",
    "enter_subject_message"     => "Skriv in ämne och meddelande",
    "invalid_user"              => "Se till att giltiga användardetaljer har skrivits in för att fortsätt.",

    "registered_users"          => "Enbart registrerade användare",

    "tickets"                   => "Ärenden",
    "ticket"                    => "Ärende|Ärenden",
    "subject"                   => "Ämne",
    "no_subject"                => "Inget ämne",
    "last_action"               => "Senaste handlingen",
    "due_time"                  => "Förfallotid",
    "created_time"              => "Tid skapad",
    "submitted"                 => "Inskickad",
    "add_reply"                 => "Svara",
    "ticket_reply"              => "Ärendesvar",
    "ticket_note"               => "Ärendenotering",
    "ticket_type"               => "Ärendetyp",

    "user_ticket"               => "Användarärenden",
    "user_ticket_desc"          => "Öppna ett nytt ärende på uppdrag av en ny eller existerande användare.",
    "existing_user"             => "Existerande användare",
    "new_user"                  => "Ny användare",
    "internal"                  => "Intern",
    "internal_ticket"           => "Internt ärende",
    "internal_ticket_desc"      => "Öppna ett ärende för enbart intern användning. Detta ärende associeras med dig istället för en användare.",
    "ticket_opened"             => "Ärendet har öppnats.",
    "enter_user_details"        => "Skriv in dina detaljer här nedanför eller logga in med ditt konto om du har ett.",
    "already_have_account"      => "Du har redan ett konto. Logga in med det för att öppna ärendet. Använd funktionen glömt lösenord om du inte kommer ihåg dina inloggningsuppgifter.",

    "recent_tickets"            => "Nya ärenden",
    "last_message_text"         => "Senaste meddelandets text",

    "set_due_time"              => "Sätt en förfallotid",

    "settings"                  => "Ärendeinställningar",

    "priority"                  => "Prioritet|Prioriteringar",

    "channel"                   => "Kanal|Kanaler",
    "account"                   => "Konto|Konton",

    "assign_operator"           => "Tilldela operatör",
    "assigned_operator"         => "Tilldelade operatörer",
    "assigned_to"               => "Tilldelad till",
    "assigned"                  => "Tilldelad",

    "department"                => "Avdelning|Avdelningar",
    "change_department_order"   => "Dra raderna för att ändra ordningen som avdelningarna visas för användare som öppnar nya ärenden.",
    "department_order"          => "Avdelningsordning",
    "department_applicable"     => "Tillämpliga avdelningar",
    "department_applicable_desc" => "Avdelningarna i vilka prioriteringen kommer att vara valbar för användare. Tillämpas enbart för framsidan. Alla prioriteringar är tillgängliga för operatörerna i alla avdelningar.",

    "due_to_be_sent"            => "Kommer skickas",
    "send_now"                  => "Skicka nu",

    "tag"                       => "Etikett|Etiketter",

    "track_ticket"              => "Spåra ärende",
    "view_ticket"               => "Visa ärende",

    // Recent activity
    "recent_activity"           => "Ny aktivitet",
    "no_recent_activity"        => "Ingen ny aktivitet",

    // Active operators
    "active_operators"          => "Aktiva operatörer",

    "ticket_number"             => "Ärendenummer",
    "ticket_format"             => "Ärendenummerformat",
    "ticket_format_desc"        => "Följande variabler kan användas:<br />%S för ett sekventiellt nummer | %N för ett slumpmässigt nummer | %L för en slumpmässig bokstav<br />Använd {number} för att upprepa <strong>bara</strong> efter %N eller %L, t.ex. %N{4} är samma som 4 slumpmässiga nummer, %L{3} är samma som 3 slumpmässiga bokstäver<br />Följande <a href='http://php.net/manual/en/function.date.php' target='_blank'>PHP-datumparametrar</a> med prefix % Y,y,m,d,j,g,G,h,H,i,s",

    // Departments
    "department_public_desc"    => "Om avdelningen är synlig för användare.",
    "department_parent_desc"    => "Om avdelningen är en subavdelning, välj en förälder. Subavdelningar är avsedda för intern upptrappning och förvaltning varför denna inställning tar bort några av valen nedan om den blir vald.",
    "department_priority"       => "Avdelningsprioriteringar",
    "department_priority_desc"  => "Prioriteringarna som blir tillgängliga för användare när de öppnar ett ärende i denna avdelning, åtminstone en måste väljas. Alla prioritering blir tillgängliga som standard.",
    "department_no_format"      => "Frivillig, skriv in för att skriva över standardärendenummerformatet, lämna blankt annars.",
    "department_operator"       => "Avdelningsoperatörer",
    "department_default_assign" => "Standardtilldelad till",
    "dept_default_assign_desc"  => "Använd detta om du vill att ärenden öppnade i denna avdelning automatiskt ska tilldelas en eller flera operatörer.",

    // Department emails
    "email_accounts_desc"       => "Sätt upp e-postadresser för denna avdelning. Inkommande e-post till dessa e-postadresser kommer att öppna ärenden i denna avdelning. Den första e-postadressen används som standard avsändare för utgående e-post.",
    "department_password"       => "Skriv bara in ett lösenord för att skriva över det redan sparade lösenordet eller för att validera e-postkontodetaljerna.",
    "department_port"           => "Standardvärden är: 110 för POP3, 995 för secure POP3, 143 för IMAP och 993 för säker IMAP. Lämna tom för standardvärde.",
    "department_encryption"     => "Vissa e-postleverantörer kräver SSL- eller TLS-kryptering för att ansluta. Är du osaäker lämna denna inställning some Ingen.",
    "department_delete_mail"    => "Om IMAP används kan du välja att inte ta bort e-post från servern efter att de blivit importerade som ärenden.",
    "protocol"                  => "Protokoll",
    "server"                    => "E-postserver",
    "port"                      => "Port",
    "username"                  => "Användarnamn",
    "password"                  => "Lösenord",
    "encryption"                => "Kryptering",
    "delete_downloaded"         => "Ta bort nerladdad e-post",
    "consume_all"               => "Konsumera all e-post",
    "email_download"            => "E-postnerladdning",
    "email_piping"              => "E-postpiping",
    "email_piping_desc"         => "Sätt upp en e-postvidarebefordrare som följer, den exekverbara PHP-filens sökväg kan dock vara annorlunda på din server.",
    "remote_email_piping"       => "Fjärre-postpiping",

    // Department email options
    "email_options"             => "E-postinställningar",
    "email_auto_close"          => "E-posta användare när ärende autostängs",
    "email_auto_close_desc"     => "Välj om användare ska bli e-postade när ärenden som tillhör dem blir automatiskt stängda av systemet.",
    "email_closed_by_operator"  => "E-posta användare när ärende stängs av operatör",
    "email_closed_by_op_desc"   => "Välj om användare ska bli e-postade när när ärenden som tillhör dem blir stängda av operatör.",
    "email_user_on_email"       => "E-posta användare vid ärende öppnat via e-post",
    "email_user_on_email_desc"  => "Välj om användare ska bli notifierade via e-post när ett e-postmeddelande de skickar resulterar i att ett nytt ärende öppnas.",
    "email_operators"           => "Notifiera operatörer",
    "email_operators_desc"      => "Välj om operatörssvar ska vidarebefordras till andra operatörer. Som standard kollas \"e-postoperatörer\"-inställningen i operatörspanelen och kommer automatiskt skicka ett e-postmeddelande för operatörse-postsvar.",
    // Department email templates
    "new_ticket_opened"         => "Nytt ärende öppnat",
    "reply_to_locked"           => "Svara låst ärende",
    "waiting_for_response"      => "Vänta på svar",
    "ticket_auto_closed"        => "Ärende autostängt",
    "closed_by_operator"        => "Stängt av operatör",

    // Feedback
    "feedback"                  => "Feedback",
    "feedback_form"             => "Feedbackformulär",
    "feedback_form_desc"        => "Feedbackformulär blir processade i den ordning de kommer in. Dra raderna för att ordna om och justera prioriteringen av feedbackformulären.",
    "view_feedback_report"      => "Visa feedbackrapport",
    "view_feedback"             => "Visa feedback",
    "ticket_feedback"           => "Ärendefeedback",
    "feedback_fields_error"     => "Det blev ett fel vid hämtning av feedbackfält.",
    "time_after_resolved"       => "Tid efter löst",
    "time_after_resolved_desc"  => "Tiden efter ett ärende är märkt som löst som feedbackformuläret skickas till användaren.",
    "expires_after"             => "Löper ut efter",
    "expires_after_desc"        => "Tiden efter vilken feddbackformuläret inte längre kan besvaras. Vi rekommenderar 7 dagar men du kan skriva in 0 i alla fält för ingen utgångstid.",
    "form_conditions"           => "Formulärvillkor",
    "form_conditions_desc"      => "Definiera ärendevillkoren för vilka nyligen lösta ärenden kontrolleras för att se om de tillhör detta formulär. Om ett löst ärende uppfyller kraven för fler än ett formulär väljs rätt formulär utifrån prioritering vilken kan ändras genom att gå till formulärlistan och ändra ordningen.",
    "form_fields"               => "Formulärfält",
    "response_rate"             => "Svarsfrekvens",
    "sent_forms"                => "Skickat feedbackformulär",
    "rating"                    => "Betyg",
    "good_ratings"              => "Bra betyg",
    "bad_ratings"               => "Dåliga betyg",
    "customer_satisfaction"     => "Kundnöjdhet",
    "feedback_desc"             => "Tack för att du kontaktade oss och vi hoppas att vi löste din fråga. Betygsätt gärna din upplevelse här nedanför.",
    "good_satisfied"            => "Bra, jag är nöjd",
    "bad_not_satisfied"         => "Dåligt, jag är inte nöjd",
    "feedback_not_found"        => "Din feedback kunde inte skickas. Öppna gärna ett nytt ärende om du vill dela med dig av din feedback.",
    "feedback_malformed_token"  => "Din feedback kunde inte skickas p.g.a. en felaktig token. Öppna gärna ett nytt ärende om du vill dela med dig av din feedback.",
    "feedback_already_done"     => "Du har redan delat med dig av din feedback gällande detta ärende.",
    "feedback_expired"          => "Ärendet har varit löst ett tag och kan tyvärr inte längre betygsättas.",
    "feedback_questions"        => "Svara gärna på följande frågor för att förbätta vårat supportarbete.",
    "feedback_thank_you"        => "Tack för att du gav us feedback på detta ärende.",
    "feedback_for_ticket"       => "Feedback för ärende #:number",
    "feedback_rating_desc"      => "Supporten som gavs på detta ärende har betygsatts <strong>:rating</strong> av användaren.",

    // Custom fields
    "customfield"               => "Skräddarsytt ärendefält|Skräddarsydda ärendefält",
    "customfield_order"         => "Dra raderna för att ändra ordningen på de skräddarsydda fälten som visas för användare när de öppnar ärenden via webben.",

    // Canned responses
    "cannedresponse"            => "Snabbsvar|Snabbsvar",
    "canned_response_category"  => "Snabbsvarskategori|Snabbsvarskategorier",
    "response"                  => "Svar",
    "canned_public_desc"        => "Aktivera för att låta snabbsvaret bara vara tillgängliga för dig själv.",
    "canned_group_desc"         => "Om du vill att snabbsvaret ska vara synligt för enbart vissa operatörsgrupper. Lämna tomt för synligt av alla operatörsgrupper.",

    // Filters
    "filter"                    => "Filter|Filter",
    "filter_condition"          => "Filtervillkor",
    "filter_condition_desc"     => "Definiera ärendevillkoren för vilken ärenden listas under detta filter.",
    "filter_public_desc"        => "Växla för att låta filtret enbart bli åtkomligt av dig själv.",
    "filter_group_desc"         => "om du vill att filtret ska vara synligt för vissa operatörsgrupper. Lämna tomt för synligt av alla operatörsgrupper.",

    // Macros
    "macro"                     => "Makro|Makros",
    "macro_type"                => "Makrotyp",
    "macro_type_desc"           => "Som standard måste makrot kallas på manuellt i ärendevyn. Det kan anges vara ett automatiskt makro som kollas och utförs när nya ärenden kommer in eller på alla ärenden via en schemalagd aktivitet. Oavsett kollas villkoren och om sanna utförs handlingen automatiskt. Ett makro kan bara köras en gång på ett ärende automatiskt medan det inte finns någon gräns när man kör det manuellt.",
    "manual"                    => "Manuellt",
    "macro_type_auto1"          => "Automatiskt - på nya ärenden enbart",
    "macro_type_auto2"          => "Automatiskt - alla ärenden (schemalagd aktivitet)",
    "macro_condition"           => "Makrovillkor",
    "macro_condition_desc"      => "Definiera villkoren för vilka ärenden detta makro är tillgänglig för. Som standard, utan villkor, tillämpas det på alla ärenden.",
    "macro_action"              => "Makrohandlingar",
    "macro_action_desc"         => "Definiera handlingar som utförs när ett makro körs. Se till att handlingarna är giltiga för den avdelning ärendet är i annars ignoreras de.",

    "from"                      => "Från",
    "to"                        => "Till",
    "cc"                        => "CC",
    "cc_desc"                   => "Du kan CC andra människor på detta ärende genom att skriva in e-postadresser ovan.",

    "allowed_files"             => "Tillåtna bilagsfiltyper",

    // Drafts
    "also_viewing"              => "<strong>:name</strong> tittar också på ärendet.",
    "draft_saved"               => "Utkast sparat :time",
    "save_draft"                => "Spara utkast",
    "discard_draft"             => "Kasta utkast",

    // Locked
    "error_ticket_locked"       => "Detta ärende has låsts och kan inte uppdateras igen. Öpna ett nytt ärende om du behöver mer support.",

    // Ticket Followups
    "follow_up"                 => "Uppföljning",
    "follow_up_status_desc"     => "Sätt att ärendet har en annan status till uppföljningsdatumet.",
    "exact_date_time"           => "Exakt tid & datum",
    "time_from_now"             => "Tid från nu",

    // Schedule
    "schedule"                  => "Schema|Scheman",
    "business_hour"             => "Kontorstid",
    "business_hour_desc"        => "Kontorstid indikerar de tider när personal är tillgänglig för att svara på frågor för schemat. Timmarna tas i beaktning när ärendens förfallotid beräknas.",

    // Holidays
    "holiday"                   => "Helgdag|Helgdagar",
    "all_holidays"              => "Alla helgdagar",
    "specific_holidays"         => "Specifika helgdagar",
    "holiday_or_on_the"         => "eller, på",
    "holiday_month_year_desc"   => "År är frivilligt om helgdagen är återkommande. VÄlj ett år enbart om helgdagen uppkommer detta datum ett visst år.",

    // SLA Plans
    "sla_plan"                  => "SLA-plan|SLA-planer",
    "specific_schedule"         => "Specifika scheman",
    "calendar_hours_24"         => "Kalendertimmar (24 Hours)",
    "resolution_time"           => "Lösningstider",
    "resolution_time_desc"      => "Ange tider som ett ärende måste vara svarat på och löst på innan prioritet. Tiden räknas bara på arbetstimmar baserat på valda scheman, decimaltal kan användas.",
    "reply_within"              => "Svara inom",
    "resolve_within"            => "Lös inom",
    "plan"                      => "Plan",
    "sla_condition"             => "SLA-villkor",
    "sla_condition_desc"        => "Definiera ärendevillkoren för vilken nya ärenden kontrolleras för att se om de faller under denna plan. Om ett nytt ärende passar många SLA-planer väljs den utifrån SLA-plan prioritet som kan ändra genom att gå till planlistan och ändra ordningen.",
    "escalation_rule"           => "Upptrappningsregler",
    "escalation_rule_desc"      => "Definiera handlingar som uförs när ett ärende under denna SLA-plan är nära eller har förfallit. Se till att reglerna är giltiga för avdelningen ärendet är i annars ignoreras de.",
    "condition"                 => "Vilkor",
    "condition_group"           => "Villkorsgrupp",
    "all_groups"                => "ALLA grupper måste vara sanna",
    "any_group"                 => "NÅGON grupp kan vara sann",
    "all_conditions"            => "ALLA villkor i gruppen måste vara sanna",
    "any_condition"             => "NÅGOT villkor i gruppen kan vara sant",
    "sla_plan_desc"             => "SLA-planer processas i den ordning de kommer upp. Dra raderna för att ändra ordning och justera prioriteten på SLA-planerna.",

    // Reply options
    "reply_options"             => "Svarsalternativ",
    "send_email_to_users"       => "Skicka e-post till användare",
    "send_email_to_operators"   => "Skicka e-post till operatörer",
    "back_to_grid"              => "Gå tillbaka till ärenderutnät",
    "take"                      => "Ta",
    "take_ownership"            => "Ta ägarskap",
    "pause_duetime"             => "Pausa förfallotid",
    "add_to_canned_responses"   => "Lägg till på snabbsvaret",
    "visible_to_all_operators"  => "Gör synlig för alla operatörer",
    "set_status"                => "Sätt status",
    "add_selfservice_link"      => "Lägg till självbetjäningslänk",
    "search_selfservice"        => "Sök efter självbetjäningsartikel",
    "add_canned_response"       => "Lägg till ett snabbsvar",
    "search_canned"             => "Sök efter ett snabbsvar",

    "mark_resolved"             => "Märk som löst",

    "ticket_signature"          => "Ärendesignatur",

    "default_open_status"       => "Standardöppenstatus",

    "default_resolve_status"    => "Standardlöststatus",
    "default_resolve_status_desc" => "Välj standardstatus som används för ärenden som är lösta.",

    "waiting_response_time"      => "Väntar på svarse-post",
    "waiting_response_time_desc" => "Tiden efter vilken användare får e-post om inaktiva ärenden med fråga om de anser att ärendet är löst. Sätt till 0 för att avaktivera denna e-post.",

    "close_inactive_tickets"    => "Stäng inaktiva ärenden",
    "close_inactive_tickets_desc" => "Tiden efter vilken inaktiva ärenden stängs automatiskt. Sätt till 0 för att aldrig stänga ärenden automatiskt.",
    "close_inactive_status_desc" => "Stäng ärenden automatiskt som är inaktiva utan en uppföljning av användaren (definierat av nummer av dagar sedan senaste svaret av en operatör i de allmänna inställningarna).",

    "ticket_reply_order"        => "Ärendesvarsordning",
    "ticket_reply_order_desc"   => "Välj i vilken ordning ärendemeddelanden visas, stigande där det senaste meddelandet är sist eller fallande där det senaste meddelandet är först.",

    "ticket_notes_position"     => "Ärendenoteringsposition",
    "ticket_notes_position_desc" => "Välj var i ärendevyn som ärendenoteringar visas.",
    "ticket_notes_top_messages" => "I toppen och i meddelanden",
    "ticket_notes_top"          => "Enbart i toppen",
    "ticket_notes_messages"     => "Enbart i meddelanden",

    "captcha_desc"              => "När captchan ska visas för användare som öppnar ett nytt ärende.",
    "unregistered_only"         => "Oregistrerade användare enbart",

    "allow_unauth_users"        => "Tillåt oautentiserade användare",
    "allow_unauth_users_desc"   => "Tillåt användare som inte är inloggade att titta på och besvara ärenden. Om detta avaktiveras försvinner också möjligheten att spåra ärende och användare måste vara registrerade och inloggade för att komma åt ärenden.",

    "default_department"        => "Standardavdelning",
    "default_department_desc"   => "Standardavdelningen som sätts på alla inkommande ärenden i denna kanal.",

    "show_related_articles"     => "Visa relaterade artiklar",
    "show_related_articles_desc" => "När använder skriver in ämne kan de bli visade relevanta artiklar beroende på vad de skrivit in. Kräver att självbetjäningsmodulen är aktiverad och MySQL 5.6+.",

    // Email Channel Settings
    "default_priority"          => "Standardprioritering",
    "default_priority_desc"     => "Standardprioriteringen satt på alla inkommande ärenden via denna kanal.",
    "verbose_email_log"         => "Mångordige-postlog",

    "adjust_columns"            => "Justera kolumner",
    "last_reply"                => "Senast svaret",
    "opened_at"                 => "Öppnad den",

    "change_department"         => "Ändra avdelning",
    "change_status"             => "Ändra status",
    "no_statuses"               => "Inga statusar funna. Klicka <a href=':route'>här</a> för att skapa en.",
    "no_priorities"             => "Inga prioriteringar funna. Klicka <a href=':route'>här</a> för att skapa en.",
    "no_templates"              => "Inga skräddarsydda e-postmallar funna. Klicka <a href=':route'>här</a> för att skapa en.",
    "no_tags"                   => "Inga ärendeetiketter funna. Klicka <a href='Klicka:route'>här</a> för att skapa en.",
    "no_departments_found"      => "Inga avdelningar funna. Klicka <a href=':route'>här</a> för att skapa en.",
    "no_operators_found"        => "Inga operatörer funna. Klicka <a href=':route'>här</a> för att skapa en.",
    "change_priority"           => "Ändra prioritet",
    "add_tag"                   => "Lägg till etikett",

    "unlock"                    => "Lås upp",
    "merge"                     => "Sammanfoga",
    "merged"                    => "Sammanfogade",
    "unmerge"                   => "Separera",
    "close_and_lock"            => "Stäng & lås",
    "delete_and_block"          => "Ta bort & blockera",

    "block_warning"             => "Användarens e-post kommer också att blockeras och inte kunna öppna ärenden.",

    "mass_reply"                => "Massvar",

    "due_today"                 => "Förfaller i dag",
    "overdue"                   => "Försenad",
    "unassigned"                => "Ej tilldelad",

    "pause_duetime_desc"        => "Om det finns en aktiv SLA-plan på detta ärende, pausa den återstående förfallotiden till efter uppföljningsdatumet. Förfallotiden kommer endast starta när ett svar eller notering har lagts till på ärendet (inklusive från uppföljningen).",
    "delete_follow_up"          => "Ta bort uppföljning",

    "add_cc"                    => "Lägg till CC",
    "reply_above_line"          => "Svara ovanför denna linje",

    "oauth2_token"              => "OAuth2-token",
    "email_settings"            => "E-postinställningar",
    "web_settings"              => "Webbinställningar",
    "split_selected_replies"    => "Dela valda svar",

    "track_ticket_not_found"    => "Kunde inte hitta ärendet med det inskrivna ärendenumret och användare-postadressen.",

    "channel_deactivated"       => "Ärendekanalen är för närvarande avaktiverad så ett svar kan inte postas.",

    "type_in_tags"              => "Skriv in taggar",

    /*
     * 2.0.1
     */
    "allowed_files_desc"        => "En lista av filändelser separerade av pipe, |-tecknet, som är tillåtna som bilagor. For example: txt|png|jpg. To allow all attachments, input: ?.*",

    /*
     * 2.0.2
     */
    "no_operator_groups"        => "Inga operatörsgrupper funna. Klicka <a href=':route'>här</a> för att skapa en.",
    "no_user_groups"            => "Inga användargrupper funna. Klicka <a href=':route'>här</a> för att skapa en.",
    "opened_by"                 => "(Öppnat av :name)",
    "remote_email_piping_desc"  => "Ladda ner <a href='http://www.supportpal.com/manage/dl.php?type=d&id=8' target='_blank'>fjärre-postpipingskriptet</a> och följ <a href='http://docs.supportpal.com/display/DOCS/Remote+Email+Piping' target='_blank'>dokumentationen</a> för att konfigurera det på din e-postserver.",
    "not_assigned_department"   => "Du har inte behörighet att titta på ärenden i :department-avdelningen. Om du tror att du felaktigt har fått detta felmeddelande, kontakta din administratör.",

    /*
     * 2.0.3
     */
    "department_consume_all"    => "Supportpal har e-postaliasstöd som standard och kommer kontrollera TO-adressen på inkommande e-post för att se vilken avdelning ärendet ska öppnas i. Ett ärende öppnas inte om en matchande avdelningse-postadress inte hittas. Aktivering av denna inställning innebär att all e-post utan en matchande avdelningse-postadress blir importerade som ärenden i denna avdelning.",
    "default_reply_options"     => "Standardsvarsalternativ",
    "default_reply_options_desc" => "Välj standardsvarsalternativ som sätts när ett ärende öppnas eller besvaras. ':reply_option'-inställningen blir ikryssad baserad på ':department_option'-avdelningsinställningar.",
    "associate_response_tag"    => "Associera konserverat svar med en etikett...",
    "canned_response_tags_desc" => "Lägg till etiketter som kan hjälpa dig att hitta ett snabbsvar när ett ärende besvaras.",
    "loading_tags"              => "Laddar etiketter",
    "append_ip_address"         => "Bifoga IP-adress",
    "append_ip_address_desc"    => "Bifoga användarnas IP-adresser till deras meddelande när de öppnar eller svarar på ärenden från framsidan.",
    "unassign_operator"         => "Ta bort tilldelad operatör",
    "remove_tag"                => "Ta bort etikett",
    "message_clipped"           => "[Meddelande klippt]",
    "view_entire_message"       => "Visa hela meddelandet",
    "no_custom_fields"          => "Inga skräddarsydda fält funna. Klicka <a href=':route'>här</a> för att skapa en.",
    "follow_up_active"          => "En <a class='view-followup' style='text-decoration: underline;'>uppföljning</a> är för närvarande aktivt på detta ärende och kommer utföras <strong>:time</strong>.",
    "disable_user_email_replies" => "Avaktivera användare-postsvar",

    /*
     * 2.1.0
     */
    "default_ticket_filter"     => "Standardärendefilter",
    "default_ticket_filter_desc" => "Det ärendefilter som används som standard när man klickar på 'Hantera ärenden'-länken. Kan bli satt till 'Ingen', standardvärdet, vilket visar alla ickeslutförda ärenden.",
    "recent_filters"            => "Senaste filter",
    "inactive_tickets"          => "Inaktiva ärenden",
    "default_open_status_desc"  => "Välj standardstatus som ska bli automatiskt satt när en användare öppnar ett nytt ärende eller svarar ett ärende när ett operatörsvar inte ännu är satt.",
    "default_reply_status"      => "Standardsvarstatus",
    "default_reply_status_desc" => "Välj standardstatusen som ska bli automatiskt satt när en användare svarar på ett ärende. Verkställs bara efter att en operatör har svarat på ärendet.",
    "drafting_reply"            => "<strong>:name</strong> började på utkast :type :time:",
    "ticket_reply_order_default" => "Systemets standard är värdet som för närvarande är valt i allmänna ärendeinställningar.",
    "select_a_parent"           => "Välj en förälderavdelning...",
    "select_a_department"       => "Välj en avdelning...",
    "not_assigned_brand"        => "Du har inte tillåtelse att titta på varumärkets ärenden. Om du anser att du ska ha tillåtelse kan du kontakta din administratör.",
    "department_operator_desc"  => "Du kan också tilldela individuella operatörer till avdelningen. Dessa operatörer läggs in tillsammans med de grupper som tilldelats ovan.",
    "department_group"          => "Avdelningsgrupper",
    "department_group_desc"     => "Du kan tilldela hela operatörsgrupper till avdelningen, rekommenderas om din operatörslista är stor och/eller ändras ofta.",
    "ticket_other_brands"       => "Ärenden i andra varumärken",
    "add_for_department"        => "Lägg till för avdelning...",
    "record_order"              => "Dra raderna för att ändra posternas ordning.",
    "ticket_token"              => "Ärendetoken",
    "reply_all"                 => "Svara alla",
    "reply_without_cc"          => "Svara (utan CC)",
    "open_new_for_user"         => "Öppna nytt ärende för användare",
    "email_accounts"            => "E-postkonton",
    "add_another_email"         => "Lägg till en annan e-post",
    "follow_up_date"            => "Uppföljningsdatum",
    "post_reply"                => "Posta svar",
    "post_note"                 => "Posta notering",
    "ticket_details"            => "Ärendedetaljer",
    "organisation_tickets"      => "Organisationärenden",
    "manage_tickets"            => "Hantera ärenden",
    "via_channel"               => "via :channel",
    "department_parent"         => "Avdelningsförälder",
    "department_brands"         => "Avdelningsvarumärken",
    "email_item"                => "E-post :item",
    "from_name"                 => "Frånnamn",
    "from_address"              => "Frånadress",

    /*
     * 2.1.1
     */
    "edited_message"            => ":user vid :date",
    "prioritise_reply-to"       => "Prioritera Reply-To",
    "prioritise_reply-to_desc"  => "Växla för att prioritera Reply-To-headern framför From-headern. Om aktiverad blir ärenden öppnade via e-post öppnade på uppdrag av Reply-To-namnet och adressen.",
    "note_options"              => "Noteringsval",
    "escalation_rules_desc"     => "De nedanstående SLA-planupptrappningsreglerna är schemalagda att köras efter de listade tiderna. Dessa tider kan komma att ändras eller regler kan komma att tas bort om en operatör svarar på detta ärende.",

    /*
     * 2.1.2
     */
    "not_registered_user"       => "Inte en registrerad användare. E-postkanalsinställningarna tillåter bara import av e-post från registrerade användare.",
    "display_name"              => "E-postvisningsnamn",
    "display_name_desc"         => "Frivillig. Sätt bara om du vill skriva över det visningsnamn som sätts på utgående mail från denna avdelning, lämna blank annars.",
    "display_name_options"      => "Följande twig-variabler kan användas:<br >{{ brand.name }} - varumärkesnamn<br />{{ department.name }} - Avdelningsnamn<br />{{ department.frontend_name }} - Visar förälderns avdelningsnamn om ärendet tillhör en subavdelning.<br />{{ operator.formatted_name }} - Operatörsnamn<br /><em>Operatörsnamnet är inte alltid tillgängligt så omslut den av 'not empty'-villkor d.v.s. {% if operator is not empty %}{{ operator.formatted_name }}{% endif %}</em>",
    "attachment_rejected"       => "Bilaga avvisad",
    "enable_subaddresses"       => "Tillåt subadresser",
    "enable_subaddresses_desc"  => "Växla för att aktivera e-postsubadressing för alla avdelningar. Detta kommer att skapa en unik subadress för varje ärende som är satt som svara till-adress på all utgående e-post. Din e-postserver måste kunna hantera subadressering. Ytterliggare steg kan komma att krävas om du använder e-postpiping för att försäkra dig om att e-post till de adresserna vidarebefordras korrekt. Aktivering av detta tillåter dig att ta bort ärendenumret från ämnesraden i dina e-postmallar.",
    "email_replies_disabled"    => "E-postsvar avaktiverat",
    "disable_user_email_replies_desc" => "Aktivera för att blockera e-postsvar från användare och ta bort svarslinjen från utgående ärendee-post. Som standard blir e-posten ljudlöst ignorerad men du kan sätta en e-post som ska skickas till användaren genom att ändra den valda e-postmallen för 'E-postsvar avaktiverat' valet nedan.",
    "bcc"                       => "BCC",
    "assigned_to_ticket"        => "Tilldelad ärende",
    "user_ticket_reply"         => "Användarärendebesvaring",
    "new_internal_ticket"       => "Nytt internt ärende",
    "department_changed"        => "Avdelning ändrad",
    "operator_ticket_reply"     => "Operatörärendebesvaring",
    "new_ticket_note"           => "Ny ärendenotering",
    "email_template_desc"       => "Du kan välja en e-postmall som inte är standard som ska skickas till användarna eller operatörerna för något av handlingarna nedanför. Denna mall blir standard för enbart denna avdelning.",
    "create_new_user"           => "Skapa ny användare",
    "create_new_user_desc"      => "Skapa en ny användare och set den som detta ärendets användare.",
    "convert_user_ticket_desc"  => "Ärendet konverteras från ett internt ärende till ett användarärende.",
    "user_reply_internal_ticket" => "Inte en operatör. Enbart operatörer can besvara interna ärenden.",
    "enter_email_address"       => "Skriv in e-postadress...",
    "email_user_frontend"       => "E-posta användare när ärenden öppnas på framsidan",
    "email_user_frontend_desc"  => "Ange om användare blir notifierade via e-post om de öppnar ett eget ärende via framsidan.",
    "department_template_disabled" => "Den relevanta avdelningens e-postmall är avaktiverad så denn e-post kunde inte skickas.",
    "verbose_email_log_desc"    => "Om e-postsamlingen skall loggas till fil. Rekommenderas att hålla avaktiverad såvida man inte blivit instruerad av support för debugging. Fem dagars loggar sparas, äldre tas bort automatiskt av systemet.",

    /*
     * 2.2.0
     */
    "macro_order"               => "Automatiska macron körs i en ordning de listas. Dra raderna för att ändra ordningen de körs.",
    "user_ticket_existing_desc" => "Öppna ett nytt ärende på uppdrag av en befintlig användare.",
    "canned_response_tag"       => "Snabbsvars tagg|Snabbsvars taggar",
    "response"                  => "Svar|Svar",
    "response_desc"             => "Snabbsvaraet kan skrivas på flera språk. Språket väljs från användarens inställningar.",
    "no_slaplans"               => "Ingen SLA plan funnen. Klicka <a href=':route'>här</a> för att skapa en",
    "filter_performance"        => "Prestanda överväganden och rekommendationer",
    "filter_performance_desc"   => "<li>Filter som matchar många ärenden kommer att vara långsamma, försöka att exkludera stängda ärenden.</li><li>Filter som använder 'är inte' villkor är normalt långsammar än 'är' villkor.</li><li>Filter som kontrollerat NULL värden (ex. Ärende tagg är Ingen) kommer att vara långsom.</li><li>Undivk många villkor som kontrollerar om strängar/ord eftersom de intriducerar större komplexitet.</li><li>Filter som använder 'börjar med' eller 'innehåller' villkor kommer generellt sett vara långsammare än 'lika med' eller 'slutar med' villkor.</li><li>Avslutade ärenden är exkluderade frpn antalet som visa i sidofältet.</li>",
    "run_macro"                 => "Kör Makro",
    "run_macro_desc"            => "<strong>:macro</strong><br /><em>:description</em>",

    /*
     * 2.3.0
     */
    "registered_users_desc"     => "Aktivera för att endast visa avdelningen för inloggade användare och endast acceptera epost som skickas från registrerade användare. Om akverad kommer ett svarsmail skickas till oregistrerad användare som skickar epost till denna avdelning, för att ändra eller avaktivera, se 'Endast Registrerade Användare' mallen nedan.",
    "form_fields_desc"          => "För att samla in mer information när en användare lämnar återkoppling, kan du lägga till egna fält som visas i formuläret. Fältet kommer att låsa när avnändaren skickar in svaret.",
    "feedback_ratings"          => "Kundnöjdhetsbetyg (förändrar ditt kundnöjdhetspoäng)",
    "email_and_other_accounts"  => "Epost och andra kanal konton",
    "delete_message"            => "Radera meddelande",
    "linked_tickets"            => "Länkade Ärenden",
    "add_linked_ticket"         => "Lägg till Länkat Ärende",
    "add_linked_ticket_desc"    => "Sök efter ärende nummer elle ämne:",
    "create_linked_ticket"      => "Skapa länkat ärende",
    "copy_link"                 => "Kopiera länk",
    "forward_message"           => "Vidarebefodra detta meddelande",
    "forward_from_here"         => "Vidarebefodra ärendet från denna punkt",
    "forward"                   => "Vidarebefodra",
    "forward_options"           => "Vidarebefodraval",
    "forwarded_to"              => "Vidarebefodrat till",
    "new_operator_reply"        => "Nytt operatörs svar",
    "new_user_reply"            => "Nytt användar svar",
    "add_bcc"                   => "Lägg till BCC",
    "at_least_one_recipient"    => "Ange minst en mottagare.",
    "forwarded_message"         => "---------- Vidarebefodrat meddelande ---------",

);
