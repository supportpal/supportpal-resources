jQuery(function($){

    /**
     * Add a new e-mail address to the department form
     */
    $('.add-email').on('click', function() {
        addNewItem('.departmentEmail');
    });

    /**
     * Remove an e-mail address from the DOM
     */
    $('#emailAccounts').on('click', '.remove-button', function() {
        $(this).parents('.departmentEmail').remove();

        // If it was the last one, add an empty form back in
        if ($('.departmentEmail').length == 1) {
            addNewItem('.departmentEmail');
        }
    });

    $(".departmentEmail:first :input").prop('disabled', true);

    /**
     * Toggle sections if the department is a subdepartment or not
     */
    $('#parent').on('change', function() {
        if ($(this).val() != '0') {
            $('.parentToggle').hide();
        } else {
            $('.parentToggle').show();
        }
    });

    /**
     * Toggle sections depending on email support type
     */
    $('#emailAccounts').on('change', '.email-support', function() {
        if ($(this).val() == '0') {
            $(this).parents('.departmentEmail').find('.email-download, .email-piping, .remote-piping').hide();
        } else if ($(this).val() == '1') {
            $(this).parents('.departmentEmail').find('.email-download').show();
            $(this).parents('.departmentEmail').find('.email-piping, .remote-piping').hide();
        } else if ($(this).val() == '2') {
            $(this).parents('.departmentEmail').find('.email-download, .remote-piping').hide();
            $(this).parents('.departmentEmail').find('.email-piping').show();
        } else if ($(this).val() == '3') {
            $(this).parents('.departmentEmail').find('.email-download, .email-piping').hide();
            $(this).parents('.departmentEmail').find('.remote-piping').show();
        }
    });
    $('.email-support').each(function() {
        if ($(this).val() == '0') {
            $(this).parents('.departmentEmail').find('.email-download, .email-piping, .remote-piping').hide();
        } else if ($(this).val() == '1') {
            $(this).parents('.departmentEmail').find('.email-download').show();
            $(this).parents('.departmentEmail').find('.email-piping, .remote-piping').hide();
        } else if ($(this).val() == '2') {
            $(this).parents('.departmentEmail').find('.email-download, .remote-piping').hide();
            $(this).parents('.departmentEmail').find('.email-piping').show();
        } else if ($(this).val() == '3') {
            $(this).parents('.departmentEmail').find('.email-download, .email-piping').hide();
            $(this).parents('.departmentEmail').find('.remote-piping').show();
        }
    });

    // Validate email download details
    $('#emailAccounts').on('click', '.validate-email', function() {
        var data = $(this).parents('.departmentEmail').find(':input').map(function() {
            // Only if it has a name attribute
            if ($(this).is("[name]")) {
                var name = $(this).attr('name').slice(0, -1).split('[').pop();
                return { name: name, value: $(this).val() };
            }
        }).get();
        validateEmail(data, $(this).parent());
    });

});

function validateEmail(data, item) {
    item.find('.validate').hide();
    item.find('.validate.text-progress').show();

    // Post email data
    $.post(
        laroute.route('ticket.operator.department.validate'),
        data,
    function(response) {
        if (response.status == 'success') {
            item.find('.validate.text-progress').hide();
            item.find('.validate.text-success').show();
        } else {
            item.find('.validate.text-progress').hide();
            item.find('.error-message').text('').text(response.message);
            item.find('.validate.text-fail').show();
        }
    }, "json").fail(function() {
        item.find('.validate.text-progress').hide();
        item.find('.error-message').text('');
        item.find('.validate.text-fail').show();
    });
}