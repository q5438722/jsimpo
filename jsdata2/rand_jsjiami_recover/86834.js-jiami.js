var AngleBetweenPoints = require('../../math/angle/BetweenPoints');
var Body = require('./Body');
var Clamp = require('../../math/Clamp');
var Class = require('../../utils/Class');
var Collider = require('./Collider');
var CONST = require('./const');
var DistanceBetween = require('../../math/distance/DistanceBetween');
var EventEmitter = require('eventemitter3');
var Events = require('./events');
var FuzzyEqual = require('../../math/fuzzy/Equal');
var FuzzyGreaterThan = require('../../math/fuzzy/GreaterThan');
var FuzzyLessThan = require('../../math/fuzzy/LessThan');
var GetOverlapX = require('./GetOverlapX');
var GetOverlapY = require('./GetOverlapY');
var GetTilesWithinWorldXY = require('../../tilemaps/components/GetTilesWithinWorldXY');
var GetValue = require('../../utils/object/GetValue');
var MATH_CONST = require('../../math/const');
var ProcessQueue = require('../../structs/ProcessQueue');
var ProcessTileCallbacks = require('./tilemap/ProcessTileCallbacks');
var Rectangle = require('../../geom/rectangle/Rectangle');
var RTree = require('../../structs/RTree');
var SeparateTile = require('./tilemap/SeparateTile');
var SeparateX = require('./SeparateX');
var SeparateY = require('./SeparateY');
var Set = require('../../structs/Set');
var StaticBody = require('./StaticBody');
var TileIntersectsBody = require('./tilemap/TileIntersectsBody');
var TransformMatrix = require('../../gameobjects/components/TransformMatrix');
var Vector2 = require('../../math/Vector2');
var Wrap = require('../../math/Wrap');
var World = new Class({
    'Extends': EventEmitter,
    'initialize': function World(_0x32968c, _0x3538c8) {
        EventEmitter['call'](this);
        this['scene'] = _0x32968c;
        this['bodies'] = new Set();
        this['staticBodies'] = new Set();
        this['pendingDestroy'] = new Set();
        this['colliders'] = new ProcessQueue();
        this['gravity'] = new Vector2(GetValue(_0x3538c8, 'gravity.x', 0), GetValue(_0x3538c8, 'gravity.y', 0));
        this['bounds'] = new Rectangle(GetValue(_0x3538c8, 'x', 0), GetValue(_0x3538c8, 'y', 0), GetValue(_0x3538c8, 'width', _0x32968c['sys']['scale']['width']), GetValue(_0x3538c8, 'height', _0x32968c['sys']['scale']['height']));
        this['checkCollision'] = {
            'up': GetValue(_0x3538c8, 'checkCollision.up', !![]),
            'down': GetValue(_0x3538c8, 'checkCollision.down', !![]),
            'left': GetValue(_0x3538c8, 'checkCollision.left', !![]),
            'right': GetValue(_0x3538c8, 'checkCollision.right', !![])
        };
        this['fps'] = GetValue(_0x3538c8, 'fps', 60);
        this['fixedStep'] = GetValue(_0x3538c8, 'fixedStep', !![]);
        this['_elapsed'] = 0;
        this['_frameTime'] = 1 / this['fps'];
        this['_frameTimeMS'] = 1000 * this['_frameTime'];
        this['stepsLastFrame'] = 0;
        this['timeScale'] = GetValue(_0x3538c8, 'timeScale', 1);
        this['OVERLAP_BIAS'] = GetValue(_0x3538c8, 'overlapBias', 4);
        this['TILE_BIAS'] = GetValue(_0x3538c8, 'tileBias', 16);
        this['forceX'] = GetValue(_0x3538c8, 'forceX', ![]);
        this['isPaused'] = GetValue(_0x3538c8, 'isPaused', ![]);
        this['_total'] = 0;
        this['drawDebug'] = GetValue(_0x3538c8, 'debug', ![]);
        this['debugGraphic'];
        this['defaults'] = {
            'debugShowBody': GetValue(_0x3538c8, 'debugShowBody', !![]),
            'debugShowStaticBody': GetValue(_0x3538c8, 'debugShowStaticBody', !![]),
            'debugShowVelocity': GetValue(_0x3538c8, 'debugShowVelocity', !![]),
            'bodyDebugColor': GetValue(_0x3538c8, 'debugBodyColor', 16711935),
            'staticBodyDebugColor': GetValue(_0x3538c8, 'debugStaticBodyColor', 255),
            'velocityDebugColor': GetValue(_0x3538c8, 'debugVelocityColor', 65280)
        };
        this['maxEntries'] = GetValue(_0x3538c8, 'maxEntries', 16);
        this['useTree'] = GetValue(_0x3538c8, 'useTree', !![]);
        this['tree'] = new RTree(this['maxEntries']);
        this['staticTree'] = new RTree(this['maxEntries']);
        this['treeMinMax'] = {
            'minX': 0,
            'minY': 0,
            'maxX': 0,
            'maxY': 0
        };
        this['_tempMatrix'] = new TransformMatrix();
        this['_tempMatrix2'] = new TransformMatrix();
        if (this['drawDebug']) {
            if ('DeTll' === 'tuBBP') {
                body = bodies[i];
                if (body['enable']) {
                    body['postUpdate']();
                }
            } else {
                this['createDebugGraphic']();
            }
        }
    },
    'enable': function (_0x136f89, _0x16b7f5) {
        if (_0x16b7f5 === undefined) {
            _0x16b7f5 = CONST['DYNAMIC_BODY'];
        }
        if (!Array['isArray'](_0x136f89)) {
            if ('DaTPP' !== 'ppwdG') {
                _0x136f89 = [_0x136f89];
            } else {
                this['emit'](Events['TILE_OVERLAP'], sprite, tile, body);
            }
        }
        for (var _0x1e83e0 = 0; _0x1e83e0 < _0x136f89['length']; _0x1e83e0++) {
            var _0x410139 = _0x136f89[_0x1e83e0];
            if (_0x410139['isParent']) {
                if ('DhBkt' !== 'quhWy') {
                    var _0x59657f = _0x410139['getChildren']();
                    for (var _0x53badf = 0; _0x53badf < _0x59657f['length']; _0x53badf++) {
                        if ('qlDIK' === 'gxExL') {
                            velocityY = 0;
                        } else {
                            var _0x241337 = _0x59657f[_0x53badf];
                            if (_0x241337['isParent']) {
                                if ('YDXuA' !== 'alRWL') {
                                    this['enable'](_0x241337, _0x16b7f5);
                                } else {
                                    var _0x87afaa = _0x59657f[_0x53badf];
                                    if (_0x87afaa['isParent']) {
                                        this['enable'](_0x87afaa, _0x16b7f5);
                                    } else {
                                        this['enableBody'](_0x87afaa, _0x16b7f5);
                                    }
                                }
                            } else {
                                this['enableBody'](_0x241337, _0x16b7f5);
                            }
                        }
                    }
                } else {
                    overlap = DistanceBetween(circle['x'], circle['y'], rect['x'], rect['y']) - circle['radius'];
                }
            } else {
                if ('NaMiq' === 'gKjcY') {
                    this['collideSpriteVsGroup'](_0x59657f[_0x1e83e0], group2, collideCallback, processCallback, callbackContext, overlapOnly);
                } else {
                    this['enableBody'](_0x410139, _0x16b7f5);
                }
            }
        }
    },
    'enableBody': function (_0x543a05, _0x24d693) {
        if (_0x24d693 === undefined) {
            _0x24d693 = CONST['DYNAMIC_BODY'];
        }
        if (!_0x543a05['body']) {
            if (_0x24d693 === CONST['DYNAMIC_BODY']) {
                _0x543a05['body'] = new Body(this, _0x543a05);
            } else if (_0x24d693 === CONST['STATIC_BODY']) {
                _0x543a05['body'] = new StaticBody(this, _0x543a05);
            }
        }
        this['add'](_0x543a05['body']);
        return _0x543a05;
    },
    'add': function (_0x574573) {
        if (_0x574573['physicsType'] === CONST['DYNAMIC_BODY']) {
            this['bodies']['set'](_0x574573);
        } else if (_0x574573['physicsType'] === CONST['STATIC_BODY']) {
            this['staticBodies']['set'](_0x574573);
            this['staticTree']['insert'](_0x574573);
        }
        _0x574573['enable'] = !![];
        return _0x574573;
    },
    'disable': function (_0x9b0b51) {
        if (!Array['isArray'](_0x9b0b51)) {
            _0x9b0b51 = [_0x9b0b51];
        }
        for (var _0x8b4b9e = 0; _0x8b4b9e < _0x9b0b51['length']; _0x8b4b9e++) {
            if ('SNcRz' === 'Uldgq') {
                this['collideHandler'](object1, object2[_0x8b4b9e], collideCallback, processCallback, callbackContext, overlapOnly);
            } else {
                var _0x27f5b5 = _0x9b0b51[_0x8b4b9e];
                if (_0x27f5b5['isParent']) {
                    if ('ccQLb' === 'MxKAp') {
                        collideCallback = null;
                    } else {
                        var _0x5824f9 = _0x27f5b5['getChildren']();
                        for (var _0x200e1d = 0; _0x200e1d < _0x5824f9['length']; _0x200e1d++) {
                            var _0x276937 = _0x5824f9[_0x200e1d];
                            if (_0x276937['isParent']) {
                                if ('qksvd' !== 'qksvd') {
                                    if (!sprite['body']['enable'] || tiles['length'] === 0) {
                                        return ![];
                                    } else {
                                        return this['collideSpriteVsTilesHandler'](sprite, tiles, collideCallback, processCallback, callbackContext, ![], ![]);
                                    }
                                } else {
                                    this['disable'](_0x276937);
                                }
                            } else {
                                this['disableBody'](_0x276937['body']);
                            }
                        }
                    }
                } else {
                    if ('AGqVI' !== 'DKHsB') {
                        this['disableBody'](_0x27f5b5['body']);
                    } else {
                        body = bodies[_0x8b4b9e];
                        if (body['enable']) {
                            body['preUpdate'](willStep, fixedDelta);
                        }
                    }
                }
            }
        }
    },
    'disableBody': function (_0x12babd) {
        this['remove'](_0x12babd);
        _0x12babd['enable'] = ![];
    },
    'remove': function (_0x589ffc) {
        if (_0x589ffc['physicsType'] === CONST['DYNAMIC_BODY']) {
            if ('ttZAI' !== 'ttZAI') {
                _0x589ffc['update'](delta);
            } else {
                this['tree']['remove'](_0x589ffc);
                this['bodies']['delete'](_0x589ffc);
            }
        } else if (_0x589ffc['physicsType'] === CONST['STATIC_BODY']) {
            this['staticBodies']['delete'](_0x589ffc);
            this['staticTree']['remove'](_0x589ffc);
        }
    },
    'createDebugGraphic': function () {
        var _0x24f97a = '0|1|2|4|3'['split']('|'), _0x36de95 = 0;
        while (!![]) {
            switch (_0x24f97a[_0x36de95++]) {
            case '0':
                var _0x2202e4 = this['scene']['sys']['add']['graphics']({
                    'x': 0,
                    'y': 0
                });
                continue;
            case '1':
                _0x2202e4['setDepth'](Number['MAX_VALUE']);
                continue;
            case '2':
                this['debugGraphic'] = _0x2202e4;
                continue;
            case '3':
                return _0x2202e4;
            case '4':
                this['drawDebug'] = !![];
                continue;
            }
            break;
        }
    },
    'setBounds': function (_0x386fed, _0xe2ec47, _0x26ef03, _0x122b70, _0x226c70, _0x6720d1, _0x5d21dc, _0x30feff) {
        this['bounds']['setTo'](_0x386fed, _0xe2ec47, _0x26ef03, _0x122b70);
        if (_0x226c70 !== undefined) {
            this['setBoundsCollision'](_0x226c70, _0x6720d1, _0x5d21dc, _0x30feff);
        }
        return this;
    },
    'setBoundsCollision': function (_0x33d1cf, _0x4e642f, _0x350d1e, _0x667a4b) {
        if (_0x33d1cf === undefined) {
            _0x33d1cf = !![];
        }
        if (_0x4e642f === undefined) {
            if ('AKgSG' === 'YjSBH') {
                collideCallback['call'](callbackContext, bodyA['gameObject'], bodyB['gameObject']);
            } else {
                _0x4e642f = !![];
            }
        }
        if (_0x350d1e === undefined) {
            if ('utbeY' !== 'utbeY') {
                body = bodies[i];
                if (body['enable']) {
                    body['update'](delta);
                }
            } else {
                _0x350d1e = !![];
            }
        }
        if (_0x667a4b === undefined) {
            if ('tMizC' === 'tMizC') {
                _0x667a4b = !![];
            } else {
                return ![];
            }
        }
        this['checkCollision']['left'] = _0x33d1cf;
        this['checkCollision']['right'] = _0x4e642f;
        this['checkCollision']['up'] = _0x350d1e;
        this['checkCollision']['down'] = _0x667a4b;
        return this;
    },
    'pause': function () {
        this['isPaused'] = !![];
        this['emit'](Events['PAUSE']);
        return this;
    },
    'resume': function () {
        this['isPaused'] = ![];
        this['emit'](Events['RESUME']);
        return this;
    },
    'addCollider': function (_0x39b732, _0x26ce94, _0x1df2df, _0x36d2e5, _0x516768) {
        if (_0x1df2df === undefined) {
            _0x1df2df = null;
        }
        if (_0x36d2e5 === undefined) {
            _0x36d2e5 = null;
        }
        if (_0x516768 === undefined) {
            if ('SUtgO' !== 'kTqxg') {
                _0x516768 = _0x1df2df;
            } else {
                var _0x2fd1a2 = (layerData['tileWidth'] - layerData['baseTileWidth']) * tilemapLayer['scaleX'];
                x -= _0x2fd1a2;
                w += _0x2fd1a2;
            }
        }
        var _0x36917a = new Collider(this, ![], _0x39b732, _0x26ce94, _0x1df2df, _0x36d2e5, _0x516768);
        this['colliders']['add'](_0x36917a);
        return _0x36917a;
    },
    'addOverlap': function (_0x12854d, _0x321f32, _0x1ed6a9, _0x19563a, _0x31c174) {
        if (_0x1ed6a9 === undefined) {
            if ('CEzYb' === 'aFWID') {
                if (body['allowRotation']) {
                    this['computeAngularVelocity'](body, delta);
                }
                this['computeVelocity'](body, delta);
            } else {
                _0x1ed6a9 = null;
            }
        }
        if (_0x19563a === undefined) {
            _0x19563a = null;
        }
        if (_0x31c174 === undefined) {
            _0x31c174 = _0x1ed6a9;
        }
        var _0x54d9c1 = new Collider(this, !![], _0x12854d, _0x321f32, _0x1ed6a9, _0x19563a, _0x31c174);
        this['colliders']['add'](_0x54d9c1);
        return _0x54d9c1;
    },
    'removeCollider': function (_0x285032) {
        this['colliders']['remove'](_0x285032);
        return this;
    },
    'setFPS': function (_0x23d43f) {
        this['fps'] = _0x23d43f;
        this['_frameTime'] = 1 / this['fps'];
        this['_frameTimeMS'] = 1000 * this['_frameTime'];
        return this;
    },
    'update': function (_0x290c76, _0x46325c) {
        if (this['isPaused'] || this['bodies']['size'] === 0) {
            return;
        }
        var _0x3ba592;
        var _0x46327e = this['_frameTime'];
        var _0x598653 = this['_frameTimeMS'] * this['timeScale'];
        this['_elapsed'] += _0x46325c;
        var _0x3aa3fb;
        var _0x20b2ba = this['bodies']['entries'];
        var _0x541a01 = this['_elapsed'] >= _0x598653;
        if (!this['fixedStep']) {
            _0x46327e = _0x46325c * 0.001;
            _0x541a01 = !![];
            this['_elapsed'] = 0;
        }
        for (_0x3ba592 = 0; _0x3ba592 < _0x20b2ba['length']; _0x3ba592++) {
            _0x3aa3fb = _0x20b2ba[_0x3ba592];
            if (_0x3aa3fb['enable']) {
                if ('ahQSc' === 'XRdBZ') {
                    velocityX = 0;
                } else {
                    _0x3aa3fb['preUpdate'](_0x541a01, _0x46327e);
                }
            }
        }
        if (_0x541a01) {
            this['_elapsed'] -= _0x598653;
            this['stepsLastFrame'] = 1;
            if (this['useTree']) {
                this['tree']['clear']();
                this['tree']['load'](_0x20b2ba);
            }
            var _0x3d6e98 = this['colliders']['update']();
            for (_0x3ba592 = 0; _0x3ba592 < _0x3d6e98['length']; _0x3ba592++) {
                if ('BSpeQ' === 'cRCii') {
                    resultX = SeparateX(body1, body2, overlapOnly, this['OVERLAP_BIAS']);
                } else {
                    var _0x27353e = _0x3d6e98[_0x3ba592];
                    if (_0x27353e['active']) {
                        _0x27353e['update']();
                    }
                }
            }
            this['emit'](Events['WORLD_STEP'], _0x46327e);
        }
        while (this['_elapsed'] >= _0x598653) {
            this['_elapsed'] -= _0x598653;
            this['step'](_0x46327e);
        }
    },
    'step': function (_0x4d37c3) {
        var _0x4b48cd;
        var _0xd12502;
        var _0x598b04 = this['bodies']['entries'];
        var _0x408a0d = _0x598b04['length'];
        for (_0x4b48cd = 0; _0x4b48cd < _0x408a0d; _0x4b48cd++) {
            _0xd12502 = _0x598b04[_0x4b48cd];
            if (_0xd12502['enable']) {
                _0xd12502['update'](_0x4d37c3);
            }
        }
        if (this['useTree']) {
            this['tree']['clear']();
            this['tree']['load'](_0x598b04);
        }
        var _0x17c6bd = this['colliders']['update']();
        for (_0x4b48cd = 0; _0x4b48cd < _0x17c6bd['length']; _0x4b48cd++) {
            if ('HgIPo' === 'HgIPo') {
                var _0x1043d9 = _0x17c6bd[_0x4b48cd];
                if (_0x1043d9['active']) {
                    if ('RNrld' !== 'RNrld') {
                        velocityX += (this['gravity']['x'] + _0xd12502['gravity']['x']) * _0x4d37c3;
                        velocityY += (this['gravity']['y'] + _0xd12502['gravity']['y']) * _0x4d37c3;
                    } else {
                        _0x1043d9['update']();
                    }
                }
            } else {
                _0xd12502['preUpdate'](willStep, fixedDelta);
            }
        }
        this['emit'](Events['WORLD_STEP'], _0x4d37c3);
        this['stepsLastFrame']++;
    },
    'postUpdate': function () {
        var _0x4e0e06;
        var _0x3a20dc;
        var _0x57bb77 = this['bodies']['entries'];
        var _0x1b9043 = _0x57bb77['length'];
        var _0x5272e1 = this['bodies'];
        var _0x86d88c = this['staticBodies'];
        if (this['stepsLastFrame']) {
            this['stepsLastFrame'] = 0;
            for (_0x4e0e06 = 0; _0x4e0e06 < _0x1b9043; _0x4e0e06++) {
                if ('AbuFo' !== 'TkcyI') {
                    _0x3a20dc = _0x57bb77[_0x4e0e06];
                    if (_0x3a20dc['enable']) {
                        _0x3a20dc['postUpdate']();
                    }
                } else {
                    if (object2['body']) {
                        return this['collideSpriteVsSprite'](object1, object2, collideCallback, processCallback, callbackContext, overlapOnly);
                    } else if (object2['isParent']) {
                        return this['collideSpriteVsGroup'](object1, object2, collideCallback, processCallback, callbackContext, overlapOnly);
                    } else if (object2['isTilemap']) {
                        return this['collideSpriteVsTilemapLayer'](object1, object2, collideCallback, processCallback, callbackContext, overlapOnly);
                    }
                }
            }
        }
        if (this['drawDebug']) {
            var _0x148598 = this['debugGraphic'];
            _0x148598['clear']();
            for (_0x4e0e06 = 0; _0x4e0e06 < _0x1b9043; _0x4e0e06++) {
                _0x3a20dc = _0x57bb77[_0x4e0e06];
                if (_0x3a20dc['willDrawDebug']()) {
                    if ('XnDNL' !== 'PvpKv') {
                        _0x3a20dc['drawDebug'](_0x148598);
                    } else {
                        this['enableBody'](child, bodyType);
                    }
                }
            }
            _0x57bb77 = _0x86d88c['entries'];
            _0x1b9043 = _0x57bb77['length'];
            for (_0x4e0e06 = 0; _0x4e0e06 < _0x1b9043; _0x4e0e06++) {
                if ('ICzqa' === 'OVVAi') {
                    this['staticBodies']['delete'](_0x3a20dc);
                    this['staticTree']['remove'](_0x3a20dc);
                } else {
                    _0x3a20dc = _0x57bb77[_0x4e0e06];
                    if (_0x3a20dc['willDrawDebug']()) {
                        _0x3a20dc['drawDebug'](_0x148598);
                    }
                }
            }
        }
        var _0x15c4f2 = this['pendingDestroy'];
        if (_0x15c4f2['size'] > 0) {
            var _0x5f0231 = this['tree'];
            var _0xa42cb0 = this['staticTree'];
            _0x57bb77 = _0x15c4f2['entries'];
            _0x1b9043 = _0x57bb77['length'];
            for (_0x4e0e06 = 0; _0x4e0e06 < _0x1b9043; _0x4e0e06++) {
                _0x3a20dc = _0x57bb77[_0x4e0e06];
                if (_0x3a20dc['physicsType'] === CONST['DYNAMIC_BODY']) {
                    if ('nTgOE' !== 'nTgOE') {
                        this['setBoundsCollision'](checkLeft, checkRight, checkUp, checkDown);
                    } else {
                        _0x5f0231['remove'](_0x3a20dc);
                        _0x5272e1['delete'](_0x3a20dc);
                    }
                } else if (_0x3a20dc['physicsType'] === CONST['STATIC_BODY']) {
                    _0xa42cb0['remove'](_0x3a20dc);
                    _0x86d88c['delete'](_0x3a20dc);
                }
                _0x3a20dc['world'] = undefined;
                _0x3a20dc['gameObject'] = undefined;
            }
            _0x15c4f2['clear']();
        }
    },
    'updateMotion': function (_0x4be3ac, _0x5d0252) {
        if (_0x4be3ac['allowRotation']) {
            if ('ERHGn' === 'IITBo') {
                tileWorldRect['top'] -= (tile['height'] - tile['baseHeight']) * tilemapLayer['scaleY'];
            } else {
                this['computeAngularVelocity'](_0x4be3ac, _0x5d0252);
            }
        }
        this['computeVelocity'](_0x4be3ac, _0x5d0252);
    },
    'computeAngularVelocity': function (_0x3dab80, _0x41565c) {
        var _0x5d4186 = _0x3dab80['angularVelocity'];
        var _0x5c02bd = _0x3dab80['angularAcceleration'];
        var _0x131909 = _0x3dab80['angularDrag'];
        var _0x3951ce = _0x3dab80['maxAngular'];
        if (_0x5c02bd) {
            if ('cRTrl' !== 'cRTrl') {
                if (group1['length'] === 0 || group2['length'] === 0) {
                    return;
                }
                var _0x4e93f4 = group1['getChildren']();
                for (var _0x4d98d7 = 0; _0x4d98d7 < _0x4e93f4['length']; _0x4d98d7++) {
                    this['collideSpriteVsGroup'](_0x4e93f4[_0x4d98d7], group2, collideCallback, processCallback, callbackContext, overlapOnly);
                }
            } else {
                _0x5d4186 += _0x5c02bd * _0x41565c;
            }
        } else if (_0x3dab80['allowDrag'] && _0x131909) {
            _0x131909 *= _0x41565c;
            if (FuzzyGreaterThan(_0x5d4186 - _0x131909, 0, 0.1)) {
                _0x5d4186 -= _0x131909;
            } else if (FuzzyLessThan(_0x5d4186 + _0x131909, 0, 0.1)) {
                _0x5d4186 += _0x131909;
            } else {
                if ('KNLIm' === 'KNLIm') {
                    _0x5d4186 = 0;
                } else {
                    _0x131909 *= _0x41565c;
                    if (FuzzyGreaterThan(_0x5d4186 - _0x131909, 0, 0.1)) {
                        _0x5d4186 -= _0x131909;
                    } else if (FuzzyLessThan(_0x5d4186 + _0x131909, 0, 0.1)) {
                        _0x5d4186 += _0x131909;
                    } else {
                        _0x5d4186 = 0;
                    }
                }
            }
        }
        _0x5d4186 = Clamp(_0x5d4186, -_0x3951ce, _0x3951ce);
        var _0x5c1f3f = _0x5d4186 - _0x3dab80['angularVelocity'];
        _0x3dab80['angularVelocity'] += _0x5c1f3f;
        _0x3dab80['rotation'] += _0x3dab80['angularVelocity'] * _0x41565c;
    },
    'computeVelocity': function (_0x4c8193, _0x299cbb) {
        var _0x5b7517 = _0x4c8193['velocity']['x'];
        var _0x302f24 = _0x4c8193['acceleration']['x'];
        var _0x2dd94a = _0x4c8193['drag']['x'];
        var _0x42eef0 = _0x4c8193['maxVelocity']['x'];
        var _0x4a837c = _0x4c8193['velocity']['y'];
        var _0x530603 = _0x4c8193['acceleration']['y'];
        var _0x42353a = _0x4c8193['drag']['y'];
        var _0x465a1d = _0x4c8193['maxVelocity']['y'];
        var _0x568ba4 = _0x4c8193['speed'];
        var _0x811bb9 = _0x4c8193['maxSpeed'];
        var _0x4d7f98 = _0x4c8193['allowDrag'];
        var _0x3c8b67 = _0x4c8193['useDamping'];
        if (_0x4c8193['allowGravity']) {
            _0x5b7517 += (this['gravity']['x'] + _0x4c8193['gravity']['x']) * _0x299cbb;
            _0x4a837c += (this['gravity']['y'] + _0x4c8193['gravity']['y']) * _0x299cbb;
        }
        if (_0x302f24) {
            if ('DUoLa' !== 'rOgKv') {
                _0x5b7517 += _0x302f24 * _0x299cbb;
            } else {
                processCallback = null;
            }
        } else if (_0x4d7f98 && _0x2dd94a) {
            if (_0x3c8b67) {
                _0x2dd94a = Math['pow'](_0x2dd94a, _0x299cbb);
                _0x5b7517 *= _0x2dd94a;
                _0x568ba4 = Math['sqrt'](_0x5b7517 * _0x5b7517 + _0x4a837c * _0x4a837c);
                if (FuzzyEqual(_0x568ba4, 0, 0.001)) {
                    if ('ojEGf' === 'pWXDG') {
                        if (collideCallback) {
                            collideCallback['call'](callbackContext, bodyA['gameObject'], bodyB['gameObject']);
                        }
                        this['_total']++;
                    } else {
                        _0x5b7517 = 0;
                    }
                }
            } else {
                if ('nmhMi' === 'nmhMi') {
                    _0x2dd94a *= _0x299cbb;
                    if (FuzzyGreaterThan(_0x5b7517 - _0x2dd94a, 0, 0.01)) {
                        _0x5b7517 -= _0x2dd94a;
                    } else if (FuzzyLessThan(_0x5b7517 + _0x2dd94a, 0, 0.01)) {
                        _0x5b7517 += _0x2dd94a;
                    } else {
                        _0x5b7517 = 0;
                    }
                } else {
                    _0x5b7517 = 0;
                }
            }
        }
        if (_0x530603) {
            if ('TWYdG' === 'TWYdG') {
                _0x4a837c += _0x530603 * _0x299cbb;
            } else {
                _0x42353a *= _0x299cbb;
                if (FuzzyGreaterThan(_0x4a837c - _0x42353a, 0, 0.01)) {
                    _0x4a837c -= _0x42353a;
                } else if (FuzzyLessThan(_0x4a837c + _0x42353a, 0, 0.01)) {
                    _0x4a837c += _0x42353a;
                } else {
                    _0x4a837c = 0;
                }
            }
        } else if (_0x4d7f98 && _0x42353a) {
            if ('YCGze' === 'bsCdU') {
                resultX = SeparateX(body1, body2, overlapOnly, this['OVERLAP_BIAS']);
                if (this['intersects'](body1, body2)) {
                    resultY = SeparateY(body1, body2, overlapOnly, this['OVERLAP_BIAS']);
                }
            } else {
                if (_0x3c8b67) {
                    _0x42353a = Math['pow'](_0x42353a, _0x299cbb);
                    _0x4a837c *= _0x42353a;
                    _0x568ba4 = Math['sqrt'](_0x5b7517 * _0x5b7517 + _0x4a837c * _0x4a837c);
                    if (FuzzyEqual(_0x568ba4, 0, 0.001)) {
                        if ('UWMQu' === 'UWMQu') {
                            _0x4a837c = 0;
                        } else {
                            this['emit'](Events['OVERLAP'], body1['gameObject'], body2['gameObject'], body1, body2);
                        }
                    }
                } else {
                    if ('uXHAL' === 'SdtEL') {
                        this['disable'](child);
                    } else {
                        _0x42353a *= _0x299cbb;
                        if (FuzzyGreaterThan(_0x4a837c - _0x42353a, 0, 0.01)) {
                            _0x4a837c -= _0x42353a;
                        } else if (FuzzyLessThan(_0x4a837c + _0x42353a, 0, 0.01)) {
                            _0x4a837c += _0x42353a;
                        } else {
                            _0x4a837c = 0;
                        }
                    }
                }
            }
        }
        _0x5b7517 = Clamp(_0x5b7517, -_0x42eef0, _0x42eef0);
        _0x4a837c = Clamp(_0x4a837c, -_0x465a1d, _0x465a1d);
        _0x4c8193['velocity']['set'](_0x5b7517, _0x4a837c);
        if (_0x811bb9 > -1 && _0x568ba4 > _0x811bb9) {
            _0x4c8193['velocity']['normalize']()['scale'](_0x811bb9);
            _0x568ba4 = _0x811bb9;
        }
        _0x4c8193['speed'] = _0x568ba4;
    },
    'separate': function (_0x1dba06, _0x31909d, _0x3b69d5, _0x1ebb4a, _0x3553fe, _0x377711) {
        if (!_0x377711 && !_0x1dba06['enable'] || !_0x31909d['enable'] || _0x1dba06['checkCollision']['none'] || _0x31909d['checkCollision']['none'] || !this['intersects'](_0x1dba06, _0x31909d)) {
            if ('gfGui' !== 'gfGui') {
                return this['collideSpriteVsGroup'](object2, object1, collideCallback, _0x3b69d5, _0x1ebb4a, _0x3553fe);
            } else {
                return ![];
            }
        }
        if (_0x3b69d5 && _0x3b69d5['call'](_0x1ebb4a, _0x1dba06['gameObject'], _0x31909d['gameObject']) === ![]) {
            return ![];
        }
        if (_0x1dba06['isCircle'] && _0x31909d['isCircle']) {
            if ('LQbXE' === 'NPmVd') {
                overlap = DistanceBetween(_0xeeaf3a['x'], _0xeeaf3a['y'], _0x244871['right'], _0x244871['y']) - _0xeeaf3a['radius'];
            } else {
                return this['separateCircle'](_0x1dba06, _0x31909d, _0x3553fe);
            }
        }
        if (_0x1dba06['isCircle'] !== _0x31909d['isCircle']) {
            if ('rAcKy' === 'OBOvu') {
                return this['separateCircle'](_0x1dba06, _0x31909d, _0x3553fe);
            } else {
                var _0x20cf54 = _0x1dba06['isCircle'] ? _0x31909d : _0x1dba06;
                var _0x4224c8 = _0x1dba06['isCircle'] ? _0x1dba06 : _0x31909d;
                var _0x244871 = {
                    'x': _0x20cf54['x'],
                    'y': _0x20cf54['y'],
                    'right': _0x20cf54['right'],
                    'bottom': _0x20cf54['bottom']
                };
                var _0xeeaf3a = _0x4224c8['center'];
                if (_0xeeaf3a['y'] < _0x244871['y'] || _0xeeaf3a['y'] > _0x244871['bottom']) {
                    if (_0xeeaf3a['x'] < _0x244871['x'] || _0xeeaf3a['x'] > _0x244871['right']) {
                        if ('KiIdz' !== 'KiIdz') {
                            var _0x308223 = '0|29|14|6|31|16|27|11|4|5|20|12|9|28|10|15|30|13|22|8|17|23|7|26|2|21|1|3|18|25|19|24'['split']('|'), _0x50eaa0 = 0;
                            while (!![]) {
                                switch (_0x308223[_0x50eaa0++]) {
                                case '0':
                                    EventEmitter['call'](this);
                                    continue;
                                case '1':
                                    this['tree'] = new RTree(this['maxEntries']);
                                    continue;
                                case '2':
                                    this['maxEntries'] = GetValue(config, 'maxEntries', 16);
                                    continue;
                                case '3':
                                    this['staticTree'] = new RTree(this['maxEntries']);
                                    continue;
                                case '4':
                                    this['checkCollision'] = {
                                        'up': GetValue(config, 'checkCollision.up', !![]),
                                        'down': GetValue(config, 'checkCollision.down', !![]),
                                        'left': GetValue(config, 'checkCollision.left', !![]),
                                        'right': GetValue(config, 'checkCollision.right', !![])
                                    };
                                    continue;
                                case '5':
                                    this['fps'] = GetValue(config, 'fps', 60);
                                    continue;
                                case '6':
                                    this['staticBodies'] = new Set();
                                    continue;
                                case '7':
                                    this['debugGraphic'];
                                    continue;
                                case '8':
                                    this['isPaused'] = GetValue(config, 'isPaused', ![]);
                                    continue;
                                case '9':
                                    this['_frameTime'] = 1 / this['fps'];
                                    continue;
                                case '10':
                                    this['stepsLastFrame'] = 0;
                                    continue;
                                case '11':
                                    this['bounds'] = new Rectangle(GetValue(config, 'x', 0), GetValue(config, 'y', 0), GetValue(config, 'width', scene['sys']['scale']['width']), GetValue(config, 'height', scene['sys']['scale']['height']));
                                    continue;
                                case '12':
                                    this['_elapsed'] = 0;
                                    continue;
                                case '13':
                                    this['TILE_BIAS'] = GetValue(config, 'tileBias', 16);
                                    continue;
                                case '14':
                                    this['bodies'] = new Set();
                                    continue;
                                case '15':
                                    this['timeScale'] = GetValue(config, 'timeScale', 1);
                                    continue;
                                case '16':
                                    this['colliders'] = new ProcessQueue();
                                    continue;
                                case '17':
                                    this['_total'] = 0;
                                    continue;
                                case '18':
                                    this['treeMinMax'] = {
                                        'minX': 0,
                                        'minY': 0,
                                        'maxX': 0,
                                        'maxY': 0
                                    };
                                    continue;
                                case '19':
                                    this['_tempMatrix2'] = new TransformMatrix();
                                    continue;
                                case '20':
                                    this['fixedStep'] = GetValue(config, 'fixedStep', !![]);
                                    continue;
                                case '21':
                                    this['useTree'] = GetValue(config, 'useTree', !![]);
                                    continue;
                                case '22':
                                    this['forceX'] = GetValue(config, 'forceX', ![]);
                                    continue;
                                case '23':
                                    this['drawDebug'] = GetValue(config, 'debug', ![]);
                                    continue;
                                case '24':
                                    if (this['drawDebug']) {
                                        this['createDebugGraphic']();
                                    }
                                    continue;
                                case '25':
                                    this['_tempMatrix'] = new TransformMatrix();
                                    continue;
                                case '26':
                                    this['defaults'] = {
                                        'debugShowBody': GetValue(config, 'debugShowBody', !![]),
                                        'debugShowStaticBody': GetValue(config, 'debugShowStaticBody', !![]),
                                        'debugShowVelocity': GetValue(config, 'debugShowVelocity', !![]),
                                        'bodyDebugColor': GetValue(config, 'debugBodyColor', 16711935),
                                        'staticBodyDebugColor': GetValue(config, 'debugStaticBodyColor', 255),
                                        'velocityDebugColor': GetValue(config, 'debugVelocityColor', 65280)
                                    };
                                    continue;
                                case '27':
                                    this['gravity'] = new Vector2(GetValue(config, 'gravity.x', 0), GetValue(config, 'gravity.y', 0));
                                    continue;
                                case '28':
                                    this['_frameTimeMS'] = 1000 * this['_frameTime'];
                                    continue;
                                case '29':
                                    this['scene'] = scene;
                                    continue;
                                case '30':
                                    this['OVERLAP_BIAS'] = GetValue(config, 'overlapBias', 4);
                                    continue;
                                case '31':
                                    this['pendingDestroy'] = new Set();
                                    continue;
                                }
                                break;
                            }
                        } else {
                            return this['separateCircle'](_0x1dba06, _0x31909d, _0x3553fe);
                        }
                    }
                }
            }
        }
        var _0x30a193 = ![];
        var _0x541dcc = ![];
        if (_0x3553fe) {
            _0x30a193 = SeparateX(_0x1dba06, _0x31909d, _0x3553fe, this['OVERLAP_BIAS']);
            _0x541dcc = SeparateY(_0x1dba06, _0x31909d, _0x3553fe, this['OVERLAP_BIAS']);
        } else if (this['forceX'] || Math['abs'](this['gravity']['y'] + _0x1dba06['gravity']['y']) < Math['abs'](this['gravity']['x'] + _0x1dba06['gravity']['x'])) {
            _0x30a193 = SeparateX(_0x1dba06, _0x31909d, _0x3553fe, this['OVERLAP_BIAS']);
            if (this['intersects'](_0x1dba06, _0x31909d)) {
                _0x541dcc = SeparateY(_0x1dba06, _0x31909d, _0x3553fe, this['OVERLAP_BIAS']);
            }
        } else {
            _0x541dcc = SeparateY(_0x1dba06, _0x31909d, _0x3553fe, this['OVERLAP_BIAS']);
            if (this['intersects'](_0x1dba06, _0x31909d)) {
                _0x30a193 = SeparateX(_0x1dba06, _0x31909d, _0x3553fe, this['OVERLAP_BIAS']);
            }
        }
        var _0x33614f = _0x30a193 || _0x541dcc;
        if (_0x33614f) {
            if (_0x3553fe) {
                if (_0x1dba06['onOverlap'] || _0x31909d['onOverlap']) {
                    this['emit'](Events['OVERLAP'], _0x1dba06['gameObject'], _0x31909d['gameObject'], _0x1dba06, _0x31909d);
                }
            } else if (_0x1dba06['onCollide'] || _0x31909d['onCollide']) {
                if ('xUMYR' === 'xUMYR') {
                    this['emit'](Events['COLLIDE'], _0x1dba06['gameObject'], _0x31909d['gameObject'], _0x1dba06, _0x31909d);
                } else {
                    object1 = object1['children']['entries'];
                }
            }
        }
        return _0x33614f;
    },
    'separateCircle': function (_0x4704a3, _0x147e63, _0x24df1a, _0x9cde31) {
        GetOverlapX(_0x4704a3, _0x147e63, ![], _0x9cde31);
        GetOverlapY(_0x4704a3, _0x147e63, ![], _0x9cde31);
        var _0x125fcf = 0;
        if (_0x4704a3['isCircle'] !== _0x147e63['isCircle']) {
            var _0x30960e = {
                'x': _0x147e63['isCircle'] ? _0x4704a3['position']['x'] : _0x147e63['position']['x'],
                'y': _0x147e63['isCircle'] ? _0x4704a3['position']['y'] : _0x147e63['position']['y'],
                'right': _0x147e63['isCircle'] ? _0x4704a3['right'] : _0x147e63['right'],
                'bottom': _0x147e63['isCircle'] ? _0x4704a3['bottom'] : _0x147e63['bottom']
            };
            var _0x52d3d4 = {
                'x': _0x4704a3['isCircle'] ? _0x4704a3['center']['x'] : _0x147e63['center']['x'],
                'y': _0x4704a3['isCircle'] ? _0x4704a3['center']['y'] : _0x147e63['center']['y'],
                'radius': _0x4704a3['isCircle'] ? _0x4704a3['halfWidth'] : _0x147e63['halfWidth']
            };
            if (_0x52d3d4['y'] < _0x30960e['y']) {
                if ('lIIDD' === 'OOuIX') {
                    if (_0x125fcf !== 0 && (_0x4704a3['onOverlap'] || _0x147e63['onOverlap'])) {
                        this['emit'](Events['OVERLAP'], _0x4704a3['gameObject'], _0x147e63['gameObject'], _0x4704a3, _0x147e63);
                    }
                    return _0x125fcf !== 0;
                } else {
                    if (_0x52d3d4['x'] < _0x30960e['x']) {
                        if ('SfBEQ' !== 'SfBEQ') {
                            overlapCallback = null;
                        } else {
                            _0x125fcf = DistanceBetween(_0x52d3d4['x'], _0x52d3d4['y'], _0x30960e['x'], _0x30960e['y']) - _0x52d3d4['radius'];
                        }
                    } else if (_0x52d3d4['x'] > _0x30960e['right']) {
                        if ('eCvsH' === 'eCvsH') {
                            _0x125fcf = DistanceBetween(_0x52d3d4['x'], _0x52d3d4['y'], _0x30960e['right'], _0x30960e['y']) - _0x52d3d4['radius'];
                        } else {
                            this['emit'](Events['OVERLAP'], _0x4704a3['gameObject'], _0x147e63['gameObject'], _0x4704a3, _0x147e63);
                        }
                    }
                }
            } else if (_0x52d3d4['y'] > _0x30960e['bottom']) {
                if (_0x52d3d4['x'] < _0x30960e['x']) {
                    _0x125fcf = DistanceBetween(_0x52d3d4['x'], _0x52d3d4['y'], _0x30960e['x'], _0x30960e['bottom']) - _0x52d3d4['radius'];
                } else if (_0x52d3d4['x'] > _0x30960e['right']) {
                    _0x125fcf = DistanceBetween(_0x52d3d4['x'], _0x52d3d4['y'], _0x30960e['right'], _0x30960e['bottom']) - _0x52d3d4['radius'];
                }
            }
            _0x125fcf *= -1;
        } else {
            _0x125fcf = _0x4704a3['halfWidth'] + _0x147e63['halfWidth'] - DistanceBetween(_0x4704a3['center']['x'], _0x4704a3['center']['y'], _0x147e63['center']['x'], _0x147e63['center']['y']);
        }
        _0x4704a3['overlapR'] = _0x125fcf;
        _0x147e63['overlapR'] = _0x125fcf;
        if (_0x24df1a || _0x125fcf === 0 || _0x4704a3['immovable'] && _0x147e63['immovable'] || _0x4704a3['customSeparateX'] || _0x147e63['customSeparateX']) {
            if (_0x125fcf !== 0 && (_0x4704a3['onOverlap'] || _0x147e63['onOverlap'])) {
                this['emit'](Events['OVERLAP'], _0x4704a3['gameObject'], _0x147e63['gameObject'], _0x4704a3, _0x147e63);
            }
            return _0x125fcf !== 0;
        }
        var _0x96e99c = _0x4704a3['center']['x'] - _0x147e63['center']['x'];
        var _0xa9cafe = _0x4704a3['center']['y'] - _0x147e63['center']['y'];
        var _0x264f1f = Math['sqrt'](Math['pow'](_0x96e99c, 2) + Math['pow'](_0xa9cafe, 2));
        var _0x3f69a3 = (_0x147e63['center']['x'] - _0x4704a3['center']['x']) / _0x264f1f || 0;
        var _0x378d98 = (_0x147e63['center']['y'] - _0x4704a3['center']['y']) / _0x264f1f || 0;
        var _0x2cd44d = 2 * (_0x4704a3['velocity']['x'] * _0x3f69a3 + _0x4704a3['velocity']['y'] * _0x378d98 - _0x147e63['velocity']['x'] * _0x3f69a3 - _0x147e63['velocity']['y'] * _0x378d98) / (_0x4704a3['mass'] + _0x147e63['mass']);
        if (_0x4704a3['immovable'] || _0x147e63['immovable']) {
            if ('IIMzW' !== 'LirBF') {
                _0x2cd44d *= 2;
            } else {
                if (_0x24df1a) {
                    if (_0x4704a3['onOverlap'] || _0x147e63['onOverlap']) {
                        this['emit'](Events['OVERLAP'], _0x4704a3['gameObject'], _0x147e63['gameObject'], _0x4704a3, _0x147e63);
                    }
                } else if (_0x4704a3['onCollide'] || _0x147e63['onCollide']) {
                    this['emit'](Events['COLLIDE'], _0x4704a3['gameObject'], _0x147e63['gameObject'], _0x4704a3, _0x147e63);
                }
            }
        }
        if (!_0x4704a3['immovable']) {
            _0x4704a3['velocity']['x'] = _0x4704a3['velocity']['x'] - _0x2cd44d / _0x4704a3['mass'] * _0x3f69a3;
            _0x4704a3['velocity']['y'] = _0x4704a3['velocity']['y'] - _0x2cd44d / _0x4704a3['mass'] * _0x378d98;
        }
        if (!_0x147e63['immovable']) {
            _0x147e63['velocity']['x'] = _0x147e63['velocity']['x'] + _0x2cd44d / _0x147e63['mass'] * _0x3f69a3;
            _0x147e63['velocity']['y'] = _0x147e63['velocity']['y'] + _0x2cd44d / _0x147e63['mass'] * _0x378d98;
        }
        if (!_0x4704a3['immovable'] && !_0x147e63['immovable']) {
            if ('mQfxQ' !== 'mQfxQ') {
                left = !![];
            } else {
                _0x125fcf /= 2;
            }
        }
        var _0x1e8fce = AngleBetweenPoints(_0x4704a3['center'], _0x147e63['center']);
        var _0x380e33 = (_0x125fcf + MATH_CONST['EPSILON']) * Math['cos'](_0x1e8fce);
        var _0x391e3c = (_0x125fcf + MATH_CONST['EPSILON']) * Math['sin'](_0x1e8fce);
        if (!_0x4704a3['immovable']) {
            if ('KfiFb' === 'qLieN') {
                return this['collideGroupVsGroup'](object1, object1, collideCallback, processCallback, callbackContext, _0x24df1a);
            } else {
                _0x4704a3['x'] -= _0x380e33;
                _0x4704a3['y'] -= _0x391e3c;
                _0x4704a3['updateCenter']();
            }
        }
        if (!_0x147e63['immovable']) {
            _0x147e63['x'] += _0x380e33;
            _0x147e63['y'] += _0x391e3c;
            _0x147e63['updateCenter']();
        }
        _0x4704a3['velocity']['x'] *= _0x4704a3['bounce']['x'];
        _0x4704a3['velocity']['y'] *= _0x4704a3['bounce']['y'];
        _0x147e63['velocity']['x'] *= _0x147e63['bounce']['x'];
        _0x147e63['velocity']['y'] *= _0x147e63['bounce']['y'];
        if (_0x4704a3['onCollide'] || _0x147e63['onCollide']) {
            if ('qODXb' === 'CkZTU') {
                this['wrapArray'](object, padding);
            } else {
                this['emit'](Events['COLLIDE'], _0x4704a3['gameObject'], _0x147e63['gameObject'], _0x4704a3, _0x147e63);
            }
        }
        return !![];
    },
    'intersects': function (_0x534a3c, _0x49ec1e) {
        if (_0x534a3c === _0x49ec1e) {
            if ('WFKIX' === 'NnUKU') {
                return;
            } else {
                return ![];
            }
        }
        if (!_0x534a3c['isCircle'] && !_0x49ec1e['isCircle']) {
            return !(_0x534a3c['right'] <= _0x49ec1e['position']['x'] || _0x534a3c['bottom'] <= _0x49ec1e['position']['y'] || _0x534a3c['position']['x'] >= _0x49ec1e['right'] || _0x534a3c['position']['y'] >= _0x49ec1e['bottom']);
        } else if (_0x534a3c['isCircle']) {
            if ('FnRwA' !== 'FnRwA') {
                if (circle['x'] < rect['x'] || circle['x'] > rect['right']) {
                    return this['separateCircle'](_0x534a3c, _0x49ec1e, overlapOnly);
                }
            } else {
                if (_0x49ec1e['isCircle']) {
                    if ('roKSQ' !== 'IocgK') {
                        return DistanceBetween(_0x534a3c['center']['x'], _0x534a3c['center']['y'], _0x49ec1e['center']['x'], _0x49ec1e['center']['y']) <= _0x534a3c['halfWidth'] + _0x49ec1e['halfWidth'];
                    } else {
                        for (i = 0; i < object1['length']; i++) {
                            for (j = 0; j < object2['length']; j++) {
                                this['collideHandler'](object1[i], object2[j], collideCallback, processCallback, callbackContext, overlapOnly);
                            }
                        }
                    }
                } else {
                    return this['circleBodyIntersects'](_0x534a3c, _0x49ec1e);
                }
            }
        } else {
            return this['circleBodyIntersects'](_0x49ec1e, _0x534a3c);
        }
    },
    'circleBodyIntersects': function (_0x12b8f2, _0x3fa1dc) {
        var _0x175b38 = '0|3|1|4|2'['split']('|'), _0x1c419f = 0;
        while (!![]) {
            switch (_0x175b38[_0x1c419f++]) {
            case '0':
                var _0x44a667 = Clamp(_0x12b8f2['center']['x'], _0x3fa1dc['left'], _0x3fa1dc['right']);
                continue;
            case '1':
                var _0x5d9098 = (_0x12b8f2['center']['x'] - _0x44a667) * (_0x12b8f2['center']['x'] - _0x44a667);
                continue;
            case '2':
                return _0x5d9098 + _0x494479 <= _0x12b8f2['halfWidth'] * _0x12b8f2['halfWidth'];
            case '3':
                var _0x2e05aa = Clamp(_0x12b8f2['center']['y'], _0x3fa1dc['top'], _0x3fa1dc['bottom']);
                continue;
            case '4':
                var _0x494479 = (_0x12b8f2['center']['y'] - _0x2e05aa) * (_0x12b8f2['center']['y'] - _0x2e05aa);
                continue;
            }
            break;
        }
    },
    'overlap': function (_0x31e8f3, _0x161435, _0x5de6d7, _0x292ed2, _0x4215ec) {
        if (_0x5de6d7 === undefined) {
            _0x5de6d7 = null;
        }
        if (_0x292ed2 === undefined) {
            if ('RBWPL' === 'RBWPL') {
                _0x292ed2 = null;
            } else {
                body2['velocity']['x'] = body2['velocity']['x'] + p / body2['mass'] * nx;
                body2['velocity']['y'] = body2['velocity']['y'] + p / body2['mass'] * ny;
            }
        }
        if (_0x4215ec === undefined) {
            _0x4215ec = _0x5de6d7;
        }
        return this['collideObjects'](_0x31e8f3, _0x161435, _0x5de6d7, _0x292ed2, _0x4215ec, !![]);
    },
    'collide': function (_0x3390f2, _0x1d5da9, _0x2970f9, _0x26ad47, _0x1c1fb8) {
        if (_0x2970f9 === undefined) {
            if ('akvnT' !== 'DWtKP') {
                _0x2970f9 = null;
            } else {
                velocityX -= dragX;
            }
        }
        if (_0x26ad47 === undefined) {
            if ('bBhKz' !== 'bBhKz') {
                if (!sprite1['body'] || !sprite2['body']) {
                    return ![];
                }
                if (this['separate'](sprite1['body'], sprite2['body'], _0x26ad47, _0x1c1fb8, overlapOnly)) {
                    if (_0x2970f9) {
                        _0x2970f9['call'](_0x1c1fb8, sprite1, sprite2);
                    }
                    this['_total']++;
                }
                return !![];
            } else {
                _0x26ad47 = null;
            }
        }
        if (_0x1c1fb8 === undefined) {
            if ('aWyHK' === 'aWyHK') {
                _0x1c1fb8 = _0x2970f9;
            } else {
                if (_0x2970f9) {
                    _0x2970f9['call'](_0x1c1fb8, bodyA['gameObject'], bodyB['gameObject']);
                }
                this['_total']++;
            }
        }
        return this['collideObjects'](_0x3390f2, _0x1d5da9, _0x2970f9, _0x26ad47, _0x1c1fb8, ![]);
    },
    'collideObjects': function (_0x34a82e, _0x29fe67, _0x246616, _0x1f37a4, _0x19d843, _0x4e0d45) {
        var _0xc1a34b;
        var _0x3675ec;
        if (_0x34a82e['isParent'] && _0x34a82e['physicsType'] === undefined) {
            _0x34a82e = _0x34a82e['children']['entries'];
        }
        if (_0x29fe67 && _0x29fe67['isParent'] && _0x29fe67['physicsType'] === undefined) {
            if ('DhNkP' === 'BuAmH') {
                var _0xe8528 = '4|3|0|5|2|1'['split']('|'), _0x261384 = 0;
                while (!![]) {
                    switch (_0xe8528[_0x261384++]) {
                    case '0':
                        if (this['useTree']) {
                            this['tree']['clear']();
                            this['tree']['load'](bodies);
                        }
                        continue;
                    case '1':
                        this['emit'](Events['WORLD_STEP'], fixedDelta);
                        continue;
                    case '2':
                        for (_0xc1a34b = 0; _0xc1a34b < _0x31d040['length']; _0xc1a34b++) {
                            var _0x46742e = _0x31d040[_0xc1a34b];
                            if (_0x46742e['active']) {
                                _0x46742e['update']();
                            }
                        }
                        continue;
                    case '3':
                        this['stepsLastFrame'] = 1;
                        continue;
                    case '4':
                        this['_elapsed'] -= msPerFrame;
                        continue;
                    case '5':
                        var _0x31d040 = this['colliders']['update']();
                        continue;
                    }
                    break;
                }
            } else {
                _0x29fe67 = _0x29fe67['children']['entries'];
            }
        }
        var _0xedf305 = Array['isArray'](_0x34a82e);
        var _0x5d79ee = Array['isArray'](_0x29fe67);
        this['_total'] = 0;
        if (!_0xedf305 && !_0x5d79ee) {
            this['collideHandler'](_0x34a82e, _0x29fe67, _0x246616, _0x1f37a4, _0x19d843, _0x4e0d45);
        } else if (!_0xedf305 && _0x5d79ee) {
            if ('ZxTNu' === 'gWuXK') {
                return this['collideGroupVsGroup'](_0x34a82e, _0x29fe67, _0x246616, _0x1f37a4, _0x19d843, _0x4e0d45);
            } else {
                for (_0xc1a34b = 0; _0xc1a34b < _0x29fe67['length']; _0xc1a34b++) {
                    if ('Hymvj' !== 'bUpmJ') {
                        this['collideHandler'](_0x34a82e, _0x29fe67[_0xc1a34b], _0x246616, _0x1f37a4, _0x19d843, _0x4e0d45);
                    } else {
                        if (!sprite['body']['enable'] || tiles['length'] === 0) {
                            return ![];
                        } else {
                            return this['collideSpriteVsTilesHandler'](sprite, tiles, _0x246616, _0x1f37a4, _0x19d843, !![], ![]);
                        }
                    }
                }
            }
        } else if (_0xedf305 && !_0x5d79ee) {
            if (!_0x29fe67) {
                for (_0xc1a34b = 0; _0xc1a34b < _0x34a82e['length']; _0xc1a34b++) {
                    if ('CEuau' !== 'GDVQO') {
                        var _0x5ed222 = _0x34a82e[_0xc1a34b];
                        for (_0x3675ec = _0xc1a34b + 1; _0x3675ec < _0x34a82e['length']; _0x3675ec++) {
                            if ('TZZXL' !== 'Hxmhx') {
                                if (_0xc1a34b === _0x3675ec) {
                                    if ('FtTel' === 'MigJv') {
                                        this['bodies']['set'](body);
                                    } else {
                                        continue;
                                    }
                                }
                                this['collideHandler'](_0x5ed222, _0x34a82e[_0x3675ec], _0x246616, _0x1f37a4, _0x19d843, _0x4e0d45);
                            } else {
                                resultY = SeparateY(body1, body2, _0x4e0d45, this['OVERLAP_BIAS']);
                            }
                        }
                    } else {
                        body1['x'] -= overlapX;
                        body1['y'] -= overlapY;
                        body1['updateCenter']();
                    }
                }
            } else {
                if ('uSQQg' !== 'uSQQg') {
                    return this['circleBodyIntersects'](body1, body2);
                } else {
                    for (_0xc1a34b = 0; _0xc1a34b < _0x34a82e['length']; _0xc1a34b++) {
                        this['collideHandler'](_0x34a82e[_0xc1a34b], _0x29fe67, _0x246616, _0x1f37a4, _0x19d843, _0x4e0d45);
                    }
                }
            }
        } else {
            if ('jlvJH' === 'jlvJH') {
                for (_0xc1a34b = 0; _0xc1a34b < _0x34a82e['length']; _0xc1a34b++) {
                    for (_0x3675ec = 0; _0x3675ec < _0x29fe67['length']; _0x3675ec++) {
                        this['collideHandler'](_0x34a82e[_0xc1a34b], _0x29fe67[_0x3675ec], _0x246616, _0x1f37a4, _0x19d843, _0x4e0d45);
                    }
                }
            } else {
                return ![];
            }
        }
        return this['_total'] > 0;
    },
    'collideHandler': function (_0x58a4f5, _0x36b3cf, _0x40431f, _0x31896a, _0x400130, _0x2ec69a) {
        if (_0x36b3cf === undefined && _0x58a4f5['isParent']) {
            return this['collideGroupVsGroup'](_0x58a4f5, _0x58a4f5, _0x40431f, _0x31896a, _0x400130, _0x2ec69a);
        }
        if (!_0x58a4f5 || !_0x36b3cf) {
            if ('hwneC' === 'zyuYD') {
                this['wrapArray'](object['getChildren'](), padding);
            } else {
                return ![];
            }
        }
        if (_0x58a4f5['body']) {
            if (_0x36b3cf['body']) {
                if ('EDKbo' === 'EDKbo') {
                    return this['collideSpriteVsSprite'](_0x58a4f5, _0x36b3cf, _0x40431f, _0x31896a, _0x400130, _0x2ec69a);
                } else {
                    return ![];
                }
            } else if (_0x36b3cf['isParent']) {
                return this['collideSpriteVsGroup'](_0x58a4f5, _0x36b3cf, _0x40431f, _0x31896a, _0x400130, _0x2ec69a);
            } else if (_0x36b3cf['isTilemap']) {
                return this['collideSpriteVsTilemapLayer'](_0x58a4f5, _0x36b3cf, _0x40431f, _0x31896a, _0x400130, _0x2ec69a);
            }
        } else if (_0x58a4f5['isParent']) {
            if ('qLzRM' === 'VftSO') {
                up = !![];
            } else {
                if (_0x36b3cf['body']) {
                    return this['collideSpriteVsGroup'](_0x36b3cf, _0x58a4f5, _0x40431f, _0x31896a, _0x400130, _0x2ec69a);
                } else if (_0x36b3cf['isParent']) {
                    if ('FAgZy' === 'FAgZy') {
                        return this['collideGroupVsGroup'](_0x58a4f5, _0x36b3cf, _0x40431f, _0x31896a, _0x400130, _0x2ec69a);
                    } else {
                        return this['collideSpriteVsTilesHandler'](sprite, mapData, _0x40431f, _0x31896a, _0x400130, _0x2ec69a, !![]);
                    }
                } else if (_0x36b3cf['isTilemap']) {
                    if ('cbrxR' === 'cbrxR') {
                        return this['collideGroupVsTilemapLayer'](_0x58a4f5, _0x36b3cf, _0x40431f, _0x31896a, _0x400130, _0x2ec69a);
                    } else {
                        return ![];
                    }
                }
            }
        } else if (_0x58a4f5['isTilemap']) {
            if ('jLXHF' === 'jLXHF') {
                if (_0x36b3cf['body']) {
                    return this['collideSpriteVsTilemapLayer'](_0x36b3cf, _0x58a4f5, _0x40431f, _0x31896a, _0x400130, _0x2ec69a);
                } else if (_0x36b3cf['isParent']) {
                    return this['collideGroupVsTilemapLayer'](_0x36b3cf, _0x58a4f5, _0x40431f, _0x31896a, _0x400130, _0x2ec69a);
                }
            } else {
                if (overlapCallback === undefined) {
                    overlapCallback = null;
                }
                if (_0x31896a === undefined) {
                    _0x31896a = null;
                }
                if (_0x400130 === undefined) {
                    _0x400130 = overlapCallback;
                }
                return this['collideObjects'](_0x58a4f5, _0x36b3cf, overlapCallback, _0x31896a, _0x400130, !![]);
            }
        }
    },
    'collideSpriteVsSprite': function (_0x134367, _0x285acf, _0x327a23, _0x2a406c, _0x4a126a, _0x161e04) {
        if (!_0x134367['body'] || !_0x285acf['body']) {
            if ('apwCk' === 'apwCk') {
                return ![];
            } else {
                fixedDelta = delta * 0.001;
                willStep = !![];
                this['_elapsed'] = 0;
            }
        }
        if (this['separate'](_0x134367['body'], _0x285acf['body'], _0x2a406c, _0x4a126a, _0x161e04)) {
            if (_0x327a23) {
                _0x327a23['call'](_0x4a126a, _0x134367, _0x285acf);
            }
            this['_total']++;
        }
        return !![];
    },
    'collideSpriteVsGroup': function (_0x3743a0, _0x2084e2, _0x39315c, _0x137994, _0x17e0c0, _0x34e0ac) {
        var _0x476c53 = _0x3743a0['body'];
        if (_0x2084e2['length'] === 0 || !_0x476c53 || !_0x476c53['enable'] || _0x476c53['checkCollision']['none']) {
            if ('REsDp' !== 'REsDp') {
                return this['collideSpriteVsTilemapLayer'](object1, object2, _0x39315c, _0x137994, _0x17e0c0, _0x34e0ac);
            } else {
                return;
            }
        }
        var _0x54fd1a;
        var _0x3a12b3;
        var _0x568615;
        if (this['useTree'] || _0x2084e2['physicsType'] === CONST['STATIC_BODY']) {
            if ('BRwxj' === 'pzZJE') {
                body2['x'] += overlapX;
                body2['y'] += overlapY;
                body2['updateCenter']();
            } else {
                var _0x320d12 = this['treeMinMax'];
                _0x320d12['minX'] = _0x476c53['left'];
                _0x320d12['minY'] = _0x476c53['top'];
                _0x320d12['maxX'] = _0x476c53['right'];
                _0x320d12['maxY'] = _0x476c53['bottom'];
                var _0x4a07af = _0x2084e2['physicsType'] === CONST['DYNAMIC_BODY'] ? this['tree']['search'](_0x320d12) : this['staticTree']['search'](_0x320d12);
                _0x3a12b3 = _0x4a07af['length'];
                for (_0x54fd1a = 0; _0x54fd1a < _0x3a12b3; _0x54fd1a++) {
                    _0x568615 = _0x4a07af[_0x54fd1a];
                    if (_0x476c53 === _0x568615 || !_0x568615['enable'] || _0x568615['checkCollision']['none'] || !_0x2084e2['contains'](_0x568615['gameObject'])) {
                        if ('xpWsD' !== 'xpWsD') {
                            this['createDebugGraphic']();
                        } else {
                            continue;
                        }
                    }
                    if (this['separate'](_0x476c53, _0x568615, _0x137994, _0x17e0c0, _0x34e0ac, !![])) {
                        if (_0x39315c) {
                            _0x39315c['call'](_0x17e0c0, _0x476c53['gameObject'], _0x568615['gameObject']);
                        }
                        this['_total']++;
                    }
                }
            }
        } else {
            if ('gSSNH' !== 'AXQpX') {
                var _0x21d527 = _0x2084e2['getChildren']();
                var _0x201752 = _0x2084e2['children']['entries']['indexOf'](_0x3743a0);
                _0x3a12b3 = _0x21d527['length'];
                for (_0x54fd1a = 0; _0x54fd1a < _0x3a12b3; _0x54fd1a++) {
                    if ('wOMDL' !== 'qZwhf') {
                        _0x568615 = _0x21d527[_0x54fd1a]['body'];
                        if (!_0x568615 || _0x54fd1a === _0x201752 || !_0x568615['enable']) {
                            continue;
                        }
                        if (this['separate'](_0x476c53, _0x568615, _0x137994, _0x17e0c0, _0x34e0ac)) {
                            if (_0x39315c) {
                                _0x39315c['call'](_0x17e0c0, _0x476c53['gameObject'], _0x568615['gameObject']);
                            }
                            this['_total']++;
                        }
                    } else {
                        this['emit'](Events['COLLIDE'], body1['gameObject'], body2['gameObject'], body1, body2);
                    }
                }
            } else {
                return ![];
            }
        }
    },
    'collideGroupVsTilemapLayer': function (_0x4fc835, _0x2005c4, _0x1df34f, _0x4bf008, _0x270772, _0xc7b7a1) {
        var _0x528516 = _0x4fc835['getChildren']();
        if (_0x528516['length'] === 0) {
            return ![];
        }
        var _0x50aafd = ![];
        for (var _0x3be1ff = 0; _0x3be1ff < _0x528516['length']; _0x3be1ff++) {
            if (_0x528516[_0x3be1ff]['body']) {
                if (this['collideSpriteVsTilemapLayer'](_0x528516[_0x3be1ff], _0x2005c4, _0x1df34f, _0x4bf008, _0x270772, _0xc7b7a1)) {
                    if ('jTRuJ' === 'jTRuJ') {
                        _0x50aafd = !![];
                    } else {
                        object = [object];
                    }
                }
            }
        }
        return _0x50aafd;
    },
    'collideTiles': function (_0x224e5d, _0x406bd6, _0x39bc6c, _0x4df001, _0x4aaf9d) {
        if (!_0x224e5d['body']['enable'] || _0x406bd6['length'] === 0) {
            if ('GADgD' === 'QgEpv') {
                dragX = Math['pow'](dragX, delta);
                velocityX *= dragX;
                speed = Math['sqrt'](velocityX * velocityX + velocityY * velocityY);
                if (FuzzyEqual(speed, 0, 0.001)) {
                    velocityX = 0;
                }
            } else {
                return ![];
            }
        } else {
            return this['collideSpriteVsTilesHandler'](_0x224e5d, _0x406bd6, _0x39bc6c, _0x4df001, _0x4aaf9d, ![], ![]);
        }
    },
    'overlapTiles': function (_0x5c1815, _0x12856f, _0xe993d1, _0x4e5c1d, _0x1c1550) {
        if (!_0x5c1815['body']['enable'] || _0x12856f['length'] === 0) {
            return ![];
        } else {
            return this['collideSpriteVsTilesHandler'](_0x5c1815, _0x12856f, _0xe993d1, _0x4e5c1d, _0x1c1550, !![], ![]);
        }
    },
    'collideSpriteVsTilemapLayer': function (_0x37bf46, _0x11bb0a, _0x155021, _0x13347e, _0x4d01bb, _0x14d60e) {
        var _0x1f498f = _0x37bf46['body'];
        if (!_0x1f498f['enable'] || _0x1f498f['checkCollision']['none']) {
            if ('luCwM' !== 'ZMMLH') {
                return ![];
            } else {
                _0x155021['call'](_0x4d01bb, sprite1, sprite2);
            }
        }
        var _0x565921 = _0x1f498f['position']['x'];
        var _0x14b292 = _0x1f498f['position']['y'];
        var _0x519aa9 = _0x1f498f['width'];
        var _0x1f94fb = _0x1f498f['height'];
        var _0x5099cc = _0x11bb0a['layer'];
        if (_0x5099cc['tileWidth'] > _0x5099cc['baseTileWidth']) {
            var _0xfcb898 = (_0x5099cc['tileWidth'] - _0x5099cc['baseTileWidth']) * _0x11bb0a['scaleX'];
            _0x565921 -= _0xfcb898;
            _0x519aa9 += _0xfcb898;
        }
        if (_0x5099cc['tileHeight'] > _0x5099cc['baseTileHeight']) {
            var _0x6b64fb = (_0x5099cc['tileHeight'] - _0x5099cc['baseTileHeight']) * _0x11bb0a['scaleY'];
            _0x1f94fb += _0x6b64fb;
        }
        var _0x5386f0 = GetTilesWithinWorldXY(_0x565921, _0x14b292, _0x519aa9, _0x1f94fb, null, _0x11bb0a['scene']['cameras']['main'], _0x11bb0a['layer']);
        if (_0x5386f0['length'] === 0) {
            return ![];
        } else {
            return this['collideSpriteVsTilesHandler'](_0x37bf46, _0x5386f0, _0x155021, _0x13347e, _0x4d01bb, _0x14d60e, !![]);
        }
    },
    'collideSpriteVsTilesHandler': function (_0x56c7d2, _0x3d5365, _0x33add7, _0x1c8307, _0x384509, _0x2fa889, _0x4ee133) {
        var _0x32a70d = _0x56c7d2['body'];
        var _0x547678;
        var _0x2f9e5d;
        var _0x3be2ac = ![];
        for (var _0xc24308 = 0; _0xc24308 < _0x3d5365['length']; _0xc24308++) {
            _0x547678 = _0x3d5365[_0xc24308];
            _0x2f9e5d = _0x547678['tilemapLayer'];
            var _0x42bb30 = _0x2f9e5d['tileToWorldXY'](_0x547678['x'], _0x547678['y']);
            0 = _0x42bb30['x'];
            0 = _0x42bb30['y'];
            if (_0x547678['baseHeight'] !== _0x547678['height']) {
                0 -= (_0x547678['height'] - _0x547678['baseHeight']) * _0x2f9e5d['scaleY'];
            }
            0 = 0 + _0x547678['width'] * _0x2f9e5d['scaleX'];
            0 = 0 + _0x547678['height'] * _0x2f9e5d['scaleY'];
            if (TileIntersectsBody(_0x2466c3, _0x32a70d) && (!_0x1c8307 || _0x1c8307['call'](_0x384509, _0x56c7d2, _0x547678)) && ProcessTileCallbacks(_0x547678, _0x56c7d2) && (_0x2fa889 || SeparateTile(_0xc24308, _0x32a70d, _0x547678, _0x2466c3, _0x2f9e5d, this['TILE_BIAS'], _0x4ee133))) {
                this['_total']++;
                _0x3be2ac = !![];
                if (_0x33add7) {
                    _0x33add7['call'](_0x384509, _0x56c7d2, _0x547678);
                }
                if (_0x2fa889 && _0x32a70d['onOverlap']) {
                    this['emit'](Events['TILE_OVERLAP'], _0x56c7d2, _0x547678, _0x32a70d);
                } else if (_0x32a70d['onCollide']) {
                    if ('aUhNW' !== 'eyRTZ') {
                        this['emit'](Events['TILE_COLLIDE'], _0x56c7d2, _0x547678, _0x32a70d);
                    } else {
                        var _0x3e1d93 = colliders[_0xc24308];
                        if (_0x3e1d93['active']) {
                            _0x3e1d93['update']();
                        }
                    }
                }
            }
        }
        return _0x3be2ac;
    },
    'collideGroupVsGroup': function (_0x476cf6, _0x13e706, _0x6a96d5, _0x3438a8, _0x1657f7, _0x4fa18a) {
        if (_0x476cf6['length'] === 0 || _0x13e706['length'] === 0) {
            return;
        }
        var _0x14fadd = _0x476cf6['getChildren']();
        for (var _0x4562fb = 0; _0x4562fb < _0x14fadd['length']; _0x4562fb++) {
            if ('JaorN' !== 'JaorN') {
                body = bodies[_0x4562fb];
                if (body['willDrawDebug']()) {
                    body['drawDebug'](graphics);
                }
            } else {
                this['collideSpriteVsGroup'](_0x14fadd[_0x4562fb], _0x13e706, _0x6a96d5, _0x3438a8, _0x1657f7, _0x4fa18a);
            }
        }
    },
    'wrap': function (_0x2c82b5, _0x3c37a7) {
        if (_0x2c82b5['body']) {
            if ('xFJMb' === 'xFJMb') {
                this['wrapObject'](_0x2c82b5, _0x3c37a7);
            } else {
                this['isPaused'] = !![];
                this['emit'](Events['PAUSE']);
                return this;
            }
        } else if (_0x2c82b5['getChildren']) {
            this['wrapArray'](_0x2c82b5['getChildren'](), _0x3c37a7);
        } else if (Array['isArray'](_0x2c82b5)) {
            this['wrapArray'](_0x2c82b5, _0x3c37a7);
        } else {
            this['wrapObject'](_0x2c82b5, _0x3c37a7);
        }
    },
    'wrapArray': function (_0x483c75, _0x217332) {
        for (var _0x3fce20 = 0; _0x3fce20 < _0x483c75['length']; _0x3fce20++) {
            this['wrapObject'](_0x483c75[_0x3fce20], _0x217332);
        }
    },
    'wrapObject': function (_0x56bc5b, _0xd0daf0) {
        if (_0xd0daf0 === undefined) {
            _0xd0daf0 = 0;
        }
        _0x56bc5b['x'] = Wrap(_0x56bc5b['x'], this['bounds']['left'] - _0xd0daf0, this['bounds']['right'] + _0xd0daf0);
        _0x56bc5b['y'] = Wrap(_0x56bc5b['y'], this['bounds']['top'] - _0xd0daf0, this['bounds']['bottom'] + _0xd0daf0);
    },
    'shutdown': function () {
        this['tree']['clear']();
        this['staticTree']['clear']();
        this['bodies']['clear']();
        this['staticBodies']['clear']();
        this['colliders']['destroy']();
        this['removeAllListeners']();
    },
    'destroy': function () {
        this['shutdown']();
        this['scene'] = null;
    }
});
module['exports'] = World;