var CONST = require('./const/ORIENTATION_CONST');
var Class = require('../utils/Class');
var Components = require('../gameobjects/components');
var Rectangle = require('../geom/rectangle');
var Tile = new Class({
    'Mixins': [
        Components['Alpha'],
        Components['Flip'],
        Components['Visible']
    ],
    'initialize': function Tile(_0x536112, _0x3eed85, _0xe1b119, _0x5210db, _0x3f98a7, _0x21e265, _0x5d9114, _0x2d91ea) {
        var _0x331ba6 = '22|20|0|1|6|12|18|15|3|16|9|14|11|17|8|21|13|5|19|26|25|2|4|23|7|24|10'['split']('|'), _0x4d4fe4 = 0;
        while (!![]) {
            switch (_0x331ba6[_0x4d4fe4++]) {
            case '0':
                this['x'] = _0xe1b119;
                continue;
            case '1':
                this['y'] = _0x5210db;
                continue;
            case '2':
                this['faceTop'] = ![];
                continue;
            case '3':
                this['baseWidth'] = _0x5d9114 !== undefined ? _0x5d9114 : _0x3f98a7;
                continue;
            case '4':
                this['faceBottom'] = ![];
                continue;
            case '5':
                this['collideUp'] = ![];
                continue;
            case '6':
                this['width'] = _0x3f98a7;
                continue;
            case '7':
                this['collisionCallbackContext'] = this;
                continue;
            case '8':
                this['rotation'] = 0;
                continue;
            case '9':
                this['pixelX'] = 0;
                continue;
            case '10':
                this['physics'] = {};
                continue;
            case '11':
                this['updatePixelXY']();
                continue;
            case '12':
                this['height'] = _0x21e265;
                continue;
            case '13':
                this['collideRight'] = ![];
                continue;
            case '14':
                this['pixelY'] = 0;
                continue;
            case '15':
                this['bottom'];
                continue;
            case '16':
                this['baseHeight'] = _0x2d91ea !== undefined ? _0x2d91ea : _0x21e265;
                continue;
            case '17':
                this['properties'] = {};
                continue;
            case '18':
                this['right'];
                continue;
            case '19':
                this['collideDown'] = ![];
                continue;
            case '20':
                this['index'] = _0x3eed85;
                continue;
            case '21':
                this['collideLeft'] = ![];
                continue;
            case '22':
                this['layer'] = _0x536112;
                continue;
            case '23':
                this['collisionCallback'] = undefined;
                continue;
            case '24':
                this['tint'] = 16777215;
                continue;
            case '25':
                this['faceRight'] = ![];
                continue;
            case '26':
                this['faceLeft'] = ![];
                continue;
            }
            break;
        }
    },
    'containsPoint': function (_0x576a96, _0x35d492) {
        return !(_0x576a96 < this['pixelX'] || _0x35d492 < this['pixelY'] || _0x576a96 > this['right'] || _0x35d492 > this['bottom']);
    },
    'copy': function (_0xd096f) {
        var _0x1e3d67 = '3|4|0|13|11|12|5|1|7|2|9|6|10|8'['split']('|'), _0x2521a4 = 0;
        while (!![]) {
            switch (_0x1e3d67[_0x2521a4++]) {
            case '0':
                this['properties'] = _0xd096f['properties'];
                continue;
            case '1':
                this['collideUp'] = _0xd096f['collideUp'];
                continue;
            case '2':
                this['collideLeft'] = _0xd096f['collideLeft'];
                continue;
            case '3':
                this['index'] = _0xd096f['index'];
                continue;
            case '4':
                this['alpha'] = _0xd096f['alpha'];
                continue;
            case '5':
                this['rotation'] = _0xd096f['rotation'];
                continue;
            case '6':
                this['collisionCallback'] = _0xd096f['collisionCallback'];
                continue;
            case '7':
                this['collideDown'] = _0xd096f['collideDown'];
                continue;
            case '8':
                return this;
            case '9':
                this['collideRight'] = _0xd096f['collideRight'];
                continue;
            case '10':
                this['collisionCallbackContext'] = _0xd096f['collisionCallbackContext'];
                continue;
            case '11':
                this['setFlip'](_0xd096f['flipX'], _0xd096f['flipY']);
                continue;
            case '12':
                this['tint'] = _0xd096f['tint'];
                continue;
            case '13':
                this['visible'] = _0xd096f['visible'];
                continue;
            }
            break;
        }
    },
    'getCollisionGroup': function () {
        return this['tileset'] ? this['tileset']['getTileCollisionGroup'](this['index']) : null;
    },
    'getTileData': function () {
        return this['tileset'] ? this['tileset']['getTileData'](this['index']) : null;
    },
    'getLeft': function (_0x195ba1) {
        var _0xe8a177 = this['tilemapLayer'];
        return _0xe8a177 ? _0xe8a177['tileToWorldX'](this['x'], _0x195ba1) : this['x'] * this['baseWidth'];
    },
    'getRight': function (_0x57522c) {
        var _0x252216 = this['tilemapLayer'];
        return _0x252216 ? this['getLeft'](_0x57522c) + this['width'] * _0x252216['scaleX'] : this['getLeft'](_0x57522c) + this['width'];
    },
    'getTop': function (_0x7027df) {
        var _0x4ae9d9 = this['tilemapLayer'];
        return _0x4ae9d9 ? _0x4ae9d9['tileToWorldY'](this['y'], _0x7027df) - _0x1d5d3f['voZwo'](this['height'], this['baseHeight']) * _0x4ae9d9['scaleY'] : this['y'] * this['baseHeight'] - (this['height'] - this['baseHeight']);
    },
    'getBottom': function (_0x2ebcce) {
        var _0x5493f4 = this['tilemapLayer'];
        return _0x5493f4 ? this['getTop'](_0x2ebcce) + this['height'] * _0x5493f4['scaleY'] : this['getTop'](_0x2ebcce) + this['height'];
    },
    'getBounds': function (_0x26f23d, _0x4966f4) {
        if (_0x4966f4 === undefined) {
            _0x4966f4 = new Rectangle();
        }
        _0x4966f4['x'] = this['getLeft']();
        _0x4966f4['y'] = this['getTop']();
        _0x4966f4['width'] = this['getRight']() - _0x4966f4['x'];
        _0x4966f4['height'] = this['getBottom']() - _0x4966f4['y'];
        return _0x4966f4;
    },
    'getCenterX': function (_0x133819) {
        return (this['getLeft'](_0x133819) + this['getRight'](_0x133819)) / 2;
    },
    'getCenterY': function (_0x3c48c7) {
        return (this['getTop'](_0x3c48c7) + this['getBottom'](_0x3c48c7)) / 2;
    },
    'intersects': function (_0x2e920e, _0x2572f0, _0x568dc5, _0x30ba7e) {
        return !(_0x568dc5 <= this['pixelX'] || _0x30ba7e <= this['pixelY'] || _0x2e920e >= this['right'] || _0x2572f0 >= this['bottom']);
    },
    'isInteresting': function (_0x467061, _0x2e547e) {
        if (_0x467061 && _0x2e547e) {
            if ('BRUum' !== 'gbNgc') {
                return this['canCollide'] || this['hasInterestingFace'];
            } else {
                return this['tileset'] ? this['tileset']['getTileCollisionGroup'](this['index']) : null;
            }
        } else if (_0x467061) {
            if ('WHnLB' === 'AxPey') {
                var _0x2f08fb = '2|3|4|5|0|1'['split']('|'), _0x5cc50a = 0;
                while (!![]) {
                    switch (_0x2f08fb[_0x5cc50a++]) {
                    case '0':
                        output['height'] = this['getBottom']() - output['y'];
                        continue;
                    case '1':
                        return output;
                    case '2':
                        if (output === undefined) {
                            output = new Rectangle();
                        }
                        continue;
                    case '3':
                        output['x'] = this['getLeft']();
                        continue;
                    case '4':
                        output['y'] = this['getTop']();
                        continue;
                    case '5':
                        output['width'] = this['getRight']() - output['x'];
                        continue;
                    }
                    break;
                }
            } else {
                return this['collides'];
            }
        } else if (_0x2e547e) {
            return this['hasInterestingFace'];
        }
        return ![];
    },
    'resetCollision': function (_0x3e7134) {
        if (_0x3e7134 === undefined) {
            if ('ZsoGD' === 'BJBYe') {
                return this['collides'];
            } else {
                _0x3e7134 = !![];
            }
        }
        this['collideLeft'] = ![];
        this['collideRight'] = ![];
        this['collideUp'] = ![];
        this['collideDown'] = ![];
        this['faceTop'] = ![];
        this['faceBottom'] = ![];
        this['faceLeft'] = ![];
        this['faceRight'] = ![];
        if (_0x3e7134) {
            var _0x5b6ed1 = this['tilemapLayer'];
            if (_0x5b6ed1) {
                if ('ILISp' === 'skaMK') {
                    this['tilemapLayer']['calculateFacesAt'](this['x'], this['y']);
                } else {
                    this['tilemapLayer']['calculateFacesAt'](this['x'], this['y']);
                }
            }
        }
        return this;
    },
    'resetFaces': function () {
        var _0x280a3d = '0|4|3|2|1'['split']('|'), _0x4ec30a = 0;
        while (!![]) {
            switch (_0x280a3d[_0x4ec30a++]) {
            case '0':
                this['faceTop'] = ![];
                continue;
            case '1':
                return this;
            case '2':
                this['faceRight'] = ![];
                continue;
            case '3':
                this['faceLeft'] = ![];
                continue;
            case '4':
                this['faceBottom'] = ![];
                continue;
            }
            break;
        }
    },
    'setCollision': function (_0x2ccb0b, _0x531b04, _0x385191, _0x11fb75, _0x1ff8af) {
        if (_0x531b04 === undefined) {
            if ('IDzdK' !== 'KbYsH') {
                _0x531b04 = _0x2ccb0b;
            } else {
                var _0x798023 = this['tilemapLayer'];
                return _0x798023 ? this['getLeft'](camera) + this['width'] * _0x798023['scaleX'] : this['getLeft'](camera) + this['width'];
            }
        }
        if (_0x385191 === undefined) {
            _0x385191 = _0x2ccb0b;
        }
        if (_0x11fb75 === undefined) {
            if ('GSuhs' !== 'GSuhs') {
                var _0x2d8057 = _0x4b7cfd['gidMap'][this['index']];
                if (_0x2d8057) {
                    return _0x2d8057;
                }
            } else {
                _0x11fb75 = _0x2ccb0b;
            }
        }
        if (_0x1ff8af === undefined) {
            _0x1ff8af = !![];
        }
        this['collideLeft'] = _0x2ccb0b;
        this['collideRight'] = _0x531b04;
        this['collideUp'] = _0x385191;
        this['collideDown'] = _0x11fb75;
        this['faceLeft'] = _0x2ccb0b;
        this['faceRight'] = _0x531b04;
        this['faceTop'] = _0x385191;
        this['faceBottom'] = _0x11fb75;
        if (_0x1ff8af) {
            var _0x4b7cfd = this['tilemapLayer'];
            if (_0x4b7cfd) {
                if ('hWnYr' === 'eGMrJ') {
                    var _0x57f9d0 = this['layer']['hexSideLength'];
                    var _0x253e75 = (this['baseHeight'] - _0x57f9d0) / 2 + _0x57f9d0;
                    this['pixelX'] = this['x'] * this['baseWidth'] + this['y'] % 2 * (this['baseWidth'] / 2);
                    this['pixelY'] = this['y'] * _0x253e75;
                } else {
                    this['tilemapLayer']['calculateFacesAt'](this['x'], this['y']);
                }
            }
        }
        return this;
    },
    'setCollisionCallback': function (_0x29d049, _0x39f218) {
        if (_0x29d049 === null) {
            if ('NvlmX' === 'nYHxA') {
                var _0x1f8584 = this['tilemapLayer'];
                return _0x1f8584 ? _0x1f8584['tilemap'] : null;
            } else {
                this['collisionCallback'] = undefined;
                this['collisionCallbackContext'] = undefined;
            }
        } else {
            this['collisionCallback'] = _0x29d049;
            this['collisionCallbackContext'] = _0x39f218;
        }
        return this;
    },
    'setSize': function (_0x24cbe6, _0x5bad88, _0x9a774a, _0x51b674) {
        if (_0x24cbe6 !== undefined) {
            if ('RGBbL' === 'UqlTQ') {
                this['baseWidth'] = _0x9a774a;
            } else {
                this['width'] = _0x24cbe6;
            }
        }
        if (_0x5bad88 !== undefined) {
            if ('hXMAb' === 'hXMAb') {
                this['height'] = _0x5bad88;
            } else {
                return !(right <= this['pixelX'] || bottom <= this['pixelY'] || x >= this['right'] || y >= this['bottom']);
            }
        }
        if (_0x9a774a !== undefined) {
            this['baseWidth'] = _0x9a774a;
        }
        if (_0x51b674 !== undefined) {
            if ('SvHIA' !== 'SvHIA') {
                right = left;
            } else {
                this['baseHeight'] = _0x51b674;
            }
        }
        this['updatePixelXY']();
        return this;
    },
    'updatePixelXY': function () {
        var _0x430887 = this['layer']['orientation'];
        if (_0x430887 === CONST['ORTHOGONAL']) {
            if ('XExzK' === 'XExzK') {
                this['pixelX'] = this['x'] * this['baseWidth'];
                this['pixelY'] = this['y'] * this['baseHeight'];
            } else {
                return !(x < this['pixelX'] || y < this['pixelY'] || x > this['right'] || y > this['bottom']);
            }
        } else if (_0x430887 === CONST['ISOMETRIC']) {
            if ('gCCIU' === 'gCCIU') {
                this['pixelX'] = (this['x'] - this['y']) * this['baseWidth'] * 0.5;
                this['pixelY'] = _0x464b1c['NGgCb'](this['x'] + this['y'], this['baseHeight']) * 0.5;
            } else {
                var _0x1f719d = this['tilemapLayer'];
                if (_0x1f719d) {
                    this['tilemapLayer']['calculateFacesAt'](this['x'], this['y']);
                }
            }
        } else if (_0x430887 === CONST['STAGGERED']) {
            if ('cDhRS' !== 'cDhRS') {
                recalculateFaces = !![];
            } else {
                this['pixelX'] = this['x'] * this['baseWidth'] + this['y'] % 2 * (this['baseWidth'] / 2);
                this['pixelY'] = this['y'] * (this['baseHeight'] / 2);
            }
        } else if (_0x430887 === CONST['HEXAGONAL']) {
            if ('KrWDA' !== 'KrWDA') {
                var _0xd44b4d = this['tilemapLayer'];
                return _0xd44b4d ? _0xd44b4d['tileToWorldX'](this['x'], camera) : this['x'] * this['baseWidth'];
            } else {
                var _0x2f63dc = this['layer']['hexSideLength'];
                var _0x30ebd0 = (this['baseHeight'] - _0x2f63dc) / 2 + _0x2f63dc;
                this['pixelX'] = this['x'] * this['baseWidth'] + this['y'] % 2 * (this['baseWidth'] / 2);
                this['pixelY'] = this['y'] * _0x30ebd0;
            }
        }
        this['right'] = this['pixelX'] + this['baseWidth'];
        this['bottom'] = this['pixelY'] + this['baseHeight'];
        return this;
    },
    'destroy': function () {
        this['collisionCallback'] = undefined;
        this['collisionCallbackContext'] = undefined;
        this['properties'] = undefined;
    },
    'canCollide': {
        'get': function () {
            return this['collideLeft'] || this['collideRight'] || this['collideUp'] || this['collideDown'] || this['collisionCallback'] !== undefined;
        }
    },
    'collides': {
        'get': function () {
            return this['collideLeft'] || this['collideRight'] || this['collideUp'] || this['collideDown'];
        }
    },
    'hasInterestingFace': {
        'get': function () {
            return this['faceTop'] || this['faceBottom'] || this['faceLeft'] || this['faceRight'];
        }
    },
    'tileset': {
        'get': function () {
            var _0x163785 = this['layer']['tilemapLayer'];
            if (_0x163785) {
                if ('YtDuA' !== 'LGbXi') {
                    var _0xd58d2a = _0x163785['gidMap'][this['index']];
                    if (_0xd58d2a) {
                        return _0xd58d2a;
                    }
                } else {
                    var _0x21fa28 = '5|11|3|2|8|12|10|7|6|9|13|1|4|0'['split']('|'), _0x18dcb5 = 0;
                    while (!![]) {
                        switch (_0x21fa28[_0x18dcb5++]) {
                        case '0':
                            return this;
                        case '1':
                            this['collisionCallback'] = tile['collisionCallback'];
                            continue;
                        case '2':
                            this['visible'] = tile['visible'];
                            continue;
                        case '3':
                            this['properties'] = tile['properties'];
                            continue;
                        case '4':
                            this['collisionCallbackContext'] = tile['collisionCallbackContext'];
                            continue;
                        case '5':
                            this['index'] = tile['index'];
                            continue;
                        case '6':
                            this['collideDown'] = tile['collideDown'];
                            continue;
                        case '7':
                            this['collideUp'] = tile['collideUp'];
                            continue;
                        case '8':
                            this['setFlip'](tile['flipX'], tile['flipY']);
                            continue;
                        case '9':
                            this['collideLeft'] = tile['collideLeft'];
                            continue;
                        case '10':
                            this['rotation'] = tile['rotation'];
                            continue;
                        case '11':
                            this['alpha'] = tile['alpha'];
                            continue;
                        case '12':
                            this['tint'] = tile['tint'];
                            continue;
                        case '13':
                            this['collideRight'] = tile['collideRight'];
                            continue;
                        }
                        break;
                    }
                }
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
            var _0x5cd211 = this['tilemapLayer'];
            return _0x5cd211 ? _0x5cd211['tilemap'] : null;
        }
    }
});
module['exports'] = Tile;