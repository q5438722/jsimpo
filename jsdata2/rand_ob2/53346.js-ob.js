'use strict';
const _0x1b2a = [
    'isNotClosingParenToken',
    'getLastToken',
    'commentsExistBetween',
    'map',
    'removeRange',
    'range',
    'isSpecificMemberAccess',
    'bind',
    'type',
    'ChainExpression',
    'CallExpression',
    'callee',
    'length',
    'arguments',
    'SpreadElement',
    'upper',
    '764740FOSReg',
    '129988MwPyFL',
    '3BLLovD',
    '107206JKrpPj',
    '566FBNNYq',
    '172QBZJtf',
    '726091IiPOJW',
    '220137sLUyHS',
    '124849bTtlld',
    './utils/ast-utils',
    'Literal',
    'Identifier',
    'ThisExpression',
    'FunctionExpression',
    'exports',
    'suggestion',
    'disallow\x20unnecessary\x20calls\x20to\x20`.bind()`',
    'Best\x20Practices',
    'https://eslint.org/docs/rules/no-extra-bind',
    'code',
    'The\x20function\x20binding\x20is\x20unnecessary.',
    'getSourceCode',
    'has',
    'parent',
    'unexpected',
    'property',
    'loc',
    'getTokenAfter',
    'object'
];
const _0x5be21f = _0xfe6c;
(function (_0x5f33f5, _0x3d6809) {
    const _0x4639ea = _0xfe6c;
    while (!![]) {
        try {
            const _0x4a8980 = parseInt(_0x4639ea(0xf9)) + -parseInt(_0x4639ea(0xfa)) * -parseInt(_0x4639ea(0xfb)) + -parseInt(_0x4639ea(0xfc)) + parseInt(_0x4639ea(0xfd)) * -parseInt(_0x4639ea(0xfe)) + -parseInt(_0x4639ea(0xff)) + parseInt(_0x4639ea(0x100)) + parseInt(_0x4639ea(0x101));
            if (_0x4a8980 === _0x3d6809)
                break;
            else
                _0x5f33f5['push'](_0x5f33f5['shift']());
        } catch (_0x2ff53d) {
            _0x5f33f5['push'](_0x5f33f5['shift']());
        }
    }
}(_0x1b2a, 0x8aed1));
const astUtils = require(_0x5be21f(0x102)), SIDE_EFFECT_FREE_NODE_TYPES = new Set([
        _0x5be21f(0x103),
        _0x5be21f(0x104),
        _0x5be21f(0x105),
        _0x5be21f(0x106)
    ]);
