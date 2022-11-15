var _0x3628 = [
    '%s\x20таму',
    'некалькі\x20секунд',
    'дзень',
    'месяц',
    'test',
    'ночы',
    'раніцы',
    'вечара',
    'DDD',
    '-га',
    '10HHdMic',
    '5659aSDtPi',
    '288062EZaDZr',
    '1Yogshh',
    '2FYReJC',
    '135687ubdEXf',
    '18289BLzHeQ',
    '1sVHkGB',
    '89iPtwFF',
    '3071aQZOjn',
    '215800NmqYHr',
    '34577XLOXgw',
    '11WmOLyF',
    'split',
    'секунду_секунды_секунд',
    'хвіліна_хвіліны_хвілін',
    'хвіліну_хвіліны_хвілін',
    'гадзіна_гадзіны_гадзін',
    'гадзіну_гадзіны_гадзін',
    'год_гады_гадоў',
    'хвіліну',
    'гадзіна',
    'defineLocale',
    'студзеня_лютага_сакавіка_красавіка_траўня_чэрвеня_ліпеня_жніўня_верасня_кастрычніка_лістапада_снежня',
    'студзень_люты_сакавік_красавік_травень_чэрвень_ліпень_жнівень_верасень_кастрычнік_лістапад_снежань',
    'студ_лют_сак_крас_трав_чэрв_ліп_жнів_вер_каст_ліст_снеж',
    'нядзелю_панядзелак_аўторак_сераду_чацвер_пятніцу_суботу',
    'нядзеля_панядзелак_аўторак_серада_чацвер_пятніца_субота',
    'нд_пн_ат_ср_чц_пт_сб',
    'HH:mm:ss',
    'DD.MM.YYYY',
    'dddd,\x20D\x20MMMM\x20YYYY\x20г.,\x20HH:mm',
    '[Сёння\x20ў]\x20LT',
    '[Заўтра\x20ў]\x20LT',
    '[У]\x20dddd\x20[ў]\x20LT',
    'day',
    '[У\x20мінулую]\x20dddd\x20[ў]\x20LT',
    'праз\x20%s'
];
var _0x474c0e = _0x50b4;
(function (_0x3e18f4, _0x34e134) {
    var _0x1d25c2 = _0x50b4;
    while (!![]) {
        try {
            var _0x2dcd18 = parseInt(_0x1d25c2(0xe1)) * parseInt(_0x1d25c2(0xe2)) + -parseInt(_0x1d25c2(0xe3)) * parseInt(_0x1d25c2(0xe4)) + parseInt(_0x1d25c2(0xe5)) * parseInt(_0x1d25c2(0xe6)) + -parseInt(_0x1d25c2(0xe7)) * -parseInt(_0x1d25c2(0xe8)) + parseInt(_0x1d25c2(0xe9)) * parseInt(_0x1d25c2(0xea)) + parseInt(_0x1d25c2(0xeb)) + parseInt(_0x1d25c2(0xec)) * -parseInt(_0x1d25c2(0xed));
            if (_0x2dcd18 === _0x34e134)
                break;
            else
                _0x3e18f4['push'](_0x3e18f4['shift']());
        } catch (_0x1af819) {
            _0x3e18f4['push'](_0x3e18f4['shift']());
        }
    }
}(_0x3628, 0x28c33));
function _0x50b4(_0x123965, _0x4854eb) {
    return _0x50b4 = function (_0x362815, _0x50b407) {
        _0x362815 = _0x362815 - 0xe1;
        var _0x533ac5 = _0x3628[_0x362815];
        return _0x533ac5;
    }, _0x50b4(_0x123965, _0x4854eb);
}
import _0x438b0a from '../moment';
function plural(_0x13e3fc, _0x584515) {
    var _0x8a847e = _0x50b4, _0x3a6168 = _0x13e3fc[_0x8a847e(0xee)]('_');
    return _0x584515 % 0xa === 0x1 && _0x584515 % 0x64 !== 0xb ? _0x3a6168[0x0] : _0x584515 % 0xa >= 0x2 && _0x584515 % 0xa <= 0x4 && (_0x584515 % 0x64 < 0xa || _0x584515 % 0x64 >= 0x14) ? _0x3a6168[0x1] : _0x3a6168[0x2];
}
function relativeTimeWithPlural(_0x1c2f41, _0x17a03c, _0x4e24d9) {
    var _0x45aa68 = _0x50b4, _0x3a97dd = {
            'ss': _0x17a03c ? 'секунда_секунды_секунд' : _0x45aa68(0xef),
            'mm': _0x17a03c ? _0x45aa68(0xf0) : _0x45aa68(0xf1),
            'hh': _0x17a03c ? _0x45aa68(0xf2) : _0x45aa68(0xf3),
            'dd': 'дзень_дні_дзён',
            'MM': 'месяц_месяцы_месяцаў',
            'yy': _0x45aa68(0xf4)
        };
    if (_0x4e24d9 === 'm')
        return _0x17a03c ? 'хвіліна' : _0x45aa68(0xf5);
    else
        return _0x4e24d9 === 'h' ? _0x17a03c ? _0x45aa68(0xf6) : 'гадзіну' : _0x1c2f41 + '\x20' + plural(_0x3a97dd[_0x4e24d9], +_0x1c2f41);
}
export default _0x438b0a[_0x474c0e(0xf7)]('be', {
    'months': {
        'format': _0x474c0e(0xf8)[_0x474c0e(0xee)]('_'),
        'standalone': _0x474c0e(0xf9)[_0x474c0e(0xee)]('_')
    },
    'monthsShort': _0x474c0e(0xfa)['split']('_'),
    'weekdays': {
        'format': _0x474c0e(0xfb)[_0x474c0e(0xee)]('_'),
        'standalone': _0x474c0e(0xfc)['split']('_'),
        'isFormat': /\[ ?[Ууў] ?(?:мінулую|наступную)? ?\] ?dddd/
    },
    'weekdaysShort': _0x474c0e(0xfd)['split']('_'),
    'weekdaysMin': _0x474c0e(0xfd)['split']('_'),
    'longDateFormat': {
        'LT': 'HH:mm',
        'LTS': _0x474c0e(0xfe),
        'L': _0x474c0e(0xff),
        'LL': 'D\x20MMMM\x20YYYY\x20г.',
        'LLL': 'D\x20MMMM\x20YYYY\x20г.,\x20HH:mm',
        'LLLL': _0x474c0e(0x100)
    },
    'calendar': {
        'sameDay': _0x474c0e(0x101),
        'nextDay': _0x474c0e(0x102),
        'lastDay': '[Учора\x20ў]\x20LT',
        'nextWeek': function () {
            var _0x49b271 = _0x474c0e;
            return _0x49b271(0x103);
        },
        'lastWeek': function () {
            var _0x1137d6 = _0x474c0e;
            switch (this[_0x1137d6(0x104)]()) {
            case 0x0:
            case 0x3:
            case 0x5:
            case 0x6:
                return _0x1137d6(0x105);
            case 0x1:
            case 0x2:
            case 0x4:
                return '[У\x20мінулы]\x20dddd\x20[ў]\x20LT';
            }
        },
        'sameElse': 'L'
    },
    'relativeTime': {
        'future': _0x474c0e(0x106),
        'past': _0x474c0e(0x107),
        's': _0x474c0e(0x108),
        'm': relativeTimeWithPlural,
        'mm': relativeTimeWithPlural,
        'h': relativeTimeWithPlural,
        'hh': relativeTimeWithPlural,
        'd': _0x474c0e(0x109),
        'dd': relativeTimeWithPlural,
        'M': _0x474c0e(0x10a),
        'MM': relativeTimeWithPlural,
        'y': 'год',
        'yy': relativeTimeWithPlural
    },
    'meridiemParse': /ночы|раніцы|дня|вечара/,
    'isPM': function (_0x1679c7) {
        var _0x4f8213 = _0x474c0e;
        return /^(дня|вечара)$/[_0x4f8213(0x10b)](_0x1679c7);
    },
    'meridiem': function (_0x5db4cd, _0x60811, _0x2e39ea) {
        var _0x3ad88f = _0x474c0e;
        if (_0x5db4cd < 0x4)
            return _0x3ad88f(0x10c);
        else {
            if (_0x5db4cd < 0xc)
                return _0x3ad88f(0x10d);
            else
                return _0x5db4cd < 0x11 ? 'дня' : _0x3ad88f(0x10e);
        }
    },
    'dayOfMonthOrdinalParse': /\d{1,2}-(і|ы|га)/,
    'ordinal': function (_0x49ae77, _0x35e046) {
        var _0x3befa7 = _0x474c0e;
        switch (_0x35e046) {
        case 'M':
        case 'd':
        case _0x3befa7(0x10f):
        case 'w':
        case 'W':
            return (_0x49ae77 % 0xa === 0x2 || _0x49ae77 % 0xa === 0x3) && _0x49ae77 % 0x64 !== 0xc && _0x49ae77 % 0x64 !== 0xd ? _0x49ae77 + '-і' : _0x49ae77 + '-ы';
        case 'D':
            return _0x49ae77 + _0x3befa7(0x110);
        default:
            return _0x49ae77;
        }
    },
    'week': {
        'dow': 0x1,
        'doy': 0x7
    }
});
