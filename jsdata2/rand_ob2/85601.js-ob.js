/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var _0x1a51 = [
    '../gameobjects/components',
    '../geom/rectangle',
    'layer',
    'index',
    'width',
    'right',
    'bottom',
    'baseWidth',
    'updatePixelXY',
    'properties',
    'rotation',
    'collideLeft',
    'collideRight',
    'collideUp',
    'faceLeft',
    'faceRight',
    'faceTop',
    'collisionCallback',
    'collisionCallbackContext',
    'tint',
    'pixelY',
    'alpha',
    'visible',
    'setFlip',
    'flipX',
    'flipY',
    'collideDown',
    'tileset',
    'getTileCollisionGroup',
    'getTileData',
    'tilemapLayer',
    'tileToWorldX',
    'getLeft',
    'scaleX',
    'tileToWorldY',
    'height',
    'baseHeight',
    'scaleY',
    'getTop',
    'getRight',
    'getBottom',
    'pixelX',
    'canCollide',
    'hasInterestingFace',
    'calculateFacesAt',
    'faceBottom',
    'ORTHOGONAL',
    'ISOMETRIC',
    'STAGGERED',
    'HEXAGONAL',
    'hexSideLength',
    'gidMap',
    'tilemap',
    'exports',
    '532117rrhZXC',
    '165813idPFoL',
    '7pgknZe',
    '79168wTIWlL',
    '492579POESOQ',
    '274017YdoQzM',
    '525959ikfQng',
    '2EUnpPI',
    '540049PwPCGd',
    './const/ORIENTATION_CONST'
];
function _0x5882(_0x5dc853, _0x5523f7) {
    return _0x5882 = function (_0x1a51ca, _0x5882e2) {
        _0x1a51ca = _0x1a51ca - 0x161;
        var _0x1b31c0 = _0x1a51[_0x1a51ca];
        return _0x1b31c0;
    }, _0x5882(_0x5dc853, _0x5523f7);
}
var _0x579b97 = _0x5882;
(function (_0x424915, _0x2489cc) {
    var _0x1d348c = _0x5882;
    while (!![]) {
        try {
            var _0x2e8bc9 = -parseInt(_0x1d348c(0x161)) + parseInt(_0x1d348c(0x162)) + -parseInt(_0x1d348c(0x163)) * parseInt(_0x1d348c(0x164)) + parseInt(_0x1d348c(0x165)) + parseInt(_0x1d348c(0x166)) + -parseInt(_0x1d348c(0x167)) + -parseInt(_0x1d348c(0x168)) * -parseInt(_0x1d348c(0x169));
            if (_0x2e8bc9 === _0x2489cc)
                break;
            else
                _0x424915['push'](_0x424915['shift']());
        } catch (_0x2232ef) {
            _0x424915['push'](_0x424915['shift']());
        }
    }
}(_0x1a51, 0x61b7f));
var CONST = require(_0x579b97(0x16a)), Class = require('../utils/Class'), Components = require(_0x579b97(0x16b)), Rectangle = require(_0x579b97(0x16c)), Tile = new Class({
        'Mixins': [
            Components['Alpha'],
            Components['Flip'],
            Components['Visible']
        ],
        'initialize': function Tile(_0x2bb1f5, _0x3aa988, _0xda4479, _0x9a53cd, _0x379137, _0x319c44, _0x2f8eed, _0xdd1fb0) {
            var _0x3e8626 = _0x579b97;
            this[_0x3e8626(0x16d)] = _0x2bb1f5, this[_0x3e8626(0x16e)] = _0x3aa988, this['x'] = _0xda4479, this['y'] = _0x9a53cd, this[_0x3e8626(0x16f)] = _0x379137, this['height'] = _0x319c44, this[_0x3e8626(0x170)], this[_0x3e8626(0x171)], this[_0x3e8626(0x172)] = _0x2f8eed !== undefined ? _0x2f8eed : _0x379137, this['baseHeight'] = _0xdd1fb0 !== undefined ? _0xdd1fb0 : _0x319c44, this['pixelX'] = 0x0, this['pixelY'] = 0x0, this[_0x3e8626(0x173)](), this[_0x3e8626(0x174)] = {}, this[_0x3e8626(0x175)] = 0x0, this[_0x3e8626(0x176)] = ![], this[_0x3e8626(0x177)] = ![], this[_0x3e8626(0x178)] = ![], this['collideDown'] = ![], this[_0x3e8626(0x179)] = ![], this[_0x3e8626(0x17a)] = ![], this[_0x3e8626(0x17b)] = ![], this['faceBottom'] = ![], this[_0x3e8626(0x17c)] = undefined, this[_0x3e8626(0x17d)] = this, this[_0x3e8626(0x17e)] = 0xffffff, this['physics'] = {};
        },
        'containsPoint': function (_0xa08664, _0x5e740a) {
            var _0x3d06c4 = _0x579b97;
            return !(_0xa08664 < this['pixelX'] || _0x5e740a < this[_0x3d06c4(0x17f)] || _0xa08664 > this[_0x3d06c4(0x170)] || _0x5e740a > this[_0x3d06c4(0x171)]);
        },
        'copy': function (_0xb3738c) {
            var _0x1c6457 = _0x579b97;
            return this[_0x1c6457(0x16e)] = _0xb3738c[_0x1c6457(0x16e)], this['alpha'] = _0xb3738c[_0x1c6457(0x180)], this['properties'] = _0xb3738c[_0x1c6457(0x174)], this[_0x1c6457(0x181)] = _0xb3738c[_0x1c6457(0x181)], this[_0x1c6457(0x182)](_0xb3738c[_0x1c6457(0x183)], _0xb3738c[_0x1c6457(0x184)]), this[_0x1c6457(0x17e)] = _0xb3738c[_0x1c6457(0x17e)], this[_0x1c6457(0x175)] = _0xb3738c[_0x1c6457(0x175)], this[_0x1c6457(0x178)] = _0xb3738c['collideUp'], this['collideDown'] = _0xb3738c[_0x1c6457(0x185)], this[_0x1c6457(0x176)] = _0xb3738c[_0x1c6457(0x176)], this['collideRight'] = _0xb3738c[_0x1c6457(0x177)], this[_0x1c6457(0x17c)] = _0xb3738c[_0x1c6457(0x17c)], this[_0x1c6457(0x17d)] = _0xb3738c[_0x1c6457(0x17d)], this;
        },
        'getCollisionGroup': function () {
            var _0x346860 = _0x579b97;
            return this[_0x346860(0x186)] ? this[_0x346860(0x186)][_0x346860(0x187)](this[_0x346860(0x16e)]) : null;
        },
        'getTileData': function () {
            var _0x261f8e = _0x579b97;
            return this[_0x261f8e(0x186)] ? this['tileset'][_0x261f8e(0x188)](this[_0x261f8e(0x16e)]) : null;
        },
        'getLeft': function (_0x3f18ed) {
            var _0x54af78 = _0x579b97, _0x208bb4 = this[_0x54af78(0x189)];
            return _0x208bb4 ? _0x208bb4[_0x54af78(0x18a)](this['x'], _0x3f18ed) : this['x'] * this['baseWidth'];
        },
        'getRight': function (_0x12d7d3) {
            var _0x18b917 = _0x579b97, _0x492479 = this[_0x18b917(0x189)];
            return _0x492479 ? this[_0x18b917(0x18b)](_0x12d7d3) + this[_0x18b917(0x16f)] * _0x492479[_0x18b917(0x18c)] : this['getLeft'](_0x12d7d3) + this[_0x18b917(0x16f)];
        },
        'getTop': function (_0x5c2f59) {
            var _0x4c2e3f = _0x579b97, _0x1a24aa = this[_0x4c2e3f(0x189)];
            return _0x1a24aa ? _0x1a24aa[_0x4c2e3f(0x18d)](this['y'], _0x5c2f59) - (this[_0x4c2e3f(0x18e)] - this[_0x4c2e3f(0x18f)]) * _0x1a24aa[_0x4c2e3f(0x190)] : this['y'] * this[_0x4c2e3f(0x18f)] - (this['height'] - this[_0x4c2e3f(0x18f)]);
        },
        'getBottom': function (_0x117806) {
            var _0x4ecccb = _0x579b97, _0x2dfcb3 = this[_0x4ecccb(0x189)];
            return _0x2dfcb3 ? this[_0x4ecccb(0x191)](_0x117806) + this[_0x4ecccb(0x18e)] * _0x2dfcb3[_0x4ecccb(0x190)] : this[_0x4ecccb(0x191)](_0x117806) + this[_0x4ecccb(0x18e)];
        },
        'getBounds': function (_0x144e1b, _0x12f84a) {
            var _0x32b7bd = _0x579b97;
            return _0x12f84a === undefined && (_0x12f84a = new Rectangle()), _0x12f84a['x'] = this['getLeft'](), _0x12f84a['y'] = this['getTop'](), _0x12f84a[_0x32b7bd(0x16f)] = this[_0x32b7bd(0x192)]() - _0x12f84a['x'], _0x12f84a[_0x32b7bd(0x18e)] = this[_0x32b7bd(0x193)]() - _0x12f84a['y'], _0x12f84a;
        },
        'getCenterX': function (_0x2ceb92) {
            var _0x1dfa39 = _0x579b97;
            return (this[_0x1dfa39(0x18b)](_0x2ceb92) + this['getRight'](_0x2ceb92)) / 0x2;
        },
        'getCenterY': function (_0x598430) {
            var _0x2afdfc = _0x579b97;
            return (this[_0x2afdfc(0x191)](_0x598430) + this['getBottom'](_0x598430)) / 0x2;
        },
        'intersects': function (_0xb68c38, _0x105f6e, _0x92c84c, _0x4c81d2) {
            var _0x4732c9 = _0x579b97;
            return !(_0x92c84c <= this[_0x4732c9(0x194)] || _0x4c81d2 <= this[_0x4732c9(0x17f)] || _0xb68c38 >= this[_0x4732c9(0x170)] || _0x105f6e >= this[_0x4732c9(0x171)]);
        },
        'isInteresting': function (_0x112ecc, _0x4c0306) {
            var _0x2cc6ba = _0x579b97;
            if (_0x112ecc && _0x4c0306)
                return this[_0x2cc6ba(0x195)] || this[_0x2cc6ba(0x196)];
            else {
                if (_0x112ecc)
                    return this['collides'];
                else {
                    if (_0x4c0306)
                        return this[_0x2cc6ba(0x196)];
                }
            }
            return ![];
        },
        'resetCollision': function (_0x2959fc) {
            var _0x3a00c2 = _0x579b97;
            _0x2959fc === undefined && (_0x2959fc = !![]);
            this['collideLeft'] = ![], this[_0x3a00c2(0x177)] = ![], this[_0x3a00c2(0x178)] = ![], this[_0x3a00c2(0x185)] = ![], this[_0x3a00c2(0x17b)] = ![], this['faceBottom'] = ![], this[_0x3a00c2(0x179)] = ![], this[_0x3a00c2(0x17a)] = ![];
            if (_0x2959fc) {
                var _0x205a28 = this['tilemapLayer'];
                _0x205a28 && this[_0x3a00c2(0x189)][_0x3a00c2(0x197)](this['x'], this['y']);
            }
            return this;
        },
        'resetFaces': function () {
            var _0x223a2f = _0x579b97;
            return this[_0x223a2f(0x17b)] = ![], this[_0x223a2f(0x198)] = ![], this[_0x223a2f(0x179)] = ![], this[_0x223a2f(0x17a)] = ![], this;
        },
        'setCollision': function (_0x50245d, _0x48e35e, _0x128bac, _0x4c9d70, _0x495aec) {
            var _0x1ec564 = _0x579b97;
            _0x48e35e === undefined && (_0x48e35e = _0x50245d);
            _0x128bac === undefined && (_0x128bac = _0x50245d);
            _0x4c9d70 === undefined && (_0x4c9d70 = _0x50245d);
            _0x495aec === undefined && (_0x495aec = !![]);
            this[_0x1ec564(0x176)] = _0x50245d, this[_0x1ec564(0x177)] = _0x48e35e, this[_0x1ec564(0x178)] = _0x128bac, this[_0x1ec564(0x185)] = _0x4c9d70, this[_0x1ec564(0x179)] = _0x50245d, this['faceRight'] = _0x48e35e, this[_0x1ec564(0x17b)] = _0x128bac, this['faceBottom'] = _0x4c9d70;
            if (_0x495aec) {
                var _0x5c9ddb = this[_0x1ec564(0x189)];
                _0x5c9ddb && this['tilemapLayer'][_0x1ec564(0x197)](this['x'], this['y']);
            }
            return this;
        },
        'setCollisionCallback': function (_0x4aa106, _0x2fd45a) {
            var _0x31086d = _0x579b97;
            return _0x4aa106 === null ? (this[_0x31086d(0x17c)] = undefined, this[_0x31086d(0x17d)] = undefined) : (this[_0x31086d(0x17c)] = _0x4aa106, this[_0x31086d(0x17d)] = _0x2fd45a), this;
        },
        'setSize': function (_0x4a0060, _0x1c8574, _0x14f5f6, _0x58c110) {
            var _0x36c6c3 = _0x579b97;
            return _0x4a0060 !== undefined && (this[_0x36c6c3(0x16f)] = _0x4a0060), _0x1c8574 !== undefined && (this[_0x36c6c3(0x18e)] = _0x1c8574), _0x14f5f6 !== undefined && (this[_0x36c6c3(0x172)] = _0x14f5f6), _0x58c110 !== undefined && (this[_0x36c6c3(0x18f)] = _0x58c110), this[_0x36c6c3(0x173)](), this;
        },
        'updatePixelXY': function () {
            var _0x22e110 = _0x579b97, _0x2976f1 = this[_0x22e110(0x16d)]['orientation'];
            if (_0x2976f1 === CONST[_0x22e110(0x199)])
                this['pixelX'] = this['x'] * this[_0x22e110(0x172)], this[_0x22e110(0x17f)] = this['y'] * this['baseHeight'];
            else {
                if (_0x2976f1 === CONST[_0x22e110(0x19a)])
                    this['pixelX'] = (this['x'] - this['y']) * this[_0x22e110(0x172)] * 0.5, this[_0x22e110(0x17f)] = (this['x'] + this['y']) * this[_0x22e110(0x18f)] * 0.5;
                else {
                    if (_0x2976f1 === CONST[_0x22e110(0x19b)])
                        this[_0x22e110(0x194)] = this['x'] * this['baseWidth'] + this['y'] % 0x2 * (this[_0x22e110(0x172)] / 0x2), this[_0x22e110(0x17f)] = this['y'] * (this[_0x22e110(0x18f)] / 0x2);
                    else {
                        if (_0x2976f1 === CONST[_0x22e110(0x19c)]) {
                            var _0x2ff27d = this[_0x22e110(0x16d)][_0x22e110(0x19d)], _0x368ed1 = (this[_0x22e110(0x18f)] - _0x2ff27d) / 0x2 + _0x2ff27d;
                            this[_0x22e110(0x194)] = this['x'] * this['baseWidth'] + this['y'] % 0x2 * (this[_0x22e110(0x172)] / 0x2), this[_0x22e110(0x17f)] = this['y'] * _0x368ed1;
                        }
                    }
                }
            }
            return this['right'] = this['pixelX'] + this[_0x22e110(0x172)], this[_0x22e110(0x171)] = this['pixelY'] + this['baseHeight'], this;
        },
        'destroy': function () {
            var _0x37d203 = _0x579b97;
            this['collisionCallback'] = undefined, this['collisionCallbackContext'] = undefined, this[_0x37d203(0x174)] = undefined;
        },
        'canCollide': {
            'get': function () {
                var _0x2b2a94 = _0x579b97;
                return this[_0x2b2a94(0x176)] || this[_0x2b2a94(0x177)] || this[_0x2b2a94(0x178)] || this[_0x2b2a94(0x185)] || this[_0x2b2a94(0x17c)] !== undefined;
            }
        },
        'collides': {
            'get': function () {
                var _0x3e5352 = _0x579b97;
                return this[_0x3e5352(0x176)] || this[_0x3e5352(0x177)] || this[_0x3e5352(0x178)] || this[_0x3e5352(0x185)];
            }
        },
        'hasInterestingFace': {
            'get': function () {
                var _0x458775 = _0x579b97;
                return this[_0x458775(0x17b)] || this[_0x458775(0x198)] || this[_0x458775(0x179)] || this[_0x458775(0x17a)];
            }
        },
        'tileset': {
            'get': function () {
                var _0x35edb8 = _0x579b97, _0x2a198d = this['layer']['tilemapLayer'];
                if (_0x2a198d) {
                    var _0x4e646b = _0x2a198d[_0x35edb8(0x19e)][this[_0x35edb8(0x16e)]];
                    if (_0x4e646b)
                        return _0x4e646b;
                }
                return null;
            }
        },
        'tilemapLayer': {
            'get': function () {
                return this['layer']['tilemapLayer'];
            }
        },
        'tilemap': {
            'get': function () {
                var _0x47e866 = _0x579b97, _0x2e35c6 = this[_0x47e866(0x189)];
                return _0x2e35c6 ? _0x2e35c6[_0x47e866(0x19f)] : null;
            }
        }
    });
module[_0x579b97(0x1a0)] = Tile;
