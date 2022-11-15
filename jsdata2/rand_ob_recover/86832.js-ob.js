var ArcadeImage = require(_0x4a8171(294)), ArcadeSprite = require(_0x4a8171(295)), Class = require(_0x4a8171(296)), CONST = require('./const'), PhysicsGroup = require('./PhysicsGroup'), StaticPhysicsGroup = require(_0x4a8171(297)), Factory = new Class({
        'initialize': function Factory(_0x5be915) {
            var _0x42a247 = _0x4a8171;
            this[_0x42a247(298)] = _0x5be915, this['scene'] = _0x5be915['scene'], this[_0x42a247(299)] = _0x5be915['scene'][_0x42a247(299)];
        },
        'collider': function (_0x53e732, _0x3f82e1, _0x5977b3, _0x1b9ce3, _0x56772a) {
            var _0xce4ff3 = _0x4a8171;
            return this['world'][_0xce4ff3(300)](_0x53e732, _0x3f82e1, _0x5977b3, _0x1b9ce3, _0x56772a);
        },
        'overlap': function (_0x199ebc, _0x57aae0, _0x16316b, _0x3d8658, _0x1091aa) {
            var _0x28fd8e = _0x4a8171;
            return this[_0x28fd8e(298)]['addOverlap'](_0x199ebc, _0x57aae0, _0x16316b, _0x3d8658, _0x1091aa);
        },
        'existing': function (_0x1f7916, _0x1d77a9) {
            var _0x294b5d = _0x4a8171, _0x15b715 = _0x1d77a9 ? CONST[_0x294b5d(301)] : CONST[_0x294b5d(302)];
            return this['world'][_0x294b5d(303)](_0x1f7916, _0x15b715), _0x1f7916;
        },
        'staticImage': function (_0x5bb9b2, _0x2aa7a7, _0x4bebbc, _0xc2dd79) {
            var _0x4ab9f2 = _0x4a8171, _0x2d8f02 = new ArcadeImage(this[_0x4ab9f2(304)], _0x5bb9b2, _0x2aa7a7, _0x4bebbc, _0xc2dd79);
            return this[_0x4ab9f2(299)][_0x4ab9f2(305)][_0x4ab9f2(306)](_0x2d8f02), this[_0x4ab9f2(298)][_0x4ab9f2(303)](_0x2d8f02, CONST[_0x4ab9f2(301)]), _0x2d8f02;
        },
        'image': function (_0x14368b, _0x25404d, _0x5bea26, _0x379570) {
            var _0x579dc0 = _0x4a8171, _0x2aa170 = new ArcadeImage(this[_0x579dc0(304)], _0x14368b, _0x25404d, _0x5bea26, _0x379570);
            return this[_0x579dc0(299)][_0x579dc0(305)][_0x579dc0(306)](_0x2aa170), this[_0x579dc0(298)][_0x579dc0(303)](_0x2aa170, CONST['DYNAMIC_BODY']), _0x2aa170;
        },
        'staticSprite': function (_0x1ea785, _0x238028, _0x170e86, _0x8e0eed) {
            var _0x3ed589 = _0x4a8171, _0x3415c9 = new ArcadeSprite(this[_0x3ed589(304)], _0x1ea785, _0x238028, _0x170e86, _0x8e0eed);
            return this[_0x3ed589(299)][_0x3ed589(305)][_0x3ed589(306)](_0x3415c9), this[_0x3ed589(299)][_0x3ed589(307)][_0x3ed589(306)](_0x3415c9), this[_0x3ed589(298)]['enableBody'](_0x3415c9, CONST[_0x3ed589(301)]), _0x3415c9;
        },
        'sprite': function (_0x217e19, _0x3e2c78, _0x50c52d, _0x431a29) {
            var _0x4fb684 = _0x4a8171, _0x61a1dc = { 'lapmq': _0x4fb684(308) }, _0x18caf1 = _0x61a1dc[_0x4fb684(309)][_0x4fb684(310)]('|'), _0x338f87 = 974 + 7822 * -1 + 6848;
            while (!![]) {
                switch (_0x18caf1[_0x338f87++]) {
                case '0':
                    this[_0x4fb684(299)][_0x4fb684(307)][_0x4fb684(306)](_0x321d4);
                    continue;
                case '1':
                    var _0x321d4 = new ArcadeSprite(this[_0x4fb684(304)], _0x217e19, _0x3e2c78, _0x50c52d, _0x431a29);
                    continue;
                case '2':
                    this['sys'][_0x4fb684(305)][_0x4fb684(306)](_0x321d4);
                    continue;
                case '3':
                    this[_0x4fb684(298)]['enableBody'](_0x321d4, CONST[_0x4fb684(302)]);
                    continue;
                case '4':
                    return _0x321d4;
                }
                break;
            }
        },
        'staticGroup': function (_0xf8bc3, _0x4e8e84) {
            var _0x327d36 = _0x4a8171;
            return this[_0x327d36(299)]['updateList'][_0x327d36(306)](new StaticPhysicsGroup(this['world'], this[_0x327d36(298)][_0x327d36(304)], _0xf8bc3, _0x4e8e84));
        },
        'group': function (_0x5eb963, _0x171afb) {
            var _0x4f6095 = _0x4a8171;
            return this[_0x4f6095(299)]['updateList'][_0x4f6095(306)](new PhysicsGroup(this['world'], this[_0x4f6095(298)][_0x4f6095(304)], _0x5eb963, _0x171afb));
        },
        'destroy': function () {
            var _0x43e607 = _0x4a8171;
            this['world'] = null, this[_0x43e607(304)] = null, this[_0x43e607(299)] = null;
        }
    });
module[_0x4a8171(311)] = Factory;