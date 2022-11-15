const createTree = require(_0x31c217(296)), astUtils = require(_0x31c217(297)), KNOWN_NODES = new Set([
        _0x31c217(298),
        'AssignmentPattern',
        'ArrayExpression',
        _0x31c217(299),
        _0x31c217(300),
        'AwaitExpression',
        _0x31c217(301),
        _0x31c217(302),
        _0x31c217(303),
        _0x31c217(304),
        'CatchClause',
        'ChainExpression',
        _0x31c217(305),
        'ClassDeclaration',
        'ClassExpression',
        _0x31c217(306),
        _0x31c217(307),
        _0x31c217(308),
        _0x31c217(309),
        'EmptyStatement',
        'ExperimentalRestProperty',
        _0x31c217(310),
        _0x31c217(311),
        'ForStatement',
        _0x31c217(312),
        _0x31c217(313),
        _0x31c217(314),
        'FunctionExpression',
        _0x31c217(315),
        'IfStatement',
        _0x31c217(316),
        _0x31c217(317),
        _0x31c217(318),
        _0x31c217(319),
        _0x31c217(320),
        'MethodDefinition',
        _0x31c217(321),
        _0x31c217(322),
        _0x31c217(323),
        _0x31c217(324),
        _0x31c217(325),
        _0x31c217(326),
        'ReturnStatement',
        _0x31c217(327),
        _0x31c217(328),
        'Super',
        _0x31c217(329),
        _0x31c217(330),
        _0x31c217(331),
        _0x31c217(332),
        'TemplateLiteral',
        'ThisExpression',
        _0x31c217(333),
        _0x31c217(334),
        _0x31c217(335),
        'UpdateExpression',
        _0x31c217(336),
        _0x31c217(337),
        _0x31c217(338),
        _0x31c217(339),
        _0x31c217(340),
        'JSXFragment',
        _0x31c217(341),
        'JSXClosingFragment',
        _0x31c217(342),
        _0x31c217(343),
        _0x31c217(344),
        _0x31c217(345),
        _0x31c217(346),
        'JSXElement',
        _0x31c217(347),
        _0x31c217(348),
        _0x31c217(349),
        _0x31c217(350),
        'JSXText',
        'ExportDefaultDeclaration',
        _0x31c217(351),
        'ExportAllDeclaration',
        _0x31c217(352),
        _0x31c217(353),
        _0x31c217(354),
        _0x31c217(355),
        _0x31c217(356),
        'ImportExpression'
    ]);
