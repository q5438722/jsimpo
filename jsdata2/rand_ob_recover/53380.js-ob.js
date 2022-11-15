function _0xcc59(_0x161293, _0xa49b5a) {
    return _0xcc59 = function (_0x1f4324, _0x5f2754) {
        _0x1f4324 = _0x1f4324 - (5974 + 3457 + -9271 * 1);
        let _0x52d5f0 = _0x1d32[_0x1f4324];
        return _0x52d5f0;
    }, _0xcc59(_0x161293, _0xa49b5a);
}
function isForStatementUpdate(_0x16bcfb) {
    const _0x2e00cc = _0xcc59, _0x47df1c = {
            'cdrWK': function (_0x204650, _0x3dab4d) {
                return _0x204650 === _0x3dab4d;
            },
            'jsbGJ': _0x2e00cc(172)
        }, _0x3bfa1a = _0x16bcfb[_0x2e00cc(173)];
    return _0x47df1c[_0x2e00cc(174)](_0x3bfa1a[_0x2e00cc(175)], _0x47df1c['jsbGJ']) && _0x3bfa1a[_0x2e00cc(176)] === _0x16bcfb;
}
function isForLoopAfterthought(_0x5609b6) {
    const _0x5148b9 = _0xcc59, _0x5158f0 = {
            'JnNap': _0x5148b9(177),
            'WQgeq': function (_0x184d17, _0x20d844) {
                return _0x184d17(_0x20d844);
            }
        }, _0x26cb35 = _0x5609b6[_0x5148b9(173)];
    if (_0x26cb35[_0x5148b9(175)] === _0x5158f0[_0x5148b9(178)])
        return _0x5158f0[_0x5148b9(179)](isForLoopAfterthought, _0x26cb35);
    return _0x5158f0[_0x5148b9(179)](isForStatementUpdate, _0x5609b6);
}
module['exports'] = {
    'meta': {
        'type': _0x24a46e(180),
        'docs': {
            'description': _0x24a46e(181),
            'category': _0x24a46e(182),
            'recommended': ![],
            'url': 'https://eslint.org/docs/rules/no-plusplus'
        },
        'schema': [{
                'type': _0x24a46e(183),
                'properties': {
                    'allowForLoopAfterthoughts': {
                        'type': _0x24a46e(184),
                        'default': ![]
                    }
                },
                'additionalProperties': ![]
            }],
        'messages': { 'unexpectedUnaryOp': _0x24a46e(185) }
    },
    'create'(_0xb70ed0) {
        const _0x471c3d = _0x24a46e, _0x28d355 = {
                'HDRXc': function (_0x4bf48c, _0x1c54d4) {
                    return _0x4bf48c(_0x1c54d4);
                },
                'kAFyN': _0x471c3d(186),
                'bgXyd': function (_0x40ab2d, _0x3cab7e) {
                    return _0x40ab2d === _0x3cab7e;
                },
                'JPggu': 'object'
            }, _0x3c246c = _0xb70ed0[_0x471c3d(187)][-2247 * 2 + -6616 + 11110];
        let _0x225621 = ![];
        return _0x28d355[_0x471c3d(188)](typeof _0x3c246c, _0x28d355[_0x471c3d(189)]) && (_0x225621 = _0x28d355[_0x471c3d(188)](_0x3c246c['allowForLoopAfterthoughts'], !![])), {
            'UpdateExpression'(_0xfeaf57) {
                const _0x3b9fa7 = _0x471c3d;
                if (_0x225621 && _0x28d355[_0x3b9fa7(190)](isForLoopAfterthought, _0xfeaf57))
                    return;
                _0xb70ed0[_0x3b9fa7(191)]({
                    'node': _0xfeaf57,
                    'messageId': _0x28d355['kAFyN'],
                    'data': { 'operator': _0xfeaf57[_0x3b9fa7(192)] }
                });
            }
        };
    }
};