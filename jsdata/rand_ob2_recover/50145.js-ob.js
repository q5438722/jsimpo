(function (_0x2248b8) {
    var _0x2304c7 = _0x450c;
    if (typeof exports == _0x2304c7(168) && typeof module == _0x2304c7(168))
        _0x2248b8(require('../../lib/codemirror'));
    else {
        if (typeof define == 'function' && define[_0x2304c7(169)])
            define([_0x2304c7(170)], _0x2248b8);
        else
            _0x2248b8(CodeMirror);
    }
}(function (_0x27acd1) {
    'use strict';
    var _0x217d9e = _0x450c;
    _0x27acd1[_0x217d9e(171)]('ttcn-cfg', function (_0x3ea77a, _0x565483) {
        var _0x17ad97 = _0x217d9e, _0x410f4e = _0x3ea77a[_0x17ad97(172)], _0x55e0f5 = _0x565483[_0x17ad97(173)] || {}, _0x3a4685 = _0x565483[_0x17ad97(174)] || {}, _0x539be9 = _0x565483[_0x17ad97(175)] || {}, _0x2a0bb9 = _0x565483['multiLineStrings'], _0x3d4e32 = _0x565483[_0x17ad97(176)] !== ![], _0x484f51 = /[\|]/, _0x5272c0;
        function _0x5ceb0d(_0x1ff3bb, _0x4be0c3) {
            var _0x5264b1 = _0x17ad97, _0x268a9c = _0x1ff3bb[_0x5264b1(177)]();
            if (_0x268a9c == '"' || _0x268a9c == '\'')
                return _0x4be0c3[_0x5264b1(178)] = _0x545ec0(_0x268a9c), _0x4be0c3[_0x5264b1(178)](_0x1ff3bb, _0x4be0c3);
            if (/[:=]/[_0x5264b1(179)](_0x268a9c))
                return _0x5272c0 = _0x268a9c, _0x5264b1(180);
            if (_0x268a9c == '#')
                return _0x1ff3bb[_0x5264b1(181)](), _0x5264b1(182);
            if (/\d/[_0x5264b1(179)](_0x268a9c))
                return _0x1ff3bb[_0x5264b1(183)](/[\w\.]/), _0x5264b1(184);
            if (_0x484f51[_0x5264b1(179)](_0x268a9c))
                return _0x1ff3bb[_0x5264b1(183)](_0x484f51), _0x5264b1(185);
            if (_0x268a9c == '[')
                return _0x1ff3bb[_0x5264b1(183)](/[\w_\]]/), _0x5264b1(186);
            _0x1ff3bb[_0x5264b1(183)](/[\w\$_]/);
            var _0x5b4986 = _0x1ff3bb[_0x5264b1(187)]();
            if (_0x55e0f5['propertyIsEnumerable'](_0x5b4986))
                return _0x5264b1(188);
            if (_0x3a4685[_0x5264b1(189)](_0x5b4986))
                return 'negative fileNCtrlMaskOptions';
            if (_0x539be9['propertyIsEnumerable'](_0x5b4986))
                return _0x5264b1(190);
            return _0x5264b1(191);
        }
        function _0x545ec0(_0x128bae) {
            return function (_0x5d1ee6, _0x4e0d6e) {
                var _0x272061 = _0x450c, _0x3b9bfe = ![], _0x255f4d, _0x49d28a = ![];
                while ((_0x255f4d = _0x5d1ee6['next']()) != null) {
                    if (_0x255f4d == _0x128bae && !_0x3b9bfe) {
                        var _0x413a23 = _0x5d1ee6[_0x272061(192)]();
                        if (_0x413a23) {
                            _0x413a23 = _0x413a23[_0x272061(193)]();
                            if (_0x413a23 == 'b' || _0x413a23 == 'h' || _0x413a23 == 'o')
                                _0x5d1ee6[_0x272061(177)]();
                        }
                        _0x49d28a = !![];
                        break;
                    }
                    _0x3b9bfe = !_0x3b9bfe && _0x255f4d == '\\';
                }
                if (_0x49d28a || !(_0x3b9bfe || _0x2a0bb9))
                    _0x4e0d6e[_0x272061(178)] = null;
                return _0x272061(194);
            };
        }
        function _0x5d58c6(_0x997e57, _0x59c08e, _0x4a968a, _0x34c5f6, _0x18e98c) {
            var _0xcbfe86 = _0x17ad97;
            this['indented'] = _0x997e57, this['column'] = _0x59c08e, this[_0xcbfe86(195)] = _0x4a968a, this['align'] = _0x34c5f6, this[_0xcbfe86(196)] = _0x18e98c;
        }
        function _0x152d40(_0x143f14, _0x25f81f, _0x4d8a4f) {
            var _0x2edabe = _0x17ad97, _0x143bd5 = _0x143f14[_0x2edabe(197)];
            if (_0x143f14[_0x2edabe(198)] && _0x143f14[_0x2edabe(198)][_0x2edabe(195)] == _0x2edabe(199))
                _0x143bd5 = _0x143f14[_0x2edabe(198)][_0x2edabe(197)];
            return _0x143f14['context'] = new _0x5d58c6(_0x143bd5, _0x25f81f, _0x4d8a4f, null, _0x143f14[_0x2edabe(198)]);
        }
        function _0x32e318(_0x262ea9) {
            var _0x44a10f = _0x17ad97, _0x311dd0 = _0x262ea9[_0x44a10f(198)]['type'];
            if (_0x311dd0 == ')' || _0x311dd0 == ']' || _0x311dd0 == '}')
                _0x262ea9['indented'] = _0x262ea9['context'][_0x44a10f(197)];
            return _0x262ea9[_0x44a10f(198)] = _0x262ea9[_0x44a10f(198)][_0x44a10f(196)];
        }
        return {
            'startState': function (_0x22a2f9) {
                return {
                    'tokenize': null,
                    'context': new _0x5d58c6((_0x22a2f9 || 0) - _0x410f4e, 0, 'top', ![]),
                    'indented': 0,
                    'startOfLine': !![]
                };
            },
            'token': function (_0x33403c, _0x12b18d) {
                var _0x1ea80a = _0x17ad97, _0x325403 = _0x12b18d[_0x1ea80a(198)];
                if (_0x33403c[_0x1ea80a(200)]()) {
                    if (_0x325403[_0x1ea80a(201)] == null)
                        _0x325403['align'] = ![];
                    _0x12b18d[_0x1ea80a(197)] = _0x33403c[_0x1ea80a(202)](), _0x12b18d[_0x1ea80a(203)] = !![];
                }
                if (_0x33403c[_0x1ea80a(204)]())
                    return null;
                _0x5272c0 = null;
                var _0x986258 = (_0x12b18d['tokenize'] || _0x5ceb0d)(_0x33403c, _0x12b18d);
                if (_0x986258 == _0x1ea80a(182))
                    return _0x986258;
                if (_0x325403[_0x1ea80a(201)] == null)
                    _0x325403['align'] = !![];
                if ((_0x5272c0 == ';' || _0x5272c0 == ':' || _0x5272c0 == ',') && _0x325403['type'] == _0x1ea80a(199))
                    _0x32e318(_0x12b18d);
                else {
                    if (_0x5272c0 == '{')
                        _0x152d40(_0x12b18d, _0x33403c[_0x1ea80a(205)](), '}');
                    else {
                        if (_0x5272c0 == '[')
                            _0x152d40(_0x12b18d, _0x33403c['column'](), ']');
                        else {
                            if (_0x5272c0 == '(')
                                _0x152d40(_0x12b18d, _0x33403c[_0x1ea80a(205)](), ')');
                            else {
                                if (_0x5272c0 == '}') {
                                    while (_0x325403['type'] == 'statement')
                                        _0x325403 = _0x32e318(_0x12b18d);
                                    if (_0x325403[_0x1ea80a(195)] == '}')
                                        _0x325403 = _0x32e318(_0x12b18d);
                                    while (_0x325403[_0x1ea80a(195)] == _0x1ea80a(199))
                                        _0x325403 = _0x32e318(_0x12b18d);
                                } else {
                                    if (_0x5272c0 == _0x325403['type'])
                                        _0x32e318(_0x12b18d);
                                    else {
                                        if (_0x3d4e32 && ((_0x325403[_0x1ea80a(195)] == '}' || _0x325403[_0x1ea80a(195)] == _0x1ea80a(206)) && _0x5272c0 != ';' || _0x325403[_0x1ea80a(195)] == 'statement' && _0x5272c0 == _0x1ea80a(207)))
                                            _0x152d40(_0x12b18d, _0x33403c[_0x1ea80a(205)](), _0x1ea80a(199));
                                    }
                                }
                            }
                        }
                    }
                }
                return _0x12b18d['startOfLine'] = ![], _0x986258;
            },
            'electricChars': '{}',
            'lineComment': '#',
            'fold': 'brace'
        };
    });
    function _0x242316(_0x2d0e16) {
        var _0x255253 = _0x217d9e, _0x272422 = {}, _0x2a3fa7 = _0x2d0e16['split'](' ');
        for (var _0x1cce05 = 0; _0x1cce05 < _0x2a3fa7[_0x255253(208)]; ++_0x1cce05)
            _0x272422[_0x2a3fa7[_0x1cce05]] = !![];
        return _0x272422;
    }
    _0x27acd1['defineMIME'](_0x217d9e(209), {
        'name': _0x217d9e(210),
        'keywords': _0x242316(_0x217d9e(211) + ' TimeStampFormat LogEventTypes SourceInfoFormat' + _0x217d9e(212) + _0x217d9e(213) + ' Compact SubCategories Stack Single None Seconds' + _0x217d9e(214) + _0x217d9e(215)),
        'fileNCtrlMaskOptions': _0x242316(_0x217d9e(216) + _0x217d9e(217) + ' TTCN_DEFAULTOP TTCN_TESTCASE TTCN_ACTION' + _0x217d9e(218) + _0x217d9e(219) + _0x217d9e(220) + _0x217d9e(221) + _0x217d9e(222) + _0x217d9e(223) + _0x217d9e(224) + _0x217d9e(225) + ' DEFAULTOP_DEACTIVATE DEFAULTOP_EXIT' + ' DEFAULTOP_UNQUALIFIED ERROR_UNQUALIFIED' + _0x217d9e(226) + _0x217d9e(227) + _0x217d9e(228) + _0x217d9e(229) + ' MATCHING_DONE MATCHING_MCSUCCESS' + _0x217d9e(230) + _0x217d9e(231) + ' MATCHING_PCUNSUCC MATCHING_PMSUCCESS' + _0x217d9e(232) + _0x217d9e(233) + _0x217d9e(234) + _0x217d9e(235) + _0x217d9e(236) + _0x217d9e(237) + _0x217d9e(238) + ' PORTEVENT_MQUEUE PORTEVENT_PCIN' + _0x217d9e(239) + _0x217d9e(240) + _0x217d9e(241) + ' STATISTICS_UNQUALIFIED STATISTICS_VERDICT' + _0x217d9e(242) + ' TESTCASE_UNQUALIFIED TIMEROP_GUARD' + _0x217d9e(243) + _0x217d9e(244) + _0x217d9e(245) + _0x217d9e(246) + _0x217d9e(247)),
        'externalCommands': _0x242316(_0x217d9e(248) + _0x217d9e(249)),
        'multiLineStrings': !![]
    });
}));