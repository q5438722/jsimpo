(function (_0x5e9116) {
    var _0x2b9e36 = _0x3f16;
    if (typeof exports == _0x2b9e36(370) && typeof module == _0x2b9e36(370))
        _0x5e9116(require(_0x2b9e36(371)));
    else {
        if (typeof define == 'function' && define[_0x2b9e36(372)])
            define([_0x2b9e36(371)], _0x5e9116);
        else
            _0x5e9116(CodeMirror);
    }
}(function (_0x44266d) {
    'use strict';
    var _0x4ce6cd = _0x3f16;
    _0x44266d[_0x4ce6cd(373)](_0x4ce6cd(374), function (_0x37e903, _0x1592db) {
        var _0x5e89f8 = _0x4ce6cd, _0x1123cf = _0x37e903[_0x5e89f8(375)], _0x55ce1f = _0x1592db['keywords'] || {}, _0x28617b = _0x1592db[_0x5e89f8(376)] || {}, _0x5b6d09 = _0x1592db[_0x5e89f8(377)] || {}, _0x15fcff = _0x1592db['multiLineStrings'], _0x2adc45 = _0x1592db[_0x5e89f8(378)] !== ![], _0x4ff1cb = /[\|]/, _0x1bd6b7;
        function _0x2fef78(_0x220173, _0x196bef) {
            var _0x59a935 = _0x5e89f8, _0x324fa4 = _0x220173[_0x59a935(379)]();
            if (_0x324fa4 == '"' || _0x324fa4 == '\'')
                return _0x196bef[_0x59a935(380)] = _0x4e7ef0(_0x324fa4), _0x196bef['tokenize'](_0x220173, _0x196bef);
            if (/[:=]/[_0x59a935(381)](_0x324fa4))
                return _0x1bd6b7 = _0x324fa4, _0x59a935(382);
            if (_0x324fa4 == '#')
                return _0x220173[_0x59a935(383)](), 'comment';
            if (/\d/['test'](_0x324fa4))
                return _0x220173['eatWhile'](/[\w\.]/), _0x59a935(384);
            if (_0x4ff1cb[_0x59a935(381)](_0x324fa4))
                return _0x220173['eatWhile'](_0x4ff1cb), _0x59a935(385);
            if (_0x324fa4 == '[')
                return _0x220173[_0x59a935(386)](/[\w_\]]/), _0x59a935(387);
            _0x220173[_0x59a935(386)](/[\w\$_]/);
            var _0x30a944 = _0x220173[_0x59a935(388)]();
            if (_0x55ce1f[_0x59a935(389)](_0x30a944))
                return _0x59a935(390);
            if (_0x28617b['propertyIsEnumerable'](_0x30a944))
                return _0x59a935(391);
            if (_0x5b6d09['propertyIsEnumerable'](_0x30a944))
                return _0x59a935(392);
            return 'variable';
        }
        function _0x4e7ef0(_0x49d6d2) {
            return function (_0x5c8433, _0x1e13de) {
                var _0x2bb91f = _0x3f16, _0x48f71d = ![], _0x2ca4fc, _0x56808f = ![];
                while ((_0x2ca4fc = _0x5c8433[_0x2bb91f(379)]()) != null) {
                    if (_0x2ca4fc == _0x49d6d2 && !_0x48f71d) {
                        var _0x1e5747 = _0x5c8433[_0x2bb91f(393)]();
                        if (_0x1e5747) {
                            _0x1e5747 = _0x1e5747[_0x2bb91f(394)]();
                            if (_0x1e5747 == 'b' || _0x1e5747 == 'h' || _0x1e5747 == 'o')
                                _0x5c8433['next']();
                        }
                        _0x56808f = !![];
                        break;
                    }
                    _0x48f71d = !_0x48f71d && _0x2ca4fc == '\\';
                }
                if (_0x56808f || !(_0x48f71d || _0x15fcff))
                    _0x1e13de[_0x2bb91f(380)] = null;
                return _0x2bb91f(395);
            };
        }
        function _0xcdc69c(_0x505b6b, _0x255e28, _0x327cdc, _0x202cd4, _0x13c790) {
            var _0x36da68 = _0x5e89f8;
            this[_0x36da68(396)] = _0x505b6b, this[_0x36da68(397)] = _0x255e28, this[_0x36da68(398)] = _0x327cdc, this[_0x36da68(399)] = _0x202cd4, this[_0x36da68(400)] = _0x13c790;
        }
        function _0x1cecda(_0x874fdd, _0x5987c6, _0x58edda) {
            var _0x3ade18 = _0x5e89f8, _0x363a52 = _0x874fdd['indented'];
            if (_0x874fdd[_0x3ade18(401)] && _0x874fdd[_0x3ade18(401)][_0x3ade18(398)] == _0x3ade18(402))
                _0x363a52 = _0x874fdd[_0x3ade18(401)][_0x3ade18(396)];
            return _0x874fdd[_0x3ade18(401)] = new _0xcdc69c(_0x363a52, _0x5987c6, _0x58edda, null, _0x874fdd[_0x3ade18(401)]);
        }
        function _0x5724d3(_0x4930dd) {
            var _0x5960c2 = _0x5e89f8, _0x2e8948 = _0x4930dd[_0x5960c2(401)][_0x5960c2(398)];
            if (_0x2e8948 == ')' || _0x2e8948 == ']' || _0x2e8948 == '}')
                _0x4930dd[_0x5960c2(396)] = _0x4930dd[_0x5960c2(401)][_0x5960c2(396)];
            return _0x4930dd['context'] = _0x4930dd['context'][_0x5960c2(400)];
        }
        return {
            'startState': function (_0x477211) {
                var _0x466a91 = _0x5e89f8;
                return {
                    'tokenize': null,
                    'context': new _0xcdc69c((_0x477211 || 0) - _0x1123cf, 0, _0x466a91(403), ![]),
                    'indented': 0,
                    'startOfLine': !![]
                };
            },
            'token': function (_0x1c0771, _0x4bc8a0) {
                var _0xf54fa0 = _0x5e89f8, _0x11995e = _0x4bc8a0[_0xf54fa0(401)];
                if (_0x1c0771[_0xf54fa0(404)]()) {
                    if (_0x11995e[_0xf54fa0(399)] == null)
                        _0x11995e['align'] = ![];
                    _0x4bc8a0['indented'] = _0x1c0771['indentation'](), _0x4bc8a0[_0xf54fa0(405)] = !![];
                }
                if (_0x1c0771[_0xf54fa0(406)]())
                    return null;
                _0x1bd6b7 = null;
                var _0x2dd0fb = (_0x4bc8a0[_0xf54fa0(380)] || _0x2fef78)(_0x1c0771, _0x4bc8a0);
                if (_0x2dd0fb == _0xf54fa0(407))
                    return _0x2dd0fb;
                if (_0x11995e[_0xf54fa0(399)] == null)
                    _0x11995e[_0xf54fa0(399)] = !![];
                if ((_0x1bd6b7 == ';' || _0x1bd6b7 == ':' || _0x1bd6b7 == ',') && _0x11995e[_0xf54fa0(398)] == 'statement')
                    _0x5724d3(_0x4bc8a0);
                else {
                    if (_0x1bd6b7 == '{')
                        _0x1cecda(_0x4bc8a0, _0x1c0771[_0xf54fa0(397)](), '}');
                    else {
                        if (_0x1bd6b7 == '[')
                            _0x1cecda(_0x4bc8a0, _0x1c0771['column'](), ']');
                        else {
                            if (_0x1bd6b7 == '(')
                                _0x1cecda(_0x4bc8a0, _0x1c0771[_0xf54fa0(397)](), ')');
                            else {
                                if (_0x1bd6b7 == '}') {
                                    while (_0x11995e['type'] == _0xf54fa0(402))
                                        _0x11995e = _0x5724d3(_0x4bc8a0);
                                    if (_0x11995e['type'] == '}')
                                        _0x11995e = _0x5724d3(_0x4bc8a0);
                                    while (_0x11995e[_0xf54fa0(398)] == 'statement')
                                        _0x11995e = _0x5724d3(_0x4bc8a0);
                                } else {
                                    if (_0x1bd6b7 == _0x11995e['type'])
                                        _0x5724d3(_0x4bc8a0);
                                    else {
                                        if (_0x2adc45 && ((_0x11995e[_0xf54fa0(398)] == '}' || _0x11995e[_0xf54fa0(398)] == _0xf54fa0(403)) && _0x1bd6b7 != ';' || _0x11995e[_0xf54fa0(398)] == _0xf54fa0(402) && _0x1bd6b7 == _0xf54fa0(408)))
                                            _0x1cecda(_0x4bc8a0, _0x1c0771[_0xf54fa0(397)](), _0xf54fa0(402));
                                    }
                                }
                            }
                        }
                    }
                }
                return _0x4bc8a0[_0xf54fa0(405)] = ![], _0x2dd0fb;
            },
            'electricChars': '{}',
            'lineComment': '#',
            'fold': _0x5e89f8(409)
        };
    });
    function _0x4b821d(_0x52076f) {
        var _0x2134f8 = _0x4ce6cd, _0x32bcf6 = {}, _0x1c0a0c = _0x52076f[_0x2134f8(410)](' ');
        for (var _0x2a9ea3 = 0; _0x2a9ea3 < _0x1c0a0c[_0x2134f8(411)]; ++_0x2a9ea3)
            _0x32bcf6[_0x1c0a0c[_0x2a9ea3]] = !![];
        return _0x32bcf6;
    }
    _0x44266d[_0x4ce6cd(412)](_0x4ce6cd(413), {
        'name': 'ttcn-cfg',
        'keywords': _0x4b821d(_0x4ce6cd(414) + _0x4ce6cd(415) + _0x4ce6cd(416) + _0x4ce6cd(417) + _0x4ce6cd(418) + _0x4ce6cd(419) + _0x4ce6cd(420)),
        'fileNCtrlMaskOptions': _0x4b821d(_0x4ce6cd(421) + _0x4ce6cd(422) + ' TTCN_DEFAULTOP TTCN_TESTCASE TTCN_ACTION' + _0x4ce6cd(423) + _0x4ce6cd(424) + ' EXECUTOR ERROR WARNING PORTEVENT TIMEROP' + _0x4ce6cd(425) + ' FUNCTION STATISTICS PARALLEL MATCHING DEBUG' + _0x4ce6cd(426) + _0x4ce6cd(427) + _0x4ce6cd(428) + _0x4ce6cd(429) + ' DEFAULTOP_UNQUALIFIED ERROR_UNQUALIFIED' + ' EXECUTOR_COMPONENT EXECUTOR_CONFIGDATA' + _0x4ce6cd(430) + _0x4ce6cd(431) + ' FUNCTION_RND FUNCTION_UNQUALIFIED' + _0x4ce6cd(432) + _0x4ce6cd(433) + _0x4ce6cd(434) + ' MATCHING_PCUNSUCC MATCHING_PMSUCCESS' + _0x4ce6cd(435) + ' MATCHING_TIMEOUT MATCHING_UNQUALIFIED' + _0x4ce6cd(436) + _0x4ce6cd(437) + _0x4ce6cd(438) + _0x4ce6cd(439) + _0x4ce6cd(440) + _0x4ce6cd(441) + _0x4ce6cd(442) + _0x4ce6cd(443) + _0x4ce6cd(444) + _0x4ce6cd(445) + _0x4ce6cd(446) + _0x4ce6cd(447) + _0x4ce6cd(448) + _0x4ce6cd(449) + _0x4ce6cd(450) + _0x4ce6cd(451) + _0x4ce6cd(452)),
        'externalCommands': _0x4b821d('BeginControlPart EndControlPart BeginTestCase' + ' EndTestCase'),
        'multiLineStrings': !![]
    });
}));