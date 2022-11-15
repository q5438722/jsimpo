'use strict';
const _0x2962 = [
    'removeRange',
    '1ojhUjZ',
    '19039mnEZZL',
    '869813ZnJIzh',
    '430284DocNFl',
    '2389VrTDzk',
    '302GPHYvC',
    '7219qXEMmE',
    '17iKYMvP',
    '380815kevjlz',
    '2JnioAZ',
    '465226eKCurI',
    'layout',
    'require\x20or\x20disallow\x20Unicode\x20byte\x20order\x20mark\x20(BOM)',
    'Stylistic\x20Issues',
    'https://eslint.org/docs/rules/unicode-bom',
    'never',
    'Expected\x20Unicode\x20BOM\x20(Byte\x20Order\x20Mark).',
    'Unexpected\x20Unicode\x20BOM\x20(Byte\x20Order\x20Mark).',
    'always',
    'getSourceCode',
    'options',
    'CeDUb',
    'hasBOM',
    'report',
    'expected',
    'insertTextBeforeRange',
    'IbdCo'
];
const _0x168362 = _0x2450;
function _0x2450(_0x5855e5, _0x38077c) {
    return _0x2450 = function (_0x1f8952, _0x27012a) {
        _0x1f8952 = _0x1f8952 - (-0x19a6 + -0x378 + 0x1d92);
        let _0x1a309e = _0x2962[_0x1f8952];
        return _0x1a309e;
    }, _0x2450(_0x5855e5, _0x38077c);
}
(function (_0xd4876c, _0xab7a52) {
    const _0x276fc0 = _0x2450;
    while (!![]) {
        try {
            const _0x3bdb64 = -parseInt(_0x276fc0(0x74)) * parseInt(_0x276fc0(0x75)) + parseInt(_0x276fc0(0x76)) + -parseInt(_0x276fc0(0x77)) + parseInt(_0x276fc0(0x78)) * parseInt(_0x276fc0(0x79)) + -parseInt(_0x276fc0(0x7a)) * parseInt(_0x276fc0(0x7b)) + parseInt(_0x276fc0(0x7c)) + parseInt(_0x276fc0(0x7d)) * -parseInt(_0x276fc0(0x7e));
            if (_0x3bdb64 === _0xab7a52)
                break;
            else
                _0xd4876c['push'](_0xd4876c['shift']());
        } catch (_0x3efd35) {
            _0xd4876c['push'](_0xd4876c['shift']());
        }
    }
}(_0x2962, 0x7fed * -0x1c + 0x1 * 0x1db8d + 0x134cc7));
module['exports'] = {
    'meta': {
        'type': _0x168362(0x7f),
        'docs': {
            'description': _0x168362(0x80),
            'category': _0x168362(0x81),
            'recommended': ![],
            'url': _0x168362(0x82)
        },
        'fixable': 'whitespace',
        'schema': [{
                'enum': [
                    'always',
                    _0x168362(0x83)
                ]
            }],
        'messages': {
            'expected': _0x168362(0x84),
            'unexpected': _0x168362(0x85)
        }
    },
    'create'(_0x469b32) {
        const _0x4b3181 = _0x168362, _0x414e9c = {
                'CeDUb': _0x4b3181(0x83),
                'KSpAH': _0x4b3181(0x86),
                'IbdCo': 'unexpected'
            };
        return {
            'Program': function _0x13469f(_0x147756) {
                const _0x10b686 = _0x4b3181, _0x3f43a1 = _0x469b32[_0x10b686(0x87)](), _0x5e89f9 = {
                        'column': 0x0,
                        'line': 0x1
                    }, _0xe39801 = _0x469b32[_0x10b686(0x88)][-0xdb0 + -0x3f * -0x15 + -0x1 * -0x885] || _0x414e9c[_0x10b686(0x89)];
                if (!_0x3f43a1[_0x10b686(0x8a)] && _0xe39801 === _0x414e9c['KSpAH'])
                    _0x469b32[_0x10b686(0x8b)]({
                        'node': _0x147756,
                        'loc': _0x5e89f9,
                        'messageId': _0x10b686(0x8c),
                        'fix'(_0xe0e5ef) {
                            const _0x52172f = _0x10b686;
                            return _0xe0e5ef[_0x52172f(0x8d)]([
                                0x9 * 0x137 + -0x3ed + 0x702 * -0x1,
                                0xd82 + -0x68f * -0x5 + -0x2e4c
                            ], '\ufeff');
                        }
                    });
                else
                    _0x3f43a1[_0x10b686(0x8a)] && _0xe39801 === _0x414e9c[_0x10b686(0x89)] && _0x469b32[_0x10b686(0x8b)]({
                        'node': _0x147756,
                        'loc': _0x5e89f9,
                        'messageId': _0x414e9c[_0x10b686(0x8e)],
                        'fix'(_0x1a4713) {
                            const _0x432873 = _0x10b686;
                            return _0x1a4713[_0x432873(0x8f)]([
                                -(-0x1b1 * -0xb + -0x1719 + 0x47f),
                                -0x12bf + 0x40 * -0x8e + 0x363f
                            ]);
                        }
                    });
            }
        };
    }
};
