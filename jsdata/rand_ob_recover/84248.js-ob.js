var EventEmitter = require('events')[_0x7dd31f(366)], spawn = require(_0x7dd31f(367))[_0x7dd31f(368)], readlink = require(_0x7dd31f(369))[_0x7dd31f(370)], path = require(_0x7dd31f(371)), dirname = path[_0x7dd31f(372)], basename = path[_0x7dd31f(373)], fs = require('fs');
exports = module[_0x7dd31f(374)] = new Command(), exports[_0x7dd31f(375)] = Command, exports[_0x7dd31f(376)] = Option;
function Option(_0xebbd39, _0x4fe895) {
    var _0x5cd9ba = _0x7dd31f, _0x15c986 = {
            'NMChI': '-no-',
            'tGxUT': function (_0x26a084, _0x3731e8) {
                return _0x26a084 > _0x3731e8;
            }
        }, _0x525127 = _0x5cd9ba(377)[_0x5cd9ba(378)]('|'), _0x1c12ea = -8610 + -3060 + 11670;
    while (!![]) {
        switch (_0x525127[_0x1c12ea++]) {
        case '0':
            this['bool'] = !~_0xebbd39['indexOf'](_0x15c986[_0x5cd9ba(379)]);
            continue;
        case '1':
            this[_0x5cd9ba(380)] = ~_0xebbd39['indexOf']('<');
            continue;
        case '2':
            if (_0x15c986['tGxUT'](_0xebbd39['length'], 3598 + 3071 + -6668) && !/^[[<]/['test'](_0xebbd39[1691 + 79 * -35 + 1075]))
                this[_0x5cd9ba(381)] = _0xebbd39['shift']();
            continue;
        case '3':
            this['description'] = _0x4fe895 || '';
            continue;
        case '4':
            _0xebbd39 = _0xebbd39[_0x5cd9ba(378)](/[ ,|]+/);
            continue;
        case '5':
            this['long'] = _0xebbd39[_0x5cd9ba(382)]();
            continue;
        case '6':
            this[_0x5cd9ba(383)] = _0xebbd39;
            continue;
        case '7':
            this[_0x5cd9ba(384)] = ~_0xebbd39[_0x5cd9ba(385)]('[');
            continue;
        }
        break;
    }
}
Option[_0x7dd31f(386)][_0x7dd31f(387)] = function () {
    var _0x204868 = _0x7dd31f, _0x3083c9 = { 'gJKHd': _0x204868(388) };
    return this['long'][_0x204868(389)]('--', '')[_0x204868(389)](_0x3083c9['gJKHd'], '');
}, Option[_0x7dd31f(386)]['is'] = function (_0x5c0339) {
    var _0x516811 = _0x7dd31f, _0x79464f = {
            'PqZgH': function (_0x965204, _0x384cde) {
                return _0x965204 == _0x384cde;
            },
            'JXQGc': function (_0x437940, _0x332b08) {
                return _0x437940 == _0x332b08;
            }
        };
    return _0x79464f['PqZgH'](_0x5c0339, this[_0x516811(381)]) || _0x79464f[_0x516811(390)](_0x5c0339, this[_0x516811(391)]);
};
function Command(_0x47d6db) {
    var _0x2b3ecf = _0x7dd31f, _0x1e0b74 = {
            'ZwEwi': _0x2b3ecf(392),
            'Bugoo': function (_0x1f34ef, _0x47ec71) {
                return _0x1f34ef || _0x47ec71;
            }
        }, _0x1950ba = _0x1e0b74[_0x2b3ecf(393)]['split']('|'), _0x2eb5e1 = -371 * -1 + 7552 * -1 + 7181 * 1;
    while (!![]) {
        switch (_0x1950ba[_0x2eb5e1++]) {
        case '0':
            this[_0x2b3ecf(394)] = [];
            continue;
        case '1':
            this['commands'] = [];
            continue;
        case '2':
            this[_0x2b3ecf(395)] = _0x1e0b74[_0x2b3ecf(396)](_0x47d6db, '');
            continue;
        case '3':
            this[_0x2b3ecf(397)] = {};
            continue;
        case '4':
            this[_0x2b3ecf(398)] = [];
            continue;
        case '5':
            this[_0x2b3ecf(399)] = ![];
            continue;
        }
        break;
    }
}
Command['prototype'][_0x7dd31f(400)] = EventEmitter[_0x7dd31f(386)], Command[_0x7dd31f(386)][_0x7dd31f(401)] = function (_0x42e863, _0x597cb5, _0x16d2d5) {
    var _0x32b8d3 = _0x7dd31f, _0x211626 = { 'rfNix': _0x32b8d3(402) }, _0x518199 = _0x211626[_0x32b8d3(403)][_0x32b8d3(378)]('|'), _0x280d52 = -4196 + -3192 + 4 * 1847;
    while (!![]) {
        switch (_0x518199[_0x280d52++]) {
        case '0':
            var _0x4cd2bd = _0x42e863[_0x32b8d3(378)](/ +/);
            continue;
        case '1':
            _0x9797e3[_0x32b8d3(404)] = this;
            continue;
        case '2':
            var _0x9797e3 = new Command(_0x4cd2bd[_0x32b8d3(382)]());
            continue;
        case '3':
            if (_0x597cb5)
                return this;
            continue;
        case '4':
            _0x9797e3[_0x32b8d3(405)](_0x4cd2bd);
            continue;
        case '5':
            return _0x9797e3;
        case '6':
            if (_0x597cb5) {
                _0x9797e3['description'](_0x597cb5), this[_0x32b8d3(406)] = !![], this[_0x32b8d3(397)][_0x9797e3['_name']] = !![];
                if (_0x16d2d5['isDefault'])
                    this[_0x32b8d3(407)] = _0x9797e3[_0x32b8d3(395)];
            }
            continue;
        case '7':
            _0x9797e3[_0x32b8d3(408)] = !!_0x16d2d5['noHelp'];
            continue;
        case '8':
            _0x16d2d5 = _0x16d2d5 || {};
            continue;
        case '9':
            this[_0x32b8d3(409)][_0x32b8d3(410)](_0x9797e3);
            continue;
        }
        break;
    }
}, Command[_0x7dd31f(386)][_0x7dd31f(411)] = function (_0x1936fa) {
    var _0x54be0b = _0x7dd31f;
    return this[_0x54be0b(405)](_0x1936fa[_0x54be0b(378)](/ +/));
}, Command[_0x7dd31f(386)][_0x7dd31f(412)] = function () {
    var _0x5bd58a = _0x7dd31f, _0x34c07e = { 'KoccR': _0x5bd58a(413) };
    this[_0x5bd58a(401)](_0x34c07e[_0x5bd58a(414)], 'display help for [cmd]');
}, Command['prototype']['parseExpectedArgs'] = function (_0x697494) {
    var _0x177f94 = _0x7dd31f, _0xed6917 = {
            'KVUrP': function (_0x5e403e, _0x5221d4) {
                return _0x5e403e > _0x5221d4;
            }
        };
    if (!_0x697494[_0x177f94(415)])
        return;
    var _0x14f110 = this;
    return _0x697494['forEach'](function (_0xed50a0) {
        var _0x11765a = _0x177f94, _0x190ad0 = {
                'required': ![],
                'name': '',
                'variadic': ![]
            };
        switch (_0xed50a0[-475 + 6329 * 1 + -2 * 2927]) {
        case '<':
            _0x190ad0['required'] = !![], _0x190ad0[_0x11765a(387)] = _0xed50a0[_0x11765a(416)](-5247 + -6659 + 11907, -(3671 + 8601 + -1 * 12271));
            break;
        case '[':
            _0x190ad0[_0x11765a(387)] = _0xed50a0[_0x11765a(416)](9 * -249 + -6833 * -1 + -4591, -(-4757 * -2 + -50 * 89 + 83 * -61));
            break;
        }
        _0xed6917[_0x11765a(417)](_0x190ad0[_0x11765a(387)][_0x11765a(415)], 797 + -73 * 53 + 3075) && _0x190ad0[_0x11765a(387)][_0x11765a(416)](-(-5550 + 2648 + 2905)) === '...' && (_0x190ad0['variadic'] = !![], _0x190ad0['name'] = _0x190ad0[_0x11765a(387)][_0x11765a(416)](19 * -181 + 59 * 74 + -9 * 103, -(1021 * -1 + -756 + 89 * 20))), _0x190ad0[_0x11765a(387)] && _0x14f110[_0x11765a(394)][_0x11765a(410)](_0x190ad0);
    }), this;
}, Command[_0x7dd31f(386)]['action'] = function (_0x437053) {
    var _0x1838fe = _0x7dd31f, _0x2b7173 = {
            'TJabk': function (_0x56255e, _0x2ed7d9) {
                return _0x56255e == _0x2ed7d9;
            },
            'GjvXV': function (_0x2c38c8, _0x3b4070) {
                return _0x2c38c8 !== _0x3b4070;
            },
            'JbLGR': function (_0x332fb7, _0x69e50) {
                return _0x332fb7 - _0x69e50;
            },
            'BpWyZ': _0x1838fe(418),
            'JILgl': function (_0x3d851b, _0x5b0e57, _0x127392) {
                return _0x3d851b(_0x5b0e57, _0x127392);
            },
            'cHKcX': function (_0x224a87, _0xb0fc4b) {
                return _0x224a87 > _0xb0fc4b;
            },
            'uDWwg': function (_0x6cb3a3, _0x5b73c1) {
                return _0x6cb3a3 === _0x5b73c1;
            }
        }, _0x43d140 = this, _0x577692 = function (_0x5938da, _0x576010) {
            var _0x3fd56d = _0x1838fe, _0x4595e1 = _0x2b7173['BpWyZ']['split']('|'), _0x23ec71 = -26 * -346 + -3572 + -5424;
            while (!![]) {
                switch (_0x4595e1[_0x23ec71++]) {
                case '0':
                    _0x43d140[_0x3fd56d(394)][_0x3fd56d(419)](function (_0x4e50b1, _0x5bd4b4) {
                        var _0x50fc03 = _0x3fd56d;
                        if (_0x4e50b1[_0x50fc03(380)] && _0x2b7173[_0x50fc03(420)](null, _0x5938da[_0x5bd4b4]))
                            _0x43d140[_0x50fc03(421)](_0x4e50b1['name']);
                        else
                            _0x4e50b1[_0x50fc03(422)] && (_0x2b7173[_0x50fc03(423)](_0x5bd4b4, _0x2b7173[_0x50fc03(424)](_0x43d140['_args'][_0x50fc03(415)], -3739 * -1 + -1 * 4339 + -1 * -601)) && _0x43d140[_0x50fc03(425)](_0x4e50b1[_0x50fc03(387)]), _0x5938da[_0x5bd4b4] = _0x5938da['splice'](_0x5bd4b4));
                    });
                    continue;
                case '1':
                    if (_0x4a4fba['args']['length'])
                        _0x5938da = _0x4a4fba[_0x3fd56d(426)]['concat'](_0x5938da);
                    continue;
                case '2':
                    _0x5938da = _0x5938da || [];
                    continue;
                case '3':
                    _0x576010 = _0x576010 || [];
                    continue;
                case '4':
                    _0x2b7173[_0x3fd56d(427)](outputHelpIfNecessary, _0x43d140, _0x4a4fba[_0x3fd56d(428)]);
                    continue;
                case '5':
                    var _0x4a4fba = _0x43d140[_0x3fd56d(429)](_0x576010);
                    continue;
                case '6':
                    _0x437053[_0x3fd56d(430)](_0x43d140, _0x5938da);
                    continue;
                case '7':
                    _0x43d140['_args']['length'] ? _0x5938da[_0x43d140[_0x3fd56d(394)][_0x3fd56d(415)]] = _0x43d140 : _0x5938da[_0x3fd56d(410)](_0x43d140);
                    continue;
                case '8':
                    _0x2b7173[_0x3fd56d(431)](_0x4a4fba[_0x3fd56d(428)][_0x3fd56d(415)], 3909 + 724 + -1 * 4633) && _0x43d140[_0x3fd56d(432)](_0x4a4fba['unknown'][365 * 20 + 4861 + 1 * -12161]);
                    continue;
                }
                break;
            }
        }, _0x31ae73 = this[_0x1838fe(404)] || this, _0x39e404 = _0x2b7173[_0x1838fe(433)](_0x31ae73, this) ? '*' : this[_0x1838fe(395)];
    _0x31ae73['on'](_0x39e404, _0x577692);
    if (this[_0x1838fe(434)])
        _0x31ae73['on'](this[_0x1838fe(434)], _0x577692);
    return this;
}, Command[_0x7dd31f(386)][_0x7dd31f(435)] = function (_0x232a65, _0x12cfac, _0x53fc92, _0x26061) {
    var _0xa0e32a = _0x7dd31f, _0x72d8d7 = {
            'wLRDu': _0xa0e32a(436),
            'CACGA': function (_0x5d7db2, _0x21dd50) {
                return _0x5d7db2 == _0x21dd50;
            },
            'YzbMK': function (_0x489cc3, _0x58c553) {
                return _0x489cc3 !== _0x58c553;
            },
            'jhoUa': function (_0xff7433, _0x23f293) {
                return _0xff7433 != _0x23f293;
            },
            'iOxlU': 'function',
            'STvue': function (_0x2aeb57, _0x105a6e) {
                return _0x2aeb57 instanceof _0x105a6e;
            },
            'RnZQB': function (_0x140863, _0x7d9a13) {
                return _0x140863 === _0x7d9a13;
            },
            'GpMyO': _0xa0e32a(437),
            'oAktc': function (_0xb4e530, _0x55101a) {
                return _0xb4e530 == _0x55101a;
            },
            'RJeLY': function (_0x968e16, _0x5ab592) {
                return _0x968e16(_0x5ab592);
            }
        }, _0x2f6957 = _0x72d8d7['wLRDu']['split']('|'), _0x1e4e56 = -1074 + 3481 + -2407;
    while (!![]) {
        switch (_0x2f6957[_0x1e4e56++]) {
        case '0':
            if (_0x72d8d7['CACGA'](![], _0x3bd1ba[_0xa0e32a(438)]) || _0x3bd1ba[_0xa0e32a(384)] || _0x3bd1ba['required']) {
                if (![] == _0x3bd1ba['bool'])
                    _0x26061 = !![];
                if (_0x72d8d7['YzbMK'](undefined, _0x26061))
                    _0x841d73[_0xe76042] = _0x26061;
            }
            continue;
        case '1':
            if (_0x72d8d7['jhoUa'](typeof _0x53fc92, _0x72d8d7[_0xa0e32a(439)])) {
                if (_0x72d8d7[_0xa0e32a(440)](_0x53fc92, RegExp)) {
                    var _0x1b5764 = _0x53fc92;
                    _0x53fc92 = function (_0x3a5152, _0x953da5) {
                        var _0x34cf7e = _0x1b5764['exec'](_0x3a5152);
                        return _0x34cf7e ? _0x34cf7e[7304 + 6219 + -1 * 13523] : _0x953da5;
                    };
                } else
                    _0x26061 = _0x53fc92, _0x53fc92 = null;
            }
            continue;
        case '2':
            var _0x131abc = {
                'DGzPD': function (_0x53f891, _0x20d091) {
                    return _0x72d8d7['YzbMK'](_0x53f891, _0x20d091);
                },
                'GRKjS': function (_0x202847, _0x53ea7d) {
                    var _0x195668 = _0xa0e32a;
                    return _0x72d8d7[_0x195668(441)](_0x202847, _0x53ea7d);
                },
                'KeOwC': function (_0x16674f, _0x362b3d) {
                    var _0x55fcb3 = _0xa0e32a;
                    return _0x72d8d7[_0x55fcb3(442)](_0x16674f, _0x362b3d);
                },
                'SrSDM': _0x72d8d7[_0xa0e32a(443)],
                'IqmYT': _0xa0e32a(444),
                'Xrfss': function (_0x1cee2c, _0x4f7b97) {
                    var _0x2f227b = _0xa0e32a;
                    return _0x72d8d7[_0x2f227b(445)](_0x1cee2c, _0x4f7b97);
                },
                'uIRKC': function (_0x1b7b71, _0x5d9703) {
                    return _0x1b7b71 || _0x5d9703;
                }
            };
            continue;
        case '3':
            this[_0xa0e32a(398)][_0xa0e32a(410)](_0x3bd1ba);
            continue;
        case '4':
            var _0x841d73 = this, _0x3bd1ba = new Option(_0x232a65, _0x12cfac), _0x365ee2 = _0x3bd1ba[_0xa0e32a(387)](), _0xe76042 = _0x72d8d7[_0xa0e32a(446)](camelcase, _0x365ee2);
            continue;
        case '5':
            return this;
        case '6':
            this['on'](_0x365ee2, function (_0x430174) {
                var _0xed8dac = _0xa0e32a;
                if (_0x131abc[_0xed8dac(447)](null, _0x430174) && _0x53fc92)
                    _0x430174 = _0x53fc92(_0x430174, _0x131abc[_0xed8dac(448)](undefined, _0x841d73[_0xe76042]) ? _0x26061 : _0x841d73[_0xe76042]);
                if (_0x131abc[_0xed8dac(449)](_0x131abc[_0xed8dac(450)], typeof _0x841d73[_0xe76042]) || _0x131abc[_0xed8dac(451)] == typeof _0x841d73[_0xe76042])
                    _0x131abc['Xrfss'](null, _0x430174) ? _0x841d73[_0xe76042] = _0x3bd1ba['bool'] ? _0x131abc['uIRKC'](_0x26061, !![]) : ![] : _0x841d73[_0xe76042] = _0x430174;
                else
                    _0x131abc[_0xed8dac(447)](null, _0x430174) && (_0x841d73[_0xe76042] = _0x430174);
            });
            continue;
        }
        break;
    }
}, Command[_0x7dd31f(386)][_0x7dd31f(452)] = function (_0x561419) {
    var _0x332543 = _0x7dd31f, _0x51f40c = {
            'HQxTp': function (_0x4cca8f, _0xb01f5) {
                return _0x4cca8f === _0xb01f5;
            }
        };
    return this[_0x332543(399)] = _0x51f40c['HQxTp'](arguments[_0x332543(415)], -637 * 13 + 4797 + -134 * -26) || _0x561419, this;
}, Command[_0x7dd31f(386)][_0x7dd31f(453)] = function (_0x5d184c) {
    var _0x340d97 = _0x7dd31f, _0x1ec14d = {
            'rsEFt': _0x340d97(454),
            'bFHdH': function (_0x1a0e4e, _0x4868f9) {
                return _0x1a0e4e < _0x4868f9;
            },
            'Trgsl': function (_0x4ece4d, _0x46028f) {
                return _0x4ece4d != _0x46028f;
            },
            'asIxM': 'function'
        };
    if (this[_0x340d97(406)])
        this[_0x340d97(412)]();
    this['rawArgs'] = _0x5d184c, this[_0x340d97(395)] = this['_name'] || basename(_0x5d184c[-1 * -445 + -13 * 319 + 3703], _0x1ec14d[_0x340d97(455)]);
    this[_0x340d97(406)] && _0x1ec14d['bFHdH'](_0x5d184c['length'], 1022 + 5788 + -3 * 2269) && !this[_0x340d97(407)] && _0x5d184c[_0x340d97(410)](_0x340d97(456));
    var _0xf2f722 = this[_0x340d97(429)](this[_0x340d97(457)](_0x5d184c[_0x340d97(416)](-7659 + 7143 + 14 * 37))), _0x5dfecb = this[_0x340d97(426)] = _0xf2f722['args'], _0x239146 = this['parseArgs'](this[_0x340d97(426)], _0xf2f722[_0x340d97(428)]), _0x3c8b71 = _0x239146[_0x340d97(426)][-2982 + -8139 + 11121];
    if (this[_0x340d97(397)][_0x3c8b71] && _0x1ec14d[_0x340d97(458)](typeof this['_execs'][_0x3c8b71], _0x1ec14d[_0x340d97(459)]))
        return this[_0x340d97(460)](_0x5d184c, _0x5dfecb, _0xf2f722[_0x340d97(428)]);
    else {
        if (this[_0x340d97(407)])
            return _0x5dfecb['unshift'](_0x3c8b71 = this[_0x340d97(407)]), this[_0x340d97(460)](_0x5d184c, _0x5dfecb, _0xf2f722[_0x340d97(428)]);
    }
    return _0x239146;
}, Command[_0x7dd31f(386)]['executeSubCommand'] = function (_0x2120a8, _0x5259c4, _0x599cf8) {
    var _0x2d4363 = _0x7dd31f, _0x23ed40 = {
            'YqugU': '14|5|9|11|3|6|17|16|12|18|13|10|15|2|0|7|4|8|1',
            'cTgwE': function (_0x2b5f5a, _0x31ccad) {
                return _0x2b5f5a == _0x31ccad;
            },
            'EpWAX': _0x2d4363(461),
            'uWGJC': function (_0x5ed0eb, _0x2bd234) {
                return _0x5ed0eb !== _0x2bd234;
            },
            'vkKQv': _0x2d4363(462),
            'ZQCcJ': function (_0x3a818c, _0x5541df, _0xb7a8c2, _0x2a4826) {
                return _0x3a818c(_0x5541df, _0xb7a8c2, _0x2a4826);
            },
            'RLcOT': 'node',
            'HcsjH': function (_0x19d37c, _0x3fe07a, _0x2caa45, _0x885bf4) {
                return _0x19d37c(_0x3fe07a, _0x2caa45, _0x885bf4);
            },
            'GbnGL': function (_0x1d3d1b, _0xf142d3, _0x2b2b87, _0x28cd87) {
                return _0x1d3d1b(_0xf142d3, _0x2b2b87, _0x28cd87);
            },
            'xYZZI': 'inherit',
            'qeGqN': _0x2d4363(463),
            'dWyjA': function (_0x21a12f, _0x2d6002) {
                return _0x21a12f == _0x2d6002;
            },
            'RcxMv': function (_0x581b96, _0x520ce8) {
                return _0x581b96 !== _0x520ce8;
            },
            'lKdrp': function (_0x2a7177, _0x9da046) {
                return _0x2a7177(_0x9da046);
            },
            'tjwMs': _0x2d4363(464),
            'lZMst': function (_0x871ea4, _0x1d62f2) {
                return _0x871ea4 + _0x1d62f2;
            },
            'QeVhj': _0x2d4363(454),
            'mMBpH': function (_0x503df2, _0x52acb3) {
                return _0x503df2(_0x52acb3);
            },
            'gqbdP': function (_0x2c125a, _0x716a06) {
                return _0x2c125a(_0x716a06);
            },
            'gIdNG': function (_0x343596, _0x3787f0) {
                return _0x343596 + _0x3787f0;
            },
            'ilHaj': function (_0x2a7a1d, _0x2ba5ae) {
                return _0x2a7a1d + _0x2ba5ae;
            },
            'dItOQ': function (_0x239f4e, _0x396b8d, _0x2b1b2f) {
                return _0x239f4e(_0x396b8d, _0x2b1b2f);
            },
            'gKFiH': function (_0x45c8c0, _0x31f8dc) {
                return _0x45c8c0(_0x31f8dc);
            }
        }, _0x58183d = _0x23ed40['YqugU'][_0x2d4363(378)]('|'), _0x4cf000 = 1681 + 4437 + -19 * 322;
    while (!![]) {
        switch (_0x58183d[_0x4cf000++]) {
        case '0':
            var _0x4a0362;
            continue;
        case '1':
            this['runningCommand'] = _0x4a0362;
            continue;
        case '2':
            _0x5259c4 = _0x5259c4[_0x2d4363(416)](-8010 + -38 * -97 + -25 * -173);
            continue;
        case '3':
            _0x23ed40[_0x2d4363(465)](_0x2d4363(466), _0x5259c4[-1970 + -1779 * -3 + -91 * 37]) && (_0x5259c4[3 * -301 + -93 * -73 + -27 * 218] = _0x5259c4[14 * -421 + -8603 + 14498], _0x5259c4[4 * 1821 + -4951 * -1 + -6117 * 2] = _0x2d4363(456));
            continue;
        case '4':
            _0x4a0362['on'](_0x23ed40[_0x2d4363(467)], process[_0x2d4363(468)][_0x2d4363(469)](process));
            continue;
        case '5':
            _0x5259c4 = _0x5259c4[_0x2d4363(470)](_0x599cf8);
            continue;
        case '6':
            var _0x55e631 = _0x2120a8[4 * -794 + 2526 + -217 * -3];
            continue;
        case '7':
            _0x23ed40['uWGJC'](process['platform'], _0x23ed40['vkKQv']) ? _0x1985c6 ? (_0x5259c4[_0x2d4363(471)](_0x47368b), _0x5259c4 = (process['execArgv'] || [])[_0x2d4363(470)](_0x5259c4), _0x4a0362 = _0x23ed40[_0x2d4363(472)](spawn, _0x23ed40[_0x2d4363(473)], _0x5259c4, {
                'stdio': _0x2d4363(474),
                'customFds': [
                    -108 * -50 + -4047 + -1353,
                    4095 + -4 * 59 + -2 * 1929,
                    2978 + -579 * 5 + -81
                ]
            })) : _0x4a0362 = _0x23ed40[_0x2d4363(475)](spawn, _0x3c01f9, _0x5259c4, {
                'stdio': _0x2d4363(474),
                'customFds': [
                    4139 + -6434 + 2295,
                    2845 * -1 + -1369 + -3 * -1405,
                    8029 + 2782 * 2 + -13591 * 1
                ]
            }) : (_0x5259c4['unshift'](_0x47368b), _0x4a0362 = _0x23ed40[_0x2d4363(476)](spawn, process[_0x2d4363(477)], _0x5259c4, { 'stdio': _0x23ed40[_0x2d4363(478)] }));
            continue;
        case '8':
            _0x4a0362['on'](_0x23ed40[_0x2d4363(479)], function (_0x2daacd) {
                var _0x283ada = _0x2d4363;
                if (_0x5d63e1[_0x283ada(480)](_0x2daacd[_0x283ada(481)], _0x283ada(482)))
                    console[_0x283ada(463)](_0x5d63e1[_0x283ada(483)], _0x3c01f9);
                else
                    _0x5d63e1[_0x283ada(480)](_0x2daacd[_0x283ada(481)], _0x5d63e1[_0x283ada(484)]) && console[_0x283ada(463)](_0x5d63e1['GvSac'], _0x3c01f9);
                process[_0x283ada(468)](-1313 + 2311 + 1 * -997);
            });
            continue;
        case '9':
            if (!_0x5259c4[_0x2d4363(415)])
                this[_0x2d4363(466)]();
            continue;
        case '10':
            var _0x1985c6 = ![];
            continue;
        case '11':
            if (_0x2d4363(466) == _0x5259c4[-6388 + -5149 + 11537] && _0x23ed40[_0x2d4363(485)](-2388 + -7613 * -1 + -1 * 5224, _0x5259c4['length']))
                this[_0x2d4363(466)]();
            continue;
        case '12':
            _0x23ed40[_0x2d4363(486)](_0x485960, _0x55e631) && _0x485960[_0x2d4363(487)](8062 + 2191 + -10253) !== '/' && (_0x485960 = path[_0x2d4363(488)](_0x23ed40[_0x2d4363(489)](dirname, _0x55e631), _0x485960));
            continue;
        case '13':
            var _0x47368b = path[_0x2d4363(488)](_0x425bdd, _0x3c01f9);
            continue;
        case '14':
            var _0x5d63e1 = {
                'ErvTI': function (_0x192942, _0x565199) {
                    return _0x23ed40['dWyjA'](_0x192942, _0x565199);
                },
                'OZBzt': _0x23ed40[_0x2d4363(490)],
                'uKJih': _0x2d4363(491),
                'GvSac': '\n  %s(1) not executable. try chmod or run with root\n'
            };
            continue;
        case '15':
            if (_0x23ed40['lKdrp'](exists, _0x23ed40['lZMst'](_0x47368b, _0x23ed40['QeVhj'])))
                _0x3c01f9 = _0x47368b + _0x23ed40[_0x2d4363(492)], _0x1985c6 = !![];
            else
                _0x23ed40[_0x2d4363(493)](exists, _0x47368b) && (_0x3c01f9 = _0x47368b);
            continue;
        case '16':
            var _0x425bdd, _0x485960 = _0x23ed40[_0x2d4363(494)](readlink, _0x55e631);
            continue;
        case '17':
            var _0x3c01f9 = _0x23ed40[_0x2d4363(495)](_0x23ed40['ilHaj'](_0x23ed40[_0x2d4363(496)](basename, _0x55e631, _0x23ed40[_0x2d4363(492)]), '-'), _0x5259c4[2730 + 2020 + 19 * -250]);
            continue;
        case '18':
            _0x425bdd = _0x23ed40[_0x2d4363(497)](dirname, _0x485960);
            continue;
        }
        break;
    }
}, Command['prototype'][_0x7dd31f(457)] = function (_0x5b86e8) {
    var _0x5c1db4 = _0x7dd31f, _0x3e2fd7 = {
            'CGHyV': function (_0x2155c3, _0x4de1cb) {
                return _0x2155c3 > _0x4de1cb;
            },
            'OUhzU': function (_0x4ff425, _0x1df979) {
                return _0x4ff425 - _0x1df979;
            },
            'ziIWK': function (_0x457d36, _0x22a0b8) {
                return _0x457d36 === _0x22a0b8;
            },
            'aolrY': function (_0x13080f, _0x34367a) {
                return _0x13080f == _0x34367a;
            },
            'JZOgr': function (_0x2e2d90, _0x2fb0c6) {
                return _0x2e2d90 != _0x2fb0c6;
            },
            'IKOQT': function (_0x5ca38a, _0x1990eb) {
                return _0x5ca38a + _0x1990eb;
            }
        }, _0x4ff738 = [], _0x33e3cb, _0x2b9423, _0x4bfcb9;
    for (var _0x116c37 = -5391 + -8547 + 13938, _0x38f71d = _0x5b86e8[_0x5c1db4(415)]; _0x116c37 < _0x38f71d; ++_0x116c37) {
        _0x33e3cb = _0x5b86e8[_0x116c37];
        _0x3e2fd7[_0x5c1db4(498)](_0x116c37, -1 * -5106 + -2 * 3594 + 2 * 1041) && (_0x2b9423 = this[_0x5c1db4(499)](_0x5b86e8[_0x3e2fd7[_0x5c1db4(500)](_0x116c37, 3547 + 7439 + 1 * -10985)]));
        if (_0x3e2fd7[_0x5c1db4(501)](_0x33e3cb, '--')) {
            _0x4ff738 = _0x4ff738['concat'](_0x5b86e8[_0x5c1db4(416)](_0x116c37));
            break;
        } else {
            if (_0x2b9423 && _0x2b9423[_0x5c1db4(380)])
                _0x4ff738[_0x5c1db4(410)](_0x33e3cb);
            else {
                if (_0x3e2fd7[_0x5c1db4(498)](_0x33e3cb[_0x5c1db4(415)], -8255 + 1 * -6377 + 14633) && _0x3e2fd7['aolrY']('-', _0x33e3cb[-8145 + 2 * -1814 + 11773]) && _0x3e2fd7[_0x5c1db4(502)]('-', _0x33e3cb[7905 * 1 + -689 * -11 + -15483]))
                    _0x33e3cb[_0x5c1db4(416)](-980 + 2911 * -3 + 9714)[_0x5c1db4(378)]('')[_0x5c1db4(419)](function (_0x45df61) {
                        _0x4ff738['push']('-' + _0x45df61);
                    });
                else
                    /^--/[_0x5c1db4(503)](_0x33e3cb) && ~(_0x4bfcb9 = _0x33e3cb[_0x5c1db4(385)]('=')) ? _0x4ff738[_0x5c1db4(410)](_0x33e3cb[_0x5c1db4(416)](9373 * 1 + -1924 + 3 * -2483, _0x4bfcb9), _0x33e3cb[_0x5c1db4(416)](_0x3e2fd7[_0x5c1db4(504)](_0x4bfcb9, 7412 + -436 * -3 + -8719 * 1))) : _0x4ff738[_0x5c1db4(410)](_0x33e3cb);
            }
        }
    }
    return _0x4ff738;
}, Command[_0x7dd31f(386)][_0x7dd31f(505)] = function (_0x3d8857, _0x2bd876) {
    var _0x27c54e = _0x7dd31f, _0x1a5a17 = {
            'yNvpo': function (_0xc35a3c, _0xc5591f, _0x56d8c1) {
                return _0xc35a3c(_0xc5591f, _0x56d8c1);
            }
        }, _0x5da3ca;
    return _0x3d8857[_0x27c54e(415)] ? (_0x5da3ca = _0x3d8857[1 * -9832 + -479 * -3 + 8395], this[_0x27c54e(506)](_0x5da3ca)[_0x27c54e(415)] ? this[_0x27c54e(507)](_0x3d8857[_0x27c54e(382)](), _0x3d8857, _0x2bd876) : this['emit']('*', _0x3d8857)) : (_0x1a5a17[_0x27c54e(508)](outputHelpIfNecessary, this, _0x2bd876), _0x2bd876[_0x27c54e(415)] > 9668 + 37 * -263 + 63 && this['unknownOption'](_0x2bd876[-1183 * -2 + 962 * 2 + -4290])), this;
}, Command[_0x7dd31f(386)]['optionFor'] = function (_0x525c48) {
    var _0x1dc47f = _0x7dd31f, _0x3e7b41 = {
            'JypRr': function (_0x316bbe, _0xa7483e) {
                return _0x316bbe < _0xa7483e;
            }
        };
    for (var _0x503a47 = -1 * 524 + 65 * 126 + -7666, _0x3b12bb = this[_0x1dc47f(398)][_0x1dc47f(415)]; _0x3e7b41[_0x1dc47f(509)](_0x503a47, _0x3b12bb); ++_0x503a47) {
        if (this['options'][_0x503a47]['is'](_0x525c48))
            return this['options'][_0x503a47];
    }
}, Command['prototype']['parseOptions'] = function (_0x1f25cb) {
    var _0x951425 = _0x7dd31f, _0xef89e6 = {
            'PKnzI': function (_0x4a1622, _0x542ee7) {
                return _0x4a1622 == _0x542ee7;
            },
            'irwiV': function (_0x4d35c2, _0x2fdcfa) {
                return _0x4d35c2 == _0x2fdcfa;
            },
            'aXouB': function (_0x58cca3, _0x28805e) {
                return _0x58cca3 != _0x28805e;
            },
            'jLAkL': function (_0x572514, _0x186803) {
                return _0x572514 > _0x186803;
            },
            'SaaCE': function (_0x4e6ca7, _0x4e2a70) {
                return _0x4e6ca7 + _0x4e2a70;
            },
            'IffYx': function (_0x24c960, _0x1b052a) {
                return _0x24c960 != _0x1b052a;
            },
            'ycOhL': function (_0x3236fc, _0x391e9f) {
                return _0x3236fc + _0x391e9f;
            }
        }, _0x2b5350 = [], _0x3918ac = _0x1f25cb[_0x951425(415)], _0x414846, _0x50b147, _0x3eb7af, _0x37a21e = [];
    for (var _0x566e63 = -39 * -2 + -5263 + 5185; _0x566e63 < _0x3918ac; ++_0x566e63) {
        _0x3eb7af = _0x1f25cb[_0x566e63];
        if (_0xef89e6[_0x951425(510)]('--', _0x3eb7af)) {
            _0x414846 = !![];
            continue;
        }
        if (_0x414846) {
            _0x2b5350[_0x951425(410)](_0x3eb7af);
            continue;
        }
        _0x50b147 = this[_0x951425(499)](_0x3eb7af);
        if (_0x50b147) {
            if (_0x50b147[_0x951425(380)]) {
                _0x3eb7af = _0x1f25cb[++_0x566e63];
                if (_0xef89e6[_0x951425(511)](null, _0x3eb7af))
                    return this[_0x951425(512)](_0x50b147);
                this['emit'](_0x50b147[_0x951425(387)](), _0x3eb7af);
            } else
                _0x50b147['optional'] ? (_0x3eb7af = _0x1f25cb[_0x566e63 + (1 * -4 + -561 * -1 + 1 * -556)], _0xef89e6[_0x951425(511)](null, _0x3eb7af) || _0xef89e6[_0x951425(511)]('-', _0x3eb7af[1 * -8643 + 650 * -2 + 61 * 163]) && _0xef89e6[_0x951425(513)]('-', _0x3eb7af) ? _0x3eb7af = null : ++_0x566e63, this['emit'](_0x50b147['name'](), _0x3eb7af)) : this['emit'](_0x50b147[_0x951425(387)]());
            continue;
        }
        if (_0xef89e6[_0x951425(514)](_0x3eb7af[_0x951425(415)], 160 * -53 + 5694 + 2787) && '-' == _0x3eb7af[2025 + 4 * 2424 + -11721]) {
            _0x37a21e[_0x951425(410)](_0x3eb7af);
            _0x1f25cb[_0xef89e6[_0x951425(515)](_0x566e63, -35 * 49 + -1 * 3713 + 5429)] && _0xef89e6['IffYx']('-', _0x1f25cb[_0xef89e6[_0x951425(516)](_0x566e63, 5559 + -3785 + -1773)][-26 * 109 + -23 * 346 + 10792]) && _0x37a21e['push'](_0x1f25cb[++_0x566e63]);
            continue;
        }
        _0x2b5350[_0x951425(410)](_0x3eb7af);
    }
    return {
        'args': _0x2b5350,
        'unknown': _0x37a21e
    };
}, Command[_0x7dd31f(386)][_0x7dd31f(517)] = function () {
    var _0x1a0da7 = _0x7dd31f, _0x4e590d = {
            'ZpCrl': function (_0x15fc49, _0x22fc22) {
                return _0x15fc49 < _0x22fc22;
            },
            'LHIsk': function (_0x2a0e44, _0x29874e) {
                return _0x2a0e44(_0x29874e);
            },
            'akwam': function (_0x306a60, _0xa1a6a1) {
                return _0x306a60 === _0xa1a6a1;
            },
            'qvmpj': _0x1a0da7(518)
        }, _0x4cd9ef = {}, _0x2ac2f1 = this[_0x1a0da7(398)][_0x1a0da7(415)];
    for (var _0xb1592e = 1 * -1208 + -4221 + 5429; _0x4e590d[_0x1a0da7(519)](_0xb1592e, _0x2ac2f1); _0xb1592e++) {
        var _0x1e301e = _0x4e590d['LHIsk'](camelcase, this[_0x1a0da7(398)][_0xb1592e]['name']());
        _0x4cd9ef[_0x1e301e] = _0x4e590d[_0x1a0da7(520)](_0x1e301e, _0x4e590d[_0x1a0da7(521)]) ? this['_version'] : this[_0x1e301e];
    }
    return _0x4cd9ef;
}, Command[_0x7dd31f(386)][_0x7dd31f(421)] = function (_0x1efeba) {
    var _0x228ead = _0x7dd31f, _0x5a0293 = { 'JnIZM': _0x228ead(522) };
    console[_0x228ead(463)](), console[_0x228ead(463)](_0x5a0293[_0x228ead(523)], _0x1efeba), console[_0x228ead(463)](), process[_0x228ead(468)](6979 + 3217 + -10195 * 1);
}, Command[_0x7dd31f(386)][_0x7dd31f(512)] = function (_0x2ba60f, _0x10ee20) {
    var _0x4f3827 = _0x7dd31f, _0x599469 = {
            'NRjHr': _0x4f3827(524),
            'npwYY': _0x4f3827(525)
        };
    console[_0x4f3827(463)](), _0x10ee20 ? console[_0x4f3827(463)](_0x599469[_0x4f3827(526)], _0x2ba60f[_0x4f3827(383)], _0x10ee20) : console[_0x4f3827(463)](_0x599469[_0x4f3827(527)], _0x2ba60f[_0x4f3827(383)]), console[_0x4f3827(463)](), process[_0x4f3827(468)](931 * -10 + 61 * -51 + -12422 * -1);
}, Command['prototype'][_0x7dd31f(432)] = function (_0x48a665) {
    var _0x443e8e = _0x7dd31f, _0x1d63cd = {
            'HHfUy': _0x443e8e(528),
            'KlMvQ': _0x443e8e(529)
        }, _0x3e7152 = _0x1d63cd['HHfUy'][_0x443e8e(378)]('|'), _0x32f770 = -1 * -3077 + 215 * 17 + -6732;
    while (!![]) {
        switch (_0x3e7152[_0x32f770++]) {
        case '0':
            process[_0x443e8e(468)](-1 * -2103 + -6579 + 4477);
            continue;
        case '1':
            console['error']();
            continue;
        case '2':
            console[_0x443e8e(463)]();
            continue;
        case '3':
            if (this[_0x443e8e(399)])
                return;
            continue;
        case '4':
            console[_0x443e8e(463)](_0x1d63cd[_0x443e8e(530)], _0x48a665);
            continue;
        }
        break;
    }
}, Command[_0x7dd31f(386)]['variadicArgNotLast'] = function (_0x42baa8) {
    var _0xe63433 = _0x7dd31f;
    console[_0xe63433(463)](), console[_0xe63433(463)](_0xe63433(531), _0x42baa8), console[_0xe63433(463)](), process[_0xe63433(468)](-17 * 509 + 1 * -7409 + 16063);
}, Command['prototype'][_0x7dd31f(518)] = function (_0x351ff2, _0x354d92) {
    var _0x4db660 = _0x7dd31f, _0x56cd7b = {
            'YZMQQ': _0x4db660(532),
            'Pnhnh': function (_0x209346, _0x33ae97) {
                return _0x209346 + _0x33ae97;
            },
            'GCQvQ': function (_0x31a8aa, _0x37041e) {
                return _0x31a8aa || _0x37041e;
            },
            'EbbqB': _0x4db660(533),
            'cOwnU': _0x4db660(518),
            'UINOx': _0x4db660(534)
        }, _0x35f5af = _0x56cd7b[_0x4db660(535)][_0x4db660(378)]('|'), _0x4070c9 = -3068 + -3 * -1942 + -2758;
    while (!![]) {
        switch (_0x35f5af[_0x4070c9++]) {
        case '0':
            return this;
        case '1':
            this[_0x4db660(536)] = _0x351ff2;
            continue;
        case '2':
            var _0x2a4cb7 = {
                'fIakf': function (_0xff51ac, _0x5b0855) {
                    return _0x56cd7b['Pnhnh'](_0xff51ac, _0x5b0855);
                }
            };
            continue;
        case '3':
            _0x354d92 = _0x56cd7b[_0x4db660(537)](_0x354d92, _0x56cd7b[_0x4db660(538)]);
            continue;
        case '4':
            this['on'](_0x56cd7b[_0x4db660(539)], function () {
                var _0xf72636 = _0x4db660;
                process['stdout'][_0xf72636(540)](_0x2a4cb7['fIakf'](_0x351ff2, '\n')), process[_0xf72636(468)](-319 + 6404 * -1 + -81 * -83);
            });
            continue;
        case '5':
            if (492 + 35 * 135 + -5217 == arguments[_0x4db660(415)])
                return this[_0x4db660(536)];
            continue;
        case '6':
            this[_0x4db660(435)](_0x354d92, _0x56cd7b[_0x4db660(541)]);
            continue;
        }
        break;
    }
}, Command[_0x7dd31f(386)][_0x7dd31f(542)] = function (_0x5668b2) {
    var _0x2efadd = _0x7dd31f;
    if (-782 + 1094 + -312 === arguments[_0x2efadd(415)])
        return this[_0x2efadd(543)];
    return this[_0x2efadd(543)] = _0x5668b2, this;
}, Command['prototype'][_0x7dd31f(544)] = function (_0x391bb2) {
    var _0x3ea9a8 = _0x7dd31f, _0x3e50ad = {
            'Ocmqb': function (_0x53b890, _0x3c21fb) {
                return _0x53b890 == _0x3c21fb;
            }
        };
    if (_0x3e50ad[_0x3ea9a8(545)](-9264 + 1768 + 3748 * 2, arguments[_0x3ea9a8(415)]))
        return this[_0x3ea9a8(434)];
    return this[_0x3ea9a8(434)] = _0x391bb2, this;
}, Command['prototype']['usage'] = function (_0x5ccc9f) {
    var _0x2db4de = _0x7dd31f, _0x76ecfc = {
            'xqZzY': function (_0x4b2848, _0x364a8c) {
                return _0x4b2848(_0x364a8c);
            },
            'APVvy': function (_0x27d468, _0x143bb0) {
                return _0x27d468 + _0x143bb0;
            },
            'KBKnx': _0x2db4de(546),
            'eNgTs': ' [command]',
            'FFxzu': function (_0xa8ecf2, _0x2ebcdf) {
                return _0xa8ecf2 + _0x2ebcdf;
            }
        }, _0x34deb0 = _0x2db4de(547)[_0x2db4de(378)]('|'), _0x353325 = 24 * -103 + 4373 + 1901 * -1;
    while (!![]) {
        switch (_0x34deb0[_0x353325++]) {
        case '0':
            var _0x3473df = {
                'gqaRD': function (_0x11eb8a, _0x25b471) {
                    return _0x76ecfc['xqZzY'](_0x11eb8a, _0x25b471);
                }
            };
            continue;
        case '1':
            this['_usage'] = _0x5ccc9f;
            continue;
        case '2':
            var _0x23d002 = this[_0x2db4de(394)][_0x2db4de(548)](function (_0x10a3d0) {
                var _0x1482eb = _0x2db4de;
                return _0x3473df[_0x1482eb(549)](humanReadableArgName, _0x10a3d0);
            });
            continue;
        case '3':
            return this;
        case '4':
            if (4838 + -1213 * 2 + -2412 == arguments[_0x2db4de(415)])
                return this[_0x2db4de(550)] || _0xc64eb4;
            continue;
        case '5':
            var _0xc64eb4 = _0x76ecfc[_0x2db4de(551)](_0x76ecfc[_0x2db4de(552)], this[_0x2db4de(409)][_0x2db4de(415)] ? _0x76ecfc['eNgTs'] : '') + (this[_0x2db4de(394)][_0x2db4de(415)] ? _0x76ecfc['FFxzu'](' ', _0x23d002[_0x2db4de(488)](' ')) : '');
            continue;
        }
        break;
    }
}, Command['prototype'][_0x7dd31f(387)] = function () {
    return this['_name'];
}, Command['prototype'][_0x7dd31f(553)] = function () {
    var _0xcd5cd6 = _0x7dd31f;
    return this[_0xcd5cd6(398)][_0xcd5cd6(554)](function (_0x51f711, _0x334533) {
        var _0x1b7ac6 = _0xcd5cd6;
        return Math[_0x1b7ac6(555)](_0x51f711, _0x334533[_0x1b7ac6(383)]['length']);
    }, -24 * 157 + 71 * -71 + -8809 * -1);
}, Command[_0x7dd31f(386)][_0x7dd31f(556)] = function () {
    var _0x5a4a65 = _0x7dd31f, _0x553b3a = {
            'TCNXW': function (_0x217232, _0xb1fcaf) {
                return _0x217232 + _0xb1fcaf;
            },
            'PYvpl': function (_0x161c7d, _0x2401ac, _0xc0f761) {
                return _0x161c7d(_0x2401ac, _0xc0f761);
            },
            'efULc': function (_0x3046e1, _0x219986, _0x9c569) {
                return _0x3046e1(_0x219986, _0x9c569);
            },
            'KgMXn': _0x5a4a65(557),
            'LWhZQ': _0x5a4a65(558)
        }, _0x281b6f = this[_0x5a4a65(553)]();
    return [_0x553b3a['TCNXW'](_0x553b3a['TCNXW'](_0x553b3a['efULc'](pad, _0x553b3a[_0x5a4a65(559)], _0x281b6f), '  '), _0x553b3a[_0x5a4a65(560)])][_0x5a4a65(470)](this[_0x5a4a65(398)][_0x5a4a65(548)](function (_0x1897c8) {
        var _0x3495f9 = _0x5a4a65;
        return _0x553b3a[_0x3495f9(561)](_0x553b3a[_0x3495f9(561)](_0x553b3a[_0x3495f9(562)](pad, _0x1897c8[_0x3495f9(383)], _0x281b6f), '  '), _0x1897c8[_0x3495f9(542)]);
    }))[_0x5a4a65(488)]('\n');
}, Command['prototype']['commandHelp'] = function () {
    var _0x92825a = _0x7dd31f, _0x17400c = {
            'kxdxg': _0x92825a(563),
            'OCTGS': function (_0x45d134, _0x13fc6a) {
                return _0x45d134 + _0x13fc6a;
            },
            'tOMFI': function (_0x37fe9a, _0x3c91d8) {
                return _0x37fe9a + _0x3c91d8;
            },
            'WOwfj': _0x92825a(564),
            'IisJg': _0x92825a(565)
        }, _0x2420e1 = _0x17400c[_0x92825a(566)][_0x92825a(378)]('|'), _0x10565a = 1220 + -3 * -487 + -2681;
    while (!![]) {
        switch (_0x2420e1[_0x10565a++]) {
        case '0':
            var _0x270542 = {
                'PDaLl': function (_0xff893e, _0x5516af) {
                    return _0xff893e(_0x5516af);
                },
                'dWteh': function (_0x24f1c1, _0x1fb93b) {
                    var _0x549a6e = _0x92825a;
                    return _0x17400c[_0x549a6e(567)](_0x24f1c1, _0x1fb93b);
                },
                'xFrZx': function (_0x59921a, _0x50af0c) {
                    return _0x17400c['tOMFI'](_0x59921a, _0x50af0c);
                },
                'HWzLD': function (_0x1fc09c, _0x2f6cb1) {
                    var _0x282c16 = _0x92825a;
                    return _0x17400c[_0x282c16(568)](_0x1fc09c, _0x2f6cb1);
                },
                'HwDgv': _0x17400c[_0x92825a(569)],
                'Rncze': function (_0x244160, _0x46c388, _0x495abb) {
                    return _0x244160(_0x46c388, _0x495abb);
                }
            };
            continue;
        case '1':
            return [
                '',
                _0x17400c[_0x92825a(570)],
                '',
                _0x469275['map'](function (_0x2b28cf) {
                    var _0x102105 = _0x92825a, _0x55e939 = _0x2b28cf[4 * -1213 + -485 * -11 + -482] ? _0x270542['HWzLD']('  ', _0x2b28cf[-9903 + 1433 * -2 + 12770]) : '';
                    return _0x270542[_0x102105(571)](_0x270542[_0x102105(572)](pad, _0x2b28cf[1 * 2161 + -8486 * -1 + -1183 * 9], _0x1155f6), _0x55e939);
                })['join']('\n')[_0x92825a(389)](/^/gm, _0x92825a(573)),
                ''
            ]['join']('\n');
        case '2':
            var _0x1155f6 = _0x469275['reduce'](function (_0xe8e136, _0x192239) {
                var _0x4e1d13 = _0x92825a;
                return Math[_0x4e1d13(555)](_0xe8e136, _0x192239[-5321 + 8611 + -3290][_0x4e1d13(415)]);
            }, 71 * -25 + -2998 + -4773 * -1);
            continue;
        case '3':
            var _0x469275 = this[_0x92825a(409)]['filter'](function (_0x236450) {
                var _0xf8fb16 = _0x92825a;
                return !_0x236450[_0xf8fb16(408)];
            })[_0x92825a(548)](function (_0x39a02d) {
                var _0x54dbaa = _0x92825a, _0x1972dc = {
                        'MtjuV': function (_0x51e092, _0x3dd5d5) {
                            return _0x270542['PDaLl'](_0x51e092, _0x3dd5d5);
                        }
                    }, _0x4f39f7 = _0x39a02d[_0x54dbaa(394)]['map'](function (_0x3eae10) {
                        var _0x1274cc = _0x54dbaa;
                        return _0x1972dc[_0x1274cc(574)](humanReadableArgName, _0x3eae10);
                    })['join'](' ');
                return [
                    _0x270542[_0x54dbaa(575)](_0x270542['dWteh'](_0x270542[_0x54dbaa(576)](_0x39a02d[_0x54dbaa(395)], _0x39a02d[_0x54dbaa(434)] ? _0x270542[_0x54dbaa(571)]('|', _0x39a02d[_0x54dbaa(434)]) : ''), _0x39a02d[_0x54dbaa(398)][_0x54dbaa(415)] ? _0x270542[_0x54dbaa(577)] : ''), ' ') + _0x4f39f7,
                    _0x39a02d[_0x54dbaa(542)]()
                ];
            });
            continue;
        case '4':
            if (!this[_0x92825a(409)][_0x92825a(415)])
                return '';
            continue;
        }
        break;
    }
}, Command[_0x7dd31f(386)][_0x7dd31f(578)] = function () {
    var _0x51e949 = _0x7dd31f, _0x4e5b52 = {
            'LcTQp': _0x51e949(579),
            'KrhgE': _0x51e949(580),
            'XGtuM': function (_0x4d3f6e, _0x254630) {
                return _0x4d3f6e + _0x254630;
            },
            'Alnwa': function (_0x36226e, _0x5df04c) {
                return _0x36226e + _0x5df04c;
            },
            'eTDAb': function (_0xfa3155, _0x3fc76c) {
                return _0xfa3155 + _0x3fc76c;
            },
            'bIBzs': function (_0x5c1260, _0x5c73a5) {
                return _0x5c1260 + _0x5c73a5;
            },
            'dlvHY': _0x51e949(581)
        }, _0x412e0c = _0x4e5b52[_0x51e949(582)][_0x51e949(378)]('|'), _0xf655b7 = -1 * 921 + 8939 + 211 * -38;
    while (!![]) {
        switch (_0x412e0c[_0xf655b7++]) {
        case '0':
            return _0x1759cd[_0x51e949(470)](_0x31c31d)['concat'](_0x5ce384)['concat'](_0x9153a1)[_0x51e949(488)]('\n');
        case '1':
            var _0x9153a1 = [
                _0x4e5b52[_0x51e949(583)],
                '',
                _0x4e5b52[_0x51e949(584)]('', this['optionHelp']()['replace'](/^/gm, _0x51e949(573))),
                '',
                ''
            ];
            continue;
        case '2':
            var _0x110662 = this[_0x51e949(585)]();
            continue;
        case '3':
            var _0x3fc49c = this['_name'];
            continue;
        case '4':
            var _0x5ce384 = [];
            continue;
        case '5':
            var _0x31c31d = [];
            continue;
        case '6':
            this[_0x51e949(543)] && (_0x5ce384 = [
                _0x4e5b52[_0x51e949(584)]('  ', this[_0x51e949(543)]),
                ''
            ]);
            continue;
        case '7':
            this[_0x51e949(434)] && (_0x3fc49c = _0x4e5b52[_0x51e949(586)](_0x4e5b52[_0x51e949(586)](_0x3fc49c, '|'), this[_0x51e949(434)]));
            continue;
        case '8':
            var _0x1759cd = [
                '',
                _0x4e5b52[_0x51e949(587)](_0x4e5b52['bIBzs'](_0x4e5b52['bIBzs'](_0x4e5b52[_0x51e949(588)], _0x3fc49c), ' '), this[_0x51e949(589)]()),
                ''
            ];
            continue;
        case '9':
            if (_0x110662)
                _0x31c31d = [_0x110662];
            continue;
        }
        break;
    }
}, Command[_0x7dd31f(386)][_0x7dd31f(590)] = function (_0x538a19) {
    var _0x1aa453 = _0x7dd31f, _0x3d6a0f = {
            'xEJLo': function (_0x5a062c, _0x4d67d1) {
                return _0x5a062c(_0x4d67d1);
            },
            'CLKqf': '--help'
        };
    !_0x538a19 && (_0x538a19 = function (_0x3819af) {
        return _0x3819af;
    }), process['stdout']['write'](_0x3d6a0f['xEJLo'](_0x538a19, this[_0x1aa453(578)]())), this[_0x1aa453(507)](_0x3d6a0f[_0x1aa453(591)]);
}, Command[_0x7dd31f(386)]['help'] = function (_0x252bf9) {
    var _0x53c82a = _0x7dd31f;
    this[_0x53c82a(590)](_0x252bf9), process[_0x53c82a(468)]();
};
function camelcase(_0x1f5f82) {
    var _0x5b7bf9 = _0x7dd31f, _0x1be2a9 = {
            'PvXjW': function (_0x6aa9d5, _0x393048) {
                return _0x6aa9d5 + _0x393048;
            }
        };
    return _0x1f5f82['split']('-')[_0x5b7bf9(554)](function (_0x2ddff1, _0x2d86aa) {
        var _0x297e98 = _0x5b7bf9;
        return _0x1be2a9[_0x297e98(592)](_0x2ddff1, _0x2d86aa[-6939 * 1 + 2969 + -5 * -794][_0x297e98(593)]()) + _0x2d86aa['slice'](-1203 + -6314 * 1 + -42 * -179);
    });
}
function pad(_0x326d62, _0x1033a2) {
    var _0xfb13be = _0x7dd31f, _0x3d3c10 = {
            'blgXz': function (_0x512cdf, _0x269c7e) {
                return _0x512cdf - _0x269c7e;
            },
            'hRtno': function (_0x457576, _0xebaf26) {
                return _0x457576 + _0xebaf26;
            },
            'nyEnO': function (_0x393bdb, _0xb747f9) {
                return _0x393bdb(_0xb747f9);
            }
        }, _0x56df19 = Math['max'](-8125 + 5123 + 3002, _0x3d3c10['blgXz'](_0x1033a2, _0x326d62[_0xfb13be(415)]));
    return _0x3d3c10[_0xfb13be(594)](_0x326d62, _0x3d3c10['nyEnO'](Array, _0x3d3c10['hRtno'](_0x56df19, 5123 + 29 * 58 + -6804))[_0xfb13be(488)](' '));
}
function outputHelpIfNecessary(_0x42a3df, _0x52bc2b) {
    var _0x2f3e05 = _0x7dd31f, _0x98c517 = {
            'iydqt': function (_0x4a0045, _0x23de85) {
                return _0x4a0045 == _0x23de85;
            },
            'RkyuK': _0x2f3e05(456)
        };
    _0x52bc2b = _0x52bc2b || [];
    for (var _0x2f4895 = -125 * 10 + 13 * 23 + 951; _0x2f4895 < _0x52bc2b[_0x2f3e05(415)]; _0x2f4895++) {
        (_0x98c517[_0x2f3e05(595)](_0x52bc2b[_0x2f4895], _0x98c517['RkyuK']) || _0x52bc2b[_0x2f4895] == '-h') && (_0x42a3df['outputHelp'](), process[_0x2f3e05(468)](7673 * 1 + -17 * 270 + 3083 * -1));
    }
}
function humanReadableArgName(_0x7603da) {
    var _0x4a5a34 = _0x7dd31f, _0x424c06 = {
            'exWhs': function (_0x5640a0, _0x128526) {
                return _0x5640a0 + _0x128526;
            },
            'BiDrz': function (_0x2d0653, _0x1e2355) {
                return _0x2d0653 === _0x1e2355;
            },
            'jMFvS': _0x4a5a34(596)
        }, _0x59ea23 = _0x424c06[_0x4a5a34(597)](_0x7603da['name'], _0x424c06[_0x4a5a34(598)](_0x7603da[_0x4a5a34(422)], !![]) ? _0x424c06['jMFvS'] : '');
    return _0x7603da[_0x4a5a34(380)] ? _0x424c06['exWhs'](_0x424c06['exWhs']('<', _0x59ea23), '>') : _0x424c06[_0x4a5a34(597)]('[', _0x59ea23) + ']';
}
function exists(_0x1e9fac) {
    var _0x50097f = _0x7dd31f;
    try {
        if (fs[_0x50097f(599)](_0x1e9fac)[_0x50097f(600)]())
            return !![];
    } catch (_0xd73612) {
        return ![];
    }
}