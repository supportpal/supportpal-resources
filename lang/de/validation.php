<?php

return array(

    /*
    |--------------------------------------------------------------------------
    | Validation Language Lines
    |--------------------------------------------------------------------------
    |
    | The following language lines contain the default error messages used by
    | the validator class. Some of these rules have multiple versions such
    | as the size rules. Feel free to tweak each of these messages here.
    |
    */

    "accepted"                  => ":attribute muss akzeptiert werden.",
    "active_url"                => ":attribute ist keine gültige URL.",
    "after"                     => ":attribute muss ein Datum nach :date sein.",
    "alpha"                     => ":attribute darf nur Buchstaben enthalten.",
    "alpha_dash"                => ":attribute darf nur Buchstaben, Zahlen und Bindestriche enthalten.",
    "alpha_num"                 => ":attribute darf nur Buchstaben und Zahlen enthalten.",
    "array"                     => ":attribute muss ein Array sein.",
    "before"                    => ":attribute muss ein Datum vor :date sein.",
    "between"                   => array(
        "numeric" => ":attribute muss zwischen :min und :max liegen.",
        "file"    => ":attribute muss zwischen :min und :max kilobytes liegen.",
        "string"  => ":attribute muss zwischen :min und :max characters liegen.",
        "array"   => ":attribute muss zwischen :min und :max Elementen liegen.",
    ),
    "boolean"                   => ":attribute muss \"true\" oder \"false\" sein.",
    "confirmed"                 => ":attribute confirmation does not match.",
    "date"                      => ":attribute ist kein gültiges Datum.",
    "date_format"               => ":attribute stimmt nicht mit dem Format :format überein. ",
    "different"                 => ":attribute und :other müssen unterschiedlich sein.",
    "digits"                    => ":attribute muss :digits Zeichen enthalten.",
    "digits_between"            => ":attribute muss zwischen :min und :max Zeichen liegen.",
    "email"                     => ":attribute muss eine gültige E-Mail-Adresse enthalten.",
    "exists"                    => "Das ausgewählte :attribute ist ungültig.",
    "image"                     => ":attribute muss ein Bild sein.",
    "in"                        => "Das ausgewählte :attribute ist ungültig.",
    "integer"                   => ":attribute muss ein \"integer\" sein.",
    "ip"                        => ":attribute must eine gültige IP sein.",
    "max"                       => array(
        "numeric" => ":attribute darf nicht größer sein als :max.",
        "file"    => ":attribute darf nicht größer sein als :max kilobytes.",
        "string"  => ":attribute darf nicht größer sein als :max characters.",
        "array"   => ":attribute darf nicht mehr als :max Elemente enthalten.",
    ),
    "mimes"                     => ":attribute muss eine Datei folgendes Typs sein: :values.",
    "min"                       => array(
        "numeric" => ":attribute muss mindestens :min sein.",
        "file"    => ":attribute muss mindestens :min kilobytes groß sein.",
        "string"  => ":attribute muss mindestens :min Zeichen enthalten.",
        "array"   => ":attribute muss mindestens :min Elemente enthalten.",
    ),
    "not_in"                    => ":attribute ist ungültig.",
    "numeric"                   => ":attribute muss eine Zahl sein.",
    "regex"                     => "Das Format von :attribute ist ungültig.",
    "required"                  => ":attribute ist ein Pflichtfeld.",
    "required_if"               => ":attribute ist ein Pflichtfeld wenn :other :value ist.",
    "required_with"             => ":attribute ist ein Pflichtfeld wenn :values vorhanden ist.",
    "required_with_all"         => ":attribute ist ein Pflichtfeld :values vorhanden ist.",
    "required_without"          => ":attribute ist ein Pflichtfeld :values nicht vorhanden ist.",
    "required_without_all"      => ":attribute ist ein Pflichtfeld wenn keines von :values vorhanden ist.",
    "same"                      => ":attribute and :other must match.",
    "size"                      => array(
        "numeric" => ":attribute muss :size groß sein.",
        "file"    => ":attribute muss :size kilobytes groß sein.",
        "string"  => ":attribute must :size Zeichen lang sein.",
        "array"   => ":attribute must :size Elemente.",
    ),
    "unique"                    => ":attribute wurde schon benutzt.",
    "url"                       => ":attribute hast ein ungültiges Format.",
    "timezone"                  => ":attribute muss eine gültige Zone sein.",
    "template_exists"           => ":attribute ist kein gültiges Template.",
    "is_valid_captcha"          => "Der eingegebene Captcha ist ungültig oder Sie haben sich vertippt. Bitte probieren Sie es noch einmal.",
    "user_password_length"      => "Das Passwort muss mindestens :user_password_length Zeichen enthalten.",
    "operator_password_length"  => "Das Passwort muss mindestens :operator_password_length Zeichen enthalten.",
    "json"                      => ":attribute muss gültiges JSON sein.",
    "user_password_strength"    => ":attribute must contain: :user_password_strength.",
    "operator_password_strength"=> ":attribute must contain: :operator_password_strength.",
    "twig_lint"                 => "The :attribute must be valid twig syntax, please check http://twig.sensiolabs.org/doc/templates.html",

    /*
     * 2.1.0
     */
    "in_array"                  => "The :attribute field does not exist in :other.",
    "logo"                      => "The logo must point to a valid image file (direct URL or relative file path to base directory).",

    /*
     * 2.1.1
     */
    "old_password"              => "The :attribute field is invalid.",

    /*
     * 2.2.0
     */
    "required_with_translation" => "The :translation translation for the :attribute field is required when :values is present.",
    "max_translation"           => "The :translation translation for the :attribute field may not be greater than :max characters.",
    "unique_translation"        => "The :translation translation for the :attribute field has already been taken.",

    /*
    |--------------------------------------------------------------------------
    | Custom Validation Language Lines
    |--------------------------------------------------------------------------
    |
    | Here you may specify custom validation messages for attributes using the
    | convention "attribute.rule" to name the lines. This makes it quick to
    | specify a specific custom language line for a given attribute rule.
    |
    */

    "custom" => array(
        "data.*.subject" => array(
            "required" => "Ein Betreff muss bei jeder angegebene E-Mail vorhanden sein."
        ),
        "data.*.contents" => array(
            "required"  => "Ein Inhalt muss bei jeder angegebene E-Mail vorhanden sein.",
            "twig_lint" => "Each email must be valid twig syntax, please check http://twig.sensiolabs.org/doc/templates.html",
        ),
        "roles.*" => array(
            "exists" => "Die ausgewählte Rolle ist ungültig.",
        ),
        "category.*.type" => array(
            "required" => "One or more self-service types must be selected.",
        ),
        "category.*.categories" => array(
            'required' => "One or more categories are required when a self-service type has been selected.",
            "exists"   => "One or more of the selected categories is invalid.",
        ),
        "brand.*" => array(
            "exists" => "The selected brand is invalid.",
        ),
        "signature.Default.*.department" => array(
            "exists" => "Each signature must belong to a valid department.",
        ),
        "signature.Default.*.contents" => array(
            "twig_lint" => "Each signature must be valid twig syntax, please check http://twig.sensiolabs.org/doc/templates.html"
        ),
        "template.Default.*.language" => array(
            "exists" => "Each template must belong to a valid language.",
        ),
        "template.Default.*.subject" => array(
            "min" => "Each email template subject must be greater than 1 character.",
            "max" => "Each email template subject must be less than 255 characters.",
        ),
        "template.Default.*.contents" => array(
            "required_with" => "Each email template requires content when a subject is present.",
            "min" => "Each email template must be greater than 1 character.",
            "twig_lint" => "Each email template must be valid twig syntax, please check http://twig.sensiolabs.org/doc/templates.html"
        ),
    ),

    /*
    |--------------------------------------------------------------------------
    | Custom Validation Attributes
    |--------------------------------------------------------------------------
    |
    | The following language lines are used to swap attribute place-holders
    | with something more reader friendly such as Email Address instead
    | of "email". This simply helps us make messages a little cleaner.
    |
    */

    "attributes" => array(),

);
