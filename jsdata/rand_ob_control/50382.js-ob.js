;
(function (_0x394f29, _0xa996e5) {
    var _0x52248d = {
        'blhRi': function (_0x2cd6ee, _0x1261a4) {
            return _0x2cd6ee === _0x1261a4;
        },
        'dBAMS': 'object',
        'nOBtA': function (_0x514e57, _0x5ace56) {
            return _0x514e57 !== _0x5ace56;
        },
        'EwJWl': 'undefined',
        'LCxQU': 'function',
        'DqiRM': function (_0xccd47f, _0x5a9b3c) {
            return _0xccd47f(_0x5a9b3c);
        },
        'jppup': function (_0x195f82, _0x3bac80) {
            return _0x195f82(_0x3bac80);
        },
        'glJfa': '../moment',
        'rUMEn': function (_0x5f5ac8, _0x1c91ca) {
            return _0x5f5ac8 === _0x1c91ca;
        },
        'LlYRK': function (_0x3b06db, _0xd584d6, _0x470383) {
            return _0x3b06db(_0xd584d6, _0x470383);
        },
        'BAeae': function (_0x1d1b93, _0x54d5b2) {
            return _0x1d1b93(_0x54d5b2);
        }
    };
    _0x52248d['blhRi'](typeof exports, _0x52248d['dBAMS']) && _0x52248d['nOBtA'](typeof module, _0x52248d['EwJWl']) && _0x52248d['blhRi'](typeof require, _0x52248d['LCxQU']) ? _0x52248d['DqiRM'](_0xa996e5, _0x52248d['jppup'](require, _0x52248d['glJfa'])) : _0x52248d['rUMEn'](typeof define, _0x52248d['LCxQU']) && define['amd'] ? _0x52248d['LlYRK'](define, [_0x52248d['glJfa']], _0xa996e5) : _0x52248d['BAeae'](_0xa996e5, _0x394f29['moment']);
}(this, function (_0x5b9dd0) {
    'use strict';
    var _0x24fd7e = {
        'htpog': 'Januari_Februari_Machi_Aprili_Mei_Juni_Julai_Agosti_Septemba_Oktoba_Novemba_Desemba',
        'QEwsf': 'Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ago_Sep_Okt_Nov_Des',
        'rdLRq': 'Jumapili_Jumatatu_Jumanne_Jumatano_Alhamisi_Ijumaa_Jumamosi',
        'ZvFXo': 'Jpl_Jtat_Jnne_Jtan_Alh_Ijm_Jmos',
        'Rmcqn': 'J2_J3_J4_J5_Al_Ij_J1',
        'RmcIr': 'hh:mm\x20A',
        'NqYat': 'HH:mm:ss',
        'gXHJv': 'DD.MM.YYYY',
        'JozaF': 'D\x20MMMM\x20YYYY',
        'lIImJ': 'D\x20MMMM\x20YYYY\x20HH:mm',
        'jroyd': 'dddd,\x20D\x20MMMM\x20YYYY\x20HH:mm',
        'bIkdw': '[leo\x20saa]\x20LT',
        'WHgWb': '[kesho\x20saa]\x20LT',
        'NigGY': '[wiki\x20ijayo]\x20dddd\x20[saat]\x20LT',
        'hdEJZ': '[jana]\x20LT',
        'unQXj': '[wiki\x20iliyopita]\x20dddd\x20[saat]\x20LT',
        'YPWyD': '%s\x20baadaye',
        'QtHiW': 'tokea\x20%s',
        'xKetN': 'hivi\x20punde',
        'emjTC': 'sekunde\x20%d',
        'KBgsh': 'dakika\x20moja',
        'NfeUQ': 'dakika\x20%d',
        'xNkwh': 'saa\x20limoja',
        'vPEWb': 'masaa\x20%d',
        'YvsEK': 'siku\x20moja',
        'OpMII': 'siku\x20%d',
        'fniAz': 'mwezi\x20mmoja',
        'NGKyq': 'miezi\x20%d',
        'zQQlv': 'mwaka\x20mmoja',
        'CgCIy': 'miaka\x20%d'
    };
    var _0x101ec5 = _0x5b9dd0['defineLocale']('sw', {
        'months': _0x24fd7e['htpog']['split']('_'),
        'monthsShort': _0x24fd7e['QEwsf']['split']('_'),
        'weekdays': _0x24fd7e['rdLRq']['split']('_'),
        'weekdaysShort': _0x24fd7e['ZvFXo']['split']('_'),
        'weekdaysMin': _0x24fd7e['Rmcqn']['split']('_'),
        'weekdaysParseExact': !![],
        'longDateFormat': {
            'LT': _0x24fd7e['RmcIr'],
            'LTS': _0x24fd7e['NqYat'],
            'L': _0x24fd7e['gXHJv'],
            'LL': _0x24fd7e['JozaF'],
            'LLL': _0x24fd7e['lIImJ'],
            'LLLL': _0x24fd7e['jroyd']
        },
        'calendar': {
            'sameDay': _0x24fd7e['bIkdw'],
            'nextDay': _0x24fd7e['WHgWb'],
            'nextWeek': _0x24fd7e['NigGY'],
            'lastDay': _0x24fd7e['hdEJZ'],
            'lastWeek': _0x24fd7e['unQXj'],
            'sameElse': 'L'
        },
        'relativeTime': {
            'future': _0x24fd7e['YPWyD'],
            'past': _0x24fd7e['QtHiW'],
            's': _0x24fd7e['xKetN'],
            'ss': _0x24fd7e['emjTC'],
            'm': _0x24fd7e['KBgsh'],
            'mm': _0x24fd7e['NfeUQ'],
            'h': _0x24fd7e['xNkwh'],
            'hh': _0x24fd7e['vPEWb'],
            'd': _0x24fd7e['YvsEK'],
            'dd': _0x24fd7e['OpMII'],
            'M': _0x24fd7e['fniAz'],
            'MM': _0x24fd7e['NGKyq'],
            'y': _0x24fd7e['zQQlv'],
            'yy': _0x24fd7e['CgCIy']
        },
        'week': {
            'dow': 0x1,
            'doy': 0x7
        }
    });
    return _0x101ec5;
}));
