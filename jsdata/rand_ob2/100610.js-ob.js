const _0x4606 = [
    'return',
    'step',
    'then',
    'upto',
    'var',
    'value',
    'create',
    'string',
    'number',
    'entries',
    'data',
    'pos',
    'len',
    'length',
    'skipUntilEOL',
    'slice',
    'match',
    'index',
    'getIdentifier',
    'has',
    'identifier',
    'getString',
    'strBuf',
    'charCodeAt',
    'push',
    'substring',
    'fromCharCode',
    'getCompOperator',
    'getLower',
    'getDot',
    'dotHash',
    'dot',
    'next',
    'leftParen',
    'rightParen',
    'times',
    'plus',
    'comma',
    'getSlash',
    'divide',
    'assign',
    'leftBracket',
    'eof',
    '350684UgpZYW',
    '1eQWgpQ',
    '301381NwCZDl',
    '531633ECNtAC',
    '529821DVaagJ',
    '526748jLduKH',
    '3551jxPYuh',
    '138RcRnTO',
    '781543AYYzZp',
    'and',
    'continue',
    'downto',
    'else',
    'end',
    'endfor',
    'endfunc',
    'endwhile',
    'func',
    'infinity',
    'nan',
    'not'
];
const _0x574344 = _0x4c32;
function _0x4c32(_0x276d61, _0x29cd85) {
    return _0x4c32 = function (_0x4606ab, _0x4c324a) {
        _0x4606ab = _0x4606ab - 0xda;
        let _0x3126fb = _0x4606[_0x4606ab];
        return _0x3126fb;
    }, _0x4c32(_0x276d61, _0x29cd85);
}
(function (_0x29bb7b, _0x2dc1b9) {
    const _0x367067 = _0x4c32;
    while (!![]) {
        try {
            const _0x4905e8 = parseInt(_0x367067(0xda)) + parseInt(_0x367067(0xdb)) * -parseInt(_0x367067(0xdc)) + parseInt(_0x367067(0xdd)) + -parseInt(_0x367067(0xde)) + parseInt(_0x367067(0xdf)) + -parseInt(_0x367067(0xe0)) * -parseInt(_0x367067(0xe1)) + -parseInt(_0x367067(0xe2));
            if (_0x4905e8 === _0x2dc1b9)
                break;
            else
                _0x29bb7b['push'](_0x29bb7b['shift']());
        } catch (_0x212766) {
            _0x29bb7b['push'](_0x29bb7b['shift']());
        }
    }
}(_0x4606, 0x45e96));
const KEYWORDS = new Set([
        _0x574344(0xe3),
        'break',
        _0x574344(0xe4),
        'do',
        _0x574344(0xe5),
        _0x574344(0xe6),
        'elseif',
        _0x574344(0xe7),
        _0x574344(0xe8),
        _0x574344(0xe9),
        'endif',
        _0x574344(0xea),
        'eq',
        'exit',
        'for',
        'foreach',
        _0x574344(0xeb),
        'ge',
        'gt',
        'if',
        'in',
        _0x574344(0xec),
        'le',
        'lt',
        _0x574344(0xed),
        'ne',
        _0x574344(0xee),
        'null',
        'or',
        _0x574344(0xef),
        _0x574344(0xf0),
        _0x574344(0xf1),
        'this',
        'throw',
        _0x574344(0xf2),
        _0x574344(0xf3),
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
    constructor(_0x45c705, _0x37ba50 = null) {
        const _0x62b69e = _0x574344;
        this['id'] = _0x45c705, this[_0x62b69e(0xf4)] = _0x37ba50;
    }
}
const Singletons = function () {
    const _0x50bcb4 = _0x574344, _0x16132d = Object[_0x50bcb4(0xf5)](null), _0x1795ca = new Set([
            'identifier',
            _0x50bcb4(0xf6),
            _0x50bcb4(0xf7),
            _0x50bcb4(0xed),
            'infinity'
        ]);
    for (const [_0x2660e4, _0x1186ce] of Object[_0x50bcb4(0xf8)](TOKEN)) {
        !_0x1795ca['has'](_0x2660e4) && (_0x16132d[_0x2660e4] = new Token(_0x1186ce));
    }
    return _0x16132d[_0x50bcb4(0xed)] = new Token(TOKEN[_0x50bcb4(0xf7)], NaN), _0x16132d[_0x50bcb4(0xec)] = new Token(TOKEN['number'], Infinity), _0x16132d;
}();
class Lexer {
    constructor(_0x3acd9e) {
        const _0x2b922e = _0x574344;
        this[_0x2b922e(0xf9)] = _0x3acd9e, this[_0x2b922e(0xfa)] = 0x0, this[_0x2b922e(0xfb)] = _0x3acd9e[_0x2b922e(0xfc)], this['strBuf'] = [];
    }
    [_0x574344(0xfd)]() {
        const _0x11e716 = _0x574344, _0x547fb6 = this[_0x11e716(0xf9)][_0x11e716(0xfe)](this[_0x11e716(0xfa)])[_0x11e716(0xff)](eolPattern);
        _0x547fb6 ? this[_0x11e716(0xfa)] += _0x547fb6[_0x11e716(0x100)] + _0x547fb6[0x0][_0x11e716(0xfc)] : this[_0x11e716(0xfa)] = this[_0x11e716(0xfb)];
    }
    [_0x574344(0x101)]() {
        const _0x3ccd42 = _0x574344;
        this[_0x3ccd42(0xfa)]--;
        const _0x197055 = this[_0x3ccd42(0xf9)][_0x3ccd42(0xfe)](this['pos'])[_0x3ccd42(0xff)](identifierPattern);
        if (!_0x197055)
            throw new Error('Invalid\x20token\x20in\x20FormCalc\x20expression\x20at\x20position\x20' + this[_0x3ccd42(0xfa)] + '.');
        const _0x515cfb = this['data'][_0x3ccd42(0xfe)](this[_0x3ccd42(0xfa)], this[_0x3ccd42(0xfa)] + _0x197055[0x0][_0x3ccd42(0xfc)]);
        this[_0x3ccd42(0xfa)] += _0x197055[0x0]['length'];
        const _0x423112 = _0x515cfb['toLowerCase']();
        if (!KEYWORDS[_0x3ccd42(0x102)](_0x423112))
            return new Token(TOKEN[_0x3ccd42(0x103)], _0x515cfb);
        return Singletons[_0x423112];
    }
    [_0x574344(0x104)]() {
        const _0x84db81 = _0x574344, _0x5ace26 = this[_0x84db81(0x105)], _0x28a13f = this[_0x84db81(0xf9)];
        let _0x192178 = this[_0x84db81(0xfa)];
        while (this[_0x84db81(0xfa)] < this[_0x84db81(0xfb)]) {
            const _0x4479ee = _0x28a13f[_0x84db81(0x106)](this[_0x84db81(0xfa)]++);
            if (_0x4479ee === 0x22) {
                if (_0x28a13f[_0x84db81(0x106)](this['pos']) === 0x22) {
                    _0x5ace26[_0x84db81(0x107)](_0x28a13f[_0x84db81(0xfe)](_0x192178, this['pos']++)), _0x192178 = this[_0x84db81(0xfa)];
                    continue;
                }
                break;
            }
            if (_0x4479ee === 0x5c) {
                const _0x438c0d = _0x28a13f[_0x84db81(0x108)](this[_0x84db81(0xfa)], this['pos'] + 0xa)['match'](hexPattern);
                if (!_0x438c0d)
                    continue;
                _0x5ace26[_0x84db81(0x107)](_0x28a13f[_0x84db81(0xfe)](_0x192178, this['pos'] - 0x1));
                const _0x4298a2 = _0x438c0d[0x1];
                if (_0x4298a2[_0x84db81(0xfc)] === 0x4)
                    _0x5ace26['push'](String[_0x84db81(0x109)](parseInt(_0x4298a2, 0x10))), _0x192178 = this[_0x84db81(0xfa)] += 0x5;
                else
                    _0x4298a2[_0x84db81(0xfc)] !== 0x8 ? (_0x5ace26[_0x84db81(0x107)](String['fromCharCode'](parseInt(_0x4298a2[_0x84db81(0xfe)](0x0, 0x4), 0x10))), _0x192178 = this['pos'] += 0x5) : (_0x5ace26['push'](String['fromCharCode'](parseInt(_0x4298a2, 0x10))), _0x192178 = this[_0x84db81(0xfa)] += 0x9);
            }
        }
        const _0x207b0f = _0x28a13f['slice'](_0x192178, this[_0x84db81(0xfa)] - 0x1);
        if (_0x5ace26[_0x84db81(0xfc)] === 0x0)
            return new Token(TOKEN[_0x84db81(0xf6)], _0x207b0f);
        _0x5ace26[_0x84db81(0x107)](_0x207b0f);
        const _0x357e1d = _0x5ace26['join']('');
        return _0x5ace26[_0x84db81(0xfc)] = 0x0, new Token(TOKEN[_0x84db81(0xf6)], _0x357e1d);
    }
    ['getNumber'](_0x15b16a) {
        const _0x8c18cd = _0x574344, _0x4ea26d = this[_0x8c18cd(0xf9)][_0x8c18cd(0x108)](this['pos'])[_0x8c18cd(0xff)](numberPattern);
        if (!_0x4ea26d)
            return _0x15b16a - 0x30;
        const _0x48f49f = parseFloat(this[_0x8c18cd(0xf9)][_0x8c18cd(0x108)](this[_0x8c18cd(0xfa)] - 0x1, this[_0x8c18cd(0xfa)] + _0x4ea26d[0x0][_0x8c18cd(0xfc)]));
        return this[_0x8c18cd(0xfa)] += _0x4ea26d[0x0]['length'], new Token(TOKEN[_0x8c18cd(0xf7)], _0x48f49f);
    }
    [_0x574344(0x10a)](_0x95a34, _0x1f5839) {
        const _0x955b57 = _0x574344;
        if (this[_0x955b57(0xf9)][_0x955b57(0x106)](this['pos']) === 0x3d)
            return this[_0x955b57(0xfa)]++, _0x95a34;
        return _0x1f5839;
    }
    [_0x574344(0x10b)]() {
        const _0x51a84a = _0x574344, _0x59ca89 = this[_0x51a84a(0xf9)]['charCodeAt'](this[_0x51a84a(0xfa)]);
        if (_0x59ca89 === 0x3d)
            return this[_0x51a84a(0xfa)]++, Singletons['le'];
        if (_0x59ca89 === 0x3e)
            return this[_0x51a84a(0xfa)]++, Singletons['ne'];
        return Singletons['lt'];
    }
    ['getSlash']() {
        const _0x5bcd81 = _0x574344;
        if (this[_0x5bcd81(0xf9)]['charCodeAt'](this[_0x5bcd81(0xfa)]) === 0x2f)
            return this[_0x5bcd81(0xfd)](), ![];
        return !![];
    }
    [_0x574344(0x10c)]() {
        const _0x38fa01 = _0x574344, _0x252011 = this[_0x38fa01(0xf9)][_0x38fa01(0x106)](this[_0x38fa01(0xfa)]);
        if (_0x252011 === 0x2e)
            return this[_0x38fa01(0xfa)]++, Singletons['dotDot'];
        if (_0x252011 === 0x2a)
            return this[_0x38fa01(0xfa)]++, Singletons['dotStar'];
        if (_0x252011 === 0x23)
            return this['pos']++, Singletons[_0x38fa01(0x10d)];
        if (0x30 <= _0x252011 && _0x252011 <= 0x39) {
            this['pos']++;
            const _0x554891 = this[_0x38fa01(0xf9)][_0x38fa01(0x108)](this[_0x38fa01(0xfa)])[_0x38fa01(0xff)](dotNumberPattern);
            if (!_0x554891)
                return new Token(TOKEN[_0x38fa01(0xf7)], (_0x252011 - 0x30) / 0xa);
            const _0x194ab2 = this[_0x38fa01(0xfa)] + _0x554891[0x0]['length'], _0x18af48 = parseFloat(this['data'][_0x38fa01(0x108)](this[_0x38fa01(0xfa)] - 0x2, _0x194ab2));
            return this['pos'] = _0x194ab2, new Token(TOKEN[_0x38fa01(0xf7)], _0x18af48);
        }
        return Singletons[_0x38fa01(0x10e)];
    }
    [_0x574344(0x10f)]() {
        const _0x6d7645 = _0x574344;
        while (this['pos'] < this[_0x6d7645(0xfb)]) {
            const _0x4ec6d7 = this[_0x6d7645(0xf9)][_0x6d7645(0x106)](this['pos']++);
            switch (_0x4ec6d7) {
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
                return Singletons[_0x6d7645(0xe3)];
            case 0x28:
                return Singletons[_0x6d7645(0x110)];
            case 0x29:
                return Singletons[_0x6d7645(0x111)];
            case 0x2a:
                return Singletons[_0x6d7645(0x112)];
            case 0x2b:
                return Singletons[_0x6d7645(0x113)];
            case 0x2c:
                return Singletons[_0x6d7645(0x114)];
            case 0x2d:
                return Singletons['minus'];
            case 0x2e:
                return this[_0x6d7645(0x10c)]();
            case 0x2f:
                if (this[_0x6d7645(0x115)]())
                    return Singletons[_0x6d7645(0x116)];
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
                return this['getNumber'](_0x4ec6d7);
            case 0x3b:
                this[_0x6d7645(0xfd)]();
                break;
            case 0x3c:
                return this[_0x6d7645(0x10b)]();
            case 0x3d:
                return this['getCompOperator'](Singletons['eq'], Singletons[_0x6d7645(0x117)]);
            case 0x3e:
                return this[_0x6d7645(0x10a)](Singletons['ge'], Singletons['gt']);
            case 0x5b:
                return Singletons[_0x6d7645(0x118)];
            case 0x5d:
                return Singletons['rightBracket'];
            case 0x7c:
                return Singletons['or'];
            default:
                return this['getIdentifier']();
            }
        }
        return Singletons[_0x6d7645(0x119)];
    }
}
export {
    Lexer,
    Token,
    TOKEN
};
