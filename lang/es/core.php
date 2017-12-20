<?php

return array(

    // SupportPal
    "product_name"              => "SupportPal",
    "slogan"                    => "Soporte hecho simple.",
    "operator_panel"            => "Operator Panel",
    "helpdesk_software"         => "Sistema de soporte por",
    "carefully_crafted"         => "Hecho por",
    "welcome"                   => "Bienvenido a SupportPal",
    "welcome_desc"              => "Has tomado una decisión inteligente. Haga clic en comenzar para comenzar una visita rápida de productos de nuestros ajustes y características.",

    // Dashboard
    "welcome_back"              => "Bienvenido de nuevo",
    "search_placeholder"        => "Busca nuestro centro de soporte...",
    "submit_ticket"             => "Enviar una consulta",
    "submit_ticket_desc"        => "Utiliza este formulario para que nuestro equipo de expertos pueda resolverte tus dudas.",
    "track_ticket"              => "Seguir un ticket",
    "track_ticket_desc"         => "¿No estás registrado? Utiliza tu email y número de ticket para ver y responder tu consulta.",
    "my_tickets"                => "Mis tickets",
    "my_tickets_desc"           => "Sigue tus tickets. Puedes encontrar aquí tanto tus tickets activos como los anteriores.",
    "no_modules"                => "No hay módulos activados.",
    "search_results"            => "Resultados de búsqueda",
    "found_results"             => "Encontrados :total resultados en la búsqueda",

    // Maintenance
    "maintenance"               => "Actualmente estamos haciendo tareas de mantenimiento sobre el sistema",
    "maintenance_desc"          => "Actualmente nuestro sistema de soporte está en mantenimiento, no te preocupes, inmediatamente volverá a estar disponible.",
    "maintenance_active"        => "Modo mantenimiento está activo",

    // About
    "development_license"       => "Development License!",
    "development_license_desc"  => "This installation is using a development license which is only valid on RFC1918 addresses. You are not permitted to use this license in production.",
    "license_status"            => "License Status",
    "license_code"              => "License Code",
    "change_license"            => "Change License",
    "license_info"              => "License Information",
    "license_owner"             => "License Owner",
    "license_created"           => "License Created",
    "license_type"              => "License Type",
    "no_branding"               => "No Branding",
    "branding"                  => "Branding",
    "license_expires"           => "License Expires",
    "license_valid_ip"          => "License Valid IP(s)",
    "license_valid_domain"      => "License Valid Domain(s)",
    "support_status"            => "Support Status",
    "support_expires"           => "Support Expires",
    "version_info"              => "Version Information",
    "installed_version"         => "Installed Version",
    "available_version"         => "Available Version",
    "monthly_product"           => "* Your expiration date will automatically adjust on a monthly basis once any outstanding invoices are paid.",

    // API Tokens
    "api_token"                 => "API Token|API Tokens",
    "token"                     => "Token",
    "regenerate_token"          => "Regenerar token",
    "access_level"              => "Nivel de acceso",
    "read_write"                => "Lectura &amp; Escritura",
    "read_only"                 => "Solo lectura",

    // Spam Rules & Filtering
    "spam_rule"                 => "Regla de Spam|Reglas de spam",
    "containing_text"           => "Contiene texto",
    "containing_text_desc"      => "Por favor introduce una cadena (palabra a banear o e-mail), todas las cadenas son sensibles a mayúsculas. <br />La cadena puede usar <a href='http://www.regular-expressions.info/'>expresiones regulares</a>, un ejemplo puede ser: 's.{1,}p.{1,}a.{1,}m'. No tienes que preocuparte por los delimitadores.",
    "ip_filtering"              => "Filtrado IP",
    "content_filtering"         => "Contenido a filtrar",
    "filter_description"        => "Por favor selecciona una descripción",
    "filter_new_message"        => "Nuevo aviso de ticket (Desde un Usuario)",
    "filter_new_comment"        => "Nuevo comentario de ayuda (Desde un Usuario)",
    "filter_user_login"         => "Login de usuario",
    "filter_operator_login"     => "Login de Agente",
    "filter_api_access"         => "Acceso API",
    "content"                   => "Contenido",
    "sender"                    => "Remitente",
    "content_sender"            => "Contenido & Remitente",

    // Company
    "company"                   => "Empresa|Empresas",
    "company_name"              => "Nombre de la Empresa",
    "your_company"              => "Mi Empresa S.L.",

    // Email
    "default_email_addr"        => "Dirección email por defecto",
    "default_email_addr_desc"   => "Este mail se usará en la mayoría de emails enviados por el sistema",
    "include_operator_name"     => "Introduce el nombre del Agente",
    "include_operator_name_desc"=> "Incluye el nombre del agente en el remitente por ejemplo: Desde: Joe Bellidow (Soporte de tu empresa)",
    "include_dept_name"         => "Incluye el nombre del departamento",
    "include_dept_name_desc"    => "Incluye el nombre del departamento en el la casilla del remitente de cualquier email relacionado con tickets. Tenga en cuenta que esto creará un nuevo hilo de correos si un determinado ticket cambia de departamento.",
    "global_email_header"       => "Cabeza general de Email",
    "global_email_header_desc"  => "Añade una cabecera de email a todos los correos enviados. HTML está permitido.",
    "global_email_footer"       => "General Email Footer",
    "global_email_footer_desc"  => "Añade un footer a todos los emails enviados por el sistema. HTML está aceptado.",
    "email_template"            => "Plantilla de email|Plantillas de emails",
    "email_log"                 => "Log email",
    "email_queue"               => "Cola de email",
    "email_queue_desc"          => "Aquí abajo están los mails que serán enviados próximamente por el sistema en el siguiente cron.",
    "email_method"              => "Método de email",
    "php_mail_function"         => "PHP mail() función",
    "smtp"                      => "SMTP",
    "smtp_host"                 => "SMTP Host",
    "smtp_port"                 => "SMTP Puerto",
    "smtp_encryption"           => "SMTP Encriptación",
    "smtp_requires_auth"        => "Requiere autentificación",
    "smtp_username"             => "SMTP Usuario",
    "smtp_password"             => "SMTP Contraseña",
    "ssl"                       => "SSL",
    "tls"                       => "TLS",
    "validate_smtp"             => "Validar SMTP",
    "email_content"             => "Contenido del email",
    "email_content_desc"        => "Introduce un asunto por defecto y un contenido para la plantilla, las puedes crear en otros idiomas, pero si no existen las plantillas en otro idioma, se usará la de por defecto",
    "outgoing"                  => "Saliente",
    "incoming"                  => "Entrante",
    "incoming_spam"             => "Entrante (Rechazado - Spam)",
    "incoming_throttled"        => "Entrante (Rechazado - Throttled)",
    "email_subject"             => "Asunto del email",
    "twig_html_warning"         => "Twig no está permitido dentro de los HTML tags/atributos y será automáticamente eliminado al guardar.",

    // Modules
    "modules"                   => "Modulo|Módulos",
    "modules_desc"              => "Aquí encontrarás una lista de los módulos que están disponibles, click sobre el icono de editar para actualizar sus ajustes.",
    "module_disable"            => "Los módulos desactivados serán eliminados de la interafaz de usuario y agente.",

    // Scheduled tasks
    "scheduled_task"            => "Tarea programada|Tareas programadas",
    "interval_desc"             => "Selecciona cuando quieres que está tarea funcione, por ejemplo, si seleccionas 5 minutos, se ejecutará cada 5 minutos siempre y cuando el cron funcione.",
    "cron_settings"             => "Ajustes del cron",
    "cron_makesure"             => "Por favor crea una tarea cron con lo siguiente: ",
    "cron_running"              => "Ejecutandose",
    "cron_not_running"          => "NO ejecutandose",
    "task_ran"                  => "Se ha ejecutado correctamente de forma manual.",
    "task_failed"               => "Ha fallado el intento de ejecución manual.",

    // Plugins
    "plugins"                   => "Plugin|Plugins",
    "installed_plugins"         => "Plugins instalados",
    "visit_plugin"              => "Visita la web del plugin",
    "uninstall_plugin_warning"  => "Desinstalar el plugin y borrar toda la información del plugin. Te recomendamos desinstalarlo antes.",

    // Messages
    "last_activity"             => "Ultima actividad",
    "send_to"                   => "Enviar a",
    "inbox"                     => "Bandeja de entrada",
    "compose"                   => "Redactar",

    // Utilities
    "utilities"                 => "Utilidades",

    // System Cleanup
    "system_cleanup"            => "Limpieza del sistema",
    "system_cleanup_desc"       => "Utiliza las opciones disponibles para limpiar datos que no se utilizan.",
    "files"                     => "Archivos",
    "files_desc"                => "Los siguientes archivos están guardados como ficheros en el sistema.",
    "logs"                      => "Logs",
    "logs_desc"                 => "Los siguientes datos están guardados como registros en la base de datos",
    "empty"                     => "Vacio",
    "prune"                     => "Reducir",
    "total_records"             => "Resultados totales",
    "system_cache"              => "Cache del sistema",
    "system_cache_desc"         => "Utilizado para guardar archivos en el sistema que no varían mucho y así acelerarlo.",
    "template_cache"            => "Cache de la plantilla",
    "template_cache_desc"       => "Vistas pre-compiladas de la plantilla son guardadas para acelerar su carga.",
    "attachments_desc"          => "Los adjuntos de los tickets son guardados en el sistema, puedes eliminarlos por fechas.",
    "system_activity_log_desc"  => "Registro de logs de usuarios, agentes y el propio sistema, puedes eliminarlos por fechas.",
    "email_log_desc"            => "Registro de todos los emails entrantes, puedes eliminarlos por fechas.",
    "operator_login_log_desc"   => "Guarda cada vez que un agente se conecta y su IP, puedes eliminarlos por fechas.",

    // Captcha
    "captcha"                   => "Captcha",
    "show_captcha"              => "Mostrar Captcha",

    // Widgets
    "dashboard"                 => "Dashboard",
    "add_remove_widget"         => "Añadir / Eliminar Widgets",
    "todo_record"               => "hacer registro",
    "enable_tour"               => "Activar tour de producto",

    // Product Tour
    "dashboard_desc"            => "Este es tu propio dashboard. Puedes eliminar los widgets, minimizarlos o moverlos donde quieras!",
    "private_messages"          => "Mensajes privados",
    "messages_desc"             => "Los mensajes privados son mensajes 1:1 con otros agentes.",
    "configure"                 => "Configura tu centro de soporte",
    "configure_desc"            => "SupportPal contiene un número de opciones que debes ajustar para que funcione correctamente.",
    "company_name_desc"         => "Your company name es usado para todos los correos con tus usuarios.",
    "default_email"             => "Dirección email por defecto",
    "default_email_desc"        => "El siguiente email será usado para todos los correos salientes enviados a tus usuarios.",
    "dept_settings_desc"        => "Hacer que los departamentos . Department settings enable you to override global settings.",
    "department_desc"           => "Departments are just like those within your organisation. Useful for ensuring customer enquiries get to the correct staff member(s) quickly.",
    "department_email"          => "Department Email Addresses",
    "dept_email_desc"           => "Multiple e-mail addresses can be assigned to a given department. Email collection is performed against the configured addresses to pull e-mails from your customers into the help desk.",
    "dept_tmpl"                 => "Department E-mail Templates",
    "dept_tmpl_desc"            => "Sometimes you may wish to change, or completely disable, department e-mail templates. You can define department specific e-mail templates and enable them here.",
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
    "ip_ban_time_desc"          => "Si el baneo es temporal o permanente.",
    "expiry"                    => "Expiración",
    "expired"                   => "Expirado",
    "expiry_time"               => "Tiempo de expiración",
    "expiry_time_desc"          => "La fecha en la que el baneo expira, si la fecha no se pone, será configurado para expirar en 24 horas.",
    "permanent"                 => "Permanente",

    // Languages
    "no_enabled_languages"      => "Fallo en actualizar :item. Al menos un lenguaje debe ser activado siempre.",

    // General Settings
    "website"                   => "Página web",
    "locale"                    => "Idioma",
    "simpleauth"                => "SimpleAuth",
    "admin_folder"              => "Directorio Backend",
    "admin_folder_desc"         => "Introduce el nombre de la carpeta para que los agentes accedan. Es recomemdable cambiar el nombre \"admin\" del directorio para más seguridad.",
    "enable_ssl"                => "Activar SSL",
    "force_ssl"                 => "Forzar SSL para todos los agentes",
    "force_ssl_desc"            => "Fuerza a todos los operadores a usar la versión SSL de tu web.",
    "frontend_template"         => "Plantilla frontend",
    "operator_template"         => "Plantilla de los agentes",
    "maintenance_mode"          => "Modo mantenimiento",
    "maintenance_mode_desc"     => "Desactivar el helpdesk y poner un mensaje de mantenimiento Edit resources/templates/frontend/[template]/core/maintenance.twig to change the message that is shown to users.",
    "default_user_country"      => "Pais por defecto de los usuarios",
    "default_user_country_desc" => "El pais seleccionado será el que tendrán los usuarios por defecto.",
    "system_timezone"           => "Zona horaria por defecto",
    "system_timezone_desc"      => "La zona horaria por defecto, será usada por el sistema. Los Agentes pueden cambiarsela ellos mismos desde su panel.",
    "date_format"               => "Formato de fecha",
    "date_format_desc"          => "El formato de fecha será usado de forma general.",
    "time_format"               => "Formato de hora",
    "time_format_desc"          => "El formato de hora será usado de forma general.",
    "simpleauth_key"            => "SimpleAuth Key",
    "simpleauth_key_desc"       => "The key for our single sign on option, minimum 16 characters.",
    "simpleauth_operators"      => "Allow for Operators",
    "simpleauth_operators_desc" => "Allow operators to login with SimpleAuth, we recommend to keep this disabled unless you are specifically using it for this purpose.",
    "frontend_logo"             => "Logo Frontend",
    "base_url"                  => "Sistema URL",
    "base_url_desc"             => "Utiliza la URL entera del sistema, será usada para manadarla a los clientes y que hagan login.",
    "debug"                     => "Debug",
    "debug_mode"                => "Debug Mode",
    "debug_mode_desc"           => "Activa el modo debug para mostrar errores, utilizar únicamente para debug o si lo solicita soporte. Errors are otherwise stored in the logs at /storage/logs.",
    "pretty_urls"               => "URLs bonitas",
    "pretty_urls_desc"          => "Activarlo elimina el index.php de las URL, only enable if you are able to access the operator panel without index.php. Disable if you do not have mod_rewrite installed, .htaccess files are not allowed or haven't converted the Apache .htaccess rewrite rules to work with your alternative web server.",
    "send_diagnostic"           => "Enviar datos de diagnóstico",
    "send_diagnostic_desc"      => "To help SupportPal improve its products, your installation can send diagnostic data when something goes wrong.",

    /*
     * 2.0.1
     */
    "incoming_rejected"         => "Entrante (Rechazado)",
    "show_original"             => "Mostrar el original",

    /*
     * 2.0.2
     */
    "cron_makesure"             => "Para asistencia, por favor, registra un cronjob, más detalles <a target='_blank' href='http://docs.supportpal.com/display/DOCS/New+Installation#NewInstallation-CronJob'>Cron Job Ayuda</a>.",
    "widget"                    => "Widget|Widgets",

    /*
     * 2.0.3
     */
    "enable_ssl_desc"           => "Activar esto fuerza a los agentes y usuarios a usar un certificado seguro, es un ajuste recomendado. Por favor, asegúrate que el SSL funciona correctamente antes de activarlo.",
    "unexpected_template_error" => "Un errror inesperado ha ocurrido comprobando la sintaxis de la plantilla. Por favor, intenta de nuevo.",
    "empty_template_preview"    => "Por favor, proporciona una plantilla válida para poder mostrar la previsualización.",
    "no_department_address"     => "Fallo al buscar la dirección del departamento en la lista de destinatarios.",
    "email_loop_detected"       => "Loop detectado - email enviado desde un correo de un departamento.",
    "email_ticket_locked"       => "Ticket bloqueado. Al usuario se le ha pedido que abra un nuevo ticket por correo electrónico",
    "email_no_body"             => "Fallo al tratar de recuperar el contenido (body) del mensaje.",
    "email_runtime_error"       => "Un error de ejecución ha ocurrido mientras trataba de crear el/la ticket/respuesta.",
    "email_reply_disabled"      => "Las respuestas de usuario via email han sido desactivadas para este departamento.",
    "email_throttled"           => "Demasiados emails entrantes por un mismo usuario. El límite es :max_requests emails cada :decay_time minutos.",

    /*
     * 2.1.0
     */
    "generalsetting_desc"       => "Edita los ajustes para aplicarlos a todo SupportPal. Si tu quieres modificar algún ajuste en concreto, ej. Tickets, abre la sección desde el sidebar para ver los ajustes disponibles para esa sección. Los ajustes relacionados con tu brand(s) pueden ser encontrados en la sección Marcas del sidebar",
    "brand"                     => "Marca|Marcas",
    "brand_desc"                => "Una marca es un frontend diferente para los usuarios, permitiendo varios frontends y canales diferentes, pero desde un mismo backend.",
    "brand_name"                => "Nombre de la marca",
    "default_brand"             => "Marca por defecto",
    "default_brand_desc"        => "Selecciona la marca por defecto que aparecerá cuando los usuarios accedan al portal sin seleccionar ninguna.",
    "brand_name_desc"           => "El nombre de la marca tal y como lo verán los usuarios.",
    "brand_enabled_desc"        => "Activa o desactiva la marca. Las marcas deshabilitadas no se pueden utilizar y no contarán como parte de las marcas permitidas en su licencia, la desactivación se puede usar para ocultar temporalmente una marca y / o retener información. La eliminación de una marca eliminará toda la información, incluidos los usuarios y los boletos relacionados con ella.",
    "inherit_global_setting"    => "Heredar configuración global",
    "brand_date_format_desc"    => "El formato de fecha utilizado para el frontend de esta marca.",
    "brand_time_format_desc"    => "El formato de tiempo utilizado para el frontend de esta marca.",
    "brand_timezone"            => "Zona horaria de la marca",
    "brand_timezone_desc"       => "El huso horario que se utiliza por defecto en el frontend de esta marca, los usuarios tendrán la opción de seleccionar su propio huso horario.",
    "brand_default_lang_desc"   => "El idioma que se utiliza por defecto en el frontend de esta marca.",
    "brand_lang_toggle_desc"    => "Si el menú desplegable del idioma debe mostrarse en el frontend de esta marca.",
    "brand_groups_desc"         => "Los operadores de los grupos seleccionados podrán crear, actualizar y eliminar (según los permisos de función) las entradas y otros contenidos de esta marca.",
    "select_brand"              => "Selecciona una marca...",
    "add_another_language"      => "Añadir otro idioma...",
    "mass_email_brand_desc"     => "Seleccione la marca de la que se enviará el correo electrónico. Se utilizará para configurar el envío desde el nombre y la dirección, cargar la plantilla de correo electrónico correcta y en los campos de combinación. Si envía a un grupo de usuarios, solo se enviarán por correo electrónico los usuarios que pertenezcan a la marca seleccionada.",
    "brand_limit_exceeded"      => "Tu licencia solo permite el uso de :allowed marca(s) simultáneamente. Para comprar licencias adicionales visite el área de clientes.",
    "additional_brands"         => "Marcas adicionales",
    "purchase_more"             => "Comprar más",
    "brand_limit_allowed"       => "Tu licencia actualmente solo permite :allowed marca simultáneamente.|Tu licencia únicamente permite usar :allowed marcas simultáneamente.",
    "brand_limit_purchase"      => "If this is incorrect, please <strong>reissue</strong> your license at our <a href='http://www.supportpal.com/manage/' target='_blank'>client area</a> and visit the <a href=':route'>License Information</a> page to synchronise your help desk with our license server.<br />To purchase additional brands, please <a href='https://www.supportpal.com/manage/upgrade.php?type=configoptions&id=:id' target='_blank'>upgrade your license</a>.",
    "support_no_expiry"         => "Tu licencia de soporte y actualizaciones es válida",
    "support_expiry"            => "Tu licencia de soporte y actualzaciones es válida hasta :date.",
    "support_status_desc"       => "Por favor <a href='https://www.supportpal.com/manage/cart.php?gid=addons' target='_blank'>renueva tu suscripción de soporte</a> para poder obtener las últimas actualizaciones y soporte de SupportPal.",
    "ip_ban"                    => "IP Baneada|IP Baneadas",
    "ip_whitelist"              => "IP lista blanca",
    "whitelisted_ip"            => "IP dentro de la lista blanca",
    "frontend_logo_desc"        => "Cambia el logo por defecto en el frontend de esta marca. El campo puede ser un camino relativo al directorio base (recomendamos almacenar su logotipo en la ( resources/assets/ folder) o redirigir a una imagen.",
    "license_path"              => "Path de instalación",
    "php_info"                  => "Información PHP",
    "log"                       => "Log|Logs",
    "invalid_department_brand"  => "Este departamento no está asignado a la marca del ticket.",
    "incoming_rejected"         => "Entrante (Rechazado)",
    "twig_operator_signature"   => "El {{ operator.signature }} El campo de fusión se procesará en tiempo de ejecución, por lo que la vista previa puede ser incorrecta.",

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
