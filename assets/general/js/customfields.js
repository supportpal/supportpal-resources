$(document).ready(function() {
    customfieldRedactor();

    $('.redactor-editor[contenteditable="false"] a').on('click', function() {
        this.target = "_blank";
    });
});

function customfieldRedactor() {
    $.each($('.form-customfields textarea'), function () {
        // Don't show link tootlip if redactor is disabled
        var linkTooltip = true;
        if ($(this).prop('disabled')) {
            linkTooltip = false;
        }

        $(this).redactor({
            linebreaks: true,
            linkSize: 255,
            linkTooltip: linkTooltip,
            toolbar: false,
            allowedTags: ['a','br']
        });

        // Handle locked textareas
        if ($(this).prop('disabled')) {
            $(this).redactor('core.getEditor').attr('contenteditable', 'false');
        }
    });
}