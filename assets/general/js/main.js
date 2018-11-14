// Timeago
timeago.register('supportpal', function(number, index, total_sec) {
    // Convert weeks to days.
    if ([8,9].indexOf(index) !== -1) {
        total_sec = parseInt(total_sec / 86400);
    }
    
    return [
        [Lang.get('general.just_now'), Lang.get('general.shortly')],
        [Lang.choice('general.minutes_ago', 1, {'number': 1}), Lang.choice('general.in_minutes', 1, {'number': 1})],
        [Lang.choice('general.minutes_ago', 1, {'number': 1}), Lang.choice('general.in_minutes', 1, {'number': 1})],
        [Lang.choice('general.minutes_ago', 2, {'number': '%s'}), Lang.choice('general.in_minutes', 2, {'number': '%s'})],
        [Lang.choice('general.hours_ago', 1, {'number': 1}), Lang.choice('general.in_hours', 1, {'number': 1})],
        [Lang.choice('general.hours_ago', 2, {'number': '%s'}), Lang.choice('general.in_hours', 2, {'number': '%s'})],
        [Lang.choice('general.days_ago', 1, {'number': 1}), Lang.choice('general.in_days', 1, {'number': 1})],
        [Lang.choice('general.days_ago', 2, {'number': '%s'}), Lang.choice('general.in_days', 2, {'number': '%s'})],
        [Lang.choice('general.days_ago', 2, {'number': total_sec}), Lang.choice('general.in_days', 2, {'number': total_sec})],
        [Lang.choice('general.days_ago', 2, {'number': total_sec}), Lang.choice('general.in_days', 2, {'number': total_sec})],
        [Lang.choice('general.months_ago', 1, {'number': 1}), Lang.choice('general.in_months', 1, {'number': 1})],
        [Lang.choice('general.months_ago', 2, {'number': '%s'}), Lang.choice('general.in_months', 2, {'number': '%s'})],
        [Lang.choice('general.years_ago', 1, {'number': 1}), Lang.choice('general.in_years', 1, {'number': 1})],
        [Lang.choice('general.years_ago', 2, {'number': '%s'}), Lang.choice('general.in_years', 2, {'number': '%s'})]
    ][index];
});

var timeAgo = new timeago();
timeAgo.setLocale("supportpal");

// Tooltip
$(document).tooltip({
    position: {
        my: "center bottom-12",
        at: "center top",
        using: function(position, feedback) {
            $(this).css(position);
            $("<div>")
                .addClass("arrow")
                .addClass(feedback.vertical)
                .addClass(feedback.horizontal)
                .appendTo(this);
        }
    }
});

// Close alerts
$(document).on('click', '.box .fa-times', function () {
    $(this).parent().slideToggle(300);
});