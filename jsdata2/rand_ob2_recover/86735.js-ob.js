var Class = require(_0x33a044(121)), NOOP = require(_0x33a044(122)), RequestAnimationFrame = new Class({
        'initialize': function RequestAnimationFrame() {
            var _0xa4ad64 = _0x33a044;
            this['isRunning'] = ![], this[_0xa4ad64(123)] = NOOP, this['tick'] = 0, this[_0xa4ad64(124)] = ![], this[_0xa4ad64(125)] = null, this['lastTime'] = 0, this[_0xa4ad64(126)] = 0;
            var _0xf11128 = this;
            this[_0xa4ad64(127)] = function _0x117a8e() {
                var _0x4aa1b0 = _0xa4ad64, _0x434df0 = window[_0x4aa1b0(128)][_0x4aa1b0(129)]();
                _0xf11128[_0x4aa1b0(130)] = _0xf11128[_0x4aa1b0(131)], _0xf11128[_0x4aa1b0(131)] = _0x434df0, _0xf11128['callback'](_0x434df0), _0xf11128[_0x4aa1b0(125)] = window[_0x4aa1b0(132)](_0x117a8e);
            }, this['stepTimeout'] = function _0x27477d() {
                var _0x2c2871 = _0xa4ad64, _0x7b56bc = Date[_0x2c2871(129)](), _0x39b31b = Math[_0x2c2871(133)](Math['max'](_0xf11128['target'] * 2 + _0xf11128[_0x2c2871(131)] - _0x7b56bc, 0), _0xf11128[_0x2c2871(126)]);
                _0xf11128[_0x2c2871(130)] = _0xf11128[_0x2c2871(131)], _0xf11128[_0x2c2871(131)] = _0x7b56bc, _0xf11128['callback'](_0x7b56bc), _0xf11128[_0x2c2871(125)] = window[_0x2c2871(134)](_0x27477d, _0x39b31b);
            };
        },
        'start': function (_0x28ff44, _0x4266ce, _0x4fe24f) {
            var _0x1ea224 = _0x33a044;
            if (this[_0x1ea224(135)])
                return;
            this[_0x1ea224(123)] = _0x28ff44, this['isSetTimeOut'] = _0x4266ce, this[_0x1ea224(126)] = _0x4fe24f, this[_0x1ea224(135)] = !![], this[_0x1ea224(125)] = _0x4266ce ? window['setTimeout'](this[_0x1ea224(136)], 0) : window['requestAnimationFrame'](this[_0x1ea224(127)]);
        },
        'stop': function () {
            var _0x4b6578 = _0x33a044;
            this[_0x4b6578(135)] = ![], this[_0x4b6578(124)] ? clearTimeout(this[_0x4b6578(125)]) : window[_0x4b6578(137)](this[_0x4b6578(125)]);
        },
        'destroy': function () {
            this['stop'](), this['callback'] = NOOP;
        }
    });
module[_0x33a044(138)] = RequestAnimationFrame;