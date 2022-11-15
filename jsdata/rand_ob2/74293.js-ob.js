var _0x1688 = [
    '359590EPgEfi',
    '132274EJwnrM',
    '1119809yrLwOz',
    '1pnVdhr',
    '753htyuhD',
    '1373MBNZhP',
    '3121121WlxitC',
    'defineLocale',
    '一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月',
    'split',
    '星期日_星期一_星期二_星期三_星期四_星期五_星期六',
    '週日_週一_週二_週三_週四_週五_週六',
    '日_一_二_三_四_五_六',
    'HH:mm',
    'HH:mm:ss',
    'YYYY年M月D日\x20HH:mm',
    'YYYY年M月D日dddd\x20HH:mm',
    'YYYY/M/D',
    'YYYY年M月D日',
    '[今天]\x20LT',
    '[明天]\x20LT',
    '[下]dddd\x20LT',
    '[上]dddd\x20LT',
    'DDD',
    '%s後',
    '%d\x20秒',
    '1\x20分鐘',
    '%d\x20分鐘',
    '1\x20小時',
    '1\x20天',
    '1\x20個月',
    '%d\x20個月',
    '1\x20年',
    '1137031SbNJwY',
    '514113ZBCWdG',
    '1ALsVzJ'
];
var _0x523d61 = _0x5703;
function _0x5703(_0x202dd3, _0xeaa140) {
    return _0x5703 = function (_0x16881c, _0x57035b) {
        _0x16881c = _0x16881c - 0x9f;
        var _0xec020f = _0x1688[_0x16881c];
        return _0xec020f;
    }, _0x5703(_0x202dd3, _0xeaa140);
}
(function (_0x4dbeb8, _0x2bb8f2) {
    var _0x4af3b9 = _0x5703;
    while (!![]) {
        try {
            var _0x59ba79 = -parseInt(_0x4af3b9(0x9f)) + parseInt(_0x4af3b9(0xa0)) * parseInt(_0x4af3b9(0xa1)) + parseInt(_0x4af3b9(0xa2)) + -parseInt(_0x4af3b9(0xa3)) + -parseInt(_0x4af3b9(0xa4)) * parseInt(_0x4af3b9(0xa5)) + parseInt(_0x4af3b9(0xa6)) * -parseInt(_0x4af3b9(0xa7)) + parseInt(_0x4af3b9(0xa8));
            if (_0x59ba79 === _0x2bb8f2)
                break;
            else
                _0x4dbeb8['push'](_0x4dbeb8['shift']());
        } catch (_0x5e8a91) {
            _0x4dbeb8['push'](_0x4dbeb8['shift']());
        }
    }
}(_0x1688, 0x8b9c1));
import _0x213da8 from '../moment';
export default _0x213da8[_0x523d61(0xa9)]('zh-tw', {
    'months': _0x523d61(0xaa)[_0x523d61(0xab)]('_'),
    'monthsShort': '1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月'[_0x523d61(0xab)]('_'),
    'weekdays': _0x523d61(0xac)[_0x523d61(0xab)]('_'),
    'weekdaysShort': _0x523d61(0xad)[_0x523d61(0xab)]('_'),
    'weekdaysMin': _0x523d61(0xae)[_0x523d61(0xab)]('_'),
    'longDateFormat': {
        'LT': _0x523d61(0xaf),
        'LTS': _0x523d61(0xb0),
        'L': 'YYYY/MM/DD',
        'LL': 'YYYY年M月D日',
        'LLL': _0x523d61(0xb1),
        'LLLL': _0x523d61(0xb2),
        'l': _0x523d61(0xb3),
        'll': _0x523d61(0xb4),
        'lll': _0x523d61(0xb1),
        'llll': _0x523d61(0xb2)
    },
    'meridiemParse': /凌晨|早上|上午|中午|下午|晚上/,
    'meridiemHour': function (_0x3eac92, _0x37302b) {
        _0x3eac92 === 0xc && (_0x3eac92 = 0x0);
        if (_0x37302b === '凌晨' || _0x37302b === '早上' || _0x37302b === '上午')
            return _0x3eac92;
        else {
            if (_0x37302b === '中午')
                return _0x3eac92 >= 0xb ? _0x3eac92 : _0x3eac92 + 0xc;
            else {
                if (_0x37302b === '下午' || _0x37302b === '晚上')
                    return _0x3eac92 + 0xc;
            }
        }
    },
    'meridiem': function (_0x5184a3, _0x267a66, _0x513921) {
        var _0x1d6dda = _0x5184a3 * 0x64 + _0x267a66;
        if (_0x1d6dda < 0x258)
            return '凌晨';
        else {
            if (_0x1d6dda < 0x384)
                return '早上';
            else {
                if (_0x1d6dda < 0x46a)
                    return '上午';
                else {
                    if (_0x1d6dda < 0x4ce)
                        return '中午';
                    else
                        return _0x1d6dda < 0x708 ? '下午' : '晚上';
                }
            }
        }
    },
    'calendar': {
        'sameDay': _0x523d61(0xb5),
        'nextDay': _0x523d61(0xb6),
        'nextWeek': _0x523d61(0xb7),
        'lastDay': '[昨天]\x20LT',
        'lastWeek': _0x523d61(0xb8),
        'sameElse': 'L'
    },
    'dayOfMonthOrdinalParse': /\d{1,2}(日|月|週)/,
    'ordinal': function (_0x19bd0f, _0x434d20) {
        var _0x3f1b9d = _0x523d61;
        switch (_0x434d20) {
        case 'd':
        case 'D':
        case _0x3f1b9d(0xb9):
            return _0x19bd0f + '日';
        case 'M':
            return _0x19bd0f + '月';
        case 'w':
        case 'W':
            return _0x19bd0f + '週';
        default:
            return _0x19bd0f;
        }
    },
    'relativeTime': {
        'future': _0x523d61(0xba),
        'past': '%s前',
        's': '幾秒',
        'ss': _0x523d61(0xbb),
        'm': _0x523d61(0xbc),
        'mm': _0x523d61(0xbd),
        'h': _0x523d61(0xbe),
        'hh': '%d\x20小時',
        'd': _0x523d61(0xbf),
        'dd': '%d\x20天',
        'M': _0x523d61(0xc0),
        'MM': _0x523d61(0xc1),
        'y': _0x523d61(0xc2),
        'yy': '%d\x20年'
    }
});
