import _0x405663 from '../moment';
function processRelativeTime(_0x2a9e4a, _0x1bc614, _0x2ce34a, _0x315a0e) {
    var _0x5e8fe9 = {
        's': [
            'mõne\x20sekundi',
            'mõni\x20sekund',
            'paar\x20sekundit'
        ],
        'ss': [
            _0x2a9e4a + 'sekundi',
            _0x2a9e4a + 'sekundit'
        ],
        'm': [
            'ühe\x20minuti',
            'üks\x20minut'
        ],
        'mm': [
            _0x2a9e4a + '\x20minuti',
            _0x2a9e4a + '\x20minutit'
        ],
        'h': [
            'ühe\x20tunni',
            'tund\x20aega',
            'üks\x20tund'
        ],
        'hh': [
            _0x2a9e4a + '\x20tunni',
            _0x2a9e4a + '\x20tundi'
        ],
        'd': [
            'ühe\x20päeva',
            'üks\x20päev'
        ],
        'M': [
            'kuu\x20aja',
            'kuu\x20aega',
            'üks\x20kuu'
        ],
        'MM': [
            _0x2a9e4a + '\x20kuu',
            _0x2a9e4a + '\x20kuud'
        ],
        'y': [
            'ühe\x20aasta',
            'aasta',
            'üks\x20aasta'
        ],
        'yy': [
            _0x2a9e4a + '\x20aasta',
            _0x2a9e4a + '\x20aastat'
        ]
    };
    if (_0x1bc614)
        return _0x5e8fe9[_0x2ce34a][-0x6 * -0x613 + -0x8 * -0x112 + -0x2d00] ? _0x5e8fe9[_0x2ce34a][-0x1 * 0x14b9 + 0x23b4 + -0xef9 * 0x1] : _0x5e8fe9[_0x2ce34a][-0x534 + 0x98b + -0x456];
    return _0x315a0e ? _0x5e8fe9[_0x2ce34a][0x22d1 * 0x1 + 0x33 * -0x65 + -0x42 * 0x39] : _0x5e8fe9[_0x2ce34a][0xf8 * 0x4 + 0x16f1 + -0x1ad0];
}
export default _0x405663['defineLocale']('et', {
    'months': 'jaanuar_veebruar_märts_aprill_mai_juuni_juuli_august_september_oktoober_november_detsember'['split']('_'),
    'monthsShort': 'jaan_veebr_märts_apr_mai_juuni_juuli_aug_sept_okt_nov_dets'['split']('_'),
    'weekdays': 'pühapäev_esmaspäev_teisipäev_kolmapäev_neljapäev_reede_laupäev'['split']('_'),
    'weekdaysShort': 'P_E_T_K_N_R_L'['split']('_'),
    'weekdaysMin': 'P_E_T_K_N_R_L'['split']('_'),
    'longDateFormat': {
        'LT': 'H:mm',
        'LTS': 'H:mm:ss',
        'L': 'DD.MM.YYYY',
        'LL': 'D.\x20MMMM\x20YYYY',
        'LLL': 'D.\x20MMMM\x20YYYY\x20H:mm',
        'LLLL': 'dddd,\x20D.\x20MMMM\x20YYYY\x20H:mm'
    },
    'calendar': {
        'sameDay': '[Täna,]\x20LT',
        'nextDay': '[Homme,]\x20LT',
        'nextWeek': '[Järgmine]\x20dddd\x20LT',
        'lastDay': '[Eile,]\x20LT',
        'lastWeek': '[Eelmine]\x20dddd\x20LT',
        'sameElse': 'L'
    },
    'relativeTime': {
        'future': '%s\x20pärast',
        'past': '%s\x20tagasi',
        's': processRelativeTime,
        'ss': processRelativeTime,
        'm': processRelativeTime,
        'mm': processRelativeTime,
        'h': processRelativeTime,
        'hh': processRelativeTime,
        'd': processRelativeTime,
        'dd': '%d\x20päeva',
        'M': processRelativeTime,
        'MM': processRelativeTime,
        'y': processRelativeTime,
        'yy': processRelativeTime
    },
    'dayOfMonthOrdinalParse': /\d{1,2}\./,
    'ordinal': '%d.',
    'week': {
        'dow': 0x1,
        'doy': 0x4
    }
});
