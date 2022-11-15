const BLOCKED = [
    'ForStatement',
    'WhileStatement'
];
export default (_0x101784, _0x46d866) => {
    const _0x257bec = {
        'VfWRa': function (_0x3b3083, _0x2ffe32) {
            return _0x3b3083 === _0x2ffe32;
        },
        'cEWJB': function (_0x2074e6, _0x2c0999) {
            return _0x2074e6(_0x2c0999);
        },
        'mQcTv': function (_0x1ea396, _0x569edc) {
            return _0x1ea396 === _0x569edc;
        },
        'KGHdo': 'UnaryExpression',
        'BQEZD': 'void',
        'IPwNq': function (_0xa6de9b, _0x39c7a0) {
            return _0xa6de9b == _0x39c7a0;
        },
        'SWykc': 'Identifier',
        'KlqgI': 'undefined',
        'uWrCo': 'single'
    };
    let {jscodeshift: _0x3d6ac6} = _0x46d866, _0x4b51ce = 0x0, _0x4ab222 = _0x257bec['cEWJB'](_0x3d6ac6, _0x101784['source'])['find'](_0x3d6ac6['VariableDeclaration'])['forEach'](_0x29cab4);
    function _0x29cab4(_0x4836c2) {
        const _0x248301 = {
            'lFYqF': function (_0x1e4bc5, _0x299d46) {
                return _0x257bec['VfWRa'](_0x1e4bc5, _0x299d46);
            },
            'CwMUa': function (_0x14ed30, _0x3ce8d6) {
                return _0x257bec['cEWJB'](_0x14ed30, _0x3ce8d6);
            }
        };
        let _0x7220f2 = _0x4836c2, _0x35eaa7 = !![];
        while (_0x7220f2 = _0x7220f2['parentPath']) {
            if (~BLOCKED['indexOf'](_0x7220f2['value']['type'])) {
                _0x35eaa7 = ![];
                break;
            }
        }
        _0x4836c2['value']['declarations']['filter'](_0x322ffe)['forEach'](_0x44bd40 => {
            _0x248301['lFYqF'](_0x35eaa7, ![]) ? console['log']('>\x20Skipping\x20removal\x20of\x20undefined\x20init\x20for\x20\x22' + _0x44bd40['id']['name'] + '\x22:\x20within\x20' + _0x7220f2['value']['type']) : _0x248301['CwMUa'](_0x5bba9f, _0x44bd40);
        });
    }
    function _0x5bba9f(_0x31ce3b) {
        _0x31ce3b['init'] = null, _0x4b51ce++;
    }
    function _0x322ffe(_0x5df11f) {
        let {init: _0x5adf38} = _0x5df11f;
        if (_0x5adf38) {
            if (_0x257bec['mQcTv'](_0x5adf38['type'], _0x257bec['KGHdo']) && _0x257bec['mQcTv'](_0x5adf38['operator'], _0x257bec['BQEZD']) && _0x257bec['IPwNq'](_0x5adf38['argument']['value'], 0x0))
                return !![];
            if (_0x257bec['mQcTv'](_0x5adf38['type'], _0x257bec['SWykc']) && _0x257bec['mQcTv'](_0x5adf38['name'], _0x257bec['KlqgI']))
                return !![];
        }
        return ![];
    }
    return _0x4b51ce ? _0x4ab222['toSource']({ 'quote': _0x257bec['uWrCo'] }) : null;
};
