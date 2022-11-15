;
(function (_0x4483e6, _0x26284b) {
    var _0x57e308 = _0x2fbe;
    typeof exports === _0x57e308(269) && typeof module !== _0x57e308(270) && typeof require === _0x57e308(271) ? _0x26284b(require('../moment')) : typeof define === 'function' && define[_0x57e308(272)] ? define(['../moment'], _0x26284b) : _0x26284b(_0x4483e6[_0x57e308(273)]);
}(this, function (_0x4036fc) {
    'use strict';
    var _0x17ce41 = _0x2fbe;
    var _0x3013d8 = _0x4036fc[_0x17ce41(274)](_0x17ce41(275), {
        'months': _0x17ce41(276)[_0x17ce41(277)]('_'),
        'monthsShort': 'Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ogs_Sep_Okt_Nov_Dis'['split']('_'),
        'weekdays': _0x17ce41(278)['split']('_'),
        'weekdaysShort': _0x17ce41(279)[_0x17ce41(277)]('_'),
        'weekdaysMin': _0x17ce41(280)['split']('_'),
        'longDateFormat': {
            'LT': 'HH.mm',
            'LTS': 'HH.mm.ss',
            'L': _0x17ce41(281),
            'LL': _0x17ce41(282),
            'LLL': 'D MMMM YYYY [pukul] HH.mm',
            'LLLL': _0x17ce41(283)
        },
        'meridiemParse': /pagi|tengahari|petang|malam/,
        'meridiemHour': function (_0xda5302, _0x159aa6) {
            var _0x59faf4 = _0x17ce41;
            _0xda5302 === 12 && (_0xda5302 = 0);
            if (_0x159aa6 === _0x59faf4(284))
                return _0xda5302;
            else {
                if (_0x159aa6 === _0x59faf4(285))
                    return _0xda5302 >= 11 ? _0xda5302 : _0xda5302 + 12;
                else {
                    if (_0x159aa6 === _0x59faf4(286) || _0x159aa6 === 'malam')
                        return _0xda5302 + 12;
                }
            }
        },
        'meridiem': function (_0x59c38b, _0x1edbee, _0x15d40b) {
            var _0x48544c = _0x17ce41;
            if (_0x59c38b < 11)
                return _0x48544c(284);
            else {
                if (_0x59c38b < 15)
                    return _0x48544c(285);
                else
                    return _0x59c38b < 19 ? _0x48544c(286) : _0x48544c(287);
            }
        },
        'calendar': {
            'sameDay': _0x17ce41(288),
            'nextDay': _0x17ce41(289),
            'nextWeek': _0x17ce41(290),
            'lastDay': _0x17ce41(291),
            'lastWeek': _0x17ce41(292),
            'sameElse': 'L'
        },
        'relativeTime': {
            'future': 'dalam %s',
            'past': _0x17ce41(293),
            's': 'beberapa saat',
            'ss': _0x17ce41(294),
            'm': _0x17ce41(295),
            'mm': _0x17ce41(296),
            'h': 'sejam',
            'hh': _0x17ce41(297),
            'd': 'sehari',
            'dd': _0x17ce41(298),
            'M': _0x17ce41(299),
            'MM': '%d bulan',
            'y': 'setahun',
            'yy': _0x17ce41(300)
        },
        'week': {
            'dow': 1,
            'doy': 7
        }
    });
    return _0x3013d8;
}));