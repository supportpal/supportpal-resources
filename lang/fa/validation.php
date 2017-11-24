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

    "accepted"                  => "از :ویژگی مورد پذیرش قرار گرفت.",
    "active_url"                => "از: این ویژگی یک آدرس معتبر نمی باشد..",
    "after"                     => "The :attribute must be a date after :date.",
    "alpha"                     => "از: ویژگی ممکن است تنها شامل حروف باشد.",
    "alpha_dash"                => "از: صفت تنها می تواند شامل حروف، اعداد، و خط تیره باشد.",
    "alpha_num"                 => "از: صفت تنها می تواند شامل حروف و اعداد باشد.",
    "array"                     => "از: ویژگی باید یک آرایه باشد.",
    "before"                    => "The :attribute must be a date before :date.",
    "between"                   => array(
        "numeric" => "The :attribute must be between :min and :max.",
        "file"    => "The :attribute must be between :min and :max kilobytes.",
        "string"  => "The :attribute must be between :min and :max characters.",
        "array"   => "The :attribute must have between :min and :max items.",
    ),
    "boolean"                   => "از: ویژگی باید درست یا غلط باشد..",
    "confirmed"                 => "از: تایید ویژگی مطابقت ندارد.",
    "date"                      => "از: صفت یک تاریخ معتبر نمی باشد.",
    "date_format"               => "The :attribute does not match the format :format.",
    "different"                 => "از: ویژگی و: دیگر باید متفاوت باشد.",
    "digits"                    => "از: ویژگی باید: رقم رقم.",
    "digits_between"            => "از: ویژگی باید درمیان:کوچکترین:و بزرگترین باشد.",
    "email"                     => "از: ویژگی باید یک آدرس ایمیل معتبر باشد.",
    "exists"                    => "انتخاب: ویژگی نامعتبر است.",
    "image"                     => "از: ویژگی باید یک تصویر باشد.",
    "in"                        => "انتخاب: ویژگی نامعتبر است.",
    "integer"                   => "از: ویژگی باید عدد صحیح باشد.",
    "ip"                        => "از: ویژگی باید یک آدرس IP معتبر باشد.",
    "max"                       => array(
        "numeric" => "از: ویژگی ممکن است بیشتر از: حداکثر.",
        "file"    => "از: ویژگی ممکن است بیشتر از: کیلوبایت حداکثر.",
        "string"  => "از: ویژگی ممکن است بیشتر از: حداکثر کاراکتر.",
        "array"   => "The :attribute may not have more than :max items.",
    ),
    "mimes"                     => "از: ویژگی باید یک فایل از این نوع باشد:: ارزش.",
    "min"                       => array(
        "numeric" => "از: ویژگی باید حداقل: دقیقه.",
        "file"    => "از: ویژگی باید حداقل: کیلوبایت دقیقه.",
        "string"  => "The :attribute must be at least :min characters.",
        "array"   => "The :attribute must have at least :min items.",
    ),
    "not_in"                    => "انتخاب: ویژگی نامعتبر است.",
    "numeric"                   => "از: ویژگی باید یک عدد باشد.",
    "regex"                     => "از: فرمت ویژگی نامعتبر است.",
    "required"                  => "از: فیلد ویژگی نیاز است.",
    "required_if"               => "The :attribute field is required when :other is :value.",
    "required_with"             => "The :attribute field is required when :values is present.",
    "required_with_all"         => "The :attribute field is required when :values is present.",
    "required_without"          => "The :attribute field is required when :values is not present.",
    "required_without_all"      => "The :attribute field is required when none of :values are present.",
    "same"                      => "The :attribute and :other must match.",
    "size"                      => array(
        "numeric" => "از: ویژگی باید: اندازه.",
        "file"    => "از: ویژگی باید: کیلوبایت اندازه.",
        "string"  => "از: ویژگی باید: اندازه کارکتر.",
        "array"   => "از: ویژگی باید شامل: موارد اندازه.",
    ),
    "unique"                    => "از: صفت حال حاضر گرفته شده.",
    "url"                       => "از: فرمت ویژگی نامعتبر است.",
    "timezone"                  => "از: ویژگی باید یک منطقه معتبر باشد.",
    "template_exists"           => "انتخاب: ویژگی نامعتبر است.",
    "is_valid_captcha"          => "کد تصویر امنیتی وارد شده نامعتبر یا نادرست بود، لطفا مجددا تلاش کنید.",
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
     * 2.1.1
     */
    "old_password"              => "The :attribute field is invalid.",

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
            "required" => "A subject is required for each provided email."
        ),
        "data.*.contents" => array(
            "required"  => "The content field is required for each provided email.",
            "twig_lint" => "Each email must be valid <a href='http://twig.sensiolabs.org/doc/templates.html'>twig syntax</a>.",
        ),
        "roles.*" => array(
            "exists" => "The selected role is invalid.",
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
            "twig_lint" => "Each signature must be valid <a href='http://twig.sensiolabs.org/doc/templates.html'>twig syntax</a>."
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
            "twig_lint" => "Each email template must be valid <a href='http://twig.sensiolabs.org/doc/templates.html'>twig syntax</a>."
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
