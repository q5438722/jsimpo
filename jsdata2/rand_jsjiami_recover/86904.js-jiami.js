var ALIGN_CONST = require('../../display/align/const');
var Axes = require('./lib/geometry/Axes');
var Bodies = require('./lib/factory/Bodies');
var Body = require('./lib/body/Body');
var BodyBounds = require('./BodyBounds');
var Bounds = require('./lib/geometry/Bounds');
var Class = require('../../utils/Class');
var Composite = require('./lib/body/Composite');
var Composites = require('./lib/factory/Composites');
var Constraint = require('./lib/constraint/Constraint');
var Detector = require('./lib/collision/Detector');
var DistanceBetween = require('../../math/distance/DistanceBetween');
var Factory = require('./Factory');
var GetFastValue = require('../../utils/object/GetFastValue');
var GetValue = require('../../utils/object/GetValue');
var Grid = require('./lib/collision/Grid');
var MatterAttractors = require('./lib/plugins/MatterAttractors');
var MatterCollisionEvents = require('./lib/plugins/MatterCollisionEvents');
var MatterLib = require('./lib/core/Matter');
var MatterWrap = require('./lib/plugins/MatterWrap');
var Merge = require('../../utils/object/Merge');
var Pair = require('./lib/collision/Pair');
var Pairs = require('./lib/collision/Pairs');
var Plugin = require('./lib/core/Plugin');
var PluginCache = require('../../plugins/PluginCache');
var Query = require('./lib/collision/Query');
var Resolver = require('./lib/collision/Resolver');
var SAT = require('./lib/collision/SAT');
var SceneEvents = require('../../scene/events');
var Svg = require('./lib/geometry/Svg');
var Vector = require('./lib/geometry/Vector');
var Vertices = require('./lib/geometry/Vertices');
var World = require('./World');
var MatterPhysics = new Class({
    'initialize': function MatterPhysics(_0x608555) {
        this['scene'] = _0x608555;
        this['systems'] = _0x608555['sys'];
        this['config'] = this['getConfig']();
        this['world'];
        this['add'];
        this['bodyBounds'];
        this['body'] = Body;
        this['composite'] = Composite;
        this['detector'] = Detector;
        this['grid'] = Grid;
        this['pair'] = Pair;
        this['pairs'] = Pairs;
        this['query'] = Query;
        this['resolver'] = Resolver;
        this['sat'] = SAT;
        this['constraint'] = Constraint;
        this['bodies'] = Bodies;
        this['composites'] = Composites;
        this['axes'] = Axes;
        this['bounds'] = Bounds;
        this['svg'] = Svg;
        this['vector'] = Vector;
        this['vertices'] = Vertices;
        this['verts'] = Vertices;
        this['_tempVec2'] = Vector['create']();
        if (GetValue(this['config'], 'plugins.collisionevents', !![])) {
            if ('UNLwR' === 'UNLwR') {
                this['enableCollisionEventsPlugin']();
            } else {
                if (angle === undefined) {
                    angle = body['angle'];
                }
                vec2['x'] = speed * Math['cos'](angle);
                vec2['y'] = speed * Math['sin'](angle);
                Body['applyForce'](body, {
                    'x': body['position']['x'],
                    'y': body['position']['y']
                }, vec2);
            }
        }
        if (GetValue(this['config'], 'plugins.attractors', ![])) {
            this['enableAttractorPlugin']();
        }
        if (GetValue(this['config'], 'plugins.wrap', ![])) {
            this['enableWrapPlugin']();
        }
        Resolver['_restingThresh'] = GetValue(this['config'], 'restingThresh', 4);
        Resolver['_restingThreshTangent'] = GetValue(this['config'], 'restingThreshTangent', 6);
        Resolver['_positionDampen'] = GetValue(this['config'], 'positionDampen', 0.9);
        Resolver['_positionWarming'] = GetValue(this['config'], 'positionWarming', 0.8);
        Resolver['_frictionNormalMultiplier'] = GetValue(this['config'], 'frictionNormalMultiplier', 5);
        _0x608555['sys']['events']['once'](SceneEvents['BOOT'], this['boot'], this);
        _0x608555['sys']['events']['on'](SceneEvents['START'], this['start'], this);
    },
    'boot': function () {
        this['world'] = new World(this['scene'], this['config']);
        this['add'] = new Factory(this['world']);
        this['bodyBounds'] = new BodyBounds();
        this['systems']['events']['once'](SceneEvents['DESTROY'], this['destroy'], this);
    },
    'start': function () {
        var _0x2481de = '1|0|4|2|3'['split']('|'), _0x5b5b69 = 0;
        while (!![]) {
            switch (_0x2481de[_0x5b5b69++]) {
            case '0':
                var _0x4d8e4d = this['systems']['events'];
                continue;
            case '1':
                if (!this['world']) {
                    this['world'] = new World(this['scene'], this['config']);
                    this['add'] = new Factory(this['world']);
                }
                continue;
            case '2':
                _0x4d8e4d['on'](SceneEvents['POST_UPDATE'], this['world']['postUpdate'], this['world']);
                continue;
            case '3':
                _0x4d8e4d['once'](SceneEvents['SHUTDOWN'], this['shutdown'], this);
                continue;
            case '4':
                _0x4d8e4d['on'](SceneEvents['UPDATE'], this['world']['update'], this['world']);
                continue;
            }
            break;
        }
    },
    'getConfig': function () {
        var _0x553ca6 = this['systems']['game']['config']['physics'];
        var _0x4f3b8f = this['systems']['settings']['physics'];
        var _0x51a614 = Merge(GetFastValue(_0x4f3b8f, 'matter', {}), GetFastValue(_0x553ca6, 'matter', {}));
        return _0x51a614;
    },
    'enableAttractorPlugin': function () {
        Plugin['register'](MatterAttractors);
        Plugin['use'](MatterLib, MatterAttractors);
        return this;
    },
    'enableWrapPlugin': function () {
        Plugin['register'](MatterWrap);
        Plugin['use'](MatterLib, MatterWrap);
        return this;
    },
    'enableCollisionEventsPlugin': function () {
        Plugin['register'](MatterCollisionEvents);
        Plugin['use'](MatterLib, MatterCollisionEvents);
        return this;
    },
    'pause': function () {
        return this['world']['pause']();
    },
    'resume': function () {
        return this['world']['resume']();
    },
    'set60Hz': function () {
        this['world']['getDelta'] = this['world']['update60Hz'];
        this['world']['autoUpdate'] = !![];
        return this;
    },
    'set30Hz': function () {
        this['world']['getDelta'] = this['world']['update30Hz'];
        this['world']['autoUpdate'] = !![];
        return this;
    },
    'step': function (_0xc8dbc4, _0x44ab80) {
        this['world']['step'](_0xc8dbc4, _0x44ab80);
    },
    'containsPoint': function (_0x20bc81, _0x49272d, _0x2dee7a) {
        _0x20bc81 = this['getMatterBodies'](_0x20bc81);
        var _0xdf2220 = Vector['create'](_0x49272d, _0x2dee7a);
        var _0x28da3d = Query['point'](_0x20bc81, _0xdf2220);
        return _0x28da3d['length'] > 0 ? !![] : ![];
    },
    'intersectPoint': function (_0x163ac1, _0x437732, _0x38dca5) {
        _0x38dca5 = this['getMatterBodies'](_0x38dca5);
        var _0xf75a0c = Vector['create'](_0x163ac1, _0x437732);
        var _0x1fea52 = [];
        var _0x53fe90 = Query['point'](_0x38dca5, _0xf75a0c);
        _0x53fe90['forEach'](function (_0x374fd8) {
            if ('DobPb' !== 'twrQP') {
                if (_0x1fea52['indexOf'](_0x374fd8) === -1) {
                    _0x1fea52['push'](_0x374fd8);
                }
            } else {
                Plugin['register'](MatterAttractors);
                Plugin['use'](MatterLib, MatterAttractors);
                return this;
            }
        });
        return _0x1fea52;
    },
    'intersectRect': function (_0x1e3ce0, _0x46b459, _0x2e4953, _0x27c710, _0x75d4a3, _0x466f32) {
        if (_0x75d4a3 === undefined) {
            if ('BgpMG' !== 'BgpMG') {
                processCallback = null;
            } else {
                _0x75d4a3 = ![];
            }
        }
        _0x466f32 = this['getMatterBodies'](_0x466f32);
        var _0x3c1294 = {
            'min': {
                'x': _0x1e3ce0,
                'y': _0x46b459
            },
            'max': {
                'x': _0x1e3ce0 + _0x2e4953,
                'y': _0x46b459 + _0x27c710
            }
        };
        var _0x1fa1c7 = [];
        var _0x3c3dde = Query['region'](_0x466f32, _0x3c1294, _0x75d4a3);
        _0x3c3dde['forEach'](function (_0x286313) {
            if (_0x1fa1c7['indexOf'](_0x286313) === -1) {
                _0x1fa1c7['push'](_0x286313);
            }
        });
        return _0x1fa1c7;
    },
    'intersectRay': function (_0x1ee814, _0xd93865, _0x309ee4, _0x3763ef, _0x4f4aae, _0x31fd27) {
        var _0x4f6185 = '4|0|5|3|2|1'['split']('|'), _0x3e41dc = 0;
        while (!![]) {
            switch (_0x4f6185[_0x3e41dc++]) {
            case '0':
                _0x31fd27 = this['getMatterBodies'](_0x31fd27);
                continue;
            case '1':
                return _0x49b8e2;
            case '2':
                for (var _0xba9356 = 0; _0xba9356 < _0x21aa32['length']; _0xba9356++) {
                    _0x49b8e2['push'](_0x21aa32[_0xba9356]['body']);
                }
                continue;
            case '3':
                var _0x21aa32 = Query['ray'](_0x31fd27, Vector['create'](_0x1ee814, _0xd93865), Vector['create'](_0x309ee4, _0x3763ef), _0x4f4aae);
                continue;
            case '4':
                if (_0x4f4aae === undefined) {
                    _0x4f4aae = 1;
                }
                continue;
            case '5':
                var _0x49b8e2 = [];
                continue;
            }
            break;
        }
    },
    'intersectBody': function (_0x5cc5da, _0x2632c3) {
        var _0x592feb = '3|0|4|2|1'['split']('|'), _0x190fb5 = 0;
        while (!![]) {
            switch (_0x592feb[_0x190fb5++]) {
            case '0':
                var _0x64f1d3 = [];
                continue;
            case '1':
                return _0x64f1d3;
            case '2':
                for (var _0x5db532 = 0; _0x5db532 < _0xfb5708['length']; _0x5db532++) {
                    var _0x5d0ab9 = _0xfb5708[_0x5db532];
                    if (_0x5d0ab9['bodyA'] === _0x5cc5da) {
                        _0x64f1d3['push'](_0x5d0ab9['bodyB']);
                    } else {
                        _0x64f1d3['push'](_0x5d0ab9['bodyA']);
                    }
                }
                continue;
            case '3':
                _0x2632c3 = this['getMatterBodies'](_0x2632c3);
                continue;
            case '4':
                var _0xfb5708 = Query['collides'](_0x5cc5da, _0x2632c3);
                continue;
            }
            break;
        }
    },
    'overlap': function (_0x1fd1fb, _0x3c18cc, _0x145607, _0x283545, _0x458140) {
        if (_0x145607 === undefined) {
            _0x145607 = null;
        }
        if (_0x283545 === undefined) {
            _0x283545 = null;
        }
        if (_0x458140 === undefined) {
            if ('Myano' === 'uVEGg') {
                vec2['x'] = body['velocity']['x'];
                Body['setVelocity'](body, vec2);
            } else {
                _0x458140 = _0x145607;
            }
        }
        if (!Array['isArray'](_0x1fd1fb)) {
            _0x1fd1fb = [_0x1fd1fb];
        }
        _0x1fd1fb = this['getMatterBodies'](_0x1fd1fb);
        _0x3c18cc = this['getMatterBodies'](_0x3c18cc);
        var _0xde440f = ![];
        for (var _0x55498c = 0; _0x55498c < _0x1fd1fb['length']; _0x55498c++) {
            if ('hgsDU' === 'hgsDU') {
                var _0x4b078e = _0x1fd1fb[_0x55498c];
                var _0x2cc388 = Query['collides'](_0x4b078e, _0x3c18cc);
                for (var _0x136d04 = 0; _0x136d04 < _0x2cc388['length']; _0x136d04++) {
                    var _0x24b0c9 = _0x2cc388[_0x136d04];
                    var _0x2437a3 = _0x24b0c9['bodyA']['id'] === _0x4b078e['id'] ? _0x24b0c9['bodyB'] : _0x24b0c9['bodyA'];
                    if (!_0x283545 || _0x283545['call'](_0x458140, _0x4b078e, _0x2437a3, _0x24b0c9)) {
                        _0xde440f = !![];
                        if (_0x145607) {
                            if ('kOZUV' === 'kOZUV') {
                                _0x145607['call'](_0x458140, _0x4b078e, _0x2437a3, _0x24b0c9);
                            } else {
                                _0x3c18cc = this['getMatterBodies'](_0x3c18cc);
                                var _0x333137 = this['_tempVec2'];
                                _0x3c18cc['forEach'](function (_0x374f15) {
                                    if (angle === undefined) {
                                        angle = _0x374f15['angle'];
                                    }
                                    _0x333137['x'] = speed * Math['cos'](angle);
                                    _0x333137['y'] = speed * Math['sin'](angle);
                                    Body['applyForce'](_0x374f15, position, _0x333137);
                                });
                                return this;
                            }
                        } else if (!_0x283545) {
                            if ('VasnC' === 'VasnC') {
                                return !![];
                            } else {
                                angle = body['angle'];
                            }
                        }
                    }
                }
            } else {
                _0x1fd1fb = [_0x1fd1fb];
            }
        }
        return _0xde440f;
    },
    'setCollisionCategory': function (_0x508097, _0x2e2457) {
        _0x508097 = this['getMatterBodies'](_0x508097);
        _0x508097['forEach'](function (_0x326715) {
            _0x326715['collisionFilter']['category'] = _0x2e2457;
        });
        return this;
    },
    'setCollisionGroup': function (_0xd80c9a, _0x1b4421) {
        _0xd80c9a = this['getMatterBodies'](_0xd80c9a);
        _0xd80c9a['forEach'](function (_0x2bba0d) {
            if ('cqfxd' !== 'gjnHI') {
                _0x2bba0d['collisionFilter']['group'] = _0x1b4421;
            } else {
                this['world']['getDelta'] = this['world']['update60Hz'];
                this['world']['autoUpdate'] = !![];
                return this;
            }
        });
        return this;
    },
    'setCollidesWith': function (_0x4c795b, _0x1aa106) {
        _0x4c795b = this['getMatterBodies'](_0x4c795b);
        var _0x5120d6 = 0;
        if (!Array['isArray'](_0x1aa106)) {
            if ('kaWHL' !== 'kaWHL') {
                eventEmitter['off'](SceneEvents['UPDATE'], this['world']['update'], this['world']);
                eventEmitter['off'](SceneEvents['POST_UPDATE'], this['world']['postUpdate'], this['world']);
            } else {
                _0x5120d6 = _0x1aa106;
            }
        } else {
            if ('SsXFg' === 'aEUCQ') {
                if (!_0x4c795b) {
                    return this['world']['getAllBodies']();
                }
                if (!Array['isArray'](_0x4c795b)) {
                    _0x4c795b = [_0x4c795b];
                }
                var _0x4b5eda = [];
                for (var _0x335df0 = 0; _0x335df0 < _0x4c795b['length']; _0x335df0++) {
                    var _0x2fec85 = _0x4c795b[_0x335df0]['hasOwnProperty']('body') ? _0x4c795b[_0x335df0]['body'] : _0x4c795b[_0x335df0];
                    _0x4b5eda['push'](_0x2fec85);
                }
                return _0x4b5eda;
            } else {
                for (var _0x411f4c = 0; _0x411f4c < _0x1aa106['length']; _0x411f4c++) {
                    if ('kXlVj' === 'rVCvR') {
                        Body['setPosition'](body, pos);
                    } else {
                        _0x5120d6 |= _0x1aa106[_0x411f4c];
                    }
                }
            }
        }
        _0x4c795b['forEach'](function (_0x13ef81) {
            if ('QUTJL' !== 'QUTJL') {
                return this['world']['resume']();
            } else {
                _0x13ef81['collisionFilter']['mask'] = _0x5120d6;
            }
        });
        return this;
    },
    'getMatterBodies': function (_0x19c73a) {
        if (!_0x19c73a) {
            return this['world']['getAllBodies']();
        }
        if (!Array['isArray'](_0x19c73a)) {
            _0x19c73a = [_0x19c73a];
        }
        var _0x333a17 = [];
        for (var _0x14b960 = 0; _0x14b960 < _0x19c73a['length']; _0x14b960++) {
            var _0x17874b = _0x19c73a[_0x14b960]['hasOwnProperty']('body') ? _0x19c73a[_0x14b960]['body'] : _0x19c73a[_0x14b960];
            _0x333a17['push'](_0x17874b);
        }
        return _0x333a17;
    },
    'setVelocity': function (_0x53e669, _0x27acdb, _0xb65e54) {
        _0x53e669 = this['getMatterBodies'](_0x53e669);
        var _0x1a810f = this['_tempVec2'];
        _0x1a810f['x'] = _0x27acdb;
        _0x1a810f['y'] = _0xb65e54;
        _0x53e669['forEach'](function (_0x36e77a) {
            Body['setVelocity'](_0x36e77a, _0x1a810f);
        });
        return this;
    },
    'setVelocityX': function (_0x511940, _0x1cfde9) {
        _0x511940 = this['getMatterBodies'](_0x511940);
        var _0x46213a = this['_tempVec2'];
        _0x46213a['x'] = _0x1cfde9;
        _0x511940['forEach'](function (_0x59a6c5) {
            if ('pRkcX' !== 'CrSau') {
                _0x46213a['y'] = _0x59a6c5['velocity']['y'];
                Body['setVelocity'](_0x59a6c5, _0x46213a);
            } else {
                var _0x3d12e2 = collisions[c];
                var _0x2ace05 = _0x3d12e2['bodyA']['id'] === entry['id'] ? _0x3d12e2['bodyB'] : _0x3d12e2['bodyA'];
                if (!processCallback || processCallback['call'](callbackContext, entry, _0x2ace05, _0x3d12e2)) {
                    match = !![];
                    if (overlapCallback) {
                        overlapCallback['call'](callbackContext, entry, _0x2ace05, _0x3d12e2);
                    } else if (!processCallback) {
                        return !![];
                    }
                }
            }
        });
        return this;
    },
    'setVelocityY': function (_0x4706e8, _0x658571) {
        _0x4706e8 = this['getMatterBodies'](_0x4706e8);
        var _0x34d26c = this['_tempVec2'];
        _0x34d26c['y'] = _0x658571;
        _0x4706e8['forEach'](function (_0x11159e) {
            _0x34d26c['x'] = _0x11159e['velocity']['x'];
            Body['setVelocity'](_0x11159e, _0x34d26c);
        });
        return this;
    },
    'setAngularVelocity': function (_0x215db9, _0x23bb14) {
        _0x215db9 = this['getMatterBodies'](_0x215db9);
        _0x215db9['forEach'](function (_0x4b2192) {
            if ('VCAyK' !== 'VCAyK') {
                var _0x2842f1 = '2|0|4|1|3'['split']('|'), _0x59ee89 = 0;
                while (!![]) {
                    switch (_0x2842f1[_0x59ee89++]) {
                    case '0':
                        var _0x274364 = this['_tempVec2'];
                        continue;
                    case '1':
                        _0x215db9['forEach'](function (_0x4f96d2) {
                            _0x274364['y'] = _0x4f96d2['velocity']['y'];
                            Body['setVelocity'](_0x4f96d2, _0x274364);
                        });
                        continue;
                    case '2':
                        _0x215db9 = this['getMatterBodies'](_0x215db9);
                        continue;
                    case '3':
                        return this;
                    case '4':
                        _0x274364['x'] = x;
                        continue;
                    }
                    break;
                }
            } else {
                Body['setAngularVelocity'](_0x4b2192, _0x23bb14);
            }
        });
        return this;
    },
    'applyForce': function (_0x43be22, _0x55ab01) {
        _0x43be22 = this['getMatterBodies'](_0x43be22);
        var _0x4aa6d3 = this['_tempVec2'];
        _0x43be22['forEach'](function (_0x490dd3) {
            _0x4aa6d3['x'] = _0x490dd3['position']['x'];
            _0x4aa6d3['y'] = _0x490dd3['position']['y'];
            Body['applyForce'](_0x490dd3, _0x4aa6d3, _0x55ab01);
        });
        return this;
    },
    'applyForceFromPosition': function (_0x4019a8, _0x263479, _0x15e43d, _0x2184a6) {
        _0x4019a8 = this['getMatterBodies'](_0x4019a8);
        var _0x12d047 = this['_tempVec2'];
        _0x4019a8['forEach'](function (_0x1e8904) {
            if ('JeMAa' !== 'JeMAa') {
                output['push'](_0x1e8904);
            } else {
                if (_0x2184a6 === undefined) {
                    if ('ooMev' === 'WGics') {
                        _0x4019a8 = this['getMatterBodies'](_0x4019a8);
                        var _0xce8b68 = [];
                        var _0x2d0f1d = Query['collides'](_0x1e8904, _0x4019a8);
                        for (var _0x4504e7 = 0; _0x4504e7 < _0x2d0f1d['length']; _0x4504e7++) {
                            var _0x1763ae = _0x2d0f1d[_0x4504e7];
                            if (_0x1763ae['bodyA'] === _0x1e8904) {
                                _0xce8b68['push'](_0x1763ae['bodyB']);
                            } else {
                                _0xce8b68['push'](_0x1763ae['bodyA']);
                            }
                        }
                        return _0xce8b68;
                    } else {
                        _0x2184a6 = _0x1e8904['angle'];
                    }
                }
                _0x12d047['x'] = _0x15e43d * Math['cos'](_0x2184a6);
                _0x12d047['y'] = _0x15e43d * Math['sin'](_0x2184a6);
                Body['applyForce'](_0x1e8904, _0x263479, _0x12d047);
            }
        });
        return this;
    },
    'applyForceFromAngle': function (_0x10d143, _0x49dc47, _0x4d039a) {
        _0x10d143 = this['getMatterBodies'](_0x10d143);
        var _0x1b0ea6 = this['_tempVec2'];
        _0x10d143['forEach'](function (_0x214320) {
            if (_0x4d039a === undefined) {
                _0x4d039a = _0x214320['angle'];
            }
            _0x1b0ea6['x'] = _0x49dc47 * Math['cos'](_0x4d039a);
            _0x1b0ea6['y'] = _0x49dc47 * Math['sin'](_0x4d039a);
            Body['applyForce'](_0x214320, {
                'x': _0x214320['position']['x'],
                'y': _0x214320['position']['y']
            }, _0x1b0ea6);
        });
        return this;
    },
    'getConstraintLength': function (_0x4b51d3) {
        var _0x1f6f6e = '0|5|6|4|2|1|3'['split']('|'), _0x36bf4d = 0;
        while (!![]) {
            switch (_0x1f6f6e[_0x36bf4d++]) {
            case '0':
                var _0x1819aa = _0x4b51d3['pointA']['x'];
                continue;
            case '1':
                if (_0x4b51d3['bodyB']) {
                    _0x46d97c += _0x4b51d3['bodyB']['position']['x'];
                    _0x511be8 += _0x4b51d3['bodyB']['position']['y'];
                }
                continue;
            case '2':
                if (_0x4b51d3['bodyA']) {
                    _0x1819aa += _0x4b51d3['bodyA']['position']['x'];
                    _0x95df59 += _0x4b51d3['bodyA']['position']['y'];
                }
                continue;
            case '3':
                return DistanceBetween(_0x1819aa, _0x95df59, _0x46d97c, _0x511be8);
            case '4':
                var _0x511be8 = _0x4b51d3['pointB']['y'];
                continue;
            case '5':
                var _0x95df59 = _0x4b51d3['pointA']['y'];
                continue;
            case '6':
                var _0x46d97c = _0x4b51d3['pointB']['x'];
                continue;
            }
            break;
        }
    },
    'alignBody': function (_0x384509, _0x5a071b, _0x5831fc, _0x29124a) {
        _0x384509 = _0x384509['hasOwnProperty']('body') ? _0x384509['body'] : _0x384509;
        var _0x1125b0;
        switch (_0x29124a) {
        case ALIGN_CONST['TOP_LEFT']:
        case ALIGN_CONST['LEFT_TOP']:
            _0x1125b0 = this['bodyBounds']['getTopLeft'](_0x384509, _0x5a071b, _0x5831fc);
            break;
        case ALIGN_CONST['TOP_CENTER']:
            _0x1125b0 = this['bodyBounds']['getTopCenter'](_0x384509, _0x5a071b, _0x5831fc);
            break;
        case ALIGN_CONST['TOP_RIGHT']:
        case ALIGN_CONST['RIGHT_TOP']:
            _0x1125b0 = this['bodyBounds']['getTopRight'](_0x384509, _0x5a071b, _0x5831fc);
            break;
        case ALIGN_CONST['LEFT_CENTER']:
            _0x1125b0 = this['bodyBounds']['getLeftCenter'](_0x384509, _0x5a071b, _0x5831fc);
            break;
        case ALIGN_CONST['CENTER']:
            _0x1125b0 = this['bodyBounds']['getCenter'](_0x384509, _0x5a071b, _0x5831fc);
            break;
        case ALIGN_CONST['RIGHT_CENTER']:
            _0x1125b0 = this['bodyBounds']['getRightCenter'](_0x384509, _0x5a071b, _0x5831fc);
            break;
        case ALIGN_CONST['LEFT_BOTTOM']:
        case ALIGN_CONST['BOTTOM_LEFT']:
            _0x1125b0 = this['bodyBounds']['getBottomLeft'](_0x384509, _0x5a071b, _0x5831fc);
            break;
        case ALIGN_CONST['BOTTOM_CENTER']:
            _0x1125b0 = this['bodyBounds']['getBottomCenter'](_0x384509, _0x5a071b, _0x5831fc);
            break;
        case ALIGN_CONST['BOTTOM_RIGHT']:
        case ALIGN_CONST['RIGHT_BOTTOM']:
            _0x1125b0 = this['bodyBounds']['getBottomRight'](_0x384509, _0x5a071b, _0x5831fc);
            break;
        }
        if (_0x1125b0) {
            Body['setPosition'](_0x384509, _0x1125b0);
        }
        return this;
    },
    'shutdown': function () {
        var _0x1a0c7c = this['systems']['events'];
        if (this['world']) {
            _0x1a0c7c['off'](SceneEvents['UPDATE'], this['world']['update'], this['world']);
            _0x1a0c7c['off'](SceneEvents['POST_UPDATE'], this['world']['postUpdate'], this['world']);
        }
        _0x1a0c7c['off'](SceneEvents['SHUTDOWN'], this['shutdown'], this);
        if (this['add']) {
            this['add']['destroy']();
        }
        if (this['world']) {
            this['world']['destroy']();
        }
        this['add'] = null;
        this['world'] = null;
    },
    'destroy': function () {
        this['shutdown']();
        this['scene']['sys']['events']['off'](SceneEvents['START'], this['start'], this);
        this['scene'] = null;
        this['systems'] = null;
    }
});
PluginCache['register']('MatterPhysics', MatterPhysics, 'matterPhysics');
module['exports'] = MatterPhysics;