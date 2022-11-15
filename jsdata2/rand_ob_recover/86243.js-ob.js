var ArrayUtils = require(_0x2e1b1b(473)), BlendModes = require(_0x2e1b1b(474)), Class = require(_0x2e1b1b(475)), Components = require(_0x2e1b1b(476)), Events = require(_0x2e1b1b(477)), GameObject = require('../GameObject'), Rectangle = require(_0x2e1b1b(478)), Render = require(_0x2e1b1b(479)), Union = require(_0x2e1b1b(480)), Vector2 = require(_0x2e1b1b(481)), Container = new Class({
        'Extends': GameObject,
        'Mixins': [
            Components[_0x2e1b1b(482)],
            Components[_0x2e1b1b(483)],
            Components[_0x2e1b1b(484)],
            Components[_0x2e1b1b(485)],
            Components[_0x2e1b1b(486)],
            Components[_0x2e1b1b(487)],
            Components[_0x2e1b1b(488)],
            Components[_0x2e1b1b(489)],
            Render
        ],
        'initialize': function Container(_0xeb3272, _0x258286, _0xd3901c, _0x3262f7) {
            var _0x2265fd = _0x2e1b1b, _0x3b2e5f = { 'quRDx': _0x2265fd(490) };
            GameObject[_0x2265fd(491)](this, _0xeb3272, _0x3b2e5f[_0x2265fd(492)]), this['list'] = [], this[_0x2265fd(493)] = !![], this[_0x2265fd(494)] = -(-9937 + 478 * 6 + 7070), this['position'] = -5371 * 1 + -703 + 6074, this['localTransform'] = new Components[(_0x2265fd(495))](), this[_0x2265fd(496)] = new Components['TransformMatrix'](), this[_0x2265fd(497)] = '', this[_0x2265fd(498)] = _0xeb3272[_0x2265fd(499)][_0x2265fd(500)], this[_0x2265fd(501)] = -742 * 4 + 8847 + -5878 * 1, this[_0x2265fd(502)] = 3579 + 8288 + -11866, this[_0x2265fd(503)](), this[_0x2265fd(504)](_0x258286, _0xd3901c), this[_0x2265fd(505)](), this[_0x2265fd(506)](BlendModes['SKIP_CHECK']), _0x3262f7 && this['add'](_0x3262f7);
        },
        'originX': {
            'get': function () {
                return -35 * -98 + -1 * 2729 + -701 + 0.5;
            }
        },
        'originY': {
            'get': function () {
                return 1 * 9391 + 1 * 131 + -9522 + 0.5;
            }
        },
        'displayOriginX': {
            'get': function () {
                var _0x398ad3 = _0x2e1b1b, _0x27bc42 = {
                        'BCHWV': function (_0x2171cd, _0x30dc30) {
                            return _0x2171cd * _0x30dc30;
                        }
                    };
                return _0x27bc42[_0x398ad3(507)](this[_0x398ad3(508)], 9966 + 6653 + -16619 + 0.5);
            }
        },
        'displayOriginY': {
            'get': function () {
                var _0x5e244c = _0x2e1b1b, _0xace906 = {
                        'TNVWG': function (_0x3c9a41, _0x5213d6) {
                            return _0x3c9a41 * _0x5213d6;
                        }
                    };
                return _0xace906[_0x5e244c(509)](this[_0x5e244c(510)], 6712 + 1489 * -1 + -5223 + 0.5);
            }
        },
        'setExclusive': function (_0xe34145) {
            var _0x232725 = _0x2e1b1b;
            return _0xe34145 === undefined && (_0xe34145 = !![]), this[_0x232725(493)] = _0xe34145, this;
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
                }, _0x34e09e = _0xd28802[_0x5b6b26(511)][_0x5b6b26(512)]('|'), _0x395701 = 155 * 5 + -5794 * 1 + 5019;
            while (!![]) {
                switch (_0x34e09e[_0x395701++]) {
                case '0':
                    return _0x3f59e9;
                case '1':
                    if (this[_0x5b6b26(513)]) {
                        var _0x245838 = this[_0x5b6b26(513)][_0x5b6b26(514)](), _0x43f28f = _0x245838[_0x5b6b26(515)](this['x'], this['y']);
                        _0x3f59e9[_0x5b6b26(516)](_0x43f28f['x'], _0x43f28f['y'], 1 * -7809 + 3050 + 4759, 5 * -1523 + 9044 + 1429 * -1);
                    }
                    continue;
                case '2':
                    _0xd28802[_0x5b6b26(517)](_0x3f59e9, undefined) && (_0x3f59e9 = new Rectangle());
                    continue;
                case '3':
                    if (_0xd28802['rYoOs'](this[_0x5b6b26(518)][_0x5b6b26(519)], 6724 * 1 + 9253 + -1 * 15977)) {
                        var _0x36f6a2 = this[_0x5b6b26(518)], _0x3fedf8 = new Rectangle(), _0x19a0f2 = ![];
                        _0x3f59e9['setEmpty']();
                        for (var _0x13adf0 = 7210 + -9302 + 523 * 4; _0xd28802[_0x5b6b26(520)](_0x13adf0, _0x36f6a2[_0x5b6b26(519)]); _0x13adf0++) {
                            var _0x24662c = _0x36f6a2[_0x13adf0];
                            _0x24662c['getBounds'] && (_0x24662c['getBounds'](_0x3fedf8), !_0x19a0f2 ? (_0x3f59e9[_0x5b6b26(516)](_0x3fedf8['x'], _0x3fedf8['y'], _0x3fedf8[_0x5b6b26(508)], _0x3fedf8[_0x5b6b26(510)]), _0x19a0f2 = !![]) : _0xd28802[_0x5b6b26(521)](Union, _0x3fedf8, _0x3f59e9, _0x3f59e9));
                        }
                    }
                    continue;
                case '4':
                    _0x3f59e9[_0x5b6b26(516)](this['x'], this['y'], 473 + 9074 + -9547, -4632 + -4443 * 1 + 9075);
                    continue;
                }
                break;
            }
        },
        'addHandler': function (_0x772d88) {
            var _0xf6dba8 = _0x2e1b1b;
            _0x772d88[_0xf6dba8(522)](Events[_0xf6dba8(523)], this[_0xf6dba8(524)], this), this['exclusive'] && (_0x772d88[_0xf6dba8(513)] && _0x772d88['parentContainer'][_0xf6dba8(524)](_0x772d88), _0x772d88['removeFromDisplayList'](), _0x772d88[_0xf6dba8(513)] = this);
        },
        'removeHandler': function (_0x36852d) {
            var _0xb80be1 = _0x2e1b1b;
            _0x36852d[_0xb80be1(525)](Events[_0xb80be1(523)], this[_0xb80be1(524)]), this[_0xb80be1(493)] && (_0x36852d[_0xb80be1(513)] = null, _0x36852d[_0xb80be1(526)]());
        },
        'pointToContainer': function (_0x121af2, _0x518462) {
            var _0x46d83d = _0x2e1b1b, _0xb15dd2 = {
                    'czkIq': _0x46d83d(527),
                    'NBiGE': function (_0x1760e3, _0x2fcb39) {
                        return _0x1760e3 === _0x2fcb39;
                    }
                }, _0x3392ad = _0xb15dd2[_0x46d83d(528)][_0x46d83d(512)]('|'), _0x1999cc = -114 * -78 + 7103 + 1 * -15995;
            while (!![]) {
                switch (_0x3392ad[_0x1999cc++]) {
                case '0':
                    var _0x493f9c = this[_0x46d83d(496)];
                    continue;
                case '1':
                    return _0x518462;
                case '2':
                    this[_0x46d83d(513)] ? this[_0x46d83d(513)][_0x46d83d(529)](_0x121af2, _0x518462) : _0x518462 = new Vector2(_0x121af2['x'], _0x121af2['y']);
                    continue;
                case '3':
                    _0x493f9c[_0x46d83d(530)](this['x'], this['y'], this[_0x46d83d(531)], this[_0x46d83d(532)], this[_0x46d83d(533)]);
                    continue;
                case '4':
                    _0x493f9c[_0x46d83d(515)](_0x121af2['x'], _0x121af2['y'], _0x518462);
                    continue;
                case '5':
                    _0x493f9c[_0x46d83d(534)]();
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
            return this[_0x2e7813(535)](this['tempTransformMatrix'], this['localTransform']);
        },
        'add': function (_0x3f4183) {
            var _0x5ba0da = _0x2e1b1b;
            return ArrayUtils[_0x5ba0da(536)](this[_0x5ba0da(518)], _0x3f4183, this[_0x5ba0da(494)], this[_0x5ba0da(537)], this), this;
        },
        'addAt': function (_0xee5123, _0x521fff) {
            var _0x20f7d4 = _0x2e1b1b;
            return ArrayUtils[_0x20f7d4(538)](this[_0x20f7d4(518)], _0xee5123, _0x521fff, this[_0x20f7d4(494)], this[_0x20f7d4(537)], this), this;
        },
        'getAt': function (_0x877e92) {
            var _0x5aa7d7 = _0x2e1b1b;
            return this[_0x5aa7d7(518)][_0x877e92];
        },
        'getIndex': function (_0x343e57) {
            var _0x5f4daa = _0x2e1b1b;
            return this['list'][_0x5f4daa(539)](_0x343e57);
        },
        'sort': function (_0x3e9e48, _0x2f152a) {
            var _0x1043e5 = _0x2e1b1b, _0x1ec86e = {
                    'gUjhQ': function (_0x1f52fb, _0x501132) {
                        return _0x1f52fb === _0x501132;
                    }
                };
            if (!_0x3e9e48)
                return this;
            return _0x1ec86e[_0x1043e5(540)](_0x2f152a, undefined) && (_0x2f152a = function (_0x2e9403, _0x3dfd23) {
                return _0x2e9403[_0x3e9e48] - _0x3dfd23[_0x3e9e48];
            }), ArrayUtils[_0x1043e5(541)](this[_0x1043e5(518)], _0x2f152a), this;
        },
        'getByName': function (_0x2dda74) {
            var _0x4fdf93 = _0x2e1b1b, _0x4ce644 = { 'bqnJH': 'name' };
            return ArrayUtils[_0x4fdf93(542)](this[_0x4fdf93(518)], _0x4ce644[_0x4fdf93(543)], _0x2dda74);
        },
        'getRandom': function (_0x159b0c, _0x42a6c7) {
            var _0x17000a = _0x2e1b1b;
            return ArrayUtils[_0x17000a(544)](this['list'], _0x159b0c, _0x42a6c7);
        },
        'getFirst': function (_0x472d4f, _0x3b4b3c, _0x10466c, _0x4e6a3b) {
            var _0x12a9bf = _0x2e1b1b;
            return ArrayUtils[_0x12a9bf(542)](this['list'], _0x472d4f, _0x3b4b3c, _0x10466c, _0x4e6a3b);
        },
        'getAll': function (_0x270e53, _0x149d64, _0x514005, _0x175812) {
            return ArrayUtils['GetAll'](this['list'], _0x270e53, _0x149d64, _0x514005, _0x175812);
        },
        'count': function (_0x584fb7, _0xb6a83b, _0x59d7f5, _0x5ce82b) {
            var _0x3c1dc2 = _0x2e1b1b;
            return ArrayUtils[_0x3c1dc2(545)](this[_0x3c1dc2(518)], _0x584fb7, _0xb6a83b, _0x59d7f5, _0x5ce82b);
        },
        'swap': function (_0x55e817, _0x31f2a8) {
            var _0x395462 = _0x2e1b1b;
            return ArrayUtils[_0x395462(546)](this[_0x395462(518)], _0x55e817, _0x31f2a8), this;
        },
        'moveTo': function (_0x383dcc, _0x7323e7) {
            var _0x4c86fc = _0x2e1b1b;
            return ArrayUtils['MoveTo'](this[_0x4c86fc(518)], _0x383dcc, _0x7323e7), this;
        },
        'moveAbove': function (_0x593fc3, _0x4a1dfd) {
            var _0x162bcc = _0x2e1b1b;
            return ArrayUtils[_0x162bcc(547)](this[_0x162bcc(518)], _0x593fc3, _0x4a1dfd), this;
        },
        'moveBelow': function (_0x55c669, _0x4089e7) {
            var _0x488783 = _0x2e1b1b;
            return ArrayUtils[_0x488783(548)](this['list'], _0x55c669, _0x4089e7), this;
        },
        'remove': function (_0x59b271, _0x51ac4c) {
            var _0x4f5c6 = _0x2e1b1b, _0x56a081 = {
                    'HYKKo': function (_0x30a001, _0x4037a4) {
                        return _0x30a001 && _0x4037a4;
                    },
                    'wrycs': function (_0x5de443, _0x176cde) {
                        return _0x5de443 < _0x176cde;
                    }
                }, _0x40ec77 = ArrayUtils[_0x4f5c6(549)](this[_0x4f5c6(518)], _0x59b271, this[_0x4f5c6(550)], this);
            if (_0x56a081[_0x4f5c6(551)](_0x51ac4c, _0x40ec77)) {
                !Array['isArray'](_0x40ec77) && (_0x40ec77 = [_0x40ec77]);
                for (var _0x537972 = -4 * -1855 + 241 + -7661; _0x56a081['wrycs'](_0x537972, _0x40ec77[_0x4f5c6(519)]); _0x537972++) {
                    _0x40ec77[_0x537972][_0x4f5c6(552)]();
                }
            }
            return this;
        },
        'removeAt': function (_0x5f404f, _0xafa92a) {
            var _0x488582 = _0x2e1b1b, _0x4f0c18 = {
                    'hLoGB': function (_0xf62265, _0x2822db) {
                        return _0xf62265 && _0x2822db;
                    }
                }, _0x154835 = ArrayUtils[_0x488582(553)](this[_0x488582(518)], _0x5f404f, this[_0x488582(550)], this);
            return _0x4f0c18[_0x488582(554)](_0xafa92a, _0x154835) && _0x154835[_0x488582(552)](), this;
        },
        'removeBetween': function (_0x1f29d5, _0x2d87d1, _0x5e5ad8) {
            var _0x10dd2f = _0x2e1b1b, _0x9a0824 = {
                    'hweAu': function (_0x22970b, _0x4a1903) {
                        return _0x22970b < _0x4a1903;
                    }
                }, _0x5bdb83 = ArrayUtils[_0x10dd2f(555)](this[_0x10dd2f(518)], _0x1f29d5, _0x2d87d1, this[_0x10dd2f(550)], this);
            if (_0x5e5ad8)
                for (var _0x43061a = -7432 + -3865 + 11297; _0x9a0824[_0x10dd2f(556)](_0x43061a, _0x5bdb83[_0x10dd2f(519)]); _0x43061a++) {
                    _0x5bdb83[_0x43061a][_0x10dd2f(552)]();
                }
            return this;
        },
        'removeAll': function (_0x28df36) {
            var _0x901bdd = _0x2e1b1b, _0x1140f6 = {
                    'KWANs': function (_0x30d0b1, _0x2a986d) {
                        return _0x30d0b1 < _0x2a986d;
                    }
                }, _0x3027e1 = ArrayUtils[_0x901bdd(555)](this[_0x901bdd(518)], 5546 + 6333 + 1 * -11879, this[_0x901bdd(518)][_0x901bdd(519)], this[_0x901bdd(550)], this);
            if (_0x28df36)
                for (var _0x38322a = 7060 + -3412 * -1 + -10472; _0x1140f6[_0x901bdd(557)](_0x38322a, _0x3027e1['length']); _0x38322a++) {
                    _0x3027e1[_0x38322a]['destroy']();
                }
            return this;
        },
        'bringToTop': function (_0x218058) {
            var _0x33fa4b = _0x2e1b1b;
            return ArrayUtils[_0x33fa4b(558)](this[_0x33fa4b(518)], _0x218058), this;
        },
        'sendToBack': function (_0x190d31) {
            var _0x30396 = _0x2e1b1b;
            return ArrayUtils[_0x30396(559)](this[_0x30396(518)], _0x190d31), this;
        },
        'moveUp': function (_0x2a7d16) {
            var _0x28e97b = _0x2e1b1b;
            return ArrayUtils['MoveUp'](this[_0x28e97b(518)], _0x2a7d16), this;
        },
        'moveDown': function (_0x419bdc) {
            var _0x447a42 = _0x2e1b1b;
            return ArrayUtils[_0x447a42(560)](this[_0x447a42(518)], _0x419bdc), this;
        },
        'reverse': function () {
            var _0x2d4bb8 = _0x2e1b1b;
            return this[_0x2d4bb8(518)][_0x2d4bb8(561)](), this;
        },
        'shuffle': function () {
            var _0xda7a45 = _0x2e1b1b;
            return ArrayUtils[_0xda7a45(562)](this['list']), this;
        },
        'replace': function (_0xd9350, _0x25611b, _0x5b8d27) {
            var _0x57dddf = _0x2e1b1b, _0x3492d6 = ArrayUtils[_0x57dddf(563)](this[_0x57dddf(518)], _0xd9350, _0x25611b);
            return _0x3492d6 && (this[_0x57dddf(537)](_0x25611b), this['removeHandler'](_0xd9350), _0x5b8d27 && _0xd9350[_0x57dddf(552)]()), this;
        },
        'exists': function (_0x344e06) {
            var _0x346127 = _0x2e1b1b, _0x4eaae0 = {
                    'ebwTS': function (_0x5517b3, _0x1b1579) {
                        return _0x5517b3 > _0x1b1579;
                    }
                };
            return _0x4eaae0[_0x346127(564)](this[_0x346127(518)]['indexOf'](_0x344e06), -(-1993 * -2 + 6280 + -10265));
        },
        'setAll': function (_0x2d4d7d, _0x324fde, _0x3173f2, _0x15537c) {
            var _0x1cc02b = _0x2e1b1b;
            return ArrayUtils['SetAll'](this[_0x1cc02b(518)], _0x2d4d7d, _0x324fde, _0x3173f2, _0x15537c), this;
        },
        'each': function (_0xa653aa, _0x4c2a78) {
            var _0x202197 = _0x2e1b1b, _0x5f1ae2 = {
                    'zsdet': function (_0x4b5fd7, _0x394cf4) {
                        return _0x4b5fd7 < _0x394cf4;
                    },
                    'XJRoY': function (_0x32dafe, _0xe1a3e8) {
                        return _0x32dafe < _0xe1a3e8;
                    }
                }, _0x1b8868 = [null], _0x19d810, _0x3c783a = this[_0x202197(518)]['slice'](), _0x52bc5a = _0x3c783a['length'];
            for (_0x19d810 = -3267 + 182 + 1029 * 3; _0x5f1ae2['zsdet'](_0x19d810, arguments['length']); _0x19d810++) {
                _0x1b8868[_0x202197(565)](arguments[_0x19d810]);
            }
            for (_0x19d810 = -585 + 6 * 1193 + -6573; _0x5f1ae2[_0x202197(566)](_0x19d810, _0x52bc5a); _0x19d810++) {
                _0x1b8868[-1 * -7222 + 166 * 11 + -9048] = _0x3c783a[_0x19d810], _0xa653aa['apply'](_0x4c2a78, _0x1b8868);
            }
            return this;
        },
        'iterate': function (_0x488663, _0x408e2b) {
            var _0x2c4f40 = _0x2e1b1b, _0xbaa5dc = {
                    'vxKmQ': _0x2c4f40(567),
                    'RokSJ': function (_0x4bc759, _0x14906a) {
                        return _0x4bc759 < _0x14906a;
                    }
                }, _0x534197 = _0xbaa5dc[_0x2c4f40(568)]['split']('|'), _0x4a6863 = 3701 * 2 + -5 * -694 + -10872;
            while (!![]) {
                switch (_0x534197[_0x4a6863++]) {
                case '0':
                    var _0x51b061 = [null];
                    continue;
                case '1':
                    for (_0x129ff2 = 7303 + -545 + -6756; _0xbaa5dc['RokSJ'](_0x129ff2, arguments[_0x2c4f40(519)]); _0x129ff2++) {
                        _0x51b061[_0x2c4f40(565)](arguments[_0x129ff2]);
                    }
                    continue;
                case '2':
                    return this;
                case '3':
                    for (_0x129ff2 = -6805 + 1 * 5056 + 33 * 53; _0xbaa5dc[_0x2c4f40(569)](_0x129ff2, this[_0x2c4f40(518)][_0x2c4f40(519)]); _0x129ff2++) {
                        _0x51b061[-2500 * -1 + -2 * -2504 + -3754 * 2] = this[_0x2c4f40(518)][_0x129ff2], _0x488663[_0x2c4f40(570)](_0x408e2b, _0x51b061);
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
                    'cZmZv': _0xd444d3(502),
                    'svBYf': function (_0x59db96, _0x7cc177) {
                        return _0x59db96 === _0x7cc177;
                    }
                }, _0x3b5fc9 = _0xd444d3(571)[_0xd444d3(512)]('|'), _0xc22130 = -4409 * -2 + -5641 * 1 + 1059 * -3;
            while (!![]) {
                switch (_0x3b5fc9[_0xc22130++]) {
                case '0':
                    return this;
                case '1':
                    _0x151d8f[_0xd444d3(572)](_0x87c7e3, undefined) && (_0x87c7e3 = _0x55726b);
                    continue;
                case '2':
                    _0x4e0ff2 && (ArrayUtils[_0xd444d3(573)](this[_0xd444d3(518)], 'scrollFactorX', _0x55726b), ArrayUtils[_0xd444d3(573)](this[_0xd444d3(518)], _0x151d8f['cZmZv'], _0x87c7e3));
                    continue;
                case '3':
                    this['scrollFactorY'] = _0x87c7e3;
                    continue;
                case '4':
                    this['scrollFactorX'] = _0x55726b;
                    continue;
                case '5':
                    _0x151d8f[_0xd444d3(574)](_0x4e0ff2, undefined) && (_0x4e0ff2 = ![]);
                    continue;
                }
                break;
            }
        },
        'length': {
            'get': function () {
                var _0x3be3f3 = _0x2e1b1b;
                return this[_0x3be3f3(518)]['length'];
            }
        },
        'first': {
            'get': function () {
                var _0x23e395 = _0x2e1b1b;
                return this['position'] = 4959 + -1061 + -2 * 1949, this[_0x23e395(518)][_0x23e395(519)] > -9975 + 9265 + 710 ? this[_0x23e395(518)][-11 * -397 + -6929 + 2562] : null;
            }
        },
        'last': {
            'get': function () {
                var _0x2e91fd = _0x2e1b1b, _0x2f53cd = {
                        'SOWBa': function (_0x552578, _0xa93f95) {
                            return _0x552578 > _0xa93f95;
                        }
                    };
                return _0x2f53cd[_0x2e91fd(575)](this['list'][_0x2e91fd(519)], 9 * -1111 + -4 * 429 + 11715) ? (this[_0x2e91fd(576)] = this[_0x2e91fd(518)]['length'] - (-3 * 134 + 8881 + 6 * -1413), this[_0x2e91fd(518)][this[_0x2e91fd(576)]]) : null;
            }
        },
        'next': {
            'get': function () {
                var _0x5e0ef3 = _0x2e1b1b;
                return this[_0x5e0ef3(576)] < this[_0x5e0ef3(518)]['length'] ? (this[_0x5e0ef3(576)]++, this[_0x5e0ef3(518)][this[_0x5e0ef3(576)]]) : null;
            }
        },
        'previous': {
            'get': function () {
                var _0x1709f0 = _0x2e1b1b, _0x1268a0 = {
                        'AasdD': function (_0x1bbbd8, _0x37d391) {
                            return _0x1bbbd8 > _0x37d391;
                        }
                    };
                return _0x1268a0[_0x1709f0(577)](this[_0x1709f0(576)], -6020 + 3190 * -2 + -496 * -25) ? (this[_0x1709f0(576)]--, this[_0x1709f0(518)][this[_0x1709f0(576)]]) : null;
            }
        },
        'preDestroy': function () {
            var _0x2f8e5c = _0x2e1b1b;
            this['removeAll'](!!this[_0x2f8e5c(493)]), this[_0x2f8e5c(578)]['destroy'](), this[_0x2f8e5c(496)][_0x2f8e5c(552)](), this[_0x2f8e5c(518)] = [];
        }
    });
function _0x1fe8(_0x52581c, _0x3641d2) {
    return _0x1fe8 = function (_0x4eb16e, _0x3636b4) {
        _0x4eb16e = _0x4eb16e - (9788 + 2379 + 308 * -38);
        var _0x528d12 = _0x3a9a[_0x4eb16e];
        return _0x528d12;
    }, _0x1fe8(_0x52581c, _0x3641d2);
}
module['exports'] = Container;