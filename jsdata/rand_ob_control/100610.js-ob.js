const KEYWORDS = new Set([
        'and',
        'break',
        'continue',
        'do',
        'downto',
        'else',
        'elseif',
        'end',
        'endfor',
        'endfunc',
        'endif',
        'endwhile',
        'eq',
        'exit',
        'for',
        'foreach',
        'func',
        'ge',
        'gt',
        'if',
        'in',
        'infinity',
        'le',
        'lt',
        'nan',
        'ne',
        'not',
        'null',
        'or',
        'return',
        'step',
        'then',
        'this',
        'throw',
        'upto',
        'var',
        'while'
    ]), TOKEN = {
        'and': 0x0,
        'divide': 0x1,
        'dot': 0x2,
        'dotDot': 0x3,
        'dotHash': 0x4,
        'dotStar': 0x5,
        'eq': 0x6,
        'ge': 0x7,
        'gt': 0x8,
        'le': 0x9,
        'leftBracket': 0xa,
        'leftParen': 0xb,
        'lt': 0xc,
        'minus': 0xd,
        'ne': 0xe,
        'not': 0xf,
        'null': 0x10,
        'number': 0x11,
        'or': 0x12,
        'plus': 0x13,
        'rightBracket': 0x14,
        'rightParen': 0x15,
        'string': 0x16,
        'this': 0x17,
        'times': 0x18,
        'identifier': 0x19,
        'break': 0x1a,
        'continue': 0x1b,
        'do': 0x1c,
        'for': 0x1d,
        'foreach': 0x1e,
        'func': 0x1f,
        'if': 0x20,
        'var': 0x21,
        'while': 0x22,
        'assign': 0x23,
        'comma': 0x24,
        'downto': 0x25,
        'else': 0x26,
        'elseif': 0x27,
        'end': 0x28,
        'endif': 0x29,
        'endfor': 0x2a,
        'endfunc': 0x2b,
        'endwhile': 0x2c,
        'eof': 0x2d,
        'exit': 0x2e,
        'in': 0x2f,
        'infinity': 0x30,
        'nan': 0x31,
        'return': 0x32,
        'step': 0x33,
        'then': 0x34,
        'throw': 0x35,
        'upto': 0x36
    }, hexPattern = /^[uU]([0-9a-fA-F]{4,8})/, numberPattern = /^[0-9]*(?:\.[0-9]*)?(?:[Ee][+-]?[0-9]+)?/, dotNumberPattern = /^[0-9]*(?:[Ee][+-]?[0-9]+)?/, eolPattern = /[\r\n]+/, identifierPattern = new RegExp('^[\x5cp{L}_$!][\x5cp{L}\x5cp{N}_$]*', 'u');
