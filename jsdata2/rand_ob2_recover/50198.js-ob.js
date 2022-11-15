(function (_0x52c11b) {
    var _0x22cdcc = _0x1f92;
    if (typeof exports == _0x22cdcc(318) && typeof module == _0x22cdcc(318))
        _0x52c11b(require(_0x22cdcc(319)));
    else {
        if (typeof define == _0x22cdcc(320) && define[_0x22cdcc(321)])
            define([_0x22cdcc(319)], _0x52c11b);
        else
            _0x52c11b(CodeMirror);
    }
}(function (_0x155053) {
    var _0x4ee06c = _0x1f92, _0x42f8e0 = /MSIE \d/[_0x4ee06c(322)](navigator[_0x4ee06c(323)]) && (document[_0x4ee06c(324)] == null || document[_0x4ee06c(324)] < 8), _0x4ad0cf = _0x155053['Pos'], _0x5b736f = {
            '(': ')>',
            ')': '(<',
            '[': ']>',
            ']': '[<',
            '{': '}>',
            '}': '{<',
            '<': '>>',
            '>': '<<'
        };
    function _0x4d88d8(_0x1cd81a) {
        var _0x3a908c = _0x4ee06c;
        return _0x1cd81a && _0x1cd81a[_0x3a908c(325)] || /[(){}[\]]/;
    }
    function _0x1584ee(_0x25666, _0x32abde, _0x582595) {
        var _0x2550c7 = _0x4ee06c, _0x3c407e = _0x25666[_0x2550c7(326)](_0x32abde[_0x2550c7(327)]), _0x4e0a7a = _0x32abde['ch'] - 1, _0x524f9e = _0x582595 && _0x582595[_0x2550c7(328)];
        if (_0x524f9e == null)
            _0x524f9e = /(^| )cm-fat-cursor($| )/['test'](_0x25666[_0x2550c7(329)]()[_0x2550c7(330)]);
        var _0x4ee1ae = _0x4d88d8(_0x582595), _0x6b5d22 = !_0x524f9e && _0x4e0a7a >= 0 && _0x4ee1ae['test'](_0x3c407e[_0x2550c7(331)][_0x2550c7(332)](_0x4e0a7a)) && _0x5b736f[_0x3c407e[_0x2550c7(331)][_0x2550c7(332)](_0x4e0a7a)] || _0x4ee1ae[_0x2550c7(322)](_0x3c407e[_0x2550c7(331)][_0x2550c7(332)](_0x4e0a7a + 1)) && _0x5b736f[_0x3c407e[_0x2550c7(331)][_0x2550c7(332)](++_0x4e0a7a)];
        if (!_0x6b5d22)
            return null;
        var _0x21519c = _0x6b5d22['charAt'](1) == '>' ? 1 : -1;
        if (_0x582595 && _0x582595[_0x2550c7(333)] && _0x21519c > 0 != (_0x4e0a7a == _0x32abde['ch']))
            return null;
        var _0xf56181 = _0x25666[_0x2550c7(334)](_0x4ad0cf(_0x32abde['line'], _0x4e0a7a + 1)), _0x6098ce = _0xec4f5b(_0x25666, _0x4ad0cf(_0x32abde[_0x2550c7(327)], _0x4e0a7a + (_0x21519c > 0 ? 1 : 0)), _0x21519c, _0xf56181, _0x582595);
        if (_0x6098ce == null)
            return null;
        return {
            'from': _0x4ad0cf(_0x32abde[_0x2550c7(327)], _0x4e0a7a),
            'to': _0x6098ce && _0x6098ce[_0x2550c7(335)],
            'match': _0x6098ce && _0x6098ce['ch'] == _0x6b5d22[_0x2550c7(332)](0),
            'forward': _0x21519c > 0
        };
    }
    function _0xec4f5b(_0xa2e131, _0x3d9f92, _0xa4d607, _0x4da1e1, _0x2af99e) {
        var _0x386bed = _0x4ee06c, _0x5bfbb1 = _0x2af99e && _0x2af99e[_0x386bed(336)] || 10000, _0x144a2b = _0x2af99e && _0x2af99e[_0x386bed(337)] || 1000, _0xd2a6e7 = [], _0xa06218 = _0x4d88d8(_0x2af99e), _0x48e09e = _0xa4d607 > 0 ? Math[_0x386bed(338)](_0x3d9f92[_0x386bed(327)] + _0x144a2b, _0xa2e131[_0x386bed(339)]() + 1) : Math[_0x386bed(340)](_0xa2e131[_0x386bed(341)]() - 1, _0x3d9f92[_0x386bed(327)] - _0x144a2b);
        for (var _0x147b99 = _0x3d9f92[_0x386bed(327)]; _0x147b99 != _0x48e09e; _0x147b99 += _0xa4d607) {
            var _0x4633fb = _0xa2e131[_0x386bed(342)](_0x147b99);
            if (!_0x4633fb)
                continue;
            var _0x5df174 = _0xa4d607 > 0 ? 0 : _0x4633fb[_0x386bed(343)] - 1, _0x1f4ed6 = _0xa4d607 > 0 ? _0x4633fb[_0x386bed(343)] : -1;
            if (_0x4633fb[_0x386bed(343)] > _0x5bfbb1)
                continue;
            if (_0x147b99 == _0x3d9f92[_0x386bed(327)])
                _0x5df174 = _0x3d9f92['ch'] - (_0xa4d607 < 0 ? 1 : 0);
            for (; _0x5df174 != _0x1f4ed6; _0x5df174 += _0xa4d607) {
                var _0x4dc422 = _0x4633fb['charAt'](_0x5df174);
                if (_0xa06218['test'](_0x4dc422) && (_0x4da1e1 === undefined || (_0xa2e131[_0x386bed(334)](_0x4ad0cf(_0x147b99, _0x5df174 + 1)) || '') == (_0x4da1e1 || ''))) {
                    var _0x46cad7 = _0x5b736f[_0x4dc422];
                    if (_0x46cad7 && _0x46cad7['charAt'](1) == '>' == _0xa4d607 > 0)
                        _0xd2a6e7[_0x386bed(344)](_0x4dc422);
                    else {
                        if (!_0xd2a6e7[_0x386bed(343)])
                            return {
                                'pos': _0x4ad0cf(_0x147b99, _0x5df174),
                                'ch': _0x4dc422
                            };
                        else
                            _0xd2a6e7[_0x386bed(345)]();
                    }
                }
            }
        }
        return _0x147b99 - _0xa4d607 == (_0xa4d607 > 0 ? _0xa2e131[_0x386bed(339)]() : _0xa2e131['firstLine']()) ? ![] : null;
    }
    function _0x464b3e(_0x5cf80c, _0x407519, _0x35789c) {
        var _0x3c4e78 = _0x4ee06c, _0x437fe9 = _0x5cf80c['state'][_0x3c4e78(346)][_0x3c4e78(347)] || 1000, _0x1e9fc4 = _0x35789c && _0x35789c['highlightNonMatching'], _0x37052d = [], _0x3d1b81 = _0x5cf80c[_0x3c4e78(348)]();
        for (var _0x4ae74f = 0; _0x4ae74f < _0x3d1b81[_0x3c4e78(343)]; _0x4ae74f++) {
            var _0x100cf1 = _0x3d1b81[_0x4ae74f][_0x3c4e78(349)]() && _0x1584ee(_0x5cf80c, _0x3d1b81[_0x4ae74f][_0x3c4e78(350)], _0x35789c);
            if (_0x100cf1 && (_0x100cf1[_0x3c4e78(351)] || _0x1e9fc4 !== ![]) && _0x5cf80c[_0x3c4e78(342)](_0x100cf1[_0x3c4e78(352)][_0x3c4e78(327)])['length'] <= _0x437fe9) {
                var _0x2bcbc7 = _0x100cf1['match'] ? 'CodeMirror-matchingbracket' : _0x3c4e78(353);
                _0x37052d[_0x3c4e78(344)](_0x5cf80c[_0x3c4e78(354)](_0x100cf1[_0x3c4e78(352)], _0x4ad0cf(_0x100cf1['from'][_0x3c4e78(327)], _0x100cf1[_0x3c4e78(352)]['ch'] + 1), { 'className': _0x2bcbc7 }));
                if (_0x100cf1['to'] && _0x5cf80c[_0x3c4e78(342)](_0x100cf1['to'][_0x3c4e78(327)])[_0x3c4e78(343)] <= _0x437fe9)
                    _0x37052d[_0x3c4e78(344)](_0x5cf80c['markText'](_0x100cf1['to'], _0x4ad0cf(_0x100cf1['to'][_0x3c4e78(327)], _0x100cf1['to']['ch'] + 1), { 'className': _0x2bcbc7 }));
            }
        }
        if (_0x37052d['length']) {
            if (_0x42f8e0 && _0x5cf80c[_0x3c4e78(355)][_0x3c4e78(356)])
                _0x5cf80c[_0x3c4e78(357)]();
            var _0x496823 = function () {
                _0x5cf80c['operation'](function () {
                    var _0x553350 = _0x1f92;
                    for (var _0x2b98b1 = 0; _0x2b98b1 < _0x37052d['length']; _0x2b98b1++)
                        _0x37052d[_0x2b98b1][_0x553350(358)]();
                });
            };
            if (_0x407519)
                setTimeout(_0x496823, 800);
            else
                return _0x496823;
        }
    }
    function _0x30392b(_0x5dd723) {
        var _0x50c57d = _0x4ee06c;
        _0x5dd723[_0x50c57d(359)](function () {
            var _0x1a3eb9 = _0x50c57d;
            _0x5dd723['state'][_0x1a3eb9(346)][_0x1a3eb9(360)] && (_0x5dd723[_0x1a3eb9(355)][_0x1a3eb9(346)]['currentlyHighlighted'](), _0x5dd723[_0x1a3eb9(355)][_0x1a3eb9(346)]['currentlyHighlighted'] = null), _0x5dd723[_0x1a3eb9(355)][_0x1a3eb9(346)][_0x1a3eb9(360)] = _0x464b3e(_0x5dd723, ![], _0x5dd723[_0x1a3eb9(355)][_0x1a3eb9(346)]);
        });
    }
    function _0x1ca205(_0x232462) {
        var _0x2324d4 = _0x4ee06c;
        _0x232462['state'][_0x2324d4(346)] && _0x232462['state']['matchBrackets'][_0x2324d4(360)] && (_0x232462[_0x2324d4(355)][_0x2324d4(346)][_0x2324d4(360)](), _0x232462[_0x2324d4(355)]['matchBrackets'][_0x2324d4(360)] = null);
    }
    _0x155053[_0x4ee06c(361)](_0x4ee06c(346), ![], function (_0x40d97b, _0x217591, _0x5807a4) {
        var _0x1cae9d = _0x4ee06c;
        _0x5807a4 && _0x5807a4 != _0x155053[_0x1cae9d(362)] && (_0x40d97b['off']('cursorActivity', _0x30392b), _0x40d97b[_0x1cae9d(363)](_0x1cae9d(357), _0x30392b), _0x40d97b[_0x1cae9d(363)](_0x1cae9d(364), _0x1ca205), _0x1ca205(_0x40d97b)), _0x217591 && (_0x40d97b[_0x1cae9d(355)][_0x1cae9d(346)] = typeof _0x217591 == _0x1cae9d(318) ? _0x217591 : {}, _0x40d97b['on']('cursorActivity', _0x30392b), _0x40d97b['on'](_0x1cae9d(357), _0x30392b), _0x40d97b['on']('blur', _0x1ca205));
    }), _0x155053[_0x4ee06c(365)](_0x4ee06c(346), function () {
        _0x464b3e(this, !![]);
    }), _0x155053[_0x4ee06c(365)](_0x4ee06c(366), function (_0x286ede, _0x43d901, _0x567aed) {
        var _0x3111f8 = _0x4ee06c;
        return (_0x567aed || typeof _0x43d901 == _0x3111f8(367)) && (!_0x567aed ? _0x43d901 = _0x43d901 ? { 'strict': !![] } : null : (_0x567aed['strict'] = _0x43d901, _0x43d901 = _0x567aed)), _0x1584ee(this, _0x286ede, _0x43d901);
    }), _0x155053[_0x4ee06c(365)](_0x4ee06c(368), function (_0x52aac9, _0x5b822a, _0x114013, _0x533550) {
        return _0xec4f5b(this, _0x52aac9, _0x5b822a, _0x114013, _0x533550);
    });
}));