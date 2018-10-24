function defferedDatatables(datatablesLoaded) {
    $.each(datatablesLoaded, function (key, value) {
        // Load ticket log table on clicking tab for first time
        $(document).on('click', '.tabs #' + key, function () {
            if (!datatablesLoaded[key]) {
                // Load table
                $('#tab' + key + ' .dataTable').dataTable().api().ajax.reload(function () {
                    datatablesLoaded[key] = true;
                });
            }
        });
    });
}