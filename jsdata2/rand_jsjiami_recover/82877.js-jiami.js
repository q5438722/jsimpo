'use strict';
angular['module']('test', [])['controller']('TestController', function (_0x3021ba, _0x12f47c, _0x5795b4) {
    _0x3021ba['yOffset'] = 50;
    _0x5795b4['scrollTo'] = function (_0x2663f7) {
        if (_0x12f47c['hash']() !== _0x2663f7) {
            _0x12f47c['hash'](_0x2663f7);
        } else {
            _0x3021ba();
        }
    };
});