const _0x1170 = [
    'keyword',
    'beforeExpr',
    'startsExpr',
    'isLoop',
    'isAssign',
    'prefix',
    'postfix',
    'binop',
    'num',
    'regexp',
    'string',
    'name',
    'eof',
    'template',
    '...',
    '++/--',
    '<</>>/>>>',
    '+/-',
    'break',
    'case',
    'catch',
    'continue',
    'debugger',
    'else',
    'for',
    'function',
    'return',
    'throw',
    'const',
    'while',
    'this',
    'class',
    'extends',
    'export',
    'false',
    'instanceof',
    'typeof',
    '20riVymQ',
    '17053SExaUh',
    '420443gWAGcI',
    '57127jGBZoY',
    '7OjqyQO',
    '110262KBzMtK',
    '199562pcMqvV',
    '184988zpIAkk',
    '896520aIRdIg',
    'label'
];
const _0x183d51 = _0x4256;
(function (_0x3d23ca, _0x16ee02) {
    const _0x708210 = _0x4256;
    while (!![]) {
        try {
            const _0xe2b95a = -parseInt(_0x708210(0x1ba)) * -parseInt(_0x708210(0x1bb)) + -parseInt(_0x708210(0x1bc)) + -parseInt(_0x708210(0x1bd)) * parseInt(_0x708210(0x1be)) + -parseInt(_0x708210(0x1bf)) + -parseInt(_0x708210(0x1c0)) + parseInt(_0x708210(0x1c1)) + parseInt(_0x708210(0x1c2));
            if (_0xe2b95a === _0x16ee02)
                break;
            else
                _0x3d23ca['push'](_0x3d23ca['shift']());
        } catch (_0x321af3) {
            _0x3d23ca['push'](_0x3d23ca['shift']());
        }
    }
}(_0x1170, 0x4763c));
export class TokenType {
    constructor(_0x1f8b71, _0x432ea6 = {}) {
        const _0x435ba5 = _0x4256;
        this[_0x435ba5(0x1c3)] = _0x1f8b71, this[_0x435ba5(0x1c4)] = _0x432ea6[_0x435ba5(0x1c4)], this[_0x435ba5(0x1c5)] = !!_0x432ea6[_0x435ba5(0x1c5)], this[_0x435ba5(0x1c6)] = !!_0x432ea6[_0x435ba5(0x1c6)], this[_0x435ba5(0x1c7)] = !!_0x432ea6[_0x435ba5(0x1c7)], this[_0x435ba5(0x1c8)] = !!_0x432ea6[_0x435ba5(0x1c8)], this[_0x435ba5(0x1c9)] = !!_0x432ea6[_0x435ba5(0x1c9)], this[_0x435ba5(0x1ca)] = !!_0x432ea6[_0x435ba5(0x1ca)], this[_0x435ba5(0x1cb)] = _0x432ea6['binop'] || null, this['updateContext'] = null;
    }
}
function binop(_0x3c7b3e, _0x29a937) {
    return new TokenType(_0x3c7b3e, {
        'beforeExpr': !![],
        'binop': _0x29a937
    });
}
function _0x4256(_0x1c1777, _0x26fe72) {
    return _0x4256 = function (_0x117085, _0x425605) {
        _0x117085 = _0x117085 - 0x1ba;
        let _0xdfd57f = _0x1170[_0x117085];
        return _0xdfd57f;
    }, _0x4256(_0x1c1777, _0x26fe72);
}
const beforeExpr = { 'beforeExpr': !![] }, startsExpr = { 'startsExpr': !![] };
export const keywords = {};
function kw(_0x2bbc5e, _0x4f847e = {}) {
    const _0x128406 = _0x4256;
    return _0x4f847e[_0x128406(0x1c4)] = _0x2bbc5e, keywords[_0x2bbc5e] = new TokenType(_0x2bbc5e, _0x4f847e);
}
export const types = {
    'num': new TokenType(_0x183d51(0x1cc), startsExpr),
    'regexp': new TokenType(_0x183d51(0x1cd), startsExpr),
    'string': new TokenType(_0x183d51(0x1ce), startsExpr),
    'name': new TokenType(_0x183d51(0x1cf), startsExpr),
    'eof': new TokenType(_0x183d51(0x1d0)),
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
    'template': new TokenType(_0x183d51(0x1d1)),
    'invalidTemplate': new TokenType('invalidTemplate'),
    'ellipsis': new TokenType(_0x183d51(0x1d2), beforeExpr),
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
    'incDec': new TokenType(_0x183d51(0x1d3), {
        'prefix': !![],
        'postfix': !![],
        'startsExpr': !![]
    }),
    'prefix': new TokenType('!/~', {
        'beforeExpr': !![],
        'prefix': !![],
        'startsExpr': !![]
    }),
    'logicalOR': binop('||', 0x1),
    'logicalAND': binop('&&', 0x2),
    'bitwiseOR': binop('|', 0x3),
    'bitwiseXOR': binop('^', 0x4),
    'bitwiseAND': binop('&', 0x5),
    'equality': binop('==/!=/===/!==', 0x6),
    'relational': binop('</>/<=/>=', 0x7),
    'bitShift': binop(_0x183d51(0x1d4), 0x8),
    'plusMin': new TokenType(_0x183d51(0x1d5), {
        'beforeExpr': !![],
        'binop': 0x9,
        'prefix': !![],
        'startsExpr': !![]
    }),
    'modulo': binop('%', 0xa),
    'star': binop('*', 0xa),
    'slash': binop('/', 0xa),
    'starstar': new TokenType('**', { 'beforeExpr': !![] }),
    '_break': kw(_0x183d51(0x1d6)),
    '_case': kw(_0x183d51(0x1d7), beforeExpr),
    '_catch': kw(_0x183d51(0x1d8)),
    '_continue': kw(_0x183d51(0x1d9)),
    '_debugger': kw(_0x183d51(0x1da)),
    '_default': kw('default', beforeExpr),
    '_do': kw('do', {
        'isLoop': !![],
        'beforeExpr': !![]
    }),
    '_else': kw(_0x183d51(0x1db), beforeExpr),
    '_finally': kw('finally'),
    '_for': kw(_0x183d51(0x1dc), { 'isLoop': !![] }),
    '_function': kw(_0x183d51(0x1dd), startsExpr),
    '_if': kw('if'),
    '_return': kw(_0x183d51(0x1de), beforeExpr),
    '_switch': kw('switch'),
    '_throw': kw(_0x183d51(0x1df), beforeExpr),
    '_try': kw('try'),
    '_var': kw('var'),
    '_const': kw(_0x183d51(0x1e0)),
    '_while': kw(_0x183d51(0x1e1), { 'isLoop': !![] }),
    '_with': kw('with'),
    '_new': kw('new', {
        'beforeExpr': !![],
        'startsExpr': !![]
    }),
    '_this': kw(_0x183d51(0x1e2), startsExpr),
    '_super': kw('super', startsExpr),
    '_class': kw(_0x183d51(0x1e3), startsExpr),
    '_extends': kw(_0x183d51(0x1e4), beforeExpr),
    '_export': kw(_0x183d51(0x1e5)),
    '_import': kw('import', startsExpr),
    '_null': kw('null', startsExpr),
    '_true': kw('true', startsExpr),
    '_false': kw(_0x183d51(0x1e6), startsExpr),
    '_in': kw('in', {
        'beforeExpr': !![],
        'binop': 0x7
    }),
    '_instanceof': kw(_0x183d51(0x1e7), {
        'beforeExpr': !![],
        'binop': 0x7
    }),
    '_typeof': kw(_0x183d51(0x1e8), {
        'beforeExpr': !![],
        'prefix': !![],
        'startsExpr': !![]
    }),
    '_void': kw('void', {
        'beforeExpr': !![],
        'prefix': !![],
        'startsExpr': !![]
    }),
    '_delete': kw('delete', {
        'beforeExpr': !![],
        'prefix': !![],
        'startsExpr': !![]
    })
};
