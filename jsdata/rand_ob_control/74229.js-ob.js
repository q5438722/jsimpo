import _0x52eca3 from '../moment';
function processRelativeTime(_0x586bc5, _0x5e5c96, _0xc193f, _0x3bbe6e) {
    var _0xad76a4 = {
            'zTvJm': 'mõne\x20sekundi',
            'LeLYZ': 'mõni\x20sekund',
            'tXCxT': 'paar\x20sekundit',
            'SoIcN': function (_0x102475, _0x2a1b7d) {
                return _0x102475 + _0x2a1b7d;
            },
            'iSOuu': 'sekundi',
            'zDACG': 'sekundit',
            'yKwlV': 'ühe\x20minuti',
            'ZKwlt': 'üks\x20minut',
            'EYPJy': function (_0x89573d, _0x2d7f2d) {
                return _0x89573d + _0x2d7f2d;
            },
            'JeSyJ': '\x20minuti',
            'jImoG': '\x20minutit',
            'hxNTf': 'ühe\x20tunni',
            'lDchu': 'tund\x20aega',
            'GINCC': 'üks\x20tund',
            'ZoXsU': function (_0x38b4c2, _0x13117c) {
                return _0x38b4c2 + _0x13117c;
            },
            'KhcOG': '\x20tunni',
            'OkZrL': function (_0x42d6, _0x12c802) {
                return _0x42d6 + _0x12c802;
            },
            'RLjXc': '\x20tundi',
            'USIaf': 'ühe\x20päeva',
            'iMcec': 'üks\x20päev',
            'DGotO': 'kuu\x20aja',
            'oYaoq': 'kuu\x20aega',
            'RmOmg': 'üks\x20kuu',
            'SMnbJ': '\x20kuu',
            'VCmju': function (_0xbc8d43, _0x10d2b7) {
                return _0xbc8d43 + _0x10d2b7;
            },
            'kSdqp': '\x20kuud',
            'nsAZN': 'ühe\x20aasta',
            'WLZNZ': 'aasta',
            'nawsg': 'üks\x20aasta',
            'xyuxp': function (_0x3043ad, _0x60bb43) {
                return _0x3043ad + _0x60bb43;
            },
            'Pgmnn': '\x20aasta',
            'ktUNT': function (_0x331fd8, _0x52d8b7) {
                return _0x331fd8 + _0x52d8b7;
            },
            'OjejH': '\x20aastat'
        }, _0x5a626d = {
            's': [
                _0xad76a4['zTvJm'],
                _0xad76a4['LeLYZ'],
                _0xad76a4['tXCxT']
            ],
            'ss': [
                _0xad76a4['SoIcN'](_0x586bc5, _0xad76a4['iSOuu']),
                _0xad76a4['SoIcN'](_0x586bc5, _0xad76a4['zDACG'])
            ],
            'm': [
                _0xad76a4['yKwlV'],
                _0xad76a4['ZKwlt']
            ],
            'mm': [
                _0xad76a4['EYPJy'](_0x586bc5, _0xad76a4['JeSyJ']),
                _0xad76a4['EYPJy'](_0x586bc5, _0xad76a4['jImoG'])
            ],
            'h': [
                _0xad76a4['hxNTf'],
                _0xad76a4['lDchu'],
                _0xad76a4['GINCC']
            ],
            'hh': [
                _0xad76a4['ZoXsU'](_0x586bc5, _0xad76a4['KhcOG']),
                _0xad76a4['OkZrL'](_0x586bc5, _0xad76a4['RLjXc'])
            ],
            'd': [
                _0xad76a4['USIaf'],
                _0xad76a4['iMcec']
            ],
            'M': [
                _0xad76a4['DGotO'],
                _0xad76a4['oYaoq'],
                _0xad76a4['RmOmg']
            ],
            'MM': [
                _0xad76a4['OkZrL'](_0x586bc5, _0xad76a4['SMnbJ']),
                _0xad76a4['VCmju'](_0x586bc5, _0xad76a4['kSdqp'])
            ],
            'y': [
                _0xad76a4['nsAZN'],
                _0xad76a4['WLZNZ'],
                _0xad76a4['nawsg']
            ],
            'yy': [
                _0xad76a4['xyuxp'](_0x586bc5, _0xad76a4['Pgmnn']),
                _0xad76a4['ktUNT'](_0x586bc5, _0xad76a4['OjejH'])
            ]
        };
    if (_0x5e5c96)
        return _0x5a626d[_0xc193f][0x2] ? _0x5a626d[_0xc193f][0x2] : _0x5a626d[_0xc193f][0x1];
    return _0x3bbe6e ? _0x5a626d[_0xc193f][0x0] : _0x5a626d[_0xc193f][0x1];
}
export default _0x52eca3['defineLocale']('et', {
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
