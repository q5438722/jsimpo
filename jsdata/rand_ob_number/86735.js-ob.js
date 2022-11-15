/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var Class = require('../utils/Class'), NOOP = require('../utils/NOOP'), RequestAnimationFrame = new Class({
        'initialize': function RequestAnimationFrame() {
            this['isRunning'] = ![], this['callback'] = NOOP, this['tick'] = 0x3 * -0xc1 + -0x1b97 * 0x1 + 0xeed * 0x2, this['isSetTimeOut'] = ![], this['timeOutID'] = null, this['lastTime'] = -0x12d9 * 0x2 + 0x29f + 0x2313, this['target'] = 0x24a * -0xa + -0x6 * 0x623 + 0x3bb6;
            var _0x5d23e6 = this;
            this['step'] = function _0x4810b2() {
                var _0x107abb = window['performance']['now']();
                _0x5d23e6['lastTime'] = _0x5d23e6['tick'], _0x5d23e6['tick'] = _0x107abb, _0x5d23e6['callback'](_0x107abb), _0x5d23e6['timeOutID'] = window['requestAnimationFrame'](_0x4810b2);
            }, this['stepTimeout'] = function _0x3452c7() {
                var _0x2860c2 = Date['now'](), _0x418a53 = Math['min'](Math['max'](_0x5d23e6['target'] * (0x89b + -0xba9 * -0x1 + -0x1442) + _0x5d23e6['tick'] - _0x2860c2, -0x2683 + -0xd6f * -0x1 + -0x14 * -0x141), _0x5d23e6['target']);
                _0x5d23e6['lastTime'] = _0x5d23e6['tick'], _0x5d23e6['tick'] = _0x2860c2, _0x5d23e6['callback'](_0x2860c2), _0x5d23e6['timeOutID'] = window['setTimeout'](_0x3452c7, _0x418a53);
            };
        },
        'start': function (_0x78b7b5, _0x4bc06f, _0x3b06a3) {
            if (this['isRunning'])
                return;
            this['callback'] = _0x78b7b5, this['isSetTimeOut'] = _0x4bc06f, this['target'] = _0x3b06a3, this['isRunning'] = !![], this['timeOutID'] = _0x4bc06f ? window['setTimeout'](this['stepTimeout'], -0x1013 + -0xeb4 + 0x1 * 0x1ec7) : window['requestAnimationFrame'](this['step']);
        },
        'stop': function () {
            this['isRunning'] = ![], this['isSetTimeOut'] ? clearTimeout(this['timeOutID']) : window['cancelAnimationFrame'](this['timeOutID']);
        },
        'destroy': function () {
            this['stop'](), this['callback'] = NOOP;
        }
    });
module['exports'] = RequestAnimationFrame;
