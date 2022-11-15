/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var _0x5d54 = [
    'isArray',
    'setVelocity',
    'velocity',
    'setAngularVelocity',
    'position',
    'applyForce',
    'angle',
    'cos',
    'sin',
    'pointA',
    'pointB',
    'bodyB',
    'hasOwnProperty',
    'TOP_LEFT',
    'getTopLeft',
    'TOP_RIGHT',
    'RIGHT_TOP',
    'LEFT_CENTER',
    'CENTER',
    'RIGHT_CENTER',
    'getRightCenter',
    'LEFT_BOTTOM',
    'BOTTOM_LEFT',
    'BOTTOM_CENTER',
    'BOTTOM_RIGHT',
    'RIGHT_BOTTOM',
    'getBottomRight',
    'setPosition',
    'UPDATE',
    'update',
    'off',
    'POST_UPDATE',
    'postUpdate',
    'start',
    'MatterPhysics',
    'matterPhysics',
    'exports',
    '126807TFIqck',
    '278605AxITqd',
    '2ZHBLAQ',
    '91591EAMQPm',
    '58090HRujSt',
    '93233MucbSH',
    '5YAXkuZ',
    '7075cjENLs',
    '504714yNbkCG',
    '../../display/align/const',
    './lib/factory/Bodies',
    './BodyBounds',
    './lib/geometry/Bounds',
    '../../utils/Class',
    './lib/body/Composite',
    './lib/constraint/Constraint',
    './Factory',
    '../../utils/object/GetFastValue',
    '../../utils/object/GetValue',
    './lib/collision/Grid',
    './lib/plugins/MatterAttractors',
    './lib/plugins/MatterCollisionEvents',
    './lib/core/Matter',
    './lib/plugins/MatterWrap',
    '../../utils/object/Merge',
    './lib/collision/Pair',
    './lib/collision/Pairs',
    './lib/core/Plugin',
    '../../plugins/PluginCache',
    './lib/collision/Query',
    './lib/collision/SAT',
    '../../scene/events',
    './lib/geometry/Svg',
    './lib/geometry/Vector',
    './lib/geometry/Vertices',
    './World',
    'scene',
    'systems',
    'config',
    'world',
    'bodyBounds',
    'body',
    'composite',
    'grid',
    'pair',
    'pairs',
    'query',
    'constraint',
    'bodies',
    'vector',
    'vertices',
    'verts',
    '_tempVec2',
    'enableCollisionEventsPlugin',
    'enableAttractorPlugin',
    'plugins.wrap',
    'enableWrapPlugin',
    '_restingThresh',
    'restingThresh',
    '_restingThreshTangent',
    'restingThreshTangent',
    '_positionDampen',
    'positionWarming',
    '_frictionNormalMultiplier',
    'events',
    'once',
    'BOOT',
    'boot',
    'sys',
    'START',
    'add',
    'destroy',
    'SHUTDOWN',
    'shutdown',
    'game',
    'physics',
    'settings',
    'matter',
    'register',
    'use',
    'pause',
    'resume',
    'getDelta',
    'autoUpdate',
    'update30Hz',
    'step',
    'getMatterBodies',
    'create',
    'point',
    'region',
    'push',
    'length',
    'collides',
    'bodyA',
    'call',
    'collisionFilter',
    'category',
    'forEach',
    'group'
];
var _0x49fefb = _0x4bd3;
(function (_0x5509b6, _0x30bf94) {
    var _0x56ff9f = _0x4bd3;
    while (!![]) {
        try {
            var _0x5e30cf = parseInt(_0x56ff9f(0x1b1)) + parseInt(_0x56ff9f(0x1b2)) + parseInt(_0x56ff9f(0x1b3)) * -parseInt(_0x56ff9f(0x1b4)) + parseInt(_0x56ff9f(0x1b5)) + -parseInt(_0x56ff9f(0x1b6)) * -parseInt(_0x56ff9f(0x1b7)) + parseInt(_0x56ff9f(0x1b8)) + -parseInt(_0x56ff9f(0x1b9));
            if (_0x5e30cf === _0x30bf94)
                break;
            else
                _0x5509b6['push'](_0x5509b6['shift']());
        } catch (_0x30a58f) {
            _0x5509b6['push'](_0x5509b6['shift']());
        }
    }
}(_0x5d54, 0x3cc0e));
var ALIGN_CONST = require(_0x49fefb(0x1ba)), Axes = require('./lib/geometry/Axes'), Bodies = require(_0x49fefb(0x1bb)), Body = require('./lib/body/Body'), BodyBounds = require(_0x49fefb(0x1bc)), Bounds = require(_0x49fefb(0x1bd)), Class = require(_0x49fefb(0x1be)), Composite = require(_0x49fefb(0x1bf)), Composites = require('./lib/factory/Composites'), Constraint = require(_0x49fefb(0x1c0)), Detector = require('./lib/collision/Detector'), DistanceBetween = require('../../math/distance/DistanceBetween'), Factory = require(_0x49fefb(0x1c1)), GetFastValue = require(_0x49fefb(0x1c2)), GetValue = require(_0x49fefb(0x1c3)), Grid = require(_0x49fefb(0x1c4)), MatterAttractors = require(_0x49fefb(0x1c5)), MatterCollisionEvents = require(_0x49fefb(0x1c6)), MatterLib = require(_0x49fefb(0x1c7)), MatterWrap = require(_0x49fefb(0x1c8)), Merge = require(_0x49fefb(0x1c9)), Pair = require(_0x49fefb(0x1ca)), Pairs = require(_0x49fefb(0x1cb)), Plugin = require(_0x49fefb(0x1cc)), PluginCache = require(_0x49fefb(0x1cd)), Query = require(_0x49fefb(0x1ce)), Resolver = require('./lib/collision/Resolver'), SAT = require(_0x49fefb(0x1cf)), SceneEvents = require(_0x49fefb(0x1d0)), Svg = require(_0x49fefb(0x1d1)), Vector = require(_0x49fefb(0x1d2)), Vertices = require(_0x49fefb(0x1d3)), World = require(_0x49fefb(0x1d4)), MatterPhysics = new Class({
        'initialize': function MatterPhysics(_0x49b4fb) {
            var _0x32872e = _0x49fefb;
            this[_0x32872e(0x1d5)] = _0x49b4fb, this[_0x32872e(0x1d6)] = _0x49b4fb['sys'], this[_0x32872e(0x1d7)] = this['getConfig'](), this[_0x32872e(0x1d8)], this['add'], this[_0x32872e(0x1d9)], this[_0x32872e(0x1da)] = Body, this[_0x32872e(0x1db)] = Composite, this['detector'] = Detector, this[_0x32872e(0x1dc)] = Grid, this[_0x32872e(0x1dd)] = Pair, this[_0x32872e(0x1de)] = Pairs, this[_0x32872e(0x1df)] = Query, this['resolver'] = Resolver, this['sat'] = SAT, this[_0x32872e(0x1e0)] = Constraint, this[_0x32872e(0x1e1)] = Bodies, this['composites'] = Composites, this['axes'] = Axes, this['bounds'] = Bounds, this['svg'] = Svg, this[_0x32872e(0x1e2)] = Vector, this[_0x32872e(0x1e3)] = Vertices, this[_0x32872e(0x1e4)] = Vertices, this[_0x32872e(0x1e5)] = Vector['create'](), GetValue(this[_0x32872e(0x1d7)], 'plugins.collisionevents', !![]) && this[_0x32872e(0x1e6)](), GetValue(this[_0x32872e(0x1d7)], 'plugins.attractors', ![]) && this[_0x32872e(0x1e7)](), GetValue(this[_0x32872e(0x1d7)], _0x32872e(0x1e8), ![]) && this[_0x32872e(0x1e9)](), Resolver[_0x32872e(0x1ea)] = GetValue(this['config'], _0x32872e(0x1eb), 0x4), Resolver[_0x32872e(0x1ec)] = GetValue(this[_0x32872e(0x1d7)], _0x32872e(0x1ed), 0x6), Resolver[_0x32872e(0x1ee)] = GetValue(this['config'], 'positionDampen', 0.9), Resolver['_positionWarming'] = GetValue(this['config'], _0x32872e(0x1ef), 0.8), Resolver[_0x32872e(0x1f0)] = GetValue(this['config'], 'frictionNormalMultiplier', 0x5), _0x49b4fb['sys'][_0x32872e(0x1f1)][_0x32872e(0x1f2)](SceneEvents[_0x32872e(0x1f3)], this[_0x32872e(0x1f4)], this), _0x49b4fb[_0x32872e(0x1f5)][_0x32872e(0x1f1)]['on'](SceneEvents[_0x32872e(0x1f6)], this['start'], this);
        },
        'boot': function () {
            var _0x20a5a3 = _0x49fefb;
            this[_0x20a5a3(0x1d8)] = new World(this['scene'], this[_0x20a5a3(0x1d7)]), this[_0x20a5a3(0x1f7)] = new Factory(this[_0x20a5a3(0x1d8)]), this[_0x20a5a3(0x1d9)] = new BodyBounds(), this['systems'][_0x20a5a3(0x1f1)][_0x20a5a3(0x1f2)](SceneEvents['DESTROY'], this[_0x20a5a3(0x1f8)], this);
        },
        'start': function () {
            var _0x565eb8 = _0x49fefb;
            !this[_0x565eb8(0x1d8)] && (this[_0x565eb8(0x1d8)] = new World(this[_0x565eb8(0x1d5)], this[_0x565eb8(0x1d7)]), this[_0x565eb8(0x1f7)] = new Factory(this[_0x565eb8(0x1d8)]));
            var _0x3f019b = this['systems'][_0x565eb8(0x1f1)];
            _0x3f019b['on'](SceneEvents['UPDATE'], this['world']['update'], this['world']), _0x3f019b['on'](SceneEvents['POST_UPDATE'], this[_0x565eb8(0x1d8)]['postUpdate'], this[_0x565eb8(0x1d8)]), _0x3f019b[_0x565eb8(0x1f2)](SceneEvents[_0x565eb8(0x1f9)], this[_0x565eb8(0x1fa)], this);
        },
        'getConfig': function () {
            var _0x3484ee = _0x49fefb, _0x496db7 = this['systems'][_0x3484ee(0x1fb)][_0x3484ee(0x1d7)][_0x3484ee(0x1fc)], _0x2514c9 = this[_0x3484ee(0x1d6)][_0x3484ee(0x1fd)][_0x3484ee(0x1fc)], _0x2d473e = Merge(GetFastValue(_0x2514c9, _0x3484ee(0x1fe), {}), GetFastValue(_0x496db7, 'matter', {}));
            return _0x2d473e;
        },
        'enableAttractorPlugin': function () {
            var _0x1d0dce = _0x49fefb;
            return Plugin[_0x1d0dce(0x1ff)](MatterAttractors), Plugin[_0x1d0dce(0x200)](MatterLib, MatterAttractors), this;
        },
        'enableWrapPlugin': function () {
            var _0x5ec625 = _0x49fefb;
            return Plugin[_0x5ec625(0x1ff)](MatterWrap), Plugin[_0x5ec625(0x200)](MatterLib, MatterWrap), this;
        },
        'enableCollisionEventsPlugin': function () {
            var _0x47eded = _0x49fefb;
            return Plugin[_0x47eded(0x1ff)](MatterCollisionEvents), Plugin[_0x47eded(0x200)](MatterLib, MatterCollisionEvents), this;
        },
        'pause': function () {
            var _0xf31ffa = _0x49fefb;
            return this[_0xf31ffa(0x1d8)][_0xf31ffa(0x201)]();
        },
        'resume': function () {
            var _0x2117c9 = _0x49fefb;
            return this[_0x2117c9(0x1d8)][_0x2117c9(0x202)]();
        },
        'set60Hz': function () {
            var _0x9fcd06 = _0x49fefb;
            return this[_0x9fcd06(0x1d8)][_0x9fcd06(0x203)] = this['world']['update60Hz'], this[_0x9fcd06(0x1d8)][_0x9fcd06(0x204)] = !![], this;
        },
        'set30Hz': function () {
            var _0x50c421 = _0x49fefb;
            return this[_0x50c421(0x1d8)][_0x50c421(0x203)] = this['world'][_0x50c421(0x205)], this['world'][_0x50c421(0x204)] = !![], this;
        },
        'step': function (_0x1f94fc, _0x464a10) {
            var _0x5f0f3e = _0x49fefb;
            this['world'][_0x5f0f3e(0x206)](_0x1f94fc, _0x464a10);
        },
        'containsPoint': function (_0x4c9da1, _0x301671, _0x469192) {
            var _0x3ba883 = _0x49fefb;
            _0x4c9da1 = this[_0x3ba883(0x207)](_0x4c9da1);
            var _0x338361 = Vector[_0x3ba883(0x208)](_0x301671, _0x469192), _0x316484 = Query[_0x3ba883(0x209)](_0x4c9da1, _0x338361);
            return _0x316484['length'] > 0x0 ? !![] : ![];
        },
        'intersectPoint': function (_0x2c7ce1, _0x2710b6, _0x5f22f7) {
            var _0x367e97 = _0x49fefb;
            _0x5f22f7 = this[_0x367e97(0x207)](_0x5f22f7);
            var _0x47147b = Vector[_0x367e97(0x208)](_0x2c7ce1, _0x2710b6), _0x129167 = [], _0x582dda = Query[_0x367e97(0x209)](_0x5f22f7, _0x47147b);
            return _0x582dda['forEach'](function (_0x34624e) {
                _0x129167['indexOf'](_0x34624e) === -0x1 && _0x129167['push'](_0x34624e);
            }), _0x129167;
        },
        'intersectRect': function (_0x2170cf, _0x2f113f, _0x4d4077, _0x2ffec1, _0x283d9f, _0x48e9c0) {
            var _0x216ece = _0x49fefb;
            _0x283d9f === undefined && (_0x283d9f = ![]);
            _0x48e9c0 = this[_0x216ece(0x207)](_0x48e9c0);
            var _0xa6b69b = {
                    'min': {
                        'x': _0x2170cf,
                        'y': _0x2f113f
                    },
                    'max': {
                        'x': _0x2170cf + _0x4d4077,
                        'y': _0x2f113f + _0x2ffec1
                    }
                }, _0xee68c = [], _0x46f14d = Query[_0x216ece(0x20a)](_0x48e9c0, _0xa6b69b, _0x283d9f);
            return _0x46f14d['forEach'](function (_0x23ba8a) {
                var _0x335465 = _0x216ece;
                _0xee68c['indexOf'](_0x23ba8a) === -0x1 && _0xee68c[_0x335465(0x20b)](_0x23ba8a);
            }), _0xee68c;
        },
        'intersectRay': function (_0x4627ed, _0x4ab6a9, _0x20195e, _0x13aded, _0x32d7be, _0x3eadce) {
            var _0x37b078 = _0x49fefb;
            _0x32d7be === undefined && (_0x32d7be = 0x1);
            _0x3eadce = this[_0x37b078(0x207)](_0x3eadce);
            var _0x3652da = [], _0x589852 = Query['ray'](_0x3eadce, Vector['create'](_0x4627ed, _0x4ab6a9), Vector['create'](_0x20195e, _0x13aded), _0x32d7be);
            for (var _0x10b19b = 0x0; _0x10b19b < _0x589852[_0x37b078(0x20c)]; _0x10b19b++) {
                _0x3652da[_0x37b078(0x20b)](_0x589852[_0x10b19b][_0x37b078(0x1da)]);
            }
            return _0x3652da;
        },
        'intersectBody': function (_0x5e9221, _0x3a96f7) {
            var _0x4358eb = _0x49fefb;
            _0x3a96f7 = this[_0x4358eb(0x207)](_0x3a96f7);
            var _0x20c11f = [], _0x5c1d99 = Query[_0x4358eb(0x20d)](_0x5e9221, _0x3a96f7);
            for (var _0x57b2ec = 0x0; _0x57b2ec < _0x5c1d99[_0x4358eb(0x20c)]; _0x57b2ec++) {
                var _0x81bd52 = _0x5c1d99[_0x57b2ec];
                _0x81bd52[_0x4358eb(0x20e)] === _0x5e9221 ? _0x20c11f[_0x4358eb(0x20b)](_0x81bd52['bodyB']) : _0x20c11f['push'](_0x81bd52[_0x4358eb(0x20e)]);
            }
            return _0x20c11f;
        },
        'overlap': function (_0x102d11, _0xc099a0, _0x1825fc, _0x238af8, _0x5a6d1e) {
            var _0x276d2c = _0x49fefb;
            _0x1825fc === undefined && (_0x1825fc = null);
            _0x238af8 === undefined && (_0x238af8 = null);
            _0x5a6d1e === undefined && (_0x5a6d1e = _0x1825fc);
            !Array['isArray'](_0x102d11) && (_0x102d11 = [_0x102d11]);
            _0x102d11 = this[_0x276d2c(0x207)](_0x102d11), _0xc099a0 = this[_0x276d2c(0x207)](_0xc099a0);
            var _0xb30b14 = ![];
            for (var _0x3eb3e5 = 0x0; _0x3eb3e5 < _0x102d11[_0x276d2c(0x20c)]; _0x3eb3e5++) {
                var _0x1a3d4a = _0x102d11[_0x3eb3e5], _0x37cf5a = Query[_0x276d2c(0x20d)](_0x1a3d4a, _0xc099a0);
                for (var _0x2e7219 = 0x0; _0x2e7219 < _0x37cf5a[_0x276d2c(0x20c)]; _0x2e7219++) {
                    var _0x167575 = _0x37cf5a[_0x2e7219], _0x2529fc = _0x167575[_0x276d2c(0x20e)]['id'] === _0x1a3d4a['id'] ? _0x167575['bodyB'] : _0x167575[_0x276d2c(0x20e)];
                    if (!_0x238af8 || _0x238af8[_0x276d2c(0x20f)](_0x5a6d1e, _0x1a3d4a, _0x2529fc, _0x167575)) {
                        _0xb30b14 = !![];
                        if (_0x1825fc)
                            _0x1825fc[_0x276d2c(0x20f)](_0x5a6d1e, _0x1a3d4a, _0x2529fc, _0x167575);
                        else {
                            if (!_0x238af8)
                                return !![];
                        }
                    }
                }
            }
            return _0xb30b14;
        },
        'setCollisionCategory': function (_0x3f938c, _0x151a32) {
            return _0x3f938c = this['getMatterBodies'](_0x3f938c), _0x3f938c['forEach'](function (_0x252694) {
                var _0x129c18 = _0x4bd3;
                _0x252694[_0x129c18(0x210)][_0x129c18(0x211)] = _0x151a32;
            }), this;
        },
        'setCollisionGroup': function (_0x4bbfd7, _0x482c6f) {
            var _0x5f2bbe = _0x49fefb;
            return _0x4bbfd7 = this['getMatterBodies'](_0x4bbfd7), _0x4bbfd7[_0x5f2bbe(0x212)](function (_0x2c73d1) {
                var _0x25ea15 = _0x5f2bbe;
                _0x2c73d1[_0x25ea15(0x210)][_0x25ea15(0x213)] = _0x482c6f;
            }), this;
        },
        'setCollidesWith': function (_0x1d9f01, _0x34014e) {
            var _0x227ae3 = _0x49fefb;
            _0x1d9f01 = this['getMatterBodies'](_0x1d9f01);
            var _0x3a881e = 0x0;
            if (!Array['isArray'](_0x34014e))
                _0x3a881e = _0x34014e;
            else
                for (var _0x1ac124 = 0x0; _0x1ac124 < _0x34014e[_0x227ae3(0x20c)]; _0x1ac124++) {
                    _0x3a881e |= _0x34014e[_0x1ac124];
                }
            return _0x1d9f01[_0x227ae3(0x212)](function (_0x5980bf) {
                _0x5980bf['collisionFilter']['mask'] = _0x3a881e;
            }), this;
        },
        'getMatterBodies': function (_0x4450ad) {
            var _0x523c0d = _0x49fefb;
            if (!_0x4450ad)
                return this['world']['getAllBodies']();
            !Array[_0x523c0d(0x214)](_0x4450ad) && (_0x4450ad = [_0x4450ad]);
            var _0x3d6b58 = [];
            for (var _0x51a060 = 0x0; _0x51a060 < _0x4450ad[_0x523c0d(0x20c)]; _0x51a060++) {
                var _0x1d6cee = _0x4450ad[_0x51a060]['hasOwnProperty'](_0x523c0d(0x1da)) ? _0x4450ad[_0x51a060][_0x523c0d(0x1da)] : _0x4450ad[_0x51a060];
                _0x3d6b58[_0x523c0d(0x20b)](_0x1d6cee);
            }
            return _0x3d6b58;
        },
        'setVelocity': function (_0x486fec, _0x260a4d, _0x696302) {
            var _0x13d138 = _0x49fefb;
            _0x486fec = this[_0x13d138(0x207)](_0x486fec);
            var _0x3c8cd1 = this['_tempVec2'];
            return _0x3c8cd1['x'] = _0x260a4d, _0x3c8cd1['y'] = _0x696302, _0x486fec[_0x13d138(0x212)](function (_0x20e401) {
                var _0x5e1f5e = _0x13d138;
                Body[_0x5e1f5e(0x215)](_0x20e401, _0x3c8cd1);
            }), this;
        },
        'setVelocityX': function (_0x629fec, _0x51d4c6) {
            var _0x184002 = _0x49fefb;
            _0x629fec = this[_0x184002(0x207)](_0x629fec);
            var _0x513b3e = this[_0x184002(0x1e5)];
            return _0x513b3e['x'] = _0x51d4c6, _0x629fec['forEach'](function (_0x3d11a5) {
                var _0x118cc0 = _0x184002;
                _0x513b3e['y'] = _0x3d11a5[_0x118cc0(0x216)]['y'], Body['setVelocity'](_0x3d11a5, _0x513b3e);
            }), this;
        },
        'setVelocityY': function (_0x130b3e, _0x3c5d3a) {
            var _0x358146 = _0x49fefb;
            _0x130b3e = this[_0x358146(0x207)](_0x130b3e);
            var _0x5337e9 = this['_tempVec2'];
            return _0x5337e9['y'] = _0x3c5d3a, _0x130b3e[_0x358146(0x212)](function (_0x33524e) {
                var _0x4f68b = _0x358146;
                _0x5337e9['x'] = _0x33524e[_0x4f68b(0x216)]['x'], Body[_0x4f68b(0x215)](_0x33524e, _0x5337e9);
            }), this;
        },
        'setAngularVelocity': function (_0x58df3d, _0x1adc23) {
            var _0x15e88e = _0x49fefb;
            return _0x58df3d = this[_0x15e88e(0x207)](_0x58df3d), _0x58df3d[_0x15e88e(0x212)](function (_0x6e67c9) {
                var _0x526b82 = _0x15e88e;
                Body[_0x526b82(0x217)](_0x6e67c9, _0x1adc23);
            }), this;
        },
        'applyForce': function (_0xbb961b, _0x2239a4) {
            var _0x45de4a = _0x49fefb;
            _0xbb961b = this['getMatterBodies'](_0xbb961b);
            var _0x2af2be = this['_tempVec2'];
            return _0xbb961b[_0x45de4a(0x212)](function (_0x1dbdb9) {
                var _0x11dbb6 = _0x45de4a;
                _0x2af2be['x'] = _0x1dbdb9[_0x11dbb6(0x218)]['x'], _0x2af2be['y'] = _0x1dbdb9['position']['y'], Body[_0x11dbb6(0x219)](_0x1dbdb9, _0x2af2be, _0x2239a4);
            }), this;
        },
        'applyForceFromPosition': function (_0x58ba09, _0x28552f, _0xae720e, _0x319cd1) {
            var _0x1d7c28 = _0x49fefb;
            _0x58ba09 = this[_0x1d7c28(0x207)](_0x58ba09);
            var _0x150b2c = this['_tempVec2'];
            return _0x58ba09[_0x1d7c28(0x212)](function (_0x336be6) {
                var _0x2ff0c7 = _0x1d7c28;
                _0x319cd1 === undefined && (_0x319cd1 = _0x336be6[_0x2ff0c7(0x21a)]), _0x150b2c['x'] = _0xae720e * Math['cos'](_0x319cd1), _0x150b2c['y'] = _0xae720e * Math['sin'](_0x319cd1), Body[_0x2ff0c7(0x219)](_0x336be6, _0x28552f, _0x150b2c);
            }), this;
        },
        'applyForceFromAngle': function (_0x3c0f5d, _0x153682, _0x35ebaf) {
            var _0x2279d4 = _0x49fefb;
            _0x3c0f5d = this['getMatterBodies'](_0x3c0f5d);
            var _0xda7915 = this['_tempVec2'];
            return _0x3c0f5d[_0x2279d4(0x212)](function (_0x1c07cf) {
                var _0x4a09f8 = _0x2279d4;
                _0x35ebaf === undefined && (_0x35ebaf = _0x1c07cf[_0x4a09f8(0x21a)]), _0xda7915['x'] = _0x153682 * Math[_0x4a09f8(0x21b)](_0x35ebaf), _0xda7915['y'] = _0x153682 * Math[_0x4a09f8(0x21c)](_0x35ebaf), Body['applyForce'](_0x1c07cf, {
                    'x': _0x1c07cf['position']['x'],
                    'y': _0x1c07cf[_0x4a09f8(0x218)]['y']
                }, _0xda7915);
            }), this;
        },
        'getConstraintLength': function (_0x516c0e) {
            var _0x2e9351 = _0x49fefb, _0x4d172a = _0x516c0e[_0x2e9351(0x21d)]['x'], _0x56c184 = _0x516c0e[_0x2e9351(0x21d)]['y'], _0xffe751 = _0x516c0e[_0x2e9351(0x21e)]['x'], _0x373f6a = _0x516c0e['pointB']['y'];
            return _0x516c0e['bodyA'] && (_0x4d172a += _0x516c0e[_0x2e9351(0x20e)][_0x2e9351(0x218)]['x'], _0x56c184 += _0x516c0e['bodyA'][_0x2e9351(0x218)]['y']), _0x516c0e[_0x2e9351(0x21f)] && (_0xffe751 += _0x516c0e[_0x2e9351(0x21f)][_0x2e9351(0x218)]['x'], _0x373f6a += _0x516c0e[_0x2e9351(0x21f)][_0x2e9351(0x218)]['y']), DistanceBetween(_0x4d172a, _0x56c184, _0xffe751, _0x373f6a);
        },
        'alignBody': function (_0x2c13d2, _0xa8db25, _0x241c16, _0x45fb64) {
            var _0x12e38d = _0x49fefb;
            _0x2c13d2 = _0x2c13d2[_0x12e38d(0x220)](_0x12e38d(0x1da)) ? _0x2c13d2[_0x12e38d(0x1da)] : _0x2c13d2;
            var _0x2e850e;
            switch (_0x45fb64) {
            case ALIGN_CONST[_0x12e38d(0x221)]:
            case ALIGN_CONST['LEFT_TOP']:
                _0x2e850e = this['bodyBounds'][_0x12e38d(0x222)](_0x2c13d2, _0xa8db25, _0x241c16);
                break;
            case ALIGN_CONST['TOP_CENTER']:
                _0x2e850e = this[_0x12e38d(0x1d9)]['getTopCenter'](_0x2c13d2, _0xa8db25, _0x241c16);
                break;
            case ALIGN_CONST[_0x12e38d(0x223)]:
            case ALIGN_CONST[_0x12e38d(0x224)]:
                _0x2e850e = this['bodyBounds']['getTopRight'](_0x2c13d2, _0xa8db25, _0x241c16);
                break;
            case ALIGN_CONST[_0x12e38d(0x225)]:
                _0x2e850e = this[_0x12e38d(0x1d9)]['getLeftCenter'](_0x2c13d2, _0xa8db25, _0x241c16);
                break;
            case ALIGN_CONST[_0x12e38d(0x226)]:
                _0x2e850e = this['bodyBounds']['getCenter'](_0x2c13d2, _0xa8db25, _0x241c16);
                break;
            case ALIGN_CONST[_0x12e38d(0x227)]:
                _0x2e850e = this[_0x12e38d(0x1d9)][_0x12e38d(0x228)](_0x2c13d2, _0xa8db25, _0x241c16);
                break;
            case ALIGN_CONST[_0x12e38d(0x229)]:
            case ALIGN_CONST[_0x12e38d(0x22a)]:
                _0x2e850e = this['bodyBounds']['getBottomLeft'](_0x2c13d2, _0xa8db25, _0x241c16);
                break;
            case ALIGN_CONST[_0x12e38d(0x22b)]:
                _0x2e850e = this[_0x12e38d(0x1d9)]['getBottomCenter'](_0x2c13d2, _0xa8db25, _0x241c16);
                break;
            case ALIGN_CONST[_0x12e38d(0x22c)]:
            case ALIGN_CONST[_0x12e38d(0x22d)]:
                _0x2e850e = this[_0x12e38d(0x1d9)][_0x12e38d(0x22e)](_0x2c13d2, _0xa8db25, _0x241c16);
                break;
            }
            return _0x2e850e && Body[_0x12e38d(0x22f)](_0x2c13d2, _0x2e850e), this;
        },
        'shutdown': function () {
            var _0x50d006 = _0x49fefb, _0x42bd34 = this[_0x50d006(0x1d6)]['events'];
            this[_0x50d006(0x1d8)] && (_0x42bd34['off'](SceneEvents[_0x50d006(0x230)], this[_0x50d006(0x1d8)][_0x50d006(0x231)], this[_0x50d006(0x1d8)]), _0x42bd34[_0x50d006(0x232)](SceneEvents[_0x50d006(0x233)], this['world'][_0x50d006(0x234)], this[_0x50d006(0x1d8)])), _0x42bd34[_0x50d006(0x232)](SceneEvents[_0x50d006(0x1f9)], this[_0x50d006(0x1fa)], this), this[_0x50d006(0x1f7)] && this[_0x50d006(0x1f7)][_0x50d006(0x1f8)](), this[_0x50d006(0x1d8)] && this['world'][_0x50d006(0x1f8)](), this[_0x50d006(0x1f7)] = null, this[_0x50d006(0x1d8)] = null;
        },
        'destroy': function () {
            var _0x194ba7 = _0x49fefb;
            this[_0x194ba7(0x1fa)](), this[_0x194ba7(0x1d5)][_0x194ba7(0x1f5)][_0x194ba7(0x1f1)][_0x194ba7(0x232)](SceneEvents[_0x194ba7(0x1f6)], this[_0x194ba7(0x235)], this), this[_0x194ba7(0x1d5)] = null, this[_0x194ba7(0x1d6)] = null;
        }
    });
function _0x4bd3(_0x487652, _0xfb2acb) {
    return _0x4bd3 = function (_0x5d54cb, _0x4bd33b) {
        _0x5d54cb = _0x5d54cb - 0x1b1;
        var _0x8cbf62 = _0x5d54[_0x5d54cb];
        return _0x8cbf62;
    }, _0x4bd3(_0x487652, _0xfb2acb);
}
PluginCache[_0x49fefb(0x1ff)](_0x49fefb(0x236), MatterPhysics, _0x49fefb(0x237)), module[_0x49fefb(0x238)] = MatterPhysics;
