'use strict';
const _0x2b45 = [
    '29tPexUF',
    '579465HVhuHk',
    '4ZGlEcU',
    '109609aFBLRD',
    '2LoyWlT',
    '146022WVoyji',
    '434lMIMpJ',
    '356554bAPcCe',
    'parent',
    'type',
    'ForStatement',
    'SequenceExpression',
    'suggestion',
    'disallow\x20the\x20unary\x20operators\x20`++`\x20and\x20`--`',
    'Stylistic\x20Issues',
    'https://eslint.org/docs/rules/no-plusplus',
    'object',
    'boolean',
    'Unary\x20operator\x20\x27{{operator}}\x27\x20used.',
    'options',
    'allowForLoopAfterthoughts',
    'operator',
    '445355bFDORA',
    '15146pUoFxr'
];
const _0x3626c3 = _0x39b2;
(function (_0x80615b, _0x227c2a) {
    const _0x451472 = _0x39b2;
    while (!![]) {
        try {
            const _0x2822e8 = parseInt(_0x451472(0x1d8)) + -parseInt(_0x451472(0x1d9)) * parseInt(_0x451472(0x1da)) + -parseInt(_0x451472(0x1db)) + parseInt(_0x451472(0x1dc)) * parseInt(_0x451472(0x1dd)) + -parseInt(_0x451472(0x1de)) * -parseInt(_0x451472(0x1df)) + parseInt(_0x451472(0x1e0)) + parseInt(_0x451472(0x1e1));
            if (_0x2822e8 === _0x227c2a)
                break;
            else
                _0x80615b['push'](_0x80615b['shift']());
        } catch (_0x3f6b6b) {
            _0x80615b['push'](_0x80615b['shift']());
        }
    }
}(_0x2b45, 0x7d84c));
function isForStatementUpdate(_0x47612b) {
    const _0x46c046 = _0x39b2, _0x2bca12 = _0x47612b[_0x46c046(0x1e2)];
    return _0x2bca12[_0x46c046(0x1e3)] === _0x46c046(0x1e4) && _0x2bca12['update'] === _0x47612b;
}
function _0x39b2(_0x15c8c1, _0x276770) {
    return _0x39b2 = function (_0x2b45fc, _0x39b22b) {
        _0x2b45fc = _0x2b45fc - 0x1d8;
        let _0x33284c = _0x2b45[_0x2b45fc];
        return _0x33284c;
    }, _0x39b2(_0x15c8c1, _0x276770);
}
function isForLoopAfterthought(_0x32945f) {
    const _0x3e06e1 = _0x39b2, _0x424edc = _0x32945f[_0x3e06e1(0x1e2)];
    if (_0x424edc[_0x3e06e1(0x1e3)] === _0x3e06e1(0x1e5))
        return isForLoopAfterthought(_0x424edc);
    return isForStatementUpdate(_0x32945f);
}
module['exports'] = {
    'meta': {
        'type': _0x3626c3(0x1e6),
        'docs': {
            'description': _0x3626c3(0x1e7),
            'category': _0x3626c3(0x1e8),
            'recommended': ![],
            'url': _0x3626c3(0x1e9)
        },
        'schema': [{
                'type': _0x3626c3(0x1ea),
                'properties': {
                    'allowForLoopAfterthoughts': {
                        'type': _0x3626c3(0x1eb),
                        'default': ![]
                    }
                },
                'additionalProperties': ![]
            }],
        'messages': { 'unexpectedUnaryOp': _0x3626c3(0x1ec) }
    },
    'create'(_0x1a3dbd) {
        const _0x2b00fe = _0x3626c3, _0x162650 = _0x1a3dbd[_0x2b00fe(0x1ed)][0x0];
        let _0x5679bd = ![];
        return typeof _0x162650 === _0x2b00fe(0x1ea) && (_0x5679bd = _0x162650[_0x2b00fe(0x1ee)] === !![]), {
            'UpdateExpression'(_0x469750) {
                const _0x16a5da = _0x2b00fe;
                if (_0x5679bd && isForLoopAfterthought(_0x469750))
                    return;
                _0x1a3dbd['report']({
                    'node': _0x469750,
                    'messageId': 'unexpectedUnaryOp',
                    'data': { 'operator': _0x469750[_0x16a5da(0x1ef)] }
                });
            }
        };
    }
};
