<?php

return array(

    "feedback_question"         => "Pregunta que se mostrará al usuario.",
    "open_new"                  => "Abrir nuevo ticket",
    "select_department"         => "Seleccionar un departamento",
    "select_department_desc"    => "Por favor selecciona el departamento que debe atender tu ticket.",
    "no_departments"            => "No se han encontrado departamentos",
    "department_user_details"   => "Detalles de departamento y usuario",
    "enter_your_details"        => "Introduce tus detalles",
    "enter_ticket_details"      => "Escribe el problema",
    "enter_subject_message"     => "Introduce el asunto y el mensaje",
    "invalid_user"              => "Por favor asegúrate que los detalles de usuario son correctos.",

    "registered_users"          => "Únicamente usuarios registrados",
    "registered_users_desc"     => "Importar solo mensajes de usuarios que tengan cuenta",

    "tickets"                   => "Ticket(s)",
    "ticket"                    => "Ticket|Tickets",
    "subject"                   => "Asunto",
    "no_subject"                => "Sin asunto",
    "last_action"               => "Última acción",
    "due_time"                  => "Fecha de vencimiento",
    "created_time"              => "Fecha de creación",
    "submitted"                 => "Enviado",
    "add_reply"                 => "Añadir respuesta",
    "ticket_reply"              => "Respuesta del ticket",
    "ticket_note"               => "Nota del ticket",
    "ticket_type"               => "Tipo de ticket",

    "user_ticket"               => "Usuario del ticket",
    "user_ticket_desc"          => "Abrir un nuevo ticket como usuario nuevo o como usuario existente.",
    "existing_user"             => "Usuario existente",
    "new_user"                  => "Nuevo usuario",
    "internal"                  => "Interno",
    "internal_ticket"           => "Ticket interno",
    "internal_ticket_desc"      => "Abrir un ticket únicamente interno. Este ticket se asociará contigo y no con el cliente.",
    "ticket_opened"             => "Tu ticket ha sido correctamente creado.",
    "enter_user_details"        => "Por favor introduce tus datos abajo, por el contrario si tienes cuenta, conéctate.",
    "already_have_account"      => "Ya tienes una cuenta de usuario, por favor conéctate con ella. Si no recuerdas la contraseña, puedes usar la opción de reseteo.",

    "recent_tickets"            => "Tickets recientes",
    "last_message_text"         => "Último mensaje de texto",

    "set_due_time"              => "Introducir fecha",

    "settings"                  => "Ajustes del ticket",

    "priority"                  => "Prioridad|Prioridades",

    "channel"                   => "Canal|Canales",
    "account"                   => "Cuenta|Cuentas",

    "assign_operator"           => "Asignar agente",
    "assigned_operator"         => "Agente asignado",
    "assigned_to"               => "Asignado a",
    "assigned"                  => "Asignado",

    "department"                => "Departamento|Departamentos",
    "change_department_order"   => "Mueve las filas para cambiar el orden en el que se muestra los departamentos cuando un usuario quiere abrir un nuevo ticket.",
    "department_order"          => "Orden de Departamentos",
    "department_applicable"     => "Departamentos aplicables",
    "department_applicable_desc" => "Departamentos en los que el usuario podra elegir la prioridad. Solo se aplica al frontend, los operadores tendrán disponibles todas las prioridades en todos los departamentos.",

    "due_to_be_sent"            => "Listo para ser enviado",
    "send_now"                  => "Enviar ahora",

    "tag"                       => "Tag|Tags",

    "track_ticket"              => "Seguir ticket",
    "view_ticket"               => "Ver ticket",

    // Recent activity
    "recent_activity"           => "Actividad reciente",
    "no_recent_activity"        => "Sin actividad reciente",

    // Active operators
    "active_operators"          => "Agentes activos",

    "ticket_number"             => "Número de ticket",
    "ticket_format"             => "Formato del número de ticket",
    "ticket_format_desc"        => "Las siguientes variables están disponibles:<br />%S para numeración secuencial | %N para un número aleatorio | %L para letras aleatoria<br />Puedes usar {number} para repetir <strong>solo</strong> después de %N o %L, e.g. %N{4} equivale a 4 número aleatorios, %L{3} equivale a 3 letras aleatorias<br />El siguiente link <a href='http://php.net/manual/en/function.date.php' target='_blank'>PHP Date</a> te muestra parámetros que puedes usar % Y,y,m,d,j,g,G,h,H,i,s",

    // Departments
    "department_public_desc"    => "Indica si el departamento es visible en la parte pública.",
    "department_parent_desc"    => "Si el depaertamento es un subdepartamento, por favor, selecciona un departamento padre. Los subdepartamentos están pensados para manejo y escalado interno, por lo tanto, si eliges la opción se desactivarán algunas opciones siguientes.",
    "department_priority"       => "Prioridades del departamento",
    "department_priority_desc"  => "Prioridades disponibles para los usuarios cuando abren un ticket en este departamento, al menos uno. Por defecto, todas las prioridades están disponibles para este departamento.",
    "department_no_format"      => "Opcional, configuralo para sobrescribir el formato por defecto del número de ticket.",
    "department_operator"       => "Agentes del departamento",
    "department_default_assign" => "Asignado por defecto a",
    "dept_default_assign_desc"  => "Usa esta opción si quieres que los tickets abiertos en este departamento se asignen automáticamente a uno o más agentes.",

    // Department emails
    "email_accounts_desc"       => "Define la dirección de email del depaertamento. Todos los emails dirigidos a esa dirección serán importados. La primera dirección será la utilizada como remitente en los emails salientes.",
    "department_password"       => "Introduce una contraseña solo para modificar la actual o comprobar la cuenta.",
    "department_port"           => "Valores por defecto: 110 para POP3, 995 para POP3S, 143 para IMAP, y 993 para IMAPS. Deja en blanco para usar valores por defecto.",
    "department_encryption"     => "Algunos proveedores requieren SSL o TLS para conectar, si no estás seguro déjalo en Ninguno.",
    "department_delete_mail"    => "Si estás usando IMAP, puedes elegir no borrar los emails del servidor una vez importados.",
    "protocol"                  => "Protocolo",
    "server"                    => "Servidor",
    "port"                      => "Puerto",
    "username"                  => "Usuario",
    "password"                  => "Contraseña",
    "encryption"                => "Encriptación",
    "delete_downloaded"         => "Borrar emails descargados",
    "consume_all"               => "Importar todos los emails",
    "email_download"            => "Descargar email",
    "email_piping"              => "Email piping",
    "email_piping_desc"         => "Configura un reenvio de email hacia el siguiente ejecutable en un servidor diferente.",
    "remote_email_piping"       => "Email piping remoto",

    // Department email options
    "email_options"             => "Opciones de email",
    "email_auto_close"          => "Enviar un email a los usuarios cuando el ticket se Auto-Cierre",
    "email_auto_close_desc"     => "Selecciona si lo usuarios deben recibir un email cuando los tickets pertenecientes a ellos se cierren automáticamente.",
    "email_closed_by_operator"  => "Enviar email al usuario cuando el Agente cierre el ticket.",
    "email_closed_by_op_desc"   => "Selecciona si lo usuarios deben recibir un email cuando los tickets pertenecientes a ellos se cierren por un agente.",
    "email_user_on_email"       => "Enviar email al usuario cuando se abra un ticket por email.",
    "email_user_on_email_desc"  => "Selecciona si lo usuarios deben recibir un email cuando se ha abierto un ticket porque han enviado un email.",
    "email_operators"           => "Notificar a los agentes",
    "email_operators_desc"      => "Seleccionar si enviar a los agentes las respuestas de otros agentes. Por defecto comprueba la opción \"email operators\" en el panel de agentes.",
    // Department email templates
    "new_ticket_reply"          => "Nueva respuesta",
    "new_ticket_opened"         => "Nuevo ticket abierto",
    "reply_to_locked"           => "Responder al ticket bloqueado",
    "waiting_for_response"      => "Esperando respuesta",
    "ticket_auto_closed"        => "Ticket cerrado automaticamente",
    "closed_by_operator"        => "Cerrado por un agente",

    // Feedback
    "feedback"                  => "Opinión",
    "feedback_form"             => "Formulario de opinión|Formularios de opinión",
    "feedback_form_desc"        => "Los formularios de opinión son procesados por orden de aparición. Mueves las filas para cambiar el orden de prioridad de los formularios.",
    "view_feedback_report"      => "Ver informe de opiniones",
    "view_feedback"             => "Ver opinión",
    "ticket_feedback"           => "Opinión del ticket",
    "feedback_fields_error"     => "Ha habido un error guardando los campos del formulario de opinión.",
    "time_after_resolved"       => "Tiempo desde que se ha resuelto.",
    "time_after_resolved_desc"  => "Tiempo, desde que el ticket se ha resuelto, para enviar el formulario de opinión.",
    "expires_after"             => "Expira después de",
    "expires_after_desc"        => "Tiempo máximo para contestar el formulario de opinión, recomendamos 7 días. Puedes introducir 0 para que no expire.",
    "form_conditions"           => "Condiciones del formulario",
    "form_conditions_desc"      => "Define the ticket conditions for which newly resolved tickets are checked to see if they fall under this form. If a resolved ticket fits multiple forms, it will be selected on the form priority, which can be modified by going to the list of forms and reordering.",
    "form_fields"               => "Campos del formulario",
    "form_fields_desc"          => "If you'd like to collect additional information when the user provides their feedback, you may set up custom fields to show on the form here.",
    "response_rate"             => "Nota de la respuesta",
    "sent_forms"                => "Formularios de opinión enviados",
    "rating"                    => "Puntuaciones",
    "good_ratings"              => "Puntuaciones buenas",
    "bad_ratings"               => "Puntuaciones malas",
    "customer_satisfaction"     => "Satisfacción de los clientes",
    "feedback_desc"             => "Gracias por ponerte en contacto con nosotros y esperamos haber resuelto tu consulta. Agradeceríamos si nos puedes dejar tu opinión.",
    "good_satisfied"            => "Bien, estoy satisfecho",
    "bad_not_satisfied"         => "Mal, no estoy sartisfecho",
    "feedback_not_found"        => "Por algún motivo, no ha podido ser enviada tu opinión, si crees que es importante, por favor, abre un ticket y háznoslo llegar. Muchas gracias",
    "feedback_malformed_token"  => "Tu opinión no ha sido aceptada por algún error en el token. si crees que es importante, por favor, abre un ticket y háznoslo llegar. Muchas gracias",
    "feedback_already_done"     => "Ya has valorado este ticket, muchas gracias de todas formas.",
    "feedback_expired"          => "Hace demasiado que este ticket ha sido resuelto, el formulario de opinión ya ha sido cerrado, no obstante si nos quieres decir algo, hazlo con un ticket. Gracias.",
    "feedback_questions"        => "Sabemos que estás muy ocupado/a, pero agradeceríamos si nos puedes dedicar unos minutos a responder unas breves preguntas. ¡Nos ayudará a mejorar!",
    "feedback_thank_you"        => "Gracias por hacernos llegar tu opinión. Es muy importante para nosotros.",
    "feedback_for_ticket"       => "Opinión para el ticket #:number",
    "feedback_rating_desc"      => "El soporte recibido por este ticket ha sido valorado como <strong>:rating</strong> por el usuario.",

    // Custom fields
    "customfield"               => "Más Información|Más información",
    "customfield_order"         => "DArrastre las filas para cambiar el orden en que se muestran los campos personalizados a los usuarios al abrir los tickets a través de la Web.",

    // Canned responses
    "cannedresponse"            => "Respuesta predefinida|Respuestas predefinidas",
    "canned_response_category"  => "Categoría de respuesta predefinida|Categorías de respuestas predefinidas",
    "canned_public_desc"        => "Activa esto para que solo tu puedas usar esta respuesta predefinida.",
    "canned_group_desc"         => "Si solo quieres que esta respuesta predefinida sea usado por un grupo de agentes en concreto, deja en blanco para que los usen todos los agentes.",

    // Filters
    "filter"                    => "Filtro|Filtros",
    "filter_condition"          => "Condiciones del filtro",
    "filter_condition_desc"     => "Define las condiciones que deben cumplir los tickets para que aparezcan bajo este filtro.",
    "filter_public_desc"        => "Solo utilizar yo este filtro.",
    "filter_group_desc"         => "Si solo quieres que este filtro sea usado por un grupo de operadores en concreto, deja en blanco para que los usen todos los agentes.",

    // Macros
    "macro"                     => "Macro|Macros",
    "macro_type"                => "Tipo de macros",
    "macro_type_desc"           => "De forma predeterminada, la macro tiene que ser llamada manualmente en la vista de ticket. Puede configurarse como una macro automática que se comprueba y actúa cuando se reciben nuevos tickets en o en todos los tickets a través de una tarea programada, en ambos casos se verifican las condiciones y si son verdaderas, las acciones se realizarán automáticamente. Una macro sólo se puede ejecutar una vez en un ticket automáticamente, no hay límite para ejecutarlo manualmente.",
    "manual"                    => "Manual",
    "macro_type_auto1"          => "Automático - En nuevos tickets solo",
    "macro_type_auto2"          => "Automático - Todos los tickets (tarea programada)",
    "macro_condition"           => "Condiciones del macro",
    "macro_condition_desc"      => "Defina las condiciones para las que estará disponible esta macro. De forma predeterminada, sin condiciones, se aplicará a todas los tickets.",
    "macro_action"              => "Acciones del macro",
    "macro_action_desc"         => "Definir las acciones que se realizan cuando se realiza una macro. Asegúrese de que las acciones son válidas para el departamento en el que se encuentra el ticket o de lo contrario se ignorarán.",

    "from"                      => "De",
    "to"                        => "Para",
    "cc"                        => "CC",
    "cc_desc"                   => "Puedes añadir en CC a otras personas, simplemente añadiendo sus emails.",

    "allowed_files"             => "Ficheros permitidos como adjuntos",

    // Drafts
    "also_viewing"              => "<strong>:name</strong> está viendo el ticket.",
    "draft_saved"               => "Borrado guardado a las :time",
    "save_draft"                => "Guardar borrador",
    "discard_draft"             => "Descartar borrador",

    // Locked
    "error_ticket_locked"       => "Este ticket ha sido bloqueado y no se puede actualizar de nuevo, por favor abre un nuevo ticket si necesitas más ayuda.",

    // Ticket Followups
    "follow_up"                 => "Seguimiento",
    "follow_up_status_desc"     => "Establecer el ticket a un estado diferente hasta la fecha de seguimiento.",
    "exact_date_time"           => "Fecha y hora exacta",
    "time_from_now"             => "Tiempo a partir de ahora",

    // Schedule
    "schedule"                  => "Programado|Programados",
    "business_hour"             => "Horas laborables",
    "business_hour_desc"        => "El horario laborable indica las horas en las que el personal está disponible para responder a las preguntas. Las horas se utilizan para calcular el vencimiento de los tickets.",

    // Holidays
    "holiday"                   => "Festivo|Festivos",
    "all_holidays"              => "Todos los festivos",
    "specific_holidays"         => "Festivos específicos",
    "holiday_or_on_the"         => "O en el",
    "holiday_month_year_desc"   => "El año es opcional si el día festivo es recurrente. Seleccione un año solamente si el día de fiesta sucede en esta fecha en un año particular.",

    // SLA Plans
    "sla_plan"                  => "SLA Plan|SLA Planes",
    "specific_schedule"         => "Programaciones específicas",
    "calendar_hours_24"         => "Horas del calendario (24 Horas)",
    "resolution_time"           => "Tiempos de resolución",
    "resolution_time_desc"      => "Set times that a ticket must be responded to by and resolved by per priority. The time will be counted only during business hours based on the schedule(s) chosen, decimal values can be used.",
    "reply_within"              => "Reply within",
    "resolve_within"            => "Resolve within",
    "plan"                      => "Plan",
    "sla_condition"             => "SLA Conditions",
    "sla_condition_desc"        => "Define the ticket conditions for which new tickets are checked to see if they fall under this plan. If a new ticket fits multiple SLA plans, it will be selected on plan priority, which can be modified by going to the list of plans and reordering.",
    "escalation_rule"           => "Escalation Rules",
    "escalation_rule_desc"      => "Define actions that are carried out when a ticket under this SLA plan is close to or has become overdue. Please ensure rules are valid for the department the ticket is in or else they will be ignored.",
    "condition"                 => "Condition",
    "condition_group"           => "Condition Group",
    "all_groups"                => "ALL groups must be true",
    "any_group"                 => "ANY group can be true",
    "all_conditions"            => "ALL conditions in group must be true",
    "any_condition"             => "ANY condition in group can be true",
    "sla_plan_desc"             => "SLA Plans are processed in the order they appear. Drag the rows to reorder and adjust the priority of the SLA Plans.",

    // Reply options
    "reply_options"             => "Opciones de respuesta",
    "send_email_to_users"       => "Enviar email al usuario(s)",
    "send_email_to_operators"   => "Enviar email a los agentes",
    "back_to_grid"              => "Volver a la lista de tickets",
    "take"                      => "Poseer",
    "take_ownership"            => "Tomar posesión",
    "pause_duetime"             => "Pausar fecha de vencimiento",
    "add_to_canned_responses"   => "Añadir una respuesta predefinida",
    "visible_to_all_operators"  => "Hacer visible para todos los agentes",
    "set_status"                => "Definir estado",
    "add_selfservice_link"      => "Añadir link de autoservicio",
    "search_selfservice"        => "Buscar un artículo en el autoservicio",
    "add_canned_response"       => "Añadir respuesta predefinida",
    "search_canned"             => "Buscar en las respuestas predefinidas",

    "mark_resolved"             => "Marcar como resuelto",

    "ticket_signature"          => "Firma del ticket",

    "default_open_status"       => "Estado de apertura predeterminado",

    "default_resolve_status"    => "Estado de resuelto predeterminado",
    "default_resolve_status_desc"=> "Selecciona el estado predeterminado que se utiliza para los tickets que se han resuelto.",

    "waiting_response_time"     => "Esperando una respuesta por email",
    "waiting_response_time_desc"=> "El tiempo después del cual se envía un correo electrónico a los usuarios con tickets inactivos, preguntando si consideran que el ticket ha de ser resuelto. Establecer en 0 para desactivar este correo electrónico.",

    "close_inactive_tickets"    => "Cerrar tickets inactivos",
    "close_inactive_tickets_desc"=> "El tiempo después del cual los tickets inactivos se cierran automáticamente, introduce 0 para no cerrar automáticamente los tickets.",
    "close_inactive_status_desc"=> "Cierra automáticamente los boletos que se han quedado inactivos sin un seguimiento del usuario (definido por el número de días desde la última respuesta por un agente en la configuración general del ticket).",

    "ticket_reply_order"        => "Ticket Reply Order",
    "ticket_reply_order_desc"   => "Select the order in which ticket messages are shown, ascending where the latest message is last or descending where the latest message is first.",

    "ticket_notes_position"     => "Ticket Notes Position",
    "ticket_notes_position_desc"=> "Select where in the ticket view that ticket notes are shown.",
    "ticket_notes_top_messages" => "At top and in messages",
    "ticket_notes_top"          => "At top only",
    "ticket_notes_messages"     => "In messages only",

    "captcha_desc"              => "When the captcha should be shown to users opening new tickets.",
    "unregistered_only"         => "Unregistered users only",

    "allow_unauth_users"        => "Allow Unauthenticated Users",
    "allow_unauth_users_desc"   => "Allow users that are not logged in to view and reply to tickets. Disabling this will also remove the track ticket feature and users will need to be registered and login before being able to access tickets.",

    "default_department"        => "Default Department",
    "default_department_desc"   => "The default department set on all incoming tickets via this channel.",

    "show_related_articles"     => "Show Related Articles",
    "show_related_articles_desc" =>     "When the user is typing the subject, they may be shown related articles based on what they have entered. Requires the self-service module to be enabled and MySQL 5.6+.",

    // Email Channel Settings
    "default_priority"          => "Prioridad por defecto",
    "default_priority_desc"     => "The default priority set on all incoming tickets via this channel.",
    "verbose_email_log"         => "Verbose Email Log",

    "adjust_columns"            => "Ajustar columnas",
    "last_reply"                => "Última respuesta",
    "opened_at"                 => "Abierto el",

    "change_department"         => "Cambiar departamento",
    "change_status"             => "Cambiar estado",
    "no_statuses"               => "No se han encontrado estados. Click <a href=':route'>aquí</a> para crear uno",
    "no_priorities"             => "No se han encontrado prioridades Click <a href=':route'>aquí</a> para crear uno.",
    "no_templates"              => "No se han encontrado plantillas. Click <a href=':route'>aquí</a> para crear uno.",
    "no_tags"                   => "No se han encontrado tags. Click <a href=':route'>aquí</a> para crear uno.",
    "no_departments_found"      => "No se han encontrado departamentos. Click <a href=':route'>aquí</a> para crear uno.",
    "no_operators_found"        => "No se han encontrado agentes. Click <a href=':route'>aquí</a> para crear uno.",
    "change_priority"           => "Cambiar prioridad",
    "add_tag"                   => "Añadir tag",

    "unlock"                    => "Desbloquear",
    "merge"                     => "Fusionar",
    "merged"                    => "Fusionado",
    "unmerge"                   => "Desfusionar",
    "close_and_lock"            => "Cerrar & Bloquear",
    "delete_and_block"          => "Borrar & Bloquear",

    "block_warning"             => "El email del usuario será bloqueado para que no pueda abrir nuevos tickets.",

    "mass_reply"                => "Respuesta masiva",

    "delete_warning"            => "Una vez los tickets sean borrados, no van a poder ser recuperados.",

    "due_today"                 => "Vence hoy",
    "overdue"                   => "Vencido",
    "unassigned"                => "Sin asignar",

    "pause_duetime_desc"        => "If there is an active SLA plan on this ticket, pause the remaining due time until after the follow up date. The due time will only start again once a reply or note has been added to the ticket (including from the follow up).",
    "delete_follow_up"          => "Borrar seguimiento",

    "add_cc"                    => "Añadir CC",
    "reply_above_line"          => "Por favor responde encima de esta línea",

    "oauth2_token"              => "OAuth2 Token",
    "email_settings"            => "Configuración del email",
    "web_settings"              => "Ajustes web",
    "split_selected_replies"    => "Separar las respuestas seleccionadas",

    "track_ticket_not_found"    => "No se ha encontrado ningún ticket con el usuario y email seleccionado.",

    "channel_deactivated"       => "El canal del ticket ha sido desactivado, no se puede postear ninguna respuesta.",

    "type_in_tags"              => "Escribe logs tags",

    /*
     * 2.0.1
     */
    "allowed_files_desc"        => "A list of file extensions, separated by the pipe | character, that are permitted as attachments. For example: txt|png|jpg. To allow all attachments, input: ?.*",

    /*
     * 2.0.2
     */
    "no_operator_groups"        => "No se han encontrado grupos de agentes. Click <a href=':route'>aquí</a> para crear uno.",
    "no_user_groups"            => "No se han encontrado grupos de usuarios. Click <a href=':route'>aquí</a> para crear uno.",
    "opened_by"                 => "(Abierto por :name)",
    "remote_email_piping_desc"  => "Download the <a href='http://www.supportpal.com/manage/dl.php?type=d&id=8' target='_blank'>remote email piping script</a> and follow the <a href='http://docs.supportpal.com/display/DOCS/Remote+Email+Piping' target='_blank'>documentation</a> on configuring it on your mail server.",
    "not_assigned_department"   => "Sorry, you're not permitted to view tickets in the :department department. If you think this has been shown in error, please contact your administrator.",
    /*
     * 2.0.3
     */
    "department_consume_all"    => "By default, SupportPal has email alias support and will check the TO address on incoming email to see which department the ticket should be opened in, a ticket is not opened if a matching department email address cannot be found. Enabling this setting will mean all emails without a matching department email address are imported as tickets in this department.",
    "default_reply_options"     => "Default Reply Options",
    "default_reply_options_desc"=> "Select the default reply options to be set when opening or replying to a ticket. The ':reply_option' option will be ticked based on the ':department_option' department setting.",
    "associate_response_tag"    => "Associate canned response with a tag...",
    "canned_response_tags_desc" => "Add tags which may help finding a canned response when replying to a ticket.",
    "loading_tags"              => "Loading tags",
    "append_ip_address"         => "Append IP Address",
    "append_ip_address_desc"    => "Append the IP address of users to their messages when they are opening and replying to tickets from the frontend.",
    "unassign_operator"         => "Desasignar agente",
    "remove_tag"                => "Eliminar tag",
    "message_clipped"           => "[Mensaje Clipped]",
    "view_entire_message"       => "Ver mensaje entero",
    "no_custom_fields"          => "No hay campos personalizados. Click <a href=':route'>aquí</a> para crear uno.",
    "follow_up_active"          => "A <a class='view-followup' style='text-decoration: underline;'>follow up</a> is currently active on this ticket and will run shortly after <strong>:time</strong>.",
    "disable_user_email_replies" => "Disable User Email Replies",

    /*
     * 2.1.0
     */
    "default_ticket_filter"     => "Default Ticket Filter",
    "default_ticket_filter_desc" => "The ticket filter that is used by default when clicking the 'Manage Tickets' link. Can be set to 'None', the default option, which will show all unresolved tickets.",
    "recent_filters"            => "Recent Filters",
    "inactive_tickets"          => "Inactive Tickets",
    "default_open_status_desc"  => "Select the default status that should be automatically set when a user opens a new ticket or replies to a ticket without an operator response yet.",
    "default_reply_status"      => "Default Reply Status",
    "default_reply_status_desc" => "Select the default status that should be automatically set when a user replies to a ticket, only applies after an operator has replied to the ticket.",
    "drafting_reply"            => "<strong>:name</strong> started to draft a :type :time:",
    "ticket_reply_order_default" => "System default will use the value that is currently selected in the ticket general settings.",
    "select_a_parent"           => "Select a parent department...",
    "select_a_department"       => "Select a department...",
    "not_assigned_brand"        => "Sorry, you're not permitted to view tickets in this brand. If you think this has been shown in error, please contact your administrator.",
    "department_operator_desc"  => "You may also assign individual operators to the department. These operators will be in addition to any groups assigned above.",
    "department_group"          => "Department Groups",
    "department_group_desc"     => "You may assign whole operator groups to the department, recommended if your list of operators is large and/or changes frequently.",
    "ticket_other_brands"       => "Tickets in Other Brands",
    "add_for_department"        => "Add for department...",
    "record_order"              => "Drag the rows to change the order of records.",
    "ticket_token"              => "Ticket Token",
    "reply_all"                 => "Reply All",
    "reply_without_cc"          => "Reply (without CC)",
    "open_new_for_user"         => "Open New Ticket For User",
    "email_accounts"            => "Email Accounts",
    "add_another_email"         => "Add Another Email Address",
    "follow_up_date"            => "Fecha de vencimiento",
    "post_reply"                => "Enviar respuesta",
    "post_note"                 => "Enviar nota",
    "ticket_details"            => "Detalles del ticket",
    "organisation_tickets"      => "Tickets de la organización",
    "manage_tickets"            => "Gestionar tickets",
    "via_channel"               => "via :channel",
    "department_parent"         => "Departmento principal",
    "department_brands"         => "Marcas del departamento",
    "email_item"                => "Email :item",
    "from_name"                 => "Nombre remitente",
    "from_address"              => "Dirección remitente",

    /*
     * 2.1.1
     */
    "edited_message"            => ":user at :date",
    "prioritise_reply-to"       => "Prioritise Reply-To",
    "prioritise_reply-to_desc"  => "Toggle to prioritise the Reply-To header over the From header. If enabled, tickets opened via email will be opened on behalf of the Reply-To name and address.",
    "note_options"              => "Note Options",
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

);
