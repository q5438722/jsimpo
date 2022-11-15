var _0x3776 = [
    'ee\x20Mount',
    'engem\x20Mount',
    'ee\x20Joer',
    'engem\x20Joer',
    'substr',
    'an\x20',
    'indexOf',
    'viru\x20',
    'virun\x20',
    'defineLocale',
    'Januar_Februar_Mäerz_Abrëll_Mee_Juni_Juli_August_September_Oktober_November_Dezember',
    'split',
    'Jan._Febr._Mrz._Abr._Mee_Jun._Jul._Aug._Sept._Okt._Nov._Dez.',
    'Sonndeg_Méindeg_Dënschdeg_Mëttwoch_Donneschdeg_Freideg_Samschdeg',
    'So._Mé._Dë._Më._Do._Fr._Sa.',
    'H:mm\x20[Auer]',
    'DD.MM.YYYY',
    'D.\x20MMMM\x20YYYY',
    'D.\x20MMMM\x20YYYY\x20H:mm\x20[Auer]',
    'dddd,\x20D.\x20MMMM\x20YYYY\x20H:mm\x20[Auer]',
    '[Haut\x20um]\x20LT',
    '[Muer\x20um]\x20LT',
    'dddd\x20[um]\x20LT',
    '[Gëschter\x20um]\x20LT',
    '%d\x20Sekonnen',
    '%d\x20Minutten',
    '%d\x20Stonnen',
    '%d\x20Deeg',
    '%d\x20Joer',
    '%d.',
    '2XgkrAT',
    '537641dJvCvp',
    '2WVmfGv',
    '320549zbjBZH',
    '449684jrtHzU',
    '2CBHwUF',
    '140198YTUlVW',
    '31YKuePH',
    '24955oGxuiU',
    '908267nqmPag',
    '2031401AglABy',
    'eng\x20Minutt',
    'enger\x20Minutt',
    'eng\x20Stonn',
    'enger\x20Stonn',
    'een\x20Dag'
];
var _0x44d321 = _0x4da7;
(function (_0x1535f5, _0x3a24a0) {
    var _0x416349 = _0x4da7;
    while (!![]) {
        try {
            var _0x31414e = parseInt(_0x416349(0xab)) * parseInt(_0x416349(0xac)) + -parseInt(_0x416349(0xad)) * parseInt(_0x416349(0xae)) + -parseInt(_0x416349(0xaf)) * -parseInt(_0x416349(0xb0)) + -parseInt(_0x416349(0xb1)) + parseInt(_0x416349(0xb2)) * parseInt(_0x416349(0xb3)) + parseInt(_0x416349(0xb4)) + -parseInt(_0x416349(0xb5));
            if (_0x31414e === _0x3a24a0)
                break;
            else
                _0x1535f5['push'](_0x1535f5['shift']());
        } catch (_0x1bc323) {
            _0x1535f5['push'](_0x1535f5['shift']());
        }
    }
}(_0x3776, 0xce031));
import _0x37a88a from '../moment';
function processRelativeTime(_0x160269, _0x1ad473, _0x1be49f, _0x501932) {
    var _0x7c5111 = _0x4da7, _0x52d47c = {
            'm': [
                _0x7c5111(0xb6),
                _0x7c5111(0xb7)
            ],
            'h': [
                _0x7c5111(0xb8),
                _0x7c5111(0xb9)
            ],
            'd': [
                _0x7c5111(0xba),
                'engem\x20Dag'
            ],
            'M': [
                _0x7c5111(0xbb),
                _0x7c5111(0xbc)
            ],
            'y': [
                _0x7c5111(0xbd),
                _0x7c5111(0xbe)
            ]
        };
    return _0x1ad473 ? _0x52d47c[_0x1be49f][0x0] : _0x52d47c[_0x1be49f][0x1];
}
function _0x4da7(_0x4447db, _0xc10c99) {
    return _0x4da7 = function (_0x3776ca, _0x4da719) {
        _0x3776ca = _0x3776ca - 0xab;
        var _0x2586f1 = _0x3776[_0x3776ca];
        return _0x2586f1;
    }, _0x4da7(_0x4447db, _0xc10c99);
}
function processFutureTime(_0x5b0db6) {
    var _0x62a90 = _0x4da7, _0x5210b6 = _0x5b0db6[_0x62a90(0xbf)](0x0, _0x5b0db6['indexOf']('\x20'));
    if (eifelerRegelAppliesToNumber(_0x5210b6))
        return 'a\x20' + _0x5b0db6;
    return _0x62a90(0xc0) + _0x5b0db6;
}
function processPastTime(_0x310d2a) {
    var _0x27ca91 = _0x4da7, _0x55963d = _0x310d2a[_0x27ca91(0xbf)](0x0, _0x310d2a[_0x27ca91(0xc1)]('\x20'));
    if (eifelerRegelAppliesToNumber(_0x55963d))
        return _0x27ca91(0xc2) + _0x310d2a;
    return _0x27ca91(0xc3) + _0x310d2a;
}
function eifelerRegelAppliesToNumber(_0x41c6e1) {
    _0x41c6e1 = parseInt(_0x41c6e1, 0xa);
    if (isNaN(_0x41c6e1))
        return ![];
    if (_0x41c6e1 < 0x0)
        return !![];
    else {
        if (_0x41c6e1 < 0xa) {
            if (0x4 <= _0x41c6e1 && _0x41c6e1 <= 0x7)
                return !![];
            return ![];
        } else {
            if (_0x41c6e1 < 0x64) {
                var _0xd2afd8 = _0x41c6e1 % 0xa, _0x91b0d0 = _0x41c6e1 / 0xa;
                if (_0xd2afd8 === 0x0)
                    return eifelerRegelAppliesToNumber(_0x91b0d0);
                return eifelerRegelAppliesToNumber(_0xd2afd8);
            } else {
                if (_0x41c6e1 < 0x2710) {
                    while (_0x41c6e1 >= 0xa) {
                        _0x41c6e1 = _0x41c6e1 / 0xa;
                    }
                    return eifelerRegelAppliesToNumber(_0x41c6e1);
                } else
                    return _0x41c6e1 = _0x41c6e1 / 0x3e8, eifelerRegelAppliesToNumber(_0x41c6e1);
            }
        }
    }
}
export default _0x37a88a[_0x44d321(0xc4)]('lb', {
    'months': _0x44d321(0xc5)[_0x44d321(0xc6)]('_'),
    'monthsShort': _0x44d321(0xc7)[_0x44d321(0xc6)]('_'),
    'monthsParseExact': !![],
    'weekdays': _0x44d321(0xc8)[_0x44d321(0xc6)]('_'),
    'weekdaysShort': _0x44d321(0xc9)['split']('_'),
    'weekdaysMin': 'So_Mé_Dë_Më_Do_Fr_Sa'['split']('_'),
    'weekdaysParseExact': !![],
    'longDateFormat': {
        'LT': _0x44d321(0xca),
        'LTS': 'H:mm:ss\x20[Auer]',
        'L': _0x44d321(0xcb),
        'LL': _0x44d321(0xcc),
        'LLL': _0x44d321(0xcd),
        'LLLL': _0x44d321(0xce)
    },
    'calendar': {
        'sameDay': _0x44d321(0xcf),
        'sameElse': 'L',
        'nextDay': _0x44d321(0xd0),
        'nextWeek': _0x44d321(0xd1),
        'lastDay': _0x44d321(0xd2),
        'lastWeek': function () {
            switch (this['day']()) {
            case 0x2:
            case 0x4:
                return '[Leschten]\x20dddd\x20[um]\x20LT';
            default:
                return '[Leschte]\x20dddd\x20[um]\x20LT';
            }
        }
    },
    'relativeTime': {
        'future': processFutureTime,
        'past': processPastTime,
        's': 'e\x20puer\x20Sekonnen',
        'ss': _0x44d321(0xd3),
        'm': processRelativeTime,
        'mm': _0x44d321(0xd4),
        'h': processRelativeTime,
        'hh': _0x44d321(0xd5),
        'd': processRelativeTime,
        'dd': _0x44d321(0xd6),
        'M': processRelativeTime,
        'MM': '%d\x20Méint',
        'y': processRelativeTime,
        'yy': _0x44d321(0xd7)
    },
    'dayOfMonthOrdinalParse': /\d{1,2}\./,
    'ordinal': _0x44d321(0xd8),
    'week': {
        'dow': 0x1,
        'doy': 0x4
    }
});
