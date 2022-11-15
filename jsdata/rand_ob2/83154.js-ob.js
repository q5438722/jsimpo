'use strict';
var _0x3e13 = [
    '$provide',
    'zero',
    'one',
    'many',
    'other',
    'value',
    '星期日',
    '星期一',
    '星期二',
    '星期三',
    '星期四',
    '星期六',
    '公元前',
    '10月',
    '11月',
    '12月',
    'y年M月d日EEEE',
    'y年M月d日',
    'y年M月d日\x20ah:mm:ss',
    'ah:mm:ss',
    'd/M/y\x20ah:mm',
    'ah:mm',
    'zh-hant-hk',
    '10fxPNxJ',
    '13880yrbPbR',
    '48620iwlyTc',
    '1105954wKuNhe',
    '1ygHqCP',
    '1816687LEWctv',
    '3523HZmLFV',
    '210SwmlRA',
    '194343HSpfhx',
    '2lITzfz',
    '2390779JDCQOt',
    '1UucPgc',
    'module',
    'ngLocale'
];
var _0x47046c = _0x3d01;
function _0x3d01(_0x1b8070, _0x1ffccf) {
    return _0x3d01 = function (_0x3e13b1, _0x3d0185) {
        _0x3e13b1 = _0x3e13b1 - 0x16a;
        var _0x22c640 = _0x3e13[_0x3e13b1];
        return _0x22c640;
    }, _0x3d01(_0x1b8070, _0x1ffccf);
}
(function (_0x29535e, _0x2a332e) {
    var _0x32e13f = _0x3d01;
    while (!![]) {
        try {
            var _0x5ed075 = parseInt(_0x32e13f(0x16a)) * parseInt(_0x32e13f(0x16b)) + -parseInt(_0x32e13f(0x16c)) + parseInt(_0x32e13f(0x16d)) + parseInt(_0x32e13f(0x16e)) * parseInt(_0x32e13f(0x16f)) + -parseInt(_0x32e13f(0x170)) * -parseInt(_0x32e13f(0x171)) + -parseInt(_0x32e13f(0x172)) * parseInt(_0x32e13f(0x173)) + -parseInt(_0x32e13f(0x174)) * parseInt(_0x32e13f(0x175));
            if (_0x5ed075 === _0x2a332e)
                break;
            else
                _0x29535e['push'](_0x29535e['shift']());
        } catch (_0x216bef) {
            _0x29535e['push'](_0x29535e['shift']());
        }
    }
}(_0x3e13, 0xed982));
angular[_0x47046c(0x176)](_0x47046c(0x177), [], [
    _0x47046c(0x178),
    function (_0x40e946) {
        var _0x450b59 = _0x47046c, _0x282909 = {
                'ZERO': _0x450b59(0x179),
                'ONE': _0x450b59(0x17a),
                'TWO': 'two',
                'FEW': 'few',
                'MANY': _0x450b59(0x17b),
                'OTHER': _0x450b59(0x17c)
            };
        _0x40e946[_0x450b59(0x17d)]('$locale', {
            'DATETIME_FORMATS': {
                'AMPMS': [
                    '上午',
                    '下午'
                ],
                'DAY': [
                    _0x450b59(0x17e),
                    _0x450b59(0x17f),
                    _0x450b59(0x180),
                    _0x450b59(0x181),
                    _0x450b59(0x182),
                    '星期五',
                    _0x450b59(0x183)
                ],
                'ERANAMES': [
                    _0x450b59(0x184),
                    '公元'
                ],
                'ERAS': [
                    '公元前',
                    '公元'
                ],
                'FIRSTDAYOFWEEK': 0x6,
                'MONTH': [
                    '1月',
                    '2月',
                    '3月',
                    '4月',
                    '5月',
                    '6月',
                    '7月',
                    '8月',
                    '9月',
                    _0x450b59(0x185),
                    _0x450b59(0x186),
                    '12月'
                ],
                'SHORTDAY': [
                    '週日',
                    '週一',
                    '週二',
                    '週三',
                    '週四',
                    '週五',
                    '週六'
                ],
                'SHORTMONTH': [
                    '1月',
                    '2月',
                    '3月',
                    '4月',
                    '5月',
                    '6月',
                    '7月',
                    '8月',
                    '9月',
                    '10月',
                    '11月',
                    _0x450b59(0x187)
                ],
                'STANDALONEMONTH': [
                    '1月',
                    '2月',
                    '3月',
                    '4月',
                    '5月',
                    '6月',
                    '7月',
                    '8月',
                    '9月',
                    _0x450b59(0x185),
                    _0x450b59(0x186),
                    _0x450b59(0x187)
                ],
                'WEEKENDRANGE': [
                    0x5,
                    0x6
                ],
                'fullDate': _0x450b59(0x188),
                'longDate': _0x450b59(0x189),
                'medium': _0x450b59(0x18a),
                'mediumDate': _0x450b59(0x189),
                'mediumTime': _0x450b59(0x18b),
                'short': _0x450b59(0x18c),
                'shortDate': 'd/M/y',
                'shortTime': _0x450b59(0x18d)
            },
            'NUMBER_FORMATS': {
                'CURRENCY_SYM': '$',
                'DECIMAL_SEP': '.',
                'GROUP_SEP': ',',
                'PATTERNS': [
                    {
                        'gSize': 0x3,
                        'lgSize': 0x3,
                        'maxFrac': 0x3,
                        'minFrac': 0x0,
                        'minInt': 0x1,
                        'negPre': '-',
                        'negSuf': '',
                        'posPre': '',
                        'posSuf': ''
                    },
                    {
                        'gSize': 0x3,
                        'lgSize': 0x3,
                        'maxFrac': 0x2,
                        'minFrac': 0x2,
                        'minInt': 0x1,
                        'negPre': '-¤',
                        'negSuf': '',
                        'posPre': '¤',
                        'posSuf': ''
                    }
                ]
            },
            'id': _0x450b59(0x18e),
            'localeID': 'zh_Hant_HK',
            'pluralCat': function (_0x24bb2b, _0x1e7fdd) {
                return _0x282909['OTHER'];
            }
        });
    }
]);
