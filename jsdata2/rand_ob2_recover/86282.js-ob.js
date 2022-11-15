function _0x4112(_0x27a8fb, _0x32181c) {
    return _0x4112 = function (_0x15a3d5, _0x411202) {
        _0x15a3d5 = _0x15a3d5 - 465;
        var _0x8a6887 = _0x15a3[_0x15a3d5];
        return _0x8a6887;
    }, _0x4112(_0x27a8fb, _0x32181c);
}
var AnimationState = require('../../animations/AnimationState'), Class = require(_0x3332cb(475)), Components = require('../components'), GameObject = require(_0x3332cb(476)), SpriteRender = require(_0x3332cb(477)), Sprite = new Class({
        'Extends': GameObject,
        'Mixins': [
            Components['Alpha'],
            Components[_0x3332cb(478)],
            Components[_0x3332cb(479)],
            Components['Flip'],
            Components[_0x3332cb(480)],
            Components[_0x3332cb(481)],
            Components['Origin'],
            Components[_0x3332cb(482)],
            Components[_0x3332cb(483)],
            Components['Size'],
            Components['TextureCrop'],
            Components[_0x3332cb(484)],
            Components[_0x3332cb(485)],
            Components[_0x3332cb(486)],
            SpriteRender
        ],
        'initialize': function Sprite(_0x48baee, _0x4c6e00, _0x5ddbd7, _0xcf0b9c, _0x55c047) {
            var _0x88d2fe = _0x3332cb;
            GameObject[_0x88d2fe(487)](this, _0x48baee, _0x88d2fe(488)), this['_crop'] = this[_0x88d2fe(489)](), this[_0x88d2fe(490)] = new AnimationState(this), this[_0x88d2fe(491)](_0xcf0b9c, _0x55c047), this[_0x88d2fe(492)](_0x4c6e00, _0x5ddbd7), this[_0x88d2fe(493)](), this[_0x88d2fe(494)](), this[_0x88d2fe(495)]();
        },
        'addedToScene': function () {
            var _0x3c73ea = _0x3332cb;
            this[_0x3c73ea(496)][_0x3c73ea(497)]['updateList'][_0x3c73ea(498)](this);
        },
        'removedFromScene': function () {
            var _0x152bca = _0x3332cb;
            this[_0x152bca(496)][_0x152bca(497)]['updateList'][_0x152bca(499)](this);
        },
        'preUpdate': function (_0x388337, _0x314f76) {
            var _0x4cd5ed = _0x3332cb;
            this['anims'][_0x4cd5ed(500)](_0x388337, _0x314f76);
        },
        'play': function (_0x1bed84, _0x5dce3b) {
            var _0x1724a9 = _0x3332cb;
            return this[_0x1724a9(490)][_0x1724a9(501)](_0x1bed84, _0x5dce3b);
        },
        'playReverse': function (_0x598ada, _0xd57e20) {
            var _0x41e1ae = _0x3332cb;
            return this[_0x41e1ae(490)]['playReverse'](_0x598ada, _0xd57e20);
        },
        'playAfterDelay': function (_0x2868d1, _0x3b57de) {
            var _0x30aa56 = _0x3332cb;
            return this['anims'][_0x30aa56(502)](_0x2868d1, _0x3b57de);
        },
        'playAfterRepeat': function (_0x2d9593, _0x546ad3) {
            var _0x50cff8 = _0x3332cb;
            return this['anims'][_0x50cff8(503)](_0x2d9593, _0x546ad3);
        },
        'chain': function (_0x1906df) {
            var _0x1cf0a8 = _0x3332cb;
            return this[_0x1cf0a8(490)][_0x1cf0a8(504)](_0x1906df);
        },
        'stop': function () {
            var _0x13a7f0 = _0x3332cb;
            return this[_0x13a7f0(490)][_0x13a7f0(505)]();
        },
        'stopAfterDelay': function (_0x2e99d3) {
            var _0x4f6a5b = _0x3332cb;
            return this[_0x4f6a5b(490)][_0x4f6a5b(506)](_0x2e99d3);
        },
        'stopAfterRepeat': function (_0x3acfdb) {
            var _0x42db02 = _0x3332cb;
            return this[_0x42db02(490)]['stopAfterRepeat'](_0x3acfdb);
        },
        'stopOnFrame': function (_0x5ee578) {
            var _0x26b7cb = _0x3332cb;
            return this[_0x26b7cb(490)][_0x26b7cb(507)](_0x5ee578);
        },
        'toJSON': function () {
            return Components['ToJSON'](this);
        },
        'preDestroy': function () {
            var _0x2e2df4 = _0x3332cb;
            this[_0x2e2df4(490)]['destroy'](), this['anims'] = undefined;
        }
    });
module[_0x3332cb(508)] = Sprite;