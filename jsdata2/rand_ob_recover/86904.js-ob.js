function _0x5465(_0x2e2159, _0xf4c68) {
    return _0x5465 = function (_0x3df7b4, _0xc1ebca) {
        _0x3df7b4 = _0x3df7b4 - (-733 + -2 * -798 + -757);
        var _0x1de290 = _0x281d[_0x3df7b4];
        return _0x1de290;
    }, _0x5465(_0x2e2159, _0xf4c68);
}
var ALIGN_CONST = require(_0x20e63b(117)), Axes = require(_0x20e63b(118)), Bodies = require('./lib/factory/Bodies'), Body = require('./lib/body/Body'), BodyBounds = require('./BodyBounds'), Bounds = require('./lib/geometry/Bounds'), Class = require('../../utils/Class'), Composite = require('./lib/body/Composite'), Composites = require(_0x20e63b(119)), Constraint = require(_0x20e63b(120)), Detector = require(_0x20e63b(121)), DistanceBetween = require(_0x20e63b(122)), Factory = require(_0x20e63b(123)), GetFastValue = require(_0x20e63b(124)), GetValue = require(_0x20e63b(125)), Grid = require(_0x20e63b(126)), MatterAttractors = require('./lib/plugins/MatterAttractors'), MatterCollisionEvents = require(_0x20e63b(127)), MatterLib = require('./lib/core/Matter'), MatterWrap = require('./lib/plugins/MatterWrap'), Merge = require('../../utils/object/Merge'), Pair = require(_0x20e63b(128)), Pairs = require(_0x20e63b(129)), Plugin = require(_0x20e63b(130)), PluginCache = require(_0x20e63b(131)), Query = require(_0x20e63b(132)), Resolver = require(_0x20e63b(133)), SAT = require('./lib/collision/SAT'), SceneEvents = require(_0x20e63b(134)), Svg = require(_0x20e63b(135)), Vector = require(_0x20e63b(136)), Vertices = require('./lib/geometry/Vertices'), World = require(_0x20e63b(137)), MatterPhysics = new Class({
        'initialize': function MatterPhysics(_0x3636a0) {
            var _0xb53432 = _0x20e63b, _0x3ddaba = {
                    'XNUKe': function (_0x72acb1, _0x57940f, _0x140be6, _0x3e2c76) {
                        return _0x72acb1(_0x57940f, _0x140be6, _0x3e2c76);
                    },
                    'WeIVl': _0xb53432(138),
                    'lelAP': _0xb53432(139),
                    'BOdtV': function (_0x1a7ffc, _0x1b8052, _0x71ff3c, _0x530e5b) {
                        return _0x1a7ffc(_0x1b8052, _0x71ff3c, _0x530e5b);
                    },
                    'DFvbx': _0xb53432(140),
                    'VQMYL': 'restingThresh',
                    'vxpyn': function (_0x422f3f, _0x496196, _0x48a129, _0x91b640) {
                        return _0x422f3f(_0x496196, _0x48a129, _0x91b640);
                    },
                    'hYctB': function (_0xed6f01, _0x2ddb53, _0x211d9a, _0x23925a) {
                        return _0xed6f01(_0x2ddb53, _0x211d9a, _0x23925a);
                    },
                    'Ahwyz': _0xb53432(141),
                    'SRrDQ': _0xb53432(142)
                };
            this[_0xb53432(143)] = _0x3636a0, this[_0xb53432(144)] = _0x3636a0[_0xb53432(145)], this['config'] = this['getConfig'](), this[_0xb53432(146)], this['add'], this['bodyBounds'], this['body'] = Body, this[_0xb53432(147)] = Composite, this['detector'] = Detector, this['grid'] = Grid, this['pair'] = Pair, this[_0xb53432(148)] = Pairs, this[_0xb53432(149)] = Query, this[_0xb53432(150)] = Resolver, this[_0xb53432(151)] = SAT, this[_0xb53432(152)] = Constraint, this[_0xb53432(153)] = Bodies, this[_0xb53432(154)] = Composites, this[_0xb53432(155)] = Axes, this[_0xb53432(156)] = Bounds, this['svg'] = Svg, this[_0xb53432(157)] = Vector, this[_0xb53432(158)] = Vertices, this[_0xb53432(159)] = Vertices, this[_0xb53432(160)] = Vector[_0xb53432(161)](), _0x3ddaba[_0xb53432(162)](GetValue, this['config'], _0x3ddaba['WeIVl'], !![]) && this[_0xb53432(163)](), _0x3ddaba[_0xb53432(162)](GetValue, this[_0xb53432(164)], _0x3ddaba[_0xb53432(165)], ![]) && this[_0xb53432(166)](), _0x3ddaba['BOdtV'](GetValue, this[_0xb53432(164)], _0x3ddaba[_0xb53432(167)], ![]) && this[_0xb53432(168)](), Resolver[_0xb53432(169)] = GetValue(this['config'], _0x3ddaba[_0xb53432(170)], -7470 + 1 * 9832 + -2358), Resolver['_restingThreshTangent'] = _0x3ddaba[_0xb53432(171)](GetValue, this[_0xb53432(164)], _0xb53432(172), 6144 + -6 * 1077 + 81 * 4), Resolver['_positionDampen'] = _0x3ddaba['hYctB'](GetValue, this[_0xb53432(164)], _0x3ddaba[_0xb53432(173)], -7586 + -6957 + 14543 + 0.9), Resolver[_0xb53432(174)] = GetValue(this[_0xb53432(164)], _0x3ddaba[_0xb53432(175)], -2 * 1194 + -375 * -23 + -6237 + 0.8), Resolver[_0xb53432(176)] = GetValue(this['config'], _0xb53432(177), -8159 + -4378 + -6271 * -2), _0x3636a0[_0xb53432(145)][_0xb53432(178)]['once'](SceneEvents[_0xb53432(179)], this[_0xb53432(180)], this), _0x3636a0[_0xb53432(145)][_0xb53432(178)]['on'](SceneEvents[_0xb53432(181)], this[_0xb53432(182)], this);
        },
        'boot': function () {
            var _0x1c6031 = _0x20e63b;
            this['world'] = new World(this['scene'], this[_0x1c6031(164)]), this[_0x1c6031(183)] = new Factory(this[_0x1c6031(146)]), this[_0x1c6031(184)] = new BodyBounds(), this['systems'][_0x1c6031(178)][_0x1c6031(185)](SceneEvents[_0x1c6031(186)], this[_0x1c6031(187)], this);
        },
        'start': function () {
            var _0x2d1a84 = _0x20e63b;
            !this['world'] && (this[_0x2d1a84(146)] = new World(this['scene'], this['config']), this[_0x2d1a84(183)] = new Factory(this[_0x2d1a84(146)]));
            var _0x34c061 = this[_0x2d1a84(144)]['events'];
            _0x34c061['on'](SceneEvents[_0x2d1a84(188)], this[_0x2d1a84(146)][_0x2d1a84(189)], this['world']), _0x34c061['on'](SceneEvents[_0x2d1a84(190)], this[_0x2d1a84(146)][_0x2d1a84(191)], this[_0x2d1a84(146)]), _0x34c061[_0x2d1a84(185)](SceneEvents['SHUTDOWN'], this[_0x2d1a84(192)], this);
        },
        'getConfig': function () {
            var _0x433e1e = _0x20e63b, _0xc14d06 = {
                    'QVSCl': _0x433e1e(193),
                    'HKhet': function (_0x32a154, _0x24d736, _0x340ef0, _0x4b7e93) {
                        return _0x32a154(_0x24d736, _0x340ef0, _0x4b7e93);
                    }
                }, _0x562a38 = this['systems'][_0x433e1e(194)][_0x433e1e(164)]['physics'], _0x3ce26b = this['systems'][_0x433e1e(195)][_0x433e1e(196)], _0x144cf1 = Merge(GetFastValue(_0x3ce26b, _0xc14d06[_0x433e1e(197)], {}), _0xc14d06[_0x433e1e(198)](GetFastValue, _0x562a38, _0x433e1e(193), {}));
            return _0x144cf1;
        },
        'enableAttractorPlugin': function () {
            var _0x2f92cf = _0x20e63b;
            return Plugin[_0x2f92cf(199)](MatterAttractors), Plugin[_0x2f92cf(200)](MatterLib, MatterAttractors), this;
        },
        'enableWrapPlugin': function () {
            var _0x482405 = _0x20e63b;
            return Plugin[_0x482405(199)](MatterWrap), Plugin[_0x482405(200)](MatterLib, MatterWrap), this;
        },
        'enableCollisionEventsPlugin': function () {
            var _0x439868 = _0x20e63b;
            return Plugin[_0x439868(199)](MatterCollisionEvents), Plugin[_0x439868(200)](MatterLib, MatterCollisionEvents), this;
        },
        'pause': function () {
            var _0x274912 = _0x20e63b;
            return this[_0x274912(146)][_0x274912(201)]();
        },
        'resume': function () {
            var _0x3248ea = _0x20e63b;
            return this[_0x3248ea(146)][_0x3248ea(202)]();
        },
        'set60Hz': function () {
            var _0x2e2fee = _0x20e63b;
            return this[_0x2e2fee(146)][_0x2e2fee(203)] = this[_0x2e2fee(146)]['update60Hz'], this[_0x2e2fee(146)]['autoUpdate'] = !![], this;
        },
        'set30Hz': function () {
            var _0x44a5b0 = _0x20e63b;
            return this[_0x44a5b0(146)][_0x44a5b0(203)] = this[_0x44a5b0(146)][_0x44a5b0(204)], this[_0x44a5b0(146)][_0x44a5b0(205)] = !![], this;
        },
        'step': function (_0xc978fe, _0x128ca8) {
            var _0x248328 = _0x20e63b;
            this['world'][_0x248328(206)](_0xc978fe, _0x128ca8);
        },
        'containsPoint': function (_0x38ed8c, _0x2ed9f9, _0x4f5190) {
            var _0x45d760 = _0x20e63b;
            _0x38ed8c = this['getMatterBodies'](_0x38ed8c);
            var _0x31c006 = Vector[_0x45d760(161)](_0x2ed9f9, _0x4f5190), _0x50e418 = Query[_0x45d760(207)](_0x38ed8c, _0x31c006);
            return _0x50e418[_0x45d760(208)] > 8561 + 6243 * -1 + -61 * 38 ? !![] : ![];
        },
        'intersectPoint': function (_0x1ababa, _0x3be491, _0x4b1195) {
            var _0x42cacb = _0x20e63b, _0x3d9d03 = { 'aKaLq': _0x42cacb(209) }, _0x2f4f0a = _0x3d9d03[_0x42cacb(210)][_0x42cacb(211)]('|'), _0x358513 = 6300 + 7466 + -13766;
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
                    var _0x3626af = Query[_0x42cacb(207)](_0x4b1195, _0x257b72);
                    continue;
                case '3':
                    return _0x40d461;
                case '4':
                    var _0x257b72 = Vector[_0x42cacb(161)](_0x1ababa, _0x3be491);
                    continue;
                case '5':
                    _0x4b1195 = this[_0x42cacb(212)](_0x4b1195);
                    continue;
                case '6':
                    _0x3626af[_0x42cacb(213)](function (_0x3015d7) {
                        var _0x98e755 = _0x42cacb;
                        _0x32c6f8[_0x98e755(214)](_0x40d461[_0x98e755(215)](_0x3015d7), -(-925 * -2 + 455 + -2304)) && _0x40d461['push'](_0x3015d7);
                    });
                    continue;
                }
                break;
            }
        },
        'intersectRect': function (_0x590f45, _0x310e63, _0xcd262f, _0x5107ec, _0x4c5dfc, _0x5b316f) {
            var _0x309a45 = _0x20e63b, _0x13b1d6 = {
                    'WKPZb': _0x309a45(216),
                    'muXkv': function (_0x3dcc94, _0x462906) {
                        return _0x3dcc94 === _0x462906;
                    },
                    'OCMwA': function (_0x348608, _0x10612b) {
                        return _0x348608 + _0x10612b;
                    }
                }, _0x1d059f = _0x13b1d6['WKPZb'][_0x309a45(211)]('|'), _0x44d7c8 = -2 * -230 + 6997 + 7457 * -1;
            while (!![]) {
                switch (_0x1d059f[_0x44d7c8++]) {
                case '0':
                    var _0x5ca02b = {
                        'pFrzI': function (_0x1701a2, _0x1bda64) {
                            var _0x592619 = _0x309a45;
                            return _0x13b1d6[_0x592619(217)](_0x1701a2, _0x1bda64);
                        }
                    };
                    continue;
                case '1':
                    var _0x3b8711 = Query[_0x309a45(218)](_0x5b316f, _0x3b5ea0, _0x4c5dfc);
                    continue;
                case '2':
                    var _0x19bfd1 = [];
                    continue;
                case '3':
                    _0x13b1d6[_0x309a45(217)](_0x4c5dfc, undefined) && (_0x4c5dfc = ![]);
                    continue;
                case '4':
                    return _0x19bfd1;
                case '5':
                    _0x3b8711['forEach'](function (_0x400ee3) {
                        var _0x345a13 = _0x309a45;
                        _0x5ca02b['pFrzI'](_0x19bfd1[_0x345a13(215)](_0x400ee3), -(-3121 * 3 + 3789 + 1115 * 5)) && _0x19bfd1['push'](_0x400ee3);
                    });
                    continue;
                case '6':
                    _0x5b316f = this[_0x309a45(212)](_0x5b316f);
                    continue;
                case '7':
                    var _0x3b5ea0 = {
                        'min': {
                            'x': _0x590f45,
                            'y': _0x310e63
                        },
                        'max': {
                            'x': _0x13b1d6[_0x309a45(219)](_0x590f45, _0xcd262f),
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
                }, _0x22724a = _0x4b95c5(220)[_0x4b95c5(211)]('|'), _0xd7657c = -179 * -51 + -9994 + 865;
            while (!![]) {
                switch (_0x22724a[_0xd7657c++]) {
                case '0':
                    return _0x1b8a64;
                case '1':
                    var _0x1b8a64 = [];
                    continue;
                case '2':
                    _0x3a50b1['zneUk'](_0x59aa6d, undefined) && (_0x59aa6d = -3878 + -319 * 16 + -13 * -691);
                    continue;
                case '3':
                    var _0x4506a7 = Query[_0x4b95c5(221)](_0x3bdbda, Vector['create'](_0x165189, _0x2e0228), Vector[_0x4b95c5(161)](_0xefc569, _0x352b41), _0x59aa6d);
                    continue;
                case '4':
                    for (var _0x3710c4 = 70 * 28 + -237 + 1723 * -1; _0x3a50b1[_0x4b95c5(222)](_0x3710c4, _0x4506a7[_0x4b95c5(208)]); _0x3710c4++) {
                        _0x1b8a64[_0x4b95c5(223)](_0x4506a7[_0x3710c4][_0x4b95c5(224)]);
                    }
                    continue;
                case '5':
                    _0x3bdbda = this[_0x4b95c5(212)](_0x3bdbda);
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
            _0x34c792 = this[_0x25d39d(212)](_0x34c792);
            var _0x24616d = [], _0x4721c9 = Query[_0x25d39d(225)](_0x31e762, _0x34c792);
            for (var _0x5ca0b4 = 1 * -3712 + 2 * -983 + 5678; _0x55c7e6[_0x25d39d(226)](_0x5ca0b4, _0x4721c9[_0x25d39d(208)]); _0x5ca0b4++) {
                var _0x362267 = _0x4721c9[_0x5ca0b4];
                _0x55c7e6[_0x25d39d(227)](_0x362267['bodyA'], _0x31e762) ? _0x24616d[_0x25d39d(223)](_0x362267[_0x25d39d(228)]) : _0x24616d[_0x25d39d(223)](_0x362267['bodyA']);
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
                }, _0x5807de = _0x37844c[_0x84d159(229)][_0x84d159(211)]('|'), _0x5f2b5f = 1 * -5157 + -547 + -1 * -5704;
            while (!![]) {
                switch (_0x5807de[_0x5f2b5f++]) {
                case '0':
                    var _0x225d11 = ![];
                    continue;
                case '1':
                    for (var _0x106c06 = 639 * -2 + -4100 + 5378; _0x106c06 < _0x335088[_0x84d159(208)]; _0x106c06++) {
                        var _0x13061e = _0x335088[_0x106c06], _0x316372 = Query[_0x84d159(225)](_0x13061e, _0x298a14);
                        for (var _0x49e6bb = 15 * -270 + 3 * -243 + 3 * 1593; _0x37844c[_0x84d159(230)](_0x49e6bb, _0x316372[_0x84d159(208)]); _0x49e6bb++) {
                            var _0x6cde4e = _0x316372[_0x49e6bb], _0x386da7 = _0x37844c[_0x84d159(231)](_0x6cde4e[_0x84d159(232)]['id'], _0x13061e['id']) ? _0x6cde4e[_0x84d159(228)] : _0x6cde4e[_0x84d159(232)];
                            if (!_0x169dcb || _0x169dcb[_0x84d159(233)](_0x148b8a, _0x13061e, _0x386da7, _0x6cde4e)) {
                                _0x225d11 = !![];
                                if (_0x5499e4)
                                    _0x5499e4[_0x84d159(233)](_0x148b8a, _0x13061e, _0x386da7, _0x6cde4e);
                                else {
                                    if (!_0x169dcb)
                                        return !![];
                                }
                            }
                        }
                    }
                    continue;
                case '2':
                    _0x37844c[_0x84d159(234)](_0x169dcb, undefined) && (_0x169dcb = null);
                    continue;
                case '3':
                    _0x37844c[_0x84d159(235)](_0x5499e4, undefined) && (_0x5499e4 = null);
                    continue;
                case '4':
                    return _0x225d11;
                case '5':
                    _0x335088 = this['getMatterBodies'](_0x335088);
                    continue;
                case '6':
                    _0x37844c[_0x84d159(235)](_0x148b8a, undefined) && (_0x148b8a = _0x5499e4);
                    continue;
                case '7':
                    _0x298a14 = this['getMatterBodies'](_0x298a14);
                    continue;
                case '8':
                    !Array[_0x84d159(236)](_0x335088) && (_0x335088 = [_0x335088]);
                    continue;
                }
                break;
            }
        },
        'setCollisionCategory': function (_0x5ce32e, _0x5e67aa) {
            var _0x5990d4 = _0x20e63b;
            return _0x5ce32e = this['getMatterBodies'](_0x5ce32e), _0x5ce32e[_0x5990d4(213)](function (_0xc7b5da) {
                var _0x27ab45 = _0x5990d4;
                _0xc7b5da['collisionFilter'][_0x27ab45(237)] = _0x5e67aa;
            }), this;
        },
        'setCollisionGroup': function (_0x672685, _0x5327c0) {
            var _0x4b4cef = _0x20e63b;
            return _0x672685 = this[_0x4b4cef(212)](_0x672685), _0x672685[_0x4b4cef(213)](function (_0x1ece79) {
                var _0x34ab39 = _0x4b4cef;
                _0x1ece79[_0x34ab39(238)][_0x34ab39(239)] = _0x5327c0;
            }), this;
        },
        'setCollidesWith': function (_0x516ad9, _0x2ea72e) {
            var _0x3a944e = _0x20e63b, _0x3b57e9 = { 'Atipl': _0x3a944e(240) }, _0x25c963 = _0x3b57e9['Atipl'][_0x3a944e(211)]('|'), _0x17c7b4 = 1455 * 1 + 6887 + -8342;
            while (!![]) {
                switch (_0x25c963[_0x17c7b4++]) {
                case '0':
                    _0x516ad9[_0x3a944e(213)](function (_0x435b0b) {
                        var _0xfddf26 = _0x3a944e;
                        _0x435b0b[_0xfddf26(238)][_0xfddf26(241)] = _0x4f005b;
                    });
                    continue;
                case '1':
                    _0x516ad9 = this[_0x3a944e(212)](_0x516ad9);
                    continue;
                case '2':
                    if (!Array[_0x3a944e(236)](_0x2ea72e))
                        _0x4f005b = _0x2ea72e;
                    else
                        for (var _0x237a35 = 1 * -743 + 1743 * 1 + -1000; _0x237a35 < _0x2ea72e[_0x3a944e(208)]; _0x237a35++) {
                            _0x4f005b |= _0x2ea72e[_0x237a35];
                        }
                    continue;
                case '3':
                    return this;
                case '4':
                    var _0x4f005b = -5563 + -327 * -2 + 4909;
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
                    'RtchH': _0x1025a8(224)
                };
            if (!_0x60588c)
                return this[_0x1025a8(146)]['getAllBodies']();
            !Array[_0x1025a8(236)](_0x60588c) && (_0x60588c = [_0x60588c]);
            var _0x6a34be = [];
            for (var _0x4c7ad4 = -78 * 61 + -3442 + 164 * 50; _0x41f736['DmfHY'](_0x4c7ad4, _0x60588c['length']); _0x4c7ad4++) {
                var _0x45050a = _0x60588c[_0x4c7ad4]['hasOwnProperty'](_0x41f736['RtchH']) ? _0x60588c[_0x4c7ad4][_0x1025a8(224)] : _0x60588c[_0x4c7ad4];
                _0x6a34be[_0x1025a8(223)](_0x45050a);
            }
            return _0x6a34be;
        },
        'setVelocity': function (_0x4b21e8, _0x5a4050, _0x1e3ac8) {
            var _0x272066 = _0x20e63b, _0x4af11a = { 'crgSL': _0x272066(242) }, _0x24c2e1 = _0x4af11a[_0x272066(243)][_0x272066(211)]('|'), _0x7b445b = -6023 + -1 * -5228 + 795;
            while (!![]) {
                switch (_0x24c2e1[_0x7b445b++]) {
                case '0':
                    var _0x3e9462 = this['_tempVec2'];
                    continue;
                case '1':
                    _0x3e9462['x'] = _0x5a4050;
                    continue;
                case '2':
                    _0x4b21e8[_0x272066(213)](function (_0x39a50a) {
                        Body['setVelocity'](_0x39a50a, _0x3e9462);
                    });
                    continue;
                case '3':
                    return this;
                case '4':
                    _0x4b21e8 = this[_0x272066(212)](_0x4b21e8);
                    continue;
                case '5':
                    _0x3e9462['y'] = _0x1e3ac8;
                    continue;
                }
                break;
            }
        },
        'setVelocityX': function (_0x275063, _0x3626f3) {
            var _0x46ec8c = _0x20e63b, _0x55d4f8 = { 'kJcia': _0x46ec8c(244) }, _0xc54d97 = _0x55d4f8[_0x46ec8c(245)]['split']('|'), _0x4f7fb1 = -2247 + 2 * 4591 + -6935;
            while (!![]) {
                switch (_0xc54d97[_0x4f7fb1++]) {
                case '0':
                    _0x275063 = this[_0x46ec8c(212)](_0x275063);
                    continue;
                case '1':
                    return this;
                case '2':
                    _0x3bd496['x'] = _0x3626f3;
                    continue;
                case '3':
                    _0x275063[_0x46ec8c(213)](function (_0x2ce7a2) {
                        var _0x17b6f1 = _0x46ec8c;
                        _0x3bd496['y'] = _0x2ce7a2['velocity']['y'], Body[_0x17b6f1(246)](_0x2ce7a2, _0x3bd496);
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
            var _0x57f8b8 = _0x20e63b, _0x2490b7 = _0x57f8b8(247)['split']('|'), _0x5e09b0 = 1 * 1783 + -156 + -1627;
            while (!![]) {
                switch (_0x2490b7[_0x5e09b0++]) {
                case '0':
                    _0x5f567f[_0x57f8b8(213)](function (_0x5afcc9) {
                        var _0x135ece = _0x57f8b8;
                        _0x41ab19['x'] = _0x5afcc9[_0x135ece(248)]['x'], Body[_0x135ece(246)](_0x5afcc9, _0x41ab19);
                    });
                    continue;
                case '1':
                    var _0x41ab19 = this[_0x57f8b8(160)];
                    continue;
                case '2':
                    _0x5f567f = this[_0x57f8b8(212)](_0x5f567f);
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
            return _0x267d66 = this[_0x3eeeae(212)](_0x267d66), _0x267d66[_0x3eeeae(213)](function (_0x5377b8) {
                Body['setAngularVelocity'](_0x5377b8, _0x382520);
            }), this;
        },
        'applyForce': function (_0x496462, _0x4836a3) {
            var _0x37a057 = _0x20e63b;
            _0x496462 = this[_0x37a057(212)](_0x496462);
            var _0x31689b = this[_0x37a057(160)];
            return _0x496462[_0x37a057(213)](function (_0x4ed923) {
                var _0x4c5bd3 = _0x37a057;
                _0x31689b['x'] = _0x4ed923['position']['x'], _0x31689b['y'] = _0x4ed923[_0x4c5bd3(249)]['y'], Body[_0x4c5bd3(250)](_0x4ed923, _0x31689b, _0x4836a3);
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
            _0x2bd625 = this[_0x32af4d(212)](_0x2bd625);
            var _0x372cfd = this[_0x32af4d(160)];
            return _0x2bd625[_0x32af4d(213)](function (_0x664a48) {
                var _0x54263d = _0x32af4d;
                _0xef0561['yoBsC'](_0x1cdc7e, undefined) && (_0x1cdc7e = _0x664a48[_0x54263d(251)]), _0x372cfd['x'] = _0xef0561[_0x54263d(252)](_0x18150d, Math['cos'](_0x1cdc7e)), _0x372cfd['y'] = _0x18150d * Math['sin'](_0x1cdc7e), Body[_0x54263d(250)](_0x664a48, _0x45caca, _0x372cfd);
            }), this;
        },
        'applyForceFromAngle': function (_0x27e8c6, _0x33b0a6, _0x17c7e6) {
            var _0x14a283 = _0x20e63b, _0x2b960f = { 'IdezW': _0x14a283(253) }, _0x17db23 = _0x2b960f['IdezW'][_0x14a283(211)]('|'), _0x2398d5 = -44 * -26 + 2 * -2356 + 16 * 223;
            while (!![]) {
                switch (_0x17db23[_0x2398d5++]) {
                case '0':
                    _0x27e8c6['forEach'](function (_0x40d843) {
                        var _0x32a31c = _0x14a283;
                        _0x2e9981['RBpny'](_0x17c7e6, undefined) && (_0x17c7e6 = _0x40d843[_0x32a31c(251)]), _0x3f7819['x'] = _0x2e9981[_0x32a31c(254)](_0x33b0a6, Math[_0x32a31c(255)](_0x17c7e6)), _0x3f7819['y'] = _0x2e9981[_0x32a31c(254)](_0x33b0a6, Math[_0x32a31c(256)](_0x17c7e6)), Body['applyForce'](_0x40d843, {
                            'x': _0x40d843[_0x32a31c(249)]['x'],
                            'y': _0x40d843[_0x32a31c(249)]['y']
                        }, _0x3f7819);
                    });
                    continue;
                case '1':
                    return this;
                case '2':
                    var _0x3f7819 = this[_0x14a283(160)];
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
                    _0x27e8c6 = this[_0x14a283(212)](_0x27e8c6);
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
                }, _0x2ddc97 = _0x313403[_0x2fb4d5(257)]['x'], _0x19c670 = _0x313403[_0x2fb4d5(257)]['y'], _0x4344fb = _0x313403[_0x2fb4d5(258)]['x'], _0x324842 = _0x313403[_0x2fb4d5(258)]['y'];
            return _0x313403[_0x2fb4d5(232)] && (_0x2ddc97 += _0x313403[_0x2fb4d5(232)][_0x2fb4d5(249)]['x'], _0x19c670 += _0x313403['bodyA'][_0x2fb4d5(249)]['y']), _0x313403[_0x2fb4d5(228)] && (_0x4344fb += _0x313403['bodyB'][_0x2fb4d5(249)]['x'], _0x324842 += _0x313403['bodyB'][_0x2fb4d5(249)]['y']), _0x2527f3[_0x2fb4d5(259)](DistanceBetween, _0x2ddc97, _0x19c670, _0x4344fb, _0x324842);
        },
        'alignBody': function (_0x3d4a63, _0x37cbd6, _0x3f786e, _0x2fd0e8) {
            var _0x354d00 = _0x20e63b, _0x6dca64 = { 'tQjqT': _0x354d00(224) };
            _0x3d4a63 = _0x3d4a63[_0x354d00(260)](_0x6dca64[_0x354d00(261)]) ? _0x3d4a63[_0x354d00(224)] : _0x3d4a63;
            var _0x3dae5a;
            switch (_0x2fd0e8) {
            case ALIGN_CONST['TOP_LEFT']:
            case ALIGN_CONST[_0x354d00(262)]:
                _0x3dae5a = this[_0x354d00(184)][_0x354d00(263)](_0x3d4a63, _0x37cbd6, _0x3f786e);
                break;
            case ALIGN_CONST[_0x354d00(264)]:
                _0x3dae5a = this[_0x354d00(184)]['getTopCenter'](_0x3d4a63, _0x37cbd6, _0x3f786e);
                break;
            case ALIGN_CONST['TOP_RIGHT']:
            case ALIGN_CONST[_0x354d00(265)]:
                _0x3dae5a = this['bodyBounds'][_0x354d00(266)](_0x3d4a63, _0x37cbd6, _0x3f786e);
                break;
            case ALIGN_CONST['LEFT_CENTER']:
                _0x3dae5a = this[_0x354d00(184)][_0x354d00(267)](_0x3d4a63, _0x37cbd6, _0x3f786e);
                break;
            case ALIGN_CONST[_0x354d00(268)]:
                _0x3dae5a = this[_0x354d00(184)]['getCenter'](_0x3d4a63, _0x37cbd6, _0x3f786e);
                break;
            case ALIGN_CONST[_0x354d00(269)]:
                _0x3dae5a = this['bodyBounds']['getRightCenter'](_0x3d4a63, _0x37cbd6, _0x3f786e);
                break;
            case ALIGN_CONST[_0x354d00(270)]:
            case ALIGN_CONST[_0x354d00(271)]:
                _0x3dae5a = this[_0x354d00(184)][_0x354d00(272)](_0x3d4a63, _0x37cbd6, _0x3f786e);
                break;
            case ALIGN_CONST[_0x354d00(273)]:
                _0x3dae5a = this[_0x354d00(184)][_0x354d00(274)](_0x3d4a63, _0x37cbd6, _0x3f786e);
                break;
            case ALIGN_CONST['BOTTOM_RIGHT']:
            case ALIGN_CONST['RIGHT_BOTTOM']:
                _0x3dae5a = this[_0x354d00(184)][_0x354d00(275)](_0x3d4a63, _0x37cbd6, _0x3f786e);
                break;
            }
            return _0x3dae5a && Body[_0x354d00(276)](_0x3d4a63, _0x3dae5a), this;
        },
        'shutdown': function () {
            var _0x2d081a = _0x20e63b, _0x4ef35d = this[_0x2d081a(144)][_0x2d081a(178)];
            this[_0x2d081a(146)] && (_0x4ef35d[_0x2d081a(277)](SceneEvents['UPDATE'], this['world']['update'], this[_0x2d081a(146)]), _0x4ef35d['off'](SceneEvents[_0x2d081a(190)], this[_0x2d081a(146)]['postUpdate'], this[_0x2d081a(146)])), _0x4ef35d[_0x2d081a(277)](SceneEvents['SHUTDOWN'], this['shutdown'], this), this[_0x2d081a(183)] && this[_0x2d081a(183)][_0x2d081a(187)](), this['world'] && this[_0x2d081a(146)][_0x2d081a(187)](), this[_0x2d081a(183)] = null, this[_0x2d081a(146)] = null;
        },
        'destroy': function () {
            var _0x15e653 = _0x20e63b;
            this[_0x15e653(192)](), this[_0x15e653(143)][_0x15e653(145)]['events'][_0x15e653(277)](SceneEvents[_0x15e653(181)], this[_0x15e653(182)], this), this[_0x15e653(143)] = null, this[_0x15e653(144)] = null;
        }
    });
PluginCache[_0x20e63b(199)]('MatterPhysics', MatterPhysics, _0x20e63b(278)), module[_0x20e63b(279)] = MatterPhysics;