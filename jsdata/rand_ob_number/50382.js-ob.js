;
(function (_0x40982, _0x18eba4) {
    typeof exports === 'object' && typeof module !== 'undefined' && typeof require === 'function' ? _0x18eba4(require('../moment')) : typeof define === 'function' && define['amd'] ? define(['../moment'], _0x18eba4) : _0x18eba4(_0x40982['moment']);
}(this, function (_0x29600e) {
    'use strict';
    var _0xa8d43c = _0x29600e['defineLocale']('sw', {
        'months': 'Januari_Februari_Machi_Aprili_Mei_Juni_Julai_Agosti_Septemba_Oktoba_Novemba_Desemba'['split']('_'),
        'monthsShort': 'Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ago_Sep_Okt_Nov_Des'['split']('_'),
        'weekdays': 'Jumapili_Jumatatu_Jumanne_Jumatano_Alhamisi_Ijumaa_Jumamosi'['split']('_'),
        'weekdaysShort': 'Jpl_Jtat_Jnne_Jtan_Alh_Ijm_Jmos'['split']('_'),
        'weekdaysMin': 'J2_J3_J4_J5_Al_Ij_J1'['split']('_'),
        'weekdaysParseExact': !![],
        'longDateFormat': {
            'LT': 'hh:mm\x20A',
            'LTS': 'HH:mm:ss',
            'L': 'DD.MM.YYYY',
            'LL': 'D\x20MMMM\x20YYYY',
            'LLL': 'D\x20MMMM\x20YYYY\x20HH:mm',
            'LLLL': 'dddd,\x20D\x20MMMM\x20YYYY\x20HH:mm'
        },
        'calendar': {
            'sameDay': '[leo\x20saa]\x20LT',
            'nextDay': '[kesho\x20saa]\x20LT',
            'nextWeek': '[wiki\x20ijayo]\x20dddd\x20[saat]\x20LT',
            'lastDay': '[jana]\x20LT',
            'lastWeek': '[wiki\x20iliyopita]\x20dddd\x20[saat]\x20LT',
            'sameElse': 'L'
        },
        'relativeTime': {
            'future': '%s\x20baadaye',
            'past': 'tokea\x20%s',
            's': 'hivi\x20punde',
            'ss': 'sekunde\x20%d',
            'm': 'dakika\x20moja',
            'mm': 'dakika\x20%d',
            'h': 'saa\x20limoja',
            'hh': 'masaa\x20%d',
            'd': 'siku\x20moja',
            'dd': 'siku\x20%d',
            'M': 'mwezi\x20mmoja',
            'MM': 'miezi\x20%d',
            'y': 'mwaka\x20mmoja',
            'yy': 'miaka\x20%d'
        },
        'week': {
            'dow': 0x1,
            'doy': 0x7
        }
    });
    return _0xa8d43c;
}));
