var _0x53db = [
    'Januari_Februari_Mac_April_Mei_Jun_Julai_Ogos_September_Oktober_November_Disember',
    'split',
    'Ahad_Isnin_Selasa_Rabu_Khamis_Jumaat_Sabtu',
    'Ahd_Isn_Sel_Rab_Kha_Jum_Sab',
    'Ah_Is_Sl_Rb_Km_Jm_Sb',
    'DD/MM/YYYY',
    'D\x20MMMM\x20YYYY',
    'dddd,\x20D\x20MMMM\x20YYYY\x20[pukul]\x20HH.mm',
    'pagi',
    'tengahari',
    'petang',
    'malam',
    '[Hari\x20ini\x20pukul]\x20LT',
    '[Esok\x20pukul]\x20LT',
    'dddd\x20[pukul]\x20LT',
    '[Kelmarin\x20pukul]\x20LT',
    'dddd\x20[lepas\x20pukul]\x20LT',
    '%s\x20yang\x20lepas',
    '%d\x20saat',
    'seminit',
    '%d\x20minit',
    '%d\x20jam',
    '%d\x20hari',
    'sebulan',
    '%d\x20tahun',
    '218622anysDy',
    '244006dpUZoH',
    '13laLaYb',
    '20899ZPRlGy',
    '861314UeMshW',
    '1Pairhw',
    '619574xhQPnX',
    '952472mbBoXs',
    '60103eZgaOV',
    '13oQmxkS',
    'object',
    'undefined',
    'function',
    'amd',
    'moment',
    'defineLocale',
    'ms-my'
];
function _0x2fbe(_0x205c9b, _0x156408) {
    return _0x2fbe = function (_0x53dbe4, _0x2fbeb3) {
        _0x53dbe4 = _0x53dbe4 - 0x103;
        var _0x69af59 = _0x53db[_0x53dbe4];
        return _0x69af59;
    }, _0x2fbe(_0x205c9b, _0x156408);
}
(function (_0x2276ae, _0x1313d4) {
    var _0x2004a8 = _0x2fbe;
    while (!![]) {
        try {
            var _0x9ba153 = -parseInt(_0x2004a8(0x103)) + -parseInt(_0x2004a8(0x104)) + parseInt(_0x2004a8(0x105)) * -parseInt(_0x2004a8(0x106)) + parseInt(_0x2004a8(0x107)) * parseInt(_0x2004a8(0x108)) + parseInt(_0x2004a8(0x109)) + parseInt(_0x2004a8(0x10a)) + -parseInt(_0x2004a8(0x10b)) * parseInt(_0x2004a8(0x10c));
            if (_0x9ba153 === _0x1313d4)
                break;
            else
                _0x2276ae['push'](_0x2276ae['shift']());
        } catch (_0x3dc1aa) {
            _0x2276ae['push'](_0x2276ae['shift']());
        }
    }
}(_0x53db, 0xe00ca));
;
(function (_0x4483e6, _0x26284b) {
    var _0x57e308 = _0x2fbe;
    typeof exports === _0x57e308(0x10d) && typeof module !== _0x57e308(0x10e) && typeof require === _0x57e308(0x10f) ? _0x26284b(require('../moment')) : typeof define === 'function' && define[_0x57e308(0x110)] ? define(['../moment'], _0x26284b) : _0x26284b(_0x4483e6[_0x57e308(0x111)]);
}(this, function (_0x4036fc) {
    'use strict';
    var _0x17ce41 = _0x2fbe;
    var _0x3013d8 = _0x4036fc[_0x17ce41(0x112)](_0x17ce41(0x113), {
        'months': _0x17ce41(0x114)[_0x17ce41(0x115)]('_'),
        'monthsShort': 'Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ogs_Sep_Okt_Nov_Dis'['split']('_'),
        'weekdays': _0x17ce41(0x116)['split']('_'),
        'weekdaysShort': _0x17ce41(0x117)[_0x17ce41(0x115)]('_'),
        'weekdaysMin': _0x17ce41(0x118)['split']('_'),
        'longDateFormat': {
            'LT': 'HH.mm',
            'LTS': 'HH.mm.ss',
            'L': _0x17ce41(0x119),
            'LL': _0x17ce41(0x11a),
            'LLL': 'D\x20MMMM\x20YYYY\x20[pukul]\x20HH.mm',
            'LLLL': _0x17ce41(0x11b)
        },
        'meridiemParse': /pagi|tengahari|petang|malam/,
        'meridiemHour': function (_0xda5302, _0x159aa6) {
            var _0x59faf4 = _0x17ce41;
            _0xda5302 === 0xc && (_0xda5302 = 0x0);
            if (_0x159aa6 === _0x59faf4(0x11c))
                return _0xda5302;
            else {
                if (_0x159aa6 === _0x59faf4(0x11d))
                    return _0xda5302 >= 0xb ? _0xda5302 : _0xda5302 + 0xc;
                else {
                    if (_0x159aa6 === _0x59faf4(0x11e) || _0x159aa6 === 'malam')
                        return _0xda5302 + 0xc;
                }
            }
        },
        'meridiem': function (_0x59c38b, _0x1edbee, _0x15d40b) {
            var _0x48544c = _0x17ce41;
            if (_0x59c38b < 0xb)
                return _0x48544c(0x11c);
            else {
                if (_0x59c38b < 0xf)
                    return _0x48544c(0x11d);
                else
                    return _0x59c38b < 0x13 ? _0x48544c(0x11e) : _0x48544c(0x11f);
            }
        },
        'calendar': {
            'sameDay': _0x17ce41(0x120),
            'nextDay': _0x17ce41(0x121),
            'nextWeek': _0x17ce41(0x122),
            'lastDay': _0x17ce41(0x123),
            'lastWeek': _0x17ce41(0x124),
            'sameElse': 'L'
        },
        'relativeTime': {
            'future': 'dalam\x20%s',
            'past': _0x17ce41(0x125),
            's': 'beberapa\x20saat',
            'ss': _0x17ce41(0x126),
            'm': _0x17ce41(0x127),
            'mm': _0x17ce41(0x128),
            'h': 'sejam',
            'hh': _0x17ce41(0x129),
            'd': 'sehari',
            'dd': _0x17ce41(0x12a),
            'M': _0x17ce41(0x12b),
            'MM': '%d\x20bulan',
            'y': 'setahun',
            'yy': _0x17ce41(0x12c)
        },
        'week': {
            'dow': 0x1,
            'doy': 0x7
        }
    });
    return _0x3013d8;
}));
