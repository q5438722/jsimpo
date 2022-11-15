var _0x1948 = [
    '180112lyAYmu',
    '42457KsUfpk',
    '3nyqeHm',
    '130653MGrTHJ',
    '1TbZvGr',
    '54919IxZMcg',
    '1221jCoIIk',
    '86frxMIT',
    'mõne\x20sekundi',
    'mõni\x20sekund',
    'paar\x20sekundit',
    'sekundit',
    'ühe\x20minuti',
    '\x20minuti',
    'ühe\x20tunni',
    'tund\x20aega',
    'üks\x20tund',
    'ühe\x20päeva',
    'üks\x20päev',
    'kuu\x20aega',
    'üks\x20kuu',
    '\x20kuu',
    'ühe\x20aasta',
    'aasta',
    '\x20aastat',
    'defineLocale',
    'jaanuar_veebruar_märts_aprill_mai_juuni_juuli_august_september_oktoober_november_detsember',
    'split',
    'H:mm',
    'H:mm:ss',
    'DD.MM.YYYY',
    'D.\x20MMMM\x20YYYY',
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
    '3oCUhqq',
    '13811eNPvbm',
    '134629IRvVOi'
];
var _0x907941 = _0x1bb5;
function _0x1bb5(_0x25944e, _0x2813fe) {
    return _0x1bb5 = function (_0x19481d, _0x1bb524) {
        _0x19481d = _0x19481d - 0x187;
        var _0x1c0d91 = _0x1948[_0x19481d];
        return _0x1c0d91;
    }, _0x1bb5(_0x25944e, _0x2813fe);
}
(function (_0x4077cd, _0x778e3d) {
    var _0x237ab0 = _0x1bb5;
    while (!![]) {
        try {
            var _0x336454 = parseInt(_0x237ab0(0x187)) * -parseInt(_0x237ab0(0x188)) + -parseInt(_0x237ab0(0x189)) + parseInt(_0x237ab0(0x18a)) + parseInt(_0x237ab0(0x18b)) * parseInt(_0x237ab0(0x18c)) + -parseInt(_0x237ab0(0x18d)) + parseInt(_0x237ab0(0x18e)) * parseInt(_0x237ab0(0x18f)) + parseInt(_0x237ab0(0x190)) * parseInt(_0x237ab0(0x191));
            if (_0x336454 === _0x778e3d)
                break;
            else
                _0x4077cd['push'](_0x4077cd['shift']());
        } catch (_0x332f3d) {
            _0x4077cd['push'](_0x4077cd['shift']());
        }
    }
}(_0x1948, 0x273b5));
import _0x5f4603 from '../moment';
function processRelativeTime(_0x2c7e32, _0xaed0f, _0x76749, _0x21b6cc) {
    var _0x18ab1c = _0x1bb5, _0xc0c23c = {
            's': [
                _0x18ab1c(0x192),
                _0x18ab1c(0x193),
                _0x18ab1c(0x194)
            ],
            'ss': [
                _0x2c7e32 + 'sekundi',
                _0x2c7e32 + _0x18ab1c(0x195)
            ],
            'm': [
                _0x18ab1c(0x196),
                'üks\x20minut'
            ],
            'mm': [
                _0x2c7e32 + _0x18ab1c(0x197),
                _0x2c7e32 + '\x20minutit'
            ],
            'h': [
                _0x18ab1c(0x198),
                _0x18ab1c(0x199),
                _0x18ab1c(0x19a)
            ],
            'hh': [
                _0x2c7e32 + '\x20tunni',
                _0x2c7e32 + '\x20tundi'
            ],
            'd': [
                _0x18ab1c(0x19b),
                _0x18ab1c(0x19c)
            ],
            'M': [
                'kuu\x20aja',
                _0x18ab1c(0x19d),
                _0x18ab1c(0x19e)
            ],
            'MM': [
                _0x2c7e32 + _0x18ab1c(0x19f),
                _0x2c7e32 + '\x20kuud'
            ],
            'y': [
                _0x18ab1c(0x1a0),
                _0x18ab1c(0x1a1),
                'üks\x20aasta'
            ],
            'yy': [
                _0x2c7e32 + '\x20aasta',
                _0x2c7e32 + _0x18ab1c(0x1a2)
            ]
        };
    if (_0xaed0f)
        return _0xc0c23c[_0x76749][0x2] ? _0xc0c23c[_0x76749][0x2] : _0xc0c23c[_0x76749][0x1];
    return _0x21b6cc ? _0xc0c23c[_0x76749][0x0] : _0xc0c23c[_0x76749][0x1];
}
export default _0x5f4603[_0x907941(0x1a3)]('et', {
    'months': _0x907941(0x1a4)[_0x907941(0x1a5)]('_'),
    'monthsShort': 'jaan_veebr_märts_apr_mai_juuni_juuli_aug_sept_okt_nov_dets'[_0x907941(0x1a5)]('_'),
    'weekdays': 'pühapäev_esmaspäev_teisipäev_kolmapäev_neljapäev_reede_laupäev'['split']('_'),
    'weekdaysShort': 'P_E_T_K_N_R_L'[_0x907941(0x1a5)]('_'),
    'weekdaysMin': 'P_E_T_K_N_R_L'['split']('_'),
    'longDateFormat': {
        'LT': _0x907941(0x1a6),
        'LTS': _0x907941(0x1a7),
        'L': _0x907941(0x1a8),
        'LL': _0x907941(0x1a9),
        'LLL': _0x907941(0x1aa),
        'LLLL': _0x907941(0x1ab)
    },
    'calendar': {
        'sameDay': _0x907941(0x1ac),
        'nextDay': _0x907941(0x1ad),
        'nextWeek': _0x907941(0x1ae),
        'lastDay': _0x907941(0x1af),
        'lastWeek': _0x907941(0x1b0),
        'sameElse': 'L'
    },
    'relativeTime': {
        'future': _0x907941(0x1b1),
        'past': _0x907941(0x1b2),
        's': processRelativeTime,
        'ss': processRelativeTime,
        'm': processRelativeTime,
        'mm': processRelativeTime,
        'h': processRelativeTime,
        'hh': processRelativeTime,
        'd': processRelativeTime,
        'dd': _0x907941(0x1b3),
        'M': processRelativeTime,
        'MM': processRelativeTime,
        'y': processRelativeTime,
        'yy': processRelativeTime
    },
    'dayOfMonthOrdinalParse': /\d{1,2}\./,
    'ordinal': _0x907941(0x1b4),
    'week': {
        'dow': 0x1,
        'doy': 0x4
    }
});
