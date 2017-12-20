<?php

return array(

    "feedback_question"         => "Question à afficher à l'usager.",
    "open_new"                  => "Poser une question",
    "select_department"         => "Choisir un département",
    "select_department_desc"    => "Veuillez choisir le département en lien avec votre question.",
    "no_departments"            => "Aucun département trouvé.",
    "department_user_details"   => "Détails du département et de l'usager",
    "enter_your_details"        => "Entrez vos informations",
    "enter_ticket_details"      => "Entrez informations",
    "enter_subject_message"     => "Entrez sujet et message",
    "invalid_user"              => "Assurez-vous d'entrer des données valides avant de poursuivre.",

    "registered_users"          => "Usagers enregistrés uniquement",
    "registered_users_desc"     => "Activer pour n'importer que des questions d'usagers qui détiennent un compte valide dans le portail sécurisé.",

    "tickets"                   => "Question(s)",
    "ticket"                    => "Question|Questions",
    "subject"                   => "Sujet",
    "no_subject"                => "Aucun sujet",
    "last_action"               => "Dernière action",
    "due_time"                  => "Dû à",
    "created_time"              => "Ajouté à",
    "submitted"                 => "Soumis",
    "add_reply"                 => "Ajouter réponse",
    "ticket_reply"              => "Réponse à une question",
    "ticket_note"               => "Note sur une question",
    "ticket_type"               => "Type de question",

    "user_ticket"               => "Question d'usager",
    "user_ticket_desc"          => "Poser nouvelle question pour un nouvel usager ou un usager existant.",
    "existing_user"             => "Usager existant",
    "new_user"                  => "Nouvel usager",
    "internal"                  => "Interne",
    "internal_ticket"           => "Usager interne",
    "internal_ticket_desc"      => "Ajouter une question pour usage interne seulement. Cette question sera associée à vous et non pas à un usager.",
    "ticket_opened"             => "Votre question a été ajoutée.",
    "enter_user_details"        => "Veuillez entrer vos détails ci-desosus, ou vous connecter à votre compte si vous en avez un.",
    "already_have_account"      => "Vous avez déjà un compte, veuillez vous connecter et ouvrir la question. Veuillez utiliser la fonction 'Mot de passe oublié' au besoin.",

    "recent_tickets"            => "Questions récentes",
    "last_message_text"         => "Dernier message",

    "set_due_time"              => "Dû pour",

    "settings"                  => "Paramètres de la question",

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

    "tag"                       => "Libellé|Libellés",

    "track_ticket"              => "Suivre question",
    "view_ticket"               => "Voir question",

    // Recent activity
    "recent_activity"           => "Activité récente",
    "no_recent_activity"        => "Aucune activité récente",

    // Active operators
    "active_operators"          => "Opérateurs actifs",

    "ticket_number"             => "No de la question",
    "ticket_format"             => "Format du no de la question",
    "ticket_format_desc"        => "Les variables suivantes peuvent être utilisées:<br />%S pour un numéro séquentiel | %N pour un nombre aléatoire | %L pour une lettre aléatoire<br />Utiliser {number} pour répéter <strong>uniquement</strong> après %N ou %L, p.ex. %N{4} équivaut à 4 nombres aléatoires, %L{3} équivaut à 3 lettres aléatoires<br />Voici <a href='http://php.net/manual/en/function.date.php' target='_blank'>PHP Date</a> Paramètres préfixées % Y,y,m,d,j,g,G,h,H,i,s",

    // Departments
    "department_public_desc"    => "Si le département est visible pour les clients sur le Web Help Desk.",
    "department_parent_desc"    => "Si le département est un sous-département, s'il vous plaît sélectionner un parent. Les rayons auxiliaires sont destinés à l'escalade et la gestion interne, donc la définition de cette supprimera certaines des options ci-dessous.",
    "department_priority"       => "Priorités de Département",
    "department_priority_desc"  => "Les priorités qui seront disponibles pour les clients lors de l'ouverture d'un ticket dans ce département, au moins un doit être sélectionné. Par défaut, toutes les priorités seront disponibles dans le département.",
    "department_no_format"      => "En option, uniquement mettre pour remplacer le format de numéro de ticket par défaut, laissez en blanc autrement.",
    "department_operator"       => "Département du Collaborateur",
    "department_default_assign" => "Par défaut attribué à",
    "dept_default_assign_desc"  => "Utilisez cette option si vous souhaitez des tickets qui sont ouverts dans ce département pour être automatiquement affecté à un ou plusieurs opérateurs.",

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
    "email_auto_close"          => "Envoyer un courriel aux usagers lors de la fermeture d'une question",
    "email_auto_close_desc"     => "Sélectionnez si les clients doivent être envoyées par courriel lorsque les tickets qui leur appartiennent sont automatiquement fermés par le système.",
    "email_closed_by_operator"  => "Email clients lorsque Ticket fermé par l'opérateur",
    "email_closed_by_op_desc"   => "Sélectionnez si les clients doivent être envoyées par courriel lorsque les tickets leur appartenant sont fermés par un opérateur.",
    "email_user_on_email"       => "Envoyer courriel aux usagers quand une question est posée par courriel",
    "email_user_on_email_desc"  => "Sélectionnez si les clients doivent être informés par courriel lorsqu'un email ils envoient des résultats dans un nouveau ticket étant ouvert.",
    "email_operators"           => "Notifier opérateurs",
    "email_operators_desc"      => "Indiquez si vous souhaitez transmettre les réponses de l'opérateur à d'autres opérateurs. Vérifie par défaut les opérateurs de messagerie option dans le panneau de commande, et enverra automatiquement un e-mail pour les réponses par courriel par les opérateurs.",
    // Department e-mail templates
    "email_template_desc"       => "Vous pouvez sélectionner un modèle de courriel autre que le défaut d'être envoyé au client pour l'une des actions ci-dessous. Ce modèle deviendra la valeur par défaut pour seulement ce département.",
    "new_ticket_reply"          => "Nouvelle réponse à une question",
    "new_ticket_opened"         => "Nouvelle question ouverte",
    "reply_to_locked"           => "Réponse à une question bloquée",
    "waiting_for_response"      => "En attente d'une réponse",
    "ticket_auto_closed"        => "Questions fermées automatiquement",
    "closed_by_operator"        => "Fermé par l'opérateur",

    // Feedback
    "feedback"                  => "Feedback",
    "feedback_form"             => "Formulaire de feedback|Formulaires de feedback",
    "feedback_form_desc"        => "Des formulaires de Feedback sont traitées dans l'ordre où ils apparaissent. Faites glisser les lignes à réorganiser et ajuster la priorité des formulaires de Feedback.",
    "view_feedback_report"      => "Afficher rapport de feedback",
    "view_feedback"             => "Afficher feedback",
    "ticket_feedback"           => "Feedback sur la question",
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
    "feedback_questions"        => "Si vous pouviez épargner quelques instants, s'il vous plaît répondre aux questions suivantes pour nous aider à améliorer encore le soutien que nous offrons.",
    "feedback_thank_you"        => "Merci de fournir vos commentaires sur ce ticket.",
    "feedback_for_ticket"       => "Feedback pour Ticket #:number",
    "feedback_rating_desc"      => "Le soutien reçu sur ce ticket a été classé comme <strong>:rating</strong> par le client.",

    // Custom fields
    "customfield"               => "Champ sur mesure de la question|Champ sur mesure de la question",
    "customfield_order"         => "Faites glisser les lignes à modifier l'ordre des champs personnalisés sont présentés aux clients lors de l'ouverture des tickets via le web.",

    // Canned responses
    "cannedresponse"            => "Réponses pré-enregistrée|Réponses pré-enregistrées",
    "canned_response_category"  => "Catégorie de la réponse pré-enregistrée|Catégories des réponses pré-enregistrées",
    "response"                  => "Réponse",
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
    "macro_type_auto1"          => "Automatique - Sur les nouvelles questions seulement",
    "macro_type_auto2"          => "Automatique - Sur toutes les questions - (tâches prévues)",
    "macro_condition"           => "Conditions des macros",
    "macro_condition_desc"      => "Définir les conditions pour lesquelles les tickets de cette macro sera disponible pour. Par défaut, sans conditions, il appliquera à tous les tickets.",
    "macro_action"              => "Actions des macros",
    "macro_action_desc"         => "Définir des actions qui sont exécutées quand une macro est effectuée. S'il vous plaît assurer que les mesures sont valables pour le département du ticket est ou bien ils seront ignorés.",

    "from"                      => "De",
    "to"                        => "À",
    "cc"                        => "CC",
    "cc_desc"                   => "Vous pouvez CC autres personnes à ce ticket en entrant les adresses e-mail ci-dessus.",

    "allowed_files"             => "Types de fichiers autorisés pour attachement",

    // Drafts
    "also_viewing"              => "<strong>:name</strong> regarde aussi ce ticket.",
    "draft_saved"               => "Brouillon enregistré à :time",
    "save_draft"                => "Enregistrer le brouillon",
    "discard_draft"             => "Projet Supprimer",

    // Locked
    "error_ticket_locked"       => "Ce ticket a été verrouillé et ne peut pas être mis à jour à nouveau, s'il vous plaît ouvrir un nouveau ticket si vous avez besoin d'aide.",

    // Ticket Followups
    "follow_up"                 => "Suivre",
    "follow_up_status_desc"     => "Réglez le ticket pour un statut différent jusqu'à la date de suivi.",
    "exact_date_time"           => "Date et temps exacte",
    "time_from_now"             => "Temps à partir de maintenant",

    // Schedule
    "schedule"                  => "Horaire|Horaires",
    "business_hour"             => "Heures de travail",
    "business_hour_desc"        => "Heures de travail indiquent le temps que le personnel sont disponibles pour répondre aux requêtes de l'horaire. Les heures sont pris en considération pour le calcul de temps de résolution du ticket.",

    // Holidays
    "holiday"                   => "Vacances|Vacances",
    "all_holidays"              => "Toutes les vacances",
    "specific_holidays"         => "Vacances spécifiques",
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
    "send_email_to_users"       => "Envoyer courriel à/aux usager(s)",
    "send_email_to_operators"   => "Envoyer courriel à/aux opérateur(s)",
    "back_to_grid"              => "Retour à la grille des questions",
    "take"                      => "Prendre",
    "take_ownership"            => "Prendre propriété",
    "pause_duetime"             => "Pauser l'heure due",
    "add_to_canned_responses"   => "Ajouter aux réponses pré-enregistrées",
    "visible_to_all_operators"  => "Rendre visible à tous les opérateurs",
    "set_status"                => "Définir statut",
    "add_selfservice_link"      => "Ajouter lien libre-service",
    "search_selfservice"        => "Recherche d'article libre-service",
    "add_canned_response"       => "Ajouter réponse pré-enregistrée",
    "search_canned"             => "Recherche de réponse pré-enregistrée",

    "mark_resolved"             => "Identifier comme résolu",

    "ticket_signature"          => "Signature question",

    "default_open_status"       => "Statut d'ouverture par défaut",

    "default_resolve_status"    => "Statut non résolu par défaut",
    "default_resolve_status_desc" => "Sélectionnez l'état par défaut qui est utilisé pour les tickets qui ont été résolus.",

	"waiting_response_time"		   => "En attente de réponse Email ",
	"waiting_response_time_desc"   => "Le temps après les clients reçoivent un e-mail sur les tickets inactifs, en demandant si ils considèrent le ticket comme résolu. Mettre à 0 pour désactiver cet e-mail. ",

    "close_inactive_tickets"    => "Fermer questions inactives",
    "close_inactive_tickets_desc"=> "Le temps au bout duquel les tickets inactifs sont automatiquement fermés, mis à 0 pour ne jamais fermer automatiquement des tickets.",
    "close_inactive_status_desc"=> "Fermer automatiquement les tickets qui sont devenus inactifs sans suivi du client (défini par le nombre de jours depuis la dernière réponse par un collaborateur dans les paramètres généraux de ticket).",

    "ticket_reply_order"        => "Ordre de réponse des questions",
    "ticket_reply_order_desc"   => "Sélectionnez l'ordre dans lequel les messages de tickets sont présentés, par ordre croissant, où le dernier message est le dernier ou descendant où le dernier message est le premier.",

    "ticket_notes_position"     => "Ticket Position des Remarques",
    "ticket_notes_position_desc"=> "Sélectionnez où dans le ticket ces notes sont affichées.",
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

    "adjust_columns"            => "Ajuster colonnes",
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
    "add_tag"                   => "Ajouter libellé",

    "unlock"                    => "Débloquer",
    "merge"                     => "Fusionner",
    "merged"                    => "Fusionné",
    "unmerge"                   => "Défusionner",
    "close_and_lock"            => "Fermer et bloquer",
    "delete_and_block"          => "Effacer et bloquer",

    "block_warning"             => "L'email du client sera également bloqué et ne peut plus ouvrir des tickets.",

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

    "track_ticket_not_found"    => "Impossible de trouver ticket avec numéro de ticket et adresse e-mail du client indiquée.",

    "channel_deactivated"       => "Le canal de tickets est actuellement désactivée, une réponse ne peut pas être affichée.",

    "type_in_tags"              => "Entrer libellés",

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
    "verbose_email_log_desc"    => "Si la collecte des emails doit être sauvegarder dans un fichier. Nous vous recommandons de garder activé pour aider à des fins de débogage. Cinq jours de dollars de journaux sont stockés, les fichiers journaux plus anciens seront éliminés automatiquement par le système.",

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
    "follow_up_active"          => "Un <a class='view-followup' style='text-decoration :underline;'>suivi</a> est actuellement actif sur ce ticket et se déroulera peu après <strong>:time </strong>",
    "disable_user_email_replies" => "Désactiver les réponses du client",
    "disable_user_email_replies_desc" => "Activer pour bloquer réponses email des clients, et supprimer également la ligne de réponse des e-mails des tickets sortants.",

    /*
     * 2.1.0
     */
    "default_ticket_filter"     => "Filtre des questions par défaut",
    "default_ticket_filter_desc" => "The ticket filter that is used by default when clicking the 'Manage Tickets' link. Can be set to 'None', the default option, which will show all unresolved tickets.",
    "recent_filters"            => "Filtres récents",
    "inactive_tickets"          => "Questions inactives",
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
    "ticket_other_brands"       => "Questions dans les autres marques",
    "add_for_department"        => "Ajouter pour le département...",
    "record_order"              => "Drag the rows to change the order of records.",
    "ticket_token"              => "Jeton de la question",
    "reply_all"                 => "Répondre à tous",
    "reply_without_cc"          => "Répondre (sans CC)",
    "open_new_for_user"         => "Ouvrir nouvelle question pour usager",
    "email_accounts"            => "Comptes courriel",
    "add_another_email"         => "Ajouter une autre adresse courriel",
    "follow_up_date"            => "Date de suivu",
    "post_reply"                => "Répondre",
    "post_note"                 => "Ajouter une note",
    "ticket_details"            => "Détails de la question",
    "organisation_tickets"      => "Questions de l'organisation",
    "manage_tickets"            => "Gérer questions",
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

);
