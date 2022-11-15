(function (_0x475381) {
    if (typeof exports == 'object' && typeof module == 'object')
        _0x475381(require('../../lib/codemirror'));
    else {
        if (typeof define == 'function' && define['amd'])
            define(['../../lib/codemirror'], _0x475381);
        else
            _0x475381(CodeMirror);
    }
}(function (_0xfef778) {
    'use strict';
    _0xfef778['defineMode']('ttcn-cfg', function (_0x44ae2b, _0x17f690) {
        var _0x4d784d = _0x44ae2b['indentUnit'], _0x46bf7a = _0x17f690['keywords'] || {}, _0x1ff8b4 = _0x17f690['fileNCtrlMaskOptions'] || {}, _0x2e87d6 = _0x17f690['externalCommands'] || {}, _0x53923c = _0x17f690['multiLineStrings'], _0x11c2a0 = _0x17f690['indentStatements'] !== ![], _0x5948a8 = /[\|]/, _0x4a4864;
        function _0x5a866f(_0xecbc9b, _0x2b903c) {
            var _0x258a14 = _0xecbc9b['next']();
            if (_0x258a14 == '\x22' || _0x258a14 == '\x27')
                return _0x2b903c['tokenize'] = _0x4b902f(_0x258a14), _0x2b903c['tokenize'](_0xecbc9b, _0x2b903c);
            if (/[:=]/['test'](_0x258a14))
                return _0x4a4864 = _0x258a14, 'punctuation';
            if (_0x258a14 == '#')
                return _0xecbc9b['skipToEnd'](), 'comment';
            if (/\d/['test'](_0x258a14))
                return _0xecbc9b['eatWhile'](/[\w\.]/), 'number';
            if (_0x5948a8['test'](_0x258a14))
                return _0xecbc9b['eatWhile'](_0x5948a8), 'operator';
            if (_0x258a14 == '[')
                return _0xecbc9b['eatWhile'](/[\w_\]]/), 'number\x20sectionTitle';
            _0xecbc9b['eatWhile'](/[\w\$_]/);
            var _0x7cf554 = _0xecbc9b['current']();
            if (_0x46bf7a['propertyIsEnumerable'](_0x7cf554))
                return 'keyword';
            if (_0x1ff8b4['propertyIsEnumerable'](_0x7cf554))
                return 'negative\x20fileNCtrlMaskOptions';
            if (_0x2e87d6['propertyIsEnumerable'](_0x7cf554))
                return 'negative\x20externalCommands';
            return 'variable';
        }
        function _0x4b902f(_0x2f62ee) {
            return function (_0x87466b, _0x26ba6e) {
                var _0x300b1f = ![], _0x97b0d1, _0x876217 = ![];
                while ((_0x97b0d1 = _0x87466b['next']()) != null) {
                    if (_0x97b0d1 == _0x2f62ee && !_0x300b1f) {
                        var _0x158422 = _0x87466b['peek']();
                        if (_0x158422) {
                            _0x158422 = _0x158422['toLowerCase']();
                            if (_0x158422 == 'b' || _0x158422 == 'h' || _0x158422 == 'o')
                                _0x87466b['next']();
                        }
                        _0x876217 = !![];
                        break;
                    }
                    _0x300b1f = !_0x300b1f && _0x97b0d1 == '\x5c';
                }
                if (_0x876217 || !(_0x300b1f || _0x53923c))
                    _0x26ba6e['tokenize'] = null;
                return 'string';
            };
        }
        function _0x538e55(_0x3e97bb, _0x396652, _0x12da1f, _0x2e81f0, _0x7e5057) {
            this['indented'] = _0x3e97bb, this['column'] = _0x396652, this['type'] = _0x12da1f, this['align'] = _0x2e81f0, this['prev'] = _0x7e5057;
        }
        function _0x45b259(_0x9e3de9, _0x52c603, _0x27da9b) {
            var _0x10584a = _0x9e3de9['indented'];
            if (_0x9e3de9['context'] && _0x9e3de9['context']['type'] == 'statement')
                _0x10584a = _0x9e3de9['context']['indented'];
            return _0x9e3de9['context'] = new _0x538e55(_0x10584a, _0x52c603, _0x27da9b, null, _0x9e3de9['context']);
        }
        function _0x477a1e(_0x17d08f) {
            var _0x2a3d8e = _0x17d08f['context']['type'];
            if (_0x2a3d8e == ')' || _0x2a3d8e == ']' || _0x2a3d8e == '}')
                _0x17d08f['indented'] = _0x17d08f['context']['indented'];
            return _0x17d08f['context'] = _0x17d08f['context']['prev'];
        }
        return {
            'startState': function (_0x5f1538) {
                return {
                    'tokenize': null,
                    'context': new _0x538e55((_0x5f1538 || 0x2447 + 0x200c + -0x4453) - _0x4d784d, -0x1363 + -0x25b7 + 0x391a, 'top', ![]),
                    'indented': 0x0,
                    'startOfLine': !![]
                };
            },
            'token': function (_0x3d8de1, _0x14c704) {
                var _0x18aeda = _0x14c704['context'];
                if (_0x3d8de1['sol']()) {
                    if (_0x18aeda['align'] == null)
                        _0x18aeda['align'] = ![];
                    _0x14c704['indented'] = _0x3d8de1['indentation'](), _0x14c704['startOfLine'] = !![];
                }
                if (_0x3d8de1['eatSpace']())
                    return null;
                _0x4a4864 = null;
                var _0x381836 = (_0x14c704['tokenize'] || _0x5a866f)(_0x3d8de1, _0x14c704);
                if (_0x381836 == 'comment')
                    return _0x381836;
                if (_0x18aeda['align'] == null)
                    _0x18aeda['align'] = !![];
                if ((_0x4a4864 == ';' || _0x4a4864 == ':' || _0x4a4864 == ',') && _0x18aeda['type'] == 'statement')
                    _0x477a1e(_0x14c704);
                else {
                    if (_0x4a4864 == '{')
                        _0x45b259(_0x14c704, _0x3d8de1['column'](), '}');
                    else {
                        if (_0x4a4864 == '[')
                            _0x45b259(_0x14c704, _0x3d8de1['column'](), ']');
                        else {
                            if (_0x4a4864 == '(')
                                _0x45b259(_0x14c704, _0x3d8de1['column'](), ')');
                            else {
                                if (_0x4a4864 == '}') {
                                    while (_0x18aeda['type'] == 'statement')
                                        _0x18aeda = _0x477a1e(_0x14c704);
                                    if (_0x18aeda['type'] == '}')
                                        _0x18aeda = _0x477a1e(_0x14c704);
                                    while (_0x18aeda['type'] == 'statement')
                                        _0x18aeda = _0x477a1e(_0x14c704);
                                } else {
                                    if (_0x4a4864 == _0x18aeda['type'])
                                        _0x477a1e(_0x14c704);
                                    else {
                                        if (_0x11c2a0 && ((_0x18aeda['type'] == '}' || _0x18aeda['type'] == 'top') && _0x4a4864 != ';' || _0x18aeda['type'] == 'statement' && _0x4a4864 == 'newstatement'))
                                            _0x45b259(_0x14c704, _0x3d8de1['column'](), 'statement');
                                    }
                                }
                            }
                        }
                    }
                }
                return _0x14c704['startOfLine'] = ![], _0x381836;
            },
            'electricChars': '{}',
            'lineComment': '#',
            'fold': 'brace'
        };
    });
    function _0x4dd859(_0x2fba25) {
        var _0x338a32 = {}, _0x45d7e6 = _0x2fba25['split']('\x20');
        for (var _0x4df19f = 0x9e * -0x4 + 0x26ac + -0x2434; _0x4df19f < _0x45d7e6['length']; ++_0x4df19f)
            _0x338a32[_0x45d7e6[_0x4df19f]] = !![];
        return _0x338a32;
    }
    _0xfef778['defineMIME']('text/x-ttcn-cfg', {
        'name': 'ttcn-cfg',
        'keywords': _0x4dd859('Yes\x20No\x20LogFile\x20FileMask\x20ConsoleMask\x20AppendFile' + '\x20TimeStampFormat\x20LogEventTypes\x20SourceInfoFormat' + '\x20LogEntityName\x20LogSourceInfo\x20DiskFullAction' + '\x20LogFileNumber\x20LogFileSize\x20MatchingHints\x20Detailed' + '\x20Compact\x20SubCategories\x20Stack\x20Single\x20None\x20Seconds' + '\x20DateTime\x20Time\x20Stop\x20Error\x20Retry\x20Delete\x20TCPPort\x20KillTimer' + '\x20NumHCs\x20UnixSocketsEnabled\x20LocalAddress'),
        'fileNCtrlMaskOptions': _0x4dd859('TTCN_EXECUTOR\x20TTCN_ERROR\x20TTCN_WARNING' + '\x20TTCN_PORTEVENT\x20TTCN_TIMEROP\x20TTCN_VERDICTOP' + '\x20TTCN_DEFAULTOP\x20TTCN_TESTCASE\x20TTCN_ACTION' + '\x20TTCN_USER\x20TTCN_FUNCTION\x20TTCN_STATISTICS' + '\x20TTCN_PARALLEL\x20TTCN_MATCHING\x20TTCN_DEBUG' + '\x20EXECUTOR\x20ERROR\x20WARNING\x20PORTEVENT\x20TIMEROP' + '\x20VERDICTOP\x20DEFAULTOP\x20TESTCASE\x20ACTION\x20USER' + '\x20FUNCTION\x20STATISTICS\x20PARALLEL\x20MATCHING\x20DEBUG' + '\x20LOG_ALL\x20LOG_NOTHING\x20ACTION_UNQUALIFIED' + '\x20DEBUG_ENCDEC\x20DEBUG_TESTPORT' + '\x20DEBUG_UNQUALIFIED\x20DEFAULTOP_ACTIVATE' + '\x20DEFAULTOP_DEACTIVATE\x20DEFAULTOP_EXIT' + '\x20DEFAULTOP_UNQUALIFIED\x20ERROR_UNQUALIFIED' + '\x20EXECUTOR_COMPONENT\x20EXECUTOR_CONFIGDATA' + '\x20EXECUTOR_EXTCOMMAND\x20EXECUTOR_LOGOPTIONS' + '\x20EXECUTOR_RUNTIME\x20EXECUTOR_UNQUALIFIED' + '\x20FUNCTION_RND\x20FUNCTION_UNQUALIFIED' + '\x20MATCHING_DONE\x20MATCHING_MCSUCCESS' + '\x20MATCHING_MCUNSUCC\x20MATCHING_MMSUCCESS' + '\x20MATCHING_MMUNSUCC\x20MATCHING_PCSUCCESS' + '\x20MATCHING_PCUNSUCC\x20MATCHING_PMSUCCESS' + '\x20MATCHING_PMUNSUCC\x20MATCHING_PROBLEM' + '\x20MATCHING_TIMEOUT\x20MATCHING_UNQUALIFIED' + '\x20PARALLEL_PORTCONN\x20PARALLEL_PORTMAP' + '\x20PARALLEL_PTC\x20PARALLEL_UNQUALIFIED' + '\x20PORTEVENT_DUALRECV\x20PORTEVENT_DUALSEND' + '\x20PORTEVENT_MCRECV\x20PORTEVENT_MCSEND' + '\x20PORTEVENT_MMRECV\x20PORTEVENT_MMSEND' + '\x20PORTEVENT_MQUEUE\x20PORTEVENT_PCIN' + '\x20PORTEVENT_PCOUT\x20PORTEVENT_PMIN' + '\x20PORTEVENT_PMOUT\x20PORTEVENT_PQUEUE' + '\x20PORTEVENT_STATE\x20PORTEVENT_UNQUALIFIED' + '\x20STATISTICS_UNQUALIFIED\x20STATISTICS_VERDICT' + '\x20TESTCASE_FINISH\x20TESTCASE_START' + '\x20TESTCASE_UNQUALIFIED\x20TIMEROP_GUARD' + '\x20TIMEROP_READ\x20TIMEROP_START\x20TIMEROP_STOP' + '\x20TIMEROP_TIMEOUT\x20TIMEROP_UNQUALIFIED' + '\x20USER_UNQUALIFIED\x20VERDICTOP_FINAL' + '\x20VERDICTOP_GETVERDICT\x20VERDICTOP_SETVERDICT' + '\x20VERDICTOP_UNQUALIFIED\x20WARNING_UNQUALIFIED'),
        'externalCommands': _0x4dd859('BeginControlPart\x20EndControlPart\x20BeginTestCase' + '\x20EndTestCase'),
        'multiLineStrings': !![]
    });
}));
