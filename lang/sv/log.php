<?php

return array(

    // Standard messages
    "item_created"                      => "Skapade ny :item :rel.",
    "item_updated"                      => "Uppdaterade :item :rel.",
    "item_deleted"                      => "Tog bort :item :rel.",

    // Custom messages
    "ip_ban_created"                    => "Skapade ny bannlysning för IP :rel.",
    "ip_ban_updated"                    => "Uppdaterade bannlysning för IP :rel.",
    "ip_ban_deleted"                    => "Tog bort bannlysning för IP :rel.",
    "banned_ip_on_login"                => "bannlyste IP :rel i 15 minuter.",

    "ip_whitelist_created"              => "La till IP :rel i vitlistan.",
    "ip_whitelist_updated"              => "Uppdaterade IP :rel i vitlistan.",
    "ip_whitelist_deleted"              => "Tog bort IP :rel från vitlistan.",

    "system_cleanup"                    => "Körde systemrensning för :rel.",

    "api_failed_login"                  => "IP :rel misslyckades med API-autentisering.",

    "user_successful_login"             => "Loggade in i helpdesk.",
    "user_failed_login"                 => "Misslyckades med autentisering.",
    "user_successful_logout"            => "Loggade ut ur helpdesk.",

    "user_registered"                   => "Registrerade ett konto.",
    "user_confirmed"                    => "Bekräftade sitt konto.",
    "user_password_set"                 => "Lösenordsskyddade sitt konto.",
    "user_password_reset"               => "Återställde sitt kontolösenord.",

    "user_added_to_organisation"        => "Användare :rel tillagd i organisationen :new_value.",
    "user_removed_from_organisation"    => "Användare :rel borttagen från organisationen :old_value.",
    "user_profile_updated"              => "Uppdaterade sin kontoprofil.",
    "user_left_organisation"            => "Lämnade organisationen :rel.",
    "user_organisation_emptied"         => "Tog bort alla användare från organisationen :rel.",
    "user_organisation_updated"         => ":rels organisation åtkomstnivå ändrades från :old_value till :new_value.",
    "organisation_membership_updated"   => "Uppdaterade användarmedlemskapet för organisationen :rel.",
    "organisation_profile_updated"      => "Uppdaterade profilen för organisationen :rel.",
    "organisation_owner_updated"        => "Flyttade organisationens :rel ägarskap till :new_value.",

    "user_emailed"                      => "Skickade ett mail till :rel.",

    "mass_email_queued"                 => "Köade :new_value e-post för att skicka i satser.",
    "mass_email_sent"                   => "Skickade :new_value e-post i kö.",

    "email_send_failed"                 => "Fel: misslyckades med att skicka e-post i kö 5 gånger, tar bort från kö.",
    "email_queue_deleted"               => "Tog bort köat e-post till :rel.",

    "scheduled_task_run"                => "Schemalagda uppgiften :rel har körts manuellt.",

    "selfservice_article_upvoted"       => "Betysatte artikeln :rel positivt.",
    "selfservice_article_downvoted"     => "Betygsatte artikeln :rel negativt.",
    "selfservice_comment_posted"        => "Postade en ny :rel.",
    "selfservice_comment_upvoted"       => "Röstade upp :rel betyget från :old_value till :new_value.",
    "selfservice_comment_downvoted"     => "Röstade ner :rel betyget från :old_value till :new_value.",

    "ticket_opened"                     => "Öppnade nytt ärende #:rel.",
    "ticket_opened_on_behalf"           => "Öppnade nytt ärende #:rel på uppdrag av :new_value.",
    "ticket_opened_email"               => "Importade e-post som ett nytt ärende #:rel.",
    "ticket_deleted"                    => "Tog bort ärende ':old_value' (#:rel).",

    "ticket_followup_set"               => "En uppföljning har satts upp på ärendet #:rel.",
    "ticket_followup_updated"           => "Uppföljningen på ärendet #:rel har uppdaterats.",
    "ticket_followup_deleted"           => "Uppföljningen på ärendet #:rel har tagits bort.",

    "ticket_message_reply"              => "Postade ett nytt svar till ärendet #:rel.",
    "ticket_message_note"               => "Postade en ny notering till ärendet #:rel.",
    "ticket_message_updated"            => "Uppdaterade ett meddelande i ärendet #:rel.",
    "ticket_message_deleted"            => "Tog bort ett meddelande i ärendet #:rel.",

    "ticket_user_updated"               => "Uppdaterade användaren på ärendet #:rel från :old_value till :new_value.",
    "ticket_subject_updated"            => "Uppdaterade ämnet på ärendet #:rel.",
    "ticket_department_updated"         => "Uppdaterade avdelningen på ärendet #:rel från :old_value till :new_value.",
    "ticket_status_updated"             => "Uppdaterade statusen på ärendet #:rel från :old_value till :new_value.",
    "ticket_priority_updated"           => "Uppdaterade prioriteringen på ärendet #:rel från :old_value till :new_value.",
    "ticket_tag_added"                  => "La till etiketten :new_value till ticket #:rel.",
    "ticket_tag_updated"                => "Uppdaterade etiketter på ärendet #:rel.",
    "ticket_tag_removed"                => "Tog bort etiketten :new_value från ticket #:rel.",
    "ticket_slaplan_updated"            => "Uppdaterade SLA-planen på ärendet #:rel från :old_value till :new_value.",
    "ticket_duetime_updated"            => "Uppdaterade sluttiden på ärendet #:rel till :new_value.",
    "ticket_duetime_paused"             => "Pausade sluttiden på ärendet #:rel till nästa användarsvar.",
    "ticket_customfield_updated"        => "Uppdaterade skräddarsydda fält på ärendet #:rel.",
    "ticket_converted_user"             => "Konverterade interna ärendet #:rel till användarärende.",
    "ticket_converted_internal"         => "Konverterade användarärendet #:rel till internt ärende.",

    "ticket_assigned_operator"          => "Tilldelade :new_value till ärendet #:rel.",
    "ticket_unassigned_operator"        => "Tog bort :new_value från ärendet #:rel.",
    "ticket_assigned_self"              => "Tilldelade sig själv till ärendet #:rel.",
    "ticket_assigned_updated"           => "Uppdaterade tilldelade operatörer på ärendet #:rel.",

    "ticket_locked"                     => "Låste ärendet #:rel.",
    "ticket_unlocked"                   => "Låste upp ärendet #:rel.",
    "ticket_locked_reply"               => "Svar kunde inte läggas till på låste ärendet #:rel.",

    "ticket_merged"                     => "Ärende :new_value sammanslaget med ärende #:rel.",
    "ticket_unmerged"                   => "Ärendet :rel har blivit delad.",

    "ticket_user_blocked"               => "Blockerade e-post :new_value (från användare på ärende #:rel).",

    "ticket_closed"                     => "Ärendet #:rel har stängts.",
    "ticket_inactive_closed"            => "Stängt inaktiva ärendet #:rel från status :old_value.",
    "ticket_awaiting_response"          => "Skickat 'väntar på svar'-e-post till användaren på ärendet #:rel.",

    "ticket_split_from"                 => "Meddelande delade från gamla ärendet #:rel till nya ärendet #:new_value.",
    "ticket_split_to"                   => "Meddelande delade från gamla ärendet #:old_value till nya ärendet #:rel.",

    "ticket_email_user"                 => "Skickade e-post till användare.",
    "ticket_email_operators"            => "Skicakde e-post till operatörer.",

    "ticket_feedback_dequeued"          => "Tog bort feedback från formulärbegäran för ärendet #:rel från kö.",
    "ticket_feedback_form_sent"         => "Skickade feedbackformulärbegäran för ärendet #:rel.",

    "ticket_attachment_saved"           => "La till bilaga till ärendet #:rel.",
    "ticket_attachment_deleted"         => "Tog bort bilaga från ärendet #:rel.",

    "ticket_throttled"                  => "Avvisade nytt ärende från :rel p.g.a. throttling.",

    /*
     * 2.0.2
     */
    "ticket_email_operator_group"       => "Skickade e-post till operatörgruppen :new_value.",
    "ticket_email_user_group"           => "Skickade e-post till användargruppen :new_value.",

    /*
     * 2.0.3
     */
    "selfservice_attachment_saved"      => "La till bilagan ':new_value' till artikeln med ID :rel.",
    "selfservice_attachment_deleted"    => "Tog bort bilagan ':new_value' från artikeln med ID :rel.",
    "ticket_unassigned_self"            => "Tog bort sig själv från ärendet #:rel.",

    /*
     * 2.1.0
     */
    "ticket_brand_disabled_reply"       => "Svar kunde inte läggas till på ärendet då det tillhör ett avaktiverat varumärke #:rel.",
    "personal_signatures_updated"       => "Uppdaterade personliga signaturer.",
    "operator_signatures_updated"       => "Uppdaterade :rels signaturer.",
    "check_email_failed"                => "Fel: misslyckades med att ladda ner e-post från kontot :old_value: ':rel'.",
    "ticket_added_cc"                   => "E-posten :new_value tillagd till CC-adresslistan för ärendet #:rel.",
    "ticket_removed_cc"                 => "E-posten :old_value borttagen från CC-adresslistan för ärendet #:rel.",
    "invalid_department_brand"          => "Misslyckades med att sätta avdelningen till ':new_value' på ärendet #:rel, avdelningen tillhör inte ärendevarumärket.",

    /*
     * 2.1.1
     */
    "ticket_message_updated"            => "Uppdaterade meddelandet :message_id i ärendet #:rel.",

    /*
     * 2.1.2
     */
    "sent_email_to"                     => "Skickade ett e-post med ämnet ':extra_rel1' till :rel.",
    "sent_template_email_to"            => "Skickade ':extra_rel1' e-post till :rel.",
    "sent_ticket_email_to_user"         => "Skickade ':extra_rel1' e-post till användaren för ärendet #:rel.",
    "sent_email_to_operators"           => "Skickade ':extra_rel1' e-post till operatörer.",
    "sent_ticket_email_to_operators"    => "Skickade ':extra_rel1' e-post till operatörerna för ärendet #:rel.",
    "sent_email_to_operator_group"      => "Skickade ':extra_rel1' e-post till operatörgruppen ':new_value' för ärendet #:rel.",
    "sent_email_to_user_group"          => "Skickade ':extra_rel1' e-post till användargruppen ':new_value' för ärendet #:rel.",
    "ticket_macro_applied"              => "Makrot ':new_value' kördes på ärendet #:rel.",
    "ticket_macro_automatic"            => "Makrot ':new_value' kördes automatiskt på ärendet #:rel.",
    "email_template_not_found"          => "E-postmallen med ID ':new_value' hittades inte, avbröt e-postutskicket.",
    "ticket_duetime_unset"              => "Tog bort förfallotiden från ärendet #:rel.",
    "private_conversation_started"      => "Startade en konversation med :rel.",
    "private_message_sent"              => "Skickade ett meddelande till :rel.",
    "not_imported_replies_disabled"     => "E-post :extra_rel1 togs emot för ärendet #:rel men importerades inte då e-postsvar är avaktiverat.",
    "not_imported_ticket_locked"        => "E-post :extra_rel1 togs emot för ärendet #:rel men importerades inte då ärendet är låst.",

    /*
     * 2.2.0
     */
    "ticket_user_added_to_group"        => "Ärendetsanvändare lagd till grupp :new_value.",
    "ticket_user_removed_from_group"    => "Ärendetsanvändare bortagen från grupp :old_value.",
    "email_on_behalf"                   => "Vidaresänt :extra_rel2 för ':extra_rel1' räkning, i ärednde #:rel.",

);