function _0xfe6c(_0x2d90f5, _0x494e63) {
    return _0xfe6c = function (_0x1b2af7, _0xfe6ccd) {
        _0x1b2af7 = _0x1b2af7 - 0xf9;
        let _0x334af6 = _0x1b2a[_0x1b2af7];
        return _0x334af6;
    }, _0xfe6c(_0x2d90f5, _0x494e63);
}
module[_0x5be21f(0x107)] = {
    'meta': {
        'type': _0x5be21f(0x108),
        'docs': {
            'description': _0x5be21f(0x109),
            'category': _0x5be21f(0x10a),
            'recommended': ![],
            'url': _0x5be21f(0x10b)
        },
        'schema': [],
        'fixable': _0x5be21f(0x10c),
        'messages': { 'unexpected': _0x5be21f(0x10d) }
    },
    'create'(_0x22f6d7) {
        const _0x158fd5 = _0x5be21f, _0x295061 = _0x22f6d7[_0x158fd5(0x10e)]();
        let _0x4f9dd7 = null;
        function _0x32b96a(_0x34014c) {
            const _0x44cfe9 = _0x158fd5;
            return SIDE_EFFECT_FREE_NODE_TYPES[_0x44cfe9(0x10f)](_0x34014c['type']);
        }
        function _0x3127cd(_0x2b04ad) {
            const _0x1cf859 = _0x158fd5, _0xbff0 = _0x2b04ad[_0x1cf859(0x110)], _0x40f794 = _0xbff0[_0x1cf859(0x110)]['type'] === 'ChainExpression' ? _0xbff0['parent']['parent'] : _0xbff0['parent'];
            _0x22f6d7['report']({
                'node': _0x40f794,
                'messageId': _0x1cf859(0x111),
                'loc': _0xbff0[_0x1cf859(0x112)][_0x1cf859(0x113)],
                'fix'(_0x3aa165) {
                    const _0x38626a = _0x1cf859;
                    if (!_0x32b96a(_0x40f794['arguments'][0x0]))
                        return null;
                    const _0x1beb5d = [
                            [
                                _0x295061[_0x38626a(0x114)](_0xbff0[_0x38626a(0x115)], astUtils[_0x38626a(0x116)]),
                                _0x295061[_0x38626a(0x117)](_0xbff0)
                            ],
                            [
                                _0x295061[_0x38626a(0x114)](_0xbff0, astUtils[_0x38626a(0x116)]),
                                _0x295061[_0x38626a(0x117)](_0x40f794)
                            ]
                        ], _0xeab77b = _0x1beb5d[0x0][0x0], _0x39c3c9 = _0x1beb5d[0x1][0x1];
                    if (_0x295061[_0x38626a(0x118)](_0xeab77b, _0x39c3c9))
                        return null;
                    return _0x1beb5d[_0x38626a(0x119)](([_0x203d69, _0x6a4e26]) => _0x3aa165[_0x38626a(0x11a)]([
                        _0x203d69['range'][0x0],
                        _0x6a4e26[_0x38626a(0x11b)][0x1]
                    ]));
                }
            });
        }
        function _0x4f91f3(_0x108064) {
            const _0x304bb9 = _0x158fd5;
            if (!astUtils[_0x304bb9(0x11c)](_0x108064['parent'], null, _0x304bb9(0x11d)))
                return ![];
            const _0x251eb9 = _0x108064[_0x304bb9(0x110)][_0x304bb9(0x110)][_0x304bb9(0x11e)] === _0x304bb9(0x11f) ? _0x108064[_0x304bb9(0x110)][_0x304bb9(0x110)] : _0x108064[_0x304bb9(0x110)];
            return _0x251eb9[_0x304bb9(0x110)][_0x304bb9(0x11e)] === _0x304bb9(0x120) && _0x251eb9['parent'][_0x304bb9(0x121)] === _0x251eb9 && _0x251eb9[_0x304bb9(0x110)]['arguments'][_0x304bb9(0x122)] === 0x1 && _0x251eb9['parent'][_0x304bb9(0x123)][0x0][_0x304bb9(0x11e)] !== _0x304bb9(0x124);
        }
        function _0x2a108e(_0x5d7d25) {
            _0x4f9dd7 = {
                'isBound': _0x4f91f3(_0x5d7d25),
                'thisFound': ![],
                'upper': _0x4f9dd7
            };
        }
        function _0x25b47b(_0x173dc0) {
            const _0x5758d3 = _0x158fd5;
            _0x4f9dd7['isBound'] && !_0x4f9dd7['thisFound'] && _0x3127cd(_0x173dc0), _0x4f9dd7 = _0x4f9dd7[_0x5758d3(0x125)];
        }
        function _0x5cddec(_0x19361c) {
            _0x4f91f3(_0x19361c) && _0x3127cd(_0x19361c);
        }
        function _0x4ba3bc() {
            _0x4f9dd7 && (_0x4f9dd7['thisFound'] = !![]);
        }
        return {
            'ArrowFunctionExpression:exit': _0x5cddec,
            'FunctionDeclaration': _0x2a108e,
            'FunctionDeclaration:exit': _0x25b47b,
            'FunctionExpression': _0x2a108e,
            'FunctionExpression:exit': _0x25b47b,
            'ThisExpression': _0x4ba3bc
        };
    }
};