class Token {
    constructor(_0x59b26c, _0x4fdee4 = null) {
        this['id'] = _0x59b26c, this['value'] = _0x4fdee4;
    }
}
const Singletons = function () {
    const _0x263207 = {
            'PKzkq': 'identifier',
            'HAnSf': 'string',
            'wLhai': 'number',
            'IPjpn': 'nan',
            'iSIVr': 'infinity'
        }, _0x44c9af = Object['create'](null), _0x2ba88b = new Set([
            _0x263207['PKzkq'],
            _0x263207['HAnSf'],
            _0x263207['wLhai'],
            _0x263207['IPjpn'],
            _0x263207['iSIVr']
        ]);
    for (const [_0x24cf60, _0xfcc199] of Object['entries'](TOKEN)) {
        !_0x2ba88b['has'](_0x24cf60) && (_0x44c9af[_0x24cf60] = new Token(_0xfcc199));
    }
    return _0x44c9af['nan'] = new Token(TOKEN['number'], NaN), _0x44c9af['infinity'] = new Token(TOKEN['number'], Infinity), _0x44c9af;
}();
class Lexer {
    constructor(_0x344279) {
        this['data'] = _0x344279, this['pos'] = 0x0, this['len'] = _0x344279['length'], this['strBuf'] = [];
    }
    ['skipUntilEOL']() {
        const _0x1dd9f9 = {
                'bCkPQ': function (_0x497745, _0x4b6373) {
                    return _0x497745 + _0x4b6373;
                }
            }, _0x2b9b2d = this['data']['slice'](this['pos'])['match'](eolPattern);
        _0x2b9b2d ? this['pos'] += _0x1dd9f9['bCkPQ'](_0x2b9b2d['index'], _0x2b9b2d[0x0]['length']) : this['pos'] = this['len'];
    }
    ['getIdentifier']() {
        const _0x597dfd = {
            'SYiLx': function (_0x36274a, _0x2610cc) {
                return _0x36274a + _0x2610cc;
            }
        };
        this['pos']--;
        const _0x5be77f = this['data']['slice'](this['pos'])['match'](identifierPattern);
        if (!_0x5be77f)
            throw new Error('Invalid\x20token\x20in\x20FormCalc\x20expression\x20at\x20position\x20' + this['pos'] + '.');
        const _0x3c9480 = this['data']['slice'](this['pos'], _0x597dfd['SYiLx'](this['pos'], _0x5be77f[0x0]['length']));
        this['pos'] += _0x5be77f[0x0]['length'];
        const _0x2931e9 = _0x3c9480['toLowerCase']();
        if (!KEYWORDS['has'](_0x2931e9))
            return new Token(TOKEN['identifier'], _0x3c9480);
        return Singletons[_0x2931e9];
    }
    ['getString']() {
        const _0x4a18e4 = {
                'JWerF': function (_0x5163e7, _0x42c66c) {
                    return _0x5163e7 < _0x42c66c;
                },
                'FDAeO': function (_0x5d51f3, _0x1fe8d5) {
                    return _0x5d51f3 === _0x1fe8d5;
                },
                'rwCKx': function (_0x5256b2, _0xb2d82f) {
                    return _0x5256b2 + _0xb2d82f;
                },
                'xRwTH': function (_0x2a8bbb, _0x59a781) {
                    return _0x2a8bbb - _0x59a781;
                },
                'VCuCN': function (_0x2c4cad, _0x30f4a1, _0x1ed801) {
                    return _0x2c4cad(_0x30f4a1, _0x1ed801);
                },
                'JbWKT': function (_0x2fce69, _0x4790b6) {
                    return _0x2fce69 !== _0x4790b6;
                },
                'obyyJ': function (_0x532aff, _0x272524, _0x16e0e2) {
                    return _0x532aff(_0x272524, _0x16e0e2);
                }
            }, _0x5b22b8 = this['strBuf'], _0x5ef5b2 = this['data'];
        let _0x351071 = this['pos'];
        while (_0x4a18e4['JWerF'](this['pos'], this['len'])) {
            const _0x577dac = _0x5ef5b2['charCodeAt'](this['pos']++);
            if (_0x4a18e4['FDAeO'](_0x577dac, 0x22)) {
                if (_0x4a18e4['FDAeO'](_0x5ef5b2['charCodeAt'](this['pos']), 0x22)) {
                    _0x5b22b8['push'](_0x5ef5b2['slice'](_0x351071, this['pos']++)), _0x351071 = this['pos'];
                    continue;
                }
                break;
            }
            if (_0x4a18e4['FDAeO'](_0x577dac, 0x5c)) {
                const _0x19263a = _0x5ef5b2['substring'](this['pos'], _0x4a18e4['rwCKx'](this['pos'], 0xa))['match'](hexPattern);
                if (!_0x19263a)
                    continue;
                _0x5b22b8['push'](_0x5ef5b2['slice'](_0x351071, _0x4a18e4['xRwTH'](this['pos'], 0x1)));
                const _0xd24595 = _0x19263a[0x1];
                if (_0x4a18e4['FDAeO'](_0xd24595['length'], 0x4))
                    _0x5b22b8['push'](String['fromCharCode'](_0x4a18e4['VCuCN'](parseInt, _0xd24595, 0x10))), _0x351071 = this['pos'] += 0x5;
                else
                    _0x4a18e4['JbWKT'](_0xd24595['length'], 0x8) ? (_0x5b22b8['push'](String['fromCharCode'](_0x4a18e4['obyyJ'](parseInt, _0xd24595['slice'](0x0, 0x4), 0x10))), _0x351071 = this['pos'] += 0x5) : (_0x5b22b8['push'](String['fromCharCode'](_0x4a18e4['obyyJ'](parseInt, _0xd24595, 0x10))), _0x351071 = this['pos'] += 0x9);
            }
        }
        const _0x34ace6 = _0x5ef5b2['slice'](_0x351071, _0x4a18e4['xRwTH'](this['pos'], 0x1));
        if (_0x4a18e4['FDAeO'](_0x5b22b8['length'], 0x0))
            return new Token(TOKEN['string'], _0x34ace6);
        _0x5b22b8['push'](_0x34ace6);
        const _0x4e8b59 = _0x5b22b8['join']('');
        return _0x5b22b8['length'] = 0x0, new Token(TOKEN['string'], _0x4e8b59);
    }
    ['getNumber'](_0x54b2f2) {
        const _0x3438c3 = {
                'mbceD': function (_0x12af02, _0x3e2167) {
                    return _0x12af02 - _0x3e2167;
                },
                'dPvju': function (_0x5b6ef0, _0xf0b19d) {
                    return _0x5b6ef0(_0xf0b19d);
                },
                'AljxO': function (_0x38a614, _0x3d8a40) {
                    return _0x38a614 - _0x3d8a40;
                },
                'EYJdB': function (_0x413f59, _0xb0b10b) {
                    return _0x413f59 + _0xb0b10b;
                }
            }, _0x24767f = this['data']['substring'](this['pos'])['match'](numberPattern);
        if (!_0x24767f)
            return _0x3438c3['mbceD'](_0x54b2f2, 0x30);
        const _0x32484b = _0x3438c3['dPvju'](parseFloat, this['data']['substring'](_0x3438c3['AljxO'](this['pos'], 0x1), _0x3438c3['EYJdB'](this['pos'], _0x24767f[0x0]['length'])));
        return this['pos'] += _0x24767f[0x0]['length'], new Token(TOKEN['number'], _0x32484b);
    }
    ['getCompOperator'](_0x545a44, _0x120c2c) {
        const _0x1bef84 = {
            'XIWOx': function (_0x7d175b, _0x21c8de) {
                return _0x7d175b === _0x21c8de;
            }
        };
        if (_0x1bef84['XIWOx'](this['data']['charCodeAt'](this['pos']), 0x3d))
            return this['pos']++, _0x545a44;
        return _0x120c2c;
    }
    ['getLower']() {
        const _0x36d25e = {
                'zQuxv': function (_0x2d7b2e, _0x54ff10) {
                    return _0x2d7b2e === _0x54ff10;
                },
                'ewVVj': function (_0x46ca71, _0x5b8f3f) {
                    return _0x46ca71 === _0x5b8f3f;
                }
            }, _0x1672b4 = this['data']['charCodeAt'](this['pos']);
        if (_0x36d25e['zQuxv'](_0x1672b4, 0x3d))
            return this['pos']++, Singletons['le'];
        if (_0x36d25e['ewVVj'](_0x1672b4, 0x3e))
            return this['pos']++, Singletons['ne'];
        return Singletons['lt'];
    }
    ['getSlash']() {
        const _0x2522fa = {
            'txFew': function (_0x266ce6, _0x1baa9d) {
                return _0x266ce6 === _0x1baa9d;
            }
        };
        if (_0x2522fa['txFew'](this['data']['charCodeAt'](this['pos']), 0x2f))
            return this['skipUntilEOL'](), ![];
        return !![];
    }
    ['getDot']() {
        const _0x4d0b09 = {
                'TxCHB': function (_0x1658bb, _0x3c5de2) {
                    return _0x1658bb === _0x3c5de2;
                },
                'wNZAf': function (_0xc3bb6a, _0x41306b) {
                    return _0xc3bb6a === _0x41306b;
                },
                'QMyTU': function (_0xb46265, _0x36171d) {
                    return _0xb46265 <= _0x36171d;
                },
                'qaFqb': function (_0x2b5890, _0x2d6252) {
                    return _0x2b5890 <= _0x2d6252;
                },
                'swCqM': function (_0x178d4a, _0x44e0d0) {
                    return _0x178d4a / _0x44e0d0;
                },
                'adSFI': function (_0x5475c8, _0x515578) {
                    return _0x5475c8 - _0x515578;
                },
                'LuQPu': function (_0x1cc37e, _0x1142a6) {
                    return _0x1cc37e + _0x1142a6;
                },
                'GZwIQ': function (_0x9a8032, _0x15895e) {
                    return _0x9a8032(_0x15895e);
                },
                'ttxao': function (_0x46df6c, _0x2bcb48) {
                    return _0x46df6c - _0x2bcb48;
                }
            }, _0x12f883 = this['data']['charCodeAt'](this['pos']);
        if (_0x4d0b09['TxCHB'](_0x12f883, 0x2e))
            return this['pos']++, Singletons['dotDot'];
        if (_0x4d0b09['wNZAf'](_0x12f883, 0x2a))
            return this['pos']++, Singletons['dotStar'];
        if (_0x4d0b09['wNZAf'](_0x12f883, 0x23))
            return this['pos']++, Singletons['dotHash'];
        if (_0x4d0b09['QMyTU'](0x30, _0x12f883) && _0x4d0b09['qaFqb'](_0x12f883, 0x39)) {
            this['pos']++;
            const _0x51cbe3 = this['data']['substring'](this['pos'])['match'](dotNumberPattern);
            if (!_0x51cbe3)
                return new Token(TOKEN['number'], _0x4d0b09['swCqM'](_0x4d0b09['adSFI'](_0x12f883, 0x30), 0xa));
            const _0x1bd6b0 = _0x4d0b09['LuQPu'](this['pos'], _0x51cbe3[0x0]['length']), _0x5da5b8 = _0x4d0b09['GZwIQ'](parseFloat, this['data']['substring'](_0x4d0b09['ttxao'](this['pos'], 0x2), _0x1bd6b0));
            return this['pos'] = _0x1bd6b0, new Token(TOKEN['number'], _0x5da5b8);
        }
        return Singletons['dot'];
    }
    ['next']() {
        const _0x36c8a1 = {
            'TyWHc': function (_0x245e98, _0x6277b4) {
                return _0x245e98 < _0x6277b4;
            }
        };
        while (_0x36c8a1['TyWHc'](this['pos'], this['len'])) {
            const _0x33be2d = this['data']['charCodeAt'](this['pos']++);
            switch (_0x33be2d) {
            case 0x9:
            case 0xa:
            case 0xb:
            case 0xc:
            case 0xd:
            case 0x20:
                break;
            case 0x22:
                return this['getString']();
            case 0x26:
                return Singletons['and'];
            case 0x28:
                return Singletons['leftParen'];
            case 0x29:
                return Singletons['rightParen'];
            case 0x2a:
                return Singletons['times'];
            case 0x2b:
                return Singletons['plus'];
            case 0x2c:
                return Singletons['comma'];
            case 0x2d:
                return Singletons['minus'];
            case 0x2e:
                return this['getDot']();
            case 0x2f:
                if (this['getSlash']())
                    return Singletons['divide'];
                break;
            case 0x30:
            case 0x31:
            case 0x32:
            case 0x33:
            case 0x34:
            case 0x35:
            case 0x36:
            case 0x37:
            case 0x38:
            case 0x39:
                return this['getNumber'](_0x33be2d);
            case 0x3b:
                this['skipUntilEOL']();
                break;
            case 0x3c:
                return this['getLower']();
            case 0x3d:
                return this['getCompOperator'](Singletons['eq'], Singletons['assign']);
            case 0x3e:
                return this['getCompOperator'](Singletons['ge'], Singletons['gt']);
            case 0x5b:
                return Singletons['leftBracket'];
            case 0x5d:
                return Singletons['rightBracket'];
            case 0x7c:
                return Singletons['or'];
            default:
                return this['getIdentifier']();
            }
        }
        return Singletons['eof'];
    }
}
export {
    Lexer,
    Token,
    TOKEN
};
