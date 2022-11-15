const _0x30a6 = [
    'value',
    'create',
    'identifier',
    'string',
    'infinity',
    'entries',
    'has',
    'nan',
    'number',
    'data',
    'pos',
    'len',
    'length',
    'skipUntilEOL',
    'match',
    'index',
    'getIdentifier',
    'slice',
    'Invalid\x20token\x20in\x20FormCalc\x20expression\x20at\x20position\x20',
    'charCodeAt',
    'push',
    'substring',
    'fromCharCode',
    'join',
    'getLower',
    'getSlash',
    'getDot',
    'dotDot',
    'dotStar',
    'dot',
    'next',
    'getString',
    'leftParen',
    'rightParen',
    'times',
    'plus',
    'comma',
    'minus',
    'divide',
    'getCompOperator',
    'assign',
    'rightBracket',
    'eof',
    '7219jZGMjW',
    '31XYKrmt',
    '4qIGzXX',
    '81589ylmOvi',
    '236574xoZNht',
    '94998rtMxKd',
    '2DLdPFF',
    '103284NeOodM',
    '19188KsdPER',
    '4mQLmqk',
    '1JVXHMs',
    '771146PVKeGz',
    'and',
    'break',
    'continue',
    'downto',
    'else',
    'elseif',
    'endfor',
    'endif',
    'exit',
    'foreach',
    'func',
    'not',
    'null',
    'return',
    'step',
    'then',
    'this',
    'throw',
    'while'
];
const _0x20a184 = _0x2ed9;
(function (_0x3e3639, _0x4616b1) {
    const _0x4a2625 = _0x2ed9;
    while (!![]) {
        try {
            const _0x3b846e = -parseInt(_0x4a2625(0x1e7)) * -parseInt(_0x4a2625(0x1e8)) + -parseInt(_0x4a2625(0x1e9)) * -parseInt(_0x4a2625(0x1ea)) + parseInt(_0x4a2625(0x1eb)) + -parseInt(_0x4a2625(0x1ec)) * -parseInt(_0x4a2625(0x1ed)) + -parseInt(_0x4a2625(0x1ee)) + -parseInt(_0x4a2625(0x1ef)) * -parseInt(_0x4a2625(0x1f0)) + -parseInt(_0x4a2625(0x1f1)) * parseInt(_0x4a2625(0x1f2));
            if (_0x3b846e === _0x4616b1)
                break;
            else
                _0x3e3639['push'](_0x3e3639['shift']());
        } catch (_0x47fb4f) {
            _0x3e3639['push'](_0x3e3639['shift']());
        }
    }
}(_0x30a6, 0x2bb5d));
function _0x2ed9(_0x10aea7, _0xe3c28e) {
    return _0x2ed9 = function (_0x30a67e, _0x2ed90f) {
        _0x30a67e = _0x30a67e - 0x1e7;
        let _0x4553bc = _0x30a6[_0x30a67e];
        return _0x4553bc;
    }, _0x2ed9(_0x10aea7, _0xe3c28e);
}
const KEYWORDS = new Set([
        _0x20a184(0x1f3),
        _0x20a184(0x1f4),
        _0x20a184(0x1f5),
        'do',
        _0x20a184(0x1f6),
        _0x20a184(0x1f7),
        _0x20a184(0x1f8),
        'end',
        _0x20a184(0x1f9),
        'endfunc',
        _0x20a184(0x1fa),
        'endwhile',
        'eq',
        _0x20a184(0x1fb),
        'for',
        _0x20a184(0x1fc),
        _0x20a184(0x1fd),
        'ge',
        'gt',
        'if',
        'in',
        'infinity',
        'le',
        'lt',
        'nan',
        'ne',
        _0x20a184(0x1fe),
        _0x20a184(0x1ff),
        'or',
        _0x20a184(0x200),
        _0x20a184(0x201),
        _0x20a184(0x202),
        _0x20a184(0x203),
        _0x20a184(0x204),
        'upto',
        'var',
        _0x20a184(0x205)
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
    constructor(_0x1adfe1, _0x3d350c = null) {
        const _0xd5d682 = _0x20a184;
        this['id'] = _0x1adfe1, this[_0xd5d682(0x206)] = _0x3d350c;
    }
}
const Singletons = function () {
    const _0x4d1813 = _0x20a184, _0x1d09e7 = Object[_0x4d1813(0x207)](null), _0x7fe034 = new Set([
            _0x4d1813(0x208),
            _0x4d1813(0x209),
            'number',
            'nan',
            _0x4d1813(0x20a)
        ]);
    for (const [_0x137679, _0x1598e0] of Object[_0x4d1813(0x20b)](TOKEN)) {
        !_0x7fe034[_0x4d1813(0x20c)](_0x137679) && (_0x1d09e7[_0x137679] = new Token(_0x1598e0));
    }
    return _0x1d09e7[_0x4d1813(0x20d)] = new Token(TOKEN[_0x4d1813(0x20e)], NaN), _0x1d09e7[_0x4d1813(0x20a)] = new Token(TOKEN[_0x4d1813(0x20e)], Infinity), _0x1d09e7;
}();
class Lexer {
    constructor(_0x5b958f) {
        const _0x551202 = _0x20a184;
        this[_0x551202(0x20f)] = _0x5b958f, this[_0x551202(0x210)] = 0x0, this[_0x551202(0x211)] = _0x5b958f[_0x551202(0x212)], this['strBuf'] = [];
    }
    [_0x20a184(0x213)]() {
        const _0x540c93 = _0x20a184, _0x56d4d7 = this[_0x540c93(0x20f)]['slice'](this[_0x540c93(0x210)])[_0x540c93(0x214)](eolPattern);
        _0x56d4d7 ? this[_0x540c93(0x210)] += _0x56d4d7[_0x540c93(0x215)] + _0x56d4d7[0x0]['length'] : this[_0x540c93(0x210)] = this[_0x540c93(0x211)];
    }
    [_0x20a184(0x216)]() {
        const _0xb40e2 = _0x20a184;
        this[_0xb40e2(0x210)]--;
        const _0x267e88 = this['data'][_0xb40e2(0x217)](this[_0xb40e2(0x210)])[_0xb40e2(0x214)](identifierPattern);
        if (!_0x267e88)
            throw new Error(_0xb40e2(0x218) + this['pos'] + '.');
        const _0x5ec66c = this['data'][_0xb40e2(0x217)](this[_0xb40e2(0x210)], this[_0xb40e2(0x210)] + _0x267e88[0x0][_0xb40e2(0x212)]);
        this['pos'] += _0x267e88[0x0]['length'];
        const _0x317212 = _0x5ec66c['toLowerCase']();
        if (!KEYWORDS[_0xb40e2(0x20c)](_0x317212))
            return new Token(TOKEN[_0xb40e2(0x208)], _0x5ec66c);
        return Singletons[_0x317212];
    }
    ['getString']() {
        const _0x2b47f1 = _0x20a184, _0x228c02 = this['strBuf'], _0x3193ba = this[_0x2b47f1(0x20f)];
        let _0x566303 = this[_0x2b47f1(0x210)];
        while (this[_0x2b47f1(0x210)] < this[_0x2b47f1(0x211)]) {
            const _0x3ca7fc = _0x3193ba[_0x2b47f1(0x219)](this[_0x2b47f1(0x210)]++);
            if (_0x3ca7fc === 0x22) {
                if (_0x3193ba[_0x2b47f1(0x219)](this[_0x2b47f1(0x210)]) === 0x22) {
                    _0x228c02[_0x2b47f1(0x21a)](_0x3193ba['slice'](_0x566303, this['pos']++)), _0x566303 = this[_0x2b47f1(0x210)];
                    continue;
                }
                break;
            }
            if (_0x3ca7fc === 0x5c) {
                const _0x9e2f6f = _0x3193ba[_0x2b47f1(0x21b)](this[_0x2b47f1(0x210)], this[_0x2b47f1(0x210)] + 0xa)[_0x2b47f1(0x214)](hexPattern);
                if (!_0x9e2f6f)
                    continue;
                _0x228c02[_0x2b47f1(0x21a)](_0x3193ba['slice'](_0x566303, this[_0x2b47f1(0x210)] - 0x1));
                const _0x5f3595 = _0x9e2f6f[0x1];
                if (_0x5f3595[_0x2b47f1(0x212)] === 0x4)
                    _0x228c02[_0x2b47f1(0x21a)](String[_0x2b47f1(0x21c)](parseInt(_0x5f3595, 0x10))), _0x566303 = this[_0x2b47f1(0x210)] += 0x5;
                else
                    _0x5f3595[_0x2b47f1(0x212)] !== 0x8 ? (_0x228c02[_0x2b47f1(0x21a)](String[_0x2b47f1(0x21c)](parseInt(_0x5f3595[_0x2b47f1(0x217)](0x0, 0x4), 0x10))), _0x566303 = this[_0x2b47f1(0x210)] += 0x5) : (_0x228c02[_0x2b47f1(0x21a)](String[_0x2b47f1(0x21c)](parseInt(_0x5f3595, 0x10))), _0x566303 = this[_0x2b47f1(0x210)] += 0x9);
            }
        }
        const _0x4a954f = _0x3193ba['slice'](_0x566303, this[_0x2b47f1(0x210)] - 0x1);
        if (_0x228c02['length'] === 0x0)
            return new Token(TOKEN[_0x2b47f1(0x209)], _0x4a954f);
        _0x228c02[_0x2b47f1(0x21a)](_0x4a954f);
        const _0x144466 = _0x228c02[_0x2b47f1(0x21d)]('');
        return _0x228c02['length'] = 0x0, new Token(TOKEN[_0x2b47f1(0x209)], _0x144466);
    }
    ['getNumber'](_0x14ae7a) {
        const _0x2b2287 = _0x20a184, _0x19dfc2 = this[_0x2b2287(0x20f)][_0x2b2287(0x21b)](this[_0x2b2287(0x210)])[_0x2b2287(0x214)](numberPattern);
        if (!_0x19dfc2)
            return _0x14ae7a - 0x30;
        const _0x45adcf = parseFloat(this[_0x2b2287(0x20f)][_0x2b2287(0x21b)](this[_0x2b2287(0x210)] - 0x1, this[_0x2b2287(0x210)] + _0x19dfc2[0x0][_0x2b2287(0x212)]));
        return this['pos'] += _0x19dfc2[0x0][_0x2b2287(0x212)], new Token(TOKEN[_0x2b2287(0x20e)], _0x45adcf);
    }
    ['getCompOperator'](_0x46ae74, _0x3bcceb) {
        const _0x92d965 = _0x20a184;
        if (this[_0x92d965(0x20f)]['charCodeAt'](this[_0x92d965(0x210)]) === 0x3d)
            return this['pos']++, _0x46ae74;
        return _0x3bcceb;
    }
    [_0x20a184(0x21e)]() {
        const _0x57d425 = _0x20a184, _0x46cff6 = this[_0x57d425(0x20f)][_0x57d425(0x219)](this[_0x57d425(0x210)]);
        if (_0x46cff6 === 0x3d)
            return this['pos']++, Singletons['le'];
        if (_0x46cff6 === 0x3e)
            return this[_0x57d425(0x210)]++, Singletons['ne'];
        return Singletons['lt'];
    }
    [_0x20a184(0x21f)]() {
        const _0x41b656 = _0x20a184;
        if (this[_0x41b656(0x20f)][_0x41b656(0x219)](this[_0x41b656(0x210)]) === 0x2f)
            return this[_0x41b656(0x213)](), ![];
        return !![];
    }
    [_0x20a184(0x220)]() {
        const _0x370c67 = _0x20a184, _0x1b8a17 = this[_0x370c67(0x20f)][_0x370c67(0x219)](this[_0x370c67(0x210)]);
        if (_0x1b8a17 === 0x2e)
            return this[_0x370c67(0x210)]++, Singletons[_0x370c67(0x221)];
        if (_0x1b8a17 === 0x2a)
            return this[_0x370c67(0x210)]++, Singletons[_0x370c67(0x222)];
        if (_0x1b8a17 === 0x23)
            return this['pos']++, Singletons['dotHash'];
        if (0x30 <= _0x1b8a17 && _0x1b8a17 <= 0x39) {
            this['pos']++;
            const _0x3a6a5f = this[_0x370c67(0x20f)]['substring'](this[_0x370c67(0x210)])[_0x370c67(0x214)](dotNumberPattern);
            if (!_0x3a6a5f)
                return new Token(TOKEN[_0x370c67(0x20e)], (_0x1b8a17 - 0x30) / 0xa);
            const _0xdf2d6e = this[_0x370c67(0x210)] + _0x3a6a5f[0x0][_0x370c67(0x212)], _0x2c73ae = parseFloat(this[_0x370c67(0x20f)][_0x370c67(0x21b)](this[_0x370c67(0x210)] - 0x2, _0xdf2d6e));
            return this[_0x370c67(0x210)] = _0xdf2d6e, new Token(TOKEN[_0x370c67(0x20e)], _0x2c73ae);
        }
        return Singletons[_0x370c67(0x223)];
    }
    [_0x20a184(0x224)]() {
        const _0x3b6cdb = _0x20a184;
        while (this[_0x3b6cdb(0x210)] < this[_0x3b6cdb(0x211)]) {
            const _0x3f25f9 = this[_0x3b6cdb(0x20f)][_0x3b6cdb(0x219)](this['pos']++);
            switch (_0x3f25f9) {
            case 0x9:
            case 0xa:
            case 0xb:
            case 0xc:
            case 0xd:
            case 0x20:
                break;
            case 0x22:
                return this[_0x3b6cdb(0x225)]();
            case 0x26:
                return Singletons[_0x3b6cdb(0x1f3)];
            case 0x28:
                return Singletons[_0x3b6cdb(0x226)];
            case 0x29:
                return Singletons[_0x3b6cdb(0x227)];
            case 0x2a:
                return Singletons[_0x3b6cdb(0x228)];
            case 0x2b:
                return Singletons[_0x3b6cdb(0x229)];
            case 0x2c:
                return Singletons[_0x3b6cdb(0x22a)];
            case 0x2d:
                return Singletons[_0x3b6cdb(0x22b)];
            case 0x2e:
                return this['getDot']();
            case 0x2f:
                if (this[_0x3b6cdb(0x21f)]())
                    return Singletons[_0x3b6cdb(0x22c)];
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
                return this['getNumber'](_0x3f25f9);
            case 0x3b:
                this[_0x3b6cdb(0x213)]();
                break;
            case 0x3c:
                return this[_0x3b6cdb(0x21e)]();
            case 0x3d:
                return this[_0x3b6cdb(0x22d)](Singletons['eq'], Singletons[_0x3b6cdb(0x22e)]);
            case 0x3e:
                return this[_0x3b6cdb(0x22d)](Singletons['ge'], Singletons['gt']);
            case 0x5b:
                return Singletons['leftBracket'];
            case 0x5d:
                return Singletons[_0x3b6cdb(0x22f)];
            case 0x7c:
                return Singletons['or'];
            default:
                return this['getIdentifier']();
            }
        }
        return Singletons[_0x3b6cdb(0x230)];
    }
}
export {
    Lexer,
    Token,
    TOKEN
};
