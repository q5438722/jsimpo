'use strict';
const astUtils = require('./utils/ast-utils');
function isCallOrNonVariadicApply(_0x3bc361) {
    const _0x3e693b = astUtils['skipChainExpression'](_0x3bc361['callee']);
    return _0x3e693b['type'] === 'MemberExpression' && _0x3e693b['property']['type'] === 'Identifier' && _0x3e693b['computed'] === ![] && (_0x3e693b['property']['name'] === 'call' && _0x3bc361['arguments']['length'] >= -0x3 * -0x576 + -0x18 * 0x91 + 0x2c9 * -0x1 || _0x3e693b['property']['name'] === 'apply' && _0x3bc361['arguments']['length'] === 0xc22 + -0xeca + 0x2aa && _0x3bc361['arguments'][-0x1674 + 0x1ce9 + -0x674]['type'] === 'ArrayExpression');
}
function isValidThisArg(_0x37c3ab, _0xf0027e, _0x14f787) {
    if (!_0x37c3ab)
        return astUtils['isNullOrUndefined'](_0xf0027e);
    return astUtils['equalTokens'](_0x37c3ab, _0xf0027e, _0x14f787);
}
module['exports'] = {
    'meta': {
        'type': 'suggestion',
        'docs': {
            'description': 'disallow\x20unnecessary\x20calls\x20to\x20`.call()`\x20and\x20`.apply()`',
            'category': 'Best\x20Practices',
            'recommended': ![],
            'url': 'https://eslint.org/docs/rules/no-useless-call'
        },
        'schema': [],
        'messages': { 'unnecessaryCall': 'Unnecessary\x20\x27.{{name}}()\x27.' }
    },
    'create'(_0x4a891f) {
        const _0x641db1 = _0x4a891f['getSourceCode']();
        return {
            'CallExpression'(_0x2d637b) {
                if (!isCallOrNonVariadicApply(_0x2d637b))
                    return;
                const _0x16bcd6 = astUtils['skipChainExpression'](_0x2d637b['callee']), _0x277a8b = astUtils['skipChainExpression'](_0x16bcd6['object']), _0xb2f515 = _0x277a8b['type'] === 'MemberExpression' ? _0x277a8b['object'] : null, _0xc719e9 = _0x2d637b['arguments'][-0x1ba4 + 0x1 * 0x1b57 + -0xb * -0x7];
                isValidThisArg(_0xb2f515, _0xc719e9, _0x641db1) && _0x4a891f['report']({
                    'node': _0x2d637b,
                    'messageId': 'unnecessaryCall',
                    'data': { 'name': _0x16bcd6['property']['name'] }
                });
            }
        };
    }
};
