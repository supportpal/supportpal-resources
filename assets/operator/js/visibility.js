$(function () {
    var $select = $('select[name="groups[]"]').selectize({
        plugins: ['remove_button']
    })[0].selectize;

    // On page load, toggle the user groups box depending on whether public is set/not
    var $public = $('input[name="public"]');
    $('.usergroups').toggle($public.is(":checked"));

    // Toggle user groups, as we update the checkbox
    $public.on('change', function() {
        if (this.checked) {
            $('.usergroups').show();
            $('select[name="groups[]"]').prop("disabled", false);
            $select.enable();
        } else {
            $('.usergroups').hide();
            $('select[name="groups[]"]').prop("disabled", true);
            $select.clear();
            $select.disable();
        }
    });
});
