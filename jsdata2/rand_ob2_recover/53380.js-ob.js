function isForStatementUpdate(_0x47612b) {
    const _0x46c046 = _0x39b2, _0x2bca12 = _0x47612b[_0x46c046(482)];
    return _0x2bca12[_0x46c046(483)] === _0x46c046(484) && _0x2bca12['update'] === _0x47612b;
}
function _0x39b2(_0x15c8c1, _0x276770) {
    return _0x39b2 = function (_0x2b45fc, _0x39b22b) {
        _0x2b45fc = _0x2b45fc - 472;
        let _0x33284c = _0x2b45[_0x2b45fc];
        return _0x33284c;
    }, _0x39b2(_0x15c8c1, _0x276770);
}
function isForLoopAfterthought(_0x32945f) {
    const _0x3e06e1 = _0x39b2, _0x424edc = _0x32945f[_0x3e06e1(482)];
    if (_0x424edc[_0x3e06e1(483)] === _0x3e06e1(485))
        return isForLoopAfterthought(_0x424edc);
    return isForStatementUpdate(_0x32945f);
}
module['exports'] = {
    'meta': {
        'type': _0x3626c3(486),
        'docs': {
            'description': _0x3626c3(487),
            'category': _0x3626c3(488),
            'recommended': ![],
            'url': _0x3626c3(489)
        },
        'schema': [{
                'type': _0x3626c3(490),
                'properties': {
                    'allowForLoopAfterthoughts': {
                        'type': _0x3626c3(491),
                        'default': ![]
                    }
                },
                'additionalProperties': ![]
            }],
        'messages': { 'unexpectedUnaryOp': _0x3626c3(492) }
    },
    'create'(_0x1a3dbd) {
        const _0x2b00fe = _0x3626c3, _0x162650 = _0x1a3dbd[_0x2b00fe(493)][0];
        let _0x5679bd = ![];
        return typeof _0x162650 === _0x2b00fe(490) && (_0x5679bd = _0x162650[_0x2b00fe(494)] === !![]), {
            'UpdateExpression'(_0x469750) {
                const _0x16a5da = _0x2b00fe;
                if (_0x5679bd && isForLoopAfterthought(_0x469750))
                    return;
                _0x1a3dbd['report']({
                    'node': _0x469750,
                    'messageId': 'unexpectedUnaryOp',
                    'data': { 'operator': _0x469750[_0x16a5da(495)] }
                });
            }
        };
    }
};