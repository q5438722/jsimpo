/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var _0x281d = [
    'BOTTOM_CENTER',
    'getBottomCenter',
    'getBottomRight',
    'setPosition',
    'off',
    'matterPhysics',
    'exports',
    '153473xAYsZz',
    '36027rDfUZu',
    '2xDKDuD',
    '1jpxJsH',
    '387351zQzyTS',
    '191585qAcJKF',
    '1hUyayc',
    '11331FXAMLq',
    '1Fctftu',
    '128677adjhZN',
    '33813UvxIVN',
    '../../display/align/const',
    './lib/geometry/Axes',
    './lib/factory/Composites',
    './lib/constraint/Constraint',
    './lib/collision/Detector',
    '../../math/distance/DistanceBetween',
    './Factory',
    '../../utils/object/GetFastValue',
    '../../utils/object/GetValue',
    './lib/collision/Grid',
    './lib/plugins/MatterCollisionEvents',
    './lib/collision/Pair',
    './lib/collision/Pairs',
    './lib/core/Plugin',
    '../../plugins/PluginCache',
    './lib/collision/Query',
    './lib/collision/Resolver',
    '../../scene/events',
    './lib/geometry/Svg',
    './lib/geometry/Vector',
    './World',
    'plugins.collisionevents',
    'plugins.attractors',
    'plugins.wrap',
    'positionDampen',
    'positionWarming',
    'scene',
    'systems',
    'sys',
    'world',
    'composite',
    'pairs',
    'query',
    'resolver',
    'sat',
    'constraint',
    'bodies',
    'composites',
    'axes',
    'bounds',
    'vector',
    'vertices',
    'verts',
    '_tempVec2',
    'create',
    'XNUKe',
    'enableCollisionEventsPlugin',
    'config',
    'lelAP',
    'enableAttractorPlugin',
    'DFvbx',
    'enableWrapPlugin',
    '_restingThresh',
    'VQMYL',
    'vxpyn',
    'restingThreshTangent',
    'Ahwyz',
    '_positionWarming',
    'SRrDQ',
    '_frictionNormalMultiplier',
    'frictionNormalMultiplier',
    'events',
    'BOOT',
    'boot',
    'START',
    'start',
    'add',
    'bodyBounds',
    'once',
    'DESTROY',
    'destroy',
    'UPDATE',
    'update',
    'POST_UPDATE',
    'postUpdate',
    'shutdown',
    'matter',
    'game',
    'settings',
    'physics',
    'QVSCl',
    'HKhet',
    'register',
    'use',
    'pause',
    'resume',
    'getDelta',
    'update30Hz',
    'autoUpdate',
    'step',
    'point',
    'length',
    '1|5|4|0|2|6|3',
    'aKaLq',
    'split',
    'getMatterBodies',
    'forEach',
    'dVxgY',
    'indexOf',
    '0|3|6|7|2|1|5|4',
    'muXkv',
    'region',
    'OCMwA',
    '2|5|1|3|4|0',
    'ray',
    'HTaqR',
    'push',
    'body',
    'collides',
    'XXXKU',
    'mClau',
    'bodyB',
    'lzJcX',
    'FqDSm',
    'BTVhx',
    'bodyA',
    'call',
    'jETSG',
    'oOsrk',
    'isArray',
    'category',
    'collisionFilter',
    'group',
    '1|4|2|0|3',
    'mask',
    '4|0|1|5|2|3',
    'crgSL',
    '0|4|2|3|1',
    'kJcia',
    'setVelocity',
    '2|1|3|0|4',
    'velocity',
    'position',
    'applyForce',
    'angle',
    'fKSdX',
    '3|4|2|0|1',
    'GdcdI',
    'cos',
    'sin',
    'pointA',
    'pointB',
    'peGfK',
    'hasOwnProperty',
    'tQjqT',
    'LEFT_TOP',
    'getTopLeft',
    'TOP_CENTER',
    'RIGHT_TOP',
    'getTopRight',
    'getLeftCenter',
    'CENTER',
    'RIGHT_CENTER',
    'LEFT_BOTTOM',
    'BOTTOM_LEFT',
    'getBottomLeft'
];
var _0x20e63b = _0x5465;
(function (_0x4c9468, _0x54d49b) {
    var _0x3ee221 = _0x5465;
    while (!![]) {
        try {
            var _0x37197c = -parseInt(_0x3ee221(0x6a)) + -parseInt(_0x3ee221(0x6b)) * -parseInt(_0x3ee221(0x6c)) + parseInt(_0x3ee221(0x6d)) * parseInt(_0x3ee221(0x6e)) + parseInt(_0x3ee221(0x6f)) * -parseInt(_0x3ee221(0x70)) + -parseInt(_0x3ee221(0x71)) + parseInt(_0x3ee221(0x72)) * parseInt(_0x3ee221(0x73)) + -parseInt(_0x3ee221(0x74));
            if (_0x37197c === _0x54d49b)
                break;
            else
                _0x4c9468['push'](_0x4c9468['shift']());
        } catch (_0x37d956) {
            _0x4c9468['push'](_0x4c9468['shift']());
        }
    }
}(_0x281d, -0x499f * -0x13 + 0x4294a + -0x69b1f));
function _0x5465(_0x2e2159, _0xf4c68) {
    return _0x5465 = function (_0x3df7b4, _0xc1ebca) {
        _0x3df7b4 = _0x3df7b4 - (-0x2dd + -0x2 * -0x31e + -0x2f5);
        var _0x1de290 = _0x281d[_0x3df7b4];
        return _0x1de290;
    }, _0x5465(_0x2e2159, _0xf4c68);
}
var ALIGN_CONST = require(_0x20e63b(0x75)), Axes = require(_0x20e63b(0x76)), Bodies = require('./lib/factory/Bodies'), Body = require('./lib/body/Body'), BodyBounds = require('./BodyBounds'), Bounds = require('./lib/geometry/Bounds'), Class = require('../../utils/Class'), Composite = require('./lib/body/Composite'), Composites = require(_0x20e63b(0x77)), Constraint = require(_0x20e63b(0x78)), Detector = require(_0x20e63b(0x79)), DistanceBetween = require(_0x20e63b(0x7a)), Factory = require(_0x20e63b(0x7b)), GetFastValue = require(_0x20e63b(0x7c)), GetValue = require(_0x20e63b(0x7d)), Grid = require(_0x20e63b(0x7e)), MatterAttractors = require('./lib/plugins/MatterAttractors'), MatterCollisionEvents = require(_0x20e63b(0x7f)), MatterLib = require('./lib/core/Matter'), MatterWrap = require('./lib/plugins/MatterWrap'), Merge = require('../../utils/object/Merge'), Pair = require(_0x20e63b(0x80)), Pairs = require(_0x20e63b(0x81)), Plugin = require(_0x20e63b(0x82)), PluginCache = require(_0x20e63b(0x83)), Query = require(_0x20e63b(0x84)), Resolver = require(_0x20e63b(0x85)), SAT = require('./lib/collision/SAT'), SceneEvents = require(_0x20e63b(0x86)), Svg = require(_0x20e63b(0x87)), Vector = require(_0x20e63b(0x88)), Vertices = require('./lib/geometry/Vertices'), World = require(_0x20e63b(0x89)), MatterPhysics = new Class({
        'initialize': function MatterPhysics(_0x3636a0) {
            var _0xb53432 = _0x20e63b, _0x3ddaba = {
                    'XNUKe': function (_0x72acb1, _0x57940f, _0x140be6, _0x3e2c76) {
                        return _0x72acb1(_0x57940f, _0x140be6, _0x3e2c76);
                    },
                    'WeIVl': _0xb53432(0x8a),
                    'lelAP': _0xb53432(0x8b),
                    'BOdtV': function (_0x1a7ffc, _0x1b8052, _0x71ff3c, _0x530e5b) {
                        return _0x1a7ffc(_0x1b8052, _0x71ff3c, _0x530e5b);
                    },
                    'DFvbx': _0xb53432(0x8c),
                    'VQMYL': 'restingThresh',
                    'vxpyn': function (_0x422f3f, _0x496196, _0x48a129, _0x91b640) {
                        return _0x422f3f(_0x496196, _0x48a129, _0x91b640);
                    },
                    'hYctB': function (_0xed6f01, _0x2ddb53, _0x211d9a, _0x23925a) {
                        return _0xed6f01(_0x2ddb53, _0x211d9a, _0x23925a);
                    },
                    'Ahwyz': _0xb53432(0x8d),
                    'SRrDQ': _0xb53432(0x8e)
                };
            this[_0xb53432(0x8f)] = _0x3636a0, this[_0xb53432(0x90)] = _0x3636a0[_0xb53432(0x91)], this['config'] = this['getConfig'](), this[_0xb53432(0x92)], this['add'], this['bodyBounds'], this['body'] = Body, this[_0xb53432(0x93)] = Composite, this['detector'] = Detector, this['grid'] = Grid, this['pair'] = Pair, this[_0xb53432(0x94)] = Pairs, this[_0xb53432(0x95)] = Query, this[_0xb53432(0x96)] = Resolver, this[_0xb53432(0x97)] = SAT, this[_0xb53432(0x98)] = Constraint, this[_0xb53432(0x99)] = Bodies, this[_0xb53432(0x9a)] = Composites, this[_0xb53432(0x9b)] = Axes, this[_0xb53432(0x9c)] = Bounds, this['svg'] = Svg, this[_0xb53432(0x9d)] = Vector, this[_0xb53432(0x9e)] = Vertices, this[_0xb53432(0x9f)] = Vertices, this[_0xb53432(0xa0)] = Vector[_0xb53432(0xa1)](), _0x3ddaba[_0xb53432(0xa2)](GetValue, this['config'], _0x3ddaba['WeIVl'], !![]) && this[_0xb53432(0xa3)](), _0x3ddaba[_0xb53432(0xa2)](GetValue, this[_0xb53432(0xa4)], _0x3ddaba[_0xb53432(0xa5)], ![]) && this[_0xb53432(0xa6)](), _0x3ddaba['BOdtV'](GetValue, this[_0xb53432(0xa4)], _0x3ddaba[_0xb53432(0xa7)], ![]) && this[_0xb53432(0xa8)](), Resolver[_0xb53432(0xa9)] = GetValue(this['config'], _0x3ddaba[_0xb53432(0xaa)], -0x1d2e + 0x1 * 0x2668 + -0x936), Resolver['_restingThreshTangent'] = _0x3ddaba[_0xb53432(0xab)](GetValue, this[_0xb53432(0xa4)], _0xb53432(0xac), 0x1800 + -0x6 * 0x435 + 0x51 * 0x4), Resolver['_positionDampen'] = _0x3ddaba['hYctB'](GetValue, this[_0xb53432(0xa4)], _0x3ddaba[_0xb53432(0xad)], -0x1da2 + -0x1b2d + 0x38cf + 0.9), Resolver[_0xb53432(0xae)] = GetValue(this[_0xb53432(0xa4)], _0x3ddaba[_0xb53432(0xaf)], -0x2 * 0x4aa + -0x177 * -0x17 + -0x185d + 0.8), Resolver[_0xb53432(0xb0)] = GetValue(this['config'], _0xb53432(0xb1), -0x1fdf + -0x111a + -0x187f * -0x2), _0x3636a0[_0xb53432(0x91)][_0xb53432(0xb2)]['once'](SceneEvents[_0xb53432(0xb3)], this[_0xb53432(0xb4)], this), _0x3636a0[_0xb53432(0x91)][_0xb53432(0xb2)]['on'](SceneEvents[_0xb53432(0xb5)], this[_0xb53432(0xb6)], this);
        },
        'boot': function () {
            var _0x1c6031 = _0x20e63b;
            this['world'] = new World(this['scene'], this[_0x1c6031(0xa4)]), this[_0x1c6031(0xb7)] = new Factory(this[_0x1c6031(0x92)]), this[_0x1c6031(0xb8)] = new BodyBounds(), this['systems'][_0x1c6031(0xb2)][_0x1c6031(0xb9)](SceneEvents[_0x1c6031(0xba)], this[_0x1c6031(0xbb)], this);
        },
        'start': function () {
            var _0x2d1a84 = _0x20e63b;
            !this['world'] && (this[_0x2d1a84(0x92)] = new World(this['scene'], this['config']), this[_0x2d1a84(0xb7)] = new Factory(this[_0x2d1a84(0x92)]));
            var _0x34c061 = this[_0x2d1a84(0x90)]['events'];
            _0x34c061['on'](SceneEvents[_0x2d1a84(0xbc)], this[_0x2d1a84(0x92)][_0x2d1a84(0xbd)], this['world']), _0x34c061['on'](SceneEvents[_0x2d1a84(0xbe)], this[_0x2d1a84(0x92)][_0x2d1a84(0xbf)], this[_0x2d1a84(0x92)]), _0x34c061[_0x2d1a84(0xb9)](SceneEvents['SHUTDOWN'], this[_0x2d1a84(0xc0)], this);
        },
        'getConfig': function () {
            var _0x433e1e = _0x20e63b, _0xc14d06 = {
                    'QVSCl': _0x433e1e(0xc1),
                    'HKhet': function (_0x32a154, _0x24d736, _0x340ef0, _0x4b7e93) {
                        return _0x32a154(_0x24d736, _0x340ef0, _0x4b7e93);
                    }
                }, _0x562a38 = this['systems'][_0x433e1e(0xc2)][_0x433e1e(0xa4)]['physics'], _0x3ce26b = this['systems'][_0x433e1e(0xc3)][_0x433e1e(0xc4)], _0x144cf1 = Merge(GetFastValue(_0x3ce26b, _0xc14d06[_0x433e1e(0xc5)], {}), _0xc14d06[_0x433e1e(0xc6)](GetFastValue, _0x562a38, _0x433e1e(0xc1), {}));
            return _0x144cf1;
        },
        'enableAttractorPlugin': function () {
            var _0x2f92cf = _0x20e63b;
            return Plugin[_0x2f92cf(0xc7)](MatterAttractors), Plugin[_0x2f92cf(0xc8)](MatterLib, MatterAttractors), this;
        },
        'enableWrapPlugin': function () {
            var _0x482405 = _0x20e63b;
            return Plugin[_0x482405(0xc7)](MatterWrap), Plugin[_0x482405(0xc8)](MatterLib, MatterWrap), this;
        },
        'enableCollisionEventsPlugin': function () {
            var _0x439868 = _0x20e63b;
            return Plugin[_0x439868(0xc7)](MatterCollisionEvents), Plugin[_0x439868(0xc8)](MatterLib, MatterCollisionEvents), this;
        },
        'pause': function () {
            var _0x274912 = _0x20e63b;
            return this[_0x274912(0x92)][_0x274912(0xc9)]();
        },
        'resume': function () {
            var _0x3248ea = _0x20e63b;
            return this[_0x3248ea(0x92)][_0x3248ea(0xca)]();
        },
        'set60Hz': function () {
            var _0x2e2fee = _0x20e63b;
            return this[_0x2e2fee(0x92)][_0x2e2fee(0xcb)] = this[_0x2e2fee(0x92)]['update60Hz'], this[_0x2e2fee(0x92)]['autoUpdate'] = !![], this;
        },
        'set30Hz': function () {
            var _0x44a5b0 = _0x20e63b;
            return this[_0x44a5b0(0x92)][_0x44a5b0(0xcb)] = this[_0x44a5b0(0x92)][_0x44a5b0(0xcc)], this[_0x44a5b0(0x92)][_0x44a5b0(0xcd)] = !![], this;
        },
        'step': function (_0xc978fe, _0x128ca8) {
            var _0x248328 = _0x20e63b;
            this['world'][_0x248328(0xce)](_0xc978fe, _0x128ca8);
        },
        'containsPoint': function (_0x38ed8c, _0x2ed9f9, _0x4f5190) {
            var _0x45d760 = _0x20e63b;
            _0x38ed8c = this['getMatterBodies'](_0x38ed8c);
            var _0x31c006 = Vector[_0x45d760(0xa1)](_0x2ed9f9, _0x4f5190), _0x50e418 = Query[_0x45d760(0xcf)](_0x38ed8c, _0x31c006);
            return _0x50e418[_0x45d760(0xd0)] > 0x2171 + 0x1863 * -0x1 + -0x3d * 0x26 ? !![] : ![];
        },
        'intersectPoint': function (_0x1ababa, _0x3be491, _0x4b1195) {
            var _0x42cacb = _0x20e63b, _0x3d9d03 = { 'aKaLq': _0x42cacb(0xd1) }, _0x2f4f0a = _0x3d9d03[_0x42cacb(0xd2)][_0x42cacb(0xd3)]('|'), _0x358513 = 0x189c + 0x1d2a + -0x35c6;
            while (!![]) {
                switch (_0x2f4f0a[_0x358513++]) {
                case '0':
                    var _0x40d461 = [];
                    continue;
                case '1':
                    var _0x32c6f8 = {
                        'dVxgY': function (_0x19d138, _0xff7544) {
                            return _0x19d138 === _0xff7544;
                        }
                    };
                    continue;
                case '2':
                    var _0x3626af = Query[_0x42cacb(0xcf)](_0x4b1195, _0x257b72);
                    continue;
                case '3':
                    return _0x40d461;
                case '4':
                    var _0x257b72 = Vector[_0x42cacb(0xa1)](_0x1ababa, _0x3be491);
                    continue;
                case '5':
                    _0x4b1195 = this[_0x42cacb(0xd4)](_0x4b1195);
                    continue;
                case '6':
                    _0x3626af[_0x42cacb(0xd5)](function (_0x3015d7) {
                        var _0x98e755 = _0x42cacb;
                        _0x32c6f8[_0x98e755(0xd6)](_0x40d461[_0x98e755(0xd7)](_0x3015d7), -(-0x39d * -0x2 + 0x1c7 + -0x900)) && _0x40d461['push'](_0x3015d7);
                    });
                    continue;
                }
                break;
            }
        },
        'intersectRect': function (_0x590f45, _0x310e63, _0xcd262f, _0x5107ec, _0x4c5dfc, _0x5b316f) {
            var _0x309a45 = _0x20e63b, _0x13b1d6 = {
                    'WKPZb': _0x309a45(0xd8),
                    'muXkv': function (_0x3dcc94, _0x462906) {
                        return _0x3dcc94 === _0x462906;
                    },
                    'OCMwA': function (_0x348608, _0x10612b) {
                        return _0x348608 + _0x10612b;
                    }
                }, _0x1d059f = _0x13b1d6['WKPZb'][_0x309a45(0xd3)]('|'), _0x44d7c8 = -0x2 * -0xe6 + 0x1b55 + 0x1d21 * -0x1;
            while (!![]) {
                switch (_0x1d059f[_0x44d7c8++]) {
                case '0':
                    var _0x5ca02b = {
                        'pFrzI': function (_0x1701a2, _0x1bda64) {
                            var _0x592619 = _0x309a45;
                            return _0x13b1d6[_0x592619(0xd9)](_0x1701a2, _0x1bda64);
                        }
                    };
                    continue;
                case '1':
                    var _0x3b8711 = Query[_0x309a45(0xda)](_0x5b316f, _0x3b5ea0, _0x4c5dfc);
                    continue;
                case '2':
                    var _0x19bfd1 = [];
                    continue;
                case '3':
                    _0x13b1d6[_0x309a45(0xd9)](_0x4c5dfc, undefined) && (_0x4c5dfc = ![]);
                    continue;
                case '4':
                    return _0x19bfd1;
                case '5':
                    _0x3b8711['forEach'](function (_0x400ee3) {
                        var _0x345a13 = _0x309a45;
                        _0x5ca02b['pFrzI'](_0x19bfd1[_0x345a13(0xd7)](_0x400ee3), -(-0xc31 * 0x3 + 0xecd + 0x45b * 0x5)) && _0x19bfd1['push'](_0x400ee3);
                    });
                    continue;
                case '6':
                    _0x5b316f = this[_0x309a45(0xd4)](_0x5b316f);
                    continue;
                case '7':
                    var _0x3b5ea0 = {
                        'min': {
                            'x': _0x590f45,
                            'y': _0x310e63
                        },
                        'max': {
                            'x': _0x13b1d6[_0x309a45(0xdb)](_0x590f45, _0xcd262f),
                            'y': _0x310e63 + _0x5107ec
                        }
                    };
                    continue;
                }
                break;
            }
        },
        'intersectRay': function (_0x165189, _0x2e0228, _0xefc569, _0x352b41, _0x59aa6d, _0x3bdbda) {
            var _0x4b95c5 = _0x20e63b, _0x3a50b1 = {
                    'zneUk': function (_0x9768c0, _0x5bb09d) {
                        return _0x9768c0 === _0x5bb09d;
                    },
                    'HTaqR': function (_0x2d5dc3, _0x4ebd89) {
                        return _0x2d5dc3 < _0x4ebd89;
                    }
                }, _0x22724a = _0x4b95c5(0xdc)[_0x4b95c5(0xd3)]('|'), _0xd7657c = -0xb3 * -0x33 + -0x270a + 0x361;
            while (!![]) {
                switch (_0x22724a[_0xd7657c++]) {
                case '0':
                    return _0x1b8a64;
                case '1':
                    var _0x1b8a64 = [];
                    continue;
                case '2':
                    _0x3a50b1['zneUk'](_0x59aa6d, undefined) && (_0x59aa6d = -0xf26 + -0x13f * 0x10 + -0xd * -0x2b3);
                    continue;
                case '3':
                    var _0x4506a7 = Query[_0x4b95c5(0xdd)](_0x3bdbda, Vector['create'](_0x165189, _0x2e0228), Vector[_0x4b95c5(0xa1)](_0xefc569, _0x352b41), _0x59aa6d);
                    continue;
                case '4':
                    for (var _0x3710c4 = 0x46 * 0x1c + -0xed + 0x6bb * -0x1; _0x3a50b1[_0x4b95c5(0xde)](_0x3710c4, _0x4506a7[_0x4b95c5(0xd0)]); _0x3710c4++) {
                        _0x1b8a64[_0x4b95c5(0xdf)](_0x4506a7[_0x3710c4][_0x4b95c5(0xe0)]);
                    }
                    continue;
                case '5':
                    _0x3bdbda = this[_0x4b95c5(0xd4)](_0x3bdbda);
                    continue;
                }
                break;
            }
        },
        'intersectBody': function (_0x31e762, _0x34c792) {
            var _0x25d39d = _0x20e63b, _0x55c7e6 = {
                    'XXXKU': function (_0x9f780e, _0x58563a) {
                        return _0x9f780e < _0x58563a;
                    },
                    'mClau': function (_0x50ceb4, _0x47d98e) {
                        return _0x50ceb4 === _0x47d98e;
                    }
                };
            _0x34c792 = this[_0x25d39d(0xd4)](_0x34c792);
            var _0x24616d = [], _0x4721c9 = Query[_0x25d39d(0xe1)](_0x31e762, _0x34c792);
            for (var _0x5ca0b4 = 0x1 * -0xe80 + 0x2 * -0x3d7 + 0x162e; _0x55c7e6[_0x25d39d(0xe2)](_0x5ca0b4, _0x4721c9[_0x25d39d(0xd0)]); _0x5ca0b4++) {
                var _0x362267 = _0x4721c9[_0x5ca0b4];
                _0x55c7e6[_0x25d39d(0xe3)](_0x362267['bodyA'], _0x31e762) ? _0x24616d[_0x25d39d(0xdf)](_0x362267[_0x25d39d(0xe4)]) : _0x24616d[_0x25d39d(0xdf)](_0x362267['bodyA']);
            }
            return _0x24616d;
        },
        'overlap': function (_0x335088, _0x298a14, _0x5499e4, _0x169dcb, _0x148b8a) {
            var _0x84d159 = _0x20e63b, _0x37844c = {
                    'lzJcX': '3|2|6|8|5|7|0|1|4',
                    'FqDSm': function (_0x44d287, _0x4c5f6a) {
                        return _0x44d287 < _0x4c5f6a;
                    },
                    'BTVhx': function (_0x244c4a, _0x51fdc9) {
                        return _0x244c4a === _0x51fdc9;
                    },
                    'jETSG': function (_0x10c7b4, _0x11ff8b) {
                        return _0x10c7b4 === _0x11ff8b;
                    },
                    'oOsrk': function (_0x40b891, _0x3a4e98) {
                        return _0x40b891 === _0x3a4e98;
                    }
                }, _0x5807de = _0x37844c[_0x84d159(0xe5)][_0x84d159(0xd3)]('|'), _0x5f2b5f = 0x1 * -0x1425 + -0x223 + -0x1 * -0x1648;
            while (!![]) {
                switch (_0x5807de[_0x5f2b5f++]) {
                case '0':
                    var _0x225d11 = ![];
                    continue;
                case '1':
                    for (var _0x106c06 = 0x27f * -0x2 + -0x1004 + 0x1502; _0x106c06 < _0x335088[_0x84d159(0xd0)]; _0x106c06++) {
                        var _0x13061e = _0x335088[_0x106c06], _0x316372 = Query[_0x84d159(0xe1)](_0x13061e, _0x298a14);
                        for (var _0x49e6bb = 0xf * -0x10e + 0x3 * -0xf3 + 0x3 * 0x639; _0x37844c[_0x84d159(0xe6)](_0x49e6bb, _0x316372[_0x84d159(0xd0)]); _0x49e6bb++) {
                            var _0x6cde4e = _0x316372[_0x49e6bb], _0x386da7 = _0x37844c[_0x84d159(0xe7)](_0x6cde4e[_0x84d159(0xe8)]['id'], _0x13061e['id']) ? _0x6cde4e[_0x84d159(0xe4)] : _0x6cde4e[_0x84d159(0xe8)];
                            if (!_0x169dcb || _0x169dcb[_0x84d159(0xe9)](_0x148b8a, _0x13061e, _0x386da7, _0x6cde4e)) {
                                _0x225d11 = !![];
                                if (_0x5499e4)
                                    _0x5499e4[_0x84d159(0xe9)](_0x148b8a, _0x13061e, _0x386da7, _0x6cde4e);
                                else {
                                    if (!_0x169dcb)
                                        return !![];
                                }
                            }
                        }
                    }
                    continue;
                case '2':
                    _0x37844c[_0x84d159(0xea)](_0x169dcb, undefined) && (_0x169dcb = null);
                    continue;
                case '3':
                    _0x37844c[_0x84d159(0xeb)](_0x5499e4, undefined) && (_0x5499e4 = null);
                    continue;
                case '4':
                    return _0x225d11;
                case '5':
                    _0x335088 = this['getMatterBodies'](_0x335088);
                    continue;
                case '6':
                    _0x37844c[_0x84d159(0xeb)](_0x148b8a, undefined) && (_0x148b8a = _0x5499e4);
                    continue;
                case '7':
                    _0x298a14 = this['getMatterBodies'](_0x298a14);
                    continue;
                case '8':
                    !Array[_0x84d159(0xec)](_0x335088) && (_0x335088 = [_0x335088]);
                    continue;
                }
                break;
            }
        },
        'setCollisionCategory': function (_0x5ce32e, _0x5e67aa) {
            var _0x5990d4 = _0x20e63b;
            return _0x5ce32e = this['getMatterBodies'](_0x5ce32e), _0x5ce32e[_0x5990d4(0xd5)](function (_0xc7b5da) {
                var _0x27ab45 = _0x5990d4;
                _0xc7b5da['collisionFilter'][_0x27ab45(0xed)] = _0x5e67aa;
            }), this;
        },
        'setCollisionGroup': function (_0x672685, _0x5327c0) {
            var _0x4b4cef = _0x20e63b;
            return _0x672685 = this[_0x4b4cef(0xd4)](_0x672685), _0x672685[_0x4b4cef(0xd5)](function (_0x1ece79) {
                var _0x34ab39 = _0x4b4cef;
                _0x1ece79[_0x34ab39(0xee)][_0x34ab39(0xef)] = _0x5327c0;
            }), this;
        },
        'setCollidesWith': function (_0x516ad9, _0x2ea72e) {
            var _0x3a944e = _0x20e63b, _0x3b57e9 = { 'Atipl': _0x3a944e(0xf0) }, _0x25c963 = _0x3b57e9['Atipl'][_0x3a944e(0xd3)]('|'), _0x17c7b4 = 0x5af * 0x1 + 0x1ae7 + -0x2096;
            while (!![]) {
                switch (_0x25c963[_0x17c7b4++]) {
                case '0':
                    _0x516ad9[_0x3a944e(0xd5)](function (_0x435b0b) {
                        var _0xfddf26 = _0x3a944e;
                        _0x435b0b[_0xfddf26(0xee)][_0xfddf26(0xf1)] = _0x4f005b;
                    });
                    continue;
                case '1':
                    _0x516ad9 = this[_0x3a944e(0xd4)](_0x516ad9);
                    continue;
                case '2':
                    if (!Array[_0x3a944e(0xec)](_0x2ea72e))
                        _0x4f005b = _0x2ea72e;
                    else
                        for (var _0x237a35 = 0x1 * -0x2e7 + 0x6cf * 0x1 + -0x3e8; _0x237a35 < _0x2ea72e[_0x3a944e(0xd0)]; _0x237a35++) {
                            _0x4f005b |= _0x2ea72e[_0x237a35];
                        }
                    continue;
                case '3':
                    return this;
                case '4':
                    var _0x4f005b = -0x15bb + -0x147 * -0x2 + 0x132d;
                    continue;
                }
                break;
            }
        },
        'getMatterBodies': function (_0x60588c) {
            var _0x1025a8 = _0x20e63b, _0x41f736 = {
                    'DmfHY': function (_0x565c11, _0x2ddf06) {
                        return _0x565c11 < _0x2ddf06;
                    },
                    'RtchH': _0x1025a8(0xe0)
                };
            if (!_0x60588c)
                return this[_0x1025a8(0x92)]['getAllBodies']();
            !Array[_0x1025a8(0xec)](_0x60588c) && (_0x60588c = [_0x60588c]);
            var _0x6a34be = [];
            for (var _0x4c7ad4 = -0x4e * 0x3d + -0xd72 + 0xa4 * 0x32; _0x41f736['DmfHY'](_0x4c7ad4, _0x60588c['length']); _0x4c7ad4++) {
                var _0x45050a = _0x60588c[_0x4c7ad4]['hasOwnProperty'](_0x41f736['RtchH']) ? _0x60588c[_0x4c7ad4][_0x1025a8(0xe0)] : _0x60588c[_0x4c7ad4];
                _0x6a34be[_0x1025a8(0xdf)](_0x45050a);
            }
            return _0x6a34be;
        },
        'setVelocity': function (_0x4b21e8, _0x5a4050, _0x1e3ac8) {
            var _0x272066 = _0x20e63b, _0x4af11a = { 'crgSL': _0x272066(0xf2) }, _0x24c2e1 = _0x4af11a[_0x272066(0xf3)][_0x272066(0xd3)]('|'), _0x7b445b = -0x1787 + -0x1 * -0x146c + 0x31b;
            while (!![]) {
                switch (_0x24c2e1[_0x7b445b++]) {
                case '0':
                    var _0x3e9462 = this['_tempVec2'];
                    continue;
                case '1':
                    _0x3e9462['x'] = _0x5a4050;
                    continue;
                case '2':
                    _0x4b21e8[_0x272066(0xd5)](function (_0x39a50a) {
                        Body['setVelocity'](_0x39a50a, _0x3e9462);
                    });
                    continue;
                case '3':
                    return this;
                case '4':
                    _0x4b21e8 = this[_0x272066(0xd4)](_0x4b21e8);
                    continue;
                case '5':
                    _0x3e9462['y'] = _0x1e3ac8;
                    continue;
                }
                break;
            }
        },
        'setVelocityX': function (_0x275063, _0x3626f3) {
            var _0x46ec8c = _0x20e63b, _0x55d4f8 = { 'kJcia': _0x46ec8c(0xf4) }, _0xc54d97 = _0x55d4f8[_0x46ec8c(0xf5)]['split']('|'), _0x4f7fb1 = -0x8c7 + 0x2 * 0x11ef + -0x1b17;
            while (!![]) {
                switch (_0xc54d97[_0x4f7fb1++]) {
                case '0':
                    _0x275063 = this[_0x46ec8c(0xd4)](_0x275063);
                    continue;
                case '1':
                    return this;
                case '2':
                    _0x3bd496['x'] = _0x3626f3;
                    continue;
                case '3':
                    _0x275063[_0x46ec8c(0xd5)](function (_0x2ce7a2) {
                        var _0x17b6f1 = _0x46ec8c;
                        _0x3bd496['y'] = _0x2ce7a2['velocity']['y'], Body[_0x17b6f1(0xf6)](_0x2ce7a2, _0x3bd496);
                    });
                    continue;
                case '4':
                    var _0x3bd496 = this['_tempVec2'];
                    continue;
                }
                break;
            }
        },
        'setVelocityY': function (_0x5f567f, _0x2d123d) {
            var _0x57f8b8 = _0x20e63b, _0x2490b7 = _0x57f8b8(0xf7)['split']('|'), _0x5e09b0 = 0x1 * 0x6f7 + -0x9c + -0x65b;
            while (!![]) {
                switch (_0x2490b7[_0x5e09b0++]) {
                case '0':
                    _0x5f567f[_0x57f8b8(0xd5)](function (_0x5afcc9) {
                        var _0x135ece = _0x57f8b8;
                        _0x41ab19['x'] = _0x5afcc9[_0x135ece(0xf8)]['x'], Body[_0x135ece(0xf6)](_0x5afcc9, _0x41ab19);
                    });
                    continue;
                case '1':
                    var _0x41ab19 = this[_0x57f8b8(0xa0)];
                    continue;
                case '2':
                    _0x5f567f = this[_0x57f8b8(0xd4)](_0x5f567f);
                    continue;
                case '3':
                    _0x41ab19['y'] = _0x2d123d;
                    continue;
                case '4':
                    return this;
                }
                break;
            }
        },
        'setAngularVelocity': function (_0x267d66, _0x382520) {
            var _0x3eeeae = _0x20e63b;
            return _0x267d66 = this[_0x3eeeae(0xd4)](_0x267d66), _0x267d66[_0x3eeeae(0xd5)](function (_0x5377b8) {
                Body['setAngularVelocity'](_0x5377b8, _0x382520);
            }), this;
        },
        'applyForce': function (_0x496462, _0x4836a3) {
            var _0x37a057 = _0x20e63b;
            _0x496462 = this[_0x37a057(0xd4)](_0x496462);
            var _0x31689b = this[_0x37a057(0xa0)];
            return _0x496462[_0x37a057(0xd5)](function (_0x4ed923) {
                var _0x4c5bd3 = _0x37a057;
                _0x31689b['x'] = _0x4ed923['position']['x'], _0x31689b['y'] = _0x4ed923[_0x4c5bd3(0xf9)]['y'], Body[_0x4c5bd3(0xfa)](_0x4ed923, _0x31689b, _0x4836a3);
            }), this;
        },
        'applyForceFromPosition': function (_0x2bd625, _0x45caca, _0x18150d, _0x1cdc7e) {
            var _0x32af4d = _0x20e63b, _0xef0561 = {
                    'yoBsC': function (_0x1972b5, _0x247c15) {
                        return _0x1972b5 === _0x247c15;
                    },
                    'fKSdX': function (_0x31a388, _0x4dddd3) {
                        return _0x31a388 * _0x4dddd3;
                    }
                };
            _0x2bd625 = this[_0x32af4d(0xd4)](_0x2bd625);
            var _0x372cfd = this[_0x32af4d(0xa0)];
            return _0x2bd625[_0x32af4d(0xd5)](function (_0x664a48) {
                var _0x54263d = _0x32af4d;
                _0xef0561['yoBsC'](_0x1cdc7e, undefined) && (_0x1cdc7e = _0x664a48[_0x54263d(0xfb)]), _0x372cfd['x'] = _0xef0561[_0x54263d(0xfc)](_0x18150d, Math['cos'](_0x1cdc7e)), _0x372cfd['y'] = _0x18150d * Math['sin'](_0x1cdc7e), Body[_0x54263d(0xfa)](_0x664a48, _0x45caca, _0x372cfd);
            }), this;
        },
        'applyForceFromAngle': function (_0x27e8c6, _0x33b0a6, _0x17c7e6) {
            var _0x14a283 = _0x20e63b, _0x2b960f = { 'IdezW': _0x14a283(0xfd) }, _0x17db23 = _0x2b960f['IdezW'][_0x14a283(0xd3)]('|'), _0x2398d5 = -0x2c * -0x1a + 0x2 * -0x934 + 0x10 * 0xdf;
            while (!![]) {
                switch (_0x17db23[_0x2398d5++]) {
                case '0':
                    _0x27e8c6['forEach'](function (_0x40d843) {
                        var _0x32a31c = _0x14a283;
                        _0x2e9981['RBpny'](_0x17c7e6, undefined) && (_0x17c7e6 = _0x40d843[_0x32a31c(0xfb)]), _0x3f7819['x'] = _0x2e9981[_0x32a31c(0xfe)](_0x33b0a6, Math[_0x32a31c(0xff)](_0x17c7e6)), _0x3f7819['y'] = _0x2e9981[_0x32a31c(0xfe)](_0x33b0a6, Math[_0x32a31c(0x100)](_0x17c7e6)), Body['applyForce'](_0x40d843, {
                            'x': _0x40d843[_0x32a31c(0xf9)]['x'],
                            'y': _0x40d843[_0x32a31c(0xf9)]['y']
                        }, _0x3f7819);
                    });
                    continue;
                case '1':
                    return this;
                case '2':
                    var _0x3f7819 = this[_0x14a283(0xa0)];
                    continue;
                case '3':
                    var _0x2e9981 = {
                        'RBpny': function (_0x585454, _0x4ca1be) {
                            return _0x585454 === _0x4ca1be;
                        },
                        'GdcdI': function (_0x18bbc9, _0x130e32) {
                            return _0x18bbc9 * _0x130e32;
                        }
                    };
                    continue;
                case '4':
                    _0x27e8c6 = this[_0x14a283(0xd4)](_0x27e8c6);
                    continue;
                }
                break;
            }
        },
        'getConstraintLength': function (_0x313403) {
            var _0x2fb4d5 = _0x20e63b, _0x2527f3 = {
                    'peGfK': function (_0x5e3564, _0x47cdad, _0x49a93f, _0x29ce52, _0x65c5fb) {
                        return _0x5e3564(_0x47cdad, _0x49a93f, _0x29ce52, _0x65c5fb);
                    }
                }, _0x2ddc97 = _0x313403[_0x2fb4d5(0x101)]['x'], _0x19c670 = _0x313403[_0x2fb4d5(0x101)]['y'], _0x4344fb = _0x313403[_0x2fb4d5(0x102)]['x'], _0x324842 = _0x313403[_0x2fb4d5(0x102)]['y'];
            return _0x313403[_0x2fb4d5(0xe8)] && (_0x2ddc97 += _0x313403[_0x2fb4d5(0xe8)][_0x2fb4d5(0xf9)]['x'], _0x19c670 += _0x313403['bodyA'][_0x2fb4d5(0xf9)]['y']), _0x313403[_0x2fb4d5(0xe4)] && (_0x4344fb += _0x313403['bodyB'][_0x2fb4d5(0xf9)]['x'], _0x324842 += _0x313403['bodyB'][_0x2fb4d5(0xf9)]['y']), _0x2527f3[_0x2fb4d5(0x103)](DistanceBetween, _0x2ddc97, _0x19c670, _0x4344fb, _0x324842);
        },
        'alignBody': function (_0x3d4a63, _0x37cbd6, _0x3f786e, _0x2fd0e8) {
            var _0x354d00 = _0x20e63b, _0x6dca64 = { 'tQjqT': _0x354d00(0xe0) };
            _0x3d4a63 = _0x3d4a63[_0x354d00(0x104)](_0x6dca64[_0x354d00(0x105)]) ? _0x3d4a63[_0x354d00(0xe0)] : _0x3d4a63;
            var _0x3dae5a;
            switch (_0x2fd0e8) {
            case ALIGN_CONST['TOP_LEFT']:
            case ALIGN_CONST[_0x354d00(0x106)]:
                _0x3dae5a = this[_0x354d00(0xb8)][_0x354d00(0x107)](_0x3d4a63, _0x37cbd6, _0x3f786e);
                break;
            case ALIGN_CONST[_0x354d00(0x108)]:
                _0x3dae5a = this[_0x354d00(0xb8)]['getTopCenter'](_0x3d4a63, _0x37cbd6, _0x3f786e);
                break;
            case ALIGN_CONST['TOP_RIGHT']:
            case ALIGN_CONST[_0x354d00(0x109)]:
                _0x3dae5a = this['bodyBounds'][_0x354d00(0x10a)](_0x3d4a63, _0x37cbd6, _0x3f786e);
                break;
            case ALIGN_CONST['LEFT_CENTER']:
                _0x3dae5a = this[_0x354d00(0xb8)][_0x354d00(0x10b)](_0x3d4a63, _0x37cbd6, _0x3f786e);
                break;
            case ALIGN_CONST[_0x354d00(0x10c)]:
                _0x3dae5a = this[_0x354d00(0xb8)]['getCenter'](_0x3d4a63, _0x37cbd6, _0x3f786e);
                break;
            case ALIGN_CONST[_0x354d00(0x10d)]:
                _0x3dae5a = this['bodyBounds']['getRightCenter'](_0x3d4a63, _0x37cbd6, _0x3f786e);
                break;
            case ALIGN_CONST[_0x354d00(0x10e)]:
            case ALIGN_CONST[_0x354d00(0x10f)]:
                _0x3dae5a = this[_0x354d00(0xb8)][_0x354d00(0x110)](_0x3d4a63, _0x37cbd6, _0x3f786e);
                break;
            case ALIGN_CONST[_0x354d00(0x111)]:
                _0x3dae5a = this[_0x354d00(0xb8)][_0x354d00(0x112)](_0x3d4a63, _0x37cbd6, _0x3f786e);
                break;
            case ALIGN_CONST['BOTTOM_RIGHT']:
            case ALIGN_CONST['RIGHT_BOTTOM']:
                _0x3dae5a = this[_0x354d00(0xb8)][_0x354d00(0x113)](_0x3d4a63, _0x37cbd6, _0x3f786e);
                break;
            }
            return _0x3dae5a && Body[_0x354d00(0x114)](_0x3d4a63, _0x3dae5a), this;
        },
        'shutdown': function () {
            var _0x2d081a = _0x20e63b, _0x4ef35d = this[_0x2d081a(0x90)][_0x2d081a(0xb2)];
            this[_0x2d081a(0x92)] && (_0x4ef35d[_0x2d081a(0x115)](SceneEvents['UPDATE'], this['world']['update'], this[_0x2d081a(0x92)]), _0x4ef35d['off'](SceneEvents[_0x2d081a(0xbe)], this[_0x2d081a(0x92)]['postUpdate'], this[_0x2d081a(0x92)])), _0x4ef35d[_0x2d081a(0x115)](SceneEvents['SHUTDOWN'], this['shutdown'], this), this[_0x2d081a(0xb7)] && this[_0x2d081a(0xb7)][_0x2d081a(0xbb)](), this['world'] && this[_0x2d081a(0x92)][_0x2d081a(0xbb)](), this[_0x2d081a(0xb7)] = null, this[_0x2d081a(0x92)] = null;
        },
        'destroy': function () {
            var _0x15e653 = _0x20e63b;
            this[_0x15e653(0xc0)](), this[_0x15e653(0x8f)][_0x15e653(0x91)]['events'][_0x15e653(0x115)](SceneEvents[_0x15e653(0xb5)], this[_0x15e653(0xb6)], this), this[_0x15e653(0x8f)] = null, this[_0x15e653(0x90)] = null;
        }
    });
PluginCache[_0x20e63b(0xc7)]('MatterPhysics', MatterPhysics, _0x20e63b(0x116)), module[_0x20e63b(0x117)] = MatterPhysics;
