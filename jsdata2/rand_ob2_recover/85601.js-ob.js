var CONST = require(_0x579b97(362)), Class = require('../utils/Class'), Components = require(_0x579b97(363)), Rectangle = require(_0x579b97(364)), Tile = new Class({
        'Mixins': [
            Components['Alpha'],
            Components['Flip'],
            Components['Visible']
        ],
        'initialize': function Tile(_0x2bb1f5, _0x3aa988, _0xda4479, _0x9a53cd, _0x379137, _0x319c44, _0x2f8eed, _0xdd1fb0) {
            var _0x3e8626 = _0x579b97;
            this[_0x3e8626(365)] = _0x2bb1f5, this[_0x3e8626(366)] = _0x3aa988, this['x'] = _0xda4479, this['y'] = _0x9a53cd, this[_0x3e8626(367)] = _0x379137, this['height'] = _0x319c44, this[_0x3e8626(368)], this[_0x3e8626(369)], this[_0x3e8626(370)] = _0x2f8eed !== undefined ? _0x2f8eed : _0x379137, this['baseHeight'] = _0xdd1fb0 !== undefined ? _0xdd1fb0 : _0x319c44, this['pixelX'] = 0, this['pixelY'] = 0, this[_0x3e8626(371)](), this[_0x3e8626(372)] = {}, this[_0x3e8626(373)] = 0, this[_0x3e8626(374)] = ![], this[_0x3e8626(375)] = ![], this[_0x3e8626(376)] = ![], this['collideDown'] = ![], this[_0x3e8626(377)] = ![], this[_0x3e8626(378)] = ![], this[_0x3e8626(379)] = ![], this['faceBottom'] = ![], this[_0x3e8626(380)] = undefined, this[_0x3e8626(381)] = this, this[_0x3e8626(382)] = 16777215, this['physics'] = {};
        },
        'containsPoint': function (_0xa08664, _0x5e740a) {
            var _0x3d06c4 = _0x579b97;
            return !(_0xa08664 < this['pixelX'] || _0x5e740a < this[_0x3d06c4(383)] || _0xa08664 > this[_0x3d06c4(368)] || _0x5e740a > this[_0x3d06c4(369)]);
        },
        'copy': function (_0xb3738c) {
            var _0x1c6457 = _0x579b97;
            return this[_0x1c6457(366)] = _0xb3738c[_0x1c6457(366)], this['alpha'] = _0xb3738c[_0x1c6457(384)], this['properties'] = _0xb3738c[_0x1c6457(372)], this[_0x1c6457(385)] = _0xb3738c[_0x1c6457(385)], this[_0x1c6457(386)](_0xb3738c[_0x1c6457(387)], _0xb3738c[_0x1c6457(388)]), this[_0x1c6457(382)] = _0xb3738c[_0x1c6457(382)], this[_0x1c6457(373)] = _0xb3738c[_0x1c6457(373)], this[_0x1c6457(376)] = _0xb3738c['collideUp'], this['collideDown'] = _0xb3738c[_0x1c6457(389)], this[_0x1c6457(374)] = _0xb3738c[_0x1c6457(374)], this['collideRight'] = _0xb3738c[_0x1c6457(375)], this[_0x1c6457(380)] = _0xb3738c[_0x1c6457(380)], this[_0x1c6457(381)] = _0xb3738c[_0x1c6457(381)], this;
        },
        'getCollisionGroup': function () {
            var _0x346860 = _0x579b97;
            return this[_0x346860(390)] ? this[_0x346860(390)][_0x346860(391)](this[_0x346860(366)]) : null;
        },
        'getTileData': function () {
            var _0x261f8e = _0x579b97;
            return this[_0x261f8e(390)] ? this['tileset'][_0x261f8e(392)](this[_0x261f8e(366)]) : null;
        },
        'getLeft': function (_0x3f18ed) {
            var _0x54af78 = _0x579b97, _0x208bb4 = this[_0x54af78(393)];
            return _0x208bb4 ? _0x208bb4[_0x54af78(394)](this['x'], _0x3f18ed) : this['x'] * this['baseWidth'];
        },
        'getRight': function (_0x12d7d3) {
            var _0x18b917 = _0x579b97, _0x492479 = this[_0x18b917(393)];
            return _0x492479 ? this[_0x18b917(395)](_0x12d7d3) + this[_0x18b917(367)] * _0x492479[_0x18b917(396)] : this['getLeft'](_0x12d7d3) + this[_0x18b917(367)];
        },
        'getTop': function (_0x5c2f59) {
            var _0x4c2e3f = _0x579b97, _0x1a24aa = this[_0x4c2e3f(393)];
            return _0x1a24aa ? _0x1a24aa[_0x4c2e3f(397)](this['y'], _0x5c2f59) - (this[_0x4c2e3f(398)] - this[_0x4c2e3f(399)]) * _0x1a24aa[_0x4c2e3f(400)] : this['y'] * this[_0x4c2e3f(399)] - (this['height'] - this[_0x4c2e3f(399)]);
        },
        'getBottom': function (_0x117806) {
            var _0x4ecccb = _0x579b97, _0x2dfcb3 = this[_0x4ecccb(393)];
            return _0x2dfcb3 ? this[_0x4ecccb(401)](_0x117806) + this[_0x4ecccb(398)] * _0x2dfcb3[_0x4ecccb(400)] : this[_0x4ecccb(401)](_0x117806) + this[_0x4ecccb(398)];
        },
        'getBounds': function (_0x144e1b, _0x12f84a) {
            var _0x32b7bd = _0x579b97;
            return _0x12f84a === undefined && (_0x12f84a = new Rectangle()), _0x12f84a['x'] = this['getLeft'](), _0x12f84a['y'] = this['getTop'](), _0x12f84a[_0x32b7bd(367)] = this[_0x32b7bd(402)]() - _0x12f84a['x'], _0x12f84a[_0x32b7bd(398)] = this[_0x32b7bd(403)]() - _0x12f84a['y'], _0x12f84a;
        },
        'getCenterX': function (_0x2ceb92) {
            var _0x1dfa39 = _0x579b97;
            return (this[_0x1dfa39(395)](_0x2ceb92) + this['getRight'](_0x2ceb92)) / 2;
        },
        'getCenterY': function (_0x598430) {
            var _0x2afdfc = _0x579b97;
            return (this[_0x2afdfc(401)](_0x598430) + this['getBottom'](_0x598430)) / 2;
        },
        'intersects': function (_0xb68c38, _0x105f6e, _0x92c84c, _0x4c81d2) {
            var _0x4732c9 = _0x579b97;
            return !(_0x92c84c <= this[_0x4732c9(404)] || _0x4c81d2 <= this[_0x4732c9(383)] || _0xb68c38 >= this[_0x4732c9(368)] || _0x105f6e >= this[_0x4732c9(369)]);
        },
        'isInteresting': function (_0x112ecc, _0x4c0306) {
            var _0x2cc6ba = _0x579b97;
            if (_0x112ecc && _0x4c0306)
                return this[_0x2cc6ba(405)] || this[_0x2cc6ba(406)];
            else {
                if (_0x112ecc)
                    return this['collides'];
                else {
                    if (_0x4c0306)
                        return this[_0x2cc6ba(406)];
                }
            }
            return ![];
        },
        'resetCollision': function (_0x2959fc) {
            var _0x3a00c2 = _0x579b97;
            _0x2959fc === undefined && (_0x2959fc = !![]);
            this['collideLeft'] = ![], this[_0x3a00c2(375)] = ![], this[_0x3a00c2(376)] = ![], this[_0x3a00c2(389)] = ![], this[_0x3a00c2(379)] = ![], this['faceBottom'] = ![], this[_0x3a00c2(377)] = ![], this[_0x3a00c2(378)] = ![];
            if (_0x2959fc) {
                var _0x205a28 = this['tilemapLayer'];
                _0x205a28 && this[_0x3a00c2(393)][_0x3a00c2(407)](this['x'], this['y']);
            }
            return this;
        },
        'resetFaces': function () {
            var _0x223a2f = _0x579b97;
            return this[_0x223a2f(379)] = ![], this[_0x223a2f(408)] = ![], this[_0x223a2f(377)] = ![], this[_0x223a2f(378)] = ![], this;
        },
        'setCollision': function (_0x50245d, _0x48e35e, _0x128bac, _0x4c9d70, _0x495aec) {
            var _0x1ec564 = _0x579b97;
            _0x48e35e === undefined && (_0x48e35e = _0x50245d);
            _0x128bac === undefined && (_0x128bac = _0x50245d);
            _0x4c9d70 === undefined && (_0x4c9d70 = _0x50245d);
            _0x495aec === undefined && (_0x495aec = !![]);
            this[_0x1ec564(374)] = _0x50245d, this[_0x1ec564(375)] = _0x48e35e, this[_0x1ec564(376)] = _0x128bac, this[_0x1ec564(389)] = _0x4c9d70, this[_0x1ec564(377)] = _0x50245d, this['faceRight'] = _0x48e35e, this[_0x1ec564(379)] = _0x128bac, this['faceBottom'] = _0x4c9d70;
            if (_0x495aec) {
                var _0x5c9ddb = this[_0x1ec564(393)];
                _0x5c9ddb && this['tilemapLayer'][_0x1ec564(407)](this['x'], this['y']);
            }
            return this;
        },
        'setCollisionCallback': function (_0x4aa106, _0x2fd45a) {
            var _0x31086d = _0x579b97;
            return _0x4aa106 === null ? (this[_0x31086d(380)] = undefined, this[_0x31086d(381)] = undefined) : (this[_0x31086d(380)] = _0x4aa106, this[_0x31086d(381)] = _0x2fd45a), this;
        },
        'setSize': function (_0x4a0060, _0x1c8574, _0x14f5f6, _0x58c110) {
            var _0x36c6c3 = _0x579b97;
            return _0x4a0060 !== undefined && (this[_0x36c6c3(367)] = _0x4a0060), _0x1c8574 !== undefined && (this[_0x36c6c3(398)] = _0x1c8574), _0x14f5f6 !== undefined && (this[_0x36c6c3(370)] = _0x14f5f6), _0x58c110 !== undefined && (this[_0x36c6c3(399)] = _0x58c110), this[_0x36c6c3(371)](), this;
        },
        'updatePixelXY': function () {
            var _0x22e110 = _0x579b97, _0x2976f1 = this[_0x22e110(365)]['orientation'];
            if (_0x2976f1 === CONST[_0x22e110(409)])
                this['pixelX'] = this['x'] * this[_0x22e110(370)], this[_0x22e110(383)] = this['y'] * this['baseHeight'];
            else {
                if (_0x2976f1 === CONST[_0x22e110(410)])
                    this['pixelX'] = (this['x'] - this['y']) * this[_0x22e110(370)] * 0.5, this[_0x22e110(383)] = (this['x'] + this['y']) * this[_0x22e110(399)] * 0.5;
                else {
                    if (_0x2976f1 === CONST[_0x22e110(411)])
                        this[_0x22e110(404)] = this['x'] * this['baseWidth'] + this['y'] % 2 * (this[_0x22e110(370)] / 2), this[_0x22e110(383)] = this['y'] * (this[_0x22e110(399)] / 2);
                    else {
                        if (_0x2976f1 === CONST[_0x22e110(412)]) {
                            var _0x2ff27d = this[_0x22e110(365)][_0x22e110(413)], _0x368ed1 = (this[_0x22e110(399)] - _0x2ff27d) / 2 + _0x2ff27d;
                            this[_0x22e110(404)] = this['x'] * this['baseWidth'] + this['y'] % 2 * (this[_0x22e110(370)] / 2), this[_0x22e110(383)] = this['y'] * _0x368ed1;
                        }
                    }
                }
            }
            return this['right'] = this['pixelX'] + this[_0x22e110(370)], this[_0x22e110(369)] = this['pixelY'] + this['baseHeight'], this;
        },
        'destroy': function () {
            var _0x37d203 = _0x579b97;
            this['collisionCallback'] = undefined, this['collisionCallbackContext'] = undefined, this[_0x37d203(372)] = undefined;
        },
        'canCollide': {
            'get': function () {
                var _0x2b2a94 = _0x579b97;
                return this[_0x2b2a94(374)] || this[_0x2b2a94(375)] || this[_0x2b2a94(376)] || this[_0x2b2a94(389)] || this[_0x2b2a94(380)] !== undefined;
            }
        },
        'collides': {
            'get': function () {
                var _0x3e5352 = _0x579b97;
                return this[_0x3e5352(374)] || this[_0x3e5352(375)] || this[_0x3e5352(376)] || this[_0x3e5352(389)];
            }
        },
        'hasInterestingFace': {
            'get': function () {
                var _0x458775 = _0x579b97;
                return this[_0x458775(379)] || this[_0x458775(408)] || this[_0x458775(377)] || this[_0x458775(378)];
            }
        },
        'tileset': {
            'get': function () {
                var _0x35edb8 = _0x579b97, _0x2a198d = this['layer']['tilemapLayer'];
                if (_0x2a198d) {
                    var _0x4e646b = _0x2a198d[_0x35edb8(414)][this[_0x35edb8(366)]];
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
                var _0x47e866 = _0x579b97, _0x2e35c6 = this[_0x47e866(393)];
                return _0x2e35c6 ? _0x2e35c6[_0x47e866(415)] : null;
            }
        }
    });
module[_0x579b97(416)] = Tile;