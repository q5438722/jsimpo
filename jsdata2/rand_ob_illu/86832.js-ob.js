/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
const _0x496f = ['split', 'exports', '452304pbWamv', '367rmYRdM', '1805NOMBPz', '625054MWSjOU', '505YkDYpN', '234cgDkDW', '289678kkcxYL', '1kYOOEy', '407870vShiJO', '1695906GqawQw', './ArcadeImage', './ArcadeSprite', '../../utils/Class', './StaticPhysicsGroup', 'world', 'sys', 'addCollider', 'STATIC_BODY', 'DYNAMIC_BODY', 'enableBody', 'scene', 'displayList', 'add', 'updateList', '1|2|0|3|4', 'lapmq'];
const _0x4a8171 = _0xdfea;

function _0xdfea(_0x5b409a, _0x1cfbcc) {
    return _0xdfea = function (_0x39c9c8, _0x1173b5) {
        _0x39c9c8 = _0x39c9c8 - 284;
        const _0x22926c = _0x496f[_0x39c9c8];

        return _0x22926c;
    }, _0xdfea(_0x5b409a, _0x1cfbcc);
}
(function (_0x35bd1e, _0x125e4d) {
    const _0xe65fb2 = _0xdfea;

    while (true) {
        try {
            const _0x5824e9 = -parseInt(_0xe65fb2(0x11c)) + parseInt(_0xe65fb2(0x11d)) * parseInt(_0xe65fb2(0x11e)) + -parseInt(_0xe65fb2(0x11f)) + parseInt(_0xe65fb2(0x120)) * -parseInt(_0xe65fb2(0x121)) + -parseInt(_0xe65fb2(0x122)) + -parseInt(_0xe65fb2(0x123)) * parseInt(_0xe65fb2(0x124)) + parseInt(_0xe65fb2(0x125));

            if (_0x5824e9 === _0x125e4d) break;else _0x35bd1e.push(_0x35bd1e.shift());
        } catch (_0x3984fe) {
            _0x35bd1e.push(_0x35bd1e.shift());
        }
    }
})(_0x496f, 465265);

const ArcadeImage = require(_0x4a8171(0x126));

const ArcadeSprite = require(_0x4a8171(0x127));

const Class = require(_0x4a8171(0x128));

const CONST = require('./const');

const PhysicsGroup = require('./PhysicsGroup');

const StaticPhysicsGroup = require(_0x4a8171(0x129));

