/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
const _0x519e = ['1mQZlZk', '481196UVQoHD', '889524DaqDtu', '766272MXeUJW', '892484iYsOdU', '3593nSEBCq', '313CNpuxG', './ArcadeImage', './ArcadeSprite', '../../utils/Class', './const', 'world', 'scene', 'sys', 'addCollider', 'addOverlap', 'STATIC_BODY', 'DYNAMIC_BODY', 'enableBody', 'displayList', 'add', 'updateList', '2|1|3|0|4', 'XfbEE', 'split', 'exports', '769061ADibCq', '626974eUUChs'];
const _0x2fd956 = _0x191b;

function _0x191b(_0x3229f7, _0x96d18b) {
    return _0x191b = function (_0x5d64e8, _0x24b876) {
        _0x5d64e8 = _0x5d64e8 - 375;
        const _0x3673c2 = _0x519e[_0x5d64e8];

        return _0x3673c2;
    }, _0x191b(_0x3229f7, _0x96d18b);
}
(function (_0x29d980, _0x1fa233) {
    const _0x38370f = _0x191b;

    while (true) {
        try {
            const _0x3d9671 = parseInt(_0x38370f(0x177)) + -parseInt(_0x38370f(0x178)) + parseInt(_0x38370f(0x179)) * parseInt(_0x38370f(0x17a)) + parseInt(_0x38370f(0x17b)) + -parseInt(_0x38370f(0x17c)) + parseInt(_0x38370f(0x17d)) + -parseInt(_0x38370f(0x17e)) * parseInt(_0x38370f(0x17f));

            if (_0x3d9671 === _0x1fa233) break;else _0x29d980.push(_0x29d980.shift());
        } catch (_0x3e70bf) {
            _0x29d980.push(_0x29d980.shift());
        }
    }
})(_0x519e, 514410);

const ArcadeImage = require(_0x2fd956(0x180));

const ArcadeSprite = require(_0x2fd956(0x181));

const Class = require(_0x2fd956(0x182));

const CONST = require(_0x2fd956(0x183));

const PhysicsGroup = require('./PhysicsGroup');

const StaticPhysicsGroup = require('./StaticPhysicsGroup');

