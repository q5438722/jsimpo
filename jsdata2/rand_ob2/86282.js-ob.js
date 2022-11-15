/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var _0x15a3 = [
    'remove',
    'update',
    'play',
    'playAfterDelay',
    'playAfterRepeat',
    'chain',
    'stop',
    'stopAfterDelay',
    'stopOnFrame',
    'exports',
    '1839119TbkURS',
    '149474kIJSFW',
    '10TbjOte',
    '79SuMszE',
    '4924UdhFEO',
    '1738216qVeDjg',
    '1fpXzHm',
    '1865158MQqTYv',
    '1206529hySSow',
    '2145396GcRHHb',
    '../../utils/Class',
    '../GameObject',
    './SpriteRender',
    'BlendMode',
    'Depth',
    'GetBounds',
    'Mask',
    'Pipeline',
    'ScrollFactor',
    'Tint',
    'Transform',
    'Visible',
    'call',
    'Sprite',
    'resetCropObject',
    'anims',
    'setTexture',
    'setPosition',
    'setSizeToFrame',
    'setOriginFromFrame',
    'initPipeline',
    'scene',
    'sys',
    'add'
];
var _0x3332cb = _0x4112;
(function (_0x5540c8, _0x441d21) {
    var _0x5e2f25 = _0x4112;
    while (!![]) {
        try {
            var _0x4da274 = parseInt(_0x5e2f25(0x1d1)) + parseInt(_0x5e2f25(0x1d2)) * -parseInt(_0x5e2f25(0x1d3)) + -parseInt(_0x5e2f25(0x1d4)) * -parseInt(_0x5e2f25(0x1d5)) + parseInt(_0x5e2f25(0x1d6)) + -parseInt(_0x5e2f25(0x1d7)) * -parseInt(_0x5e2f25(0x1d8)) + -parseInt(_0x5e2f25(0x1d9)) + -parseInt(_0x5e2f25(0x1da));
            if (_0x4da274 === _0x441d21)
                break;
            else
                _0x5540c8['push'](_0x5540c8['shift']());
        } catch (_0x112555) {
            _0x5540c8['push'](_0x5540c8['shift']());
        }
    }
}(_0x15a3, 0xf06f8));
function _0x4112(_0x27a8fb, _0x32181c) {
    return _0x4112 = function (_0x15a3d5, _0x411202) {
        _0x15a3d5 = _0x15a3d5 - 0x1d1;
        var _0x8a6887 = _0x15a3[_0x15a3d5];
        return _0x8a6887;
    }, _0x4112(_0x27a8fb, _0x32181c);
}
var AnimationState = require('../../animations/AnimationState'), Class = require(_0x3332cb(0x1db)), Components = require('../components'), GameObject = require(_0x3332cb(0x1dc)), SpriteRender = require(_0x3332cb(0x1dd)), Sprite = new Class({
        'Extends': GameObject,
        'Mixins': [
            Components['Alpha'],
            Components[_0x3332cb(0x1de)],
            Components[_0x3332cb(0x1df)],
            Components['Flip'],
            Components[_0x3332cb(0x1e0)],
            Components[_0x3332cb(0x1e1)],
            Components['Origin'],
            Components[_0x3332cb(0x1e2)],
            Components[_0x3332cb(0x1e3)],
            Components['Size'],
            Components['TextureCrop'],
            Components[_0x3332cb(0x1e4)],
            Components[_0x3332cb(0x1e5)],
            Components[_0x3332cb(0x1e6)],
            SpriteRender
        ],
        'initialize': function Sprite(_0x48baee, _0x4c6e00, _0x5ddbd7, _0xcf0b9c, _0x55c047) {
            var _0x88d2fe = _0x3332cb;
            GameObject[_0x88d2fe(0x1e7)](this, _0x48baee, _0x88d2fe(0x1e8)), this['_crop'] = this[_0x88d2fe(0x1e9)](), this[_0x88d2fe(0x1ea)] = new AnimationState(this), this[_0x88d2fe(0x1eb)](_0xcf0b9c, _0x55c047), this[_0x88d2fe(0x1ec)](_0x4c6e00, _0x5ddbd7), this[_0x88d2fe(0x1ed)](), this[_0x88d2fe(0x1ee)](), this[_0x88d2fe(0x1ef)]();
        },
        'addedToScene': function () {
            var _0x3c73ea = _0x3332cb;
            this[_0x3c73ea(0x1f0)][_0x3c73ea(0x1f1)]['updateList'][_0x3c73ea(0x1f2)](this);
        },
        'removedFromScene': function () {
            var _0x152bca = _0x3332cb;
            this[_0x152bca(0x1f0)][_0x152bca(0x1f1)]['updateList'][_0x152bca(0x1f3)](this);
        },
        'preUpdate': function (_0x388337, _0x314f76) {
            var _0x4cd5ed = _0x3332cb;
            this['anims'][_0x4cd5ed(0x1f4)](_0x388337, _0x314f76);
        },
        'play': function (_0x1bed84, _0x5dce3b) {
            var _0x1724a9 = _0x3332cb;
            return this[_0x1724a9(0x1ea)][_0x1724a9(0x1f5)](_0x1bed84, _0x5dce3b);
        },
        'playReverse': function (_0x598ada, _0xd57e20) {
            var _0x41e1ae = _0x3332cb;
            return this[_0x41e1ae(0x1ea)]['playReverse'](_0x598ada, _0xd57e20);
        },
        'playAfterDelay': function (_0x2868d1, _0x3b57de) {
            var _0x30aa56 = _0x3332cb;
            return this['anims'][_0x30aa56(0x1f6)](_0x2868d1, _0x3b57de);
        },
        'playAfterRepeat': function (_0x2d9593, _0x546ad3) {
            var _0x50cff8 = _0x3332cb;
            return this['anims'][_0x50cff8(0x1f7)](_0x2d9593, _0x546ad3);
        },
        'chain': function (_0x1906df) {
            var _0x1cf0a8 = _0x3332cb;
            return this[_0x1cf0a8(0x1ea)][_0x1cf0a8(0x1f8)](_0x1906df);
        },
        'stop': function () {
            var _0x13a7f0 = _0x3332cb;
            return this[_0x13a7f0(0x1ea)][_0x13a7f0(0x1f9)]();
        },
        'stopAfterDelay': function (_0x2e99d3) {
            var _0x4f6a5b = _0x3332cb;
            return this[_0x4f6a5b(0x1ea)][_0x4f6a5b(0x1fa)](_0x2e99d3);
        },
        'stopAfterRepeat': function (_0x3acfdb) {
            var _0x42db02 = _0x3332cb;
            return this[_0x42db02(0x1ea)]['stopAfterRepeat'](_0x3acfdb);
        },
        'stopOnFrame': function (_0x5ee578) {
            var _0x26b7cb = _0x3332cb;
            return this[_0x26b7cb(0x1ea)][_0x26b7cb(0x1fb)](_0x5ee578);
        },
        'toJSON': function () {
            return Components['ToJSON'](this);
        },
        'preDestroy': function () {
            var _0x2e2df4 = _0x3332cb;
            this[_0x2e2df4(0x1ea)]['destroy'](), this['anims'] = undefined;
        }
    });
module[_0x3332cb(0x1fc)] = Sprite;
