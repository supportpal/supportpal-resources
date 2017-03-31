(function() {
    /**
     * The backspace key will not delete the selected item.
     */
    Selectize.define('disableDelete', function (options) {
        this.deleteSelection = function () {
            //
        };
    });
})();