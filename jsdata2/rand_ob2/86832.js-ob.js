/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var _0x3462 = [
    './StaticPhysicsGroup',
    'world',
    'sys',
    'scene',
    'addCollider',
    'addOverlap',
    'STATIC_BODY',
    'enableBody',
    'displayList',
    'add',
    'DYNAMIC_BODY',
    'updateList',
    'exports',
    '112202bTQWRW',
    '569087ZrNjPn',
    '487479agfzbJ',
    '218735tKWfhe',
    '1gvoksy',
    '858815FQSnMy',
    '325578GOvuHr',
    '161825caUIqa',
    './const',
    './PhysicsGroup'
];
function _0x3f31(_0x50d5e7, _0x44c8d8) {
    return _0x3f31 = function (_0x34622e, _0x3f3167) {
        _0x34622e = _0x34622e - 0x1eb;
        var _0x3fc106 = _0x3462[_0x34622e];
        return _0x3fc106;
    }, _0x3f31(_0x50d5e7, _0x44c8d8);
}
var _0x523b9c = _0x3f31;
(function (_0xb50971, _0x25a7d5) {
    var _0x302633 = _0x3f31;
    while (!![]) {
        try {
            var _0x48ada7 = parseInt(_0x302633(0x1eb)) + parseInt(_0x302633(0x1ec)) + parseInt(_0x302633(0x1ed)) + -parseInt(_0x302633(0x1ee)) * parseInt(_0x302633(0x1ef)) + -parseInt(_0x302633(0x1f0)) + parseInt(_0x302633(0x1f1)) + parseInt(_0x302633(0x1f2));
            if (_0x48ada7 === _0x25a7d5)
                break;
            else
                _0xb50971['push'](_0xb50971['shift']());
        } catch (_0x1e34b8) {
            _0xb50971['push'](_0xb50971['shift']());
        }
    }
}(_0x3462, 0x8d43d));
var ArcadeImage = require('./ArcadeImage'), ArcadeSprite = require('./ArcadeSprite'), Class = require('../../utils/Class'), CONST = require(_0x523b9c(0x1f3)), PhysicsGroup = require(_0x523b9c(0x1f4)), StaticPhysicsGroup = require(_0x523b9c(0x1f5)), Factory = new Class({
        'initialize': function Factory(_0x58042b) {
            var _0x73e9af = _0x523b9c;
            this[_0x73e9af(0x1f6)] = _0x58042b, this['scene'] = _0x58042b['scene'], this[_0x73e9af(0x1f7)] = _0x58042b[_0x73e9af(0x1f8)][_0x73e9af(0x1f7)];
        },
        'collider': function (_0x27b646, _0xae3f47, _0x21def5, _0x42f57b, _0x41b133) {
            var _0x1562e8 = _0x523b9c;
            return this[_0x1562e8(0x1f6)][_0x1562e8(0x1f9)](_0x27b646, _0xae3f47, _0x21def5, _0x42f57b, _0x41b133);
        },
        'overlap': function (_0x49d8b3, _0x216439, _0x53a26f, _0x5ecdd6, _0x4f2437) {
            var _0x265cd3 = _0x523b9c;
            return this[_0x265cd3(0x1f6)][_0x265cd3(0x1fa)](_0x49d8b3, _0x216439, _0x53a26f, _0x5ecdd6, _0x4f2437);
        },
        'existing': function (_0x450cca, _0xf68bb9) {
            var _0x317b17 = _0x523b9c, _0x4e8d21 = _0xf68bb9 ? CONST[_0x317b17(0x1fb)] : CONST['DYNAMIC_BODY'];
            return this[_0x317b17(0x1f6)][_0x317b17(0x1fc)](_0x450cca, _0x4e8d21), _0x450cca;
        },
        'staticImage': function (_0xc9e7d5, _0x373ba1, _0x162142, _0x6d25f3) {
            var _0xe632b3 = _0x523b9c, _0x4693b9 = new ArcadeImage(this['scene'], _0xc9e7d5, _0x373ba1, _0x162142, _0x6d25f3);
            return this[_0xe632b3(0x1f7)]['displayList']['add'](_0x4693b9), this['world'][_0xe632b3(0x1fc)](_0x4693b9, CONST['STATIC_BODY']), _0x4693b9;
        },
        'image': function (_0x39d91c, _0x5a662c, _0x4ef1c7, _0x154798) {
            var _0x2a9051 = _0x523b9c, _0x5cd21c = new ArcadeImage(this[_0x2a9051(0x1f8)], _0x39d91c, _0x5a662c, _0x4ef1c7, _0x154798);
            return this['sys'][_0x2a9051(0x1fd)][_0x2a9051(0x1fe)](_0x5cd21c), this[_0x2a9051(0x1f6)][_0x2a9051(0x1fc)](_0x5cd21c, CONST[_0x2a9051(0x1ff)]), _0x5cd21c;
        },
        'staticSprite': function (_0x33f916, _0x530306, _0x2da317, _0x338a79) {
            var _0x193dc7 = _0x523b9c, _0x1c5f99 = new ArcadeSprite(this[_0x193dc7(0x1f8)], _0x33f916, _0x530306, _0x2da317, _0x338a79);
            return this[_0x193dc7(0x1f7)][_0x193dc7(0x1fd)][_0x193dc7(0x1fe)](_0x1c5f99), this[_0x193dc7(0x1f7)][_0x193dc7(0x200)]['add'](_0x1c5f99), this[_0x193dc7(0x1f6)]['enableBody'](_0x1c5f99, CONST[_0x193dc7(0x1fb)]), _0x1c5f99;
        },
        'sprite': function (_0x3ba2ae, _0x2629de, _0x37fb3b, _0x501f66) {
            var _0x5add0c = _0x523b9c, _0x552b5c = new ArcadeSprite(this[_0x5add0c(0x1f8)], _0x3ba2ae, _0x2629de, _0x37fb3b, _0x501f66);
            return this[_0x5add0c(0x1f7)]['displayList'][_0x5add0c(0x1fe)](_0x552b5c), this[_0x5add0c(0x1f7)][_0x5add0c(0x200)]['add'](_0x552b5c), this[_0x5add0c(0x1f6)][_0x5add0c(0x1fc)](_0x552b5c, CONST[_0x5add0c(0x1ff)]), _0x552b5c;
        },
        'staticGroup': function (_0x2a4703, _0x2f31c2) {
            var _0x58ffca = _0x523b9c;
            return this[_0x58ffca(0x1f7)][_0x58ffca(0x200)][_0x58ffca(0x1fe)](new StaticPhysicsGroup(this[_0x58ffca(0x1f6)], this[_0x58ffca(0x1f6)][_0x58ffca(0x1f8)], _0x2a4703, _0x2f31c2));
        },
        'group': function (_0x262b6f, _0x4a59a7) {
            var _0x317f90 = _0x523b9c;
            return this[_0x317f90(0x1f7)][_0x317f90(0x200)]['add'](new PhysicsGroup(this['world'], this[_0x317f90(0x1f6)][_0x317f90(0x1f8)], _0x262b6f, _0x4a59a7));
        },
        'destroy': function () {
            var _0xcce55b = _0x523b9c;
            this[_0xcce55b(0x1f6)] = null, this[_0xcce55b(0x1f8)] = null, this['sys'] = null;
        }
    });
module[_0x523b9c(0x201)] = Factory;
