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

    "accepted"                  => "De :attribute moet worden geaccepteerd.",
    "active_url"                => "De :attribute is geen geldige URL.",
    "after"                     => "De :attribute moet een datum zijn na :date.",
    "alpha"                     => "De :attribute mag alleen letters bevatten.",
    "alpha_dash"                => "De :attribute mag alleen letters, nummers en hekjes (\#) bevatten.",
    "alpha_num"                 => "De :attribute mag alleen letters en nummers bevatten.",
    "array"                     => "De :attribute moet een array zijn.",
    "before"                    => "De :attribute moet een datum zijn voor :date.",
    "between"                   => array(
        "numeric" => "De :attribute moet een waarde zijn tussen :min en :max.",
        "file"    => "De :attribute moet tussen de :min en :max kilobytes zijn.",
        "string"  => "De :attribute moet tussen de :min en :max tekens lang zijn.",
        "array"   => "De :attribute moet tussen de :min en :max items bevatten.",
    ),
    "boolean"                   => "De :attribute veld moet waar of niet waar zijn.",
    "confirmed"                 => "De :attribute bevestiging matcht niet.",
    "date"                      => "De :attribute is geen geldige datum.",
    "date_format"               => "De :attribute matcht niet met het formaat :format.",
    "different"                 => "De :attribute en :other moeten verschillend zijn.",
    "digits"                    => "De :attribute moet :digits cijfers zijn.",
    "digits_between"            => "De :attribute moet tussen de :min en :max cijfers zijn.",
    "email"                     => "De :attribute moet een geldig emailadres zijn.",
    "exists"                    => "Het geselecteerde :attribute is ongeldig.",
    "image"                     => "De :attribute moet een afbeelding zijn.",
    "in"                        => "De geselecteerde :attribute is ongeldig.",
    "integer"                   => "De :attribute moet een geheel getal zijn.",
    "ip"                        => "De :attribute moet een geldig ipadres zijn.",
    "max"                       => array(
        "numeric" => "De :attribute mag niet groter zijn dan :max.",
        "file"    => "De :attribute mag niet groter zijn dan :max kilobytes.",
        "string"  => "De :attribute mag niet langer zijn dan :max tekens.",
        "array"   => "De :attribute mag niet groter zijn dan :max items.",
    ),
    "mimes"                     => "De :attribute moet van bestandtype :values zijn.",
    "min"                       => array(
        "numeric" => "De :attribute moet minimaal :min zijn.",
        "file"    => "De :attribute moet minstens :min kilobytes zijn.",
        "string"  => "De :attribute moest minstens :min tekens zijn.",
        "array"   => "De :attribute moet miminaal :min items zijn.",
    ),
    "not_in"                    => "De geselecteerde :attribute is ongeldig.",
    "numeric"                   => "De :attribute moet een nummer zijn.",
    "regex"                     => "De :attribute formaat is ongeldig.",
    "required"                  => "Het :attribute veld is required.",
    "required_if"               => "Het :attribute veld is verplicht wanneer :other :value is.",
    "required_with"             => "Het :attribute veld is verplicht wanneer :values is ingesteld.",
    "required_with_all"         => "Het :attribute veld is verplicht wanneer :values is ingesteld.",
    "required_without"          => "Het :attribute veld is verplicht wanneer :values niet is ingesteld.",
    "required_without_all"      => "Het :attribute veld is verplicht wanneer geen van :values is ingesteld.",
    "same"                      => "De :attribute en :other moeten hetzelfde zijn.",
    "size"                      => array(
        "numeric" => "De :attribute moet :size zijn.",
        "file"    => "De :attribute moet :size kilobytes zijn.",
        "string"  => "De :attribute moet :size tekens zijn.",
        "array"   => "De :attribute moet :size items bevatten.",
    ),
    "unique"                    => "De :attribute is reeds bezet.",
    "url"                       => "Het :attribute formaat is ongeldig.",
    "timezone"                  => "De :attribute moet een geldige zone zijn.",
    "template_exists"           => "De geselecteerde :attribute is ongeldig.",
    "is_valid_captcha"          => "De captcha code is niet correct ingevuld. Probeer opnieuw.",
    "user_password_length"      => "Het wachtwoord moet minstens :user_password_length tekens lang zijn.",
    "operator_password_length"  => "Het wachtwoord moet minstens:operator_password_length tekens lang zijn.",
    "json"                      => "De :attribute moet een geldige JSON zijn.",
    "user_password_strength"    => "De :attribute moet :user_password_strength zijn.",
    "operator_password_strength" => "De :attribute moet contain: :operator_password_strength zijn.",
    "twig_lint"                 => "De :attribute moet geldige twig syntax zijn, zie http://twig.sensiolabs.org/doc/templates.html",

    /*
     * 2.1.0
     */
    "in_array"                  => "De :attribute veld bestaat niet in :other.",
    "logo"                      => "Het logo moet wijzen naar een geldige afbeelding (direct URL of relatief pad vanaf base directory).",

    /*
     * 2.1.1
     */
    "old_password"              => "Het :attribute veld is ongeldig.",
    
    /*
     * 2.2.0
     */
    "required_with_translation" => "De :translation vertaling voor het :attribute veld is verplicht wanneer :values is ingesteld.",
    "max_translation"           => "De :translation vertaling voor het :attribute veld mag niet langer dan :max tekens zijn.",
    "unique_translation"        => "De :translation vertaling voor het :attribute veld is reeds ingebruik.",

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
            "required" => "Een onderwerp is verplicht voor elke email."
        ),
        "data.*.contents" => array(
            "required"  => "Berichtinhoud is verplicht voor elke email.",
            "twig_lint" => "Elke email moet een geldige twig syntax hebben, zie http://twig.sensiolabs.org/doc/templates.html",
        ),
        "roles.*" => array(
            "exists" => "De geselecteerde rol is ongeldig.",
        ),
        "category.*.type" => array(
            "required" => "Een of meer self-service types moeten zijn geselecteerd.",
        ),
        "category.*.categories" => array(
            'required' => "Een of meerdere categorieen zijn verplicht wanneer een self-service type is geselecteerd.",
            "exists"   => "Een of meerdere geselecteerde categorieen is ongeldig.",
        ),
        "brand.*" => array(
            "exists" => "Het geselecteerde merk is ongeldig.",
        ),
        "signature.Default.*.department" => array(
            "exists" => "Elke ondertekening moet bij een geldige afdeling horen.",
        ),
        "signature.Default.*.contents" => array(
            "twig_lint" => "Elke ondertekening moet een geldige twig syntax hebben, zie http://twig.sensiolabs.org/doc/templates.html"
        ),
        "template.Default.*.language" => array(
            "exists" => "Elke template moet bij een geldige taal horen.",
        ),
        "template.Default.*.subject" => array(
            "min" => "Elk emailtemplateonderwerp moet langer zijn dan 1 teken.",
            "max" => "Elk emailtemplateonderwerp moet maximaal 255 tekens zijn.",
        ),
        "template.Default.*.contents" => array(
            "required_with" => "Elke emailtemplate vereist content wanneer een onderwerp is ingesteld.",
            "min" => "Elke emailtemplate moet langer zijn dan 1 teken.",
            "twig_lint" => "Elk emailtemplate moet een geldige twig syntax hebben, zie http://twig.sensiolabs.org/doc/templates.html"
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
