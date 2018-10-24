<?php

return array(

    "deleted"               => "Effacé!",
    "success"               => "Succès",
    "error"                 => "Erreur",
    "in_progress"           => "En cours",

    "save_order"            => "Tentative de sauvegarder le tri des items",

    "show_all_results"      => "Afficher tous les résultats &raquo;",

    "are_you_sure"          => "Êtes-vous certain ?",
    "yes_im_sure"           => "Oui, je suis certain",

    "success_created"       => ":item créé avec succès!",
    "error_created"         => "Échec lors de la tentative de création de :item.",

    "success_deleted"       => ":item effacé!",
    "error_deleted"         => "La sppression de ':item' a échouée.",

    "success_updated"       => ":item modifié!",
    "error_updated"         => "La modification de ':item' a échouée.",

    "error_notfound"        => "L'item :item avec l'ID fourni n'a pas été trouvé.",
    "error_notfound_name"   => "L'item :item avec le nom fourni n'a pas été trouvé.",
    "report_notfound"       => "Le rapport avec la catégorie et le nom fournies n'a pas été trouvé.",

    "success_ordering"      => "Tri complété !",
    "error_ordering"        => "Echec du tri.",

    "error_login"           => "Connexion échouée.",
    "success_logout"        => "Déconnexion complétée.",

    "please_correct"        => "Veuillez corriger les erreurs ci-dessous et essayer à nouveau.",

    "success_settings"      => "Paramètres modifiés !",
    "error_settings"        => "Erreur lors de la modification des paramètres.",

    "success_action"        => "Succès !",
    "error_action"          => "Erreur, action non complétée.",

    "success_sending"       => ":item envoyé avec succès!",
    "error_sending"         => "Erreur lors de l'envoi de :item.",

    "error_embed_image"     => "Erreur lors de l'envoi de l'image.",

    "unauthorised"          => "Non autorisé",
    "not_authorised"        => "Non autorisé à effectuer cette action.",
    "not_permitted"         => "Vous n'avez pas accès à cette page. Contactez votre admnistrateur si vous estimez que c'est une erreur.",

    "page_not_found"        => "Page introuvable",
    "cant_find_page"        => "Impossible de trouver la page demandée.",

    "please_report"         => "Veuillez informer un administrateur si cette erreur n'était pas prévue.",

    "return_to"             => "Retour à :page.",

    "session_expired"       => "Votre session a expiré, veuillez vous connecter à nouveau.",
    "session_refresh"       => "Votre session a expiré, veuillez recharger la page et tenter à nouveau.",

    "general_error"         => "Une erreur s'est produite. Veuillez tenter à nouveau.",

    "mailer_error"          => "Une erreur s'est produite en envoyant le courriel avec le sujet : ':subject'.",

    "no_results"            => "Aucun résultat.",

    "assign_incomplete"     => "Cette action ne peut pas être complétée. :names ne peut pas être assigné à certains billets.",

    "maintenance_mode"      => "Le mode maintenance est activé. Le portail d'assistance est présentement inaccessible aux utilisateurs, veuillez désactiver le mode maintenance une fois que vous aurez terminé.",

    "invalid_captcha"       => "Le code captcha entré est incorrect, veuillez essayer à nouveau.",
    "blocked_as_spam"       => "Votre requête a été détectée comme spam. Veuillez contacter un administrateur si vous estimez que c'est une erreur.",
    "account_exists"        => "Un compte actif existe déjà avec cette adresse courriel. Veuillez vous connecter ou utiliser la fonction 'Mot de passe oublié'.",
    "error_loading_comments" => "Une erreur s'est produite en chargeant les commentaires.",

    "invalid_auth"          => "Nom d'utilisateur et/ou mot de passe invalides.",

    "forbidden"             => "Interdit",

    "uncaught_exception"    => "<strong>Oops! Une erreur s'est produite.</strong><br />L'erreur a été enregistrée. Veuillez contacter votre administrateur système si cette erreur persiste.",

    "not_logged_exception"  => "<strong>Oops! Une erreur s'est produite.</strong><br />Veuillez notifier l'administrateur système si cette erreur persiste.",

    "too_many_ticket_reqs"  => "Trop de billets soumis par :email. La limite est de :max en :decay minutes.",

    "error_close_open"      => "Erreur, veuillez fermer et ouvrir à nouveau.",

    "not_operator"          => "Une erreur s'est produite. L'opérateur sélectionné est invalide, veuillez vous assurer qu'ils appartiennent à un groupe d'opérateurs et que ce groupe est associé à un rôle.",

    // The error message is appended using JavaScript...
    "datatable_error"       => "<strong>Oops! Une erreur s\'est produite.</strong><br />Une erreur s\'est produite en chargeant la table de données. Veuillez contacter votre administrateur système si cette erreur persiste.",

    "missing_extension"     => "Extension manquante",
    "php_ldap_missing"      => "The php-ldap extension is required to use LDAP authentication. Please enable it and refresh the page.",
    "php_imap_missing"      => "The php-imap extension is required to use Email Download. If you wish to use Email Download, please enable the extension and refresh the page.",

    /*
     * 2.0.3
     */
    "warn_delete"           => "Une fois cet enregistrement supprimé, il ne peut pas être récupéré. Supprimer cet enregistrement peut aussi affecter d'autres zones du système où cet enregistrement est présentement utilisé.",
    "only_ssl_connections"  => "Seules les connexions SSL sont autorisées.",
    "queued_emails"         => "Succès - Les courriels commenceront à être envoyés sous peu.",
    "error_loading_message" => "Une erreur s'est produite en chargeant ce message. Merci d'essayer à nouveau.",
    "please_refresh"        => "Veuillez recharger cette page.",

    /*
     * 2.1.0
     */
    "unable_to_connect_db"  => "<strong>Service présentement non disponible.</strong><br />Impossible de se connecter à la base de données.",
    "category_required"     => "Cet article doit appartenir à une ou plusieurs catégories.",
    "warning"               => "Avertissement",
    "note"                  => "Note",
    "brand_invalid_dept"    => "Cette action n'a pas pu être complétée. Le département n'a pu être modifié sur quelques billets à cause de leur marque.",
    "template_subject_req"  => "Le sujet par défaut du courriel est requis.",
    "template_contents_req" => "Le contenu par défaut du courriel est requis.",

    /*
     * 2.1.1
     */
    "upload_error"          => "Erreur lors de l'envoi du fichier joint \":filename\", reason: \":reason\"",
    "upload_max_size"       => "Le fichier doit être plus petit que :size",
    "upload_wrong_type"     => "Ce type de fichier n'est pas accepté",

    /*
     * 2.1.2
     */
    "field_required"        => "Le champ est requis.",

);
