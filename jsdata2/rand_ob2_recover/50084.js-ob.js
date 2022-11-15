(function (_0x1cdd86) {
    var _0x544e15 = _0x19c8;
    if (typeof exports == _0x544e15(190) && typeof module == _0x544e15(190))
        _0x1cdd86(require(_0x544e15(191)), require(_0x544e15(192)));
    else {
        if (typeof define == _0x544e15(193) && define[_0x544e15(194)])
            define([
                _0x544e15(191),
                _0x544e15(192)
            ], _0x1cdd86);
        else
            _0x1cdd86(CodeMirror);
    }
}(function (_0x11cde2) {
    var _0x53629a = _0x19c8, _0xcf4703 = 0, _0x3064a1 = 1, _0x2521ae = 2;
    _0x11cde2[_0x53629a(195)](_0x53629a(196), function (_0x5b85c1, _0x19ffc2) {
        var _0x5c4630 = _0x53629a, _0x246a69 = _0x11cde2[_0x5c4630(197)](_0x5b85c1, _0x5c4630(198)), _0x3d6f34 = _0x11cde2['getMode'](_0x5b85c1, _0x19ffc2 && _0x19ffc2[_0x5c4630(199)] || 'gfm');
        function _0x4674e7(_0x319504) {
            var _0x3d98d3 = _0x5c4630;
            return _0x319504[_0x3d98d3(200)] == _0x2521ae ? _0x3d6f34 : _0x246a69;
        }
        return {
            'startState': function () {
                var _0x34b7b1 = _0x5c4630;
                return {
                    'state': _0xcf4703,
                    'inner': _0x11cde2[_0x34b7b1(201)](_0x246a69)
                };
            },
            'copyState': function (_0x39fe84) {
                var _0x2f2d97 = _0x5c4630;
                return {
                    'state': _0x39fe84['state'],
                    'inner': _0x11cde2['copyState'](_0x4674e7(_0x39fe84), _0x39fe84[_0x2f2d97(202)])
                };
            },
            'token': function (_0x18f2e3, _0x18a78e) {
                var _0x3cfe73 = _0x5c4630;
                if (_0x18a78e[_0x3cfe73(200)] == _0xcf4703)
                    return _0x18f2e3['match'](_0x3cfe73(203), ![]) ? (_0x18a78e['state'] = _0x3064a1, _0x246a69[_0x3cfe73(204)](_0x18f2e3, _0x18a78e['inner'])) : (_0x18a78e[_0x3cfe73(200)] = _0x2521ae, _0x18a78e[_0x3cfe73(202)] = _0x11cde2['startState'](_0x3d6f34), _0x3d6f34[_0x3cfe73(204)](_0x18f2e3, _0x18a78e[_0x3cfe73(202)]));
                else {
                    if (_0x18a78e[_0x3cfe73(200)] == _0x3064a1) {
                        var _0x5667e2 = _0x18f2e3[_0x3cfe73(205)]() && _0x18f2e3[_0x3cfe73(206)](/(---|\.\.\.)/, ![]), _0x437ed1 = _0x246a69['token'](_0x18f2e3, _0x18a78e[_0x3cfe73(202)]);
                        return _0x5667e2 && (_0x18a78e[_0x3cfe73(200)] = _0x2521ae, _0x18a78e[_0x3cfe73(202)] = _0x11cde2[_0x3cfe73(201)](_0x3d6f34)), _0x437ed1;
                    } else
                        return _0x3d6f34[_0x3cfe73(204)](_0x18f2e3, _0x18a78e[_0x3cfe73(202)]);
                }
            },
            'innerMode': function (_0x4934d9) {
                var _0x5596dd = _0x5c4630;
                return {
                    'mode': _0x4674e7(_0x4934d9),
                    'state': _0x4934d9[_0x5596dd(202)]
                };
            },
            'blankLine': function (_0x39c6d0) {
                var _0x5d3d88 = _0x5c4630, _0x95ca10 = _0x4674e7(_0x39c6d0);
                if (_0x95ca10[_0x5d3d88(207)])
                    return _0x95ca10['blankLine'](_0x39c6d0[_0x5d3d88(202)]);
            }
        };
    });
}));