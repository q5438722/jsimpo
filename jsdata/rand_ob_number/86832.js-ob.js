/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var ArcadeImage = require('./ArcadeImage'), ArcadeSprite = require('./ArcadeSprite'), Class = require('../../utils/Class'), CONST = require('./const'), PhysicsGroup = require('./PhysicsGroup'), StaticPhysicsGroup = require('./StaticPhysicsGroup'), Factory = new Class({
        'initialize': function Factory(_0x405444) {
            this['world'] = _0x405444, this['scene'] = _0x405444['scene'], this['sys'] = _0x405444['scene']['sys'];
        },
        'collider': function (_0x57e581, _0x4a771e, _0x25d338, _0x4c8433, _0x201639) {
            return this['world']['addCollider'](_0x57e581, _0x4a771e, _0x25d338, _0x4c8433, _0x201639);
        },
        'overlap': function (_0x4bd284, _0x36dea8, _0x1e280a, _0x5d5f62, _0x57a29b) {
            return this['world']['addOverlap'](_0x4bd284, _0x36dea8, _0x1e280a, _0x5d5f62, _0x57a29b);
        },
        'existing': function (_0x254fc0, _0x2b8f5a) {
            var _0x2d0535 = _0x2b8f5a ? CONST['STATIC_BODY'] : CONST['DYNAMIC_BODY'];
            return this['world']['enableBody'](_0x254fc0, _0x2d0535), _0x254fc0;
        },
        'staticImage': function (_0x294407, _0x549430, _0x4daaae, _0x5ef274) {
            var _0x162787 = new ArcadeImage(this['scene'], _0x294407, _0x549430, _0x4daaae, _0x5ef274);
            return this['sys']['displayList']['add'](_0x162787), this['world']['enableBody'](_0x162787, CONST['STATIC_BODY']), _0x162787;
        },
        'image': function (_0xc3f4a3, _0x40c38e, _0x422ce0, _0x3ed06f) {
            var _0x3d0132 = new ArcadeImage(this['scene'], _0xc3f4a3, _0x40c38e, _0x422ce0, _0x3ed06f);
            return this['sys']['displayList']['add'](_0x3d0132), this['world']['enableBody'](_0x3d0132, CONST['DYNAMIC_BODY']), _0x3d0132;
        },
        'staticSprite': function (_0x3dc976, _0x1f96e0, _0x2a3efd, _0x1e7e47) {
            var _0x30f0c8 = new ArcadeSprite(this['scene'], _0x3dc976, _0x1f96e0, _0x2a3efd, _0x1e7e47);
            return this['sys']['displayList']['add'](_0x30f0c8), this['sys']['updateList']['add'](_0x30f0c8), this['world']['enableBody'](_0x30f0c8, CONST['STATIC_BODY']), _0x30f0c8;
        },
        'sprite': function (_0x307188, _0x5cacce, _0x280275, _0x2a9cb9) {
            var _0x1772e0 = new ArcadeSprite(this['scene'], _0x307188, _0x5cacce, _0x280275, _0x2a9cb9);
            return this['sys']['displayList']['add'](_0x1772e0), this['sys']['updateList']['add'](_0x1772e0), this['world']['enableBody'](_0x1772e0, CONST['DYNAMIC_BODY']), _0x1772e0;
        },
        'staticGroup': function (_0x39a267, _0x4e4eda) {
            return this['sys']['updateList']['add'](new StaticPhysicsGroup(this['world'], this['world']['scene'], _0x39a267, _0x4e4eda));
        },
        'group': function (_0x2ea3e7, _0x163a80) {
            return this['sys']['updateList']['add'](new PhysicsGroup(this['world'], this['world']['scene'], _0x2ea3e7, _0x163a80));
        },
        'destroy': function () {
            this['world'] = null, this['scene'] = null, this['sys'] = null;
        }
    });
module['exports'] = Factory;
