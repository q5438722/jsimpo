/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var _0x16cc = [
    'faceBottom',
    'faceRight',
    'collideRight',
    'rotation',
    'index',
    'faceTop',
    'faceLeft',
    'collideLeft',
    'pixelY',
    'UaNcl',
    'right',
    'kkOyS',
    'collideUp',
    'visible',
    'tint',
    'alpha',
    'setFlip',
    'flipX',
    'flipY',
    'tileset',
    'getTileData',
    'tilemapLayer',
    'tileToWorldX',
    'AUItW',
    'getLeft',
    'tileToWorldY',
    'rhkHZ',
    'scaleY',
    'xEGOd',
    'baseHeight',
    'lcofN',
    'getTop',
    'QHCND',
    'cLEjv',
    'getBottom',
    'MNLHR',
    'getRight',
    'IzChR',
    'ZyplZ',
    'LEpff',
    'canCollide',
    '10|3|5|0|9|2|4|6|1|8|7',
    'split',
    'calculateFacesAt',
    'GOIvT',
    '0|4|2|3|1',
    '12|4|8|6|7|2|11|0|1|3|13|10|9|5',
    'TLigQ',
    'JgsFa',
    '0|2|1|4|3',
    'yqRfT',
    'iUWko',
    'ORTHOGONAL',
    'EfWSa',
    'KUUSu',
    'ISOMETRIC',
    'PjdbX',
    'yixxP',
    'pZOoe',
    'STAGGERED',
    'HEXAGONAL',
    'hexSideLength',
    'iQbwk',
    'cmHSl',
    'NdosR',
    'RYKmx',
    'FeIHN',
    'YZjvO',
    'mXdsW',
    'ZDjGI',
    'tilemap',
    'exports',
    '77hPvfOV',
    '5mgqOyB',
    '198197CybYcS',
    '312857KUqBza',
    '392908AvACLQ',
    '1MmfnIp',
    '274806IkTIYv',
    '384196RfAkAf',
    '1iMwrJi',
    '448395Yhzrer',
    './const/ORIENTATION_CONST',
    '../utils/Class',
    '../gameobjects/components',
    '../geom/rectangle',
    'Flip',
    'Visible',
    '3|20|4|24|13|10|8|14|1|18|5|26|11|0|19|25|17|23|7|22|16|21|15|6|12|2|9',
    'properties',
    'baseWidth',
    'layer',
    'pixelX',
    'collisionCallback',
    'collideDown',
    'height',
    'updatePixelXY',
    'collisionCallbackContext',
    'width',
    'bottom'
];
var _0x1e9e08 = _0x2110;
(function (_0xe48bdd, _0x10829b) {
    var _0x2f7df5 = _0x2110;
    while (!![]) {
        try {
            var _0x4c371b = parseInt(_0x2f7df5(0x1af)) * -parseInt(_0x2f7df5(0x1b0)) + -parseInt(_0x2f7df5(0x1b1)) + -parseInt(_0x2f7df5(0x1b2)) + -parseInt(_0x2f7df5(0x1b3)) * parseInt(_0x2f7df5(0x1b4)) + parseInt(_0x2f7df5(0x1b5)) + -parseInt(_0x2f7df5(0x1b6)) * -parseInt(_0x2f7df5(0x1b7)) + parseInt(_0x2f7df5(0x1b8));
            if (_0x4c371b === _0x10829b)
                break;
            else
                _0xe48bdd['push'](_0xe48bdd['shift']());
        } catch (_0x174c89) {
            _0xe48bdd['push'](_0xe48bdd['shift']());
        }
    }
}(_0x16cc, 0x115a2 + 0xe * 0xb7e + -0x2 * -0xb152));
var CONST = require(_0x1e9e08(0x1b9)), Class = require(_0x1e9e08(0x1ba)), Components = require(_0x1e9e08(0x1bb)), Rectangle = require(_0x1e9e08(0x1bc)), Tile = new Class({
        'Mixins': [
            Components['Alpha'],
            Components[_0x1e9e08(0x1bd)],
            Components[_0x1e9e08(0x1be)]
        ],
        'initialize': function Tile(_0x232f03, _0x5e31c4, _0x41aa32, _0x57ef5d, _0x3388d4, _0x13d36c, _0x4ef653, _0x1d35eb) {
            var _0x293854 = _0x1e9e08, _0x410ecc = {
                    'PwGdW': _0x293854(0x1bf),
                    'vOfPz': function (_0x35d0e0, _0x5bca98) {
                        return _0x35d0e0 !== _0x5bca98;
                    },
                    'OhTnJ': function (_0x275fe6, _0x25e1a7) {
                        return _0x275fe6 !== _0x25e1a7;
                    }
                }, _0x498065 = _0x410ecc['PwGdW']['split']('|'), _0x23df64 = -0x88f * 0x1 + -0x1791 * -0x1 + -0xf02;
            while (!![]) {
                switch (_0x498065[_0x23df64++]) {
                case '0':
                    this[_0x293854(0x1c0)] = {};
                    continue;
                case '1':
                    this[_0x293854(0x1c1)] = _0x410ecc['vOfPz'](_0x4ef653, undefined) ? _0x4ef653 : _0x3388d4;
                    continue;
                case '2':
                    this['tint'] = -0x1e795af + -0x1 * -0x18496f7 + -0x162feb7 * -0x1;
                    continue;
                case '3':
                    this[_0x293854(0x1c2)] = _0x232f03;
                    continue;
                case '4':
                    this['x'] = _0x41aa32;
                    continue;
                case '5':
                    this[_0x293854(0x1c3)] = 0xd51 + -0x1 * 0x16f + -0xbe2;
                    continue;
                case '6':
                    this[_0x293854(0x1c4)] = undefined;
                    continue;
                case '7':
                    this[_0x293854(0x1c5)] = ![];
                    continue;
                case '8':
                    this['right'];
                    continue;
                case '9':
                    this['physics'] = {};
                    continue;
                case '10':
                    this[_0x293854(0x1c6)] = _0x13d36c;
                    continue;
                case '11':
                    this[_0x293854(0x1c7)]();
                    continue;
                case '12':
                    this[_0x293854(0x1c8)] = this;
                    continue;
                case '13':
                    this[_0x293854(0x1c9)] = _0x3388d4;
                    continue;
                case '14':
                    this[_0x293854(0x1ca)];
                    continue;
                case '15':
                    this[_0x293854(0x1cb)] = ![];
                    continue;
                case '16':
                    this[_0x293854(0x1cc)] = ![];
                    continue;
                case '17':
                    this[_0x293854(0x1cd)] = ![];
                    continue;
                case '18':
                    this['baseHeight'] = _0x410ecc['OhTnJ'](_0x1d35eb, undefined) ? _0x1d35eb : _0x13d36c;
                    continue;
                case '19':
                    this[_0x293854(0x1ce)] = -0x43 * -0x77 + 0x269 * 0x1 + -0x218e;
                    continue;
                case '20':
                    this[_0x293854(0x1cf)] = _0x5e31c4;
                    continue;
                case '21':
                    this[_0x293854(0x1d0)] = ![];
                    continue;
                case '22':
                    this[_0x293854(0x1d1)] = ![];
                    continue;
                case '23':
                    this['collideUp'] = ![];
                    continue;
                case '24':
                    this['y'] = _0x57ef5d;
                    continue;
                case '25':
                    this[_0x293854(0x1d2)] = ![];
                    continue;
                case '26':
                    this['pixelY'] = 0x2562 + 0x77d + -0x669 * 0x7;
                    continue;
                }
                break;
            }
        },
        'containsPoint': function (_0x3c594f, _0x480e6a) {
            var _0x441260 = _0x1e9e08, _0x22bf1c = {
                    'nebIx': function (_0x47767f, _0x33aa0c) {
                        return _0x47767f < _0x33aa0c;
                    },
                    'UaNcl': function (_0x5abf0f, _0x1e3ba0) {
                        return _0x5abf0f > _0x1e3ba0;
                    }
                };
            return !(_0x22bf1c['nebIx'](_0x3c594f, this[_0x441260(0x1c3)]) || _0x480e6a < this[_0x441260(0x1d3)] || _0x22bf1c[_0x441260(0x1d4)](_0x3c594f, this[_0x441260(0x1d5)]) || _0x480e6a > this[_0x441260(0x1ca)]);
        },
        'copy': function (_0x3d4106) {
            var _0x241b46 = _0x1e9e08, _0x39eefa = { 'kkOyS': '9|10|1|3|13|4|11|2|0|6|5|8|12|7' }, _0x2ca9f1 = _0x39eefa[_0x241b46(0x1d6)]['split']('|'), _0x14a5a5 = 0x2512 + -0x136b + 0x11a7 * -0x1;
            while (!![]) {
                switch (_0x2ca9f1[_0x14a5a5++]) {
                case '0':
                    this[_0x241b46(0x1c5)] = _0x3d4106[_0x241b46(0x1c5)];
                    continue;
                case '1':
                    this[_0x241b46(0x1c0)] = _0x3d4106[_0x241b46(0x1c0)];
                    continue;
                case '2':
                    this['collideUp'] = _0x3d4106[_0x241b46(0x1d7)];
                    continue;
                case '3':
                    this['visible'] = _0x3d4106[_0x241b46(0x1d8)];
                    continue;
                case '4':
                    this[_0x241b46(0x1d9)] = _0x3d4106[_0x241b46(0x1d9)];
                    continue;
                case '5':
                    this[_0x241b46(0x1cd)] = _0x3d4106['collideRight'];
                    continue;
                case '6':
                    this[_0x241b46(0x1d2)] = _0x3d4106[_0x241b46(0x1d2)];
                    continue;
                case '7':
                    return this;
                case '8':
                    this['collisionCallback'] = _0x3d4106[_0x241b46(0x1c4)];
                    continue;
                case '9':
                    this['index'] = _0x3d4106[_0x241b46(0x1cf)];
                    continue;
                case '10':
                    this[_0x241b46(0x1da)] = _0x3d4106[_0x241b46(0x1da)];
                    continue;
                case '11':
                    this[_0x241b46(0x1ce)] = _0x3d4106[_0x241b46(0x1ce)];
                    continue;
                case '12':
                    this[_0x241b46(0x1c8)] = _0x3d4106[_0x241b46(0x1c8)];
                    continue;
                case '13':
                    this[_0x241b46(0x1db)](_0x3d4106[_0x241b46(0x1dc)], _0x3d4106[_0x241b46(0x1dd)]);
                    continue;
                }
                break;
            }
        },
        'getCollisionGroup': function () {
            var _0x5713ca = _0x1e9e08;
            return this[_0x5713ca(0x1de)] ? this['tileset']['getTileCollisionGroup'](this['index']) : null;
        },
        'getTileData': function () {
            var _0x41cc1b = _0x1e9e08;
            return this['tileset'] ? this[_0x41cc1b(0x1de)][_0x41cc1b(0x1df)](this[_0x41cc1b(0x1cf)]) : null;
        },
        'getLeft': function (_0x584822) {
            var _0x487405 = _0x1e9e08, _0x1cc778 = {
                    'qZEPO': function (_0x294c42, _0x47d1a4) {
                        return _0x294c42 * _0x47d1a4;
                    }
                }, _0x4689a9 = this[_0x487405(0x1e0)];
            return _0x4689a9 ? _0x4689a9[_0x487405(0x1e1)](this['x'], _0x584822) : _0x1cc778['qZEPO'](this['x'], this[_0x487405(0x1c1)]);
        },
        'getRight': function (_0x75410d) {
            var _0x90462f = _0x1e9e08, _0x51e60d = {
                    'AUItW': function (_0x51a3fc, _0x20d201) {
                        return _0x51a3fc + _0x20d201;
                    },
                    'eYGmL': function (_0x120515, _0xbab3c4) {
                        return _0x120515 + _0xbab3c4;
                    }
                }, _0x17cd36 = this[_0x90462f(0x1e0)];
            return _0x17cd36 ? _0x51e60d[_0x90462f(0x1e2)](this[_0x90462f(0x1e3)](_0x75410d), this['width'] * _0x17cd36['scaleX']) : _0x51e60d['eYGmL'](this['getLeft'](_0x75410d), this[_0x90462f(0x1c9)]);
        },
        'getTop': function (_0x31ec7c) {
            var _0x4b8500 = _0x1e9e08, _0x507c56 = {
                    'ltqzk': function (_0xfd26e3, _0x3fb1ac) {
                        return _0xfd26e3 * _0x3fb1ac;
                    },
                    'rhkHZ': function (_0x4e3cde, _0x6b8b7d) {
                        return _0x4e3cde - _0x6b8b7d;
                    },
                    'xEGOd': function (_0x4d8c80, _0x3d658d) {
                        return _0x4d8c80 - _0x3d658d;
                    },
                    'dzwkN': function (_0x18c665, _0x4395c1) {
                        return _0x18c665 * _0x4395c1;
                    },
                    'lcofN': function (_0x184e80, _0x45ce5b) {
                        return _0x184e80 - _0x45ce5b;
                    }
                }, _0x39836b = this['tilemapLayer'];
            return _0x39836b ? _0x39836b[_0x4b8500(0x1e4)](this['y'], _0x31ec7c) - _0x507c56['ltqzk'](_0x507c56[_0x4b8500(0x1e5)](this[_0x4b8500(0x1c6)], this['baseHeight']), _0x39836b[_0x4b8500(0x1e6)]) : _0x507c56[_0x4b8500(0x1e7)](_0x507c56['dzwkN'](this['y'], this[_0x4b8500(0x1e8)]), _0x507c56[_0x4b8500(0x1e9)](this['height'], this[_0x4b8500(0x1e8)]));
        },
        'getBottom': function (_0x154d48) {
            var _0x44e84e = _0x1e9e08, _0x2a4777 = {
                    'xCobf': function (_0x44eb5d, _0x584e6c) {
                        return _0x44eb5d * _0x584e6c;
                    },
                    'uYkcj': function (_0x1257a9, _0x1a0f6f) {
                        return _0x1257a9 + _0x1a0f6f;
                    }
                }, _0x3c99f7 = this['tilemapLayer'];
            return _0x3c99f7 ? this[_0x44e84e(0x1ea)](_0x154d48) + _0x2a4777['xCobf'](this[_0x44e84e(0x1c6)], _0x3c99f7['scaleY']) : _0x2a4777['uYkcj'](this[_0x44e84e(0x1ea)](_0x154d48), this[_0x44e84e(0x1c6)]);
        },
        'getBounds': function (_0x20c675, _0x430b60) {
            var _0x54f32b = _0x1e9e08, _0x389d09 = {
                    'QHCND': function (_0x58b20d, _0x5b9967) {
                        return _0x58b20d === _0x5b9967;
                    },
                    'cLEjv': function (_0x449eb6, _0x27d168) {
                        return _0x449eb6 - _0x27d168;
                    }
                };
            return _0x389d09[_0x54f32b(0x1eb)](_0x430b60, undefined) && (_0x430b60 = new Rectangle()), _0x430b60['x'] = this[_0x54f32b(0x1e3)](), _0x430b60['y'] = this['getTop'](), _0x430b60[_0x54f32b(0x1c9)] = _0x389d09[_0x54f32b(0x1ec)](this['getRight'](), _0x430b60['x']), _0x430b60[_0x54f32b(0x1c6)] = this[_0x54f32b(0x1ed)]() - _0x430b60['y'], _0x430b60;
        },
        'getCenterX': function (_0x160afb) {
            var _0x37bf19 = _0x1e9e08, _0x36c420 = {
                    'MNLHR': function (_0x1e2a80, _0x2f211b) {
                        return _0x1e2a80 / _0x2f211b;
                    }
                };
            return _0x36c420[_0x37bf19(0x1ee)](this[_0x37bf19(0x1e3)](_0x160afb) + this[_0x37bf19(0x1ef)](_0x160afb), 0x2508 + 0xed5 * 0x1 + -0x33db * 0x1);
        },
        'getCenterY': function (_0x4573b7) {
            var _0x481e40 = _0x1e9e08, _0x4a54ec = {
                    'IzChR': function (_0x34fdbc, _0x488b73) {
                        return _0x34fdbc + _0x488b73;
                    }
                };
            return _0x4a54ec[_0x481e40(0x1f0)](this[_0x481e40(0x1ea)](_0x4573b7), this[_0x481e40(0x1ed)](_0x4573b7)) / (-0x1ec6 * 0x1 + 0xcfa + 0x11ce);
        },
        'intersects': function (_0x362a47, _0xf5f49d, _0x43bd5f, _0x3940cf) {
            var _0x9e6849 = _0x1e9e08, _0x49f08f = {
                    'ZyplZ': function (_0x4713fe, _0x2b3627) {
                        return _0x4713fe <= _0x2b3627;
                    },
                    'zMorh': function (_0x5db8d2, _0xeedb55) {
                        return _0x5db8d2 >= _0xeedb55;
                    }
                };
            return !(_0x49f08f[_0x9e6849(0x1f1)](_0x43bd5f, this[_0x9e6849(0x1c3)]) || _0x49f08f[_0x9e6849(0x1f1)](_0x3940cf, this[_0x9e6849(0x1d3)]) || _0x49f08f['zMorh'](_0x362a47, this[_0x9e6849(0x1d5)]) || _0x49f08f['zMorh'](_0xf5f49d, this[_0x9e6849(0x1ca)]));
        },
        'isInteresting': function (_0x138bb8, _0x30c28a) {
            var _0x357605 = _0x1e9e08, _0x40f360 = {
                    'LEpff': function (_0x1a00cd, _0x21df3a) {
                        return _0x1a00cd && _0x21df3a;
                    }
                };
            if (_0x40f360[_0x357605(0x1f2)](_0x138bb8, _0x30c28a))
                return this[_0x357605(0x1f3)] || this['hasInterestingFace'];
            else {
                if (_0x138bb8)
                    return this['collides'];
                else {
                    if (_0x30c28a)
                        return this['hasInterestingFace'];
                }
            }
            return ![];
        },
        'resetCollision': function (_0x33e8d4) {
            var _0x57ca1f = _0x1e9e08, _0x199bc0 = {
                    'TTmUX': _0x57ca1f(0x1f4),
                    'GOIvT': function (_0x24d535, _0x198298) {
                        return _0x24d535 === _0x198298;
                    }
                }, _0x41dfe0 = _0x199bc0['TTmUX'][_0x57ca1f(0x1f5)]('|'), _0xa288bc = 0x1404 + 0x1b42 + -0x2f46;
            while (!![]) {
                switch (_0x41dfe0[_0xa288bc++]) {
                case '0':
                    this[_0x57ca1f(0x1d7)] = ![];
                    continue;
                case '1':
                    this[_0x57ca1f(0x1cc)] = ![];
                    continue;
                case '2':
                    this[_0x57ca1f(0x1d0)] = ![];
                    continue;
                case '3':
                    this[_0x57ca1f(0x1d2)] = ![];
                    continue;
                case '4':
                    this['faceBottom'] = ![];
                    continue;
                case '5':
                    this[_0x57ca1f(0x1cd)] = ![];
                    continue;
                case '6':
                    this[_0x57ca1f(0x1d1)] = ![];
                    continue;
                case '7':
                    return this;
                case '8':
                    if (_0x33e8d4) {
                        var _0x49cc31 = this[_0x57ca1f(0x1e0)];
                        _0x49cc31 && this[_0x57ca1f(0x1e0)][_0x57ca1f(0x1f6)](this['x'], this['y']);
                    }
                    continue;
                case '9':
                    this['collideDown'] = ![];
                    continue;
                case '10':
                    _0x199bc0[_0x57ca1f(0x1f7)](_0x33e8d4, undefined) && (_0x33e8d4 = !![]);
                    continue;
                }
                break;
            }
        },
        'resetFaces': function () {
            var _0x459c60 = _0x1e9e08, _0xe01174 = { 'IPMhM': _0x459c60(0x1f8) }, _0x50fb5b = _0xe01174['IPMhM'][_0x459c60(0x1f5)]('|'), _0x476383 = 0x5 * 0x3c5 + 0x784 + -0x1a5d;
            while (!![]) {
                switch (_0x50fb5b[_0x476383++]) {
                case '0':
                    this[_0x459c60(0x1d0)] = ![];
                    continue;
                case '1':
                    return this;
                case '2':
                    this[_0x459c60(0x1d1)] = ![];
                    continue;
                case '3':
                    this[_0x459c60(0x1cc)] = ![];
                    continue;
                case '4':
                    this['faceBottom'] = ![];
                    continue;
                }
                break;
            }
        },
        'setCollision': function (_0x50300c, _0x3f9bd9, _0xa90cc7, _0x3313bb, _0x345cd6) {
            var _0x57f508 = _0x1e9e08, _0x3ecd6e = {
                    'ibVED': function (_0x5c9a57, _0x1e79f2) {
                        return _0x5c9a57 === _0x1e79f2;
                    },
                    'YcAHr': function (_0x15f679, _0x335096) {
                        return _0x15f679 === _0x335096;
                    },
                    'TLigQ': function (_0x3e31a7, _0x2c0ecb) {
                        return _0x3e31a7 === _0x2c0ecb;
                    }
                }, _0x1a41bb = _0x57f508(0x1f9)[_0x57f508(0x1f5)]('|'), _0x3c7a1e = -0x3 * -0x2c + -0x201b * 0x1 + 0x1f97;
            while (!![]) {
                switch (_0x1a41bb[_0x3c7a1e++]) {
                case '0':
                    this[_0x57f508(0x1c5)] = _0x3313bb;
                    continue;
                case '1':
                    this[_0x57f508(0x1d1)] = _0x50300c;
                    continue;
                case '2':
                    this['collideRight'] = _0x3f9bd9;
                    continue;
                case '3':
                    this['faceRight'] = _0x3f9bd9;
                    continue;
                case '4':
                    _0x3ecd6e['ibVED'](_0xa90cc7, undefined) && (_0xa90cc7 = _0x50300c);
                    continue;
                case '5':
                    return this;
                case '6':
                    _0x3ecd6e['YcAHr'](_0x345cd6, undefined) && (_0x345cd6 = !![]);
                    continue;
                case '7':
                    this[_0x57f508(0x1d2)] = _0x50300c;
                    continue;
                case '8':
                    _0x3ecd6e[_0x57f508(0x1fa)](_0x3313bb, undefined) && (_0x3313bb = _0x50300c);
                    continue;
                case '9':
                    if (_0x345cd6) {
                        var _0x3275ce = this['tilemapLayer'];
                        _0x3275ce && this[_0x57f508(0x1e0)][_0x57f508(0x1f6)](this['x'], this['y']);
                    }
                    continue;
                case '10':
                    this['faceBottom'] = _0x3313bb;
                    continue;
                case '11':
                    this[_0x57f508(0x1d7)] = _0xa90cc7;
                    continue;
                case '12':
                    _0x3f9bd9 === undefined && (_0x3f9bd9 = _0x50300c);
                    continue;
                case '13':
                    this[_0x57f508(0x1d0)] = _0xa90cc7;
                    continue;
                }
                break;
            }
        },
        'setCollisionCallback': function (_0x402b86, _0x430019) {
            var _0xc551bb = _0x1e9e08;
            return _0x402b86 === null ? (this['collisionCallback'] = undefined, this[_0xc551bb(0x1c8)] = undefined) : (this[_0xc551bb(0x1c4)] = _0x402b86, this[_0xc551bb(0x1c8)] = _0x430019), this;
        },
        'setSize': function (_0x561bfa, _0x573adc, _0x4e8895, _0x1bc733) {
            var _0x3a6984 = _0x1e9e08, _0x16c0fc = {
                    'JgsFa': function (_0x2ef053, _0x322ac9) {
                        return _0x2ef053 !== _0x322ac9;
                    }
                };
            return _0x16c0fc['JgsFa'](_0x561bfa, undefined) && (this[_0x3a6984(0x1c9)] = _0x561bfa), _0x16c0fc[_0x3a6984(0x1fb)](_0x573adc, undefined) && (this['height'] = _0x573adc), _0x4e8895 !== undefined && (this['baseWidth'] = _0x4e8895), _0x1bc733 !== undefined && (this[_0x3a6984(0x1e8)] = _0x1bc733), this['updatePixelXY'](), this;
        },
        'updatePixelXY': function () {
            var _0x44307d = _0x1e9e08, _0x35f19a = {
                    'ItWsS': _0x44307d(0x1fc),
                    'yqRfT': function (_0x403b54, _0xec0230) {
                        return _0x403b54 + _0xec0230;
                    },
                    'iUWko': function (_0x5c73bd, _0xc0d5a7) {
                        return _0x5c73bd === _0xc0d5a7;
                    },
                    'EfWSa': function (_0x4a8865, _0x4abfa0) {
                        return _0x4a8865 * _0x4abfa0;
                    },
                    'IFbin': function (_0x5e5a43, _0x3bfd0c) {
                        return _0x5e5a43 * _0x3bfd0c;
                    },
                    'KUUSu': function (_0x22e84f, _0x7d13f9) {
                        return _0x22e84f === _0x7d13f9;
                    },
                    'qXnEA': function (_0x268831, _0x1511d0) {
                        return _0x268831 * _0x1511d0;
                    },
                    'PjdbX': function (_0x1db980, _0x18b849) {
                        return _0x1db980 * _0x18b849;
                    },
                    'yixxP': function (_0x29b68f, _0x12315e) {
                        return _0x29b68f * _0x12315e;
                    },
                    'pZOoe': function (_0x54d076, _0x4d414b) {
                        return _0x54d076 + _0x4d414b;
                    },
                    'YUmLC': function (_0x5bd8fb, _0x543a02) {
                        return _0x5bd8fb / _0x543a02;
                    },
                    'iQbwk': function (_0x451545, _0x4dadd5) {
                        return _0x451545 / _0x4dadd5;
                    },
                    'zZdiZ': function (_0x30ad50, _0x48c9b2) {
                        return _0x30ad50 - _0x48c9b2;
                    },
                    'cmHSl': function (_0x581f2a, _0x2e3fab) {
                        return _0x581f2a * _0x2e3fab;
                    },
                    'NdosR': function (_0x5c86f8, _0x35a05a) {
                        return _0x5c86f8 * _0x35a05a;
                    },
                    'RYKmx': function (_0x186113, _0x34ee3a) {
                        return _0x186113 % _0x34ee3a;
                    },
                    'FeIHN': function (_0x299578, _0x28269f) {
                        return _0x299578 / _0x28269f;
                    },
                    'YZjvO': function (_0x1b83dc, _0x49f886) {
                        return _0x1b83dc * _0x49f886;
                    },
                    'mXdsW': function (_0x38a40e, _0x2a707c) {
                        return _0x38a40e + _0x2a707c;
                    }
                }, _0x225e31 = _0x35f19a['ItWsS'][_0x44307d(0x1f5)]('|'), _0x2bfb8c = -0x2134 + -0x1451 + 0x3585 * 0x1;
            while (!![]) {
                switch (_0x225e31[_0x2bfb8c++]) {
                case '0':
                    var _0x3bee0f = this[_0x44307d(0x1c2)]['orientation'];
                    continue;
                case '1':
                    this[_0x44307d(0x1d5)] = _0x35f19a[_0x44307d(0x1fd)](this[_0x44307d(0x1c3)], this[_0x44307d(0x1c1)]);
                    continue;
                case '2':
                    if (_0x35f19a[_0x44307d(0x1fe)](_0x3bee0f, CONST[_0x44307d(0x1ff)]))
                        this[_0x44307d(0x1c3)] = _0x35f19a[_0x44307d(0x200)](this['x'], this[_0x44307d(0x1c1)]), this[_0x44307d(0x1d3)] = _0x35f19a['IFbin'](this['y'], this[_0x44307d(0x1e8)]);
                    else {
                        if (_0x35f19a[_0x44307d(0x201)](_0x3bee0f, CONST[_0x44307d(0x202)]))
                            this[_0x44307d(0x1c3)] = _0x35f19a['qXnEA']((this['x'] - this['y']) * this[_0x44307d(0x1c1)], 0x873 + -0x21c + -0x657 * 0x1 + 0.5), this[_0x44307d(0x1d3)] = _0x35f19a[_0x44307d(0x203)](_0x35f19a[_0x44307d(0x204)](_0x35f19a[_0x44307d(0x205)](this['x'], this['y']), this[_0x44307d(0x1e8)]), 0x3df * 0x3 + -0x3 * 0x1d7 + -0x3c * 0x1a + 0.5);
                        else {
                            if (_0x3bee0f === CONST[_0x44307d(0x206)])
                                this[_0x44307d(0x1c3)] = _0x35f19a[_0x44307d(0x205)](_0x35f19a['yixxP'](this['x'], this[_0x44307d(0x1c1)]), this['y'] % (0x2594 + 0xb * -0x355 + -0x2f * 0x5) * _0x35f19a['YUmLC'](this[_0x44307d(0x1c1)], 0x18f7 + 0x1bb6 + -0x34ab)), this[_0x44307d(0x1d3)] = this['y'] * (this[_0x44307d(0x1e8)] / (-0x1305 * 0x1 + 0x1867 * -0x1 + 0x66 * 0x6d));
                            else {
                                if (_0x3bee0f === CONST[_0x44307d(0x207)]) {
                                    var _0xb088cc = this['layer'][_0x44307d(0x208)], _0x586ffb = _0x35f19a[_0x44307d(0x209)](_0x35f19a['zZdiZ'](this[_0x44307d(0x1e8)], _0xb088cc), -0x8e * 0x1 + 0x61f * -0x1 + -0x1 * -0x6af) + _0xb088cc;
                                    this[_0x44307d(0x1c3)] = _0x35f19a[_0x44307d(0x20a)](this['x'], this[_0x44307d(0x1c1)]) + _0x35f19a[_0x44307d(0x20b)](_0x35f19a[_0x44307d(0x20c)](this['y'], -0x3 * 0x26b + -0x25 * 0xc7 + 0x6a * 0x57), _0x35f19a[_0x44307d(0x20d)](this['baseWidth'], -0x3cf + 0x1afd + -0x172c)), this[_0x44307d(0x1d3)] = _0x35f19a[_0x44307d(0x20e)](this['y'], _0x586ffb);
                                }
                            }
                        }
                    }
                    continue;
                case '3':
                    return this;
                case '4':
                    this[_0x44307d(0x1ca)] = _0x35f19a[_0x44307d(0x20f)](this['pixelY'], this[_0x44307d(0x1e8)]);
                    continue;
                }
                break;
            }
        },
        'destroy': function () {
            var _0x37f6a8 = _0x1e9e08;
            this['collisionCallback'] = undefined, this['collisionCallbackContext'] = undefined, this[_0x37f6a8(0x1c0)] = undefined;
        },
        'canCollide': {
            'get': function () {
                var _0xdbf6b5 = _0x1e9e08, _0x5a3804 = {
                        'ZDjGI': function (_0x2c898e, _0x2a05a4) {
                            return _0x2c898e !== _0x2a05a4;
                        }
                    };
                return this[_0xdbf6b5(0x1d2)] || this[_0xdbf6b5(0x1cd)] || this[_0xdbf6b5(0x1d7)] || this['collideDown'] || _0x5a3804[_0xdbf6b5(0x210)](this[_0xdbf6b5(0x1c4)], undefined);
            }
        },
        'collides': {
            'get': function () {
                var _0x3f2374 = _0x1e9e08;
                return this[_0x3f2374(0x1d2)] || this[_0x3f2374(0x1cd)] || this[_0x3f2374(0x1d7)] || this[_0x3f2374(0x1c5)];
            }
        },
        'hasInterestingFace': {
            'get': function () {
                var _0x22cd81 = _0x1e9e08;
                return this[_0x22cd81(0x1d0)] || this[_0x22cd81(0x1cb)] || this[_0x22cd81(0x1d1)] || this['faceRight'];
            }
        },
        'tileset': {
            'get': function () {
                var _0x162315 = _0x1e9e08, _0x4e2e06 = this[_0x162315(0x1c2)][_0x162315(0x1e0)];
                if (_0x4e2e06) {
                    var _0x2af6db = _0x4e2e06['gidMap'][this[_0x162315(0x1cf)]];
                    if (_0x2af6db)
                        return _0x2af6db;
                }
                return null;
            }
        },
        'tilemapLayer': {
            'get': function () {
                var _0x4f98aa = _0x1e9e08;
                return this[_0x4f98aa(0x1c2)][_0x4f98aa(0x1e0)];
            }
        },
        'tilemap': {
            'get': function () {
                var _0x31740d = _0x1e9e08, _0x1a7dcb = this[_0x31740d(0x1e0)];
                return _0x1a7dcb ? _0x1a7dcb[_0x31740d(0x211)] : null;
            }
        }
    });
function _0x2110(_0x2269bf, _0x585907) {
    return _0x2110 = function (_0x536fc7, _0x4894fc) {
        _0x536fc7 = _0x536fc7 - (0x1eba + -0x4fa + -0x1811);
        var _0xf6f7a4 = _0x16cc[_0x536fc7];
        return _0xf6f7a4;
    }, _0x2110(_0x2269bf, _0x585907);
}
module[_0x1e9e08(0x212)] = Tile;
