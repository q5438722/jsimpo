'use strict';

const _0x2962 = ['removeRange', '1ojhUjZ', '19039mnEZZL', '869813ZnJIzh', '430284DocNFl', '2389VrTDzk', '302GPHYvC', '7219qXEMmE', '17iKYMvP', '380815kevjlz', '2JnioAZ', '465226eKCurI', 'layout', 'require or disallow Unicode byte order mark (BOM)', 'Stylistic Issues', 'https://eslint.org/docs/rules/unicode-bom', 'never', 'Expected Unicode BOM (Byte Order Mark).', 'Unexpected Unicode BOM (Byte Order Mark).', 'always', 'getSourceCode', 'options', 'CeDUb', 'hasBOM', 'report', 'expected', 'insertTextBeforeRange', 'IbdCo'];
const _0x168362 = _0x2450;

function _0x2450(_0x5855e5, _0x38077c) {
    return _0x2450 = function (_0x1f8952, _0x27012a) {
        _0x1f8952 = _0x1f8952 - 116;
        const _0x1a309e = _0x2962[_0x1f8952];

        return _0x1a309e;
    }, _0x2450(_0x5855e5, _0x38077c);
}
(function (_0xd4876c, _0xab7a52) {
    const _0x276fc0 = _0x2450;

    while (true) {
        try {
            const _0x3bdb64 = -parseInt(_0x276fc0(0x74)) * parseInt(_0x276fc0(0x75)) + parseInt(_0x276fc0(0x76)) + -parseInt(_0x276fc0(0x77)) + parseInt(_0x276fc0(0x78)) * parseInt(_0x276fc0(0x79)) + -parseInt(_0x276fc0(0x7a)) * parseInt(_0x276fc0(0x7b)) + parseInt(_0x276fc0(0x7c)) + parseInt(_0x276fc0(0x7d)) * -parseInt(_0x276fc0(0x7e));

            if (_0x3bdb64 === _0xab7a52) break;else _0xd4876c.push(_0xd4876c.shift());
        } catch (_0x3efd35) {
            _0xd4876c.push(_0xd4876c.shift());
        }
    }
})(_0x2962, 469608);
module['exports'] = {
    'meta': {
        'type': _0x168362(0x7f),
        'docs': {
            'description': _0x168362(0x80),
            'category': _0x168362(0x81),
            'recommended': false,
            'url': _0x168362(0x82)
        },
        'fixable': 'whitespace',
        'schema': [{
            'enum': ['always', _0x168362(0x83)]
        }],
        'messages': {
            'expected': _0x168362(0x84),
            'unexpected': _0x168362(0x85)
        }
    },
    'create'(_0x469b32) {
        const _0x4b3181 = _0x168362;
        const _0x414e9c = {
            'CeDUb': _0x4b3181(0x83),
            'KSpAH': _0x4b3181(0x86),
            'IbdCo': 'unexpected'
        };

        return {
            'Program': function _0x13469f(_0x147756) {
                const _0x10b686 = _0x4b3181;

                const _0x3f43a1 = _0x469b32[_0x10b686(0x87)]();

                const _0x5e89f9 = {
                    'column': 0x0,
                    'line': 0x1
                };

                const _0xe39801 = _0x469b32[_0x10b686(0x88)][0] || _0x414e9c[_0x10b686(0x89)];

                if (!_0x3f43a1[_0x10b686(0x8a)] && _0xe39801 === _0x414e9c.KSpAH) _0x469b32[_0x10b686(0x8b)]({
                    'node': _0x147756,
                    'loc': _0x5e89f9,
                    'messageId': _0x10b686(0x8c),
                    'fix'(_0xe0e5ef) {
                        const _0x52172f = _0x10b686;

                        return _0xe0e5ef[_0x52172f(0x8d)]([0, 1], '\uFEFF');
                    }
                });else _0x3f43a1[_0x10b686(0x8a)] && _0xe39801 === _0x414e9c[_0x10b686(0x89)] && _0x469b32[_0x10b686(0x8b)]({
                    'node': _0x147756,
                    'loc': _0x5e89f9,
                    'messageId': _0x414e9c[_0x10b686(0x8e)],
                    'fix'(_0x1a4713) {
                        const _0x432873 = _0x10b686;

                        return _0x1a4713[_0x432873(0x8f)]([-1, 0]);
                    }
                });
            }
        };
    }
};
