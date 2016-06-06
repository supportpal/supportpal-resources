(function() {
    Selectize.define( 'no_results', function( options ) {
        var self = this;

        options = $.extend({
            message: 'No results found.',

            html: function(data) {
                return (
                    '<div class="selectize-dropdown ' + data.classNames + ' dropdown-empty-message">' +
                    '<div class="selectize-dropdown-content">' + data.message + '</div>' +
                    '</div>'
                );
            }
        }, options );

        self.displayEmptyResultsMessage = function () {
            this.$empty_results_container.css('top', this.$control.outerHeight());
            this.$empty_results_container.css('width', this.$control.outerWidth());
            this.$empty_results_container.show();
        };

        self.refreshOptions = (function () {
            var original = self.refreshOptions;

            return function () {
                original.apply( self, arguments );
                this.hasOptions || this.lastQuery == "" ? this.$empty_results_container.hide() :
                    this.displayEmptyResultsMessage();
            }
        })();

        self.onKeyDown = (function () {
            var original = self.onKeyDown;

            return function ( e ) {
                original.apply( self, arguments );
                if ( e.keyCode === 27 ) { // Escape key was pressed
                    this.$empty_results_container.hide();
                }
            }
        })();

        self.onBlur = (function () {
            var original = self.onBlur;

            return function () {
                original.apply( self, arguments );
                this.$empty_results_container.hide();
            };
        })();

        self.setup = (function() {
            var original = self.setup;
            return function() {
                original.apply(self, arguments);
                self.$empty_results_container = $( options.html( $.extend( {
                    classNames: self.$input.attr( 'class' ) }, options ) ) );
                self.$empty_results_container.insertBefore( self.$control );
                self.$empty_results_container.hide();

                var _self = this;
                this.$control.on('click', function() {
                    _self.hasOptions ? _self.$empty_results_container.hide() : _self.displayEmptyResultsMessage();
                });
            };
        })();
    });
})();