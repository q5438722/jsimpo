function _0x16af(_0x5dcaa7, _0x768086) {
    return _0x16af = function (_0x4278be, _0x16af4f) {
        _0x4278be = _0x4278be - 289;
        let _0x1cc0b1 = _0x4278[_0x4278be];
        return _0x1cc0b1;
    }, _0x16af(_0x5dcaa7, _0x768086);
}
const createTree = require(_0x52438b(300)), astUtils = require(_0x52438b(301)), KNOWN_NODES = new Set([
        _0x52438b(302),
        'AssignmentPattern',
        _0x52438b(303),
        'ArrayPattern',
        _0x52438b(304),
        _0x52438b(305),
        _0x52438b(306),
        'BinaryExpression',
        _0x52438b(307),
        _0x52438b(308),
        _0x52438b(309),
        'ChainExpression',
        _0x52438b(310),
        'ClassDeclaration',
        _0x52438b(311),
        _0x52438b(312),
        'ContinueStatement',
        _0x52438b(313),
        _0x52438b(314),
        _0x52438b(315),
        _0x52438b(316),
        'ExperimentalSpreadProperty',
        _0x52438b(317),
        _0x52438b(318),
        _0x52438b(319),
        _0x52438b(320),
        _0x52438b(321),
        _0x52438b(322),
        _0x52438b(323),
        _0x52438b(324),
        _0x52438b(325),
        'LabeledStatement',
        _0x52438b(326),
        _0x52438b(327),
        _0x52438b(328),
        _0x52438b(329),
        _0x52438b(330),
        _0x52438b(331),
        _0x52438b(332),
        'Program',
        'Property',
        _0x52438b(333),
        _0x52438b(334),
        'SequenceExpression',
        _0x52438b(335),
        _0x52438b(336),
        'SwitchCase',
        _0x52438b(337),
        _0x52438b(338),
        _0x52438b(339),
        _0x52438b(340),
        _0x52438b(341),
        _0x52438b(342),
        _0x52438b(343),
        _0x52438b(344),
        _0x52438b(345),
        _0x52438b(346),
        _0x52438b(347),
        _0x52438b(348),
        _0x52438b(349),
        _0x52438b(350),
        _0x52438b(351),
        _0x52438b(352),
        _0x52438b(353),
        _0x52438b(354),
        _0x52438b(355),
        _0x52438b(356),
        _0x52438b(357),
        'JSXExpressionContainer',
        'JSXElement',
        _0x52438b(358),
        'JSXOpeningElement',
        'JSXAttribute',
        'JSXSpreadAttribute',
        _0x52438b(359),
        _0x52438b(360),
        _0x52438b(361),
        _0x52438b(362),
        _0x52438b(363),
        _0x52438b(364),
        _0x52438b(365),
        _0x52438b(366),
        _0x52438b(367),
        _0x52438b(368)
    ]);
