'use strict';
angular['module']('ngLocale', [], [
    '$provide',
    function (_0x22020d) {
        var _0x369594 = {
                'XJxOJ': 'zero',
                'ZyNbQ': 'one',
                'eEUAj': 'two',
                'werPk': 'few',
                'QoQEH': 'many',
                'Ldfas': 'other',
                'vzlhQ': '$locale',
                'bkzTw': 'ก่อนเที่ยง',
                'mBXML': 'หลังเที่ยง',
                'lFYvB': 'วันอาทิตย์',
                'aesop': 'วันจันทร์',
                'jORaS': 'วันอังคาร',
                'fOWhy': 'วันพุธ',
                'oQDYC': 'วันพฤหัสบดี',
                'cbTUS': 'วันศุกร์',
                'ApDhW': 'วันเสาร์',
                'elktq': 'ปีก่อนคริสต์ศักราช',
                'Ensdz': 'คริสต์ศักราช',
                'gInIG': 'ปีก่อน\x20ค.ศ.',
                'xDAQq': 'ค.ศ.',
                'UeAUV': 'มกราคม',
                'ENjYc': 'กุมภาพันธ์',
                'PiyOW': 'มีนาคม',
                'cvPnz': 'เมษายน',
                'VvFeU': 'พฤษภาคม',
                'TVCrA': 'มิถุนายน',
                'EPVMP': 'กรกฎาคม',
                'mwKwk': 'สิงหาคม',
                'qKWBv': 'กันยายน',
                'fEoRp': 'ตุลาคม',
                'xglsz': 'พฤศจิกายน',
                'PzZJU': 'ธันวาคม',
                'yyHtm': 'อา.',
                'yZbIW': 'พฤ.',
                'gMIdO': 'ม.ค.',
                'jYxVt': 'ก.พ.',
                'AfiEo': 'มี.ค.',
                'IAjUE': 'เม.ย.',
                'kVoPs': 'พ.ค.',
                'qESLE': 'มิ.ย.',
                'NZIdd': 'ก.ค.',
                'inTmO': 'ส.ค.',
                'xjiAX': 'ก.ย.',
                'HqDuZ': 'ต.ค.',
                'jBQUy': 'พ.ย.',
                'CNydr': 'ธ.ค.',
                'fsfmw': 'EEEEที่\x20d\x20MMMM\x20G\x20y',
                'XRivI': 'd\x20MMMM\x20G\x20y',
                'qkeMH': 'd\x20MMM\x20y\x20HH:mm:ss',
                'LvSaW': 'd\x20MMM\x20y',
                'XjeRV': 'HH:mm:ss',
                'AWpUH': 'd/M/yy\x20HH:mm',
                'fnVCB': 'd/M/yy',
                'bJUsG': 'HH:mm'
            }, _0x372e64 = {
                'ZERO': _0x369594['XJxOJ'],
                'ONE': _0x369594['ZyNbQ'],
                'TWO': _0x369594['eEUAj'],
                'FEW': _0x369594['werPk'],
                'MANY': _0x369594['QoQEH'],
                'OTHER': _0x369594['Ldfas']
            };
        _0x22020d['value'](_0x369594['vzlhQ'], {
            'DATETIME_FORMATS': {
                'AMPMS': [
                    _0x369594['bkzTw'],
                    _0x369594['mBXML']
                ],
                'DAY': [
                    _0x369594['lFYvB'],
                    _0x369594['aesop'],
                    _0x369594['jORaS'],
                    _0x369594['fOWhy'],
                    _0x369594['oQDYC'],
                    _0x369594['cbTUS'],
                    _0x369594['ApDhW']
                ],
                'ERANAMES': [
                    _0x369594['elktq'],
                    _0x369594['Ensdz']
                ],
                'ERAS': [
                    _0x369594['gInIG'],
                    _0x369594['xDAQq']
                ],
                'FIRSTDAYOFWEEK': 0x6,
                'MONTH': [
                    _0x369594['UeAUV'],
                    _0x369594['ENjYc'],
                    _0x369594['PiyOW'],
                    _0x369594['cvPnz'],
                    _0x369594['VvFeU'],
                    _0x369594['TVCrA'],
                    _0x369594['EPVMP'],
                    _0x369594['mwKwk'],
                    _0x369594['qKWBv'],
                    _0x369594['fEoRp'],
                    _0x369594['xglsz'],
                    _0x369594['PzZJU']
                ],
                'SHORTDAY': [
                    _0x369594['yyHtm'],
                    'จ.',
                    'อ.',
                    'พ.',
                    _0x369594['yZbIW'],
                    'ศ.',
                    'ส.'
                ],
                'SHORTMONTH': [
                    _0x369594['gMIdO'],
                    _0x369594['jYxVt'],
                    _0x369594['AfiEo'],
                    _0x369594['IAjUE'],
                    _0x369594['kVoPs'],
                    _0x369594['qESLE'],
                    _0x369594['NZIdd'],
                    _0x369594['inTmO'],
                    _0x369594['xjiAX'],
                    _0x369594['HqDuZ'],
                    _0x369594['jBQUy'],
                    _0x369594['CNydr']
                ],
                'STANDALONEMONTH': [
                    _0x369594['UeAUV'],
                    _0x369594['ENjYc'],
                    _0x369594['PiyOW'],
                    _0x369594['cvPnz'],
                    _0x369594['VvFeU'],
                    _0x369594['TVCrA'],
                    _0x369594['EPVMP'],
                    _0x369594['mwKwk'],
                    _0x369594['qKWBv'],
                    _0x369594['fEoRp'],
                    _0x369594['xglsz'],
                    _0x369594['PzZJU']
                ],
                'WEEKENDRANGE': [
                    0x5,
                    0x6
                ],
                'fullDate': _0x369594['fsfmw'],
                'longDate': _0x369594['XRivI'],
                'medium': _0x369594['qkeMH'],
                'mediumDate': _0x369594['LvSaW'],
                'mediumTime': _0x369594['XjeRV'],
                'short': _0x369594['AWpUH'],
                'shortDate': _0x369594['fnVCB'],
                'shortTime': _0x369594['bJUsG']
            },
            'NUMBER_FORMATS': {
                'CURRENCY_SYM': '฿',
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
            'id': 'th',
            'localeID': 'th',
            'pluralCat': function (_0x5a9bbf, _0x334d3) {
                return _0x372e64['OTHER'];
            }
        });
    }
]);
