'use strict';
angular['module']('ngLocale', [], [
    '$provide',
    function (_0x1a71de) {
        var _0x5651d7 = {
                'GcCpy': 'zero',
                'OoQvc': 'one',
                'RfXht': 'two',
                'eOdOx': 'few',
                'DRkJf': 'many',
                'Hgpel': 'other',
                'VJqvw': '$locale',
                'auaxz': '星期日',
                'YBrYB': '星期一',
                'aqkdr': '星期二',
                'YVBWa': '星期三',
                'paBXQ': '星期四',
                'OvVED': '星期五',
                'ABzVf': '星期六',
                'Wcota': '公元前',
                'afPXS': '10月',
                'aLUwB': '11月',
                'bODXo': '12月',
                'nELMm': 'y年M月d日EEEE',
                'fAhgX': 'y年M月d日',
                'aQcXg': 'y年M月d日\x20ah:mm:ss',
                'XFHes': 'ah:mm:ss',
                'XZcYV': 'd/M/y\x20ah:mm',
                'yGAnD': 'd/M/y',
                'FuhBf': 'ah:mm',
                'DOHrr': 'zh-hant-hk',
                'CCpQh': 'zh_Hant_HK'
            }, _0x4a84a4 = {
                'ZERO': _0x5651d7['GcCpy'],
                'ONE': _0x5651d7['OoQvc'],
                'TWO': _0x5651d7['RfXht'],
                'FEW': _0x5651d7['eOdOx'],
                'MANY': _0x5651d7['DRkJf'],
                'OTHER': _0x5651d7['Hgpel']
            };
        _0x1a71de['value'](_0x5651d7['VJqvw'], {
            'DATETIME_FORMATS': {
                'AMPMS': [
                    '上午',
                    '下午'
                ],
                'DAY': [
                    _0x5651d7['auaxz'],
                    _0x5651d7['YBrYB'],
                    _0x5651d7['aqkdr'],
                    _0x5651d7['YVBWa'],
                    _0x5651d7['paBXQ'],
                    _0x5651d7['OvVED'],
                    _0x5651d7['ABzVf']
                ],
                'ERANAMES': [
                    _0x5651d7['Wcota'],
                    '公元'
                ],
                'ERAS': [
                    _0x5651d7['Wcota'],
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
                    _0x5651d7['afPXS'],
                    _0x5651d7['aLUwB'],
                    _0x5651d7['bODXo']
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
                    _0x5651d7['afPXS'],
                    _0x5651d7['aLUwB'],
                    _0x5651d7['bODXo']
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
                    _0x5651d7['afPXS'],
                    _0x5651d7['aLUwB'],
                    _0x5651d7['bODXo']
                ],
                'WEEKENDRANGE': [
                    0x5,
                    0x6
                ],
                'fullDate': _0x5651d7['nELMm'],
                'longDate': _0x5651d7['fAhgX'],
                'medium': _0x5651d7['aQcXg'],
                'mediumDate': _0x5651d7['fAhgX'],
                'mediumTime': _0x5651d7['XFHes'],
                'short': _0x5651d7['XZcYV'],
                'shortDate': _0x5651d7['yGAnD'],
                'shortTime': _0x5651d7['FuhBf']
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
            'id': _0x5651d7['DOHrr'],
            'localeID': _0x5651d7['CCpQh'],
            'pluralCat': function (_0x5d4460, _0x1faac4) {
                return _0x4a84a4['OTHER'];
            }
        });
    }
]);
