'use strict';
const _0x46d0 = [
    'commentsExistBetween',
    'range',
    'umVdD',
    'FAsiO',
    'nTChl',
    'length',
    'brgyV',
    'isBound',
    'thisFound',
    'upper',
    'Cttnd',
    'SgyzU',
    '815164TZMclq',
    '39908rEHvPY',
    '22UZAtVD',
    '1yhDmYA',
    '1511799MKmcMk',
    '1870297YPuXTJ',
    '1ChCClp',
    '1534987JhDzxu',
    '11114bGTTmo',
    '48fUuEIo',
    '407406qBybHN',
    'Literal',
    'Identifier',
    'ThisExpression',
    'FunctionExpression',
    'exports',
    'suggestion',
    'Best\x20Practices',
    'https://eslint.org/docs/rules/no-extra-bind',
    'code',
    'The\x20function\x20binding\x20is\x20unnecessary.',
    'unexpected',
    'CallExpression',
    'getSourceCode',
    'type',
    'parent',
    'ChainExpression',
    'property',
    'loc',
    'aPCik',
    'arguments',
    'getTokenAfter',
    'object',
    'isNotClosingParenToken',
    'getLastToken'
];
const _0x341c6a = _0x3ecb;
(function (_0x355a19, _0x3398a6) {
    const _0x5364c2 = _0x3ecb;
    while (!![]) {
        try {
            const _0x55ca98 = -parseInt(_0x5364c2(0x7a)) + -parseInt(_0x5364c2(0x7b)) * -parseInt(_0x5364c2(0x7c)) + -parseInt(_0x5364c2(0x7d)) * -parseInt(_0x5364c2(0x7e)) + parseInt(_0x5364c2(0x7f)) + parseInt(_0x5364c2(0x80)) * -parseInt(_0x5364c2(0x81)) + -parseInt(_0x5364c2(0x82)) * parseInt(_0x5364c2(0x83)) + -parseInt(_0x5364c2(0x84));
            if (_0x55ca98 === _0x3398a6)
                break;
            else
                _0x355a19['push'](_0x355a19['shift']());
        } catch (_0x4bcccb) {
            _0x355a19['push'](_0x355a19['shift']());
        }
    }
}(_0x46d0, 0x13c6fa + 0x95dc6 + -0x35 * 0x4559));
function _0x3ecb(_0x1882a9, _0x46e26f) {
    return _0x3ecb = function (_0x4e7b0f, _0x3f6378) {
        _0x4e7b0f = _0x4e7b0f - (0x1f * -0x11b + -0x5 * -0x5cc + -0x127 * -0x5);
        let _0x3b066a = _0x46d0[_0x4e7b0f];
        return _0x3b066a;
    }, _0x3ecb(_0x1882a9, _0x46e26f);
}
const astUtils = require('./utils/ast-utils'), SIDE_EFFECT_FREE_NODE_TYPES = new Set([
        _0x341c6a(0x85),
        _0x341c6a(0x86),
        _0x341c6a(0x87),
        _0x341c6a(0x88)
    ]);
