var ArcadeImage = require('./ArcadeImage'), ArcadeSprite = require('./ArcadeSprite'), Class = require('../../utils/Class'), CONST = require(_0x523b9c(499)), PhysicsGroup = require(_0x523b9c(500)), StaticPhysicsGroup = require(_0x523b9c(501)), Factory = new Class({
        'initialize': function Factory(_0x58042b) {
            var _0x73e9af = _0x523b9c;
            this[_0x73e9af(502)] = _0x58042b, this['scene'] = _0x58042b['scene'], this[_0x73e9af(503)] = _0x58042b[_0x73e9af(504)][_0x73e9af(503)];
        },
        'collider': function (_0x27b646, _0xae3f47, _0x21def5, _0x42f57b, _0x41b133) {
            var _0x1562e8 = _0x523b9c;
            return this[_0x1562e8(502)][_0x1562e8(505)](_0x27b646, _0xae3f47, _0x21def5, _0x42f57b, _0x41b133);
        },
        'overlap': function (_0x49d8b3, _0x216439, _0x53a26f, _0x5ecdd6, _0x4f2437) {
            var _0x265cd3 = _0x523b9c;
            return this[_0x265cd3(502)][_0x265cd3(506)](_0x49d8b3, _0x216439, _0x53a26f, _0x5ecdd6, _0x4f2437);
        },
        'existing': function (_0x450cca, _0xf68bb9) {
            var _0x317b17 = _0x523b9c, _0x4e8d21 = _0xf68bb9 ? CONST[_0x317b17(507)] : CONST['DYNAMIC_BODY'];
            return this[_0x317b17(502)][_0x317b17(508)](_0x450cca, _0x4e8d21), _0x450cca;
        },
        'staticImage': function (_0xc9e7d5, _0x373ba1, _0x162142, _0x6d25f3) {
            var _0xe632b3 = _0x523b9c, _0x4693b9 = new ArcadeImage(this['scene'], _0xc9e7d5, _0x373ba1, _0x162142, _0x6d25f3);
            return this[_0xe632b3(503)]['displayList']['add'](_0x4693b9), this['world'][_0xe632b3(508)](_0x4693b9, CONST['STATIC_BODY']), _0x4693b9;
        },
        'image': function (_0x39d91c, _0x5a662c, _0x4ef1c7, _0x154798) {
            var _0x2a9051 = _0x523b9c, _0x5cd21c = new ArcadeImage(this[_0x2a9051(504)], _0x39d91c, _0x5a662c, _0x4ef1c7, _0x154798);
            return this['sys'][_0x2a9051(509)][_0x2a9051(510)](_0x5cd21c), this[_0x2a9051(502)][_0x2a9051(508)](_0x5cd21c, CONST[_0x2a9051(511)]), _0x5cd21c;
        },
        'staticSprite': function (_0x33f916, _0x530306, _0x2da317, _0x338a79) {
            var _0x193dc7 = _0x523b9c, _0x1c5f99 = new ArcadeSprite(this[_0x193dc7(504)], _0x33f916, _0x530306, _0x2da317, _0x338a79);
            return this[_0x193dc7(503)][_0x193dc7(509)][_0x193dc7(510)](_0x1c5f99), this[_0x193dc7(503)][_0x193dc7(512)]['add'](_0x1c5f99), this[_0x193dc7(502)]['enableBody'](_0x1c5f99, CONST[_0x193dc7(507)]), _0x1c5f99;
        },
        'sprite': function (_0x3ba2ae, _0x2629de, _0x37fb3b, _0x501f66) {
            var _0x5add0c = _0x523b9c, _0x552b5c = new ArcadeSprite(this[_0x5add0c(504)], _0x3ba2ae, _0x2629de, _0x37fb3b, _0x501f66);
            return this[_0x5add0c(503)]['displayList'][_0x5add0c(510)](_0x552b5c), this[_0x5add0c(503)][_0x5add0c(512)]['add'](_0x552b5c), this[_0x5add0c(502)][_0x5add0c(508)](_0x552b5c, CONST[_0x5add0c(511)]), _0x552b5c;
        },
        'staticGroup': function (_0x2a4703, _0x2f31c2) {
            var _0x58ffca = _0x523b9c;
            return this[_0x58ffca(503)][_0x58ffca(512)][_0x58ffca(510)](new StaticPhysicsGroup(this[_0x58ffca(502)], this[_0x58ffca(502)][_0x58ffca(504)], _0x2a4703, _0x2f31c2));
        },
        'group': function (_0x262b6f, _0x4a59a7) {
            var _0x317f90 = _0x523b9c;
            return this[_0x317f90(503)][_0x317f90(512)]['add'](new PhysicsGroup(this['world'], this[_0x317f90(502)][_0x317f90(504)], _0x262b6f, _0x4a59a7));
        },
        'destroy': function () {
            var _0xcce55b = _0x523b9c;
            this[_0xcce55b(502)] = null, this[_0xcce55b(504)] = null, this['sys'] = null;
        }
    });
module[_0x523b9c(513)] = Factory;