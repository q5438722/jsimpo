const astUtils = require('./utils/ast-utils');
function isCallOrNonVariadicApply(_0xba7e4) {
    const _0x4d2503 = _0xbcca, _0x628717 = astUtils['skipChainExpression'](_0xba7e4[_0x4d2503(372)]);
    return _0x628717[_0x4d2503(373)] === _0x4d2503(374) && _0x628717['property']['type'] === _0x4d2503(375) && _0x628717[_0x4d2503(376)] === ![] && (_0x628717[_0x4d2503(377)][_0x4d2503(378)] === 'call' && _0xba7e4['arguments']['length'] >= 1 || _0x628717[_0x4d2503(377)][_0x4d2503(378)] === _0x4d2503(379) && _0xba7e4[_0x4d2503(380)][_0x4d2503(381)] === 2 && _0xba7e4['arguments'][1]['type'] === _0x4d2503(382));
}
function isValidThisArg(_0xaea320, _0x21f9b7, _0x1508ca) {
    const _0x518cfc = _0xbcca;
    if (!_0xaea320)
        return astUtils[_0x518cfc(383)](_0x21f9b7);
    return astUtils[_0x518cfc(384)](_0xaea320, _0x21f9b7, _0x1508ca);
}
module[_0x4ea3c1(385)] = {
    'meta': {
        'type': 'suggestion',
        'docs': {
            'description': _0x4ea3c1(386),
            'category': _0x4ea3c1(387),
            'recommended': ![],
            'url': 'https://eslint.org/docs/rules/no-useless-call'
        },
        'schema': [],
        'messages': { 'unnecessaryCall': _0x4ea3c1(388) }
    },
    'create'(_0x2ee569) {
        const _0x3a7871 = _0x4ea3c1, _0x18ede2 = _0x2ee569[_0x3a7871(389)]();
        return {
            'CallExpression'(_0x20e6b9) {
                const _0x87e144 = _0x3a7871;
                if (!isCallOrNonVariadicApply(_0x20e6b9))
                    return;
                const _0x15d894 = astUtils[_0x87e144(390)](_0x20e6b9[_0x87e144(372)]), _0x3de03f = astUtils[_0x87e144(390)](_0x15d894['object']), _0xcede24 = _0x3de03f['type'] === _0x87e144(374) ? _0x3de03f[_0x87e144(391)] : null, _0x46c340 = _0x20e6b9[_0x87e144(380)][0];
                isValidThisArg(_0xcede24, _0x46c340, _0x18ede2) && _0x2ee569[_0x87e144(392)]({
                    'node': _0x20e6b9,
                    'messageId': _0x87e144(393),
                    'data': { 'name': _0x15d894[_0x87e144(377)][_0x87e144(378)] }
                });
            }
        };
    }
};