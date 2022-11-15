(function (_0x2156e9) {
    var _0x2b1c3e = _0x2a92;
    if (typeof exports == 'object' && typeof module == _0x2b1c3e(377))
        _0x2156e9(require(_0x2b1c3e(378)));
    else {
        if (typeof define == _0x2b1c3e(379) && define[_0x2b1c3e(380)])
            define(['../../lib/codemirror'], _0x2156e9);
        else
            _0x2156e9(CodeMirror);
    }
}(function (_0x518dcf) {
    'use strict';
    var _0x480b63 = _0x2a92;
    _0x518dcf[_0x480b63(381)]('julia', function (_0x35809c, _0x29412d) {
        var _0x42767b = _0x480b63;
        function _0x5882b5(_0x1d1764, _0xec501d) {
            var _0x586759 = _0x2a92;
            return typeof _0xec501d === _0x586759(382) && (_0xec501d = '\\b'), new RegExp('^((' + _0x1d1764[_0x586759(383)](')|(') + '))' + _0xec501d);
        }
        var _0xf4094f = _0x42767b(384), _0x3627c5 = _0x42767b(385), _0x2ba5a3 = _0x42767b(386), _0x3aa0c3 = _0x42767b(387), _0x4a9017 = _0x29412d[_0x42767b(388)] || _0x5882b5([
                '[<>]:',
                _0x42767b(389),
                _0x42767b(390),
                _0x42767b(391),
                '=>',
                '->',
                _0x42767b(392),
                _0x42767b(393),
                '\\?',
                '\\$',
                '~',
                ':',
                _0x42767b(394),
                '\\u2208',
                '\\u2209',
                '\\u220B',
                _0x42767b(395),
                _0x42767b(396),
                '\\u221A',
                _0x42767b(397),
                _0x42767b(398),
                '\\u222A',
                _0x42767b(399),
                _0x42767b(400),
                _0x42767b(401),
                _0x42767b(402),
                _0x42767b(403),
                _0x42767b(404),
                '\\u22C5',
                _0x42767b(405)
            ], ''), _0x4a6186 = _0x29412d['delimiters'] || /^[;,()[\]{}]/, _0x522768 = _0x29412d[_0x42767b(406)] || /^[_A-Za-z\u00A1-\u2217\u2219-\uFFFF][\w\u00A1-\u2217\u2219-\uFFFF]*!*/, _0x5cdbe5 = _0x5882b5([
                _0xf4094f,
                _0x3627c5,
                _0x2ba5a3,
                _0x3aa0c3
            ], '\''), _0x113181 = [
                'begin',
                'function',
                'type',
                'struct',
                _0x42767b(407),
                _0x42767b(408),
                'macro',
                _0x42767b(409),
                'while',
                'quote',
                'if',
                _0x42767b(410),
                _0x42767b(411),
                _0x42767b(412),
                _0x42767b(413),
                _0x42767b(414),
                'do'
            ], _0x19c3e5 = [
                _0x42767b(415),
                _0x42767b(410),
                _0x42767b(411),
                _0x42767b(414),
                _0x42767b(413)
            ], _0x14b023 = [
                'if',
                _0x42767b(410),
                'elseif',
                'while',
                'for',
                _0x42767b(416),
                _0x42767b(408),
                _0x42767b(415),
                'do',
                _0x42767b(412),
                _0x42767b(414),
                'finally',
                _0x42767b(417),
                _0x42767b(418),
                _0x42767b(419),
                _0x42767b(420),
                _0x42767b(421),
                _0x42767b(422),
                _0x42767b(423),
                _0x42767b(424),
                _0x42767b(425),
                _0x42767b(426),
                'function',
                _0x42767b(427),
                _0x42767b(428),
                _0x42767b(429),
                _0x42767b(430),
                _0x42767b(431),
                _0x42767b(432),
                _0x42767b(433),
                _0x42767b(407),
                _0x42767b(434),
                _0x42767b(435),
                _0x42767b(436),
                'primitive',
                _0x42767b(437)
            ], _0x32dee6 = [
                _0x42767b(438),
                _0x42767b(439),
                _0x42767b(440),
                _0x42767b(441),
                _0x42767b(442)
            ];
        _0x518dcf[_0x42767b(443)](_0x42767b(444), 'julia', _0x14b023['concat'](_0x32dee6));
        var _0xd192d = _0x5882b5(_0x113181), _0x1728a5 = _0x5882b5(_0x19c3e5), _0x388aa4 = _0x5882b5(_0x14b023), _0x419c9a = _0x5882b5(_0x32dee6), _0x183cba = /^@[_A-Za-z][\w]*/, _0x3a7e98 = /^:[_A-Za-z\u00A1-\uFFFF][\w\u00A1-\uFFFF]*!*/, _0x1bc1ce = /^(`|([_A-Za-z\u00A1-\uFFFF]*"("")?))/;
        function _0x4ecfae(_0x4d2837) {
            return _0x4d2837['nestedArrays'] > 0;
        }
        function _0x1e0d82(_0x48d151) {
            var _0x2564f1 = _0x42767b;
            return _0x48d151[_0x2564f1(445)] > 0;
        }
        function _0x3a29e6(_0x1ef835, _0x11822e) {
            var _0x288fc5 = _0x42767b;
            typeof _0x11822e === _0x288fc5(382) && (_0x11822e = 0);
            if (_0x1ef835[_0x288fc5(446)][_0x288fc5(447)] <= _0x11822e)
                return null;
            return _0x1ef835['scopes'][_0x1ef835['scopes'][_0x288fc5(447)] - (_0x11822e + 1)];
        }
        function _0x42dd10(_0x2618b1, _0x1c442b) {
            var _0x2f4bb7 = _0x42767b;
            if (_0x2618b1[_0x2f4bb7(448)]('#=', ![]))
                return _0x1c442b['tokenize'] = _0x5143b1, _0x1c442b[_0x2f4bb7(449)](_0x2618b1, _0x1c442b);
            var _0x435061 = _0x1c442b[_0x2f4bb7(450)];
            _0x2618b1[_0x2f4bb7(451)]() && (_0x435061 = ![]);
            _0x1c442b['leavingExpr'] = ![];
            if (_0x435061) {
                if (_0x2618b1[_0x2f4bb7(448)](/^'+/))
                    return _0x2f4bb7(452);
            }
            if (_0x2618b1[_0x2f4bb7(448)](/\.{4,}/))
                return _0x2f4bb7(453);
            else {
                if (_0x2618b1[_0x2f4bb7(448)](/\.{1,3}/))
                    return _0x2f4bb7(452);
            }
            if (_0x2618b1[_0x2f4bb7(454)]())
                return null;
            var _0x794ede = _0x2618b1['peek']();
            if (_0x794ede === '#')
                return _0x2618b1[_0x2f4bb7(455)](), _0x2f4bb7(456);
            _0x794ede === '[' && (_0x1c442b[_0x2f4bb7(446)][_0x2f4bb7(457)]('['), _0x1c442b[_0x2f4bb7(458)]++);
            _0x794ede === '(' && (_0x1c442b[_0x2f4bb7(446)][_0x2f4bb7(457)]('('), _0x1c442b[_0x2f4bb7(445)]++);
            if (_0x4ecfae(_0x1c442b) && _0x794ede === ']') {
                while (_0x1c442b['scopes'][_0x2f4bb7(447)] && _0x3a29e6(_0x1c442b) !== '[') {
                    _0x1c442b['scopes'][_0x2f4bb7(459)]();
                }
                _0x1c442b[_0x2f4bb7(446)]['pop'](), _0x1c442b[_0x2f4bb7(458)]--, _0x1c442b['leavingExpr'] = !![];
            }
            if (_0x1e0d82(_0x1c442b) && _0x794ede === ')') {
                while (_0x1c442b[_0x2f4bb7(446)][_0x2f4bb7(447)] && _0x3a29e6(_0x1c442b) !== '(') {
                    _0x1c442b['scopes'][_0x2f4bb7(459)]();
                }
                _0x1c442b[_0x2f4bb7(446)][_0x2f4bb7(459)](), _0x1c442b[_0x2f4bb7(445)]--, _0x1c442b['leavingExpr'] = !![];
            }
            if (_0x4ecfae(_0x1c442b)) {
                if (_0x1c442b[_0x2f4bb7(460)] == _0x2f4bb7(415) && _0x2618b1[_0x2f4bb7(448)](':'))
                    return _0x2f4bb7(452);
                if (_0x2618b1[_0x2f4bb7(448)]('end'))
                    return _0x2f4bb7(461);
            }
            var _0x25ae6d;
            (_0x25ae6d = _0x2618b1[_0x2f4bb7(448)](_0xd192d, ![])) && _0x1c442b[_0x2f4bb7(446)][_0x2f4bb7(457)](_0x25ae6d[0]);
            _0x2618b1[_0x2f4bb7(448)](_0x1728a5, ![]) && _0x1c442b[_0x2f4bb7(446)][_0x2f4bb7(459)]();
            if (_0x2618b1['match'](/^::(?![:\$])/))
                return _0x1c442b[_0x2f4bb7(449)] = _0x558445, _0x1c442b[_0x2f4bb7(449)](_0x2618b1, _0x1c442b);
            if (!_0x435061 && _0x2618b1['match'](_0x3a7e98) || _0x2618b1[_0x2f4bb7(448)](/:([<>]:|<<=?|>>>?=?|->|\/\/|\.{2,3}|[\.\\%*+\-<>!\/^|&]=?|[~\?\$])/))
                return _0x2f4bb7(462);
            if (_0x2618b1[_0x2f4bb7(448)](_0x4a9017))
                return _0x2f4bb7(452);
            if (_0x2618b1[_0x2f4bb7(448)](/^\.?\d/, ![])) {
                var _0x212f11 = RegExp(/^im\b/), _0x1142c4 = ![];
                _0x2618b1[_0x2f4bb7(448)](/^0x\.[0-9a-f_]+p[\+\-]?[_\d]+/i) && (_0x1142c4 = !![]);
                _0x2618b1['match'](/^0x[0-9a-f_]+/i) && (_0x1142c4 = !![]);
                _0x2618b1[_0x2f4bb7(448)](/^0b[01_]+/i) && (_0x1142c4 = !![]);
                _0x2618b1[_0x2f4bb7(448)](/^0o[0-7_]+/i) && (_0x1142c4 = !![]);
                _0x2618b1[_0x2f4bb7(448)](/^(?:(?:\d[_\d]*)?\.(?!\.)(?:\d[_\d]*)?|\d[_\d]*\.(?!\.)(?:\d[_\d]*))?([Eef][\+\-]?[_\d]+)?/i) && (_0x1142c4 = !![]);
                _0x2618b1[_0x2f4bb7(448)](/^\d[_\d]*(e[\+\-]?\d+)?/i) && (_0x1142c4 = !![]);
                if (_0x1142c4)
                    return _0x2618b1[_0x2f4bb7(448)](_0x212f11), _0x1c442b[_0x2f4bb7(450)] = !![], _0x2f4bb7(461);
            }
            if (_0x2618b1['match']('\''))
                return _0x1c442b[_0x2f4bb7(449)] = _0x115ccd, _0x1c442b[_0x2f4bb7(449)](_0x2618b1, _0x1c442b);
            if (_0x2618b1[_0x2f4bb7(448)](_0x1bc1ce))
                return _0x1c442b[_0x2f4bb7(449)] = _0x5777ae(_0x2618b1[_0x2f4bb7(463)]()), _0x1c442b['tokenize'](_0x2618b1, _0x1c442b);
            if (_0x2618b1[_0x2f4bb7(448)](_0x183cba))
                return 'meta';
            if (_0x2618b1[_0x2f4bb7(448)](_0x4a6186))
                return null;
            if (_0x2618b1[_0x2f4bb7(448)](_0x388aa4))
                return 'keyword';
            if (_0x2618b1[_0x2f4bb7(448)](_0x419c9a))
                return _0x2f4bb7(462);
            var _0x33d8ca = _0x1c442b[_0x2f4bb7(464)] || _0x1c442b[_0x2f4bb7(460)] == _0x2f4bb7(379) || _0x1c442b[_0x2f4bb7(460)] == _0x2f4bb7(428) || _0x1c442b[_0x2f4bb7(460)] == 'type' || _0x1c442b[_0x2f4bb7(460)] == 'struct' || _0x1c442b[_0x2f4bb7(460)] == 'immutable';
            if (_0x2618b1['match'](_0x522768)) {
                if (_0x33d8ca) {
                    if (_0x2618b1[_0x2f4bb7(465)]() === '.')
                        return _0x1c442b[_0x2f4bb7(464)] = !![], _0x2f4bb7(466);
                    return _0x1c442b['isDefinition'] = ![], _0x2f4bb7(467);
                }
                return _0x1c442b['leavingExpr'] = !![], 'variable';
            }
            return _0x2618b1[_0x2f4bb7(468)](), _0x2f4bb7(453);
        }
        function _0x558445(_0x45a5c8, _0x26d4d0) {
            var _0x42984f = _0x42767b;
            _0x45a5c8[_0x42984f(448)](/.*?(?=[,;{}()=\s]|$)/);
            if (_0x45a5c8[_0x42984f(448)]('{'))
                _0x26d4d0[_0x42984f(469)]++;
            else
                _0x45a5c8[_0x42984f(448)]('}') && _0x26d4d0[_0x42984f(469)] > 0 && _0x26d4d0[_0x42984f(469)]--;
            if (_0x26d4d0[_0x42984f(469)] > 0)
                _0x45a5c8[_0x42984f(448)](/.*?(?={|})/) || _0x45a5c8[_0x42984f(468)]();
            else
                _0x26d4d0[_0x42984f(469)] == 0 && (_0x26d4d0['tokenize'] = _0x42dd10);
            return _0x42984f(462);
        }
        function _0x5143b1(_0x1d32ef, _0x4112fd) {
            var _0x2e18fb = _0x42767b;
            _0x1d32ef['match']('#=') && _0x4112fd[_0x2e18fb(470)]++;
            !_0x1d32ef['match'](/.*?(?=(#=|=#))/) && _0x1d32ef[_0x2e18fb(455)]();
            if (_0x1d32ef[_0x2e18fb(448)]('=#')) {
                _0x4112fd[_0x2e18fb(470)]--;
                if (_0x4112fd[_0x2e18fb(470)] == 0)
                    _0x4112fd[_0x2e18fb(449)] = _0x42dd10;
            }
            return _0x2e18fb(456);
        }
        function _0x115ccd(_0x533a37, _0x77e2fa) {
            var _0x18eed5 = _0x42767b, _0x47ffbb = ![], _0x3e065f;
            if (_0x533a37[_0x18eed5(448)](_0x5cdbe5))
                _0x47ffbb = !![];
            else {
                if (_0x3e065f = _0x533a37[_0x18eed5(448)](/\\u([a-f0-9]{1,4})(?=')/i)) {
                    var _0x55c5c1 = parseInt(_0x3e065f[1], 16);
                    (_0x55c5c1 <= 55295 || _0x55c5c1 >= 57344) && (_0x47ffbb = !![], _0x533a37[_0x18eed5(468)]());
                } else {
                    if (_0x3e065f = _0x533a37[_0x18eed5(448)](/\\U([A-Fa-f0-9]{5,8})(?=')/)) {
                        var _0x55c5c1 = parseInt(_0x3e065f[1], 16);
                        _0x55c5c1 <= 1114111 && (_0x47ffbb = !![], _0x533a37[_0x18eed5(468)]());
                    }
                }
            }
            if (_0x47ffbb)
                return _0x77e2fa['leavingExpr'] = !![], _0x77e2fa['tokenize'] = _0x42dd10, _0x18eed5(471);
            return !_0x533a37[_0x18eed5(448)](/^[^']+(?=')/) && _0x533a37[_0x18eed5(455)](), _0x533a37[_0x18eed5(448)]('\'') && (_0x77e2fa[_0x18eed5(449)] = _0x42dd10), _0x18eed5(453);
        }
        function _0x5777ae(_0x9ae396) {
            var _0x225e8f = _0x42767b;
            if (_0x9ae396[_0x225e8f(472)](-3) === _0x225e8f(473))
                _0x9ae396 = '"""';
            else
                _0x9ae396['substr'](-1) === '"' && (_0x9ae396 = '"');
            function _0x51382d(_0x491f7f, _0x16ed1a) {
                var _0x1f49a2 = _0x225e8f;
                if (_0x491f7f[_0x1f49a2(474)]('\\'))
                    _0x491f7f['next']();
                else {
                    if (_0x491f7f[_0x1f49a2(448)](_0x9ae396))
                        return _0x16ed1a['tokenize'] = _0x42dd10, _0x16ed1a['leavingExpr'] = !![], _0x1f49a2(471);
                    else
                        _0x491f7f['eat'](/[`"]/);
                }
                return _0x491f7f[_0x1f49a2(475)](/[^\\`"]/), _0x1f49a2(471);
            }
            return _0x51382d;
        }
        var _0x4f1ba9 = {
            'startState': function () {
                return {
                    'tokenize': _0x42dd10,
                    'scopes': [],
                    'lastToken': null,
                    'leavingExpr': ![],
                    'isDefinition': ![],
                    'nestedArrays': 0,
                    'nestedComments': 0,
                    'nestedGenerators': 0,
                    'nestedParameters': 0,
                    'firstParenPos': -1
                };
            },
            'token': function (_0x3f6a53, _0x4387bf) {
                var _0xef72ab = _0x42767b, _0x35b9f4 = _0x4387bf[_0xef72ab(449)](_0x3f6a53, _0x4387bf), _0x454230 = _0x3f6a53[_0xef72ab(463)]();
                return _0x454230 && _0x35b9f4 && (_0x4387bf['lastToken'] = _0x454230), _0x35b9f4;
            },
            'indent': function (_0x571eff, _0x4f9813) {
                var _0xfd1b33 = _0x42767b, _0x4d60ee = 0;
                return (_0x4f9813 === ']' || _0x4f9813 === ')' || /^end\b/[_0xfd1b33(476)](_0x4f9813) || /^else/[_0xfd1b33(476)](_0x4f9813) || /^catch\b/[_0xfd1b33(476)](_0x4f9813) || /^elseif\b/[_0xfd1b33(476)](_0x4f9813) || /^finally/[_0xfd1b33(476)](_0x4f9813)) && (_0x4d60ee = -1), (_0x571eff[_0xfd1b33(446)][_0xfd1b33(447)] + _0x4d60ee) * _0x35809c['indentUnit'];
            },
            'electricInput': /\b(end|else|catch|finally)\b/,
            'blockCommentStart': '#=',
            'blockCommentEnd': '=#',
            'lineComment': '#',
            'closeBrackets': _0x42767b(477),
            'fold': _0x42767b(478)
        };
        return _0x4f1ba9;
    }), _0x518dcf['defineMIME'](_0x480b63(479), _0x480b63(480));
}));