var AngleBetweenPoints = require('../../math/angle/BetweenPoints'), Body = require('./Body'), Clamp = require(_0x11d501(127)), Class = require(_0x11d501(128)), Collider = require(_0x11d501(129)), CONST = require('./const'), DistanceBetween = require(_0x11d501(130)), EventEmitter = require('eventemitter3'), Events = require('./events'), FuzzyEqual = require('../../math/fuzzy/Equal'), FuzzyGreaterThan = require(_0x11d501(131)), FuzzyLessThan = require(_0x11d501(132)), GetOverlapX = require(_0x11d501(133)), GetOverlapY = require(_0x11d501(134)), GetTilesWithinWorldXY = require(_0x11d501(135)), GetValue = require(_0x11d501(136)), MATH_CONST = require('../../math/const'), ProcessQueue = require('../../structs/ProcessQueue'), ProcessTileCallbacks = require(_0x11d501(137)), Rectangle = require(_0x11d501(138)), RTree = require(_0x11d501(139)), SeparateTile = require(_0x11d501(140)), SeparateX = require(_0x11d501(141)), SeparateY = require(_0x11d501(142)), Set = require('../../structs/Set'), StaticBody = require(_0x11d501(143)), TileIntersectsBody = require('./tilemap/TileIntersectsBody'), TransformMatrix = require('../../gameobjects/components/TransformMatrix'), Vector2 = require(_0x11d501(144)), Wrap = require(_0x11d501(145)), World = new Class({
        'Extends': EventEmitter,
        'initialize': function World(_0x2abeeb, _0x8cb149) {
            var _0x30b45d = _0x11d501, _0x5236fb = {
                    'QkaWe': _0x30b45d(146),
                    'HycMQ': function (_0x3cfa30, _0x131c7a, _0x52550e, _0x2c889e) {
                        return _0x3cfa30(_0x131c7a, _0x52550e, _0x2c889e);
                    },
                    'SbZKV': _0x30b45d(147),
                    'ixxrX': function (_0x1d55ef, _0x41928f, _0xee901c, _0x4032ce) {
                        return _0x1d55ef(_0x41928f, _0xee901c, _0x4032ce);
                    },
                    'qBnNc': _0x30b45d(148),
                    'WQePk': function (_0x3988bb, _0x566590, _0xddae9e, _0x519307) {
                        return _0x3988bb(_0x566590, _0xddae9e, _0x519307);
                    },
                    'thaJM': _0x30b45d(149),
                    'vBGRp': 'checkCollision.left',
                    'sECnG': 'checkCollision.right',
                    'qqzec': _0x30b45d(150),
                    'WoKoF': _0x30b45d(151),
                    'aebYZ': function (_0x333a3d, _0x19ee65, _0x2617b0, _0x3d603b) {
                        return _0x333a3d(_0x19ee65, _0x2617b0, _0x3d603b);
                    },
                    'fKWoI': _0x30b45d(152),
                    'rZHzg': function (_0x3510ed, _0x18bf49, _0x113fb2, _0x446e9b) {
                        return _0x3510ed(_0x18bf49, _0x113fb2, _0x446e9b);
                    },
                    'Fxlkr': _0x30b45d(153),
                    'bcnhd': 'debugBodyColor',
                    'QhIqg': 'debugStaticBodyColor',
                    'Vjpbn': function (_0x46b47b, _0x3fea6f, _0x1a19c6, _0x402ba4) {
                        return _0x46b47b(_0x3fea6f, _0x1a19c6, _0x402ba4);
                    },
                    'Qvuwt': _0x30b45d(154),
                    'eKomG': function (_0xe291b5, _0x31bb69, _0xe7735d, _0x13288a) {
                        return _0xe291b5(_0x31bb69, _0xe7735d, _0x13288a);
                    },
                    'GwINY': 'fixedStep',
                    'UAylA': function (_0x4dc199, _0x199100, _0x50773f, _0x309f3a) {
                        return _0x4dc199(_0x199100, _0x50773f, _0x309f3a);
                    },
                    'HKrVS': _0x30b45d(155),
                    'lXaho': function (_0x440d5b, _0x7905f8, _0x2e8495, _0x48bb30) {
                        return _0x440d5b(_0x7905f8, _0x2e8495, _0x48bb30);
                    },
                    'LIkBn': _0x30b45d(156),
                    'gqRmT': 'isPaused',
                    'XEMio': function (_0x4134be, _0x32fd46, _0x3ef42c, _0x56545f) {
                        return _0x4134be(_0x32fd46, _0x3ef42c, _0x56545f);
                    },
                    'RlvGK': _0x30b45d(157),
                    'FkZtQ': function (_0x2977be, _0x19658d, _0x893ff7, _0x20b362) {
                        return _0x2977be(_0x19658d, _0x893ff7, _0x20b362);
                    },
                    'SsOov': _0x30b45d(158),
                    'LQoYo': 'gravity.y',
                    'ZLhNQ': 'maxEntries',
                    'lwXgY': 'useTree',
                    'HJZJa': function (_0x4951ea, _0x5c0751) {
                        return _0x4951ea * _0x5c0751;
                    }
                }, _0x553023 = _0x5236fb[_0x30b45d(159)][_0x30b45d(160)]('|'), _0x40f344 = -1 * -5156 + -3369 * -2 + 5947 * -2;
            while (!![]) {
                switch (_0x553023[_0x40f344++]) {
                case '0':
                    this[_0x30b45d(161)] = {
                        'minX': 0,
                        'minY': 0,
                        'maxX': 0,
                        'maxY': 0
                    };
                    continue;
                case '1':
                    this[_0x30b45d(162)] = _0x5236fb[_0x30b45d(163)](GetValue, _0x8cb149, _0x5236fb['SbZKV'], ![]);
                    continue;
                case '2':
                    this[_0x30b45d(164)] = _0x5236fb[_0x30b45d(165)](GetValue, _0x8cb149, 'forceX', ![]);
                    continue;
                case '3':
                    this['_frameTime'] = (-3319 * -2 + 9113 + -15750) / this['fps'];
                    continue;
                case '4':
                    this[_0x30b45d(166)] = {
                        'up': GetValue(_0x8cb149, _0x5236fb[_0x30b45d(167)], !![]),
                        'down': _0x5236fb[_0x30b45d(168)](GetValue, _0x8cb149, _0x5236fb[_0x30b45d(169)], !![]),
                        'left': _0x5236fb[_0x30b45d(168)](GetValue, _0x8cb149, _0x5236fb['vBGRp'], !![]),
                        'right': _0x5236fb[_0x30b45d(168)](GetValue, _0x8cb149, _0x5236fb[_0x30b45d(170)], !![])
                    };
                    continue;
                case '5':
                    this[_0x30b45d(171)];
                    continue;
                case '6':
                    this[_0x30b45d(172)] = new TransformMatrix();
                    continue;
                case '7':
                    this[_0x30b45d(173)] = _0x5236fb[_0x30b45d(168)](GetValue, _0x8cb149, _0x5236fb[_0x30b45d(174)], 9674 + 8339 + 5999 * -3);
                    continue;
                case '8':
                    this[_0x30b45d(175)] = {
                        'debugShowBody': _0x5236fb[_0x30b45d(168)](GetValue, _0x8cb149, _0x5236fb[_0x30b45d(176)], !![]),
                        'debugShowStaticBody': _0x5236fb[_0x30b45d(177)](GetValue, _0x8cb149, _0x5236fb[_0x30b45d(178)], !![]),
                        'debugShowVelocity': _0x5236fb[_0x30b45d(179)](GetValue, _0x8cb149, _0x5236fb['Fxlkr'], !![]),
                        'bodyDebugColor': _0x5236fb['rZHzg'](GetValue, _0x8cb149, _0x5236fb[_0x30b45d(180)], -2001554 * 11 + 1239374 * -3 + 1 * 42447151),
                        'staticBodyDebugColor': GetValue(_0x8cb149, _0x5236fb['QhIqg'], 71 * 65 + 67 * -142 + 5154),
                        'velocityDebugColor': _0x5236fb[_0x30b45d(181)](GetValue, _0x8cb149, _0x5236fb[_0x30b45d(182)], 127037 + 1002 * -61 + -635)
                    };
                    continue;
                case '9':
                    this[_0x30b45d(183)] = new ProcessQueue();
                    continue;
                case '10':
                    this[_0x30b45d(184)] = _0x5236fb[_0x30b45d(185)](GetValue, _0x8cb149, _0x5236fb[_0x30b45d(186)], !![]);
                    continue;
                case '11':
                    this[_0x30b45d(155)] = _0x5236fb[_0x30b45d(187)](GetValue, _0x8cb149, _0x5236fb[_0x30b45d(188)], -4466 + 1591 * -4 + 10831 * 1);
                    continue;
                case '12':
                    this[_0x30b45d(162)] && this[_0x30b45d(189)]();
                    continue;
                case '13':
                    this[_0x30b45d(190)] = _0x5236fb[_0x30b45d(191)](GetValue, _0x8cb149, _0x5236fb[_0x30b45d(192)], 5885 + -9903 + -4022 * -1);
                    continue;
                case '14':
                    this['isPaused'] = _0x5236fb['lXaho'](GetValue, _0x8cb149, _0x5236fb[_0x30b45d(193)], ![]);
                    continue;
                case '15':
                    this[_0x30b45d(194)] = new RTree(this[_0x30b45d(195)]);
                    continue;
                case '16':
                    this[_0x30b45d(196)] = new Set();
                    continue;
                case '17':
                    this['_tempMatrix'] = new TransformMatrix();
                    continue;
                case '18':
                    this[_0x30b45d(157)] = _0x5236fb[_0x30b45d(197)](GetValue, _0x8cb149, _0x5236fb[_0x30b45d(198)], -3938 + 9543 + -1109 * 5);
                    continue;
                case '19':
                    this['bodies'] = new Set();
                    continue;
                case '20':
                    this[_0x30b45d(199)] = new RTree(this[_0x30b45d(195)]);
                    continue;
                case '21':
                    EventEmitter[_0x30b45d(200)](this);
                    continue;
                case '22':
                    this['gravity'] = new Vector2(_0x5236fb['FkZtQ'](GetValue, _0x8cb149, _0x5236fb[_0x30b45d(201)], -5508 + -1358 * -1 + -2075 * -2), GetValue(_0x8cb149, _0x5236fb[_0x30b45d(202)], -8387 * -1 + 12 * 271 + -1 * 11639));
                    continue;
                case '23':
                    this[_0x30b45d(195)] = GetValue(_0x8cb149, _0x5236fb['ZLhNQ'], 9962 + 2077 + -12023);
                    continue;
                case '24':
                    this[_0x30b45d(203)] = GetValue(_0x8cb149, _0x5236fb['lwXgY'], !![]);
                    continue;
                case '25':
                    this[_0x30b45d(204)] = new Rectangle(_0x5236fb[_0x30b45d(205)](GetValue, _0x8cb149, 'x', 485 * 12 + 4858 + -5339 * 2), _0x5236fb[_0x30b45d(205)](GetValue, _0x8cb149, 'y', 4507 * 2 + -508 + -8506), _0x5236fb['FkZtQ'](GetValue, _0x8cb149, 'width', _0x2abeeb[_0x30b45d(206)][_0x30b45d(207)][_0x30b45d(208)]), GetValue(_0x8cb149, _0x30b45d(209), _0x2abeeb['sys'][_0x30b45d(207)][_0x30b45d(209)]));
                    continue;
                case '26':
                    this[_0x30b45d(210)] = -3378 + -8969 + -12347 * -1;
                    continue;
                case '27':
                    this[_0x30b45d(211)] = _0x5236fb[_0x30b45d(212)](-7240 + 7329 + 911, this[_0x30b45d(213)]);
                    continue;
                case '28':
                    this['scene'] = _0x2abeeb;
                    continue;
                case '29':
                    this[_0x30b45d(214)] = -8899 + -2386 + 11285;
                    continue;
                case '30':
                    this['_elapsed'] = -4123 + -1 * -6863 + -2740;
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
            _0x5872f8 === undefined && (_0x5872f8 = CONST[_0x21bb80(215)]);
            !Array[_0x21bb80(216)](_0x2d7e08) && (_0x2d7e08 = [_0x2d7e08]);
            for (var _0x1570bf = 3470 + -1 * 8356 + 4886; _0x5a2daf[_0x21bb80(217)](_0x1570bf, _0x2d7e08[_0x21bb80(218)]); _0x1570bf++) {
                var _0x562466 = _0x2d7e08[_0x1570bf];
                if (_0x562466[_0x21bb80(219)]) {
                    var _0x592f0d = _0x562466[_0x21bb80(220)]();
                    for (var _0x1c9963 = -5231 + -1536 + -67 * -101; _0x5a2daf['ajBbH'](_0x1c9963, _0x592f0d['length']); _0x1c9963++) {
                        var _0x26a058 = _0x592f0d[_0x1c9963];
                        _0x26a058[_0x21bb80(219)] ? this['enable'](_0x26a058, _0x5872f8) : this[_0x21bb80(221)](_0x26a058, _0x5872f8);
                    }
                } else
                    this[_0x21bb80(221)](_0x562466, _0x5872f8);
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
            _0x50a8a6 === undefined && (_0x50a8a6 = CONST[_0x1e5ec7(215)]);
            if (!_0x1bd86b[_0x1e5ec7(222)]) {
                if (_0x27a96f[_0x1e5ec7(223)](_0x50a8a6, CONST[_0x1e5ec7(215)]))
                    _0x1bd86b['body'] = new Body(this, _0x1bd86b);
                else
                    _0x27a96f[_0x1e5ec7(224)](_0x50a8a6, CONST[_0x1e5ec7(225)]) && (_0x1bd86b[_0x1e5ec7(222)] = new StaticBody(this, _0x1bd86b));
            }
            return this['add'](_0x1bd86b[_0x1e5ec7(222)]), _0x1bd86b;
        },
        'add': function (_0x570b30) {
            var _0x407d21 = _0x11d501, _0x20a4c8 = {
                    'jfWZg': function (_0x3f35d2, _0x5b3105) {
                        return _0x3f35d2 === _0x5b3105;
                    }
                };
            if (_0x570b30[_0x407d21(226)] === CONST[_0x407d21(215)])
                this[_0x407d21(227)][_0x407d21(228)](_0x570b30);
            else
                _0x20a4c8[_0x407d21(229)](_0x570b30[_0x407d21(226)], CONST[_0x407d21(225)]) && (this[_0x407d21(196)][_0x407d21(228)](_0x570b30), this['staticTree'][_0x407d21(230)](_0x570b30));
            return _0x570b30[_0x407d21(231)] = !![], _0x570b30;
        },
        'disable': function (_0x2436c2) {
            var _0x346280 = _0x11d501, _0x39358b = {
                    'SnOFt': function (_0x3de12e, _0x2609a4) {
                        return _0x3de12e < _0x2609a4;
                    }
                };
            !Array[_0x346280(216)](_0x2436c2) && (_0x2436c2 = [_0x2436c2]);
            for (var _0x8e3242 = 7682 + -714 * -3 + -614 * 16; _0x39358b[_0x346280(232)](_0x8e3242, _0x2436c2[_0x346280(218)]); _0x8e3242++) {
                var _0xb375e8 = _0x2436c2[_0x8e3242];
                if (_0xb375e8['isParent']) {
                    var _0x4821ce = _0xb375e8['getChildren']();
                    for (var _0x2ab944 = -986 + 6225 + 13 * -403; _0x39358b[_0x346280(232)](_0x2ab944, _0x4821ce[_0x346280(218)]); _0x2ab944++) {
                        var _0x5000a6 = _0x4821ce[_0x2ab944];
                        _0x5000a6['isParent'] ? this[_0x346280(233)](_0x5000a6) : this['disableBody'](_0x5000a6[_0x346280(222)]);
                    }
                } else
                    this['disableBody'](_0xb375e8[_0x346280(222)]);
            }
        },
        'disableBody': function (_0x8e79cb) {
            var _0x4bc9aa = _0x11d501;
            this['remove'](_0x8e79cb), _0x8e79cb[_0x4bc9aa(231)] = ![];
        },
        'remove': function (_0x4cfce9) {
            var _0x3d6005 = _0x11d501;
            if (_0x4cfce9[_0x3d6005(226)] === CONST[_0x3d6005(215)])
                this[_0x3d6005(199)][_0x3d6005(234)](_0x4cfce9), this[_0x3d6005(227)][_0x3d6005(235)](_0x4cfce9);
            else
                _0x4cfce9[_0x3d6005(226)] === CONST[_0x3d6005(225)] && (this[_0x3d6005(196)]['delete'](_0x4cfce9), this[_0x3d6005(194)][_0x3d6005(234)](_0x4cfce9));
        },
        'createDebugGraphic': function () {
            var _0x5bd446 = _0x11d501, _0x7590e5 = { 'aVUvy': _0x5bd446(236) }, _0x4f95ae = _0x7590e5[_0x5bd446(237)][_0x5bd446(160)]('|'), _0x1df9b1 = 722 + -1677 + -5 * -191;
            while (!![]) {
                switch (_0x4f95ae[_0x1df9b1++]) {
                case '0':
                    var _0x58912f = this['scene']['sys'][_0x5bd446(238)][_0x5bd446(239)]({
                        'x': 0,
                        'y': 0
                    });
                    continue;
                case '1':
                    this[_0x5bd446(171)] = _0x58912f;
                    continue;
                case '2':
                    _0x58912f[_0x5bd446(240)](Number[_0x5bd446(241)]);
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
            return this[_0x4d2ce2(204)][_0x4d2ce2(242)](_0x43cd02, _0x3893ce, _0x1e73c7, _0x19f11e), _0x44dc02[_0x4d2ce2(243)](_0x2ff671, undefined) && this[_0x4d2ce2(244)](_0x2ff671, _0x21aeeb, _0x499afc, _0x42d1bc), this;
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
                }, _0x2ad391 = _0x5392f4[_0x284298(245)][_0x284298(160)]('|'), _0x1a197f = 3122 + -5910 * -1 + -9032;
            while (!![]) {
                switch (_0x2ad391[_0x1a197f++]) {
                case '0':
                    _0x5392f4[_0x284298(246)](_0x479e19, undefined) && (_0x479e19 = !![]);
                    continue;
                case '1':
                    _0x5392f4['IjotL'](_0x11b205, undefined) && (_0x11b205 = !![]);
                    continue;
                case '2':
                    return this;
                case '3':
                    this[_0x284298(166)][_0x284298(247)] = _0x37597e;
                    continue;
                case '4':
                    _0x5392f4[_0x284298(248)](_0x4b53e0, undefined) && (_0x4b53e0 = !![]);
                    continue;
                case '5':
                    this[_0x284298(166)]['left'] = _0x4b53e0;
                    continue;
                case '6':
                    _0x5392f4[_0x284298(249)](_0x37597e, undefined) && (_0x37597e = !![]);
                    continue;
                case '7':
                    this[_0x284298(166)]['right'] = _0x11b205;
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
            return this['isPaused'] = !![], this[_0x2f26b9(250)](Events['PAUSE']), this;
        },
        'resume': function () {
            return this['isPaused'] = ![], this['emit'](Events['RESUME']), this;
        },
        'addCollider': function (_0x1a0222, _0x32c0e6, _0x2ef7da, _0x17bc2d, _0x5162ef) {
            var _0x2d0175 = _0x11d501, _0x3c2992 = {
                    'uBWBy': _0x2d0175(251),
                    'USkUd': function (_0x241450, _0x4e220f) {
                        return _0x241450 === _0x4e220f;
                    },
                    'IHQEI': function (_0x167f06, _0x321398) {
                        return _0x167f06 === _0x321398;
                    }
                }, _0x5d9917 = _0x3c2992[_0x2d0175(252)]['split']('|'), _0xd77b0c = -1280 + 1 * -65 + -5 * -269;
            while (!![]) {
                switch (_0x5d9917[_0xd77b0c++]) {
                case '0':
                    _0x3c2992['USkUd'](_0x2ef7da, undefined) && (_0x2ef7da = null);
                    continue;
                case '1':
                    _0x3c2992[_0x2d0175(253)](_0x17bc2d, undefined) && (_0x17bc2d = null);
                    continue;
                case '2':
                    _0x3c2992[_0x2d0175(254)](_0x5162ef, undefined) && (_0x5162ef = _0x2ef7da);
                    continue;
                case '3':
                    this[_0x2d0175(183)][_0x2d0175(238)](_0x4fc535);
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
                    'zkunG': _0x1f81ad(255),
                    'mgCXL': function (_0x38a95a, _0x4acd39) {
                        return _0x38a95a === _0x4acd39;
                    },
                    'QSxPc': function (_0x5dd56f, _0x461167) {
                        return _0x5dd56f === _0x461167;
                    }
                }, _0x2f63d2 = _0x41f71d[_0x1f81ad(256)][_0x1f81ad(160)]('|'), _0x4f6436 = -612 + -1 * 9103 + 9715;
            while (!![]) {
                switch (_0x2f63d2[_0x4f6436++]) {
                case '0':
                    this[_0x1f81ad(183)][_0x1f81ad(238)](_0x5b5e69);
                    continue;
                case '1':
                    _0x41f71d[_0x1f81ad(257)](_0x4a3259, undefined) && (_0x4a3259 = null);
                    continue;
                case '2':
                    _0x41f71d[_0x1f81ad(258)](_0x1ef102, undefined) && (_0x1ef102 = _0x4a3259);
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
            return this[_0x26bef6(183)][_0x26bef6(234)](_0x2b81f8), this;
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
            return this[_0x470a92(157)] = _0x3947ec, this['_frameTime'] = _0x3b9a89[_0x470a92(259)](-31 * -209 + -717 * 11 + 1409, this[_0x470a92(157)]), this[_0x470a92(211)] = _0x3b9a89[_0x470a92(260)](18 * -245 + 9140 + -746 * 5, this[_0x470a92(213)]), this;
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
                }, _0xcb044c = _0xcf0609(261)[_0xcf0609(160)]('|'), _0x38e718 = 3215 + 1 * 1658 + -4873;
            while (!![]) {
                switch (_0xcb044c[_0x38e718++]) {
                case '0':
                    if (this['isPaused'] || _0x4ec6e3[_0xcf0609(262)](this[_0xcf0609(227)]['size'], -3 * -1903 + -5879 + 170))
                        return;
                    continue;
                case '1':
                    var _0xf19725 = this[_0xcf0609(213)];
                    continue;
                case '2':
                    this['_elapsed'] += _0x1b2903;
                    continue;
                case '3':
                    for (_0x3c4a96 = 4941 + -197 * 39 + -6 * -457; _0x4ec6e3[_0xcf0609(263)](_0x3c4a96, _0x21d8a6['length']); _0x3c4a96++) {
                        _0x54cb0e = _0x21d8a6[_0x3c4a96], _0x54cb0e[_0xcf0609(231)] && _0x54cb0e[_0xcf0609(264)](_0x40a09c, _0xf19725);
                    }
                    continue;
                case '4':
                    var _0x21d8a6 = this[_0xcf0609(227)]['entries'];
                    continue;
                case '5':
                    var _0x15396a = _0x4ec6e3[_0xcf0609(265)](this['_frameTimeMS'], this['timeScale']);
                    continue;
                case '6':
                    var _0x40a09c = this[_0xcf0609(266)] >= _0x15396a;
                    continue;
                case '7':
                    !this[_0xcf0609(184)] && (_0xf19725 = _0x4ec6e3['VsBnv'](_0x1b2903, 9930 + -1 * -1756 + 1 * -11686 + 0.001), _0x40a09c = !![], this[_0xcf0609(266)] = 4816 + -9493 + 4677);
                    continue;
                case '8':
                    var _0x3c4a96;
                    continue;
                case '9':
                    if (_0x40a09c) {
                        var _0x1c87c2 = _0x4ec6e3[_0xcf0609(267)][_0xcf0609(160)]('|'), _0x25f15b = 5892 + 3 * -922 + 6 * -521;
                        while (!![]) {
                            switch (_0x1c87c2[_0x25f15b++]) {
                            case '0':
                                this[_0xcf0609(214)] = -1753 + -6307 + -2687 * -3;
                                continue;
                            case '1':
                                this[_0xcf0609(266)] -= _0x15396a;
                                continue;
                            case '2':
                                var _0x1d958b = this[_0xcf0609(183)][_0xcf0609(268)]();
                                continue;
                            case '3':
                                this[_0xcf0609(203)] && (this[_0xcf0609(199)][_0xcf0609(269)](), this['tree']['load'](_0x21d8a6));
                                continue;
                            case '4':
                                this[_0xcf0609(250)](Events['WORLD_STEP'], _0xf19725);
                                continue;
                            case '5':
                                for (_0x3c4a96 = -5897 * -1 + -9463 * 1 + 3566; _0x3c4a96 < _0x1d958b['length']; _0x3c4a96++) {
                                    var _0x508afc = _0x1d958b[_0x3c4a96];
                                    _0x508afc[_0xcf0609(270)] && _0x508afc[_0xcf0609(268)]();
                                }
                                continue;
                            }
                            break;
                        }
                    }
                    continue;
                case '10':
                    while (_0x4ec6e3[_0xcf0609(271)](this[_0xcf0609(266)], _0x15396a)) {
                        this[_0xcf0609(266)] -= _0x15396a, this['step'](_0xf19725);
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
                    'WRxrL': _0x121470(272),
                    'qASku': function (_0x40c7bc, _0x4e6b59) {
                        return _0x40c7bc < _0x4e6b59;
                    }
                }, _0x581464 = _0x5f1fc7[_0x121470(273)][_0x121470(160)]('|'), _0x26a78c = -9965 * 1 + -292 * 8 + 12301;
            while (!![]) {
                switch (_0x581464[_0x26a78c++]) {
                case '0':
                    for (_0x4eff0a = -123 * 32 + 3 * 550 + -3 * -762; _0x5f1fc7[_0x121470(274)](_0x4eff0a, _0x376a34[_0x121470(218)]); _0x4eff0a++) {
                        var _0x2cbdfe = _0x376a34[_0x4eff0a];
                        _0x2cbdfe[_0x121470(270)] && _0x2cbdfe[_0x121470(268)]();
                    }
                    continue;
                case '1':
                    var _0x3a9185 = _0x554362[_0x121470(218)];
                    continue;
                case '2':
                    for (_0x4eff0a = -3 * -698 + -7619 + -17 * -325; _0x4eff0a < _0x3a9185; _0x4eff0a++) {
                        _0x737e64 = _0x554362[_0x4eff0a], _0x737e64[_0x121470(231)] && _0x737e64[_0x121470(268)](_0x3a4812);
                    }
                    continue;
                case '3':
                    this[_0x121470(203)] && (this[_0x121470(199)][_0x121470(269)](), this[_0x121470(199)]['load'](_0x554362));
                    continue;
                case '4':
                    this[_0x121470(214)]++;
                    continue;
                case '5':
                    var _0x4eff0a;
                    continue;
                case '6':
                    this['emit'](Events[_0x121470(275)], _0x3a4812);
                    continue;
                case '7':
                    var _0x376a34 = this[_0x121470(183)][_0x121470(268)]();
                    continue;
                case '8':
                    var _0x737e64;
                    continue;
                case '9':
                    var _0x554362 = this[_0x121470(227)][_0x121470(276)];
                    continue;
                }
                break;
            }
        },
        'postUpdate': function () {
            var _0x110495 = _0x11d501, _0x184bf8 = {
                    'vKGLp': '8|2|1|5|9|7|3|0|6|4',
                    'UoxgE': _0x110495(277),
                    'CqSYO': function (_0x3f6718, _0x2c4f99) {
                        return _0x3f6718 < _0x2c4f99;
                    },
                    'mHUpk': _0x110495(278),
                    'welKD': function (_0x30daeb, _0x12588c) {
                        return _0x30daeb === _0x12588c;
                    }
                }, _0x24b090 = _0x184bf8[_0x110495(279)][_0x110495(160)]('|'), _0x52906a = 9318 + -6300 + -1 * 3018;
            while (!![]) {
                switch (_0x24b090[_0x52906a++]) {
                case '0':
                    if (this[_0x110495(162)]) {
                        var _0x43a70c = _0x184bf8[_0x110495(280)][_0x110495(160)]('|'), _0x41ef30 = 109 * -31 + 3 * 2593 + -4400;
                        while (!![]) {
                            switch (_0x43a70c[_0x41ef30++]) {
                            case '0':
                                _0x554ab1[_0x110495(269)]();
                                continue;
                            case '1':
                                _0x54132e = _0x5272ea[_0x110495(276)];
                                continue;
                            case '2':
                                for (_0x15d8c4 = 8686 + 4196 + -339 * 38; _0x15d8c4 < _0x473ba8; _0x15d8c4++) {
                                    _0xe184ea = _0x54132e[_0x15d8c4], _0xe184ea['willDrawDebug']() && _0xe184ea['drawDebug'](_0x554ab1);
                                }
                                continue;
                            case '3':
                                _0x473ba8 = _0x54132e[_0x110495(218)];
                                continue;
                            case '4':
                                var _0x554ab1 = this[_0x110495(171)];
                                continue;
                            case '5':
                                for (_0x15d8c4 = -7208 + 21 * -289 + 13277; _0x184bf8['CqSYO'](_0x15d8c4, _0x473ba8); _0x15d8c4++) {
                                    _0xe184ea = _0x54132e[_0x15d8c4], _0xe184ea[_0x110495(281)]() && _0xe184ea[_0x110495(162)](_0x554ab1);
                                }
                                continue;
                            }
                            break;
                        }
                    }
                    continue;
                case '1':
                    var _0x54132e = this['bodies'][_0x110495(276)];
                    continue;
                case '2':
                    var _0xe184ea;
                    continue;
                case '3':
                    if (this[_0x110495(214)]) {
                        this[_0x110495(214)] = 36 * 173 + 3150 + -18 * 521;
                        for (_0x15d8c4 = 227 * -44 + -7938 + 17926; _0x184bf8['CqSYO'](_0x15d8c4, _0x473ba8); _0x15d8c4++) {
                            _0xe184ea = _0x54132e[_0x15d8c4], _0xe184ea[_0x110495(231)] && _0xe184ea[_0x110495(282)]();
                        }
                    }
                    continue;
                case '4':
                    if (_0x2e0447[_0x110495(283)] > 71 * 16 + -19 * 353 + 5571) {
                        var _0x2a2026 = _0x184bf8[_0x110495(284)]['split']('|'), _0x1b2114 = 1630 + -2089 * -4 + -9986;
                        while (!![]) {
                            switch (_0x2a2026[_0x1b2114++]) {
                            case '0':
                                _0x473ba8 = _0x54132e[_0x110495(218)];
                                continue;
                            case '1':
                                _0x2e0447[_0x110495(269)]();
                                continue;
                            case '2':
                                var _0x3e812c = this[_0x110495(199)];
                                continue;
                            case '3':
                                for (_0x15d8c4 = 839 * 4 + -1 * -709 + 5 * -813; _0x15d8c4 < _0x473ba8; _0x15d8c4++) {
                                    _0xe184ea = _0x54132e[_0x15d8c4];
                                    if (_0x184bf8[_0x110495(285)](_0xe184ea[_0x110495(226)], CONST[_0x110495(215)]))
                                        _0x3e812c['remove'](_0xe184ea), _0x14a2dd[_0x110495(235)](_0xe184ea);
                                    else
                                        _0xe184ea[_0x110495(226)] === CONST[_0x110495(225)] && (_0x178c95[_0x110495(234)](_0xe184ea), _0x5272ea[_0x110495(235)](_0xe184ea));
                                    _0xe184ea[_0x110495(286)] = undefined, _0xe184ea[_0x110495(287)] = undefined;
                                }
                                continue;
                            case '4':
                                var _0x178c95 = this[_0x110495(194)];
                                continue;
                            case '5':
                                _0x54132e = _0x2e0447[_0x110495(276)];
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
                    var _0x2e0447 = this[_0x110495(288)];
                    continue;
                case '7':
                    var _0x5272ea = this[_0x110495(196)];
                    continue;
                case '8':
                    var _0x15d8c4;
                    continue;
                case '9':
                    var _0x14a2dd = this[_0x110495(227)];
                    continue;
                }
                break;
            }
        },
        'updateMotion': function (_0x1b1d12, _0x363042) {
            var _0x21f154 = _0x11d501;
            _0x1b1d12[_0x21f154(289)] && this[_0x21f154(290)](_0x1b1d12, _0x363042), this[_0x21f154(291)](_0x1b1d12, _0x363042);
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
                }, _0x51747b = _0x5a93b5['angularVelocity'], _0x4b50e2 = _0x5a93b5[_0x2a29a6(292)], _0x812aa0 = _0x5a93b5[_0x2a29a6(293)], _0x3cc6a4 = _0x5a93b5[_0x2a29a6(294)];
            if (_0x4b50e2)
                _0x51747b += _0x1102b3['jHuvD'](_0x4b50e2, _0x85c942);
            else {
                if (_0x5a93b5[_0x2a29a6(295)] && _0x812aa0) {
                    _0x812aa0 *= _0x85c942;
                    if (_0x1102b3[_0x2a29a6(296)](FuzzyGreaterThan, _0x1102b3[_0x2a29a6(297)](_0x51747b, _0x812aa0), 5233 * 1 + 1606 + -6839, -587 * 1 + -5566 + 6153 + 0.1))
                        _0x51747b -= _0x812aa0;
                    else
                        FuzzyLessThan(_0x1102b3[_0x2a29a6(298)](_0x51747b, _0x812aa0), -5401 + -9733 + -2162 * -7, -3764 + 5023 + 1259 * -1 + 0.1) ? _0x51747b += _0x812aa0 : _0x51747b = -14 * 467 + 1 * 5279 + 1259 * 1;
                }
            }
            _0x51747b = _0x1102b3['RkSlf'](Clamp, _0x51747b, -_0x3cc6a4, _0x3cc6a4);
            var _0x499e12 = _0x1102b3[_0x2a29a6(299)](_0x51747b, _0x5a93b5[_0x2a29a6(300)]);
            _0x5a93b5[_0x2a29a6(300)] += _0x499e12, _0x5a93b5[_0x2a29a6(301)] += _0x1102b3['FPnlv'](_0x5a93b5[_0x2a29a6(300)], _0x85c942);
        },
        'computeVelocity': function (_0x171986, _0x1186d1) {
            var _0x57793a = _0x11d501, _0x237e2f = {
                    'Tusmn': _0x57793a(302),
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
                }, _0x46ac30 = _0x237e2f['Tusmn']['split']('|'), _0x3fd12b = 4316 + -1065 + 1 * -3251;
            while (!![]) {
                switch (_0x46ac30[_0x3fd12b++]) {
                case '0':
                    var _0x57870c = _0x171986[_0x57793a(303)];
                    continue;
                case '1':
                    var _0x1786f2 = _0x171986['drag']['x'];
                    continue;
                case '2':
                    var _0xdf241c = _0x171986[_0x57793a(304)]['x'];
                    continue;
                case '3':
                    var _0x151942 = _0x171986[_0x57793a(305)]['x'];
                    continue;
                case '4':
                    _0x171986[_0x57793a(306)] = _0x2bf65c;
                    continue;
                case '5':
                    _0x35154d = _0x237e2f['mgmoI'](Clamp, _0x35154d, -_0x59108e, _0x59108e);
                    continue;
                case '6':
                    var _0x397175 = _0x171986[_0x57793a(295)];
                    continue;
                case '7':
                    var _0x1b594f = _0x171986[_0x57793a(307)];
                    continue;
                case '8':
                    var _0x2bf65c = _0x171986[_0x57793a(306)];
                    continue;
                case '9':
                    var _0x1aaf7f = _0x171986[_0x57793a(308)]['y'];
                    continue;
                case '10':
                    _0x171986[_0x57793a(304)][_0x57793a(228)](_0xdf241c, _0x35154d);
                    continue;
                case '11':
                    _0x237e2f[_0x57793a(309)](_0x57870c, -(1 * -8713 + -2955 + 1 * 11669)) && _0x237e2f[_0x57793a(310)](_0x2bf65c, _0x57870c) && (_0x171986['velocity'][_0x57793a(311)]()[_0x57793a(207)](_0x57870c), _0x2bf65c = _0x57870c);
                    continue;
                case '12':
                    if (_0x151942)
                        _0xdf241c += _0x237e2f['WdtLV'](_0x151942, _0x1186d1);
                    else {
                        if (_0x237e2f['mmsSd'](_0x397175, _0x1786f2)) {
                            if (_0x1b594f)
                                _0x1786f2 = Math['pow'](_0x1786f2, _0x1186d1), _0xdf241c *= _0x1786f2, _0x2bf65c = Math[_0x57793a(312)](_0x237e2f['hHvxA'](_0x237e2f[_0x57793a(313)](_0xdf241c, _0xdf241c), _0x35154d * _0x35154d)), _0x237e2f['mgmoI'](FuzzyEqual, _0x2bf65c, 1484 + -1 * 8440 + -1739 * -4, 1 * -6809 + -1322 * 5 + 13419 + 0.001) && (_0xdf241c = 4626 + 1349 + 5975 * -1);
                            else {
                                _0x1786f2 *= _0x1186d1;
                                if (_0x237e2f[_0x57793a(314)](FuzzyGreaterThan, _0x237e2f[_0x57793a(315)](_0xdf241c, _0x1786f2), 1 * 1669 + 941 + -261 * 10, 13 * -634 + 3137 + 5 * 1021 + 0.01))
                                    _0xdf241c -= _0x1786f2;
                                else
                                    FuzzyLessThan(_0xdf241c + _0x1786f2, -5 * 166 + 29 * 40 + -330, 5447 + -743 * 9 + 1240 + 0.01) ? _0xdf241c += _0x1786f2 : _0xdf241c = 2 * 3389 + 303 * -29 + 41 * 49;
                            }
                        }
                    }
                    continue;
                case '13':
                    var _0x1c3ed4 = _0x171986[_0x57793a(305)]['y'];
                    continue;
                case '14':
                    if (_0x1c3ed4)
                        _0x35154d += _0x237e2f[_0x57793a(316)](_0x1c3ed4, _0x1186d1);
                    else {
                        if (_0x237e2f[_0x57793a(317)](_0x397175, _0x1aaf7f)) {
                            if (_0x1b594f)
                                _0x1aaf7f = Math['pow'](_0x1aaf7f, _0x1186d1), _0x35154d *= _0x1aaf7f, _0x2bf65c = Math[_0x57793a(312)](_0x237e2f[_0x57793a(318)](_0x237e2f[_0x57793a(316)](_0xdf241c, _0xdf241c), _0x237e2f[_0x57793a(316)](_0x35154d, _0x35154d))), _0x237e2f[_0x57793a(319)](FuzzyEqual, _0x2bf65c, -532 * 14 + 5875 + -1 * -1573, 8290 + -4473 + -3817 + 0.001) && (_0x35154d = -11 * 43 + -4203 + 4676);
                            else {
                                _0x1aaf7f *= _0x1186d1;
                                if (_0x237e2f[_0x57793a(320)](FuzzyGreaterThan, _0x35154d - _0x1aaf7f, -462 * 17 + -3911 * -1 + -1 * -3943, -2063 * 1 + -3494 + 5557 + 0.01))
                                    _0x35154d -= _0x1aaf7f;
                                else
                                    FuzzyLessThan(_0x237e2f[_0x57793a(318)](_0x35154d, _0x1aaf7f), 2 * 3439 + -1233 + -1129 * 5, 3 * 495 + -9807 + -2774 * -3 + 0.01) ? _0x35154d += _0x1aaf7f : _0x35154d = -6173 + 1687 + 2243 * 2;
                            }
                        }
                    }
                    continue;
                case '15':
                    _0x171986[_0x57793a(321)] && (_0xdf241c += _0x237e2f[_0x57793a(316)](_0x237e2f[_0x57793a(318)](this[_0x57793a(322)]['x'], _0x171986[_0x57793a(322)]['x']), _0x1186d1), _0x35154d += _0x237e2f[_0x57793a(318)](this['gravity']['y'], _0x171986[_0x57793a(322)]['y']) * _0x1186d1);
                    continue;
                case '16':
                    var _0x35154d = _0x171986[_0x57793a(304)]['y'];
                    continue;
                case '17':
                    _0xdf241c = _0x237e2f[_0x57793a(323)](Clamp, _0xdf241c, -_0x26ea13, _0x26ea13);
                    continue;
                case '18':
                    var _0x26ea13 = _0x171986[_0x57793a(324)]['x'];
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
                    'vcoOu': _0x461850(325),
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
                    'AJGKH': _0x461850(326),
                    'MDxfE': function (_0x4150ba, _0x3ee4b1) {
                        return _0x4150ba < _0x3ee4b1;
                    },
                    'DcUxm': function (_0x3c2c7d, _0x248c8d) {
                        return _0x3c2c7d > _0x248c8d;
                    },
                    'RQmsZ': function (_0x473f18, _0x598f0d) {
                        return _0x473f18 > _0x598f0d;
                    }
                }, _0x30b016 = _0x567754[_0x461850(327)][_0x461850(160)]('|'), _0x1adf53 = 4 * 1826 + -9294 + -1 * -1990;
            while (!![]) {
                switch (_0x30b016[_0x1adf53++]) {
                case '0':
                    if (_0x3e644e && _0x3e644e[_0x461850(200)](_0x411fac, _0x2f0590[_0x461850(287)], _0x585d52['gameObject']) === ![])
                        return ![];
                    continue;
                case '1':
                    if (_0x1b858a)
                        _0xf028dc = _0x567754[_0x461850(328)](SeparateX, _0x2f0590, _0x585d52, _0x1b858a, this[_0x461850(190)]), _0x397270 = _0x567754['EiGRL'](SeparateY, _0x2f0590, _0x585d52, _0x1b858a, this[_0x461850(190)]);
                    else
                        this['forceX'] || Math[_0x461850(329)](this[_0x461850(322)]['y'] + _0x2f0590[_0x461850(322)]['y']) < Math[_0x461850(329)](_0x567754[_0x461850(330)](this['gravity']['x'], _0x2f0590[_0x461850(322)]['x'])) ? (_0xf028dc = _0x567754[_0x461850(331)](SeparateX, _0x2f0590, _0x585d52, _0x1b858a, this[_0x461850(190)]), this[_0x461850(332)](_0x2f0590, _0x585d52) && (_0x397270 = _0x567754['EiGRL'](SeparateY, _0x2f0590, _0x585d52, _0x1b858a, this[_0x461850(190)]))) : (_0x397270 = _0x567754[_0x461850(331)](SeparateY, _0x2f0590, _0x585d52, _0x1b858a, this[_0x461850(190)]), this[_0x461850(332)](_0x2f0590, _0x585d52) && (_0xf028dc = SeparateX(_0x2f0590, _0x585d52, _0x1b858a, this['OVERLAP_BIAS'])));
                    continue;
                case '2':
                    var _0xf028dc = ![];
                    continue;
                case '3':
                    if (_0x135079) {
                        if (_0x1b858a)
                            (_0x2f0590[_0x461850(333)] || _0x585d52[_0x461850(333)]) && this[_0x461850(250)](Events[_0x461850(334)], _0x2f0590['gameObject'], _0x585d52[_0x461850(287)], _0x2f0590, _0x585d52);
                        else
                            (_0x2f0590[_0x461850(335)] || _0x585d52[_0x461850(335)]) && this[_0x461850(250)](Events[_0x461850(336)], _0x2f0590[_0x461850(287)], _0x585d52[_0x461850(287)], _0x2f0590, _0x585d52);
                    }
                    continue;
                case '4':
                    if (_0x2f0590['isCircle'] && _0x585d52['isCircle'])
                        return this['separateCircle'](_0x2f0590, _0x585d52, _0x1b858a);
                    continue;
                case '5':
                    return _0x135079;
                case '6':
                    var _0x135079 = _0x567754[_0x461850(337)](_0xf028dc, _0x397270);
                    continue;
                case '7':
                    var _0x397270 = ![];
                    continue;
                case '8':
                    if (!_0x28820d && !_0x2f0590['enable'] || !_0x585d52[_0x461850(231)] || _0x2f0590[_0x461850(166)][_0x461850(338)] || _0x585d52[_0x461850(166)][_0x461850(338)] || !this[_0x461850(332)](_0x2f0590, _0x585d52))
                        return ![];
                    continue;
                case '9':
                    if (_0x567754['fedbb'](_0x2f0590['isCircle'], _0x585d52[_0x461850(339)])) {
                        var _0x4b2a39 = _0x567754['AJGKH']['split']('|'), _0x3fe171 = -9990 + 5407 + 4583;
                        while (!![]) {
                            switch (_0x4b2a39[_0x3fe171++]) {
                            case '0':
                                var _0x272722 = _0xe6b9e4[_0x461850(340)];
                                continue;
                            case '1':
                                var _0x334e4e = _0x2f0590[_0x461850(339)] ? _0x585d52 : _0x2f0590;
                                continue;
                            case '2':
                                if (_0x567754[_0x461850(341)](_0x272722['y'], _0x570317['y']) || _0x567754[_0x461850(342)](_0x272722['y'], _0x570317[_0x461850(343)])) {
                                    if (_0x567754[_0x461850(341)](_0x272722['x'], _0x570317['x']) || _0x567754[_0x461850(344)](_0x272722['x'], _0x570317[_0x461850(345)]))
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
                                    'right': _0x334e4e[_0x461850(345)],
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
            _0x2310fe[_0xb4a091(346)](GetOverlapX, _0xfba4aa, _0x4cfcf4, ![], _0x4d533c), _0x2310fe['KESHs'](GetOverlapY, _0xfba4aa, _0x4cfcf4, ![], _0x4d533c);
            var _0x177bdc = -9029 + -6247 * 1 + 6 * 2546;
            if (_0x2310fe[_0xb4a091(347)](_0xfba4aa[_0xb4a091(339)], _0x4cfcf4[_0xb4a091(339)])) {
                var _0x203754 = {
                        'x': _0x4cfcf4[_0xb4a091(339)] ? _0xfba4aa[_0xb4a091(348)]['x'] : _0x4cfcf4[_0xb4a091(348)]['x'],
                        'y': _0x4cfcf4[_0xb4a091(339)] ? _0xfba4aa[_0xb4a091(348)]['y'] : _0x4cfcf4[_0xb4a091(348)]['y'],
                        'right': _0x4cfcf4[_0xb4a091(339)] ? _0xfba4aa[_0xb4a091(345)] : _0x4cfcf4[_0xb4a091(345)],
                        'bottom': _0x4cfcf4['isCircle'] ? _0xfba4aa[_0xb4a091(343)] : _0x4cfcf4['bottom']
                    }, _0x5a0bd3 = {
                        'x': _0xfba4aa['isCircle'] ? _0xfba4aa['center']['x'] : _0x4cfcf4[_0xb4a091(340)]['x'],
                        'y': _0xfba4aa[_0xb4a091(339)] ? _0xfba4aa[_0xb4a091(340)]['y'] : _0x4cfcf4[_0xb4a091(340)]['y'],
                        'radius': _0xfba4aa['isCircle'] ? _0xfba4aa['halfWidth'] : _0x4cfcf4['halfWidth']
                    };
                if (_0x2310fe[_0xb4a091(349)](_0x5a0bd3['y'], _0x203754['y'])) {
                    if (_0x5a0bd3['x'] < _0x203754['x'])
                        _0x177bdc = _0x2310fe['boScW'](DistanceBetween(_0x5a0bd3['x'], _0x5a0bd3['y'], _0x203754['x'], _0x203754['y']), _0x5a0bd3[_0xb4a091(350)]);
                    else
                        _0x2310fe[_0xb4a091(351)](_0x5a0bd3['x'], _0x203754[_0xb4a091(345)]) && (_0x177bdc = _0x2310fe[_0xb4a091(352)](_0x2310fe[_0xb4a091(353)](DistanceBetween, _0x5a0bd3['x'], _0x5a0bd3['y'], _0x203754[_0xb4a091(345)], _0x203754['y']), _0x5a0bd3['radius']));
                } else {
                    if (_0x2310fe[_0xb4a091(354)](_0x5a0bd3['y'], _0x203754['bottom'])) {
                        if (_0x2310fe[_0xb4a091(349)](_0x5a0bd3['x'], _0x203754['x']))
                            _0x177bdc = _0x2310fe[_0xb4a091(355)](DistanceBetween(_0x5a0bd3['x'], _0x5a0bd3['y'], _0x203754['x'], _0x203754[_0xb4a091(343)]), _0x5a0bd3[_0xb4a091(350)]);
                        else
                            _0x2310fe[_0xb4a091(356)](_0x5a0bd3['x'], _0x203754['right']) && (_0x177bdc = _0x2310fe[_0xb4a091(355)](_0x2310fe['FmgkO'](DistanceBetween, _0x5a0bd3['x'], _0x5a0bd3['y'], _0x203754[_0xb4a091(345)], _0x203754[_0xb4a091(343)]), _0x5a0bd3['radius']));
                    }
                }
                _0x177bdc *= -(1538 + 2818 + -4355);
            } else
                _0x177bdc = _0x2310fe['ReylC'](_0xfba4aa[_0xb4a091(357)], _0x4cfcf4['halfWidth']) - _0x2310fe[_0xb4a091(358)](DistanceBetween, _0xfba4aa[_0xb4a091(340)]['x'], _0xfba4aa[_0xb4a091(340)]['y'], _0x4cfcf4[_0xb4a091(340)]['x'], _0x4cfcf4[_0xb4a091(340)]['y']);
            _0xfba4aa['overlapR'] = _0x177bdc, _0x4cfcf4[_0xb4a091(359)] = _0x177bdc;
            if (_0x56d35d || _0x177bdc === 102 * 47 + -2187 + -2607 || _0xfba4aa[_0xb4a091(360)] && _0x4cfcf4['immovable'] || _0xfba4aa[_0xb4a091(361)] || _0x4cfcf4[_0xb4a091(361)])
                return _0x2310fe[_0xb4a091(347)](_0x177bdc, -2 * 1362 + 6286 + -137 * 26) && (_0xfba4aa[_0xb4a091(333)] || _0x4cfcf4[_0xb4a091(333)]) && this['emit'](Events[_0xb4a091(334)], _0xfba4aa[_0xb4a091(287)], _0x4cfcf4['gameObject'], _0xfba4aa, _0x4cfcf4), _0x2310fe[_0xb4a091(347)](_0x177bdc, -5451 + -7124 + 503 * 25);
            var _0xdd481c = _0x2310fe[_0xb4a091(362)](_0xfba4aa['center']['x'], _0x4cfcf4['center']['x']), _0x528865 = _0x2310fe[_0xb4a091(362)](_0xfba4aa['center']['y'], _0x4cfcf4['center']['y']), _0x3c0639 = Math[_0xb4a091(312)](_0x2310fe[_0xb4a091(363)](Math['pow'](_0xdd481c, 4 * 2107 + -2742 * -1 + -4 * 2792), Math[_0xb4a091(364)](_0x528865, 7422 + 509 * 11 + -13019 * 1))), _0x3a1ddf = _0x2310fe[_0xb4a091(365)](_0x2310fe[_0xb4a091(366)](_0x4cfcf4[_0xb4a091(340)]['x'], _0xfba4aa[_0xb4a091(340)]['x']), _0x3c0639) || -1996 * -1 + 130 * 30 + 2 * -2948, _0x70ac71 = _0x2310fe[_0xb4a091(365)](_0x4cfcf4[_0xb4a091(340)]['y'] - _0xfba4aa[_0xb4a091(340)]['y'], _0x3c0639) || -81 * 53 + 119 * -53 + 10600, _0x34efa9 = _0x2310fe[_0xb4a091(367)](-9521 + 646 * -4 + 12107, _0x2310fe['kURti'](_0x2310fe[_0xb4a091(366)](_0x2310fe[_0xb4a091(368)](_0x2310fe[_0xb4a091(367)](_0xfba4aa[_0xb4a091(304)]['x'], _0x3a1ddf), _0x2310fe['zxjPM'](_0xfba4aa['velocity']['y'], _0x70ac71)), _0x2310fe[_0xb4a091(369)](_0x4cfcf4['velocity']['x'], _0x3a1ddf)), _0x2310fe[_0xb4a091(370)](_0x4cfcf4[_0xb4a091(304)]['y'], _0x70ac71))) / _0x2310fe['oIhrS'](_0xfba4aa[_0xb4a091(371)], _0x4cfcf4[_0xb4a091(371)]);
            (_0xfba4aa['immovable'] || _0x4cfcf4[_0xb4a091(360)]) && (_0x34efa9 *= 3687 + 5503 * 1 + -9188);
            !_0xfba4aa['immovable'] && (_0xfba4aa['velocity']['x'] = _0x2310fe['kURti'](_0xfba4aa[_0xb4a091(304)]['x'], _0x2310fe['yEbMi'](_0x2310fe[_0xb4a091(372)](_0x34efa9, _0xfba4aa[_0xb4a091(371)]), _0x3a1ddf)), _0xfba4aa[_0xb4a091(304)]['y'] = _0x2310fe[_0xb4a091(373)](_0xfba4aa[_0xb4a091(304)]['y'], _0x2310fe[_0xb4a091(374)](_0x2310fe['dIKsD'](_0x34efa9, _0xfba4aa[_0xb4a091(371)]), _0x70ac71)));
            !_0x4cfcf4[_0xb4a091(360)] && (_0x4cfcf4['velocity']['x'] = _0x2310fe['oIhrS'](_0x4cfcf4[_0xb4a091(304)]['x'], _0x2310fe[_0xb4a091(375)](_0x2310fe[_0xb4a091(376)](_0x34efa9, _0x4cfcf4[_0xb4a091(371)]), _0x3a1ddf)), _0x4cfcf4['velocity']['y'] = _0x4cfcf4[_0xb4a091(304)]['y'] + _0x2310fe[_0xb4a091(377)](_0x2310fe[_0xb4a091(378)](_0x34efa9, _0x4cfcf4[_0xb4a091(371)]), _0x70ac71));
            !_0xfba4aa['immovable'] && !_0x4cfcf4[_0xb4a091(360)] && (_0x177bdc /= -4400 + -910 + 2 * 2656);
            var _0x387915 = _0x2310fe[_0xb4a091(379)](AngleBetweenPoints, _0xfba4aa[_0xb4a091(340)], _0x4cfcf4['center']), _0x392332 = _0x2310fe[_0xb4a091(380)](_0x177bdc, MATH_CONST['EPSILON']) * Math[_0xb4a091(381)](_0x387915), _0x4093b2 = _0x2310fe['eSQgZ'](_0x2310fe[_0xb4a091(380)](_0x177bdc, MATH_CONST[_0xb4a091(382)]), Math[_0xb4a091(383)](_0x387915));
            return !_0xfba4aa[_0xb4a091(360)] && (_0xfba4aa['x'] -= _0x392332, _0xfba4aa['y'] -= _0x4093b2, _0xfba4aa[_0xb4a091(384)]()), !_0x4cfcf4[_0xb4a091(360)] && (_0x4cfcf4['x'] += _0x392332, _0x4cfcf4['y'] += _0x4093b2, _0x4cfcf4[_0xb4a091(384)]()), _0xfba4aa[_0xb4a091(304)]['x'] *= _0xfba4aa[_0xb4a091(385)]['x'], _0xfba4aa[_0xb4a091(304)]['y'] *= _0xfba4aa[_0xb4a091(385)]['y'], _0x4cfcf4[_0xb4a091(304)]['x'] *= _0x4cfcf4[_0xb4a091(385)]['x'], _0x4cfcf4[_0xb4a091(304)]['y'] *= _0x4cfcf4[_0xb4a091(385)]['y'], (_0xfba4aa[_0xb4a091(335)] || _0x4cfcf4[_0xb4a091(335)]) && this[_0xb4a091(250)](Events[_0xb4a091(336)], _0xfba4aa[_0xb4a091(287)], _0x4cfcf4[_0xb4a091(287)], _0xfba4aa, _0x4cfcf4), !![];
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
            if (!_0x5aba57[_0x426512(339)] && !_0x2ab7d7[_0x426512(339)])
                return !(_0x5e72c6['tfSlE'](_0x5aba57[_0x426512(345)], _0x2ab7d7[_0x426512(348)]['x']) || _0x5e72c6[_0x426512(386)](_0x5aba57[_0x426512(343)], _0x2ab7d7[_0x426512(348)]['y']) || _0x5aba57[_0x426512(348)]['x'] >= _0x2ab7d7[_0x426512(345)] || _0x5e72c6[_0x426512(387)](_0x5aba57[_0x426512(348)]['y'], _0x2ab7d7[_0x426512(343)]));
            else
                return _0x5aba57[_0x426512(339)] ? _0x2ab7d7[_0x426512(339)] ? _0x5e72c6[_0x426512(388)](DistanceBetween(_0x5aba57[_0x426512(340)]['x'], _0x5aba57[_0x426512(340)]['y'], _0x2ab7d7[_0x426512(340)]['x'], _0x2ab7d7[_0x426512(340)]['y']), _0x5e72c6['UUCum'](_0x5aba57['halfWidth'], _0x2ab7d7[_0x426512(357)])) : this[_0x426512(389)](_0x5aba57, _0x2ab7d7) : this[_0x426512(389)](_0x2ab7d7, _0x5aba57);
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
                }, _0xae2fc9 = Clamp(_0x421e0b[_0x25842f(340)]['x'], _0x2432a9[_0x25842f(390)], _0x2432a9['right']), _0x392372 = _0x172044[_0x25842f(391)](Clamp, _0x421e0b['center']['y'], _0x2432a9[_0x25842f(392)], _0x2432a9[_0x25842f(343)]), _0xb77f48 = _0x172044['dQBrP'](_0x421e0b[_0x25842f(340)]['x'], _0xae2fc9) * _0x172044['dQBrP'](_0x421e0b[_0x25842f(340)]['x'], _0xae2fc9), _0x4f802c = _0x172044['oNrME'](_0x421e0b['center']['y'] - _0x392372, _0x172044['dQBrP'](_0x421e0b[_0x25842f(340)]['y'], _0x392372));
            return _0x172044[_0x25842f(393)](_0x172044[_0x25842f(394)](_0xb77f48, _0x4f802c), _0x421e0b[_0x25842f(357)] * _0x421e0b[_0x25842f(357)]);
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
            return _0x4f9c99[_0x1cdf3c(395)](_0x12db8c, undefined) && (_0x12db8c = null), _0x4f9c99[_0x1cdf3c(396)](_0x313c9a, undefined) && (_0x313c9a = null), _0x4f9c99[_0x1cdf3c(396)](_0x5c1cf5, undefined) && (_0x5c1cf5 = _0x12db8c), this[_0x1cdf3c(397)](_0x5a9970, _0x2dc4ac, _0x12db8c, _0x313c9a, _0x5c1cf5, !![]);
        },
        'collide': function (_0x4c1c7f, _0x30a835, _0x5eb0c6, _0x3e0d51, _0x1a660d) {
            var _0x163806 = _0x11d501, _0x4adc77 = {
                    'XRlyy': function (_0x2e666f, _0x2ad085) {
                        return _0x2e666f === _0x2ad085;
                    }
                };
            return _0x5eb0c6 === undefined && (_0x5eb0c6 = null), _0x4adc77[_0x163806(398)](_0x3e0d51, undefined) && (_0x3e0d51 = null), _0x4adc77['XRlyy'](_0x1a660d, undefined) && (_0x1a660d = _0x5eb0c6), this['collideObjects'](_0x4c1c7f, _0x30a835, _0x5eb0c6, _0x3e0d51, _0x1a660d, ![]);
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
            _0x30ea85[_0x538802(219)] && _0x30ea85[_0x538802(226)] === undefined && (_0x30ea85 = _0x30ea85['children'][_0x538802(276)]);
            _0x205c80 && _0x205c80[_0x538802(219)] && _0xf499c5[_0x538802(399)](_0x205c80[_0x538802(226)], undefined) && (_0x205c80 = _0x205c80[_0x538802(400)][_0x538802(276)]);
            var _0x2261e2 = Array[_0x538802(216)](_0x30ea85), _0x491cc9 = Array[_0x538802(216)](_0x205c80);
            this[_0x538802(210)] = 54 * 145 + -1355 * 1 + -7 * 925;
            if (_0xf499c5[_0x538802(401)](!_0x2261e2, !_0x491cc9))
                this[_0x538802(402)](_0x30ea85, _0x205c80, _0x3a8277, _0x2ed36d, _0x18ac5e, _0x386a2f);
            else {
                if (!_0x2261e2 && _0x491cc9)
                    for (_0x49527b = 340 * 16 + -144 + 662 * -8; _0xf499c5['IFyLK'](_0x49527b, _0x205c80[_0x538802(218)]); _0x49527b++) {
                        this[_0x538802(402)](_0x30ea85, _0x205c80[_0x49527b], _0x3a8277, _0x2ed36d, _0x18ac5e, _0x386a2f);
                    }
                else {
                    if (_0xf499c5[_0x538802(403)](_0x2261e2, !_0x491cc9)) {
                        if (!_0x205c80)
                            for (_0x49527b = -7179 + 1078 + -1 * -6101; _0x49527b < _0x30ea85[_0x538802(218)]; _0x49527b++) {
                                var _0x6a7654 = _0x30ea85[_0x49527b];
                                for (_0x1f85af = _0xf499c5[_0x538802(404)](_0x49527b, 3881 + 1998 + -5878); _0xf499c5[_0x538802(405)](_0x1f85af, _0x30ea85[_0x538802(218)]); _0x1f85af++) {
                                    if (_0xf499c5['hnTPB'](_0x49527b, _0x1f85af))
                                        continue;
                                    this[_0x538802(402)](_0x6a7654, _0x30ea85[_0x1f85af], _0x3a8277, _0x2ed36d, _0x18ac5e, _0x386a2f);
                                }
                            }
                        else
                            for (_0x49527b = -5519 + 47 * 138 + -967; _0xf499c5[_0x538802(406)](_0x49527b, _0x30ea85[_0x538802(218)]); _0x49527b++) {
                                this[_0x538802(402)](_0x30ea85[_0x49527b], _0x205c80, _0x3a8277, _0x2ed36d, _0x18ac5e, _0x386a2f);
                            }
                    } else
                        for (_0x49527b = -131 * -49 + 1137 * -4 + -1871; _0x49527b < _0x30ea85['length']; _0x49527b++) {
                            for (_0x1f85af = -1 * 3392 + 4446 + -527 * 2; _0xf499c5[_0x538802(406)](_0x1f85af, _0x205c80['length']); _0x1f85af++) {
                                this['collideHandler'](_0x30ea85[_0x49527b], _0x205c80[_0x1f85af], _0x3a8277, _0x2ed36d, _0x18ac5e, _0x386a2f);
                            }
                        }
                }
            }
            return this['_total'] > 8123 + 3 * -1647 + -3182;
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
            if (_0x2965d9[_0x391130(407)](_0x163542, undefined) && _0x3d48e7[_0x391130(219)])
                return this[_0x391130(408)](_0x3d48e7, _0x3d48e7, _0x2707b5, _0x5ab957, _0x53cf15, _0x48b6d0);
            if (_0x2965d9[_0x391130(409)](!_0x3d48e7, !_0x163542))
                return ![];
            if (_0x3d48e7[_0x391130(222)]) {
                if (_0x163542[_0x391130(222)])
                    return this['collideSpriteVsSprite'](_0x3d48e7, _0x163542, _0x2707b5, _0x5ab957, _0x53cf15, _0x48b6d0);
                else {
                    if (_0x163542['isParent'])
                        return this['collideSpriteVsGroup'](_0x3d48e7, _0x163542, _0x2707b5, _0x5ab957, _0x53cf15, _0x48b6d0);
                    else {
                        if (_0x163542[_0x391130(410)])
                            return this[_0x391130(411)](_0x3d48e7, _0x163542, _0x2707b5, _0x5ab957, _0x53cf15, _0x48b6d0);
                    }
                }
            } else {
                if (_0x3d48e7[_0x391130(219)]) {
                    if (_0x163542[_0x391130(222)])
                        return this['collideSpriteVsGroup'](_0x163542, _0x3d48e7, _0x2707b5, _0x5ab957, _0x53cf15, _0x48b6d0);
                    else {
                        if (_0x163542['isParent'])
                            return this[_0x391130(408)](_0x3d48e7, _0x163542, _0x2707b5, _0x5ab957, _0x53cf15, _0x48b6d0);
                        else {
                            if (_0x163542['isTilemap'])
                                return this[_0x391130(412)](_0x3d48e7, _0x163542, _0x2707b5, _0x5ab957, _0x53cf15, _0x48b6d0);
                        }
                    }
                } else {
                    if (_0x3d48e7[_0x391130(410)]) {
                        if (_0x163542[_0x391130(222)])
                            return this[_0x391130(411)](_0x163542, _0x3d48e7, _0x2707b5, _0x5ab957, _0x53cf15, _0x48b6d0);
                        else {
                            if (_0x163542[_0x391130(219)])
                                return this[_0x391130(412)](_0x163542, _0x3d48e7, _0x2707b5, _0x5ab957, _0x53cf15, _0x48b6d0);
                        }
                    }
                }
            }
        },
        'collideSpriteVsSprite': function (_0x48c1ac, _0x3b7a30, _0x2f0578, _0x2c0ace, _0x18ac1d, _0x498442) {
            var _0x32f9fd = _0x11d501;
            if (!_0x48c1ac['body'] || !_0x3b7a30[_0x32f9fd(222)])
                return ![];
            return this[_0x32f9fd(413)](_0x48c1ac[_0x32f9fd(222)], _0x3b7a30['body'], _0x2c0ace, _0x18ac1d, _0x498442) && (_0x2f0578 && _0x2f0578[_0x32f9fd(200)](_0x18ac1d, _0x48c1ac, _0x3b7a30), this['_total']++), !![];
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
                }, _0x3f2373 = _0x513a05[_0x1a3f0e(222)];
            if (_0x35d393[_0x1a3f0e(218)] === 7014 + -13 * 171 + -4791 || !_0x3f2373 || !_0x3f2373[_0x1a3f0e(231)] || _0x3f2373[_0x1a3f0e(166)][_0x1a3f0e(338)])
                return;
            var _0xb8cf3e, _0x48fd50, _0x4c3c7e;
            if (this['useTree'] || _0x35d393[_0x1a3f0e(226)] === CONST[_0x1a3f0e(225)]) {
                var _0x122013 = this[_0x1a3f0e(161)];
                _0x122013[_0x1a3f0e(414)] = _0x3f2373[_0x1a3f0e(390)], _0x122013[_0x1a3f0e(415)] = _0x3f2373[_0x1a3f0e(392)], _0x122013[_0x1a3f0e(416)] = _0x3f2373[_0x1a3f0e(345)], _0x122013['maxY'] = _0x3f2373[_0x1a3f0e(343)];
                var _0xbda719 = _0x223fc8[_0x1a3f0e(417)](_0x35d393['physicsType'], CONST[_0x1a3f0e(215)]) ? this[_0x1a3f0e(199)]['search'](_0x122013) : this['staticTree'][_0x1a3f0e(418)](_0x122013);
                _0x48fd50 = _0xbda719[_0x1a3f0e(218)];
                for (_0xb8cf3e = -8023 + 2862 + -1 * -5161; _0xb8cf3e < _0x48fd50; _0xb8cf3e++) {
                    _0x4c3c7e = _0xbda719[_0xb8cf3e];
                    if (_0x223fc8['zfPDL'](_0x3f2373, _0x4c3c7e) || !_0x4c3c7e[_0x1a3f0e(231)] || _0x4c3c7e[_0x1a3f0e(166)]['none'] || !_0x35d393[_0x1a3f0e(419)](_0x4c3c7e['gameObject']))
                        continue;
                    this[_0x1a3f0e(413)](_0x3f2373, _0x4c3c7e, _0x5c7e97, _0x1027b5, _0x22290b, !![]) && (_0x19da98 && _0x19da98['call'](_0x1027b5, _0x3f2373[_0x1a3f0e(287)], _0x4c3c7e[_0x1a3f0e(287)]), this['_total']++);
                }
            } else {
                var _0x5da8a7 = _0x35d393[_0x1a3f0e(220)](), _0xe5a8ba = _0x35d393['children'][_0x1a3f0e(276)][_0x1a3f0e(420)](_0x513a05);
                _0x48fd50 = _0x5da8a7[_0x1a3f0e(218)];
                for (_0xb8cf3e = 17 * -1 + -2 * -2425 + -4833; _0xb8cf3e < _0x48fd50; _0xb8cf3e++) {
                    _0x4c3c7e = _0x5da8a7[_0xb8cf3e]['body'];
                    if (!_0x4c3c7e || _0x223fc8['wEYwj'](_0xb8cf3e, _0xe5a8ba) || !_0x4c3c7e[_0x1a3f0e(231)])
                        continue;
                    this['separate'](_0x3f2373, _0x4c3c7e, _0x5c7e97, _0x1027b5, _0x22290b) && (_0x19da98 && _0x19da98['call'](_0x1027b5, _0x3f2373[_0x1a3f0e(287)], _0x4c3c7e[_0x1a3f0e(287)]), this[_0x1a3f0e(210)]++);
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
                }, _0x868e49 = '4|3|0|1|2'[_0x4083a8(160)]('|'), _0x1fd945 = -87 * -102 + -4900 + -3974 * 1;
            while (!![]) {
                switch (_0x868e49[_0x1fd945++]) {
                case '0':
                    var _0x2f68a7 = ![];
                    continue;
                case '1':
                    for (var _0x8c7010 = 1682 + 1326 + 376 * -8; _0x3d61d7[_0x4083a8(421)](_0x8c7010, _0x2b6bb1['length']); _0x8c7010++) {
                        _0x2b6bb1[_0x8c7010][_0x4083a8(222)] && (this[_0x4083a8(411)](_0x2b6bb1[_0x8c7010], _0x5443bf, _0x4aac3f, _0x4a91fe, _0x569411, _0x485555) && (_0x2f68a7 = !![]));
                    }
                    continue;
                case '2':
                    return _0x2f68a7;
                case '3':
                    if (_0x3d61d7[_0x4083a8(422)](_0x2b6bb1[_0x4083a8(218)], -1 * -8819 + 8887 * -1 + 68))
                        return ![];
                    continue;
                case '4':
                    var _0x2b6bb1 = _0x46b242[_0x4083a8(220)]();
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
            return !_0x23ecde['body'][_0x5608bf(231)] || _0x554691[_0x5608bf(423)](_0x379e4d[_0x5608bf(218)], 379 * -13 + 9544 + -4617) ? ![] : this[_0x5608bf(424)](_0x23ecde, _0x379e4d, _0x5cc20c, _0x43845a, _0x2cfac3, ![], ![]);
        },
        'overlapTiles': function (_0x57ec6d, _0xa1753c, _0x1d8f66, _0x18be16, _0x2726b1) {
            var _0x52037d = _0x11d501, _0x1f9bc9 = {
                    'pzCaJ': function (_0x2eafd6, _0x1464e8) {
                        return _0x2eafd6 === _0x1464e8;
                    }
                };
            return !_0x57ec6d[_0x52037d(222)][_0x52037d(231)] || _0x1f9bc9[_0x52037d(425)](_0xa1753c[_0x52037d(218)], -861 * -1 + 9269 + 2026 * -5) ? ![] : this[_0x52037d(424)](_0x57ec6d, _0xa1753c, _0x1d8f66, _0x18be16, _0x2726b1, !![], ![]);
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
                }, _0x3a891e = _0x599283[_0x28b28c(426)][_0x28b28c(160)]('|'), _0x3d73d6 = -739 * 1 + -6358 + 7097;
            while (!![]) {
                switch (_0x3a891e[_0x3d73d6++]) {
                case '0':
                    var _0x3cc936 = _0xd0f777[_0x28b28c(209)];
                    continue;
                case '1':
                    var _0x207bdc = _0xd0f777[_0x28b28c(208)];
                    continue;
                case '2':
                    if (_0x489ccd['tileWidth'] > _0x489ccd['baseTileWidth']) {
                        var _0x29bb35 = _0x599283[_0x28b28c(427)](_0x489ccd[_0x28b28c(428)], _0x489ccd[_0x28b28c(429)]) * _0x56267e[_0x28b28c(430)];
                        _0x1d7641 -= _0x29bb35, _0x207bdc += _0x29bb35;
                    }
                    continue;
                case '3':
                    var _0x3626f3 = _0x599283['OhUiX'](GetTilesWithinWorldXY, _0x1d7641, _0x3a6b90, _0x207bdc, _0x3cc936, null, _0x56267e[_0x28b28c(431)][_0x28b28c(432)][_0x28b28c(433)], _0x56267e['layer']);
                    continue;
                case '4':
                    if (_0x489ccd[_0x28b28c(434)] > _0x489ccd[_0x28b28c(435)]) {
                        var _0x12b6f0 = _0x599283[_0x28b28c(436)](_0x489ccd[_0x28b28c(434)], _0x489ccd[_0x28b28c(435)]) * _0x56267e['scaleY'];
                        _0x3cc936 += _0x12b6f0;
                    }
                    continue;
                case '5':
                    var _0xd0f777 = _0x5dde67[_0x28b28c(222)];
                    continue;
                case '6':
                    if (!_0xd0f777['enable'] || _0xd0f777['checkCollision']['none'])
                        return ![];
                    continue;
                case '7':
                    return _0x3626f3[_0x28b28c(218)] === 9484 + 9749 * -1 + 265 ? ![] : this[_0x28b28c(424)](_0x5dde67, _0x3626f3, _0x3bb4ea, _0x564f18, _0x1ce024, _0x37cdc8, !![]);
                    continue;
                case '8':
                    var _0x1d7641 = _0xd0f777['position']['x'];
                    continue;
                case '9':
                    var _0x489ccd = _0x56267e[_0x28b28c(437)];
                    continue;
                case '10':
                    var _0x3a6b90 = _0xd0f777[_0x28b28c(348)]['y'];
                    continue;
                }
                break;
            }
        },
        'collideSpriteVsTilesHandler': function (_0x1ddb67, _0x7ea9d5, _0x5ccfde, _0x3dfb7d, _0x4d05ff, _0x2f2bf7, _0x1e6de5) {
            var _0x3381d4 = _0x11d501, _0x2f1a2c = {
                    'KDutC': _0x3381d4(438),
                    'huLtX': function (_0x104d16, _0xda335d) {
                        return _0x104d16 < _0xda335d;
                    },
                    'eWFwQ': _0x3381d4(439),
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
                }, _0x598c2a = _0x2f1a2c[_0x3381d4(440)][_0x3381d4(160)]('|'), _0x57be7b = -5816 + 388 + 5428;
            while (!![]) {
                switch (_0x598c2a[_0x57be7b++]) {
                case '0':
                    var _0x33f325;
                    continue;
                case '1':
                    var _0x43eecd = {
                        'left': 0,
                        'right': 0,
                        'top': 0,
                        'bottom': 0
                    };
                    continue;
                case '2':
                    var _0x22a06a;
                    continue;
                case '3':
                    return _0x13a3f8;
                case '4':
                    var _0x4bdbb3 = _0x1ddb67[_0x3381d4(222)];
                    continue;
                case '5':
                    for (var _0x2dcfac = -609 * -5 + -5995 + 10 * 295; _0x2f1a2c[_0x3381d4(441)](_0x2dcfac, _0x7ea9d5['length']); _0x2dcfac++) {
                        var _0x436fa9 = _0x2f1a2c[_0x3381d4(442)][_0x3381d4(160)]('|'), _0x3f4e78 = -7908 * -1 + -1703 + -6205;
                        while (!![]) {
                            switch (_0x436fa9[_0x3f4e78++]) {
                            case '0':
                                _0x43eecd['left'] = _0x33e4cc['x'];
                                continue;
                            case '1':
                                _0x43eecd['right'] = _0x2f1a2c[_0x3381d4(443)](_0x43eecd[_0x3381d4(390)], _0x2f1a2c[_0x3381d4(444)](_0x33f325[_0x3381d4(208)], _0x22a06a[_0x3381d4(430)]));
                                continue;
                            case '2':
                                var _0x33e4cc = _0x22a06a[_0x3381d4(445)](_0x33f325['x'], _0x33f325['y']);
                                continue;
                            case '3':
                                _0x22a06a = _0x33f325[_0x3381d4(446)];
                                continue;
                            case '4':
                                _0x43eecd[_0x3381d4(343)] = _0x43eecd['top'] + _0x2f1a2c['NJQys'](_0x33f325[_0x3381d4(209)], _0x22a06a[_0x3381d4(447)]);
                                continue;
                            case '5':
                                _0x2f1a2c[_0x3381d4(448)](_0x33f325[_0x3381d4(449)], _0x33f325[_0x3381d4(209)]) && (_0x43eecd[_0x3381d4(392)] -= _0x2f1a2c[_0x3381d4(450)](_0x33f325['height'], _0x33f325[_0x3381d4(449)]) * _0x22a06a[_0x3381d4(447)]);
                                continue;
                            case '6':
                                _0x43eecd['top'] = _0x33e4cc['y'];
                                continue;
                            case '7':
                                if (TileIntersectsBody(_0x43eecd, _0x4bdbb3) && (!_0x3dfb7d || _0x3dfb7d['call'](_0x4d05ff, _0x1ddb67, _0x33f325)) && ProcessTileCallbacks(_0x33f325, _0x1ddb67) && (_0x2f2bf7 || _0x2f1a2c[_0x3381d4(451)](SeparateTile, _0x2dcfac, _0x4bdbb3, _0x33f325, _0x43eecd, _0x22a06a, this[_0x3381d4(173)], _0x1e6de5))) {
                                    this[_0x3381d4(210)]++, _0x13a3f8 = !![];
                                    _0x5ccfde && _0x5ccfde['call'](_0x4d05ff, _0x1ddb67, _0x33f325);
                                    if (_0x2f2bf7 && _0x4bdbb3[_0x3381d4(333)])
                                        this[_0x3381d4(250)](Events[_0x3381d4(452)], _0x1ddb67, _0x33f325, _0x4bdbb3);
                                    else
                                        _0x4bdbb3['onCollide'] && this[_0x3381d4(250)](Events[_0x3381d4(453)], _0x1ddb67, _0x33f325, _0x4bdbb3);
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
            if (_0x52a88c[_0x51ea07(218)] === 7687 * -1 + -1 * 515 + 8202 || _0x324d3e[_0x51ea07(454)](_0x5b28c8['length'], -1229 * 5 + 1 * -7471 + 4 * 3404))
                return;
            var _0x107329 = _0x52a88c['getChildren']();
            for (var _0x244668 = 1866 + -5601 + 3735; _0x324d3e[_0x51ea07(455)](_0x244668, _0x107329[_0x51ea07(218)]); _0x244668++) {
                this[_0x51ea07(456)](_0x107329[_0x244668], _0x5b28c8, _0x8447b1, _0x5c3282, _0x3f9bc5, _0x350612);
            }
        },
        'wrap': function (_0x1c4b9e, _0x298f0a) {
            var _0x34278c = _0x11d501;
            if (_0x1c4b9e[_0x34278c(222)])
                this['wrapObject'](_0x1c4b9e, _0x298f0a);
            else {
                if (_0x1c4b9e['getChildren'])
                    this[_0x34278c(457)](_0x1c4b9e['getChildren'](), _0x298f0a);
                else
                    Array[_0x34278c(216)](_0x1c4b9e) ? this[_0x34278c(457)](_0x1c4b9e, _0x298f0a) : this[_0x34278c(458)](_0x1c4b9e, _0x298f0a);
            }
        },
        'wrapArray': function (_0x114265, _0x179a88) {
            var _0x5969d3 = _0x11d501, _0x250444 = {
                    'dAgXH': function (_0x164263, _0xbebb00) {
                        return _0x164263 < _0xbebb00;
                    }
                };
            for (var _0x5db3b8 = 7862 + -1092 + 677 * -10; _0x250444[_0x5969d3(459)](_0x5db3b8, _0x114265[_0x5969d3(218)]); _0x5db3b8++) {
                this[_0x5969d3(458)](_0x114265[_0x5db3b8], _0x179a88);
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
            _0xe2bef0[_0x31f682(460)](_0x195a8d, undefined) && (_0x195a8d = 1474 * -4 + 6122 + -226), _0x199b6f['x'] = _0xe2bef0['kDCzZ'](Wrap, _0x199b6f['x'], _0xe2bef0[_0x31f682(461)](this['bounds'][_0x31f682(390)], _0x195a8d), _0xe2bef0[_0x31f682(462)](this[_0x31f682(204)][_0x31f682(345)], _0x195a8d)), _0x199b6f['y'] = _0xe2bef0[_0x31f682(463)](Wrap, _0x199b6f['y'], this[_0x31f682(204)][_0x31f682(392)] - _0x195a8d, this[_0x31f682(204)][_0x31f682(343)] + _0x195a8d);
        },
        'shutdown': function () {
            var _0x4f9668 = _0x11d501, _0x46ef03 = { 'ojmPf': '2|4|1|5|3|0' }, _0x55dfef = _0x46ef03[_0x4f9668(464)][_0x4f9668(160)]('|'), _0x5bf543 = 8512 + 1031 * -1 + -7481;
            while (!![]) {
                switch (_0x55dfef[_0x5bf543++]) {
                case '0':
                    this[_0x4f9668(465)]();
                    continue;
                case '1':
                    this[_0x4f9668(227)][_0x4f9668(269)]();
                    continue;
                case '2':
                    this['tree']['clear']();
                    continue;
                case '3':
                    this[_0x4f9668(183)][_0x4f9668(466)]();
                    continue;
                case '4':
                    this[_0x4f9668(194)][_0x4f9668(269)]();
                    continue;
                case '5':
                    this[_0x4f9668(196)]['clear']();
                    continue;
                }
                break;
            }
        },
        'destroy': function () {
            var _0x1e3b81 = _0x11d501;
            this[_0x1e3b81(467)](), this[_0x1e3b81(431)] = null;
        }
    });
module[_0x11d501(468)] = World;