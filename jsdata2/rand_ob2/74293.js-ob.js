var _0x1992 = [
    '[今天]\x20LT',
    '[明天]\x20LT',
    '[下]dddd\x20LT',
    '[上]dddd\x20LT',
    'DDD',
    '%s後',
    '%s前',
    '%d\x20秒',
    '%d\x20分鐘',
    '1\x20小時',
    '%d\x20小時',
    '1\x20天',
    '%d\x20天',
    '1\x20個月',
    '%d\x20個月',
    '1\x20年',
    '%d\x20年',
    '314480tHEVam',
    '257599HUNxAr',
    '107578ZduPWb',
    '358564sxQHsR',
    '1ukYhUW',
    '3VMPpmK',
    '201869LdpTfH',
    '291485UDRYtk',
    '765556mVTUzd',
    'defineLocale',
    'zh-tw',
    '一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月',
    '1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月',
    'split',
    '星期日_星期一_星期二_星期三_星期四_星期五_星期六',
    '日_一_二_三_四_五_六',
    'HH:mm',
    'HH:mm:ss',
    'YYYY/MM/DD',
    'YYYY年M月D日dddd\x20HH:mm',
    'YYYY/M/D',
    'YYYY年M月D日',
    'YYYY年M月D日\x20HH:mm'
];
function _0x4f1f(_0x2999da, _0x5ba942) {
    return _0x4f1f = function (_0x199221, _0x4f1f40) {
        _0x199221 = _0x199221 - 0xea;
        var _0x20ee17 = _0x1992[_0x199221];
        return _0x20ee17;
    }, _0x4f1f(_0x2999da, _0x5ba942);
}
var _0x2c44e9 = _0x4f1f;
(function (_0x4b3555, _0x108052) {
    var _0xb24a5d = _0x4f1f;
    while (!![]) {
        try {
            var _0x5e4c95 = parseInt(_0xb24a5d(0xea)) + parseInt(_0xb24a5d(0xeb)) + -parseInt(_0xb24a5d(0xec)) + parseInt(_0xb24a5d(0xed)) * parseInt(_0xb24a5d(0xee)) + -parseInt(_0xb24a5d(0xef)) * -parseInt(_0xb24a5d(0xf0)) + -parseInt(_0xb24a5d(0xf1)) + -parseInt(_0xb24a5d(0xf2));
            if (_0x5e4c95 === _0x108052)
                break;
            else
                _0x4b3555['push'](_0x4b3555['shift']());
        } catch (_0x5dc7cb) {
            _0x4b3555['push'](_0x4b3555['shift']());
        }
    }
}(_0x1992, 0x5abaf));
import _0x43de1a from '../moment';
export default _0x43de1a[_0x2c44e9(0xf3)](_0x2c44e9(0xf4), {
    'months': _0x2c44e9(0xf5)['split']('_'),
    'monthsShort': _0x2c44e9(0xf6)[_0x2c44e9(0xf7)]('_'),
    'weekdays': _0x2c44e9(0xf8)[_0x2c44e9(0xf7)]('_'),
    'weekdaysShort': '週日_週一_週二_週三_週四_週五_週六'[_0x2c44e9(0xf7)]('_'),
    'weekdaysMin': _0x2c44e9(0xf9)[_0x2c44e9(0xf7)]('_'),
    'longDateFormat': {
        'LT': _0x2c44e9(0xfa),
        'LTS': _0x2c44e9(0xfb),
        'L': _0x2c44e9(0xfc),
        'LL': 'YYYY年M月D日',
        'LLL': 'YYYY年M月D日\x20HH:mm',
        'LLLL': _0x2c44e9(0xfd),
        'l': _0x2c44e9(0xfe),
        'll': _0x2c44e9(0xff),
        'lll': _0x2c44e9(0x100),
        'llll': _0x2c44e9(0xfd)
    },
    'meridiemParse': /凌晨|早上|上午|中午|下午|晚上/,
    'meridiemHour': function (_0x2f7f3b, _0x57faf7) {
        _0x2f7f3b === 0xc && (_0x2f7f3b = 0x0);
        if (_0x57faf7 === '凌晨' || _0x57faf7 === '早上' || _0x57faf7 === '上午')
            return _0x2f7f3b;
        else {
            if (_0x57faf7 === '中午')
                return _0x2f7f3b >= 0xb ? _0x2f7f3b : _0x2f7f3b + 0xc;
            else {
                if (_0x57faf7 === '下午' || _0x57faf7 === '晚上')
                    return _0x2f7f3b + 0xc;
            }
        }
    },
    'meridiem': function (_0x95fce6, _0x3f83aa, _0x479c72) {
        var _0x38352a = _0x95fce6 * 0x64 + _0x3f83aa;
        if (_0x38352a < 0x258)
            return '凌晨';
        else {
            if (_0x38352a < 0x384)
                return '早上';
            else {
                if (_0x38352a < 0x46a)
                    return '上午';
                else {
                    if (_0x38352a < 0x4ce)
                        return '中午';
                    else
                        return _0x38352a < 0x708 ? '下午' : '晚上';
                }
            }
        }
    },
    'calendar': {
        'sameDay': _0x2c44e9(0x101),
        'nextDay': _0x2c44e9(0x102),
        'nextWeek': _0x2c44e9(0x103),
        'lastDay': '[昨天]\x20LT',
        'lastWeek': _0x2c44e9(0x104),
        'sameElse': 'L'
    },
    'dayOfMonthOrdinalParse': /\d{1,2}(日|月|週)/,
    'ordinal': function (_0x1ae276, _0x32ce1b) {
        var _0x57c9ed = _0x2c44e9;
        switch (_0x32ce1b) {
        case 'd':
        case 'D':
        case _0x57c9ed(0x105):
            return _0x1ae276 + '日';
        case 'M':
            return _0x1ae276 + '月';
        case 'w':
        case 'W':
            return _0x1ae276 + '週';
        default:
            return _0x1ae276;
        }
    },
    'relativeTime': {
        'future': _0x2c44e9(0x106),
        'past': _0x2c44e9(0x107),
        's': '幾秒',
        'ss': _0x2c44e9(0x108),
        'm': '1\x20分鐘',
        'mm': _0x2c44e9(0x109),
        'h': _0x2c44e9(0x10a),
        'hh': _0x2c44e9(0x10b),
        'd': _0x2c44e9(0x10c),
        'dd': _0x2c44e9(0x10d),
        'M': _0x2c44e9(0x10e),
        'MM': _0x2c44e9(0x10f),
        'y': _0x2c44e9(0x110),
        'yy': _0x2c44e9(0x111)
    }
});
