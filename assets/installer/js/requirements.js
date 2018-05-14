$(document).ready(function() {
    $('button').click(function () {
        alert($("<div/>").html($(this).next('pre').html()).text());
    });
});