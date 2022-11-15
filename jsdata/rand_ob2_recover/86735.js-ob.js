var Class = require('../utils/Class'), NOOP = require(_0x20b35d(178)), RequestAnimationFrame = new Class({
        'initialize': function RequestAnimationFrame() {
            var _0x4c1271 = _0x20b35d;
            this['isRunning'] = ![], this[_0x4c1271(179)] = NOOP, this['tick'] = 0, this[_0x4c1271(180)] = ![], this[_0x4c1271(181)] = null, this[_0x4c1271(182)] = 0, this[_0x4c1271(183)] = 0;
            var _0x293c74 = this;
            this[_0x4c1271(184)] = function _0x4e33ee() {
                var _0x49b11d = _0x4c1271, _0x2cf3c1 = window[_0x49b11d(185)]['now']();
                _0x293c74['lastTime'] = _0x293c74[_0x49b11d(186)], _0x293c74[_0x49b11d(186)] = _0x2cf3c1, _0x293c74[_0x49b11d(179)](_0x2cf3c1), _0x293c74['timeOutID'] = window[_0x49b11d(187)](_0x4e33ee);
            }, this[_0x4c1271(188)] = function _0x1f2b99() {
                var _0x5f5d36 = _0x4c1271, _0x4dc331 = Date[_0x5f5d36(189)](), _0x405f05 = Math[_0x5f5d36(190)](Math[_0x5f5d36(191)](_0x293c74[_0x5f5d36(183)] * 2 + _0x293c74['tick'] - _0x4dc331, 0), _0x293c74[_0x5f5d36(183)]);
                _0x293c74[_0x5f5d36(182)] = _0x293c74[_0x5f5d36(186)], _0x293c74[_0x5f5d36(186)] = _0x4dc331, _0x293c74['callback'](_0x4dc331), _0x293c74[_0x5f5d36(181)] = window['setTimeout'](_0x1f2b99, _0x405f05);
            };
        },
        'start': function (_0x4c5f33, _0xfda85f, _0x42ed91) {
            var _0x917836 = _0x20b35d;
            if (this['isRunning'])
                return;
            this['callback'] = _0x4c5f33, this[_0x917836(180)] = _0xfda85f, this['target'] = _0x42ed91, this[_0x917836(192)] = !![], this[_0x917836(181)] = _0xfda85f ? window[_0x917836(193)](this[_0x917836(188)], 0) : window['requestAnimationFrame'](this[_0x917836(184)]);
        },
        'stop': function () {
            var _0x4c1fb3 = _0x20b35d;
            this[_0x4c1fb3(192)] = ![], this[_0x4c1fb3(180)] ? clearTimeout(this[_0x4c1fb3(181)]) : window[_0x4c1fb3(194)](this['timeOutID']);
        },
        'destroy': function () {
            var _0x54f344 = _0x20b35d;
            this[_0x54f344(195)](), this[_0x54f344(179)] = NOOP;
        }
    });
module[_0x20b35d(196)] = RequestAnimationFrame;