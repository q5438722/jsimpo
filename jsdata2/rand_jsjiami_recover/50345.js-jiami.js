;
(function (_0x1122db, _0x33bdb7) {
    typeof exports === 'object' && typeof module !== 'undefined' && typeof require === 'function' ? _0x33bdb7(require('../moment')) : typeof define === 'function' && define['amd'] ? define(['../moment'], _0x33bdb7) : _0x33bdb7(_0x1122db['moment']);
}(this, function (_0x5b7fc3) {
    'use strict';
    var _0x16e5b9 = _0x5b7fc3['defineLocale']('sv', {
        'months': 'januari_februari_mars_april_maj_juni_juli_augusti_september_oktober_november_december'['split']('_'),
        'monthsShort': 'jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec'['split']('_'),
        'weekdays': 'söndag_måndag_tisdag_onsdag_torsdag_fredag_lördag'['split']('_'),
        'weekdaysShort': 'sön_mån_tis_ons_tor_fre_lör'['split']('_'),
        'weekdaysMin': 'sö_må_ti_on_to_fr_lö'['split']('_'),
        'longDateFormat': {
            'LT': 'HH:mm',
            'LTS': 'HH:mm:ss',
            'L': 'YYYY-MM-DD',
            'LL': 'D MMMM YYYY',
            'LLL': 'D MMMM YYYY [kl.] HH:mm',
            'LLLL': 'dddd D MMMM YYYY [kl.] HH:mm',
            'lll': 'D MMM YYYY HH:mm',
            'llll': 'ddd D MMM YYYY HH:mm'
        },
        'calendar': {
            'sameDay': '[Idag] LT',
            'nextDay': '[Imorgon] LT',
            'lastDay': '[Igår] LT',
            'nextWeek': '[På] dddd LT',
            'lastWeek': '[I] dddd[s] LT',
            'sameElse': 'L'
        },
        'relativeTime': {
            'future': 'om %s',
            'past': 'för %s sedan',
            's': 'några sekunder',
            'ss': '%d sekunder',
            'm': 'en minut',
            'mm': '%d minuter',
            'h': 'en timme',
            'hh': '%d timmar',
            'd': 'en dag',
            'dd': '%d dagar',
            'M': 'en månad',
            'MM': '%d månader',
            'y': 'ett år',
            'yy': '%d år'
        },
        'dayOfMonthOrdinalParse': /\d{1,2}(\:e|\:a)/,
        'ordinal': function (_0x558a87) {
            var _0x1f29bd = _0x558a87 % 10, _0x842d6f = ~~(_0x558a87 % 100 / 10) === 1 ? ':e' : _0x1f29bd === 1 ? ':a' : _0x1f29bd === 2 ? ':a' : _0x1f29bd === 3 ? ':e' : ':e';
            return _0x558a87 + _0x842d6f;
        },
        'week': {
            'dow': 1,
            'doy': 4
        }
    });
    return _0x16e5b9;
}));