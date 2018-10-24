(function() {
    Selectize.define('max_items', function(options) {
        var self = this;

        options = $.extend({
            max: 3,
            message: 'Show :count more...',
            html: function(data, count) {
                return (
                    '<a href="javascript:void(0)" class="selectize-show-more-items description"' +
                        'style="display:block; line-height: 18px; margin-bottom: 3px;">'
                        + data.message.replace(':count', count) + 
                    '</a>'
                );
            }
        }, options);

        self.setup = (function() {
            var original = self.setup;
            return function() {
                original.apply(self, arguments);
                
                // Too few items, don't bother doing anything.
                if (self.items.length <= options.max) {
                    return;
                }
                
                var count = self.items.length - options.max; 
                self.$show_more = $(options.html(options, count));
                self.$show_more.insertAfter( self.$control );
                self.$control.find('.item:gt(' + (options.max - 1) + ')').hide();
                
                self.$show_more.on('click', function () {
                    self.$control.find('.item').show(); 
                    $(this).hide();
                });
            };
        })();
    });
})();