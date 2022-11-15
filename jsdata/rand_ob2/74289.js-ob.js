var _0x6119 = [
    'D\x20MMMM\x20YYYY\x20г.',
    'dddd,\x20D\x20MMMM\x20YYYY\x20г.,\x20HH:mm',
    '[Учора\x20ў]\x20LT',
    '[У]\x20dddd\x20[ў]\x20LT',
    'day',
    '[У\x20мінулую]\x20dddd\x20[ў]\x20LT',
    '[У\x20мінулы]\x20dddd\x20[ў]\x20LT',
    'праз\x20%s',
    'некалькі\x20секунд',
    'дзень',
    'год',
    'test',
    'ночы',
    'раніцы',
    'вечара',
    'DDD',
    '-га',
    '1414971aJHrHU',
    '259334jSYwqD',
    '1950oJIpDl',
    '306VOFtbj',
    '857108JIUTQz',
    '1FKnWeI',
    '408295wvtDrj',
    '70267EyQoTH',
    '2MlaMUc',
    '910467nApQyE',
    '1xhRNeS',
    'split',
    'секунда_секунды_секунд',
    'секунду_секунды_секунд',
    'хвіліну_хвіліны_хвілін',
    'гадзіна_гадзіны_гадзін',
    'гадзіну_гадзіны_гадзін',
    'месяц_месяцы_месяцаў',
    'год_гады_гадоў',
    'хвіліну',
    'гадзіна',
    'гадзіну',
    'defineLocale',
    'студзеня_лютага_сакавіка_красавіка_траўня_чэрвеня_ліпеня_жніўня_верасня_кастрычніка_лістапада_снежня',
    'студзень_люты_сакавік_красавік_травень_чэрвень_ліпень_жнівень_верасень_кастрычнік_лістапад_снежань',
    'студ_лют_сак_крас_трав_чэрв_ліп_жнів_вер_каст_ліст_снеж',
    'нядзелю_панядзелак_аўторак_сераду_чацвер_пятніцу_суботу',
    'нядзеля_панядзелак_аўторак_серада_чацвер_пятніца_субота',
    'нд_пн_ат_ср_чц_пт_сб',
    'HH:mm',
    'HH:mm:ss',
    'DD.MM.YYYY'
];
var _0x34387c = _0x3995;
function _0x3995(_0x145774, _0x5e6479) {
    return _0x3995 = function (_0x611985, _0x3995e1) {
        _0x611985 = _0x611985 - 0x1ca;
        var _0x4a8395 = _0x6119[_0x611985];
        return _0x4a8395;
    }, _0x3995(_0x145774, _0x5e6479);
}
(function (_0x4762d9, _0x2d057a) {
    var _0x37b5a2 = _0x3995;
    while (!![]) {
        try {
            var _0x1d324d = parseInt(_0x37b5a2(0x1ca)) + -parseInt(_0x37b5a2(0x1cb)) + parseInt(_0x37b5a2(0x1cc)) * -parseInt(_0x37b5a2(0x1cd)) + -parseInt(_0x37b5a2(0x1ce)) * -parseInt(_0x37b5a2(0x1cf)) + parseInt(_0x37b5a2(0x1d0)) + parseInt(_0x37b5a2(0x1d1)) * -parseInt(_0x37b5a2(0x1d2)) + -parseInt(_0x37b5a2(0x1d3)) * parseInt(_0x37b5a2(0x1d4));
            if (_0x1d324d === _0x2d057a)
                break;
            else
                _0x4762d9['push'](_0x4762d9['shift']());
        } catch (_0x25d81a) {
            _0x4762d9['push'](_0x4762d9['shift']());
        }
    }
}(_0x6119, 0xbccdb));
import _0x35d99f from '../moment';
function plural(_0x307258, _0x4f9171) {
    var _0x3c770d = _0x3995, _0x32acfb = _0x307258[_0x3c770d(0x1d5)]('_');
    return _0x4f9171 % 0xa === 0x1 && _0x4f9171 % 0x64 !== 0xb ? _0x32acfb[0x0] : _0x4f9171 % 0xa >= 0x2 && _0x4f9171 % 0xa <= 0x4 && (_0x4f9171 % 0x64 < 0xa || _0x4f9171 % 0x64 >= 0x14) ? _0x32acfb[0x1] : _0x32acfb[0x2];
}
function relativeTimeWithPlural(_0x217a48, _0x233104, _0x5cc093) {
    var _0x39ae6d = _0x3995, _0x11822f = {
            'ss': _0x233104 ? _0x39ae6d(0x1d6) : _0x39ae6d(0x1d7),
            'mm': _0x233104 ? 'хвіліна_хвіліны_хвілін' : _0x39ae6d(0x1d8),
            'hh': _0x233104 ? _0x39ae6d(0x1d9) : _0x39ae6d(0x1da),
            'dd': 'дзень_дні_дзён',
            'MM': _0x39ae6d(0x1db),
            'yy': _0x39ae6d(0x1dc)
        };
    if (_0x5cc093 === 'm')
        return _0x233104 ? 'хвіліна' : _0x39ae6d(0x1dd);
    else
        return _0x5cc093 === 'h' ? _0x233104 ? _0x39ae6d(0x1de) : _0x39ae6d(0x1df) : _0x217a48 + '\x20' + plural(_0x11822f[_0x5cc093], +_0x217a48);
}
export default _0x35d99f[_0x34387c(0x1e0)]('be', {
    'months': {
        'format': _0x34387c(0x1e1)['split']('_'),
        'standalone': _0x34387c(0x1e2)['split']('_')
    },
    'monthsShort': _0x34387c(0x1e3)[_0x34387c(0x1d5)]('_'),
    'weekdays': {
        'format': _0x34387c(0x1e4)[_0x34387c(0x1d5)]('_'),
        'standalone': _0x34387c(0x1e5)[_0x34387c(0x1d5)]('_'),
        'isFormat': /\[ ?[Ууў] ?(?:мінулую|наступную)? ?\] ?dddd/
    },
    'weekdaysShort': _0x34387c(0x1e6)[_0x34387c(0x1d5)]('_'),
    'weekdaysMin': _0x34387c(0x1e6)[_0x34387c(0x1d5)]('_'),
    'longDateFormat': {
        'LT': _0x34387c(0x1e7),
        'LTS': _0x34387c(0x1e8),
        'L': _0x34387c(0x1e9),
        'LL': _0x34387c(0x1ea),
        'LLL': 'D\x20MMMM\x20YYYY\x20г.,\x20HH:mm',
        'LLLL': _0x34387c(0x1eb)
    },
    'calendar': {
        'sameDay': '[Сёння\x20ў]\x20LT',
        'nextDay': '[Заўтра\x20ў]\x20LT',
        'lastDay': _0x34387c(0x1ec),
        'nextWeek': function () {
            var _0xc1f4ac = _0x34387c;
            return _0xc1f4ac(0x1ed);
        },
        'lastWeek': function () {
            var _0x476921 = _0x34387c;
            switch (this[_0x476921(0x1ee)]()) {
            case 0x0:
            case 0x3:
            case 0x5:
            case 0x6:
                return _0x476921(0x1ef);
            case 0x1:
            case 0x2:
            case 0x4:
                return _0x476921(0x1f0);
            }
        },
        'sameElse': 'L'
    },
    'relativeTime': {
        'future': _0x34387c(0x1f1),
        'past': '%s\x20таму',
        's': _0x34387c(0x1f2),
        'm': relativeTimeWithPlural,
        'mm': relativeTimeWithPlural,
        'h': relativeTimeWithPlural,
        'hh': relativeTimeWithPlural,
        'd': _0x34387c(0x1f3),
        'dd': relativeTimeWithPlural,
        'M': 'месяц',
        'MM': relativeTimeWithPlural,
        'y': _0x34387c(0x1f4),
        'yy': relativeTimeWithPlural
    },
    'meridiemParse': /ночы|раніцы|дня|вечара/,
    'isPM': function (_0x2d646b) {
        var _0x1442c5 = _0x34387c;
        return /^(дня|вечара)$/[_0x1442c5(0x1f5)](_0x2d646b);
    },
    'meridiem': function (_0x5bef45, _0x266044, _0x38cd55) {
        var _0x309532 = _0x34387c;
        if (_0x5bef45 < 0x4)
            return _0x309532(0x1f6);
        else {
            if (_0x5bef45 < 0xc)
                return _0x309532(0x1f7);
            else
                return _0x5bef45 < 0x11 ? 'дня' : _0x309532(0x1f8);
        }
    },
    'dayOfMonthOrdinalParse': /\d{1,2}-(і|ы|га)/,
    'ordinal': function (_0x803fbf, _0x318df5) {
        var _0x5d1cfc = _0x34387c;
        switch (_0x318df5) {
        case 'M':
        case 'd':
        case _0x5d1cfc(0x1f9):
        case 'w':
        case 'W':
            return (_0x803fbf % 0xa === 0x2 || _0x803fbf % 0xa === 0x3) && _0x803fbf % 0x64 !== 0xc && _0x803fbf % 0x64 !== 0xd ? _0x803fbf + '-і' : _0x803fbf + '-ы';
        case 'D':
            return _0x803fbf + _0x5d1cfc(0x1fa);
        default:
            return _0x803fbf;
        }
    },
    'week': {
        'dow': 0x1,
        'doy': 0x7
    }
});
