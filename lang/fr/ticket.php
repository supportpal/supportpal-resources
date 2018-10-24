<?php

return array(

    "feedback_question"         => "Billet à afficher à l'usager.",
    "open_new"                  => "Ouvrir un billet",
    "select_department"         => "Choisir un département",
    "select_department_desc"    => "Veuillez choisir le département en lien avec votre demande.",
    "no_departments"            => "Aucun département trouvé.",
    "department_user_details"   => "Informations sur le département et l'utilisateur",
    "enter_your_details"        => "Entrez vos informations",
    "enter_ticket_details"      => "Entrez informations",
    "enter_subject_message"     => "Entrez sujet et message",
    "invalid_user"              => "Assurez-vous d'entrer des données valides avant de poursuivre.",

    "registered_users"          => "Usagers enregistrés uniquement",
    "registered_users_desc"     => "Activer pour n'importer que des billets d'usagers qui détiennent un compte valide dans le portail sécurisé.",

    "tickets"                   => "Billet(s)",
    "ticket"                    => "Billet|Billets",
    "subject"                   => "Sujet",
    "no_subject"                => "Aucun sujet",
    "last_action"               => "Dernière action",
    "due_time"                  => "Dû à",
    "created_time"              => "Ajouté à",
    "submitted"                 => "Soumis",
    "add_reply"                 => "Ajouter réponse",
    "ticket_reply"              => "Répondre à l'utilisateur",
    "ticket_note"               => "Ajouter une note interne",
    "ticket_type"               => "Type de billet",

    "user_ticket"               => "Billet d'utilisateur",
    "user_ticket_desc"          => "Ouvre un nouveau billet au nom d'un utilisateur.",
    "existing_user"             => "Utilisateur existant",
    "new_user"                  => "Nouvel utilisateur",
    "internal"                  => "Interne",
    "internal_ticket"           => "Billet interne",
    "internal_ticket_desc"      => "Ouvre un billet pour usage interne seulement. Le billet sera associé à vous et non pas à un utilisateur.",
    "ticket_opened"             => "Votre billet a été ouvert.",
    "enter_user_details"        => "Veuillez entrer vos détails ci-dessous ou vous connecter à votre compte si vous en avez un.",
    "already_have_account"      => "Si vous avez déjà un compte, veuillez vous connecter d'abord et ouvrez ensuite votre billet. Veuillez utiliser la fonction 'Mot de passe oublié' au besoin.",

    "recent_tickets"            => "Billets récents",
    "last_message_text"         => "Dernier message",

    "set_due_time"              => "Dû pour",

    "settings"                  => "Paramètres du billet",

    "priority"                  => "Priorité|Priorités",

    "channel"                   => "Canal|Canaux",
    "account"                   => "Compte|Comptes",

    "assign_operator"           => "Assigner opérateur",
    "assigned_operator"         => "Opérateurs assignés",
    "assigned_to"               => "Assigné à",
    "assigned"                  => "Assigné",

    "department"                => "Département|Départements",
    "change_department_order"   => "Faites glisser les lignes pour modifier l'ordre que les Départements sont présentés aux clients lors de l'ouverture d'un nouveau ticket.",
    "department_order"          => "Tri des départements",
    "department_applicable"     => "Départements applicables",
    "department_applicable_desc" => "Les départements dans lesquels la priorité sera disponible pour les clients de sélectionner. Valable uniquement pour le frontend, toutes les priorités seront disponibles aux opérateurs pour tous les ministères.",

    "due_to_be_sent"            => "Doit être envoyé",
    "send_now"                  => "Envoyer maintenant",

    "tag"                       => "Etiquette|Etiquettes",

    "track_ticket"              => "Suivre les billets",
    "view_ticket"               => "Voir le billet",

    // Recent activity
    "recent_activity"           => "Activité récente",
    "no_recent_activity"        => "Aucune activité récente",

    // Active operators
    "active_operators"          => "Opérateurs actifs",

    "ticket_number"             => "Numéro du billet",
    "ticket_format"             => "Format du numéro du billet",
    "ticket_format_desc"        => "Les variables suivantes peuvent être utilisées:<br />%S pour un numéro séquentiel | %N pour un nombre aléatoire | %L pour une lettre aléatoire<br />Utiliser {number} pour répéter <strong>uniquement</strong> après %N ou %L, p.ex. %N{4} équivaut à 4 nombres aléatoires, %L{3} équivaut à 3 lettres aléatoires<br />Voici <a href='http://php.net/manual/en/function.date.php' target='_blank'>PHP Date</a> Paramètres préfixées % Y,y,m,d,j,g,G,h,H,i,s",

    // Departments
    "department_public_desc"    => "Si le département est visible pour les clients sur le Web Help Desk.",
    "department_parent_desc"    => "Si le département est un sous-département, s'il vous plaît sélectionner un parent. Les rayons auxiliaires sont destinés à l'escalade et la gestion interne, donc la définition de cette supprimera certaines des options ci-dessous.",
    "department_priority"       => "Priorités du département",
    "department_priority_desc"  => "Les priorités qui seront disponibles pour les clients lors de l'ouverture d'un ticket dans ce département, au moins un doit être sélectionné. Par défaut, toutes les priorités seront disponibles dans le département.",
    "department_no_format"      => "En option, uniquement mettre pour remplacer le format de numéro de ticket par défaut, laissez en blanc autrement.",
    "department_operator"       => "Opérateurs du département",
    "department_default_assign" => "Assigner à par défaut",
    "dept_default_assign_desc"  => "Utilisez ceci si vous souhaitez attribuer automatiquement les nouveaux billets à un ou des opérateurs.",

    // Department emails
    "email_accounts_desc"       => "Utilisez cette option si vous souhaitez des tickets qui sont ouverts dans ce département pour être automatiquement affecté à un ou plusieurs opérateurs.",
    "department_password"       => "Seulement un mot de passe pour remplacer le mot de passe enregistré existant ou pour valider les détails du compte e-mail.",
    "department_port"           => "Les valeurs par défaut sont: 110 pour POP3, 995 pour POP3 sécurisé, 143 pour IMAP, et 993 pour IMAP sécurisé. Laissez vide pour utiliser la valeur par défaut.",
    "department_encryption"     => "Certains fournisseurs de messagerie exigent SSL ou TLS pour se connecter, si vous n'êtes pas sûr de laisser ce paramètre sur Aucun.",
    "department_delete_mail"    => "Si vous utilisez IMAP, vous pouvez choisir de ne pas supprimer les e-mails sur le serveur après qu'ils ont été importés en tant que tickets.",
    "protocol"                  => "Protocole",
    "server"                    => "Serveur de courriels",
    "port"                      => "Port",
    "username"                  => "Nom d'usager",
    "password"                  => "Mot de passe",
    "encryption"                => "Cryptage",
    "delete_downloaded"         => "Effacer courriels téléchargés",
    "consume_all"               => "Consommez Tout Email",
    "email_download"            => "Email Téléchargement",
    "email_piping"              => "Email Piping",
    "email_piping_desc"         => "Mettre en place un e-mail expéditeur comme le suivant, le chemin exécutable PHP peut être différent sur votre serveur.",
    "remote_email_piping"       => "Distance Email Piping",

    // Department email options
    "email_options"             => "Options courriels",
    "email_auto_close"          => "Envoyer un courriel aux utilisateurs lors de la fermeture d'un billet",
    "email_auto_close_desc"     => "Sélectionnez si les clients doivent être envoyées par courriel lorsque les tickets qui leur appartiennent sont automatiquement fermés par le système.",
    "email_closed_by_operator"  => "Email clients lorsque Ticket fermé par l'opérateur",
    "email_closed_by_op_desc"   => "Sélectionnez si les clients doivent être envoyées par courriel lorsque les tickets leur appartenant sont fermés par un opérateur.",
    "email_user_on_email"       => "Envoyer courriel aux usagers quand un billet est ouvert par courriel",
    "email_user_on_email_desc"  => "Sélectionnez si les clients doivent être informés par courriel lorsqu'un email ils envoient des résultats dans un nouveau ticket étant ouvert.",
    "email_operators"           => "Notifier opérateurs",
    "email_operators_desc"      => "Indiquez si vous souhaitez transmettre les réponses de l'opérateur à d'autres opérateurs. Vérifie par défaut les opérateurs de messagerie option dans le panneau de commande, et enverra automatiquement un e-mail pour les réponses par courriel par les opérateurs.",
    // Department email templates
    "new_ticket_reply"          => "Nouvelle réponse à un billet",
    "new_ticket_opened"         => "Nouveau billet ouvert",
    "reply_to_locked"           => "Réponse à un billet verrouillé",
    "waiting_for_response"      => "En attente d'une réponse",
    "ticket_auto_closed"        => "Billets fermés automatiquement",
    "closed_by_operator"        => "Fermé par l'opérateur",

    // Feedback
    "feedback"                  => "Feedback",
    "feedback_form"             => "Formulaire de feedback|Formulaires de feedback",
    "feedback_form_desc"        => "Des formulaires de Feedback sont traitées dans l'ordre où ils apparaissent. Faites glisser les lignes à réorganiser et ajuster la priorité des formulaires de Feedback.",
    "view_feedback_report"      => "Afficher rapport de feedback",
    "view_feedback"             => "Afficher feedback",
    "ticket_feedback"           => "Feedback sur le billet",
    "feedback_fields_error"     => "Il y avait un problème de la récupération des champs de Feedback.",
    "time_after_resolved"       => "Durée de temps après la résolution",
    "time_after_resolved_desc"  => "Le temps après lequel un ticket est marqué comme résolu que le formulaire de Feedback est envoyé au client.",
    "expires_after"             => "Expire",
    "expires_after_desc"        => "Le temps après lequel un formulaire de Feedback a expiré ne peut plus répondre. Bien que nous recommandons la mise en 7 jours, vous pouvez entrer 0 dans tous les champs pour ne pas fixer de date d'expiration.",
    "form_conditions"           => "Conditions du formulaire",
    "form_conditions_desc"      => "Définir les conditions de tickets pour lesquels des tickets nouvellement résolus sont vérifiées pour voir si elles tombent sous cette forme. Si un ticket résolu correspond à des formes multiples, il sera sélectionné sur la priorité de la forme, qui peut être modifié en allant à la liste des formulaires et réordonnancement.",
    "form_fields"               => "Champs du formulaire",
    "form_fields_desc"          => "Si vous souhaitez recueillir des informations supplémentaires lorsque le client fournit leurs commentaires, vous pouvez définir des champs personnalisés à afficher sur le formulaire ici.",
    "response_rate"             => "Taux de réponse",
    "sent_forms"                => "Envoyer formulaire de feedback",
    "rating"                    => "Évaluation",
    "good_ratings"              => "Bonnes évaluations",
    "bad_ratings"               => "Mauvaises évaluations",
    "customer_satisfaction"     => "Satisfaction clientèle",
    "feedback_desc"             => "Merci de nous avoir contactés. Nous espérons avoir répondre à votre demande à votre entière satisfaction. Pourriez-vous évaluer votre expérience ci-dessous ?",
    "good_satisfied"            => "Bien, je suis satisfait-e",
    "bad_not_satisfied"         => "Mauvais, je ne suis pas satisfait-e",
    "feedback_not_found"        => "Vos commentaires ne pouvait être acceptée, s'il vous plaît ouvrir un ticket avec nous si vous souhaitez partager vos commentaires.",
    "feedback_malformed_token"  => "Vos commentaires ne pouvait être acceptée en raison d'un jeton malformé. S'il vous plaît ouvrir un ticket avec nous si vous souhaitez partager vos commentaires.",
    "feedback_already_done"     => "Vous avez déjà fourni vos commentaires pour ce ticket, je vous remercie.",
    "feedback_expired"          => "Le ticket a été résolu pendant un certain temps, et il ne peut malheureusement plus être classé.",
    "feedback_questions"        => "Pouvez-vous prendre un court moment pour répondre aux questions suivantes afin d'améliorer l'assistance que nous vous fournissons?",
    "feedback_thank_you"        => "Merci de fournir vos commentaires sur ce ticket.",
    "feedback_for_ticket"       => "Feedback pour Ticket #:number",
    "feedback_rating_desc"      => "Le soutien reçu sur ce ticket a été classé comme <strong>:rating</strong> par le client.",

    // Custom fields
    "customfield"               => "Champ personalisé|Champs personalisés",
    "customfield_order"         => "Faites glisser les lignes afin de modifier l'ordre des champs personnalisés qui sont présentés aux clients lors de l'ouverture des billets via le web.",

    // Canned responses
    "cannedresponse"            => "Réponses pré-enregistrée|Réponses pré-enregistrées",
    "canned_response_category"  => "Catégorie de la réponse pré-enregistrée|Catégories des réponses pré-enregistrées",
    "canned_public_desc"        => "Basculer pour laisser seulement la réponse pré-définiee soit accessible par vous-même.",
    "canned_group_desc"         => "Si vous souhaitez faire la réponse pré-définiee visible seulement à certains groupes d'opérateurs, laisser en blanc pour rendre visible à tous les opérateurs.",

    // Filters
    "filter"                    => "Filtre|Filtres",
    "filter_condition"          => "Conditions des filtres",
    "filter_condition_desc"     => "Définir les conditions de tickets pour lesquels les tickets sont répertoriés sous ce filtre.",
    "filter_public_desc"        => "Basculer laisser seul le filtre soit accessible par vous-même.",
    "filter_group_desc"         => "Si vous souhaitez rendre le filtre visible seulement certains groupes d'opérateurs, laisser en blanc pour rendre visible à tous les opérateurs.",

    // Macros
    "macro"                     => "Macro|Macros",
    "macro_type"                => "Type de macro",
    "macro_type_desc"           => "Par défaut, la macro doit être appelée manuellement dans la vue du ticket. Il peut être configuré pour être une macro automatique qui est vérifié et quand de nouveaux tickets actionnées viennent dans ou sur tous les tickets via une tâche planifiée, dans les deux cas les conditions seront vérifiées et si vrai, alors les actions seront réalisées automatiquement. Une macro ne peut fonctionner une fois sur un ticket automatiquement, il n'y a aucune limite pour l'exécuter manuellement.",
    "manual"                    => "Manuel",
    "macro_type_auto1"          => "Automatique - Sur les nouveaux billets seulement",
    "macro_type_auto2"          => "Automatique - Sur tous les billets - (tâches prévues)",
    "macro_condition"           => "Conditions des macros",
    "macro_condition_desc"      => "Définir les conditions pour lesquelles les tickets de cette macro sera disponible pour. Par défaut, sans conditions, il appliquera à tous les tickets.",
    "macro_action"              => "Actions des macros",
    "macro_action_desc"         => "Définir des actions qui sont exécutées quand une macro est effectuée. S'il vous plaît assurer que les mesures sont valables pour le département du ticket est ou bien ils seront ignorés.",

    "from"                      => "De",
    "to"                        => "À",
    "cc"                        => "CC",
    "cc_desc"                   => "Vous pouvez CC autres personnes à ce billet en entrant leurs adresses courriels ci-dessus.",

    "allowed_files"             => "Types de fichiers autorisés pour pièces jointes",

    // Drafts
    "also_viewing"              => "<strong>:name</strong> regarde aussi ce billet.",
    "draft_saved"               => "Brouillon enregistré à :time",
    "save_draft"                => "Enregistrer le brouillon",
    "discard_draft"             => "Supprimer le billet",

    // Locked
    "error_ticket_locked"       => "Ce billet a été verrouillé et ne peut pas être modifié à nouveau, veuillez ouvrir un nouveau billet si vous avez besoin d'assistance supplémentaire.",

    // Ticket Followups
    "follow_up"                 => "Suivi",
    "follow_up_status_desc"     => "Défini un statut différent jusqu'à la date de suivi.",
    "exact_date_time"           => "Date et heure exacte",
    "time_from_now"             => "Temps à partir de maintenant",

    // Schedule
    "schedule"                  => "Horaire|Horaires",
    "business_hour"             => "Heures de travail",
    "business_hour_desc"        => "Heures de travail indiquent le temps que le personnel sont disponibles pour répondre aux requêtes de l'horaire. Les heures sont pris en considération pour le calcul de temps de résolution du ticket.",

    // Holidays
    "holiday"                   => "Jour férié|Jours fériés",
    "all_holidays"              => "Tous les jours fériés",
    "specific_holidays"         => "Férié spécifique",
    "holiday_or_on_the"         => "ou bien, au ",
    "holiday_month_year_desc"   => "Année est facultative si le jour férié est récurrent. Sélectionnez une année seulement si le jour férié se produit à cette date dans une année donnée.",

    // SLA Plans
    "sla_plan"                  => "Entente SLA|Ententes SLA",
    "specific_schedule"         => "Horaires spécifiques",
    "calendar_hours_24"         => "Heures du calendrier (24 Hours)",
    "resolution_time"           => "Temps de résolution",
    "resolution_time_desc"      => "Temps qu'un ticket doit être répondu et résolu  par priorité. Le temps sera compté que pendant les heures d'affaires basées sur l'horaire choisi (s), les valeurs décimales peuvent être utilisées.",
    "reply_within"              => "Réponse dans un délai de",
    "resolve_within"            => "Résolutions dans un délai de",
    "plan"                      => "Plan",
    "sla_condition"             => "Conditions de l'entente SLA",
    "sla_condition_desc"        => "Définir les conditions de tickets pour lesquels de nouveaux tickets sont vérifiés pour voir si elles tombent sous ce régime. Si un nouveau ticket correspond à plusieurs plans SLA, il sera sélectionné sur la priorité du plan, qui peut être modifié en allant à la liste des plans et réordonnancement.",
    "escalation_rule"           => "Règles d'escalade",
    "escalation_rule_desc"      => "Définir les actions qui sont effectuées lorsqu'un ticket en vertu de ce plan SLA est proche ou est devenu en retard. S'il vous plaît assurer que les règles sont valables pour le département du ticket est ou bien ils seront ignorés.",
    "condition"                 => "Condition",
    "condition_group"           => "Condition Group",
    "all_groups"                => "Tous les groupes doivent être vrai",
    "any_group"                 => "Tout groupe peut être vrai",
    "all_conditions"            => "TOUTES les conditions dans le groupe doit être vrai",
    "any_condition"             => "TOUTE état dans le groupe peut être vrai",
    "sla_plan_desc"             => "Plans SLA sont traitées dans leur ordre d'apparition. Faites glisser les lignes à réorganiser et ajuster la priorité des plans SLA.",

    // Reply options
    "reply_options"             => "Options de réponses",
    "send_email_to_users"       => "Envoyer courriel à l'utilisateur",
    "send_email_to_operators"   => "Envoyer courriel aux opérateurs",
    "back_to_grid"              => "Retour à la grille des billets",
    "take"                      => "Prendre",
    "take_ownership"            => "Prendre propriété",
    "pause_duetime"             => "Pauser l'heure due",
    "add_to_canned_responses"   => "Ajouter aux réponses pré-enregistrées",
    "visible_to_all_operators"  => "Rendre visible à tous les opérateurs",
    "set_status"                => "Modifier le statut",
    "add_selfservice_link"      => "Ajouter lien libre-service",
    "search_selfservice"        => "Recherche d'article libre-service",
    "add_canned_response"       => "Ajouter réponse pré-enregistrée",
    "search_canned"             => "Recherche de réponse pré-enregistrée",

    "mark_resolved"             => "Marquer comme résolu",

    "ticket_signature"          => "Signature du billet",

    "default_open_status"       => "Statut d'ouverture par défaut",

    "default_resolve_status"    => "Statut non résolu par défaut",
    "default_resolve_status_desc" => "Sélectionnez l'état par défaut qui est utilisé pour les tickets qui ont été résolus.",

    "waiting_response_time"      => "En attente de réponse Email",
    "waiting_response_time_desc" => "Le temps après les clients reçoivent un e-mail sur les tickets inactifs, en demandant si ils considèrent le ticket comme résolu. Mettre à 0 pour désactiver cet e-mail. ",

    "close_inactive_tickets"    => "Fermer les billets inactifs",
    "close_inactive_tickets_desc" => "Le temps au bout duquel les billets inactifs sont automatiquement fermés, mis à 0 pour ne jamais fermer automatiquement des tickets.",
    "close_inactive_status_desc" => "Fermer automatiquement les tickets qui sont devenus inactifs sans suivi du client (défini par le nombre de jours depuis la dernière réponse par un collaborateur dans les paramètres généraux de ticket).",

    "ticket_reply_order"        => "Ordre de réponse des billets",
    "ticket_reply_order_desc"   => "Sélectionnez l'ordre dans lequel les messages de tickets sont présentés, par ordre croissant, où le dernier message est le dernier ou descendant où le dernier message est le premier.",

    "ticket_notes_position"     => "Ticket Position des Remarques",
    "ticket_notes_position_desc" => "Sélectionnez où dans le ticket ces notes sont affichées.",
    "ticket_notes_top_messages" => "En haut et dans les messages",
    "ticket_notes_top"          => "En haut seulement",
    "ticket_notes_messages"     => "Dans les messages seulement",

    "captcha_desc"              => "Lorsque le captcha devrait être affiché aux clients d'ouverture de nouveaux tickets.",
    "unregistered_only"         => "Usagers non enregistrés seulement",

    "allow_unauth_users"        => "Autoriser usagers non identifiés",
    "allow_unauth_users_desc"   => "Autoriser les clients qui ne sont pas connectés à afficher et répondre aux tickets. La désactivation de cette supprimera également la fonction de ticketterie de la piste et les clients devront être enregistrés et vous connecter avant de pouvoir accéder à des tickets.",

    "default_department"        => "Département par défaut",
    "default_department_desc"   => "Le service par défaut défini sur tous les tickets entrants via ce canal.",

    "show_related_articles"     => "Afficher articles reliés",
    "show_related_articles_desc" => "Lorsque le client tape le sujet, ils peuvent figurer des articles connexes sur la base de ce qu'ils sont entrés. Nécessite le module libre-service doit être activé et MySQL 5.6+.",

    // Email Channel Settings
    "default_priority"          => "Priorité par défaut",
    "default_priority_desc"     => "La priorité par défaut définie pour tous les tickets entrants via ce canal.",
    "verbose_email_log"         => "Tous l'historique Email",

    "adjust_columns"            => "Ajuster les colonnes",
    "last_reply"                => "Dernière réponse",
    "opened_at"                 => "Ouvert à",

    "change_department"         => "Changer département",
    "change_status"             => "Changer statut",
    "no_statuses"               => "Aucun statuts trouvé. Cliquez <a href=':route'>ici</a> pour en créer un.",
    "no_priorities"             => "Aucune priorité trouvé. Cliquez <a href=':route'>ici</a> pour en créer un.",
    "no_templates"              => "Aucun modèle personnalisé email trouvés. Cliquez <a href=':route'>ici</a> pour en créer un.",
    "no_tags"                   => "Pas de tags de tickets trouvés. Cliquez <a href=':route'>ici</a> pour en créer un.",
    "no_departments_found"      => "Aucun départements trouvé. Cliquez <a href=':route'>ici</a> pour en créer un.",
    "no_operators_found"        => "Aucun collaborateurs trouvé. Cliquez <a href=':route'>ici</a> pour en créer un.",
    "change_priority"           => "Changer priorité",
    "add_tag"                   => "Ajouter une étiquette",

    "unlock"                    => "Déverouiller",
    "merge"                     => "Fusionner",
    "merged"                    => "Fusionné",
    "unmerge"                   => "Défusionner",
    "close_and_lock"            => "Fermer et verrouiller",
    "delete_and_block"          => "Supprimer et verrouiller",

    "block_warning"             => "L'adresse courriel de l'utilisateur sera également bloqué et ne pourra plus ouvrir des billets.",

    "mass_reply"                => "Réponse de groupe",

    "delete_warning"            => "Une fois que ces tickets ont été supprimés, ils ne peuvent pas être récupérés.",

    "due_today"                 => "Dû aujourd'hui",
    "overdue"                   => "En retard",
    "unassigned"                => "Non assigné",

    "pause_duetime_desc"        => "S'il y a un plan SLA actif sur ce ticket, mettre en pause le temps restant dû qu'après la date de suivi. Le temps voulu ne commencera à nouveau une fois une réponse ou une note a été ajoutée au ticket (y compris du suivi).",
    "delete_follow_up"          => "Effacer suivi",

    "add_cc"                    => "Ajouter CC",
    "reply_above_line"          => "Veuillez répondre au-dessus de cette ligne",

    "oauth2_token"              => "Jeton OAuth2",
    "email_settings"            => "Paramètres courriel",
    "web_settings"              => "Paramètres web",
    "split_selected_replies"    => "Séparer les réponses sélectionnées",

    "track_ticket_not_found"    => "Aucun billet trouvé correspondant au numéro de billet et l'adresse courriel fournies.",

    "channel_deactivated"       => "Le canal de billet est actuellement désactivée, une réponse ne peut pas être affichée.",

    "type_in_tags"              => "Saisir étiquettes",

    /*
     * 2.0.1
     */
    "allowed_files_desc"        => "Une liste des extensions de fichiers, séparés par le tuyau | caractère, qui sont autorisés en tant que pièces jointes. Par exemple: txt|png|jpg. Pour permettre à tous les attachements, entrée: ?.*",

    /*
     * 2.0.2
     */
    "no_operator_groups"        => "Aucun groupe de collaborateurs trouvé. Cliquez <a href=':route'>ici</a> pour en créer un.",
    "no_user_groups"            => "Aucun groupe de clients trouvés. Cliquez <a href=':route'>ici</a> pour en créer un.",
    "opened_by"                 => "(Ouverte par :nom)",
    "remote_email_piping_desc"  => "Télécharger le <a href='http://www.supportpal.com/manage/dl.php?type=d&id=8' target='_blank'>email distant script de tuyauterie</a> et suivre le <a href = 'http://docs.supportpal.com/display/DOCS/Remote+Email+Piping' target ='_blank'>documentation</a> sur la configuration sur votre serveur de messagerie.", 
    "not_assigned_department"   => "Désolé, vous n'êtes pas autorisé à voir les tickets dans le :department Département. Si vous pensez que cela a été démontré dans l'erreur, s'il vous plaît contactez votre administrateur. ", 

    /*
     * 2.0.3
     */
    "department_consume_all"    => "Par défaut, SupportPal a un support email alias et vérifier l'adresse de destination sur le courrier électronique entrant pour voir quel département le ticket doit être ouvert dans un ticket est pas ouverte si une adresse e-mail du service correspondant ne peut être trouvé. L'activation de ce paramètre signifie tous les e-mails sans adresse email département correspondant sont importés comme des tickets dans ce département.",
    "default_reply_options"     => "Options de réponses par défaut",
    "default_reply_options_desc"=> "Sélectionnez les options de réponse par défaut lors de l'ouverture ou réponse à un ticket. Le ':reply_option' option sera cochée sur la base du ':department_option'. paramètre département",
    "associate_response_tag"    => "Réponse pré-définiee associée à un tag ...",
    "canned_response_tags_desc" => "Ajouter des tags qui peuvent aider à trouver une réponse pré-définiee lors de la réponse à un ticket.",
    "loading_tags"              => "Activer tags",
    "append_ip_address"         => "Ajouter adresse IP",
    "append_ip_address_desc"    => "Ajoutez l'adresse IP des clients à leurs messages quand ils ouvrent et répondent aux tickets à partir du frontend.",
    "unassign_operator"         => "Détacher Collaborateurs",
    "remove_tag"                => "Enlever le tag",
    "message_clipped"           => "[Message attaché]",
    "view_entire_message"       => "Voir message entier",
    "no_custom_fields"          => "Aucun champs personnalisés trouvés. Cliquez <a href=':route'>ici</a> pour en créer un.",
    "follow_up_active"          => "Un <a class='view-followup' style='text-decoration :underline;'>suivi</a> est actuellement actif sur ce ticket et se déroulera <strong>:time </strong>",
    "disable_user_email_replies" => "Désactiver les réponses du client",

    /*
     * 2.1.0
     */
    "default_ticket_filter"     => "Filtre des billets par défaut",
    "default_ticket_filter_desc" => "The ticket filter that is used by default when clicking the 'Manage Tickets' link. Can be set to 'None', the default option, which will show all unresolved tickets.",
    "recent_filters"            => "Filtres récents",
    "inactive_tickets"          => "Billets inactifs",
    "default_open_status_desc"  => "Select the default status that should be automatically set when a user opens a new ticket or replies to a ticket without an operator response yet.",
    "default_reply_status"      => "Statut par défaut des réponses",
    "default_reply_status_desc" => "Select the default status that should be automatically set when a user replies to a ticket, only applies after an operator has replied to the ticket.",
    "drafting_reply"            => "<strong>:name</strong> started to draft a :type :time:",
    "ticket_reply_order_default" => "System default will use the value that is currently selected in the ticket general settings.",
    "select_a_parent"           => "Select a parent department...",
    "select_a_department"       => "Choisir un département...",
    "not_assigned_brand"        => "Sorry, you're not permitted to view tickets in this brand. If you think this has been shown in error, please contact your administrator.",
    "department_operator_desc"  => "You may also assign individual operators to the department. These operators will be in addition to any groups assigned above.",
    "department_group"          => "Groupes de départements",
    "department_group_desc"     => "You may assign whole operator groups to the department, recommended if your list of operators is large and/or changes frequently.",
    "ticket_other_brands"       => "Billets dans les autres marques",
    "add_for_department"        => "Ajouter pour le département...",
    "record_order"              => "Drag the rows to change the order of records.",
    "ticket_token"              => "Jeton du billet",
    "reply_all"                 => "Répondre à tous",
    "reply_without_cc"          => "Répondre (sans CC)",
    "open_new_for_user"         => "Ouvrir un nouveau billet pour l'utilisateur",
    "email_accounts"            => "Comptes courriel",
    "add_another_email"         => "Ajouter une autre adresse courriel",
    "follow_up_date"            => "Date du suivi",
    "post_reply"                => "Répondre",
    "post_note"                 => "Ajouter une note",
    "ticket_details"            => "Détails du billet",
    "organisation_tickets"      => "Billets de l'organisation",
    "manage_tickets"            => "Gérer les billets",
    "via_channel"               => "via :channel",
    "department_parent"         => "Département parent",
    "department_brands"         => "Marques du département",
    "email_item"                => "Courriel :item",
    "from_name"                 => "De (nom)",
    "from_address"              => "De (adresse)",

    /*
     * 2.1.1
     */
    "edited_message"            => ":user le :date",
    "prioritise_reply-to"       => "Prioriser Reply-To",
    "prioritise_reply-to_desc"  => "Toggle to prioritise the Reply-To header over the From header. If enabled, tickets opened via email will be opened on behalf of the Reply-To name and address.",
    "note_options"              => "Options des notes",
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
    "create_new_user_desc"      => "Create a new user and set them as the user of this ticket.",
    "convert_user_ticket_desc"  => "The ticket will be converted from an internal to a user ticket.",
    "user_reply_internal_ticket" => "Not an operator. Only operators can reply to internal tickets.",
    "enter_email_address"       => "Enter email address...",
    "email_user_frontend"       => "Email Users on Tickets Opened at Frontend",
    "email_user_frontend_desc"  => "Select whether users should be notified by email when they open a ticket themselves on the frontend.",
    "department_template_disabled" => "The relevant department email template is disabled, so this email cannot be sent.",
    "verbose_email_log_desc"    => "If email collection should be logged on file, recommended to keep disabled unless instructed by support for debugging. Five days worth of logs are stored, older log files will be purged automatically by the system.",

    /*
     * 2.2.0
     */
    "macro_order"               => "Automatic macros are processed in the order they appear. Drag the rows to change the order of the macros.",
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
    "delete_message"            => "Supprimer le message",
    "linked_tickets"            => "Billets liés",
    "add_linked_ticket"         => "Ajouter un billet lié",
    "add_linked_ticket_desc"    => "Rechercher par numéro de billet ou par sujet:",
    "create_linked_ticket"      => "Créer un billet lié",
    "copy_link"                 => "Copier le lien",
    "forward_message"           => "Transférer ce message",
    "forward_from_here"         => "Transférer le billet à partir d'ici",
    "forward"                   => "Transférer",
    "forward_options"           => "Options de transfert",
    "forwarded_to"              => "Transféré à",
    "new_operator_reply"        => "Nouvelle réponse d'un opérateur",
    "new_user_reply"            => "Nouvelle réponse d'un utilisateur",
    "add_bcc"                   => "Ajouter BCC",
    "at_least_one_recipient"    => "Veuillez spécifier au moins un destinataire",
    "forwarded_message"         => "---------- Message transféré ----------",
    
    /*
     * 2.3.1
     */
    "inactive_ticket_note"      => "Note: only affects tickets belonging to a status with 'Close Inactive Tickets' enabled.",
    "close_inactive_status_desc" => "Toggle to enable/disable automatic closure of inactive tickets and inactivity email reminders ('Waiting For Response' and 'Ticket Auto Closed' templates). If enabled, the time before reminders are sent can be configured via the ticket general settings.",
    "from_header_missing"       => "From: header missing from email.",
    "move_ticket"               => "Déplacer le billet",
    "move_ticket_step1"         => "Étape 1: choisir une nouvelle marque où déplacer le billet",
    "move_ticket_step2"         => "Étape 2: choisir un département",
    "move_ticket_step3"         => "Étape 3: choisir un utilisateur",
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
    "watch"                     => "S'abonner",
    "unwatch"                   => "Se désabonner",
    "watching"                  => "Abonné",
    "internal_ticket"           => "Billet interne|Billets internes",


);
