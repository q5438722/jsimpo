;
(function (_0x2ac448, _0x1b020c) {
    typeof exports === 'object' && typeof module !== 'undefined' && typeof require === 'function' ? _0x1b020c(require('../moment')) : typeof define === 'function' && define['amd'] ? define(['../moment'], _0x1b020c) : _0x1b020c(_0x2ac448['moment']);
}(this, function (_0x3309fe) {
    'use strict';
    var _0x2293eb = _0x3309fe['defineLocale']('ms-my', {
        'months': 'Januari_Februari_Mac_April_Mei_Jun_Julai_Ogos_September_Oktober_November_Disember'['split']('_'),
        'monthsShort': 'Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ogs_Sep_Okt_Nov_Dis'['split']('_'),
        'weekdays': 'Ahad_Isnin_Selasa_Rabu_Khamis_Jumaat_Sabtu'['split']('_'),
        'weekdaysShort': 'Ahd_Isn_Sel_Rab_Kha_Jum_Sab'['split']('_'),
        'weekdaysMin': 'Ah_Is_Sl_Rb_Km_Jm_Sb'['split']('_'),
        'longDateFormat': {
            'LT': 'HH.mm',
            'LTS': 'HH.mm.ss',
            'L': 'DD/MM/YYYY',
            'LL': 'D MMMM YYYY',
            'LLL': 'D MMMM YYYY [pukul] HH.mm',
            'LLLL': 'dddd, D MMMM YYYY [pukul] HH.mm'
        },
        'meridiemParse': /pagi|tengahari|petang|malam/,
        'meridiemHour': function (_0x4c1609, _0x448829) {
            if ('CKvmB' !== 'Qellb') {
                if (_0x4c1609 === 12) {
                    if ('KFxnI' === 'KFxnI') {
                        _0x4c1609 = 0;
                    } else {
                        return 'pagi';
                    }
                }
                if (_0x448829 === 'pagi') {
                    return _0x4c1609;
                } else if (_0x448829 === 'tengahari') {
                    return _0x4c1609 >= 11 ? _0x4c1609 : _0x4c1609 + 12;
                } else if (_0x448829 === 'petang' || _0x448829 === 'malam') {
                    if ('cSIWK' === 'cSIWK') {
                        return _0x4c1609 + 12;
                    } else {
                        _0x4c1609 = 0;
                    }
                }
            } else {
                return _0x4c1609 + 12;
            }
        },
        'meridiem': function (_0x2fc87d, _0x55352e, _0x59d689) {
            if (_0x2fc87d < 11) {
                return 'pagi';
            } else if (_0x2fc87d < 15) {
                if ('jzwHP' !== 'KZuHC') {
                    return 'tengahari';
                } else {
                    return 'petang';
                }
            } else if (_0x2fc87d < 19) {
                return 'petang';
            } else {
                if ('KKCTT' === 'KKCTT') {
                    return 'malam';
                } else {
                    return hour;
                }
            }
        },
        'calendar': {
            'sameDay': '[Hari ini pukul] LT',
            'nextDay': '[Esok pukul] LT',
            'nextWeek': 'dddd [pukul] LT',
            'lastDay': '[Kelmarin pukul] LT',
            'lastWeek': 'dddd [lepas pukul] LT',
            'sameElse': 'L'
        },
        'relativeTime': {
            'future': 'dalam %s',
            'past': '%s yang lepas',
            's': 'beberapa saat',
            'ss': '%d saat',
            'm': 'seminit',
            'mm': '%d minit',
            'h': 'sejam',
            'hh': '%d jam',
            'd': 'sehari',
            'dd': '%d hari',
            'M': 'sebulan',
            'MM': '%d bulan',
            'y': 'setahun',
            'yy': '%d tahun'
        },
        'week': {
            'dow': 1,
            'doy': 7
        }
    });
    return _0x2293eb;
}));