/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var _0x25a2 = [
    '1355678AOsVPn',
    '../../animations/AnimationState',
    '../../utils/Class',
    '../components',
    '../GameObject',
    './SpriteRender',
    'Alpha',
    'BlendMode',
    'Depth',
    'Flip',
    'Mask',
    'Origin',
    'Pipeline',
    'ScrollFactor',
    'Size',
    'Tint',
    'Transform',
    'Visible',
    'Sprite',
    'call',
    '_crop',
    'resetCropObject',
    'setTexture',
    'setPosition',
    'initPipeline',
    'sys',
    'updateList',
    'add',
    'scene',
    'remove',
    'update',
    'anims',
    'playAfterDelay',
    'playAfterRepeat',
    'stop',
    'stopAfterDelay',
    'stopAfterRepeat',
    'stopOnFrame',
    'destroy',
    '15731DpgNrt',
    '26eBOcpz',
    '1DVGCSQ',
    '237667SdWYOx',
    '2285CvsRIQ',
    '20EpLmTI',
    '319760KFkjGH',
    '4mYBQFU',
    '201226GcMrku',
    '1UBBssr',
    '465601INhUSM'
];
function _0x3656(_0x140615, _0x272873) {
    return _0x3656 = function (_0x41a7b1, _0x57e6ec) {
        _0x41a7b1 = _0x41a7b1 - (0x501 + 0x2 * 0x7 + -0x42b * 0x1);
        var _0x495b5d = _0x25a2[_0x41a7b1];
        return _0x495b5d;
    }, _0x3656(_0x140615, _0x272873);
}
var _0x250ef2 = _0x3656;
(function (_0x2d8207, _0x105388) {
    var _0x1893a4 = _0x3656;
    while (!![]) {
        try {
            var _0x1c2b3a = parseInt(_0x1893a4(0xe4)) * -parseInt(_0x1893a4(0xe5)) + parseInt(_0x1893a4(0xe6)) * -parseInt(_0x1893a4(0xe7)) + -parseInt(_0x1893a4(0xe8)) * parseInt(_0x1893a4(0xe9)) + -parseInt(_0x1893a4(0xea)) + parseInt(_0x1893a4(0xeb)) * parseInt(_0x1893a4(0xec)) + parseInt(_0x1893a4(0xed)) * -parseInt(_0x1893a4(0xee)) + parseInt(_0x1893a4(0xef));
            if (_0x1c2b3a === _0x105388)
                break;
            else
                _0x2d8207['push'](_0x2d8207['shift']());
        } catch (_0x591d13) {
            _0x2d8207['push'](_0x2d8207['shift']());
        }
    }
}(_0x25a2, 0x2dd3 * -0x2e + -0x35a95 * 0x1 + -0x3 * -0x755f5));
var AnimationState = require(_0x250ef2(0xf0)), Class = require(_0x250ef2(0xf1)), Components = require(_0x250ef2(0xf2)), GameObject = require(_0x250ef2(0xf3)), SpriteRender = require(_0x250ef2(0xf4)), Sprite = new Class({
        'Extends': GameObject,
        'Mixins': [
            Components[_0x250ef2(0xf5)],
            Components[_0x250ef2(0xf6)],
            Components[_0x250ef2(0xf7)],
            Components[_0x250ef2(0xf8)],
            Components['GetBounds'],
            Components[_0x250ef2(0xf9)],
            Components[_0x250ef2(0xfa)],
            Components[_0x250ef2(0xfb)],
            Components[_0x250ef2(0xfc)],
            Components[_0x250ef2(0xfd)],
            Components['TextureCrop'],
            Components[_0x250ef2(0xfe)],
            Components[_0x250ef2(0xff)],
            Components[_0x250ef2(0x100)],
            SpriteRender
        ],
        'initialize': function Sprite(_0x5eb64c, _0x397e37, _0xd6411e, _0x27a872, _0x182bfe) {
            var _0x5f5b04 = _0x250ef2, _0x404a4e = { 'MmYIP': _0x5f5b04(0x101) };
            GameObject[_0x5f5b04(0x102)](this, _0x5eb64c, _0x404a4e['MmYIP']), this[_0x5f5b04(0x103)] = this[_0x5f5b04(0x104)](), this['anims'] = new AnimationState(this), this[_0x5f5b04(0x105)](_0x27a872, _0x182bfe), this[_0x5f5b04(0x106)](_0x397e37, _0xd6411e), this['setSizeToFrame'](), this['setOriginFromFrame'](), this[_0x5f5b04(0x107)]();
        },
        'addedToScene': function () {
            var _0x581841 = _0x250ef2;
            this['scene'][_0x581841(0x108)][_0x581841(0x109)][_0x581841(0x10a)](this);
        },
        'removedFromScene': function () {
            var _0x45642c = _0x250ef2;
            this[_0x45642c(0x10b)][_0x45642c(0x108)][_0x45642c(0x109)][_0x45642c(0x10c)](this);
        },
        'preUpdate': function (_0x233628, _0x55d664) {
            var _0x33d1b2 = _0x250ef2;
            this['anims'][_0x33d1b2(0x10d)](_0x233628, _0x55d664);
        },
        'play': function (_0x44d5b4, _0x516e68) {
            var _0x390d7d = _0x250ef2;
            return this[_0x390d7d(0x10e)]['play'](_0x44d5b4, _0x516e68);
        },
        'playReverse': function (_0x1ee4f5, _0x4cd2a2) {
            var _0x1e9baf = _0x250ef2;
            return this[_0x1e9baf(0x10e)]['playReverse'](_0x1ee4f5, _0x4cd2a2);
        },
        'playAfterDelay': function (_0x5a663a, _0x5e34a9) {
            var _0x5157ec = _0x250ef2;
            return this[_0x5157ec(0x10e)][_0x5157ec(0x10f)](_0x5a663a, _0x5e34a9);
        },
        'playAfterRepeat': function (_0x1936a6, _0x40af95) {
            var _0x26a123 = _0x250ef2;
            return this['anims'][_0x26a123(0x110)](_0x1936a6, _0x40af95);
        },
        'chain': function (_0x54cebd) {
            var _0x3a14e3 = _0x250ef2;
            return this[_0x3a14e3(0x10e)]['chain'](_0x54cebd);
        },
        'stop': function () {
            var _0x516041 = _0x250ef2;
            return this[_0x516041(0x10e)][_0x516041(0x111)]();
        },
        'stopAfterDelay': function (_0x369811) {
            var _0x354f92 = _0x250ef2;
            return this[_0x354f92(0x10e)][_0x354f92(0x112)](_0x369811);
        },
        'stopAfterRepeat': function (_0x5b0e56) {
            var _0x5793d1 = _0x250ef2;
            return this[_0x5793d1(0x10e)][_0x5793d1(0x113)](_0x5b0e56);
        },
        'stopOnFrame': function (_0x1bfeb8) {
            var _0x5a19f7 = _0x250ef2;
            return this['anims'][_0x5a19f7(0x114)](_0x1bfeb8);
        },
        'toJSON': function () {
            return Components['ToJSON'](this);
        },
        'preDestroy': function () {
            var _0x16d76e = _0x250ef2;
            this[_0x16d76e(0x10e)][_0x16d76e(0x115)](), this[_0x16d76e(0x10e)] = undefined;
        }
    });
module['exports'] = Sprite;
