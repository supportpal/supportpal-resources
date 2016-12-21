<?php

return [

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

    "accepted"                  => "The :attribute must be accepted.",
    "active_url"                => "The :attribute is not a valid URL.",
    "after"                     => "The :attribute must be a date after :date.",
    "alpha"                     => "The :attribute may only contain letters.",
    "alpha_dash"                => "The :attribute may only contain letters, numbers, and dashes.",
    "alpha_num"                 => "The :attribute may only contain letters and numbers.",
    "array"                     => "The :attribute must be an array.",
    "before"                    => "The :attribute must be a date before :date.",
    "between"                   => [
        "numeric" => "The :attribute must be between :min and :max.",
        "file"    => "The :attribute must be between :min and :max kilobytes.",
        "string"  => "The :attribute must be between :min and :max characters.",
        "array"   => "The :attribute must have between :min and :max items.",
    ],
    "boolean"                   => "The :attribute field must be true or false.",
    "confirmed"                 => "The :attribute confirmation does not match.",
    "date"                      => "The :attribute is not a valid date.",
    "date_format"               => "The :attribute does not match the format :format.",
    "different"                 => "The :attribute and :other must be different.",
    "digits"                    => "The :attribute must be :digits digits.",
    "digits_between"            => "The :attribute must be between :min and :max digits.",
    "email"                     => "The :attribute must be a valid email address.",
    "exists"                    => "The selected :attribute is invalid.",
    "image"                     => "The :attribute must be an image.",
    "in"                        => "The selected :attribute is invalid.",
    "integer"                   => "The :attribute must be an integer.",
    "ip"                        => "The :attribute must be a valid IP address.",
    "max"                       => [
        "numeric" => "The :attribute may not be greater than :max.",
        "file"    => "The :attribute may not be greater than :max kilobytes.",
        "string"  => "The :attribute may not be greater than :max characters.",
        "array"   => "The :attribute may not have more than :max items.",
    ],
    "mimes"                     => "The :attribute must be a file of type: :values.",
    "min"                       => [
        "numeric" => "The :attribute must be at least :min.",
        "file"    => "The :attribute must be at least :min kilobytes.",
        "string"  => "The :attribute must be at least :min characters.",
        "array"   => "The :attribute must have at least :min items.",
    ],
    "not_in"                    => "The selected :attribute is invalid.",
    "numeric"                   => "The :attribute must be a number.",
    "regex"                     => "The :attribute format is invalid.",
    "required"                  => "The :attribute field is required.",
    "required_if"               => "The :attribute field is required when :other is :value.",
    "required_with"             => "The :attribute field is required when :values is present.",
    "required_with_all"         => "The :attribute field is required when :values is present.",
    "required_without"          => "The :attribute field is required when :values is not present.",
    "required_without_all"      => "The :attribute field is required when none of :values are present.",
    "same"                      => "The :attribute and :other must match.",
    "size"                      => [
        "numeric" => "The :attribute must be :size.",
        "file"    => "The :attribute must be :size kilobytes.",
        "string"  => "The :attribute must be :size characters.",
        "array"   => "The :attribute must contain :size items.",
    ],
    "unique"                    => "The :attribute has already been taken.",
    "url"                       => "The :attribute format is invalid.",
    "timezone"                  => "The :attribute must be a valid zone.",
    "template_exists"           => "The selected :attribute is invalid.",
    "is_valid_captcha"          => "The captcha code entered was invalid or incorrect, please try again.",
    "user_password_length"      => "The password must be equal to or longer than :user_password_length characters.",
    "operator_password_length"  => "The password must be equal to or longer than :operator_password_length characters.",
    "json"                      => "The :attribute must be valid JSON.",
    "user_password_strength"    => "The :attribute must contain: :user_password_strength.",
    "operator_password_strength"=> "The :attribute must contain: :operator_password_strength.",
    "twig_lint"                 => "The :attribute must be valid <a href='http://twig.sensiolabs.org/doc/templates.html'>twig syntax</a>.",

    /*
     * 2.1.0
     */
    "in_array"                  => "The :attribute field does not exist in :other.",
    "logo"                      => "The logo must point to a valid image file (direct URL or relative file path to base directory).",

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

    "custom" => [
        "data.*.subject" => [
            "required" => "A subject is required for each provided e-mail."
        ],
        "data.*.contents" => [
            "required"  => "The content field is required for each provided e-mail.",
            "twig_lint" => "Each e-mail must be valid <a href='http://twig.sensiolabs.org/doc/templates.html'>twig syntax</a>.",
        ],
        "roles.*" => [
            "exists" => "The selected role is invalid.",
        ],
        "category.*.type" => [
            "required" => "One or more self-service types must be selected.",
        ],
        "category.*.categories" => [
            'required' => "One or more categories are required when a self-service type has been selected.",
            "exists"   => "One or more of the selected categories is invalid.",
        ],
        "brand.*" => [
            "exists" => "The selected brand is invalid.",
        ],
        "signature.Default.*.department" => [
            "exists" => "Each signature must belong to a valid department.",
        ],
        "signature.Default.*.contents" => [
            "twig_lint" => "Each signature must be valid <a href='http://twig.sensiolabs.org/doc/templates.html'>twig syntax</a>."
        ],
        "template.Default.*.language" => [
            "exists" => "Each template must belong to a valid language.",
        ],
        "template.Default.*.subject" => [
            "min" => "Each e-mail template subject must be greater than 1 character.",
            "max" => "Each e-mail template subject must be less than 255 characters.",
        ],
        "template.Default.*.contents" => [
            "required_with" => "Each e-mail template requires content when a subject is present.",
            "min" => "Each e-mail template must be greater than 1 character.",
            "twig_lint" => "Each e-mail template must be valid <a href='http://twig.sensiolabs.org/doc/templates.html'>twig syntax</a>."
        ],
    ],

    /*
	|--------------------------------------------------------------------------
	| Custom Validation Attributes
	|--------------------------------------------------------------------------
	|
	| The following language lines are used to swap attribute place-holders
	| with something more reader friendly such as E-Mail Address instead
	| of "email". This simply helps us make messages a little cleaner.
	|
	*/

    "attributes" => [ ],

];
