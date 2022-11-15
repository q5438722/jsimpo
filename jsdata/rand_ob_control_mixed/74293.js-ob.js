import _0x3d073d from '../moment';
export default _0x3d073d['defineLocale']('zh-tw', {
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
    'meridiemHour': function (_0x5aadc0, _0x2479f8) {
        var _0x39ea61 = {
            'FOtQm': function (_0x1c9515, _0x4c773e) {
                return _0x1c9515 === _0x4c773e;
            },
            'CoBTf': function (_0x199ef5, _0x1d81d1) {
                return _0x199ef5 === _0x1d81d1;
            },
            'FqMmN': function (_0x33b395, _0x25265e) {
                return _0x33b395 === _0x25265e;
            },
            'LZqwp': function (_0x2ef2bd, _0x4d99b4) {
                return _0x2ef2bd === _0x4d99b4;
            },
            'XkKPF': function (_0x56ecde, _0x40c1e8) {
                return _0x56ecde >= _0x40c1e8;
            },
            'XTLyd': function (_0x5c4e37, _0x587000) {
                return _0x5c4e37 + _0x587000;
            },
            'rIHyQ': function (_0x166a54, _0x311b55) {
                return _0x166a54 === _0x311b55;
            },
            'lzIIP': function (_0x223425, _0x43f0c4) {
                return _0x223425 === _0x43f0c4;
            },
            'WdLEU': function (_0x5cdc0a, _0x4412e5) {
                return _0x5cdc0a + _0x4412e5;
            }
        };
        _0x39ea61['FOtQm'](_0x5aadc0, 0xc) && (_0x5aadc0 = 0x0);
        if (_0x39ea61['FOtQm'](_0x2479f8, '凌晨') || _0x39ea61['CoBTf'](_0x2479f8, '早上') || _0x39ea61['FqMmN'](_0x2479f8, '上午'))
            return _0x5aadc0;
        else {
            if (_0x39ea61['LZqwp'](_0x2479f8, '中午'))
                return _0x39ea61['XkKPF'](_0x5aadc0, 0xb) ? _0x5aadc0 : _0x39ea61['XTLyd'](_0x5aadc0, 0xc);
            else {
                if (_0x39ea61['rIHyQ'](_0x2479f8, '下午') || _0x39ea61['lzIIP'](_0x2479f8, '晚上'))
                    return _0x39ea61['WdLEU'](_0x5aadc0, 0xc);
            }
        }
    },
    'meridiem': function (_0x5f5658, _0x13f518, _0x89ae20) {
        var _0x91bb2e = {
                'sqFtK': function (_0x56ad96, _0x55c7c4) {
                    return _0x56ad96 + _0x55c7c4;
                },
                'INiBf': function (_0x37946f, _0x38bac9) {
                    return _0x37946f * _0x38bac9;
                },
                'ivHTM': function (_0x3b3481, _0x4dca03) {
                    return _0x3b3481 < _0x4dca03;
                },
                'FoGly': function (_0x21550c, _0x4994d3) {
                    return _0x21550c < _0x4994d3;
                }
            }, _0x44ae0c = _0x91bb2e['sqFtK'](_0x91bb2e['INiBf'](_0x5f5658, 0x64), _0x13f518);
        if (_0x91bb2e['ivHTM'](_0x44ae0c, 0x258))
            return '凌晨';
        else {
            if (_0x91bb2e['ivHTM'](_0x44ae0c, 0x384))
                return '早上';
            else {
                if (_0x91bb2e['FoGly'](_0x44ae0c, 0x46a))
                    return '上午';
                else {
                    if (_0x91bb2e['FoGly'](_0x44ae0c, 0x4ce))
                        return '中午';
                    else
                        return _0x91bb2e['FoGly'](_0x44ae0c, 0x708) ? '下午' : '晚上';
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
    'ordinal': function (_0x155d6a, _0x5eef59) {
        var _0x2f4ced = {
            'dIMkw': 'DDD',
            'JqxRk': function (_0x2cf1fb, _0x507582) {
                return _0x2cf1fb + _0x507582;
            },
            'lGGrW': function (_0x3ad5e6, _0x7d92de) {
                return _0x3ad5e6 + _0x7d92de;
            }
        };
        switch (_0x5eef59) {
        case 'd':
        case 'D':
        case _0x2f4ced['dIMkw']:
            return _0x2f4ced['JqxRk'](_0x155d6a, '日');
        case 'M':
            return _0x2f4ced['JqxRk'](_0x155d6a, '月');
        case 'w':
        case 'W':
            return _0x2f4ced['lGGrW'](_0x155d6a, '週');
        default:
            return _0x155d6a;
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
