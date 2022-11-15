(function sloppyPackedArguments() {
    function _0x4f326a(_0x5614e4) {
        for (var _0x324629 = 0; _0x324629 < 2; _0x324629++) {
            _0x5614e4[_0x324629] = 0;
        }
    }
    var _0x47c6b9;
    function _0x3ee244() {
        var _0x240a30 = arguments;
        _0x4f326a(_0x240a30), _0x47c6b9 = _0x240a30[5], assertEquals(undefined, _0x47c6b9);
    }
    _0x4f326a([]), _0x3ee244(1);
}(), function strictPackedArguments() {
    'use strict';
    function _0x76e183(_0x2208ee) {
        for (var _0x3157e = 0; _0x3157e < 2; _0x3157e++) {
            _0x2208ee[_0x3157e] = 0;
        }
    }
    var _0x5a25d7;
    function _0x36317c() {
        var _0x103c10 = arguments;
        _0x76e183(_0x103c10), _0x5a25d7 = _0x103c10[5], assertEquals(undefined, _0x5a25d7);
    }
    _0x76e183([]), _0x36317c(1);
}());