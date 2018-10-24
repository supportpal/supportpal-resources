<?php

return array(

    // SupportPal
    "product_name"              => "SupportPal",
    "slogan"                    => "Le support client, intelligent et simple.",
    "operator_panel"            => "Tableau de bord de l'opérateur",
    "helpdesk_software"         => "Application de support par",
    "carefully_crafted"         => "Créé avec soin par",
    "welcome"                   => "Bienvenue à SupportPal",
    "welcome_desc"              => "Cliquez pour démarrer un tour guidé des fonctionnalités du système.",

    // Dashboard
    "welcome_back"              => "Bienvenue",
    "search_placeholder"        => "Recherche...",
    "submit_ticket"             => "Ouvrir un billet",
    "submit_ticket_desc"        => "Utilisez ce formulaire afin d'ouvrir un billet.",
    "track_ticket"              => "Faire le suivi d'un billet",
    "track_ticket_desc"         => "Pas enregistré? Utilisez votre adresse courriel et votre numéro de billet afin de suivre le statut de votre billet.",
    "my_tickets"                => "Mes billets",
    "my_tickets_desc"           => "Faites le suivi de vos billets. Vous trouverez vos billets ouverts et passés ici.",
    "no_modules"                => "Aucun module n'est activé.",
    "search_results"            => "Résultats de la recherche",
    "found_results"             => ":enregistrements trouvés correspondant à vos termes de recherche",

    // Maintenance
    "maintenance"               => "Une maintenance est en court",
    "maintenance_desc"          => "Le portail d'assistance n'est présentement pas disponible. Une maintenance est en cours. Nous vous remercions de votre patience. Veuillez ressayer dans quelques minutes.",
    "maintenance_active"        => "Le mode de maintenance est actif.",

    // About
    "development_license"       => "Licence de développement !",
    "development_license_desc"  => "Cette installation utilise une licence de développement. Elle n'est valide que depuis une adresse RFC1918. Vous n'êtes pas autorisé à utiliser cette licence en production.",
    "license_status"            => "Statut de la licence",
    "license_code"              => "Code de la licence",
    "change_license"            => "Changer la licence",
    "license_info"              => "Licence",
    "license_owner"             => "Propriétaire",
    "license_created"           => "Créée le",
    "license_type"              => "Type",
    "no_branding"               => "Aucune marque",
    "branding"                  => "Marque",
    "license_expires"           => "Expire le",
    "license_valid_ip"          => "Valide pour IP(s)",
    "license_valid_domain"      => "Valide pour domaine(s)",
    "support_status"            => "Statut du support",
    "support_expires"           => "Support expire le",
    "version_info"              => "Version",
    "installed_version"         => "Version installée",
    "available_version"         => "Version disponible",
    "monthly_product"           => "* La date d'expiration va automatiquement s'ajuster à mesure que les factures sont payées.",

    // API Tokens
    "api_token"                 => "Jeton API|Jetons API",
    "token"                     => "Jeton",
    "regenerate_token"          => "Regénérer le jeton",
    "access_level"              => "Niveau d'accès",
    "read_write"                => "Lecture &amp; écriture",
    "read_only"                 => "Lecture uniquement",

    // Spam Rules & Filtering
    "spam_rule"                 => "Règle anti-spam|Règles anti-spam",
    "containing_text"           => "Contient texte",
    "containing_text_desc"      => "Veuillez entrer une chaine (un mot particulier ou une adresse courriel). Toutes les chaines ne sont pas sensible à la case. <br />La chaine peut aussi contenir une <a href='http://www.regular-expressions.info/'>expression régulière</a>. Un exemple serait : 's.{1,}p.{1,}a.{1,}m'. Vous n'avez pas besoin de spécifier de délimiteurs.",
    "ip_filtering"              => "Filtrage par IP",
    "content_filtering"         => "Filtrage par contenu",
    "filter_description"        => "Veuillez spécifier un filtreur de contenu approprié",
    "filter_new_message"        => "Nouveau billet (d'un utilisateur)",
    "filter_new_comment"        => "Nouveau commentaire libre-service (d'un utilisateur)",
    "filter_user_login"         => "Login utilisateur",
    "filter_operator_login"     => "Login opérateur",
    "filter_api_access"         => "Accès API",
    "content"                   => "Contenu",
    "sender"                    => "Envoyeur",
    "content_sender"            => "Contenu & Expéditeur",

    // Company
    "company"                   => "Compagnie|Compagnies",
    "company_name"              => "Nom de l'entreprise",
    "your_company"              => "Votre entreprise",

    // Email
    "default_email_addr"        => "Adresse courriel par défaut",
    "default_email_addr_desc"   => "Ce courriel sera utilisé dans le champ De: et dans la plupart des courriels envoyés par le système.",
    "include_operator_name"     => "Inclure le nom de l'opérateur",
    "include_operator_name_desc" => "Inclure le nom de l'opérateur dans le champ 'De' pour les courriels de réponse aux billets. Exemple: De: Me Isabelle Tremblay (Le Droit Chemin)",
    "include_dept_name"         => "Inclure le nom du département",
    "include_dept_name_desc"    => "Inclure le nom du département dans le champ 'From' de tous les courriels de billets liés. Notez qu'un nouveau fil de courriel est créé si un billet change le département.",
    "global_email_header"       => "En-tête de courriel global",
    "global_email_header_desc"  => "Ajouter un en-tête à tous les courriels envoyés par le système. Le HTML est accepté.",
    "global_email_footer"       => "Pied de page de courriel global",
    "global_email_footer_desc"  => "Ajouter un pied de page à tous les courriels envoyés par le système. Le HTML est accepté.",
    "email_template"            => "Gabarit de courriel|Gabarits de courriel",
    "email_log"                 => "Journal de courriels",
    "email_queue"               => "File d'attente de courriels",
    "email_queue_desc"          => "Voici les courriels qui sont en attente d'être envoyés prochainement par le cron.",
    "email_method"              => "Méthode d'envoi des courriels",
    "php_mail_function"         => "Fonction PHP mail()",
    "smtp"                      => "SMTP",
    "smtp_host"                 => "Hôte SMTP",
    "smtp_port"                 => "Port SMTP",
    "smtp_encryption"           => "Encryptage SMTP",
    "smtp_requires_auth"        => "Requiert une authentification",
    "smtp_username"             => "Utilisateur SMTP",
    "smtp_password"             => "Mot de passe SMTP",
    "ssl"                       => "SSL",
    "tls"                       => "TLS",
    "validate_smtp"             => "Vérifier les paramètres SMTP",
    "email_content"             => "Contenu du courriel",
    "email_content_desc"        => "Entrez un sujet par défaut et le contenu des courriels pour ce modèle, vous pouvez aussi écrire le modèle dans d'autres langues. Si un modèle ne soit pas dans une autre langue, il utilisera les données par défaut.",
    "outgoing"                  => "Sortant",
    "incoming"                  => "Entrant",
    "incoming_spam"             => "Entrant (Rejeté - Spam)",
    "incoming_throttled"        => "Entrant (Rejeté - Ralentis)",
    "email_subject"             => "Sujet du courriel",
    "twig_html_warning"         => "Twig n'est pas permis à l'intérieur des balises HTML / attributs et sera automatiquement supprimé lors de l'enregistrement.",

    // Modules
    "modules"                   => "Module|Modules",
    "modules_desc"              => "Voici une liste de tous les modules disponibles, cliquez sur l'icône de modification pour mettre à jour les paramètres de ce module.",
    "module_disable"            => "Les modules désactivés seront supprimés du portail d'assistance et du panneau de contrôle des opérateurs.",

    // Scheduled tasks
    "scheduled_task"            => "Tâche planifiée|Tâches planifiées",
    "interval_desc"             => "Définissez la fréquence d'exécution pour cette tâche. p.ex. 5 minutes signifie que la tâche sera exécutée toutes les 5 minutes si le cron est actif.",
    "cron_settings"             => "Paramètres CRON",
    "cron_makesure"             => "Veuillez SVP créez une tâche cron avec l'entrée suivante: ",
    "cron_running"              => "En exécution",
    "cron_not_running"          => "N'est pas en exécution",
    "task_ran"                  => "La tâche planifiée a été lancé manuellement avec succès.",
    "task_failed"               => "Échec lors de l'exécution manuelle de la tâche planifiée.",

    // Plugins
    "plugins"                   => "Plugin|Plugins",
    "installed_plugins"         => "Plugins installés",
    "visit_plugin"              => "Visiter le site du plugin",
    "uninstall_plugin_warning"  => "Désinstaller le plugin va supprimer tous les fichiers et les données associées. Nous vous recommandons de désactiver le plugin à la place.",

    // Messages
    "last_activity"             => "Dernière activité",
    "send_to"                   => "Envoyer à",
    "inbox"                     => "Boîte de réception",
    "compose"                   => "Composer",

    // Utilities
    "utilities"                 => "Utilitaires",

    // System Cleanup
    "system_cleanup"            => "Nettoyage système",
    "system_cleanup_desc"       => "Utilisez les options disponibles pour supprimer les données qui ne sont plus nécessaires ou désirées.",
    "files"                     => "Fichiers",
    "files_desc"                => "Les éléments suivants sont stockés sous forme de fichiers sur le système de fichiers.",
    "logs"                      => "Journaux",
    "logs_desc"                 => "Les éléments suivants sont stockés sous forme d'enregistrements dans la base de données.",
    "empty"                     => "Vide",
    "prune"                     => "Vider",
    "total_records"             => "Nombre d'enregistrements",
    "system_cache"              => "Cache du système",
    "system_cache_desc"         => "Utilisé pour stocker les données du système qui ne change pas régulièrement afin d'accélérer l'application.",
    "template_cache"            => "Cache de gabarit",
    "template_cache_desc"       => "Copie précompilées des gabaris des vues de modèle permettant d'améliorer les temps de chargement.",
    "attachments_desc"          => "Les pièces jointes des billets sont conservées sur le système de fichiers, mais ils peuvent prendre de la place. Vous pouvez supprimer les fichiers joints créés avant une certaine date. ",
    "system_activity_log_desc"  => "Conserve toutes les activités des utilisateurs, opérateurs et du système, Vous pouvez supprimer les enregistrements créés avant une certaine date. ",
    "email_log_desc"            => "Conserve tous les courriels entrants et sortants. Vous pouvez supprimer les enregistrements créés avant une certaine date. ",
    "operator_login_log_desc"   => "Journalisation de chaque fois qu'un opérateur ouvre une session avec son adresse IP. Vous pouvez supprimer les enregistrements créés avant une certaine date. ",

    // Captcha
    "captcha"                   => "Captcha",
    "show_captcha"              => "Afficher le captcha",

    // Widgets
    "dashboard"                 => "Panneau de contrôle",
    "add_remove_widget"         => "Ajouter ou supprimer un widget",
    "todo_record"               => "to do record",
    "enable_tour"               => "Activer le tour guidé",

    // Product Tour
    "dashboard_desc"            => "Votre panneau de contrôle personnalisé. Les widgets peuvent être retirés, minimisés et déplacés !",
    "private_messages"          => "Messages privés",
    "messages_desc"             => "Les messages privés permettent une conversation 1:1 avec d'autres opérateurs.",
    "configure"                 => "Configurer votre Accès Client",
    "configure_desc"            => "Notre plateforme contient plusieurs paramètres qui vous permettent de configurer le système selon vos préférences.",
    "company_name_desc"         => "Le nom de votre entreprise est utilisé pour toutes les correspondances avec les usagers.",
    "default_email"             => "Adresse de courriel par défaut",
    "default_email_desc"        => "L'adresse courriel par défaut à utiliser pour toute correspondance avec les usagers.",
    "dept_settings_desc"        => "Les départements de votre organisation fonctionnent différemment. Les paramètres départementaux vous permettent d'outre-passer les paramètres globaux.",
    "department_desc"           => "Les départements fonctionnent comme dans votre entreprise. Ils sont utiles pour assurer que les demandes des usagers se rendent rapidement aux personnes qualifiées pour y répondre.",
    "department_email"          => "Adresses courriel du département",
    "dept_email_desc"           => "Plusieurs adresses courriel peuvent être assignées par département. Email collection is performed against the configured addresses to pull e-mails from your customers into the help desk.",
    "dept_tmpl"                 => "Gabarits de courriels des départements",
    "dept_tmpl_desc"            => "Vous pouvez changer ou désactiver les modèles e-mail du département. Vous pouvez définir modèles spécifique et les activer ici.",
    "schedule_task_desc"        => "Tâches planifiées sont utilisés pour automatiser divers processus au sein de SupportPal y compris la collecte des tickets par email.",
    "schedule_task_2"           => "Tâches planifiées nécessitent une tâche cron pour être créé pour fonctionner. L'intervalle pour chaque tâche effectuée par la tâche cron peut être réglée via le formulaire de modification.",
    "schedule_task_cron"        => "Cron Job",
    "schedule_task_3"           => "Créer une tâche cron similaire à l'exemple fourni ci-dessous sur votre serveur pour les tâches planifiées soit exécutéss automatiquement.",
    "ticket_channel_desc"       => "Les canaux Ticket sont des méthodes pour créer des tickets. Ils peuvent être facilement étendus pour inclure vos propres canaux, par exemple des tickets ouverts via Instagram.",
    "ticket_channel_2"          => "Nous fournissons un certain nombre de canaux par défaut. Vous pouvez activer et configurer les canaux Facebook et Twitter pour recueillir des tickets générés via les médias sociaux.",
    "user_desc"                 => "Les utilisateurs qui interagissent avec votre système sont affichés ici. Vous pouvez ajouter, modifier et supprimer des clients.",
    "organisation_desc"         => "Les utilisateurs peuvent être affectés à des organisations leur permettant l'accès aux tickets ouverts par d'autres utilisateurs au sein de leur organisation.",
    "operator_desc"             => "D'autres membres du personnel peuvent être ajoutés en tant qu'opérateurs ici.",
    "ticket_desc"               => "Le tableau de tickets contient tous les tickets pertinents pour vous.",
    "ticket_desc2"              => "Le tableau de tickets peut être configuré, filtré et ajusté à vos préférences.",
    "ticket_toolbar"            => "Barre d'outils",
    "ticket_desc3"              => "Actions en vrac peuvent être effectuées sur des tickets en utilisant la barre d'outils de tickets.",
    "tour_complete"             => "Tour de visite complète!",
    "tour_complete_desc"        => "Merci d'utiliser SupportPal. <br /> <br /> Nous vous recommandons maintenant que vous suivez le guide de démarrage ci-dessous pour configurer votre service d'assistance.",

    // IP Ban
    "ip_ban_time_desc"          => "Blocage permanent ou temporaire.",
    "expiry"                    => "Expiration",
    "expired"                   => "Expiré",
    "expiry_time"               => "Heure d'expiration",
    "expiry_time_desc"          => "Le moment où l'interdiction expirera, si une date n'est pas définie ou dans le passé, elle sera automatiquement réglé à dans 24 heures à partir de maintenant.",
    "permanent"                 => "Permanent",

    // Languages
    "no_enabled_languages"      => "Échec de mise à jour de :item. Au moins une langue doit être activé à tout moment.",

    // General Settings
    "website"                   => "Site web",
    "locale"                    => "Langue",
    "simpleauth"                => "SimpleAuth",
    "admin_folder"              => "Dossier Admin",
    "admin_folder_desc"         => "Définissez le nom du dossier à visiter pour le panneau de contrôle. D'un point de vue de la sécurité, il est recommandé de changer la valeur par défaut \admin\ . ",
    "enable_ssl"                => "Activer SSL",
    "force_ssl"                 => "Forcer SSL pour les opérateurs ",
    "force_ssl_desc"            => "Force tous les opérateurs à utiliser la version sécurisée de votre site Web pour le panneau de commande. ",
    "frontend_template"         => "Modèle pour le frontend ",
    "operator_template"         => "Modèle de l'opérateur ",
    "maintenance_mode"          => "Mode de maintenance",
    "maintenance_mode_desc"     => "Désactive la fonctionnalité du portail d'assistance publique et montre un message de maintenance aux utilisateurs. Modifier les ressources / templates / frontend / [modèle] /core/maintenance.twig changer le message qui est affiché aux utilisateurs.",
    "default_user_country"      => "Pays par défaut du client",
    "default_user_country_desc" => "Le pays qui sera sélectionné par défaut lorsque les clients s'enregistrent.",
    "system_timezone"           => "Fuseau horaire du système",
    "system_timezone_desc"      => "Le fuseau horaire qui est appliqué dans tout le système par défaut. Les opérateurs peuvent changer leur fuseau horaire dans leurs paramètres personnels.",
    "date_format"               => "Format de date",
    "date_format_desc"          => "Le format de date qui est utilisée globalement.",
    "time_format"               => "Format de l'heure",
    "time_format_desc"          => "Le format de l'heure qui est utilisée globalement.",
    "simpleauth_key"            => "SimpleAuth Key",
    "simpleauth_key_desc"       => "La clé pour notre fonctionnalité d'authentification unique (single sign on). Minimum de 16 caractères.",
    "simpleauth_operators"      => "Autoriser pour les opérateurs",
    "frontend_logo"             => "Logo du portail d'assistance",
    "base_url"                  => "URL du système",
    "base_url_desc"             => "Entrez l'adresse web complète de votre installation, utilisé pour générer les URL qui sont envoyés aux utilisateurs.",
    "debug"                     => "Déboguage",
    "debug_mode"                => "Mode débogage",
    "debug_mode_desc"           => "Activer le mode de débogage pour afficher les erreurs, utilisez uniquement pour le débogage ou si selon les instructions de support. Les erreurs sont autrement stockées dans les journaux à /storage/logs.",
    "pretty_urls"               => "Pretty URLs",
    "pretty_urls_desc"          => "Si activé, va supprimer index.php des URL. Activez seulement si vous êtes en mesure d'accéder au panneau de commande sans index.php. Désactivez si vous n'avez pas mod_rewrite installé, les fichiers .htaccess ne sont pas autorisés ou ne sont pas converties aux Apache .htaccess règles de réécriture pour travailler avec votre serveur web alternative.",
    "send_diagnostic"           => "Envoyer des données de diagnostique",
    "send_diagnostic_desc"      => "Pour aider SupportPal à améliorer ses produits, votre installation peut envoyer des données de diagnostique lorsque quelque chose va mal.",

    /*
     * 2.0.1
     */
    "incoming_rejected"         => "Entrant (rejeté)",
    "show_original"             => "Afficher l'original",

    /*
     * 2.0.2
     */
    "cron_makesure"             => "Consultez la documentation <a target='_blank' href='http://docs.supportpal.com/display/DOCS/New+Installation#NewInstallation-CronJob'>Cron Job Help</a> pour de l'assistance concernant les tâches crontab.",
    "widget"                    => "Widget|Widgets",

    /*
     * 2.0.3
     */
    "enable_ssl_desc"           => "L'activation forcera l'ensemble du frontend et du backend à utiliser des connexions sécurisées, un réglage recommandé. Veuillez vous assurer que HTTPS est correctement configuré sur votre serveur avant d'activer. ",
    "unexpected_template_error" => "Une erreur inattendue est survenue lors de vérification de la syntaxe du modèle. Veuillez réessayer.",
    "empty_template_preview"    => "Veuillez fournir un modèle valide pour pouvoir utiliser la fonction de prévisualisation.",
    "no_department_address"     => "Impossible de trouver une adresse de département dans la liste des destinataires.",
    "email_loop_detected"       => "Boucle détectée - courriel envoyé à partir d'une adresse de département",
    "email_ticket_locked"       => "Billet verrouillé. L'utilisateur a été invité à ouvrir un nouveau billet par courriel.",
    "email_no_body"             => "Impossible d'identifier le corps du message.",
    "email_runtime_error"       => "Une erreur d'exécution (runtime error) est survenue lors de la création de la réponse du billet ou réponse.",
    "email_reply_disabled"      => "Les réponses courriel de l'utilisateur ont été désactivés pour ce département.",
    "email_throttled"           => "Trop de courriels reçus provenant de l'utilisateur. La limite est de :max_requests courriels toutes les :decay_time minutes.",

    /*
     * 2.1.0
     */
    "generalsetting_desc"       => "Edit the settings that apply to all of SupportPal. If you wish to edit settings for a specific section, e.g. Tickets, open the section in the sidebar to view available settings for that module. Settings related to your brand(s) can be found by clicking Brands in the sidebar.",
    "brand"                     => "Marque|Marques",
    "brand_desc"                => "A brand is your customer-facing identity within SupportPal, allowing several channels of communication. Several brands can be operated seamlessly under a single, unified operator panel.",
    "brand_name"                => "Nom de la marque",
    "default_brand"             => "Marque par défaut",
    "default_brand_desc"        => "Select the brand that will be used by default when visitors visit the frontend and a matching brand cannot be found.",
    "brand_name_desc"           => "The name of the brand as seen by end-users.",
    "brand_enabled_desc"        => "Toggle to enable or disable the brand. Disabled brands cannot be utilised and won't count as part of the brands allowed on your license, disabling can be used to temporarily hide a brand and/or retain information. Deleting a brand will remove all information including users and tickets that are related to it.",
    "inherit_global_setting"    => "Hériter des paramètres globaux",
    "brand_date_format_desc"    => "The date format used for this brand's frontend.",
    "brand_time_format_desc"    => "The time format used for this brand's frontend.",
    "brand_timezone"            => "Fuseau horaire de la marque",
    "brand_timezone_desc"       => "The timezone that is used by default on this brand's frontend, users will have the option to select their own timezone.",
    "brand_default_lang_desc"   => "The language that is used by default on this brand's frontend.",
    "brand_lang_toggle_desc"    => "If the language dropdown should show on this brand's frontend.",
    "brand_groups_desc"         => "Operators in the selected groups will be able to create, update and delete (depending on role permissions) tickets and other content in this brand.",
    "select_brand"              => "Choisir une marque...",
    "add_another_language"      => "Ajouter une autre langue...",
    "mass_email_brand_desc"     => "Please select which brand the email will be sent from. It will be used to set the sending from name and address, load the correct email template and in the merge fields. If you send to a user group, only users who belong to the selected brand will be emailed.",
    "brand_limit_exceeded"      => "Your license is only permitted to use :allowed brand(s) simultaneously. To purchase additional brands please visit our client area.",
    "additional_brands"         => "Marques additionnelles",
    "purchase_more"             => "Acheter d'autre",
    "brand_limit_allowed"       => "Your license is currently permitted to use :allowed brand simultaneously.|Your license is currently permitted to use :allowed brands simultaneously.",
    "brand_limit_purchase"      => "If this is incorrect, please <strong>reissue</strong> your license at our <a href='http://www.supportpal.com/manage/' target='_blank'>client area</a> and visit the <a href=':route'>License Information</a> page to synchronise your help desk with our license server.<br />To purchase additional brands, please <a href='https://www.supportpal.com/manage/upgrade.php?type=configoptions&id=:id' target='_blank'>upgrade your license</a>.",
    "support_no_expiry"         => "Your support and updates are valid.",
    "support_expiry"            => "Your support and updates subscription is valid until :date.",
    "support_status_desc"       => "Please <a href='https://www.supportpal.com/manage/cart.php?gid=addons' target='_blank'>renew your support subscription</a> in order to get the latest support and updates from SupportPal.",
    "ip_ban"                    => "Blocage IP|Blocages IP",
    "ip_whitelist"              => "Liste blanche d'IP",
    "whitelisted_ip"            => "IP autorisés",
    "frontend_logo_desc"        => "Change the default logo on the frontend interface for this brand. The field can either be a path relative to the base directory (we recommend to store your logo in the resources/assets/ folder) or a direct URL to the image.",
    "license_path"              => "Chemin d'installation",
    "php_info"                  => "Information PHP",
    "log"                       => "Log|Logs",
    "invalid_department_brand"  => "Département non assigné à une marque.",
    "incoming_rejected"         => "Entrant(Rejeté)",
    "twig_operator_signature"   => "The {{ operator.signature }} merge field will be processed at runtime hence the preview may be incorrect.",

    /*
     * 2.1.1
     */
    "file_manager"              => "Gestionnaire de la journalisation",
    "file_manager_desc"         => "Below you can download or delete the logs that are stored by the system during operation, they can be used for debugging purposes. The log files are automatically cycled, storing only up to the latest 5 days of entries.",
    "app_logs"                  => "Journal de l'application",
    "app_logs_desc"             => "All warnings and errors from general usage of the help desk are logged here. You may be asked to provide one or more of these logs when requesting support.",
    "email_logs"                => "Journal des courriels",
    "email_logs_desc"           => "Details about incoming emails are stored in these files when they are being parsed and imported as tickets.",
    "query_logs"                => "Journal des requêtes SQL",
    "query_logs_desc"           => "These logs contain all MySQL queries that are run when utilising the help desk and are only stored when debug mode is enabled.",

    /*
     * 2.1.2
     */
    "reply_to"                  => "Reply To",
    "and_number_others"         => "and :number other|and :number others",
    "user_templates"            => "User Templates",
    "operator_templates"        => "Operator Templates",
    
    /*
     * 2.2.0
     */
    "attachment_size"           => "Cumulative Attachment Size Limit",
    "attachment_size_desc"      => "The maximum cumulative size of all attachments that are sent in a single email. Available options are K (for Kilobytes) and M (for Megabytes), anything else assumes bytes. Example value: 5M for 5 Megabytes. Set to 0 to not send any attachments by email and require users to download attachments via the help desk.",
    "attachment_limit_reached"  => "Cumulative file limit reached (:size). Please consider sending files via another medium (such as a download URL).",
    "upload_unknown_error"      => "The file \":file\" was not uploaded due to a server-side error.",
    "renew_support"             => "<a href='https://www.supportpal.com/manage/cart.php?gid=addons' target='_blank'>Renew</a>",
    "translations"              => "Translations",
    "no_existing_translations"  => "No existing translations.",
    "add_translation"           => "Add Translation",
    "todo_list"                 => "To Do List",
    "version_check"             => "Version Check",
    "system_overview"           => "System Overview",
    "getting_started"           => "Getting Started",
    "operator_notes"            => "Operator Notes",
    "simpleauth_operators_desc" => "Allow operators to log in and out with SimpleAuth, we recommend to keep this disabled unless you are specifically using it for this purpose.",
    "upgrade_and_reactivate"    => "Upgrade & Reactivate",
    "upgrade_pending"           => "Upgrade Pending",
    "locale_in_uri"             => "Include Locale in URI",
    "locale_in_uri_desc"        => "Disable to remove the locale from the URI, for example: http://support.mycompany.com/en/announcements becomes http://support.mycompany.com/announcements. Can only be disabled when there's one enabled language in the system.",

);
