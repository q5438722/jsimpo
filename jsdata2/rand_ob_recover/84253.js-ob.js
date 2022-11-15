var EventEmitter = require(_0x140e10(441))[_0x140e10(442)], spawn = require('child_process')['spawn'], readlink = require(_0x140e10(443))[_0x140e10(444)], path = require(_0x140e10(445)), dirname = path[_0x140e10(446)], basename = path['basename'], fs = require('fs');
exports = module[_0x140e10(447)] = new Command(), exports['Command'] = Command, exports[_0x140e10(448)] = Option;
function _0x292a(_0x59c378, _0x14f3ff) {
    return _0x292a = function (_0x3bdf71, _0x94e5a0) {
        _0x3bdf71 = _0x3bdf71 - (-3 * 505 + 3 * 993 + -1033 * 1);
        var _0xaa8941 = _0x34cd[_0x3bdf71];
        return _0xaa8941;
    }, _0x292a(_0x59c378, _0x14f3ff);
}
function Option(_0x30774a, _0x25bdd1) {
    var _0x320580 = _0x140e10, _0x3223c4 = {
            'FiJnU': '7|3|1|0|2|5|4|6',
            'BSLFL': function (_0x512609, _0x5e91e5) {
                return _0x512609 > _0x5e91e5;
            }
        }, _0x521925 = _0x3223c4[_0x320580(449)]['split']('|'), _0x125d9d = 1 * -8966 + -5720 + -7343 * -2;
    while (!![]) {
        switch (_0x521925[_0x125d9d++]) {
        case '0':
            this[_0x320580(450)] = !~_0x30774a['indexOf'](_0x320580(451));
            continue;
        case '1':
            this[_0x320580(452)] = ~_0x30774a['indexOf']('[');
            continue;
        case '2':
            _0x30774a = _0x30774a['split'](/[ ,|]+/);
            continue;
        case '3':
            this['required'] = ~_0x30774a[_0x320580(453)]('<');
            continue;
        case '4':
            this[_0x320580(454)] = _0x30774a[_0x320580(455)]();
            continue;
        case '5':
            if (_0x3223c4[_0x320580(456)](_0x30774a[_0x320580(457)], 846 + 9 * 445 + -4850) && !/^[[<]/[_0x320580(458)](_0x30774a[7367 + 7931 + -5099 * 3]))
                this[_0x320580(459)] = _0x30774a[_0x320580(455)]();
            continue;
        case '6':
            this['description'] = _0x25bdd1 || '';
            continue;
        case '7':
            this['flags'] = _0x30774a;
            continue;
        }
        break;
    }
}
Option[_0x140e10(460)][_0x140e10(461)] = function () {
    var _0x8e8be4 = _0x140e10, _0x317e28 = { 'KUEXi': 'no-' };
    return this[_0x8e8be4(454)][_0x8e8be4(462)]('--', '')[_0x8e8be4(462)](_0x317e28[_0x8e8be4(463)], '');
}, Option[_0x140e10(460)]['is'] = function (_0x6515ee) {
    var _0x1fb54f = _0x140e10, _0x36e3b4 = {
            'JBmBh': function (_0xe6545b, _0x185534) {
                return _0xe6545b == _0x185534;
            },
            'UeaAc': function (_0x11c8af, _0x4ff4f5) {
                return _0x11c8af == _0x4ff4f5;
            }
        };
    return _0x36e3b4['JBmBh'](_0x6515ee, this[_0x1fb54f(459)]) || _0x36e3b4[_0x1fb54f(464)](_0x6515ee, this[_0x1fb54f(454)]);
};
function Command(_0x68bb6f) {
    var _0x290bc1 = _0x140e10, _0x33c7f5 = {
            'ZJzMw': function (_0xa72017, _0x421058) {
                return _0xa72017 || _0x421058;
            }
        }, _0x1560af = '3|0|1|4|5|2'[_0x290bc1(465)]('|'), _0x22df1f = -5839 + -378 + 6217;
    while (!![]) {
        switch (_0x1560af[_0x22df1f++]) {
        case '0':
            this[_0x290bc1(466)] = [];
            continue;
        case '1':
            this[_0x290bc1(467)] = {};
            continue;
        case '2':
            this['_name'] = _0x33c7f5[_0x290bc1(468)](_0x68bb6f, '');
            continue;
        case '3':
            this[_0x290bc1(469)] = [];
            continue;
        case '4':
            this[_0x290bc1(470)] = ![];
            continue;
        case '5':
            this[_0x290bc1(471)] = [];
            continue;
        }
        break;
    }
}
Command[_0x140e10(460)][_0x140e10(472)] = EventEmitter[_0x140e10(460)], Command[_0x140e10(460)][_0x140e10(473)] = function (_0x3a5238, _0x353aa8, _0x1b2757) {
    var _0x5ef9b0 = _0x140e10, _0x12c01e = {
            'OgMtA': _0x5ef9b0(474),
            'LwERE': function (_0x528530, _0x9a5ea9) {
                return _0x528530 || _0x9a5ea9;
            }
        }, _0x46072a = _0x12c01e['OgMtA']['split']('|'), _0xc38faa = -1 * 6297 + 6004 + -1 * -293;
    while (!![]) {
        switch (_0x46072a[_0xc38faa++]) {
        case '0':
            if (_0x353aa8) {
                _0x30c61e[_0x5ef9b0(475)](_0x353aa8), this[_0x5ef9b0(476)] = !![], this[_0x5ef9b0(467)][_0x30c61e[_0x5ef9b0(477)]] = !![];
                if (_0x1b2757[_0x5ef9b0(478)])
                    this[_0x5ef9b0(479)] = _0x30c61e[_0x5ef9b0(477)];
            }
            continue;
        case '1':
            var _0x396624 = _0x3a5238[_0x5ef9b0(465)](/ +/);
            continue;
        case '2':
            return _0x30c61e;
        case '3':
            if (_0x353aa8)
                return this;
            continue;
        case '4':
            _0x30c61e[_0x5ef9b0(480)](_0x396624);
            continue;
        case '5':
            _0x1b2757 = _0x12c01e[_0x5ef9b0(481)](_0x1b2757, {});
            continue;
        case '6':
            _0x30c61e[_0x5ef9b0(482)] = this;
            continue;
        case '7':
            var _0x30c61e = new Command(_0x396624[_0x5ef9b0(455)]());
            continue;
        case '8':
            _0x30c61e[_0x5ef9b0(483)] = !!_0x1b2757[_0x5ef9b0(484)];
            continue;
        case '9':
            this[_0x5ef9b0(469)]['push'](_0x30c61e);
            continue;
        }
        break;
    }
}, Command['prototype']['arguments'] = function (_0x558a06) {
    var _0x57e3a4 = _0x140e10;
    return this[_0x57e3a4(480)](_0x558a06[_0x57e3a4(465)](/ +/));
}, Command[_0x140e10(460)]['addImplicitHelpCommand'] = function () {
    var _0xb55976 = _0x140e10, _0x5961f7 = {
            'MwQWs': _0xb55976(485),
            'ejaSG': 'display help for [cmd]'
        };
    this[_0xb55976(473)](_0x5961f7[_0xb55976(486)], _0x5961f7[_0xb55976(487)]);
}, Command['prototype'][_0x140e10(480)] = function (_0x5c8fc8) {
    var _0x222e1f = _0x140e10, _0x103348 = { 'BtABf': '...' };
    if (!_0x5c8fc8['length'])
        return;
    var _0x33cd4e = this;
    return _0x5c8fc8[_0x222e1f(488)](function (_0x488e23) {
        var _0x49fd38 = _0x222e1f, _0x502b23 = {
                'required': ![],
                'name': '',
                'variadic': ![]
            };
        switch (_0x488e23[8 * -148 + 8011 + -6827 * 1]) {
        case '<':
            _0x502b23[_0x49fd38(489)] = !![], _0x502b23['name'] = _0x488e23[_0x49fd38(490)](8761 + 3989 + -12749, -(6247 + 9117 * 1 + -15363));
            break;
        case '[':
            _0x502b23['name'] = _0x488e23[_0x49fd38(490)](-17 * 509 + -9918 + 18572, -(-321 * 23 + -429 * 11 + 12103));
            break;
        }
        _0x502b23[_0x49fd38(461)][_0x49fd38(457)] > 2135 + 2076 + 526 * -8 && _0x502b23['name'][_0x49fd38(490)](-(2 * -1786 + 19 * -66 + 4829)) === _0x103348['BtABf'] && (_0x502b23['variadic'] = !![], _0x502b23['name'] = _0x502b23[_0x49fd38(461)]['slice'](963 * 4 + 9473 + -13325, -(1 * 1153 + -1 * -2311 + -3461 * 1))), _0x502b23[_0x49fd38(461)] && _0x33cd4e['_args'][_0x49fd38(491)](_0x502b23);
    }), this;
}, Command[_0x140e10(460)][_0x140e10(492)] = function (_0x59f82b) {
    var _0x521e4a = _0x140e10, _0x3f766c = {
            'tWpBt': function (_0x5c8ad7, _0x143c40, _0x4ae464) {
                return _0x5c8ad7(_0x143c40, _0x4ae464);
            }
        }, _0x45033f = '4|7|1|2|0|5|6|3'[_0x521e4a(465)]('|'), _0x8b4094 = -5593 + 181 * 23 + -26 * -55;
    while (!![]) {
        switch (_0x45033f[_0x8b4094++]) {
        case '0':
            var _0x27f1a6 = _0x113751 === this ? '*' : this[_0x521e4a(477)];
            continue;
        case '1':
            var _0x27348a = function (_0x892c10, _0x372de1) {
                var _0x36b742 = _0x521e4a, _0x4962e7 = _0x22add3[_0x36b742(493)][_0x36b742(465)]('|'), _0x1bccc9 = -9400 + -13 * 312 + 13456;
                while (!![]) {
                    switch (_0x4962e7[_0x1bccc9++]) {
                    case '0':
                        _0x3c9613[_0x36b742(471)]['length'] ? _0x892c10[_0x3c9613['_args'][_0x36b742(457)]] = _0x3c9613 : _0x892c10[_0x36b742(491)](_0x3c9613);
                        continue;
                    case '1':
                        var _0x347118 = _0x3c9613[_0x36b742(494)](_0x372de1);
                        continue;
                    case '2':
                        _0x3c9613[_0x36b742(471)][_0x36b742(488)](function (_0x34f031, _0x4ecf48) {
                            var _0x23f0e1 = _0x36b742;
                            if (_0x34f031[_0x23f0e1(489)] && null == _0x892c10[_0x4ecf48])
                                _0x3c9613['missingArgument'](_0x34f031[_0x23f0e1(461)]);
                            else
                                _0x34f031[_0x23f0e1(495)] && (_0x4ecf48 !== _0x7d17df['JwoWa'](_0x3c9613[_0x23f0e1(471)][_0x23f0e1(457)], -3730 + -1434 * 3 + 8033) && _0x3c9613['variadicArgNotLast'](_0x34f031['name']), _0x892c10[_0x4ecf48] = _0x892c10[_0x23f0e1(496)](_0x4ecf48));
                        });
                        continue;
                    case '3':
                        _0x372de1 = _0x372de1 || [];
                        continue;
                    case '4':
                        _0x22add3[_0x36b742(497)](outputHelpIfNecessary, _0x3c9613, _0x347118['unknown']);
                        continue;
                    case '5':
                        var _0x7d17df = {
                            'JwoWa': function (_0x1113f5, _0x2c1649) {
                                return _0x1113f5 - _0x2c1649;
                            }
                        };
                        continue;
                    case '6':
                        _0x59f82b['apply'](_0x3c9613, _0x892c10);
                        continue;
                    case '7':
                        if (_0x347118[_0x36b742(498)]['length'])
                            _0x892c10 = _0x347118[_0x36b742(498)][_0x36b742(499)](_0x892c10);
                        continue;
                    case '8':
                        _0x22add3[_0x36b742(500)](_0x347118[_0x36b742(501)][_0x36b742(457)], -15 * -50 + -198 * -26 + -1966 * 3) && _0x3c9613[_0x36b742(502)](_0x347118[_0x36b742(501)][-5397 + 865 + -412 * -11]);
                        continue;
                    case '9':
                        _0x892c10 = _0x892c10 || [];
                        continue;
                    }
                    break;
                }
            };
            continue;
        case '2':
            var _0x113751 = this[_0x521e4a(482)] || this;
            continue;
        case '3':
            return this;
        case '4':
            var _0x22add3 = {
                'QfpPf': _0x521e4a(503),
                'fHIhR': function (_0x15bac1, _0x4df29e, _0x22310e) {
                    var _0x3b137a = _0x521e4a;
                    return _0x3f766c[_0x3b137a(504)](_0x15bac1, _0x4df29e, _0x22310e);
                },
                'crevG': function (_0x46171a, _0x394066) {
                    return _0x46171a > _0x394066;
                }
            };
            continue;
        case '5':
            _0x113751['on'](_0x27f1a6, _0x27348a);
            continue;
        case '6':
            if (this[_0x521e4a(505)])
                _0x113751['on'](this[_0x521e4a(505)], _0x27348a);
            continue;
        case '7':
            var _0x3c9613 = this;
            continue;
        }
        break;
    }
}, Command[_0x140e10(460)][_0x140e10(506)] = function (_0x2f0610, _0x1ec034, _0x5a7b2e, _0x1ed3ba) {
    var _0x1aadeb = _0x140e10, _0x301ac6 = {
            'QcwRy': _0x1aadeb(507),
            'mOOBX': function (_0x4c7e66, _0x2fee97) {
                return _0x4c7e66 instanceof _0x2fee97;
            },
            'ZGOoZ': function (_0x5ccb88, _0x92b29b) {
                return _0x5ccb88 == _0x92b29b;
            },
            'OPKWN': function (_0x1c594e, _0x193233) {
                return _0x1c594e !== _0x193233;
            },
            'RgWAD': function (_0x2dd6b0, _0x34c773) {
                return _0x2dd6b0 === _0x34c773;
            },
            'NbrUZ': function (_0x31925c, _0x3268bb) {
                return _0x31925c == _0x3268bb;
            },
            'DANTX': _0x1aadeb(508),
            'Xtbii': function (_0xdc324b, _0x1a5096) {
                return _0xdc324b || _0x1a5096;
            }
        }, _0x15d6bd = _0x301ac6[_0x1aadeb(509)]['split']('|'), _0x42dbd = 3325 + 6917 + -6 * 1707;
    while (!![]) {
        switch (_0x15d6bd[_0x42dbd++]) {
        case '0':
            this['options'][_0x1aadeb(491)](_0x2d6d23);
            continue;
        case '1':
            this['on'](_0x60b239, function (_0xcdbef) {
                var _0x235c88 = _0x1aadeb;
                if (_0x1dc72c[_0x235c88(510)](null, _0xcdbef) && _0x5a7b2e)
                    _0xcdbef = _0x5a7b2e(_0xcdbef, _0x1dc72c['UncfZ'](undefined, _0xf78904[_0x2f9064]) ? _0x1ed3ba : _0xf78904[_0x2f9064]);
                if (_0x1dc72c['EKoCX'](_0x1dc72c[_0x235c88(511)], typeof _0xf78904[_0x2f9064]) || _0x1dc72c[_0x235c88(512)](_0x1dc72c[_0x235c88(513)], typeof _0xf78904[_0x2f9064]))
                    _0x1dc72c[_0x235c88(512)](null, _0xcdbef) ? _0xf78904[_0x2f9064] = _0x2d6d23['bool'] ? _0x1dc72c['zXWkO'](_0x1ed3ba, !![]) : ![] : _0xf78904[_0x2f9064] = _0xcdbef;
                else
                    null !== _0xcdbef && (_0xf78904[_0x2f9064] = _0xcdbef);
            });
            continue;
        case '2':
            if (typeof _0x5a7b2e != _0x1aadeb(514)) {
                if (_0x301ac6[_0x1aadeb(515)](_0x5a7b2e, RegExp)) {
                    var _0x1bceba = _0x5a7b2e;
                    _0x5a7b2e = function (_0x28f0f6, _0x2452a1) {
                        var _0x224008 = _0x1bceba['exec'](_0x28f0f6);
                        return _0x224008 ? _0x224008[214 * 20 + -2064 + -554 * 4] : _0x2452a1;
                    };
                } else
                    _0x1ed3ba = _0x5a7b2e, _0x5a7b2e = null;
            }
            continue;
        case '3':
            var _0xf78904 = this, _0x2d6d23 = new Option(_0x2f0610, _0x1ec034), _0x60b239 = _0x2d6d23[_0x1aadeb(461)](), _0x2f9064 = camelcase(_0x60b239);
            continue;
        case '4':
            if (![] == _0x2d6d23[_0x1aadeb(450)] || _0x2d6d23[_0x1aadeb(452)] || _0x2d6d23['required']) {
                if (_0x301ac6['ZGOoZ'](![], _0x2d6d23[_0x1aadeb(450)]))
                    _0x1ed3ba = !![];
                if (_0x301ac6[_0x1aadeb(516)](undefined, _0x1ed3ba))
                    _0xf78904[_0x2f9064] = _0x1ed3ba;
            }
            continue;
        case '5':
            return this;
        case '6':
            var _0x1dc72c = {
                'Lqxce': function (_0x263d34, _0x357e42) {
                    return _0x263d34 !== _0x357e42;
                },
                'UncfZ': function (_0x204167, _0x4897ae) {
                    var _0x138f43 = _0x1aadeb;
                    return _0x301ac6[_0x138f43(517)](_0x204167, _0x4897ae);
                },
                'EKoCX': function (_0x24782b, _0x1a948b) {
                    var _0x8c1d1e = _0x1aadeb;
                    return _0x301ac6[_0x8c1d1e(518)](_0x24782b, _0x1a948b);
                },
                'kFfyo': 'boolean',
                'vqSTS': function (_0x1c36c5, _0x398179) {
                    return _0x1c36c5 == _0x398179;
                },
                'KKYUy': _0x301ac6[_0x1aadeb(519)],
                'zXWkO': function (_0x1f9b5c, _0x23441b) {
                    var _0x25b971 = _0x1aadeb;
                    return _0x301ac6[_0x25b971(520)](_0x1f9b5c, _0x23441b);
                }
            };
            continue;
        }
        break;
    }
}, Command[_0x140e10(460)][_0x140e10(521)] = function (_0x439e60) {
    var _0x199c31 = _0x140e10, _0x488101 = {
            'fRmgU': function (_0x5543d5, _0x512552) {
                return _0x5543d5 === _0x512552;
            }
        };
    return this[_0x199c31(470)] = _0x488101['fRmgU'](arguments[_0x199c31(457)], -16 * 517 + 7354 + -18 * -51) || _0x439e60, this;
}, Command[_0x140e10(460)][_0x140e10(522)] = function (_0x2639f5) {
    var _0x21fc53 = _0x140e10, _0x43446 = {
            'degaE': _0x21fc53(523),
            'NDDwa': function (_0x52257a, _0x52e14e) {
                return _0x52257a != _0x52e14e;
            },
            'RBnUU': _0x21fc53(514),
            'tRVAh': function (_0x1b1506, _0x3f4b12) {
                return _0x1b1506 < _0x3f4b12;
            },
            'NVkli': '--help',
            'SQywo': function (_0x5a1193, _0x8b72b4, _0x4b5253) {
                return _0x5a1193(_0x8b72b4, _0x4b5253);
            },
            'kXwjX': '.js'
        }, _0x448a5b = _0x43446[_0x21fc53(524)][_0x21fc53(465)]('|'), _0x3677e9 = 7320 + -3 * -3217 + -5657 * 3;
    while (!![]) {
        switch (_0x448a5b[_0x3677e9++]) {
        case '0':
            if (this['_execs'][_0x1ade77] && _0x43446['NDDwa'](typeof this[_0x21fc53(467)][_0x1ade77], _0x43446[_0x21fc53(525)]))
                return this[_0x21fc53(526)](_0x2639f5, _0x5bae65, _0x11bd00['unknown']);
            else {
                if (this['defaultExecutable'])
                    return _0x5bae65[_0x21fc53(527)](_0x1ade77 = this[_0x21fc53(479)]), this[_0x21fc53(526)](_0x2639f5, _0x5bae65, _0x11bd00[_0x21fc53(501)]);
            }
            continue;
        case '1':
            return _0x45741f;
        case '2':
            var _0x1ade77 = _0x45741f[_0x21fc53(498)][15 * 9 + -1 * 275 + 140];
            continue;
        case '3':
            this['executables'] && _0x43446[_0x21fc53(528)](_0x2639f5[_0x21fc53(457)], 9 * 759 + 5582 + -12410 * 1) && !this[_0x21fc53(479)] && _0x2639f5[_0x21fc53(491)](_0x43446[_0x21fc53(529)]);
            continue;
        case '4':
            if (this[_0x21fc53(476)])
                this['addImplicitHelpCommand']();
            continue;
        case '5':
            var _0x45741f = this[_0x21fc53(530)](this[_0x21fc53(498)], _0x11bd00[_0x21fc53(501)]);
            continue;
        case '6':
            this[_0x21fc53(531)] = _0x2639f5;
            continue;
        case '7':
            var _0x11bd00 = this[_0x21fc53(494)](this[_0x21fc53(532)](_0x2639f5['slice'](67 * 2 + 1 * -6083 + 5951)));
            continue;
        case '8':
            var _0x5bae65 = this[_0x21fc53(498)] = _0x11bd00[_0x21fc53(498)];
            continue;
        case '9':
            this[_0x21fc53(477)] = this[_0x21fc53(477)] || _0x43446['SQywo'](basename, _0x2639f5[561 + 2319 + -2879 * 1], _0x43446['kXwjX']);
            continue;
        }
        break;
    }
}, Command[_0x140e10(460)]['executeSubCommand'] = function (_0x58f5f2, _0x1b26fe, _0x8b452) {
    var _0x499ecf = _0x140e10, _0x35ae1b = {
            'JGDIi': function (_0x498e2c, _0x1a3a47) {
                return _0x498e2c !== _0x1a3a47;
            },
            'kzsbx': function (_0x515b6b, _0x292317) {
                return _0x515b6b !== _0x292317;
            },
            'TSEpJ': function (_0x4c4f4c, _0x322cd0) {
                return _0x4c4f4c(_0x322cd0);
            },
            'DjbEy': _0x499ecf(533),
            'rGyUc': function (_0x2c20b8, _0x333e47) {
                return _0x2c20b8(_0x333e47);
            },
            'AakdG': _0x499ecf(534),
            'oVIsc': _0x499ecf(535),
            'ZmaSD': _0x499ecf(536),
            'FeJyU': function (_0x2ffa61, _0x5c9ffd) {
                return _0x2ffa61 == _0x5c9ffd;
            },
            'WnnNg': _0x499ecf(537),
            'zppXx': function (_0x388c14, _0x59c88d, _0xf1f2b5, _0x452254) {
                return _0x388c14(_0x59c88d, _0xf1f2b5, _0x452254);
            },
            'grLtQ': 'inherit',
            'OIqiv': 'help',
            'tkFPX': function (_0x5b14a1, _0x481855) {
                return _0x5b14a1 + _0x481855;
            },
            'VawnK': '.js',
            'REqEw': function (_0x15a8de, _0x52b425) {
                return _0x15a8de(_0x52b425);
            },
            'BhmFN': function (_0x4a33af, _0x482b7e) {
                return _0x4a33af + _0x482b7e;
            },
            'aDebi': function (_0x3feb84, _0x191948, _0x6cc0fc) {
                return _0x3feb84(_0x191948, _0x6cc0fc);
            }
        }, _0x247125 = '8|14|11|16|10|5|18|3|0|9|13|15|17|7|1|12|2|4|6'[_0x499ecf(465)]('|'), _0x8cbf5d = -502 * -11 + 9659 + 47 * -323;
    while (!![]) {
        switch (_0x247125[_0x8cbf5d++]) {
        case '0':
            _0x35ae1b[_0x499ecf(538)](_0x1595b3, _0x2a0f26) && _0x35ae1b[_0x499ecf(539)](_0x1595b3['charAt'](-8354 + -565 * -7 + 4399), '/') && (_0x1595b3 = path[_0x499ecf(540)](_0x35ae1b[_0x499ecf(541)](dirname, _0x2a0f26), _0x1595b3));
            continue;
        case '1':
            var _0x11701a;
            continue;
        case '2':
            _0x11701a['on'](_0x35ae1b[_0x499ecf(542)], process[_0x499ecf(543)][_0x499ecf(544)](process));
            continue;
        case '3':
            var _0x2eeed1, _0x1595b3 = _0x35ae1b[_0x499ecf(545)](readlink, _0x2a0f26);
            continue;
        case '4':
            _0x11701a['on'](_0x499ecf(546), function (_0x312ade) {
                var _0x50727d = _0x499ecf;
                if (_0x312ade[_0x50727d(547)] == _0x39e7ed[_0x50727d(548)])
                    console[_0x50727d(546)](_0x39e7ed[_0x50727d(549)], _0x5ae1c5);
                else
                    _0x312ade[_0x50727d(547)] == _0x39e7ed[_0x50727d(550)] && console[_0x50727d(546)](_0x39e7ed[_0x50727d(551)], _0x5ae1c5);
                process[_0x50727d(543)](-49 * 30 + 3 * 2122 + -4895);
            });
            continue;
        case '5':
            var _0x2a0f26 = _0x58f5f2[-1 * 3518 + 5818 + -2299 * 1];
            continue;
        case '6':
            this[_0x499ecf(552)] = _0x11701a;
            continue;
        case '7':
            _0x1b26fe = _0x1b26fe['slice'](-211 * 19 + -4615 + -25 * -345);
            continue;
        case '8':
            var _0x39e7ed = {
                'lnwPk': _0x35ae1b[_0x499ecf(553)],
                'ftOhd': _0x35ae1b[_0x499ecf(554)],
                'hxmRZ': _0x35ae1b['ZmaSD'],
                'nqBnz': _0x499ecf(555)
            };
            continue;
        case '9':
            _0x2eeed1 = dirname(_0x1595b3);
            continue;
        case '10':
            _0x35ae1b[_0x499ecf(556)](_0x499ecf(557), _0x1b26fe[-5850 + -7427 + 13277 * 1]) && (_0x1b26fe[-9499 + 5586 + 3913] = _0x1b26fe[-208 * 26 + 8943 + -3534], _0x1b26fe[140 * -67 + 6446 + -2935 * -1] = _0x35ae1b[_0x499ecf(558)]);
            continue;
        case '11':
            if (!_0x1b26fe[_0x499ecf(457)])
                this[_0x499ecf(557)]();
            continue;
        case '12':
            _0x35ae1b[_0x499ecf(539)](process[_0x499ecf(559)], _0x499ecf(560)) ? _0x44cbf6 ? (_0x1b26fe[_0x499ecf(527)](_0xf43891), _0x1b26fe = (process[_0x499ecf(561)] || [])[_0x499ecf(499)](_0x1b26fe), _0x11701a = _0x35ae1b['zppXx'](spawn, _0x499ecf(562), _0x1b26fe, {
                'stdio': _0x35ae1b['grLtQ'],
                'customFds': [
                    -9 * -778 + 6330 + 303 * -44,
                    -2911 + -68 * -94 + -580 * 6,
                    1 * -9611 + -6103 + 15716
                ]
            })) : _0x11701a = spawn(_0x5ae1c5, _0x1b26fe, {
                'stdio': _0x35ae1b[_0x499ecf(563)],
                'customFds': [
                    -857 * 1 + 10 * -328 + 4137,
                    223 * 33 + -6386 + -972,
                    -6434 + -4 * 1735 + 13376
                ]
            }) : (_0x1b26fe['unshift'](_0xf43891), _0x11701a = _0x35ae1b[_0x499ecf(564)](spawn, process[_0x499ecf(565)], _0x1b26fe, { 'stdio': _0x35ae1b[_0x499ecf(563)] }));
            continue;
        case '13':
            var _0xf43891 = path[_0x499ecf(540)](_0x2eeed1, _0x5ae1c5);
            continue;
        case '14':
            _0x1b26fe = _0x1b26fe[_0x499ecf(499)](_0x8b452);
            continue;
        case '15':
            var _0x44cbf6 = ![];
            continue;
        case '16':
            if (_0x35ae1b['FeJyU'](_0x35ae1b[_0x499ecf(566)], _0x1b26fe[-1729 * -2 + 5502 + 560 * -16]) && _0x35ae1b['FeJyU'](178 * 46 + -7743 + -1 * 444, _0x1b26fe['length']))
                this[_0x499ecf(557)]();
            continue;
        case '17':
            if (exists(_0x35ae1b[_0x499ecf(567)](_0xf43891, _0x35ae1b[_0x499ecf(568)])))
                _0x5ae1c5 = _0x35ae1b['tkFPX'](_0xf43891, '.js'), _0x44cbf6 = !![];
            else
                _0x35ae1b['REqEw'](exists, _0xf43891) && (_0x5ae1c5 = _0xf43891);
            continue;
        case '18':
            var _0x5ae1c5 = _0x35ae1b[_0x499ecf(569)](_0x35ae1b[_0x499ecf(570)](basename, _0x2a0f26, _0x35ae1b['VawnK']) + '-', _0x1b26fe[409 * -3 + 2018 * 2 + -2809]);
            continue;
        }
        break;
    }
}, Command[_0x140e10(460)][_0x140e10(532)] = function (_0x1c4225) {
    var _0x337f3a = _0x140e10, _0x3d63bd = {
            'kuiMJ': function (_0x5ffedd, _0x336104) {
                return _0x5ffedd + _0x336104;
            },
            'heFKQ': function (_0x2880af, _0x52ad4d) {
                return _0x2880af > _0x52ad4d;
            },
            'vzxVU': function (_0x149081, _0x3228bd) {
                return _0x149081 === _0x3228bd;
            },
            'vFlHm': function (_0x19fec3, _0x4f868d) {
                return _0x19fec3 != _0x4f868d;
            },
            'bwvZn': function (_0x304f06, _0x55a545) {
                return _0x304f06 + _0x55a545;
            }
        }, _0x497d21 = [], _0x233aa3, _0x51d31e, _0x20a7b2;
    for (var _0x19a71d = -6964 + 8163 + 1199 * -1, _0x4f1fba = _0x1c4225[_0x337f3a(457)]; _0x19a71d < _0x4f1fba; ++_0x19a71d) {
        _0x233aa3 = _0x1c4225[_0x19a71d];
        _0x3d63bd[_0x337f3a(571)](_0x19a71d, -3705 + -3 * 2937 + 12516) && (_0x51d31e = this[_0x337f3a(572)](_0x1c4225[_0x19a71d - (-1 * -3994 + -7851 + 643 * 6)]));
        if (_0x3d63bd[_0x337f3a(573)](_0x233aa3, '--')) {
            _0x497d21 = _0x497d21['concat'](_0x1c4225[_0x337f3a(490)](_0x19a71d));
            break;
        } else {
            if (_0x51d31e && _0x51d31e['required'])
                _0x497d21[_0x337f3a(491)](_0x233aa3);
            else {
                if (_0x3d63bd['heFKQ'](_0x233aa3['length'], 893 + -179 * -47 + -1861 * 5) && '-' == _0x233aa3[1660 * 4 + -6312 + -8 * 41] && _0x3d63bd[_0x337f3a(574)]('-', _0x233aa3[-111 * 62 + -3561 * -1 + 11 * 302]))
                    _0x233aa3[_0x337f3a(490)](7530 + 6229 + -13758)['split']('')[_0x337f3a(488)](function (_0x6fa3ee) {
                        var _0xa8c665 = _0x337f3a;
                        _0x497d21['push'](_0x3d63bd[_0xa8c665(575)]('-', _0x6fa3ee));
                    });
                else
                    /^--/[_0x337f3a(458)](_0x233aa3) && ~(_0x20a7b2 = _0x233aa3[_0x337f3a(453)]('=')) ? _0x497d21[_0x337f3a(491)](_0x233aa3[_0x337f3a(490)](-13 * 679 + -6458 + -15 * -1019, _0x20a7b2), _0x233aa3[_0x337f3a(490)](_0x3d63bd[_0x337f3a(576)](_0x20a7b2, 1483 * -4 + 2 * -4775 + 15483))) : _0x497d21[_0x337f3a(491)](_0x233aa3);
            }
        }
    }
    return _0x497d21;
}, Command[_0x140e10(460)][_0x140e10(530)] = function (_0x1a5e7b, _0x2fa97b) {
    var _0x26db1e = _0x140e10, _0x3cb9eb;
    return _0x1a5e7b[_0x26db1e(457)] ? (_0x3cb9eb = _0x1a5e7b[457 * -19 + -2 * 1921 + 12525], this[_0x26db1e(577)](_0x3cb9eb)[_0x26db1e(457)] ? this['emit'](_0x1a5e7b[_0x26db1e(455)](), _0x1a5e7b, _0x2fa97b) : this['emit']('*', _0x1a5e7b)) : (outputHelpIfNecessary(this, _0x2fa97b), _0x2fa97b[_0x26db1e(457)] > 147 * 10 + -4371 + 2901 && this[_0x26db1e(502)](_0x2fa97b[6100 + 3347 * -1 + -1 * 2753])), this;
}, Command['prototype'][_0x140e10(572)] = function (_0x32cd33) {
    var _0x48fd25 = _0x140e10, _0xe5b372 = {
            'DPLxQ': function (_0x38109a, _0x1340cc) {
                return _0x38109a < _0x1340cc;
            }
        };
    for (var _0xa231d7 = 803 + -2395 * -4 + -10383, _0x57e4bc = this[_0x48fd25(466)][_0x48fd25(457)]; _0xe5b372[_0x48fd25(578)](_0xa231d7, _0x57e4bc); ++_0xa231d7) {
        if (this[_0x48fd25(466)][_0xa231d7]['is'](_0x32cd33))
            return this['options'][_0xa231d7];
    }
}, Command['prototype'][_0x140e10(494)] = function (_0xc7746a) {
    var _0x494ff0 = _0x140e10, _0xcb0865 = {
            'DHJnB': function (_0x20c5d3, _0x593f9a) {
                return _0x20c5d3 == _0x593f9a;
            },
            'rKiBA': function (_0x4a8073, _0x26a3d3) {
                return _0x4a8073 == _0x26a3d3;
            },
            'mpHUM': function (_0x28a784, _0x27250f) {
                return _0x28a784 + _0x27250f;
            },
            'ppJPV': function (_0x2e3e9a, _0x555eaa) {
                return _0x2e3e9a > _0x555eaa;
            },
            'IkncG': function (_0x517d70, _0x23a4dc) {
                return _0x517d70 + _0x23a4dc;
            }
        }, _0x835575 = [], _0x3b4cff = _0xc7746a['length'], _0x41bb5e, _0x2227c8, _0x497228, _0x5bcba8 = [];
    for (var _0x5bfb85 = -9302 + 16 * -376 + 15318; _0x5bfb85 < _0x3b4cff; ++_0x5bfb85) {
        _0x497228 = _0xc7746a[_0x5bfb85];
        if (_0xcb0865['DHJnB']('--', _0x497228)) {
            _0x41bb5e = !![];
            continue;
        }
        if (_0x41bb5e) {
            _0x835575[_0x494ff0(491)](_0x497228);
            continue;
        }
        _0x2227c8 = this[_0x494ff0(572)](_0x497228);
        if (_0x2227c8) {
            if (_0x2227c8['required']) {
                _0x497228 = _0xc7746a[++_0x5bfb85];
                if (_0xcb0865[_0x494ff0(579)](null, _0x497228))
                    return this[_0x494ff0(580)](_0x2227c8);
                this[_0x494ff0(581)](_0x2227c8[_0x494ff0(461)](), _0x497228);
            } else
                _0x2227c8['optional'] ? (_0x497228 = _0xc7746a[_0xcb0865[_0x494ff0(582)](_0x5bfb85, -1 * -337 + 3 * 1223 + -4005)], _0xcb0865[_0x494ff0(579)](null, _0x497228) || _0xcb0865[_0x494ff0(579)]('-', _0x497228[6 * 883 + 3617 + -8915]) && '-' != _0x497228 ? _0x497228 = null : ++_0x5bfb85, this['emit'](_0x2227c8['name'](), _0x497228)) : this[_0x494ff0(581)](_0x2227c8[_0x494ff0(461)]());
            continue;
        }
        if (_0xcb0865[_0x494ff0(583)](_0x497228[_0x494ff0(457)], 91 * 31 + 821 * -2 + -1178) && '-' == _0x497228[-7860 + 4034 * -1 + 11894]) {
            _0x5bcba8[_0x494ff0(491)](_0x497228);
            _0xc7746a[_0xcb0865[_0x494ff0(584)](_0x5bfb85, 6895 + -5863 + -1031)] && '-' != _0xc7746a[_0xcb0865[_0x494ff0(584)](_0x5bfb85, -31 * 106 + -2821 + 6108)][3 * -153 + 1 * -7745 + 14 * 586] && _0x5bcba8[_0x494ff0(491)](_0xc7746a[++_0x5bfb85]);
            continue;
        }
        _0x835575[_0x494ff0(491)](_0x497228);
    }
    return {
        'args': _0x835575,
        'unknown': _0x5bcba8
    };
}, Command[_0x140e10(460)][_0x140e10(585)] = function () {
    var _0x227d27 = _0x140e10, _0x292276 = {
            'GFOJO': function (_0x27be9f, _0x455e8f) {
                return _0x27be9f < _0x455e8f;
            },
            'wHOMF': function (_0x38298b, _0x309108) {
                return _0x38298b(_0x309108);
            },
            'EuDwk': function (_0x2c0033, _0x16b838) {
                return _0x2c0033 === _0x16b838;
            },
            'bszpc': _0x227d27(586)
        }, _0x1b029f = {}, _0x4e5afe = this[_0x227d27(466)]['length'];
    for (var _0x138551 = 6980 + -8480 + 5 * 300; _0x292276[_0x227d27(587)](_0x138551, _0x4e5afe); _0x138551++) {
        var _0x55d52a = _0x292276['wHOMF'](camelcase, this['options'][_0x138551]['name']());
        _0x1b029f[_0x55d52a] = _0x292276['EuDwk'](_0x55d52a, _0x292276[_0x227d27(588)]) ? this[_0x227d27(589)] : this[_0x55d52a];
    }
    return _0x1b029f;
}, Command['prototype']['missingArgument'] = function (_0x903e42) {
    var _0x5a1939 = _0x140e10, _0x52d55b = { 'cZbDp': _0x5a1939(590) };
    console[_0x5a1939(546)](), console[_0x5a1939(546)](_0x52d55b[_0x5a1939(591)], _0x903e42), console['error'](), process['exit'](2826 * 3 + 3856 + -3 * 4111);
}, Command[_0x140e10(460)][_0x140e10(580)] = function (_0x36f2cf, _0x1636c1) {
    var _0x19f076 = _0x140e10, _0x14a3bc = {
            'eKRYi': '  error: option `%s\' argument missing, got `%s\'',
            'REpWe': _0x19f076(592)
        };
    console[_0x19f076(546)](), _0x1636c1 ? console[_0x19f076(546)](_0x14a3bc[_0x19f076(593)], _0x36f2cf[_0x19f076(594)], _0x1636c1) : console[_0x19f076(546)](_0x14a3bc[_0x19f076(595)], _0x36f2cf[_0x19f076(594)]), console[_0x19f076(546)](), process[_0x19f076(543)](3744 + -393 * 1 + -1675 * 2);
}, Command['prototype']['unknownOption'] = function (_0x1d6b4b) {
    var _0x44b515 = _0x140e10, _0x1ef4db = { 'cdvjY': _0x44b515(596) }, _0x4b0a0e = _0x1ef4db[_0x44b515(597)]['split']('|'), _0x535366 = -881 * 11 + 7634 + 2057;
    while (!![]) {
        switch (_0x4b0a0e[_0x535366++]) {
        case '0':
            console[_0x44b515(546)]();
            continue;
        case '1':
            process['exit'](-9472 + -17 * -566 + -149);
            continue;
        case '2':
            console[_0x44b515(546)]('  error: unknown option `%s\'', _0x1d6b4b);
            continue;
        case '3':
            if (this[_0x44b515(470)])
                return;
            continue;
        case '4':
            console['error']();
            continue;
        }
        break;
    }
}, Command['prototype']['variadicArgNotLast'] = function (_0x4e122c) {
    var _0x1533bf = _0x140e10;
    console[_0x1533bf(546)](), console[_0x1533bf(546)]('  error: variadic arguments must be last `%s\'', _0x4e122c), console[_0x1533bf(546)](), process['exit'](-1 * -3487 + -27 * -127 + -15 * 461);
}, Command[_0x140e10(460)][_0x140e10(586)] = function (_0x43f705, _0x115aa0) {
    var _0xe19ad0 = _0x140e10, _0x2a0dd8 = {
            'KxnSN': _0xe19ad0(598),
            'gXyFb': function (_0x1cf8f2, _0x4dab32) {
                return _0x1cf8f2 + _0x4dab32;
            },
            'dSkYh': _0xe19ad0(586),
            'FldIT': 'output the version number',
            'OdeBq': function (_0x1055b9, _0x4e2ec3) {
                return _0x1055b9 == _0x4e2ec3;
            },
            'suVBe': function (_0x584fe7, _0x298553) {
                return _0x584fe7 || _0x298553;
            },
            'dnjYL': '-V, --version'
        }, _0x48791f = _0x2a0dd8[_0xe19ad0(599)][_0xe19ad0(465)]('|'), _0x28e5ef = 11 * -383 + -7040 + 11253;
    while (!![]) {
        switch (_0x48791f[_0x28e5ef++]) {
        case '0':
            return this;
        case '1':
            var _0x596554 = {
                'GaRGg': function (_0x60a0af, _0x19cd5f) {
                    var _0x108ff1 = _0xe19ad0;
                    return _0x2a0dd8[_0x108ff1(600)](_0x60a0af, _0x19cd5f);
                }
            };
            continue;
        case '2':
            this['on'](_0x2a0dd8[_0xe19ad0(601)], function () {
                var _0x54e2ea = _0xe19ad0;
                process['stdout'][_0x54e2ea(602)](_0x596554['GaRGg'](_0x43f705, '\n')), process[_0x54e2ea(543)](-2830 + 298 * 4 + 273 * 6);
            });
            continue;
        case '3':
            this['_version'] = _0x43f705;
            continue;
        case '4':
            this['option'](_0x115aa0, _0x2a0dd8['FldIT']);
            continue;
        case '5':
            if (_0x2a0dd8[_0xe19ad0(603)](-9587 + 4290 + 5297, arguments[_0xe19ad0(457)]))
                return this[_0xe19ad0(589)];
            continue;
        case '6':
            _0x115aa0 = _0x2a0dd8[_0xe19ad0(604)](_0x115aa0, _0x2a0dd8[_0xe19ad0(605)]);
            continue;
        }
        break;
    }
}, Command[_0x140e10(460)][_0x140e10(475)] = function (_0x2f2737) {
    var _0x24f928 = _0x140e10;
    if (3748 + 169 * -25 + 53 * 9 === arguments[_0x24f928(457)])
        return this['_description'];
    return this[_0x24f928(606)] = _0x2f2737, this;
}, Command[_0x140e10(460)]['alias'] = function (_0x33b398) {
    var _0x160c69 = _0x140e10, _0x505013 = {
            'oSfjr': function (_0x663f01, _0x1502cd) {
                return _0x663f01 == _0x1502cd;
            }
        };
    if (_0x505013['oSfjr'](1 * -9978 + -9976 + 2 * 9977, arguments[_0x160c69(457)]))
        return this['_alias'];
    return this[_0x160c69(505)] = _0x33b398, this;
}, Command[_0x140e10(460)][_0x140e10(607)] = function (_0x42e112) {
    var _0x35a781 = _0x140e10, _0x3857f8 = {
            'mgRPf': '4|1|3|0|2',
            'rERCH': function (_0x7caf6, _0x357fdb) {
                return _0x7caf6 + _0x357fdb;
            },
            'wrTEm': _0x35a781(608),
            'RfoFC': function (_0x540c43, _0x5ef784) {
                return _0x540c43 == _0x5ef784;
            }
        }, _0x20341a = _0x3857f8[_0x35a781(609)]['split']('|'), _0x37821e = -2 * -1741 + -5551 + 1 * 2069;
    while (!![]) {
        switch (_0x20341a[_0x37821e++]) {
        case '0':
            this[_0x35a781(610)] = _0x42e112;
            continue;
        case '1':
            var _0x49b88d = _0x3857f8[_0x35a781(611)](_0x3857f8[_0x35a781(611)](_0x35a781(612), this[_0x35a781(469)][_0x35a781(457)] ? _0x3857f8['wrTEm'] : ''), this[_0x35a781(471)][_0x35a781(457)] ? _0x3857f8[_0x35a781(611)](' ', _0x1b5603['join'](' ')) : '');
            continue;
        case '2':
            return this;
        case '3':
            if (_0x3857f8[_0x35a781(613)](-7463 + -11 * 491 + 12864, arguments[_0x35a781(457)]))
                return this[_0x35a781(610)] || _0x49b88d;
            continue;
        case '4':
            var _0x1b5603 = this[_0x35a781(471)][_0x35a781(614)](function (_0x51e417) {
                return humanReadableArgName(_0x51e417);
            });
            continue;
        }
        break;
    }
}, Command['prototype']['name'] = function () {
    var _0x42bb23 = _0x140e10;
    return this[_0x42bb23(477)];
}, Command[_0x140e10(460)][_0x140e10(615)] = function () {
    var _0x31cede = _0x140e10;
    return this[_0x31cede(466)][_0x31cede(616)](function (_0x50cc8d, _0x1d738d) {
        var _0xaff2b0 = _0x31cede;
        return Math[_0xaff2b0(617)](_0x50cc8d, _0x1d738d[_0xaff2b0(594)][_0xaff2b0(457)]);
    }, 1256 + -5 * -1076 + -6636);
}, Command[_0x140e10(460)]['optionHelp'] = function () {
    var _0x449913 = _0x140e10, _0x53b5fa = {
            'dcrsE': function (_0x2f32d3, _0x597a23) {
                return _0x2f32d3 + _0x597a23;
            },
            'prxxz': function (_0x5b6f5f, _0x46d1e7, _0x2cbafd) {
                return _0x5b6f5f(_0x46d1e7, _0x2cbafd);
            },
            'bgQbY': function (_0x58731d, _0x582591) {
                return _0x58731d + _0x582591;
            },
            'EAdMV': function (_0x9a08aa, _0x9fd879) {
                return _0x9a08aa + _0x9fd879;
            },
            'aRXIa': _0x449913(618),
            'XpNzu': 'output usage information'
        }, _0x8b006b = this[_0x449913(615)]();
    return [_0x53b5fa[_0x449913(619)](_0x53b5fa[_0x449913(620)](pad(_0x53b5fa[_0x449913(621)], _0x8b006b), '  '), _0x53b5fa[_0x449913(622)])][_0x449913(499)](this[_0x449913(466)][_0x449913(614)](function (_0x30f2e0) {
        var _0xbb81d8 = _0x449913;
        return _0x53b5fa[_0xbb81d8(623)](_0x53b5fa['dcrsE'](_0x53b5fa[_0xbb81d8(624)](pad, _0x30f2e0[_0xbb81d8(594)], _0x8b006b), '  '), _0x30f2e0['description']);
    }))[_0x449913(540)]('\n');
}, Command[_0x140e10(460)][_0x140e10(625)] = function () {
    var _0xf8cdd9 = _0x140e10, _0x73e96b = {
            'BouMm': function (_0x11f978, _0x59644e) {
                return _0x11f978 + _0x59644e;
            },
            'HIvjL': _0xf8cdd9(626),
            'KSOJV': function (_0xc295ab, _0x2ebfb1) {
                return _0xc295ab + _0x2ebfb1;
            },
            'ZjYEn': function (_0x35a544, _0x57f46b) {
                return _0x35a544 + _0x57f46b;
            },
            'mrxGQ': _0xf8cdd9(627),
            'xkpxM': _0xf8cdd9(628)
        };
    if (!this['commands'][_0xf8cdd9(457)])
        return '';
    var _0x4ae342 = this[_0xf8cdd9(469)][_0xf8cdd9(629)](function (_0xd1552f) {
            var _0x2981b9 = _0xf8cdd9;
            return !_0xd1552f[_0x2981b9(483)];
        })['map'](function (_0x54c45e) {
            var _0x39f1c4 = _0xf8cdd9, _0x6af502 = {
                    'EJWAX': function (_0x54f9fa, _0x468125) {
                        return _0x54f9fa(_0x468125);
                    }
                }, _0x139ac3 = _0x54c45e[_0x39f1c4(471)]['map'](function (_0x5cd740) {
                    var _0x10fe38 = _0x39f1c4;
                    return _0x6af502[_0x10fe38(630)](humanReadableArgName, _0x5cd740);
                })[_0x39f1c4(540)](' ');
            return [
                _0x73e96b[_0x39f1c4(631)](_0x73e96b['BouMm'](_0x73e96b['BouMm'](_0x54c45e['_name'], _0x54c45e[_0x39f1c4(505)] ? _0x73e96b['BouMm']('|', _0x54c45e[_0x39f1c4(505)]) : '') + (_0x54c45e[_0x39f1c4(466)][_0x39f1c4(457)] ? _0x73e96b[_0x39f1c4(632)] : ''), ' '), _0x139ac3),
                _0x54c45e['description']()
            ];
        }), _0x35f4c7 = _0x4ae342[_0xf8cdd9(616)](function (_0x4e9683, _0x35e661) {
            var _0x4ca73f = _0xf8cdd9;
            return Math[_0x4ca73f(617)](_0x4e9683, _0x35e661[-1 * -537 + 5795 + -3166 * 2]['length']);
        }, -3905 + 6 * -1119 + -287 * -37);
    return [
        '',
        _0x73e96b['mrxGQ'],
        '',
        _0x4ae342[_0xf8cdd9(614)](function (_0x2a5740) {
            var _0x20cc27 = _0xf8cdd9, _0x1bb085 = _0x2a5740[29 * 235 + 17 * -497 + -1 * -1635] ? _0x73e96b[_0x20cc27(633)]('  ', _0x2a5740[-1261 + 1997 * -2 + 5256]) : '';
            return _0x73e96b['ZjYEn'](pad(_0x2a5740[-623 * -13 + 6449 + -14548], _0x35f4c7), _0x1bb085);
        })['join']('\n')[_0xf8cdd9(462)](/^/gm, _0x73e96b[_0xf8cdd9(634)]),
        ''
    ][_0xf8cdd9(540)]('\n');
}, Command[_0x140e10(460)]['helpInformation'] = function () {
    var _0x592676 = _0x140e10, _0x47ccfe = {
            'cbYRJ': function (_0x44815b, _0x1dfc3d) {
                return _0x44815b + _0x1dfc3d;
            },
            'nqLDn': function (_0x233fb3, _0x42ca50) {
                return _0x233fb3 + _0x42ca50;
            },
            'mbGrT': function (_0x152052, _0x446774) {
                return _0x152052 + _0x446774;
            },
            'reYOQ': function (_0xf9119f, _0x194548) {
                return _0xf9119f + _0x194548;
            },
            'DaYvU': '  Usage: '
        }, _0x431563 = [];
    this[_0x592676(606)] && (_0x431563 = [
        _0x47ccfe[_0x592676(635)]('  ', this[_0x592676(606)]),
        ''
    ]);
    var _0x5bbe90 = this[_0x592676(477)];
    this['_alias'] && (_0x5bbe90 = _0x47ccfe['nqLDn'](_0x5bbe90 + '|', this['_alias']));
    var _0x2dbaf5 = [
            '',
            _0x47ccfe[_0x592676(636)](_0x47ccfe[_0x592676(637)](_0x47ccfe[_0x592676(637)](_0x47ccfe[_0x592676(638)], _0x5bbe90), ' '), this[_0x592676(607)]()),
            ''
        ], _0x22304b = [], _0xf423b6 = this[_0x592676(625)]();
    if (_0xf423b6)
        _0x22304b = [_0xf423b6];
    var _0x5af92d = [
        _0x592676(639),
        '',
        '' + this[_0x592676(640)]()[_0x592676(462)](/^/gm, '    '),
        '',
        ''
    ];
    return _0x2dbaf5[_0x592676(499)](_0x22304b)[_0x592676(499)](_0x431563)['concat'](_0x5af92d)[_0x592676(540)]('\n');
}, Command['prototype'][_0x140e10(641)] = function (_0x21c9c4) {
    var _0x2de369 = _0x140e10, _0x4ecf8c = {
            'LKrXL': function (_0x335235, _0x2bbc50) {
                return _0x335235(_0x2bbc50);
            },
            'oUbRr': _0x2de369(537)
        };
    !_0x21c9c4 && (_0x21c9c4 = function (_0x146fc5) {
        return _0x146fc5;
    }), process[_0x2de369(642)][_0x2de369(602)](_0x4ecf8c['LKrXL'](_0x21c9c4, this[_0x2de369(643)]())), this[_0x2de369(581)](_0x4ecf8c['oUbRr']);
}, Command[_0x140e10(460)]['help'] = function (_0x180158) {
    var _0x2b8134 = _0x140e10;
    this[_0x2b8134(641)](_0x180158), process['exit']();
};
function camelcase(_0x28cf23) {
    var _0x36f2f7 = {
        'Fpyjj': function (_0x43ef27, _0x2b96da) {
            return _0x43ef27 + _0x2b96da;
        },
        'USvRO': function (_0xda29a6, _0x14808a) {
            return _0xda29a6 + _0x14808a;
        }
    };
    return _0x28cf23['split']('-')['reduce'](function (_0x57cae3, _0xcee513) {
        var _0xf1fd5 = _0x292a;
        return _0x36f2f7['Fpyjj'](_0x36f2f7[_0xf1fd5(644)](_0x57cae3, _0xcee513[-4645 + 9347 + -4702][_0xf1fd5(645)]()), _0xcee513[_0xf1fd5(490)](-1 * 6145 + 1 * -4883 + 11029 * 1));
    });
}
function pad(_0x7634da, _0xa64ec8) {
    var _0xcdab54 = _0x140e10, _0x2f7574 = {
            'xcouK': function (_0x1a3f34, _0x1ced4d) {
                return _0x1a3f34 + _0x1ced4d;
            },
            'NXdmh': function (_0x4bc05c, _0x4e17aa) {
                return _0x4bc05c(_0x4e17aa);
            }
        }, _0x2a663f = Math[_0xcdab54(617)](-8376 + 1 * -6043 + -14419 * -1, _0xa64ec8 - _0x7634da[_0xcdab54(457)]);
    return _0x2f7574[_0xcdab54(646)](_0x7634da, _0x2f7574['NXdmh'](Array, _0x2a663f + (5394 * -1 + -3 * -1402 + -1 * -1189))[_0xcdab54(540)](' '));
}
function outputHelpIfNecessary(_0x3383e2, _0x5a9b8f) {
    var _0x2cde1c = _0x140e10, _0x3b4bad = {
            'AQUXp': function (_0x35b919, _0x168528) {
                return _0x35b919 < _0x168528;
            },
            'XFVMc': function (_0x28ef4f, _0x4387a3) {
                return _0x28ef4f == _0x4387a3;
            },
            'Mgver': _0x2cde1c(537)
        };
    _0x5a9b8f = _0x5a9b8f || [];
    for (var _0x54d60b = 1 * -8021 + -1271 + 9292; _0x3b4bad[_0x2cde1c(647)](_0x54d60b, _0x5a9b8f['length']); _0x54d60b++) {
        (_0x3b4bad[_0x2cde1c(648)](_0x5a9b8f[_0x54d60b], _0x3b4bad[_0x2cde1c(649)]) || _0x3b4bad[_0x2cde1c(648)](_0x5a9b8f[_0x54d60b], '-h')) && (_0x3383e2[_0x2cde1c(641)](), process[_0x2cde1c(543)](-1979 + 9781 + -7802));
    }
}
function humanReadableArgName(_0x515605) {
    var _0x4ab097 = _0x140e10, _0x42a4df = {
            'vkxrZ': function (_0x48bb7c, _0x2acf75) {
                return _0x48bb7c + _0x2acf75;
            },
            'iFnNK': _0x4ab097(650)
        }, _0x9321b5 = _0x42a4df[_0x4ab097(651)](_0x515605[_0x4ab097(461)], _0x515605['variadic'] === !![] ? _0x42a4df[_0x4ab097(652)] : '');
    return _0x515605[_0x4ab097(489)] ? _0x42a4df['vkxrZ']('<', _0x9321b5) + '>' : _0x42a4df['vkxrZ']('[' + _0x9321b5, ']');
}
function exists(_0x1ec38c) {
    var _0x462640 = _0x140e10;
    try {
        if (fs[_0x462640(653)](_0x1ec38c)[_0x462640(654)]())
            return !![];
    } catch (_0x1ca625) {
        return ![];
    }
}