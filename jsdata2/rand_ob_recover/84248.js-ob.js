var EventEmitter = require(_0x116c8f(305))[_0x116c8f(306)], spawn = require('child_process')[_0x116c8f(307)], readlink = require('graceful-readlink')[_0x116c8f(308)], path = require(_0x116c8f(309)), dirname = path[_0x116c8f(310)], basename = path[_0x116c8f(311)], fs = require('fs');
function _0x8cfd(_0xd7d2c8, _0x4f095d) {
    return _0x8cfd = function (_0x5e1e7a, _0x18f8c5) {
        _0x5e1e7a = _0x5e1e7a - (-3214 * -2 + -3 * 1009 + 1 * -3106);
        var _0x5ce8ce = _0x589c[_0x5e1e7a];
        return _0x5ce8ce;
    }, _0x8cfd(_0xd7d2c8, _0x4f095d);
}
exports = module[_0x116c8f(312)] = new Command(), exports[_0x116c8f(313)] = Command, exports[_0x116c8f(314)] = Option;
function Option(_0x20a880, _0xcf3516) {
    var _0x55886e = _0x116c8f, _0x285a6f = { 'rVKoX': _0x55886e(315) };
    this[_0x55886e(316)] = _0x20a880, this[_0x55886e(317)] = ~_0x20a880[_0x55886e(318)]('<'), this[_0x55886e(319)] = ~_0x20a880['indexOf']('['), this[_0x55886e(320)] = !~_0x20a880[_0x55886e(318)](_0x285a6f['rVKoX']), _0x20a880 = _0x20a880[_0x55886e(321)](/[ ,|]+/);
    if (_0x20a880['length'] > 3335 + -5094 + 1760 && !/^[[<]/['test'](_0x20a880[887 * 7 + 1607 * 6 + -15850]))
        this[_0x55886e(322)] = _0x20a880[_0x55886e(323)]();
    this[_0x55886e(324)] = _0x20a880['shift'](), this[_0x55886e(325)] = _0xcf3516 || '';
}
Option[_0x116c8f(326)][_0x116c8f(327)] = function () {
    var _0x1625d3 = _0x116c8f, _0x1d1ebd = { 'dPGwM': 'no-' };
    return this['long'][_0x1625d3(328)]('--', '')[_0x1625d3(328)](_0x1d1ebd[_0x1625d3(329)], '');
}, Option[_0x116c8f(326)]['is'] = function (_0x248933) {
    var _0x57e786 = _0x116c8f, _0x2d18ff = {
            'qPGWh': function (_0x598f7d, _0x107b11) {
                return _0x598f7d == _0x107b11;
            }
        };
    return _0x248933 == this[_0x57e786(322)] || _0x2d18ff[_0x57e786(330)](_0x248933, this[_0x57e786(324)]);
};
function Command(_0x852dd) {
    var _0xbc2451 = _0x116c8f;
    this['commands'] = [], this[_0xbc2451(331)] = [], this['_execs'] = {}, this[_0xbc2451(332)] = ![], this[_0xbc2451(333)] = [], this['_name'] = _0x852dd || '';
}
Command[_0x116c8f(326)][_0x116c8f(334)] = EventEmitter[_0x116c8f(326)], Command[_0x116c8f(326)][_0x116c8f(335)] = function (_0x53e465, _0x58dd6c, _0x54fb6c) {
    var _0x432221 = _0x116c8f, _0x4148f5 = {
            'TZynN': _0x432221(336),
            'RNGTO': function (_0x581852, _0x337977) {
                return _0x581852 || _0x337977;
            }
        }, _0x3a57e0 = _0x4148f5[_0x432221(337)][_0x432221(321)]('|'), _0x6e817 = 9856 + 7767 + -17623;
    while (!![]) {
        switch (_0x3a57e0[_0x6e817++]) {
        case '0':
            this[_0x432221(338)][_0x432221(339)](_0x37ba22);
            continue;
        case '1':
            return _0x37ba22;
        case '2':
            var _0x37ba22 = new Command(_0x1d10e8[_0x432221(323)]());
            continue;
        case '3':
            _0x54fb6c = _0x4148f5[_0x432221(340)](_0x54fb6c, {});
            continue;
        case '4':
            _0x37ba22[_0x432221(341)](_0x1d10e8);
            continue;
        case '5':
            var _0x1d10e8 = _0x53e465[_0x432221(321)](/ +/);
            continue;
        case '6':
            if (_0x58dd6c)
                return this;
            continue;
        case '7':
            if (_0x58dd6c) {
                _0x37ba22[_0x432221(325)](_0x58dd6c), this[_0x432221(342)] = !![], this[_0x432221(343)][_0x37ba22[_0x432221(344)]] = !![];
                if (_0x54fb6c[_0x432221(345)])
                    this['defaultExecutable'] = _0x37ba22[_0x432221(344)];
            }
            continue;
        case '8':
            _0x37ba22[_0x432221(346)] = this;
            continue;
        case '9':
            _0x37ba22[_0x432221(347)] = !!_0x54fb6c[_0x432221(348)];
            continue;
        }
        break;
    }
}, Command[_0x116c8f(326)]['arguments'] = function (_0x27e2a2) {
    var _0x4b5d9b = _0x116c8f;
    return this[_0x4b5d9b(341)](_0x27e2a2[_0x4b5d9b(321)](/ +/));
}, Command[_0x116c8f(326)]['addImplicitHelpCommand'] = function () {
    var _0x1f8604 = _0x116c8f, _0x274de3 = {
            'OHttN': 'help [cmd]',
            'ZrlcH': _0x1f8604(349)
        };
    this[_0x1f8604(335)](_0x274de3[_0x1f8604(350)], _0x274de3[_0x1f8604(351)]);
}, Command[_0x116c8f(326)][_0x116c8f(341)] = function (_0x1a446b) {
    var _0x2c4992 = _0x116c8f, _0x40830d = {
            'qrUmY': function (_0x5c23e4, _0x29e078) {
                return _0x5c23e4 > _0x29e078;
            },
            'ZTCJb': function (_0x2a3e73, _0x132f9e) {
                return _0x2a3e73 === _0x132f9e;
            },
            'JEZtl': _0x2c4992(352)
        };
    if (!_0x1a446b['length'])
        return;
    var _0x500518 = this;
    return _0x1a446b[_0x2c4992(353)](function (_0x4c8b29) {
        var _0x32c55e = _0x2c4992, _0x470eed = {
                'required': ![],
                'name': '',
                'variadic': ![]
            };
        switch (_0x4c8b29[-785 + -1659 * 3 + 2881 * 2]) {
        case '<':
            _0x470eed[_0x32c55e(317)] = !![], _0x470eed[_0x32c55e(327)] = _0x4c8b29[_0x32c55e(354)](6289 + 1 * -9063 + 2775, -(-8820 + -701 + 9522));
            break;
        case '[':
            _0x470eed[_0x32c55e(327)] = _0x4c8b29['slice'](6352 + -4052 + -2299, -(1170 + 322 * -24 + -6559 * -1));
            break;
        }
        _0x40830d[_0x32c55e(355)](_0x470eed[_0x32c55e(327)][_0x32c55e(356)], 2959 + -7835 * 1 + 4879) && _0x40830d[_0x32c55e(357)](_0x470eed['name'][_0x32c55e(354)](-(-1 * 8941 + -1406 * 2 + 11756)), _0x40830d['JEZtl']) && (_0x470eed[_0x32c55e(358)] = !![], _0x470eed[_0x32c55e(327)] = _0x470eed[_0x32c55e(327)][_0x32c55e(354)](1 * 8201 + -1 * 9498 + -1 * -1297, -(9890 + 5197 + -4 * 3771))), _0x470eed[_0x32c55e(327)] && _0x500518['_args']['push'](_0x470eed);
    }), this;
}, Command[_0x116c8f(326)][_0x116c8f(359)] = function (_0x2867fd) {
    var _0x2ae1b8 = _0x116c8f, _0x451de0 = {
            'VuiAd': function (_0x4b7413, _0x4fc755) {
                return _0x4b7413 == _0x4fc755;
            },
            'FhMls': function (_0x1cc4a2, _0xb6d888) {
                return _0x1cc4a2 !== _0xb6d888;
            },
            'xluHP': function (_0x273af0, _0x5b1e8e) {
                return _0x273af0 - _0x5b1e8e;
            },
            'UswDN': function (_0x213823, _0x3685b0, _0x3bed55) {
                return _0x213823(_0x3685b0, _0x3bed55);
            },
            'XIymd': function (_0x489418, _0x2fcf1b) {
                return _0x489418 > _0x2fcf1b;
            },
            'xMjvr': function (_0x7e09b8, _0x5dade4) {
                return _0x7e09b8 === _0x5dade4;
            }
        }, _0x4e7ff1 = this, _0xd85d25 = function (_0x240abc, _0x469fc7) {
            var _0x176d36 = _0x8cfd;
            _0x240abc = _0x240abc || [], _0x469fc7 = _0x469fc7 || [];
            var _0x2ed94a = _0x4e7ff1[_0x176d36(360)](_0x469fc7);
            _0x451de0[_0x176d36(361)](outputHelpIfNecessary, _0x4e7ff1, _0x2ed94a[_0x176d36(362)]);
            _0x451de0[_0x176d36(363)](_0x2ed94a[_0x176d36(362)][_0x176d36(356)], 29 * 218 + -5 * 748 + 1 * -2582) && _0x4e7ff1[_0x176d36(364)](_0x2ed94a[_0x176d36(362)][-6376 + -4534 * 2 + 15444]);
            if (_0x2ed94a[_0x176d36(365)][_0x176d36(356)])
                _0x240abc = _0x2ed94a[_0x176d36(365)][_0x176d36(366)](_0x240abc);
            _0x4e7ff1[_0x176d36(333)][_0x176d36(353)](function (_0x2ee94c, _0x278f89) {
                var _0x351855 = _0x176d36;
                if (_0x2ee94c[_0x351855(317)] && _0x451de0[_0x351855(367)](null, _0x240abc[_0x278f89]))
                    _0x4e7ff1[_0x351855(368)](_0x2ee94c['name']);
                else
                    _0x2ee94c['variadic'] && (_0x451de0[_0x351855(369)](_0x278f89, _0x451de0[_0x351855(370)](_0x4e7ff1[_0x351855(333)][_0x351855(356)], -6362 + 2 * 2126 + 2111)) && _0x4e7ff1['variadicArgNotLast'](_0x2ee94c[_0x351855(327)]), _0x240abc[_0x278f89] = _0x240abc[_0x351855(371)](_0x278f89));
            }), _0x4e7ff1[_0x176d36(333)]['length'] ? _0x240abc[_0x4e7ff1[_0x176d36(333)][_0x176d36(356)]] = _0x4e7ff1 : _0x240abc['push'](_0x4e7ff1), _0x2867fd[_0x176d36(372)](_0x4e7ff1, _0x240abc);
        }, _0x1ce690 = this[_0x2ae1b8(346)] || this, _0x5b1e8a = _0x451de0[_0x2ae1b8(373)](_0x1ce690, this) ? '*' : this[_0x2ae1b8(344)];
    _0x1ce690['on'](_0x5b1e8a, _0xd85d25);
    if (this[_0x2ae1b8(374)])
        _0x1ce690['on'](this[_0x2ae1b8(374)], _0xd85d25);
    return this;
}, Command[_0x116c8f(326)][_0x116c8f(375)] = function (_0x108db3, _0x19d223, _0x95e5c9, _0xc0203e) {
    var _0x4d4d07 = _0x116c8f, _0x4355fa = {
            'XXitz': '4|0|1|2|3|6|5',
            'VhCfw': function (_0xb48526, _0x52028c) {
                return _0xb48526(_0x52028c);
            },
            'EuhdK': function (_0xc6dae4, _0x6030c1) {
                return _0xc6dae4 != _0x6030c1;
            },
            'iaWsr': 'function',
            'nHoBP': function (_0x476735, _0x5b20d5) {
                return _0x476735 instanceof _0x5b20d5;
            },
            'PHrGI': function (_0x3236bd, _0x1f4220) {
                return _0x3236bd == _0x1f4220;
            },
            'FVuZk': function (_0x5e9d16, _0x264a5e) {
                return _0x5e9d16 !== _0x264a5e;
            },
            'MreMy': function (_0xd3a233, _0x484471, _0x11a716) {
                return _0xd3a233(_0x484471, _0x11a716);
            },
            'zUbGS': function (_0x5135ed, _0x1e282f) {
                return _0x5135ed === _0x1e282f;
            },
            'qVqJd': _0x4d4d07(376),
            'fjBav': function (_0x4baa40, _0x2e8542) {
                return _0x4baa40 || _0x2e8542;
            }
        }, _0x4696ee = _0x4355fa[_0x4d4d07(377)][_0x4d4d07(321)]('|'), _0x2305de = -2167 + -1857 + 4024;
    while (!![]) {
        switch (_0x4696ee[_0x2305de++]) {
        case '0':
            var _0x36431d = this, _0x50a317 = new Option(_0x108db3, _0x19d223), _0x40dc44 = _0x50a317[_0x4d4d07(327)](), _0x10bdf6 = _0x4355fa[_0x4d4d07(378)](camelcase, _0x40dc44);
            continue;
        case '1':
            if (_0x4355fa[_0x4d4d07(379)](typeof _0x95e5c9, _0x4355fa[_0x4d4d07(380)])) {
                if (_0x4355fa[_0x4d4d07(381)](_0x95e5c9, RegExp)) {
                    var _0x49b97a = _0x95e5c9;
                    _0x95e5c9 = function (_0x1c7c7a, _0x9d607b) {
                        var _0x21e667 = _0x4d4d07, _0x568964 = _0x49b97a[_0x21e667(382)](_0x1c7c7a);
                        return _0x568964 ? _0x568964[-4792 + -1624 + 6416] : _0x9d607b;
                    };
                } else
                    _0xc0203e = _0x95e5c9, _0x95e5c9 = null;
            }
            continue;
        case '2':
            if (_0x4355fa[_0x4d4d07(383)](![], _0x50a317[_0x4d4d07(320)]) || _0x50a317[_0x4d4d07(319)] || _0x50a317[_0x4d4d07(317)]) {
                if (![] == _0x50a317[_0x4d4d07(320)])
                    _0xc0203e = !![];
                if (_0x4355fa[_0x4d4d07(384)](undefined, _0xc0203e))
                    _0x36431d[_0x10bdf6] = _0xc0203e;
            }
            continue;
        case '3':
            this['options'][_0x4d4d07(339)](_0x50a317);
            continue;
        case '4':
            var _0x4f658e = {
                'sTgZP': function (_0x247d17, _0xccdc5a, _0x45402d) {
                    return _0x4355fa['MreMy'](_0x247d17, _0xccdc5a, _0x45402d);
                },
                'skxeN': function (_0x3787d4, _0x10d7df) {
                    var _0x3ab23b = _0x4d4d07;
                    return _0x4355fa[_0x3ab23b(385)](_0x3787d4, _0x10d7df);
                },
                'oEcTl': function (_0x452f04, _0x136e42) {
                    var _0x2714ed = _0x4d4d07;
                    return _0x4355fa[_0x2714ed(383)](_0x452f04, _0x136e42);
                },
                'OSjcq': _0x4d4d07(386),
                'xOfyK': _0x4355fa['qVqJd'],
                'FGeLS': function (_0x3482a2, _0x517b9e) {
                    var _0x33482e = _0x4d4d07;
                    return _0x4355fa[_0x33482e(387)](_0x3482a2, _0x517b9e);
                },
                'BrMdV': function (_0x4af4de, _0xb69820) {
                    return _0x4af4de !== _0xb69820;
                }
            };
            continue;
        case '5':
            return this;
        case '6':
            this['on'](_0x40dc44, function (_0x2c2e00) {
                var _0x5a721d = _0x4d4d07;
                if (null !== _0x2c2e00 && _0x95e5c9)
                    _0x2c2e00 = _0x4f658e['sTgZP'](_0x95e5c9, _0x2c2e00, _0x4f658e['skxeN'](undefined, _0x36431d[_0x10bdf6]) ? _0xc0203e : _0x36431d[_0x10bdf6]);
                if (_0x4f658e[_0x5a721d(388)](_0x4f658e[_0x5a721d(389)], typeof _0x36431d[_0x10bdf6]) || _0x4f658e[_0x5a721d(390)] == typeof _0x36431d[_0x10bdf6])
                    null == _0x2c2e00 ? _0x36431d[_0x10bdf6] = _0x50a317[_0x5a721d(320)] ? _0x4f658e[_0x5a721d(391)](_0xc0203e, !![]) : ![] : _0x36431d[_0x10bdf6] = _0x2c2e00;
                else
                    _0x4f658e[_0x5a721d(392)](null, _0x2c2e00) && (_0x36431d[_0x10bdf6] = _0x2c2e00);
            });
            continue;
        }
        break;
    }
}, Command[_0x116c8f(326)][_0x116c8f(393)] = function (_0x28cda7) {
    var _0x4c33b8 = _0x116c8f;
    return this[_0x4c33b8(332)] = arguments[_0x4c33b8(356)] === 193 * 19 + 1 * -331 + 834 * -4 || _0x28cda7, this;
}, Command[_0x116c8f(326)][_0x116c8f(394)] = function (_0x309d76) {
    var _0x11a3e9 = _0x116c8f, _0x19b1fa = {
            'kkocD': function (_0x3e0b1c, _0x15a15e, _0x58c4a9) {
                return _0x3e0b1c(_0x15a15e, _0x58c4a9);
            },
            'kTqDH': _0x11a3e9(395),
            'bAncX': function (_0xe58215, _0x68cdbb) {
                return _0xe58215 < _0x68cdbb;
            },
            'eFaTF': _0x11a3e9(396),
            'DLDgO': _0x11a3e9(397)
        };
    if (this['executables'])
        this[_0x11a3e9(398)]();
    this[_0x11a3e9(399)] = _0x309d76, this[_0x11a3e9(344)] = this['_name'] || _0x19b1fa[_0x11a3e9(400)](basename, _0x309d76[1 * 4079 + -4855 + 777 * 1], _0x19b1fa[_0x11a3e9(401)]);
    this[_0x11a3e9(342)] && _0x19b1fa[_0x11a3e9(402)](_0x309d76[_0x11a3e9(356)], -4777 + 3057 * -1 + -461 * -17) && !this['defaultExecutable'] && _0x309d76[_0x11a3e9(339)](_0x19b1fa[_0x11a3e9(403)]);
    var _0x123044 = this[_0x11a3e9(360)](this['normalize'](_0x309d76['slice'](1983 * -1 + -7983 + 9968))), _0x2c516e = this[_0x11a3e9(365)] = _0x123044[_0x11a3e9(365)], _0x142cc2 = this[_0x11a3e9(404)](this[_0x11a3e9(365)], _0x123044[_0x11a3e9(362)]), _0x405031 = _0x142cc2['args'][5 * -1147 + -7891 + 6813 * 2];
    if (this['_execs'][_0x405031] && typeof this['_execs'][_0x405031] != _0x19b1fa[_0x11a3e9(405)])
        return this[_0x11a3e9(406)](_0x309d76, _0x2c516e, _0x123044[_0x11a3e9(362)]);
    else {
        if (this[_0x11a3e9(407)])
            return _0x2c516e[_0x11a3e9(408)](_0x405031 = this['defaultExecutable']), this[_0x11a3e9(406)](_0x309d76, _0x2c516e, _0x123044[_0x11a3e9(362)]);
    }
    return _0x142cc2;
}, Command[_0x116c8f(326)][_0x116c8f(406)] = function (_0x5aa5ed, _0x42efc3, _0x2beaec) {
    var _0x174207 = _0x116c8f, _0x1fb34c = {
            'vkKFG': '2|1|17|11|9|15|10|7|16|13|8|3|5|6|14|18|0|12|4',
            'SLSFM': function (_0x2b7eb8, _0x3088a1) {
                return _0x2b7eb8 == _0x3088a1;
            },
            'GpAmd': function (_0x4b3a93, _0x2885f8) {
                return _0x4b3a93 + _0x2885f8;
            },
            'CUajh': '.js',
            'ffhyZ': function (_0x2c05e4, _0x455a9a) {
                return _0x2c05e4(_0x455a9a);
            },
            'mUsVJ': function (_0x3964d4, _0x18583b) {
                return _0x3964d4(_0x18583b);
            },
            'hEqus': function (_0xba9c53, _0x489c7b) {
                return _0xba9c53 == _0x489c7b;
            },
            'lkYfh': _0x174207(409),
            'rCGfG': _0x174207(396),
            'SizdQ': function (_0xcf36c4, _0x4c611f) {
                return _0xcf36c4 + _0x4c611f;
            },
            'ntINK': function (_0x5043a5, _0xfa7511, _0x1b2af4) {
                return _0x5043a5(_0xfa7511, _0x1b2af4);
            },
            'mzCHE': function (_0x38d685, _0x5041a1) {
                return _0x38d685 == _0x5041a1;
            },
            'AIyMA': 'error',
            'HNoCQ': function (_0x4a4453, _0x2cee94) {
                return _0x4a4453(_0x2cee94);
            },
            'RAmOU': function (_0x24f476, _0x702e39) {
                return _0x24f476 !== _0x702e39;
            },
            'SDPls': function (_0x3e6247, _0x3265a5) {
                return _0x3e6247 !== _0x3265a5;
            },
            'cVGwz': 'win32',
            'SCRLs': function (_0x344b98, _0x402884, _0x4e3d6a, _0xee5da6) {
                return _0x344b98(_0x402884, _0x4e3d6a, _0xee5da6);
            },
            'lpQMZ': _0x174207(410)
        }, _0x3e6b14 = _0x1fb34c['vkKFG'][_0x174207(321)]('|'), _0x35cbe6 = 4021 + 77 + -683 * 6;
    while (!![]) {
        switch (_0x3e6b14[_0x35cbe6++]) {
        case '0':
            _0x81ec21['on'](_0x174207(411), process['exit']['bind'](process));
            continue;
        case '1':
            _0x42efc3 = _0x42efc3['concat'](_0x2beaec);
            continue;
        case '2':
            var _0x55be48 = {
                'dWycq': function (_0x50e861, _0x300e0d) {
                    return _0x50e861 == _0x300e0d;
                },
                'IBuZq': function (_0xd4d306, _0x41033c) {
                    var _0x800e5d = _0x174207;
                    return _0x1fb34c[_0x800e5d(412)](_0xd4d306, _0x41033c);
                },
                'GZYef': 'EACCES'
            };
            continue;
        case '3':
            var _0x5a3145 = ![];
            continue;
        case '4':
            this[_0x174207(413)] = _0x81ec21;
            continue;
        case '5':
            if (exists(_0x1fb34c['GpAmd'](_0x5db1c4, _0x1fb34c[_0x174207(414)])))
                _0x41ce0d = _0x5db1c4 + _0x1fb34c[_0x174207(414)], _0x5a3145 = !![];
            else
                _0x1fb34c[_0x174207(415)](exists, _0x5db1c4) && (_0x41ce0d = _0x5db1c4);
            continue;
        case '6':
            _0x42efc3 = _0x42efc3[_0x174207(354)](6 * -452 + 3942 + 1229 * -1);
            continue;
        case '7':
            var _0x2d89e5, _0x3e8bd8 = _0x1fb34c['mUsVJ'](readlink, _0x12f92d);
            continue;
        case '8':
            var _0x5db1c4 = path[_0x174207(416)](_0x2d89e5, _0x41ce0d);
            continue;
        case '9':
            _0x1fb34c[_0x174207(417)](_0x1fb34c[_0x174207(418)], _0x42efc3[-47 * -131 + 3565 + -9722]) && (_0x42efc3[-48 * 113 + -2 * 3338 + 12100] = _0x42efc3[4251 + 3667 + -609 * 13], _0x42efc3[1 * -517 + -6373 + 6891] = _0x1fb34c[_0x174207(419)]);
            continue;
        case '10':
            var _0x41ce0d = _0x1fb34c[_0x174207(420)](_0x1fb34c[_0x174207(420)](_0x1fb34c[_0x174207(421)](basename, _0x12f92d, _0x1fb34c[_0x174207(414)]), '-'), _0x42efc3[-1867 + 3413 + -1546]);
            continue;
        case '11':
            if (_0x1fb34c[_0x174207(422)](_0x1fb34c[_0x174207(418)], _0x42efc3[1 * 3851 + 6622 + -3 * 3491]) && _0x1fb34c['mzCHE'](4679 * -1 + -8704 + 13384, _0x42efc3[_0x174207(356)]))
                this['help']();
            continue;
        case '12':
            _0x81ec21['on'](_0x1fb34c[_0x174207(423)], function (_0x3501a1) {
                var _0x367460 = _0x174207;
                if (_0x55be48[_0x367460(424)](_0x3501a1[_0x367460(425)], _0x367460(426)))
                    console[_0x367460(427)](_0x367460(428), _0x41ce0d);
                else
                    _0x55be48[_0x367460(429)](_0x3501a1['code'], _0x55be48[_0x367460(430)]) && console['error'](_0x367460(431), _0x41ce0d);
                process[_0x367460(432)](-1507 * -1 + -8699 * -1 + 5 * -2041);
            });
            continue;
        case '13':
            _0x2d89e5 = _0x1fb34c[_0x174207(433)](dirname, _0x3e8bd8);
            continue;
        case '14':
            var _0x81ec21;
            continue;
        case '15':
            var _0x12f92d = _0x5aa5ed[676 + 748 * 1 + -1423];
            continue;
        case '16':
            _0x1fb34c[_0x174207(434)](_0x3e8bd8, _0x12f92d) && _0x1fb34c[_0x174207(434)](_0x3e8bd8[_0x174207(435)](-8382 + 1990 + 6392), '/') && (_0x3e8bd8 = path[_0x174207(416)](dirname(_0x12f92d), _0x3e8bd8));
            continue;
        case '17':
            if (!_0x42efc3['length'])
                this[_0x174207(409)]();
            continue;
        case '18':
            _0x1fb34c[_0x174207(436)](process[_0x174207(437)], _0x1fb34c[_0x174207(438)]) ? _0x5a3145 ? (_0x42efc3[_0x174207(408)](_0x5db1c4), _0x42efc3 = (process['execArgv'] || [])[_0x174207(366)](_0x42efc3), _0x81ec21 = _0x1fb34c[_0x174207(439)](spawn, 'node', _0x42efc3, {
                'stdio': _0x174207(410),
                'customFds': [
                    1738 + 16 * -379 + 4326,
                    -5649 + -8609 + 14259,
                    5637 + 2 * 4153 + -1549 * 9
                ]
            })) : _0x81ec21 = _0x1fb34c['SCRLs'](spawn, _0x41ce0d, _0x42efc3, {
                'stdio': _0x1fb34c[_0x174207(440)],
                'customFds': [
                    5429 + -1 * 8927 + -6 * -583,
                    -2363 + -9911 * -1 + -7547,
                    -1369 * -5 + -2000 * 2 + -2843
                ]
            }) : (_0x42efc3['unshift'](_0x5db1c4), _0x81ec21 = _0x1fb34c[_0x174207(439)](spawn, process[_0x174207(441)], _0x42efc3, { 'stdio': _0x1fb34c[_0x174207(440)] }));
            continue;
        }
        break;
    }
}, Command[_0x116c8f(326)][_0x116c8f(442)] = function (_0x1796f7) {
    var _0x1f4fd3 = _0x116c8f, _0x5dfc79 = {
            'blFha': function (_0x43e48f, _0x36c2ab) {
                return _0x43e48f < _0x36c2ab;
            },
            'TwOcJ': function (_0x17bc25, _0x31f7f9) {
                return _0x17bc25 === _0x31f7f9;
            },
            'SVoSr': function (_0xcb4a53, _0x596489) {
                return _0xcb4a53 > _0x596489;
            },
            'OMuyZ': function (_0x118ce7, _0x117917) {
                return _0x118ce7 == _0x117917;
            },
            'cGZma': function (_0x1c376b, _0x4861f0) {
                return _0x1c376b != _0x4861f0;
            },
            'jBUZN': function (_0x48c420, _0x57f03a) {
                return _0x48c420 + _0x57f03a;
            }
        }, _0x2af21c = [], _0x40067f, _0x4089a6, _0x5c0f7e;
    for (var _0xdd5bde = -3742 * 1 + -1 * -7857 + 5 * -823, _0x4e343f = _0x1796f7[_0x1f4fd3(356)]; _0x5dfc79['blFha'](_0xdd5bde, _0x4e343f); ++_0xdd5bde) {
        _0x40067f = _0x1796f7[_0xdd5bde];
        _0xdd5bde > -1174 + -6047 + 7221 && (_0x4089a6 = this[_0x1f4fd3(443)](_0x1796f7[_0xdd5bde - (-488 + -13 * -619 + -2 * 3779)]));
        if (_0x5dfc79['TwOcJ'](_0x40067f, '--')) {
            _0x2af21c = _0x2af21c[_0x1f4fd3(366)](_0x1796f7['slice'](_0xdd5bde));
            break;
        } else {
            if (_0x4089a6 && _0x4089a6['required'])
                _0x2af21c[_0x1f4fd3(339)](_0x40067f);
            else {
                if (_0x5dfc79[_0x1f4fd3(444)](_0x40067f['length'], 2777 + 3046 + 1 * -5822) && _0x5dfc79[_0x1f4fd3(445)]('-', _0x40067f[-31 * 35 + 241 * -28 + 7833]) && _0x5dfc79[_0x1f4fd3(446)]('-', _0x40067f[-4175 + 3045 + 1131]))
                    _0x40067f['slice'](4326 + -1719 + -2 * 1303)[_0x1f4fd3(321)]('')[_0x1f4fd3(353)](function (_0x2a3e26) {
                        var _0x12e69d = _0x1f4fd3;
                        _0x2af21c[_0x12e69d(339)]('-' + _0x2a3e26);
                    });
                else
                    /^--/[_0x1f4fd3(447)](_0x40067f) && ~(_0x5c0f7e = _0x40067f[_0x1f4fd3(318)]('=')) ? _0x2af21c[_0x1f4fd3(339)](_0x40067f[_0x1f4fd3(354)](103 * 11 + -3 * -1515 + 167 * -34, _0x5c0f7e), _0x40067f[_0x1f4fd3(354)](_0x5dfc79[_0x1f4fd3(448)](_0x5c0f7e, 8121 + 11 * 846 + -17426))) : _0x2af21c[_0x1f4fd3(339)](_0x40067f);
            }
        }
    }
    return _0x2af21c;
}, Command[_0x116c8f(326)][_0x116c8f(404)] = function (_0x532795, _0x2bcb05) {
    var _0x2bd54f = _0x116c8f, _0x532340 = {
            'cTTHk': function (_0x372163, _0x55d353, _0x124a78) {
                return _0x372163(_0x55d353, _0x124a78);
            },
            'QMMhT': function (_0xf0469c, _0x20ab76) {
                return _0xf0469c > _0x20ab76;
            }
        }, _0xe804d1;
    return _0x532795['length'] ? (_0xe804d1 = _0x532795[-7304 + -8654 + -1 * -15958], this[_0x2bd54f(449)](_0xe804d1)[_0x2bd54f(356)] ? this[_0x2bd54f(450)](_0x532795['shift'](), _0x532795, _0x2bcb05) : this[_0x2bd54f(450)]('*', _0x532795)) : (_0x532340[_0x2bd54f(451)](outputHelpIfNecessary, this, _0x2bcb05), _0x532340[_0x2bd54f(452)](_0x2bcb05['length'], 1838 * -2 + 8187 + -1 * 4511) && this['unknownOption'](_0x2bcb05[339 * -21 + -7 * -951 + 1 * 462])), this;
}, Command[_0x116c8f(326)][_0x116c8f(443)] = function (_0x455cba) {
    var _0x2f094a = _0x116c8f, _0x7bf758 = {
            'MWNpr': function (_0x4ad442, _0x208732) {
                return _0x4ad442 < _0x208732;
            }
        };
    for (var _0x4f1740 = -1698 * -1 + -4846 * 1 + 3148, _0x275c0b = this['options'][_0x2f094a(356)]; _0x7bf758[_0x2f094a(453)](_0x4f1740, _0x275c0b); ++_0x4f1740) {
        if (this[_0x2f094a(331)][_0x4f1740]['is'](_0x455cba))
            return this[_0x2f094a(331)][_0x4f1740];
    }
}, Command['prototype']['parseOptions'] = function (_0xc951b4) {
    var _0x4ed385 = _0x116c8f, _0x92a79d = {
            'qZHhm': function (_0x2f61b7, _0xd83d57) {
                return _0x2f61b7 < _0xd83d57;
            },
            'vgbTr': function (_0x5044e5, _0x1281c8) {
                return _0x5044e5 == _0x1281c8;
            },
            'BtDBZ': function (_0x1779b4, _0x3b5423) {
                return _0x1779b4 == _0x3b5423;
            },
            'rwddZ': function (_0x21f468, _0x18c139) {
                return _0x21f468 + _0x18c139;
            },
            'nxtRm': function (_0xd132e3, _0x47a35d) {
                return _0xd132e3 == _0x47a35d;
            },
            'ZCWLN': function (_0x90348d, _0x4740d9) {
                return _0x90348d == _0x4740d9;
            },
            'NtrfJ': function (_0x24b635, _0x2242b6) {
                return _0x24b635 + _0x2242b6;
            }
        }, _0x16673f = [], _0x508add = _0xc951b4[_0x4ed385(356)], _0x5d38bb, _0x26901b, _0x24d04f, _0x56e8da = [];
    for (var _0x4468d5 = 289 + -229 * -13 + 23 * -142; _0x92a79d['qZHhm'](_0x4468d5, _0x508add); ++_0x4468d5) {
        _0x24d04f = _0xc951b4[_0x4468d5];
        if (_0x92a79d['vgbTr']('--', _0x24d04f)) {
            _0x5d38bb = !![];
            continue;
        }
        if (_0x5d38bb) {
            _0x16673f[_0x4ed385(339)](_0x24d04f);
            continue;
        }
        _0x26901b = this[_0x4ed385(443)](_0x24d04f);
        if (_0x26901b) {
            if (_0x26901b['required']) {
                _0x24d04f = _0xc951b4[++_0x4468d5];
                if (_0x92a79d[_0x4ed385(454)](null, _0x24d04f))
                    return this[_0x4ed385(455)](_0x26901b);
                this[_0x4ed385(450)](_0x26901b[_0x4ed385(327)](), _0x24d04f);
            } else
                _0x26901b[_0x4ed385(319)] ? (_0x24d04f = _0xc951b4[_0x92a79d[_0x4ed385(456)](_0x4468d5, -8589 + -4809 + -13399 * -1)], _0x92a79d[_0x4ed385(454)](null, _0x24d04f) || _0x92a79d[_0x4ed385(457)]('-', _0x24d04f[1579 * 2 + 79 * -24 + -1262]) && '-' != _0x24d04f ? _0x24d04f = null : ++_0x4468d5, this[_0x4ed385(450)](_0x26901b[_0x4ed385(327)](), _0x24d04f)) : this[_0x4ed385(450)](_0x26901b[_0x4ed385(327)]());
            continue;
        }
        if (_0x24d04f['length'] > 7146 + -21 * -248 + 1 * -12353 && _0x92a79d[_0x4ed385(458)]('-', _0x24d04f[4266 + -6194 + 1928])) {
            _0x56e8da[_0x4ed385(339)](_0x24d04f);
            _0xc951b4[_0x92a79d['NtrfJ'](_0x4468d5, 8376 + -8253 + -122)] && '-' != _0xc951b4[_0x92a79d[_0x4ed385(459)](_0x4468d5, 3476 + 1 * 7423 + -10898)][5350 + 29 * -277 + 2683 * 1] && _0x56e8da['push'](_0xc951b4[++_0x4468d5]);
            continue;
        }
        _0x16673f[_0x4ed385(339)](_0x24d04f);
    }
    return {
        'args': _0x16673f,
        'unknown': _0x56e8da
    };
}, Command[_0x116c8f(326)][_0x116c8f(460)] = function () {
    var _0x3ef58f = _0x116c8f, _0xa0e8ce = {
            'VopQJ': function (_0x200836, _0xbe9da8) {
                return _0x200836 < _0xbe9da8;
            },
            'cXURq': function (_0x41a7dd, _0xf7172c) {
                return _0x41a7dd(_0xf7172c);
            },
            'ztXbC': _0x3ef58f(461)
        }, _0x4e3d45 = {}, _0x348a1d = this[_0x3ef58f(331)][_0x3ef58f(356)];
    for (var _0x24a29e = 6113 + -5019 + -2 * 547; _0xa0e8ce[_0x3ef58f(462)](_0x24a29e, _0x348a1d); _0x24a29e++) {
        var _0x3e02c = _0xa0e8ce[_0x3ef58f(463)](camelcase, this[_0x3ef58f(331)][_0x24a29e][_0x3ef58f(327)]());
        _0x4e3d45[_0x3e02c] = _0x3e02c === _0xa0e8ce[_0x3ef58f(464)] ? this[_0x3ef58f(465)] : this[_0x3e02c];
    }
    return _0x4e3d45;
}, Command[_0x116c8f(326)][_0x116c8f(368)] = function (_0x4984b5) {
    var _0x204328 = _0x116c8f, _0x268fef = { 'tSEmx': _0x204328(466) };
    console['error'](), console['error'](_0x268fef[_0x204328(467)], _0x4984b5), console['error'](), process[_0x204328(432)](6535 + -377 * 10 + -4 * 691);
}, Command[_0x116c8f(326)][_0x116c8f(455)] = function (_0x412650, _0x22219a) {
    var _0x266d63 = _0x116c8f, _0x35cd10 = {
            'DZtss': _0x266d63(468),
            'mngaA': _0x266d63(469)
        };
    console['error'](), _0x22219a ? console[_0x266d63(427)](_0x35cd10['DZtss'], _0x412650[_0x266d63(316)], _0x22219a) : console['error'](_0x35cd10['mngaA'], _0x412650[_0x266d63(316)]), console[_0x266d63(427)](), process['exit'](-8659 * -1 + -8557 + 101 * -1);
}, Command[_0x116c8f(326)]['unknownOption'] = function (_0x4ce079) {
    var _0x19445c = _0x116c8f, _0x59aaa = {
            'DByqf': _0x19445c(470),
            'fQFrY': _0x19445c(471)
        }, _0x5aa612 = _0x59aaa['DByqf']['split']('|'), _0x4f183c = -29 * 295 + 1997 + -3279 * -2;
    while (!![]) {
        switch (_0x5aa612[_0x4f183c++]) {
        case '0':
            if (this['_allowUnknownOption'])
                return;
            continue;
        case '1':
            process[_0x19445c(432)](-167 * 4 + 6846 + -3 * 2059);
            continue;
        case '2':
            console[_0x19445c(427)]();
            continue;
        case '3':
            console[_0x19445c(427)]();
            continue;
        case '4':
            console['error'](_0x59aaa[_0x19445c(472)], _0x4ce079);
            continue;
        }
        break;
    }
}, Command[_0x116c8f(326)][_0x116c8f(473)] = function (_0x2c93b8) {
    var _0x1b9add = _0x116c8f, _0x30fb86 = { 'sQIHo': '  error: variadic arguments must be last `%s\'' };
    console[_0x1b9add(427)](), console[_0x1b9add(427)](_0x30fb86[_0x1b9add(474)], _0x2c93b8), console['error'](), process['exit'](2422 + -4886 + 2465 * 1);
}, Command[_0x116c8f(326)][_0x116c8f(461)] = function (_0x10ab11, _0xf42c48) {
    var _0x1acb8d = _0x116c8f, _0x3c68b6 = {
            'MblXz': function (_0x4dc8da, _0x2fe0f4) {
                return _0x4dc8da == _0x2fe0f4;
            },
            'HuAIu': function (_0x39354f, _0x15ee21) {
                return _0x39354f || _0x15ee21;
            },
            'WJYTB': _0x1acb8d(475),
            'plwkY': _0x1acb8d(476),
            'PfjaP': function (_0x2270ed, _0x23eb79) {
                return _0x2270ed + _0x23eb79;
            },
            'VNaJO': _0x1acb8d(461)
        }, _0xcf6a02 = _0x1acb8d(477)['split']('|'), _0x4ddec2 = 293 + 8138 + 1 * -8431;
    while (!![]) {
        switch (_0xcf6a02[_0x4ddec2++]) {
        case '0':
            return this;
        case '1':
            if (_0x3c68b6[_0x1acb8d(478)](164 * 4 + 1 * -9159 + 8503, arguments['length']))
                return this[_0x1acb8d(465)];
            continue;
        case '2':
            this[_0x1acb8d(465)] = _0x10ab11;
            continue;
        case '3':
            _0xf42c48 = _0x3c68b6['HuAIu'](_0xf42c48, _0x3c68b6[_0x1acb8d(479)]);
            continue;
        case '4':
            this[_0x1acb8d(375)](_0xf42c48, _0x3c68b6['plwkY']);
            continue;
        case '5':
            var _0x214f66 = {
                'EIVlw': function (_0x320867, _0x40ef66) {
                    return _0x3c68b6['PfjaP'](_0x320867, _0x40ef66);
                }
            };
            continue;
        case '6':
            this['on'](_0x3c68b6[_0x1acb8d(480)], function () {
                var _0x58a080 = _0x1acb8d;
                process['stdout'][_0x58a080(481)](_0x214f66[_0x58a080(482)](_0x10ab11, '\n')), process[_0x58a080(432)](1 * 3574 + -2488 + -1086);
            });
            continue;
        }
        break;
    }
}, Command[_0x116c8f(326)][_0x116c8f(325)] = function (_0x276eb3) {
    var _0x1aef7c = _0x116c8f;
    if (-3613 + 793 + 705 * 4 === arguments['length'])
        return this[_0x1aef7c(483)];
    return this[_0x1aef7c(483)] = _0x276eb3, this;
}, Command['prototype'][_0x116c8f(484)] = function (_0x596013) {
    var _0x1c7467 = _0x116c8f, _0x4e3a88 = {
            'Jthpk': function (_0x10664e, _0x1fd4de) {
                return _0x10664e == _0x1fd4de;
            }
        };
    if (_0x4e3a88[_0x1c7467(485)](-1678 + 496 * 16 + -6258, arguments[_0x1c7467(356)]))
        return this[_0x1c7467(374)];
    return this[_0x1c7467(374)] = _0x596013, this;
}, Command[_0x116c8f(326)]['usage'] = function (_0x49d5b0) {
    var _0x524b6e = _0x116c8f, _0x41eae7 = {
            'BmjQD': function (_0x590fe6, _0x117990) {
                return _0x590fe6 + _0x117990;
            },
            'AtvTU': _0x524b6e(486),
            'wOhBI': function (_0xc1c40a, _0x24b72c) {
                return _0xc1c40a == _0x24b72c;
            }
        }, _0x1e5a13 = this[_0x524b6e(333)][_0x524b6e(487)](function (_0x3bc018) {
            return humanReadableArgName(_0x3bc018);
        }), _0x5d1130 = _0x41eae7[_0x524b6e(488)](_0x41eae7[_0x524b6e(488)](_0x41eae7[_0x524b6e(489)], this['commands'][_0x524b6e(356)] ? _0x524b6e(490) : ''), this[_0x524b6e(333)][_0x524b6e(356)] ? ' ' + _0x1e5a13[_0x524b6e(416)](' ') : '');
    if (_0x41eae7[_0x524b6e(491)](-4454 + 3414 + 260 * 4, arguments[_0x524b6e(356)]))
        return this[_0x524b6e(492)] || _0x5d1130;
    return this['_usage'] = _0x49d5b0, this;
}, Command[_0x116c8f(326)][_0x116c8f(327)] = function () {
    var _0x57645e = _0x116c8f;
    return this[_0x57645e(344)];
}, Command[_0x116c8f(326)][_0x116c8f(493)] = function () {
    var _0x5457d0 = _0x116c8f;
    return this[_0x5457d0(331)][_0x5457d0(494)](function (_0x2d4029, _0x36c796) {
        var _0x24ac96 = _0x5457d0;
        return Math[_0x24ac96(495)](_0x2d4029, _0x36c796[_0x24ac96(316)]['length']);
    }, -8381 + 4060 + 4321);
}, Command[_0x116c8f(326)][_0x116c8f(496)] = function () {
    var _0x388a4d = _0x116c8f, _0x16f749 = {
            'rTvDv': function (_0x9759f2, _0x1e4694) {
                return _0x9759f2 + _0x1e4694;
            },
            'bHgoC': function (_0x50c0e1, _0x4650a7, _0x44b067) {
                return _0x50c0e1(_0x4650a7, _0x44b067);
            },
            'JPcGa': function (_0x8b51c5, _0x4c6571) {
                return _0x8b51c5 + _0x4c6571;
            },
            'sGkzi': function (_0x1fd6f5, _0x4e15a4, _0x1d3589) {
                return _0x1fd6f5(_0x4e15a4, _0x1d3589);
            },
            'LSGcQ': _0x388a4d(497),
            'VOulL': 'output usage information'
        }, _0x19d1af = this['largestOptionLength']();
    return [_0x16f749[_0x388a4d(498)](_0x16f749[_0x388a4d(498)](_0x16f749[_0x388a4d(499)](pad, _0x16f749[_0x388a4d(500)], _0x19d1af), '  '), _0x16f749[_0x388a4d(501)])]['concat'](this[_0x388a4d(331)][_0x388a4d(487)](function (_0x254a4d) {
        var _0x897c0 = _0x388a4d;
        return _0x16f749[_0x897c0(502)](_0x16f749[_0x897c0(503)](pad, _0x254a4d[_0x897c0(316)], _0x19d1af), '  ') + _0x254a4d[_0x897c0(325)];
    }))[_0x388a4d(416)]('\n');
}, Command[_0x116c8f(326)][_0x116c8f(504)] = function () {
    var _0x831a0e = _0x116c8f, _0x3357bc = {
            'unICF': function (_0x1476bd, _0x4e6f3a) {
                return _0x1476bd(_0x4e6f3a);
            },
            'nIenE': function (_0x19973a, _0x5c5517) {
                return _0x19973a + _0x5c5517;
            },
            'rpivf': function (_0x278f68, _0x415545) {
                return _0x278f68 + _0x415545;
            },
            'TudBc': function (_0x267f9f, _0x559346) {
                return _0x267f9f + _0x559346;
            },
            'bubEx': _0x831a0e(505),
            'OvfFI': function (_0x2198cf, _0x333e6d) {
                return _0x2198cf + _0x333e6d;
            },
            'WTcmE': function (_0x56a29c, _0x51690b, _0x2728db) {
                return _0x56a29c(_0x51690b, _0x2728db);
            },
            'SFlck': _0x831a0e(506),
            'SqrnB': _0x831a0e(507)
        };
    if (!this[_0x831a0e(338)][_0x831a0e(356)])
        return '';
    var _0x45aa88 = this[_0x831a0e(338)][_0x831a0e(508)](function (_0x132dd0) {
            return !_0x132dd0['_noHelp'];
        })[_0x831a0e(487)](function (_0x106915) {
            var _0x10aa29 = _0x831a0e, _0x252958 = _0x106915[_0x10aa29(333)][_0x10aa29(487)](function (_0x335223) {
                    var _0x386a7c = _0x10aa29;
                    return _0x3357bc[_0x386a7c(509)](humanReadableArgName, _0x335223);
                })[_0x10aa29(416)](' ');
            return [
                _0x3357bc[_0x10aa29(510)](_0x3357bc['nIenE'](_0x3357bc[_0x10aa29(511)](_0x106915[_0x10aa29(344)] + (_0x106915[_0x10aa29(374)] ? _0x3357bc[_0x10aa29(512)]('|', _0x106915[_0x10aa29(374)]) : ''), _0x106915[_0x10aa29(331)][_0x10aa29(356)] ? _0x3357bc['bubEx'] : ''), ' '), _0x252958),
                _0x106915['description']()
            ];
        }), _0x495598 = _0x45aa88[_0x831a0e(494)](function (_0xd18205, _0x194149) {
            var _0x25447b = _0x831a0e;
            return Math[_0x25447b(495)](_0xd18205, _0x194149[8444 * -1 + 1 * -3938 + 41 * 302][_0x25447b(356)]);
        }, -4280 + -1 * 3751 + 3 * 2677);
    return [
        '',
        _0x3357bc[_0x831a0e(513)],
        '',
        _0x45aa88['map'](function (_0x4b1f59) {
            var _0x8c7385 = _0x831a0e, _0x43b9b7 = _0x4b1f59[-1641 + -4551 + -1 * -6193] ? '  ' + _0x4b1f59[-15 * -123 + 8640 + 2621 * -4] : '';
            return _0x3357bc[_0x8c7385(514)](_0x3357bc['WTcmE'](pad, _0x4b1f59[-9067 + -2794 + 11861], _0x495598), _0x43b9b7);
        })[_0x831a0e(416)]('\n')['replace'](/^/gm, _0x3357bc[_0x831a0e(515)]),
        ''
    ][_0x831a0e(416)]('\n');
}, Command[_0x116c8f(326)][_0x116c8f(516)] = function () {
    var _0x1e8fdd = _0x116c8f, _0x499df6 = {
            'thWjZ': _0x1e8fdd(517),
            'gfAJf': function (_0x3a1195, _0x3d9f58) {
                return _0x3a1195 + _0x3d9f58;
            },
            'QRvbw': function (_0x13f4ad, _0x53e8b8) {
                return _0x13f4ad + _0x53e8b8;
            },
            'nSZcY': function (_0x288bd4, _0x34f855) {
                return _0x288bd4 + _0x34f855;
            },
            'ZbiJQ': _0x1e8fdd(518)
        }, _0x2415ae = _0x499df6[_0x1e8fdd(519)]['split']('|'), _0x14fe1d = 581 * 12 + 5388 + -12360;
    while (!![]) {
        switch (_0x2415ae[_0x14fe1d++]) {
        case '0':
            this[_0x1e8fdd(483)] && (_0x336a54 = [
                _0x499df6[_0x1e8fdd(520)]('  ', this[_0x1e8fdd(483)]),
                ''
            ]);
            continue;
        case '1':
            if (_0x4feab2)
                _0x32a288 = [_0x4feab2];
            continue;
        case '2':
            var _0x4feab2 = this[_0x1e8fdd(504)]();
            continue;
        case '3':
            var _0x32a288 = [];
            continue;
        case '4':
            var _0x3c1aa6 = [
                '',
                _0x499df6[_0x1e8fdd(521)](_0x499df6[_0x1e8fdd(522)](_0x499df6['ZbiJQ'] + _0x4cefd0, ' '), this[_0x1e8fdd(523)]()),
                ''
            ];
            continue;
        case '5':
            var _0x336a54 = [];
            continue;
        case '6':
            return _0x3c1aa6[_0x1e8fdd(366)](_0x32a288)[_0x1e8fdd(366)](_0x336a54)[_0x1e8fdd(366)](_0x23ec4f)[_0x1e8fdd(416)]('\n');
        case '7':
            var _0x23ec4f = [
                _0x1e8fdd(524),
                '',
                _0x499df6['nSZcY']('', this[_0x1e8fdd(496)]()[_0x1e8fdd(328)](/^/gm, '    ')),
                '',
                ''
            ];
            continue;
        case '8':
            var _0x4cefd0 = this['_name'];
            continue;
        case '9':
            this['_alias'] && (_0x4cefd0 = _0x499df6[_0x1e8fdd(522)](_0x499df6[_0x1e8fdd(522)](_0x4cefd0, '|'), this[_0x1e8fdd(374)]));
            continue;
        }
        break;
    }
}, Command[_0x116c8f(326)][_0x116c8f(525)] = function (_0x45805e) {
    var _0x474caa = _0x116c8f, _0x5f1fc5 = {
            'aEutk': function (_0x201c6b, _0xdacee0) {
                return _0x201c6b(_0xdacee0);
            },
            'XUenw': _0x474caa(396)
        };
    !_0x45805e && (_0x45805e = function (_0xc8b9e5) {
        return _0xc8b9e5;
    }), process[_0x474caa(526)][_0x474caa(481)](_0x5f1fc5[_0x474caa(527)](_0x45805e, this[_0x474caa(516)]())), this[_0x474caa(450)](_0x5f1fc5[_0x474caa(528)]);
}, Command[_0x116c8f(326)][_0x116c8f(409)] = function (_0x3396ae) {
    var _0xa986bd = _0x116c8f;
    this[_0xa986bd(525)](_0x3396ae), process[_0xa986bd(432)]();
};
function camelcase(_0x4d659b) {
    var _0x39f9e2 = _0x116c8f, _0x3d1946 = {
            'qlAHc': function (_0xa1fd16, _0x1fb3b3) {
                return _0xa1fd16 + _0x1fb3b3;
            }
        };
    return _0x4d659b['split']('-')[_0x39f9e2(494)](function (_0x48d3aa, _0x58b67e) {
        var _0x4a4f65 = _0x39f9e2;
        return _0x3d1946[_0x4a4f65(529)](_0x3d1946[_0x4a4f65(529)](_0x48d3aa, _0x58b67e[-1 * -53 + -8674 + -8621 * -1][_0x4a4f65(530)]()), _0x58b67e['slice'](-2656 * 2 + 5862 + -549));
    });
}
function pad(_0x499f64, _0x23e2d8) {
    var _0x33473c = _0x116c8f, _0x569096 = {
            'uaMkm': function (_0x40498d, _0x4d8e36) {
                return _0x40498d - _0x4d8e36;
            },
            'gDhrV': function (_0x582915, _0x2867b0) {
                return _0x582915 + _0x2867b0;
            },
            'ajZWW': function (_0xf7514b, _0x49a1d2) {
                return _0xf7514b(_0x49a1d2);
            }
        }, _0x122c76 = Math[_0x33473c(495)](2 * -1673 + -1753 + 5099, _0x569096['uaMkm'](_0x23e2d8, _0x499f64[_0x33473c(356)]));
    return _0x569096[_0x33473c(531)](_0x499f64, _0x569096[_0x33473c(532)](Array, _0x569096[_0x33473c(531)](_0x122c76, -738 + -118 * 77 + 9825))['join'](' '));
}
function outputHelpIfNecessary(_0xd38235, _0x58ddcf) {
    var _0x321590 = _0x116c8f, _0x3435af = {
            'MhvOj': function (_0x1bf965, _0x22f517) {
                return _0x1bf965 < _0x22f517;
            },
            'IqPDV': function (_0xae554f, _0xabf398) {
                return _0xae554f == _0xabf398;
            },
            'XoOgP': function (_0x368252, _0xfaa730) {
                return _0x368252 == _0xfaa730;
            }
        };
    _0x58ddcf = _0x58ddcf || [];
    for (var _0xb5e20f = -9207 + 2374 * 2 + 4459; _0x3435af['MhvOj'](_0xb5e20f, _0x58ddcf['length']); _0xb5e20f++) {
        (_0x3435af[_0x321590(533)](_0x58ddcf[_0xb5e20f], _0x321590(396)) || _0x3435af[_0x321590(534)](_0x58ddcf[_0xb5e20f], '-h')) && (_0xd38235[_0x321590(525)](), process[_0x321590(432)](-223 * 1 + 2210 + -1 * 1987));
    }
}
function humanReadableArgName(_0x192cef) {
    var _0x4dec6a = _0x116c8f, _0xc3d7ba = {
            'YFbWc': function (_0xfb63a0, _0x285ec3) {
                return _0xfb63a0 + _0x285ec3;
            },
            'skwRJ': function (_0x2cad2f, _0x3fb252) {
                return _0x2cad2f === _0x3fb252;
            }
        }, _0x18b38d = _0xc3d7ba[_0x4dec6a(535)](_0x192cef[_0x4dec6a(327)], _0xc3d7ba[_0x4dec6a(536)](_0x192cef['variadic'], !![]) ? '...' : '');
    return _0x192cef[_0x4dec6a(317)] ? '<' + _0x18b38d + '>' : _0xc3d7ba[_0x4dec6a(535)]('[', _0x18b38d) + ']';
}
function exists(_0x45831b) {
    var _0x511864 = _0x116c8f;
    try {
        if (fs[_0x511864(537)](_0x45831b)[_0x511864(538)]())
            return !![];
    } catch (_0x381c57) {
        return ![];
    }
}