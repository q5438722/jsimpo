/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @author       Felipe Alfonso <@bitnenfer>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var _0x3a9a = [
    'bqnJH',
    'GetRandom',
    'CountAllMatching',
    'Swap',
    'MoveAbove',
    'MoveBelow',
    'Remove',
    'removeHandler',
    'HYKKo',
    'destroy',
    'RemoveAt',
    'hLoGB',
    'RemoveBetween',
    'hweAu',
    'KWANs',
    'BringToTop',
    'SendToBack',
    'MoveDown',
    'reverse',
    'Shuffle',
    'Replace',
    'ebwTS',
    'push',
    'XJRoY',
    '0|4|1|3|2',
    'vxKmQ',
    'RokSJ',
    'apply',
    '1|5|4|3|2|0',
    'fgIrU',
    'SetAll',
    'svBYf',
    'SOWBa',
    'position',
    'AasdD',
    'localTransform',
    '380296zSmufu',
    '362038RWzcun',
    '17eDxLMT',
    '89279EPqBhP',
    '1239752tManKF',
    '1hxgNnm',
    '96EslOxO',
    '18211SkAJWQ',
    '1615094vmLNpt',
    '2776422Lkhokj',
    '../../utils/array',
    '../../renderer/BlendModes',
    '../../utils/Class',
    '../components',
    '../events',
    '../../geom/rectangle/Rectangle',
    './ContainerRender',
    '../../geom/rectangle/Union',
    '../../math/Vector2',
    'AlphaSingle',
    'BlendMode',
    'ComputedSize',
    'Depth',
    'Mask',
    'Pipeline',
    'Transform',
    'Visible',
    'Container',
    'call',
    'quRDx',
    'exclusive',
    'maxSize',
    'TransformMatrix',
    'tempTransformMatrix',
    '_sortKey',
    '_sysEvents',
    'sys',
    'events',
    'scrollFactorX',
    'scrollFactorY',
    'initPipeline',
    'setPosition',
    'clearAlpha',
    'setBlendMode',
    'BCHWV',
    'width',
    'TNVWG',
    'height',
    'RNfIT',
    'split',
    'parentContainer',
    'getBoundsTransformMatrix',
    'transformPoint',
    'setTo',
    'oEznm',
    'list',
    'length',
    'SmUNB',
    'srCry',
    'once',
    'DESTROY',
    'remove',
    'off',
    'addToDisplayList',
    '6|2|0|3|5|4|1',
    'czkIq',
    'pointToContainer',
    'applyITRS',
    'rotation',
    'scaleX',
    'scaleY',
    'invert',
    'getWorldTransformMatrix',
    'Add',
    'addHandler',
    'AddAt',
    'indexOf',
    'gUjhQ',
    'StableSort',
    'GetFirst'
];
var _0x2e1b1b = _0x1fe8;
(function (_0x1c193c, _0x16ce36) {
    var _0x3172aa = _0x1fe8;
    while (!![]) {
        try {
            var _0x3de7cd = parseInt(_0x3172aa(0x1cf)) + parseInt(_0x3172aa(0x1d0)) + -parseInt(_0x3172aa(0x1d1)) * parseInt(_0x3172aa(0x1d2)) + parseInt(_0x3172aa(0x1d3)) * -parseInt(_0x3172aa(0x1d4)) + -parseInt(_0x3172aa(0x1d5)) * -parseInt(_0x3172aa(0x1d6)) + -parseInt(_0x3172aa(0x1d7)) + parseInt(_0x3172aa(0x1d8));
            if (_0x3de7cd === _0x16ce36)
                break;
            else
                _0x1c193c['push'](_0x1c193c['shift']());
        } catch (_0x16ad92) {
            _0x1c193c['push'](_0x1c193c['shift']());
        }
    }
}(_0x3a9a, -0x12f79f * 0x1 + -0x19eba0 + -0xa99 * -0x586));
var ArrayUtils = require(_0x2e1b1b(0x1d9)), BlendModes = require(_0x2e1b1b(0x1da)), Class = require(_0x2e1b1b(0x1db)), Components = require(_0x2e1b1b(0x1dc)), Events = require(_0x2e1b1b(0x1dd)), GameObject = require('../GameObject'), Rectangle = require(_0x2e1b1b(0x1de)), Render = require(_0x2e1b1b(0x1df)), Union = require(_0x2e1b1b(0x1e0)), Vector2 = require(_0x2e1b1b(0x1e1)), Container = new Class({
        'Extends': GameObject,
        'Mixins': [
            Components[_0x2e1b1b(0x1e2)],
            Components[_0x2e1b1b(0x1e3)],
            Components[_0x2e1b1b(0x1e4)],
            Components[_0x2e1b1b(0x1e5)],
            Components[_0x2e1b1b(0x1e6)],
            Components[_0x2e1b1b(0x1e7)],
            Components[_0x2e1b1b(0x1e8)],
            Components[_0x2e1b1b(0x1e9)],
            Render
        ],
        'initialize': function Container(_0xeb3272, _0x258286, _0xd3901c, _0x3262f7) {
            var _0x2265fd = _0x2e1b1b, _0x3b2e5f = { 'quRDx': _0x2265fd(0x1ea) };
            GameObject[_0x2265fd(0x1eb)](this, _0xeb3272, _0x3b2e5f[_0x2265fd(0x1ec)]), this['list'] = [], this[_0x2265fd(0x1ed)] = !![], this[_0x2265fd(0x1ee)] = -(-0x26d1 + 0x1de * 0x6 + 0x1b9e), this['position'] = -0x14fb * 0x1 + -0x2bf + 0x17ba, this['localTransform'] = new Components[(_0x2265fd(0x1ef))](), this[_0x2265fd(0x1f0)] = new Components['TransformMatrix'](), this[_0x2265fd(0x1f1)] = '', this[_0x2265fd(0x1f2)] = _0xeb3272[_0x2265fd(0x1f3)][_0x2265fd(0x1f4)], this[_0x2265fd(0x1f5)] = -0x2e6 * 0x4 + 0x228f + -0x16f6 * 0x1, this[_0x2265fd(0x1f6)] = 0xdfb + 0x2060 + -0x2e5a, this[_0x2265fd(0x1f7)](), this[_0x2265fd(0x1f8)](_0x258286, _0xd3901c), this[_0x2265fd(0x1f9)](), this[_0x2265fd(0x1fa)](BlendModes['SKIP_CHECK']), _0x3262f7 && this['add'](_0x3262f7);
        },
        'originX': {
            'get': function () {
                return -0x23 * -0x62 + -0x1 * 0xaa9 + -0x2bd + 0.5;
            }
        },
        'originY': {
            'get': function () {
                return 0x1 * 0x24af + 0x1 * 0x83 + -0x2532 + 0.5;
            }
        },
        'displayOriginX': {
            'get': function () {
                var _0x398ad3 = _0x2e1b1b, _0x27bc42 = {
                        'BCHWV': function (_0x2171cd, _0x30dc30) {
                            return _0x2171cd * _0x30dc30;
                        }
                    };
                return _0x27bc42[_0x398ad3(0x1fb)](this[_0x398ad3(0x1fc)], 0x26ee + 0x19fd + -0x40eb + 0.5);
            }
        },
        'displayOriginY': {
            'get': function () {
                var _0x5e244c = _0x2e1b1b, _0xace906 = {
                        'TNVWG': function (_0x3c9a41, _0x5213d6) {
                            return _0x3c9a41 * _0x5213d6;
                        }
                    };
                return _0xace906[_0x5e244c(0x1fd)](this[_0x5e244c(0x1fe)], 0x1a38 + 0x5d1 * -0x1 + -0x1467 + 0.5);
            }
        },
        'setExclusive': function (_0xe34145) {
            var _0x232725 = _0x2e1b1b;
            return _0xe34145 === undefined && (_0xe34145 = !![]), this[_0x232725(0x1ed)] = _0xe34145, this;
        },
        'getBounds': function (_0x3f59e9) {
            var _0x5b6b26 = _0x2e1b1b, _0xd28802 = {
                    'RNfIT': '2|4|1|3|0',
                    'oEznm': function (_0x359605, _0x57d749) {
                        return _0x359605 === _0x57d749;
                    },
                    'rYoOs': function (_0x5a2429, _0x294e32) {
                        return _0x5a2429 > _0x294e32;
                    },
                    'SmUNB': function (_0x2b59f8, _0x1518fb) {
                        return _0x2b59f8 < _0x1518fb;
                    },
                    'srCry': function (_0x1812c7, _0x3af407, _0x52bff6, _0xdd856b) {
                        return _0x1812c7(_0x3af407, _0x52bff6, _0xdd856b);
                    }
                }, _0x34e09e = _0xd28802[_0x5b6b26(0x1ff)][_0x5b6b26(0x200)]('|'), _0x395701 = 0x9b * 0x5 + -0x16a2 * 0x1 + 0x139b;
            while (!![]) {
                switch (_0x34e09e[_0x395701++]) {
                case '0':
                    return _0x3f59e9;
                case '1':
                    if (this[_0x5b6b26(0x201)]) {
                        var _0x245838 = this[_0x5b6b26(0x201)][_0x5b6b26(0x202)](), _0x43f28f = _0x245838[_0x5b6b26(0x203)](this['x'], this['y']);
                        _0x3f59e9[_0x5b6b26(0x204)](_0x43f28f['x'], _0x43f28f['y'], 0x1 * -0x1e81 + 0xbea + 0x1297, 0x5 * -0x5f3 + 0x2354 + 0x595 * -0x1);
                    }
                    continue;
                case '2':
                    _0xd28802[_0x5b6b26(0x205)](_0x3f59e9, undefined) && (_0x3f59e9 = new Rectangle());
                    continue;
                case '3':
                    if (_0xd28802['rYoOs'](this[_0x5b6b26(0x206)][_0x5b6b26(0x207)], 0x1a44 * 0x1 + 0x2425 + -0x1 * 0x3e69)) {
                        var _0x36f6a2 = this[_0x5b6b26(0x206)], _0x3fedf8 = new Rectangle(), _0x19a0f2 = ![];
                        _0x3f59e9['setEmpty']();
                        for (var _0x13adf0 = 0x1c2a + -0x2456 + 0x20b * 0x4; _0xd28802[_0x5b6b26(0x208)](_0x13adf0, _0x36f6a2[_0x5b6b26(0x207)]); _0x13adf0++) {
                            var _0x24662c = _0x36f6a2[_0x13adf0];
                            _0x24662c['getBounds'] && (_0x24662c['getBounds'](_0x3fedf8), !_0x19a0f2 ? (_0x3f59e9[_0x5b6b26(0x204)](_0x3fedf8['x'], _0x3fedf8['y'], _0x3fedf8[_0x5b6b26(0x1fc)], _0x3fedf8[_0x5b6b26(0x1fe)]), _0x19a0f2 = !![]) : _0xd28802[_0x5b6b26(0x209)](Union, _0x3fedf8, _0x3f59e9, _0x3f59e9));
                        }
                    }
                    continue;
                case '4':
                    _0x3f59e9[_0x5b6b26(0x204)](this['x'], this['y'], 0x1d9 + 0x2372 + -0x254b, -0x1218 + -0x115b * 0x1 + 0x2373);
                    continue;
                }
                break;
            }
        },
        'addHandler': function (_0x772d88) {
            var _0xf6dba8 = _0x2e1b1b;
            _0x772d88[_0xf6dba8(0x20a)](Events[_0xf6dba8(0x20b)], this[_0xf6dba8(0x20c)], this), this['exclusive'] && (_0x772d88[_0xf6dba8(0x201)] && _0x772d88['parentContainer'][_0xf6dba8(0x20c)](_0x772d88), _0x772d88['removeFromDisplayList'](), _0x772d88[_0xf6dba8(0x201)] = this);
        },
        'removeHandler': function (_0x36852d) {
            var _0xb80be1 = _0x2e1b1b;
            _0x36852d[_0xb80be1(0x20d)](Events[_0xb80be1(0x20b)], this[_0xb80be1(0x20c)]), this[_0xb80be1(0x1ed)] && (_0x36852d[_0xb80be1(0x201)] = null, _0x36852d[_0xb80be1(0x20e)]());
        },
        'pointToContainer': function (_0x121af2, _0x518462) {
            var _0x46d83d = _0x2e1b1b, _0xb15dd2 = {
                    'czkIq': _0x46d83d(0x20f),
                    'NBiGE': function (_0x1760e3, _0x2fcb39) {
                        return _0x1760e3 === _0x2fcb39;
                    }
                }, _0x3392ad = _0xb15dd2[_0x46d83d(0x210)][_0x46d83d(0x200)]('|'), _0x1999cc = -0x72 * -0x4e + 0x1bbf + 0x1 * -0x3e7b;
            while (!![]) {
                switch (_0x3392ad[_0x1999cc++]) {
                case '0':
                    var _0x493f9c = this[_0x46d83d(0x1f0)];
                    continue;
                case '1':
                    return _0x518462;
                case '2':
                    this[_0x46d83d(0x201)] ? this[_0x46d83d(0x201)][_0x46d83d(0x211)](_0x121af2, _0x518462) : _0x518462 = new Vector2(_0x121af2['x'], _0x121af2['y']);
                    continue;
                case '3':
                    _0x493f9c[_0x46d83d(0x212)](this['x'], this['y'], this[_0x46d83d(0x213)], this[_0x46d83d(0x214)], this[_0x46d83d(0x215)]);
                    continue;
                case '4':
                    _0x493f9c[_0x46d83d(0x203)](_0x121af2['x'], _0x121af2['y'], _0x518462);
                    continue;
                case '5':
                    _0x493f9c[_0x46d83d(0x216)]();
                    continue;
                case '6':
                    _0xb15dd2['NBiGE'](_0x518462, undefined) && (_0x518462 = new Vector2());
                    continue;
                }
                break;
            }
        },
        'getBoundsTransformMatrix': function () {
            var _0x2e7813 = _0x2e1b1b;
            return this[_0x2e7813(0x217)](this['tempTransformMatrix'], this['localTransform']);
        },
        'add': function (_0x3f4183) {
            var _0x5ba0da = _0x2e1b1b;
            return ArrayUtils[_0x5ba0da(0x218)](this[_0x5ba0da(0x206)], _0x3f4183, this[_0x5ba0da(0x1ee)], this[_0x5ba0da(0x219)], this), this;
        },
        'addAt': function (_0xee5123, _0x521fff) {
            var _0x20f7d4 = _0x2e1b1b;
            return ArrayUtils[_0x20f7d4(0x21a)](this[_0x20f7d4(0x206)], _0xee5123, _0x521fff, this[_0x20f7d4(0x1ee)], this[_0x20f7d4(0x219)], this), this;
        },
        'getAt': function (_0x877e92) {
            var _0x5aa7d7 = _0x2e1b1b;
            return this[_0x5aa7d7(0x206)][_0x877e92];
        },
        'getIndex': function (_0x343e57) {
            var _0x5f4daa = _0x2e1b1b;
            return this['list'][_0x5f4daa(0x21b)](_0x343e57);
        },
        'sort': function (_0x3e9e48, _0x2f152a) {
            var _0x1043e5 = _0x2e1b1b, _0x1ec86e = {
                    'gUjhQ': function (_0x1f52fb, _0x501132) {
                        return _0x1f52fb === _0x501132;
                    }
                };
            if (!_0x3e9e48)
                return this;
            return _0x1ec86e[_0x1043e5(0x21c)](_0x2f152a, undefined) && (_0x2f152a = function (_0x2e9403, _0x3dfd23) {
                return _0x2e9403[_0x3e9e48] - _0x3dfd23[_0x3e9e48];
            }), ArrayUtils[_0x1043e5(0x21d)](this[_0x1043e5(0x206)], _0x2f152a), this;
        },
        'getByName': function (_0x2dda74) {
            var _0x4fdf93 = _0x2e1b1b, _0x4ce644 = { 'bqnJH': 'name' };
            return ArrayUtils[_0x4fdf93(0x21e)](this[_0x4fdf93(0x206)], _0x4ce644[_0x4fdf93(0x21f)], _0x2dda74);
        },
        'getRandom': function (_0x159b0c, _0x42a6c7) {
            var _0x17000a = _0x2e1b1b;
            return ArrayUtils[_0x17000a(0x220)](this['list'], _0x159b0c, _0x42a6c7);
        },
        'getFirst': function (_0x472d4f, _0x3b4b3c, _0x10466c, _0x4e6a3b) {
            var _0x12a9bf = _0x2e1b1b;
            return ArrayUtils[_0x12a9bf(0x21e)](this['list'], _0x472d4f, _0x3b4b3c, _0x10466c, _0x4e6a3b);
        },
        'getAll': function (_0x270e53, _0x149d64, _0x514005, _0x175812) {
            return ArrayUtils['GetAll'](this['list'], _0x270e53, _0x149d64, _0x514005, _0x175812);
        },
        'count': function (_0x584fb7, _0xb6a83b, _0x59d7f5, _0x5ce82b) {
            var _0x3c1dc2 = _0x2e1b1b;
            return ArrayUtils[_0x3c1dc2(0x221)](this[_0x3c1dc2(0x206)], _0x584fb7, _0xb6a83b, _0x59d7f5, _0x5ce82b);
        },
        'swap': function (_0x55e817, _0x31f2a8) {
            var _0x395462 = _0x2e1b1b;
            return ArrayUtils[_0x395462(0x222)](this[_0x395462(0x206)], _0x55e817, _0x31f2a8), this;
        },
        'moveTo': function (_0x383dcc, _0x7323e7) {
            var _0x4c86fc = _0x2e1b1b;
            return ArrayUtils['MoveTo'](this[_0x4c86fc(0x206)], _0x383dcc, _0x7323e7), this;
        },
        'moveAbove': function (_0x593fc3, _0x4a1dfd) {
            var _0x162bcc = _0x2e1b1b;
            return ArrayUtils[_0x162bcc(0x223)](this[_0x162bcc(0x206)], _0x593fc3, _0x4a1dfd), this;
        },
        'moveBelow': function (_0x55c669, _0x4089e7) {
            var _0x488783 = _0x2e1b1b;
            return ArrayUtils[_0x488783(0x224)](this['list'], _0x55c669, _0x4089e7), this;
        },
        'remove': function (_0x59b271, _0x51ac4c) {
            var _0x4f5c6 = _0x2e1b1b, _0x56a081 = {
                    'HYKKo': function (_0x30a001, _0x4037a4) {
                        return _0x30a001 && _0x4037a4;
                    },
                    'wrycs': function (_0x5de443, _0x176cde) {
                        return _0x5de443 < _0x176cde;
                    }
                }, _0x40ec77 = ArrayUtils[_0x4f5c6(0x225)](this[_0x4f5c6(0x206)], _0x59b271, this[_0x4f5c6(0x226)], this);
            if (_0x56a081[_0x4f5c6(0x227)](_0x51ac4c, _0x40ec77)) {
                !Array['isArray'](_0x40ec77) && (_0x40ec77 = [_0x40ec77]);
                for (var _0x537972 = -0x4 * -0x73f + 0xf1 + -0x1ded; _0x56a081['wrycs'](_0x537972, _0x40ec77[_0x4f5c6(0x207)]); _0x537972++) {
                    _0x40ec77[_0x537972][_0x4f5c6(0x228)]();
                }
            }
            return this;
        },
        'removeAt': function (_0x5f404f, _0xafa92a) {
            var _0x488582 = _0x2e1b1b, _0x4f0c18 = {
                    'hLoGB': function (_0xf62265, _0x2822db) {
                        return _0xf62265 && _0x2822db;
                    }
                }, _0x154835 = ArrayUtils[_0x488582(0x229)](this[_0x488582(0x206)], _0x5f404f, this[_0x488582(0x226)], this);
            return _0x4f0c18[_0x488582(0x22a)](_0xafa92a, _0x154835) && _0x154835[_0x488582(0x228)](), this;
        },
        'removeBetween': function (_0x1f29d5, _0x2d87d1, _0x5e5ad8) {
            var _0x10dd2f = _0x2e1b1b, _0x9a0824 = {
                    'hweAu': function (_0x22970b, _0x4a1903) {
                        return _0x22970b < _0x4a1903;
                    }
                }, _0x5bdb83 = ArrayUtils[_0x10dd2f(0x22b)](this[_0x10dd2f(0x206)], _0x1f29d5, _0x2d87d1, this[_0x10dd2f(0x226)], this);
            if (_0x5e5ad8)
                for (var _0x43061a = -0x1d08 + -0xf19 + 0x2c21; _0x9a0824[_0x10dd2f(0x22c)](_0x43061a, _0x5bdb83[_0x10dd2f(0x207)]); _0x43061a++) {
                    _0x5bdb83[_0x43061a][_0x10dd2f(0x228)]();
                }
            return this;
        },
        'removeAll': function (_0x28df36) {
            var _0x901bdd = _0x2e1b1b, _0x1140f6 = {
                    'KWANs': function (_0x30d0b1, _0x2a986d) {
                        return _0x30d0b1 < _0x2a986d;
                    }
                }, _0x3027e1 = ArrayUtils[_0x901bdd(0x22b)](this[_0x901bdd(0x206)], 0x15aa + 0x18bd + 0x1 * -0x2e67, this[_0x901bdd(0x206)][_0x901bdd(0x207)], this[_0x901bdd(0x226)], this);
            if (_0x28df36)
                for (var _0x38322a = 0x1b94 + -0xd54 * -0x1 + -0x28e8; _0x1140f6[_0x901bdd(0x22d)](_0x38322a, _0x3027e1['length']); _0x38322a++) {
                    _0x3027e1[_0x38322a]['destroy']();
                }
            return this;
        },
        'bringToTop': function (_0x218058) {
            var _0x33fa4b = _0x2e1b1b;
            return ArrayUtils[_0x33fa4b(0x22e)](this[_0x33fa4b(0x206)], _0x218058), this;
        },
        'sendToBack': function (_0x190d31) {
            var _0x30396 = _0x2e1b1b;
            return ArrayUtils[_0x30396(0x22f)](this[_0x30396(0x206)], _0x190d31), this;
        },
        'moveUp': function (_0x2a7d16) {
            var _0x28e97b = _0x2e1b1b;
            return ArrayUtils['MoveUp'](this[_0x28e97b(0x206)], _0x2a7d16), this;
        },
        'moveDown': function (_0x419bdc) {
            var _0x447a42 = _0x2e1b1b;
            return ArrayUtils[_0x447a42(0x230)](this[_0x447a42(0x206)], _0x419bdc), this;
        },
        'reverse': function () {
            var _0x2d4bb8 = _0x2e1b1b;
            return this[_0x2d4bb8(0x206)][_0x2d4bb8(0x231)](), this;
        },
        'shuffle': function () {
            var _0xda7a45 = _0x2e1b1b;
            return ArrayUtils[_0xda7a45(0x232)](this['list']), this;
        },
        'replace': function (_0xd9350, _0x25611b, _0x5b8d27) {
            var _0x57dddf = _0x2e1b1b, _0x3492d6 = ArrayUtils[_0x57dddf(0x233)](this[_0x57dddf(0x206)], _0xd9350, _0x25611b);
            return _0x3492d6 && (this[_0x57dddf(0x219)](_0x25611b), this['removeHandler'](_0xd9350), _0x5b8d27 && _0xd9350[_0x57dddf(0x228)]()), this;
        },
        'exists': function (_0x344e06) {
            var _0x346127 = _0x2e1b1b, _0x4eaae0 = {
                    'ebwTS': function (_0x5517b3, _0x1b1579) {
                        return _0x5517b3 > _0x1b1579;
                    }
                };
            return _0x4eaae0[_0x346127(0x234)](this[_0x346127(0x206)]['indexOf'](_0x344e06), -(-0x7c9 * -0x2 + 0x1888 + -0x2819));
        },
        'setAll': function (_0x2d4d7d, _0x324fde, _0x3173f2, _0x15537c) {
            var _0x1cc02b = _0x2e1b1b;
            return ArrayUtils['SetAll'](this[_0x1cc02b(0x206)], _0x2d4d7d, _0x324fde, _0x3173f2, _0x15537c), this;
        },
        'each': function (_0xa653aa, _0x4c2a78) {
            var _0x202197 = _0x2e1b1b, _0x5f1ae2 = {
                    'zsdet': function (_0x4b5fd7, _0x394cf4) {
                        return _0x4b5fd7 < _0x394cf4;
                    },
                    'XJRoY': function (_0x32dafe, _0xe1a3e8) {
                        return _0x32dafe < _0xe1a3e8;
                    }
                }, _0x1b8868 = [null], _0x19d810, _0x3c783a = this[_0x202197(0x206)]['slice'](), _0x52bc5a = _0x3c783a['length'];
            for (_0x19d810 = -0xcc3 + 0xb6 + 0x405 * 0x3; _0x5f1ae2['zsdet'](_0x19d810, arguments['length']); _0x19d810++) {
                _0x1b8868[_0x202197(0x235)](arguments[_0x19d810]);
            }
            for (_0x19d810 = -0x249 + 0x6 * 0x4a9 + -0x19ad; _0x5f1ae2[_0x202197(0x236)](_0x19d810, _0x52bc5a); _0x19d810++) {
                _0x1b8868[-0x1 * -0x1c36 + 0xa6 * 0xb + -0x2358] = _0x3c783a[_0x19d810], _0xa653aa['apply'](_0x4c2a78, _0x1b8868);
            }
            return this;
        },
        'iterate': function (_0x488663, _0x408e2b) {
            var _0x2c4f40 = _0x2e1b1b, _0xbaa5dc = {
                    'vxKmQ': _0x2c4f40(0x237),
                    'RokSJ': function (_0x4bc759, _0x14906a) {
                        return _0x4bc759 < _0x14906a;
                    }
                }, _0x534197 = _0xbaa5dc[_0x2c4f40(0x238)]['split']('|'), _0x4a6863 = 0xe75 * 0x2 + -0x5 * -0x2b6 + -0x2a78;
            while (!![]) {
                switch (_0x534197[_0x4a6863++]) {
                case '0':
                    var _0x51b061 = [null];
                    continue;
                case '1':
                    for (_0x129ff2 = 0x1c87 + -0x221 + -0x1a64; _0xbaa5dc['RokSJ'](_0x129ff2, arguments[_0x2c4f40(0x207)]); _0x129ff2++) {
                        _0x51b061[_0x2c4f40(0x235)](arguments[_0x129ff2]);
                    }
                    continue;
                case '2':
                    return this;
                case '3':
                    for (_0x129ff2 = -0x1a95 + 0x1 * 0x13c0 + 0x21 * 0x35; _0xbaa5dc[_0x2c4f40(0x239)](_0x129ff2, this[_0x2c4f40(0x206)][_0x2c4f40(0x207)]); _0x129ff2++) {
                        _0x51b061[-0x9c4 * -0x1 + -0x2 * -0x9c8 + -0xeaa * 0x2] = this[_0x2c4f40(0x206)][_0x129ff2], _0x488663[_0x2c4f40(0x23a)](_0x408e2b, _0x51b061);
                    }
                    continue;
                case '4':
                    var _0x129ff2;
                    continue;
                }
                break;
            }
        },
        'setScrollFactor': function (_0x55726b, _0x87c7e3, _0x4e0ff2) {
            var _0xd444d3 = _0x2e1b1b, _0x151d8f = {
                    'fgIrU': function (_0x312713, _0x122ceb) {
                        return _0x312713 === _0x122ceb;
                    },
                    'cZmZv': _0xd444d3(0x1f6),
                    'svBYf': function (_0x59db96, _0x7cc177) {
                        return _0x59db96 === _0x7cc177;
                    }
                }, _0x3b5fc9 = _0xd444d3(0x23b)[_0xd444d3(0x200)]('|'), _0xc22130 = -0x1139 * -0x2 + -0x1609 * 0x1 + 0x423 * -0x3;
            while (!![]) {
                switch (_0x3b5fc9[_0xc22130++]) {
                case '0':
                    return this;
                case '1':
                    _0x151d8f[_0xd444d3(0x23c)](_0x87c7e3, undefined) && (_0x87c7e3 = _0x55726b);
                    continue;
                case '2':
                    _0x4e0ff2 && (ArrayUtils[_0xd444d3(0x23d)](this[_0xd444d3(0x206)], 'scrollFactorX', _0x55726b), ArrayUtils[_0xd444d3(0x23d)](this[_0xd444d3(0x206)], _0x151d8f['cZmZv'], _0x87c7e3));
                    continue;
                case '3':
                    this['scrollFactorY'] = _0x87c7e3;
                    continue;
                case '4':
                    this['scrollFactorX'] = _0x55726b;
                    continue;
                case '5':
                    _0x151d8f[_0xd444d3(0x23e)](_0x4e0ff2, undefined) && (_0x4e0ff2 = ![]);
                    continue;
                }
                break;
            }
        },
        'length': {
            'get': function () {
                var _0x3be3f3 = _0x2e1b1b;
                return this[_0x3be3f3(0x206)]['length'];
            }
        },
        'first': {
            'get': function () {
                var _0x23e395 = _0x2e1b1b;
                return this['position'] = 0x135f + -0x425 + -0x2 * 0x79d, this[_0x23e395(0x206)][_0x23e395(0x207)] > -0x26f7 + 0x2431 + 0x2c6 ? this[_0x23e395(0x206)][-0xb * -0x18d + -0x1b11 + 0xa02] : null;
            }
        },
        'last': {
            'get': function () {
                var _0x2e91fd = _0x2e1b1b, _0x2f53cd = {
                        'SOWBa': function (_0x552578, _0xa93f95) {
                            return _0x552578 > _0xa93f95;
                        }
                    };
                return _0x2f53cd[_0x2e91fd(0x23f)](this['list'][_0x2e91fd(0x207)], 0x9 * -0x457 + -0x4 * 0x1ad + 0x2dc3) ? (this[_0x2e91fd(0x240)] = this[_0x2e91fd(0x206)]['length'] - (-0x3 * 0x86 + 0x22b1 + 0x6 * -0x585), this[_0x2e91fd(0x206)][this[_0x2e91fd(0x240)]]) : null;
            }
        },
        'next': {
            'get': function () {
                var _0x5e0ef3 = _0x2e1b1b;
                return this[_0x5e0ef3(0x240)] < this[_0x5e0ef3(0x206)]['length'] ? (this[_0x5e0ef3(0x240)]++, this[_0x5e0ef3(0x206)][this[_0x5e0ef3(0x240)]]) : null;
            }
        },
        'previous': {
            'get': function () {
                var _0x1709f0 = _0x2e1b1b, _0x1268a0 = {
                        'AasdD': function (_0x1bbbd8, _0x37d391) {
                            return _0x1bbbd8 > _0x37d391;
                        }
                    };
                return _0x1268a0[_0x1709f0(0x241)](this[_0x1709f0(0x240)], -0x1784 + 0xc76 * -0x2 + -0x1f0 * -0x19) ? (this[_0x1709f0(0x240)]--, this[_0x1709f0(0x206)][this[_0x1709f0(0x240)]]) : null;
            }
        },
        'preDestroy': function () {
            var _0x2f8e5c = _0x2e1b1b;
            this['removeAll'](!!this[_0x2f8e5c(0x1ed)]), this[_0x2f8e5c(0x242)]['destroy'](), this[_0x2f8e5c(0x1f0)][_0x2f8e5c(0x228)](), this[_0x2f8e5c(0x206)] = [];
        }
    });
function _0x1fe8(_0x52581c, _0x3641d2) {
    return _0x1fe8 = function (_0x4eb16e, _0x3636b4) {
        _0x4eb16e = _0x4eb16e - (0x263c + 0x94b + 0x134 * -0x26);
        var _0x528d12 = _0x3a9a[_0x4eb16e];
        return _0x528d12;
    }, _0x1fe8(_0x52581c, _0x3641d2);
}
module['exports'] = Container;
