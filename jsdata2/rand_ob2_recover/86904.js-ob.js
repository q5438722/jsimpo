var ALIGN_CONST = require(_0x49fefb(442)), Axes = require('./lib/geometry/Axes'), Bodies = require(_0x49fefb(443)), Body = require('./lib/body/Body'), BodyBounds = require(_0x49fefb(444)), Bounds = require(_0x49fefb(445)), Class = require(_0x49fefb(446)), Composite = require(_0x49fefb(447)), Composites = require('./lib/factory/Composites'), Constraint = require(_0x49fefb(448)), Detector = require('./lib/collision/Detector'), DistanceBetween = require('../../math/distance/DistanceBetween'), Factory = require(_0x49fefb(449)), GetFastValue = require(_0x49fefb(450)), GetValue = require(_0x49fefb(451)), Grid = require(_0x49fefb(452)), MatterAttractors = require(_0x49fefb(453)), MatterCollisionEvents = require(_0x49fefb(454)), MatterLib = require(_0x49fefb(455)), MatterWrap = require(_0x49fefb(456)), Merge = require(_0x49fefb(457)), Pair = require(_0x49fefb(458)), Pairs = require(_0x49fefb(459)), Plugin = require(_0x49fefb(460)), PluginCache = require(_0x49fefb(461)), Query = require(_0x49fefb(462)), Resolver = require('./lib/collision/Resolver'), SAT = require(_0x49fefb(463)), SceneEvents = require(_0x49fefb(464)), Svg = require(_0x49fefb(465)), Vector = require(_0x49fefb(466)), Vertices = require(_0x49fefb(467)), World = require(_0x49fefb(468)), MatterPhysics = new Class({
        'initialize': function MatterPhysics(_0x49b4fb) {
            var _0x32872e = _0x49fefb;
            this[_0x32872e(469)] = _0x49b4fb, this[_0x32872e(470)] = _0x49b4fb['sys'], this[_0x32872e(471)] = this['getConfig'](), this[_0x32872e(472)], this['add'], this[_0x32872e(473)], this[_0x32872e(474)] = Body, this[_0x32872e(475)] = Composite, this['detector'] = Detector, this[_0x32872e(476)] = Grid, this[_0x32872e(477)] = Pair, this[_0x32872e(478)] = Pairs, this[_0x32872e(479)] = Query, this['resolver'] = Resolver, this['sat'] = SAT, this[_0x32872e(480)] = Constraint, this[_0x32872e(481)] = Bodies, this['composites'] = Composites, this['axes'] = Axes, this['bounds'] = Bounds, this['svg'] = Svg, this[_0x32872e(482)] = Vector, this[_0x32872e(483)] = Vertices, this[_0x32872e(484)] = Vertices, this[_0x32872e(485)] = Vector['create'](), GetValue(this[_0x32872e(471)], 'plugins.collisionevents', !![]) && this[_0x32872e(486)](), GetValue(this[_0x32872e(471)], 'plugins.attractors', ![]) && this[_0x32872e(487)](), GetValue(this[_0x32872e(471)], _0x32872e(488), ![]) && this[_0x32872e(489)](), Resolver[_0x32872e(490)] = GetValue(this['config'], _0x32872e(491), 4), Resolver[_0x32872e(492)] = GetValue(this[_0x32872e(471)], _0x32872e(493), 6), Resolver[_0x32872e(494)] = GetValue(this['config'], 'positionDampen', 0.9), Resolver['_positionWarming'] = GetValue(this['config'], _0x32872e(495), 0.8), Resolver[_0x32872e(496)] = GetValue(this['config'], 'frictionNormalMultiplier', 5), _0x49b4fb['sys'][_0x32872e(497)][_0x32872e(498)](SceneEvents[_0x32872e(499)], this[_0x32872e(500)], this), _0x49b4fb[_0x32872e(501)][_0x32872e(497)]['on'](SceneEvents[_0x32872e(502)], this['start'], this);
        },
        'boot': function () {
            var _0x20a5a3 = _0x49fefb;
            this[_0x20a5a3(472)] = new World(this['scene'], this[_0x20a5a3(471)]), this[_0x20a5a3(503)] = new Factory(this[_0x20a5a3(472)]), this[_0x20a5a3(473)] = new BodyBounds(), this['systems'][_0x20a5a3(497)][_0x20a5a3(498)](SceneEvents['DESTROY'], this[_0x20a5a3(504)], this);
        },
        'start': function () {
            var _0x565eb8 = _0x49fefb;
            !this[_0x565eb8(472)] && (this[_0x565eb8(472)] = new World(this[_0x565eb8(469)], this[_0x565eb8(471)]), this[_0x565eb8(503)] = new Factory(this[_0x565eb8(472)]));
            var _0x3f019b = this['systems'][_0x565eb8(497)];
            _0x3f019b['on'](SceneEvents['UPDATE'], this['world']['update'], this['world']), _0x3f019b['on'](SceneEvents['POST_UPDATE'], this[_0x565eb8(472)]['postUpdate'], this[_0x565eb8(472)]), _0x3f019b[_0x565eb8(498)](SceneEvents[_0x565eb8(505)], this[_0x565eb8(506)], this);
        },
        'getConfig': function () {
            var _0x3484ee = _0x49fefb, _0x496db7 = this['systems'][_0x3484ee(507)][_0x3484ee(471)][_0x3484ee(508)], _0x2514c9 = this[_0x3484ee(470)][_0x3484ee(509)][_0x3484ee(508)], _0x2d473e = Merge(GetFastValue(_0x2514c9, _0x3484ee(510), {}), GetFastValue(_0x496db7, 'matter', {}));
            return _0x2d473e;
        },
        'enableAttractorPlugin': function () {
            var _0x1d0dce = _0x49fefb;
            return Plugin[_0x1d0dce(511)](MatterAttractors), Plugin[_0x1d0dce(512)](MatterLib, MatterAttractors), this;
        },
        'enableWrapPlugin': function () {
            var _0x5ec625 = _0x49fefb;
            return Plugin[_0x5ec625(511)](MatterWrap), Plugin[_0x5ec625(512)](MatterLib, MatterWrap), this;
        },
        'enableCollisionEventsPlugin': function () {
            var _0x47eded = _0x49fefb;
            return Plugin[_0x47eded(511)](MatterCollisionEvents), Plugin[_0x47eded(512)](MatterLib, MatterCollisionEvents), this;
        },
        'pause': function () {
            var _0xf31ffa = _0x49fefb;
            return this[_0xf31ffa(472)][_0xf31ffa(513)]();
        },
        'resume': function () {
            var _0x2117c9 = _0x49fefb;
            return this[_0x2117c9(472)][_0x2117c9(514)]();
        },
        'set60Hz': function () {
            var _0x9fcd06 = _0x49fefb;
            return this[_0x9fcd06(472)][_0x9fcd06(515)] = this['world']['update60Hz'], this[_0x9fcd06(472)][_0x9fcd06(516)] = !![], this;
        },
        'set30Hz': function () {
            var _0x50c421 = _0x49fefb;
            return this[_0x50c421(472)][_0x50c421(515)] = this['world'][_0x50c421(517)], this['world'][_0x50c421(516)] = !![], this;
        },
        'step': function (_0x1f94fc, _0x464a10) {
            var _0x5f0f3e = _0x49fefb;
            this['world'][_0x5f0f3e(518)](_0x1f94fc, _0x464a10);
        },
        'containsPoint': function (_0x4c9da1, _0x301671, _0x469192) {
            var _0x3ba883 = _0x49fefb;
            _0x4c9da1 = this[_0x3ba883(519)](_0x4c9da1);
            var _0x338361 = Vector[_0x3ba883(520)](_0x301671, _0x469192), _0x316484 = Query[_0x3ba883(521)](_0x4c9da1, _0x338361);
            return _0x316484['length'] > 0 ? !![] : ![];
        },
        'intersectPoint': function (_0x2c7ce1, _0x2710b6, _0x5f22f7) {
            var _0x367e97 = _0x49fefb;
            _0x5f22f7 = this[_0x367e97(519)](_0x5f22f7);
            var _0x47147b = Vector[_0x367e97(520)](_0x2c7ce1, _0x2710b6), _0x129167 = [], _0x582dda = Query[_0x367e97(521)](_0x5f22f7, _0x47147b);
            return _0x582dda['forEach'](function (_0x34624e) {
                _0x129167['indexOf'](_0x34624e) === -1 && _0x129167['push'](_0x34624e);
            }), _0x129167;
        },
        'intersectRect': function (_0x2170cf, _0x2f113f, _0x4d4077, _0x2ffec1, _0x283d9f, _0x48e9c0) {
            var _0x216ece = _0x49fefb;
            _0x283d9f === undefined && (_0x283d9f = ![]);
            _0x48e9c0 = this[_0x216ece(519)](_0x48e9c0);
            var _0xa6b69b = {
                    'min': {
                        'x': _0x2170cf,
                        'y': _0x2f113f
                    },
                    'max': {
                        'x': _0x2170cf + _0x4d4077,
                        'y': _0x2f113f + _0x2ffec1
                    }
                }, _0xee68c = [], _0x46f14d = Query[_0x216ece(522)](_0x48e9c0, _0xa6b69b, _0x283d9f);
            return _0x46f14d['forEach'](function (_0x23ba8a) {
                var _0x335465 = _0x216ece;
                _0xee68c['indexOf'](_0x23ba8a) === -1 && _0xee68c[_0x335465(523)](_0x23ba8a);
            }), _0xee68c;
        },
        'intersectRay': function (_0x4627ed, _0x4ab6a9, _0x20195e, _0x13aded, _0x32d7be, _0x3eadce) {
            var _0x37b078 = _0x49fefb;
            _0x32d7be === undefined && (_0x32d7be = 1);
            _0x3eadce = this[_0x37b078(519)](_0x3eadce);
            var _0x3652da = [], _0x589852 = Query['ray'](_0x3eadce, Vector['create'](_0x4627ed, _0x4ab6a9), Vector['create'](_0x20195e, _0x13aded), _0x32d7be);
            for (var _0x10b19b = 0; _0x10b19b < _0x589852[_0x37b078(524)]; _0x10b19b++) {
                _0x3652da[_0x37b078(523)](_0x589852[_0x10b19b][_0x37b078(474)]);
            }
            return _0x3652da;
        },
        'intersectBody': function (_0x5e9221, _0x3a96f7) {
            var _0x4358eb = _0x49fefb;
            _0x3a96f7 = this[_0x4358eb(519)](_0x3a96f7);
            var _0x20c11f = [], _0x5c1d99 = Query[_0x4358eb(525)](_0x5e9221, _0x3a96f7);
            for (var _0x57b2ec = 0; _0x57b2ec < _0x5c1d99[_0x4358eb(524)]; _0x57b2ec++) {
                var _0x81bd52 = _0x5c1d99[_0x57b2ec];
                _0x81bd52[_0x4358eb(526)] === _0x5e9221 ? _0x20c11f[_0x4358eb(523)](_0x81bd52['bodyB']) : _0x20c11f['push'](_0x81bd52[_0x4358eb(526)]);
            }
            return _0x20c11f;
        },
        'overlap': function (_0x102d11, _0xc099a0, _0x1825fc, _0x238af8, _0x5a6d1e) {
            var _0x276d2c = _0x49fefb;
            _0x1825fc === undefined && (_0x1825fc = null);
            _0x238af8 === undefined && (_0x238af8 = null);
            _0x5a6d1e === undefined && (_0x5a6d1e = _0x1825fc);
            !Array['isArray'](_0x102d11) && (_0x102d11 = [_0x102d11]);
            _0x102d11 = this[_0x276d2c(519)](_0x102d11), _0xc099a0 = this[_0x276d2c(519)](_0xc099a0);
            var _0xb30b14 = ![];
            for (var _0x3eb3e5 = 0; _0x3eb3e5 < _0x102d11[_0x276d2c(524)]; _0x3eb3e5++) {
                var _0x1a3d4a = _0x102d11[_0x3eb3e5], _0x37cf5a = Query[_0x276d2c(525)](_0x1a3d4a, _0xc099a0);
                for (var _0x2e7219 = 0; _0x2e7219 < _0x37cf5a[_0x276d2c(524)]; _0x2e7219++) {
                    var _0x167575 = _0x37cf5a[_0x2e7219], _0x2529fc = _0x167575[_0x276d2c(526)]['id'] === _0x1a3d4a['id'] ? _0x167575['bodyB'] : _0x167575[_0x276d2c(526)];
                    if (!_0x238af8 || _0x238af8[_0x276d2c(527)](_0x5a6d1e, _0x1a3d4a, _0x2529fc, _0x167575)) {
                        _0xb30b14 = !![];
                        if (_0x1825fc)
                            _0x1825fc[_0x276d2c(527)](_0x5a6d1e, _0x1a3d4a, _0x2529fc, _0x167575);
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
                _0x252694[_0x129c18(528)][_0x129c18(529)] = _0x151a32;
            }), this;
        },
        'setCollisionGroup': function (_0x4bbfd7, _0x482c6f) {
            var _0x5f2bbe = _0x49fefb;
            return _0x4bbfd7 = this['getMatterBodies'](_0x4bbfd7), _0x4bbfd7[_0x5f2bbe(530)](function (_0x2c73d1) {
                var _0x25ea15 = _0x5f2bbe;
                _0x2c73d1[_0x25ea15(528)][_0x25ea15(531)] = _0x482c6f;
            }), this;
        },
        'setCollidesWith': function (_0x1d9f01, _0x34014e) {
            var _0x227ae3 = _0x49fefb;
            _0x1d9f01 = this['getMatterBodies'](_0x1d9f01);
            var _0x3a881e = 0;
            if (!Array['isArray'](_0x34014e))
                _0x3a881e = _0x34014e;
            else
                for (var _0x1ac124 = 0; _0x1ac124 < _0x34014e[_0x227ae3(524)]; _0x1ac124++) {
                    _0x3a881e |= _0x34014e[_0x1ac124];
                }
            return _0x1d9f01[_0x227ae3(530)](function (_0x5980bf) {
                _0x5980bf['collisionFilter']['mask'] = _0x3a881e;
            }), this;
        },
        'getMatterBodies': function (_0x4450ad) {
            var _0x523c0d = _0x49fefb;
            if (!_0x4450ad)
                return this['world']['getAllBodies']();
            !Array[_0x523c0d(532)](_0x4450ad) && (_0x4450ad = [_0x4450ad]);
            var _0x3d6b58 = [];
            for (var _0x51a060 = 0; _0x51a060 < _0x4450ad[_0x523c0d(524)]; _0x51a060++) {
                var _0x1d6cee = _0x4450ad[_0x51a060]['hasOwnProperty'](_0x523c0d(474)) ? _0x4450ad[_0x51a060][_0x523c0d(474)] : _0x4450ad[_0x51a060];
                _0x3d6b58[_0x523c0d(523)](_0x1d6cee);
            }
            return _0x3d6b58;
        },
        'setVelocity': function (_0x486fec, _0x260a4d, _0x696302) {
            var _0x13d138 = _0x49fefb;
            _0x486fec = this[_0x13d138(519)](_0x486fec);
            var _0x3c8cd1 = this['_tempVec2'];
            return _0x3c8cd1['x'] = _0x260a4d, _0x3c8cd1['y'] = _0x696302, _0x486fec[_0x13d138(530)](function (_0x20e401) {
                var _0x5e1f5e = _0x13d138;
                Body[_0x5e1f5e(533)](_0x20e401, _0x3c8cd1);
            }), this;
        },
        'setVelocityX': function (_0x629fec, _0x51d4c6) {
            var _0x184002 = _0x49fefb;
            _0x629fec = this[_0x184002(519)](_0x629fec);
            var _0x513b3e = this[_0x184002(485)];
            return _0x513b3e['x'] = _0x51d4c6, _0x629fec['forEach'](function (_0x3d11a5) {
                var _0x118cc0 = _0x184002;
                _0x513b3e['y'] = _0x3d11a5[_0x118cc0(534)]['y'], Body['setVelocity'](_0x3d11a5, _0x513b3e);
            }), this;
        },
        'setVelocityY': function (_0x130b3e, _0x3c5d3a) {
            var _0x358146 = _0x49fefb;
            _0x130b3e = this[_0x358146(519)](_0x130b3e);
            var _0x5337e9 = this['_tempVec2'];
            return _0x5337e9['y'] = _0x3c5d3a, _0x130b3e[_0x358146(530)](function (_0x33524e) {
                var _0x4f68b = _0x358146;
                _0x5337e9['x'] = _0x33524e[_0x4f68b(534)]['x'], Body[_0x4f68b(533)](_0x33524e, _0x5337e9);
            }), this;
        },
        'setAngularVelocity': function (_0x58df3d, _0x1adc23) {
            var _0x15e88e = _0x49fefb;
            return _0x58df3d = this[_0x15e88e(519)](_0x58df3d), _0x58df3d[_0x15e88e(530)](function (_0x6e67c9) {
                var _0x526b82 = _0x15e88e;
                Body[_0x526b82(535)](_0x6e67c9, _0x1adc23);
            }), this;
        },
        'applyForce': function (_0xbb961b, _0x2239a4) {
            var _0x45de4a = _0x49fefb;
            _0xbb961b = this['getMatterBodies'](_0xbb961b);
            var _0x2af2be = this['_tempVec2'];
            return _0xbb961b[_0x45de4a(530)](function (_0x1dbdb9) {
                var _0x11dbb6 = _0x45de4a;
                _0x2af2be['x'] = _0x1dbdb9[_0x11dbb6(536)]['x'], _0x2af2be['y'] = _0x1dbdb9['position']['y'], Body[_0x11dbb6(537)](_0x1dbdb9, _0x2af2be, _0x2239a4);
            }), this;
        },
        'applyForceFromPosition': function (_0x58ba09, _0x28552f, _0xae720e, _0x319cd1) {
            var _0x1d7c28 = _0x49fefb;
            _0x58ba09 = this[_0x1d7c28(519)](_0x58ba09);
            var _0x150b2c = this['_tempVec2'];
            return _0x58ba09[_0x1d7c28(530)](function (_0x336be6) {
                var _0x2ff0c7 = _0x1d7c28;
                _0x319cd1 === undefined && (_0x319cd1 = _0x336be6[_0x2ff0c7(538)]), _0x150b2c['x'] = _0xae720e * Math['cos'](_0x319cd1), _0x150b2c['y'] = _0xae720e * Math['sin'](_0x319cd1), Body[_0x2ff0c7(537)](_0x336be6, _0x28552f, _0x150b2c);
            }), this;
        },
        'applyForceFromAngle': function (_0x3c0f5d, _0x153682, _0x35ebaf) {
            var _0x2279d4 = _0x49fefb;
            _0x3c0f5d = this['getMatterBodies'](_0x3c0f5d);
            var _0xda7915 = this['_tempVec2'];
            return _0x3c0f5d[_0x2279d4(530)](function (_0x1c07cf) {
                var _0x4a09f8 = _0x2279d4;
                _0x35ebaf === undefined && (_0x35ebaf = _0x1c07cf[_0x4a09f8(538)]), _0xda7915['x'] = _0x153682 * Math[_0x4a09f8(539)](_0x35ebaf), _0xda7915['y'] = _0x153682 * Math[_0x4a09f8(540)](_0x35ebaf), Body['applyForce'](_0x1c07cf, {
                    'x': _0x1c07cf['position']['x'],
                    'y': _0x1c07cf[_0x4a09f8(536)]['y']
                }, _0xda7915);
            }), this;
        },
        'getConstraintLength': function (_0x516c0e) {
            var _0x2e9351 = _0x49fefb, _0x4d172a = _0x516c0e[_0x2e9351(541)]['x'], _0x56c184 = _0x516c0e[_0x2e9351(541)]['y'], _0xffe751 = _0x516c0e[_0x2e9351(542)]['x'], _0x373f6a = _0x516c0e['pointB']['y'];
            return _0x516c0e['bodyA'] && (_0x4d172a += _0x516c0e[_0x2e9351(526)][_0x2e9351(536)]['x'], _0x56c184 += _0x516c0e['bodyA'][_0x2e9351(536)]['y']), _0x516c0e[_0x2e9351(543)] && (_0xffe751 += _0x516c0e[_0x2e9351(543)][_0x2e9351(536)]['x'], _0x373f6a += _0x516c0e[_0x2e9351(543)][_0x2e9351(536)]['y']), DistanceBetween(_0x4d172a, _0x56c184, _0xffe751, _0x373f6a);
        },
        'alignBody': function (_0x2c13d2, _0xa8db25, _0x241c16, _0x45fb64) {
            var _0x12e38d = _0x49fefb;
            _0x2c13d2 = _0x2c13d2[_0x12e38d(544)](_0x12e38d(474)) ? _0x2c13d2[_0x12e38d(474)] : _0x2c13d2;
            var _0x2e850e;
            switch (_0x45fb64) {
            case ALIGN_CONST[_0x12e38d(545)]:
            case ALIGN_CONST['LEFT_TOP']:
                _0x2e850e = this['bodyBounds'][_0x12e38d(546)](_0x2c13d2, _0xa8db25, _0x241c16);
                break;
            case ALIGN_CONST['TOP_CENTER']:
                _0x2e850e = this[_0x12e38d(473)]['getTopCenter'](_0x2c13d2, _0xa8db25, _0x241c16);
                break;
            case ALIGN_CONST[_0x12e38d(547)]:
            case ALIGN_CONST[_0x12e38d(548)]:
                _0x2e850e = this['bodyBounds']['getTopRight'](_0x2c13d2, _0xa8db25, _0x241c16);
                break;
            case ALIGN_CONST[_0x12e38d(549)]:
                _0x2e850e = this[_0x12e38d(473)]['getLeftCenter'](_0x2c13d2, _0xa8db25, _0x241c16);
                break;
            case ALIGN_CONST[_0x12e38d(550)]:
                _0x2e850e = this['bodyBounds']['getCenter'](_0x2c13d2, _0xa8db25, _0x241c16);
                break;
            case ALIGN_CONST[_0x12e38d(551)]:
                _0x2e850e = this[_0x12e38d(473)][_0x12e38d(552)](_0x2c13d2, _0xa8db25, _0x241c16);
                break;
            case ALIGN_CONST[_0x12e38d(553)]:
            case ALIGN_CONST[_0x12e38d(554)]:
                _0x2e850e = this['bodyBounds']['getBottomLeft'](_0x2c13d2, _0xa8db25, _0x241c16);
                break;
            case ALIGN_CONST[_0x12e38d(555)]:
                _0x2e850e = this[_0x12e38d(473)]['getBottomCenter'](_0x2c13d2, _0xa8db25, _0x241c16);
                break;
            case ALIGN_CONST[_0x12e38d(556)]:
            case ALIGN_CONST[_0x12e38d(557)]:
                _0x2e850e = this[_0x12e38d(473)][_0x12e38d(558)](_0x2c13d2, _0xa8db25, _0x241c16);
                break;
            }
            return _0x2e850e && Body[_0x12e38d(559)](_0x2c13d2, _0x2e850e), this;
        },
        'shutdown': function () {
            var _0x50d006 = _0x49fefb, _0x42bd34 = this[_0x50d006(470)]['events'];
            this[_0x50d006(472)] && (_0x42bd34['off'](SceneEvents[_0x50d006(560)], this[_0x50d006(472)][_0x50d006(561)], this[_0x50d006(472)]), _0x42bd34[_0x50d006(562)](SceneEvents[_0x50d006(563)], this['world'][_0x50d006(564)], this[_0x50d006(472)])), _0x42bd34[_0x50d006(562)](SceneEvents[_0x50d006(505)], this[_0x50d006(506)], this), this[_0x50d006(503)] && this[_0x50d006(503)][_0x50d006(504)](), this[_0x50d006(472)] && this['world'][_0x50d006(504)](), this[_0x50d006(503)] = null, this[_0x50d006(472)] = null;
        },
        'destroy': function () {
            var _0x194ba7 = _0x49fefb;
            this[_0x194ba7(506)](), this[_0x194ba7(469)][_0x194ba7(501)][_0x194ba7(497)][_0x194ba7(562)](SceneEvents[_0x194ba7(502)], this[_0x194ba7(565)], this), this[_0x194ba7(469)] = null, this[_0x194ba7(470)] = null;
        }
    });
function _0x4bd3(_0x487652, _0xfb2acb) {
    return _0x4bd3 = function (_0x5d54cb, _0x4bd33b) {
        _0x5d54cb = _0x5d54cb - 433;
        var _0x8cbf62 = _0x5d54[_0x5d54cb];
        return _0x8cbf62;
    }, _0x4bd3(_0x487652, _0xfb2acb);
}
PluginCache[_0x49fefb(511)](_0x49fefb(566), MatterPhysics, _0x49fefb(567)), module[_0x49fefb(568)] = MatterPhysics;