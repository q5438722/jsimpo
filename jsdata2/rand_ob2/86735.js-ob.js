/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var _0x4902 = [
    'min',
    'setTimeout',
    'isRunning',
    'stepTimeout',
    'cancelAnimationFrame',
    'exports',
    '1LgHwHu',
    '759374FJVFyy',
    '584042mwzbLQ',
    '738608YzeklJ',
    '864986ezmtUb',
    '222163CWTnVR',
    '3wNszMj',
    '675150WZvHff',
    '15Xycjmr',
    '2712DaAuQj',
    '../utils/Class',
    '../utils/NOOP',
    'callback',
    'isSetTimeOut',
    'timeOutID',
    'target',
    'step',
    'performance',
    'now',
    'lastTime',
    'tick',
    'requestAnimationFrame'
];
function _0x25b1(_0x1aa718, _0x12f4b8) {
    return _0x25b1 = function (_0x4902b7, _0x25b150) {
        _0x4902b7 = _0x4902b7 - 0x6f;
        var _0x1d88a6 = _0x4902[_0x4902b7];
        return _0x1d88a6;
    }, _0x25b1(_0x1aa718, _0x12f4b8);
}
var _0x33a044 = _0x25b1;
(function (_0x39433d, _0x4befff) {
    var _0x4b00e3 = _0x25b1;
    while (!![]) {
        try {
            var _0x32ebb4 = -parseInt(_0x4b00e3(0x6f)) * -parseInt(_0x4b00e3(0x70)) + -parseInt(_0x4b00e3(0x71)) + parseInt(_0x4b00e3(0x72)) + parseInt(_0x4b00e3(0x73)) + parseInt(_0x4b00e3(0x74)) * -parseInt(_0x4b00e3(0x75)) + -parseInt(_0x4b00e3(0x76)) + parseInt(_0x4b00e3(0x77)) * parseInt(_0x4b00e3(0x78));
            if (_0x32ebb4 === _0x4befff)
                break;
            else
                _0x39433d['push'](_0x39433d['shift']());
        } catch (_0x1ff3f6) {
            _0x39433d['push'](_0x39433d['shift']());
        }
    }
}(_0x4902, 0x74b0f));
var Class = require(_0x33a044(0x79)), NOOP = require(_0x33a044(0x7a)), RequestAnimationFrame = new Class({
        'initialize': function RequestAnimationFrame() {
            var _0xa4ad64 = _0x33a044;
            this['isRunning'] = ![], this[_0xa4ad64(0x7b)] = NOOP, this['tick'] = 0x0, this[_0xa4ad64(0x7c)] = ![], this[_0xa4ad64(0x7d)] = null, this['lastTime'] = 0x0, this[_0xa4ad64(0x7e)] = 0x0;
            var _0xf11128 = this;
            this[_0xa4ad64(0x7f)] = function _0x117a8e() {
                var _0x4aa1b0 = _0xa4ad64, _0x434df0 = window[_0x4aa1b0(0x80)][_0x4aa1b0(0x81)]();
                _0xf11128[_0x4aa1b0(0x82)] = _0xf11128[_0x4aa1b0(0x83)], _0xf11128[_0x4aa1b0(0x83)] = _0x434df0, _0xf11128['callback'](_0x434df0), _0xf11128[_0x4aa1b0(0x7d)] = window[_0x4aa1b0(0x84)](_0x117a8e);
            }, this['stepTimeout'] = function _0x27477d() {
                var _0x2c2871 = _0xa4ad64, _0x7b56bc = Date[_0x2c2871(0x81)](), _0x39b31b = Math[_0x2c2871(0x85)](Math['max'](_0xf11128['target'] * 0x2 + _0xf11128[_0x2c2871(0x83)] - _0x7b56bc, 0x0), _0xf11128[_0x2c2871(0x7e)]);
                _0xf11128[_0x2c2871(0x82)] = _0xf11128[_0x2c2871(0x83)], _0xf11128[_0x2c2871(0x83)] = _0x7b56bc, _0xf11128['callback'](_0x7b56bc), _0xf11128[_0x2c2871(0x7d)] = window[_0x2c2871(0x86)](_0x27477d, _0x39b31b);
            };
        },
        'start': function (_0x28ff44, _0x4266ce, _0x4fe24f) {
            var _0x1ea224 = _0x33a044;
            if (this[_0x1ea224(0x87)])
                return;
            this[_0x1ea224(0x7b)] = _0x28ff44, this['isSetTimeOut'] = _0x4266ce, this[_0x1ea224(0x7e)] = _0x4fe24f, this[_0x1ea224(0x87)] = !![], this[_0x1ea224(0x7d)] = _0x4266ce ? window['setTimeout'](this[_0x1ea224(0x88)], 0x0) : window['requestAnimationFrame'](this[_0x1ea224(0x7f)]);
        },
        'stop': function () {
            var _0x4b6578 = _0x33a044;
            this[_0x4b6578(0x87)] = ![], this[_0x4b6578(0x7c)] ? clearTimeout(this[_0x4b6578(0x7d)]) : window[_0x4b6578(0x89)](this[_0x4b6578(0x7d)]);
        },
        'destroy': function () {
            this['stop'](), this['callback'] = NOOP;
        }
    });
module[_0x33a044(0x8a)] = RequestAnimationFrame;
