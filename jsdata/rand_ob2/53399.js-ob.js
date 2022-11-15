'use strict';
const _0x5bf7 = [
    'unnecessaryCall',
    '84381fjROhQ',
    '25585UbEvnh',
    '276204uynJUq',
    '824311kbdqhh',
    '97TerdOw',
    '1446vPzHBs',
    '205678QucTOT',
    '4mdjsiq',
    '1187726yQwjNY',
    'callee',
    'type',
    'MemberExpression',
    'Identifier',
    'computed',
    'property',
    'name',
    'apply',
    'arguments',
    'length',
    'ArrayExpression',
    'isNullOrUndefined',
    'equalTokens',
    'exports',
    'disallow\x20unnecessary\x20calls\x20to\x20`.call()`\x20and\x20`.apply()`',
    'Best\x20Practices',
    'Unnecessary\x20\x27.{{name}}()\x27.',
    'getSourceCode',
    'skipChainExpression',
    'object',
    'report'
];
function _0xbcca(_0x58d554, _0x8a2cb4) {
    return _0xbcca = function (_0x5bf748, _0xbcca50) {
        _0x5bf748 = _0x5bf748 - 0x16b;
        let _0x9841d9 = _0x5bf7[_0x5bf748];
        return _0x9841d9;
    }, _0xbcca(_0x58d554, _0x8a2cb4);
}
const _0x4ea3c1 = _0xbcca;
(function (_0x49068b, _0x39fbeb) {
    const _0x53422e = _0xbcca;
    while (!![]) {
        try {
            const _0x365b98 = parseInt(_0x53422e(0x16b)) + parseInt(_0x53422e(0x16c)) + -parseInt(_0x53422e(0x16d)) + parseInt(_0x53422e(0x16e)) + parseInt(_0x53422e(0x16f)) * parseInt(_0x53422e(0x170)) + parseInt(_0x53422e(0x171)) * parseInt(_0x53422e(0x172)) + -parseInt(_0x53422e(0x173));
            if (_0x365b98 === _0x39fbeb)
                break;
            else
                _0x49068b['push'](_0x49068b['shift']());
        } catch (_0x3d6bcf) {
            _0x49068b['push'](_0x49068b['shift']());
        }
    }
}(_0x5bf7, 0x69ca9));
const astUtils = require('./utils/ast-utils');
function isCallOrNonVariadicApply(_0xba7e4) {
    const _0x4d2503 = _0xbcca, _0x628717 = astUtils['skipChainExpression'](_0xba7e4[_0x4d2503(0x174)]);
    return _0x628717[_0x4d2503(0x175)] === _0x4d2503(0x176) && _0x628717['property']['type'] === _0x4d2503(0x177) && _0x628717[_0x4d2503(0x178)] === ![] && (_0x628717[_0x4d2503(0x179)][_0x4d2503(0x17a)] === 'call' && _0xba7e4['arguments']['length'] >= 0x1 || _0x628717[_0x4d2503(0x179)][_0x4d2503(0x17a)] === _0x4d2503(0x17b) && _0xba7e4[_0x4d2503(0x17c)][_0x4d2503(0x17d)] === 0x2 && _0xba7e4['arguments'][0x1]['type'] === _0x4d2503(0x17e));
}
function isValidThisArg(_0xaea320, _0x21f9b7, _0x1508ca) {
    const _0x518cfc = _0xbcca;
    if (!_0xaea320)
        return astUtils[_0x518cfc(0x17f)](_0x21f9b7);
    return astUtils[_0x518cfc(0x180)](_0xaea320, _0x21f9b7, _0x1508ca);
}
module[_0x4ea3c1(0x181)] = {
    'meta': {
        'type': 'suggestion',
        'docs': {
            'description': _0x4ea3c1(0x182),
            'category': _0x4ea3c1(0x183),
            'recommended': ![],
            'url': 'https://eslint.org/docs/rules/no-useless-call'
        },
        'schema': [],
        'messages': { 'unnecessaryCall': _0x4ea3c1(0x184) }
    },
    'create'(_0x2ee569) {
        const _0x3a7871 = _0x4ea3c1, _0x18ede2 = _0x2ee569[_0x3a7871(0x185)]();
        return {
            'CallExpression'(_0x20e6b9) {
                const _0x87e144 = _0x3a7871;
                if (!isCallOrNonVariadicApply(_0x20e6b9))
                    return;
                const _0x15d894 = astUtils[_0x87e144(0x186)](_0x20e6b9[_0x87e144(0x174)]), _0x3de03f = astUtils[_0x87e144(0x186)](_0x15d894['object']), _0xcede24 = _0x3de03f['type'] === _0x87e144(0x176) ? _0x3de03f[_0x87e144(0x187)] : null, _0x46c340 = _0x20e6b9[_0x87e144(0x17c)][0x0];
                isValidThisArg(_0xcede24, _0x46c340, _0x18ede2) && _0x2ee569[_0x87e144(0x188)]({
                    'node': _0x20e6b9,
                    'messageId': _0x87e144(0x189),
                    'data': { 'name': _0x15d894[_0x87e144(0x179)][_0x87e144(0x17a)] }
                });
            }
        };
    }
};
