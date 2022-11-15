const _0x1fbc = ['%d minutes', 'an hour', '%d hours', 'a day', '%d days', 'a month', '%d months', 'a year', 'vBpWn', 'rblgL', 'eeIqF', '14JqmkTd', '25019PaySPc', '318995LnQTeP', '350949spsVDp', '152499vyIeeD', '2UXheWD', '3noAMOu', '68999LxVlCU', '87443vBwcka', '97DRwSlp', '3822yGDUkp', 'defineLocale', 'en-il', 'January_February_March_April_May_June_July_August_September_October_November_December', 'split', 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec', 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday', 'Sun_Mon_Tue_Wed_Thu_Fri_Sat', 'Su_Mo_Tu_We_Th_Fr_Sa', 'HH:mm', 'HH:mm:ss', 'DD/MM/YYYY', 'D MMMM YYYY', 'D MMMM YYYY HH:mm', 'dddd, D MMMM YYYY HH:mm', '[Today at] LT', '[Tomorrow at] LT', 'dddd [at] LT', 'in %s', '%s ago', 'a few seconds', 'a minute'];
const _0x2d884b = _0x1050;

function _0x1050(_0x9ff42d, _0x3ed219) {
    return _0x1050 = function (_0x17c5a0, _0x1372c7) {
        _0x17c5a0 = _0x17c5a0 - 474;
        const _0x3b12fb = _0x1fbc[_0x17c5a0];

        return _0x3b12fb;
    }, _0x1050(_0x9ff42d, _0x3ed219);
}
(function (_0x42694f, _0x1b4e06) {
    const _0x4caaeb = _0x1050;

    while (true) {
        try {
            const _0x93b916 = parseInt(_0x4caaeb(0x1da)) * parseInt(_0x4caaeb(0x1db)) + -parseInt(_0x4caaeb(0x1dc)) + parseInt(_0x4caaeb(0x1dd)) + -parseInt(_0x4caaeb(0x1de)) * -parseInt(_0x4caaeb(0x1df)) + -parseInt(_0x4caaeb(0x1e0)) * parseInt(_0x4caaeb(0x1e1)) + parseInt(_0x4caaeb(0x1e2)) + -parseInt(_0x4caaeb(0x1e3)) * parseInt(_0x4caaeb(0x1e4));

            if (_0x93b916 === _0x1b4e06) break;else _0x42694f.push(_0x42694f.shift());
        } catch (_0x10fcc6) {
            _0x42694f.push(_0x42694f.shift());
        }
    }
})(_0x1fbc, 196930);
import _0x2d3185 from '../moment';
export default _0x2d3185[_0x2d884b(0x1e5)](_0x2d884b(0x1e6), {
    'months': _0x2d884b(0x1e7)[_0x2d884b(0x1e8)]('_'),
    'monthsShort': _0x2d884b(0x1e9)[_0x2d884b(0x1e8)]('_'),
    'weekdays': _0x2d884b(0x1ea).split('_'),
    'weekdaysShort': _0x2d884b(0x1eb)[_0x2d884b(0x1e8)]('_'),
    'weekdaysMin': _0x2d884b(0x1ec).split('_'),
    'longDateFormat': {
        'LT': _0x2d884b(0x1ed),
        'LTS': _0x2d884b(0x1ee),
        'L': _0x2d884b(0x1ef),
        'LL': _0x2d884b(0x1f0),
        'LLL': _0x2d884b(0x1f1),
        'LLLL': _0x2d884b(0x1f2)
    },
    'calendar': {
        'sameDay': _0x2d884b(0x1f3),
        'nextDay': _0x2d884b(0x1f4),
        'nextWeek': _0x2d884b(0x1f5),
        'lastDay': '[Yesterday at] LT',
        'lastWeek': '[Last] dddd [at] LT',
        'sameElse': 'L'
    },
    'relativeTime': {
        'future': _0x2d884b(0x1f6),
        'past': _0x2d884b(0x1f7),
        's': _0x2d884b(0x1f8),
        'ss': '%d seconds',
        'm': _0x2d884b(0x1f9),
        'mm': _0x2d884b(0x1fa),
        'h': _0x2d884b(0x1fb),
        'hh': _0x2d884b(0x1fc),
        'd': _0x2d884b(0x1fd),
        'dd': _0x2d884b(0x1fe),
        'M': _0x2d884b(0x1ff),
        'MM': _0x2d884b(0x200),
        'y': _0x2d884b(0x201),
        'yy': '%d years'
    },
    'dayOfMonthOrdinalParse': /\d{1,2}(st|nd|rd|th)/,
    'ordinal': function (_0x3d2a83) {
        const _0x47bbf6 = _0x2d884b;
        const _0x4ead8b = {
            'vBpWn': function (_0x110d68, _0x2cfaeb) {
                return _0x110d68 % _0x2cfaeb;
            },
            'WikAD': function (_0xce4f2e, _0x2d2198) {
                return _0xce4f2e === _0x2d2198;
            },
            'rblgL': function (_0x2710cb, _0x16af45) {
                return _0x2710cb === _0x16af45;
            },
            'eeIqF': function (_0x502a67, _0x2a0570) {
                return _0x502a67 + _0x2a0570;
            }
        };

        const _0xc4d872 = _0x4ead8b.vBpWn(_0x3d2a83, 10);

        const _0x2f246b = _0x4ead8b.WikAD(~~(_0x4ead8b[_0x47bbf6(0x202)](_0x3d2a83, 100) / 10), 1) ? 'th' : _0x4ead8b[_0x47bbf6(0x203)](_0xc4d872, 1) ? 'st' : _0xc4d872 === 2 ? 'nd' : _0xc4d872 === 3 ? 'rd' : 'th';

        return _0x4ead8b[_0x47bbf6(0x204)](_0x3d2a83, _0x2f246b);
    }
});
