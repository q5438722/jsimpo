import _0x1d66b3 from '../moment';
export default _0x1d66b3['defineLocale']('zh-tw', {
    'months': '一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月'['split']('_'),
    'monthsShort': '1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月'['split']('_'),
    'weekdays': '星期日_星期一_星期二_星期三_星期四_星期五_星期六'['split']('_'),
    'weekdaysShort': '週日_週一_週二_週三_週四_週五_週六'['split']('_'),
    'weekdaysMin': '日_一_二_三_四_五_六'['split']('_'),
    'longDateFormat': {
        'LT': 'HH:mm',
        'LTS': 'HH:mm:ss',
        'L': 'YYYY/MM/DD',
        'LL': 'YYYY年M月D日',
        'LLL': 'YYYY年M月D日\x20HH:mm',
        'LLLL': 'YYYY年M月D日dddd\x20HH:mm',
        'l': 'YYYY/M/D',
        'll': 'YYYY年M月D日',
        'lll': 'YYYY年M月D日\x20HH:mm',
        'llll': 'YYYY年M月D日dddd\x20HH:mm'
    },
    'meridiemParse': /凌晨|早上|上午|中午|下午|晚上/,
    'meridiemHour': function (_0x31bcb5, _0x404ec3) {
        _0x31bcb5 === -0xccc * 0x1 + 0x10c + 0x2f3 * 0x4 && (_0x31bcb5 = 0x1 * -0x241 + -0x13 * -0x14e + -0x1689);
        if (_0x404ec3 === '凌晨' || _0x404ec3 === '早上' || _0x404ec3 === '上午')
            return _0x31bcb5;
        else {
            if (_0x404ec3 === '中午')
                return _0x31bcb5 >= -0x4d + -0x43 * -0x1 + 0x1 * 0x15 ? _0x31bcb5 : _0x31bcb5 + (0x1 * -0xa13 + -0x203 * -0x7 + -0x3f6);
            else {
                if (_0x404ec3 === '下午' || _0x404ec3 === '晚上')
                    return _0x31bcb5 + (0x205c + 0x22a3 + -0x24f * 0x1d);
            }
        }
    },
    'meridiem': function (_0x2a0ace, _0x526316, _0x2263ba) {
        var _0x478b07 = _0x2a0ace * (0x3a9 * 0x5 + 0x49b + -0x1684) + _0x526316;
        if (_0x478b07 < 0x15e5 + 0x20d4 + -0x35 * 0xfd)
            return '凌晨';
        else {
            if (_0x478b07 < -0x1e08 + -0x1116 + 0x2 * 0x1951)
                return '早上';
            else {
                if (_0x478b07 < 0x1902 + -0x6bd + -0xddb)
                    return '上午';
                else {
                    if (_0x478b07 < -0x259b + 0xaf7 + 0x73 * 0x46)
                        return '中午';
                    else
                        return _0x478b07 < 0x107f + -0x81 * 0x1 + -0x8f6 ? '下午' : '晚上';
                }
            }
        }
    },
    'calendar': {
        'sameDay': '[今天]\x20LT',
        'nextDay': '[明天]\x20LT',
        'nextWeek': '[下]dddd\x20LT',
        'lastDay': '[昨天]\x20LT',
        'lastWeek': '[上]dddd\x20LT',
        'sameElse': 'L'
    },
    'dayOfMonthOrdinalParse': /\d{1,2}(日|月|週)/,
    'ordinal': function (_0x2e5351, _0x4634cb) {
        switch (_0x4634cb) {
        case 'd':
        case 'D':
        case 'DDD':
            return _0x2e5351 + '日';
        case 'M':
            return _0x2e5351 + '月';
        case 'w':
        case 'W':
            return _0x2e5351 + '週';
        default:
            return _0x2e5351;
        }
    },
    'relativeTime': {
        'future': '%s後',
        'past': '%s前',
        's': '幾秒',
        'ss': '%d\x20秒',
        'm': '1\x20分鐘',
        'mm': '%d\x20分鐘',
        'h': '1\x20小時',
        'hh': '%d\x20小時',
        'd': '1\x20天',
        'dd': '%d\x20天',
        'M': '1\x20個月',
        'MM': '%d\x20個月',
        'y': '1\x20年',
        'yy': '%d\x20年'
    }
});
