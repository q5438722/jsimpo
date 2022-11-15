var _0x391d = [
    'split',
    'P_E_T_K_N_R_L',
    'H:mm',
    'DD.MM.YYYY',
    'D.\x20MMMM\x20YYYY\x20H:mm',
    'dddd,\x20D.\x20MMMM\x20YYYY\x20H:mm',
    '[Täna,]\x20LT',
    '[Homme,]\x20LT',
    '[Järgmine]\x20dddd\x20LT',
    '[Eile,]\x20LT',
    '[Eelmine]\x20dddd\x20LT',
    '%s\x20pärast',
    '%s\x20tagasi',
    '%d\x20päeva',
    '%d.',
    '2089NOfWjr',
    '87XYBpCL',
    '414164GRBQcP',
    '1033053HZOpWA',
    '1204992NdmDij',
    '71842fRYUzN',
    '18bebQQR',
    '2yhYjAG',
    '701854dvebUC',
    '2JCziIt',
    '966806xWnkuY',
    'mõne\x20sekundi',
    'mõni\x20sekund',
    'paar\x20sekundit',
    'üks\x20minut',
    '\x20minuti',
    '\x20minutit',
    'ühe\x20tunni',
    'tund\x20aega',
    'üks\x20tund',
    '\x20tunni',
    '\x20tundi',
    'üks\x20päev',
    'kuu\x20aja',
    'kuu\x20aega',
    'üks\x20kuu',
    '\x20kuu',
    '\x20kuud',
    'ühe\x20aasta',
    'aasta',
    'üks\x20aasta',
    '\x20aastat',
    'defineLocale',
    'jaanuar_veebruar_märts_aprill_mai_juuni_juuli_august_september_oktoober_november_detsember'
];
var _0x17fff0 = _0x5d73;
(function (_0x457a22, _0x432faf) {
    var _0x2436fe = _0x5d73;
    while (!![]) {
        try {
            var _0x290b7e = -parseInt(_0x2436fe(0xdc)) * -parseInt(_0x2436fe(0xdd)) + parseInt(_0x2436fe(0xde)) + parseInt(_0x2436fe(0xdf)) + parseInt(_0x2436fe(0xe0)) + -parseInt(_0x2436fe(0xe1)) * -parseInt(_0x2436fe(0xe2)) + parseInt(_0x2436fe(0xe3)) * -parseInt(_0x2436fe(0xe4)) + -parseInt(_0x2436fe(0xe5)) * parseInt(_0x2436fe(0xe6));
            if (_0x290b7e === _0x432faf)
                break;
            else
                _0x457a22['push'](_0x457a22['shift']());
        } catch (_0x25eda0) {
            _0x457a22['push'](_0x457a22['shift']());
        }
    }
}(_0x391d, 0xc0d1c));
import _0x15ad9c from '../moment';
function _0x5d73(_0x1c6568, _0x1ac855) {
    return _0x5d73 = function (_0x391d08, _0x5d7319) {
        _0x391d08 = _0x391d08 - 0xdc;
        var _0xc68bde = _0x391d[_0x391d08];
        return _0xc68bde;
    }, _0x5d73(_0x1c6568, _0x1ac855);
}
function processRelativeTime(_0x2d358b, _0x413122, _0x141649, _0x2c9410) {
    var _0x4d19bd = _0x5d73, _0x3e55d6 = {
            's': [
                _0x4d19bd(0xe7),
                _0x4d19bd(0xe8),
                _0x4d19bd(0xe9)
            ],
            'ss': [
                _0x2d358b + 'sekundi',
                _0x2d358b + 'sekundit'
            ],
            'm': [
                'ühe\x20minuti',
                _0x4d19bd(0xea)
            ],
            'mm': [
                _0x2d358b + _0x4d19bd(0xeb),
                _0x2d358b + _0x4d19bd(0xec)
            ],
            'h': [
                _0x4d19bd(0xed),
                _0x4d19bd(0xee),
                _0x4d19bd(0xef)
            ],
            'hh': [
                _0x2d358b + _0x4d19bd(0xf0),
                _0x2d358b + _0x4d19bd(0xf1)
            ],
            'd': [
                'ühe\x20päeva',
                _0x4d19bd(0xf2)
            ],
            'M': [
                _0x4d19bd(0xf3),
                _0x4d19bd(0xf4),
                _0x4d19bd(0xf5)
            ],
            'MM': [
                _0x2d358b + _0x4d19bd(0xf6),
                _0x2d358b + _0x4d19bd(0xf7)
            ],
            'y': [
                _0x4d19bd(0xf8),
                _0x4d19bd(0xf9),
                _0x4d19bd(0xfa)
            ],
            'yy': [
                _0x2d358b + '\x20aasta',
                _0x2d358b + _0x4d19bd(0xfb)
            ]
        };
    if (_0x413122)
        return _0x3e55d6[_0x141649][0x2] ? _0x3e55d6[_0x141649][0x2] : _0x3e55d6[_0x141649][0x1];
    return _0x2c9410 ? _0x3e55d6[_0x141649][0x0] : _0x3e55d6[_0x141649][0x1];
}
export default _0x15ad9c[_0x17fff0(0xfc)]('et', {
    'months': _0x17fff0(0xfd)['split']('_'),
    'monthsShort': 'jaan_veebr_märts_apr_mai_juuni_juuli_aug_sept_okt_nov_dets'[_0x17fff0(0xfe)]('_'),
    'weekdays': 'pühapäev_esmaspäev_teisipäev_kolmapäev_neljapäev_reede_laupäev'[_0x17fff0(0xfe)]('_'),
    'weekdaysShort': _0x17fff0(0xff)[_0x17fff0(0xfe)]('_'),
    'weekdaysMin': _0x17fff0(0xff)[_0x17fff0(0xfe)]('_'),
    'longDateFormat': {
        'LT': _0x17fff0(0x100),
        'LTS': 'H:mm:ss',
        'L': _0x17fff0(0x101),
        'LL': 'D.\x20MMMM\x20YYYY',
        'LLL': _0x17fff0(0x102),
        'LLLL': _0x17fff0(0x103)
    },
    'calendar': {
        'sameDay': _0x17fff0(0x104),
        'nextDay': _0x17fff0(0x105),
        'nextWeek': _0x17fff0(0x106),
        'lastDay': _0x17fff0(0x107),
        'lastWeek': _0x17fff0(0x108),
        'sameElse': 'L'
    },
    'relativeTime': {
        'future': _0x17fff0(0x109),
        'past': _0x17fff0(0x10a),
        's': processRelativeTime,
        'ss': processRelativeTime,
        'm': processRelativeTime,
        'mm': processRelativeTime,
        'h': processRelativeTime,
        'hh': processRelativeTime,
        'd': processRelativeTime,
        'dd': _0x17fff0(0x10b),
        'M': processRelativeTime,
        'MM': processRelativeTime,
        'y': processRelativeTime,
        'yy': processRelativeTime
    },
    'dayOfMonthOrdinalParse': /\d{1,2}\./,
    'ordinal': _0x17fff0(0x10c),
    'week': {
        'dow': 0x1,
        'doy': 0x4
    }
});
