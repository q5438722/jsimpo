var AnimationState = require(_0x250ef2(240)), Class = require(_0x250ef2(241)), Components = require(_0x250ef2(242)), GameObject = require(_0x250ef2(243)), SpriteRender = require(_0x250ef2(244)), Sprite = new Class({
        'Extends': GameObject,
        'Mixins': [
            Components[_0x250ef2(245)],
            Components[_0x250ef2(246)],
            Components[_0x250ef2(247)],
            Components[_0x250ef2(248)],
            Components['GetBounds'],
            Components[_0x250ef2(249)],
            Components[_0x250ef2(250)],
            Components[_0x250ef2(251)],
            Components[_0x250ef2(252)],
            Components[_0x250ef2(253)],
            Components['TextureCrop'],
            Components[_0x250ef2(254)],
            Components[_0x250ef2(255)],
            Components[_0x250ef2(256)],
            SpriteRender
        ],
        'initialize': function Sprite(_0x5eb64c, _0x397e37, _0xd6411e, _0x27a872, _0x182bfe) {
            var _0x5f5b04 = _0x250ef2, _0x404a4e = { 'MmYIP': _0x5f5b04(257) };
            GameObject[_0x5f5b04(258)](this, _0x5eb64c, _0x404a4e['MmYIP']), this[_0x5f5b04(259)] = this[_0x5f5b04(260)](), this['anims'] = new AnimationState(this), this[_0x5f5b04(261)](_0x27a872, _0x182bfe), this[_0x5f5b04(262)](_0x397e37, _0xd6411e), this['setSizeToFrame'](), this['setOriginFromFrame'](), this[_0x5f5b04(263)]();
        },
        'addedToScene': function () {
            var _0x581841 = _0x250ef2;
            this['scene'][_0x581841(264)][_0x581841(265)][_0x581841(266)](this);
        },
        'removedFromScene': function () {
            var _0x45642c = _0x250ef2;
            this[_0x45642c(267)][_0x45642c(264)][_0x45642c(265)][_0x45642c(268)](this);
        },
        'preUpdate': function (_0x233628, _0x55d664) {
            var _0x33d1b2 = _0x250ef2;
            this['anims'][_0x33d1b2(269)](_0x233628, _0x55d664);
        },
        'play': function (_0x44d5b4, _0x516e68) {
            var _0x390d7d = _0x250ef2;
            return this[_0x390d7d(270)]['play'](_0x44d5b4, _0x516e68);
        },
        'playReverse': function (_0x1ee4f5, _0x4cd2a2) {
            var _0x1e9baf = _0x250ef2;
            return this[_0x1e9baf(270)]['playReverse'](_0x1ee4f5, _0x4cd2a2);
        },
        'playAfterDelay': function (_0x5a663a, _0x5e34a9) {
            var _0x5157ec = _0x250ef2;
            return this[_0x5157ec(270)][_0x5157ec(271)](_0x5a663a, _0x5e34a9);
        },
        'playAfterRepeat': function (_0x1936a6, _0x40af95) {
            var _0x26a123 = _0x250ef2;
            return this['anims'][_0x26a123(272)](_0x1936a6, _0x40af95);
        },
        'chain': function (_0x54cebd) {
            var _0x3a14e3 = _0x250ef2;
            return this[_0x3a14e3(270)]['chain'](_0x54cebd);
        },
        'stop': function () {
            var _0x516041 = _0x250ef2;
            return this[_0x516041(270)][_0x516041(273)]();
        },
        'stopAfterDelay': function (_0x369811) {
            var _0x354f92 = _0x250ef2;
            return this[_0x354f92(270)][_0x354f92(274)](_0x369811);
        },
        'stopAfterRepeat': function (_0x5b0e56) {
            var _0x5793d1 = _0x250ef2;
            return this[_0x5793d1(270)][_0x5793d1(275)](_0x5b0e56);
        },
        'stopOnFrame': function (_0x1bfeb8) {
            var _0x5a19f7 = _0x250ef2;
            return this['anims'][_0x5a19f7(276)](_0x1bfeb8);
        },
        'toJSON': function () {
            return Components['ToJSON'](this);
        },
        'preDestroy': function () {
            var _0x16d76e = _0x250ef2;
            this[_0x16d76e(270)][_0x16d76e(277)](), this[_0x16d76e(270)] = undefined;
        }
    });
module['exports'] = Sprite;