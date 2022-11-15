var ArrayUtils = require('../../utils/array');
var BlendModes = require('../../renderer/BlendModes');
var Class = require('../../utils/Class');
var Components = require('../components');
var Events = require('../events');
var GameObject = require('../GameObject');
var Rectangle = require('../../geom/rectangle/Rectangle');
var Render = require('./ContainerRender');
var Union = require('../../geom/rectangle/Union');
var Vector2 = require('../../math/Vector2');
var Container = new Class({
    'Extends': GameObject,
    'Mixins': [
        Components['AlphaSingle'],
        Components['BlendMode'],
        Components['ComputedSize'],
        Components['Depth'],
        Components['Mask'],
        Components['Pipeline'],
        Components['Transform'],
        Components['Visible'],
        Render
    ],
    'initialize': function Container(_0x38deca, _0x48f74e, _0x3223b2, _0x45cd69) {
        GameObject['call'](this, _0x38deca, 'Container');
        this['list'] = [];
        this['exclusive'] = !![];
        this['maxSize'] = -1;
        this['position'] = 0;
        this['localTransform'] = new Components['TransformMatrix']();
        this['tempTransformMatrix'] = new Components['TransformMatrix']();
        this['_sortKey'] = '';
        this['_sysEvents'] = _0x38deca['sys']['events'];
        this['scrollFactorX'] = 1;
        this['scrollFactorY'] = 1;
        this['initPipeline']();
        this['setPosition'](_0x48f74e, _0x3223b2);
        this['clearAlpha']();
        this['setBlendMode'](BlendModes['SKIP_CHECK']);
        if (_0x45cd69) {
            if ('xHHxi' === 'xHHxi') {
                this['add'](_0x45cd69);
            } else {
                this['position']++;
                return this['list'][this['position']];
            }
        }
    },
    'originX': {
        'get': function () {
            return 0.5;
        }
    },
    'originY': {
        'get': function () {
            return 0.5;
        }
    },
    'displayOriginX': {
        'get': function () {
            return this['width'] * 0.5;
        }
    },
    'displayOriginY': {
        'get': function () {
            return this['height'] * 0.5;
        }
    },
    'setExclusive': function (_0x24f22f) {
        if (_0x24f22f === undefined) {
            if ('yDoVu' !== 'yDoVu') {
                this['position']--;
                return this['list'][this['position']];
            } else {
                _0x24f22f = !![];
            }
        }
        this['exclusive'] = _0x24f22f;
        return this;
    },
    'getBounds': function (_0x5d1e6c) {
        if (_0x5d1e6c === undefined) {
            _0x5d1e6c = new Rectangle();
        }
        _0x5d1e6c['setTo'](this['x'], this['y'], 0, 0);
        if (this['parentContainer']) {
            if ('srMUb' === 'yHyUD') {
                ArrayUtils['SendToBack'](this['list'], child);
                return this;
            } else {
                var _0x38b7e7 = this['parentContainer']['getBoundsTransformMatrix']();
                var _0x88ff58 = _0x38b7e7['transformPoint'](this['x'], this['y']);
                _0x5d1e6c['setTo'](_0x88ff58['x'], _0x88ff58['y'], 0, 0);
            }
        }
        if (this['list']['length'] > 0) {
            if ('LVXjH' === 'isMdu') {
                var _0x2fd68a = '4|1|2|0|3'['split']('|'), _0x42248a = 0;
                while (!![]) {
                    switch (_0x2fd68a[_0x42248a++]) {
                    case '0':
                        for (_0x66a6d1 = 0; _0x66a6d1 < this['list']['length']; _0x66a6d1++) {
                            _0x7e8bd[0] = this['list'][_0x66a6d1];
                            callback['apply'](context, _0x7e8bd);
                        }
                        continue;
                    case '1':
                        var _0x66a6d1;
                        continue;
                    case '2':
                        for (_0x66a6d1 = 2; _0x66a6d1 < arguments['length']; _0x66a6d1++) {
                            _0x7e8bd['push'](arguments[_0x66a6d1]);
                        }
                        continue;
                    case '3':
                        return this;
                    case '4':
                        var _0x7e8bd = [null];
                        continue;
                    }
                    break;
                }
            } else {
                var _0x4bebfa = this['list'];
                var _0x351620 = new Rectangle();
                var _0x3f4ad9 = ![];
                _0x5d1e6c['setEmpty']();
                for (var _0x39f666 = 0; _0x39f666 < _0x4bebfa['length']; _0x39f666++) {
                    if ('GgqCf' !== 'GgqCf') {
                        args[0] = this['list'][_0x39f666];
                        callback['apply'](context, args);
                    } else {
                        var _0x5c95e2 = _0x4bebfa[_0x39f666];
                        if (_0x5c95e2['getBounds']) {
                            if ('YHXfp' !== 'fXwIs') {
                                _0x5c95e2['getBounds'](_0x351620);
                                if (!_0x3f4ad9) {
                                    _0x5d1e6c['setTo'](_0x351620['x'], _0x351620['y'], _0x351620['width'], _0x351620['height']);
                                    _0x3f4ad9 = !![];
                                } else {
                                    if ('ebjOY' === 'ebjOY') {
                                        Union(_0x351620, _0x5d1e6c, _0x5d1e6c);
                                    } else {
                                        args['push'](arguments[_0x39f666]);
                                    }
                                }
                            } else {
                                gameObject['parentContainer'] = null;
                                gameObject['addToDisplayList']();
                            }
                        }
                    }
                }
            }
        }
        return _0x5d1e6c;
    },
    'addHandler': function (_0x54291c) {
        _0x54291c['once'](Events['DESTROY'], this['remove'], this);
        if (this['exclusive']) {
            if (_0x54291c['parentContainer']) {
                _0x54291c['parentContainer']['remove'](_0x54291c);
            }
            _0x54291c['removeFromDisplayList']();
            _0x54291c['parentContainer'] = this;
        }
    },
    'removeHandler': function (_0xe1300a) {
        _0xe1300a['off'](Events['DESTROY'], this['remove']);
        if (this['exclusive']) {
            _0xe1300a['parentContainer'] = null;
            _0xe1300a['addToDisplayList']();
        }
    },
    'pointToContainer': function (_0x572a7a, _0x470a53) {
        if (_0x470a53 === undefined) {
            _0x470a53 = new Vector2();
        }
        if (this['parentContainer']) {
            this['parentContainer']['pointToContainer'](_0x572a7a, _0x470a53);
        } else {
            if ('glAYh' !== 'glAYh') {
                removed[i]['destroy']();
            } else {
                _0x470a53 = new Vector2(_0x572a7a['x'], _0x572a7a['y']);
            }
        }
        var _0x212c46 = this['tempTransformMatrix'];
        _0x212c46['applyITRS'](this['x'], this['y'], this['rotation'], this['scaleX'], this['scaleY']);
        _0x212c46['invert']();
        _0x212c46['transformPoint'](_0x572a7a['x'], _0x572a7a['y'], _0x470a53);
        return _0x470a53;
    },
    'getBoundsTransformMatrix': function () {
        return this['getWorldTransformMatrix'](this['tempTransformMatrix'], this['localTransform']);
    },
    'add': function (_0xccc057) {
        ArrayUtils['Add'](this['list'], _0xccc057, this['maxSize'], this['addHandler'], this);
        return this;
    },
    'addAt': function (_0xc11999, _0xb6bbf5) {
        ArrayUtils['AddAt'](this['list'], _0xc11999, _0xb6bbf5, this['maxSize'], this['addHandler'], this);
        return this;
    },
    'getAt': function (_0x5cad3f) {
        return this['list'][_0x5cad3f];
    },
    'getIndex': function (_0x5d3eac) {
        return this['list']['indexOf'](_0x5d3eac);
    },
    'sort': function (_0x1b0d32, _0x487ac9) {
        if (!_0x1b0d32) {
            return this;
        }
        if (_0x487ac9 === undefined) {
            _0x487ac9 = function (_0x48dbb3, _0x567635) {
                return _0x48dbb3[_0x1b0d32] - _0x567635[_0x1b0d32];
            };
        }
        ArrayUtils['StableSort'](this['list'], _0x487ac9);
        return this;
    },
    'getByName': function (_0x3676b2) {
        return ArrayUtils['GetFirst'](this['list'], 'name', _0x3676b2);
    },
    'getRandom': function (_0x54eb06, _0x3adb97) {
        return ArrayUtils['GetRandom'](this['list'], _0x54eb06, _0x3adb97);
    },
    'getFirst': function (_0x5e1f57, _0x3b9b76, _0x1c9b3c, _0x1c5218) {
        return ArrayUtils['GetFirst'](this['list'], _0x5e1f57, _0x3b9b76, _0x1c9b3c, _0x1c5218);
    },
    'getAll': function (_0x10f928, _0x18b44d, _0x5a58fa, _0x3b4673) {
        return ArrayUtils['GetAll'](this['list'], _0x10f928, _0x18b44d, _0x5a58fa, _0x3b4673);
    },
    'count': function (_0x5f47bf, _0x5dd603, _0x11355b, _0x258c95) {
        return ArrayUtils['CountAllMatching'](this['list'], _0x5f47bf, _0x5dd603, _0x11355b, _0x258c95);
    },
    'swap': function (_0x492d90, _0x28e723) {
        ArrayUtils['Swap'](this['list'], _0x492d90, _0x28e723);
        return this;
    },
    'moveTo': function (_0x3f30f4, _0x271fc6) {
        ArrayUtils['MoveTo'](this['list'], _0x3f30f4, _0x271fc6);
        return this;
    },
    'moveAbove': function (_0x14cd34, _0x220ea1) {
        ArrayUtils['MoveAbove'](this['list'], _0x14cd34, _0x220ea1);
        return this;
    },
    'moveBelow': function (_0x1659be, _0x42e757) {
        ArrayUtils['MoveBelow'](this['list'], _0x1659be, _0x42e757);
        return this;
    },
    'remove': function (_0x4371ce, _0x299e5c) {
        var _0x7edb69 = ArrayUtils['Remove'](this['list'], _0x4371ce, this['removeHandler'], this);
        if (_0x299e5c && _0x7edb69) {
            if (!Array['isArray'](_0x7edb69)) {
                _0x7edb69 = [_0x7edb69];
            }
            for (var _0x7843df = 0; _0x7843df < _0x7edb69['length']; _0x7843df++) {
                _0x7edb69[_0x7843df]['destroy']();
            }
        }
        return this;
    },
    'removeAt': function (_0x190c1a, _0x3a852f) {
        var _0x208ba5 = ArrayUtils['RemoveAt'](this['list'], _0x190c1a, this['removeHandler'], this);
        if (_0x3a852f && _0x208ba5) {
            _0x208ba5['destroy']();
        }
        return this;
    },
    'removeBetween': function (_0xe0cdcf, _0x477b74, _0x39acb9) {
        var _0x5778a1 = ArrayUtils['RemoveBetween'](this['list'], _0xe0cdcf, _0x477b74, this['removeHandler'], this);
        if (_0x39acb9) {
            if ('nZvjU' !== 'nZvjU') {
                handler = function (_0x5e371f, _0xdf7b5b) {
                    return _0x5e371f[property] - _0xdf7b5b[property];
                };
            } else {
                for (var _0x461892 = 0; _0x461892 < _0x5778a1['length']; _0x461892++) {
                    if ('oIuju' !== 'tyYGm') {
                        _0x5778a1[_0x461892]['destroy']();
                    } else {
                        args['push'](arguments[_0x461892]);
                    }
                }
            }
        }
        return this;
    },
    'removeAll': function (_0x4e12d4) {
        var _0x30c0d0 = ArrayUtils['RemoveBetween'](this['list'], 0, this['list']['length'], this['removeHandler'], this);
        if (_0x4e12d4) {
            for (var _0x41cc67 = 0; _0x41cc67 < _0x30c0d0['length']; _0x41cc67++) {
                _0x30c0d0[_0x41cc67]['destroy']();
            }
        }
        return this;
    },
    'bringToTop': function (_0x436ccb) {
        ArrayUtils['BringToTop'](this['list'], _0x436ccb);
        return this;
    },
    'sendToBack': function (_0x3cde2d) {
        ArrayUtils['SendToBack'](this['list'], _0x3cde2d);
        return this;
    },
    'moveUp': function (_0x198eab) {
        ArrayUtils['MoveUp'](this['list'], _0x198eab);
        return this;
    },
    'moveDown': function (_0x21da90) {
        ArrayUtils['MoveDown'](this['list'], _0x21da90);
        return this;
    },
    'reverse': function () {
        this['list']['reverse']();
        return this;
    },
    'shuffle': function () {
        ArrayUtils['Shuffle'](this['list']);
        return this;
    },
    'replace': function (_0x214b9d, _0x74982a, _0x4ae4e3) {
        var _0x9ccfae = ArrayUtils['Replace'](this['list'], _0x214b9d, _0x74982a);
        if (_0x9ccfae) {
            this['addHandler'](_0x74982a);
            this['removeHandler'](_0x214b9d);
            if (_0x4ae4e3) {
                if ('GdHjL' === 'IPaQh') {
                    gameObject['once'](Events['DESTROY'], this['remove'], this);
                    if (this['exclusive']) {
                        if (gameObject['parentContainer']) {
                            gameObject['parentContainer']['remove'](gameObject);
                        }
                        gameObject['removeFromDisplayList']();
                        gameObject['parentContainer'] = this;
                    }
                } else {
                    _0x214b9d['destroy']();
                }
            }
        }
        return this;
    },
    'exists': function (_0x2042d5) {
        return this['list']['indexOf'](_0x2042d5) > -1;
    },
    'setAll': function (_0x32d565, _0x514dcb, _0x52b87a, _0x2c4f0b) {
        ArrayUtils['SetAll'](this['list'], _0x32d565, _0x514dcb, _0x52b87a, _0x2c4f0b);
        return this;
    },
    'each': function (_0x20043e, _0x3a12f3) {
        var _0x2ce4f0 = [null];
        var _0x4c9543;
        var _0x33d22f = this['list']['slice']();
        var _0x27c645 = _0x33d22f['length'];
        for (_0x4c9543 = 2; _0x4c9543 < arguments['length']; _0x4c9543++) {
            if ('yhfnX' === 'BXYPQ') {
                updateChildren = ![];
            } else {
                _0x2ce4f0['push'](arguments[_0x4c9543]);
            }
        }
        for (_0x4c9543 = 0; _0x4c9543 < _0x27c645; _0x4c9543++) {
            if ('hLxvf' !== 'hLxvf') {
                return this['height'] * 0.5;
            } else {
                _0x2ce4f0[0] = _0x33d22f[_0x4c9543];
                _0x20043e['apply'](_0x3a12f3, _0x2ce4f0);
            }
        }
        return this;
    },
    'iterate': function (_0x2a2962, _0x9b5031) {
        var _0x5f3478 = [null];
        var _0x4c1077;
        for (_0x4c1077 = 2; _0x4c1077 < arguments['length']; _0x4c1077++) {
            if ('ZofsW' === 'DxikG') {
                return null;
            } else {
                _0x5f3478['push'](arguments[_0x4c1077]);
            }
        }
        for (_0x4c1077 = 0; _0x4c1077 < this['list']['length']; _0x4c1077++) {
            _0x5f3478[0] = this['list'][_0x4c1077];
            _0x2a2962['apply'](_0x9b5031, _0x5f3478);
        }
        return this;
    },
    'setScrollFactor': function (_0x1e0f46, _0x32df37, _0xc52290) {
        if (_0x32df37 === undefined) {
            _0x32df37 = _0x1e0f46;
        }
        if (_0xc52290 === undefined) {
            _0xc52290 = ![];
        }
        this['scrollFactorX'] = _0x1e0f46;
        this['scrollFactorY'] = _0x32df37;
        if (_0xc52290) {
            if ('ZAjib' !== 'ZAjib') {
                ArrayUtils['AddAt'](this['list'], child, index, this['maxSize'], this['addHandler'], this);
                return this;
            } else {
                ArrayUtils['SetAll'](this['list'], 'scrollFactorX', _0x1e0f46);
                ArrayUtils['SetAll'](this['list'], 'scrollFactorY', _0x32df37);
            }
        }
        return this;
    },
    'length': {
        'get': function () {
            return this['list']['length'];
        }
    },
    'first': {
        'get': function () {
            this['position'] = 0;
            if (this['list']['length'] > 0) {
                if ('yfXrb' !== 'yfXrb') {
                    output['setTo'](tempRect['x'], tempRect['y'], tempRect['width'], tempRect['height']);
                    hasSetFirst = !![];
                } else {
                    return this['list'][0];
                }
            } else {
                return null;
            }
        }
    },
    'last': {
        'get': function () {
            if (this['list']['length'] > 0) {
                this['position'] = this['list']['length'] - 1;
                return this['list'][this['position']];
            } else {
                return null;
            }
        }
    },
    'next': {
        'get': function () {
            if (this['position'] < this['list']['length']) {
                this['position']++;
                return this['list'][this['position']];
            } else {
                if ('bmAiE' !== 'lvCUo') {
                    return null;
                } else {
                    ArrayUtils['MoveDown'](this['list'], child);
                    return this;
                }
            }
        }
    },
    'previous': {
        'get': function () {
            if (this['position'] > 0) {
                this['position']--;
                return this['list'][this['position']];
            } else {
                return null;
            }
        }
    },
    'preDestroy': function () {
        this['removeAll'](!!this['exclusive']);
        this['localTransform']['destroy']();
        this['tempTransformMatrix']['destroy']();
        this['list'] = [];
    }
});
module['exports'] = Container;