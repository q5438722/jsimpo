'use strict';
angular['module']('ngLocale', [], [
    '$provide',
    function (_0x20c990) {
        var _0x3c407d = {
                'Kyklu': function (_0x3f99f1, _0x2a7f3e) {
                    return _0x3f99f1 + _0x2a7f3e;
                },
                'jzDlf': function (_0x47bc40, _0x582e20) {
                    return _0x47bc40 == _0x582e20;
                },
                'DzqWc': function (_0x18f708, _0x445ed0) {
                    return _0x18f708 - _0x445ed0;
                },
                'xVXWd': '4|0|1|3|2',
                'iOGLF': function (_0x653a34, _0x2be351) {
                    return _0x653a34 === _0x2be351;
                },
                'JGduy': function (_0x27c006, _0x27f3b4) {
                    return _0x27c006(_0x27f3b4);
                },
                'qeJlL': function (_0x54e5e3, _0x11a8ce) {
                    return _0x54e5e3 % _0x11a8ce;
                },
                'KUvru': function (_0x241d36, _0xe3efa6) {
                    return _0x241d36 | _0xe3efa6;
                },
                'wNseL': function (_0x4cb962, _0x5c025f) {
                    return _0x4cb962 * _0x5c025f;
                },
                'vPFQa': function (_0x4d42fe, _0x5136e1) {
                    return _0x4d42fe | _0x5136e1;
                },
                'NJDCQ': function (_0x455fa5, _0x3205e1, _0x402be2) {
                    return _0x455fa5(_0x3205e1, _0x402be2);
                },
                'OerHN': function (_0x929ae1, _0x5dff4e) {
                    return _0x929ae1 == _0x5dff4e;
                },
                'aPlbB': function (_0x47b560, _0x1a84d1) {
                    return _0x47b560 == _0x1a84d1;
                },
                'SSkPM': 'zero',
                'jkoRO': 'one',
                'toNLD': 'two',
                'tUhUT': 'few',
                'PPVJq': 'many',
                'RwxSN': 'other',
                'WGkrH': '$locale',
                'umpok': 'domenica',
                'QYsmC': 'lunedì',
                'jYPAF': 'martedì',
                'MhKUi': 'mercoledì',
                'MFbzf': 'giovedì',
                'MuMfA': 'venerdì',
                'PSpga': 'sabato',
                'JLMwx': 'avanti\x20Cristo',
                'vfuOo': 'dopo\x20Cristo',
                'tpBxq': 'a.C.',
                'fPhjw': 'd.C.',
                'WzSkI': 'gennaio',
                'uLZiC': 'febbraio',
                'suBNb': 'marzo',
                'oYWHG': 'aprile',
                'ScvGk': 'maggio',
                'mciwB': 'giugno',
                'vlGXM': 'luglio',
                'vwBXp': 'agosto',
                'gcrRQ': 'settembre',
                'hUzqF': 'ottobre',
                'Epjoh': 'novembre',
                'JkZog': 'dicembre',
                'lDXWS': 'dom',
                'NlnXh': 'lun',
                'bTiVW': 'mar',
                'mYevf': 'mer',
                'tQGxh': 'gio',
                'LlJTG': 'ven',
                'KAkQr': 'sab',
                'dqyJo': 'gen',
                'uxZyE': 'feb',
                'amTkR': 'apr',
                'XaQlM': 'mag',
                'IOlcT': 'giu',
                'NFdND': 'lug',
                'ZJyrr': 'ago',
                'OticV': 'set',
                'oEQbn': 'ott',
                'sUoBn': 'nov',
                'ffQTK': 'dic',
                'LPmoP': 'EEEE\x20d\x20MMMM\x20y',
                'RfRIq': 'd\x20MMMM\x20y',
                'lZYau': 'dd\x20MMM\x20y\x20HH:mm:ss',
                'wZFqa': 'dd\x20MMM\x20y',
                'uKcjS': 'HH:mm:ss',
                'lbsQj': 'dd/MM/yy\x20HH:mm',
                'bLAbk': 'dd/MM/yy',
                'xfcvN': 'HH:mm',
                'bXZzP': 'it-it',
                'eNaQF': 'it_IT'
            }, _0x22c933 = {
                'ZERO': _0x3c407d['SSkPM'],
                'ONE': _0x3c407d['jkoRO'],
                'TWO': _0x3c407d['toNLD'],
                'FEW': _0x3c407d['tUhUT'],
                'MANY': _0x3c407d['PPVJq'],
                'OTHER': _0x3c407d['RwxSN']
            };
        function _0x827b41(_0x35a940) {
            _0x35a940 = _0x3c407d['Kyklu'](_0x35a940, '');
            var _0x1d3eb5 = _0x35a940['indexOf']('.');
            return _0x3c407d['jzDlf'](_0x1d3eb5, -0x1) ? 0x0 : _0x3c407d['DzqWc'](_0x3c407d['DzqWc'](_0x35a940['length'], _0x1d3eb5), 0x1);
        }
        function _0x491bea(_0x152f16, _0x508e3a) {
            var _0x54c325 = _0x3c407d['xVXWd']['split']('|'), _0x5a742f = 0x0;
            while (!![]) {
                switch (_0x54c325[_0x5a742f++]) {
                case '0':
                    _0x3c407d['iOGLF'](undefined, _0x32a884) && (_0x32a884 = Math['min'](_0x3c407d['JGduy'](_0x827b41, _0x152f16), 0x3));
                    continue;
                case '1':
                    var _0x10a228 = Math['pow'](0xa, _0x32a884);
                    continue;
                case '2':
                    return {
                        'v': _0x32a884,
                        'f': _0x465041
                    };
                case '3':
                    var _0x465041 = _0x3c407d['qeJlL'](_0x3c407d['KUvru'](_0x3c407d['wNseL'](_0x152f16, _0x10a228), 0x0), _0x10a228);
                    continue;
                case '4':
                    var _0x32a884 = _0x508e3a;
                    continue;
                }
                break;
            }
        }
        _0x20c990['value'](_0x3c407d['WGkrH'], {
            'DATETIME_FORMATS': {
                'AMPMS': [
                    'AM',
                    'PM'
                ],
                'DAY': [
                    _0x3c407d['umpok'],
                    _0x3c407d['QYsmC'],
                    _0x3c407d['jYPAF'],
                    _0x3c407d['MhKUi'],
                    _0x3c407d['MFbzf'],
                    _0x3c407d['MuMfA'],
                    _0x3c407d['PSpga']
                ],
                'ERANAMES': [
                    _0x3c407d['JLMwx'],
                    _0x3c407d['vfuOo']
                ],
                'ERAS': [
                    _0x3c407d['tpBxq'],
                    _0x3c407d['fPhjw']
                ],
                'FIRSTDAYOFWEEK': 0x0,
                'MONTH': [
                    _0x3c407d['WzSkI'],
                    _0x3c407d['uLZiC'],
                    _0x3c407d['suBNb'],
                    _0x3c407d['oYWHG'],
                    _0x3c407d['ScvGk'],
                    _0x3c407d['mciwB'],
                    _0x3c407d['vlGXM'],
                    _0x3c407d['vwBXp'],
                    _0x3c407d['gcrRQ'],
                    _0x3c407d['hUzqF'],
                    _0x3c407d['Epjoh'],
                    _0x3c407d['JkZog']
                ],
                'SHORTDAY': [
                    _0x3c407d['lDXWS'],
                    _0x3c407d['NlnXh'],
                    _0x3c407d['bTiVW'],
                    _0x3c407d['mYevf'],
                    _0x3c407d['tQGxh'],
                    _0x3c407d['LlJTG'],
                    _0x3c407d['KAkQr']
                ],
                'SHORTMONTH': [
                    _0x3c407d['dqyJo'],
                    _0x3c407d['uxZyE'],
                    _0x3c407d['bTiVW'],
                    _0x3c407d['amTkR'],
                    _0x3c407d['XaQlM'],
                    _0x3c407d['IOlcT'],
                    _0x3c407d['NFdND'],
                    _0x3c407d['ZJyrr'],
                    _0x3c407d['OticV'],
                    _0x3c407d['oEQbn'],
                    _0x3c407d['sUoBn'],
                    _0x3c407d['ffQTK']
                ],
                'STANDALONEMONTH': [
                    _0x3c407d['WzSkI'],
                    _0x3c407d['uLZiC'],
                    _0x3c407d['suBNb'],
                    _0x3c407d['oYWHG'],
                    _0x3c407d['ScvGk'],
                    _0x3c407d['mciwB'],
                    _0x3c407d['vlGXM'],
                    _0x3c407d['vwBXp'],
                    _0x3c407d['gcrRQ'],
                    _0x3c407d['hUzqF'],
                    _0x3c407d['Epjoh'],
                    _0x3c407d['JkZog']
                ],
                'WEEKENDRANGE': [
                    0x5,
                    0x6
                ],
                'fullDate': _0x3c407d['LPmoP'],
                'longDate': _0x3c407d['RfRIq'],
                'medium': _0x3c407d['lZYau'],
                'mediumDate': _0x3c407d['wZFqa'],
                'mediumTime': _0x3c407d['uKcjS'],
                'short': _0x3c407d['lbsQj'],
                'shortDate': _0x3c407d['bLAbk'],
                'shortTime': _0x3c407d['xfcvN']
            },
            'NUMBER_FORMATS': {
                'CURRENCY_SYM': '€',
                'DECIMAL_SEP': ',',
                'GROUP_SEP': '.',
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
                        'negPre': '-',
                        'negSuf': '\u00a0¤',
                        'posPre': '',
                        'posSuf': '\u00a0¤'
                    }
                ]
            },
            'id': _0x3c407d['bXZzP'],
            'localeID': _0x3c407d['eNaQF'],
            'pluralCat': function (_0x52c360, _0x1cd95c) {
                var _0x59c736 = _0x3c407d['vPFQa'](_0x52c360, 0x0), _0x206f94 = _0x3c407d['NJDCQ'](_0x491bea, _0x52c360, _0x1cd95c);
                if (_0x3c407d['OerHN'](_0x59c736, 0x1) && _0x3c407d['aPlbB'](_0x206f94['v'], 0x0))
                    return _0x22c933['ONE'];
                return _0x22c933['OTHER'];
            }
        });
    }
]);
