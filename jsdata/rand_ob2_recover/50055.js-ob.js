(function (_0xa166f1) {
    var _0x1b2456 = _0x2058;
    if (typeof exports == 'object' && typeof module == _0x1b2456(252))
        _0xa166f1(require('../../lib/codemirror'));
    else {
        if (typeof define == 'function' && define[_0x1b2456(253)])
            define(['../../lib/codemirror'], _0xa166f1);
        else
            _0xa166f1(CodeMirror);
    }
}(function (_0x24bc6d) {
    'use strict';
    var _0x67322b = _0x2058;
    _0x24bc6d['defineMode'](_0x67322b(254), function () {
        var _0x1bd989 = function () {
            var _0x2d5706 = _0x2058;
            function _0x81a0bc(_0x3f3b30) {
                var _0x54194c = _0x2058;
                return {
                    'type': _0x3f3b30,
                    'style': _0x54194c(255)
                };
            }
            var _0x3f1284 = _0x81a0bc(_0x2d5706(256)), _0x3291bc = {
                    'type': 'atom',
                    'style': _0x2d5706(257)
                }, _0x24a1f9 = {
                    'type': _0x2d5706(258),
                    'style': null
                }, _0x33f027 = {
                    'type': _0x2d5706(259),
                    'style': _0x2d5706(260)
                }, _0x448770 = { ',': _0x24a1f9 }, _0x2367a6 = [
                    _0x2d5706(261),
                    _0x2d5706(262),
                    _0x2d5706(263),
                    _0x2d5706(264),
                    _0x2d5706(265),
                    'any',
                    _0x2d5706(266),
                    'as',
                    _0x2d5706(267),
                    'at',
                    _0x2d5706(268),
                    'base-uri',
                    _0x2d5706(269),
                    'boundary-space',
                    'by',
                    _0x2d5706(270),
                    _0x2d5706(271),
                    _0x2d5706(272),
                    _0x2d5706(273),
                    _0x2d5706(274),
                    _0x2d5706(275),
                    _0x2d5706(276),
                    'construction',
                    _0x2d5706(277),
                    _0x2d5706(278),
                    _0x2d5706(279),
                    'copy',
                    _0x2d5706(280),
                    'count',
                    _0x2d5706(281),
                    _0x2d5706(282),
                    _0x2d5706(283),
                    'delete',
                    'descendant',
                    _0x2d5706(284),
                    _0x2d5706(285),
                    'diacritics',
                    'different',
                    _0x2d5706(286),
                    _0x2d5706(287),
                    _0x2d5706(288),
                    'element',
                    _0x2d5706(289),
                    _0x2d5706(290),
                    _0x2d5706(291),
                    _0x2d5706(292),
                    _0x2d5706(293),
                    _0x2d5706(294),
                    _0x2d5706(295),
                    'exactly',
                    _0x2d5706(296),
                    _0x2d5706(297),
                    'first',
                    _0x2d5706(298),
                    _0x2d5706(299),
                    'for',
                    _0x2d5706(300),
                    _0x2d5706(301),
                    _0x2d5706(302),
                    'ft-option',
                    _0x2d5706(303),
                    _0x2d5706(304),
                    'fuzzy',
                    _0x2d5706(305),
                    _0x2d5706(306),
                    'if',
                    'import',
                    'in',
                    _0x2d5706(307),
                    'insensitive',
                    'insert',
                    _0x2d5706(308),
                    _0x2d5706(309),
                    _0x2d5706(310),
                    'invoke',
                    'is',
                    _0x2d5706(311),
                    _0x2d5706(312),
                    _0x2d5706(313),
                    _0x2d5706(314),
                    _0x2d5706(315),
                    _0x2d5706(316),
                    'levels',
                    _0x2d5706(317),
                    _0x2d5706(318),
                    _0x2d5706(319),
                    'module',
                    'most',
                    _0x2d5706(320),
                    _0x2d5706(321),
                    'no',
                    'node',
                    'nodes',
                    _0x2d5706(322),
                    _0x2d5706(323),
                    _0x2d5706(324),
                    _0x2d5706(325),
                    'of',
                    _0x2d5706(326),
                    _0x2d5706(327),
                    _0x2d5706(328),
                    _0x2d5706(329),
                    _0x2d5706(330),
                    _0x2d5706(331),
                    _0x2d5706(332),
                    _0x2d5706(333),
                    _0x2d5706(334),
                    _0x2d5706(335),
                    'preceding-sibling',
                    _0x2d5706(336),
                    _0x2d5706(337),
                    _0x2d5706(338),
                    _0x2d5706(339),
                    _0x2d5706(340),
                    _0x2d5706(341),
                    _0x2d5706(342),
                    _0x2d5706(343),
                    _0x2d5706(344),
                    'satisfies',
                    'schema',
                    _0x2d5706(345),
                    _0x2d5706(346),
                    _0x2d5706(347),
                    _0x2d5706(348),
                    _0x2d5706(349),
                    _0x2d5706(350),
                    'sentences',
                    'sequence',
                    _0x2d5706(351),
                    _0x2d5706(352),
                    _0x2d5706(353),
                    _0x2d5706(354),
                    'start',
                    _0x2d5706(355),
                    _0x2d5706(356),
                    _0x2d5706(357),
                    'strip',
                    _0x2d5706(358),
                    _0x2d5706(359),
                    _0x2d5706(360),
                    _0x2d5706(361),
                    _0x2d5706(362),
                    'to',
                    _0x2d5706(363),
                    'treat',
                    _0x2d5706(364),
                    _0x2d5706(365),
                    _0x2d5706(366),
                    _0x2d5706(367),
                    _0x2d5706(368),
                    _0x2d5706(369),
                    _0x2d5706(370),
                    _0x2d5706(371),
                    _0x2d5706(372),
                    _0x2d5706(373),
                    _0x2d5706(374),
                    _0x2d5706(375),
                    'variable',
                    'version',
                    _0x2d5706(376),
                    _0x2d5706(377),
                    'where',
                    'wildcards',
                    _0x2d5706(378),
                    _0x2d5706(379),
                    _0x2d5706(380),
                    _0x2d5706(381),
                    _0x2d5706(382),
                    _0x2d5706(254)
                ];
            for (var _0x3233a0 = 0, _0x28d235 = _0x2367a6[_0x2d5706(383)]; _0x3233a0 < _0x28d235; _0x3233a0++) {
                _0x448770[_0x2367a6[_0x3233a0]] = _0x81a0bc(_0x2367a6[_0x3233a0]);
            }
            ;
            var _0x4c266e = [
                _0x2d5706(384),
                _0x2d5706(385),
                'xs:anyType',
                _0x2d5706(386),
                _0x2d5706(387),
                'xs:boolean',
                _0x2d5706(388),
                _0x2d5706(389),
                _0x2d5706(390),
                _0x2d5706(391),
                _0x2d5706(392),
                'xs:decimal',
                _0x2d5706(393),
                _0x2d5706(394),
                _0x2d5706(395),
                _0x2d5706(396),
                'xs:float',
                _0x2d5706(397),
                _0x2d5706(398),
                'xs:gMonthDay',
                _0x2d5706(399),
                'xs:gYearMonth',
                _0x2d5706(400),
                _0x2d5706(401),
                'xs:IDREF',
                _0x2d5706(402),
                'xs:int',
                _0x2d5706(403),
                _0x2d5706(404),
                _0x2d5706(405),
                _0x2d5706(406),
                'xs:long',
                'xs:Name',
                'xs:NCName',
                'xs:negativeInteger',
                'xs:NMTOKEN',
                _0x2d5706(407),
                _0x2d5706(408),
                'xs:nonPositiveInteger',
                _0x2d5706(409),
                _0x2d5706(410),
                _0x2d5706(411),
                _0x2d5706(412),
                _0x2d5706(413),
                _0x2d5706(414),
                _0x2d5706(415),
                'xs:string',
                _0x2d5706(416),
                _0x2d5706(417),
                'xs:unsignedByte',
                _0x2d5706(418),
                'xs:unsignedLong',
                _0x2d5706(419),
                _0x2d5706(420),
                _0x2d5706(421),
                _0x2d5706(422)
            ];
            for (var _0x3233a0 = 0, _0x28d235 = _0x4c266e['length']; _0x3233a0 < _0x28d235; _0x3233a0++) {
                _0x448770[_0x4c266e[_0x3233a0]] = _0x3291bc;
            }
            ;
            var _0x776372 = [
                'eq',
                'ne',
                'lt',
                'le',
                'gt',
                'ge',
                ':=',
                '=',
                '>',
                '>=',
                '<',
                '<=',
                '.',
                '|',
                '?',
                'and',
                'or',
                'div',
                _0x2d5706(423),
                _0x2d5706(424),
                '*',
                '/',
                '+',
                '-'
            ];
            for (var _0x3233a0 = 0, _0x28d235 = _0x776372[_0x2d5706(383)]; _0x3233a0 < _0x28d235; _0x3233a0++) {
                _0x448770[_0x776372[_0x3233a0]] = _0x3f1284;
            }
            ;
            var _0x297394 = [
                'self::',
                _0x2d5706(425),
                'child::',
                _0x2d5706(426),
                _0x2d5706(427),
                _0x2d5706(428),
                'ancestor::',
                _0x2d5706(429),
                _0x2d5706(430),
                _0x2d5706(431),
                'following-sibling::',
                'preceding-sibling::'
            ];
            for (var _0x3233a0 = 0, _0x28d235 = _0x297394[_0x2d5706(383)]; _0x3233a0 < _0x28d235; _0x3233a0++) {
                _0x448770[_0x297394[_0x3233a0]] = _0x33f027;
            }
            ;
            return _0x448770;
        }();
        function _0x1c6120(_0x11e2bc, _0x14de17, _0x447e77) {
            var _0x488673 = _0x2058;
            return _0x14de17[_0x488673(432)] = _0x447e77, _0x447e77(_0x11e2bc, _0x14de17);
        }
        function _0x48e938(_0x411a23, _0x3b5f99) {
            var _0xc732c5 = _0x2058, _0x30f065 = _0x411a23[_0xc732c5(321)](), _0x2c75de = ![], _0x1ac8cf = _0x410909(_0x411a23);
            if (_0x30f065 == '<') {
                if (_0x411a23[_0xc732c5(433)]('!--', !![]))
                    return _0x1c6120(_0x411a23, _0x3b5f99, _0x5ce290);
                if (_0x411a23['match'](_0xc732c5(434), ![]))
                    return _0x3b5f99['tokenize'] = _0x1316d1, _0xc732c5(435);
                if (_0x411a23[_0xc732c5(433)]('?', ![]))
                    return _0x1c6120(_0x411a23, _0x3b5f99, _0x37d2a1);
                var _0x5730bd = _0x411a23[_0xc732c5(436)]('/');
                _0x411a23['eatSpace']();
                var _0x23f6b9 = '', _0x32fa4c;
                while (_0x32fa4c = _0x411a23[_0xc732c5(436)](/[^\s\u00a0=<>\"\'\/?]/))
                    _0x23f6b9 += _0x32fa4c;
                return _0x1c6120(_0x411a23, _0x3b5f99, _0x4187ad(_0x23f6b9, _0x5730bd));
            } else {
                if (_0x30f065 == '{')
                    return _0x453252(_0x3b5f99, { 'type': _0xc732c5(437) }), null;
                else {
                    if (_0x30f065 == '}')
                        return _0x40819a(_0x3b5f99), null;
                    else {
                        if (_0x50d4d8(_0x3b5f99)) {
                            if (_0x30f065 == '>')
                                return 'tag';
                            else {
                                if (_0x30f065 == '/' && _0x411a23[_0xc732c5(436)]('>'))
                                    return _0x40819a(_0x3b5f99), _0xc732c5(435);
                                else
                                    return _0xc732c5(438);
                            }
                        } else {
                            if (/\d/[_0xc732c5(439)](_0x30f065))
                                return _0x411a23['match'](/^\d*(?:\.\d*)?(?:E[+\-]?\d+)?/), _0xc732c5(257);
                            else {
                                if (_0x30f065 === '(' && _0x411a23['eat'](':'))
                                    return _0x453252(_0x3b5f99, { 'type': _0xc732c5(276) }), _0x1c6120(_0x411a23, _0x3b5f99, _0x159bc2);
                                else {
                                    if (!_0x1ac8cf && (_0x30f065 === '"' || _0x30f065 === '\''))
                                        return _0x1c6120(_0x411a23, _0x3b5f99, _0x2df31d(_0x30f065));
                                    else {
                                        if (_0x30f065 === '$')
                                            return _0x1c6120(_0x411a23, _0x3b5f99, _0x5eb0cb);
                                        else {
                                            if (_0x30f065 === ':' && _0x411a23[_0xc732c5(436)]('='))
                                                return _0xc732c5(255);
                                            else {
                                                if (_0x30f065 === '(')
                                                    return _0x453252(_0x3b5f99, { 'type': _0xc732c5(440) }), null;
                                                else {
                                                    if (_0x30f065 === ')')
                                                        return _0x40819a(_0x3b5f99), null;
                                                    else {
                                                        if (_0x30f065 === '[')
                                                            return _0x453252(_0x3b5f99, { 'type': _0xc732c5(441) }), null;
                                                        else {
                                                            if (_0x30f065 === ']')
                                                                return _0x40819a(_0x3b5f99), null;
                                                            else {
                                                                var _0x1f5744 = _0x1bd989[_0xc732c5(442)](_0x30f065) && _0x1bd989[_0x30f065];
                                                                if (_0x1ac8cf && _0x30f065 === '"')
                                                                    while (_0x411a23['next']() !== '"') {
                                                                    }
                                                                if (_0x1ac8cf && _0x30f065 === '\'')
                                                                    while (_0x411a23['next']() !== '\'') {
                                                                    }
                                                                if (!_0x1f5744)
                                                                    _0x411a23['eatWhile'](/[\w\$_-]/);
                                                                var _0x101d88 = _0x411a23[_0xc732c5(436)](':');
                                                                !_0x411a23[_0xc732c5(436)](':') && _0x101d88 && _0x411a23[_0xc732c5(443)](/[\w\$_-]/);
                                                                _0x411a23[_0xc732c5(433)](/^[ \t]*\(/, ![]) && (_0x2c75de = !![]);
                                                                var _0x5c99e1 = _0x411a23[_0xc732c5(444)]();
                                                                _0x1f5744 = _0x1bd989[_0xc732c5(442)](_0x5c99e1) && _0x1bd989[_0x5c99e1];
                                                                if (_0x2c75de && !_0x1f5744)
                                                                    _0x1f5744 = {
                                                                        'type': _0xc732c5(445),
                                                                        'style': _0xc732c5(446)
                                                                    };
                                                                if (_0x5b0385(_0x3b5f99))
                                                                    return _0x40819a(_0x3b5f99), 'variable';
                                                                if (_0x5c99e1 == _0xc732c5(447) || _0x5c99e1 == _0xc732c5(268) || _0x1f5744[_0xc732c5(366)] == _0xc732c5(259))
                                                                    _0x453252(_0x3b5f99, { 'type': _0xc732c5(448) });
                                                                return _0x1f5744 ? _0x1f5744[_0xc732c5(449)] : 'variable';
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        function _0x159bc2(_0x4b09e4, _0x10e7bb) {
            var _0x360e56 = _0x2058, _0x1bc3d6 = ![], _0x1e9b21 = ![], _0x1ffe68 = 0, _0x3c81b9;
            while (_0x3c81b9 = _0x4b09e4['next']()) {
                if (_0x3c81b9 == ')' && _0x1bc3d6) {
                    if (_0x1ffe68 > 0)
                        _0x1ffe68--;
                    else {
                        _0x40819a(_0x10e7bb);
                        break;
                    }
                } else
                    _0x3c81b9 == ':' && _0x1e9b21 && _0x1ffe68++;
                _0x1bc3d6 = _0x3c81b9 == ':', _0x1e9b21 = _0x3c81b9 == '(';
            }
            return _0x360e56(276);
        }
        function _0x2df31d(_0x2b5001, _0x525ac8) {
            return function (_0x488520, _0x48b039) {
                var _0xce0833 = _0x2058, _0x5d6419;
                if (_0x2b397e(_0x48b039) && _0x488520['current']() == _0x2b5001) {
                    _0x40819a(_0x48b039);
                    if (_0x525ac8)
                        _0x48b039[_0xce0833(432)] = _0x525ac8;
                    return _0xce0833(450);
                }
                _0x453252(_0x48b039, {
                    'type': _0xce0833(450),
                    'name': _0x2b5001,
                    'tokenize': _0x2df31d(_0x2b5001, _0x525ac8)
                });
                if (_0x488520[_0xce0833(433)]('{', ![]) && _0x2d0a2d(_0x48b039))
                    return _0x48b039['tokenize'] = _0x48e938, _0xce0833(450);
                while (_0x5d6419 = _0x488520[_0xce0833(321)]()) {
                    if (_0x5d6419 == _0x2b5001) {
                        _0x40819a(_0x48b039);
                        if (_0x525ac8)
                            _0x48b039[_0xce0833(432)] = _0x525ac8;
                        break;
                    } else {
                        if (_0x488520[_0xce0833(433)]('{', ![]) && _0x2d0a2d(_0x48b039))
                            return _0x48b039['tokenize'] = _0x48e938, _0xce0833(450);
                    }
                }
                return _0xce0833(450);
            };
        }
        function _0x5eb0cb(_0x10510c, _0x1974aa) {
            var _0x1fdf1c = _0x2058, _0x1cef7d = /[\w\$_-]/;
            if (_0x10510c[_0x1fdf1c(436)]('"')) {
                while (_0x10510c[_0x1fdf1c(321)]() !== '"') {
                }
                ;
                _0x10510c['eat'](':');
            } else {
                _0x10510c[_0x1fdf1c(443)](_0x1cef7d);
                if (!_0x10510c['match'](':=', ![]))
                    _0x10510c['eat'](':');
            }
            return _0x10510c[_0x1fdf1c(443)](_0x1cef7d), _0x1974aa[_0x1fdf1c(432)] = _0x48e938, _0x1fdf1c(438);
        }
        function _0x4187ad(_0x3229bb, _0x137c2e) {
            return function (_0x8e69b0, _0x5ba7dd) {
                var _0xc9e67f = _0x2058;
                _0x8e69b0[_0xc9e67f(451)]();
                if (_0x137c2e && _0x8e69b0[_0xc9e67f(436)]('>'))
                    return _0x40819a(_0x5ba7dd), _0x5ba7dd['tokenize'] = _0x48e938, _0xc9e67f(435);
                if (!_0x8e69b0[_0xc9e67f(436)]('/'))
                    _0x453252(_0x5ba7dd, {
                        'type': _0xc9e67f(435),
                        'name': _0x3229bb,
                        'tokenize': _0x48e938
                    });
                if (!_0x8e69b0['eat']('>'))
                    return _0x5ba7dd[_0xc9e67f(432)] = _0x35e8ee, _0xc9e67f(435);
                else
                    _0x5ba7dd[_0xc9e67f(432)] = _0x48e938;
                return _0xc9e67f(435);
            };
        }
        function _0x35e8ee(_0x4bba0d, _0x106a0d) {
            var _0x3d1e1a = _0x2058, _0x32d897 = _0x4bba0d[_0x3d1e1a(321)]();
            if (_0x32d897 == '/' && _0x4bba0d['eat']('>')) {
                if (_0x2d0a2d(_0x106a0d))
                    _0x40819a(_0x106a0d);
                if (_0x50d4d8(_0x106a0d))
                    _0x40819a(_0x106a0d);
                return _0x3d1e1a(435);
            }
            if (_0x32d897 == '>') {
                if (_0x2d0a2d(_0x106a0d))
                    _0x40819a(_0x106a0d);
                return 'tag';
            }
            if (_0x32d897 == '=')
                return null;
            if (_0x32d897 == '"' || _0x32d897 == '\'')
                return _0x1c6120(_0x4bba0d, _0x106a0d, _0x2df31d(_0x32d897, _0x35e8ee));
            if (!_0x2d0a2d(_0x106a0d))
                _0x453252(_0x106a0d, {
                    'type': 'attribute',
                    'tokenize': _0x35e8ee
                });
            return _0x4bba0d[_0x3d1e1a(436)](/[a-zA-Z_:]/), _0x4bba0d['eatWhile'](/[-a-zA-Z0-9_:.]/), _0x4bba0d['eatSpace'](), (_0x4bba0d[_0x3d1e1a(433)]('>', ![]) || _0x4bba0d[_0x3d1e1a(433)]('/', ![])) && (_0x40819a(_0x106a0d), _0x106a0d[_0x3d1e1a(432)] = _0x48e938), _0x3d1e1a(268);
        }
        function _0x5ce290(_0x2f0e68, _0x4261b5) {
            var _0x5921d1 = _0x2058, _0x3a4c2b;
            while (_0x3a4c2b = _0x2f0e68['next']()) {
                if (_0x3a4c2b == '-' && _0x2f0e68[_0x5921d1(433)]('->', !![]))
                    return _0x4261b5[_0x5921d1(432)] = _0x48e938, 'comment';
            }
        }
        function _0x1316d1(_0x4a9948, _0xa10030) {
            var _0x4f27cb = _0x2058, _0x2ebb96;
            while (_0x2ebb96 = _0x4a9948[_0x4f27cb(321)]()) {
                if (_0x2ebb96 == ']' && _0x4a9948['match'](']', !![]))
                    return _0xa10030[_0x4f27cb(432)] = _0x48e938, _0x4f27cb(276);
            }
        }
        function _0x37d2a1(_0x6cd515, _0x18adb0) {
            var _0x395c8b = _0x2058, _0x516674;
            while (_0x516674 = _0x6cd515[_0x395c8b(321)]()) {
                if (_0x516674 == '?' && _0x6cd515[_0x395c8b(433)]('>', !![]))
                    return _0x18adb0[_0x395c8b(432)] = _0x48e938, 'comment meta';
            }
        }
        function _0x50d4d8(_0x1c97ff) {
            var _0x454996 = _0x2058;
            return _0x40df43(_0x1c97ff, _0x454996(435));
        }
        function _0x2d0a2d(_0x2b7249) {
            var _0x1abdc3 = _0x2058;
            return _0x40df43(_0x2b7249, _0x1abdc3(268));
        }
        function _0x5b0385(_0x27f549) {
            var _0x9d2cba = _0x2058;
            return _0x40df43(_0x27f549, _0x9d2cba(448));
        }
        function _0x2b397e(_0x543336) {
            var _0x4f9ac2 = _0x2058;
            return _0x40df43(_0x543336, _0x4f9ac2(450));
        }
        function _0x410909(_0x3a7002) {
            var _0xf77129 = _0x2058;
            if (_0x3a7002[_0xf77129(444)]() === '"')
                return _0x3a7002[_0xf77129(433)](/^[^\"]+\"\:/, ![]);
            else {
                if (_0x3a7002['current']() === '\'')
                    return _0x3a7002[_0xf77129(433)](/^[^\"]+\'\:/, ![]);
                else
                    return ![];
            }
        }
        function _0x40df43(_0xc303a7, _0x1d3d59) {
            var _0x2d2215 = _0x2058;
            return _0xc303a7[_0x2d2215(452)][_0x2d2215(383)] && _0xc303a7['stack'][_0xc303a7[_0x2d2215(452)][_0x2d2215(383)] - 1][_0x2d2215(366)] == _0x1d3d59;
        }
        function _0x453252(_0x16743d, _0x494daf) {
            var _0x270769 = _0x2058;
            _0x16743d[_0x270769(452)]['push'](_0x494daf);
        }
        function _0x40819a(_0xaef18e) {
            var _0x1efd73 = _0x2058;
            _0xaef18e[_0x1efd73(452)][_0x1efd73(453)]();
            var _0x54c6bc = _0xaef18e[_0x1efd73(452)][_0x1efd73(383)] && _0xaef18e[_0x1efd73(452)][_0xaef18e[_0x1efd73(452)][_0x1efd73(383)] - 1]['tokenize'];
            _0xaef18e[_0x1efd73(432)] = _0x54c6bc || _0x48e938;
        }
        return {
            'startState': function () {
                return {
                    'tokenize': _0x48e938,
                    'cc': [],
                    'stack': []
                };
            },
            'token': function (_0x4fb48e, _0x442743) {
                var _0x4cec78 = _0x2058;
                if (_0x4fb48e[_0x4cec78(451)]())
                    return null;
                var _0x1139eb = _0x442743['tokenize'](_0x4fb48e, _0x442743);
                return _0x1139eb;
            },
            'blockCommentStart': '(:',
            'blockCommentEnd': ':)'
        };
    }), _0x24bc6d['defineMIME']('application/xquery', _0x67322b(254));
}));