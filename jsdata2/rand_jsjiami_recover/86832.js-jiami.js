var ArcadeImage = require('./ArcadeImage');
var ArcadeSprite = require('./ArcadeSprite');
var Class = require('../../utils/Class');
var CONST = require('./const');
var PhysicsGroup = require('./PhysicsGroup');
var StaticPhysicsGroup = require('./StaticPhysicsGroup');
var Factory = new Class({
    'initialize': function Factory(_0xa90bf8) {
        this['world'] = _0xa90bf8;
        this['scene'] = _0xa90bf8['scene'];
        this['sys'] = _0xa90bf8['scene']['sys'];
    },
    'collider': function (_0x438027, _0x24e55f, _0x50eb8e, _0x26c0c2, _0x4f61bd) {
        return this['world']['addCollider'](_0x438027, _0x24e55f, _0x50eb8e, _0x26c0c2, _0x4f61bd);
    },
    'overlap': function (_0x38b34a, _0x19eb31, _0x295e37, _0x434ae7, _0x5e7831) {
        return this['world']['addOverlap'](_0x38b34a, _0x19eb31, _0x295e37, _0x434ae7, _0x5e7831);
    },
    'existing': function (_0x5d1606, _0x4233ad) {
        var _0x2ab385 = _0x4233ad ? CONST['STATIC_BODY'] : CONST['DYNAMIC_BODY'];
        this['world']['enableBody'](_0x5d1606, _0x2ab385);
        return _0x5d1606;
    },
    'staticImage': function (_0x538546, _0x52b92e, _0x14a861, _0x548b2f) {
        var _0x39b4e5 = new ArcadeImage(this['scene'], _0x538546, _0x52b92e, _0x14a861, _0x548b2f);
        this['sys']['displayList']['add'](_0x39b4e5);
        this['world']['enableBody'](_0x39b4e5, CONST['STATIC_BODY']);
        return _0x39b4e5;
    },
    'image': function (_0xaec998, _0x9cb5f4, _0x101298, _0x65ee75) {
        var _0x2acd2a = new ArcadeImage(this['scene'], _0xaec998, _0x9cb5f4, _0x101298, _0x65ee75);
        this['sys']['displayList']['add'](_0x2acd2a);
        this['world']['enableBody'](_0x2acd2a, CONST['DYNAMIC_BODY']);
        return _0x2acd2a;
    },
    'staticSprite': function (_0xfa2b1b, _0x461062, _0x1d66d2, _0xc6dca3) {
        var _0x1b7786 = new ArcadeSprite(this['scene'], _0xfa2b1b, _0x461062, _0x1d66d2, _0xc6dca3);
        this['sys']['displayList']['add'](_0x1b7786);
        this['sys']['updateList']['add'](_0x1b7786);
        this['world']['enableBody'](_0x1b7786, CONST['STATIC_BODY']);
        return _0x1b7786;
    },
    'sprite': function (_0x126fb7, _0x56ed0f, _0x33f0b2, _0x755030) {
        var _0x1140af = '4|2|0|1|3'['split']('|'), _0x3513a5 = 0;
        while (!![]) {
            switch (_0x1140af[_0x3513a5++]) {
            case '0':
                this['sys']['updateList']['add'](_0x45144f);
                continue;
            case '1':
                this['world']['enableBody'](_0x45144f, CONST['DYNAMIC_BODY']);
                continue;
            case '2':
                this['sys']['displayList']['add'](_0x45144f);
                continue;
            case '3':
                return _0x45144f;
            case '4':
                var _0x45144f = new ArcadeSprite(this['scene'], _0x126fb7, _0x56ed0f, _0x33f0b2, _0x755030);
                continue;
            }
            break;
        }
    },
    'staticGroup': function (_0x36ca9d, _0xc518e) {
        return this['sys']['updateList']['add'](new StaticPhysicsGroup(this['world'], this['world']['scene'], _0x36ca9d, _0xc518e));
    },
    'group': function (_0xafe5e, _0x32766e) {
        return this['sys']['updateList']['add'](new PhysicsGroup(this['world'], this['world']['scene'], _0xafe5e, _0x32766e));
    },
    'destroy': function () {
        this['world'] = null;
        this['scene'] = null;
        this['sys'] = null;
    }
});
module['exports'] = Factory;