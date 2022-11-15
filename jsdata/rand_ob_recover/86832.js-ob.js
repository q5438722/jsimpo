var ArcadeImage = require(_0x2fd956(384)), ArcadeSprite = require(_0x2fd956(385)), Class = require(_0x2fd956(386)), CONST = require(_0x2fd956(387)), PhysicsGroup = require('./PhysicsGroup'), StaticPhysicsGroup = require('./StaticPhysicsGroup'), Factory = new Class({
        'initialize': function Factory(_0x5af92e) {
            var _0xcf810f = _0x2fd956;
            this[_0xcf810f(388)] = _0x5af92e, this[_0xcf810f(389)] = _0x5af92e[_0xcf810f(389)], this[_0xcf810f(390)] = _0x5af92e[_0xcf810f(389)]['sys'];
        },
        'collider': function (_0x22b2ca, _0x1f9408, _0x584276, _0x13e163, _0xf99fa1) {
            var _0xc42a0a = _0x2fd956;
            return this[_0xc42a0a(388)][_0xc42a0a(391)](_0x22b2ca, _0x1f9408, _0x584276, _0x13e163, _0xf99fa1);
        },
        'overlap': function (_0x5a9745, _0x2c8399, _0x35c282, _0x52c7e7, _0x3fe593) {
            var _0x728512 = _0x2fd956;
            return this[_0x728512(388)][_0x728512(392)](_0x5a9745, _0x2c8399, _0x35c282, _0x52c7e7, _0x3fe593);
        },
        'existing': function (_0x5ccba2, _0xb82348) {
            var _0x8c2761 = _0x2fd956, _0x58b61e = _0xb82348 ? CONST[_0x8c2761(393)] : CONST[_0x8c2761(394)];
            return this['world'][_0x8c2761(395)](_0x5ccba2, _0x58b61e), _0x5ccba2;
        },
        'staticImage': function (_0x1b78cb, _0x5a8c29, _0x1f6e09, _0x388930) {
            var _0x56dbe4 = _0x2fd956, _0x58223a = new ArcadeImage(this[_0x56dbe4(389)], _0x1b78cb, _0x5a8c29, _0x1f6e09, _0x388930);
            return this[_0x56dbe4(390)][_0x56dbe4(396)][_0x56dbe4(397)](_0x58223a), this[_0x56dbe4(388)]['enableBody'](_0x58223a, CONST[_0x56dbe4(393)]), _0x58223a;
        },
        'image': function (_0x5841a9, _0x2ea8a9, _0x4ab18e, _0xc95c50) {
            var _0x30eedb = _0x2fd956, _0x13f706 = new ArcadeImage(this['scene'], _0x5841a9, _0x2ea8a9, _0x4ab18e, _0xc95c50);
            return this[_0x30eedb(390)][_0x30eedb(396)][_0x30eedb(397)](_0x13f706), this[_0x30eedb(388)][_0x30eedb(395)](_0x13f706, CONST[_0x30eedb(394)]), _0x13f706;
        },
        'staticSprite': function (_0x54f586, _0x596767, _0x1ad9f9, _0x53ddfd) {
            var _0x4222fe = _0x2fd956, _0x5b8818 = new ArcadeSprite(this[_0x4222fe(389)], _0x54f586, _0x596767, _0x1ad9f9, _0x53ddfd);
            return this['sys'][_0x4222fe(396)]['add'](_0x5b8818), this[_0x4222fe(390)][_0x4222fe(398)]['add'](_0x5b8818), this[_0x4222fe(388)][_0x4222fe(395)](_0x5b8818, CONST[_0x4222fe(393)]), _0x5b8818;
        },
        'sprite': function (_0x2c5270, _0x22930f, _0x1a5688, _0x5bdbb9) {
            var _0xf397e3 = _0x2fd956, _0x35fca4 = { 'XfbEE': _0xf397e3(399) }, _0x3279e3 = _0x35fca4[_0xf397e3(400)][_0xf397e3(401)]('|'), _0x2739de = 9 * 622 + -148 * 1 + -5450;
            while (!![]) {
                switch (_0x3279e3[_0x2739de++]) {
                case '0':
                    this[_0xf397e3(388)][_0xf397e3(395)](_0x1cac80, CONST[_0xf397e3(394)]);
                    continue;
                case '1':
                    this['sys'][_0xf397e3(396)][_0xf397e3(397)](_0x1cac80);
                    continue;
                case '2':
                    var _0x1cac80 = new ArcadeSprite(this[_0xf397e3(389)], _0x2c5270, _0x22930f, _0x1a5688, _0x5bdbb9);
                    continue;
                case '3':
                    this[_0xf397e3(390)][_0xf397e3(398)]['add'](_0x1cac80);
                    continue;
                case '4':
                    return _0x1cac80;
                }
                break;
            }
        },
        'staticGroup': function (_0x44f59b, _0x1b3532) {
            var _0x38bbba = _0x2fd956;
            return this['sys'][_0x38bbba(398)]['add'](new StaticPhysicsGroup(this[_0x38bbba(388)], this[_0x38bbba(388)][_0x38bbba(389)], _0x44f59b, _0x1b3532));
        },
        'group': function (_0x2d2d1f, _0xcbef92) {
            var _0x21da12 = _0x2fd956;
            return this['sys']['updateList'][_0x21da12(397)](new PhysicsGroup(this[_0x21da12(388)], this[_0x21da12(388)][_0x21da12(389)], _0x2d2d1f, _0xcbef92));
        },
        'destroy': function () {
            var _0x19fa5d = _0x2fd956;
            this[_0x19fa5d(388)] = null, this['scene'] = null, this[_0x19fa5d(390)] = null;
        }
    });
module[_0x2fd956(402)] = Factory;