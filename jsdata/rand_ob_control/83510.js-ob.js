'use strict';
angular['module']('ngLocale', [], [
    '$provide',
    function (_0x3dd064) {
        var _0x599488 = {
                'SeQox': function (_0x28d377, _0x2b4536) {
                    return _0x28d377 | _0x2b4536;
                },
                'OtOTR': function (_0x2e9737, _0x17bbb1) {
                    return _0x2e9737 >= _0x17bbb1;
                },
                'Lakbx': function (_0x14b042, _0x23cd2b) {
                    return _0x14b042 <= _0x23cd2b;
                },
                'RTBeb': 'zero',
                'DnpXJ': 'one',
                'GSxpo': 'two',
                'LQCwb': 'few',
                'vkJbv': 'many',
                'mwsgt': 'other',
                'xwJXj': '$locale',
                'WnMdA': 'da\x20manhã',
                'XWBdb': 'da\x20tarde',
                'AYRoj': 'domingo',
                'NRwUL': 'segunda-feira',
                'MzeiY': 'terça-feira',
                'LMFdV': 'quarta-feira',
                'ZPMhl': 'quinta-feira',
                'UBqhf': 'sexta-feira',
                'usZhm': 'sábado',
                'VucSP': 'antes\x20de\x20Cristo',
                'dgWmx': 'depois\x20de\x20Cristo',
                'hhWFc': 'a.C.',
                'wxTpM': 'd.C.',
                'rcwQP': 'janeiro',
                'PHSZK': 'fevereiro',
                'rMFHY': 'março',
                'MbHcX': 'abril',
                'Maumc': 'maio',
                'MfbSf': 'junho',
                'WbYCp': 'julho',
                'uQnDF': 'agosto',
                'VerAK': 'setembro',
                'KfXVQ': 'outubro',
                'lFpiv': 'novembro',
                'FpvYX': 'dezembro',
                'YMpls': 'segunda',
                'bHKuh': 'terça',
                'iDyBg': 'quarta',
                'igzEV': 'quinta',
                'iJyMq': 'sexta',
                'zAUBL': 'jan',
                'QVjnK': 'fev',
                'cyoIf': 'mar',
                'FSZxp': 'abr',
                'IFWYr': 'mai',
                'hRSTs': 'jun',
                'zRLlZ': 'jul',
                'rbTcM': 'ago',
                'yRuZf': 'set',
                'unmOW': 'out',
                'EBRCX': 'nov',
                'VLogj': 'dez',
                'VpSPV': 'EEEE,\x20d\x20\x27de\x27\x20MMMM\x20\x27de\x27\x20y',
                'qmzma': 'd\x20\x27de\x27\x20MMMM\x20\x27de\x27\x20y',
                'PkaKC': 'dd/MM/y\x20HH:mm:ss',
                'gpKgK': 'dd/MM/y',
                'FtvCF': 'HH:mm:ss',
                'xvXaV': 'dd/MM/yy\x20HH:mm',
                'jEXPJ': 'dd/MM/yy',
                'RVAGN': 'HH:mm',
                'shLne': 'pt-st',
                'rIpIE': 'pt_ST'
            }, _0xc0a7ab = {
                'ZERO': _0x599488['RTBeb'],
                'ONE': _0x599488['DnpXJ'],
                'TWO': _0x599488['GSxpo'],
                'FEW': _0x599488['LQCwb'],
                'MANY': _0x599488['vkJbv'],
                'OTHER': _0x599488['mwsgt']
            };
        _0x3dd064['value'](_0x599488['xwJXj'], {
            'DATETIME_FORMATS': {
                'AMPMS': [
                    _0x599488['WnMdA'],
                    _0x599488['XWBdb']
                ],
                'DAY': [
                    _0x599488['AYRoj'],
                    _0x599488['NRwUL'],
                    _0x599488['MzeiY'],
                    _0x599488['LMFdV'],
                    _0x599488['ZPMhl'],
                    _0x599488['UBqhf'],
                    _0x599488['usZhm']
                ],
                'ERANAMES': [
                    _0x599488['VucSP'],
                    _0x599488['dgWmx']
                ],
                'ERAS': [
                    _0x599488['hhWFc'],
                    _0x599488['wxTpM']
                ],
                'FIRSTDAYOFWEEK': 0x0,
                'MONTH': [
                    _0x599488['rcwQP'],
                    _0x599488['PHSZK'],
                    _0x599488['rMFHY'],
                    _0x599488['MbHcX'],
                    _0x599488['Maumc'],
                    _0x599488['MfbSf'],
                    _0x599488['WbYCp'],
                    _0x599488['uQnDF'],
                    _0x599488['VerAK'],
                    _0x599488['KfXVQ'],
                    _0x599488['lFpiv'],
                    _0x599488['FpvYX']
                ],
                'SHORTDAY': [
                    _0x599488['AYRoj'],
                    _0x599488['YMpls'],
                    _0x599488['bHKuh'],
                    _0x599488['iDyBg'],
                    _0x599488['igzEV'],
                    _0x599488['iJyMq'],
                    _0x599488['usZhm']
                ],
                'SHORTMONTH': [
                    _0x599488['zAUBL'],
                    _0x599488['QVjnK'],
                    _0x599488['cyoIf'],
                    _0x599488['FSZxp'],
                    _0x599488['IFWYr'],
                    _0x599488['hRSTs'],
                    _0x599488['zRLlZ'],
                    _0x599488['rbTcM'],
                    _0x599488['yRuZf'],
                    _0x599488['unmOW'],
                    _0x599488['EBRCX'],
                    _0x599488['VLogj']
                ],
                'STANDALONEMONTH': [
                    _0x599488['rcwQP'],
                    _0x599488['PHSZK'],
                    _0x599488['rMFHY'],
                    _0x599488['MbHcX'],
                    _0x599488['Maumc'],
                    _0x599488['MfbSf'],
                    _0x599488['WbYCp'],
                    _0x599488['uQnDF'],
                    _0x599488['VerAK'],
                    _0x599488['KfXVQ'],
                    _0x599488['lFpiv'],
                    _0x599488['FpvYX']
                ],
                'WEEKENDRANGE': [
                    0x5,
                    0x6
                ],
                'fullDate': _0x599488['VpSPV'],
                'longDate': _0x599488['qmzma'],
                'medium': _0x599488['PkaKC'],
                'mediumDate': _0x599488['gpKgK'],
                'mediumTime': _0x599488['FtvCF'],
                'short': _0x599488['xvXaV'],
                'shortDate': _0x599488['jEXPJ'],
                'shortTime': _0x599488['RVAGN']
            },
            'NUMBER_FORMATS': {
                'CURRENCY_SYM': 'Db',
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
            'id': _0x599488['shLne'],
            'localeID': _0x599488['rIpIE'],
            'pluralCat': function (_0x43abd9, _0x9c6a04) {
                var _0xb23cc8 = _0x599488['SeQox'](_0x43abd9, 0x0);
                if (_0x599488['OtOTR'](_0xb23cc8, 0x0) && _0x599488['Lakbx'](_0xb23cc8, 0x1))
                    return _0xc0a7ab['ONE'];
                return _0xc0a7ab['OTHER'];
            }
        });
    }
]);
