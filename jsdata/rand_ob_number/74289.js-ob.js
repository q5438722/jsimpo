import _0x7890b1 from '../moment';
function plural(_0x409e2b, _0x467fff) {
    var _0x123305 = _0x409e2b['split']('_');
    return _0x467fff % (-0xf58 + -0x34 * -0x89 + 0x36 * -0x3b) === 0x1cf * 0x1 + 0x1766 + -0x1934 && _0x467fff % (0x2 * 0x1b1 + 0x154c + -0x1 * 0x184a) !== 0x1 * -0x1163 + 0x1 * -0x10bb + 0x2229 ? _0x123305[-0x1 * -0xb5c + -0x25e9 + -0x3cb * -0x7] : _0x467fff % (-0x218 + 0x1 * -0x591 + 0x7b3) >= 0x17c7 + 0xc7b + 0x740 * -0x5 && _0x467fff % (0x1e4 + 0x2365 + 0x1 * -0x253f) <= -0x1ac9 + -0x268 * 0x9 + 0x33b * 0xf && (_0x467fff % (0x7d4 * -0x1 + -0x16 * 0x106 + 0x1ebc) < 0x122 + -0x5 * -0x561 + 0x1bfd * -0x1 || _0x467fff % (0x1c98 + 0x1 * -0xf23 + -0xd11) >= -0x15de * -0x1 + -0x269 + -0x1361) ? _0x123305[0x17 * 0x4d + 0x1 * 0x2449 + -0x2b33] : _0x123305[0x2 * 0x11b + 0x1602 + 0x1 * -0x1836];
}
function relativeTimeWithPlural(_0x596c31, _0x425bd3, _0x207341) {
    var _0x1db670 = {
        'ss': _0x425bd3 ? 'секунда_секунды_секунд' : 'секунду_секунды_секунд',
        'mm': _0x425bd3 ? 'хвіліна_хвіліны_хвілін' : 'хвіліну_хвіліны_хвілін',
        'hh': _0x425bd3 ? 'гадзіна_гадзіны_гадзін' : 'гадзіну_гадзіны_гадзін',
        'dd': 'дзень_дні_дзён',
        'MM': 'месяц_месяцы_месяцаў',
        'yy': 'год_гады_гадоў'
    };
    if (_0x207341 === 'm')
        return _0x425bd3 ? 'хвіліна' : 'хвіліну';
    else
        return _0x207341 === 'h' ? _0x425bd3 ? 'гадзіна' : 'гадзіну' : _0x596c31 + '\x20' + plural(_0x1db670[_0x207341], +_0x596c31);
}
export default _0x7890b1['defineLocale']('be', {
    'months': {
        'format': 'студзеня_лютага_сакавіка_красавіка_траўня_чэрвеня_ліпеня_жніўня_верасня_кастрычніка_лістапада_снежня'['split']('_'),
        'standalone': 'студзень_люты_сакавік_красавік_травень_чэрвень_ліпень_жнівень_верасень_кастрычнік_лістапад_снежань'['split']('_')
    },
    'monthsShort': 'студ_лют_сак_крас_трав_чэрв_ліп_жнів_вер_каст_ліст_снеж'['split']('_'),
    'weekdays': {
        'format': 'нядзелю_панядзелак_аўторак_сераду_чацвер_пятніцу_суботу'['split']('_'),
        'standalone': 'нядзеля_панядзелак_аўторак_серада_чацвер_пятніца_субота'['split']('_'),
        'isFormat': /\[ ?[Ууў] ?(?:мінулую|наступную)? ?\] ?dddd/
    },
    'weekdaysShort': 'нд_пн_ат_ср_чц_пт_сб'['split']('_'),
    'weekdaysMin': 'нд_пн_ат_ср_чц_пт_сб'['split']('_'),
    'longDateFormat': {
        'LT': 'HH:mm',
        'LTS': 'HH:mm:ss',
        'L': 'DD.MM.YYYY',
        'LL': 'D\x20MMMM\x20YYYY\x20г.',
        'LLL': 'D\x20MMMM\x20YYYY\x20г.,\x20HH:mm',
        'LLLL': 'dddd,\x20D\x20MMMM\x20YYYY\x20г.,\x20HH:mm'
    },
    'calendar': {
        'sameDay': '[Сёння\x20ў]\x20LT',
        'nextDay': '[Заўтра\x20ў]\x20LT',
        'lastDay': '[Учора\x20ў]\x20LT',
        'nextWeek': function () {
            return '[У]\x20dddd\x20[ў]\x20LT';
        },
        'lastWeek': function () {
            switch (this['day']()) {
            case 0x12b9 * -0x2 + 0x14 * 0x2a + 0x222a:
            case -0x1c9c + -0x23ec + 0x408b:
            case -0x2425 + 0x20 * -0x22 + -0x7 * -0x5c6:
            case -0x3d * 0x76 + -0xc2 * 0x8 + 0x111a * 0x2:
                return '[У\x20мінулую]\x20dddd\x20[ў]\x20LT';
            case -0x147f + -0x14fd + 0x297d:
            case 0x382 * 0x4 + 0x1834 + -0x263a:
            case 0x1272 * 0x1 + -0x1e9b + 0x40f * 0x3:
                return '[У\x20мінулы]\x20dddd\x20[ў]\x20LT';
            }
        },
        'sameElse': 'L'
    },
    'relativeTime': {
        'future': 'праз\x20%s',
        'past': '%s\x20таму',
        's': 'некалькі\x20секунд',
        'm': relativeTimeWithPlural,
        'mm': relativeTimeWithPlural,
        'h': relativeTimeWithPlural,
        'hh': relativeTimeWithPlural,
        'd': 'дзень',
        'dd': relativeTimeWithPlural,
        'M': 'месяц',
        'MM': relativeTimeWithPlural,
        'y': 'год',
        'yy': relativeTimeWithPlural
    },
    'meridiemParse': /ночы|раніцы|дня|вечара/,
    'isPM': function (_0x15a8da) {
        return /^(дня|вечара)$/['test'](_0x15a8da);
    },
    'meridiem': function (_0x1c77ec, _0x609daa, _0x426f5d) {
        if (_0x1c77ec < 0x8e * 0x3b + 0x1cff + 0x1 * -0x3db5)
            return 'ночы';
        else {
            if (_0x1c77ec < 0x3a0 * -0x3 + 0x19a0 + -0xeb4)
                return 'раніцы';
            else
                return _0x1c77ec < -0x1367 + -0x14ca + 0x2842 ? 'дня' : 'вечара';
        }
    },
    'dayOfMonthOrdinalParse': /\d{1,2}-(і|ы|га)/,
    'ordinal': function (_0x4fdf62, _0x259253) {
        switch (_0x259253) {
        case 'M':
        case 'd':
        case 'DDD':
        case 'w':
        case 'W':
            return (_0x4fdf62 % (-0x1f7c + 0x9d7 + 0xd * 0x1ab) === 0x1b9e + 0xa * 0x2bf + -0x3712 || _0x4fdf62 % (0x3ba + -0xe5e + 0xaae) === 0x158d + -0xf * -0xdf + -0xb89 * 0x3) && _0x4fdf62 % (0xa75 + -0x24c1 + -0x6ac * -0x4) !== 0x67 * 0x3e + 0x6 * -0x2df + -0x7ac && _0x4fdf62 % (0xe9 * 0x8 + 0x5 * -0x3b3 + -0x1 * -0xb9b) !== -0xba8 + 0x253f + -0xe * 0x1d3 ? _0x4fdf62 + '-і' : _0x4fdf62 + '-ы';
        case 'D':
            return _0x4fdf62 + '-га';
        default:
            return _0x4fdf62;
        }
    },
    'week': {
        'dow': 0x1,
        'doy': 0x7
    }
});
