var AnimationState = require('../../animations/AnimationState');
var Class = require('../../utils/Class');
var Components = require('../components');
var GameObject = require('../GameObject');
var SpriteRender = require('./SpriteRender');
var Sprite = new Class({
    'Extends': GameObject,
    'Mixins': [
        Components['Alpha'],
        Components['BlendMode'],
        Components['Depth'],
        Components['Flip'],
        Components['GetBounds'],
        Components['Mask'],
        Components['Origin'],
        Components['Pipeline'],
        Components['ScrollFactor'],
        Components['Size'],
        Components['TextureCrop'],
        Components['Tint'],
        Components['Transform'],
        Components['Visible'],
        SpriteRender
    ],
    'initialize': function Sprite(_0x420515, _0x32a319, _0x3bae99, _0x27fbe5, _0xd707ce) {
        var _0x5bcb76 = '2|1|4|0|7|6|5|3'['split']('|'), _0x39af66 = 0;
        while (!![]) {
            switch (_0x5bcb76[_0x39af66++]) {
            case '0':
                this['setTexture'](_0x27fbe5, _0xd707ce);
                continue;
            case '1':
                this['_crop'] = this['resetCropObject']();
                continue;
            case '2':
                GameObject['call'](this, _0x420515, 'Sprite');
                continue;
            case '3':
                this['initPipeline']();
                continue;
            case '4':
                this['anims'] = new AnimationState(this);
                continue;
            case '5':
                this['setOriginFromFrame']();
                continue;
            case '6':
                this['setSizeToFrame']();
                continue;
            case '7':
                this['setPosition'](_0x32a319, _0x3bae99);
                continue;
            }
            break;
        }
    },
    'addedToScene': function () {
        this['scene']['sys']['updateList']['add'](this);
    },
    'removedFromScene': function () {
        this['scene']['sys']['updateList']['remove'](this);
    },
    'preUpdate': function (_0x4dbb3a, _0x2e32a8) {
        this['anims']['update'](_0x4dbb3a, _0x2e32a8);
    },
    'play': function (_0x56b8c3, _0x4ad1d3) {
        return this['anims']['play'](_0x56b8c3, _0x4ad1d3);
    },
    'playReverse': function (_0x5a6fdb, _0x488317) {
        return this['anims']['playReverse'](_0x5a6fdb, _0x488317);
    },
    'playAfterDelay': function (_0x376406, _0x1de9fc) {
        return this['anims']['playAfterDelay'](_0x376406, _0x1de9fc);
    },
    'playAfterRepeat': function (_0x3eff2d, _0x5ad4af) {
        return this['anims']['playAfterRepeat'](_0x3eff2d, _0x5ad4af);
    },
    'chain': function (_0x4b7041) {
        return this['anims']['chain'](_0x4b7041);
    },
    'stop': function () {
        return this['anims']['stop']();
    },
    'stopAfterDelay': function (_0x190030) {
        return this['anims']['stopAfterDelay'](_0x190030);
    },
    'stopAfterRepeat': function (_0x4ad362) {
        return this['anims']['stopAfterRepeat'](_0x4ad362);
    },
    'stopOnFrame': function (_0x469934) {
        return this['anims']['stopOnFrame'](_0x469934);
    },
    'toJSON': function () {
        return Components['ToJSON'](this);
    },
    'preDestroy': function () {
        this['anims']['destroy']();
        this['anims'] = undefined;
    }
});
module['exports'] = Sprite;