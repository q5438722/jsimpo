const _0x400a = ['Jan._Feb._M\xE4rz_Apr._Mai_Juni_Juli_Aug._Sep._Okt._Nov._Dez.', 'split', 'Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag', 'So_Mo_Di_Mi_Do_Fr_Sa', 'HH:mm', 'DD.MM.YYYY', 'D. MMMM YYYY', 'D. MMMM YYYY HH:mm', '[heute um] LT [Uhr]', '[morgen um] LT [Uhr]', '[gestern um] LT [Uhr]', '[letzten] dddd [um] LT [Uhr]', 'in %s', 'vor %s', 'ein paar Sekunden', '%d Sekunden', '%d Minuten', '%d Stunden', '%d Wochen', '%d.', '450183EYXehP', '947259nPesCO', '216832iaTiPN', '1094054LBKfCY', '1JsbryR', '1193649pMYLaD', '904347ATwUpf', '4102778UqkXOQ', 'eine Minute', 'einer Minute', 'einem Tag', ' Tage', ' Tagen', 'eine Woche', 'einer Woche', 'ein Monat', ' Monate', ' Jahren', 'GzLde', 'oZokp', 'eine Stunde', 'einer Stunde', 'raKcD', 'ppuzO', 'umrLm', 'qAIDL', 'vTARc', 'eMEaF', 'ONIHO', 'einem Monat', 'wHUds', 'xamFV', 'imNBg', 'wwFoM', 'defineLocale', 'Januar_Februar_M\xE4rz_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember'];
const _0x39a615 = _0x5855;

(function (_0x283407, _0x5d8a72) {
    const _0x3448f7 = _0x5855;

    while (true) {
        try {
            const _0x2345a6 = parseInt(_0x3448f7(0xf5)) + -parseInt(_0x3448f7(0xf6)) + parseInt(_0x3448f7(0xf7)) + -parseInt(_0x3448f7(0xf8)) + parseInt(_0x3448f7(0xf9)) * -parseInt(_0x3448f7(0xfa)) + -parseInt(_0x3448f7(0xfb)) + parseInt(_0x3448f7(0xfc));

            if (_0x2345a6 === _0x5d8a72) break;else _0x283407.push(_0x283407.shift());
        } catch (_0x41bc08) {
            _0x283407.push(_0x283407.shift());
        }
    }
})(_0x400a, 630484);
import _0x2eec0a from '../moment';
function _0x5855(_0x214fb8, _0x137ba0) {
    return _0x5855 = function (_0x5a47fb, _0x14a9f7) {
        _0x5a47fb = _0x5a47fb - 245;
        const _0x344f71 = _0x400a[_0x5a47fb];

        return _0x344f71;
    }, _0x5855(_0x214fb8, _0x137ba0);
}
function processRelativeTime(_0x73241, _0xcf2d29, _0x3e1683, _0x29e602) {
    const _0x11b938 = _0x5855;
    const _0x2534e9 = {
        'GzLde': _0x11b938(0xfd),
        'oZokp': _0x11b938(0xfe),
        'SLPqY': 'ein Tag',
        'raKcD': _0x11b938(0xff),
        'ppuzO': function (_0x5a2778, _0x665e58) {
            return _0x5a2778 + _0x665e58;
        },
        'umrLm': _0x11b938(0x100),
        'epEas': function (_0x25e81f, _0x5f3e1a) {
            return _0x25e81f + _0x5f3e1a;
        },
        'qAIDL': _0x11b938(0x101),
        'vTARc': _0x11b938(0x102),
        'eMEaF': _0x11b938(0x103),
        'ONIHO': _0x11b938(0x104),
        'wHUds': function (_0x1a59bd, _0x3336b5) {
            return _0x1a59bd + _0x3336b5;
        },
        'WZuik': _0x11b938(0x105),
        'xamFV': ' Monaten',
        'GkvSK': 'einem Jahr',
        'imNBg': ' Jahre',
        'wwFoM': function (_0x1fbaf5, _0x456875) {
            return _0x1fbaf5 + _0x456875;
        },
        'QAppC': _0x11b938(0x106)
    };
    const _0x7a2dc3 = {
        'm': [_0x2534e9[_0x11b938(0x107)], _0x2534e9[_0x11b938(0x108)]],
        'h': [_0x11b938(0x109), _0x11b938(0x10a)],
        'd': [_0x2534e9.SLPqY, _0x2534e9[_0x11b938(0x10b)]],
        'dd': [_0x2534e9[_0x11b938(0x10c)](_0x73241, _0x2534e9[_0x11b938(0x10d)]), _0x2534e9.epEas(_0x73241, _0x2534e9[_0x11b938(0x10e)])],
        'w': [_0x2534e9[_0x11b938(0x10f)], _0x2534e9[_0x11b938(0x110)]],
        'M': [_0x2534e9[_0x11b938(0x111)], _0x11b938(0x112)],
        'MM': [_0x2534e9[_0x11b938(0x113)](_0x73241, _0x2534e9.WZuik), _0x2534e9[_0x11b938(0x113)](_0x73241, _0x2534e9[_0x11b938(0x114)])],
        'y': ['ein Jahr', _0x2534e9.GkvSK],
        'yy': [_0x73241 + _0x2534e9[_0x11b938(0x115)], _0x2534e9[_0x11b938(0x116)](_0x73241, _0x2534e9.QAppC)]
    };

    return _0xcf2d29 ? _0x7a2dc3[_0x3e1683][0] : _0x7a2dc3[_0x3e1683][1];
}
export default _0x2eec0a[_0x39a615(0x117)]('de-ch', {
    'months': _0x39a615(0x118).split('_'),
    'monthsShort': _0x39a615(0x119)[_0x39a615(0x11a)]('_'),
    'monthsParseExact': true,
    'weekdays': _0x39a615(0x11b)[_0x39a615(0x11a)]('_'),
    'weekdaysShort': _0x39a615(0x11c)[_0x39a615(0x11a)]('_'),
    'weekdaysMin': _0x39a615(0x11c)[_0x39a615(0x11a)]('_'),
    'weekdaysParseExact': true,
    'longDateFormat': {
        'LT': _0x39a615(0x11d),
        'LTS': 'HH:mm:ss',
        'L': _0x39a615(0x11e),
        'LL': _0x39a615(0x11f),
        'LLL': _0x39a615(0x120),
        'LLLL': 'dddd, D. MMMM YYYY HH:mm'
    },
    'calendar': {
        'sameDay': _0x39a615(0x121),
        'sameElse': 'L',
        'nextDay': _0x39a615(0x122),
        'nextWeek': 'dddd [um] LT [Uhr]',
        'lastDay': _0x39a615(0x123),
        'lastWeek': _0x39a615(0x124)
    },
    'relativeTime': {
        'future': _0x39a615(0x125),
        'past': _0x39a615(0x126),
        's': _0x39a615(0x127),
        'ss': _0x39a615(0x128),
        'm': processRelativeTime,
        'mm': _0x39a615(0x129),
        'h': processRelativeTime,
        'hh': _0x39a615(0x12a),
        'd': processRelativeTime,
        'dd': processRelativeTime,
        'w': processRelativeTime,
        'ww': _0x39a615(0x12b),
        'M': processRelativeTime,
        'MM': processRelativeTime,
        'y': processRelativeTime,
        'yy': processRelativeTime
    },
    'dayOfMonthOrdinalParse': /\d{1,2}\./,
    'ordinal': _0x39a615(0x12c),
    'week': {
        'dow': 0x1,
        'doy': 0x4
    }
});