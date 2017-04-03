<?php

return array(

    // Pre installation check
    "requirements_failed"       => "Exigences de système pas accompli",

    // Index
    "supportpal_installer"      => "SupportPal Installation",
    "index_desc"                => "Merci d'avoir choisi SupportPal. S'il vous plaît vérifier le type d'installation ci-dessous est correcte et puis continuer.",
    "select_language"           => "Choisir la langue:",
    "begin_installation"        => "Lancement de l'installation",
    "install_type"              => "Type d'installation",
    "install"                   => "Nouvelle Installation",
    "upgrade"                   => "Mise à niveau l'installation existante",
    "support"                   => "Le code de licence utilisé pour cette installation n'a pas de souscription valide pour support et mise à jour, et en tant que tel, il n'est pas possible à installer cette version de SupportPal. S'il vous plaît <a href='https://www.supportpal.com/manage/cart.php?gid=addons' target='_blank'>renouveler</a> votre souscription.",

    // Upgrade
    "upgrade_step_1"            => "Étape 1 de 3: Configuration requise",
    "upgrade_step_2"            => "Étape 2 de 3: Mise à jour base de données",
    "upgrade_step_3"            => "Étape 3 de 3: Mise à jour complète",
    "upgrade_step_3_support"    => "Si vous trouvez des problèmes ou besoin d'aide en utilisant les nouvelles fonctionnalités de SupportPal, s'il vous plaît lire notre documentation ou ouvrir un ticket avec nous.",
    "upgrade_step_3_continue"   => "Pour continuer à utiliser SupportPal, connectez-vous au panneau de commande ici",
    "successfully_updated"      => "Félicitations, SupportPal a été mis à jour avec succès.",

    // Install
    // Step 1
    "step_1"                    => "Etape 1 sur 7: Accepter EULA",
    "step_1_desc"               => "S'il vous plaît lire notre accord de licence de logiciel ci-dessous. En continuant, vous acceptez la licence.",
    "i_accept_and_continue"     => "J'accepte et continue",

    // Step 2
    "step_2"                    => "Etape 2 sur 7: Configuration requise",
    "not_available"             => "Indisponible",
    "php_version"               => "PHP Version",
    "php_version_not_found"     => "Non disponible, version PHP trouvé :version",
    "php_extensions"            => "Extensions PHP",
    "file_writeable"            => "Autorisations de fichier",
    "file_writeable_desc"       => "Tous les ci-dessous devrait être accessible en écriture par le serveur web. Nous vous recommandons d'utiliser 755 permissions de fichiers, bien que certains systèmes peuvent nécessiter 777 si les fichiers ne sont pas la propriété de l'utilisateur du serveur web. Repertoires devraient être récursive inscriptible.",

    // Step 3
    "step_3"                    => "Etape 3 sur 7: Base de données",
    "step_3_desc"               => "S'il vous plaît entrer les détails de la base de données que vous avez mis en place pour SupportPal.",
    "hostname"                  => "Hostname",
    "port"                      => "Port",
    "port_desc"                 => "(à modifiez seulement si il ne s'agit pas du port de défaut 3306)",
    "database"                  => "Base de données",
    "database_not_empty"        => "La base de données ne doit pas contenir des tables.",

    // Step 4
    "step_4"                    => "Etape 4 sur 7: Créer des tables",
    "step_4_desc"               => "La migration sera effectuée en arrière-plan et un journal détaillé écrit ci-dessous, cela peut prendre plusieurs minutes. Une fois terminé, s'il vous plaît cliquez sur le bouton qui apparaîtra pour continuer.",

    // Step 5
    "step_5"                    => "Étape 5 de 7: Compte Opérateur",
    "step_5_desc"               => "SupportPal nécessite une licence valide pour fonctionner, s'il vous plaît entrer une ci-dessous.",
    "license_desc"              => "Votre clé de licence SupportPal est de 23 caractères et commence par SP-",
    "operator_desc"             => "S'il vous plaît créer un compte d'administrateur pour le panneau de commande en saisissant tous les détails ci-dessous.",
    "validating_license"        => "Licence en validation ...",

    // Step 6
    "step_6"                    => "Etape 6 sur 7: Paramétrage rapide",
    "step_6_desc"               => "Entrez votre entreprise et les détails du site Web ci-dessous.",
    "locale_desc"               => "Définissez les paramètres régionaux de votre système.",
    "diagnostic_desc"           => "Pour aider à améliorer nos produits, nous aimerions recevoir des données de diagnostic de votre installation quand quelque chose va mal. Vous pouvez désactiver cette ci-dessous si vous ne souhaitez pas nous envoyer des données.",
    "operator_success"          => "Your administrator account has been created.",

    // Step 7
    "step_7"                    => "Etape 7 sur 7: Installé !",
    "successfully_installed"    => "Félicitations, SupportPal a été installé avec succès.",
    "operator_panel"            => "Panneau de commande",
    "help_desc"                 => "Si vous avez besoin d'aide pour configurer ou utiliser SupportPal, nous avons trois principales sources d'information:",
    "submit_a_ticket"           => "Soumettre un ticket",

    /*
     * 2.0.1
     */

    "post_install"              => "Pour que le système fonctionne correctement, une tâche cron doit être mis en place. S'il vous plaît lire notre <a href='http://docs.supportpal.com/display/DOCS/New+Installation#NewInstallation-PostInstallationSteps'> après les étapes d'installation </a> pour plus de détails à ce sujet et d'autres recommander des mesures pour améliorer la fonctionnalité et la sécurité.",

    /*
     * 2.0.2
     */
    "required_requirements"     => "You meet :required of :total required requirements.",
    "optional_requirements"     => "You meet :optional of :total optional requirements.",
    "both_requirements"         => "You meet :required of :total_required required requirements and :optional of :total_optional optional requirements.",
    "php_version_is"            => "Votre version de PHP est :version.",
    "enabled"                   => "Activée",
    "disabled"                  => "Désactivé",
    "php_settings"              => "Paramètres PHP",
    "ipv6_support"              => "Prise en charge IPv6",
    "png_jpg_support"           => "PNG & JEPG support",
    "memory_limit"              => ">= 128Mo de mémoir",
    "memory_limit_error"        => "otre limite de mémoire est ':limit'.",
    "permission_denied"         => "Permission refusée",
    "writable"                  => "Inscriptible",
    "help_php_version"          => "Pour obtenir une aide afin d'installer une nouvelle version de PHP s'il vous plaît contacter votre fournisseur d'hébergement ou de l'administrateur du serveur.",
    "help_php_extensions"       => "Les extensions PHP diffèrent en fonction de votre serveur, votre hôte et d'autres variables du système. Pour obtenir une assistance installation d'extensions manquantes, s'il vous plaît contacter votre fournisseur d'hébergement ou de l'administrateur du serveur.",
    "help_php_settings"         => "Pour une assistance supplémentaire, s'il vous plaît lire <a target=\"_blank\" href=\"http://docs.supportpal.com/display/DOCS/System+Requirements#SystemRequirements-PHPSettingsPHPSettings\">PHP Settings Help</a>.",
    "disabled_functions"        => "Fonctions desactivées",
    "mysql_version_is"          => "Your MySQL Version is :version.",
    "help_mysql_version"        => "For assistance installing a new version of MySQL please contact your hosting provider or server administrator.",
    "mysql_version"             => "MySQL Version",
    "mysql_version_not_found"   => "Not available, found MySQL version: :version",
    "mysql_server_version"      => "MySQL 5.5.3 or greater (10.x for MariaDB) is required to run SupportPal. Found: ':version'.",
    "mysql_client_version"      => "MySQL client version 5.5.3 or greater (5.0.9 for MySQLnd) is required to run SupportPal. Found: ':version'.",

    /*
     * 2.0.3
     */
    "support_expired_error"     => "Une erreur est survenue lors de contacter le serveur de licence avec le message: ':erreur' .<br /> S'il vous plaît contacter le support citant ce message",

    /*
     * 2.1.0
     */
    "ipv6_failure"              => "If your server has IPv6 networking support, please install the php-sockets extension.",
    "email_address_desc"        => "Enter your main company email address, this will be set up as the default sending email address and the email address on your first department. You will be able to add other email addresses later.",

);
