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
    constructor(_0x3530e1, _0x349c11 = null) {
        this['id'] = _0x3530e1, this['value'] = _0x349c11;
    }
}
const Singletons = function () {
    const _0x371730 = Object['create'](null), _0x3209b7 = new Set([
            'identifier',
            'string',
            'number',
            'nan',
            'infinity'
        ]);
    for (const [_0x4f3345, _0x2dcd27] of Object['entries'](TOKEN)) {
        !_0x3209b7['has'](_0x4f3345) && (_0x371730[_0x4f3345] = new Token(_0x2dcd27));
    }
    return _0x371730['nan'] = new Token(TOKEN['number'], NaN), _0x371730['infinity'] = new Token(TOKEN['number'], Infinity), _0x371730;
}();
class Lexer {
    constructor(_0x6a4aaa) {
        this['data'] = _0x6a4aaa, this['pos'] = -0x119d + 0x13e0 + -0x1 * 0x243, this['len'] = _0x6a4aaa['length'], this['strBuf'] = [];
    }
    ['skipUntilEOL']() {
        const _0x57f8e8 = this['data']['slice'](this['pos'])['match'](eolPattern);
        _0x57f8e8 ? this['pos'] += _0x57f8e8['index'] + _0x57f8e8[0x1f16 + 0x127d + -0x157 * 0x25]['length'] : this['pos'] = this['len'];
    }
    ['getIdentifier']() {
        this['pos']--;
        const _0x29307c = this['data']['slice'](this['pos'])['match'](identifierPattern);
        if (!_0x29307c)
            throw new Error('Invalid\x20token\x20in\x20FormCalc\x20expression\x20at\x20position\x20' + this['pos'] + '.');
        const _0x1bb264 = this['data']['slice'](this['pos'], this['pos'] + _0x29307c[-0xb3e + -0x92e + 0x146c]['length']);
        this['pos'] += _0x29307c[0x1d95 * 0x1 + -0x4f * 0x59 + 0x1 * -0x21e]['length'];
        const _0xb434f4 = _0x1bb264['toLowerCase']();
        if (!KEYWORDS['has'](_0xb434f4))
            return new Token(TOKEN['identifier'], _0x1bb264);
        return Singletons[_0xb434f4];
    }
    ['getString']() {
        const _0x4772e2 = this['strBuf'], _0x180782 = this['data'];
        let _0x55e2f8 = this['pos'];
        while (this['pos'] < this['len']) {
            const _0x336eaa = _0x180782['charCodeAt'](this['pos']++);
            if (_0x336eaa === 0x1 * 0x1ceb + -0x6df * 0x4 + -0x14d) {
                if (_0x180782['charCodeAt'](this['pos']) === -0x26c3 + 0xda1 + 0x1944 * 0x1) {
                    _0x4772e2['push'](_0x180782['slice'](_0x55e2f8, this['pos']++)), _0x55e2f8 = this['pos'];
                    continue;
                }
                break;
            }
            if (_0x336eaa === -0x1 * 0x11ff + 0x11f * 0x1d + -0xe28) {
                const _0x4af017 = _0x180782['substring'](this['pos'], this['pos'] + (-0x211b + 0xede + 0x1247 * 0x1))['match'](hexPattern);
                if (!_0x4af017)
                    continue;
                _0x4772e2['push'](_0x180782['slice'](_0x55e2f8, this['pos'] - (0x1b * 0x1 + -0x7 * -0x15b + 0x1 * -0x997)));
                const _0x4c96b5 = _0x4af017[-0xc91 * 0x2 + -0xd85 + 0x2 * 0x1354];
                if (_0x4c96b5['length'] === -0x4c7 * 0x7 + 0x2352 + -0x1dd)
                    _0x4772e2['push'](String['fromCharCode'](parseInt(_0x4c96b5, -0x100d + -0x1c68 + 0x2c85))), _0x55e2f8 = this['pos'] += -0x1 * 0x1b88 + -0x13e2 + 0x2f6f;
                else
                    _0x4c96b5['length'] !== 0x62 * 0x38 + -0x101f + 0x3 * -0x1c3 ? (_0x4772e2['push'](String['fromCharCode'](parseInt(_0x4c96b5['slice'](-0x1c10 * -0x1 + 0x26f2 + -0x4302, 0x59 * 0x1f + 0x335 * 0x5 + 0xa * -0x2ae), 0xe29 + 0x1 * -0x1ead + 0x84a * 0x2))), _0x55e2f8 = this['pos'] += 0x25a2 + -0x148e + -0x110f) : (_0x4772e2['push'](String['fromCharCode'](parseInt(_0x4c96b5, -0xac * -0x1f + -0x1 * -0xd7b + -0x223f))), _0x55e2f8 = this['pos'] += 0x2 * -0x83f + 0xfb9 + 0xce);
            }
        }
        const _0x5c50f2 = _0x180782['slice'](_0x55e2f8, this['pos'] - (0x1 * -0xee5 + 0x1b1a * 0x1 + -0xc34));
        if (_0x4772e2['length'] === -0x5e * 0x11 + 0x4af + -0x85 * -0x3)
            return new Token(TOKEN['string'], _0x5c50f2);
        _0x4772e2['push'](_0x5c50f2);
        const _0x5a2ac1 = _0x4772e2['join']('');
        return _0x4772e2['length'] = 0x1 * 0x10e7 + 0xf69 + -0x2050, new Token(TOKEN['string'], _0x5a2ac1);
    }
    ['getNumber'](_0x429242) {
        const _0x140872 = this['data']['substring'](this['pos'])['match'](numberPattern);
        if (!_0x140872)
            return _0x429242 - (0x1 * 0x1cab + -0x372 + -0x1 * 0x1909);
        const _0x2e3ee5 = parseFloat(this['data']['substring'](this['pos'] - (-0x1 * 0x8f0 + 0x25 * 0xc2 + 0x1319 * -0x1), this['pos'] + _0x140872[-0x706 + 0x2b * -0x15 + 0x49 * 0x25]['length']));
        return this['pos'] += _0x140872[0x3 * 0x81f + -0x228f + 0xa32 * 0x1]['length'], new Token(TOKEN['number'], _0x2e3ee5);
    }
    ['getCompOperator'](_0x551af3, _0x2b6159) {
        if (this['data']['charCodeAt'](this['pos']) === -0x6a * -0x46 + -0x1131 + 0x2 * -0x5c7)
            return this['pos']++, _0x551af3;
        return _0x2b6159;
    }
    ['getLower']() {
        const _0x719fe0 = this['data']['charCodeAt'](this['pos']);
        if (_0x719fe0 === 0x8 * -0x38c + -0x59 * -0x44 + 0x4f9)
            return this['pos']++, Singletons['le'];
        if (_0x719fe0 === -0x1 * -0x22ca + 0x24b1 + -0x1 * 0x473d)
            return this['pos']++, Singletons['ne'];
        return Singletons['lt'];
    }
    ['getSlash']() {
        if (this['data']['charCodeAt'](this['pos']) === -0x4c8 + 0x2da + 0x21d)
            return this['skipUntilEOL'](), ![];
        return !![];
    }
    ['getDot']() {
        const _0x2bcbf9 = this['data']['charCodeAt'](this['pos']);
        if (_0x2bcbf9 === 0x1 * -0x4eb + 0x19de + 0xd * -0x199)
            return this['pos']++, Singletons['dotDot'];
        if (_0x2bcbf9 === -0x22cd + 0xe67 * 0x1 + 0x149 * 0x10)
            return this['pos']++, Singletons['dotStar'];
        if (_0x2bcbf9 === -0x2323 + 0x1253 + 0x10f3 * 0x1)
            return this['pos']++, Singletons['dotHash'];
        if (0x5d * -0x10 + -0xbd2 + 0x2 * 0x8e9 <= _0x2bcbf9 && _0x2bcbf9 <= 0x2c * -0xc7 + -0x26 + 0x2293) {
            this['pos']++;
            const _0x108af9 = this['data']['substring'](this['pos'])['match'](dotNumberPattern);
            if (!_0x108af9)
                return new Token(TOKEN['number'], (_0x2bcbf9 - (-0x27a * 0xb + 0x12fb + -0x3 * -0x2d1)) / (-0x12 * 0xad + -0x6ea + 0x98f * 0x2));
            const _0x3c6ce1 = this['pos'] + _0x108af9[0x4 * -0x8d5 + -0x43 * 0x27 + 0x2d89]['length'], _0x307747 = parseFloat(this['data']['substring'](this['pos'] - (-0x1e4 + -0x203d + 0x3cb * 0x9), _0x3c6ce1));
            return this['pos'] = _0x3c6ce1, new Token(TOKEN['number'], _0x307747);
        }
        return Singletons['dot'];
    }
    ['next']() {
        while (this['pos'] < this['len']) {
            const _0x1092ef = this['data']['charCodeAt'](this['pos']++);
            switch (_0x1092ef) {
            case -0x1985 + -0x3a * -0x93 + -0x7c0:
            case 0x79f + -0x116 * 0x5 + -0x227:
            case -0x1a88 + -0x67 * 0x11 + 0x216a:
            case -0xe96 + 0xfeb * -0x1 + 0x1e8d:
            case -0xb * -0x33 + -0x7e * -0x12 + -0x80 * 0x16:
            case -0x1b34 * -0x1 + -0xe8f * 0x1 + -0xc85:
                break;
            case 0x1c77 + -0x1e10 + 0x1bb:
                return this['getString']();
            case 0x1 * -0x12ff + -0x62 * -0x1c + -0x1 * -0x86d:
                return Singletons['and'];
            case 0x2f9 * -0x3 + -0x2 * 0x69d + 0x164d:
                return Singletons['leftParen'];
            case -0x22df + 0x1b46 + 0x7c2:
                return Singletons['rightParen'];
            case -0x9 * -0x2b7 + -0x13df + 0x233 * -0x2:
                return Singletons['times'];
            case -0x8ca + -0x25da + -0x2ecf * -0x1:
                return Singletons['plus'];
            case -0x1c4f + -0x395 * 0xa + 0x1 * 0x404d:
                return Singletons['comma'];
            case 0x59f * 0x1 + 0x1e6b + -0x23dd:
                return Singletons['minus'];
            case -0xb48 + -0x237e + 0x2ef4:
                return this['getDot']();
            case 0x2c * -0xa7 + -0x13bf + 0x30a2:
                if (this['getSlash']())
                    return Singletons['divide'];
                break;
            case 0x22f2 + 0x90e + 0x2bd0 * -0x1:
            case 0x5 * 0x48f + -0x158 + -0x1542:
            case 0x1ff2 + 0x1390 + -0x1 * 0x3350:
            case -0x2de + 0x154 + 0x1bd:
            case 0x1366 + -0x1 * -0xe14 + -0x2146 * 0x1:
            case 0x1f80 + -0x126d + -0xcde:
            case 0xd83 + 0xef * 0x2 + -0xf2b:
            case 0x1 * -0xcd9 + 0x1d0 + -0x18 * -0x78:
            case 0x1 * -0x2474 + -0x8bc + 0x2d68:
            case 0x5 * 0x52f + -0x838 * -0x4 + 0xee * -0x3f:
                return this['getNumber'](_0x1092ef);
            case 0xdd * 0x1 + 0x2 * 0x822 + 0x2a * -0x67:
                this['skipUntilEOL']();
                break;
            case 0x20cb + -0x2192 + 0x25 * 0x7:
                return this['getLower']();
            case -0x2e6 + -0x3 * 0x204 + -0x1 * -0x92f:
                return this['getCompOperator'](Singletons['eq'], Singletons['assign']);
            case 0x8c3 + -0x7 * 0x158 + 0xe3:
                return this['getCompOperator'](Singletons['ge'], Singletons['gt']);
            case 0x1d74 + -0x1 * 0x2043 + -0x1e * -0x1b:
                return Singletons['leftBracket'];
            case 0x2b * 0xe3 + 0x2ce * -0x2 + -0x3 * 0xab8:
                return Singletons['rightBracket'];
            case -0x7ea * -0x3 + 0x100a + 0x7dc * -0x5:
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