class BinarySearchTree {
    constructor() {
        const _0x1000db = _0x52438b;
        this[_0x1000db(369)] = createTree();
    }
    [_0x52438b(370)](_0x4a21f7, _0x2b876c) {
        const _0x55739b = _0x52438b, _0x290b5a = this[_0x55739b(369)][_0x55739b(371)](_0x4a21f7);
        _0x290b5a[_0x55739b(372)] ? this[_0x55739b(369)] = _0x290b5a['update'](_0x2b876c) : this[_0x55739b(369)] = this['_rbTree']['insert'](_0x4a21f7, _0x2b876c);
    }
    [_0x52438b(373)](_0xbd4cda) {
        const _0x289272 = _0x52438b, _0x13d5c0 = this[_0x289272(369)]['le'](_0xbd4cda);
        return _0x13d5c0 && {
            'key': _0x13d5c0[_0x289272(374)],
            'value': _0x13d5c0['value']
        };
    }
    [_0x52438b(375)](_0x39313a, _0x4e853f) {
        const _0x13b7c3 = _0x52438b;
        if (_0x39313a === _0x4e853f)
            return;
        const _0x13f8f9 = this['_rbTree']['ge'](_0x39313a);
        while (_0x13f8f9[_0x13b7c3(372)] && _0x13f8f9[_0x13b7c3(374)] < _0x4e853f) {
            this['_rbTree'] = this['_rbTree'][_0x13b7c3(376)](_0x13f8f9[_0x13b7c3(374)]), _0x13f8f9[_0x13b7c3(377)]();
        }
    }
}
class TokenInfo {
    constructor(_0x7cf1d3) {
        const _0x8fd8f = _0x52438b;
        this[_0x8fd8f(378)] = _0x7cf1d3, this[_0x8fd8f(379)] = _0x7cf1d3[_0x8fd8f(380)][_0x8fd8f(381)]((_0x1e3937, _0x489a07) => {
            const _0x5f5d31 = _0x8fd8f;
            return !_0x1e3937[_0x5f5d31(382)](_0x489a07['loc'][_0x5f5d31(383)][_0x5f5d31(384)]) && _0x1e3937[_0x5f5d31(385)](_0x489a07[_0x5f5d31(386)]['start'][_0x5f5d31(384)], _0x489a07), !_0x1e3937[_0x5f5d31(382)](_0x489a07[_0x5f5d31(386)]['end']['line']) && _0x7cf1d3['text']['slice'](_0x489a07[_0x5f5d31(387)][1] - _0x489a07[_0x5f5d31(386)]['end']['column'], _0x489a07['range'][1])['trim']() && _0x1e3937[_0x5f5d31(385)](_0x489a07[_0x5f5d31(386)]['end'][_0x5f5d31(384)], _0x489a07), _0x1e3937;
        }, new Map());
    }
    ['getFirstTokenOfLine'](_0x209d08) {
        const _0x3a05f2 = _0x52438b;
        return this[_0x3a05f2(379)][_0x3a05f2(388)](_0x209d08[_0x3a05f2(386)][_0x3a05f2(383)][_0x3a05f2(384)]);
    }
    [_0x52438b(389)](_0x260751) {
        const _0xa3ab9d = _0x52438b;
        return this[_0xa3ab9d(390)](_0x260751) === _0x260751;
    }
    [_0x52438b(391)](_0x5d2a92) {
        const _0xa379d3 = _0x52438b;
        return this[_0xa379d3(378)][_0xa379d3(392)]['slice'](_0x5d2a92[_0xa379d3(387)][0] - _0x5d2a92[_0xa379d3(386)]['start'][_0xa379d3(393)], _0x5d2a92[_0xa379d3(387)][0]);
    }
}
class OffsetStorage {
    constructor(_0x36a899, _0x183f71, _0x883501) {
        const _0x7d954e = _0x52438b;
        this[_0x7d954e(394)] = _0x36a899, this[_0x7d954e(395)] = _0x183f71, this[_0x7d954e(396)] = _0x883501, this[_0x7d954e(397)] = new BinarySearchTree(), this['_tree']['insert'](0, {
            'offset': 0,
            'from': null,
            'force': ![]
        }), this['_lockedFirstTokens'] = new WeakMap(), this[_0x7d954e(398)] = new WeakMap(), this[_0x7d954e(399)] = new WeakSet();
    }
    [_0x52438b(400)](_0x316d65) {
        const _0x5b7262 = _0x52438b;
        return this[_0x5b7262(397)][_0x5b7262(373)](_0x316d65[_0x5b7262(387)][0])[_0x5b7262(401)];
    }
    [_0x52438b(402)](_0x59fa49, _0x2d40bd) {
        const _0x3e563b = _0x52438b;
        this[_0x3e563b(403)][_0x3e563b(385)](_0x2d40bd, _0x59fa49);
    }
    [_0x52438b(404)](_0x4aceec, _0x159f2d, _0xb2fd52) {
        const _0x1b6289 = _0x52438b;
        return this[_0x1b6289(405)](_0x4aceec[_0x1b6289(387)], _0x159f2d, _0xb2fd52);
    }
    ['setDesiredOffsets'](_0x401c36, _0x5af38d, _0x230ef1, _0x27c3ff) {
        const _0x4f745a = _0x52438b, _0x5a0a2a = {
                'offset': _0x230ef1,
                'from': _0x5af38d,
                'force': _0x27c3ff
            }, _0xe6f839 = this[_0x4f745a(397)]['findLe'](_0x401c36[1])[_0x4f745a(401)], _0x501757 = _0x5af38d && _0x5af38d[_0x4f745a(387)][0] >= _0x401c36[0] && _0x5af38d[_0x4f745a(387)][1] <= _0x401c36[1], _0x3766f6 = _0x501757 && this['_getOffsetDescriptor'](_0x5af38d);
        this['_tree'][_0x4f745a(375)](_0x401c36[0] + 1, _0x401c36[1]), this[_0x4f745a(397)][_0x4f745a(370)](_0x401c36[0], _0x5a0a2a), _0x501757 && (this[_0x4f745a(397)][_0x4f745a(370)](_0x5af38d[_0x4f745a(387)][0], _0x3766f6), this['_tree'][_0x4f745a(370)](_0x5af38d[_0x4f745a(387)][1], _0x5a0a2a)), this[_0x4f745a(397)][_0x4f745a(370)](_0x401c36[1], _0xe6f839);
    }
    [_0x52438b(406)](_0x4b2f1c) {
        const _0x4e4df5 = _0x52438b;
        if (!this[_0x4e4df5(398)][_0x4e4df5(382)](_0x4b2f1c)) {
            if (this[_0x4e4df5(399)]['has'](_0x4b2f1c))
                this['_desiredIndentCache'][_0x4e4df5(385)](_0x4b2f1c, this['_tokenInfo'][_0x4e4df5(391)](_0x4b2f1c));
            else {
                if (this[_0x4e4df5(403)][_0x4e4df5(382)](_0x4b2f1c)) {
                    const _0x5c6855 = this[_0x4e4df5(403)][_0x4e4df5(388)](_0x4b2f1c);
                    this[_0x4e4df5(398)][_0x4e4df5(385)](_0x4b2f1c, this['getDesiredIndent'](this['_tokenInfo']['getFirstTokenOfLine'](_0x5c6855)) + this[_0x4e4df5(396)][_0x4e4df5(407)](_0x5c6855[_0x4e4df5(386)][_0x4e4df5(383)][_0x4e4df5(393)] - this[_0x4e4df5(394)][_0x4e4df5(390)](_0x5c6855)[_0x4e4df5(386)][_0x4e4df5(383)][_0x4e4df5(393)]));
                } else {
                    const _0x574598 = this[_0x4e4df5(400)](_0x4b2f1c), _0x41e8ef = _0x574598[_0x4e4df5(408)] && _0x574598[_0x4e4df5(408)]['loc'][_0x4e4df5(383)][_0x4e4df5(384)] === _0x4b2f1c[_0x4e4df5(386)][_0x4e4df5(383)][_0x4e4df5(384)] && !/^\s*?\n/u['test'](_0x4b2f1c[_0x4e4df5(401)]) && !_0x574598[_0x4e4df5(409)] ? 0 : _0x574598[_0x4e4df5(410)] * this[_0x4e4df5(395)];
                    this[_0x4e4df5(398)][_0x4e4df5(385)](_0x4b2f1c, (_0x574598[_0x4e4df5(408)] ? this['getDesiredIndent'](_0x574598[_0x4e4df5(408)]) : '') + this[_0x4e4df5(396)][_0x4e4df5(407)](_0x41e8ef));
                }
            }
        }
        return this['_desiredIndentCache']['get'](_0x4b2f1c);
    }
    ['ignoreToken'](_0x4df648) {
        const _0x48c45a = _0x52438b;
        this['_tokenInfo']['isFirstTokenOfLine'](_0x4df648) && this[_0x48c45a(399)]['add'](_0x4df648);
    }
    [_0x52438b(411)](_0x32765f) {
        const _0x4e7902 = _0x52438b;
        return this[_0x4e7902(400)](_0x32765f)[_0x4e7902(408)];
    }
}
const ELEMENT_LIST_SCHEMA = {
    'oneOf': [
        {
            'type': _0x52438b(412),
            'minimum': 0
        },
        {
            'enum': [
                _0x52438b(413),
                _0x52438b(414)
            ]
        }
    ]
};
module[_0x52438b(415)] = {
    'meta': {
        'type': 'layout',
        'docs': {
            'description': 'enforce consistent indentation',
            'category': _0x52438b(416),
            'recommended': ![],
            'url': _0x52438b(417)
        },
        'fixable': _0x52438b(418),
        'schema': [
            {
                'oneOf': [
                    { 'enum': ['tab'] },
                    {
                        'type': _0x52438b(412),
                        'minimum': 0
                    }
                ]
            },
            {
                'type': _0x52438b(419),
                'properties': {
                    'SwitchCase': {
                        'type': _0x52438b(412),
                        'minimum': 0,
                        'default': 0
                    },
                    'VariableDeclarator': {
                        'oneOf': [
                            ELEMENT_LIST_SCHEMA,
                            {
                                'type': _0x52438b(419),
                                'properties': {
                                    'var': ELEMENT_LIST_SCHEMA,
                                    'let': ELEMENT_LIST_SCHEMA,
                                    'const': ELEMENT_LIST_SCHEMA
                                },
                                'additionalProperties': ![]
                            }
                        ]
                    },
                    'outerIIFEBody': {
                        'oneOf': [
                            {
                                'type': _0x52438b(412),
                                'minimum': 0
                            },
                            { 'enum': [_0x52438b(414)] }
                        ]
                    },
                    'MemberExpression': {
                        'oneOf': [
                            {
                                'type': 'integer',
                                'minimum': 0
                            },
                            { 'enum': [_0x52438b(414)] }
                        ]
                    },
                    'FunctionDeclaration': {
                        'type': _0x52438b(419),
                        'properties': {
                            'parameters': ELEMENT_LIST_SCHEMA,
                            'body': {
                                'type': _0x52438b(412),
                                'minimum': 0
                            }
                        },
                        'additionalProperties': ![]
                    },
                    'FunctionExpression': {
                        'type': _0x52438b(419),
                        'properties': {
                            'parameters': ELEMENT_LIST_SCHEMA,
                            'body': {
                                'type': 'integer',
                                'minimum': 0
                            }
                        },
                        'additionalProperties': ![]
                    },
                    'CallExpression': {
                        'type': _0x52438b(419),
                        'properties': { 'arguments': ELEMENT_LIST_SCHEMA },
                        'additionalProperties': ![]
                    },
                    'ArrayExpression': ELEMENT_LIST_SCHEMA,
                    'ObjectExpression': ELEMENT_LIST_SCHEMA,
                    'ImportDeclaration': ELEMENT_LIST_SCHEMA,
                    'flatTernaryExpressions': {
                        'type': _0x52438b(420),
                        'default': ![]
                    },
                    'offsetTernaryExpressions': {
                        'type': 'boolean',
                        'default': ![]
                    },
                    'ignoredNodes': {
                        'type': _0x52438b(421),
                        'items': {
                            'type': _0x52438b(422),
                            'not': { 'pattern': _0x52438b(423) }
                        }
                    },
                    'ignoreComments': {
                        'type': 'boolean',
                        'default': ![]
                    }
                },
                'additionalProperties': ![]
            }
        ],
        'messages': { 'wrongIndentation': _0x52438b(424) }
    },
    'create'(_0x4aa841) {
        const _0x3003b8 = _0x52438b, _0x10d138 = 1, _0x3501aa = 1, _0x4fb227 = 1;
        let _0x32d31d = _0x3003b8(425), _0x50a1db = 4;
        const _0x4d83c1 = {
            'SwitchCase': 0,
            'VariableDeclarator': {
                'var': _0x10d138,
                'let': _0x10d138,
                'const': _0x10d138
            },
            'outerIIFEBody': 1,
            'FunctionDeclaration': {
                'parameters': _0x3501aa,
                'body': _0x4fb227
            },
            'FunctionExpression': {
                'parameters': _0x3501aa,
                'body': _0x4fb227
            },
            'CallExpression': { 'arguments': _0x3501aa },
            'MemberExpression': 1,
            'ArrayExpression': 1,
            'ObjectExpression': 1,
            'ImportDeclaration': 1,
            'flatTernaryExpressions': ![],
            'ignoredNodes': [],
            'ignoreComments': ![]
        };
        _0x4aa841[_0x3003b8(426)][_0x3003b8(427)] && (_0x4aa841[_0x3003b8(426)][0] === _0x3003b8(428) ? (_0x50a1db = 1, _0x32d31d = _0x3003b8(428)) : (_0x50a1db = _0x4aa841[_0x3003b8(426)][0], _0x32d31d = _0x3003b8(425)), _0x4aa841[_0x3003b8(426)][1] && (Object[_0x3003b8(429)](_0x4d83c1, _0x4aa841[_0x3003b8(426)][1]), (typeof _0x4d83c1[_0x3003b8(347)] === _0x3003b8(430) || _0x4d83c1[_0x3003b8(347)] === _0x3003b8(413)) && (_0x4d83c1[_0x3003b8(347)] = {
            'var': _0x4d83c1['VariableDeclarator'],
            'let': _0x4d83c1[_0x3003b8(347)],
            'const': _0x4d83c1[_0x3003b8(347)]
        })));
        const _0x331cfe = _0x4aa841[_0x3003b8(431)](), _0x4561db = new TokenInfo(_0x331cfe), _0x12af69 = new OffsetStorage(_0x4561db, _0x50a1db, _0x32d31d === _0x3003b8(425) ? ' ' : '\t'), _0x3dff01 = new WeakSet();
        function _0x533495(_0x502ac6, _0x14e3de, _0x8a0eef) {
            const _0x3ab78a = _0x3003b8, _0x3179f0 = _0x502ac6 + ' ' + _0x32d31d + (_0x502ac6 === 1 ? '' : 's'), _0x28671a = 'space' + (_0x14e3de === 1 ? '' : 's'), _0x595b78 = 'tab' + (_0x8a0eef === 1 ? '' : 's');
            let _0x570f79;
            if (_0x14e3de > 0)
                _0x570f79 = _0x32d31d === _0x3ab78a(425) ? _0x14e3de : _0x14e3de + ' ' + _0x28671a;
            else
                _0x8a0eef > 0 ? _0x570f79 = _0x32d31d === _0x3ab78a(428) ? _0x8a0eef : _0x8a0eef + ' ' + _0x595b78 : _0x570f79 = '0';
            return {
                'expected': _0x3179f0,
                'actual': _0x570f79
            };
        }
        function _0x2da3de(_0x2f8c7c, _0x4612e9) {
            const _0x9c6612 = _0x3003b8, _0x38642a = Array[_0x9c6612(408)](_0x4561db[_0x9c6612(391)](_0x2f8c7c)), _0xbebf7a = _0x38642a[_0x9c6612(432)](_0x1d96b5 => _0x1d96b5 === ' ')['length'], _0x3ae9c3 = _0x38642a[_0x9c6612(432)](_0x387dbf => _0x387dbf === '\t')[_0x9c6612(427)];
            _0x4aa841[_0x9c6612(433)]({
                'node': _0x2f8c7c,
                'messageId': 'wrongIndentation',
                'data': _0x533495(_0x4612e9[_0x9c6612(427)], _0xbebf7a, _0x3ae9c3),
                'loc': {
                    'start': {
                        'line': _0x2f8c7c[_0x9c6612(386)][_0x9c6612(383)][_0x9c6612(384)],
                        'column': 0
                    },
                    'end': {
                        'line': _0x2f8c7c[_0x9c6612(386)]['start']['line'],
                        'column': _0x2f8c7c[_0x9c6612(386)]['start'][_0x9c6612(393)]
                    }
                },
                'fix'(_0x4d42b9) {
                    const _0x261bec = _0x9c6612, _0x33642b = [
                            _0x2f8c7c[_0x261bec(387)][0] - _0x2f8c7c[_0x261bec(386)][_0x261bec(383)][_0x261bec(393)],
                            _0x2f8c7c['range'][0]
                        ], _0x2d6e00 = _0x4612e9;
                    return _0x4d42b9[_0x261bec(434)](_0x33642b, _0x2d6e00);
                }
            });
        }
        function _0x24c0e8(_0x3e0075, _0x4c11da) {
            const _0x142e03 = _0x3003b8, _0x292b7d = _0x4561db[_0x142e03(391)](_0x3e0075);
            return _0x292b7d === _0x4c11da || _0x292b7d[_0x142e03(435)](' ') && _0x292b7d[_0x142e03(435)]('\t');
        }
        function _0xd2900d(_0x1957c8) {
            const _0x2bd8ad = _0x3003b8;
            if (!_0x1957c8[_0x2bd8ad(436)] || _0x1957c8['parent']['type'] !== 'CallExpression' || _0x1957c8[_0x2bd8ad(436)][_0x2bd8ad(437)] !== _0x1957c8)
                return ![];
            let _0x25c3c7 = _0x1957c8[_0x2bd8ad(436)] && _0x1957c8[_0x2bd8ad(436)][_0x2bd8ad(436)];
            while (_0x25c3c7[_0x2bd8ad(438)] === _0x2bd8ad(344) && [
                    '!',
                    '~',
                    '+',
                    '-'
                ][_0x2bd8ad(439)](_0x25c3c7[_0x2bd8ad(440)]) > -1 || _0x25c3c7[_0x2bd8ad(438)] === _0x2bd8ad(302) || _0x25c3c7[_0x2bd8ad(438)] === _0x2bd8ad(326) || _0x25c3c7['type'] === _0x2bd8ad(441) || _0x25c3c7['type'] === _0x2bd8ad(347)) {
                _0x25c3c7 = _0x25c3c7[_0x2bd8ad(436)];
            }
            return (_0x25c3c7['type'] === _0x2bd8ad(317) || _0x25c3c7[_0x2bd8ad(438)] === _0x2bd8ad(346)) && _0x25c3c7['parent'][_0x2bd8ad(438)] === _0x2bd8ad(442);
        }
        function _0x4c23d7(_0x287e63) {
            const _0x4ebcbb = _0x3003b8, _0x5ebc45 = _0x287e63['match'](/\s*$/u)[0], _0x4e195f = _0x5ebc45[_0x4ebcbb(443)](astUtils[_0x4ebcbb(444)]());
            return _0x4e195f === null ? 0 : _0x4e195f['length'];
        }
        function _0x3de731(_0x341055, _0x18d657, _0x482804, _0x343c3c) {
            const _0xdee761 = _0x3003b8;
            function _0x424858(_0x56a53b) {
                const _0x22548c = _0x16af;
                let _0x135b3a = _0x331cfe[_0x22548c(445)](_0x56a53b);
                while (astUtils['isOpeningParenToken'](_0x135b3a) && _0x135b3a !== _0x18d657) {
                    _0x135b3a = _0x331cfe['getTokenBefore'](_0x135b3a);
                }
                return _0x331cfe[_0x22548c(446)](_0x135b3a);
            }
            _0x12af69[_0xdee761(405)]([
                _0x18d657[_0xdee761(387)][1],
                _0x482804[_0xdee761(387)][0]
            ], _0x18d657, typeof _0x343c3c === _0xdee761(430) ? _0x343c3c : 1), _0x12af69[_0xdee761(404)](_0x482804, _0x18d657, 0);
            if (_0x343c3c === _0xdee761(413) && _0x341055[_0xdee761(427)] && !_0x341055[0])
                return;
            _0x341055[_0xdee761(447)]((_0x4aa23f, _0x15d957) => {
                const _0x10821f = _0xdee761;
                if (!_0x4aa23f)
                    return;
                _0x343c3c === _0x10821f(414) && _0x12af69[_0x10821f(448)](_0x424858(_0x4aa23f));
                if (_0x15d957 === 0)
                    return;
                if (_0x343c3c === 'first' && _0x4561db[_0x10821f(389)](_0x424858(_0x4aa23f)))
                    _0x12af69[_0x10821f(402)](_0x424858(_0x341055[0]), _0x424858(_0x4aa23f));
                else {
                    const _0x144dab = _0x341055[_0x15d957 - 1], _0x3923e6 = _0x144dab && _0x424858(_0x144dab), _0x4f0a94 = _0x144dab && _0x331cfe['getLastToken'](_0x144dab);
                    _0x144dab && _0x4f0a94[_0x10821f(386)][_0x10821f(449)][_0x10821f(384)] - _0x4c23d7(_0x4f0a94[_0x10821f(401)]) > _0x18d657['loc'][_0x10821f(449)]['line'] && _0x12af69['setDesiredOffsets']([
                        _0x144dab[_0x10821f(387)][1],
                        _0x4aa23f[_0x10821f(387)][1]
                    ], _0x3923e6, 0);
                }
            });
        }
        function _0x5dde7d(_0x3e7f16) {
            const _0x1ba0ea = _0x3003b8;
            if (_0x3e7f16[_0x1ba0ea(438)] !== _0x1ba0ea(306)) {
                const _0x32bf45 = _0x331cfe[_0x1ba0ea(445)](_0x3e7f16, astUtils[_0x1ba0ea(450)]);
                let _0xa05625 = _0x331cfe[_0x1ba0ea(451)](_0x3e7f16), _0x19aac0 = _0x331cfe[_0x1ba0ea(452)](_0x3e7f16);
                while (astUtils[_0x1ba0ea(453)](_0x331cfe[_0x1ba0ea(445)](_0xa05625)) && astUtils[_0x1ba0ea(454)](_0x331cfe[_0x1ba0ea(446)](_0x19aac0))) {
                    _0xa05625 = _0x331cfe[_0x1ba0ea(445)](_0xa05625), _0x19aac0 = _0x331cfe[_0x1ba0ea(446)](_0x19aac0);
                }
                _0x12af69['setDesiredOffsets']([
                    _0xa05625[_0x1ba0ea(387)][0],
                    _0x19aac0[_0x1ba0ea(387)][1]
                ], _0x32bf45, 1);
                const _0x452808 = _0x331cfe[_0x1ba0ea(452)](_0x3e7f16);
                _0x3e7f16[_0x1ba0ea(438)] !== _0x1ba0ea(315) && astUtils[_0x1ba0ea(455)](_0x452808) && _0x12af69[_0x1ba0ea(404)](_0x452808, _0x32bf45, 0);
            }
        }
        function _0x587eea(_0x214c41) {
            const _0x29e5f2 = _0x3003b8;
            let _0x69b6cb;
            _0x214c41[_0x29e5f2(456)][_0x29e5f2(427)] ? _0x69b6cb = _0x331cfe[_0x29e5f2(457)](_0x214c41['callee'], _0x214c41[_0x29e5f2(456)][0], astUtils[_0x29e5f2(453)]) : _0x69b6cb = _0x331cfe[_0x29e5f2(452)](_0x214c41, 1);
            const _0xf7dd48 = _0x331cfe[_0x29e5f2(452)](_0x214c41);
            _0x3dff01[_0x29e5f2(458)](_0x69b6cb), _0x3dff01[_0x29e5f2(458)](_0xf7dd48);
            if (_0x214c41[_0x29e5f2(459)]) {
                const _0x17af51 = _0x331cfe[_0x29e5f2(446)](_0x214c41[_0x29e5f2(437)], astUtils[_0x29e5f2(460)]), _0x57e658 = _0x331cfe[_0x29e5f2(461)](_0x214c41[_0x29e5f2(437)], _0x17af51, { 'filter': astUtils['isClosingParenToken'] })[_0x29e5f2(427)], _0x5981ab = _0x57e658 ? _0x331cfe[_0x29e5f2(445)](_0x214c41[_0x29e5f2(437)], { 'skip': _0x57e658 - 1 }) : _0x331cfe[_0x29e5f2(451)](_0x214c41[_0x29e5f2(437)]), _0x417a8f = _0x331cfe['getTokenBefore'](_0x17af51), _0x1c7001 = _0x417a8f['loc']['end']['line'] === _0x69b6cb[_0x29e5f2(386)]['start']['line'] ? _0x417a8f : _0x5981ab;
                _0x12af69[_0x29e5f2(404)](_0x17af51, _0x1c7001, 1);
            }
            const _0x26e4a1 = _0x214c41[_0x29e5f2(437)][_0x29e5f2(438)] === 'TaggedTemplateExpression' ? _0x331cfe[_0x29e5f2(451)](_0x214c41['callee'][_0x29e5f2(462)]) : _0x69b6cb, _0x5d30a8 = _0x331cfe[_0x29e5f2(445)](_0x26e4a1);
            _0x12af69[_0x29e5f2(404)](_0x69b6cb, _0x5d30a8, 0), _0x3de731(_0x214c41['arguments'], _0x69b6cb, _0xf7dd48, _0x4d83c1[_0x29e5f2(308)][_0x29e5f2(456)]);
        }
        function _0x582f58(_0x3415f2) {
            const _0x6dbf1c = _0x3003b8, _0x42b3a0 = [], _0x39842e = [];
            _0x3415f2['forEach'](_0x33bbe4 => {
                const _0x3ce240 = _0x16af;
                if (astUtils['isOpeningParenToken'](_0x33bbe4))
                    _0x42b3a0[_0x3ce240(463)](_0x33bbe4);
                else
                    astUtils['isClosingParenToken'](_0x33bbe4) && _0x39842e[_0x3ce240(464)]({
                        'left': _0x42b3a0[_0x3ce240(465)](),
                        'right': _0x33bbe4
                    });
            }), _0x39842e[_0x6dbf1c(447)](_0x19f4a5 => {
                const _0x4932e3 = _0x6dbf1c, _0x2b7b21 = _0x19f4a5[_0x4932e3(466)], _0xb31777 = _0x19f4a5[_0x4932e3(467)];
                if (!_0x3dff01[_0x4932e3(382)](_0x2b7b21) && !_0x3dff01['has'](_0xb31777)) {
                    const _0x21e29c = new Set(_0x331cfe['getTokensBetween'](_0x2b7b21, _0xb31777));
                    _0x21e29c['forEach'](_0x1beac3 => {
                        const _0x57cbd8 = _0x4932e3;
                        !_0x21e29c[_0x57cbd8(382)](_0x12af69[_0x57cbd8(411)](_0x1beac3)) && _0x12af69['setDesiredOffset'](_0x1beac3, _0x2b7b21, 1);
                    });
                }
                _0x12af69[_0x4932e3(404)](_0xb31777, _0x2b7b21, 0);
            });
        }
        function _0x32b392(_0x33a0a0) {
            const _0x4058d4 = _0x3003b8, _0x11d6bc = new Set(_0x331cfe[_0x4058d4(468)](_0x33a0a0, { 'includeComments': !![] }));
            _0x11d6bc[_0x4058d4(447)](_0x354078 => {
                const _0x459a76 = _0x4058d4;
                if (!_0x11d6bc['has'](_0x12af69[_0x459a76(411)](_0x354078))) {
                    const _0x149dbe = _0x4561db[_0x459a76(390)](_0x354078);
                    _0x354078 === _0x149dbe ? _0x12af69[_0x459a76(448)](_0x354078) : _0x12af69[_0x459a76(404)](_0x354078, _0x149dbe, 0);
                }
            });
        }
        function _0x57a3a0(_0x417e95, _0x4ab2d6) {
            const _0x44da7a = _0x3003b8;
            let _0x2e8c24 = _0x4ab2d6;
            while (_0x2e8c24[_0x44da7a(436)] && !_0x2e8c24['parent'][_0x44da7a(438)][_0x44da7a(469)](_0x44da7a(470)) && !_0x2e8c24[_0x44da7a(436)][_0x44da7a(438)]['endsWith'](_0x44da7a(471))) {
                _0x2e8c24 = _0x2e8c24[_0x44da7a(436)];
            }
            return _0x2e8c24 = _0x2e8c24[_0x44da7a(436)], !_0x2e8c24 || _0x2e8c24[_0x44da7a(386)][_0x44da7a(383)]['line'] === _0x417e95['loc'][_0x44da7a(383)][_0x44da7a(384)];
        }
        function _0x9ee6e0(_0x3c3e1d, _0x1653b1) {
            const _0x391836 = _0x3003b8, _0x4173e5 = _0x3c3e1d[_0x391836(386)][_0x391836(449)][_0x391836(384)], _0x5428c4 = _0x1653b1['loc'][_0x391836(383)][_0x391836(384)];
            if (_0x4173e5 === _0x5428c4 || _0x4173e5 === _0x5428c4 - 1)
                return ![];
            for (let _0x65659f = _0x4173e5 + 1; _0x65659f < _0x5428c4; ++_0x65659f) {
                if (!_0x4561db[_0x391836(379)]['has'](_0x65659f))
                    return !![];
            }
            return ![];
        }
        const _0x4fc530 = new Set(), _0x2b9f48 = {
                'ArrayExpression, ArrayPattern'(_0xb0aad) {
                    const _0x230be2 = _0x3003b8, _0x38a887 = _0x331cfe[_0x230be2(451)](_0xb0aad), _0x588dd0 = _0x331cfe[_0x230be2(446)]([..._0xb0aad[_0x230be2(472)]]['reverse']()[_0x230be2(371)](_0xa0bb27 => _0xa0bb27) || _0x38a887, astUtils[_0x230be2(473)]);
                    _0x3de731(_0xb0aad[_0x230be2(472)], _0x38a887, _0x588dd0, _0x4d83c1[_0x230be2(303)]);
                },
                'ObjectExpression, ObjectPattern'(_0x15c70e) {
                    const _0x289716 = _0x3003b8, _0x80731b = _0x331cfe[_0x289716(451)](_0x15c70e), _0x30bd9c = _0x331cfe[_0x289716(446)](_0x15c70e['properties'][_0x289716(427)] ? _0x15c70e['properties'][_0x15c70e[_0x289716(474)][_0x289716(427)] - 1] : _0x80731b, astUtils[_0x289716(475)]);
                    _0x3de731(_0x15c70e['properties'], _0x80731b, _0x30bd9c, _0x4d83c1[_0x289716(331)]);
                },
                'ArrowFunctionExpression'(_0x182349) {
                    const _0x36f8d4 = _0x3003b8, _0xa3e231 = _0x331cfe[_0x36f8d4(451)](_0x182349, { 'skip': _0x182349[_0x36f8d4(476)] ? 1 : 0 });
                    if (astUtils[_0x36f8d4(453)](_0xa3e231)) {
                        const _0x10176c = _0xa3e231, _0x1acefe = _0x331cfe[_0x36f8d4(445)](_0x182349[_0x36f8d4(477)], astUtils[_0x36f8d4(454)]);
                        _0x3dff01[_0x36f8d4(458)](_0x10176c), _0x3dff01['add'](_0x1acefe), _0x3de731(_0x182349[_0x36f8d4(478)], _0x10176c, _0x1acefe, _0x4d83c1['FunctionExpression'][_0x36f8d4(479)]);
                    }
                    _0x5dde7d(_0x182349['body']);
                },
                'AssignmentExpression'(_0x23eb56) {
                    const _0x2d4131 = _0x3003b8, _0x20af57 = _0x331cfe['getFirstTokenBetween'](_0x23eb56['left'], _0x23eb56[_0x2d4131(467)], _0x9fdf05 => _0x9fdf05[_0x2d4131(401)] === _0x23eb56[_0x2d4131(440)]);
                    _0x12af69[_0x2d4131(405)]([
                        _0x20af57['range'][0],
                        _0x23eb56[_0x2d4131(387)][1]
                    ], _0x331cfe[_0x2d4131(452)](_0x23eb56['left']), 1), _0x12af69[_0x2d4131(448)](_0x20af57), _0x12af69['ignoreToken'](_0x331cfe[_0x2d4131(446)](_0x20af57));
                },
                'BinaryExpression, LogicalExpression'(_0x47d9dd) {
                    const _0x1df627 = _0x3003b8, _0x137d12 = _0x331cfe['getFirstTokenBetween'](_0x47d9dd[_0x1df627(466)], _0x47d9dd[_0x1df627(467)], _0xde5e96 => _0xde5e96[_0x1df627(401)] === _0x47d9dd['operator']), _0xe4f60c = _0x331cfe[_0x1df627(446)](_0x137d12);
                    _0x12af69[_0x1df627(448)](_0x137d12), _0x12af69[_0x1df627(448)](_0xe4f60c), _0x12af69[_0x1df627(404)](_0xe4f60c, _0x137d12, 0);
                },
                'BlockStatement, ClassBody'(_0x1e2d07) {
                    const _0x4a74b8 = _0x3003b8;
                    let _0xc62e23;
                    if (_0x1e2d07[_0x4a74b8(436)] && _0xd2900d(_0x1e2d07[_0x4a74b8(436)]))
                        _0xc62e23 = _0x4d83c1['outerIIFEBody'];
                    else {
                        if (_0x1e2d07[_0x4a74b8(436)] && (_0x1e2d07[_0x4a74b8(436)][_0x4a74b8(438)] === _0x4a74b8(322) || _0x1e2d07['parent'][_0x4a74b8(438)] === 'ArrowFunctionExpression'))
                            _0xc62e23 = _0x4d83c1[_0x4a74b8(322)][_0x4a74b8(477)];
                        else
                            _0x1e2d07[_0x4a74b8(436)] && _0x1e2d07['parent'][_0x4a74b8(438)] === _0x4a74b8(321) ? _0xc62e23 = _0x4d83c1[_0x4a74b8(321)][_0x4a74b8(477)] : _0xc62e23 = 1;
                    }
                    !astUtils[_0x4a74b8(480)][_0x4a74b8(382)](_0x1e2d07['parent'][_0x4a74b8(438)]) && _0x12af69['setDesiredOffset'](_0x331cfe[_0x4a74b8(451)](_0x1e2d07), _0x331cfe['getFirstToken'](_0x1e2d07['parent']), 0), _0x3de731(_0x1e2d07['body'], _0x331cfe[_0x4a74b8(451)](_0x1e2d07), _0x331cfe[_0x4a74b8(452)](_0x1e2d07), _0xc62e23);
                },
                'CallExpression': _0x587eea,
                'ClassDeclaration[superClass], ClassExpression[superClass]'(_0x1747ee) {
                    const _0x5170c4 = _0x3003b8, _0x2336e2 = _0x331cfe[_0x5170c4(451)](_0x1747ee), _0x237144 = _0x331cfe[_0x5170c4(445)](_0x1747ee[_0x5170c4(481)], astUtils[_0x5170c4(450)]);
                    _0x12af69[_0x5170c4(405)]([
                        _0x237144[_0x5170c4(387)][0],
                        _0x1747ee[_0x5170c4(477)][_0x5170c4(387)][0]
                    ], _0x2336e2, 1);
                },
                'ConditionalExpression'(_0x12e34a) {
                    const _0x9f91b4 = _0x3003b8, _0x3a0e58 = _0x331cfe['getFirstToken'](_0x12e34a);
                    if (!_0x4d83c1['flatTernaryExpressions'] || !astUtils[_0x9f91b4(482)](_0x12e34a[_0x9f91b4(483)], _0x12e34a[_0x9f91b4(484)]) || _0x57a3a0(_0x3a0e58, _0x12e34a)) {
                        const _0x5cbdd3 = _0x331cfe[_0x9f91b4(457)](_0x12e34a[_0x9f91b4(483)], _0x12e34a[_0x9f91b4(484)], _0x322990 => _0x322990[_0x9f91b4(438)] === _0x9f91b4(485) && _0x322990['value'] === '?'), _0x3cabe6 = _0x331cfe[_0x9f91b4(457)](_0x12e34a[_0x9f91b4(484)], _0x12e34a['alternate'], _0x535c6a => _0x535c6a[_0x9f91b4(438)] === _0x9f91b4(485) && _0x535c6a[_0x9f91b4(401)] === ':'), _0xb29d8a = _0x331cfe['getTokenAfter'](_0x5cbdd3), _0x7cf919 = _0x331cfe[_0x9f91b4(445)](_0x3cabe6), _0x268bdc = _0x331cfe[_0x9f91b4(446)](_0x3cabe6);
                        _0x12af69['setDesiredOffset'](_0x5cbdd3, _0x3a0e58, 1), _0x12af69['setDesiredOffset'](_0x3cabe6, _0x3a0e58, 1), _0x12af69[_0x9f91b4(404)](_0xb29d8a, _0x3a0e58, _0xb29d8a[_0x9f91b4(438)] === _0x9f91b4(485) && _0x4d83c1['offsetTernaryExpressions'] ? 2 : 1), _0x7cf919[_0x9f91b4(386)][_0x9f91b4(449)][_0x9f91b4(384)] === _0x268bdc[_0x9f91b4(386)]['start'][_0x9f91b4(384)] ? _0x12af69['setDesiredOffset'](_0x268bdc, _0xb29d8a, 0) : _0x12af69[_0x9f91b4(404)](_0x268bdc, _0x3a0e58, _0x268bdc[_0x9f91b4(438)] === _0x9f91b4(485) && _0x4d83c1[_0x9f91b4(486)] ? 2 : 1);
                    }
                },
                'DoWhileStatement, WhileStatement, ForInStatement, ForOfStatement': _0x535f2d => _0x5dde7d(_0x535f2d[_0x3003b8(477)]),
                'ExportNamedDeclaration'(_0x25d251) {
                    const _0x4014cf = _0x3003b8;
                    if (_0x25d251[_0x4014cf(487)] === null) {
                        const _0x434805 = _0x331cfe['getLastToken'](_0x25d251, astUtils['isClosingBraceToken']);
                        _0x3de731(_0x25d251[_0x4014cf(488)], _0x331cfe[_0x4014cf(451)](_0x25d251, { 'skip': 1 }), _0x434805, 1), _0x25d251['source'] && _0x12af69[_0x4014cf(405)]([
                            _0x434805['range'][1],
                            _0x25d251[_0x4014cf(387)][1]
                        ], _0x331cfe[_0x4014cf(451)](_0x25d251), 1);
                    }
                },
                'ForStatement'(_0x511de6) {
                    const _0x1e62dc = _0x3003b8, _0xbb79d3 = _0x331cfe[_0x1e62dc(451)](_0x511de6, 1);
                    _0x511de6[_0x1e62dc(489)] && _0x12af69[_0x1e62dc(405)](_0x511de6[_0x1e62dc(489)]['range'], _0xbb79d3, 1), _0x511de6[_0x1e62dc(483)] && _0x12af69['setDesiredOffsets'](_0x511de6[_0x1e62dc(483)][_0x1e62dc(387)], _0xbb79d3, 1), _0x511de6[_0x1e62dc(490)] && _0x12af69['setDesiredOffsets'](_0x511de6['update'][_0x1e62dc(387)], _0xbb79d3, 1), _0x5dde7d(_0x511de6['body']);
                },
                'FunctionDeclaration, FunctionExpression'(_0x2c6903) {
                    const _0x136da0 = _0x3003b8, _0x54e170 = _0x331cfe['getTokenBefore'](_0x2c6903['body']), _0x2925de = _0x331cfe[_0x136da0(445)](_0x2c6903[_0x136da0(478)][_0x136da0(427)] ? _0x2c6903[_0x136da0(478)][0] : _0x54e170);
                    _0x3dff01['add'](_0x2925de), _0x3dff01[_0x136da0(458)](_0x54e170), _0x3de731(_0x2c6903[_0x136da0(478)], _0x2925de, _0x54e170, _0x4d83c1[_0x2c6903[_0x136da0(438)]]['parameters']);
                },
                'IfStatement'(_0x19617d) {
                    const _0x596614 = _0x3003b8;
                    _0x5dde7d(_0x19617d[_0x596614(484)]), _0x19617d['alternate'] && _0x19617d[_0x596614(491)][_0x596614(438)] !== _0x596614(324) && _0x5dde7d(_0x19617d[_0x596614(491)]);
                },
                'ImportDeclaration'(_0x5bfbf1) {
                    const _0x20d788 = _0x3003b8;
                    if (_0x5bfbf1[_0x20d788(488)][_0x20d788(492)](_0x3b82c8 => _0x3b82c8[_0x20d788(438)] === 'ImportSpecifier')) {
                        const _0x260329 = _0x331cfe[_0x20d788(451)](_0x5bfbf1, astUtils[_0x20d788(493)]), _0x2af0c3 = _0x331cfe['getLastToken'](_0x5bfbf1, astUtils[_0x20d788(475)]);
                        _0x3de731(_0x5bfbf1['specifiers'][_0x20d788(432)](_0x19cd2e => _0x19cd2e[_0x20d788(438)] === _0x20d788(365)), _0x260329, _0x2af0c3, _0x4d83c1['ImportDeclaration']);
                    }
                    const _0x3cfc8a = _0x331cfe['getLastToken'](_0x5bfbf1, _0x1d5756 => _0x1d5756[_0x20d788(438)] === 'Identifier' && _0x1d5756[_0x20d788(401)] === _0x20d788(408)), _0x37dbe9 = _0x331cfe[_0x20d788(452)](_0x5bfbf1, _0x144b14 => _0x144b14[_0x20d788(438)] === 'String'), _0x483d30 = _0x331cfe[_0x20d788(452)](_0x5bfbf1, _0x144dd2 => _0x144dd2['type'] === _0x20d788(485) && _0x144dd2[_0x20d788(401)] === ';');
                    if (_0x3cfc8a) {
                        const _0x401464 = _0x483d30 && _0x483d30[_0x20d788(387)][1] === _0x37dbe9['range'][1] ? _0x5bfbf1[_0x20d788(387)][1] : _0x37dbe9[_0x20d788(387)][1];
                        _0x12af69[_0x20d788(405)]([
                            _0x3cfc8a[_0x20d788(387)][0],
                            _0x401464
                        ], _0x331cfe['getFirstToken'](_0x5bfbf1), 1);
                    }
                },
                'ImportExpression'(_0x9b0cf4) {
                    const _0xfe7e80 = _0x3003b8, _0x27aa5e = _0x331cfe['getFirstToken'](_0x9b0cf4, 1), _0x1da446 = _0x331cfe[_0xfe7e80(452)](_0x9b0cf4);
                    _0x3dff01[_0xfe7e80(458)](_0x27aa5e), _0x3dff01['add'](_0x1da446), _0x12af69[_0xfe7e80(404)](_0x27aa5e, _0x331cfe[_0xfe7e80(445)](_0x27aa5e), 0), _0x3de731([_0x9b0cf4[_0xfe7e80(494)]], _0x27aa5e, _0x1da446, _0x4d83c1['CallExpression'][_0xfe7e80(456)]);
                },
                'MemberExpression, JSXMemberExpression, MetaProperty'(_0x17c607) {
                    const _0xfe419e = _0x3003b8, _0x18ad77 = _0x17c607[_0xfe419e(438)] === 'MetaProperty' ? _0x17c607[_0xfe419e(495)] : _0x17c607['object'], _0x312729 = _0x331cfe[_0xfe419e(457)](_0x18ad77, _0x17c607[_0xfe419e(496)], astUtils['isNotClosingParenToken']), _0x5f44a0 = _0x331cfe[_0xfe419e(446)](_0x312729), _0x3bd91e = _0x331cfe[_0xfe419e(461)](_0x18ad77, _0x17c607['property'], { 'filter': astUtils[_0xfe419e(454)] })[_0xfe419e(427)], _0x47bc59 = _0x3bd91e ? _0x331cfe['getTokenBefore'](_0x18ad77, { 'skip': _0x3bd91e - 1 }) : _0x331cfe[_0xfe419e(451)](_0x18ad77), _0x30282f = _0x331cfe['getTokenBefore'](_0x312729), _0x1b0a1b = _0x17c607['computed'] ? _0x312729 : _0x5f44a0;
                    _0x17c607[_0xfe419e(497)] && (_0x12af69[_0xfe419e(404)](_0x331cfe[_0xfe419e(452)](_0x17c607), _0x312729, 0), _0x12af69['setDesiredOffsets'](_0x17c607[_0xfe419e(496)]['range'], _0x312729, 1));
                    const _0x586944 = _0x30282f[_0xfe419e(386)][_0xfe419e(449)][_0xfe419e(384)] === _0x1b0a1b[_0xfe419e(386)]['start'][_0xfe419e(384)] ? _0x30282f : _0x47bc59;
                    typeof _0x4d83c1['MemberExpression'] === _0xfe419e(430) ? (_0x12af69[_0xfe419e(404)](_0x312729, _0x586944, _0x4d83c1[_0xfe419e(327)]), _0x12af69[_0xfe419e(404)](_0x5f44a0, _0x17c607['computed'] ? _0x312729 : _0x586944, _0x4d83c1['MemberExpression'])) : (_0x12af69['ignoreToken'](_0x312729), _0x12af69[_0xfe419e(448)](_0x5f44a0), _0x12af69[_0xfe419e(404)](_0x312729, _0x586944, 0), _0x12af69['setDesiredOffset'](_0x5f44a0, _0x312729, 0));
                },
                'NewExpression'(_0x28c6d9) {
                    const _0x437c72 = _0x3003b8;
                    (_0x28c6d9[_0x437c72(456)]['length'] > 0 || astUtils[_0x437c72(454)](_0x331cfe[_0x437c72(452)](_0x28c6d9)) && astUtils[_0x437c72(453)](_0x331cfe[_0x437c72(452)](_0x28c6d9, 1))) && _0x587eea(_0x28c6d9);
                },
                'Property'(_0x2ca384) {
                    const _0x5cf1c9 = _0x3003b8;
                    if (!_0x2ca384['shorthand'] && !_0x2ca384[_0x5cf1c9(498)] && _0x2ca384['kind'] === 'init') {
                        const _0x24bd8e = _0x331cfe[_0x5cf1c9(457)](_0x2ca384[_0x5cf1c9(374)], _0x2ca384['value'], astUtils[_0x5cf1c9(499)]);
                        _0x12af69[_0x5cf1c9(448)](_0x331cfe[_0x5cf1c9(446)](_0x24bd8e));
                    }
                },
                'SwitchStatement'(_0x114773) {
                    const _0x4425e3 = _0x3003b8, _0x46b7b4 = _0x331cfe[_0x4425e3(446)](_0x114773[_0x4425e3(500)], astUtils[_0x4425e3(493)]), _0x30990c = _0x331cfe[_0x4425e3(452)](_0x114773);
                    _0x12af69['setDesiredOffsets']([
                        _0x46b7b4[_0x4425e3(387)][1],
                        _0x30990c[_0x4425e3(387)][0]
                    ], _0x46b7b4, _0x4d83c1[_0x4425e3(501)]), _0x114773['cases']['length'] && _0x331cfe[_0x4425e3(461)](_0x114773['cases'][_0x114773[_0x4425e3(502)][_0x4425e3(427)] - 1], _0x30990c, {
                        'includeComments': !![],
                        'filter': astUtils[_0x4425e3(503)]
                    })[_0x4425e3(447)](_0x264438 => _0x12af69[_0x4425e3(448)](_0x264438));
                },
                'SwitchCase'(_0x404b02) {
                    const _0x4fc4db = _0x3003b8;
                    if (!(_0x404b02[_0x4fc4db(484)][_0x4fc4db(427)] === 1 && _0x404b02[_0x4fc4db(484)][0][_0x4fc4db(438)] === _0x4fc4db(306))) {
                        const _0x159424 = _0x331cfe['getFirstToken'](_0x404b02), _0x2b18f8 = _0x331cfe[_0x4fc4db(446)](_0x404b02);
                        _0x12af69[_0x4fc4db(405)]([
                            _0x159424[_0x4fc4db(387)][1],
                            _0x2b18f8[_0x4fc4db(387)][0]
                        ], _0x159424, 1);
                    }
                },
                'TemplateLiteral'(_0x501290) {
                    const _0x6138c1 = _0x3003b8;
                    _0x501290[_0x6138c1(504)][_0x6138c1(447)]((_0x223e87, _0x1c619b) => {
                        const _0x540ceb = _0x6138c1, _0x1d09f5 = _0x501290['quasis'][_0x1c619b], _0x5d8685 = _0x501290[_0x540ceb(505)][_0x1c619b + 1], _0x174601 = _0x1d09f5[_0x540ceb(386)][_0x540ceb(383)][_0x540ceb(384)] === _0x1d09f5[_0x540ceb(386)]['end'][_0x540ceb(384)] ? _0x331cfe['getFirstToken'](_0x1d09f5) : null;
                        _0x12af69[_0x540ceb(405)]([
                            _0x1d09f5[_0x540ceb(387)][1],
                            _0x5d8685[_0x540ceb(387)][0]
                        ], _0x174601, 1), _0x12af69[_0x540ceb(404)](_0x331cfe[_0x540ceb(451)](_0x5d8685), _0x174601, 0);
                    });
                },
                'VariableDeclaration'(_0x31a0cb) {
                    const _0x1aad4e = _0x3003b8;
                    let _0x27d0ff = Object['prototype'][_0x1aad4e(506)][_0x1aad4e(507)](_0x4d83c1[_0x1aad4e(347)], _0x31a0cb[_0x1aad4e(508)]) ? _0x4d83c1[_0x1aad4e(347)][_0x31a0cb[_0x1aad4e(508)]] : _0x10d138;
                    const _0x5f3980 = _0x331cfe[_0x1aad4e(451)](_0x31a0cb), _0x59c447 = _0x331cfe[_0x1aad4e(452)](_0x31a0cb);
                    if (_0x4d83c1['VariableDeclarator'][_0x31a0cb['kind']] === _0x1aad4e(413)) {
                        if (_0x31a0cb[_0x1aad4e(509)]['length'] > 1) {
                            _0x3de731(_0x31a0cb[_0x1aad4e(509)], _0x5f3980, _0x59c447, _0x1aad4e(413));
                            return;
                        }
                        _0x27d0ff = _0x10d138;
                    }
                    _0x31a0cb['declarations'][_0x31a0cb[_0x1aad4e(509)]['length'] - 1][_0x1aad4e(386)][_0x1aad4e(383)][_0x1aad4e(384)] > _0x31a0cb[_0x1aad4e(386)]['start'][_0x1aad4e(384)] ? _0x12af69[_0x1aad4e(405)](_0x31a0cb[_0x1aad4e(387)], _0x5f3980, _0x27d0ff, !![]) : _0x12af69[_0x1aad4e(405)](_0x31a0cb[_0x1aad4e(387)], _0x5f3980, _0x27d0ff), astUtils[_0x1aad4e(455)](_0x59c447) && _0x12af69[_0x1aad4e(448)](_0x59c447);
                },
                'VariableDeclarator'(_0x457433) {
                    const _0x3fb4c3 = _0x3003b8;
                    if (_0x457433[_0x3fb4c3(489)]) {
                        const _0x11d29c = _0x331cfe[_0x3fb4c3(445)](_0x457433[_0x3fb4c3(489)], astUtils['isNotOpeningParenToken']), _0x8230d1 = _0x331cfe['getTokenAfter'](_0x11d29c);
                        _0x12af69[_0x3fb4c3(448)](_0x11d29c), _0x12af69[_0x3fb4c3(448)](_0x8230d1), _0x12af69[_0x3fb4c3(405)]([
                            _0x8230d1['range'][0],
                            _0x457433[_0x3fb4c3(387)][1]
                        ], _0x11d29c, 1), _0x12af69['setDesiredOffset'](_0x11d29c, _0x331cfe[_0x3fb4c3(452)](_0x457433['id']), 0);
                    }
                },
                'JSXAttribute[value]'(_0x11ef4b) {
                    const _0x704b23 = _0x3003b8, _0x5da980 = _0x331cfe[_0x704b23(457)](_0x11ef4b[_0x704b23(510)], _0x11ef4b[_0x704b23(401)], _0x300408 => _0x300408[_0x704b23(438)] === _0x704b23(485) && _0x300408[_0x704b23(401)] === '=');
                    _0x12af69['setDesiredOffsets']([
                        _0x5da980[_0x704b23(387)][0],
                        _0x11ef4b[_0x704b23(401)][_0x704b23(387)][1]
                    ], _0x331cfe[_0x704b23(451)](_0x11ef4b[_0x704b23(510)]), 1);
                },
                'JSXElement'(_0xe662d3) {
                    const _0x480d43 = _0x3003b8;
                    _0xe662d3[_0x480d43(511)] && _0x3de731(_0xe662d3['children'], _0x331cfe[_0x480d43(451)](_0xe662d3[_0x480d43(512)]), _0x331cfe[_0x480d43(451)](_0xe662d3[_0x480d43(511)]), 1);
                },
                'JSXOpeningElement'(_0x470057) {
                    const _0x2ad87a = _0x3003b8, _0x4ff2d2 = _0x331cfe[_0x2ad87a(451)](_0x470057);
                    let _0x4834ff;
                    _0x470057['selfClosing'] ? (_0x4834ff = _0x331cfe[_0x2ad87a(452)](_0x470057, { 'skip': 1 }), _0x12af69[_0x2ad87a(404)](_0x331cfe[_0x2ad87a(452)](_0x470057), _0x4834ff, 0)) : _0x4834ff = _0x331cfe[_0x2ad87a(452)](_0x470057), _0x12af69[_0x2ad87a(405)](_0x470057[_0x2ad87a(510)][_0x2ad87a(387)], _0x331cfe[_0x2ad87a(451)](_0x470057)), _0x3de731(_0x470057[_0x2ad87a(513)], _0x4ff2d2, _0x4834ff, 1);
                },
                'JSXClosingElement'(_0x1a9a16) {
                    const _0x29d9a1 = _0x3003b8, _0x57a383 = _0x331cfe[_0x29d9a1(451)](_0x1a9a16);
                    _0x12af69[_0x29d9a1(405)](_0x1a9a16['name'][_0x29d9a1(387)], _0x57a383, 1);
                },
                'JSXFragment'(_0x55fde5) {
                    const _0x38462d = _0x3003b8, _0x2c9b09 = _0x331cfe['getFirstToken'](_0x55fde5[_0x38462d(514)]), _0x432170 = _0x331cfe[_0x38462d(451)](_0x55fde5['closingFragment']);
                    _0x3de731(_0x55fde5[_0x38462d(515)], _0x2c9b09, _0x432170, 1);
                },
                'JSXOpeningFragment'(_0x5150e9) {
                    const _0x31acdc = _0x3003b8, _0x14dfc7 = _0x331cfe[_0x31acdc(451)](_0x5150e9), _0x3d4012 = _0x331cfe[_0x31acdc(452)](_0x5150e9);
                    _0x12af69['setDesiredOffsets'](_0x5150e9[_0x31acdc(387)], _0x14dfc7, 1), _0x12af69['matchOffsetOf'](_0x14dfc7, _0x3d4012);
                },
                'JSXClosingFragment'(_0x4ff1a5) {
                    const _0x5104f5 = _0x3003b8, _0x2a9dbe = _0x331cfe[_0x5104f5(451)](_0x4ff1a5), _0x2e2b0c = _0x331cfe[_0x5104f5(452)](_0x4ff1a5, { 'skip': 1 }), _0x31eb98 = _0x331cfe['getLastToken'](_0x4ff1a5), _0x4ec2c3 = astUtils['isTokenOnSameLine'](_0x2e2b0c, _0x31eb98) ? _0x2e2b0c : _0x31eb98;
                    _0x12af69['setDesiredOffsets'](_0x4ff1a5[_0x5104f5(387)], _0x2a9dbe, 1), _0x12af69[_0x5104f5(402)](_0x2a9dbe, _0x4ec2c3);
                },
                'JSXExpressionContainer'(_0x407783) {
                    const _0x2320b5 = _0x3003b8, _0x3d0ac7 = _0x331cfe[_0x2320b5(451)](_0x407783), _0x2a6bab = _0x331cfe[_0x2320b5(452)](_0x407783);
                    _0x12af69[_0x2320b5(405)]([
                        _0x3d0ac7[_0x2320b5(387)][1],
                        _0x2a6bab[_0x2320b5(387)][0]
                    ], _0x3d0ac7, 1);
                },
                'JSXSpreadAttribute'(_0x1ecc69) {
                    const _0x5d6aac = _0x3003b8, _0x3e1bdf = _0x331cfe[_0x5d6aac(451)](_0x1ecc69), _0x44809b = _0x331cfe[_0x5d6aac(452)](_0x1ecc69);
                    _0x12af69['setDesiredOffsets']([
                        _0x3e1bdf['range'][1],
                        _0x44809b[_0x5d6aac(387)][0]
                    ], _0x3e1bdf, 1);
                },
                '*'(_0x5ac4c7) {
                    const _0x3e84bd = _0x3003b8, _0x2b8846 = _0x331cfe[_0x3e84bd(451)](_0x5ac4c7);
                    _0x2b8846 && !_0x4fc530[_0x3e84bd(382)](_0x2b8846) && _0x12af69[_0x3e84bd(405)](_0x5ac4c7[_0x3e84bd(387)], _0x2b8846, 0);
                }
            }, _0x358887 = [], _0x129c73 = {};
        for (const [_0x15d542, _0xd546a3] of Object[_0x3003b8(516)](_0x2b9f48)) {
            _0x129c73[_0x15d542] = _0x96cb4f => _0x358887[_0x3003b8(463)]({
                'listener': _0xd546a3,
                'node': _0x96cb4f
            });
        }
        const _0xf468f2 = new Set();
        function _0x400464(_0x58d5cf) {
            const _0xd41064 = _0x3003b8;
            _0xf468f2[_0xd41064(458)](_0x58d5cf), _0x4fc530['add'](_0x331cfe[_0xd41064(451)](_0x58d5cf));
        }
        const _0x2a0058 = _0x4d83c1[_0x3003b8(517)][_0x3003b8(381)]((_0x582e10, _0x1e6705) => Object[_0x3003b8(429)](_0x582e10, { [_0x1e6705]: _0x400464 }), {});
        return Object['assign'](_0x129c73, _0x2a0058, {
            '*:exit'(_0x1f0369) {
                const _0x4ec3e3 = _0x3003b8;
                !KNOWN_NODES[_0x4ec3e3(382)](_0x1f0369[_0x4ec3e3(438)]) && _0x400464(_0x1f0369);
            },
            'Program:exit'() {
                const _0x57d335 = _0x3003b8;
                _0x4d83c1['ignoreComments'] && _0x331cfe[_0x57d335(518)]()[_0x57d335(447)](_0x2018ac => _0x12af69[_0x57d335(448)](_0x2018ac));
                _0x358887[_0x57d335(432)](_0x4dbc4b => !_0xf468f2[_0x57d335(382)](_0x4dbc4b[_0x57d335(519)]))[_0x57d335(447)](_0xe2373d => _0xe2373d['listener'](_0xe2373d['node'])), _0xf468f2[_0x57d335(447)](_0x32b392), _0x582f58(_0x331cfe[_0x57d335(520)][_0x57d335(521)]);
                const _0x3bfe49 = _0x331cfe[_0x57d335(520)][_0x57d335(522)][_0x57d335(381)]((_0x2574ce, _0x321848) => {
                    const _0x4a6bc5 = _0x57d335, _0x104adb = _0x331cfe[_0x4a6bc5(445)](_0x321848, { 'includeComments': !![] });
                    return _0x2574ce[_0x4a6bc5(385)](_0x321848, _0x2574ce[_0x4a6bc5(382)](_0x104adb) ? _0x2574ce[_0x4a6bc5(388)](_0x104adb) : _0x104adb);
                }, new WeakMap());
                _0x331cfe[_0x57d335(523)][_0x57d335(447)]((_0x4c8a4c, _0x111e9f) => {
                    const _0x40cc4b = _0x57d335, _0x429a7a = _0x111e9f + 1;
                    if (!_0x4561db[_0x40cc4b(379)][_0x40cc4b(382)](_0x429a7a))
                        return;
                    const _0x7d60ab = _0x4561db[_0x40cc4b(379)][_0x40cc4b(388)](_0x429a7a);
                    if (_0x7d60ab[_0x40cc4b(386)][_0x40cc4b(383)][_0x40cc4b(384)] !== _0x429a7a)
                        return;
                    if (astUtils[_0x40cc4b(503)](_0x7d60ab)) {
                        const _0x3f56de = _0x3bfe49[_0x40cc4b(388)](_0x7d60ab), _0x1b89ff = _0x3f56de ? _0x331cfe[_0x40cc4b(446)](_0x3f56de) : _0x331cfe['ast'][_0x40cc4b(521)][0], _0x20e3d3 = _0x3f56de && !_0x9ee6e0(_0x3f56de, _0x7d60ab), _0x16b0c9 = _0x1b89ff && !_0x9ee6e0(_0x7d60ab, _0x1b89ff);
                        _0x1b89ff && astUtils[_0x40cc4b(455)](_0x1b89ff) && !astUtils[_0x40cc4b(482)](_0x7d60ab, _0x1b89ff) && _0x12af69['setDesiredOffset'](_0x7d60ab, _0x1b89ff, 0);
                        if (_0x20e3d3 && _0x24c0e8(_0x7d60ab, _0x12af69[_0x40cc4b(406)](_0x3f56de)) || _0x16b0c9 && _0x24c0e8(_0x7d60ab, _0x12af69[_0x40cc4b(406)](_0x1b89ff)))
                            return;
                    }
                    if (_0x24c0e8(_0x7d60ab, _0x12af69[_0x40cc4b(406)](_0x7d60ab)))
                        return;
                    _0x2da3de(_0x7d60ab, _0x12af69[_0x40cc4b(406)](_0x7d60ab));
                });
            }
        });
    }
};