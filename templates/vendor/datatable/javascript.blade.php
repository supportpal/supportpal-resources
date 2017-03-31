<script type="text/javascript">
    jQuery(document).ready(function(){
        // dynamic table
        oTable = jQuery('#{!! $id !!}').dataTable(
                {!! $options !!}
        );

        // Refresh time ago.
        if (typeof timeAgo !== 'undefined') {
            $('#{!! $id !!}').on('draw.dt', function () {
                timeAgo.render($('time.timeago'));
            });
        }

        /**
         * Set a global error callback for DataTables. Here we want to gracefully handle
         * any generated errors. These typically occur when the JSON is invalid.
         *
         * See: https://datatables.net/reference/event/error
         *
         * @param e         jQuery event object
         * @param settings  DataTables settings object (https://datatables.net/reference/type/DataTables.Settings)
         * @param techNote  Tech note error number - use http://datatables.net/tn/{techNote} to look up a description
         * @param message   Description of error
         */
        $.fn.dataTable.ext.errMode = function( e, settings, techNote, message )
        {
            // Show error message
            $('#js-message-box').removeClass('success').addClass('fail')
                    .html('{!! Lang::get('messages.datatable_error')  !!}')
                    .show().delay(10000).fadeOut();

            // Remove the "Processing..." message
            $('.dataTables_processing').hide();
        };

        // Update row count for user when changing
        $(document.body).on('change', 'select[name={!! $id !!}_length]', function() {
            $.post(laroute.route('core.set.datatableRows'), {
                count: $(this).val()
            });
        });
    });
</script>
