import * as _0x83316f from '../../..';
describe('builders', function () {
    var _0x4f04e3 = {
        'iIxcb': function (_0x4f783b, _0x3a3d36) {
            return _0x4f783b(_0x3a3d36);
        },
        'CPvFp': function (_0x48fb95, _0x2a2339) {
            return _0x48fb95(_0x2a2339);
        },
        'txmeA': '123456789',
        'ftPxx': function (_0x52ac0a, _0x28132f, _0x3fbe4c) {
            return _0x52ac0a(_0x28132f, _0x3fbe4c);
        },
        'aGdyB': 'accept\x20unary\x20expression',
        'jYfqs': 'throws\x20with\x20non-numeric\x20argument',
        'ppVXu': '0|3|4|1|2',
        'PyVAf': 'void',
        'zBsHN': 'Property\x20operator\x20expected\x20value\x20to\x20be\x20one\x20of\x20[\x22-\x22]\x20but\x20got\x20\x22~\x22',
        'vSyLS': 'Property\x20operator\x20expected\x20value\x20to\x20be\x20one\x20of\x20[\x22-\x22]\x20but\x20got\x20\x22void\x22',
        'btAWD': 'Property\x20operator\x20expected\x20value\x20to\x20be\x20one\x20of\x20[\x22-\x22]\x20but\x20got\x20\x22+\x22',
        'KboYc': function (_0x38a53b, _0x58ab74) {
            return _0x38a53b(_0x58ab74);
        },
        'czjxh': 'Property\x20value\x20expected\x20type\x20of\x20string\x20but\x20got\x20number',
        'sLvOL': 'Property\x20argument\x20of\x20UnaryExpression\x20expected\x20node\x20to\x20be\x20of\x20a\x20type\x20[\x22NumericLiteral\x22,\x22BigIntLiteral\x22]\x20but\x20instead\x20got\x20\x22ObjectExpression\x22',
        'QJPAR': 'tsLiteralType',
        'QQCqb': 'throws\x20with\x20bad\x20operator',
        'drXWe': 'typescript'
    };
    _0x4f04e3['ftPxx'](describe, _0x4f04e3['drXWe'], function () {
        var _0x11f2f5 = {
            'KNzfT': function (_0x2bfe55, _0x2e73da) {
                return _0x4f04e3['KboYc'](_0x2bfe55, _0x2e73da);
            },
            'qCjpt': _0x4f04e3['czjxh'],
            'TRYVV': _0x4f04e3['sLvOL']
        };
        _0x4f04e3['ftPxx'](describe, _0x4f04e3['QJPAR'], function () {
            var _0x3c704e = {
                'rlXiE': function (_0x1564af, _0x1a2bed) {
                    return _0x4f04e3['iIxcb'](_0x1564af, _0x1a2bed);
                },
                'lmjNG': function (_0x569dc2, _0x309fff) {
                    return _0x4f04e3['CPvFp'](_0x569dc2, _0x309fff);
                },
                'SyQYZ': _0x4f04e3['txmeA']
            };
            _0x4f04e3['ftPxx'](it, _0x4f04e3['aGdyB'], function () {
                _0x3c704e['rlXiE'](expect, _0x83316f['tsLiteralType'](_0x83316f['unaryExpression']('-', _0x83316f['numericLiteral'](0x1))))['toMatchSnapshot'](), _0x3c704e['lmjNG'](expect, _0x83316f['tsLiteralType'](_0x83316f['unaryExpression']('-', _0x83316f['bigIntLiteral'](_0x3c704e['SyQYZ']))))['toMatchSnapshot']();
            }), _0x4f04e3['ftPxx'](it, _0x4f04e3['jYfqs'], function () {
                _0x11f2f5['KNzfT'](expect, () => {
                    _0x83316f['tsLiteralType'](_0x83316f['unaryExpression']('-', _0x83316f['stringLiteral'](0x1)));
                })['toThrow'](_0x11f2f5['qCjpt']), _0x11f2f5['KNzfT'](expect, () => {
                    _0x83316f['tsLiteralType'](_0x83316f['unaryExpression']('-', _0x83316f['objectExpression']([])));
                })['toThrow'](_0x11f2f5['TRYVV']);
            });
        }), _0x4f04e3['ftPxx'](it, _0x4f04e3['QQCqb'], function () {
            var _0x263265 = _0x4f04e3['ppVXu']['split']('|'), _0x524eb9 = 0x0;
            while (!![]) {
                switch (_0x263265[_0x524eb9++]) {
                case '0':
                    var _0x354436 = { 'AVSQp': _0x4f04e3['PyVAf'] };
                    continue;
                case '1':
                    _0x4f04e3['CPvFp'](expect, () => {
                        _0x83316f['tsLiteralType'](_0x83316f['unaryExpression']('~', _0x83316f['numericLiteral'](0x1)));
                    })['toThrow'](_0x4f04e3['zBsHN']);
                    continue;
                case '2':
                    _0x4f04e3['CPvFp'](expect, () => {
                        _0x83316f['tsLiteralType'](_0x83316f['unaryExpression'](_0x354436['AVSQp'], _0x83316f['numericLiteral'](0x1)));
                    })['toThrow'](_0x4f04e3['vSyLS']);
                    continue;
                case '3':
                    _0x4f04e3['CPvFp'](expect, () => {
                        _0x83316f['tsLiteralType'](_0x83316f['unaryExpression']('+', _0x83316f['numericLiteral'](0x1)));
                    })['toThrow'](_0x4f04e3['btAWD']);
                    continue;
                case '4':
                    _0x4f04e3['CPvFp'](expect, () => {
                        _0x83316f['tsLiteralType'](_0x83316f['unaryExpression']('+', _0x83316f['objectExpression']([])));
                    })['toThrow'](_0x4f04e3['btAWD']);
                    continue;
                }
                break;
            }
        });
    });
});