module[_0x341c6a(0x89)] = {
    'meta': {
        'type': _0x341c6a(0x8a),
        'docs': {
            'description': 'disallow\x20unnecessary\x20calls\x20to\x20`.bind()`',
            'category': _0x341c6a(0x8b),
            'recommended': ![],
            'url': _0x341c6a(0x8c)
        },
        'schema': [],
        'fixable': _0x341c6a(0x8d),
        'messages': { 'unexpected': _0x341c6a(0x8e) }
    },
    'create'(_0x5e52bd) {
        const _0x9f199e = _0x341c6a, _0x42db0a = {
                'aPCik': function (_0x53c9a2, _0x3bd756) {
                    return _0x53c9a2(_0x3bd756);
                },
                'zxBDf': function (_0x4bd4c2, _0x498730) {
                    return _0x4bd4c2 === _0x498730;
                },
                'dnfJu': _0x9f199e(0x8f),
                'umVdD': 'bind',
                'FAsiO': function (_0xcf1e36, _0x4990c4) {
                    return _0xcf1e36 === _0x4990c4;
                },
                'mOZTk': function (_0x694a39, _0x4e2975) {
                    return _0x694a39 === _0x4e2975;
                },
                'wbUvm': _0x9f199e(0x90),
                'nTChl': function (_0xbfbe75, _0x4d7823) {
                    return _0xbfbe75 === _0x4d7823;
                },
                'brgyV': function (_0x4b23bc, _0x41f814) {
                    return _0x4b23bc !== _0x41f814;
                },
                'PMxqZ': 'SpreadElement',
                'VgUKe': function (_0x2fcf01, _0x422666) {
                    return _0x2fcf01(_0x422666);
                },
                'LPqog': function (_0x501ec8, _0x366e60) {
                    return _0x501ec8(_0x366e60);
                },
                'Cttnd': function (_0x2557ad, _0x3de7e2) {
                    return _0x2557ad(_0x3de7e2);
                },
                'SgyzU': function (_0x2da85c, _0x128852) {
                    return _0x2da85c(_0x128852);
                }
            }, _0x3fbf6e = _0x5e52bd[_0x9f199e(0x91)]();
        let _0xe6585e = null;
        function _0x1c760a(_0x278346) {
            const _0x572877 = _0x9f199e;
            return SIDE_EFFECT_FREE_NODE_TYPES['has'](_0x278346[_0x572877(0x92)]);
        }
        function _0x5e8aa9(_0x1f795b) {
            const _0x2d5f26 = _0x9f199e, _0x9f9557 = _0x1f795b[_0x2d5f26(0x93)], _0x145f0b = _0x42db0a['zxBDf'](_0x9f9557[_0x2d5f26(0x93)]['type'], _0x2d5f26(0x94)) ? _0x9f9557[_0x2d5f26(0x93)][_0x2d5f26(0x93)] : _0x9f9557[_0x2d5f26(0x93)];
            _0x5e52bd['report']({
                'node': _0x145f0b,
                'messageId': _0x42db0a['dnfJu'],
                'loc': _0x9f9557[_0x2d5f26(0x95)][_0x2d5f26(0x96)],
                'fix'(_0x441fcb) {
                    const _0x58951b = _0x2d5f26;
                    if (!_0x42db0a[_0x58951b(0x97)](_0x1c760a, _0x145f0b[_0x58951b(0x98)][-0x9b1 + 0x130 + 0x881]))
                        return null;
                    const _0x3cef51 = [
                            [
                                _0x3fbf6e[_0x58951b(0x99)](_0x9f9557[_0x58951b(0x9a)], astUtils[_0x58951b(0x9b)]),
                                _0x3fbf6e[_0x58951b(0x9c)](_0x9f9557)
                            ],
                            [
                                _0x3fbf6e[_0x58951b(0x99)](_0x9f9557, astUtils['isNotClosingParenToken']),
                                _0x3fbf6e[_0x58951b(0x9c)](_0x145f0b)
                            ]
                        ], _0x483042 = _0x3cef51[0xcd5 + 0x139 * 0x11 + -0x219e][0x1a3d + -0xc5 * 0x6 + -0x159f], _0x10e0dd = _0x3cef51[-0x67 * 0x9 + -0x3 * -0x13f + -0x1d][0x2281 * -0x1 + -0xc * -0x109 + 0xb0b * 0x2];
                    if (_0x3fbf6e[_0x58951b(0x9d)](_0x483042, _0x10e0dd))
                        return null;
                    return _0x3cef51['map'](([_0x3c3958, _0x36832c]) => _0x441fcb['removeRange']([
                        _0x3c3958['range'][-0x25 * 0x9d + 0x76d * 0x4 + 0x5 * -0x167],
                        _0x36832c[_0x58951b(0x9e)][-0x215 * 0x7 + -0xac9 + -0x195d * -0x1]
                    ]));
                }
            });
        }
        function _0x564d44(_0xda6aef) {
            const _0x161666 = _0x9f199e;
            if (!astUtils['isSpecificMemberAccess'](_0xda6aef[_0x161666(0x93)], null, _0x42db0a[_0x161666(0x9f)]))
                return ![];
            const _0x2c8e6a = _0x42db0a[_0x161666(0xa0)](_0xda6aef['parent']['parent'][_0x161666(0x92)], 'ChainExpression') ? _0xda6aef['parent'][_0x161666(0x93)] : _0xda6aef[_0x161666(0x93)];
            return _0x42db0a['mOZTk'](_0x2c8e6a[_0x161666(0x93)][_0x161666(0x92)], _0x42db0a['wbUvm']) && _0x42db0a['nTChl'](_0x2c8e6a['parent']['callee'], _0x2c8e6a) && _0x42db0a[_0x161666(0xa1)](_0x2c8e6a['parent'][_0x161666(0x98)][_0x161666(0xa2)], 0x1d82 + -0x1572 + 0x80f * -0x1) && _0x42db0a[_0x161666(0xa3)](_0x2c8e6a['parent'][_0x161666(0x98)][0x1 * 0x2351 + -0x1742 + -0xc0f][_0x161666(0x92)], _0x42db0a['PMxqZ']);
        }
        function _0x59bdde(_0x2564ed) {
            _0xe6585e = {
                'isBound': _0x42db0a['VgUKe'](_0x564d44, _0x2564ed),
                'thisFound': ![],
                'upper': _0xe6585e
            };
        }
        function _0x11434b(_0x8e8af6) {
            const _0x1276f1 = _0x9f199e;
            _0xe6585e[_0x1276f1(0xa4)] && !_0xe6585e[_0x1276f1(0xa5)] && _0x42db0a['LPqog'](_0x5e8aa9, _0x8e8af6), _0xe6585e = _0xe6585e[_0x1276f1(0xa6)];
        }
        function _0x8e906e(_0x1a95a3) {
            const _0x369515 = _0x9f199e;
            _0x42db0a[_0x369515(0xa7)](_0x564d44, _0x1a95a3) && _0x42db0a[_0x369515(0xa8)](_0x5e8aa9, _0x1a95a3);
        }
        function _0x2ea126() {
            _0xe6585e && (_0xe6585e['thisFound'] = !![]);
        }
        return {
            'ArrowFunctionExpression:exit': _0x8e906e,
            'FunctionDeclaration': _0x59bdde,
            'FunctionDeclaration:exit': _0x11434b,
            'FunctionExpression': _0x59bdde,
            'FunctionExpression:exit': _0x11434b,
            'ThisExpression': _0x2ea126
        };
    }
};
