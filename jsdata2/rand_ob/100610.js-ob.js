const _0x3730 = [
    'leftBracket',
    'eof',
    '582269NdCIwW',
    '21495rHaxMB',
    '23QZXuji',
    '115912Vxdttb',
    '18707JWEiap',
    '20ETThsv',
    '595947SWNico',
    '307331Yxoclg',
    '19rSbZwJ',
    '23307BKZHkB',
    'and',
    'break',
    'else',
    'elseif',
    'end',
    'endfor',
    'endfunc',
    'endwhile',
    'for',
    'foreach',
    'infinity',
    'nan',
    'null',
    'return',
    'step',
    'then',
    'this',
    'throw',
    'upto',
    'while',
    '^[\x5cp{L}_$!][\x5cp{L}\x5cp{N}_$]*',
    'value',
    'string',
    'create',
    'identifier',
    'MWFbD',
    'number',
    'entries',
    'has',
    'data',
    'pos',
    'len',
    'length',
    'skipUntilEOL',
    'slice',
    'match',
    'index',
    'getIdentifier',
    'Invalid\x20token\x20in\x20FormCalc\x20expression\x20at\x20position\x20',
    'wlYNW',
    'toLowerCase',
    'getString',
    'strBuf',
    'RSmHG',
    'secUa',
    'charCodeAt',
    'push',
    'substring',
    'ytDIi',
    'fromCharCode',
    'vEBzQ',
    'hsGnK',
    'eqhuk',
    'CCDwl',
    'tEfEG',
    'join',
    'getNumber',
    'xZvQM',
    'CyQOn',
    'getLower',
    'HjDDx',
    'getSlash',
    'fFirE',
    'getDot',
    'ARXVV',
    'dotStar',
    'dotHash',
    'EadgG',
    'jdszX',
    'mxAGu',
    'xjwjr',
    'dot',
    'next',
    'leftParen',
    'rightParen',
    'times',
    'plus',
    'minus',
    'divide',
    'getCompOperator'
];
const _0x5f12f8 = _0x415c;
(function (_0x276da2, _0x43dec5) {
    const _0x2392d6 = _0x415c;
    while (!![]) {
        try {
            const _0x40f183 = parseInt(_0x2392d6(0x181)) + parseInt(_0x2392d6(0x182)) * -parseInt(_0x2392d6(0x183)) + -parseInt(_0x2392d6(0x184)) + parseInt(_0x2392d6(0x185)) * -parseInt(_0x2392d6(0x186)) + parseInt(_0x2392d6(0x187)) + -parseInt(_0x2392d6(0x188)) + -parseInt(_0x2392d6(0x189)) * -parseInt(_0x2392d6(0x18a));
            if (_0x40f183 === _0x43dec5)
                break;
            else
                _0x276da2['push'](_0x276da2['shift']());
        } catch (_0x556095) {
            _0x276da2['push'](_0x276da2['shift']());
        }
    }
}(_0x3730, 0x9591 + -0x342af * -0x2 + 0x67f * -0x52));
const KEYWORDS = new Set([
        _0x5f12f8(0x18b),
        _0x5f12f8(0x18c),
        'continue',
        'do',
        'downto',
        _0x5f12f8(0x18d),
        _0x5f12f8(0x18e),
        _0x5f12f8(0x18f),
        _0x5f12f8(0x190),
        _0x5f12f8(0x191),
        'endif',
        _0x5f12f8(0x192),
        'eq',
        'exit',
        _0x5f12f8(0x193),
        _0x5f12f8(0x194),
        'func',
        'ge',
        'gt',
        'if',
        'in',
        _0x5f12f8(0x195),
        'le',
        'lt',
        _0x5f12f8(0x196),
        'ne',
        'not',
        _0x5f12f8(0x197),
        'or',
        _0x5f12f8(0x198),
        _0x5f12f8(0x199),
        _0x5f12f8(0x19a),
        _0x5f12f8(0x19b),
        _0x5f12f8(0x19c),
        _0x5f12f8(0x19d),
        'var',
        _0x5f12f8(0x19e)
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
    }, hexPattern = /^[uU]([0-9a-fA-F]{4,8})/, numberPattern = /^[0-9]*(?:\.[0-9]*)?(?:[Ee][+-]?[0-9]+)?/, dotNumberPattern = /^[0-9]*(?:[Ee][+-]?[0-9]+)?/, eolPattern = /[\r\n]+/, identifierPattern = new RegExp(_0x5f12f8(0x19f), 'u');
class Token {
    constructor(_0x3d12f8, _0x33ee75 = null) {
        const _0x37cf9a = _0x5f12f8;
        this['id'] = _0x3d12f8, this[_0x37cf9a(0x1a0)] = _0x33ee75;
    }
}
const Singletons = function () {
    const _0x284e29 = _0x5f12f8, _0x4ff020 = {
            'MWFbD': _0x284e29(0x1a1),
            'TlqJt': 'infinity'
        }, _0x32875b = Object[_0x284e29(0x1a2)](null), _0x14f307 = new Set([
            _0x284e29(0x1a3),
            _0x4ff020[_0x284e29(0x1a4)],
            _0x284e29(0x1a5),
            _0x284e29(0x196),
            _0x4ff020['TlqJt']
        ]);
    for (const [_0x43abe0, _0x3ed3cb] of Object[_0x284e29(0x1a6)](TOKEN)) {
        !_0x14f307[_0x284e29(0x1a7)](_0x43abe0) && (_0x32875b[_0x43abe0] = new Token(_0x3ed3cb));
    }
    return _0x32875b[_0x284e29(0x196)] = new Token(TOKEN[_0x284e29(0x1a5)], NaN), _0x32875b[_0x284e29(0x195)] = new Token(TOKEN['number'], Infinity), _0x32875b;
}();
class Lexer {
    constructor(_0x492855) {
        const _0x3fca28 = _0x5f12f8;
        this[_0x3fca28(0x1a8)] = _0x492855, this[_0x3fca28(0x1a9)] = -0x3 * -0xa11 + -0xca * 0xd + -0x13f1, this[_0x3fca28(0x1aa)] = _0x492855[_0x3fca28(0x1ab)], this['strBuf'] = [];
    }
    [_0x5f12f8(0x1ac)]() {
        const _0x2e864b = _0x5f12f8, _0x34aec4 = this[_0x2e864b(0x1a8)][_0x2e864b(0x1ad)](this[_0x2e864b(0x1a9)])[_0x2e864b(0x1ae)](eolPattern);
        _0x34aec4 ? this[_0x2e864b(0x1a9)] += _0x34aec4[_0x2e864b(0x1af)] + _0x34aec4[-0x5db * 0x6 + -0x1 * 0x13c7 + -0x36e9 * -0x1]['length'] : this[_0x2e864b(0x1a9)] = this[_0x2e864b(0x1aa)];
    }
    [_0x5f12f8(0x1b0)]() {
        const _0x853668 = _0x5f12f8, _0x8cf46 = {
                'wlYNW': function (_0xe6c0cf, _0x19e3ed) {
                    return _0xe6c0cf + _0x19e3ed;
                }
            };
        this[_0x853668(0x1a9)]--;
        const _0x5bffe4 = this['data'][_0x853668(0x1ad)](this[_0x853668(0x1a9)])[_0x853668(0x1ae)](identifierPattern);
        if (!_0x5bffe4)
            throw new Error(_0x853668(0x1b1) + this[_0x853668(0x1a9)] + '.');
        const _0x1280ac = this[_0x853668(0x1a8)][_0x853668(0x1ad)](this['pos'], _0x8cf46[_0x853668(0x1b2)](this[_0x853668(0x1a9)], _0x5bffe4[0x66d + 0x1 * -0x1041 + 0x9d4][_0x853668(0x1ab)]));
        this[_0x853668(0x1a9)] += _0x5bffe4[-0x21 * 0x10d + 0x757 * 0x5 + -0x206][_0x853668(0x1ab)];
        const _0x5d0502 = _0x1280ac[_0x853668(0x1b3)]();
        if (!KEYWORDS[_0x853668(0x1a7)](_0x5d0502))
            return new Token(TOKEN[_0x853668(0x1a3)], _0x1280ac);
        return Singletons[_0x5d0502];
    }
    [_0x5f12f8(0x1b4)]() {
        const _0x5e569e = _0x5f12f8, _0x235ac3 = {
                'RSmHG': function (_0x16fcb6, _0x108823) {
                    return _0x16fcb6 < _0x108823;
                },
                'secUa': function (_0x52462f, _0x1ee093) {
                    return _0x52462f === _0x1ee093;
                },
                'ytDIi': function (_0x126a6c, _0x15d19f) {
                    return _0x126a6c + _0x15d19f;
                },
                'CCDwl': function (_0x61a37c, _0x28985d) {
                    return _0x61a37c - _0x28985d;
                },
                'vEBzQ': function (_0x52296e, _0x51cb33, _0x158103) {
                    return _0x52296e(_0x51cb33, _0x158103);
                },
                'ZhYUn': function (_0x69dc75, _0x32db47) {
                    return _0x69dc75 !== _0x32db47;
                },
                'hsGnK': function (_0x582c47, _0x4faab, _0x485243) {
                    return _0x582c47(_0x4faab, _0x485243);
                },
                'eqhuk': function (_0x401254, _0x3c49b2, _0xd5a9c0) {
                    return _0x401254(_0x3c49b2, _0xd5a9c0);
                },
                'tEfEG': function (_0x40f0b6, _0x4f9f6b) {
                    return _0x40f0b6 === _0x4f9f6b;
                }
            }, _0x19e2c0 = this[_0x5e569e(0x1b5)], _0x3c0ede = this[_0x5e569e(0x1a8)];
        let _0xb85fa1 = this[_0x5e569e(0x1a9)];
        while (_0x235ac3[_0x5e569e(0x1b6)](this['pos'], this[_0x5e569e(0x1aa)])) {
            const _0x37a1d8 = _0x3c0ede['charCodeAt'](this[_0x5e569e(0x1a9)]++);
            if (_0x235ac3['secUa'](_0x37a1d8, 0x1f7 * -0x2 + -0x4c7 * 0x5 + 0x87 * 0x35)) {
                if (_0x235ac3[_0x5e569e(0x1b7)](_0x3c0ede[_0x5e569e(0x1b8)](this[_0x5e569e(0x1a9)]), 0xe13 * -0x1 + 0x19d1 + -0x4 * 0x2e7)) {
                    _0x19e2c0[_0x5e569e(0x1b9)](_0x3c0ede['slice'](_0xb85fa1, this[_0x5e569e(0x1a9)]++)), _0xb85fa1 = this[_0x5e569e(0x1a9)];
                    continue;
                }
                break;
            }
            if (_0x235ac3[_0x5e569e(0x1b7)](_0x37a1d8, 0x282 * -0xd + -0xbc3 + 0x2cb9)) {
                const _0x2d6d77 = _0x3c0ede[_0x5e569e(0x1ba)](this[_0x5e569e(0x1a9)], _0x235ac3[_0x5e569e(0x1bb)](this['pos'], -0x121 + 0x15b * -0xe + 0x1425))[_0x5e569e(0x1ae)](hexPattern);
                if (!_0x2d6d77)
                    continue;
                _0x19e2c0[_0x5e569e(0x1b9)](_0x3c0ede['slice'](_0xb85fa1, _0x235ac3['CCDwl'](this[_0x5e569e(0x1a9)], 0x234 * 0x8 + -0x6b5 + 0xfe * -0xb)));
                const _0x44aa53 = _0x2d6d77[-0x49a * 0x2 + 0x3d3 + -0x35 * -0x1a];
                if (_0x44aa53[_0x5e569e(0x1ab)] === -0x4 * -0x95f + -0x19af + -0xbc9)
                    _0x19e2c0[_0x5e569e(0x1b9)](String[_0x5e569e(0x1bc)](_0x235ac3[_0x5e569e(0x1bd)](parseInt, _0x44aa53, -0x1c8b + -0xe6 * -0x7 + 0x1651 * 0x1))), _0xb85fa1 = this['pos'] += 0x1c04 + 0xb51 + -0x2750;
                else
                    _0x235ac3['ZhYUn'](_0x44aa53[_0x5e569e(0x1ab)], 0xa9 * 0x1b + 0xbe * 0x21 + -0x2a49) ? (_0x19e2c0[_0x5e569e(0x1b9)](String['fromCharCode'](_0x235ac3[_0x5e569e(0x1be)](parseInt, _0x44aa53[_0x5e569e(0x1ad)](-0xb3 * 0x36 + -0x27 * 0x42 + -0x55 * -0x90, -0x1afb * 0x1 + -0x1a38 + 0x39 * 0xef), -0x26b7 + -0xbf * -0x1 + 0x2608))), _0xb85fa1 = this[_0x5e569e(0x1a9)] += 0x625 + 0xe72 + -0x1492 * 0x1) : (_0x19e2c0[_0x5e569e(0x1b9)](String[_0x5e569e(0x1bc)](_0x235ac3[_0x5e569e(0x1bf)](parseInt, _0x44aa53, -0xfc3 + -0x466 + -0x1f * -0xa7))), _0xb85fa1 = this[_0x5e569e(0x1a9)] += -0xbcf * 0x2 + 0x9af + 0xdf8);
            }
        }
        const _0x26332e = _0x3c0ede['slice'](_0xb85fa1, _0x235ac3[_0x5e569e(0x1c0)](this[_0x5e569e(0x1a9)], 0xa21 + 0x944 + 0x4d9 * -0x4));
        if (_0x235ac3[_0x5e569e(0x1c1)](_0x19e2c0['length'], -0x1b0f * 0x1 + -0xe92 + 0x29a1))
            return new Token(TOKEN[_0x5e569e(0x1a1)], _0x26332e);
        _0x19e2c0[_0x5e569e(0x1b9)](_0x26332e);
        const _0x792751 = _0x19e2c0[_0x5e569e(0x1c2)]('');
        return _0x19e2c0['length'] = 0x226b + -0x1bb7 + -0x6b4, new Token(TOKEN[_0x5e569e(0x1a1)], _0x792751);
    }
    [_0x5f12f8(0x1c3)](_0x50f912) {
        const _0x1d379b = _0x5f12f8, _0x5c149f = {
                'xZvQM': function (_0x2623f4, _0x41a7f3) {
                    return _0x2623f4 - _0x41a7f3;
                },
                'teJtf': function (_0x395d17, _0x422298) {
                    return _0x395d17(_0x422298);
                },
                'CyQOn': function (_0x21a189, _0x5bb0bc) {
                    return _0x21a189 - _0x5bb0bc;
                }
            }, _0x2ad186 = this[_0x1d379b(0x1a8)][_0x1d379b(0x1ba)](this[_0x1d379b(0x1a9)])['match'](numberPattern);
        if (!_0x2ad186)
            return _0x5c149f[_0x1d379b(0x1c4)](_0x50f912, 0x1fb2 + -0x140e + -0x5ba * 0x2);
        const _0x5a7885 = _0x5c149f['teJtf'](parseFloat, this[_0x1d379b(0x1a8)][_0x1d379b(0x1ba)](_0x5c149f[_0x1d379b(0x1c5)](this['pos'], -0x1 * -0x1e20 + -0x2 * 0xfd1 + 0x183), this['pos'] + _0x2ad186[0x27 * -0xba + 0x1f75 + 0x2f * -0x11][_0x1d379b(0x1ab)]));
        return this[_0x1d379b(0x1a9)] += _0x2ad186[0x3 * -0x965 + 0xf77 + 0x128 * 0xb][_0x1d379b(0x1ab)], new Token(TOKEN['number'], _0x5a7885);
    }
    ['getCompOperator'](_0x3fe670, _0x1f8e35) {
        const _0x16055c = _0x5f12f8;
        if (this[_0x16055c(0x1a8)][_0x16055c(0x1b8)](this[_0x16055c(0x1a9)]) === -0x11a1 * -0x1 + -0x4d * 0x3 + -0x107d)
            return this[_0x16055c(0x1a9)]++, _0x3fe670;
        return _0x1f8e35;
    }
    [_0x5f12f8(0x1c6)]() {
        const _0x35faed = _0x5f12f8, _0x37d97a = {
                'HjDDx': function (_0xc14462, _0x514ff1) {
                    return _0xc14462 === _0x514ff1;
                }
            }, _0x3a20a8 = this[_0x35faed(0x1a8)][_0x35faed(0x1b8)](this[_0x35faed(0x1a9)]);
        if (_0x37d97a['HjDDx'](_0x3a20a8, 0x95f * -0x1 + 0x2cb + 0x1 * 0x6d1))
            return this[_0x35faed(0x1a9)]++, Singletons['le'];
        if (_0x37d97a[_0x35faed(0x1c7)](_0x3a20a8, 0xa2b + -0x40 * -0x92 + -0x2e6d * 0x1))
            return this['pos']++, Singletons['ne'];
        return Singletons['lt'];
    }
    [_0x5f12f8(0x1c8)]() {
        const _0x407031 = _0x5f12f8, _0x2c017b = {
                'fFirE': function (_0x1a0435, _0x436474) {
                    return _0x1a0435 === _0x436474;
                }
            };
        if (_0x2c017b[_0x407031(0x1c9)](this[_0x407031(0x1a8)][_0x407031(0x1b8)](this[_0x407031(0x1a9)]), -0x2320 + 0x1f * -0x10c + 0x629 * 0xb))
            return this[_0x407031(0x1ac)](), ![];
        return !![];
    }
    [_0x5f12f8(0x1ca)]() {
        const _0x5d87c5 = _0x5f12f8, _0x21bc17 = {
                'ARXVV': function (_0x2725e3, _0x4f6db4) {
                    return _0x2725e3 === _0x4f6db4;
                },
                'EadgG': function (_0x1398be, _0xfa7ac7) {
                    return _0x1398be <= _0xfa7ac7;
                },
                'jdszX': function (_0x2d932e, _0x5baecc) {
                    return _0x2d932e / _0x5baecc;
                },
                'mxAGu': function (_0xb0347a, _0x32b933) {
                    return _0xb0347a - _0x32b933;
                },
                'xjwjr': function (_0x3aa916, _0x292cf8) {
                    return _0x3aa916(_0x292cf8);
                }
            }, _0x6852c4 = this[_0x5d87c5(0x1a8)]['charCodeAt'](this[_0x5d87c5(0x1a9)]);
        if (_0x6852c4 === -0x1a12 + 0x1249 + 0x1 * 0x7f7)
            return this[_0x5d87c5(0x1a9)]++, Singletons['dotDot'];
        if (_0x21bc17[_0x5d87c5(0x1cb)](_0x6852c4, -0x31 * 0x59 + -0x2 * -0xda3 + -0xa13))
            return this[_0x5d87c5(0x1a9)]++, Singletons[_0x5d87c5(0x1cc)];
        if (_0x6852c4 === 0x4a7 * -0x2 + 0x2 * 0x7f1 + -0x61 * 0x11)
            return this['pos']++, Singletons[_0x5d87c5(0x1cd)];
        if (_0x21bc17[_0x5d87c5(0x1ce)](0x633 + 0x4 * 0x310 + -0x1243, _0x6852c4) && _0x6852c4 <= 0x1e5f * -0x1 + -0x2 * 0x427 + 0x26e6) {
            this[_0x5d87c5(0x1a9)]++;
            const _0x333cc7 = this[_0x5d87c5(0x1a8)][_0x5d87c5(0x1ba)](this[_0x5d87c5(0x1a9)])[_0x5d87c5(0x1ae)](dotNumberPattern);
            if (!_0x333cc7)
                return new Token(TOKEN[_0x5d87c5(0x1a5)], _0x21bc17[_0x5d87c5(0x1cf)](_0x21bc17[_0x5d87c5(0x1d0)](_0x6852c4, -0x1633 + -0x7e8 + 0xa5 * 0x2f), -0x859 * -0x3 + -0x157d + 0x3c * -0xf));
            const _0x53e802 = this[_0x5d87c5(0x1a9)] + _0x333cc7[-0x1b84 + 0x2504 + -0x130 * 0x8][_0x5d87c5(0x1ab)], _0x29e414 = _0x21bc17[_0x5d87c5(0x1d1)](parseFloat, this[_0x5d87c5(0x1a8)]['substring'](_0x21bc17[_0x5d87c5(0x1d0)](this[_0x5d87c5(0x1a9)], 0xb6b + -0x1835 * 0x1 + -0xd * -0xfc), _0x53e802));
            return this[_0x5d87c5(0x1a9)] = _0x53e802, new Token(TOKEN[_0x5d87c5(0x1a5)], _0x29e414);
        }
        return Singletons[_0x5d87c5(0x1d2)];
    }
    [_0x5f12f8(0x1d3)]() {
        const _0x19e1e0 = _0x5f12f8, _0x5a08df = {
                'TqFaC': function (_0x423abf, _0x4a42dd) {
                    return _0x423abf < _0x4a42dd;
                }
            };
        while (_0x5a08df['TqFaC'](this[_0x19e1e0(0x1a9)], this['len'])) {
            const _0x2934dc = this[_0x19e1e0(0x1a8)][_0x19e1e0(0x1b8)](this['pos']++);
            switch (_0x2934dc) {
            case -0x1fc4 + -0x3f0 + 0x23bd:
            case -0xbd4 * -0x3 + -0x4c8 + -0x1eaa:
            case -0x1cbe + 0x2 * 0x1110 + 0x1 * -0x557:
            case -0x118d * 0x1 + -0x2 * 0x872 + 0x1 * 0x227d:
            case 0xb5a + -0x1193 + 0x646:
            case -0x51a * -0x3 + -0x1f30 + 0x1002:
                break;
            case 0x35 * 0x69 + 0xf72 + 0x54b * -0x7:
                return this[_0x19e1e0(0x1b4)]();
            case -0xc86 + -0x1 * -0x152e + -0xb * 0xc6:
                return Singletons[_0x19e1e0(0x18b)];
            case 0xd54 + -0x754 + -0x2 * 0x2ec:
                return Singletons[_0x19e1e0(0x1d4)];
            case 0x4 * 0x27d + -0x24a1 * 0x1 + 0x1ad6:
                return Singletons[_0x19e1e0(0x1d5)];
            case -0x1698 + -0x5 * 0x2f3 + 0x2581:
                return Singletons[_0x19e1e0(0x1d6)];
            case 0xb51 * -0x1 + 0x10d3 + -0x557 * 0x1:
                return Singletons[_0x19e1e0(0x1d7)];
            case -0x962 + 0x1 * 0x1183 + 0x7f5 * -0x1:
                return Singletons['comma'];
            case 0x82 * 0x16 + 0x21a0 + -0x2c9f:
                return Singletons[_0x19e1e0(0x1d8)];
            case -0x3 * -0x48b + -0x21a0 + 0x142d:
                return this['getDot']();
            case 0x565 * 0x5 + -0xf * 0x93 + 0x1 * -0x122d:
                if (this[_0x19e1e0(0x1c8)]())
                    return Singletons[_0x19e1e0(0x1d9)];
                break;
            case -0xa8d + -0x1750 + 0x17b * 0x17:
            case -0xc80 + 0x1133 + -0x482 * 0x1:
            case 0x2c * -0xbb + -0x6eb + 0x2741:
            case -0xca7 + -0x5 * -0x1b7 + 0xdb * 0x5:
            case 0x10fa + -0x2 * 0x2ed + -0xe9 * 0xc:
            case 0xfd0 + -0x1 * -0x14d9 + -0x2474:
            case 0x3 * -0x1ea + 0x1cfd + -0x1709 * 0x1:
            case 0x1 * -0x708 + 0x14f2 + -0xdb3:
            case -0x10a2 * 0x1 + -0x43 * -0x29 + 0x61f:
            case -0xe57 + -0x20fc * -0x1 + -0x106 * 0x12:
                return this[_0x19e1e0(0x1c3)](_0x2934dc);
            case 0x11 * 0x15 + -0x1 * 0x496 + -0x124 * -0x3:
                this[_0x19e1e0(0x1ac)]();
                break;
            case -0x6 * 0x530 + -0x6f * -0x25 + 0x1 * 0xf51:
                return this[_0x19e1e0(0x1c6)]();
            case -0x1 * -0x9ff + -0x9 * 0x11b + 0x7 * 0x7:
                return this[_0x19e1e0(0x1da)](Singletons['eq'], Singletons['assign']);
            case -0xf1b + -0xd * -0x8e + -0x823 * -0x1:
                return this[_0x19e1e0(0x1da)](Singletons['ge'], Singletons['gt']);
            case -0x227b + -0x2 * 0xa2 + -0x120d * -0x2:
                return Singletons[_0x19e1e0(0x1db)];
            case -0x2 * 0x75a + -0x13 * 0x119 + 0x23ec:
                return Singletons['rightBracket'];
            case 0x5 * 0x40d + 0x2 * -0x691 + -0x1 * 0x6a3:
                return Singletons['or'];
            default:
                return this[_0x19e1e0(0x1b0)]();
            }
        }
        return Singletons[_0x19e1e0(0x1dc)];
    }
}
function _0x415c(_0x1a30f2, _0x3d66ec) {
    return _0x415c = function (_0x31e0d5, _0x886b72) {
        _0x31e0d5 = _0x31e0d5 - (0x1a * -0x81 + 0x1ab + -0x24 * -0x5c);
        let _0x56cd4d = _0x3730[_0x31e0d5];
        return _0x56cd4d;
    }, _0x415c(_0x1a30f2, _0x3d66ec);
}
export {
    Lexer,
    Token,
    TOKEN
};
