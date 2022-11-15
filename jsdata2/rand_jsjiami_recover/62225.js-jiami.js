(function sloppyPackedArguments() {
    function _0x135ae3(_0x35b0e9) {
        for (var _0xe52041 = 0; _0xe52041 < 2; _0xe52041++) {
            _0x35b0e9[_0xe52041] = 0;
        }
    }
    var _0x4d7fdc;
    function _0x35ff6e() {
        var _0x486c6d = arguments;
        _0x135ae3(_0x486c6d);
        _0x4d7fdc = _0x486c6d[5];
        assertEquals(undefined, _0x4d7fdc);
    }
    _0x135ae3([]);
    _0x35ff6e(1);
}());
(function strictPackedArguments() {
    'use strict';
    function _0x1512e6(_0x464332) {
        for (var _0x27793f = 0; _0x27793f < 2; _0x27793f++) {
            _0x464332[_0x27793f] = 0;
        }
    }
    var _0x386b49;
    function _0x316fdc() {
        if ('XhhLx' !== 'JAJKe') {
            var _0x1afca3 = arguments;
            _0x1512e6(_0x1afca3);
            _0x386b49 = _0x1afca3[5];
            assertEquals(undefined, _0x386b49);
        } else {
            var _0x16b618 = arguments;
            _0x1512e6(_0x16b618);
            _0x386b49 = _0x16b618[5];
            assertEquals(undefined, _0x386b49);
        }
    }
    _0x1512e6([]);
    _0x316fdc(1);
}());