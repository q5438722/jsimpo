'use strict';
angular['module']('ngLocale', [], [
    '$provide',
    function (_0x272b46) {
        var _0x10b73a = {
                'DRuBA': function (_0x361af, _0x1d0369) {
                    return _0x361af | _0x1d0369;
                },
                'XxiFC': function (_0x37448d, _0x43414a) {
                    return _0x37448d == _0x43414a;
                },
                'xqMdJ': function (_0x9b0004, _0x4c3ced) {
                    return _0x9b0004 == _0x4c3ced;
                },
                'RCpLO': 'zero',
                'ZpyXl': 'one',
                'mozuC': 'two',
                'bXYnm': 'few',
                'rGqoP': 'many',
                'HLKDc': 'other',
                'bfYoP': '$locale',
                'jJjcQ': 'dimanche',
                'BFjDz': 'lundi',
                'yelhI': 'mardi',
                'OwuTr': 'mercredi',
                'lrdrQ': 'jeudi',
                'mbGIa': 'vendredi',
                'VXtKk': 'samedi',
                'bOFji': 'avant\x20Jésus-Christ',
                'ftgkk': 'après\x20Jésus-Christ',
                'BCgig': 'av.\x20J.-C.',
                'VejBm': 'ap.\x20J.-C.',
                'cnyyA': 'janvier',
                'HsspK': 'février',
                'tbSPh': 'mars',
                'FTuHy': 'avril',
                'fnybo': 'mai',
                'KUZZM': 'juin',
                'SXCCH': 'juillet',
                'JcCdQ': 'août',
                'JLWbx': 'septembre',
                'Cpfmy': 'octobre',
                'FrEID': 'novembre',
                'WpDdK': 'décembre',
                'PHubi': 'dim.',
                'vdXdo': 'lun.',
                'BgkkD': 'mar.',
                'oPeda': 'mer.',
                'fQURc': 'jeu.',
                'SOGJm': 'ven.',
                'gavmB': 'sam.',
                'raooS': 'janv.',
                'LIstC': 'févr.',
                'NnImc': 'avr.',
                'WjyUk': 'juil.',
                'BeUjf': 'sept.',
                'xvGZz': 'oct.',
                'UdFmG': 'nov.',
                'sgIQF': 'déc.',
                'TfOYZ': 'EEEE\x20d\x20MMMM\x20y',
                'qwIIv': 'd\x20MMMM\x20y',
                'eprPa': 'd\x20MMM\x20y\x20HH:mm:ss',
                'YmmWQ': 'd\x20MMM\x20y',
                'zWVtH': 'HH:mm:ss',
                'qYflh': 'dd/MM/y\x20HH:mm',
                'CgTZY': 'dd/MM/y',
                'ZIanQ': 'HH:mm',
                'HBhBS': 'CFA',
                'VsFEi': 'fr-ci',
                'sDLZN': 'fr_CI'
            }, _0x2e8dcf = {
                'ZERO': _0x10b73a['RCpLO'],
                'ONE': _0x10b73a['ZpyXl'],
                'TWO': _0x10b73a['mozuC'],
                'FEW': _0x10b73a['bXYnm'],
                'MANY': _0x10b73a['rGqoP'],
                'OTHER': _0x10b73a['HLKDc']
            };
        _0x272b46['value'](_0x10b73a['bfYoP'], {
            'DATETIME_FORMATS': {
                'AMPMS': [
                    'AM',
                    'PM'
                ],
                'DAY': [
                    _0x10b73a['jJjcQ'],
                    _0x10b73a['BFjDz'],
                    _0x10b73a['yelhI'],
                    _0x10b73a['OwuTr'],
                    _0x10b73a['lrdrQ'],
                    _0x10b73a['mbGIa'],
                    _0x10b73a['VXtKk']
                ],
                'ERANAMES': [
                    _0x10b73a['bOFji'],
                    _0x10b73a['ftgkk']
                ],
                'ERAS': [
                    _0x10b73a['BCgig'],
                    _0x10b73a['VejBm']
                ],
                'FIRSTDAYOFWEEK': 0x0,
                'MONTH': [
                    _0x10b73a['cnyyA'],
                    _0x10b73a['HsspK'],
                    _0x10b73a['tbSPh'],
                    _0x10b73a['FTuHy'],
                    _0x10b73a['fnybo'],
                    _0x10b73a['KUZZM'],
                    _0x10b73a['SXCCH'],
                    _0x10b73a['JcCdQ'],
                    _0x10b73a['JLWbx'],
                    _0x10b73a['Cpfmy'],
                    _0x10b73a['FrEID'],
                    _0x10b73a['WpDdK']
                ],
                'SHORTDAY': [
                    _0x10b73a['PHubi'],
                    _0x10b73a['vdXdo'],
                    _0x10b73a['BgkkD'],
                    _0x10b73a['oPeda'],
                    _0x10b73a['fQURc'],
                    _0x10b73a['SOGJm'],
                    _0x10b73a['gavmB']
                ],
                'SHORTMONTH': [
                    _0x10b73a['raooS'],
                    _0x10b73a['LIstC'],
                    _0x10b73a['tbSPh'],
                    _0x10b73a['NnImc'],
                    _0x10b73a['fnybo'],
                    _0x10b73a['KUZZM'],
                    _0x10b73a['WjyUk'],
                    _0x10b73a['JcCdQ'],
                    _0x10b73a['BeUjf'],
                    _0x10b73a['xvGZz'],
                    _0x10b73a['UdFmG'],
                    _0x10b73a['sgIQF']
                ],
                'STANDALONEMONTH': [
                    _0x10b73a['cnyyA'],
                    _0x10b73a['HsspK'],
                    _0x10b73a['tbSPh'],
                    _0x10b73a['FTuHy'],
                    _0x10b73a['fnybo'],
                    _0x10b73a['KUZZM'],
                    _0x10b73a['SXCCH'],
                    _0x10b73a['JcCdQ'],
                    _0x10b73a['JLWbx'],
                    _0x10b73a['Cpfmy'],
                    _0x10b73a['FrEID'],
                    _0x10b73a['WpDdK']
                ],
                'WEEKENDRANGE': [
                    0x5,
                    0x6
                ],
                'fullDate': _0x10b73a['TfOYZ'],
                'longDate': _0x10b73a['qwIIv'],
                'medium': _0x10b73a['eprPa'],
                'mediumDate': _0x10b73a['YmmWQ'],
                'mediumTime': _0x10b73a['zWVtH'],
                'short': _0x10b73a['qYflh'],
                'shortDate': _0x10b73a['CgTZY'],
                'shortTime': _0x10b73a['ZIanQ']
            },
            'NUMBER_FORMATS': {
                'CURRENCY_SYM': _0x10b73a['HBhBS'],
                'DECIMAL_SEP': ',',
                'GROUP_SEP': '\u00a0',
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
                        'maxFrac': 0x0,
                        'minFrac': 0x0,
                        'minInt': 0x1,
                        'negPre': '-',
                        'negSuf': '\u00a0¤',
                        'posPre': '',
                        'posSuf': '\u00a0¤'
                    }
                ]
            },
            'id': _0x10b73a['VsFEi'],
            'localeID': _0x10b73a['sDLZN'],
            'pluralCat': function (_0x381c72, _0x440aa6) {
                var _0x383e7c = _0x10b73a['DRuBA'](_0x381c72, 0x0);
                if (_0x10b73a['XxiFC'](_0x383e7c, 0x0) || _0x10b73a['xqMdJ'](_0x383e7c, 0x1))
                    return _0x2e8dcf['ONE'];
                return _0x2e8dcf['OTHER'];
            }
        });
    }
]);
