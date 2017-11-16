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

    "accepted"                  => ":attribute måste accepteras.",
    "active_url"                => ":attribute är inte en giltig URL.",
    "after"                     => ":attribute måste vara ett datum efter :date.",
    "alpha"                     => ":attribute får bara innehålla bokstäver.",
    "alpha_dash"                => ":attribute får bara innehålla bokstäver, siffror och streck.",
    "alpha_num"                 => ":attribute får bara innehålla bokstäver och siffror.",
    "array"                     => ":attribute måste vara en array.",
    "before"                    => ":attribute måste vara ett datum före :date.",
    "between"                   => array(
        "numeric" => ":attribute måste vara mellan :min och :max.",
        "file"    => ":attribute måste vara mellan :min och :max kilobyte.",
        "string"  => ":attribute måste vara mellan :min och :max tecken.",
        "array"   => ":attribute måste ha mellan :min och :max objekt.",
    ),
    "boolean"                   => ":attributefältet måste vara sant eller falskt.",
    "confirmed"                 => ":attributebekräftelsen stämmer inte.",
    "date"                      => ":attribute är inte ett giltigt datum.",
    "date_format"               => ":attribute matchar inte formatet :format.",
    "different"                 => ":attribute och :other måste vara olika.",
    "digits"                    => ":attribute måste vara :digits siffror.",
    "digits_between"            => ":attribute måste vara mellan :min och :max siffror.",
    "email"                     => ":attribute måste vara en giltig e-postadress.",
    "exists"                    => "valda :attribute är ogiltig.",
    "image"                     => ":attribute måste vara en bild.",
    "in"                        => "valda :attribute är ogiltig.",
    "integer"                   => ":attribute måste vara ett heltal.",
    "ip"                        => ":attribute måste vara en giltig IP-adress.",
    "max"                       => array(
        "numeric" => ":attribute får inte vara större än :max.",
        "file"    => ":attribute får inte vara större än :max kilobyte.",
        "string"  => ":attribute får inte vara större än :max tecken.",
        "array"   => ":attribute får inte ha fler än :max objekt.",
    ),
    "mimes"                     => ":attribute måste vara av filtypen: :values.",
    "min"                       => array(
        "numeric" => ":attribute måste åtminstone vara :min.",
        "file"    => ":attribute måste åtminstone vara :min kilobyte.",
        "string"  => ":attribute måste åtminstone vara :min tecken.",
        "array"   => ":attribute måste åtminstone ha :min objekt.",
    ),
    "not_in"                    => "Valda :attribute är ogiltig.",
    "numeric"                   => ":attribute måste vara en siffra.",
    "regex"                     => ":attributeformatet är ogiltig.",
    "required"                  => ":attributefältet krävs.",
    "required_if"               => ":attributefältet krävs när :other är :value.",
    "required_with"             => ":attributefältet krävs när :values finns.",
    "required_with_all"         => ":attributefältet krävs när :values finns.",
    "required_without"          => ":attributefältet krävs när :values inte finns.",
    "required_without_all"      => ":attributefältet krävs när inget av :values finns.",
    "same"                      => ":attribute och :other måste matcha.",
    "size"                      => array(
        "numeric" => ":attribute måste vara :size.",
        "file"    => ":attribute måste vara :size kilobyte.",
        "string"  => ":attribute måste vara :size tecken.",
        "array"   => ":attribute måste innehålla :size objekt.",
    ),
    "unique"                    => ":attribute har redan tagits.",
    "url"                       => ":attributeformatet är ogiltigt.",
    "timezone"                  => ":attribute måste vara en tillåten zon.",
    "template_exists"           => "det valda :attribute är ogiltig.",
    "is_valid_captcha"          => "den inskrivna captcha-koden är ogiltig, försök igen.",
    "user_password_length"      => "lösenord måste vara lika lång som eller längre än :user_password_length tecken.",
    "operator_password_length"  => "lösenord måste vara lika lång som eller längre än :operator_password_length tecken.",
    "json"                      => ":attribute måste vara giltig JSON.",
    "user_password_strength"    => ":attribute måste innehålla: :user_password_strength.",
    "operator_password_strength" => ":attribute måste innehålla: :operator_password_strength.",
    "twig_lint"                 => ":attribute måste vara giltig <a href='http://twig.sensiolabs.org/doc/templates.html'>twig-syntax</a>.",

    /*
     * 2.1.0
     */
    "in_array"                  => ":attributefältet existerar inte i :other.",
    "logo"                      => "Loggan måste peka mot en giltig bildfil (URL eller relativ filsökväg utifrån basmappen).",

    /*
     * 2.1.1
     */
    "old_password"              => ":attributefältet är ogiltigt.",

    
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
            "required" => "Ett ämne krävs för varje e-post."
        ),
        "data.*.contents" => array(
            "required"  => "Innehållsfältet krävs för varje e-post.",
            "twig_lint" => "Varje e-post måste vara giltig <a href='http://twig.sensiolabs.org/doc/templates.html'>twig-syntax</a>.",
        ),
        "roles.*" => array(
            "exists" => "Den valda rollen är ogiltig.",
        ),
        "category.*.type" => array(
            "required" => "En eller fler självbetjäningstyper måste väljas.",
        ),
        "category.*.categories" => array(
            'required' => "En eller flera kategorier krävs när en självbetjäningstyp har valts.",
            "exists"   => "En eller flera av de valda kategorierna är ogiltga.",
        ),
        "brand.*" => array(
            "exists" => "Det valda varumärket är ogiltigt.",
        ),
        "signature.Default.*.department" => array(
            "exists" => "Varje signatur must tillhöra en tillåten avdelning.",
        ),
        "signature.Default.*.contents" => array(
            "twig_lint" => "Varje signatur måste vara en giltig <a href='http://twig.sensiolabs.org/doc/templates.html'>twig-syntax</a>."
        ),
        "template.Default.*.language" => array(
            "exists" => "Varje mall måste tillhöra ett giltigt språk.",
        ),
        "template.Default.*.subject" => array(
            "min" => "Varje e-postmalls ämne måste vara längre än 1 tecken.",
            "max" => "Varje e-postmalls ämne måste vara kortare än 255 tecken.",
        ),
        "template.Default.*.contents" => array(
            "required_with" => "Varje e-postmall kräver innehåll när ett ämne finns.",
            "min" => "Varje e-postmall måste vara längre än 1 tecken.",
            "twig_lint" => "Varje e-postmall måste vara giltig <a href='http://twig.sensiolabs.org/doc/templates.html'>twig-syntax</a>."
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
