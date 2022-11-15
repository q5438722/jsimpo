var _0x18a3 = [
    'ein\x20Jahr',
    'einem\x20Jahr',
    '\x20Jahre',
    '\x20Jahren',
    'defineLocale',
    'Januar_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember',
    'Jan._Feb._März_Apr._Mai_Juni_Juli_Aug._Sep._Okt._Nov._Dez.',
    'split',
    'Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag',
    'So_Mo_Di_Mi_Do_Fr_Sa',
    'HH:mm',
    'HH:mm:ss',
    'DD.MM.YYYY',
    'D.\x20MMMM\x20YYYY',
    'D.\x20MMMM\x20YYYY\x20HH:mm',
    'dddd,\x20D.\x20MMMM\x20YYYY\x20HH:mm',
    '[heute\x20um]\x20LT\x20[Uhr]',
    'dddd\x20[um]\x20LT\x20[Uhr]',
    '[letzten]\x20dddd\x20[um]\x20LT\x20[Uhr]',
    'in\x20%s',
    'vor\x20%s',
    '%d\x20Sekunden',
    '%d\x20Minuten',
    '%d\x20Stunden',
    '%d\x20Wochen',
    '%d.',
    '3jVzlKc',
    '157717zZDnLJ',
    '46794oOJmww',
    '14419wSFDXZ',
    '41mfnYtD',
    '299886JMIlxW',
    '247862rNpzRo',
    '8821FTEvJS',
    '8XdwNEg',
    '176870NsLBug',
    'einer\x20Minute',
    'eine\x20Stunde',
    'einer\x20Stunde',
    'ein\x20Tag',
    'einem\x20Tag',
    '\x20Tage',
    '\x20Tagen',
    'eine\x20Woche',
    'einer\x20Woche',
    'ein\x20Monat',
    'einem\x20Monat',
    '\x20Monaten'
];
var _0x214436 = _0x5c0d;
(function (_0x162722, _0x26e557) {
    var _0x36b403 = _0x5c0d;
    while (!![]) {
        try {
            var _0x101988 = -parseInt(_0x36b403(0x103)) * parseInt(_0x36b403(0x104)) + parseInt(_0x36b403(0x105)) + parseInt(_0x36b403(0x106)) * parseInt(_0x36b403(0x107)) + -parseInt(_0x36b403(0x108)) + parseInt(_0x36b403(0x109)) + -parseInt(_0x36b403(0x10a)) * -parseInt(_0x36b403(0x10b)) + parseInt(_0x36b403(0x10c));
            if (_0x101988 === _0x26e557)
                break;
            else
                _0x162722['push'](_0x162722['shift']());
        } catch (_0x3fe35a) {
            _0x162722['push'](_0x162722['shift']());
        }
    }
}(_0x18a3, 0x57f2c));
import _0x2348c6 from '../moment';
function _0x5c0d(_0x12d0df, _0x3f583f) {
    return _0x5c0d = function (_0x18a340, _0x5c0d62) {
        _0x18a340 = _0x18a340 - 0x103;
        var _0x148216 = _0x18a3[_0x18a340];
        return _0x148216;
    }, _0x5c0d(_0x12d0df, _0x3f583f);
}
function processRelativeTime(_0x40521a, _0x164e0c, _0x35527f, _0x5ddd7f) {
    var _0x3c4b47 = _0x5c0d, _0x52b588 = {
            'm': [
                'eine\x20Minute',
                _0x3c4b47(0x10d)
            ],
            'h': [
                _0x3c4b47(0x10e),
                _0x3c4b47(0x10f)
            ],
            'd': [
                _0x3c4b47(0x110),
                _0x3c4b47(0x111)
            ],
            'dd': [
                _0x40521a + _0x3c4b47(0x112),
                _0x40521a + _0x3c4b47(0x113)
            ],
            'w': [
                _0x3c4b47(0x114),
                _0x3c4b47(0x115)
            ],
            'M': [
                _0x3c4b47(0x116),
                _0x3c4b47(0x117)
            ],
            'MM': [
                _0x40521a + '\x20Monate',
                _0x40521a + _0x3c4b47(0x118)
            ],
            'y': [
                _0x3c4b47(0x119),
                _0x3c4b47(0x11a)
            ],
            'yy': [
                _0x40521a + _0x3c4b47(0x11b),
                _0x40521a + _0x3c4b47(0x11c)
            ]
        };
    return _0x164e0c ? _0x52b588[_0x35527f][0x0] : _0x52b588[_0x35527f][0x1];
}
export default _0x2348c6[_0x214436(0x11d)]('de-ch', {
    'months': _0x214436(0x11e)['split']('_'),
    'monthsShort': _0x214436(0x11f)[_0x214436(0x120)]('_'),
    'monthsParseExact': !![],
    'weekdays': _0x214436(0x121)[_0x214436(0x120)]('_'),
    'weekdaysShort': _0x214436(0x122)['split']('_'),
    'weekdaysMin': _0x214436(0x122)[_0x214436(0x120)]('_'),
    'weekdaysParseExact': !![],
    'longDateFormat': {
        'LT': _0x214436(0x123),
        'LTS': _0x214436(0x124),
        'L': _0x214436(0x125),
        'LL': _0x214436(0x126),
        'LLL': _0x214436(0x127),
        'LLLL': _0x214436(0x128)
    },
    'calendar': {
        'sameDay': _0x214436(0x129),
        'sameElse': 'L',
        'nextDay': '[morgen\x20um]\x20LT\x20[Uhr]',
        'nextWeek': _0x214436(0x12a),
        'lastDay': '[gestern\x20um]\x20LT\x20[Uhr]',
        'lastWeek': _0x214436(0x12b)
    },
    'relativeTime': {
        'future': _0x214436(0x12c),
        'past': _0x214436(0x12d),
        's': 'ein\x20paar\x20Sekunden',
        'ss': _0x214436(0x12e),
        'm': processRelativeTime,
        'mm': _0x214436(0x12f),
        'h': processRelativeTime,
        'hh': _0x214436(0x130),
        'd': processRelativeTime,
        'dd': processRelativeTime,
        'w': processRelativeTime,
        'ww': _0x214436(0x131),
        'M': processRelativeTime,
        'MM': processRelativeTime,
        'y': processRelativeTime,
        'yy': processRelativeTime
    },
    'dayOfMonthOrdinalParse': /\d{1,2}\./,
    'ordinal': _0x214436(0x132),
    'week': {
        'dow': 0x1,
        'doy': 0x4
    }
});
