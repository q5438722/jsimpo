var _0x23a3 = [
    'amd',
    'defineMode',
    'yaml-frontmatter',
    'getMode',
    'yaml',
    'base',
    'state',
    'startState',
    'inner',
    '---',
    'token',
    'sol',
    'match',
    'blankLine',
    '925243HXCtnv',
    '1266024XUyfeR',
    '453678kNOlmw',
    '1090142UDiPIa',
    '205050EfLbrA',
    '1181526vbJAoG',
    '518116iLBSZu',
    'object',
    '../../lib/codemirror',
    '../yaml/yaml',
    'function'
];
function _0x19c8(_0x2e6221, _0x3d159d) {
    return _0x19c8 = function (_0x23a3a3, _0x19c885) {
        _0x23a3a3 = _0x23a3a3 - 0xb7;
        var _0x1dcdfa = _0x23a3[_0x23a3a3];
        return _0x1dcdfa;
    }, _0x19c8(_0x2e6221, _0x3d159d);
}
(function (_0x2d8e02, _0x41acca) {
    var _0xbcc32f = _0x19c8;
    while (!![]) {
        try {
            var _0x16c704 = parseInt(_0xbcc32f(0xb7)) + -parseInt(_0xbcc32f(0xb8)) + -parseInt(_0xbcc32f(0xb9)) + parseInt(_0xbcc32f(0xba)) + -parseInt(_0xbcc32f(0xbb)) + parseInt(_0xbcc32f(0xbc)) + -parseInt(_0xbcc32f(0xbd));
            if (_0x16c704 === _0x41acca)
                break;
            else
                _0x2d8e02['push'](_0x2d8e02['shift']());
        } catch (_0x17e0af) {
            _0x2d8e02['push'](_0x2d8e02['shift']());
        }
    }
}(_0x23a3, 0xb817b), function (_0x1cdd86) {
    var _0x544e15 = _0x19c8;
    if (typeof exports == _0x544e15(0xbe) && typeof module == _0x544e15(0xbe))
        _0x1cdd86(require(_0x544e15(0xbf)), require(_0x544e15(0xc0)));
    else {
        if (typeof define == _0x544e15(0xc1) && define[_0x544e15(0xc2)])
            define([
                _0x544e15(0xbf),
                _0x544e15(0xc0)
            ], _0x1cdd86);
        else
            _0x1cdd86(CodeMirror);
    }
}(function (_0x11cde2) {
    var _0x53629a = _0x19c8, _0xcf4703 = 0x0, _0x3064a1 = 0x1, _0x2521ae = 0x2;
    _0x11cde2[_0x53629a(0xc3)](_0x53629a(0xc4), function (_0x5b85c1, _0x19ffc2) {
        var _0x5c4630 = _0x53629a, _0x246a69 = _0x11cde2[_0x5c4630(0xc5)](_0x5b85c1, _0x5c4630(0xc6)), _0x3d6f34 = _0x11cde2['getMode'](_0x5b85c1, _0x19ffc2 && _0x19ffc2[_0x5c4630(0xc7)] || 'gfm');
        function _0x4674e7(_0x319504) {
            var _0x3d98d3 = _0x5c4630;
            return _0x319504[_0x3d98d3(0xc8)] == _0x2521ae ? _0x3d6f34 : _0x246a69;
        }
        return {
            'startState': function () {
                var _0x34b7b1 = _0x5c4630;
                return {
                    'state': _0xcf4703,
                    'inner': _0x11cde2[_0x34b7b1(0xc9)](_0x246a69)
                };
            },
            'copyState': function (_0x39fe84) {
                var _0x2f2d97 = _0x5c4630;
                return {
                    'state': _0x39fe84['state'],
                    'inner': _0x11cde2['copyState'](_0x4674e7(_0x39fe84), _0x39fe84[_0x2f2d97(0xca)])
                };
            },
            'token': function (_0x18f2e3, _0x18a78e) {
                var _0x3cfe73 = _0x5c4630;
                if (_0x18a78e[_0x3cfe73(0xc8)] == _0xcf4703)
                    return _0x18f2e3['match'](_0x3cfe73(0xcb), ![]) ? (_0x18a78e['state'] = _0x3064a1, _0x246a69[_0x3cfe73(0xcc)](_0x18f2e3, _0x18a78e['inner'])) : (_0x18a78e[_0x3cfe73(0xc8)] = _0x2521ae, _0x18a78e[_0x3cfe73(0xca)] = _0x11cde2['startState'](_0x3d6f34), _0x3d6f34[_0x3cfe73(0xcc)](_0x18f2e3, _0x18a78e[_0x3cfe73(0xca)]));
                else {
                    if (_0x18a78e[_0x3cfe73(0xc8)] == _0x3064a1) {
                        var _0x5667e2 = _0x18f2e3[_0x3cfe73(0xcd)]() && _0x18f2e3[_0x3cfe73(0xce)](/(---|\.\.\.)/, ![]), _0x437ed1 = _0x246a69['token'](_0x18f2e3, _0x18a78e[_0x3cfe73(0xca)]);
                        return _0x5667e2 && (_0x18a78e[_0x3cfe73(0xc8)] = _0x2521ae, _0x18a78e[_0x3cfe73(0xca)] = _0x11cde2[_0x3cfe73(0xc9)](_0x3d6f34)), _0x437ed1;
                    } else
                        return _0x3d6f34[_0x3cfe73(0xcc)](_0x18f2e3, _0x18a78e[_0x3cfe73(0xca)]);
                }
            },
            'innerMode': function (_0x4934d9) {
                var _0x5596dd = _0x5c4630;
                return {
                    'mode': _0x4674e7(_0x4934d9),
                    'state': _0x4934d9[_0x5596dd(0xca)]
                };
            },
            'blankLine': function (_0x39c6d0) {
                var _0x5d3d88 = _0x5c4630, _0x95ca10 = _0x4674e7(_0x39c6d0);
                if (_0x95ca10[_0x5d3d88(0xcf)])
                    return _0x95ca10['blankLine'](_0x39c6d0[_0x5d3d88(0xca)]);
            }
        };
    });
}));
