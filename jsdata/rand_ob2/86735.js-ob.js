/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var _0x3070 = [
    '427247xhOYVh',
    '24759wIFWDJ',
    '../utils/NOOP',
    'callback',
    'isSetTimeOut',
    'timeOutID',
    'lastTime',
    'target',
    'step',
    'performance',
    'tick',
    'requestAnimationFrame',
    'stepTimeout',
    'now',
    'min',
    'max',
    'isRunning',
    'setTimeout',
    'cancelAnimationFrame',
    'stop',
    'exports',
    '17851suvaRV',
    '556696rraWUY',
    '1TDPNMa',
    '2yeqlRP',
    '285206cckctP',
    '8PhnVNT',
    '89414wzIpFY',
    '760226lpAQSg'
];
var _0x20b35d = _0x491a;
function _0x491a(_0x3a037e, _0x1f9562) {
    return _0x491a = function (_0x30701f, _0x491a2b) {
        _0x30701f = _0x30701f - 0xa8;
        var _0x40b82f = _0x3070[_0x30701f];
        return _0x40b82f;
    }, _0x491a(_0x3a037e, _0x1f9562);
}
(function (_0x1e7ab4, _0x15fc91) {
    var _0xbbfc8e = _0x491a;
    while (!![]) {
        try {
            var _0x189355 = parseInt(_0xbbfc8e(0xa8)) + parseInt(_0xbbfc8e(0xa9)) * -parseInt(_0xbbfc8e(0xaa)) + -parseInt(_0xbbfc8e(0xab)) * -parseInt(_0xbbfc8e(0xac)) + parseInt(_0xbbfc8e(0xad)) * parseInt(_0xbbfc8e(0xae)) + -parseInt(_0xbbfc8e(0xaf)) + parseInt(_0xbbfc8e(0xb0)) + -parseInt(_0xbbfc8e(0xb1));
            if (_0x189355 === _0x15fc91)
                break;
            else
                _0x1e7ab4['push'](_0x1e7ab4['shift']());
        } catch (_0xa06e2b) {
            _0x1e7ab4['push'](_0x1e7ab4['shift']());
        }
    }
}(_0x3070, 0x5f015));
var Class = require('../utils/Class'), NOOP = require(_0x20b35d(0xb2)), RequestAnimationFrame = new Class({
        'initialize': function RequestAnimationFrame() {
            var _0x4c1271 = _0x20b35d;
            this['isRunning'] = ![], this[_0x4c1271(0xb3)] = NOOP, this['tick'] = 0x0, this[_0x4c1271(0xb4)] = ![], this[_0x4c1271(0xb5)] = null, this[_0x4c1271(0xb6)] = 0x0, this[_0x4c1271(0xb7)] = 0x0;
            var _0x293c74 = this;
            this[_0x4c1271(0xb8)] = function _0x4e33ee() {
                var _0x49b11d = _0x4c1271, _0x2cf3c1 = window[_0x49b11d(0xb9)]['now']();
                _0x293c74['lastTime'] = _0x293c74[_0x49b11d(0xba)], _0x293c74[_0x49b11d(0xba)] = _0x2cf3c1, _0x293c74[_0x49b11d(0xb3)](_0x2cf3c1), _0x293c74['timeOutID'] = window[_0x49b11d(0xbb)](_0x4e33ee);
            }, this[_0x4c1271(0xbc)] = function _0x1f2b99() {
                var _0x5f5d36 = _0x4c1271, _0x4dc331 = Date[_0x5f5d36(0xbd)](), _0x405f05 = Math[_0x5f5d36(0xbe)](Math[_0x5f5d36(0xbf)](_0x293c74[_0x5f5d36(0xb7)] * 0x2 + _0x293c74['tick'] - _0x4dc331, 0x0), _0x293c74[_0x5f5d36(0xb7)]);
                _0x293c74[_0x5f5d36(0xb6)] = _0x293c74[_0x5f5d36(0xba)], _0x293c74[_0x5f5d36(0xba)] = _0x4dc331, _0x293c74['callback'](_0x4dc331), _0x293c74[_0x5f5d36(0xb5)] = window['setTimeout'](_0x1f2b99, _0x405f05);
            };
        },
        'start': function (_0x4c5f33, _0xfda85f, _0x42ed91) {
            var _0x917836 = _0x20b35d;
            if (this['isRunning'])
                return;
            this['callback'] = _0x4c5f33, this[_0x917836(0xb4)] = _0xfda85f, this['target'] = _0x42ed91, this[_0x917836(0xc0)] = !![], this[_0x917836(0xb5)] = _0xfda85f ? window[_0x917836(0xc1)](this[_0x917836(0xbc)], 0x0) : window['requestAnimationFrame'](this[_0x917836(0xb8)]);
        },
        'stop': function () {
            var _0x4c1fb3 = _0x20b35d;
            this[_0x4c1fb3(0xc0)] = ![], this[_0x4c1fb3(0xb4)] ? clearTimeout(this[_0x4c1fb3(0xb5)]) : window[_0x4c1fb3(0xc2)](this['timeOutID']);
        },
        'destroy': function () {
            var _0x54f344 = _0x20b35d;
            this[_0x54f344(0xc3)](), this[_0x54f344(0xb3)] = NOOP;
        }
    });
module[_0x20b35d(0xc4)] = RequestAnimationFrame;
