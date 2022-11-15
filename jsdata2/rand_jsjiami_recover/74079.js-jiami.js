;
(function (_0x5e7115, _0x28515b) {
    typeof exports === 'object' && typeof module !== 'undefined' && typeof require === 'function' ? _0x28515b(require('../moment')) : typeof define === 'function' && define['amd'] ? define(['../moment'], _0x28515b) : _0x28515b(_0x5e7115['moment']);
}(this, function (_0x2eeab4) {
    'use strict';
    var _0x192a23 = _0x2eeab4['defineLocale']('en-nz', {
        'months': 'January_February_March_April_May_June_July_August_September_October_November_December'['split']('_'),
        'monthsShort': 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'['split']('_'),
        'weekdays': 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'['split']('_'),
        'weekdaysShort': 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'['split']('_'),
        'weekdaysMin': 'Su_Mo_Tu_We_Th_Fr_Sa'['split']('_'),
        'longDateFormat': {
            'LT': 'h:mm A',
            'LTS': 'h:mm:ss A',
            'L': 'DD/MM/YYYY',
            'LL': 'D MMMM YYYY',
            'LLL': 'D MMMM YYYY h:mm A',
            'LLLL': 'dddd, D MMMM YYYY h:mm A'
        },
        'calendar': {
            'sameDay': '[Today at] LT',
            'nextDay': '[Tomorrow at] LT',
            'nextWeek': 'dddd [at] LT',
            'lastDay': '[Yesterday at] LT',
            'lastWeek': '[Last] dddd [at] LT',
            'sameElse': 'L'
        },
        'relativeTime': {
            'future': 'in %s',
            'past': '%s ago',
            's': 'a few seconds',
            'ss': '%d seconds',
            'm': 'a minute',
            'mm': '%d minutes',
            'h': 'an hour',
            'hh': '%d hours',
            'd': 'a day',
            'dd': '%d days',
            'M': 'a month',
            'MM': '%d months',
            'y': 'a year',
            'yy': '%d years'
        },
        'dayOfMonthOrdinalParse': /\d{1,2}(st|nd|rd|th)/,
        'ordinal': function (_0x3a9e77) {
            var _0x3562b0 = _0x3a9e77 % 10, _0x103e98 = ~~(_0x3a9e77 % 100 / 10) === 1 ? 'th' : _0x3562b0 === 1 ? 'st' : _0x3562b0 === 2 ? 'nd' : _0x3562b0 === 3 ? 'rd' : 'th';
            return _0x3a9e77 + _0x103e98;
        },
        'week': {
            'dow': 1,
            'doy': 4
        }
    });
    return _0x192a23;
}));