// Shorten text and show more on clicking link
$('.text-shorten').each(function () {
    // Length to show in preview
    var $limit = 50;

    // Only if it has over 50 characters
    if ($(this).text().length > $limit) {
        // Replace contents with preview, ellipsis and show more link, and then the full text hidden.
        $(this).html('<span class="text-preview">'
                + $(this).text().substr(0, $limit) + '... '
                + '<a class="description">' + Lang.get('general.show_more') + '</a>'
            + '</span>'
            + '<span class="hide">' + $(this).html() + '</span>');

        // Handle clicking anywhere on the area to show the full text if not already showing
        $(this).on('click', function () {
            if ($(this).children('.hide').length) {
                $(this).children('.text-preview').remove();
                $(this).children('.hide').removeClass('hide');
            }
        });
    }
});