const Factory = new Class({
    'initialize': function Factory(_0x5af92e) {
        const _0xcf810f = _0x2fd956;

        this[_0xcf810f(0x184)] = _0x5af92e, this[_0xcf810f(0x185)] = _0x5af92e[_0xcf810f(0x185)], this[_0xcf810f(0x186)] = _0x5af92e[_0xcf810f(0x185)].sys;
    },
    'collider': function (_0x22b2ca, _0x1f9408, _0x584276, _0x13e163, _0xf99fa1) {
        const _0xc42a0a = _0x2fd956;

        return this[_0xc42a0a(0x184)][_0xc42a0a(0x187)](_0x22b2ca, _0x1f9408, _0x584276, _0x13e163, _0xf99fa1);
    },
    'overlap': function (_0x5a9745, _0x2c8399, _0x35c282, _0x52c7e7, _0x3fe593) {
        const _0x728512 = _0x2fd956;

        return this[_0x728512(0x184)][_0x728512(0x188)](_0x5a9745, _0x2c8399, _0x35c282, _0x52c7e7, _0x3fe593);
    },
    'existing': function (_0x5ccba2, _0xb82348) {
        const _0x8c2761 = _0x2fd956;

        const _0x58b61e = _0xb82348 ? CONST[_0x8c2761(0x189)] : CONST[_0x8c2761(0x18a)];

        return this.world[_0x8c2761(0x18b)](_0x5ccba2, _0x58b61e), _0x5ccba2;
    },
    'staticImage': function (_0x1b78cb, _0x5a8c29, _0x1f6e09, _0x388930) {
        const _0x56dbe4 = _0x2fd956;

        const _0x58223a = new ArcadeImage(this[_0x56dbe4(0x185)], _0x1b78cb, _0x5a8c29, _0x1f6e09, _0x388930);

        return this[_0x56dbe4(0x186)][_0x56dbe4(0x18c)][_0x56dbe4(0x18d)](_0x58223a), this[_0x56dbe4(0x184)].enableBody(_0x58223a, CONST[_0x56dbe4(0x189)]), _0x58223a;
    },
    'image': function (_0x5841a9, _0x2ea8a9, _0x4ab18e, _0xc95c50) {
        const _0x30eedb = _0x2fd956;

        const _0x13f706 = new ArcadeImage(this.scene, _0x5841a9, _0x2ea8a9, _0x4ab18e, _0xc95c50);

        return this[_0x30eedb(0x186)][_0x30eedb(0x18c)][_0x30eedb(0x18d)](_0x13f706), this[_0x30eedb(0x184)][_0x30eedb(0x18b)](_0x13f706, CONST[_0x30eedb(0x18a)]), _0x13f706;
    },
    'staticSprite': function (_0x54f586, _0x596767, _0x1ad9f9, _0x53ddfd) {
        const _0x4222fe = _0x2fd956;

        const _0x5b8818 = new ArcadeSprite(this[_0x4222fe(0x185)], _0x54f586, _0x596767, _0x1ad9f9, _0x53ddfd);

        return this.sys[_0x4222fe(0x18c)].add(_0x5b8818), this[_0x4222fe(0x186)][_0x4222fe(0x18e)].add(_0x5b8818), this[_0x4222fe(0x184)][_0x4222fe(0x18b)](_0x5b8818, CONST[_0x4222fe(0x189)]), _0x5b8818;
    },
    'sprite': function (_0x2c5270, _0x22930f, _0x1a5688, _0x5bdbb9) {
        const _0xf397e3 = _0x2fd956;
        const _0x35fca4 = { 'XfbEE': _0xf397e3(0x18f) };

        const _0x3279e3 = _0x35fca4[_0xf397e3(0x190)][_0xf397e3(0x191)]('|');

        var _0x2739de = 0;

        while (true) {
            switch (_0x3279e3[_0x2739de++]) {
                case '0':
                    this[_0xf397e3(0x184)][_0xf397e3(0x18b)](_0x1cac80, CONST[_0xf397e3(0x18a)]);
                    continue;
                case '1':
                    this.sys[_0xf397e3(0x18c)][_0xf397e3(0x18d)](_0x1cac80);
                    continue;
                case '2':
                    const _0x1cac80 = new ArcadeSprite(this[_0xf397e3(0x185)], _0x2c5270, _0x22930f, _0x1a5688, _0x5bdbb9);

                    continue;
                case '3':
                    this[_0xf397e3(0x186)][_0xf397e3(0x18e)].add(_0x1cac80);
                    continue;
                case '4':
                    return _0x1cac80;
            }
            break;
        }
    },
    'staticGroup': function (_0x44f59b, _0x1b3532) {
        const _0x38bbba = _0x2fd956;

        return this.sys[_0x38bbba(0x18e)].add(new StaticPhysicsGroup(this[_0x38bbba(0x184)], this[_0x38bbba(0x184)][_0x38bbba(0x185)], _0x44f59b, _0x1b3532));
    },
    'group': function (_0x2d2d1f, _0xcbef92) {
        const _0x21da12 = _0x2fd956;

        return this.sys.updateList[_0x21da12(0x18d)](new PhysicsGroup(this[_0x21da12(0x184)], this[_0x21da12(0x184)][_0x21da12(0x185)], _0x2d2d1f, _0xcbef92));
    },
    'destroy': function () {
        const _0x19fa5d = _0x2fd956;

        this[_0x19fa5d(0x184)] = null, this['scene'] = null, this[_0x19fa5d(0x186)] = null;
    }
});

module[_0x2fd956(0x192)] = Factory;
