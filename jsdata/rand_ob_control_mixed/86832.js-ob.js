/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var ArcadeImage = require('./ArcadeImage'), ArcadeSprite = require('./ArcadeSprite'), Class = require('../../utils/Class'), CONST = require('./const'), PhysicsGroup = require('./PhysicsGroup'), StaticPhysicsGroup = require('./StaticPhysicsGroup'), Factory = new Class({
        'initialize': function Factory(_0x10edfe) {
            this['world'] = _0x10edfe, this['scene'] = _0x10edfe['scene'], this['sys'] = _0x10edfe['scene']['sys'];
        },
        'collider': function (_0x1b6188, _0x5c13ec, _0x5efbe2, _0x2855ef, _0x24f671) {
            return this['world']['addCollider'](_0x1b6188, _0x5c13ec, _0x5efbe2, _0x2855ef, _0x24f671);
        },
        'overlap': function (_0x44f344, _0x5a3903, _0x20cb20, _0x36cf30, _0x49f0dc) {
            return this['world']['addOverlap'](_0x44f344, _0x5a3903, _0x20cb20, _0x36cf30, _0x49f0dc);
        },
        'existing': function (_0x15b6f6, _0x2da904) {
            var _0x3e55ea = _0x2da904 ? CONST['STATIC_BODY'] : CONST['DYNAMIC_BODY'];
            return this['world']['enableBody'](_0x15b6f6, _0x3e55ea), _0x15b6f6;
        },
        'staticImage': function (_0x220b50, _0x56a40c, _0x45149d, _0x5ef3b5) {
            var _0x16ddb3 = new ArcadeImage(this['scene'], _0x220b50, _0x56a40c, _0x45149d, _0x5ef3b5);
            return this['sys']['displayList']['add'](_0x16ddb3), this['world']['enableBody'](_0x16ddb3, CONST['STATIC_BODY']), _0x16ddb3;
        },
        'image': function (_0x201a7d, _0x474eb8, _0x5594ef, _0x4511d0) {
            var _0x45ff6b = new ArcadeImage(this['scene'], _0x201a7d, _0x474eb8, _0x5594ef, _0x4511d0);
            return this['sys']['displayList']['add'](_0x45ff6b), this['world']['enableBody'](_0x45ff6b, CONST['DYNAMIC_BODY']), _0x45ff6b;
        },
        'staticSprite': function (_0x60d9e4, _0x466c9c, _0xfd5dd4, _0x18a164) {
            var _0x2ce7f8 = { 'ZNPgt': '1|3|2|0|4' }, _0x285e52 = _0x2ce7f8['ZNPgt']['split']('|'), _0x263a7a = 0x0;
            while (!![]) {
                switch (_0x285e52[_0x263a7a++]) {
                case '0':
                    this['world']['enableBody'](_0x422fbb, CONST['STATIC_BODY']);
                    continue;
                case '1':
                    var _0x422fbb = new ArcadeSprite(this['scene'], _0x60d9e4, _0x466c9c, _0xfd5dd4, _0x18a164);
                    continue;
                case '2':
                    this['sys']['updateList']['add'](_0x422fbb);
                    continue;
                case '3':
                    this['sys']['displayList']['add'](_0x422fbb);
                    continue;
                case '4':
                    return _0x422fbb;
                }
                break;
            }
        },
        'sprite': function (_0x3bea99, _0x49c69b, _0x890b00, _0x325e30) {
            var _0x3c9e20 = { 'Wbkee': '3|1|0|4|2' }, _0x7eef62 = _0x3c9e20['Wbkee']['split']('|'), _0x37feed = 0x0;
            while (!![]) {
                switch (_0x7eef62[_0x37feed++]) {
                case '0':
                    this['sys']['updateList']['add'](_0x2767d1);
                    continue;
                case '1':
                    this['sys']['displayList']['add'](_0x2767d1);
                    continue;
                case '2':
                    return _0x2767d1;
                case '3':
                    var _0x2767d1 = new ArcadeSprite(this['scene'], _0x3bea99, _0x49c69b, _0x890b00, _0x325e30);
                    continue;
                case '4':
                    this['world']['enableBody'](_0x2767d1, CONST['DYNAMIC_BODY']);
                    continue;
                }
                break;
            }
        },
        'staticGroup': function (_0xac4fc, _0x88e433) {
            return this['sys']['updateList']['add'](new StaticPhysicsGroup(this['world'], this['world']['scene'], _0xac4fc, _0x88e433));
        },
        'group': function (_0x2360be, _0x296649) {
            return this['sys']['updateList']['add'](new PhysicsGroup(this['world'], this['world']['scene'], _0x2360be, _0x296649));
        },
        'destroy': function () {
            this['world'] = null, this['scene'] = null, this['sys'] = null;
        }
    });
module['exports'] = Factory;
