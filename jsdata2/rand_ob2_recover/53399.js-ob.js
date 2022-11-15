const astUtils = require(_0x3aafb6(398));
function isCallOrNonVariadicApply(_0x2a99b4) {
    const _0x67c4ba = _0x3aafb6, _0x4853c0 = astUtils[_0x67c4ba(399)](_0x2a99b4[_0x67c4ba(400)]);
    return _0x4853c0['type'] === _0x67c4ba(401) && _0x4853c0['property'][_0x67c4ba(402)] === _0x67c4ba(403) && _0x4853c0[_0x67c4ba(404)] === ![] && (_0x4853c0[_0x67c4ba(405)][_0x67c4ba(406)] === _0x67c4ba(407) && _0x2a99b4['arguments'][_0x67c4ba(408)] >= 1 || _0x4853c0['property'][_0x67c4ba(406)] === _0x67c4ba(409) && _0x2a99b4[_0x67c4ba(410)]['length'] === 2 && _0x2a99b4[_0x67c4ba(410)][1][_0x67c4ba(402)] === _0x67c4ba(411));
}
function isValidThisArg(_0x1a6c48, _0x2f823c, _0x14e6d8) {
    const _0x2a034b = _0x3aafb6;
    if (!_0x1a6c48)
        return astUtils['isNullOrUndefined'](_0x2f823c);
    return astUtils[_0x2a034b(412)](_0x1a6c48, _0x2f823c, _0x14e6d8);
}
function _0x2da1(_0x5836ef, _0x5a6926) {
    return _0x2da1 = function (_0x13e713, _0x2da170) {
        _0x13e713 = _0x13e713 - 388;
        let _0x353904 = _0x13e7[_0x13e713];
        return _0x353904;
    }, _0x2da1(_0x5836ef, _0x5a6926);
}
module[_0x3aafb6(413)] = {
    'meta': {
        'type': _0x3aafb6(414),
        'docs': {
            'description': _0x3aafb6(415),
            'category': _0x3aafb6(416),
            'recommended': ![],
            'url': _0x3aafb6(417)
        },
        'schema': [],
        'messages': { 'unnecessaryCall': _0x3aafb6(418) }
    },
    'create'(_0x5eac69) {
        const _0x4c3fd0 = _0x3aafb6, _0x34d698 = _0x5eac69[_0x4c3fd0(419)]();
        return {
            'CallExpression'(_0x3803bc) {
                const _0x350a2e = _0x4c3fd0;
                if (!isCallOrNonVariadicApply(_0x3803bc))
                    return;
                const _0xac45c7 = astUtils[_0x350a2e(399)](_0x3803bc['callee']), _0x5e8f0c = astUtils['skipChainExpression'](_0xac45c7['object']), _0x1416e8 = _0x5e8f0c[_0x350a2e(402)] === 'MemberExpression' ? _0x5e8f0c['object'] : null, _0x16e82b = _0x3803bc[_0x350a2e(410)][0];
                isValidThisArg(_0x1416e8, _0x16e82b, _0x34d698) && _0x5eac69[_0x350a2e(420)]({
                    'node': _0x3803bc,
                    'messageId': _0x350a2e(421),
                    'data': { 'name': _0xac45c7[_0x350a2e(405)][_0x350a2e(406)] }
                });
            }
        };
    }
};