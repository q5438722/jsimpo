
var _0x11d501 = _0x50ca;
function _0x50ca(_0x2c9eef, _0x77dacd) {
    return _0x50ca = function (_0x321770, _0x13c60a) {
        _0x321770 = _0x321770 - (-0x19e6 * 0x1 + -0x1f4c + 0x39a5);
        var _0x120b72 = _0x552f[_0x321770];
        return _0x120b72;
    }, _0x50ca(_0x2c9eef, _0x77dacd);
}
(function (_0x5dbce6, _0xaa613) {
    var _0x4eef9 = _0x50ca;
    while (!![]) {
        try {
            var _0x333edd = -parseInt(_0x4eef9(0x73)) + -parseInt(_0x4eef9(0x74)) + -parseInt(_0x4eef9(0x75)) * parseInt(_0x4eef9(0x76)) + parseInt(_0x4eef9(0x77)) * parseInt(_0x4eef9(0x78)) + parseInt(_0x4eef9(0x79)) * -parseInt(_0x4eef9(0x7a)) + -parseInt(_0x4eef9(0x7b)) * parseInt(_0x4eef9(0x7c)) + -parseInt(_0x4eef9(0x7d)) * -parseInt(_0x4eef9(0x7e));
            if (_0x333edd === _0xaa613)
                break;
            else
                _0x5dbce6['push'](_0x5dbce6['shift']());
        } catch (_0x4fea12) {
            _0x5dbce6['push'](_0x5dbce6['shift']());
        }
    }
}(_0x552f, 0x18427 * 0x6 + 0x3ba7 * -0x3d + 0xe1b48));
var AngleBetweenPoints = require('../../math/angle/BetweenPoints'), Body = require('./Body'), Clamp = require(_0x11d501(0x7f)), Class = require(_0x11d501(0x80)), Collider = require(_0x11d501(0x81)), CONST = require('./const'), DistanceBetween = require(_0x11d501(0x82)), EventEmitter = require('eventemitter3'), Events = require('./events'), FuzzyEqual = require('../../math/fuzzy/Equal'), FuzzyGreaterThan = require(_0x11d501(0x83)), FuzzyLessThan = require(_0x11d501(0x84)), GetOverlapX = require(_0x11d501(0x85)), GetOverlapY = require(_0x11d501(0x86)), GetTilesWithinWorldXY = require(_0x11d501(0x87)), GetValue = require(_0x11d501(0x88)), MATH_CONST = require('../../math/const'), ProcessQueue = require('../../structs/ProcessQueue'), ProcessTileCallbacks = require(_0x11d501(0x89)), Rectangle = require(_0x11d501(0x8a)), RTree = require(_0x11d501(0x8b)), SeparateTile = require(_0x11d501(0x8c)), SeparateX = require(_0x11d501(0x8d)), SeparateY = require(_0x11d501(0x8e)), Set = require('../../structs/Set'), StaticBody = require(_0x11d501(0x8f)), TileIntersectsBody = require('./tilemap/TileIntersectsBody'), TransformMatrix = require('../../gameobjects/components/TransformMatrix'), Vector2 = require(_0x11d501(0x90)), Wrap = require(_0x11d501(0x91)), World = new Class({
        'Extends': EventEmitter,
        'initialize': function World(_0x2abeeb, _0x8cb149) {
            var _0x30b45d = _0x11d501, _0x5236fb = {
                    'QkaWe': _0x30b45d(0x92),
                    'HycMQ': function (_0x3cfa30, _0x131c7a, _0x52550e, _0x2c889e) {
                        return _0x3cfa30(_0x131c7a, _0x52550e, _0x2c889e);
                    },
                    'SbZKV': _0x30b45d(0x93),
                    'ixxrX': function (_0x1d55ef, _0x41928f, _0xee901c, _0x4032ce) {
                        return _0x1d55ef(_0x41928f, _0xee901c, _0x4032ce);
                    },
                    'qBnNc': _0x30b45d(0x94),
                    'WQePk': function (_0x3988bb, _0x566590, _0xddae9e, _0x519307) {
                        return _0x3988bb(_0x566590, _0xddae9e, _0x519307);
                    },
                    'thaJM': _0x30b45d(0x95),
                    'vBGRp': 'checkCollision.left',
                    'sECnG': 'checkCollision.right',
                    'qqzec': _0x30b45d(0x96),
                    'WoKoF': _0x30b45d(0x97),
                    'aebYZ': function (_0x333a3d, _0x19ee65, _0x2617b0, _0x3d603b) {
                        return _0x333a3d(_0x19ee65, _0x2617b0, _0x3d603b);
                    },
                    'fKWoI': _0x30b45d(0x98),
                    'rZHzg': function (_0x3510ed, _0x18bf49, _0x113fb2, _0x446e9b) {
                        return _0x3510ed(_0x18bf49, _0x113fb2, _0x446e9b);
                    },
                    'Fxlkr': _0x30b45d(0x99),
                    'bcnhd': 'debugBodyColor',
                    'QhIqg': 'debugStaticBodyColor',
                    'Vjpbn': function (_0x46b47b, _0x3fea6f, _0x1a19c6, _0x402ba4) {
                        return _0x46b47b(_0x3fea6f, _0x1a19c6, _0x402ba4);
                    },
                    'Qvuwt': _0x30b45d(0x9a),
                    'eKomG': function (_0xe291b5, _0x31bb69, _0xe7735d, _0x13288a) {
                        return _0xe291b5(_0x31bb69, _0xe7735d, _0x13288a);
                    },
                    'GwINY': 'fixedStep',
                    'UAylA': function (_0x4dc199, _0x199100, _0x50773f, _0x309f3a) {
                        return _0x4dc199(_0x199100, _0x50773f, _0x309f3a);
                    },
                    'HKrVS': _0x30b45d(0x9b),
                    'lXaho': function (_0x440d5b, _0x7905f8, _0x2e8495, _0x48bb30) {
                        return _0x440d5b(_0x7905f8, _0x2e8495, _0x48bb30);
                    },
                    'LIkBn': _0x30b45d(0x9c),
                    'gqRmT': 'isPaused',
                    'XEMio': function (_0x4134be, _0x32fd46, _0x3ef42c, _0x56545f) {
                        return _0x4134be(_0x32fd46, _0x3ef42c, _0x56545f);
                    },
                    'RlvGK': _0x30b45d(0x9d),
                    'FkZtQ': function (_0x2977be, _0x19658d, _0x893ff7, _0x20b362) {
                        return _0x2977be(_0x19658d, _0x893ff7, _0x20b362);
                    },
                    'SsOov': _0x30b45d(0x9e),
                    'LQoYo': 'gravity.y',
                    'ZLhNQ': 'maxEntries',
                    'lwXgY': 'useTree',
                    'HJZJa': function (_0x4951ea, _0x5c0751) {
                        return _0x4951ea * _0x5c0751;
                    }
                }, _0x553023 = _0x5236fb[_0x30b45d(0x9f)][_0x30b45d(0xa0)]('|'), _0x40f344 = -0x1 * -0x1424 + -0xd29 * -0x2 + 0x173b * -0x2;
            while (!![]) {
                switch (_0x553023[_0x40f344++]) {
                case '0':
                    this[_0x30b45d(0xa1)] = {
                        'minX': 0x0,
                        'minY': 0x0,
                        'maxX': 0x0,
                        'maxY': 0x0
                    };
                    continue;
                case '1':
                    this[_0x30b45d(0xa2)] = _0x5236fb[_0x30b45d(0xa3)](GetValue, _0x8cb149, _0x5236fb['SbZKV'], ![]);
                    continue;
                case '2':
                    this[_0x30b45d(0xa4)] = _0x5236fb[_0x30b45d(0xa5)](GetValue, _0x8cb149, 'forceX', ![]);
                    continue;
                case '3':
                    this['_frameTime'] = (-0xcf7 * -0x2 + 0x2399 + -0x3d86) / this['fps'];
                    continue;
                case '4':
                    this[_0x30b45d(0xa6)] = {
                        'up': GetValue(_0x8cb149, _0x5236fb[_0x30b45d(0xa7)], !![]),
                        'down': _0x5236fb[_0x30b45d(0xa8)](GetValue, _0x8cb149, _0x5236fb[_0x30b45d(0xa9)], !![]),
                        'left': _0x5236fb[_0x30b45d(0xa8)](GetValue, _0x8cb149, _0x5236fb['vBGRp'], !![]),
                        'right': _0x5236fb[_0x30b45d(0xa8)](GetValue, _0x8cb149, _0x5236fb[_0x30b45d(0xaa)], !![])
                    };
                    continue;
                case '5':
                    this[_0x30b45d(0xab)];
                    continue;
                case '6':
                    this[_0x30b45d(0xac)] = new TransformMatrix();
                    continue;
                case '7':
                    this[_0x30b45d(0xad)] = _0x5236fb[_0x30b45d(0xa8)](GetValue, _0x8cb149, _0x5236fb[_0x30b45d(0xae)], 0x25ca + 0x2093 + 0x176f * -0x3);
                    continue;
                case '8':
                    this[_0x30b45d(0xaf)] = {
                        'debugShowBody': _0x5236fb[_0x30b45d(0xa8)](GetValue, _0x8cb149, _0x5236fb[_0x30b45d(0xb0)], !![]),
                        'debugShowStaticBody': _0x5236fb[_0x30b45d(0xb1)](GetValue, _0x8cb149, _0x5236fb[_0x30b45d(0xb2)], !![]),
                        'debugShowVelocity': _0x5236fb[_0x30b45d(0xb3)](GetValue, _0x8cb149, _0x5236fb['Fxlkr'], !![]),
                        'bodyDebugColor': _0x5236fb['rZHzg'](GetValue, _0x8cb149, _0x5236fb[_0x30b45d(0xb4)], -0x1e8a92 * 0xb + 0x12e94e * -0x3 + 0x1 * 0x287b12f),
                        'staticBodyDebugColor': GetValue(_0x8cb149, _0x5236fb['QhIqg'], 0x47 * 0x41 + 0x43 * -0x8e + 0x1422),
                        'velocityDebugColor': _0x5236fb[_0x30b45d(0xb5)](GetValue, _0x8cb149, _0x5236fb[_0x30b45d(0xb6)], 0x1f03d + 0x3ea * -0x3d + -0x27b)
                    };
                    continue;
                case '9':
                    this[_0x30b45d(0xb7)] = new ProcessQueue();
                    continue;
                case '10':
                    this[_0x30b45d(0xb8)] = _0x5236fb[_0x30b45d(0xb9)](GetValue, _0x8cb149, _0x5236fb[_0x30b45d(0xba)], !![]);
                    continue;
                case '11':
                    this[_0x30b45d(0x9b)] = _0x5236fb[_0x30b45d(0xbb)](GetValue, _0x8cb149, _0x5236fb[_0x30b45d(0xbc)], -0x1172 + 0x637 * -0x4 + 0x2a4f * 0x1);
                    continue;
                case '12':
                    this[_0x30b45d(0xa2)] && this[_0x30b45d(0xbd)]();
                    continue;
                case '13':
                    this[_0x30b45d(0xbe)] = _0x5236fb[_0x30b45d(0xbf)](GetValue, _0x8cb149, _0x5236fb[_0x30b45d(0xc0)], 0x16fd + -0x26af + -0xfb6 * -0x1);
                    continue;
                case '14':
                    this['isPaused'] = _0x5236fb['lXaho'](GetValue, _0x8cb149, _0x5236fb[_0x30b45d(0xc1)], ![]);
                    continue;
                case '15':
                    this[_0x30b45d(0xc2)] = new RTree(this[_0x30b45d(0xc3)]);
                    continue;
                case '16':
                    this[_0x30b45d(0xc4)] = new Set();
                    continue;
                case '17':
                    this['_tempMatrix'] = new TransformMatrix();
                    continue;
                case '18':
                    this[_0x30b45d(0x9d)] = _0x5236fb[_0x30b45d(0xc5)](GetValue, _0x8cb149, _0x5236fb[_0x30b45d(0xc6)], -0xf62 + 0x2547 + -0x455 * 0x5);
                    continue;
                case '19':
                    this['bodies'] = new Set();
                    continue;
                case '20':
                    this[_0x30b45d(0xc7)] = new RTree(this[_0x30b45d(0xc3)]);
                    continue;
                case '21':
                    EventEmitter[_0x30b45d(0xc8)](this);
                    continue;
                case '22':
                    this['gravity'] = new Vector2(_0x5236fb['FkZtQ'](GetValue, _0x8cb149, _0x5236fb[_0x30b45d(0xc9)], -0x1584 + -0x54e * -0x1 + -0x81b * -0x2), GetValue(_0x8cb149, _0x5236fb[_0x30b45d(0xca)], -0x20c3 * -0x1 + 0xc * 0x10f + -0x1 * 0x2d77));
                    continue;
                case '23':
                    this[_0x30b45d(0xc3)] = GetValue(_0x8cb149, _0x5236fb['ZLhNQ'], 0x26ea + 0x81d + -0x2ef7);
                    continue;
                case '24':
                    this[_0x30b45d(0xcb)] = GetValue(_0x8cb149, _0x5236fb['lwXgY'], !![]);
                    continue;
                case '25':
                    this[_0x30b45d(0xcc)] = new Rectangle(_0x5236fb[_0x30b45d(0xcd)](GetValue, _0x8cb149, 'x', 0x1e5 * 0xc + 0x12fa + -0x14db * 0x2), _0x5236fb[_0x30b45d(0xcd)](GetValue, _0x8cb149, 'y', 0x119b * 0x2 + -0x1fc + -0x213a), _0x5236fb['FkZtQ'](GetValue, _0x8cb149, 'width', _0x2abeeb[_0x30b45d(0xce)][_0x30b45d(0xcf)][_0x30b45d(0xd0)]), GetValue(_0x8cb149, _0x30b45d(0xd1), _0x2abeeb['sys'][_0x30b45d(0xcf)][_0x30b45d(0xd1)]));
                    continue;
                case '26':
                    this[_0x30b45d(0xd2)] = -0xd32 + -0x2309 + -0x303b * -0x1;
                    continue;
                case '27':
                    this[_0x30b45d(0xd3)] = _0x5236fb[_0x30b45d(0xd4)](-0x1c48 + 0x1ca1 + 0x38f, this[_0x30b45d(0xd5)]);
                    continue;
                case '28':
                    this['scene'] = _0x2abeeb;
                    continue;
                case '29':
                    this[_0x30b45d(0xd6)] = -0x22c3 + -0x952 + 0x2c15;
                    continue;
                case '30':
                    this['_elapsed'] = -0x101b + -0x1 * -0x1acf + -0xab4;
                    continue;
                case '31':
                    this['pendingDestroy'] = new Set();
                    continue;
                }
                break;
            }
        },
        'enable': function (_0x2d7e08, _0x5872f8) {
            var _0x21bb80 = _0x11d501, _0x5a2daf = {
                    'ajBbH': function (_0x4e7a6e, _0x634276) {
                        return _0x4e7a6e < _0x634276;
                    }
                };
            _0x5872f8 === undefined && (_0x5872f8 = CONST[_0x21bb80(0xd7)]);
            !Array[_0x21bb80(0xd8)](_0x2d7e08) && (_0x2d7e08 = [_0x2d7e08]);
            for (var _0x1570bf = 0xd8e + -0x1 * 0x20a4 + 0x1316; _0x5a2daf[_0x21bb80(0xd9)](_0x1570bf, _0x2d7e08[_0x21bb80(0xda)]); _0x1570bf++) {
                var _0x562466 = _0x2d7e08[_0x1570bf];
                if (_0x562466[_0x21bb80(0xdb)]) {
                    var _0x592f0d = _0x562466[_0x21bb80(0xdc)]();
                    for (var _0x1c9963 = -0x146f + -0x600 + -0x43 * -0x65; _0x5a2daf['ajBbH'](_0x1c9963, _0x592f0d['length']); _0x1c9963++) {
                        var _0x26a058 = _0x592f0d[_0x1c9963];
                        _0x26a058[_0x21bb80(0xdb)] ? this['enable'](_0x26a058, _0x5872f8) : this[_0x21bb80(0xdd)](_0x26a058, _0x5872f8);
                    }
                } else
                    this[_0x21bb80(0xdd)](_0x562466, _0x5872f8);
            }
        },
        'enableBody': function (_0x1bd86b, _0x50a8a6) {
            var _0x1e5ec7 = _0x11d501, _0x27a96f = {
                    'rCMyF': function (_0x3053c3, _0x7cdf9a) {
                        return _0x3053c3 === _0x7cdf9a;
                    },
                    'kJNJK': function (_0x2df93d, _0x57653f) {
                        return _0x2df93d === _0x57653f;
                    }
                };
            _0x50a8a6 === undefined && (_0x50a8a6 = CONST[_0x1e5ec7(0xd7)]);
            if (!_0x1bd86b[_0x1e5ec7(0xde)]) {
                if (_0x27a96f[_0x1e5ec7(0xdf)](_0x50a8a6, CONST[_0x1e5ec7(0xd7)]))
                    _0x1bd86b['body'] = new Body(this, _0x1bd86b);
                else
                    _0x27a96f[_0x1e5ec7(0xe0)](_0x50a8a6, CONST[_0x1e5ec7(0xe1)]) && (_0x1bd86b[_0x1e5ec7(0xde)] = new StaticBody(this, _0x1bd86b));
            }
            return this['add'](_0x1bd86b[_0x1e5ec7(0xde)]), _0x1bd86b;
        },
        'add': function (_0x570b30) {
            var _0x407d21 = _0x11d501, _0x20a4c8 = {
                    'jfWZg': function (_0x3f35d2, _0x5b3105) {
                        return _0x3f35d2 === _0x5b3105;
                    }
                };
            if (_0x570b30[_0x407d21(0xe2)] === CONST[_0x407d21(0xd7)])
                this[_0x407d21(0xe3)][_0x407d21(0xe4)](_0x570b30);
            else
                _0x20a4c8[_0x407d21(0xe5)](_0x570b30[_0x407d21(0xe2)], CONST[_0x407d21(0xe1)]) && (this[_0x407d21(0xc4)][_0x407d21(0xe4)](_0x570b30), this['staticTree'][_0x407d21(0xe6)](_0x570b30));
            return _0x570b30[_0x407d21(0xe7)] = !![], _0x570b30;
        },
        'disable': function (_0x2436c2) {
            var _0x346280 = _0x11d501, _0x39358b = {
                    'SnOFt': function (_0x3de12e, _0x2609a4) {
                        return _0x3de12e < _0x2609a4;
                    }
                };
            !Array[_0x346280(0xd8)](_0x2436c2) && (_0x2436c2 = [_0x2436c2]);
            for (var _0x8e3242 = 0x1e02 + -0x2ca * -0x3 + -0x266 * 0x10; _0x39358b[_0x346280(0xe8)](_0x8e3242, _0x2436c2[_0x346280(0xda)]); _0x8e3242++) {
                var _0xb375e8 = _0x2436c2[_0x8e3242];
                if (_0xb375e8['isParent']) {
                    var _0x4821ce = _0xb375e8['getChildren']();
                    for (var _0x2ab944 = -0x3da + 0x1851 + 0xd * -0x193; _0x39358b[_0x346280(0xe8)](_0x2ab944, _0x4821ce[_0x346280(0xda)]); _0x2ab944++) {
                        var _0x5000a6 = _0x4821ce[_0x2ab944];
                        _0x5000a6['isParent'] ? this[_0x346280(0xe9)](_0x5000a6) : this['disableBody'](_0x5000a6[_0x346280(0xde)]);
                    }
                } else
                    this['disableBody'](_0xb375e8[_0x346280(0xde)]);
            }
        },
        'disableBody': function (_0x8e79cb) {
            var _0x4bc9aa = _0x11d501;
            this['remove'](_0x8e79cb), _0x8e79cb[_0x4bc9aa(0xe7)] = ![];
        },
        'remove': function (_0x4cfce9) {
            var _0x3d6005 = _0x11d501;
            if (_0x4cfce9[_0x3d6005(0xe2)] === CONST[_0x3d6005(0xd7)])
                this[_0x3d6005(0xc7)][_0x3d6005(0xea)](_0x4cfce9), this[_0x3d6005(0xe3)][_0x3d6005(0xeb)](_0x4cfce9);
            else
                _0x4cfce9[_0x3d6005(0xe2)] === CONST[_0x3d6005(0xe1)] && (this[_0x3d6005(0xc4)]['delete'](_0x4cfce9), this[_0x3d6005(0xc2)][_0x3d6005(0xea)](_0x4cfce9));
        },
        'createDebugGraphic': function () {
            var _0x5bd446 = _0x11d501, _0x7590e5 = { 'aVUvy': _0x5bd446(0xec) }, _0x4f95ae = _0x7590e5[_0x5bd446(0xed)][_0x5bd446(0xa0)]('|'), _0x1df9b1 = 0x2d2 + -0x68d + -0x5 * -0xbf;
            while (!![]) {
                switch (_0x4f95ae[_0x1df9b1++]) {
                case '0':
                    var _0x58912f = this['scene']['sys'][_0x5bd446(0xee)][_0x5bd446(0xef)]({
                        'x': 0x0,
                        'y': 0x0
                    });
                    continue;
                case '1':
                    this[_0x5bd446(0xab)] = _0x58912f;
                    continue;
                case '2':
                    _0x58912f[_0x5bd446(0xf0)](Number[_0x5bd446(0xf1)]);
                    continue;
                case '3':
                    this['drawDebug'] = !![];
                    continue;
                case '4':
                    return _0x58912f;
                }
                break;
            }
        },
        'setBounds': function (_0x43cd02, _0x3893ce, _0x1e73c7, _0x19f11e, _0x2ff671, _0x21aeeb, _0x499afc, _0x42d1bc) {
            var _0x4d2ce2 = _0x11d501, _0x44dc02 = {
                    'kKhbk': function (_0x534a86, _0x5b2fbf) {
                        return _0x534a86 !== _0x5b2fbf;
                    }
                };
            return this[_0x4d2ce2(0xcc)][_0x4d2ce2(0xf2)](_0x43cd02, _0x3893ce, _0x1e73c7, _0x19f11e), _0x44dc02[_0x4d2ce2(0xf3)](_0x2ff671, undefined) && this[_0x4d2ce2(0xf4)](_0x2ff671, _0x21aeeb, _0x499afc, _0x42d1bc), this;
        },
        'setBoundsCollision': function (_0x4b53e0, _0x11b205, _0x479e19, _0x37597e) {
            var _0x284298 = _0x11d501, _0x5392f4 = {
                    'PUZzF': '4|1|0|6|5|7|8|3|2',
                    'hJXkO': function (_0x3d898e, _0x1084d6) {
                        return _0x3d898e === _0x1084d6;
                    },
                    'IjotL': function (_0x132e21, _0x77d90) {
                        return _0x132e21 === _0x77d90;
                    },
                    'WBMBP': function (_0x291187, _0x3244d7) {
                        return _0x291187 === _0x3244d7;
                    }
                }, _0x2ad391 = _0x5392f4[_0x284298(0xf5)][_0x284298(0xa0)]('|'), _0x1a197f = 0xc32 + -0x1716 * -0x1 + -0x2348;
            while (!![]) {
                switch (_0x2ad391[_0x1a197f++]) {
                case '0':
                    _0x5392f4[_0x284298(0xf6)](_0x479e19, undefined) && (_0x479e19 = !![]);
                    continue;
                case '1':
                    _0x5392f4['IjotL'](_0x11b205, undefined) && (_0x11b205 = !![]);
                    continue;
                case '2':
                    return this;
                case '3':
                    this[_0x284298(0xa6)][_0x284298(0xf7)] = _0x37597e;
                    continue;
                case '4':
                    _0x5392f4[_0x284298(0xf8)](_0x4b53e0, undefined) && (_0x4b53e0 = !![]);
                    continue;
                case '5':
                    this[_0x284298(0xa6)]['left'] = _0x4b53e0;
                    continue;
                case '6':
                    _0x5392f4[_0x284298(0xf9)](_0x37597e, undefined) && (_0x37597e = !![]);
                    continue;
                case '7':
                    this[_0x284298(0xa6)]['right'] = _0x11b205;
                    continue;
                case '8':
                    this['checkCollision']['up'] = _0x479e19;
                    continue;
                }
                break;
            }
        },
        'pause': function () {
            var _0x2f26b9 = _0x11d501;
            return this['isPaused'] = !![], this[_0x2f26b9(0xfa)](Events['PAUSE']), this;
        },
        'resume': function () {
            return this['isPaused'] = ![], this['emit'](Events['RESUME']), this;
        },
        'addCollider': function (_0x1a0222, _0x32c0e6, _0x2ef7da, _0x17bc2d, _0x5162ef) {
            var _0x2d0175 = _0x11d501, _0x3c2992 = {
                    'uBWBy': _0x2d0175(0xfb),
                    'USkUd': function (_0x241450, _0x4e220f) {
                        return _0x241450 === _0x4e220f;
                    },
                    'IHQEI': function (_0x167f06, _0x321398) {
                        return _0x167f06 === _0x321398;
                    }
                }, _0x5d9917 = _0x3c2992[_0x2d0175(0xfc)]['split']('|'), _0xd77b0c = -0x500 + 0x1 * -0x41 + -0x5 * -0x10d;
            while (!![]) {
                switch (_0x5d9917[_0xd77b0c++]) {
                case '0':
                    _0x3c2992['USkUd'](_0x2ef7da, undefined) && (_0x2ef7da = null);
                    continue;
                case '1':
                    _0x3c2992[_0x2d0175(0xfd)](_0x17bc2d, undefined) && (_0x17bc2d = null);
                    continue;
                case '2':
                    _0x3c2992[_0x2d0175(0xfe)](_0x5162ef, undefined) && (_0x5162ef = _0x2ef7da);
                    continue;
                case '3':
                    this[_0x2d0175(0xb7)][_0x2d0175(0xee)](_0x4fc535);
                    continue;
                case '4':
                    return _0x4fc535;
                case '5':
                    var _0x4fc535 = new Collider(this, ![], _0x1a0222, _0x32c0e6, _0x2ef7da, _0x17bc2d, _0x5162ef);
                    continue;
                }
                break;
            }
        },
        'addOverlap': function (_0x1f3f51, _0x2c4a92, _0x4a3259, _0x25a989, _0x1ef102) {
            var _0x1f81ad = _0x11d501, _0x41f71d = {
                    'zkunG': _0x1f81ad(0xff),
                    'mgCXL': function (_0x38a95a, _0x4acd39) {
                        return _0x38a95a === _0x4acd39;
                    },
                    'QSxPc': function (_0x5dd56f, _0x461167) {
                        return _0x5dd56f === _0x461167;
                    }
                }, _0x2f63d2 = _0x41f71d[_0x1f81ad(0x100)][_0x1f81ad(0xa0)]('|'), _0x4f6436 = -0x264 + -0x1 * 0x238f + 0x25f3;
            while (!![]) {
                switch (_0x2f63d2[_0x4f6436++]) {
                case '0':
                    this[_0x1f81ad(0xb7)][_0x1f81ad(0xee)](_0x5b5e69);
                    continue;
                case '1':
                    _0x41f71d[_0x1f81ad(0x101)](_0x4a3259, undefined) && (_0x4a3259 = null);
                    continue;
                case '2':
                    _0x41f71d[_0x1f81ad(0x102)](_0x1ef102, undefined) && (_0x1ef102 = _0x4a3259);
                    continue;
                case '3':
                    _0x25a989 === undefined && (_0x25a989 = null);
                    continue;
                case '4':
                    return _0x5b5e69;
                case '5':
                    var _0x5b5e69 = new Collider(this, !![], _0x1f3f51, _0x2c4a92, _0x4a3259, _0x25a989, _0x1ef102);
                    continue;
                }
                break;
            }
        },
        'removeCollider': function (_0x2b81f8) {
            var _0x26bef6 = _0x11d501;
            return this[_0x26bef6(0xb7)][_0x26bef6(0xea)](_0x2b81f8), this;
        },
        'setFPS': function (_0x3947ec) {
            var _0x470a92 = _0x11d501, _0x3b9a89 = {
                    'UUlGo': function (_0x23567c, _0x41d6f) {
                        return _0x23567c / _0x41d6f;
                    },
                    'PGHuP': function (_0xb32ea4, _0x4381be) {
                        return _0xb32ea4 * _0x4381be;
                    }
                };
            return this[_0x470a92(0x9d)] = _0x3947ec, this['_frameTime'] = _0x3b9a89[_0x470a92(0x103)](-0x1f * -0xd1 + -0x2cd * 0xb + 0x581, this[_0x470a92(0x9d)]), this[_0x470a92(0xd3)] = _0x3b9a89[_0x470a92(0x104)](0x12 * -0xf5 + 0x23b4 + -0x2ea * 0x5, this[_0x470a92(0xd5)]), this;
        },
        'update': function (_0x317220, _0x1b2903) {
            var _0xcf0609 = _0x11d501, _0x4ec6e3 = {
                    'UwSqV': function (_0x3d98dd, _0x395baf) {
                        return _0x3d98dd === _0x395baf;
                    },
                    'qFqvl': function (_0x5cfa1a, _0x2700ce) {
                        return _0x5cfa1a < _0x2700ce;
                    },
                    'VsBnv': function (_0x5475bb, _0x52627f) {
                        return _0x5475bb * _0x52627f;
                    },
                    'JILoI': '1|0|3|2|5|4',
                    'ptySc': function (_0x1bf2c8, _0x3a84a2) {
                        return _0x1bf2c8 >= _0x3a84a2;
                    }
                }, _0xcb044c = _0xcf0609(0x105)[_0xcf0609(0xa0)]('|'), _0x38e718 = 0xc8f + 0x1 * 0x67a + -0x1309;
            while (!![]) {
                switch (_0xcb044c[_0x38e718++]) {
                case '0':
                    if (this['isPaused'] || _0x4ec6e3[_0xcf0609(0x106)](this[_0xcf0609(0xe3)]['size'], -0x3 * -0x76f + -0x16f7 + 0xaa))
                        return;
                    continue;
                case '1':
                    var _0xf19725 = this[_0xcf0609(0xd5)];
                    continue;
                case '2':
                    this['_elapsed'] += _0x1b2903;
                    continue;
                case '3':
                    for (_0x3c4a96 = 0x134d + -0xc5 * 0x27 + -0x6 * -0x1c9; _0x4ec6e3[_0xcf0609(0x107)](_0x3c4a96, _0x21d8a6['length']); _0x3c4a96++) {
                        _0x54cb0e = _0x21d8a6[_0x3c4a96], _0x54cb0e[_0xcf0609(0xe7)] && _0x54cb0e[_0xcf0609(0x108)](_0x40a09c, _0xf19725);
                    }
                    continue;
                case '4':
                    var _0x21d8a6 = this[_0xcf0609(0xe3)]['entries'];
                    continue;
                case '5':
                    var _0x15396a = _0x4ec6e3[_0xcf0609(0x109)](this['_frameTimeMS'], this['timeScale']);
                    continue;
                case '6':
                    var _0x40a09c = this[_0xcf0609(0x10a)] >= _0x15396a;
                    continue;
                case '7':
                    !this[_0xcf0609(0xb8)] && (_0xf19725 = _0x4ec6e3['VsBnv'](_0x1b2903, 0x26ca + -0x1 * -0x6dc + 0x1 * -0x2da6 + 0.001), _0x40a09c = !![], this[_0xcf0609(0x10a)] = 0x12d0 + -0x2515 + 0x1245);
                    continue;
                case '8':
                    var _0x3c4a96;
                    continue;
                case '9':
                    if (_0x40a09c) {
                        var _0x1c87c2 = _0x4ec6e3[_0xcf0609(0x10b)][_0xcf0609(0xa0)]('|'), _0x25f15b = 0x1704 + 0x3 * -0x39a + 0x6 * -0x209;
                        while (!![]) {
                            switch (_0x1c87c2[_0x25f15b++]) {
                            case '0':
                                this[_0xcf0609(0xd6)] = -0x6d9 + -0x18a3 + -0xa7f * -0x3;
                                continue;
                            case '1':
                                this[_0xcf0609(0x10a)] -= _0x15396a;
                                continue;
                            case '2':
                                var _0x1d958b = this[_0xcf0609(0xb7)][_0xcf0609(0x10c)]();
                                continue;
                            case '3':
                                this[_0xcf0609(0xcb)] && (this[_0xcf0609(0xc7)][_0xcf0609(0x10d)](), this['tree']['load'](_0x21d8a6));
                                continue;
                            case '4':
                                this[_0xcf0609(0xfa)](Events['WORLD_STEP'], _0xf19725);
                                continue;
                            case '5':
                                for (_0x3c4a96 = -0x1709 * -0x1 + -0x24f7 * 0x1 + 0xdee; _0x3c4a96 < _0x1d958b['length']; _0x3c4a96++) {
                                    var _0x508afc = _0x1d958b[_0x3c4a96];
                                    _0x508afc[_0xcf0609(0x10e)] && _0x508afc[_0xcf0609(0x10c)]();
                                }
                                continue;
                            }
                            break;
                        }
                    }
                    continue;
                case '10':
                    while (_0x4ec6e3[_0xcf0609(0x10f)](this[_0xcf0609(0x10a)], _0x15396a)) {
                        this[_0xcf0609(0x10a)] -= _0x15396a, this['step'](_0xf19725);
                    }
                    continue;
                case '11':
                    var _0x54cb0e;
                    continue;
                }
                break;
            }
        },
        'step': function (_0x3a4812) {
            var _0x121470 = _0x11d501, _0x5f1fc7 = {
                    'WRxrL': _0x121470(0x110),
                    'qASku': function (_0x40c7bc, _0x4e6b59) {
                        return _0x40c7bc < _0x4e6b59;
                    }
                }, _0x581464 = _0x5f1fc7[_0x121470(0x111)][_0x121470(0xa0)]('|'), _0x26a78c = -0x26ed * 0x1 + -0x124 * 0x8 + 0x300d;
            while (!![]) {
                switch (_0x581464[_0x26a78c++]) {
                case '0':
                    for (_0x4eff0a = -0x7b * 0x20 + 0x3 * 0x226 + -0x3 * -0x2fa; _0x5f1fc7[_0x121470(0x112)](_0x4eff0a, _0x376a34[_0x121470(0xda)]); _0x4eff0a++) {
                        var _0x2cbdfe = _0x376a34[_0x4eff0a];
                        _0x2cbdfe[_0x121470(0x10e)] && _0x2cbdfe[_0x121470(0x10c)]();
                    }
                    continue;
                case '1':
                    var _0x3a9185 = _0x554362[_0x121470(0xda)];
                    continue;
                case '2':
                    for (_0x4eff0a = -0x3 * -0x2ba + -0x1dc3 + -0x11 * -0x145; _0x4eff0a < _0x3a9185; _0x4eff0a++) {
                        _0x737e64 = _0x554362[_0x4eff0a], _0x737e64[_0x121470(0xe7)] && _0x737e64[_0x121470(0x10c)](_0x3a4812);
                    }
                    continue;
                case '3':
                    this[_0x121470(0xcb)] && (this[_0x121470(0xc7)][_0x121470(0x10d)](), this[_0x121470(0xc7)]['load'](_0x554362));
                    continue;
                case '4':
                    this[_0x121470(0xd6)]++;
                    continue;
                case '5':
                    var _0x4eff0a;
                    continue;
                case '6':
                    this['emit'](Events[_0x121470(0x113)], _0x3a4812);
                    continue;
                case '7':
                    var _0x376a34 = this[_0x121470(0xb7)][_0x121470(0x10c)]();
                    continue;
                case '8':
                    var _0x737e64;
                    continue;
                case '9':
                    var _0x554362 = this[_0x121470(0xe3)][_0x121470(0x114)];
                    continue;
                }
                break;
            }
        },
        'postUpdate': function () {
            var _0x110495 = _0x11d501, _0x184bf8 = {
                    'vKGLp': '8|2|1|5|9|7|3|0|6|4',
                    'UoxgE': _0x110495(0x115),
                    'CqSYO': function (_0x3f6718, _0x2c4f99) {
                        return _0x3f6718 < _0x2c4f99;
                    },
                    'mHUpk': _0x110495(0x116),
                    'welKD': function (_0x30daeb, _0x12588c) {
                        return _0x30daeb === _0x12588c;
                    }
                }, _0x24b090 = _0x184bf8[_0x110495(0x117)][_0x110495(0xa0)]('|'), _0x52906a = 0x2466 + -0x189c + -0x1 * 0xbca;
            while (!![]) {
                switch (_0x24b090[_0x52906a++]) {
                case '0':
                    if (this[_0x110495(0xa2)]) {
                        var _0x43a70c = _0x184bf8[_0x110495(0x118)][_0x110495(0xa0)]('|'), _0x41ef30 = 0x6d * -0x1f + 0x3 * 0xa21 + -0x1130;
                        while (!![]) {
                            switch (_0x43a70c[_0x41ef30++]) {
                            case '0':
                                _0x554ab1[_0x110495(0x10d)]();
                                continue;
                            case '1':
                                _0x54132e = _0x5272ea[_0x110495(0x114)];
                                continue;
                            case '2':
                                for (_0x15d8c4 = 0x21ee + 0x1064 + -0x153 * 0x26; _0x15d8c4 < _0x473ba8; _0x15d8c4++) {
                                    _0xe184ea = _0x54132e[_0x15d8c4], _0xe184ea['willDrawDebug']() && _0xe184ea['drawDebug'](_0x554ab1);
                                }
                                continue;
                            case '3':
                                _0x473ba8 = _0x54132e[_0x110495(0xda)];
                                continue;
                            case '4':
                                var _0x554ab1 = this[_0x110495(0xab)];
                                continue;
                            case '5':
                                for (_0x15d8c4 = -0x1c28 + 0x15 * -0x121 + 0x33dd; _0x184bf8['CqSYO'](_0x15d8c4, _0x473ba8); _0x15d8c4++) {
                                    _0xe184ea = _0x54132e[_0x15d8c4], _0xe184ea[_0x110495(0x119)]() && _0xe184ea[_0x110495(0xa2)](_0x554ab1);
                                }
                                continue;
                            }
                            break;
                        }
                    }
                    continue;
                case '1':
                    var _0x54132e = this['bodies'][_0x110495(0x114)];
                    continue;
                case '2':
                    var _0xe184ea;
                    continue;
                case '3':
                    if (this[_0x110495(0xd6)]) {
                        this[_0x110495(0xd6)] = 0x24 * 0xad + 0xc4e + -0x12 * 0x209;
                        for (_0x15d8c4 = 0xe3 * -0x2c + -0x1f02 + 0x4606; _0x184bf8['CqSYO'](_0x15d8c4, _0x473ba8); _0x15d8c4++) {
                            _0xe184ea = _0x54132e[_0x15d8c4], _0xe184ea[_0x110495(0xe7)] && _0xe184ea[_0x110495(0x11a)]();
                        }
                    }
                    continue;
                case '4':
                    if (_0x2e0447[_0x110495(0x11b)] > 0x47 * 0x10 + -0x13 * 0x161 + 0x15c3) {
                        var _0x2a2026 = _0x184bf8[_0x110495(0x11c)]['split']('|'), _0x1b2114 = 0x65e + -0x829 * -0x4 + -0x2702;
                        while (!![]) {
                            switch (_0x2a2026[_0x1b2114++]) {
                            case '0':
                                _0x473ba8 = _0x54132e[_0x110495(0xda)];
                                continue;
                            case '1':
                                _0x2e0447[_0x110495(0x10d)]();
                                continue;
                            case '2':
                                var _0x3e812c = this[_0x110495(0xc7)];
                                continue;
                            case '3':
                                for (_0x15d8c4 = 0x347 * 0x4 + -0x1 * -0x2c5 + 0x5 * -0x32d; _0x15d8c4 < _0x473ba8; _0x15d8c4++) {
                                    _0xe184ea = _0x54132e[_0x15d8c4];
                                    if (_0x184bf8[_0x110495(0x11d)](_0xe184ea[_0x110495(0xe2)], CONST[_0x110495(0xd7)]))
                                        _0x3e812c['remove'](_0xe184ea), _0x14a2dd[_0x110495(0xeb)](_0xe184ea);
                                    else
                                        _0xe184ea[_0x110495(0xe2)] === CONST[_0x110495(0xe1)] && (_0x178c95[_0x110495(0xea)](_0xe184ea), _0x5272ea[_0x110495(0xeb)](_0xe184ea));
                                    _0xe184ea[_0x110495(0x11e)] = undefined, _0xe184ea[_0x110495(0x11f)] = undefined;
                                }
                                continue;
                            case '4':
                                var _0x178c95 = this[_0x110495(0xc2)];
                                continue;
                            case '5':
                                _0x54132e = _0x2e0447[_0x110495(0x114)];
                                continue;
                            }
                            break;
                        }
                    }
                    continue;
                case '5':
                    var _0x473ba8 = _0x54132e['length'];
                    continue;
                case '6':
                    var _0x2e0447 = this[_0x110495(0x120)];
                    continue;
                case '7':
                    var _0x5272ea = this[_0x110495(0xc4)];
                    continue;
                case '8':
                    var _0x15d8c4;
                    continue;
                case '9':
                    var _0x14a2dd = this[_0x110495(0xe3)];
                    continue;
                }
                break;
            }
        },
        'updateMotion': function (_0x1b1d12, _0x363042) {
            var _0x21f154 = _0x11d501;
            _0x1b1d12[_0x21f154(0x121)] && this[_0x21f154(0x122)](_0x1b1d12, _0x363042), this[_0x21f154(0x123)](_0x1b1d12, _0x363042);
        },
        'computeAngularVelocity': function (_0x5a93b5, _0x85c942) {
            var _0x2a29a6 = _0x11d501, _0x1102b3 = {
                    'jHuvD': function (_0x2747ae, _0x1f9b36) {
                        return _0x2747ae * _0x1f9b36;
                    },
                    'pLUCv': function (_0x556054, _0x1a0b38, _0x4d291f, _0x163097) {
                        return _0x556054(_0x1a0b38, _0x4d291f, _0x163097);
                    },
                    'AafOC': function (_0x39b4e4, _0xa761f0) {
                        return _0x39b4e4 - _0xa761f0;
                    },
                    'bzpZq': function (_0x438a47, _0x482858) {
                        return _0x438a47 + _0x482858;
                    },
                    'RkSlf': function (_0x5ad5f4, _0x199a72, _0xc50e2c, _0x339de5) {
                        return _0x5ad5f4(_0x199a72, _0xc50e2c, _0x339de5);
                    },
                    'lwjaR': function (_0x30fbfb, _0x50a345) {
                        return _0x30fbfb - _0x50a345;
                    },
                    'FPnlv': function (_0x414a30, _0x44338d) {
                        return _0x414a30 * _0x44338d;
                    }
                }, _0x51747b = _0x5a93b5['angularVelocity'], _0x4b50e2 = _0x5a93b5[_0x2a29a6(0x124)], _0x812aa0 = _0x5a93b5[_0x2a29a6(0x125)], _0x3cc6a4 = _0x5a93b5[_0x2a29a6(0x126)];
            if (_0x4b50e2)
                _0x51747b += _0x1102b3['jHuvD'](_0x4b50e2, _0x85c942);
            else {
                if (_0x5a93b5[_0x2a29a6(0x127)] && _0x812aa0) {
                    _0x812aa0 *= _0x85c942;
                    if (_0x1102b3[_0x2a29a6(0x128)](FuzzyGreaterThan, _0x1102b3[_0x2a29a6(0x129)](_0x51747b, _0x812aa0), 0x1471 * 0x1 + 0x646 + -0x1ab7, -0x24b * 0x1 + -0x15be + 0x1809 + 0.1))
                        _0x51747b -= _0x812aa0;
                    else
                        FuzzyLessThan(_0x1102b3[_0x2a29a6(0x12a)](_0x51747b, _0x812aa0), -0x1519 + -0x2605 + -0x872 * -0x7, -0xeb4 + 0x139f + 0x4eb * -0x1 + 0.1) ? _0x51747b += _0x812aa0 : _0x51747b = -0xe * 0x1d3 + 0x1 * 0x149f + 0x4eb * 0x1;
                }
            }
            _0x51747b = _0x1102b3['RkSlf'](Clamp, _0x51747b, -_0x3cc6a4, _0x3cc6a4);
            var _0x499e12 = _0x1102b3[_0x2a29a6(0x12b)](_0x51747b, _0x5a93b5[_0x2a29a6(0x12c)]);
            _0x5a93b5[_0x2a29a6(0x12c)] += _0x499e12, _0x5a93b5[_0x2a29a6(0x12d)] += _0x1102b3['FPnlv'](_0x5a93b5[_0x2a29a6(0x12c)], _0x85c942);
        },
        'computeVelocity': function (_0x171986, _0x1186d1) {
            var _0x57793a = _0x11d501, _0x237e2f = {
                    'Tusmn': _0x57793a(0x12e),
                    'mgmoI': function (_0x451bd5, _0x311481, _0x49b717, _0x581f8f) {
                        return _0x451bd5(_0x311481, _0x49b717, _0x581f8f);
                    },
                    'rxePW': function (_0x49977b, _0x4661ba) {
                        return _0x49977b > _0x4661ba;
                    },
                    'ULKmY': function (_0x3ddf13, _0xd9c7ad) {
                        return _0x3ddf13 > _0xd9c7ad;
                    },
                    'WdtLV': function (_0x1627c1, _0x5b28d3) {
                        return _0x1627c1 * _0x5b28d3;
                    },
                    'mmsSd': function (_0x2360bd, _0x1a3534) {
                        return _0x2360bd && _0x1a3534;
                    },
                    'hHvxA': function (_0x1b7fcb, _0x46af12) {
                        return _0x1b7fcb + _0x46af12;
                    },
                    'BlGMJ': function (_0x29292b, _0x5b4a3e, _0x4b9e8d, _0x3ac8dd) {
                        return _0x29292b(_0x5b4a3e, _0x4b9e8d, _0x3ac8dd);
                    },
                    'KVxMF': function (_0x3ba8be, _0x2d5767) {
                        return _0x3ba8be - _0x2d5767;
                    },
                    'bvViJ': function (_0x246a69, _0x4874a1) {
                        return _0x246a69 * _0x4874a1;
                    },
                    'wbvug': function (_0x378cad, _0x3a53f0, _0x4697d8, _0x4abb6b) {
                        return _0x378cad(_0x3a53f0, _0x4697d8, _0x4abb6b);
                    },
                    'Diwee': function (_0x565962, _0x26f717, _0x2ff090, _0x306856) {
                        return _0x565962(_0x26f717, _0x2ff090, _0x306856);
                    },
                    'yKONm': function (_0x520df3, _0x34063f, _0x426bcd, _0x26db9b) {
                        return _0x520df3(_0x34063f, _0x426bcd, _0x26db9b);
                    }
                }, _0x46ac30 = _0x237e2f['Tusmn']['split']('|'), _0x3fd12b = 0x10dc + -0x429 + 0x1 * -0xcb3;
            while (!![]) {
                switch (_0x46ac30[_0x3fd12b++]) {
                case '0':
                    var _0x57870c = _0x171986[_0x57793a(0x12f)];
                    continue;
                case '1':
                    var _0x1786f2 = _0x171986['drag']['x'];
                    continue;
                case '2':
                    var _0xdf241c = _0x171986[_0x57793a(0x130)]['x'];
                    continue;
                case '3':
                    var _0x151942 = _0x171986[_0x57793a(0x131)]['x'];
                    continue;
                case '4':
                    _0x171986[_0x57793a(0x132)] = _0x2bf65c;
                    continue;
                case '5':
                    _0x35154d = _0x237e2f['mgmoI'](Clamp, _0x35154d, -_0x59108e, _0x59108e);
                    continue;
                case '6':
                    var _0x397175 = _0x171986[_0x57793a(0x127)];
                    continue;
                case '7':
                    var _0x1b594f = _0x171986[_0x57793a(0x133)];
                    continue;
                case '8':
                    var _0x2bf65c = _0x171986[_0x57793a(0x132)];
                    continue;
                case '9':
                    var _0x1aaf7f = _0x171986[_0x57793a(0x134)]['y'];
                    continue;
                case '10':
                    _0x171986[_0x57793a(0x130)][_0x57793a(0xe4)](_0xdf241c, _0x35154d);
                    continue;
                case '11':
                    _0x237e2f[_0x57793a(0x135)](_0x57870c, -(0x1 * -0x2209 + -0xb8b + 0x1 * 0x2d95)) && _0x237e2f[_0x57793a(0x136)](_0x2bf65c, _0x57870c) && (_0x171986['velocity'][_0x57793a(0x137)]()[_0x57793a(0xcf)](_0x57870c), _0x2bf65c = _0x57870c);
                    continue;
                case '12':
                    if (_0x151942)
                        _0xdf241c += _0x237e2f['WdtLV'](_0x151942, _0x1186d1);
                    else {
                        if (_0x237e2f['mmsSd'](_0x397175, _0x1786f2)) {
                            if (_0x1b594f)
                                _0x1786f2 = Math['pow'](_0x1786f2, _0x1186d1), _0xdf241c *= _0x1786f2, _0x2bf65c = Math[_0x57793a(0x138)](_0x237e2f['hHvxA'](_0x237e2f[_0x57793a(0x139)](_0xdf241c, _0xdf241c), _0x35154d * _0x35154d)), _0x237e2f['mgmoI'](FuzzyEqual, _0x2bf65c, 0x5cc + -0x1 * 0x20f8 + -0x6cb * -0x4, 0x1 * -0x1a99 + -0x52a * 0x5 + 0x346b + 0.001) && (_0xdf241c = 0x1212 + 0x545 + 0x1757 * -0x1);
                            else {
                                _0x1786f2 *= _0x1186d1;
                                if (_0x237e2f[_0x57793a(0x13a)](FuzzyGreaterThan, _0x237e2f[_0x57793a(0x13b)](_0xdf241c, _0x1786f2), 0x1 * 0x685 + 0x3ad + -0x105 * 0xa, 0xd * -0x27a + 0xc41 + 0x5 * 0x3fd + 0.01))
                                    _0xdf241c -= _0x1786f2;
                                else
                                    FuzzyLessThan(_0xdf241c + _0x1786f2, -0x5 * 0xa6 + 0x1d * 0x28 + -0x14a, 0x1547 + -0x2e7 * 0x9 + 0x4d8 + 0.01) ? _0xdf241c += _0x1786f2 : _0xdf241c = 0x2 * 0xd3d + 0x12f * -0x1d + 0x29 * 0x31;
                            }
                        }
                    }
                    continue;
                case '13':
                    var _0x1c3ed4 = _0x171986[_0x57793a(0x131)]['y'];
                    continue;
                case '14':
                    if (_0x1c3ed4)
                        _0x35154d += _0x237e2f[_0x57793a(0x13c)](_0x1c3ed4, _0x1186d1);
                    else {
                        if (_0x237e2f[_0x57793a(0x13d)](_0x397175, _0x1aaf7f)) {
                            if (_0x1b594f)
                                _0x1aaf7f = Math['pow'](_0x1aaf7f, _0x1186d1), _0x35154d *= _0x1aaf7f, _0x2bf65c = Math[_0x57793a(0x138)](_0x237e2f[_0x57793a(0x13e)](_0x237e2f[_0x57793a(0x13c)](_0xdf241c, _0xdf241c), _0x237e2f[_0x57793a(0x13c)](_0x35154d, _0x35154d))), _0x237e2f[_0x57793a(0x13f)](FuzzyEqual, _0x2bf65c, -0x214 * 0xe + 0x16f3 + -0x1 * -0x625, 0x2062 + -0x1179 + -0xee9 + 0.001) && (_0x35154d = -0xb * 0x2b + -0x106b + 0x1244);
                            else {
                                _0x1aaf7f *= _0x1186d1;
                                if (_0x237e2f[_0x57793a(0x140)](FuzzyGreaterThan, _0x35154d - _0x1aaf7f, -0x1ce * 0x11 + -0xf47 * -0x1 + -0x1 * -0xf67, -0x80f * 0x1 + -0xda6 + 0x15b5 + 0.01))
                                    _0x35154d -= _0x1aaf7f;
                                else
                                    FuzzyLessThan(_0x237e2f[_0x57793a(0x13e)](_0x35154d, _0x1aaf7f), 0x2 * 0xd6f + -0x4d1 + -0x469 * 0x5, 0x3 * 0x1ef + -0x264f + -0xad6 * -0x3 + 0.01) ? _0x35154d += _0x1aaf7f : _0x35154d = -0x181d + 0x697 + 0x8c3 * 0x2;
                            }
                        }
                    }
                    continue;
                case '15':
                    _0x171986[_0x57793a(0x141)] && (_0xdf241c += _0x237e2f[_0x57793a(0x13c)](_0x237e2f[_0x57793a(0x13e)](this[_0x57793a(0x142)]['x'], _0x171986[_0x57793a(0x142)]['x']), _0x1186d1), _0x35154d += _0x237e2f[_0x57793a(0x13e)](this['gravity']['y'], _0x171986[_0x57793a(0x142)]['y']) * _0x1186d1);
                    continue;
                case '16':
                    var _0x35154d = _0x171986[_0x57793a(0x130)]['y'];
                    continue;
                case '17':
                    _0xdf241c = _0x237e2f[_0x57793a(0x143)](Clamp, _0xdf241c, -_0x26ea13, _0x26ea13);
                    continue;
                case '18':
                    var _0x26ea13 = _0x171986[_0x57793a(0x144)]['x'];
                    continue;
                case '19':
                    var _0x59108e = _0x171986['maxVelocity']['y'];
                    continue;
                }
                break;
            }
        },
        'separate': function (_0x2f0590, _0x585d52, _0x3e644e, _0x411fac, _0x1b858a, _0x28820d) {
            var _0x461850 = _0x11d501, _0x567754 = {
                    'vcoOu': _0x461850(0x145),
                    'zNkQb': function (_0x226fb, _0x5388ec, _0x1b5f9b, _0x474ae0, _0x4106a5) {
                        return _0x226fb(_0x5388ec, _0x1b5f9b, _0x474ae0, _0x4106a5);
                    },
                    'EiGRL': function (_0x3a3e18, _0x5287c3, _0x2ad9d8, _0x18b042, _0x195b04) {
                        return _0x3a3e18(_0x5287c3, _0x2ad9d8, _0x18b042, _0x195b04);
                    },
                    'KJkPO': function (_0x33bf90, _0x346151) {
                        return _0x33bf90 + _0x346151;
                    },
                    'oGWQA': function (_0x380135, _0x71ca09) {
                        return _0x380135 || _0x71ca09;
                    },
                    'fedbb': function (_0x1b5d52, _0xdabb85) {
                        return _0x1b5d52 !== _0xdabb85;
                    },
                    'AJGKH': _0x461850(0x146),
                    'MDxfE': function (_0x4150ba, _0x3ee4b1) {
                        return _0x4150ba < _0x3ee4b1;
                    },
                    'DcUxm': function (_0x3c2c7d, _0x248c8d) {
                        return _0x3c2c7d > _0x248c8d;
                    },
                    'RQmsZ': function (_0x473f18, _0x598f0d) {
                        return _0x473f18 > _0x598f0d;
                    }
                }, _0x30b016 = _0x567754[_0x461850(0x147)][_0x461850(0xa0)]('|'), _0x1adf53 = 0x4 * 0x722 + -0x244e + -0x1 * -0x7c6;
            while (!![]) {
                switch (_0x30b016[_0x1adf53++]) {
                case '0':
                    if (_0x3e644e && _0x3e644e[_0x461850(0xc8)](_0x411fac, _0x2f0590[_0x461850(0x11f)], _0x585d52['gameObject']) === ![])
                        return ![];
                    continue;
                case '1':
                    if (_0x1b858a)
                        _0xf028dc = _0x567754[_0x461850(0x148)](SeparateX, _0x2f0590, _0x585d52, _0x1b858a, this[_0x461850(0xbe)]), _0x397270 = _0x567754['EiGRL'](SeparateY, _0x2f0590, _0x585d52, _0x1b858a, this[_0x461850(0xbe)]);
                    else
                        this['forceX'] || Math[_0x461850(0x149)](this[_0x461850(0x142)]['y'] + _0x2f0590[_0x461850(0x142)]['y']) < Math[_0x461850(0x149)](_0x567754[_0x461850(0x14a)](this['gravity']['x'], _0x2f0590[_0x461850(0x142)]['x'])) ? (_0xf028dc = _0x567754[_0x461850(0x14b)](SeparateX, _0x2f0590, _0x585d52, _0x1b858a, this[_0x461850(0xbe)]), this[_0x461850(0x14c)](_0x2f0590, _0x585d52) && (_0x397270 = _0x567754['EiGRL'](SeparateY, _0x2f0590, _0x585d52, _0x1b858a, this[_0x461850(0xbe)]))) : (_0x397270 = _0x567754[_0x461850(0x14b)](SeparateY, _0x2f0590, _0x585d52, _0x1b858a, this[_0x461850(0xbe)]), this[_0x461850(0x14c)](_0x2f0590, _0x585d52) && (_0xf028dc = SeparateX(_0x2f0590, _0x585d52, _0x1b858a, this['OVERLAP_BIAS'])));
                    continue;
                case '2':
                    var _0xf028dc = ![];
                    continue;
                case '3':
                    if (_0x135079) {
                        if (_0x1b858a)
                            (_0x2f0590[_0x461850(0x14d)] || _0x585d52[_0x461850(0x14d)]) && this[_0x461850(0xfa)](Events[_0x461850(0x14e)], _0x2f0590['gameObject'], _0x585d52[_0x461850(0x11f)], _0x2f0590, _0x585d52);
                        else
                            (_0x2f0590[_0x461850(0x14f)] || _0x585d52[_0x461850(0x14f)]) && this[_0x461850(0xfa)](Events[_0x461850(0x150)], _0x2f0590[_0x461850(0x11f)], _0x585d52[_0x461850(0x11f)], _0x2f0590, _0x585d52);
                    }
                    continue;
                case '4':
                    if (_0x2f0590['isCircle'] && _0x585d52['isCircle'])
                        return this['separateCircle'](_0x2f0590, _0x585d52, _0x1b858a);
                    continue;
                case '5':
                    return _0x135079;
                case '6':
                    var _0x135079 = _0x567754[_0x461850(0x151)](_0xf028dc, _0x397270);
                    continue;
                case '7':
                    var _0x397270 = ![];
                    continue;
                case '8':
                    if (!_0x28820d && !_0x2f0590['enable'] || !_0x585d52[_0x461850(0xe7)] || _0x2f0590[_0x461850(0xa6)][_0x461850(0x152)] || _0x585d52[_0x461850(0xa6)][_0x461850(0x152)] || !this[_0x461850(0x14c)](_0x2f0590, _0x585d52))
                        return ![];
                    continue;
                case '9':
                    if (_0x567754['fedbb'](_0x2f0590['isCircle'], _0x585d52[_0x461850(0x153)])) {
                        var _0x4b2a39 = _0x567754['AJGKH']['split']('|'), _0x3fe171 = -0x2706 + 0x151f + 0x11e7;
                        while (!![]) {
                            switch (_0x4b2a39[_0x3fe171++]) {
                            case '0':
                                var _0x272722 = _0xe6b9e4[_0x461850(0x154)];
                                continue;
                            case '1':
                                var _0x334e4e = _0x2f0590[_0x461850(0x153)] ? _0x585d52 : _0x2f0590;
                                continue;
                            case '2':
                                if (_0x567754[_0x461850(0x155)](_0x272722['y'], _0x570317['y']) || _0x567754[_0x461850(0x156)](_0x272722['y'], _0x570317[_0x461850(0x157)])) {
                                    if (_0x567754[_0x461850(0x155)](_0x272722['x'], _0x570317['x']) || _0x567754[_0x461850(0x158)](_0x272722['x'], _0x570317[_0x461850(0x159)]))
                                        return this['separateCircle'](_0x2f0590, _0x585d52, _0x1b858a);
                                }
                                continue;
                            case '3':
                                var _0xe6b9e4 = _0x2f0590['isCircle'] ? _0x2f0590 : _0x585d52;
                                continue;
                            case '4':
                                var _0x570317 = {
                                    'x': _0x334e4e['x'],
                                    'y': _0x334e4e['y'],
                                    'right': _0x334e4e[_0x461850(0x159)],
                                    'bottom': _0x334e4e['bottom']
                                };
                                continue;
                            }
                            break;
                        }
                    }
                    continue;
                }
                break;
            }
        },
        'separateCircle': function (_0xfba4aa, _0x4cfcf4, _0x56d35d, _0x4d533c) {
            var _0xb4a091 = _0x11d501, _0x2310fe = {
                    'KESHs': function (_0x4f0a11, _0x3100c3, _0x446c37, _0x2ef2ba, _0x3e8a26) {
                        return _0x4f0a11(_0x3100c3, _0x446c37, _0x2ef2ba, _0x3e8a26);
                    },
                    'qZwUE': function (_0x1ae86a, _0xf5f586) {
                        return _0x1ae86a !== _0xf5f586;
                    },
                    'jNstF': function (_0xe3700a, _0x37e41d) {
                        return _0xe3700a < _0x37e41d;
                    },
                    'boScW': function (_0x68566, _0x119ba0) {
                        return _0x68566 - _0x119ba0;
                    },
                    'JyTCk': function (_0x940407, _0x61e164) {
                        return _0x940407 > _0x61e164;
                    },
                    'dHrYj': function (_0x14ef36, _0x91b08b) {
                        return _0x14ef36 - _0x91b08b;
                    },
                    'cLDUT': function (_0x1de6aa, _0x2cd185, _0x5cf6d4, _0x476b91, _0x53c2b6) {
                        return _0x1de6aa(_0x2cd185, _0x5cf6d4, _0x476b91, _0x53c2b6);
                    },
                    'NTUcV': function (_0x5392be, _0x3f407e) {
                        return _0x5392be > _0x3f407e;
                    },
                    'fkqTH': function (_0x3167c0, _0xa72a7b) {
                        return _0x3167c0 - _0xa72a7b;
                    },
                    'sIkUf': function (_0xee4eaf, _0x5943d8) {
                        return _0xee4eaf > _0x5943d8;
                    },
                    'FmgkO': function (_0x47a37b, _0x1f52b3, _0x531ca3, _0x2fef55, _0x2045fc) {
                        return _0x47a37b(_0x1f52b3, _0x531ca3, _0x2fef55, _0x2045fc);
                    },
                    'ReylC': function (_0x4a3944, _0x1775c1) {
                        return _0x4a3944 + _0x1775c1;
                    },
                    'pImUj': function (_0x117643, _0x2eff15) {
                        return _0x117643 - _0x2eff15;
                    },
                    'Mvpzz': function (_0x3d5b82, _0x4d25d3) {
                        return _0x3d5b82 + _0x4d25d3;
                    },
                    'VArOE': function (_0xfed881, _0x3c8fca) {
                        return _0xfed881 / _0x3c8fca;
                    },
                    'kURti': function (_0x3f5cb7, _0x5508dc) {
                        return _0x3f5cb7 - _0x5508dc;
                    },
                    'gJXqI': function (_0x572cb3, _0xf7dd09) {
                        return _0x572cb3 * _0xf7dd09;
                    },
                    'kQPPn': function (_0x4f13fd, _0x21b94d) {
                        return _0x4f13fd + _0x21b94d;
                    },
                    'zxjPM': function (_0xa0c7a0, _0x2d27b2) {
                        return _0xa0c7a0 * _0x2d27b2;
                    },
                    'yEbMi': function (_0x4973db, _0x35bfc0) {
                        return _0x4973db * _0x35bfc0;
                    },
                    'oIhrS': function (_0xd32131, _0xbaa014) {
                        return _0xd32131 + _0xbaa014;
                    },
                    'dIKsD': function (_0x4ca373, _0x29e44e) {
                        return _0x4ca373 / _0x29e44e;
                    },
                    'XgZkL': function (_0x52dfdc, _0x3e5105) {
                        return _0x52dfdc - _0x3e5105;
                    },
                    'XeOwO': function (_0x2de49c, _0x28649e) {
                        return _0x2de49c * _0x28649e;
                    },
                    'tnUiD': function (_0x2a76b5, _0x103a0c) {
                        return _0x2a76b5 * _0x103a0c;
                    },
                    'OiAtx': function (_0x4d3ef2, _0x3b2a9d) {
                        return _0x4d3ef2 / _0x3b2a9d;
                    },
                    'eSQgZ': function (_0x3e0bee, _0x4da633) {
                        return _0x3e0bee * _0x4da633;
                    },
                    'eTjUt': function (_0x184c3e, _0x467f1f) {
                        return _0x184c3e / _0x467f1f;
                    },
                    'SuTDQ': function (_0x24dac8, _0x4b245e, _0x4f0f38) {
                        return _0x24dac8(_0x4b245e, _0x4f0f38);
                    }
                };
            _0x2310fe[_0xb4a091(0x15a)](GetOverlapX, _0xfba4aa, _0x4cfcf4, ![], _0x4d533c), _0x2310fe['KESHs'](GetOverlapY, _0xfba4aa, _0x4cfcf4, ![], _0x4d533c);
            var _0x177bdc = -0x2345 + -0x1867 * 0x1 + 0x6 * 0x9f2;
            if (_0x2310fe[_0xb4a091(0x15b)](_0xfba4aa[_0xb4a091(0x153)], _0x4cfcf4[_0xb4a091(0x153)])) {
                var _0x203754 = {
                        'x': _0x4cfcf4[_0xb4a091(0x153)] ? _0xfba4aa[_0xb4a091(0x15c)]['x'] : _0x4cfcf4[_0xb4a091(0x15c)]['x'],
                        'y': _0x4cfcf4[_0xb4a091(0x153)] ? _0xfba4aa[_0xb4a091(0x15c)]['y'] : _0x4cfcf4[_0xb4a091(0x15c)]['y'],
                        'right': _0x4cfcf4[_0xb4a091(0x153)] ? _0xfba4aa[_0xb4a091(0x159)] : _0x4cfcf4[_0xb4a091(0x159)],
                        'bottom': _0x4cfcf4['isCircle'] ? _0xfba4aa[_0xb4a091(0x157)] : _0x4cfcf4['bottom']
                    }, _0x5a0bd3 = {
                        'x': _0xfba4aa['isCircle'] ? _0xfba4aa['center']['x'] : _0x4cfcf4[_0xb4a091(0x154)]['x'],
                        'y': _0xfba4aa[_0xb4a091(0x153)] ? _0xfba4aa[_0xb4a091(0x154)]['y'] : _0x4cfcf4[_0xb4a091(0x154)]['y'],
                        'radius': _0xfba4aa['isCircle'] ? _0xfba4aa['halfWidth'] : _0x4cfcf4['halfWidth']
                    };
                if (_0x2310fe[_0xb4a091(0x15d)](_0x5a0bd3['y'], _0x203754['y'])) {
                    if (_0x5a0bd3['x'] < _0x203754['x'])
                        _0x177bdc = _0x2310fe['boScW'](DistanceBetween(_0x5a0bd3['x'], _0x5a0bd3['y'], _0x203754['x'], _0x203754['y']), _0x5a0bd3[_0xb4a091(0x15e)]);
                    else
                        _0x2310fe[_0xb4a091(0x15f)](_0x5a0bd3['x'], _0x203754[_0xb4a091(0x159)]) && (_0x177bdc = _0x2310fe[_0xb4a091(0x160)](_0x2310fe[_0xb4a091(0x161)](DistanceBetween, _0x5a0bd3['x'], _0x5a0bd3['y'], _0x203754[_0xb4a091(0x159)], _0x203754['y']), _0x5a0bd3['radius']));
                } else {
                    if (_0x2310fe[_0xb4a091(0x162)](_0x5a0bd3['y'], _0x203754['bottom'])) {
                        if (_0x2310fe[_0xb4a091(0x15d)](_0x5a0bd3['x'], _0x203754['x']))
                            _0x177bdc = _0x2310fe[_0xb4a091(0x163)](DistanceBetween(_0x5a0bd3['x'], _0x5a0bd3['y'], _0x203754['x'], _0x203754[_0xb4a091(0x157)]), _0x5a0bd3[_0xb4a091(0x15e)]);
                        else
                            _0x2310fe[_0xb4a091(0x164)](_0x5a0bd3['x'], _0x203754['right']) && (_0x177bdc = _0x2310fe[_0xb4a091(0x163)](_0x2310fe['FmgkO'](DistanceBetween, _0x5a0bd3['x'], _0x5a0bd3['y'], _0x203754[_0xb4a091(0x159)], _0x203754[_0xb4a091(0x157)]), _0x5a0bd3['radius']));
                    }
                }
                _0x177bdc *= -(0x602 + 0xb02 + -0x1103);
            } else
                _0x177bdc = _0x2310fe['ReylC'](_0xfba4aa[_0xb4a091(0x165)], _0x4cfcf4['halfWidth']) - _0x2310fe[_0xb4a091(0x166)](DistanceBetween, _0xfba4aa[_0xb4a091(0x154)]['x'], _0xfba4aa[_0xb4a091(0x154)]['y'], _0x4cfcf4[_0xb4a091(0x154)]['x'], _0x4cfcf4[_0xb4a091(0x154)]['y']);
            _0xfba4aa['overlapR'] = _0x177bdc, _0x4cfcf4[_0xb4a091(0x167)] = _0x177bdc;
            if (_0x56d35d || _0x177bdc === 0x66 * 0x2f + -0x88b + -0xa2f || _0xfba4aa[_0xb4a091(0x168)] && _0x4cfcf4['immovable'] || _0xfba4aa[_0xb4a091(0x169)] || _0x4cfcf4[_0xb4a091(0x169)])
                return _0x2310fe[_0xb4a091(0x15b)](_0x177bdc, -0x2 * 0x552 + 0x188e + -0x89 * 0x1a) && (_0xfba4aa[_0xb4a091(0x14d)] || _0x4cfcf4[_0xb4a091(0x14d)]) && this['emit'](Events[_0xb4a091(0x14e)], _0xfba4aa[_0xb4a091(0x11f)], _0x4cfcf4['gameObject'], _0xfba4aa, _0x4cfcf4), _0x2310fe[_0xb4a091(0x15b)](_0x177bdc, -0x154b + -0x1bd4 + 0x1f7 * 0x19);
            var _0xdd481c = _0x2310fe[_0xb4a091(0x16a)](_0xfba4aa['center']['x'], _0x4cfcf4['center']['x']), _0x528865 = _0x2310fe[_0xb4a091(0x16a)](_0xfba4aa['center']['y'], _0x4cfcf4['center']['y']), _0x3c0639 = Math[_0xb4a091(0x138)](_0x2310fe[_0xb4a091(0x16b)](Math['pow'](_0xdd481c, 0x4 * 0x83b + -0xab6 * -0x1 + -0x4 * 0xae8), Math[_0xb4a091(0x16c)](_0x528865, 0x1cfe + 0x1fd * 0xb + -0x32db * 0x1))), _0x3a1ddf = _0x2310fe[_0xb4a091(0x16d)](_0x2310fe[_0xb4a091(0x16e)](_0x4cfcf4[_0xb4a091(0x154)]['x'], _0xfba4aa[_0xb4a091(0x154)]['x']), _0x3c0639) || -0x7cc * -0x1 + 0x82 * 0x1e + 0x2 * -0xb84, _0x70ac71 = _0x2310fe[_0xb4a091(0x16d)](_0x4cfcf4[_0xb4a091(0x154)]['y'] - _0xfba4aa[_0xb4a091(0x154)]['y'], _0x3c0639) || -0x51 * 0x35 + 0x77 * -0x35 + 0x2968, _0x34efa9 = _0x2310fe[_0xb4a091(0x16f)](-0x2531 + 0x286 * -0x4 + 0x2f4b, _0x2310fe['kURti'](_0x2310fe[_0xb4a091(0x16e)](_0x2310fe[_0xb4a091(0x170)](_0x2310fe[_0xb4a091(0x16f)](_0xfba4aa[_0xb4a091(0x130)]['x'], _0x3a1ddf), _0x2310fe['zxjPM'](_0xfba4aa['velocity']['y'], _0x70ac71)), _0x2310fe[_0xb4a091(0x171)](_0x4cfcf4['velocity']['x'], _0x3a1ddf)), _0x2310fe[_0xb4a091(0x172)](_0x4cfcf4[_0xb4a091(0x130)]['y'], _0x70ac71))) / _0x2310fe['oIhrS'](_0xfba4aa[_0xb4a091(0x173)], _0x4cfcf4[_0xb4a091(0x173)]);
            (_0xfba4aa['immovable'] || _0x4cfcf4[_0xb4a091(0x168)]) && (_0x34efa9 *= 0xe67 + 0x157f * 0x1 + -0x23e4);
            !_0xfba4aa['immovable'] && (_0xfba4aa['velocity']['x'] = _0x2310fe['kURti'](_0xfba4aa[_0xb4a091(0x130)]['x'], _0x2310fe['yEbMi'](_0x2310fe[_0xb4a091(0x174)](_0x34efa9, _0xfba4aa[_0xb4a091(0x173)]), _0x3a1ddf)), _0xfba4aa[_0xb4a091(0x130)]['y'] = _0x2310fe[_0xb4a091(0x175)](_0xfba4aa[_0xb4a091(0x130)]['y'], _0x2310fe[_0xb4a091(0x176)](_0x2310fe['dIKsD'](_0x34efa9, _0xfba4aa[_0xb4a091(0x173)]), _0x70ac71)));
            !_0x4cfcf4[_0xb4a091(0x168)] && (_0x4cfcf4['velocity']['x'] = _0x2310fe['oIhrS'](_0x4cfcf4[_0xb4a091(0x130)]['x'], _0x2310fe[_0xb4a091(0x177)](_0x2310fe[_0xb4a091(0x178)](_0x34efa9, _0x4cfcf4[_0xb4a091(0x173)]), _0x3a1ddf)), _0x4cfcf4['velocity']['y'] = _0x4cfcf4[_0xb4a091(0x130)]['y'] + _0x2310fe[_0xb4a091(0x179)](_0x2310fe[_0xb4a091(0x17a)](_0x34efa9, _0x4cfcf4[_0xb4a091(0x173)]), _0x70ac71));
            !_0xfba4aa['immovable'] && !_0x4cfcf4[_0xb4a091(0x168)] && (_0x177bdc /= -0x1130 + -0x38e + 0x2 * 0xa60);
            var _0x387915 = _0x2310fe[_0xb4a091(0x17b)](AngleBetweenPoints, _0xfba4aa[_0xb4a091(0x154)], _0x4cfcf4['center']), _0x392332 = _0x2310fe[_0xb4a091(0x17c)](_0x177bdc, MATH_CONST['EPSILON']) * Math[_0xb4a091(0x17d)](_0x387915), _0x4093b2 = _0x2310fe['eSQgZ'](_0x2310fe[_0xb4a091(0x17c)](_0x177bdc, MATH_CONST[_0xb4a091(0x17e)]), Math[_0xb4a091(0x17f)](_0x387915));
            return !_0xfba4aa[_0xb4a091(0x168)] && (_0xfba4aa['x'] -= _0x392332, _0xfba4aa['y'] -= _0x4093b2, _0xfba4aa[_0xb4a091(0x180)]()), !_0x4cfcf4[_0xb4a091(0x168)] && (_0x4cfcf4['x'] += _0x392332, _0x4cfcf4['y'] += _0x4093b2, _0x4cfcf4[_0xb4a091(0x180)]()), _0xfba4aa[_0xb4a091(0x130)]['x'] *= _0xfba4aa[_0xb4a091(0x181)]['x'], _0xfba4aa[_0xb4a091(0x130)]['y'] *= _0xfba4aa[_0xb4a091(0x181)]['y'], _0x4cfcf4[_0xb4a091(0x130)]['x'] *= _0x4cfcf4[_0xb4a091(0x181)]['x'], _0x4cfcf4[_0xb4a091(0x130)]['y'] *= _0x4cfcf4[_0xb4a091(0x181)]['y'], (_0xfba4aa[_0xb4a091(0x14f)] || _0x4cfcf4[_0xb4a091(0x14f)]) && this[_0xb4a091(0xfa)](Events[_0xb4a091(0x150)], _0xfba4aa[_0xb4a091(0x11f)], _0x4cfcf4[_0xb4a091(0x11f)], _0xfba4aa, _0x4cfcf4), !![];
        },
        'intersects': function (_0x5aba57, _0x2ab7d7) {
            var _0x426512 = _0x11d501, _0x5e72c6 = {
                    'tfSlE': function (_0x63affc, _0x2d4b62) {
                        return _0x63affc <= _0x2d4b62;
                    },
                    'yaeAM': function (_0x51bd05, _0x5e7fff) {
                        return _0x51bd05 <= _0x5e7fff;
                    },
                    'aQKMP': function (_0x203354, _0x10aa0a) {
                        return _0x203354 >= _0x10aa0a;
                    },
                    'mMqFP': function (_0x53664f, _0x3d0c46) {
                        return _0x53664f <= _0x3d0c46;
                    },
                    'UUCum': function (_0x23e572, _0x634bd1) {
                        return _0x23e572 + _0x634bd1;
                    }
                };
            if (_0x5aba57 === _0x2ab7d7)
                return ![];
            if (!_0x5aba57[_0x426512(0x153)] && !_0x2ab7d7[_0x426512(0x153)])
                return !(_0x5e72c6['tfSlE'](_0x5aba57[_0x426512(0x159)], _0x2ab7d7[_0x426512(0x15c)]['x']) || _0x5e72c6[_0x426512(0x182)](_0x5aba57[_0x426512(0x157)], _0x2ab7d7[_0x426512(0x15c)]['y']) || _0x5aba57[_0x426512(0x15c)]['x'] >= _0x2ab7d7[_0x426512(0x159)] || _0x5e72c6[_0x426512(0x183)](_0x5aba57[_0x426512(0x15c)]['y'], _0x2ab7d7[_0x426512(0x157)]));
            else
                return _0x5aba57[_0x426512(0x153)] ? _0x2ab7d7[_0x426512(0x153)] ? _0x5e72c6[_0x426512(0x184)](DistanceBetween(_0x5aba57[_0x426512(0x154)]['x'], _0x5aba57[_0x426512(0x154)]['y'], _0x2ab7d7[_0x426512(0x154)]['x'], _0x2ab7d7[_0x426512(0x154)]['y']), _0x5e72c6['UUCum'](_0x5aba57['halfWidth'], _0x2ab7d7[_0x426512(0x165)])) : this[_0x426512(0x185)](_0x5aba57, _0x2ab7d7) : this[_0x426512(0x185)](_0x2ab7d7, _0x5aba57);
        },
        'circleBodyIntersects': function (_0x421e0b, _0x2432a9) {
            var _0x25842f = _0x11d501, _0x172044 = {
                    'GODdT': function (_0x1e0392, _0x214bfd, _0x1ca7fe, _0x4d581f) {
                        return _0x1e0392(_0x214bfd, _0x1ca7fe, _0x4d581f);
                    },
                    'dQBrP': function (_0x1d14b2, _0x225ca2) {
                        return _0x1d14b2 - _0x225ca2;
                    },
                    'oNrME': function (_0x1b924b, _0x276a4f) {
                        return _0x1b924b * _0x276a4f;
                    },
                    'yMbXo': function (_0x5bbb9c, _0x21d6cf) {
                        return _0x5bbb9c <= _0x21d6cf;
                    },
                    'qXprC': function (_0x2167ea, _0xe329e5) {
                        return _0x2167ea + _0xe329e5;
                    }
                }, _0xae2fc9 = Clamp(_0x421e0b[_0x25842f(0x154)]['x'], _0x2432a9[_0x25842f(0x186)], _0x2432a9['right']), _0x392372 = _0x172044[_0x25842f(0x187)](Clamp, _0x421e0b['center']['y'], _0x2432a9[_0x25842f(0x188)], _0x2432a9[_0x25842f(0x157)]), _0xb77f48 = _0x172044['dQBrP'](_0x421e0b[_0x25842f(0x154)]['x'], _0xae2fc9) * _0x172044['dQBrP'](_0x421e0b[_0x25842f(0x154)]['x'], _0xae2fc9), _0x4f802c = _0x172044['oNrME'](_0x421e0b['center']['y'] - _0x392372, _0x172044['dQBrP'](_0x421e0b[_0x25842f(0x154)]['y'], _0x392372));
            return _0x172044[_0x25842f(0x189)](_0x172044[_0x25842f(0x18a)](_0xb77f48, _0x4f802c), _0x421e0b[_0x25842f(0x165)] * _0x421e0b[_0x25842f(0x165)]);
        },
        'overlap': function (_0x5a9970, _0x2dc4ac, _0x12db8c, _0x313c9a, _0x5c1cf5) {
            var _0x1cdf3c = _0x11d501, _0x4f9c99 = {
                    'cfbNn': function (_0x489660, _0x299905) {
                        return _0x489660 === _0x299905;
                    },
                    'AcSWk': function (_0x173b1f, _0x5a6eda) {
                        return _0x173b1f === _0x5a6eda;
                    }
                };
            return _0x4f9c99[_0x1cdf3c(0x18b)](_0x12db8c, undefined) && (_0x12db8c = null), _0x4f9c99[_0x1cdf3c(0x18c)](_0x313c9a, undefined) && (_0x313c9a = null), _0x4f9c99[_0x1cdf3c(0x18c)](_0x5c1cf5, undefined) && (_0x5c1cf5 = _0x12db8c), this[_0x1cdf3c(0x18d)](_0x5a9970, _0x2dc4ac, _0x12db8c, _0x313c9a, _0x5c1cf5, !![]);
        },
        'collide': function (_0x4c1c7f, _0x30a835, _0x5eb0c6, _0x3e0d51, _0x1a660d) {
            var _0x163806 = _0x11d501, _0x4adc77 = {
                    'XRlyy': function (_0x2e666f, _0x2ad085) {
                        return _0x2e666f === _0x2ad085;
                    }
                };
            return _0x5eb0c6 === undefined && (_0x5eb0c6 = null), _0x4adc77[_0x163806(0x18e)](_0x3e0d51, undefined) && (_0x3e0d51 = null), _0x4adc77['XRlyy'](_0x1a660d, undefined) && (_0x1a660d = _0x5eb0c6), this['collideObjects'](_0x4c1c7f, _0x30a835, _0x5eb0c6, _0x3e0d51, _0x1a660d, ![]);
        },
        'collideObjects': function (_0x30ea85, _0x205c80, _0x3a8277, _0x2ed36d, _0x18ac5e, _0x386a2f) {
            var _0x538802 = _0x11d501, _0xf499c5 = {
                    'hnTPB': function (_0x1e4cfa, _0x5d42c1) {
                        return _0x1e4cfa === _0x5d42c1;
                    },
                    'WVnoA': function (_0x2246cd, _0x5ee7d0) {
                        return _0x2246cd && _0x5ee7d0;
                    },
                    'IFyLK': function (_0x3aca98, _0x19cc61) {
                        return _0x3aca98 < _0x19cc61;
                    },
                    'GKvdV': function (_0x2b68b8, _0x5ad820) {
                        return _0x2b68b8 && _0x5ad820;
                    },
                    'DxmHP': function (_0x44d77b, _0x455256) {
                        return _0x44d77b + _0x455256;
                    },
                    'OAhAA': function (_0x4850f3, _0x2cb3d7) {
                        return _0x4850f3 < _0x2cb3d7;
                    }
                }, _0x49527b, _0x1f85af;
            _0x30ea85[_0x538802(0xdb)] && _0x30ea85[_0x538802(0xe2)] === undefined && (_0x30ea85 = _0x30ea85['children'][_0x538802(0x114)]);
            _0x205c80 && _0x205c80[_0x538802(0xdb)] && _0xf499c5[_0x538802(0x18f)](_0x205c80[_0x538802(0xe2)], undefined) && (_0x205c80 = _0x205c80[_0x538802(0x190)][_0x538802(0x114)]);
            var _0x2261e2 = Array[_0x538802(0xd8)](_0x30ea85), _0x491cc9 = Array[_0x538802(0xd8)](_0x205c80);
            this[_0x538802(0xd2)] = 0x36 * 0x91 + -0x54b * 0x1 + -0x7 * 0x39d;
            if (_0xf499c5[_0x538802(0x191)](!_0x2261e2, !_0x491cc9))
                this[_0x538802(0x192)](_0x30ea85, _0x205c80, _0x3a8277, _0x2ed36d, _0x18ac5e, _0x386a2f);
            else {
                if (!_0x2261e2 && _0x491cc9)
                    for (_0x49527b = 0x154 * 0x10 + -0x90 + 0x296 * -0x8; _0xf499c5['IFyLK'](_0x49527b, _0x205c80[_0x538802(0xda)]); _0x49527b++) {
                        this[_0x538802(0x192)](_0x30ea85, _0x205c80[_0x49527b], _0x3a8277, _0x2ed36d, _0x18ac5e, _0x386a2f);
                    }
                else {
                    if (_0xf499c5[_0x538802(0x193)](_0x2261e2, !_0x491cc9)) {
                        if (!_0x205c80)
                            for (_0x49527b = -0x1c0b + 0x436 + -0x1 * -0x17d5; _0x49527b < _0x30ea85[_0x538802(0xda)]; _0x49527b++) {
                                var _0x6a7654 = _0x30ea85[_0x49527b];
                                for (_0x1f85af = _0xf499c5[_0x538802(0x194)](_0x49527b, 0xf29 + 0x7ce + -0x16f6); _0xf499c5[_0x538802(0x195)](_0x1f85af, _0x30ea85[_0x538802(0xda)]); _0x1f85af++) {
                                    if (_0xf499c5['hnTPB'](_0x49527b, _0x1f85af))
                                        continue;
                                    this[_0x538802(0x192)](_0x6a7654, _0x30ea85[_0x1f85af], _0x3a8277, _0x2ed36d, _0x18ac5e, _0x386a2f);
                                }
                            }
                        else
                            for (_0x49527b = -0x158f + 0x2f * 0x8a + -0x3c7; _0xf499c5[_0x538802(0x196)](_0x49527b, _0x30ea85[_0x538802(0xda)]); _0x49527b++) {
                                this[_0x538802(0x192)](_0x30ea85[_0x49527b], _0x205c80, _0x3a8277, _0x2ed36d, _0x18ac5e, _0x386a2f);
                            }
                    } else
                        for (_0x49527b = -0x83 * -0x31 + 0x471 * -0x4 + -0x74f; _0x49527b < _0x30ea85['length']; _0x49527b++) {
                            for (_0x1f85af = -0x1 * 0xd40 + 0x115e + -0x20f * 0x2; _0xf499c5[_0x538802(0x196)](_0x1f85af, _0x205c80['length']); _0x1f85af++) {
                                this['collideHandler'](_0x30ea85[_0x49527b], _0x205c80[_0x1f85af], _0x3a8277, _0x2ed36d, _0x18ac5e, _0x386a2f);
                            }
                        }
                }
            }
            return this['_total'] > 0x1fbb + 0x3 * -0x66f + -0xc6e;
        },
        'collideHandler': function (_0x3d48e7, _0x163542, _0x2707b5, _0x5ab957, _0x53cf15, _0x48b6d0) {
            var _0x391130 = _0x11d501, _0x2965d9 = {
                    'CEIDF': function (_0x27303a, _0x13e6b5) {
                        return _0x27303a === _0x13e6b5;
                    },
                    'zeMJt': function (_0x38f719, _0x1ce2df) {
                        return _0x38f719 || _0x1ce2df;
                    }
                };
            if (_0x2965d9[_0x391130(0x197)](_0x163542, undefined) && _0x3d48e7[_0x391130(0xdb)])
                return this[_0x391130(0x198)](_0x3d48e7, _0x3d48e7, _0x2707b5, _0x5ab957, _0x53cf15, _0x48b6d0);
            if (_0x2965d9[_0x391130(0x199)](!_0x3d48e7, !_0x163542))
                return ![];
            if (_0x3d48e7[_0x391130(0xde)]) {
                if (_0x163542[_0x391130(0xde)])
                    return this['collideSpriteVsSprite'](_0x3d48e7, _0x163542, _0x2707b5, _0x5ab957, _0x53cf15, _0x48b6d0);
                else {
                    if (_0x163542['isParent'])
                        return this['collideSpriteVsGroup'](_0x3d48e7, _0x163542, _0x2707b5, _0x5ab957, _0x53cf15, _0x48b6d0);
                    else {
                        if (_0x163542[_0x391130(0x19a)])
                            return this[_0x391130(0x19b)](_0x3d48e7, _0x163542, _0x2707b5, _0x5ab957, _0x53cf15, _0x48b6d0);
                    }
                }
            } else {
                if (_0x3d48e7[_0x391130(0xdb)]) {
                    if (_0x163542[_0x391130(0xde)])
                        return this['collideSpriteVsGroup'](_0x163542, _0x3d48e7, _0x2707b5, _0x5ab957, _0x53cf15, _0x48b6d0);
                    else {
                        if (_0x163542['isParent'])
                            return this[_0x391130(0x198)](_0x3d48e7, _0x163542, _0x2707b5, _0x5ab957, _0x53cf15, _0x48b6d0);
                        else {
                            if (_0x163542['isTilemap'])
                                return this[_0x391130(0x19c)](_0x3d48e7, _0x163542, _0x2707b5, _0x5ab957, _0x53cf15, _0x48b6d0);
                        }
                    }
                } else {
                    if (_0x3d48e7[_0x391130(0x19a)]) {
                        if (_0x163542[_0x391130(0xde)])
                            return this[_0x391130(0x19b)](_0x163542, _0x3d48e7, _0x2707b5, _0x5ab957, _0x53cf15, _0x48b6d0);
                        else {
                            if (_0x163542[_0x391130(0xdb)])
                                return this[_0x391130(0x19c)](_0x163542, _0x3d48e7, _0x2707b5, _0x5ab957, _0x53cf15, _0x48b6d0);
                        }
                    }
                }
            }
        },
        'collideSpriteVsSprite': function (_0x48c1ac, _0x3b7a30, _0x2f0578, _0x2c0ace, _0x18ac1d, _0x498442) {
            var _0x32f9fd = _0x11d501;
            if (!_0x48c1ac['body'] || !_0x3b7a30[_0x32f9fd(0xde)])
                return ![];
            return this[_0x32f9fd(0x19d)](_0x48c1ac[_0x32f9fd(0xde)], _0x3b7a30['body'], _0x2c0ace, _0x18ac1d, _0x498442) && (_0x2f0578 && _0x2f0578[_0x32f9fd(0xc8)](_0x18ac1d, _0x48c1ac, _0x3b7a30), this['_total']++), !![];
        },
        'collideSpriteVsGroup': function (_0x513a05, _0x35d393, _0x19da98, _0x5c7e97, _0x1027b5, _0x22290b) {
            var _0x1a3f0e = _0x11d501, _0x223fc8 = {
                    'agFFh': function (_0x30d5fc, _0x3fb769) {
                        return _0x30d5fc === _0x3fb769;
                    },
                    'zfPDL': function (_0x2deef3, _0x45f0e2) {
                        return _0x2deef3 === _0x45f0e2;
                    },
                    'wEYwj': function (_0x528be1, _0x26b40f) {
                        return _0x528be1 === _0x26b40f;
                    }
                }, _0x3f2373 = _0x513a05[_0x1a3f0e(0xde)];
            if (_0x35d393[_0x1a3f0e(0xda)] === 0x1b66 + -0xd * 0xab + -0x12b7 || !_0x3f2373 || !_0x3f2373[_0x1a3f0e(0xe7)] || _0x3f2373[_0x1a3f0e(0xa6)][_0x1a3f0e(0x152)])
                return;
            var _0xb8cf3e, _0x48fd50, _0x4c3c7e;
            if (this['useTree'] || _0x35d393[_0x1a3f0e(0xe2)] === CONST[_0x1a3f0e(0xe1)]) {
                var _0x122013 = this[_0x1a3f0e(0xa1)];
                _0x122013[_0x1a3f0e(0x19e)] = _0x3f2373[_0x1a3f0e(0x186)], _0x122013[_0x1a3f0e(0x19f)] = _0x3f2373[_0x1a3f0e(0x188)], _0x122013[_0x1a3f0e(0x1a0)] = _0x3f2373[_0x1a3f0e(0x159)], _0x122013['maxY'] = _0x3f2373[_0x1a3f0e(0x157)];
                var _0xbda719 = _0x223fc8[_0x1a3f0e(0x1a1)](_0x35d393['physicsType'], CONST[_0x1a3f0e(0xd7)]) ? this[_0x1a3f0e(0xc7)]['search'](_0x122013) : this['staticTree'][_0x1a3f0e(0x1a2)](_0x122013);
                _0x48fd50 = _0xbda719[_0x1a3f0e(0xda)];
                for (_0xb8cf3e = -0x1f57 + 0xb2e + -0x1 * -0x1429; _0xb8cf3e < _0x48fd50; _0xb8cf3e++) {
                    _0x4c3c7e = _0xbda719[_0xb8cf3e];
                    if (_0x223fc8['zfPDL'](_0x3f2373, _0x4c3c7e) || !_0x4c3c7e[_0x1a3f0e(0xe7)] || _0x4c3c7e[_0x1a3f0e(0xa6)]['none'] || !_0x35d393[_0x1a3f0e(0x1a3)](_0x4c3c7e['gameObject']))
                        continue;
                    this[_0x1a3f0e(0x19d)](_0x3f2373, _0x4c3c7e, _0x5c7e97, _0x1027b5, _0x22290b, !![]) && (_0x19da98 && _0x19da98['call'](_0x1027b5, _0x3f2373[_0x1a3f0e(0x11f)], _0x4c3c7e[_0x1a3f0e(0x11f)]), this['_total']++);
                }
            } else {
                var _0x5da8a7 = _0x35d393[_0x1a3f0e(0xdc)](), _0xe5a8ba = _0x35d393['children'][_0x1a3f0e(0x114)][_0x1a3f0e(0x1a4)](_0x513a05);
                _0x48fd50 = _0x5da8a7[_0x1a3f0e(0xda)];
                for (_0xb8cf3e = 0x11 * -0x1 + -0x2 * -0x979 + -0x12e1; _0xb8cf3e < _0x48fd50; _0xb8cf3e++) {
                    _0x4c3c7e = _0x5da8a7[_0xb8cf3e]['body'];
                    if (!_0x4c3c7e || _0x223fc8['wEYwj'](_0xb8cf3e, _0xe5a8ba) || !_0x4c3c7e[_0x1a3f0e(0xe7)])
                        continue;
                    this['separate'](_0x3f2373, _0x4c3c7e, _0x5c7e97, _0x1027b5, _0x22290b) && (_0x19da98 && _0x19da98['call'](_0x1027b5, _0x3f2373[_0x1a3f0e(0x11f)], _0x4c3c7e[_0x1a3f0e(0x11f)]), this[_0x1a3f0e(0xd2)]++);
                }
            }
        },
        'collideGroupVsTilemapLayer': function (_0x46b242, _0x5443bf, _0x4aac3f, _0x4a91fe, _0x569411, _0x485555) {
            var _0x4083a8 = _0x11d501, _0x3d61d7 = {
                    'Rwkwm': function (_0x301825, _0x2ec723) {
                        return _0x301825 < _0x2ec723;
                    },
                    'IfTUq': function (_0x5bcb83, _0xbe902) {
                        return _0x5bcb83 === _0xbe902;
                    }
                }, _0x868e49 = '4|3|0|1|2'[_0x4083a8(0xa0)]('|'), _0x1fd945 = -0x57 * -0x66 + -0x1324 + -0xf86 * 0x1;
            while (!![]) {
                switch (_0x868e49[_0x1fd945++]) {
                case '0':
                    var _0x2f68a7 = ![];
                    continue;
                case '1':
                    for (var _0x8c7010 = 0x692 + 0x52e + 0x178 * -0x8; _0x3d61d7[_0x4083a8(0x1a5)](_0x8c7010, _0x2b6bb1['length']); _0x8c7010++) {
                        _0x2b6bb1[_0x8c7010][_0x4083a8(0xde)] && (this[_0x4083a8(0x19b)](_0x2b6bb1[_0x8c7010], _0x5443bf, _0x4aac3f, _0x4a91fe, _0x569411, _0x485555) && (_0x2f68a7 = !![]));
                    }
                    continue;
                case '2':
                    return _0x2f68a7;
                case '3':
                    if (_0x3d61d7[_0x4083a8(0x1a6)](_0x2b6bb1[_0x4083a8(0xda)], -0x1 * -0x2273 + 0x22b7 * -0x1 + 0x44))
                        return ![];
                    continue;
                case '4':
                    var _0x2b6bb1 = _0x46b242[_0x4083a8(0xdc)]();
                    continue;
                }
                break;
            }
        },
        'collideTiles': function (_0x23ecde, _0x379e4d, _0x5cc20c, _0x43845a, _0x2cfac3) {
            var _0x5608bf = _0x11d501, _0x554691 = {
                    'PGxJV': function (_0x424092, _0x4adb78) {
                        return _0x424092 === _0x4adb78;
                    }
                };
            return !_0x23ecde['body'][_0x5608bf(0xe7)] || _0x554691[_0x5608bf(0x1a7)](_0x379e4d[_0x5608bf(0xda)], 0x17b * -0xd + 0x2548 + -0x1209) ? ![] : this[_0x5608bf(0x1a8)](_0x23ecde, _0x379e4d, _0x5cc20c, _0x43845a, _0x2cfac3, ![], ![]);
        },
        'overlapTiles': function (_0x57ec6d, _0xa1753c, _0x1d8f66, _0x18be16, _0x2726b1) {
            var _0x52037d = _0x11d501, _0x1f9bc9 = {
                    'pzCaJ': function (_0x2eafd6, _0x1464e8) {
                        return _0x2eafd6 === _0x1464e8;
                    }
                };
            return !_0x57ec6d[_0x52037d(0xde)][_0x52037d(0xe7)] || _0x1f9bc9[_0x52037d(0x1a9)](_0xa1753c[_0x52037d(0xda)], -0x35d * -0x1 + 0x2435 + 0x7ea * -0x5) ? ![] : this[_0x52037d(0x1a8)](_0x57ec6d, _0xa1753c, _0x1d8f66, _0x18be16, _0x2726b1, !![], ![]);
        },
        'collideSpriteVsTilemapLayer': function (_0x5dde67, _0x56267e, _0x3bb4ea, _0x564f18, _0x1ce024, _0x37cdc8) {
            var _0x28b28c = _0x11d501, _0x599283 = {
                    'jlLwZ': '5|6|8|10|1|0|9|2|4|3|7',
                    'Xzapw': function (_0x4f9635, _0x386f9c) {
                        return _0x4f9635 - _0x386f9c;
                    },
                    'OhUiX': function (_0x43e72c, _0xfe1114, _0x4e7acc, _0x52ab5c, _0x358798, _0x336873, _0x35cfe2, _0x2209d8) {
                        return _0x43e72c(_0xfe1114, _0x4e7acc, _0x52ab5c, _0x358798, _0x336873, _0x35cfe2, _0x2209d8);
                    },
                    'nPeZD': function (_0x13510b, _0x196aa2) {
                        return _0x13510b - _0x196aa2;
                    }
                }, _0x3a891e = _0x599283[_0x28b28c(0x1aa)][_0x28b28c(0xa0)]('|'), _0x3d73d6 = -0x2e3 * 0x1 + -0x18d6 + 0x1bb9;
            while (!![]) {
                switch (_0x3a891e[_0x3d73d6++]) {
                case '0':
                    var _0x3cc936 = _0xd0f777[_0x28b28c(0xd1)];
                    continue;
                case '1':
                    var _0x207bdc = _0xd0f777[_0x28b28c(0xd0)];
                    continue;
                case '2':
                    if (_0x489ccd['tileWidth'] > _0x489ccd['baseTileWidth']) {
                        var _0x29bb35 = _0x599283[_0x28b28c(0x1ab)](_0x489ccd[_0x28b28c(0x1ac)], _0x489ccd[_0x28b28c(0x1ad)]) * _0x56267e[_0x28b28c(0x1ae)];
                        _0x1d7641 -= _0x29bb35, _0x207bdc += _0x29bb35;
                    }
                    continue;
                case '3':
                    var _0x3626f3 = _0x599283['OhUiX'](GetTilesWithinWorldXY, _0x1d7641, _0x3a6b90, _0x207bdc, _0x3cc936, null, _0x56267e[_0x28b28c(0x1af)][_0x28b28c(0x1b0)][_0x28b28c(0x1b1)], _0x56267e['layer']);
                    continue;
                case '4':
                    if (_0x489ccd[_0x28b28c(0x1b2)] > _0x489ccd[_0x28b28c(0x1b3)]) {
                        var _0x12b6f0 = _0x599283[_0x28b28c(0x1b4)](_0x489ccd[_0x28b28c(0x1b2)], _0x489ccd[_0x28b28c(0x1b3)]) * _0x56267e['scaleY'];
                        _0x3cc936 += _0x12b6f0;
                    }
                    continue;
                case '5':
                    var _0xd0f777 = _0x5dde67[_0x28b28c(0xde)];
                    continue;
                case '6':
                    if (!_0xd0f777['enable'] || _0xd0f777['checkCollision']['none'])
                        return ![];
                    continue;
                case '7':
                    return _0x3626f3[_0x28b28c(0xda)] === 0x250c + 0x2615 * -0x1 + 0x109 ? ![] : this[_0x28b28c(0x1a8)](_0x5dde67, _0x3626f3, _0x3bb4ea, _0x564f18, _0x1ce024, _0x37cdc8, !![]);
                    continue;
                case '8':
                    var _0x1d7641 = _0xd0f777['position']['x'];
                    continue;
                case '9':
                    var _0x489ccd = _0x56267e[_0x28b28c(0x1b5)];
                    continue;
                case '10':
                    var _0x3a6b90 = _0xd0f777[_0x28b28c(0x15c)]['y'];
                    continue;
                }
                break;
            }
        },
        'collideSpriteVsTilesHandler': function (_0x1ddb67, _0x7ea9d5, _0x5ccfde, _0x3dfb7d, _0x4d05ff, _0x2f2bf7, _0x1e6de5) {
            var _0x3381d4 = _0x11d501, _0x2f1a2c = {
                    'KDutC': _0x3381d4(0x1b6),
                    'huLtX': function (_0x104d16, _0xda335d) {
                        return _0x104d16 < _0xda335d;
                    },
                    'eWFwQ': _0x3381d4(0x1b7),
                    'Efahr': function (_0x42a1a7, _0x43d942) {
                        return _0x42a1a7 + _0x43d942;
                    },
                    'NJQys': function (_0x787c1c, _0x2c3b53) {
                        return _0x787c1c * _0x2c3b53;
                    },
                    'fgvqC': function (_0x3c561f, _0x3e7cc3) {
                        return _0x3c561f !== _0x3e7cc3;
                    },
                    'MJPbT': function (_0x105acd, _0x1ea7fd) {
                        return _0x105acd - _0x1ea7fd;
                    },
                    'oCXou': function (_0x279486, _0x2b28ab, _0x5ee280, _0x54d728, _0x53c134, _0x59bb42, _0x598ae5, _0x445f47) {
                        return _0x279486(_0x2b28ab, _0x5ee280, _0x54d728, _0x53c134, _0x59bb42, _0x598ae5, _0x445f47);
                    }
                }, _0x598c2a = _0x2f1a2c[_0x3381d4(0x1b8)][_0x3381d4(0xa0)]('|'), _0x57be7b = -0x16b8 + 0x184 + 0x1534;
            while (!![]) {
                switch (_0x598c2a[_0x57be7b++]) {
                case '0':
                    var _0x33f325;
                    continue;
                case '1':
                    var _0x43eecd = {
                        'left': 0x0,
                        'right': 0x0,
                        'top': 0x0,
                        'bottom': 0x0
                    };
                    continue;
                case '2':
                    var _0x22a06a;
                    continue;
                case '3':
                    return _0x13a3f8;
                case '4':
                    var _0x4bdbb3 = _0x1ddb67[_0x3381d4(0xde)];
                    continue;
                case '5':
                    for (var _0x2dcfac = -0x261 * -0x5 + -0x176b + 0xa * 0x127; _0x2f1a2c[_0x3381d4(0x1b9)](_0x2dcfac, _0x7ea9d5['length']); _0x2dcfac++) {
                        var _0x436fa9 = _0x2f1a2c[_0x3381d4(0x1ba)][_0x3381d4(0xa0)]('|'), _0x3f4e78 = -0x1ee4 * -0x1 + -0x6a7 + -0x183d;
                        while (!![]) {
                            switch (_0x436fa9[_0x3f4e78++]) {
                            case '0':
                                _0x43eecd['left'] = _0x33e4cc['x'];
                                continue;
                            case '1':
                                _0x43eecd['right'] = _0x2f1a2c[_0x3381d4(0x1bb)](_0x43eecd[_0x3381d4(0x186)], _0x2f1a2c[_0x3381d4(0x1bc)](_0x33f325[_0x3381d4(0xd0)], _0x22a06a[_0x3381d4(0x1ae)]));
                                continue;
                            case '2':
                                var _0x33e4cc = _0x22a06a[_0x3381d4(0x1bd)](_0x33f325['x'], _0x33f325['y']);
                                continue;
                            case '3':
                                _0x22a06a = _0x33f325[_0x3381d4(0x1be)];
                                continue;
                            case '4':
                                _0x43eecd[_0x3381d4(0x157)] = _0x43eecd['top'] + _0x2f1a2c['NJQys'](_0x33f325[_0x3381d4(0xd1)], _0x22a06a[_0x3381d4(0x1bf)]);
                                continue;
                            case '5':
                                _0x2f1a2c[_0x3381d4(0x1c0)](_0x33f325[_0x3381d4(0x1c1)], _0x33f325[_0x3381d4(0xd1)]) && (_0x43eecd[_0x3381d4(0x188)] -= _0x2f1a2c[_0x3381d4(0x1c2)](_0x33f325['height'], _0x33f325[_0x3381d4(0x1c1)]) * _0x22a06a[_0x3381d4(0x1bf)]);
                                continue;
                            case '6':
                                _0x43eecd['top'] = _0x33e4cc['y'];
                                continue;
                            case '7':
                                if (TileIntersectsBody(_0x43eecd, _0x4bdbb3) && (!_0x3dfb7d || _0x3dfb7d['call'](_0x4d05ff, _0x1ddb67, _0x33f325)) && ProcessTileCallbacks(_0x33f325, _0x1ddb67) && (_0x2f2bf7 || _0x2f1a2c[_0x3381d4(0x1c3)](SeparateTile, _0x2dcfac, _0x4bdbb3, _0x33f325, _0x43eecd, _0x22a06a, this[_0x3381d4(0xad)], _0x1e6de5))) {
                                    this[_0x3381d4(0xd2)]++, _0x13a3f8 = !![];
                                    _0x5ccfde && _0x5ccfde['call'](_0x4d05ff, _0x1ddb67, _0x33f325);
                                    if (_0x2f2bf7 && _0x4bdbb3[_0x3381d4(0x14d)])
                                        this[_0x3381d4(0xfa)](Events[_0x3381d4(0x1c4)], _0x1ddb67, _0x33f325, _0x4bdbb3);
                                    else
                                        _0x4bdbb3['onCollide'] && this[_0x3381d4(0xfa)](Events[_0x3381d4(0x1c5)], _0x1ddb67, _0x33f325, _0x4bdbb3);
                                }
                                continue;
                            case '8':
                                _0x33f325 = _0x7ea9d5[_0x2dcfac];
                                continue;
                            }
                            break;
                        }
                    }
                    continue;
                case '6':
                    var _0x13a3f8 = ![];
                    continue;
                }
                break;
            }
        },
        'collideGroupVsGroup': function (_0x52a88c, _0x5b28c8, _0x8447b1, _0x5c3282, _0x3f9bc5, _0x350612) {
            var _0x51ea07 = _0x11d501, _0x324d3e = {
                    'aMSMw': function (_0x136ccf, _0x509041) {
                        return _0x136ccf === _0x509041;
                    },
                    'xRxWY': function (_0x21b739, _0x46a4a4) {
                        return _0x21b739 < _0x46a4a4;
                    }
                };
            if (_0x52a88c[_0x51ea07(0xda)] === 0x1e07 * -0x1 + -0x1 * 0x203 + 0x200a || _0x324d3e[_0x51ea07(0x1c6)](_0x5b28c8['length'], -0x4cd * 0x5 + 0x1 * -0x1d2f + 0x4 * 0xd4c))
                return;
            var _0x107329 = _0x52a88c['getChildren']();
            for (var _0x244668 = 0x74a + -0x15e1 + 0xe97; _0x324d3e[_0x51ea07(0x1c7)](_0x244668, _0x107329[_0x51ea07(0xda)]); _0x244668++) {
                this[_0x51ea07(0x1c8)](_0x107329[_0x244668], _0x5b28c8, _0x8447b1, _0x5c3282, _0x3f9bc5, _0x350612);
            }
        },
        'wrap': function (_0x1c4b9e, _0x298f0a) {
            var _0x34278c = _0x11d501;
            if (_0x1c4b9e[_0x34278c(0xde)])
                this['wrapObject'](_0x1c4b9e, _0x298f0a);
            else {
                if (_0x1c4b9e['getChildren'])
                    this[_0x34278c(0x1c9)](_0x1c4b9e['getChildren'](), _0x298f0a);
                else
                    Array[_0x34278c(0xd8)](_0x1c4b9e) ? this[_0x34278c(0x1c9)](_0x1c4b9e, _0x298f0a) : this[_0x34278c(0x1ca)](_0x1c4b9e, _0x298f0a);
            }
        },
        'wrapArray': function (_0x114265, _0x179a88) {
            var _0x5969d3 = _0x11d501, _0x250444 = {
                    'dAgXH': function (_0x164263, _0xbebb00) {
                        return _0x164263 < _0xbebb00;
                    }
                };
            for (var _0x5db3b8 = 0x1eb6 + -0x444 + 0x2a5 * -0xa; _0x250444[_0x5969d3(0x1cb)](_0x5db3b8, _0x114265[_0x5969d3(0xda)]); _0x5db3b8++) {
                this[_0x5969d3(0x1ca)](_0x114265[_0x5db3b8], _0x179a88);
            }
        },
        'wrapObject': function (_0x199b6f, _0x195a8d) {
            var _0x31f682 = _0x11d501, _0xe2bef0 = {
                    'usNCZ': function (_0x438c97, _0x12bd6d) {
                        return _0x438c97 === _0x12bd6d;
                    },
                    'kDCzZ': function (_0x44856d, _0x4208bf, _0x25b11d, _0x3b4346) {
                        return _0x44856d(_0x4208bf, _0x25b11d, _0x3b4346);
                    },
                    'JYIvo': function (_0x11f404, _0x500055) {
                        return _0x11f404 - _0x500055;
                    },
                    'pxAUn': function (_0x366009, _0x337e94) {
                        return _0x366009 + _0x337e94;
                    },
                    'uYzFZ': function (_0x563905, _0x1bf785, _0x192777, _0x54a90f) {
                        return _0x563905(_0x1bf785, _0x192777, _0x54a90f);
                    }
                };
            _0xe2bef0[_0x31f682(0x1cc)](_0x195a8d, undefined) && (_0x195a8d = 0x5c2 * -0x4 + 0x17ea + -0xe2), _0x199b6f['x'] = _0xe2bef0['kDCzZ'](Wrap, _0x199b6f['x'], _0xe2bef0[_0x31f682(0x1cd)](this['bounds'][_0x31f682(0x186)], _0x195a8d), _0xe2bef0[_0x31f682(0x1ce)](this[_0x31f682(0xcc)][_0x31f682(0x159)], _0x195a8d)), _0x199b6f['y'] = _0xe2bef0[_0x31f682(0x1cf)](Wrap, _0x199b6f['y'], this[_0x31f682(0xcc)][_0x31f682(0x188)] - _0x195a8d, this[_0x31f682(0xcc)][_0x31f682(0x157)] + _0x195a8d);
        },
        'shutdown': function () {
            var _0x4f9668 = _0x11d501, _0x46ef03 = { 'ojmPf': '2|4|1|5|3|0' }, _0x55dfef = _0x46ef03[_0x4f9668(0x1d0)][_0x4f9668(0xa0)]('|'), _0x5bf543 = 0x2140 + 0x407 * -0x1 + -0x1d39;
            while (!![]) {
                switch (_0x55dfef[_0x5bf543++]) {
                case '0':
                    this[_0x4f9668(0x1d1)]();
                    continue;
                case '1':
                    this[_0x4f9668(0xe3)][_0x4f9668(0x10d)]();
                    continue;
                case '2':
                    this['tree']['clear']();
                    continue;
                case '3':
                    this[_0x4f9668(0xb7)][_0x4f9668(0x1d2)]();
                    continue;
                case '4':
                    this[_0x4f9668(0xc2)][_0x4f9668(0x10d)]();
                    continue;
                case '5':
                    this[_0x4f9668(0xc4)]['clear']();
                    continue;
                }
                break;
            }
        },
        'destroy': function () {
            var _0x1e3b81 = _0x11d501;
            this[_0x1e3b81(0x1d3)](), this[_0x1e3b81(0x1af)] = null;
        }
    });
module[_0x11d501(0x1d4)] = World;
