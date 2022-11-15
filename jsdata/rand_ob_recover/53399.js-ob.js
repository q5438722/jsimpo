const astUtils = require(_0x508378(475));
function _0x216f(_0x494fcf, _0x279c9a) {
    return _0x216f = function (_0x266e42, _0x14670d) {
        _0x266e42 = _0x266e42 - (-5 * -831 + -387 * -1 + 1 * -4076);
        let _0x1705ec = _0x5ab8[_0x266e42];
        return _0x1705ec;
    }, _0x216f(_0x494fcf, _0x279c9a);
}
function isCallOrNonVariadicApply(_0x28dfc8) {
    const _0x17f851 = _0x508378, _0x252e03 = {
            'IbWEj': function (_0x46dc7b, _0x109e26) {
                return _0x46dc7b === _0x109e26;
            },
            'KPHiB': _0x17f851(476),
            'mFEhc': _0x17f851(477),
            'cGRZQ': _0x17f851(478),
            'dnFrS': function (_0x113476, _0x506d4d) {
                return _0x113476 >= _0x506d4d;
            },
            'QrnGX': function (_0x129cc0, _0x3f1a9b) {
                return _0x129cc0 === _0x3f1a9b;
            },
            'HwjAC': _0x17f851(479)
        }, _0xb9ae3d = astUtils['skipChainExpression'](_0x28dfc8[_0x17f851(480)]);
    return _0x252e03['IbWEj'](_0xb9ae3d[_0x17f851(481)], _0x252e03['KPHiB']) && _0x252e03['IbWEj'](_0xb9ae3d['property'][_0x17f851(481)], _0x252e03[_0x17f851(482)]) && _0x252e03['IbWEj'](_0xb9ae3d[_0x17f851(483)], ![]) && (_0x252e03[_0x17f851(484)](_0xb9ae3d[_0x17f851(485)]['name'], _0x252e03[_0x17f851(486)]) && _0x252e03[_0x17f851(487)](_0x28dfc8['arguments'][_0x17f851(488)], 409 * -15 + 1 * -3835 + -9971 * -1) || _0x252e03['QrnGX'](_0xb9ae3d['property']['name'], _0x252e03[_0x17f851(489)]) && _0x28dfc8[_0x17f851(490)]['length'] === -27 * -5 + -8837 + 8704 && _0x252e03[_0x17f851(491)](_0x28dfc8['arguments'][-2138 + -8145 + 1 * 10284]['type'], 'ArrayExpression'));
}
function isValidThisArg(_0x196b8a, _0x12f18c, _0x3b7ca6) {
    const _0x2e6d49 = _0x508378;
    if (!_0x196b8a)
        return astUtils['isNullOrUndefined'](_0x12f18c);
    return astUtils[_0x2e6d49(492)](_0x196b8a, _0x12f18c, _0x3b7ca6);
}
module[_0x508378(493)] = {
    'meta': {
        'type': _0x508378(494),
        'docs': {
            'description': 'disallow unnecessary calls to `.call()` and `.apply()`',
            'category': 'Best Practices',
            'recommended': ![],
            'url': _0x508378(495)
        },
        'schema': [],
        'messages': { 'unnecessaryCall': _0x508378(496) }
    },
    'create'(_0x53b562) {
        const _0xda1a33 = _0x508378, _0x555b3c = {
                'kfrib': function (_0x3208f1, _0x21814a) {
                    return _0x3208f1(_0x21814a);
                },
                'tkUYu': function (_0x11d8d8, _0x1f892c) {
                    return _0x11d8d8 === _0x1f892c;
                },
                'MDWoX': _0xda1a33(497)
            }, _0x2106d4 = _0x53b562[_0xda1a33(498)]();
        return {
            'CallExpression'(_0x38123c) {
                const _0x54f552 = _0xda1a33;
                if (!_0x555b3c[_0x54f552(499)](isCallOrNonVariadicApply, _0x38123c))
                    return;
                const _0x3fc6df = astUtils[_0x54f552(500)](_0x38123c[_0x54f552(480)]), _0x3ab99c = astUtils[_0x54f552(500)](_0x3fc6df[_0x54f552(501)]), _0x17edab = _0x555b3c['tkUYu'](_0x3ab99c[_0x54f552(481)], _0x54f552(476)) ? _0x3ab99c[_0x54f552(501)] : null, _0x51eee9 = _0x38123c[_0x54f552(490)][-1747 * -1 + 1459 * -2 + 1171];
                isValidThisArg(_0x17edab, _0x51eee9, _0x2106d4) && _0x53b562[_0x54f552(502)]({
                    'node': _0x38123c,
                    'messageId': _0x555b3c['MDWoX'],
                    'data': { 'name': _0x3fc6df['property'][_0x54f552(503)] }
                });
            }
        };
    }
};