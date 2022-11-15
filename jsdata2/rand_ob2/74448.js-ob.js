var _0x31c0 = [
    'engem\x20Joer',
    'indexOf',
    'an\x20',
    'defineLocale',
    'Januar_Februar_Mäerz_Abrëll_Mee_Juni_Juli_August_September_Oktober_November_Dezember',
    'split',
    'Jan._Febr._Mrz._Abr._Mee_Jun._Jul._Aug._Sept._Okt._Nov._Dez.',
    'Sonndeg_Méindeg_Dënschdeg_Mëttwoch_Donneschdeg_Freideg_Samschdeg',
    'So._Mé._Dë._Më._Do._Fr._Sa.',
    'So_Mé_Dë_Më_Do_Fr_Sa',
    'H:mm\x20[Auer]',
    'H:mm:ss\x20[Auer]',
    'D.\x20MMMM\x20YYYY',
    'D.\x20MMMM\x20YYYY\x20H:mm\x20[Auer]',
    'dddd,\x20D.\x20MMMM\x20YYYY\x20H:mm\x20[Auer]',
    '[Muer\x20um]\x20LT',
    'dddd\x20[um]\x20LT',
    '[Gëschter\x20um]\x20LT',
    '[Leschten]\x20dddd\x20[um]\x20LT',
    '[Leschte]\x20dddd\x20[um]\x20LT',
    'e\x20puer\x20Sekonnen',
    '%d\x20Sekonnen',
    '%d\x20Stonnen',
    '%d\x20Deeg',
    '%d\x20Méint',
    '%d.',
    '127307ULhUZU',
    '24757rJcIwY',
    '3qVeDPO',
    '10429RWsLon',
    '10ksTjKp',
    '31YBmCLU',
    '2217nzDGCm',
    '42073LMzlSd',
    '3szYNDN',
    '688efatnG',
    '235VuuGqx',
    '4ASwXbg',
    '38282VNfVCa',
    'eng\x20Minutt',
    'enger\x20Minutt',
    'eng\x20Stonn',
    'een\x20Dag',
    'engem\x20Dag',
    'ee\x20Mount',
    'engem\x20Mount',
    'ee\x20Joer'
];
function _0x373d(_0x6731b7, _0x792418) {
    return _0x373d = function (_0x31c0b6, _0x373d65) {
        _0x31c0b6 = _0x31c0b6 - 0x140;
        var _0x2a92fe = _0x31c0[_0x31c0b6];
        return _0x2a92fe;
    }, _0x373d(_0x6731b7, _0x792418);
}
var _0x1182f9 = _0x373d;
(function (_0x3813f8, _0x2dd75c) {
    var _0xd24ed6 = _0x373d;
    while (!![]) {
        try {
            var _0x181acc = -parseInt(_0xd24ed6(0x140)) + parseInt(_0xd24ed6(0x141)) * parseInt(_0xd24ed6(0x142)) + -parseInt(_0xd24ed6(0x143)) * -parseInt(_0xd24ed6(0x144)) + -parseInt(_0xd24ed6(0x145)) * parseInt(_0xd24ed6(0x146)) + parseInt(_0xd24ed6(0x147)) * parseInt(_0xd24ed6(0x148)) + parseInt(_0xd24ed6(0x149)) * -parseInt(_0xd24ed6(0x14a)) + -parseInt(_0xd24ed6(0x14b)) * -parseInt(_0xd24ed6(0x14c));
            if (_0x181acc === _0x2dd75c)
                break;
            else
                _0x3813f8['push'](_0x3813f8['shift']());
        } catch (_0x5a99f7) {
            _0x3813f8['push'](_0x3813f8['shift']());
        }
    }
}(_0x31c0, 0x18762));
import _0x2de6fe from '../moment';
function processRelativeTime(_0x4ae98e, _0x59d58b, _0x3f4041, _0x2dc4d4) {
    var _0x501a28 = _0x373d, _0x716cad = {
            'm': [
                _0x501a28(0x14d),
                _0x501a28(0x14e)
            ],
            'h': [
                _0x501a28(0x14f),
                'enger\x20Stonn'
            ],
            'd': [
                _0x501a28(0x150),
                _0x501a28(0x151)
            ],
            'M': [
                _0x501a28(0x152),
                _0x501a28(0x153)
            ],
            'y': [
                _0x501a28(0x154),
                _0x501a28(0x155)
            ]
        };
    return _0x59d58b ? _0x716cad[_0x3f4041][0x0] : _0x716cad[_0x3f4041][0x1];
}
function processFutureTime(_0x16c986) {
    var _0x2c5480 = _0x373d, _0x188827 = _0x16c986['substr'](0x0, _0x16c986[_0x2c5480(0x156)]('\x20'));
    if (eifelerRegelAppliesToNumber(_0x188827))
        return 'a\x20' + _0x16c986;
    return _0x2c5480(0x157) + _0x16c986;
}
function processPastTime(_0x3ae012) {
    var _0x2bb1bc = _0x373d, _0x4736de = _0x3ae012['substr'](0x0, _0x3ae012[_0x2bb1bc(0x156)]('\x20'));
    if (eifelerRegelAppliesToNumber(_0x4736de))
        return 'viru\x20' + _0x3ae012;
    return 'virun\x20' + _0x3ae012;
}
function eifelerRegelAppliesToNumber(_0x2355ec) {
    _0x2355ec = parseInt(_0x2355ec, 0xa);
    if (isNaN(_0x2355ec))
        return ![];
    if (_0x2355ec < 0x0)
        return !![];
    else {
        if (_0x2355ec < 0xa) {
            if (0x4 <= _0x2355ec && _0x2355ec <= 0x7)
                return !![];
            return ![];
        } else {
            if (_0x2355ec < 0x64) {
                var _0x408821 = _0x2355ec % 0xa, _0x2abd82 = _0x2355ec / 0xa;
                if (_0x408821 === 0x0)
                    return eifelerRegelAppliesToNumber(_0x2abd82);
                return eifelerRegelAppliesToNumber(_0x408821);
            } else {
                if (_0x2355ec < 0x2710) {
                    while (_0x2355ec >= 0xa) {
                        _0x2355ec = _0x2355ec / 0xa;
                    }
                    return eifelerRegelAppliesToNumber(_0x2355ec);
                } else
                    return _0x2355ec = _0x2355ec / 0x3e8, eifelerRegelAppliesToNumber(_0x2355ec);
            }
        }
    }
}
export default _0x2de6fe[_0x1182f9(0x158)]('lb', {
    'months': _0x1182f9(0x159)[_0x1182f9(0x15a)]('_'),
    'monthsShort': _0x1182f9(0x15b)['split']('_'),
    'monthsParseExact': !![],
    'weekdays': _0x1182f9(0x15c)['split']('_'),
    'weekdaysShort': _0x1182f9(0x15d)[_0x1182f9(0x15a)]('_'),
    'weekdaysMin': _0x1182f9(0x15e)[_0x1182f9(0x15a)]('_'),
    'weekdaysParseExact': !![],
    'longDateFormat': {
        'LT': _0x1182f9(0x15f),
        'LTS': _0x1182f9(0x160),
        'L': 'DD.MM.YYYY',
        'LL': _0x1182f9(0x161),
        'LLL': _0x1182f9(0x162),
        'LLLL': _0x1182f9(0x163)
    },
    'calendar': {
        'sameDay': '[Haut\x20um]\x20LT',
        'sameElse': 'L',
        'nextDay': _0x1182f9(0x164),
        'nextWeek': _0x1182f9(0x165),
        'lastDay': _0x1182f9(0x166),
        'lastWeek': function () {
            var _0x3806de = _0x1182f9;
            switch (this['day']()) {
            case 0x2:
            case 0x4:
                return _0x3806de(0x167);
            default:
                return _0x3806de(0x168);
            }
        }
    },
    'relativeTime': {
        'future': processFutureTime,
        'past': processPastTime,
        's': _0x1182f9(0x169),
        'ss': _0x1182f9(0x16a),
        'm': processRelativeTime,
        'mm': '%d\x20Minutten',
        'h': processRelativeTime,
        'hh': _0x1182f9(0x16b),
        'd': processRelativeTime,
        'dd': _0x1182f9(0x16c),
        'M': processRelativeTime,
        'MM': _0x1182f9(0x16d),
        'y': processRelativeTime,
        'yy': '%d\x20Joer'
    },
    'dayOfMonthOrdinalParse': /\d{1,2}\./,
    'ordinal': _0x1182f9(0x16e),
    'week': {
        'dow': 0x1,
        'doy': 0x4
    }
});