const Factory = new Class({
    'initialize': function Factory(_0x5be915) {
        const _0x42a247 = _0x4a8171;

        this[_0x42a247(0x12a)] = _0x5be915, this['scene'] = _0x5be915.scene, this[_0x42a247(0x12b)] = _0x5be915.scene[_0x42a247(0x12b)];
    },
    'collider': function (_0x53e732, _0x3f82e1, _0x5977b3, _0x1b9ce3, _0x56772a) {
        const _0xce4ff3 = _0x4a8171;

        return this.world[_0xce4ff3(0x12c)](_0x53e732, _0x3f82e1, _0x5977b3, _0x1b9ce3, _0x56772a);
    },
    'overlap': function (_0x199ebc, _0x57aae0, _0x16316b, _0x3d8658, _0x1091aa) {
        const _0x28fd8e = _0x4a8171;

        return this[_0x28fd8e(0x12a)].addOverlap(_0x199ebc, _0x57aae0, _0x16316b, _0x3d8658, _0x1091aa);
    },
    'existing': function (_0x1f7916, _0x1d77a9) {
        const _0x294b5d = _0x4a8171;

        const _0x15b715 = _0x1d77a9 ? CONST[_0x294b5d(0x12d)] : CONST[_0x294b5d(0x12e)];

        return this.world[_0x294b5d(0x12f)](_0x1f7916, _0x15b715), _0x1f7916;
    },
    'staticImage': function (_0x5bb9b2, _0x2aa7a7, _0x4bebbc, _0xc2dd79) {
        const _0x4ab9f2 = _0x4a8171;

        const _0x2d8f02 = new ArcadeImage(this[_0x4ab9f2(0x130)], _0x5bb9b2, _0x2aa7a7, _0x4bebbc, _0xc2dd79);

        return this[_0x4ab9f2(0x12b)][_0x4ab9f2(0x131)][_0x4ab9f2(0x132)](_0x2d8f02), this[_0x4ab9f2(0x12a)][_0x4ab9f2(0x12f)](_0x2d8f02, CONST[_0x4ab9f2(0x12d)]), _0x2d8f02;
    },
    'image': function (_0x14368b, _0x25404d, _0x5bea26, _0x379570) {
        const _0x579dc0 = _0x4a8171;

        const _0x2aa170 = new ArcadeImage(this[_0x579dc0(0x130)], _0x14368b, _0x25404d, _0x5bea26, _0x379570);

        return this[_0x579dc0(0x12b)][_0x579dc0(0x131)][_0x579dc0(0x132)](_0x2aa170), this[_0x579dc0(0x12a)][_0x579dc0(0x12f)](_0x2aa170, CONST.DYNAMIC_BODY), _0x2aa170;
    },
    'staticSprite': function (_0x1ea785, _0x238028, _0x170e86, _0x8e0eed) {
        const _0x3ed589 = _0x4a8171;

        const _0x3415c9 = new ArcadeSprite(this[_0x3ed589(0x130)], _0x1ea785, _0x238028, _0x170e86, _0x8e0eed);

        return this[_0x3ed589(0x12b)][_0x3ed589(0x131)][_0x3ed589(0x132)](_0x3415c9), this[_0x3ed589(0x12b)][_0x3ed589(0x133)][_0x3ed589(0x132)](_0x3415c9), this[_0x3ed589(0x12a)].enableBody(_0x3415c9, CONST[_0x3ed589(0x12d)]), _0x3415c9;
    },
    'sprite': function (_0x217e19, _0x3e2c78, _0x50c52d, _0x431a29) {
        const _0x4fb684 = _0x4a8171;
        const _0x61a1dc = { 'lapmq': _0x4fb684(0x134) };

        const _0x18caf1 = _0x61a1dc[_0x4fb684(0x135)][_0x4fb684(0x136)]('|');

        var _0x338f87 = 0;

        while (true) {
            switch (_0x18caf1[_0x338f87++]) {
                case '0':
                    this[_0x4fb684(0x12b)][_0x4fb684(0x133)][_0x4fb684(0x132)](_0x321d4);
                    continue;
                case '1':
                    const _0x321d4 = new ArcadeSprite(this[_0x4fb684(0x130)], _0x217e19, _0x3e2c78, _0x50c52d, _0x431a29);

                    continue;
                case '2':
                    this.sys[_0x4fb684(0x131)][_0x4fb684(0x132)](_0x321d4);
                    continue;
                case '3':
                    this[_0x4fb684(0x12a)].enableBody(_0x321d4, CONST[_0x4fb684(0x12e)]);
                    continue;
                case '4':
                    return _0x321d4;
            }
            break;
        }
    },
    'staticGroup': function (_0xf8bc3, _0x4e8e84) {
        const _0x327d36 = _0x4a8171;

        return this[_0x327d36(0x12b)].updateList[_0x327d36(0x132)](new StaticPhysicsGroup(this.world, this[_0x327d36(0x12a)][_0x327d36(0x130)], _0xf8bc3, _0x4e8e84));
    },
    'group': function (_0x5eb963, _0x171afb) {
        const _0x4f6095 = _0x4a8171;

        return this[_0x4f6095(0x12b)].updateList[_0x4f6095(0x132)](new PhysicsGroup(this.world, this[_0x4f6095(0x12a)][_0x4f6095(0x130)], _0x5eb963, _0x171afb));
    },
    'destroy': function () {
        const _0x43e607 = _0x4a8171;

        this['world'] = null, this[_0x43e607(0x130)] = null, this[_0x43e607(0x12b)] = null;
    }
});

module[_0x4a8171(0x137)] = Factory;
