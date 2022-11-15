'use strict';

const _0x1d32 = ['602551KHpvgP', '1480238uBGmoh', '694279HwVVvp', '3AmYVQf', '470804hhHmZB', '5896kQqIBy', '163tKBaNt', '27933fnEKDg', '71LvwwkG', 'ForStatement', 'parent', 'cdrWK', 'type', 'update', 'SequenceExpression', 'JnNap', 'WQgeq', 'suggestion', 'disallow the unary operators `++` and `--`', 'Stylistic Issues', 'object', 'boolean', 'Unary operator \'{{operator}}\' used.', 'unexpectedUnaryOp', 'options', 'bgXyd', 'JPggu', 'HDRXc', 'report', 'operator', '2480zMCjjQ', '39QwDorS', '1qLfrcX'];
const _0x24a46e = _0xcc59;

(function (_0x3ddec0, _0x28140e) {
    const _0x597359 = _0xcc59;

    while (true) {
        try {
            const _0x215a4e = parseInt(_0x597359(0xa0)) * -parseInt(_0x597359(0xa1)) + parseInt(_0x597359(0xa2)) * parseInt(_0x597359(0xa3)) + parseInt(_0x597359(0xa4)) + -parseInt(_0x597359(0xa5)) + parseInt(_0x597359(0xa6)) * -parseInt(_0x597359(0xa7)) + -parseInt(_0x597359(0xa8)) * parseInt(_0x597359(0xa9)) + -parseInt(_0x597359(0xaa)) * -parseInt(_0x597359(0xab));

            if (_0x215a4e === _0x28140e) break;else _0x3ddec0.push(_0x3ddec0.shift());
        } catch (_0xc40b06) {
            _0x3ddec0.push(_0x3ddec0.shift());
        }
    }
})(_0x1d32, 901573);
function _0xcc59(_0x161293, _0xa49b5a) {
    return _0xcc59 = function (_0x1f4324, _0x5f2754) {
        _0x1f4324 = _0x1f4324 - 160;
        const _0x52d5f0 = _0x1d32[_0x1f4324];

        return _0x52d5f0;
    }, _0xcc59(_0x161293, _0xa49b5a);
}
function isForStatementUpdate(_0x16bcfb) {
    const _0x2e00cc = _0xcc59;
    const _0x47df1c = {
        'cdrWK': function (_0x204650, _0x3dab4d) {
            return _0x204650 === _0x3dab4d;
        },
        'jsbGJ': _0x2e00cc(0xac)
    };

    const _0x3bfa1a = _0x16bcfb[_0x2e00cc(0xad)];

    return _0x47df1c[_0x2e00cc(0xae)](_0x3bfa1a[_0x2e00cc(0xaf)], _0x47df1c.jsbGJ) && _0x3bfa1a[_0x2e00cc(0xb0)] === _0x16bcfb;
}
function isForLoopAfterthought(_0x5609b6) {
    const _0x5148b9 = _0xcc59;
    const _0x5158f0 = {
        'JnNap': _0x5148b9(0xb1),
        'WQgeq': function (_0x184d17, _0x20d844) {
            return _0x184d17(_0x20d844);
        }
    };

    const _0x26cb35 = _0x5609b6[_0x5148b9(0xad)];

    if (_0x26cb35[_0x5148b9(0xaf)] === _0x5158f0[_0x5148b9(0xb2)]) return _0x5158f0[_0x5148b9(0xb3)](isForLoopAfterthought, _0x26cb35);
    return _0x5158f0[_0x5148b9(0xb3)](isForStatementUpdate, _0x5609b6);
}
module['exports'] = {
    'meta': {
        'type': _0x24a46e(0xb4),
        'docs': {
            'description': _0x24a46e(0xb5),
            'category': _0x24a46e(0xb6),
            'recommended': false,
            'url': 'https://eslint.org/docs/rules/no-plusplus'
        },
        'schema': [{
            'type': _0x24a46e(0xb7),
            'properties': {
                'allowForLoopAfterthoughts': {
                    'type': _0x24a46e(0xb8),
                    'default': false
                }
            },
            'additionalProperties': false
        }],
        'messages': { 'unexpectedUnaryOp': _0x24a46e(0xb9) }
    },
    'create'(_0xb70ed0) {
        const _0x471c3d = _0x24a46e;
        const _0x28d355 = {
            'HDRXc': function (_0x4bf48c, _0x1c54d4) {
                return _0x4bf48c(_0x1c54d4);
            },
            'kAFyN': _0x471c3d(0xba),
            'bgXyd': function (_0x40ab2d, _0x3cab7e) {
                return _0x40ab2d === _0x3cab7e;
            },
            'JPggu': 'object'
        };

        const _0x3c246c = _0xb70ed0[_0x471c3d(0xbb)][0];

        var _0x225621 = false;

        return _0x28d355[_0x471c3d(0xbc)](typeof _0x3c246c, _0x28d355[_0x471c3d(0xbd)]) && (_0x225621 = _0x28d355[_0x471c3d(0xbc)](_0x3c246c.allowForLoopAfterthoughts, true)), {
            'UpdateExpression'(_0xfeaf57) {
                const _0x3b9fa7 = _0x471c3d;

                if (_0x225621 && _0x28d355[_0x3b9fa7(0xbe)](isForLoopAfterthought, _0xfeaf57)) return;
                _0xb70ed0[_0x3b9fa7(0xbf)]({
                    'node': _0xfeaf57,
                    'messageId': _0x28d355.kAFyN,
                    'data': { 'operator': _0xfeaf57[_0x3b9fa7(0xc0)] }
                });
            }
        };
    }
};
