'use strict';
const _0x1afc = [
    'unexpected',
    'removeRange',
    '468934loAIIV',
    '139885vqAFHo',
    '454186JFUrjp',
    '1DukWJY',
    '1DHthgX',
    '489633wzVHKX',
    '124556jNSoSS',
    '41067ogQBnB',
    '22273sVTpxP',
    '7KUhibA',
    'exports',
    'layout',
    'require\x20or\x20disallow\x20Unicode\x20byte\x20order\x20mark\x20(BOM)',
    'https://eslint.org/docs/rules/unicode-bom',
    'whitespace',
    'always',
    'never',
    'Expected\x20Unicode\x20BOM\x20(Byte\x20Order\x20Mark).',
    'Unexpected\x20Unicode\x20BOM\x20(Byte\x20Order\x20Mark).',
    'getSourceCode',
    'options',
    'hasBOM',
    'report',
    'expected',
    'insertTextBeforeRange'
];
const _0x38ce9d = _0xc29b;
(function (_0x30fb13, _0x25008a) {
    const _0x40baeb = _0xc29b;
    while (!![]) {
        try {
            const _0x4a6b30 = parseInt(_0x40baeb(0x1b4)) + -parseInt(_0x40baeb(0x1b5)) + parseInt(_0x40baeb(0x1b6)) * -parseInt(_0x40baeb(0x1b7)) + -parseInt(_0x40baeb(0x1b8)) * -parseInt(_0x40baeb(0x1b9)) + parseInt(_0x40baeb(0x1ba)) + parseInt(_0x40baeb(0x1bb)) + parseInt(_0x40baeb(0x1bc)) * -parseInt(_0x40baeb(0x1bd));
            if (_0x4a6b30 === _0x25008a)
                break;
            else
                _0x30fb13['push'](_0x30fb13['shift']());
        } catch (_0xb1b344) {
            _0x30fb13['push'](_0x30fb13['shift']());
        }
    }
}(_0x1afc, 0x5b5c0));
function _0xc29b(_0x56958a, _0x3b848e) {
    return _0xc29b = function (_0x1afc11, _0xc29b98) {
        _0x1afc11 = _0x1afc11 - 0x1b4;
        let _0x1cbc91 = _0x1afc[_0x1afc11];
        return _0x1cbc91;
    }, _0xc29b(_0x56958a, _0x3b848e);
}
module[_0x38ce9d(0x1be)] = {
    'meta': {
        'type': _0x38ce9d(0x1bf),
        'docs': {
            'description': _0x38ce9d(0x1c0),
            'category': 'Stylistic\x20Issues',
            'recommended': ![],
            'url': _0x38ce9d(0x1c1)
        },
        'fixable': _0x38ce9d(0x1c2),
        'schema': [{
                'enum': [
                    _0x38ce9d(0x1c3),
                    _0x38ce9d(0x1c4)
                ]
            }],
        'messages': {
            'expected': _0x38ce9d(0x1c5),
            'unexpected': _0x38ce9d(0x1c6)
        }
    },
    'create'(_0x1c38a4) {
        return {
            'Program': function _0x28b0e4(_0x4cd4db) {
                const _0x4aea09 = _0xc29b, _0xae4ed8 = _0x1c38a4[_0x4aea09(0x1c7)](), _0x111008 = {
                        'column': 0x0,
                        'line': 0x1
                    }, _0x753cb9 = _0x1c38a4[_0x4aea09(0x1c8)][0x0] || 'never';
                if (!_0xae4ed8[_0x4aea09(0x1c9)] && _0x753cb9 === _0x4aea09(0x1c3))
                    _0x1c38a4[_0x4aea09(0x1ca)]({
                        'node': _0x4cd4db,
                        'loc': _0x111008,
                        'messageId': _0x4aea09(0x1cb),
                        'fix'(_0x2271b0) {
                            const _0x33ab34 = _0x4aea09;
                            return _0x2271b0[_0x33ab34(0x1cc)]([
                                0x0,
                                0x1
                            ], '\ufeff');
                        }
                    });
                else
                    _0xae4ed8['hasBOM'] && _0x753cb9 === 'never' && _0x1c38a4['report']({
                        'node': _0x4cd4db,
                        'loc': _0x111008,
                        'messageId': _0x4aea09(0x1cd),
                        'fix'(_0x1ffad3) {
                            const _0x5811da = _0x4aea09;
                            return _0x1ffad3[_0x5811da(0x1ce)]([
                                -0x1,
                                0x0
                            ]);
                        }
                    });
            }
        };
    }
};
