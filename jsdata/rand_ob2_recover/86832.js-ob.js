var ArcadeImage = require(_0x21a168(466)), ArcadeSprite = require('./ArcadeSprite'), Class = require(_0x21a168(467)), CONST = require(_0x21a168(468)), PhysicsGroup = require(_0x21a168(469)), StaticPhysicsGroup = require(_0x21a168(470)), Factory = new Class({
        'initialize': function Factory(_0x1428e1) {
            var _0x492da9 = _0x21a168;
            this[_0x492da9(471)] = _0x1428e1, this[_0x492da9(472)] = _0x1428e1[_0x492da9(472)], this[_0x492da9(473)] = _0x1428e1[_0x492da9(472)][_0x492da9(473)];
        },
        'collider': function (_0xb0fd85, _0x25ec7e, _0x2ae915, _0x3fda86, _0xd56ac1) {
            var _0x1e9291 = _0x21a168;
            return this[_0x1e9291(471)][_0x1e9291(474)](_0xb0fd85, _0x25ec7e, _0x2ae915, _0x3fda86, _0xd56ac1);
        },
        'overlap': function (_0x43d0cf, _0x23b060, _0x5c6248, _0x4bdd3d, _0x120592) {
            var _0x3ede18 = _0x21a168;
            return this['world'][_0x3ede18(475)](_0x43d0cf, _0x23b060, _0x5c6248, _0x4bdd3d, _0x120592);
        },
        'existing': function (_0x561ba0, _0x31b915) {
            var _0x13d31e = _0x21a168, _0x509ff0 = _0x31b915 ? CONST[_0x13d31e(476)] : CONST[_0x13d31e(477)];
            return this[_0x13d31e(471)]['enableBody'](_0x561ba0, _0x509ff0), _0x561ba0;
        },
        'staticImage': function (_0x30d4d8, _0x5b02dd, _0x566a65, _0xfa0965) {
            var _0xcdebd7 = _0x21a168, _0x579356 = new ArcadeImage(this[_0xcdebd7(472)], _0x30d4d8, _0x5b02dd, _0x566a65, _0xfa0965);
            return this[_0xcdebd7(473)][_0xcdebd7(478)][_0xcdebd7(479)](_0x579356), this[_0xcdebd7(471)][_0xcdebd7(480)](_0x579356, CONST['STATIC_BODY']), _0x579356;
        },
        'image': function (_0x591679, _0x54c538, _0x5be0f9, _0x1b0be9) {
            var _0x159143 = _0x21a168, _0x1a35d4 = new ArcadeImage(this[_0x159143(472)], _0x591679, _0x54c538, _0x5be0f9, _0x1b0be9);
            return this[_0x159143(473)][_0x159143(478)][_0x159143(479)](_0x1a35d4), this[_0x159143(471)][_0x159143(480)](_0x1a35d4, CONST['DYNAMIC_BODY']), _0x1a35d4;
        },
        'staticSprite': function (_0x332fab, _0x324a4f, _0x1fb148, _0x357c55) {
            var _0x4e081c = _0x21a168, _0x41a701 = new ArcadeSprite(this['scene'], _0x332fab, _0x324a4f, _0x1fb148, _0x357c55);
            return this['sys'][_0x4e081c(478)][_0x4e081c(479)](_0x41a701), this[_0x4e081c(473)][_0x4e081c(481)][_0x4e081c(479)](_0x41a701), this[_0x4e081c(471)][_0x4e081c(480)](_0x41a701, CONST['STATIC_BODY']), _0x41a701;
        },
        'sprite': function (_0x2a4aee, _0x471516, _0x10d357, _0x260cf9) {
            var _0x2e68db = _0x21a168, _0x48860a = new ArcadeSprite(this[_0x2e68db(472)], _0x2a4aee, _0x471516, _0x10d357, _0x260cf9);
            return this['sys'][_0x2e68db(478)][_0x2e68db(479)](_0x48860a), this[_0x2e68db(473)][_0x2e68db(481)][_0x2e68db(479)](_0x48860a), this[_0x2e68db(471)][_0x2e68db(480)](_0x48860a, CONST[_0x2e68db(477)]), _0x48860a;
        },
        'staticGroup': function (_0xb61731, _0x2c0556) {
            var _0x31948a = _0x21a168;
            return this[_0x31948a(473)][_0x31948a(481)][_0x31948a(479)](new StaticPhysicsGroup(this[_0x31948a(471)], this[_0x31948a(471)]['scene'], _0xb61731, _0x2c0556));
        },
        'group': function (_0x2d99ea, _0x2d43a7) {
            var _0x47c2b0 = _0x21a168;
            return this[_0x47c2b0(473)][_0x47c2b0(481)]['add'](new PhysicsGroup(this[_0x47c2b0(471)], this[_0x47c2b0(471)][_0x47c2b0(472)], _0x2d99ea, _0x2d43a7));
        },
        'destroy': function () {
            var _0x1498cc = _0x21a168;
            this['world'] = null, this[_0x1498cc(472)] = null, this[_0x1498cc(473)] = null;
        }
    });
module[_0x21a168(482)] = Factory;