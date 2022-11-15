'use strict';
const _0x13e7 = [
    '21274DCvlJC',
    '1475026xbpgnN',
    '76grTKQg',
    '18673hexcWn',
    '1644946hUiwfL',
    './utils/ast-utils',
    'skipChainExpression',
    'callee',
    'MemberExpression',
    'type',
    'Identifier',
    'computed',
    'property',
    'name',
    'call',
    'length',
    'apply',
    'arguments',
    'ArrayExpression',
    'equalTokens',
    'exports',
    'suggestion',
    'disallow\x20unnecessary\x20calls\x20to\x20`.call()`\x20and\x20`.apply()`',
    'Best\x20Practices',
    'https://eslint.org/docs/rules/no-useless-call',
    'Unnecessary\x20\x27.{{name}}()\x27.',
    'getSourceCode',
    'report',
    'unnecessaryCall',
    '495761ggbotU',
    '182245TQbzno',
    '64141QYZXly',
    '12tAmZtq',
    '43qaskGN'
];
const _0x3aafb6 = _0x2da1;
(function (_0x2d6aa6, _0x400f53) {
    const _0x2673e7 = _0x2da1;
    while (!![]) {
        try {
            const _0x5c56e7 = -parseInt(_0x2673e7(0x184)) + -parseInt(_0x2673e7(0x185)) + parseInt(_0x2673e7(0x186)) * parseInt(_0x2673e7(0x187)) + parseInt(_0x2673e7(0x188)) * -parseInt(_0x2673e7(0x189)) + parseInt(_0x2673e7(0x18a)) + -parseInt(_0x2673e7(0x18b)) * parseInt(_0x2673e7(0x18c)) + parseInt(_0x2673e7(0x18d));
            if (_0x5c56e7 === _0x400f53)
                break;
            else
                _0x2d6aa6['push'](_0x2d6aa6['shift']());
        } catch (_0x421152) {
            _0x2d6aa6['push'](_0x2d6aa6['shift']());
        }
    }
}(_0x13e7, 0xd64a0));
const astUtils = require(_0x3aafb6(0x18e));
function isCallOrNonVariadicApply(_0x2a99b4) {
    const _0x67c4ba = _0x3aafb6, _0x4853c0 = astUtils[_0x67c4ba(0x18f)](_0x2a99b4[_0x67c4ba(0x190)]);
    return _0x4853c0['type'] === _0x67c4ba(0x191) && _0x4853c0['property'][_0x67c4ba(0x192)] === _0x67c4ba(0x193) && _0x4853c0[_0x67c4ba(0x194)] === ![] && (_0x4853c0[_0x67c4ba(0x195)][_0x67c4ba(0x196)] === _0x67c4ba(0x197) && _0x2a99b4['arguments'][_0x67c4ba(0x198)] >= 0x1 || _0x4853c0['property'][_0x67c4ba(0x196)] === _0x67c4ba(0x199) && _0x2a99b4[_0x67c4ba(0x19a)]['length'] === 0x2 && _0x2a99b4[_0x67c4ba(0x19a)][0x1][_0x67c4ba(0x192)] === _0x67c4ba(0x19b));
}
function isValidThisArg(_0x1a6c48, _0x2f823c, _0x14e6d8) {
    const _0x2a034b = _0x3aafb6;
    if (!_0x1a6c48)
        return astUtils['isNullOrUndefined'](_0x2f823c);
    return astUtils[_0x2a034b(0x19c)](_0x1a6c48, _0x2f823c, _0x14e6d8);
}
function _0x2da1(_0x5836ef, _0x5a6926) {
    return _0x2da1 = function (_0x13e713, _0x2da170) {
        _0x13e713 = _0x13e713 - 0x184;
        let _0x353904 = _0x13e7[_0x13e713];
        return _0x353904;
    }, _0x2da1(_0x5836ef, _0x5a6926);
}
module[_0x3aafb6(0x19d)] = {
    'meta': {
        'type': _0x3aafb6(0x19e),
        'docs': {
            'description': _0x3aafb6(0x19f),
            'category': _0x3aafb6(0x1a0),
            'recommended': ![],
            'url': _0x3aafb6(0x1a1)
        },
        'schema': [],
        'messages': { 'unnecessaryCall': _0x3aafb6(0x1a2) }
    },
    'create'(_0x5eac69) {
        const _0x4c3fd0 = _0x3aafb6, _0x34d698 = _0x5eac69[_0x4c3fd0(0x1a3)]();
        return {
            'CallExpression'(_0x3803bc) {
                const _0x350a2e = _0x4c3fd0;
                if (!isCallOrNonVariadicApply(_0x3803bc))
                    return;
                const _0xac45c7 = astUtils[_0x350a2e(0x18f)](_0x3803bc['callee']), _0x5e8f0c = astUtils['skipChainExpression'](_0xac45c7['object']), _0x1416e8 = _0x5e8f0c[_0x350a2e(0x192)] === 'MemberExpression' ? _0x5e8f0c['object'] : null, _0x16e82b = _0x3803bc[_0x350a2e(0x19a)][0x0];
                isValidThisArg(_0x1416e8, _0x16e82b, _0x34d698) && _0x5eac69[_0x350a2e(0x1a4)]({
                    'node': _0x3803bc,
                    'messageId': _0x350a2e(0x1a5),
                    'data': { 'name': _0xac45c7[_0x350a2e(0x195)][_0x350a2e(0x196)] }
                });
            }
        };
    }
};
