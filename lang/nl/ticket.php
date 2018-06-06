<?php

return array(

    "feedback_question"         => "Vraag die aan de gebruiker wordt getoond.",
    "open_new"                  => "Open nieuw ticket",
    "select_department"         => "Selecteer een afdeling",
    "select_department_desc"    => "Klik onderstaand op de relevante afdeling voor uw issue.",
    "no_departments"            => "Geen afdelingen gevonden.",
    "department_user_details"   => "Gegevens van afdeling en gebruiker",
    "enter_your_details"        => "Vul uw gegevens in",
    "enter_ticket_details"      => "Vul gegevens in",
    "enter_subject_message"     => "Geef onderwerp en bericht op",
    "invalid_user"              => "Controleer of ingevulde gegevens correct zijn.",

    "registered_users"          => "Alleen voor geregistreerde gebruikers",
    "registered_users_desc"     => "Schakelaar om alleen tickets te importeren van gebruikers met een servicedeskaccount.",

    "tickets"                   => "Ticket(s)",
    "ticket"                    => "Ticket|Tickets",
    "subject"                   => "Onderwerp",
    "no_subject"                => "Geen onderwerp",
    "last_action"               => "Laatste action",
    "due_time"                  => "Due Time",
    "created_time"              => "Tijd aangemaakt:",
    "submitted"                 => "Ingediend",
    "add_reply"                 => "Voeg antwoord toe",
    "ticket_reply"              => "Ticket antwoord",
    "ticket_note"               => "Ticket aantekening",
    "ticket_type"               => "Ticket type",

    "user_ticket"               => "Gebruiker ticket",
    "user_ticket_desc"          => "Open nieuwe ticket uit naam van nieuwe of bestaande gebruiker.",
    "existing_user"             => "Bestaande gebruiker",
    "new_user"                  => "Nieuwe gebruiker",
    "internal"                  => "Intern",
    "internal_ticket"           => "Intern ticket",
    "internal_ticket_desc"      => "Open een ticket alleen voor intern gebruik. Dit ticket wordt aangemaakt op jouw naam, niet van een gebruiker.",
    "ticket_opened"             => "Uw ticket is geopend.",
    "enter_user_details"        => "Vul uw gegevens in of login op uw account.",
    "already_have_account"      => "U hebt reeds een account. Log in en open dan een ticket. Of gebruik de wachtwoord vergeten optie.",

    "recent_tickets"            => "Recente tickets",
    "last_message_text"         => "Tekst laatste bericht",

    "set_due_time"              => "Stel due time in",

    "settings"                  => "Ticketinstellingen",

    "priority"                  => "Prioriteit|Prioriteiten",

    "channel"                   => "Kanaal|Kanalen",
    "account"                   => "Account|Accounts",

    "assign_operator"           => "Operator toewijzen",
    "assigned_operator"         => "Toegewezen perators",
    "assigned_to"               => "Toegewezen aan",
    "assigned"                  => "Toegewezen",

    "department"                => "Afdeling|Afdelingen",
    "change_department_order"   => "Sleep de regels om de volgorde van de afdelingen te veranderen die gebruikers te zien krijgen wanneer een nieuw ticket wordt geopend.",
    "department_order"          => "Afdelingsvolgore",
    "department_applicable"     => "Toepasselijke afdelingen",
    "department_applicable_desc" => "De afdelingen in de volgorde waarop deze voor de gebruikers beschikaar zijn om te selecteren. Alleen van toepassing op frontend, alle prioriteiten zijn beschikbaar voor alle operators van alle afdelingen.",

    "due_to_be_sent"            => "Te versturen voor",
    "send_now"                  => "Verstuur nu",

    "tag"                       => "Tag|Tags",

    "track_ticket"              => "Track Ticket",
    "view_ticket"               => "Bekijk Ticket",

    // Recent activity
    "recent_activity"           => "Recente activiteit",
    "no_recent_activity"        => "Geen recente activiteit",

    // Active operators
    "active_operators"          => "Actieve operators",

    "ticket_number"             => "Ticketnummers",
    "ticket_format"             => "Ticketnumberformaat",
    "ticket_format_desc"        => "De volgende variabelen kunnen worden gebruikt:<br />%S voor volgnummer | %N voor een willekeurig nummer | %L voor een willekeurige letter<br />Gebruik {number} <strong>alleen</strong> voor herhaling na %N of %L, bijv. %N{4} resulteert in 4 willkeurige nummers, %L{3} resulteert in 3 willekeurige letters<br />De volgende <a href='http://php.net/manual/en/function.date.php' target='_blank'>PHP Datum</a> Parameters prefixed met % Y,y,m,d,j,g,G,h,H,i,s",

    // Departments
    "department_public_desc"    => "Wanneer de afdeling zichtbaat is voor gebruikers op de servicedesksite.",
    "department_parent_desc"    => "Wanneer de afdeling een onderafdeling is, begin dan met de parent. Onderafdelingen zijn voor interne escalaties en management, daarom verwdijnen bij het instellen enkele opties hieronder..",
    "department_priority"       => "Afdelingsprioriteiten",
    "department_priority_desc"  => "Van de prioriteiten die beschikbaar zijn voor gebruikers wanneer ze voor deze afdeling een ticket aanmaken moet er minstens 1 worden geselecteerd. Standaard worden alle prioriteiten beschikbaar gesteld per afdeling.",
    "department_no_format"      => "Optioneel, alleen instellen op het standaard formaat van het ticketnummer aan te passen. Laat anders blank.",
    "department_operator"       => "Afdelingsoperators",
    "department_default_assign" => "Standaard toewijzen aan",
    "dept_default_assign_desc"  => "Gebruik dit wanneer nieuwe tickets voor deze afdeling standaard moeten worden toegewezen aan een of meer operators.",

    // Department emails
    "email_accounts_desc"       => "Stel een emailadres per afdeling in. Elke inkomende email hiet zal worden aangemaakt als ticket voor deze afdeling. Het eerste adres zal standaard worden gebruikt als verzendadres.",
    "department_password"       => "Vul alleen een wachtwoord in wanneer deze is veranderd of wanneer het emailadres moet worden gecontroleerd.",
    "department_port"           => "Standaard porten zijn:110 voor POP3, 995 voor beveiligde POP3, 143 voor IMAP, en 993 voor beveiligde IMAP. Laat leeg voor standaard port.",
    "department_encryption"     => "Sommige emailproviders vereisen een SSL of TLS verbinding voor de email..",
    "department_delete_mail"    => "Wanneer IMAP gebruikt wordt is het mogelijk te kiezen om de email niet uit de mailbox te verwijderen wanneer ze zijn geimporteerd als tickets.",
    "protocol"                  => "Protocol",
    "server"                    => "Mail Server",
    "port"                      => "Port",
    "username"                  => "Gebruikersnaam",
    "password"                  => "Wachtwoord",
    "encryption"                => "Encryptie",
    "delete_downloaded"         => "Verwijder gedownloade email",
    "consume_all"               => "Haal alle email op",
    "email_download"            => "Email download",
    "email_piping"              => "Email piping",
    "email_piping_desc"         => "Stel een emailforwarder in als hieronder. Het pad naar PHP kan verschillen in uw setup..",
    "remote_email_piping"       => "Remote Email Piping",

    // Department email options
    "email_options"             => "Email Opties",
    "email_auto_close"          => "Email gebruikers wanneer ticket automatisch wordt gesloten",
    "email_auto_close_desc"     => "Selecteer wanneer gebruikers een email moeten krijgen dat er tickets van hen automatisch worden afgesloten.",
    "email_closed_by_operator"  => "Email gebruikers wanneer ticket wordt gesloten door operator",
    "email_closed_by_op_desc"   => "Selecteer wanneer gebruikers een email moeten krijgen wanneer er een ticket van hen wordt afgesloten door een operator.",
    "email_user_on_email"       => "Email gebruikers wanneer ze een ticket openen via email",
    "email_user_on_email_desc"  => "Selecteer wanneer gebruikers een email moeten keijgen wanneer een email die ze sturen wordt opgenomen als ticket.",
    "email_operators"           => "Bericht operators",
    "email_operators_desc"      => "Selecteer wanneer antwoorden van operators moeten worden doorgestuurd naar andere operators. Standaard wordt de \"email operators\" optie in het operator panel gezet, en stuurt dan automatisch een email bij email replies van operators.",
    // Department email templates
    "new_ticket_reply"          => "Nieuw ticket antwoord",
    "new_ticket_opened"         => "Nieuw ticket geopend",
    "reply_to_locked"           => "Antwoord op locked ticket",
    "waiting_for_response"      => "Wacht op antwoord",
    "ticket_auto_closed"        => "Ticket automatisch gesloten",
    "closed_by_operator"        => "Gesloten door operator",

    // Feedback
    "feedback"                  => "Feedback",
    "feedback_form"             => "Feedbackformulier|Feedbackformulieren",
    "feedback_form_desc"        => "Feedbackformulieren worden verwerkt in de volgorde waarin ze verschijnen. Door te slepen kan de volgorde worden veranderd.",
    "view_feedback_report"      => "Bekijk Feedbackrapport",
    "view_feedback"             => "Bekijk feedback",
    "ticket_feedback"           => "Ticket feedback",
    "feedback_fields_error"     => "Er was een probleem bij ophalen van de feedbackvelden.",
    "time_after_resolved"       => "Tijd na oplossing",
    "time_after_resolved_desc"  => "De tijd vanaf dat een ticket is gemarkeerd als opgelost totdat het feedbackformulier naar de gebruiker is verstuurd.",
    "expires_after"             => "Verloopt na",
    "expires_after_desc"        => "De tijd waarna een feedbackformulier niet meer kan worden gebruikt. Aanbevolen instelling is 7 dagen, maar wanneer 0 wordt ingevuld in alle velden verloopt het formulier nooit.",
    "form_conditions"           => "Formuliervoorwaarden",
    "form_conditions_desc"      => "Definieer de voorwaarden voor zojuist opgeloste tickets om vast te stellen of ze onder dit formulier vallen. Wanneer een ticket onder meerder formulieren valt wordt er gekeken naar prioriteit welke kan worden aangepast door de volgorde van de formulieren te veranderen.",
    "form_fields"               => "Formuliervelden",
    "form_fields_desc"          => "Wilt u extra informatie wanneer de gebruiker feedback geeft kunt u deze extra velden toevoegen.",
    "response_rate"             => "Response rate",
    "sent_forms"                => "Verstuurde feedbackformulieren",
    "rating"                    => "Rating",
    "good_ratings"              => "Goede Ratings",
    "bad_ratings"               => "Slechte Ratings",
    "customer_satisfaction"     => "Klanttevredenheid",
    "feedback_desc"             => "Dank u dat u contact met ons op hebt genomen en we hopen uw vraag te hebben beantwoord. U kunt uw ervaring beoordelen..",
    "good_satisfied"            => "Goed, ik ben tevreden",
    "bad_not_satisfied"         => "Slecht, ik ben ontevreden",
    "feedback_not_found"        => "Uw feedback kon niet worden geaccepteerd, indien u de feedback alsnog wilt delen kunt u hier een ticket voor openen.",
    "feedback_malformed_token"  => "Uw feedback kon niet worden geaccepteerd vanwege een foutieve token. Indien u de feedback alsnog wilt delen kunt u hier een ticket voor openen.",
    "feedback_already_done"     => "U hebt voor dit ticket reeds feedback gegeven, bedankt.",
    "feedback_expired"          => "Dit ticket is al enige tijd geleden opgelost, de periode voor feedback is reeds verlopen.",
    "feedback_questions"        => "We hopen dat we in de toekomst nog betere ondersteuning kunnen leveren. Om onshierbij te helpen kunt u de volgende vragen beantwoorden.",
    "feedback_thank_you"        => "Dank u voor het geven van feedback op dit ticket",
    "feedback_for_ticket"       => "Feedback voor ticket #:number",
    "feedback_rating_desc"      => "De ondersteuning voor dit ticket is beoordeeld als <strong>:rating</strong> door de gebruiker.",

    // Custom fields
    "customfield"               => "Ticket aangepast veld|Ticket aangepaste velden",
    "customfield_order"         => "Sleep de regels om de volgorde van de aangepast velden te veranderen waarin deze worden getoond aan de gebruiker wanneer ze via de website een ticket openen.",

    // Canned responses
    "cannedresponse"            => "Standaard antwoord|Standaard antwoorden",
    "canned_response_category"  => "Standaard antwoord cetegorie|Standaard antwoord cetegorieen",
    "canned_public_desc"        => "Stel in om de standaard antwoorden alleen voor uzelf bereikbaar te maken.",
    "canned_group_desc"         => "Wanneer u het standaard antwoord beschikbaar wilt maken voor andere operators laat dan dit veld leeg.",

    // Filters
    "filter"                    => "Filter|Filters",
    "filter_condition"          => "Filtervoorwaarden",
    "filter_condition_desc"     => "Definieer de voorwaarden waaronder tickets onder dit filter worden getoond.",
    "filter_public_desc"        => "Stel in om dit filter alleen voor uzelf bereikbaar te maken.",
    "filter_group_desc"         => "Wanneer u het filter beschikbaar wilt maken voor andere operators laat dan dit veld leeg.",

    // Macros
    "macro"                     => "Macro|Macros",
    "macro_type"                => "Macro type",
    "macro_type_desc"           => "Standaard moet een macro worden opgeroepen in ticketview. Een automatische macro kan worden ingesteld and geactiveerd wanneer nieuwe tickets binnenkomen of voor alle tickets middels een ingeplande taak, hoe dan ook, voorwaarden worden gecontroleerd en wanneer deze passen worden de acties automatisch uitgevoerd. Een macro kan slechts eenmalig automatisch op een ticket worden uitgevoerd, maar handmatig heeft geen limiet.",
    "manual"                    => "Handmatig",
    "macro_type_auto1"          => "Automatisch - Alleen op nieuwe tickets",
    "macro_type_auto2"          => "Automatisch - Alle tickets (ingeplande taak",
    "macro_condition"           => "Macro voorwaarden",
    "macro_condition_desc"      => "Definieer de voorwaarden voor welke tickets deze macro beschikbaar zal zijn. Standaard zal het voor alle tickets gelden.",
    "macro_action"              => "Macro Acties",
    "macro_action_desc"         => "Definieer de acties welke worden uitgvoerd wanneer een macro word tt uitgevoerd. Zorg wel dat de acties geldig zijn voor de afdeling waar het ticket is anders worden ze genegeerd.",

    "from"                      => "Van",
    "to"                        => "Aan",
    "cc"                        => "CC",
    "cc_desc"                   => "U kunt meerdere ontvangers CCen door de emailadressen in te voeren.",

    "allowed_files"             => "Toegestande bijlagen",

    // Drafts
    "also_viewing"              => "<strong>:name</strong> bekijkt dit ticket ook.",
    "draft_saved"               => "Concept opgeslagen op :time",
    "save_draft"                => "Bewaar concept",
    "discard_draft"             => "Concept verwijderen",

    // Locked
    "error_ticket_locked"       => "Dit ticket is gelocked en kan niet worden bijgewerkt, indien u verdere ondersteuning nodig hebt kunt u een nieuw ticket openen.",

    // Ticket Followups
    "follow_up"                 => "Opvolging",
    "follow_up_status_desc"     => "Verander de status van een ticket totdat er opvolging plaatsvindt.",
    "exact_date_time"           => "Exacte datum en tijd",
    "time_from_now"             => "Voorlopige tijd",

    // Schedule
    "schedule"                  => "Planning|Planningen",
    "business_hour"             => "Kantoortijden",
    "business_hour_desc"        => "Kantoortijden geven de tijd aan waarin servicedeskmedewerkers beschikbaar zijn. Deze tijden worden meegereked met de bepaling van de deadline (due time)..",

    // Holidays
    "holiday"                   => "Feestdag/Feestdagen",
    "all_holidays"              => "Alle feestdagen",
    "specific_holidays"         => "Specifieke feestdagen",
    "holiday_or_on_the"         => "of, op de",
    "holiday_month_year_desc"   => "Jaar is optioneel wanneer een feestdag herhaald wordt. Selecteer alleen eenjaar wanneer de feestdag slechts op deze specifieke datum plaatsvindt.",

    // SLA Plans
    "sla_plan"                  => "SLA|SLA",
    "specific_schedule"         => "Specifieke planningen",
    "calendar_hours_24"         => "Kalendaruren (24 uurs)",
    "resolution_time"           => "Oplostijden",
    "resolution_time_desc"      => "Stek de tijden in waarbinnen een ticket moet worden beantwoord en opgelost per prioriteit. De tijd telt alleen binnen de werktijden van de planning, decimale waarden kunnen worden gebruikt.",
    "reply_within"              => "Beantwoord binnen",
    "resolve_within"            => "Oplossen binnen",
    "plan"                      => "SLA",
    "sla_condition"             => "SLA voorwaarden",
    "sla_condition_desc"        => "Defininieer de ticketvoorwaarden voor controle of nieuwe tickets vallen onder deze SLA. Wanneer een ticket onder meerdere SLAs valt wordt er gekozen naar prioriteit. Deze prioteit kan worden aagepast in de lijst van SLAs.",
    "escalation_rule"           => "Escalatieregels",
    "escalation_rule_desc"      => "Definieer acties die worden uitgevoerd wanneer een ticket met dit SLA over tijd dreigt te gaan. Zorg er wel voor dat de regels gelden voor de afdeling van het ticket, anders worden deze acties genegeerd.",
    "condition"                 => "Voorwaarde",
    "condition_group"           => "Voorwaardegroep",
    "all_groups"                => "ALLE groepen moeten waar zijn",
    "any_group"                 => "EEN groep hoeft slechts waar te zijn",
    "all_conditions"            => "ALLE voorwaarden binnen de groep moeten waar zijn",
    "any_condition"             => "EEN voorwaarde binnen de groep hoeft slects waar te zijn",
    "sla_plan_desc"             => "SLAs worden verwerkt in de volgorde waarop ze getoond worden. Verplaats de regels om de prioteit aan te passen.",

    // Reply options
    "reply_options"             => "Antwoord opties",
    "send_email_to_users"       => "Stuur Email naar gebruiker(s)",
    "send_email_to_operators"   => "Stuur Email naar operator(s)",
    "back_to_grid"              => "Ga terug naar ticket veld",
    "take"                      => "Neem",
    "take_ownership"            => "Neem eigendom",
    "pause_duetime"             => "Pauzeer de verwachte tijd",
    "add_to_canned_responses"   => "Toevoegen aan standaardantwoorden",
    "visible_to_all_operators"  => "Maak zichtbaar voor alle operator(s)",
    "set_status"                => "Zet Status",
    "add_selfservice_link"      => "Voeg Self-Service Link toe",
    "search_selfservice"        => "Zoek naar een self-service artikel",
    "add_canned_response"       => "Voeg standaardantwoord toe",
    "search_canned"             => "Zoek voor een autoantwoord",

    "mark_resolved"             => "Markeer als opgelost",

    "ticket_signature"          => "Ticket handtekening",

    "default_open_status"       => "Standaard open status",

    "default_resolve_status"    => "Standaard opgeloste status",
    "default_resolve_status_desc" => "Kies de standaard status dat gebruikt wordt voor opgeloste tickets",

    "waiting_response_time"      => "Wachten voor antwoord mail",
    "waiting_response_time_desc" => "De tijd nadat gebruikers een mail krijgen op inactieve tickets, met de vraag of zij het ticket opgelost beschouwen. Zet op 0 om uit te zetten.",

    "close_inactive_tickets"    => "Sluit inactieve tickets",
    "close_inactive_tickets_desc" => "De tijd waarin inactive tickets automatisch gesloten worden, zet op 0 om ze nooit automatisch te laten sluiten",
    "close_inactive_status_desc" => "Automatisch sluit tickets die inactief zijn geworden door geen opvolging van de gebruiker zijn kant(gedefineerd door het aantal dagen van de laatste reactie van een gebruiker in generale instellingen van een ticket).",

    "ticket_reply_order"        => "Ticket beantwoord volgorde",
    "ticket_reply_order_desc"   => "Selecteer de volgorde waarin tickets lopen, oplopend waarin het laatste bericht als laatste staat of aflopend waarin het laatste bericht bovenaan staat",

    "ticket_notes_position"     => "Ticket notitie positie",
    "ticket_notes_position_desc" => "Selecteer waar in het ticket de betreffende notitie moet komen",
    "ticket_notes_top_messages" => "Boven en in het bericht",
    "ticket_notes_top"          => "Alleen boven",
    "ticket_notes_messages"     => "Alleen in het bericht",

    "captcha_desc"              => "Wanneer de Captcha zich laat zien bij nieuwe gebruikers die een nieuwe ticket openen",
    "unregistered_only"         => "Alleen ongeregistreerde gebruikers",

    "allow_unauth_users"        => "Sta ongeverifieerde gebruikers toe",
    "allow_unauth_users_desc"   => "Sta gebruikers die niet ingelogd zijn toe om tickets te bekijken en te beantwoorden. Als u dit uitschakelt, wordt ook de track ticket functie verwijderd en moeten gebruikers zich  registreren en inloggen voordat ze toegang kunnen krijgen tot tickets. ",

    "default_department"        => "standaard afdeling",
    "default_department_desc"   => "De standaardafdeling die op alle inkomende tickets is ingesteld via dit kanaal.",

    "show_related_articles"     => "Laat gerelateerde artikelen zien",
    "show_related_articles_desc" => "Wanneer de gebruiker het onderwerp aan het typen is, kunnen deze gerelateerde artikelen worden getoond op basis van wat ze hebben ingevoerd. Vereist dat de selfservicemodule wordt ingeschakeld en MySQL 5.6+.",

    // Email Channel Settings
    "default_priority"          => "Standaard prioriteit",
    "default_priority_desc"     => "De standaard prioriteit op alle inkomende tickets via dit kanaal.",
    "verbose_email_log"         => "Uitgebreid e-maillogboek",

    "adjust_columns"            => "Kolommen aanpassen",
    "last_reply"                => "Laatste antwoord",
    "opened_at"                 => "Geopend om",

    "change_department"         => "Verander afdeling",
    "change_status"             => "Verander status",
    "no_statuses"               => "Geen status gevonden. Klik <a href=':route'>hier</a> om aan te maken",
    "no_priorities"             => "Geen prioriteiten gevonden. Klik <a href=':route'>hier</a> om aan te maken", 
    "no_templates"              => "Geen aangepaste e-mailsjablonen gevondend. Klik <a href=':route'>hier</a> om aan te maken",
    "no_tags"                   => "Geen ticket tags gevonden. Klik <a href=':route'>hier</a> om aan te maken",
    "no_departments_found"      => "Geen afdelingen gevonden. Klik <a href=':route'>hier</a> om aan te maken",
    "no_operators_found"        => "Geen operators gevonden. Klik <a href=':route'>hier</a> om aan te maken",
    "change_priority"           => "Wijzig prioriteit",
    "add_tag"                   => "Voeg tag toe",

    "unlock"                    => "Openen",
    "merge"                     => "Samenvoegen",
    "merged"                    => "Samengevoegd",
    "unmerge"                   => "Samenvoegen opheffen",
    "close_and_lock"            => "Sluiten en op slot doen",
    "delete_and_block"          => "Verwijder en blokkeer",

    "block_warning"             => "De e-mail van de gebruiker wordt ook geblokkeerd en kan geen tickets meer openen.",

    "mass_reply"                => "Massa beantwoorden",

    "delete_warning"            => "Verwijderen van deze tickets is permanent.",

    "due_today"                 => "Uiterlijk vandaag",
    "overdue"                   => "Achterstallig",
    "unassigned"                => "Niet-toegewezen",

    "pause_duetime_desc"        => "Als er een actieve SLA op dit ticket is, pauzeert u dan de resterende tijd tot na de opvolgende datum. De uiterlijke datum begint pas weer als een antwoord of notitie aan het ticket is toegevoegd (inclusief de opvolgende)",
    "delete_follow_up"          => "Verwijder opvolgende",

    "add_cc"                    => "Voeg CC toe",
    "reply_above_line"          => "Antwoord u boven deze lijn alstublieft",

    "oauth2_token"              => "OAuth2 Token",
    "email_settings"            => "Email Instellingen",
    "web_settings"              => "Web Instellingen",
    "split_selected_replies"    => "Splits Selecteerde antwoorden",

    "track_ticket_not_found"    => "Kon het ticket met ticketnummer en e-mailadres van de gebruiker niet vinden",

    "channel_deactivated"       => "Het ticket kanaal is momenteel gesloten, een antwoord kan niet geplaatst worden.",

    "type_in_tags"              => "Type in tags",

    /*
     * 2.0.1
     */
    "allowed_files_desc"        => "Een lijst met bestandsextensies, gescheiden door de pipe | karakter, die zijn toegestaan als bijlagen. Bijvoorbeeld: txt | png | jpg. Om alle bijlagen toe te staan, voer in: ?.*",

    /*
     * 2.0.2
     */
    "no_operator_groups"        => "Geen operator groupen gevonden. Klik <a href=':route'>here</a> om een aan te maken.",
    "no_user_groups"            => "Geen gebruiker groepen gevonden. Klik <a href=':route'>here</a> om een aan te maken.",
    "opened_by"                 => "(Geopend door:name)",
    "remote_email_piping_desc"  => "Download the <a href='http://www.supportpal.com/manage/dl.php?type=d&id=8' target='_blank'>remote email piping script</a> and follow the <a href='http://docs.supportpal.com/display/DOCS/Remote+Email+Piping' target='_blank'>documentation</a> on configuring it on your mail server.",
    "not_assigned_department"   => "Sorry, you're not permitted to view tickets in the :department department. If you think this has been shown in error, please contact your administrator.",
    /*
     * 2.0.3
     */
    "department_consume_all"    => "SupportPal heeft standaard ondersteuning voor e-mailalias en controleert het AAN-adres bij binnenkomende e-mail om te zien op welke afdeling het ticket moet worden geopend. Een ticket wordt niet geopend als het e-mailadres van een overeenkomende afdeling niet kan worden gevonden. Wanneer u deze instelling inschakelt worden alle e-mails zonder e-mailadres van een overeenkomende afdeling als tickets in deze afdeling geïmporteerd.",
    "default_reply_options"     => "Standaard Antwoord Opties",
    "default_reply_options_desc" => "Selecteer de standaardantwoordopties die moeten worden ingesteld bij het openen of beantwoorden van een ticket. De optie ': reply_option' wordt aangevinkt op basis van de instelling ': department_option'.",
    "associate_response_tag"    => "Associeer standaardantwoord met een label...",
    "canned_response_tags_desc" => "Labels toevoegen die kunnen helpen bij het vinden van een standaardantwoord bij het beantwoorden van een ticket.",
    "loading_tags"              => "Labels laden",
    "append_ip_address"         => "Voeg IP Adres toe",
    "append_ip_address_desc"    => "Voeg het IP-adres van gebruikers toe aan hun berichten wanneer ze openen en antwoord geven op tickets van de frontend.",
    "unassign_operator"         => "Operator ongedaan maken",
    "remove_tag"                => "Verwijder Label",
    "message_clipped"           => "[Bericht Geknipt]",
    "view_entire_message"       => "Volledige Bericht Inlezen",
    "no_custom_fields"          => "Geen aangepaste velden gevonden. Klik <a href=':route'>here</a> om een aan te maken.",
    "follow_up_active"          => "A <a class='view-followup' style='text-decoration: underline;'>follow up</a> is currently active on this ticket and will run <strong>:time</strong>.",
    "disable_user_email_replies" => "Verwijder Gebruiker Email Antwoorden",

    /*
     * 2.1.0
     */
    "default_ticket_filter"     => "Standaard Ticket Filter",
    "default_ticket_filter_desc" => "Het ticketfilter dat standaard wordt gebruikt bij het klikken op de link 'Tickets beheren'. Kan worden ingesteld op 'Geen', de standaardoptie, die alle onopgeloste tickets toont.",
    "recent_filters"            => "Recente Filters",
    "inactive_tickets"          => "Inactieve Tickets",
    "default_open_status_desc"  => "Selecteer de standaardstatus die automatisch moet worden ingesteld wanneer een gebruiker een nieuw ticket opent of antwoordt op een ticket, wanneer een operator nog niet gereageeerd heeft.",
    "default_reply_status"      => "Standaard Antwoord Status",
    "default_reply_status_desc" => "Selecteer de standaardstatus die automatisch moet worden ingesteld wanneer een gebruiker op een ticket antwoordt, is alleen van toepassing nadat een operator op het ticket heeft geantwoord.",
    "drafting_reply"            => "<strong>:name</strong> started to draft a :type :time:",
    "ticket_reply_order_default" => "Systeemstandaard gebruikt de waarde die momenteel is geselecteerd in de algemene ticketinstellingen.",
    "select_a_parent"           => "Selecteer een bovenliggende afdeling...",
    "select_a_department"       => "Selecteer een afdeling...",
    "not_assigned_brand"        => "Sorry, het is niet toegestaan om tickets van deze soort te bekijken. Als u denkt dat dit ten onrechte is, neemt u dan contact op met uw beheerder.",
    "department_operator_desc"  => "U kunt ook individuele operators aan de afdeling toewijzen. Deze operators komen bovenop de hierboven toegewezen groepen.",
    "department_group"          => "Afdeling Groepen",
    "department_group_desc"     => "U kunt hele groepen operatoren toewijzen aan de afdeling, aanbevolen als uw lijst met operators groot is en / of regelmatig wordt gewijzigd.",
    "ticket_other_brands"       => "Tickets van andere Soort",
    "add_for_department"        => "Toevoegen voor Afdeling...",
    "record_order"              => "Versleep de rijen om de volgorde van records te wijzigen.",
    "ticket_token"              => "Ticket Token",
    "reply_all"                 => "Allen Beantwoorden",
    "reply_without_cc"          => "Beantwoord (zonder CC)",
    "open_new_for_user"         => "Open Nieuw Ticket Voor Gebruiker",
    "email_accounts"            => "Email Accounts",
    "add_another_email"         => "Een ander e-mailadres toevoegen",
    "follow_up_date"            => "Opvolgende datum",
    "post_reply"                => "Reageer",
    "post_note"                 => "Bericht",
    "ticket_details"            => "Ticket Details",
    "organisation_tickets"      => "Organisatie Tickets",
    "manage_tickets"            => "Beheer Tickets",
    "via_channel"               => "via :channel",
    "department_parent"         => "Bovenliggende Afdeling",
    "department_brands"         => "Afdeling Soorten",
    "email_item"                => "Email :item",
    "from_name"                 => "Van Naam",
    "from_address"              => "Van Adres",

    /*
     * 2.1.1
     */
    "edited_message"            => ":user op :date",
    "prioritise_reply-to"       => "Prioritiseer Reply-To",
    "prioritise_reply-to_desc"  => "Schakel in om de Reply-To header prioriteit te geven over de From header. Wanneer ingesteld zullen tickets die via mail zijn aangemaakt worden geopend op naam van de Reply-To.",
    "note_options"              => "Notitie Opties",
    "escalation_rules_desc"     => "Onderstaand SLA escalatieregels zijn ingesteld om uitgevoerd te worden op de vermelde tijden. Deze tijden kunnen worden aangepast en de regels kunnen worden verwijderd indien een operator op het ticket antwoord.",

    /*
     * 2.1.2
     */
    "not_registered_user"       => "Geen geregistreerde gebruiker. Dit kanaal accepteerd alleen emails van geregistreerde gebruikers.",
    "display_name"              => "Stuur email aan getoonde naam",
    "display_name_desc"         => "Optioneel, gebruik alleen wanneer de getoonde naam in uitgaande email moet worden aangepast, anders laat blank.",
    "display_name_options"      => "De volgende Twig variabelen kunnen worden gebruikt:<br >{{ brand.name }} - Merknaam<br />{{ department.name }} - Afdelingsnaam<br />{{ department.frontend_name }} - Toont naam van de gehele afdeling mits het ticket toebehoort aan een subafdeling.<br />{{ operator.formatted_name }} - Operatornaam<br /><em>De operatornaam zal niet altijd beschikbaar zijn, gebruik dus een 'not empty' voorwaarde zoals {% if operator is not empty %}{{ operator.formatted_name }}{% endif %}</em>",
    "attachment_rejected"       => "Bijlage geweigerd",
    "enable_subaddresses"       => "Sta Sub-adressen toe",
    "enable_subaddresses_desc"  => "Schakelt het gebruik van sub-adressen in voor alle afdelingen. Dit creeert een uniek sub-adress voor elk ticket welke als Reply-To adress wordt gebruikt op uitgaande email. De gebruikte mailserver moet natuurlijk wel het gebruik van sub-adressen ondersteunen. Er kunnen extra stappen nodig zijn wanneer u gebruik maakt van email piping om ervoor te zorgen dat deze adressen correct worden doorgestuurd. Het inschakelen van deze functie stelt u in staat het ticketnummer uit de onderwerpregel te verwijderen.",
    "email_replies_disabled"    => "Email Replies uitgeschakeld",
    "disable_user_email_replies_desc" => "Schakel dit in om antwoorden per email van gebruikers niet te accepteren, en verwijderd ook de reply clipping regel in uitgaande emails. Standaard worden de antwoorden stilletjes genegeerd, maar u kunt ook een email laten sturen naar de gebruiker dat antwoorden per email niet worden gebruikt middels de 'Email Replies Disabled'-teplate.",
    "bcc"                       => "BCC",
    "assigned_to_ticket"        => "Toegewezen aan ticket",
    "user_ticket_reply"         => "Antwoord op ticket van gebruiker",
    "new_internal_ticket"       => "Nieuw intern ticket",
    "department_changed"        => "Afdeling veranderd",
    "operator_ticket_reply"     => "Antwoord op operator ticket",
    "new_ticket_note"           => "Nieuwe notitie voor ticket",
    "email_template_desc"       => "U kunt een emailtemplate selecteren welke gebruikt zal worden ipv de standaard om verzonden te worden naar de gebruiker of operators voor elke van de onderstaande acties. Deze template zal alleen voor deze afdeling standaard worden.",
    "create_new_user"           => "Maak nieuwe gebruiker",
    "create_new_user_desc"      => "Maak een nieuwe gebruiker en stel deze in als gebruiker van dit ticket.",
    "convert_user_ticket_desc"  => "Dit ticket zal worden omgezet van intern naar gebruikersticket.",
    "user_reply_internal_ticket" => "Geen operator. Alleen operators kunnen een intern ticket beantwoorden.",
    "enter_email_address"       => "Vul het emailadress in...",
    "email_user_frontend"       => "Email gebruikers bij tickets die worden geopend op de frontend",
    "email_user_frontend_desc"  => "Selecteer of gebruikers een email moeten krijgen wanneer ze op de frontend een ticket aanmaken.",
    "department_template_disabled" => "De afdelingstemplate in kwestie is uitgeschakeld, deze email kan niet worden verstuurd.",
    "verbose_email_log_desc"    => "Indien emailcollectie wordt gelogd is het aanbevolen dit alleen te gebruiken indien support dit nodig heeft voor debugging. Vijf dagen aan logs worden bewaard, oudere logs worden automatisch verwijderd.",

    /*
     * 2.2.0
     */
    "macro_order"               => "Automatische macros worden verwerkt in de volgorde waarin ze worden getoond. Verplaats de regels om de prioteit aan te passen.",
    "user_ticket_existing_desc" => "Open een ticket in naam van een bestaande gebruiker.",
    "canned_response_tag"       => "Standaard antwoord tag|Standaard antwoorden tags",
    "response"                  => "Antwoord|Antwoorden",
    "response_desc"             => "Het standaard antwoord kan in verschillende talen worden geschreven. Het passende antwoord zal automatisch de door de gebruiker ingestelde taal gebruiken.",
    "no_slaplans"               => "Geen SLA gevonden. Klik <a href=':route'>hier</a> om er een aan te maken.",
    "filter_performance"        => "Prestatieoverwegingen en -aanbevelingen",
    "filter_performance_desc"   => "<li>Filters die meerdere tickets bestrijken zullen langzamer zijn. Probeer zoveel mogelijk opgeloste tickets uit te sluiten.</li><li>Filters met een 'is not'-voorwaarde zijn langzamer dan met een  'is'-voorwaarde.</li><li>Filters die checken voor NULL waardes (zoals ticket tag is None) zijn langzamer.</li><li>Beperk gebruik van meerdere voorwaardes die strings/woorden checken omdat dit meer complexiteit brengt.</li><li>Filters met 'begint met' of 'bevat' voorwaardes zijn langzamer dan 'is gelijk' of 'eindigt op'.</li><li>Opgelost tickets worden niet meegeteld in de sidebar.</li>",
    "run_macro"                 => "Voer macro uit",
    "run_macro_desc"            => "<strong>:macro</strong><br /><em>:description</em>",
);
