<?php

return array(

    "deleted"               => "¡Eliminado!",
    "success"               => "Completado",
    "error"                 => "Error",
    "in_progress"           => "En progreso",

    "save_order"            => "Intentando guardar el orden actualizado de los elementos",

    "show_all_results"      => "Mostrar todos los resultados &raquo;",

    "are_you_sure"          => "¿Estás seguro?",
    "yes_im_sure"           => "Sí, estoy seguro",

    "success_created"       => "Correctamente se ha creado el :item!",
    "error_created"         => "Hemos fallado al crear el nuevo :item.",

    "success_deleted"       => "Se ha borrado correctamente el :item!",
    "error_deleted"         => "Error al tratar de eliminar el :item.",

    "success_updated"       => "Correctamente se ha actualizado el :item!",
    "error_updated"         => "Error al tratar de actualizar el :item.",

    "error_notfound"        => "El :item con el siguiente ID no se ha encontrado.",
    "error_notfound_name"   => "El :item con el siguiente nombre no ha sido encontrado.",
    "report_notfound"       => "El informe con ese nombre y categoría no ha sido encontrado.",

    "success_ordering"      => "¡La orden ha sido actualizada correctamente!",
    "error_ordering"        => "Fallo al tratar de actualizar la orden.",

    "error_login"           => "Intento erróneo de login",
    "success_logout"        => "Logout completado correctamente.",

    "please_correct"        => "Por favor, corrige los siguientes errores y vuelve a probar.",

    "success_settings"      => "¡Los ajustes se han actualizado correctamente!",
    "error_settings"        => "Fallo al tratar de actualizar los ajustes.",

    "success_action"        => "¡Acción completada correctamente!",
    "error_action"          => "Fallo al tratar de realizar la acción.",

    "success_sending"       => "Se ha enviado correctamente el :item!",
    "error_sending"         => "Fallo al tratar de enviar el :item.",

    "error_embed_image"     => "Fallo al tratar de subir la imagen.",

    "unauthorised"          => "No autorizado",
    "not_authorised"        => "No estás autorizado para realizar esa acción.",
    "not_permitted"         => "No tienes autorización para ver esta página. Si crees que se trata de un error, por favor habla con el administrador del sistema de soporte.",

    "page_not_found"        => "Página no encontrada",
    "cant_find_page"        => "No hemos encontrado lo que estabas buscando. Lo sentimos.",

    "please_report"         => "Por favor, reporta al administrador si crees que esto es un error.",

    "return_to"             => "Volver a :page.",

    "session_expired"       => "Tu sesión ha expirado, por favor, conéctate de nuevo.",
    "session_refresh"       => "Tu sesión ha expirado, por favor, refresca la página y prueba de nuevo.",

    "general_error"         => "Un error ha ocurrido, vuelve a intentarlo por favor.",

    "mailer_error"          => "Ha habido un error tratando de enviar un correo con el siguiente asunto: ':subject'.",

    "no_results"            => "Sin resultados.",

    "assign_incomplete"     => "La acción no se pudo completar en su totalidad. :names no ha podido ser asignado a todos los tickets.",

    "maintenance_mode"      => "El modo de mantenimiento está activo. Actualmente el centro de soporte no es accesible para los usuarios, por favor, recuerda quitar el modo mantenimiento cuando termines.",

    "invalid_captcha"       => "El captcha introducido no es correcto, por favor vuelve a intentarlo",
    "blocked_as_spam"       => "Tu solicitud ha sido detectada como spam. Por favor contacta con los administradores si crees que se trata de un error.",
    "account_exists"        => "Ya existe una cuenta con ese email. Por favor, conéctate con ella o utiliza la función de resetear contraseña si no recuerdas los datos de acceso.",
    "error_loading_comments"=> "Ha habido un problema cargando los comentarios.",

    "invalid_auth"          => "Datos de conexión erróneos.",

    "forbidden"             => "Prohibido",

    "uncaught_exception"    => "<strong>¡Mecachis! Algo inesperado ha ocurrido.</strong><br />El error ha sido registrado. Por favor, notifica al administrador si el error persiste.",

    "not_logged_exception"  => "<strong>¡Mecachis! Algo no ha ido como debía.</strong><br />Por favor, notifica al administrador si el error persiste.",

    "too_many_ticket_reqs"  => "Demasiados tickets recibidos por :email. El máximo es :max en :decay minutos.",

    "error_close_open"      => "Error, por favor cierra y vuelve a abrir.",

    "not_operator"          => "Algo no ha ido bien. El agente seleccionado no es correcto, Asegúrate de pertenecer a un grupo de operadores y el grupo tiene un rol asociado.",

    // The error message is appended using JavaScript...
    "datatable_error"       => "<strong>¡Mecachis! Algo no ha ido bien.</strong><br />Ha ocurrido un error mientras cargábamos la tabla de datos. Por favor notifica al administrador si el error persiste.",

    "missing_extension"     => "Excepción desconocida",
    "php_ldap_missing"      => "The php-ldap extension is required to use LDAP authentication. Please enable it and refresh the page.",
    "php_imap_missing"      => "The php-imap extension is required to use Email Download. If you wish to use Email Download, please enable the extension and refresh the page.",

    /*
     * 2.0.3
     */
    "warn_delete"           => "Una vez este registro haya sido borrado, será irrecuperable. Borrar este registro, puede afectar a otras partes del sistema, si está siendo usado por ellas.",
    "only_ssl_connections"  => "Únicamente se permiten conexiones seguras (SSL) por favor, actualiza tu petición.",
    "queued_emails"         => "Genial - Los emails se han metido correctamente en la cola y en breve saldrán.",
    "error_loading_message" => "Un error ha ocurrido mientras cargábamos el mensaje, por favor, intentalo de nuevo",
    "please_refresh"        => "Por favor, refresca la página.",

    /*
     * 2.1.0
     */
    "unable_to_connect_db"  => "<strong>Servicio actualmente no disponible.</strong><br />Imposible conectar a la base de datos.",
    "category_required"     => "The article must belong to one or more categories.",
    "warning"               => "Advertencia",
    "note"                  => "Nota",
    "brand_invalid_dept"    => "La acción no ha podido ser completada en su totalidad. El departamento no pudo ser actualizado en algunos tickets debido a su marca.",
    "template_subject_req"  => "El asunto es necesario en las plantillas de email por defecto.",
    "template_contents_req" => "El contenido es necesario en las plantillas de email por defecto.",

    /*
     * 2.1.1
     */
    "upload_error"          => "Failed to upload attachment \":filename\", reason: \":reason\"",
    "upload_max_size"       => "File must be smaller than :size",
    "upload_wrong_type"     => "File type is not allowed",

    /*
     * 2.1.2
     */
    "field_required"        => "Field is required.",

);
