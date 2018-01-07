<?php

return array(

    "customfield"               => "Skräddarsytt fält|Skräddarsydda fält",

    // Options
    "boolean"                   => "Booleskt",
    "checkbox"                  => "Kryssruta",
    "checklist"                 => "Krysslista",
    "date"                      => "Datum",
    "multiple"                  => "Multipla inställningar",
    "options"                   => "Inställningar",
    "password"                  => "Lösenord",
    "radio"                     => "Radioknappar",
    "rating"                    => "Betygsättning (1 till 5)",
    "text"                      => "Text",
    "textarea"                  => "Textområde",

    "required_desc"             => "Om det skräddarsydda fältet måste fyllas i.",
    "public"                    => "Publik",
    "public_desc"               => "Om det skräddarsydda fältet visas publikt på framsidan eller är enbart för personal.",
    "encrypted"                 => "Krypterad",
    "purge_desc"                => "Om det skräddarsydda fältet automatiskt ska rensas när ärendet är avslutat.",
    "locked"                    => "Låst",
    "locked_desc"               => "Om det skräddarsydda fältets värde inte ska kunna ändras i efterhand.",
    "department_desc"           => "Välj vilka avdelningar fältet är tillgängligt för.",

    /*
     * 2.0.2
     */
    "please_select"             => "Välj...",

    /*
     * 2.0.3
     */
    "description_desc"          => "Hjälptexten som hamnar under det skräddarsydda fältet och kan lämnas blankt.",

    /*
     * 2.1.0
     */
    "brand_desc"                => "Välj vilka varumärken fältet är tillgängligt för.",

    /*
     * 2.3.0
     */
    "option_warning"            => "Vid radering av val kommer alla sparade fält med detta val att rensas.",
    "regex_basic_desc"          => "Valfri regulärt yttryck för att validera värdet i fältet.",
    "regex_desc"                => "Det regulära uttrycket är skiftesokänsligt, har ej behov av avskiljare och / teckan kommer att bli hanterade med automatik. Exempel: ^[a-z0-9_-]{6,18}$ kommer att tvinga värdet till 6-18 tecken långt och innehålla a till z samt siffror, _ och punkt.",
    "regex_error_message"       => "Felmeddelande vid validering",
    "regex_error_message_desc"  => "Valfritt felmeddelande som visas när värdet inte matchar det regulära uttrycket, saknas detta kommer ett standard meddelelande att visas. Meddelandet kommer att visa excakt som det är inskrivet, så vi rekomenderar att även inkludera namnet på fältet så att det blir enklare att förstå meddelandet",
    "custom_field_values"       => "Eget fält värden",
    "depends_on"                => "Beroenda av",
    "depends_on_desc"           => "Om vald kommer etta fält endast att visas om användaren väljer det valda fältet. Varumärket och avdelningen kommer att ärvas från fältet det beror på.",
    "select_option"             => "Välj ett val...",
    "purge"                     => "Rensa",
    "encrypted_desc"            => "Värdet på fältet innehåller känsliga uppgifter och ska krypteras innan det sparas. Detta kan inte ändras efter att fältet har skapats.",

);
