const _0x42fe = [
    'try',
    'var',
    'new',
    'this',
    'super',
    'export',
    'true',
    'false',
    'instanceof',
    'typeof',
    'void',
    'delete',
    '21677qrrDcI',
    '438509KQznDe',
    '1USccNy',
    '1KZsgwZ',
    '503777CNuwZC',
    '443001pWGcZs',
    '48142POBDxk',
    '10SxnLPF',
    '153208mYRIPI',
    '481369iemTiy',
    '6|0|3|5|4|8|7|1|2|9',
    'split',
    'keyword',
    'postfix',
    'binop',
    'beforeExpr',
    'isLoop',
    'startsExpr',
    'label',
    'isAssign',
    'updateContext',
    'num',
    'regexp',
    'string',
    'name',
    'eof',
    'template',
    'invalidTemplate',
    '!/~',
    '</>/<=/>=',
    'break',
    'case',
    'catch',
    'continue',
    'debugger',
    'default',
    'else',
    'for',
    'function',
    'switch'
];
const _0x26616b = _0x1882;
(function (_0x45e5f1, _0x57a61f) {
    const _0x46d4d8 = _0x1882;
    while (!![]) {
        try {
            const _0x18b6d1 = -parseInt(_0x46d4d8(0x15e)) + parseInt(_0x46d4d8(0x15f)) * parseInt(_0x46d4d8(0x160)) + -parseInt(_0x46d4d8(0x161)) * parseInt(_0x46d4d8(0x162)) + -parseInt(_0x46d4d8(0x163)) + parseInt(_0x46d4d8(0x164)) * parseInt(_0x46d4d8(0x165)) + -parseInt(_0x46d4d8(0x166)) + parseInt(_0x46d4d8(0x167));
            if (_0x18b6d1 === _0x57a61f)
                break;
            else
                _0x45e5f1['push'](_0x45e5f1['shift']());
        } catch (_0x3db247) {
            _0x45e5f1['push'](_0x45e5f1['shift']());
        }
    }
}(_0x42fe, 0x82529 + -0x6b5 * -0xba + -0x8c058));
function _0x1882(_0x90b6e8, _0x1e680b) {
    return _0x1882 = function (_0x3a80b1, _0x211330) {
        _0x3a80b1 = _0x3a80b1 - (-0x1 * -0x17b3 + 0x3 * 0x5ac + -0x2759);
        let _0x5cb2a9 = _0x42fe[_0x3a80b1];
        return _0x5cb2a9;
    }, _0x1882(_0x90b6e8, _0x1e680b);
}
export class TokenType {
    constructor(_0x468c5a, _0x67bde4 = {}) {
        const _0x29af86 = _0x1882, _0x371ad0 = { 'lsLsZ': _0x29af86(0x168) }, _0x60ca72 = _0x371ad0['lsLsZ'][_0x29af86(0x169)]('|');
        let _0xf6a836 = 0x4c7 * 0x2 + -0xd58 + -0xa * -0x61;
        while (!![]) {
            switch (_0x60ca72[_0xf6a836++]) {
            case '0':
                this[_0x29af86(0x16a)] = _0x67bde4['keyword'];
                continue;
            case '1':
                this[_0x29af86(0x16b)] = !!_0x67bde4[_0x29af86(0x16b)];
                continue;
            case '2':
                this[_0x29af86(0x16c)] = _0x67bde4[_0x29af86(0x16c)] || null;
                continue;
            case '3':
                this[_0x29af86(0x16d)] = !!_0x67bde4['beforeExpr'];
                continue;
            case '4':
                this[_0x29af86(0x16e)] = !!_0x67bde4[_0x29af86(0x16e)];
                continue;
            case '5':
                this[_0x29af86(0x16f)] = !!_0x67bde4[_0x29af86(0x16f)];
                continue;
            case '6':
                this[_0x29af86(0x170)] = _0x468c5a;
                continue;
            case '7':
                this['prefix'] = !!_0x67bde4['prefix'];
                continue;
            case '8':
                this['isAssign'] = !!_0x67bde4[_0x29af86(0x171)];
                continue;
            case '9':
                this[_0x29af86(0x172)] = null;
                continue;
            }
            break;
        }
    }
}
function binop(_0x2d3ea5, _0x52e5d8) {
    return new TokenType(_0x2d3ea5, {
        'beforeExpr': !![],
        'binop': _0x52e5d8
    });
}
const beforeExpr = { 'beforeExpr': !![] }, startsExpr = { 'startsExpr': !![] };
export const keywords = {};
function kw(_0x1f32e0, _0xf031dc = {}) {
    const _0x354247 = _0x1882;
    return _0xf031dc[_0x354247(0x16a)] = _0x1f32e0, keywords[_0x1f32e0] = new TokenType(_0x1f32e0, _0xf031dc);
}
export const types = {
    'num': new TokenType(_0x26616b(0x173), startsExpr),
    'regexp': new TokenType(_0x26616b(0x174), startsExpr),
    'string': new TokenType(_0x26616b(0x175), startsExpr),
    'name': new TokenType(_0x26616b(0x176), startsExpr),
    'eof': new TokenType(_0x26616b(0x177)),
    'bracketL': new TokenType('[', {
        'beforeExpr': !![],
        'startsExpr': !![]
    }),
    'bracketR': new TokenType(']'),
    'braceL': new TokenType('{', {
        'beforeExpr': !![],
        'startsExpr': !![]
    }),
    'braceR': new TokenType('}'),
    'parenL': new TokenType('(', {
        'beforeExpr': !![],
        'startsExpr': !![]
    }),
    'parenR': new TokenType(')'),
    'comma': new TokenType(',', beforeExpr),
    'semi': new TokenType(';', beforeExpr),
    'colon': new TokenType(':', beforeExpr),
    'dot': new TokenType('.'),
    'question': new TokenType('?', beforeExpr),
    'arrow': new TokenType('=>', beforeExpr),
    'template': new TokenType(_0x26616b(0x178)),
    'invalidTemplate': new TokenType(_0x26616b(0x179)),
    'ellipsis': new TokenType('...', beforeExpr),
    'backQuote': new TokenType('`', startsExpr),
    'dollarBraceL': new TokenType('${', {
        'beforeExpr': !![],
        'startsExpr': !![]
    }),
    'eq': new TokenType('=', {
        'beforeExpr': !![],
        'isAssign': !![]
    }),
    'assign': new TokenType('_=', {
        'beforeExpr': !![],
        'isAssign': !![]
    }),
    'incDec': new TokenType('++/--', {
        'prefix': !![],
        'postfix': !![],
        'startsExpr': !![]
    }),
    'prefix': new TokenType(_0x26616b(0x17a), {
        'beforeExpr': !![],
        'prefix': !![],
        'startsExpr': !![]
    }),
    'logicalOR': binop('||', 0x2ca + 0x12ba + -0x1583 * 0x1),
    'logicalAND': binop('&&', -0x166 * -0x19 + -0x3e8 + -0x1f0c),
    'bitwiseOR': binop('|', 0x1f4b + 0x1238 + 0xc60 * -0x4),
    'bitwiseXOR': binop('^', -0x377 * 0x3 + -0x86c + -0x12d5 * -0x1),
    'bitwiseAND': binop('&', 0x187 + -0xfb4 + 0xe32),
    'equality': binop('==/!=/===/!==', 0x16c3 + -0x2 * -0xd57 + -0x316b),
    'relational': binop(_0x26616b(0x17b), 0x6 * 0x278 + -0x1f44 + 0x107b),
    'bitShift': binop('<</>>/>>>', -0x25d7 + 0x715 + -0x2 * -0xf65),
    'plusMin': new TokenType('+/-', {
        'beforeExpr': !![],
        'binop': 0x9,
        'prefix': !![],
        'startsExpr': !![]
    }),
    'modulo': binop('%', -0x31b + 0x137b * 0x1 + 0x572 * -0x3),
    'star': binop('*', 0x1 * 0x362 + -0x231a + 0x1fc2),
    'slash': binop('/', -0x1c06 + -0xd * -0xd4 + 0x453 * 0x4),
    'starstar': new TokenType('**', { 'beforeExpr': !![] }),
    '_break': kw(_0x26616b(0x17c)),
    '_case': kw(_0x26616b(0x17d), beforeExpr),
    '_catch': kw(_0x26616b(0x17e)),
    '_continue': kw(_0x26616b(0x17f)),
    '_debugger': kw(_0x26616b(0x180)),
    '_default': kw(_0x26616b(0x181), beforeExpr),
    '_do': kw('do', {
        'isLoop': !![],
        'beforeExpr': !![]
    }),
    '_else': kw(_0x26616b(0x182), beforeExpr),
    '_finally': kw('finally'),
    '_for': kw(_0x26616b(0x183), { 'isLoop': !![] }),
    '_function': kw(_0x26616b(0x184), startsExpr),
    '_if': kw('if'),
    '_return': kw('return', beforeExpr),
    '_switch': kw(_0x26616b(0x185)),
    '_throw': kw('throw', beforeExpr),
    '_try': kw(_0x26616b(0x186)),
    '_var': kw(_0x26616b(0x187)),
    '_const': kw('const'),
    '_while': kw('while', { 'isLoop': !![] }),
    '_with': kw('with'),
    '_new': kw(_0x26616b(0x188), {
        'beforeExpr': !![],
        'startsExpr': !![]
    }),
    '_this': kw(_0x26616b(0x189), startsExpr),
    '_super': kw(_0x26616b(0x18a), startsExpr),
    '_class': kw('class', startsExpr),
    '_extends': kw('extends', beforeExpr),
    '_export': kw(_0x26616b(0x18b)),
    '_import': kw('import', startsExpr),
    '_null': kw('null', startsExpr),
    '_true': kw(_0x26616b(0x18c), startsExpr),
    '_false': kw(_0x26616b(0x18d), startsExpr),
    '_in': kw('in', {
        'beforeExpr': !![],
        'binop': 0x7
    }),
    '_instanceof': kw(_0x26616b(0x18e), {
        'beforeExpr': !![],
        'binop': 0x7
    }),
    '_typeof': kw(_0x26616b(0x18f), {
        'beforeExpr': !![],
        'prefix': !![],
        'startsExpr': !![]
    }),
    '_void': kw(_0x26616b(0x190), {
        'beforeExpr': !![],
        'prefix': !![],
        'startsExpr': !![]
    }),
    '_delete': kw(_0x26616b(0x191), {
        'beforeExpr': !![],
        'prefix': !![],
        'startsExpr': !![]
    })
};