class BinarySearchTree {
    constructor() {
        const _0x328ac9 = _0x31c217, _0x5f6187 = {
                'jTJty': function (_0x1af8f5) {
                    return _0x1af8f5();
                }
            };
        this[_0x328ac9(357)] = _0x5f6187[_0x328ac9(358)](createTree);
    }
    [_0x31c217(359)](_0x2bc0c3, _0x1086a7) {
        const _0x4ca96e = _0x31c217, _0x1237a2 = this[_0x4ca96e(357)][_0x4ca96e(360)](_0x2bc0c3);
        _0x1237a2['valid'] ? this[_0x4ca96e(357)] = _0x1237a2[_0x4ca96e(361)](_0x1086a7) : this[_0x4ca96e(357)] = this[_0x4ca96e(357)][_0x4ca96e(359)](_0x2bc0c3, _0x1086a7);
    }
    [_0x31c217(362)](_0x251f32) {
        const _0x2d17f2 = _0x31c217, _0x22836c = {
                'MgmZr': function (_0xad2ddc, _0x4e08d2) {
                    return _0xad2ddc && _0x4e08d2;
                }
            }, _0x48e560 = this['_rbTree']['le'](_0x251f32);
        return _0x22836c[_0x2d17f2(363)](_0x48e560, {
            'key': _0x48e560[_0x2d17f2(364)],
            'value': _0x48e560[_0x2d17f2(365)]
        });
    }
    ['deleteRange'](_0x53f9be, _0x3a98db) {
        const _0x27a339 = _0x31c217, _0x4a926e = {
                'KCJnK': function (_0x150e50, _0x150dde) {
                    return _0x150e50 === _0x150dde;
                }
            };
        if (_0x4a926e['KCJnK'](_0x53f9be, _0x3a98db))
            return;
        const _0x79d931 = this[_0x27a339(357)]['ge'](_0x53f9be);
        while (_0x79d931['valid'] && _0x79d931['key'] < _0x3a98db) {
            this[_0x27a339(357)] = this[_0x27a339(357)][_0x27a339(366)](_0x79d931[_0x27a339(364)]), _0x79d931[_0x27a339(367)]();
        }
    }
}
class TokenInfo {
    constructor(_0x56abee) {
        const _0x45e921 = _0x31c217, _0x597fce = {
                'JCiEZ': function (_0x508248, _0x5ce1a0) {
                    return _0x508248 - _0x5ce1a0;
                }
            };
        this[_0x45e921(368)] = _0x56abee, this[_0x45e921(369)] = _0x56abee[_0x45e921(370)][_0x45e921(371)]((_0xe3d780, _0x45351b) => {
            const _0x1fc1b2 = _0x45e921;
            return !_0xe3d780['has'](_0x45351b[_0x1fc1b2(372)][_0x1fc1b2(373)][_0x1fc1b2(374)]) && _0xe3d780['set'](_0x45351b[_0x1fc1b2(372)]['start']['line'], _0x45351b), !_0xe3d780[_0x1fc1b2(375)](_0x45351b[_0x1fc1b2(372)][_0x1fc1b2(376)][_0x1fc1b2(374)]) && _0x56abee[_0x1fc1b2(377)][_0x1fc1b2(378)](_0x597fce[_0x1fc1b2(379)](_0x45351b[_0x1fc1b2(380)][2709 + 29 * 182 + -7986], _0x45351b['loc'][_0x1fc1b2(376)][_0x1fc1b2(381)]), _0x45351b[_0x1fc1b2(380)][85 * -1 + -488 + 1 * 574])[_0x1fc1b2(382)]() && _0xe3d780[_0x1fc1b2(383)](_0x45351b[_0x1fc1b2(372)][_0x1fc1b2(376)][_0x1fc1b2(374)], _0x45351b), _0xe3d780;
        }, new Map());
    }
    [_0x31c217(384)](_0x4c73c9) {
        const _0x97a058 = _0x31c217;
        return this['firstTokensByLineNumber']['get'](_0x4c73c9[_0x97a058(372)][_0x97a058(373)][_0x97a058(374)]);
    }
    [_0x31c217(385)](_0x3d43e0) {
        const _0x559c86 = _0x31c217, _0x56a76d = {
                'OQwTj': function (_0xb9bc55, _0x11d613) {
                    return _0xb9bc55 === _0x11d613;
                }
            };
        return _0x56a76d['OQwTj'](this[_0x559c86(384)](_0x3d43e0), _0x3d43e0);
    }
    [_0x31c217(386)](_0x3f7b64) {
        const _0x1d008e = _0x31c217, _0x39c1b2 = {
                'ozIsD': function (_0x11590c, _0x3b176f) {
                    return _0x11590c - _0x3b176f;
                }
            };
        return this[_0x1d008e(368)][_0x1d008e(377)][_0x1d008e(378)](_0x39c1b2[_0x1d008e(387)](_0x3f7b64[_0x1d008e(380)][-9939 + -9265 + 19204], _0x3f7b64['loc'][_0x1d008e(373)][_0x1d008e(381)]), _0x3f7b64[_0x1d008e(380)][71 * -41 + -3043 + 458 * 13]);
    }
}
class OffsetStorage {
    constructor(_0x72a947, _0x5828d6, _0x4672ff) {
        const _0x167023 = _0x31c217;
        this[_0x167023(388)] = _0x72a947, this['_indentSize'] = _0x5828d6, this[_0x167023(389)] = _0x4672ff, this['_tree'] = new BinarySearchTree(), this[_0x167023(390)][_0x167023(359)](2092 * -3 + 6351 + -15 * 5, {
            'offset': 0,
            'from': null,
            'force': ![]
        }), this[_0x167023(391)] = new WeakMap(), this[_0x167023(392)] = new WeakMap(), this[_0x167023(393)] = new WeakSet();
    }
    [_0x31c217(394)](_0x366ed9) {
        const _0xc20ea = _0x31c217;
        return this[_0xc20ea(390)]['findLe'](_0x366ed9[_0xc20ea(380)][2290 + -5 * -1381 + -5 * 1839])['value'];
    }
    [_0x31c217(395)](_0x7b6753, _0x1cb82c) {
        const _0x17fcc1 = _0x31c217;
        this[_0x17fcc1(391)][_0x17fcc1(383)](_0x1cb82c, _0x7b6753);
    }
    [_0x31c217(396)](_0x36ea10, _0x563345, _0x5b5945) {
        const _0x553766 = _0x31c217;
        return this[_0x553766(397)](_0x36ea10[_0x553766(380)], _0x563345, _0x5b5945);
    }
    [_0x31c217(397)](_0x30b4ae, _0x3b5835, _0x4efc5e, _0x88c6fe) {
        const _0x3a950c = _0x31c217, _0x24f382 = {
                'sNzai': function (_0x5e5879, _0x7d5d87) {
                    return _0x5e5879 >= _0x7d5d87;
                },
                'PQhgo': function (_0x478d71, _0x5da2bc) {
                    return _0x478d71 <= _0x5da2bc;
                },
                'VMntB': function (_0x817c83, _0x8c6c0d) {
                    return _0x817c83 + _0x8c6c0d;
                }
            }, _0x54617b = {
                'offset': _0x4efc5e,
                'from': _0x3b5835,
                'force': _0x88c6fe
            }, _0x3a9c9f = this['_tree'][_0x3a950c(362)](_0x30b4ae[-9991 * -1 + 1499 * -1 + 7 * -1213])[_0x3a950c(365)], _0x5c74c0 = _0x3b5835 && _0x24f382[_0x3a950c(398)](_0x3b5835[_0x3a950c(380)][-5431 * -1 + -483 * -5 + -7846], _0x30b4ae[1 * -8158 + -6436 + 14594]) && _0x24f382[_0x3a950c(399)](_0x3b5835[_0x3a950c(380)][-9179 + 1472 + 7708], _0x30b4ae[-6346 + 9895 + -3548]), _0x12909d = _0x5c74c0 && this[_0x3a950c(394)](_0x3b5835);
        this[_0x3a950c(390)][_0x3a950c(400)](_0x24f382['VMntB'](_0x30b4ae[-1721 * -3 + 5452 * -1 + 289], -938 + -7741 + 217 * 40), _0x30b4ae[7098 + -7 * 85 + -6502 * 1]), this[_0x3a950c(390)][_0x3a950c(359)](_0x30b4ae[-9510 + 8553 * -1 + 18063], _0x54617b), _0x5c74c0 && (this[_0x3a950c(390)][_0x3a950c(359)](_0x3b5835[_0x3a950c(380)][191 * 11 + 7076 + -57 * 161], _0x12909d), this['_tree'][_0x3a950c(359)](_0x3b5835[_0x3a950c(380)][4105 + 133 * -73 + 1 * 5605], _0x54617b)), this[_0x3a950c(390)][_0x3a950c(359)](_0x30b4ae[-8996 + -1 * -669 + 6 * 1388], _0x3a9c9f);
    }
    [_0x31c217(401)](_0x7b55f9) {
        const _0x429a03 = _0x31c217, _0x116c52 = {
                'IfNPh': function (_0x5078c5, _0x2d8065) {
                    return _0x5078c5 * _0x2d8065;
                },
                'fwVMw': function (_0x5116fc, _0x559bce) {
                    return _0x5116fc + _0x559bce;
                }
            };
        if (!this[_0x429a03(392)][_0x429a03(375)](_0x7b55f9)) {
            if (this[_0x429a03(393)][_0x429a03(375)](_0x7b55f9))
                this['_desiredIndentCache'][_0x429a03(383)](_0x7b55f9, this[_0x429a03(388)][_0x429a03(386)](_0x7b55f9));
            else {
                if (this[_0x429a03(391)][_0x429a03(375)](_0x7b55f9)) {
                    const _0x481fd6 = this['_lockedFirstTokens'][_0x429a03(402)](_0x7b55f9);
                    this[_0x429a03(392)][_0x429a03(383)](_0x7b55f9, this[_0x429a03(401)](this[_0x429a03(388)]['getFirstTokenOfLine'](_0x481fd6)) + this['_indentType'][_0x429a03(403)](_0x481fd6[_0x429a03(372)][_0x429a03(373)][_0x429a03(381)] - this[_0x429a03(388)][_0x429a03(384)](_0x481fd6)[_0x429a03(372)][_0x429a03(373)][_0x429a03(381)]));
                } else {
                    const _0x2325cc = this[_0x429a03(394)](_0x7b55f9), _0x4cabf3 = _0x2325cc[_0x429a03(404)] && _0x2325cc[_0x429a03(404)][_0x429a03(372)][_0x429a03(373)][_0x429a03(374)] === _0x7b55f9[_0x429a03(372)][_0x429a03(373)][_0x429a03(374)] && !/^\s*?\n/u[_0x429a03(405)](_0x7b55f9['value']) && !_0x2325cc[_0x429a03(406)] ? 110 * 17 + -6026 + 4 * 1039 : _0x116c52[_0x429a03(407)](_0x2325cc[_0x429a03(408)], this[_0x429a03(409)]);
                    this[_0x429a03(392)][_0x429a03(383)](_0x7b55f9, _0x116c52[_0x429a03(410)](_0x2325cc['from'] ? this['getDesiredIndent'](_0x2325cc[_0x429a03(404)]) : '', this[_0x429a03(389)]['repeat'](_0x4cabf3)));
                }
            }
        }
        return this['_desiredIndentCache']['get'](_0x7b55f9);
    }
    [_0x31c217(411)](_0x1b20dd) {
        const _0x25b6b4 = _0x31c217;
        this['_tokenInfo']['isFirstTokenOfLine'](_0x1b20dd) && this[_0x25b6b4(393)][_0x25b6b4(412)](_0x1b20dd);
    }
    [_0x31c217(413)](_0x2d393a) {
        return this['_getOffsetDescriptor'](_0x2d393a)['from'];
    }
}
const ELEMENT_LIST_SCHEMA = {
    'oneOf': [
        {
            'type': _0x31c217(414),
            'minimum': 0
        },
        {
            'enum': [
                _0x31c217(415),
                'off'
            ]
        }
    ]
};
function _0x2acd(_0x5a8104, _0x46351c) {
    return _0x2acd = function (_0x37eba6, _0xf8ebc4) {
        _0x37eba6 = _0x37eba6 - (-8396 + 9522 + -839);
        let _0x2a1e61 = _0x11a1[_0x37eba6];
        return _0x2a1e61;
    }, _0x2acd(_0x5a8104, _0x46351c);
}
module[_0x31c217(416)] = {
    'meta': {
        'type': 'layout',
        'docs': {
            'description': _0x31c217(417),
            'category': _0x31c217(418),
            'recommended': ![],
            'url': _0x31c217(419)
        },
        'fixable': _0x31c217(420),
        'schema': [
            {
                'oneOf': [
                    { 'enum': [_0x31c217(421)] },
                    {
                        'type': _0x31c217(414),
                        'minimum': 0
                    }
                ]
            },
            {
                'type': 'object',
                'properties': {
                    'SwitchCase': {
                        'type': 'integer',
                        'minimum': 0,
                        'default': 0
                    },
                    'VariableDeclarator': {
                        'oneOf': [
                            ELEMENT_LIST_SCHEMA,
                            {
                                'type': _0x31c217(422),
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
                                'type': 'integer',
                                'minimum': 0
                            },
                            { 'enum': [_0x31c217(423)] }
                        ]
                    },
                    'MemberExpression': {
                        'oneOf': [
                            {
                                'type': _0x31c217(414),
                                'minimum': 0
                            },
                            { 'enum': [_0x31c217(423)] }
                        ]
                    },
                    'FunctionDeclaration': {
                        'type': _0x31c217(422),
                        'properties': {
                            'parameters': ELEMENT_LIST_SCHEMA,
                            'body': {
                                'type': _0x31c217(414),
                                'minimum': 0
                            }
                        },
                        'additionalProperties': ![]
                    },
                    'FunctionExpression': {
                        'type': 'object',
                        'properties': {
                            'parameters': ELEMENT_LIST_SCHEMA,
                            'body': {
                                'type': _0x31c217(414),
                                'minimum': 0
                            }
                        },
                        'additionalProperties': ![]
                    },
                    'CallExpression': {
                        'type': _0x31c217(422),
                        'properties': { 'arguments': ELEMENT_LIST_SCHEMA },
                        'additionalProperties': ![]
                    },
                    'ArrayExpression': ELEMENT_LIST_SCHEMA,
                    'ObjectExpression': ELEMENT_LIST_SCHEMA,
                    'ImportDeclaration': ELEMENT_LIST_SCHEMA,
                    'flatTernaryExpressions': {
                        'type': _0x31c217(424),
                        'default': ![]
                    },
                    'offsetTernaryExpressions': {
                        'type': 'boolean',
                        'default': ![]
                    },
                    'ignoredNodes': {
                        'type': _0x31c217(425),
                        'items': {
                            'type': 'string',
                            'not': { 'pattern': _0x31c217(426) }
                        }
                    },
                    'ignoreComments': {
                        'type': _0x31c217(424),
                        'default': ![]
                    }
                },
                'additionalProperties': ![]
            }
        ],
        'messages': { 'wrongIndentation': _0x31c217(427) }
    },
    'create'(_0x4166f8) {
        const _0x5e8ce8 = _0x31c217, _0x54cb95 = {
                'UEWFz': function (_0x5267e4, _0x494527) {
                    return _0x5267e4 === _0x494527;
                },
                'jVckG': function (_0x331af5, _0x405aa3) {
                    return _0x331af5 === _0x405aa3;
                },
                'wvncr': 'space',
                'JpMTh': function (_0x567d70, _0x1b4568) {
                    return _0x567d70 > _0x1b4568;
                },
                'VXAVC': function (_0x3c7f99, _0x54d71d, _0x37502b, _0xbffe0d) {
                    return _0x3c7f99(_0x54d71d, _0x37502b, _0xbffe0d);
                },
                'jFlGJ': function (_0x449678, _0x52d158) {
                    return _0x449678 === _0x52d158;
                },
                'lXIbM': function (_0x21da60, _0x3a73f3) {
                    return _0x21da60 !== _0x3a73f3;
                },
                'MXxqM': _0x5e8ce8(304),
                'jkPbi': 'UnaryExpression',
                'szUSn': _0x5e8ce8(298),
                'YydPE': _0x5e8ce8(318),
                'Qvtnu': function (_0x206216, _0x271840) {
                    return _0x206216 === _0x271840;
                },
                'wswFR': _0x5e8ce8(327),
                'Pxjwv': _0x5e8ce8(337),
                'erIpS': function (_0x2a470e, _0x48bbda) {
                    return _0x2a470e === _0x48bbda;
                },
                'noDpp': 'VariableDeclaration',
                'NPzFu': _0x5e8ce8(324),
                'mEhyw': function (_0x4dc439, _0x5bc025) {
                    return _0x4dc439 === _0x5bc025;
                },
                'qVlKm': _0x5e8ce8(415),
                'ZunpK': function (_0x4b8d62, _0x1717d6) {
                    return _0x4b8d62 - _0x1717d6;
                },
                'BewHq': function (_0xbde3ba, _0x3bce73) {
                    return _0xbde3ba(_0x3bce73);
                },
                'fVmjA': function (_0x2f7924, _0x49edbd) {
                    return _0x2f7924 === _0x49edbd;
                },
                'assAk': _0x5e8ce8(301),
                'CSOVA': _0x5e8ce8(428),
                'DUvQx': function (_0x4f65f4, _0x243be8) {
                    return _0x4f65f4 === _0x243be8;
                },
                'gqnGo': 'TaggedTemplateExpression',
                'sJqAj': function (_0x58a52b, _0xe8445d, _0x567f8c, _0x511399, _0x261ee8) {
                    return _0x58a52b(_0xe8445d, _0x567f8c, _0x511399, _0x261ee8);
                },
                'WRCfa': 'Statement',
                'UjzZy': function (_0x8fd1c4, _0x4a0f54) {
                    return _0x8fd1c4 + _0x4a0f54;
                },
                'iILju': function (_0x16fd0e, _0x14be05) {
                    return _0x16fd0e < _0x14be05;
                },
                'VobhI': function (_0x19af2d, _0x1fd336) {
                    return _0x19af2d - _0x1fd336;
                },
                'YxWoe': function (_0x575569, _0x548340, _0xcb3894, _0x122999, _0x3e9778) {
                    return _0x575569(_0x548340, _0xcb3894, _0x122999, _0x3e9778);
                },
                'rEZXF': function (_0x37545e, _0x18da6a) {
                    return _0x37545e(_0x18da6a);
                },
                'oeLVF': _0x5e8ce8(429),
                'iBAWo': function (_0xaad7aa, _0x195d81) {
                    return _0xaad7aa === _0x195d81;
                },
                'wzzkP': 'ArrowFunctionExpression',
                'YZjmu': function (_0x3a6d59, _0x26f26e) {
                    return _0x3a6d59 === _0x26f26e;
                },
                'IsmQA': function (_0x11331b, _0x25761b, _0x1ccc76, _0x3ef4c8, _0x46852f) {
                    return _0x11331b(_0x25761b, _0x1ccc76, _0x3ef4c8, _0x46852f);
                },
                'pliNU': function (_0x3d8113, _0x1d07f1, _0x5982e6) {
                    return _0x3d8113(_0x1d07f1, _0x5982e6);
                },
                'PIcRG': function (_0x51f619, _0x3f1026) {
                    return _0x51f619 === _0x3f1026;
                },
                'roLKQ': _0x5e8ce8(430),
                'eljrk': function (_0x25ba9f, _0x4d05ed) {
                    return _0x25ba9f === _0x4d05ed;
                },
                'rZbVi': function (_0x3989d3, _0x50c9a9) {
                    return _0x3989d3 === _0x50c9a9;
                },
                'jetqe': function (_0xf6acf3, _0x11dcc7) {
                    return _0xf6acf3(_0x11dcc7);
                },
                'Ysnzs': function (_0x2512c3, _0x37e387) {
                    return _0x2512c3(_0x37e387);
                },
                'GHbCX': 'IfStatement',
                'UppFr': function (_0x4f2622, _0x550585, _0x59cae6, _0x3b3fe9, _0x247229) {
                    return _0x4f2622(_0x550585, _0x59cae6, _0x3b3fe9, _0x247229);
                },
                'kugSo': function (_0x122bb8, _0x1b6f3a, _0x19516f, _0x44e4f5, _0x59785f) {
                    return _0x122bb8(_0x1b6f3a, _0x19516f, _0x44e4f5, _0x59785f);
                },
                'bWkuZ': function (_0x561f7f, _0x33b4b9) {
                    return _0x561f7f === _0x33b4b9;
                },
                'IpZuO': _0x5e8ce8(320),
                'dbLoJ': function (_0x1bcb80, _0x4df8f8) {
                    return _0x1bcb80 === _0x4df8f8;
                },
                'YvdPE': _0x5e8ce8(431),
                'JcxIF': function (_0x618229, _0x2ecd60) {
                    return _0x618229 === _0x2ecd60;
                },
                'teLuz': _0x5e8ce8(432),
                'RPuND': function (_0x3e270c, _0x25329c) {
                    return _0x3e270c + _0x25329c;
                },
                'ELEto': function (_0x45d651, _0x3b124c) {
                    return _0x45d651 - _0x3b124c;
                },
                'bJDlU': function (_0x1718bc, _0x14371c, _0x4db987, _0x2c8097, _0x1fdce9) {
                    return _0x1718bc(_0x14371c, _0x4db987, _0x2c8097, _0x1fdce9);
                },
                'PPUuF': function (_0x5ef018, _0x2fbeb8, _0xdbfd6d, _0x4b5c6e, _0x4f8aee) {
                    return _0x5ef018(_0x2fbeb8, _0xdbfd6d, _0x4b5c6e, _0x4f8aee);
                },
                'dIvJq': function (_0x4fb5d6, _0xe65938) {
                    return _0x4fb5d6(_0xe65938);
                },
                'XMXuP': function (_0xc35f5a, _0x3b39e2) {
                    return _0xc35f5a !== _0x3b39e2;
                },
                'TMBVj': function (_0x22e3cd, _0x2bd8fd, _0x228da1) {
                    return _0x22e3cd(_0x2bd8fd, _0x228da1);
                },
                'JDJuX': function (_0x1781b1, _0x2a3195) {
                    return _0x1781b1(_0x2a3195);
                },
                'ZXIFk': _0x5e8ce8(421),
                'FMeAL': function (_0x1ab531, _0x3442bb) {
                    return _0x1ab531 === _0x3442bb;
                },
                'PtGxJ': function (_0x3c5019, _0x4a95ad) {
                    return _0x3c5019 === _0x4a95ad;
                }
            }, _0x36bb19 = -302 * -2 + 1 * -2352 + 1749, _0x5e64c2 = -7759 + -2 * 4738 + -62 * -278, _0x510c8d = -3751 + -31 * -313 + -541 * 11;
        let _0x4118af = _0x54cb95[_0x5e8ce8(433)], _0x2669d2 = 141 * 45 + 87 * -49 + -2078;
        const _0x3bf908 = {
            'SwitchCase': 0,
            'VariableDeclarator': {
                'var': _0x36bb19,
                'let': _0x36bb19,
                'const': _0x36bb19
            },
            'outerIIFEBody': 1,
            'FunctionDeclaration': {
                'parameters': _0x5e64c2,
                'body': _0x510c8d
            },
            'FunctionExpression': {
                'parameters': _0x5e64c2,
                'body': _0x510c8d
            },
            'CallExpression': { 'arguments': _0x5e64c2 },
            'MemberExpression': 1,
            'ArrayExpression': 1,
            'ObjectExpression': 1,
            'ImportDeclaration': 1,
            'flatTernaryExpressions': ![],
            'ignoredNodes': [],
            'ignoreComments': ![]
        };
        _0x4166f8[_0x5e8ce8(434)]['length'] && (_0x4166f8[_0x5e8ce8(434)][-989 + 6782 + -5793] === _0x54cb95[_0x5e8ce8(435)] ? (_0x2669d2 = 2 * -1733 + -7719 + 2 * 5593, _0x4118af = _0x54cb95[_0x5e8ce8(435)]) : (_0x2669d2 = _0x4166f8[_0x5e8ce8(434)][-7119 + 13 * 347 + -652 * -4], _0x4118af = _0x54cb95[_0x5e8ce8(433)]), _0x4166f8[_0x5e8ce8(434)][3756 + 49 + -3804] && (Object[_0x5e8ce8(436)](_0x3bf908, _0x4166f8['options'][-17 * -569 + -19 * 313 + -5 * 745]), (_0x54cb95['FMeAL'](typeof _0x3bf908['VariableDeclarator'], _0x5e8ce8(431)) || _0x54cb95[_0x5e8ce8(437)](_0x3bf908[_0x5e8ce8(337)], _0x54cb95['qVlKm'])) && (_0x3bf908[_0x5e8ce8(337)] = {
            'var': _0x3bf908['VariableDeclarator'],
            'let': _0x3bf908[_0x5e8ce8(337)],
            'const': _0x3bf908[_0x5e8ce8(337)]
        })));
        const _0x4e64c6 = _0x4166f8[_0x5e8ce8(438)](), _0x2e2598 = new TokenInfo(_0x4e64c6), _0x589a72 = new OffsetStorage(_0x2e2598, _0x2669d2, _0x54cb95[_0x5e8ce8(437)](_0x4118af, _0x54cb95['wvncr']) ? ' ' : '\t'), _0x5b3a90 = new WeakSet();
        function _0x41ee2c(_0x302237, _0x42f865, _0x53f4b8) {
            const _0x541cba = _0x5e8ce8, _0x10240d = _0x302237 + ' ' + _0x4118af + (_0x302237 === -2290 + 1762 * 3 + -2995 ? '' : 's'), _0x5beb9e = _0x541cba(439) + (_0x54cb95[_0x541cba(440)](_0x42f865, 10 * 291 + -2851 + -58) ? '' : 's'), _0x113fe8 = _0x541cba(421) + (_0x54cb95[_0x541cba(440)](_0x53f4b8, 3 * 130 + 6656 + -7045) ? '' : 's');
            let _0x1f48e3;
            if (_0x42f865 > 1 * 8306 + 2283 + -10589)
                _0x1f48e3 = _0x54cb95[_0x541cba(441)](_0x4118af, _0x54cb95['wvncr']) ? _0x42f865 : _0x42f865 + ' ' + _0x5beb9e;
            else
                _0x54cb95[_0x541cba(442)](_0x53f4b8, 1197 * 1 + 5383 + -6580) ? _0x1f48e3 = _0x54cb95[_0x541cba(441)](_0x4118af, _0x541cba(421)) ? _0x53f4b8 : _0x53f4b8 + ' ' + _0x113fe8 : _0x1f48e3 = '0';
            return {
                'expected': _0x10240d,
                'actual': _0x1f48e3
            };
        }
        function _0x3daa4c(_0xcf85f7, _0x3e112e) {
            const _0x15fe1c = _0x5e8ce8, _0x488d36 = Array[_0x15fe1c(404)](_0x2e2598[_0x15fe1c(386)](_0xcf85f7)), _0x5a9f25 = _0x488d36[_0x15fe1c(443)](_0x1dabd5 => _0x1dabd5 === ' ')['length'], _0x2d7352 = _0x488d36[_0x15fe1c(443)](_0x1dde30 => _0x1dde30 === '\t')[_0x15fe1c(444)];
            _0x4166f8['report']({
                'node': _0xcf85f7,
                'messageId': 'wrongIndentation',
                'data': _0x54cb95[_0x15fe1c(445)](_0x41ee2c, _0x3e112e['length'], _0x5a9f25, _0x2d7352),
                'loc': {
                    'start': {
                        'line': _0xcf85f7['loc'][_0x15fe1c(373)][_0x15fe1c(374)],
                        'column': 0
                    },
                    'end': {
                        'line': _0xcf85f7['loc'][_0x15fe1c(373)]['line'],
                        'column': _0xcf85f7[_0x15fe1c(372)][_0x15fe1c(373)][_0x15fe1c(381)]
                    }
                },
                'fix'(_0x2de33f) {
                    const _0x128fa2 = _0x15fe1c, _0x10c6cf = [
                            _0xcf85f7['range'][2254 * 1 + 233 + 829 * -3] - _0xcf85f7[_0x128fa2(372)][_0x128fa2(373)]['column'],
                            _0xcf85f7[_0x128fa2(380)][-1 * -5983 + -1745 + -2 * 2119]
                        ], _0x5a7425 = _0x3e112e;
                    return _0x2de33f[_0x128fa2(446)](_0x10c6cf, _0x5a7425);
                }
            });
        }
        function _0x58309b(_0x44b8de, _0x5581f2) {
            const _0x9cf75d = _0x5e8ce8, _0x8e8da1 = _0x2e2598[_0x9cf75d(386)](_0x44b8de);
            return _0x54cb95[_0x9cf75d(447)](_0x8e8da1, _0x5581f2) || _0x8e8da1[_0x9cf75d(448)](' ') && _0x8e8da1[_0x9cf75d(448)]('\t');
        }
        function _0x27f2e2(_0x26a01c) {
            const _0x4e7e88 = _0x5e8ce8;
            if (!_0x26a01c[_0x4e7e88(449)] || _0x54cb95['lXIbM'](_0x26a01c['parent']['type'], _0x54cb95[_0x4e7e88(450)]) || _0x54cb95[_0x4e7e88(451)](_0x26a01c[_0x4e7e88(449)][_0x4e7e88(452)], _0x26a01c))
                return ![];
            let _0x4a27e3 = _0x26a01c[_0x4e7e88(449)] && _0x26a01c['parent']['parent'];
            while (_0x54cb95['jFlGJ'](_0x4a27e3[_0x4e7e88(453)], _0x54cb95['jkPbi']) && _0x54cb95[_0x4e7e88(442)]([
                    '!',
                    '~',
                    '+',
                    '-'
                ]['indexOf'](_0x4a27e3[_0x4e7e88(454)]), -(-212 * 4 + -9517 + 10366)) || _0x54cb95[_0x4e7e88(447)](_0x4a27e3[_0x4e7e88(453)], _0x54cb95[_0x4e7e88(455)]) || _0x54cb95[_0x4e7e88(447)](_0x4a27e3['type'], _0x54cb95['YydPE']) || _0x54cb95[_0x4e7e88(456)](_0x4a27e3[_0x4e7e88(453)], _0x54cb95['wswFR']) || _0x4a27e3['type'] === _0x54cb95['Pxjwv']) {
                _0x4a27e3 = _0x4a27e3[_0x4e7e88(449)];
            }
            return (_0x54cb95['erIpS'](_0x4a27e3[_0x4e7e88(453)], _0x4e7e88(311)) || _0x4a27e3[_0x4e7e88(453)] === _0x54cb95[_0x4e7e88(457)]) && _0x4a27e3['parent'][_0x4e7e88(453)] === _0x54cb95[_0x4e7e88(458)];
        }
        function _0x1a3b7e(_0x24d6f8) {
            const _0x250028 = _0x5e8ce8, _0x3bdac4 = _0x24d6f8[_0x250028(459)](/\s*$/u)[622 * 7 + 154 + -4508], _0x56d7a2 = _0x3bdac4[_0x250028(459)](astUtils[_0x250028(460)]());
            return _0x54cb95['erIpS'](_0x56d7a2, null) ? -7254 + 3262 * 2 + 730 * 1 : _0x56d7a2[_0x250028(444)];
        }
        function _0x537342(_0x399297, _0x362d72, _0xac2f81, _0x17ca32) {
            const _0x43a170 = _0x5e8ce8, _0x5f4a6d = {
                    'bAFyk': function (_0x2271be, _0x1ff9e4) {
                        return _0x2271be === _0x1ff9e4;
                    },
                    'spgzE': function (_0x1f3a14, _0x3dcc29) {
                        return _0x1f3a14 === _0x3dcc29;
                    },
                    'RAivR': function (_0x4462ff, _0x4c0526) {
                        const _0x5123d4 = _0x2acd;
                        return _0x54cb95[_0x5123d4(461)](_0x4462ff, _0x4c0526);
                    },
                    'HIlsT': _0x54cb95[_0x43a170(462)],
                    'cQDqv': function (_0x3f363f, _0x309065) {
                        return _0x3f363f(_0x309065);
                    },
                    'udQFJ': function (_0x3b1e27, _0x2af6ea) {
                        return _0x54cb95['ZunpK'](_0x3b1e27, _0x2af6ea);
                    },
                    'JaDcv': function (_0x21b35c, _0x58833e) {
                        return _0x21b35c > _0x58833e;
                    },
                    'wlkUp': function (_0x5781d1, _0x596180) {
                        return _0x54cb95['ZunpK'](_0x5781d1, _0x596180);
                    },
                    'MhLJE': function (_0x3da6d0, _0x2af3f7) {
                        return _0x54cb95['BewHq'](_0x3da6d0, _0x2af3f7);
                    }
                };
            function _0x144bf5(_0x561bfc) {
                const _0x4d714e = _0x43a170;
                let _0x3cf2cf = _0x4e64c6[_0x4d714e(463)](_0x561bfc);
                while (astUtils['isOpeningParenToken'](_0x3cf2cf) && _0x54cb95[_0x4d714e(451)](_0x3cf2cf, _0x362d72)) {
                    _0x3cf2cf = _0x4e64c6[_0x4d714e(463)](_0x3cf2cf);
                }
                return _0x4e64c6[_0x4d714e(464)](_0x3cf2cf);
            }
            _0x589a72['setDesiredOffsets']([
                _0x362d72[_0x43a170(380)][9139 + 74 * -129 + 2 * 204],
                _0xac2f81[_0x43a170(380)][83 * -89 + 1 * -8203 + 15590]
            ], _0x362d72, _0x54cb95[_0x43a170(465)](typeof _0x17ca32, _0x43a170(431)) ? _0x17ca32 : 1966 + -4674 + 2709), _0x589a72[_0x43a170(396)](_0xac2f81, _0x362d72, -3070 + -8859 + 11929);
            if (_0x17ca32 === _0x54cb95['qVlKm'] && _0x399297[_0x43a170(444)] && !_0x399297[5537 + 9455 + -14992])
                return;
            _0x399297[_0x43a170(466)]((_0x2e523c, _0xf4cc74) => {
                const _0x128a7d = _0x43a170;
                if (!_0x2e523c)
                    return;
                _0x5f4a6d[_0x128a7d(467)](_0x17ca32, _0x128a7d(423)) && _0x589a72[_0x128a7d(411)](_0x144bf5(_0x2e523c));
                if (_0x5f4a6d[_0x128a7d(468)](_0xf4cc74, -1649 * -2 + 1 * 4629 + -7927))
                    return;
                if (_0x5f4a6d[_0x128a7d(469)](_0x17ca32, _0x5f4a6d[_0x128a7d(470)]) && _0x2e2598[_0x128a7d(385)](_0x5f4a6d[_0x128a7d(471)](_0x144bf5, _0x2e523c)))
                    _0x589a72[_0x128a7d(395)](_0x144bf5(_0x399297[3137 * -2 + -2472 + 8746]), _0x144bf5(_0x2e523c));
                else {
                    const _0x247d4e = _0x399297[_0x5f4a6d[_0x128a7d(472)](_0xf4cc74, -5766 + 2672 + -5 * -619)], _0x1ea1e8 = _0x247d4e && _0x5f4a6d[_0x128a7d(471)](_0x144bf5, _0x247d4e), _0x3c94b0 = _0x247d4e && _0x4e64c6['getLastToken'](_0x247d4e);
                    _0x247d4e && _0x5f4a6d['JaDcv'](_0x5f4a6d[_0x128a7d(473)](_0x3c94b0[_0x128a7d(372)][_0x128a7d(376)]['line'], _0x5f4a6d['MhLJE'](_0x1a3b7e, _0x3c94b0[_0x128a7d(365)])), _0x362d72['loc']['end'][_0x128a7d(374)]) && _0x589a72[_0x128a7d(397)]([
                        _0x247d4e[_0x128a7d(380)][-1 * -6043 + 1 * 4984 + -11026],
                        _0x2e523c[_0x128a7d(380)][1346 * 1 + 225 + 157 * -10]
                    ], _0x1ea1e8, 82 + 8089 * -1 + 8007);
                }
            });
        }
        function _0x217a5e(_0x5a4ac1) {
            const _0x322df6 = _0x5e8ce8;
            if (_0x54cb95['lXIbM'](_0x5a4ac1[_0x322df6(453)], _0x54cb95[_0x322df6(474)])) {
                const _0x27738d = _0x4e64c6[_0x322df6(463)](_0x5a4ac1, astUtils[_0x322df6(475)]);
                let _0x4ddf59 = _0x4e64c6[_0x322df6(476)](_0x5a4ac1), _0x11b28a = _0x4e64c6[_0x322df6(477)](_0x5a4ac1);
                while (astUtils[_0x322df6(478)](_0x4e64c6['getTokenBefore'](_0x4ddf59)) && astUtils['isClosingParenToken'](_0x4e64c6[_0x322df6(464)](_0x11b28a))) {
                    _0x4ddf59 = _0x4e64c6[_0x322df6(463)](_0x4ddf59), _0x11b28a = _0x4e64c6[_0x322df6(464)](_0x11b28a);
                }
                _0x589a72[_0x322df6(397)]([
                    _0x4ddf59[_0x322df6(380)][247 * -37 + -3464 + 12603],
                    _0x11b28a[_0x322df6(380)][-24 * -405 + 307 * -3 + 4399 * -2]
                ], _0x27738d, -2876 + 1 * -9045 + -1 * -11922);
                const _0x29e790 = _0x4e64c6[_0x322df6(477)](_0x5a4ac1);
                _0x5a4ac1[_0x322df6(453)] !== _0x54cb95[_0x322df6(479)] && astUtils[_0x322df6(480)](_0x29e790) && _0x589a72['setDesiredOffset'](_0x29e790, _0x27738d, 4284 + -2125 * 4 + 8 * 527);
            }
        }
        function _0x3e8aac(_0x3abe86) {
            const _0xdb8a6d = _0x5e8ce8;
            let _0x4f41a2;
            _0x3abe86[_0xdb8a6d(481)][_0xdb8a6d(444)] ? _0x4f41a2 = _0x4e64c6[_0xdb8a6d(482)](_0x3abe86[_0xdb8a6d(452)], _0x3abe86[_0xdb8a6d(481)][5807 + 2731 * 1 + 2 * -4269], astUtils[_0xdb8a6d(478)]) : _0x4f41a2 = _0x4e64c6['getLastToken'](_0x3abe86, 6280 + -137 * 53 + 982);
            const _0x4db0d8 = _0x4e64c6[_0xdb8a6d(477)](_0x3abe86);
            _0x5b3a90[_0xdb8a6d(412)](_0x4f41a2), _0x5b3a90[_0xdb8a6d(412)](_0x4db0d8);
            if (_0x3abe86[_0xdb8a6d(483)]) {
                const _0xde117c = _0x4e64c6[_0xdb8a6d(464)](_0x3abe86[_0xdb8a6d(452)], astUtils[_0xdb8a6d(484)]), _0x5825d1 = _0x4e64c6[_0xdb8a6d(485)](_0x3abe86[_0xdb8a6d(452)], _0xde117c, { 'filter': astUtils[_0xdb8a6d(486)] })[_0xdb8a6d(444)], _0xbac4f9 = _0x5825d1 ? _0x4e64c6[_0xdb8a6d(463)](_0x3abe86[_0xdb8a6d(452)], { 'skip': _0x54cb95['ZunpK'](_0x5825d1, -2722 * 2 + 8 * 650 + 35 * 7) }) : _0x4e64c6[_0xdb8a6d(476)](_0x3abe86[_0xdb8a6d(452)]), _0x136e81 = _0x4e64c6[_0xdb8a6d(463)](_0xde117c), _0x4ca46c = _0x54cb95[_0xdb8a6d(465)](_0x136e81[_0xdb8a6d(372)][_0xdb8a6d(376)]['line'], _0x4f41a2[_0xdb8a6d(372)][_0xdb8a6d(373)][_0xdb8a6d(374)]) ? _0x136e81 : _0xbac4f9;
                _0x589a72[_0xdb8a6d(396)](_0xde117c, _0x4ca46c, -610 + 1 * 489 + -1 * -122);
            }
            const _0x5548e4 = _0x54cb95[_0xdb8a6d(487)](_0x3abe86['callee'][_0xdb8a6d(453)], _0x54cb95[_0xdb8a6d(488)]) ? _0x4e64c6[_0xdb8a6d(476)](_0x3abe86[_0xdb8a6d(452)][_0xdb8a6d(489)]) : _0x4f41a2, _0x303dfc = _0x4e64c6[_0xdb8a6d(463)](_0x5548e4);
            _0x589a72[_0xdb8a6d(396)](_0x4f41a2, _0x303dfc, -8 * -683 + 607 * -7 + -1215), _0x54cb95[_0xdb8a6d(490)](_0x537342, _0x3abe86['arguments'], _0x4f41a2, _0x4db0d8, _0x3bf908[_0xdb8a6d(304)][_0xdb8a6d(481)]);
        }
        function _0x1f34d2(_0x5b0b93) {
            const _0x2ca0a9 = _0x5e8ce8, _0x395284 = [], _0x1a1ae7 = [];
            _0x5b0b93[_0x2ca0a9(466)](_0x3e7056 => {
                const _0x594b33 = _0x2ca0a9;
                if (astUtils[_0x594b33(478)](_0x3e7056))
                    _0x395284[_0x594b33(491)](_0x3e7056);
                else
                    astUtils[_0x594b33(486)](_0x3e7056) && _0x1a1ae7[_0x594b33(492)]({
                        'left': _0x395284[_0x594b33(493)](),
                        'right': _0x3e7056
                    });
            }), _0x1a1ae7[_0x2ca0a9(466)](_0x229f67 => {
                const _0x1df0f9 = _0x2ca0a9, _0x233601 = _0x229f67[_0x1df0f9(494)], _0x37cba3 = _0x229f67[_0x1df0f9(495)];
                if (!_0x5b3a90['has'](_0x233601) && !_0x5b3a90[_0x1df0f9(375)](_0x37cba3)) {
                    const _0xc1e142 = new Set(_0x4e64c6[_0x1df0f9(485)](_0x233601, _0x37cba3));
                    _0xc1e142['forEach'](_0x2910a1 => {
                        const _0x287a20 = _0x1df0f9;
                        !_0xc1e142[_0x287a20(375)](_0x589a72['getFirstDependency'](_0x2910a1)) && _0x589a72[_0x287a20(396)](_0x2910a1, _0x233601, 8203 + -9610 + 1408);
                    });
                }
                _0x589a72[_0x1df0f9(396)](_0x37cba3, _0x233601, -26 * -114 + -8465 + 5501 * 1);
            });
        }
        function _0xd071aa(_0x2530da) {
            const _0x43a66f = _0x5e8ce8, _0x366a93 = {
                    'Gakso': function (_0x2567dc, _0x4c6744) {
                        const _0x5064e2 = _0x2acd;
                        return _0x54cb95[_0x5064e2(487)](_0x2567dc, _0x4c6744);
                    }
                }, _0x5b7f71 = new Set(_0x4e64c6[_0x43a66f(496)](_0x2530da, { 'includeComments': !![] }));
            _0x5b7f71['forEach'](_0x2e6847 => {
                const _0x50a3fb = _0x43a66f;
                if (!_0x5b7f71[_0x50a3fb(375)](_0x589a72['getFirstDependency'](_0x2e6847))) {
                    const _0x3aa523 = _0x2e2598[_0x50a3fb(384)](_0x2e6847);
                    _0x366a93[_0x50a3fb(497)](_0x2e6847, _0x3aa523) ? _0x589a72['ignoreToken'](_0x2e6847) : _0x589a72[_0x50a3fb(396)](_0x2e6847, _0x3aa523, 1 * 361 + 5782 + -6143);
                }
            });
        }
        function _0x31d241(_0x72a224, _0xcf9d02) {
            const _0x3e7864 = _0x5e8ce8;
            let _0x32af54 = _0xcf9d02;
            while (_0x32af54[_0x3e7864(449)] && !_0x32af54['parent']['type'][_0x3e7864(498)](_0x54cb95[_0x3e7864(499)]) && !_0x32af54[_0x3e7864(449)]['type'][_0x3e7864(498)](_0x3e7864(500))) {
                _0x32af54 = _0x32af54[_0x3e7864(449)];
            }
            return _0x32af54 = _0x32af54[_0x3e7864(449)], !_0x32af54 || _0x54cb95[_0x3e7864(487)](_0x32af54[_0x3e7864(372)][_0x3e7864(373)]['line'], _0x72a224[_0x3e7864(372)]['start'][_0x3e7864(374)]);
        }
        function _0x213876(_0x17b4fe, _0x29c7e2) {
            const _0x3d9255 = _0x5e8ce8, _0xcd8336 = _0x17b4fe[_0x3d9255(372)][_0x3d9255(376)][_0x3d9255(374)], _0x3914d4 = _0x29c7e2['loc'][_0x3d9255(373)][_0x3d9255(374)];
            if (_0x54cb95['DUvQx'](_0xcd8336, _0x3914d4) || _0xcd8336 === _0x3914d4 - (-4 * -113 + -1 * 7765 + 46 * 159))
                return ![];
            for (let _0x59110c = _0x54cb95[_0x3d9255(501)](_0xcd8336, -8442 + 2888 + 5555); _0x54cb95[_0x3d9255(502)](_0x59110c, _0x3914d4); ++_0x59110c) {
                if (!_0x2e2598['firstTokensByLineNumber']['has'](_0x59110c))
                    return !![];
            }
            return ![];
        }
        const _0x5f30c5 = new Set(), _0x54ba91 = {
                'ArrayExpression, ArrayPattern'(_0x35a6ed) {
                    const _0x3592bb = _0x5e8ce8, _0x153ce8 = _0x4e64c6['getFirstToken'](_0x35a6ed), _0x339adc = _0x4e64c6[_0x3592bb(464)]([..._0x35a6ed[_0x3592bb(503)]]['reverse']()[_0x3592bb(360)](_0x1eea5d => _0x1eea5d) || _0x153ce8, astUtils[_0x3592bb(504)]);
                    _0x54cb95['sJqAj'](_0x537342, _0x35a6ed[_0x3592bb(503)], _0x153ce8, _0x339adc, _0x3bf908[_0x3592bb(505)]);
                },
                'ObjectExpression, ObjectPattern'(_0x18b834) {
                    const _0x1088a8 = _0x5e8ce8, _0x4a704e = _0x4e64c6[_0x1088a8(476)](_0x18b834), _0x97a06b = _0x4e64c6['getTokenAfter'](_0x18b834['properties'][_0x1088a8(444)] ? _0x18b834['properties'][_0x54cb95[_0x1088a8(506)](_0x18b834[_0x1088a8(507)][_0x1088a8(444)], -1 * -3535 + -8508 + 6 * 829)] : _0x4a704e, astUtils['isClosingBraceToken']);
                    _0x54cb95[_0x1088a8(508)](_0x537342, _0x18b834[_0x1088a8(507)], _0x4a704e, _0x97a06b, _0x3bf908[_0x1088a8(322)]);
                },
                'ArrowFunctionExpression'(_0x314089) {
                    const _0x154ec8 = _0x5e8ce8, _0x420858 = _0x4e64c6[_0x154ec8(476)](_0x314089, { 'skip': _0x314089[_0x154ec8(509)] ? -8297 * -1 + 8192 + -72 * 229 : -56 * 177 + -5688 + 6 * 2600 });
                    if (astUtils[_0x154ec8(478)](_0x420858)) {
                        const _0x3918e0 = _0x420858, _0xa68d78 = _0x4e64c6[_0x154ec8(463)](_0x314089[_0x154ec8(510)], astUtils[_0x154ec8(486)]);
                        _0x5b3a90[_0x154ec8(412)](_0x3918e0), _0x5b3a90[_0x154ec8(412)](_0xa68d78), _0x54cb95[_0x154ec8(508)](_0x537342, _0x314089[_0x154ec8(511)], _0x3918e0, _0xa68d78, _0x3bf908[_0x154ec8(429)][_0x154ec8(512)]);
                    }
                    _0x217a5e(_0x314089['body']);
                },
                'AssignmentExpression'(_0x339108) {
                    const _0x40392f = _0x5e8ce8, _0x4bbeb9 = _0x4e64c6[_0x40392f(482)](_0x339108[_0x40392f(494)], _0x339108[_0x40392f(495)], _0x1e570d => _0x1e570d[_0x40392f(365)] === _0x339108[_0x40392f(454)]);
                    _0x589a72[_0x40392f(397)]([
                        _0x4bbeb9[_0x40392f(380)][-5972 + 9537 + -3565 * 1],
                        _0x339108[_0x40392f(380)][6136 + -7 * 1351 + 3322]
                    ], _0x4e64c6['getLastToken'](_0x339108[_0x40392f(494)]), -807 + 1 * -3480 + 4288), _0x589a72[_0x40392f(411)](_0x4bbeb9), _0x589a72[_0x40392f(411)](_0x4e64c6['getTokenAfter'](_0x4bbeb9));
                },
                'BinaryExpression, LogicalExpression'(_0x12ef16) {
                    const _0x48303f = _0x5e8ce8, _0x2d50f6 = _0x4e64c6['getFirstTokenBetween'](_0x12ef16['left'], _0x12ef16[_0x48303f(495)], _0x208b1c => _0x208b1c['value'] === _0x12ef16['operator']), _0x4b2f13 = _0x4e64c6[_0x48303f(464)](_0x2d50f6);
                    _0x589a72['ignoreToken'](_0x2d50f6), _0x589a72[_0x48303f(411)](_0x4b2f13), _0x589a72[_0x48303f(396)](_0x4b2f13, _0x2d50f6, -9376 + -5151 + 1 * 14527);
                },
                'BlockStatement, ClassBody'(_0x4377b5) {
                    const _0xf1dcd0 = _0x5e8ce8;
                    let _0x2cf350;
                    if (_0x4377b5['parent'] && _0x54cb95[_0xf1dcd0(513)](_0x27f2e2, _0x4377b5[_0xf1dcd0(449)]))
                        _0x2cf350 = _0x3bf908[_0xf1dcd0(514)];
                    else {
                        if (_0x4377b5[_0xf1dcd0(449)] && (_0x4377b5[_0xf1dcd0(449)][_0xf1dcd0(453)] === _0x54cb95[_0xf1dcd0(515)] || _0x54cb95['iBAWo'](_0x4377b5[_0xf1dcd0(449)]['type'], _0x54cb95[_0xf1dcd0(516)])))
                            _0x2cf350 = _0x3bf908[_0xf1dcd0(429)]['body'];
                        else
                            _0x4377b5[_0xf1dcd0(449)] && _0x54cb95[_0xf1dcd0(517)](_0x4377b5[_0xf1dcd0(449)][_0xf1dcd0(453)], 'FunctionDeclaration') ? _0x2cf350 = _0x3bf908[_0xf1dcd0(314)][_0xf1dcd0(510)] : _0x2cf350 = -1 * 8969 + 4030 + 247 * 20;
                    }
                    !astUtils[_0xf1dcd0(518)][_0xf1dcd0(375)](_0x4377b5[_0xf1dcd0(449)][_0xf1dcd0(453)]) && _0x589a72['setDesiredOffset'](_0x4e64c6[_0xf1dcd0(476)](_0x4377b5), _0x4e64c6['getFirstToken'](_0x4377b5['parent']), 637 * 3 + 8538 + -10449), _0x54cb95[_0xf1dcd0(519)](_0x537342, _0x4377b5[_0xf1dcd0(510)], _0x4e64c6[_0xf1dcd0(476)](_0x4377b5), _0x4e64c6[_0xf1dcd0(477)](_0x4377b5), _0x2cf350);
                },
                'CallExpression': _0x3e8aac,
                'ClassDeclaration[superClass], ClassExpression[superClass]'(_0x30bb8b) {
                    const _0x32f626 = _0x5e8ce8, _0x26031b = _0x4e64c6[_0x32f626(476)](_0x30bb8b), _0x1ce26c = _0x4e64c6['getTokenBefore'](_0x30bb8b[_0x32f626(520)], astUtils[_0x32f626(475)]);
                    _0x589a72[_0x32f626(397)]([
                        _0x1ce26c[_0x32f626(380)][-3548 * -1 + -1 * -6907 + -10455],
                        _0x30bb8b['body']['range'][-835 + 9 * 135 + -95 * 4]
                    ], _0x26031b, -1134 + 4451 * -1 + -294 * -19);
                },
                'ConditionalExpression'(_0x3b7be3) {
                    const _0x1bc7ad = _0x5e8ce8, _0x97098f = _0x4e64c6[_0x1bc7ad(476)](_0x3b7be3);
                    if (!_0x3bf908[_0x1bc7ad(521)] || !astUtils['isTokenOnSameLine'](_0x3b7be3[_0x1bc7ad(405)], _0x3b7be3['consequent']) || _0x54cb95[_0x1bc7ad(522)](_0x31d241, _0x97098f, _0x3b7be3)) {
                        const _0x27eb68 = _0x4e64c6[_0x1bc7ad(482)](_0x3b7be3[_0x1bc7ad(405)], _0x3b7be3[_0x1bc7ad(523)], _0x3f5eb9 => _0x3f5eb9[_0x1bc7ad(453)] === _0x1bc7ad(430) && _0x3f5eb9[_0x1bc7ad(365)] === '?'), _0x34d69d = _0x4e64c6['getFirstTokenBetween'](_0x3b7be3[_0x1bc7ad(523)], _0x3b7be3[_0x1bc7ad(524)], _0x8c7744 => _0x8c7744[_0x1bc7ad(453)] === _0x1bc7ad(430) && _0x8c7744[_0x1bc7ad(365)] === ':'), _0xf81234 = _0x4e64c6[_0x1bc7ad(464)](_0x27eb68), _0x186b71 = _0x4e64c6[_0x1bc7ad(463)](_0x34d69d), _0x2c3cec = _0x4e64c6[_0x1bc7ad(464)](_0x34d69d);
                        _0x589a72[_0x1bc7ad(396)](_0x27eb68, _0x97098f, 1193 + -1829 + 7 * 91), _0x589a72[_0x1bc7ad(396)](_0x34d69d, _0x97098f, 1 * 8939 + -3259 * -1 + -12197), _0x589a72[_0x1bc7ad(396)](_0xf81234, _0x97098f, _0x54cb95[_0x1bc7ad(525)](_0xf81234['type'], _0x54cb95[_0x1bc7ad(526)]) && _0x3bf908[_0x1bc7ad(527)] ? -8 * 1049 + -6412 + 2 * 7403 : -72 * 115 + -1481 * 3 + 3181 * 4), _0x54cb95[_0x1bc7ad(525)](_0x186b71[_0x1bc7ad(372)][_0x1bc7ad(376)][_0x1bc7ad(374)], _0x2c3cec[_0x1bc7ad(372)][_0x1bc7ad(373)]['line']) ? _0x589a72['setDesiredOffset'](_0x2c3cec, _0xf81234, -7027 + -5820 + 1 * 12847) : _0x589a72['setDesiredOffset'](_0x2c3cec, _0x97098f, _0x54cb95[_0x1bc7ad(528)](_0x2c3cec[_0x1bc7ad(453)], _0x54cb95[_0x1bc7ad(526)]) && _0x3bf908[_0x1bc7ad(527)] ? -897 * 4 + -6227 * 1 + 9817 : -1 * 453 + -8751 * 1 + 9205);
                    }
                },
                'DoWhileStatement, WhileStatement, ForInStatement, ForOfStatement': _0x3a8082 => _0x217a5e(_0x3a8082[_0x5e8ce8(510)]),
                'ExportNamedDeclaration'(_0x40c6d8) {
                    const _0xdec0d8 = _0x5e8ce8;
                    if (_0x54cb95[_0xdec0d8(529)](_0x40c6d8[_0xdec0d8(530)], null)) {
                        const _0x403142 = _0x4e64c6[_0xdec0d8(477)](_0x40c6d8, astUtils[_0xdec0d8(531)]);
                        _0x54cb95['IsmQA'](_0x537342, _0x40c6d8[_0xdec0d8(532)], _0x4e64c6[_0xdec0d8(476)](_0x40c6d8, { 'skip': 1 }), _0x403142, 1832 * 4 + -17 * -530 + -1 * 16337), _0x40c6d8['source'] && _0x589a72[_0xdec0d8(397)]([
                            _0x403142['range'][5375 + 2243 + 3 * -2539],
                            _0x40c6d8[_0xdec0d8(380)][-1 * -3193 + -7288 + -64 * -64]
                        ], _0x4e64c6[_0xdec0d8(476)](_0x40c6d8), -7447 + 6658 + -10 * -79);
                    }
                },
                'ForStatement'(_0xe74062) {
                    const _0x5aeeed = _0x5e8ce8, _0x23ca87 = _0x4e64c6[_0x5aeeed(476)](_0xe74062, 519 * 17 + 6 * 356 + -10958);
                    _0xe74062['init'] && _0x589a72[_0x5aeeed(397)](_0xe74062[_0x5aeeed(432)][_0x5aeeed(380)], _0x23ca87, 9559 * 1 + 1 * -3903 + -5655), _0xe74062['test'] && _0x589a72[_0x5aeeed(397)](_0xe74062[_0x5aeeed(405)]['range'], _0x23ca87, 267 * 29 + -1 * 5602 + -2140), _0xe74062[_0x5aeeed(361)] && _0x589a72[_0x5aeeed(397)](_0xe74062['update'][_0x5aeeed(380)], _0x23ca87, -3098 + 3 * -1461 + 258 * 29), _0x54cb95[_0x5aeeed(533)](_0x217a5e, _0xe74062[_0x5aeeed(510)]);
                },
                'FunctionDeclaration, FunctionExpression'(_0x13a1ce) {
                    const _0x5a9068 = _0x5e8ce8, _0x1d51dd = _0x4e64c6[_0x5a9068(463)](_0x13a1ce['body']), _0xb74dc = _0x4e64c6[_0x5a9068(463)](_0x13a1ce[_0x5a9068(511)][_0x5a9068(444)] ? _0x13a1ce[_0x5a9068(511)][5981 + -359 * 12 + -1673] : _0x1d51dd);
                    _0x5b3a90['add'](_0xb74dc), _0x5b3a90[_0x5a9068(412)](_0x1d51dd), _0x54cb95['IsmQA'](_0x537342, _0x13a1ce[_0x5a9068(511)], _0xb74dc, _0x1d51dd, _0x3bf908[_0x13a1ce[_0x5a9068(453)]][_0x5a9068(512)]);
                },
                'IfStatement'(_0x5dd2bb) {
                    const _0x1c7761 = _0x5e8ce8;
                    _0x54cb95['Ysnzs'](_0x217a5e, _0x5dd2bb[_0x1c7761(523)]), _0x5dd2bb[_0x1c7761(524)] && _0x5dd2bb['alternate']['type'] !== _0x54cb95[_0x1c7761(534)] && _0x217a5e(_0x5dd2bb[_0x1c7761(524)]);
                },
                'ImportDeclaration'(_0x40a673) {
                    const _0x3f13b6 = _0x5e8ce8;
                    if (_0x40a673[_0x3f13b6(532)][_0x3f13b6(535)](_0x290720 => _0x290720[_0x3f13b6(453)] === _0x3f13b6(354))) {
                        const _0x56b12f = _0x4e64c6[_0x3f13b6(476)](_0x40a673, astUtils[_0x3f13b6(536)]), _0x3c9706 = _0x4e64c6['getLastToken'](_0x40a673, astUtils[_0x3f13b6(531)]);
                        _0x54cb95[_0x3f13b6(537)](_0x537342, _0x40a673[_0x3f13b6(532)][_0x3f13b6(443)](_0x37f0e1 => _0x37f0e1['type'] === _0x3f13b6(354)), _0x56b12f, _0x3c9706, _0x3bf908['ImportDeclaration']);
                    }
                    const _0x1c27cd = _0x4e64c6[_0x3f13b6(477)](_0x40a673, _0x170286 => _0x170286[_0x3f13b6(453)] === 'Identifier' && _0x170286['value'] === 'from'), _0x1a8875 = _0x4e64c6['getLastToken'](_0x40a673, _0x2d692d => _0x2d692d[_0x3f13b6(453)] === _0x3f13b6(538)), _0x3ae52d = _0x4e64c6['getLastToken'](_0x40a673, _0x25a7d5 => _0x25a7d5['type'] === 'Punctuator' && _0x25a7d5[_0x3f13b6(365)] === ';');
                    if (_0x1c27cd) {
                        const _0x1501f4 = _0x3ae52d && _0x54cb95[_0x3f13b6(529)](_0x3ae52d[_0x3f13b6(380)][-1678 + 8541 + -47 * 146], _0x1a8875[_0x3f13b6(380)][991 * 3 + 2 * -2237 + 1502]) ? _0x40a673['range'][-9155 * 1 + 4267 + 4889] : _0x1a8875['range'][211 * -43 + -1648 + -3574 * -3];
                        _0x589a72[_0x3f13b6(397)]([
                            _0x1c27cd[_0x3f13b6(380)][8495 + -630 + 7865 * -1],
                            _0x1501f4
                        ], _0x4e64c6[_0x3f13b6(476)](_0x40a673), 4249 + -1 * -9489 + 57 * -241);
                    }
                },
                'ImportExpression'(_0x574552) {
                    const _0x23ea42 = _0x5e8ce8, _0x53c754 = _0x4e64c6[_0x23ea42(476)](_0x574552, 5903 + -2063 * -1 + -7965), _0x2db907 = _0x4e64c6[_0x23ea42(477)](_0x574552);
                    _0x5b3a90[_0x23ea42(412)](_0x53c754), _0x5b3a90['add'](_0x2db907), _0x589a72['setDesiredOffset'](_0x53c754, _0x4e64c6[_0x23ea42(463)](_0x53c754), 2761 * -1 + 20 * -119 + 97 * 53), _0x54cb95['kugSo'](_0x537342, [_0x574552[_0x23ea42(539)]], _0x53c754, _0x2db907, _0x3bf908[_0x23ea42(304)]['arguments']);
                },
                'MemberExpression, JSXMemberExpression, MetaProperty'(_0x7a181d) {
                    const _0x28d586 = _0x5e8ce8, _0x4e83f8 = _0x54cb95[_0x28d586(540)](_0x7a181d[_0x28d586(453)], _0x54cb95['IpZuO']) ? _0x7a181d[_0x28d586(541)] : _0x7a181d[_0x28d586(422)], _0x649270 = _0x4e64c6[_0x28d586(482)](_0x4e83f8, _0x7a181d[_0x28d586(542)], astUtils[_0x28d586(543)]), _0x1e9a3a = _0x4e64c6[_0x28d586(464)](_0x649270), _0x5cd5ee = _0x4e64c6['getTokensBetween'](_0x4e83f8, _0x7a181d[_0x28d586(542)], { 'filter': astUtils[_0x28d586(486)] })['length'], _0x5f4e7c = _0x5cd5ee ? _0x4e64c6[_0x28d586(463)](_0x4e83f8, { 'skip': _0x5cd5ee - (-4252 + 2 * 3005 + -1757) }) : _0x4e64c6[_0x28d586(476)](_0x4e83f8), _0x207756 = _0x4e64c6[_0x28d586(463)](_0x649270), _0x50de4f = _0x7a181d['computed'] ? _0x649270 : _0x1e9a3a;
                    _0x7a181d[_0x28d586(544)] && (_0x589a72[_0x28d586(396)](_0x4e64c6[_0x28d586(477)](_0x7a181d), _0x649270, 1220 * -1 + -1063 * -1 + 157), _0x589a72[_0x28d586(397)](_0x7a181d[_0x28d586(542)][_0x28d586(380)], _0x649270, 274 * 26 + 5381 * 1 + -8 * 1563));
                    const _0x4066b3 = _0x54cb95['bWkuZ'](_0x207756[_0x28d586(372)]['end'][_0x28d586(374)], _0x50de4f[_0x28d586(372)][_0x28d586(373)][_0x28d586(374)]) ? _0x207756 : _0x5f4e7c;
                    _0x54cb95[_0x28d586(545)](typeof _0x3bf908['MemberExpression'], _0x54cb95[_0x28d586(546)]) ? (_0x589a72[_0x28d586(396)](_0x649270, _0x4066b3, _0x3bf908[_0x28d586(319)]), _0x589a72[_0x28d586(396)](_0x1e9a3a, _0x7a181d['computed'] ? _0x649270 : _0x4066b3, _0x3bf908['MemberExpression'])) : (_0x589a72[_0x28d586(411)](_0x649270), _0x589a72[_0x28d586(411)](_0x1e9a3a), _0x589a72[_0x28d586(396)](_0x649270, _0x4066b3, 1 * 7039 + -558 + -1 * 6481), _0x589a72[_0x28d586(396)](_0x1e9a3a, _0x649270, 3349 + -6540 + 3191));
                },
                'NewExpression'(_0x1499be) {
                    const _0x40e568 = _0x5e8ce8;
                    (_0x54cb95['JpMTh'](_0x1499be[_0x40e568(481)][_0x40e568(444)], 8 * -1127 + -1802 * -3 + 5 * 722) || astUtils[_0x40e568(486)](_0x4e64c6[_0x40e568(477)](_0x1499be)) && astUtils['isOpeningParenToken'](_0x4e64c6['getLastToken'](_0x1499be, -113 * 83 + 411 + 8969))) && _0x54cb95[_0x40e568(547)](_0x3e8aac, _0x1499be);
                },
                'Property'(_0x3b5b9c) {
                    const _0x3289a0 = _0x5e8ce8;
                    if (!_0x3b5b9c[_0x3289a0(548)] && !_0x3b5b9c[_0x3289a0(549)] && _0x54cb95[_0x3289a0(550)](_0x3b5b9c[_0x3289a0(551)], _0x54cb95['teLuz'])) {
                        const _0x4f5654 = _0x4e64c6[_0x3289a0(482)](_0x3b5b9c[_0x3289a0(364)], _0x3b5b9c[_0x3289a0(365)], astUtils[_0x3289a0(552)]);
                        _0x589a72['ignoreToken'](_0x4e64c6['getTokenAfter'](_0x4f5654));
                    }
                },
                'SwitchStatement'(_0x3bef0b) {
                    const _0x1e1e40 = _0x5e8ce8, _0x5e5f48 = _0x4e64c6['getTokenAfter'](_0x3bef0b[_0x1e1e40(553)], astUtils['isOpeningBraceToken']), _0x1b3117 = _0x4e64c6['getLastToken'](_0x3bef0b);
                    _0x589a72[_0x1e1e40(397)]([
                        _0x5e5f48[_0x1e1e40(380)][-2801 + -5506 + 4 * 2077],
                        _0x1b3117[_0x1e1e40(380)][-857 + -3898 + -15 * -317]
                    ], _0x5e5f48, _0x3bf908[_0x1e1e40(329)]), _0x3bef0b[_0x1e1e40(554)][_0x1e1e40(444)] && _0x4e64c6['getTokensBetween'](_0x3bef0b['cases'][_0x3bef0b['cases']['length'] - (4972 + 4030 + -1 * 9001)], _0x1b3117, {
                        'includeComments': !![],
                        'filter': astUtils[_0x1e1e40(555)]
                    })[_0x1e1e40(466)](_0x3e6777 => _0x589a72['ignoreToken'](_0x3e6777));
                },
                'SwitchCase'(_0x2a41e8) {
                    const _0x2c4d93 = _0x5e8ce8;
                    if (!(_0x2a41e8[_0x2c4d93(523)][_0x2c4d93(444)] === -8 * -97 + 2611 + 1 * -3386 && _0x54cb95[_0x2c4d93(550)](_0x2a41e8[_0x2c4d93(523)][8 * -778 + 6569 + 1 * -345][_0x2c4d93(453)], _0x2c4d93(301)))) {
                        const _0x370093 = _0x4e64c6[_0x2c4d93(476)](_0x2a41e8), _0x2ebb26 = _0x4e64c6[_0x2c4d93(464)](_0x2a41e8);
                        _0x589a72[_0x2c4d93(397)]([
                            _0x370093[_0x2c4d93(380)][-21 * -153 + 6594 + -9806],
                            _0x2ebb26[_0x2c4d93(380)][8986 + -8142 + -844]
                        ], _0x370093, -2702 + 3574 + -871);
                    }
                },
                'TemplateLiteral'(_0x178fe0) {
                    const _0x360638 = _0x5e8ce8;
                    _0x178fe0[_0x360638(556)][_0x360638(466)]((_0x572455, _0x4a62ed) => {
                        const _0x368306 = _0x360638, _0x1d49d0 = _0x178fe0[_0x368306(557)][_0x4a62ed], _0x1a60e0 = _0x178fe0[_0x368306(557)][_0x54cb95['RPuND'](_0x4a62ed, 9518 + -3322 * -3 + -19483)], _0x52df10 = _0x54cb95[_0x368306(550)](_0x1d49d0[_0x368306(372)][_0x368306(373)][_0x368306(374)], _0x1d49d0[_0x368306(372)]['end'][_0x368306(374)]) ? _0x4e64c6[_0x368306(476)](_0x1d49d0) : null;
                        _0x589a72[_0x368306(397)]([
                            _0x1d49d0[_0x368306(380)][-1167 * 7 + -6560 + 14730],
                            _0x1a60e0[_0x368306(380)][9824 + 1931 * 5 + 151 * -129]
                        ], _0x52df10, 1813 + -9887 + -323 * -25), _0x589a72[_0x368306(396)](_0x4e64c6['getFirstToken'](_0x1a60e0), _0x52df10, -1 * -3093 + -8947 + -2927 * -2);
                    });
                },
                'VariableDeclaration'(_0x1c6f05) {
                    const _0x17c644 = _0x5e8ce8;
                    let _0x593073 = Object[_0x17c644(558)][_0x17c644(559)][_0x17c644(560)](_0x3bf908[_0x17c644(337)], _0x1c6f05[_0x17c644(551)]) ? _0x3bf908[_0x17c644(337)][_0x1c6f05['kind']] : _0x36bb19;
                    const _0x5d3461 = _0x4e64c6['getFirstToken'](_0x1c6f05), _0x36bd02 = _0x4e64c6[_0x17c644(477)](_0x1c6f05);
                    if (_0x3bf908[_0x17c644(337)][_0x1c6f05[_0x17c644(551)]] === _0x54cb95[_0x17c644(462)]) {
                        if (_0x54cb95[_0x17c644(442)](_0x1c6f05[_0x17c644(561)][_0x17c644(444)], -7 * 850 + -2720 + 8671)) {
                            _0x537342(_0x1c6f05['declarations'], _0x5d3461, _0x36bd02, _0x54cb95[_0x17c644(462)]);
                            return;
                        }
                        _0x593073 = _0x36bb19;
                    }
                    _0x1c6f05[_0x17c644(561)][_0x54cb95['ELEto'](_0x1c6f05[_0x17c644(561)][_0x17c644(444)], 9348 + -4332 + -5015)][_0x17c644(372)][_0x17c644(373)]['line'] > _0x1c6f05['loc'][_0x17c644(373)][_0x17c644(374)] ? _0x589a72['setDesiredOffsets'](_0x1c6f05['range'], _0x5d3461, _0x593073, !![]) : _0x589a72[_0x17c644(397)](_0x1c6f05[_0x17c644(380)], _0x5d3461, _0x593073), astUtils['isSemicolonToken'](_0x36bd02) && _0x589a72['ignoreToken'](_0x36bd02);
                },
                'VariableDeclarator'(_0x4f7ed2) {
                    const _0x207152 = _0x5e8ce8;
                    if (_0x4f7ed2[_0x207152(432)]) {
                        const _0x393b99 = _0x4e64c6[_0x207152(463)](_0x4f7ed2[_0x207152(432)], astUtils[_0x207152(475)]), _0x4db7a1 = _0x4e64c6[_0x207152(464)](_0x393b99);
                        _0x589a72['ignoreToken'](_0x393b99), _0x589a72[_0x207152(411)](_0x4db7a1), _0x589a72[_0x207152(397)]([
                            _0x4db7a1[_0x207152(380)][-3278 + 7223 + -3 * 1315],
                            _0x4f7ed2[_0x207152(380)][5121 + -1177 * 1 + 3943 * -1]
                        ], _0x393b99, 6601 * 1 + 4639 + 1 * -11239), _0x589a72['setDesiredOffset'](_0x393b99, _0x4e64c6[_0x207152(477)](_0x4f7ed2['id']), 3151 + -73 * -49 + -6728);
                    }
                },
                'JSXAttribute[value]'(_0x4b47af) {
                    const _0x4f04a2 = _0x5e8ce8, _0x35e2d8 = _0x4e64c6[_0x4f04a2(482)](_0x4b47af[_0x4f04a2(562)], _0x4b47af[_0x4f04a2(365)], _0xb30dc5 => _0xb30dc5['type'] === _0x4f04a2(430) && _0xb30dc5[_0x4f04a2(365)] === '=');
                    _0x589a72[_0x4f04a2(397)]([
                        _0x35e2d8['range'][829 + 38 * -57 + 1337 * 1],
                        _0x4b47af[_0x4f04a2(365)][_0x4f04a2(380)][313 + -691 + 1 * 379]
                    ], _0x4e64c6[_0x4f04a2(476)](_0x4b47af[_0x4f04a2(562)]), 5 * 1678 + -62 * 19 + 7211 * -1);
                },
                'JSXElement'(_0x533dc3) {
                    const _0x4b4b2e = _0x5e8ce8;
                    _0x533dc3['closingElement'] && _0x54cb95[_0x4b4b2e(563)](_0x537342, _0x533dc3[_0x4b4b2e(564)], _0x4e64c6[_0x4b4b2e(476)](_0x533dc3[_0x4b4b2e(565)]), _0x4e64c6[_0x4b4b2e(476)](_0x533dc3[_0x4b4b2e(566)]), 380 * 13 + -8121 + -86 * -37);
                },
                'JSXOpeningElement'(_0x1ec69b) {
                    const _0x5c2148 = _0x5e8ce8, _0x4c1215 = _0x4e64c6[_0x5c2148(476)](_0x1ec69b);
                    let _0x1600f8;
                    _0x1ec69b['selfClosing'] ? (_0x1600f8 = _0x4e64c6[_0x5c2148(477)](_0x1ec69b, { 'skip': 1 }), _0x589a72[_0x5c2148(396)](_0x4e64c6['getLastToken'](_0x1ec69b), _0x1600f8, 7328 + 5 * -383 + -5413)) : _0x1600f8 = _0x4e64c6[_0x5c2148(477)](_0x1ec69b), _0x589a72[_0x5c2148(397)](_0x1ec69b[_0x5c2148(562)][_0x5c2148(380)], _0x4e64c6[_0x5c2148(476)](_0x1ec69b)), _0x537342(_0x1ec69b[_0x5c2148(567)], _0x4c1215, _0x1600f8, -3788 + -9703 + 3373 * 4);
                },
                'JSXClosingElement'(_0x3a7269) {
                    const _0x28fec7 = _0x5e8ce8, _0x38f05c = _0x4e64c6[_0x28fec7(476)](_0x3a7269);
                    _0x589a72['setDesiredOffsets'](_0x3a7269[_0x28fec7(562)][_0x28fec7(380)], _0x38f05c, 5039 + 8187 + -13225);
                },
                'JSXFragment'(_0x1fa451) {
                    const _0x4f5263 = _0x5e8ce8, _0x4ba69f = _0x4e64c6[_0x4f5263(476)](_0x1fa451[_0x4f5263(568)]), _0x31487f = _0x4e64c6['getFirstToken'](_0x1fa451[_0x4f5263(569)]);
                    _0x54cb95[_0x4f5263(570)](_0x537342, _0x1fa451['children'], _0x4ba69f, _0x31487f, -7168 + 7074 + 5 * 19);
                },
                'JSXOpeningFragment'(_0x139ecf) {
                    const _0x475222 = _0x5e8ce8, _0x15d47d = _0x4e64c6['getFirstToken'](_0x139ecf), _0x1f073b = _0x4e64c6['getLastToken'](_0x139ecf);
                    _0x589a72['setDesiredOffsets'](_0x139ecf[_0x475222(380)], _0x15d47d, -8916 + 2142 + -1355 * -5), _0x589a72['matchOffsetOf'](_0x15d47d, _0x1f073b);
                },
                'JSXClosingFragment'(_0x2c577a) {
                    const _0x1d4603 = _0x5e8ce8, _0x450213 = _0x4e64c6[_0x1d4603(476)](_0x2c577a), _0x40f41c = _0x4e64c6[_0x1d4603(477)](_0x2c577a, { 'skip': 1 }), _0x4972d3 = _0x4e64c6[_0x1d4603(477)](_0x2c577a), _0x2b0b10 = astUtils[_0x1d4603(571)](_0x40f41c, _0x4972d3) ? _0x40f41c : _0x4972d3;
                    _0x589a72[_0x1d4603(397)](_0x2c577a[_0x1d4603(380)], _0x450213, 170 * 32 + -352 * -14 + -10367), _0x589a72[_0x1d4603(395)](_0x450213, _0x2b0b10);
                },
                'JSXExpressionContainer'(_0x41b2ea) {
                    const _0x5094be = _0x5e8ce8, _0x569124 = _0x4e64c6[_0x5094be(476)](_0x41b2ea), _0x2b753b = _0x4e64c6[_0x5094be(477)](_0x41b2ea);
                    _0x589a72[_0x5094be(397)]([
                        _0x569124['range'][3129 + -1 * -61 + -3189],
                        _0x2b753b[_0x5094be(380)][-5334 + -3 * -1391 + 1161]
                    ], _0x569124, -3284 + 5818 + -149 * 17);
                },
                'JSXSpreadAttribute'(_0x21535c) {
                    const _0x481228 = _0x5e8ce8, _0x18f172 = _0x4e64c6[_0x481228(476)](_0x21535c), _0x368123 = _0x4e64c6[_0x481228(477)](_0x21535c);
                    _0x589a72[_0x481228(397)]([
                        _0x18f172[_0x481228(380)][-5340 + 7069 + 48 * -36],
                        _0x368123[_0x481228(380)][2737 + 9104 + 1 * -11841]
                    ], _0x18f172, -8682 * -1 + 7388 + -16069);
                },
                '*'(_0x440051) {
                    const _0x1b55fa = _0x5e8ce8, _0x39f730 = _0x4e64c6['getFirstToken'](_0x440051);
                    _0x39f730 && !_0x5f30c5[_0x1b55fa(375)](_0x39f730) && _0x589a72['setDesiredOffsets'](_0x440051[_0x1b55fa(380)], _0x39f730, 6019 + 4024 + -121 * 83);
                }
            }, _0xaac00e = [], _0x395ce3 = {};
        for (const [_0x58412a, _0x528d96] of Object[_0x5e8ce8(572)](_0x54ba91)) {
            _0x395ce3[_0x58412a] = _0x36f542 => _0xaac00e['push']({
                'listener': _0x528d96,
                'node': _0x36f542
            });
        }
        const _0xbcc9ba = new Set();
        function _0x2fe5cb(_0x2dcdfd) {
            const _0x19afe2 = _0x5e8ce8;
            _0xbcc9ba[_0x19afe2(412)](_0x2dcdfd), _0x5f30c5['add'](_0x4e64c6[_0x19afe2(476)](_0x2dcdfd));
        }
        const _0x48eee8 = _0x3bf908[_0x5e8ce8(573)]['reduce']((_0x1de03b, _0x468e76) => Object[_0x5e8ce8(436)](_0x1de03b, { [_0x468e76]: _0x2fe5cb }), {});
        return Object[_0x5e8ce8(436)](_0x395ce3, _0x48eee8, {
            '*:exit'(_0x1ae633) {
                const _0x1f6c33 = _0x5e8ce8;
                !KNOWN_NODES[_0x1f6c33(375)](_0x1ae633['type']) && _0x54cb95['dIvJq'](_0x2fe5cb, _0x1ae633);
            },
            'Program:exit'() {
                const _0x3a57f7 = _0x5e8ce8;
                _0x3bf908[_0x3a57f7(574)] && _0x4e64c6['getAllComments']()[_0x3a57f7(466)](_0x374709 => _0x589a72[_0x3a57f7(411)](_0x374709));
                _0xaac00e[_0x3a57f7(443)](_0x18e00f => !_0xbcc9ba[_0x3a57f7(375)](_0x18e00f[_0x3a57f7(575)]))[_0x3a57f7(466)](_0x54c07a => _0x54c07a['listener'](_0x54c07a[_0x3a57f7(575)])), _0xbcc9ba[_0x3a57f7(466)](_0xd071aa), _0x54cb95['JDJuX'](_0x1f34d2, _0x4e64c6[_0x3a57f7(576)][_0x3a57f7(577)]);
                const _0x27fdb7 = _0x4e64c6['ast']['comments'][_0x3a57f7(371)]((_0x5e8ab5, _0x26bdec) => {
                    const _0x16b8e1 = _0x3a57f7, _0x378710 = _0x4e64c6[_0x16b8e1(463)](_0x26bdec, { 'includeComments': !![] });
                    return _0x5e8ab5['set'](_0x26bdec, _0x5e8ab5[_0x16b8e1(375)](_0x378710) ? _0x5e8ab5[_0x16b8e1(402)](_0x378710) : _0x378710);
                }, new WeakMap());
                _0x4e64c6[_0x3a57f7(578)]['forEach']((_0x332b98, _0x4c08e6) => {
                    const _0x452098 = _0x3a57f7, _0xc8a767 = _0x4c08e6 + (37 * 39 + 2531 * 1 + -29 * 137);
                    if (!_0x2e2598['firstTokensByLineNumber']['has'](_0xc8a767))
                        return;
                    const _0x41e5ff = _0x2e2598[_0x452098(369)]['get'](_0xc8a767);
                    if (_0x54cb95['XMXuP'](_0x41e5ff['loc'][_0x452098(373)][_0x452098(374)], _0xc8a767))
                        return;
                    if (astUtils[_0x452098(555)](_0x41e5ff)) {
                        const _0x47ad08 = _0x27fdb7[_0x452098(402)](_0x41e5ff), _0x2c5642 = _0x47ad08 ? _0x4e64c6[_0x452098(464)](_0x47ad08) : _0x4e64c6[_0x452098(576)][_0x452098(577)][8530 + 2501 + 3677 * -3], _0x46f6ba = _0x47ad08 && !_0x54cb95['pliNU'](_0x213876, _0x47ad08, _0x41e5ff), _0x322154 = _0x2c5642 && !_0x213876(_0x41e5ff, _0x2c5642);
                        _0x2c5642 && astUtils[_0x452098(480)](_0x2c5642) && !astUtils['isTokenOnSameLine'](_0x41e5ff, _0x2c5642) && _0x589a72[_0x452098(396)](_0x41e5ff, _0x2c5642, 9446 + 1 * 1019 + 7 * -1495);
                        if (_0x46f6ba && _0x54cb95[_0x452098(579)](_0x58309b, _0x41e5ff, _0x589a72['getDesiredIndent'](_0x47ad08)) || _0x322154 && _0x54cb95[_0x452098(579)](_0x58309b, _0x41e5ff, _0x589a72[_0x452098(401)](_0x2c5642)))
                            return;
                    }
                    if (_0x58309b(_0x41e5ff, _0x589a72[_0x452098(401)](_0x41e5ff)))
                        return;
                    _0x3daa4c(_0x41e5ff, _0x589a72[_0x452098(401)](_0x41e5ff));
                });
            }
        });
    }
};