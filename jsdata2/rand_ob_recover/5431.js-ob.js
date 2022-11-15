module[_0x670e27(236)] = minimatch, minimatch['Minimatch'] = Minimatch;
var path = { 'sep': '/' };
try {
    path = require(_0x670e27(237));
} catch (_0x280706) {
}
var GLOBSTAR = minimatch[_0x670e27(238)] = Minimatch[_0x670e27(238)] = {}, expand = require(_0x670e27(239)), plTypes = {
        '!': {
            'open': '(?:(?!(?:',
            'close': _0x670e27(240)
        },
        '?': {
            'open': _0x670e27(241),
            'close': ')?'
        },
        '+': {
            'open': _0x670e27(241),
            'close': ')+'
        },
        '*': {
            'open': '(?:',
            'close': ')*'
        },
        '@': {
            'open': _0x670e27(241),
            'close': ')'
        }
    }, qmark = _0x670e27(242), star = qmark + '*?', twoStarDot = _0x670e27(243), twoStarNoDot = '(?:(?!(?:\\/|^)\\.).)*?', reSpecials = charSet('().*{}+?[]^$\\!');
function charSet(_0x553e04) {
    var _0x5a43b2 = _0x670e27;
    return _0x553e04[_0x5a43b2(244)]('')['reduce'](function (_0x434ec5, _0x4ca6b9) {
        return _0x434ec5[_0x4ca6b9] = !![], _0x434ec5;
    }, {});
}
var slashSplit = /\/+/;
minimatch[_0x670e27(245)] = filter;
function filter(_0x792f76, _0x2a6792) {
    var _0x1e092e = _0x670e27, _0x297aa5 = {
            'ZbWjI': function (_0x430f7e, _0x26a265, _0x2b1b85, _0x448822) {
                return _0x430f7e(_0x26a265, _0x2b1b85, _0x448822);
            },
            'rhuoK': function (_0x2dc8fc, _0xb3b24a) {
                return _0x2dc8fc || _0xb3b24a;
            }
        };
    return _0x2a6792 = _0x297aa5[_0x1e092e(246)](_0x2a6792, {}), function (_0x40a7d1, _0x2d9779, _0x196bde) {
        var _0x1afdb1 = _0x1e092e;
        return _0x297aa5[_0x1afdb1(247)](minimatch, _0x40a7d1, _0x792f76, _0x2a6792);
    };
}
function ext(_0x116975, _0x3df960) {
    var _0x3a4ed6 = _0x670e27, _0x44f634 = {
            'QKliL': _0x3a4ed6(248),
            'qnkPt': function (_0x15876a, _0xf1b711) {
                return _0x15876a || _0xf1b711;
            }
        }, _0x44a15f = _0x44f634['QKliL']['split']('|'), _0x1c17e7 = 8243 + -926 + -7317;
    while (!![]) {
        switch (_0x44a15f[_0x1c17e7++]) {
        case '0':
            return _0x1560e6;
        case '1':
            _0x116975 = _0x116975 || {};
            continue;
        case '2':
            var _0x1560e6 = {};
            continue;
        case '3':
            _0x3df960 = _0x44f634['qnkPt'](_0x3df960, {});
            continue;
        case '4':
            Object[_0x3a4ed6(249)](_0x3df960)[_0x3a4ed6(250)](function (_0xcc38e9) {
                _0x1560e6[_0xcc38e9] = _0x3df960[_0xcc38e9];
            });
            continue;
        case '5':
            Object[_0x3a4ed6(249)](_0x116975)[_0x3a4ed6(250)](function (_0x17a69b) {
                _0x1560e6[_0x17a69b] = _0x116975[_0x17a69b];
            });
            continue;
        }
        break;
    }
}
minimatch[_0x670e27(251)] = function (_0x28aec7) {
    var _0x232d6e = _0x670e27, _0x10c0de = { 'YLQqT': _0x232d6e(252) }, _0x593eec = _0x10c0de[_0x232d6e(253)][_0x232d6e(244)]('|'), _0x29d928 = 981 * -1 + -13 * -644 + -7391 * 1;
    while (!![]) {
        switch (_0x593eec[_0x29d928++]) {
        case '0':
            return _0x2f455c;
        case '1':
            var _0x2f455c = function _0x2562d9(_0x307b79, _0x57d1cf, _0x10abb6) {
                var _0x1320f7 = _0x232d6e;
                return _0x53505f[_0x1320f7(254)](_0x307b79, _0x57d1cf, ext(_0x28aec7, _0x10abb6));
            };
            continue;
        case '2':
            _0x2f455c[_0x232d6e(255)] = function _0x29cd8b(_0x336a81, _0x2d4710) {
                var _0x1bd343 = _0x232d6e;
                return new _0x53505f[(_0x1bd343(255))](_0x336a81, ext(_0x28aec7, _0x2d4710));
            };
            continue;
        case '3':
            var _0x53505f = minimatch;
            continue;
        case '4':
            if (!_0x28aec7 || !Object[_0x232d6e(249)](_0x28aec7)[_0x232d6e(256)])
                return minimatch;
            continue;
        }
        break;
    }
}, Minimatch['defaults'] = function (_0x57ca14) {
    var _0xd57e45 = _0x670e27;
    if (!_0x57ca14 || !Object['keys'](_0x57ca14)['length'])
        return Minimatch;
    return minimatch['defaults'](_0x57ca14)[_0xd57e45(255)];
};
function minimatch(_0x4901e0, _0x1743f2, _0x3b8bd0) {
    var _0x5914af = _0x670e27, _0x2c2a70 = {
            'dXGKF': function (_0x5bd1c0, _0x3221ae) {
                return _0x5bd1c0 !== _0x3221ae;
            },
            'BkZXD': 'string',
            'zPJjy': _0x5914af(257),
            'snlwc': function (_0x3576d4, _0x6e6225) {
                return _0x3576d4 === _0x6e6225;
            },
            'GwudE': function (_0x25b3fe, _0x36a9a9) {
                return _0x25b3fe === _0x36a9a9;
            }
        };
    if (_0x2c2a70[_0x5914af(258)](typeof _0x1743f2, _0x2c2a70[_0x5914af(259)]))
        throw new TypeError(_0x2c2a70[_0x5914af(260)]);
    if (!_0x3b8bd0)
        _0x3b8bd0 = {};
    if (!_0x3b8bd0[_0x5914af(261)] && _0x2c2a70['snlwc'](_0x1743f2['charAt'](-4274 + -4444 + 1453 * 6), '#'))
        return ![];
    if (_0x2c2a70[_0x5914af(262)](_0x1743f2[_0x5914af(263)](), ''))
        return _0x4901e0 === '';
    return new Minimatch(_0x1743f2, _0x3b8bd0)['match'](_0x4901e0);
}
function _0x5552(_0x182b57, _0x2b5f2e) {
    return _0x5552 = function (_0x4b6ca6, _0x1376ed) {
        _0x4b6ca6 = _0x4b6ca6 - (-6529 + 4759 * -1 + 6 * 1919);
        var _0x47ba70 = _0x2543[_0x4b6ca6];
        return _0x47ba70;
    }, _0x5552(_0x182b57, _0x2b5f2e);
}
function Minimatch(_0x5cd5bb, _0x548242) {
    var _0x3cc0b9 = _0x670e27, _0x30c815 = {
            'OEpUK': _0x3cc0b9(264),
            'JDSLO': function (_0x5ab3ee, _0x2c0c15) {
                return _0x5ab3ee !== _0x2c0c15;
            },
            'UCtrG': _0x3cc0b9(265),
            'EjhqW': 'glob pattern string required',
            'XGMFq': function (_0x2aebb1, _0x4e21a0) {
                return _0x2aebb1 instanceof _0x4e21a0;
            },
            'AZwRz': function (_0x569c6e, _0x577918) {
                return _0x569c6e !== _0x577918;
            }
        }, _0x32bb86 = _0x30c815[_0x3cc0b9(266)][_0x3cc0b9(244)]('|'), _0x3be27b = -71 * -7 + 5294 + 1 * -5791;
    while (!![]) {
        switch (_0x32bb86[_0x3be27b++]) {
        case '0':
            if (_0x30c815[_0x3cc0b9(267)](typeof _0x5cd5bb, _0x30c815[_0x3cc0b9(268)]))
                throw new TypeError(_0x30c815[_0x3cc0b9(269)]);
            continue;
        case '1':
            this['comment'] = ![];
            continue;
        case '2':
            this[_0x3cc0b9(270)] = _0x5cd5bb;
            continue;
        case '3':
            this[_0x3cc0b9(271)]();
            continue;
        case '4':
            _0x5cd5bb = _0x5cd5bb[_0x3cc0b9(263)]();
            continue;
        case '5':
            if (!_0x548242)
                _0x548242 = {};
            continue;
        case '6':
            this[_0x3cc0b9(272)] = ![];
            continue;
        case '7':
            if (!_0x30c815[_0x3cc0b9(273)](this, Minimatch))
                return new Minimatch(_0x5cd5bb, _0x548242);
            continue;
        case '8':
            this[_0x3cc0b9(274)] = [];
            continue;
        case '9':
            this[_0x3cc0b9(275)] = ![];
            continue;
        case '10':
            this['options'] = _0x548242;
            continue;
        case '11':
            _0x30c815[_0x3cc0b9(276)](path[_0x3cc0b9(277)], '/') && (_0x5cd5bb = _0x5cd5bb['split'](path[_0x3cc0b9(277)])[_0x3cc0b9(278)]('/'));
            continue;
        case '12':
            this[_0x3cc0b9(279)] = null;
            continue;
        }
        break;
    }
}
Minimatch[_0x670e27(280)][_0x670e27(281)] = function () {
}, Minimatch['prototype'][_0x670e27(271)] = make;
function make() {
    var _0x203506 = _0x670e27, _0x388a17 = {
            'peLOs': _0x203506(282),
            'NTsLh': function (_0x3092c9, _0x150142) {
                return _0x3092c9 === _0x150142;
            }
        }, _0x4d2c6d = _0x388a17[_0x203506(283)][_0x203506(244)]('|'), _0x340ef0 = 21 * 316 + 2406 + -9042;
    while (!![]) {
        switch (_0x4d2c6d[_0x340ef0++]) {
        case '0':
            if (!_0x39f375) {
                this['empty'] = !![];
                return;
            }
            continue;
        case '1':
            this['parseNegate']();
            continue;
        case '2':
            var _0x491ba0 = this['options'];
            continue;
        case '3':
            this[_0x203506(281)](this[_0x203506(270)], _0x3920bc);
            continue;
        case '4':
            this[_0x203506(274)] = _0x3920bc;
            continue;
        case '5':
            if (_0x491ba0['debug'])
                this[_0x203506(281)] = console[_0x203506(284)];
            continue;
        case '6':
            if (this[_0x203506(285)])
                return;
            continue;
        case '7':
            this[_0x203506(281)](this[_0x203506(270)], _0x3920bc);
            continue;
        case '8':
            _0x3920bc = _0x3920bc[_0x203506(286)](function (_0x3248ee, _0x668ab4, _0x263559) {
                var _0x31ca9a = _0x203506;
                return _0x3248ee[_0x31ca9a(286)](this[_0x31ca9a(287)], this);
            }, this);
            continue;
        case '9':
            _0x3920bc = _0x3920bc[_0x203506(245)](function (_0x3d8d2c) {
                return _0x3fe04b['lmgVL'](_0x3d8d2c['indexOf'](![]), -(728 * 6 + 5319 + -4843 * 2));
            });
            continue;
        case '10':
            var _0x3920bc = this[_0x203506(288)] = this[_0x203506(289)]();
            continue;
        case '11':
            var _0x39f375 = this[_0x203506(270)];
            continue;
        case '12':
            var _0x3fe04b = {
                'lmgVL': function (_0x2b8e88, _0x1033b0) {
                    return _0x2b8e88 === _0x1033b0;
                }
            };
            continue;
        case '13':
            if (!_0x491ba0[_0x203506(261)] && _0x388a17['NTsLh'](_0x39f375['charAt'](-2177 * -3 + 7 * 377 + -7 * 1310), '#')) {
                this[_0x203506(290)] = !![];
                return;
            }
            continue;
        case '14':
            this[_0x203506(281)](this[_0x203506(270)], _0x3920bc);
            continue;
        case '15':
            this[_0x203506(281)](this[_0x203506(270)], _0x3920bc);
            continue;
        case '16':
            _0x3920bc = this['globParts'] = _0x3920bc[_0x203506(286)](function (_0x537fb6) {
                return _0x537fb6['split'](slashSplit);
            });
            continue;
        }
        break;
    }
}
Minimatch[_0x670e27(280)][_0x670e27(291)] = parseNegate;
function parseNegate() {
    var _0x81eeb0 = _0x670e27, _0x273f4a = {
            'xnhkE': function (_0x45f688, _0x141ec3) {
                return _0x45f688 < _0x141ec3;
            },
            'eTrJK': function (_0xe008e3, _0x1cd3f3) {
                return _0xe008e3 === _0x1cd3f3;
            }
        }, _0x4737b0 = this['pattern'], _0x42c042 = ![], _0x27d43b = this['options'], _0x5541b5 = -551 * -5 + 9511 + -6133 * 2;
    if (_0x27d43b[_0x81eeb0(292)])
        return;
    for (var _0x3f0b73 = -1 * -2980 + 1 * 5659 + -8639, _0x3df2e7 = _0x4737b0[_0x81eeb0(256)]; _0x273f4a['xnhkE'](_0x3f0b73, _0x3df2e7) && _0x273f4a[_0x81eeb0(293)](_0x4737b0[_0x81eeb0(294)](_0x3f0b73), '!'); _0x3f0b73++) {
        _0x42c042 = !_0x42c042, _0x5541b5++;
    }
    if (_0x5541b5)
        this['pattern'] = _0x4737b0[_0x81eeb0(295)](_0x5541b5);
    this[_0x81eeb0(272)] = _0x42c042;
}
minimatch[_0x670e27(289)] = function (_0x2f7dc1, _0x357d19) {
    var _0x1d53eb = _0x670e27, _0xf156f2 = {
            'DyFTW': function (_0x3b80b8, _0x2e79c6, _0x13e174) {
                return _0x3b80b8(_0x2e79c6, _0x13e174);
            }
        };
    return _0xf156f2[_0x1d53eb(296)](braceExpand, _0x2f7dc1, _0x357d19);
}, Minimatch[_0x670e27(280)][_0x670e27(289)] = braceExpand;
function braceExpand(_0x1a0e95, _0x4a8840) {
    var _0xde991e = _0x670e27, _0x52e10f = {
            'ofQJX': function (_0xf4a831, _0x3bd05a) {
                return _0xf4a831(_0x3bd05a);
            },
            'eCQbM': function (_0x39ac53, _0x5ec651) {
                return _0x39ac53 instanceof _0x5ec651;
            },
            'NFigm': function (_0x315d61, _0x12b43c) {
                return _0x315d61 === _0x12b43c;
            },
            'yveAD': _0xde991e(297),
            'hUffd': _0xde991e(298)
        }, _0x491883 = _0xde991e(299)[_0xde991e(244)]('|'), _0x17b500 = 4216 + -258 + -3958;
    while (!![]) {
        switch (_0x491883[_0x17b500++]) {
        case '0':
            return _0x52e10f[_0xde991e(300)](expand, _0x1a0e95);
        case '1':
            !_0x4a8840 && (_0x52e10f['eCQbM'](this, Minimatch) ? _0x4a8840 = this[_0xde991e(301)] : _0x4a8840 = {});
            continue;
        case '2':
            if (_0x52e10f['NFigm'](typeof _0x1a0e95, _0x52e10f[_0xde991e(302)]))
                throw new TypeError(_0x52e10f[_0xde991e(303)]);
            continue;
        case '3':
            _0x1a0e95 = _0x52e10f[_0xde991e(304)](typeof _0x1a0e95, _0x52e10f[_0xde991e(302)]) ? this[_0xde991e(270)] : _0x1a0e95;
            continue;
        case '4':
            if (_0x4a8840[_0xde991e(305)] || !_0x1a0e95[_0xde991e(306)](/\{.*\}/))
                return [_0x1a0e95];
            continue;
        }
        break;
    }
}
Minimatch['prototype'][_0x670e27(287)] = parse;
var SUBPARSE = {};
function parse(_0x2e4eff, _0x584002) {
    var _0x44fb68 = _0x670e27, _0x55ba45 = {
            'qZLIF': _0x44fb68(307),
            'rJPco': function (_0x1912d2, _0x20cf5b) {
                return _0x1912d2 + _0x20cf5b;
            },
            'ATNwV': function (_0x3dfb58, _0x2711ea) {
                return _0x3dfb58 + _0x2711ea;
            },
            'cpqOJ': function (_0x273ee9, _0x1c63f6) {
                return _0x273ee9 + _0x1c63f6;
            },
            'IOEpe': function (_0x1439f4, _0x51c68b) {
                return _0x1439f4 * _0x51c68b;
            },
            'vJuaH': 'pattern is too long',
            'jUlAB': function (_0x3d29db, _0x820447) {
                return _0x3d29db === _0x820447;
            },
            'SLukr': _0x44fb68(308),
            'dOZgg': function (_0x366249) {
                return _0x366249();
            },
            'yhtZV': _0x44fb68(309),
            'ejIbm': function (_0xcd6a6, _0x441f38) {
                return _0xcd6a6 === _0x441f38;
            },
            'pvLrS': function (_0x89fd14, _0x43e7db) {
                return _0x89fd14 + _0x43e7db;
            },
            'JlYRG': function (_0xd891af) {
                return _0xd891af();
            },
            'PhlpL': function (_0x5ea943, _0x2e5c06) {
                return _0x5ea943 === _0x2e5c06;
            },
            'jZLvu': _0x44fb68(310),
            'UJocC': _0x44fb68(241),
            'gNOYb': _0x44fb68(311),
            'VFEws': function (_0x34792b, _0x36250c) {
                return _0x34792b === _0x36250c;
            },
            'LlQxN': function (_0x5c382d) {
                return _0x5c382d();
            },
            'KVPIf': function (_0x37dac0, _0x5e6ecb) {
                return _0x37dac0 + _0x5e6ecb;
            },
            'RIPRc': function (_0x52587b, _0x4ea781) {
                return _0x52587b + _0x4ea781;
            },
            'sSfVI': function (_0x5b919e, _0x439d43) {
                return _0x5b919e + _0x439d43;
            },
            'FiSPN': function (_0x3f85a8, _0x489066) {
                return _0x3f85a8 + _0x489066;
            },
            'QXQJB': function (_0x33538a, _0x5e3572) {
                return _0x33538a + _0x5e3572;
            },
            'wrmrh': _0x44fb68(312),
            'rEbxv': _0x44fb68(313),
            'SkLVp': function (_0xf194e1, _0x47218c) {
                return _0xf194e1 + _0x47218c;
            },
            'SCwuN': function (_0x59d163, _0x4662a4) {
                return _0x59d163 === _0x4662a4;
            },
            'IglTa': function (_0x3b875f, _0xd38515) {
                return _0x3b875f === _0xd38515;
            },
            'bfHsC': function (_0x30e7f8, _0x175414) {
                return _0x30e7f8 + _0x175414;
            },
            'bQVSO': function (_0x4f5a6a) {
                return _0x4f5a6a();
            },
            'UjtUk': function (_0x1d1927, _0x16eaf5) {
                return _0x1d1927 - _0x16eaf5;
            },
            'ZJWxL': function (_0x5e3c37, _0xef371b) {
                return _0x5e3c37 > _0xef371b;
            },
            'AwLtq': function (_0x2d4e9e, _0x44e173) {
                return _0x2d4e9e - _0x44e173;
            },
            'nHiQM': function (_0x6049e9, _0x32b274) {
                return _0x6049e9 < _0x32b274;
            },
            'JqqZf': function (_0x27a326, _0x46a0b8) {
                return _0x27a326 === _0x46a0b8;
            },
            'JSBvJ': function (_0x848dcd, _0x44d324) {
                return _0x848dcd !== _0x44d324;
            },
            'oudaK': function (_0x26f6cb, _0x230e48) {
                return _0x26f6cb + _0x230e48;
            },
            'VHzmX': function (_0x5e0e0c, _0x1f264e) {
                return _0x5e0e0c === _0x1f264e;
            },
            'QbMjs': function (_0x332af9, _0xc64d33) {
                return _0x332af9(_0xc64d33);
            },
            'zmXaL': function (_0x8fac4b, _0x300810) {
                return _0x8fac4b + _0x300810;
            }
        };
    if (_0x2e4eff[_0x44fb68(256)] > _0x55ba45[_0x44fb68(314)](3 * -2242 + 4027 * -1 + 11777, 4476 + 6710 + -11122 * 1))
        throw new TypeError(_0x55ba45[_0x44fb68(315)]);
    var _0x44157a = this[_0x44fb68(301)];
    if (!_0x44157a[_0x44fb68(316)] && _0x55ba45[_0x44fb68(317)](_0x2e4eff, '**'))
        return GLOBSTAR;
    if (_0x55ba45[_0x44fb68(317)](_0x2e4eff, ''))
        return '';
    var _0x4ec335 = '', _0x50e2c1 = !!_0x44157a[_0x44fb68(318)], _0x33ab20 = ![], _0x442e76 = [], _0x376158 = [], _0x3d4fb1, _0x25e434 = ![], _0x42a8f8 = -(220 * 25 + -1 * -1847 + -7346 * 1), _0x156c61 = -(1409 + 15 * 8 + -1528), _0x3d4084 = _0x55ba45[_0x44fb68(317)](_0x2e4eff['charAt'](-1 * -2313 + -308 * -9 + 1 * -5085), '.') ? '' : _0x44157a['dot'] ? _0x55ba45['SLukr'] : _0x44fb68(319), _0x4286c1 = this;
    function _0x1e6bbf() {
        var _0x282ca2 = _0x44fb68;
        if (_0x3d4fb1) {
            switch (_0x3d4fb1) {
            case '*':
                _0x4ec335 += star, _0x50e2c1 = !![];
                break;
            case '?':
                _0x4ec335 += qmark, _0x50e2c1 = !![];
                break;
            default:
                _0x4ec335 += '\\' + _0x3d4fb1;
                break;
            }
            _0x4286c1[_0x282ca2(281)](_0x55ba45[_0x282ca2(320)], _0x3d4fb1, _0x4ec335), _0x3d4fb1 = ![];
        }
    }
    for (var _0xad0332 = 6926 * 1 + 61 * -115 + -89 * -1, _0x435ce7 = _0x2e4eff[_0x44fb68(256)], _0x1e8d34; _0xad0332 < _0x435ce7 && (_0x1e8d34 = _0x2e4eff[_0x44fb68(294)](_0xad0332)); _0xad0332++) {
        this[_0x44fb68(281)]('%s\t%s %s %j', _0x2e4eff, _0xad0332, _0x4ec335, _0x1e8d34);
        if (_0x33ab20 && reSpecials[_0x1e8d34]) {
            _0x4ec335 += _0x55ba45[_0x44fb68(321)]('\\', _0x1e8d34), _0x33ab20 = ![];
            continue;
        }
        switch (_0x1e8d34) {
        case '/':
            return ![];
        case '\\':
            _0x55ba45[_0x44fb68(322)](_0x1e6bbf), _0x33ab20 = !![];
            continue;
        case '?':
        case '*':
        case '+':
        case '@':
        case '!':
            this[_0x44fb68(281)](_0x44fb68(323), _0x2e4eff, _0xad0332, _0x4ec335, _0x1e8d34);
            if (_0x25e434) {
                this[_0x44fb68(281)](_0x55ba45['yhtZV']);
                if (_0x55ba45['ejIbm'](_0x1e8d34, '!') && _0x55ba45[_0x44fb68(324)](_0xad0332, _0x55ba45[_0x44fb68(325)](_0x156c61, -7141 * -1 + 9961 + -17101)))
                    _0x1e8d34 = '^';
                _0x4ec335 += _0x1e8d34;
                continue;
            }
            _0x4286c1['debug'](_0x44fb68(326), _0x3d4fb1), _0x55ba45[_0x44fb68(327)](_0x1e6bbf), _0x3d4fb1 = _0x1e8d34;
            if (_0x44157a[_0x44fb68(328)])
                _0x1e6bbf();
            continue;
        case '(':
            if (_0x25e434) {
                _0x4ec335 += '(';
                continue;
            }
            if (!_0x3d4fb1) {
                _0x4ec335 += '\\(';
                continue;
            }
            _0x442e76['push']({
                'type': _0x3d4fb1,
                'start': _0xad0332 - (-50 * -104 + -1 * 2427 + -2772),
                'reStart': _0x4ec335[_0x44fb68(256)],
                'open': plTypes[_0x3d4fb1]['open'],
                'close': plTypes[_0x3d4fb1][_0x44fb68(329)]
            }), _0x4ec335 += _0x55ba45[_0x44fb68(330)](_0x3d4fb1, '!') ? _0x55ba45[_0x44fb68(331)] : _0x55ba45[_0x44fb68(332)], this[_0x44fb68(281)](_0x55ba45['gNOYb'], _0x3d4fb1, _0x4ec335), _0x3d4fb1 = ![];
            continue;
        case ')':
            if (_0x25e434 || !_0x442e76[_0x44fb68(256)]) {
                _0x4ec335 += '\\)';
                continue;
            }
            _0x1e6bbf(), _0x50e2c1 = !![];
            var _0x4c5d24 = _0x442e76[_0x44fb68(333)]();
            _0x4ec335 += _0x4c5d24[_0x44fb68(329)];
            _0x55ba45[_0x44fb68(334)](_0x4c5d24['type'], '!') && _0x376158[_0x44fb68(335)](_0x4c5d24);
            _0x4c5d24[_0x44fb68(336)] = _0x4ec335[_0x44fb68(256)];
            continue;
        case '|':
            if (_0x25e434 || !_0x442e76['length'] || _0x33ab20) {
                _0x4ec335 += '\\|', _0x33ab20 = ![];
                continue;
            }
            _0x55ba45[_0x44fb68(337)](_0x1e6bbf), _0x4ec335 += '|';
            continue;
        case '[':
            _0x55ba45[_0x44fb68(337)](_0x1e6bbf);
            if (_0x25e434) {
                _0x4ec335 += _0x55ba45[_0x44fb68(338)]('\\', _0x1e8d34);
                continue;
            }
            _0x25e434 = !![], _0x156c61 = _0xad0332, _0x42a8f8 = _0x4ec335[_0x44fb68(256)], _0x4ec335 += _0x1e8d34;
            continue;
        case ']':
            if (_0x55ba45[_0x44fb68(334)](_0xad0332, _0x55ba45[_0x44fb68(338)](_0x156c61, 4175 + -4094 + 16 * -5)) || !_0x25e434) {
                _0x4ec335 += _0x55ba45['KVPIf']('\\', _0x1e8d34), _0x33ab20 = ![];
                continue;
            }
            if (_0x25e434) {
                var _0x3cf34b = _0x2e4eff[_0x44fb68(339)](_0x156c61 + (8225 + -4 * -765 + -26 * 434), _0xad0332);
                try {
                    RegExp(_0x55ba45[_0x44fb68(338)](_0x55ba45[_0x44fb68(340)]('[', _0x3cf34b), ']'));
                } catch (_0x10c569) {
                    var _0x202ed4 = this[_0x44fb68(287)](_0x3cf34b, SUBPARSE);
                    _0x4ec335 = _0x55ba45[_0x44fb68(340)](_0x55ba45['sSfVI'](_0x55ba45[_0x44fb68(341)](_0x4ec335[_0x44fb68(295)](1 * -7289 + 7114 + 5 * 35, _0x42a8f8), '\\['), _0x202ed4[-2793 + 3 * -2423 + 10062]), '\\]'), _0x50e2c1 = _0x50e2c1 || _0x202ed4[-911 * -8 + 516 + 867 * -9], _0x25e434 = ![];
                    continue;
                }
            }
            _0x50e2c1 = !![], _0x25e434 = ![], _0x4ec335 += _0x1e8d34;
            continue;
        default:
            _0x55ba45['LlQxN'](_0x1e6bbf);
            if (_0x33ab20)
                _0x33ab20 = ![];
            else
                reSpecials[_0x1e8d34] && !(_0x1e8d34 === '^' && _0x25e434) && (_0x4ec335 += '\\');
            _0x4ec335 += _0x1e8d34;
        }
    }
    _0x25e434 && (_0x3cf34b = _0x2e4eff['substr'](_0x55ba45['FiSPN'](_0x156c61, -4 * -1597 + 1 * 9027 + -15414)), _0x202ed4 = this[_0x44fb68(287)](_0x3cf34b, SUBPARSE), _0x4ec335 = _0x55ba45[_0x44fb68(342)](_0x55ba45[_0x44fb68(342)](_0x4ec335['substr'](8473 + -6326 + -2147, _0x42a8f8), '\\['), _0x202ed4[-1637 + 4171 + -2534]), _0x50e2c1 = _0x50e2c1 || _0x202ed4[19 * -381 + 8021 + 781 * -1]);
    for (_0x4c5d24 = _0x442e76[_0x44fb68(333)](); _0x4c5d24; _0x4c5d24 = _0x442e76['pop']()) {
        var _0x4c4ce2 = _0x55ba45[_0x44fb68(343)]['split']('|'), _0x24236e = -2642 + 2270 + -3 * -124;
        while (!![]) {
            switch (_0x4c4ce2[_0x24236e++]) {
            case '0':
                this[_0x44fb68(281)](_0x44fb68(344), _0x55dedd, _0x55dedd, _0x4c5d24, _0x4ec335);
                continue;
            case '1':
                this[_0x44fb68(281)](_0x55ba45[_0x44fb68(345)], _0x4ec335, _0x4c5d24);
                continue;
            case '2':
                _0x50e2c1 = !![];
                continue;
            case '3':
                _0x55dedd = _0x55dedd[_0x44fb68(346)](/((?:\\{2}){0,64})(\\?)\|/g, function (_0x3c0f4b, _0x5904b9, _0xd9deea) {
                    var _0x53011f = _0x44fb68;
                    return !_0xd9deea && (_0xd9deea = '\\'), _0x55ba45[_0x53011f(347)](_0x55ba45[_0x53011f(348)](_0x55ba45['cpqOJ'](_0x5904b9, _0x5904b9), _0xd9deea), '|');
                });
                continue;
            case '4':
                var _0x55dedd = _0x4ec335['slice'](_0x55ba45[_0x44fb68(349)](_0x4c5d24['reStart'], _0x4c5d24['open']['length']));
                continue;
            case '5':
                var _0x1e821e = _0x55ba45[_0x44fb68(350)](_0x4c5d24[_0x44fb68(351)], '*') ? star : _0x55ba45[_0x44fb68(352)](_0x4c5d24[_0x44fb68(351)], '?') ? qmark : _0x55ba45[_0x44fb68(349)]('\\', _0x4c5d24[_0x44fb68(351)]);
                continue;
            case '6':
                _0x4ec335 = _0x55ba45[_0x44fb68(353)](_0x4ec335[_0x44fb68(354)](2 * 4886 + 3150 + -12922 * 1, _0x4c5d24[_0x44fb68(355)]), _0x1e821e) + '\\(' + _0x55dedd;
                continue;
            }
            break;
        }
    }
    _0x55ba45[_0x44fb68(356)](_0x1e6bbf);
    _0x33ab20 && (_0x4ec335 += '\\\\');
    var _0x29f93a = ![];
    switch (_0x4ec335[_0x44fb68(294)](9007 + -941 * 5 + 478 * -9)) {
    case '.':
    case '[':
    case '(':
        _0x29f93a = !![];
    }
    for (var _0x598783 = _0x55ba45[_0x44fb68(357)](_0x376158[_0x44fb68(256)], 1374 + 2773 * 3 + -9692); _0x55ba45[_0x44fb68(358)](_0x598783, -(1 * 3709 + -213 + -3495)); _0x598783--) {
        var _0x2e0fa6 = _0x376158[_0x598783], _0x3c28bf = _0x4ec335['slice'](2552 + 35 * -71 + -67, _0x2e0fa6[_0x44fb68(355)]), _0x1a7e01 = _0x4ec335['slice'](_0x2e0fa6[_0x44fb68(355)], _0x55ba45[_0x44fb68(357)](_0x2e0fa6[_0x44fb68(336)], 785 * -3 + -1 * 7291 + 9654)), _0x41123a = _0x4ec335[_0x44fb68(354)](_0x55ba45[_0x44fb68(359)](_0x2e0fa6[_0x44fb68(336)], 2103 * -1 + -3866 * -1 + -13 * 135), _0x2e0fa6['reEnd']), _0x46dcf5 = _0x4ec335[_0x44fb68(354)](_0x2e0fa6[_0x44fb68(336)]);
        _0x41123a += _0x46dcf5;
        var _0x46b16c = _0x55ba45[_0x44fb68(359)](_0x3c28bf['split']('(')[_0x44fb68(256)], 38 * -143 + -2858 * -1 + 1 * 2577), _0x5df8d6 = _0x46dcf5;
        for (_0xad0332 = -88 * 82 + -1338 + -14 * -611; _0x55ba45['nHiQM'](_0xad0332, _0x46b16c); _0xad0332++) {
            _0x5df8d6 = _0x5df8d6[_0x44fb68(346)](/\)[+*?]?/, '');
        }
        _0x46dcf5 = _0x5df8d6;
        var _0x449f87 = '';
        _0x55ba45[_0x44fb68(360)](_0x46dcf5, '') && _0x55ba45['JSBvJ'](_0x584002, SUBPARSE) && (_0x449f87 = '$');
        var _0x12e00d = _0x55ba45[_0x44fb68(353)](_0x55ba45[_0x44fb68(361)](_0x55ba45['oudaK'](_0x55ba45['oudaK'](_0x3c28bf, _0x1a7e01), _0x46dcf5), _0x449f87), _0x41123a);
        _0x4ec335 = _0x12e00d;
    }
    _0x55ba45[_0x44fb68(362)](_0x4ec335, '') && _0x50e2c1 && (_0x4ec335 = _0x44fb68(363) + _0x4ec335);
    _0x29f93a && (_0x4ec335 = _0x3d4084 + _0x4ec335);
    if (_0x55ba45[_0x44fb68(364)](_0x584002, SUBPARSE))
        return [
            _0x4ec335,
            _0x50e2c1
        ];
    if (!_0x50e2c1)
        return _0x55ba45['QbMjs'](globUnescape, _0x2e4eff);
    var _0x48b34c = _0x44157a[_0x44fb68(318)] ? 'i' : '';
    try {
        var _0x15d64b = new RegExp(_0x55ba45[_0x44fb68(365)]('^', _0x4ec335) + '$', _0x48b34c);
    } catch (_0xd8da0f) {
        return new RegExp('$.');
    }
    return _0x15d64b[_0x44fb68(366)] = _0x2e4eff, _0x15d64b[_0x44fb68(367)] = _0x4ec335, _0x15d64b;
}
minimatch[_0x670e27(368)] = function (_0x2775bf, _0x5aae9b) {
    var _0x2ebf92 = _0x670e27, _0x4efaa7 = {
            'fLIXX': function (_0x3260bf, _0x12e65a) {
                return _0x3260bf || _0x12e65a;
            }
        };
    return new Minimatch(_0x2775bf, _0x4efaa7[_0x2ebf92(369)](_0x5aae9b, {}))['makeRe']();
}, Minimatch[_0x670e27(280)]['makeRe'] = makeRe;
function makeRe() {
    var _0x1f57e0 = _0x670e27, _0x37f649 = {
            'cTkWh': _0x1f57e0(370),
            'ifnQp': function (_0x400268, _0x53f1fe) {
                return _0x400268 === _0x53f1fe;
            },
            'phpdK': function (_0x392fb3, _0x1205bf) {
                return _0x392fb3 === _0x1205bf;
            },
            'FbTJg': function (_0x5b9e2c, _0x1c7ae9) {
                return _0x5b9e2c(_0x1c7ae9);
            },
            'XRhyp': function (_0x12b89c, _0x2330f2) {
                return _0x12b89c + _0x2330f2;
            },
            'WQWoa': _0x1f57e0(371),
            'qXrsG': function (_0x39637d, _0x2a127a) {
                return _0x39637d + _0x2a127a;
            },
            'IhCUV': _0x1f57e0(372)
        }, _0xc60df2 = _0x37f649[_0x1f57e0(373)]['split']('|'), _0x1b247f = -5356 + 3 * 2549 + -29 * 79;
    while (!![]) {
        switch (_0xc60df2[_0x1b247f++]) {
        case '0':
            if (this['regexp'] || _0x37f649[_0x1f57e0(374)](this[_0x1f57e0(279)], ![]))
                return this[_0x1f57e0(279)];
            continue;
        case '1':
            var _0xa7140 = _0x4db58e['map'](function (_0x1949eb) {
                var _0x4013e3 = _0x1f57e0;
                return _0x1949eb[_0x4013e3(286)](function (_0x1830d6) {
                    var _0x3fc5c9 = _0x4013e3;
                    return _0x7b3ca8[_0x3fc5c9(375)](_0x1830d6, GLOBSTAR) ? _0x188702 : typeof _0x1830d6 === 'string' ? _0x7b3ca8[_0x3fc5c9(376)](regExpEscape, _0x1830d6) : _0x1830d6['_src'];
                })[_0x4013e3(278)]('\\/');
            })[_0x1f57e0(278)]('|');
            continue;
        case '2':
            var _0x7b3ca8 = {
                'HCcIy': function (_0x46ead4, _0x877727) {
                    return _0x37f649['phpdK'](_0x46ead4, _0x877727);
                },
                'FOKdE': function (_0x3b43da, _0x11f4ad) {
                    return _0x37f649['FbTJg'](_0x3b43da, _0x11f4ad);
                }
            };
            continue;
        case '3':
            return this[_0x1f57e0(279)];
        case '4':
            var _0x188702 = _0x46676a['noglobstar'] ? star : _0x46676a[_0x1f57e0(377)] ? twoStarDot : twoStarNoDot;
            continue;
        case '5':
            if (this['negate'])
                _0xa7140 = _0x37f649[_0x1f57e0(378)](_0x1f57e0(379), _0xa7140) + _0x37f649[_0x1f57e0(380)];
            continue;
        case '6':
            var _0x377a83 = _0x46676a[_0x1f57e0(318)] ? 'i' : '';
            continue;
        case '7':
            _0xa7140 = _0x37f649[_0x1f57e0(381)](_0x37f649[_0x1f57e0(381)](_0x37f649['IhCUV'], _0xa7140), ')$');
            continue;
        case '8':
            var _0x4db58e = this['set'];
            continue;
        case '9':
            try {
                this['regexp'] = new RegExp(_0xa7140, _0x377a83);
            } catch (_0x526a53) {
                this['regexp'] = ![];
            }
            continue;
        case '10':
            if (!_0x4db58e[_0x1f57e0(256)])
                return this[_0x1f57e0(279)] = ![], this[_0x1f57e0(279)];
            continue;
        case '11':
            var _0x46676a = this['options'];
            continue;
        }
        break;
    }
}
minimatch[_0x670e27(306)] = function (_0x3cb335, _0xeb4b9b, _0x241dbb) {
    var _0x2f2e04 = _0x670e27, _0x251e1d = {
            'lItsK': _0x2f2e04(382),
            'xqmkU': function (_0x33db42, _0x5701fd) {
                return _0x33db42 || _0x5701fd;
            }
        }, _0x465d4c = _0x251e1d['lItsK'][_0x2f2e04(244)]('|'), _0x35ad8f = -9694 + 494 + 50 * 184;
    while (!![]) {
        switch (_0x465d4c[_0x35ad8f++]) {
        case '0':
            _0x241dbb = _0x251e1d[_0x2f2e04(383)](_0x241dbb, {});
            continue;
        case '1':
            var _0x2a568 = new Minimatch(_0xeb4b9b, _0x241dbb);
            continue;
        case '2':
            _0x3cb335 = _0x3cb335[_0x2f2e04(245)](function (_0x1b93a4) {
                var _0x28fc48 = _0x2f2e04;
                return _0x2a568[_0x28fc48(306)](_0x1b93a4);
            });
            continue;
        case '3':
            _0x2a568[_0x2f2e04(301)][_0x2f2e04(384)] && !_0x3cb335['length'] && _0x3cb335[_0x2f2e04(335)](_0xeb4b9b);
            continue;
        case '4':
            return _0x3cb335;
        }
        break;
    }
}, Minimatch[_0x670e27(280)][_0x670e27(306)] = match;
function match(_0x5ed76a, _0x28d44d) {
    var _0x523ae0 = _0x670e27, _0x1e0a91 = {
            'xIBzp': _0x523ae0(306),
            'RnCoX': function (_0x5a1d3b, _0x1fa3fa) {
                return _0x5a1d3b === _0x1fa3fa;
            },
            'dPBLn': function (_0xd079f, _0xecfc81) {
                return _0xd079f !== _0xecfc81;
            },
            'Cfnlm': 'split',
            'ObHft': _0x523ae0(274),
            'iECQV': function (_0x3a84f7, _0xa6020e) {
                return _0x3a84f7 < _0xa6020e;
            },
            'QkgoX': _0x523ae0(385)
        };
    this[_0x523ae0(281)](_0x1e0a91[_0x523ae0(386)], _0x5ed76a, this['pattern']);
    if (this['comment'])
        return ![];
    if (this[_0x523ae0(275)])
        return _0x1e0a91['RnCoX'](_0x5ed76a, '');
    if (_0x5ed76a === '/' && _0x28d44d)
        return !![];
    var _0x470c58 = this[_0x523ae0(301)];
    _0x1e0a91['dPBLn'](path[_0x523ae0(277)], '/') && (_0x5ed76a = _0x5ed76a[_0x523ae0(244)](path[_0x523ae0(277)])['join']('/'));
    _0x5ed76a = _0x5ed76a[_0x523ae0(244)](slashSplit), this['debug'](this[_0x523ae0(270)], _0x1e0a91[_0x523ae0(387)], _0x5ed76a);
    var _0x270de5 = this['set'];
    this[_0x523ae0(281)](this[_0x523ae0(270)], _0x1e0a91[_0x523ae0(388)], _0x270de5);
    var _0x4a059f, _0xd751d6;
    for (_0xd751d6 = _0x5ed76a[_0x523ae0(256)] - (-9049 + 256 * 22 + 3418); _0xd751d6 >= -9996 + 1159 * -5 + 15791; _0xd751d6--) {
        _0x4a059f = _0x5ed76a[_0xd751d6];
        if (_0x4a059f)
            break;
    }
    for (_0xd751d6 = -237 * 19 + -4251 + -2918 * -3; _0x1e0a91[_0x523ae0(389)](_0xd751d6, _0x270de5[_0x523ae0(256)]); _0xd751d6++) {
        var _0x4c58bc = _0x1e0a91[_0x523ae0(390)][_0x523ae0(244)]('|'), _0x57018d = 3359 + -6912 + 3553;
        while (!![]) {
            switch (_0x4c58bc[_0x57018d++]) {
            case '0':
                if (_0x247b35) {
                    if (_0x470c58[_0x523ae0(391)])
                        return !![];
                    return !this[_0x523ae0(272)];
                }
                continue;
            case '1':
                var _0x48ce06 = _0x5ed76a;
                continue;
            case '2':
                var _0x247b35 = this['matchOne'](_0x48ce06, _0x3f5fe1, _0x28d44d);
                continue;
            case '3':
                _0x470c58['matchBase'] && _0x1e0a91[_0x523ae0(392)](_0x3f5fe1['length'], -882 * -2 + -7747 + 5984) && (_0x48ce06 = [_0x4a059f]);
                continue;
            case '4':
                var _0x3f5fe1 = _0x270de5[_0xd751d6];
                continue;
            }
            break;
        }
    }
    if (_0x470c58['flipNegate'])
        return ![];
    return this[_0x523ae0(272)];
}
Minimatch['prototype']['matchOne'] = function (_0x1b5fcb, _0x3c4033, _0x2af332) {
    var _0x41c69c = _0x670e27, _0x2d267f = {
            'PuxFL': _0x41c69c(393),
            'cUgAg': function (_0x2108fd, _0x26d0e0) {
                return _0x2108fd < _0x26d0e0;
            },
            'Trsdh': function (_0x587223, _0x1171a1) {
                return _0x587223 === _0x1171a1;
            },
            'LSWLi': function (_0x2177eb, _0x293c9b) {
                return _0x2177eb === _0x293c9b;
            },
            'etorq': _0x41c69c(238),
            'qYMNQ': function (_0x30a80a, _0x4ecd5c) {
                return _0x30a80a + _0x4ecd5c;
            },
            'QDzkU': '** at the end',
            'OHmYW': function (_0x24068d, _0x16d771) {
                return _0x24068d === _0x16d771;
            },
            'CAowA': function (_0x3be1d8, _0xc6a447) {
                return _0x3be1d8 === _0xc6a447;
            },
            'YCjhv': _0x41c69c(394),
            'sUpqH': _0x41c69c(395),
            'veatM': function (_0x3f91ea, _0x5c7d9e) {
                return _0x3f91ea === _0x5c7d9e;
            },
            'uYuMX': function (_0x3be605, _0x1588c7) {
                return _0x3be605 === _0x1588c7;
            },
            'oYYIn': '\n>>> no match, partial?',
            'pyTwG': function (_0x5ca170, _0x4270f5) {
                return _0x5ca170 === _0x4270f5;
            },
            'mFqst': function (_0x5282d4, _0xd93611) {
                return _0x5282d4 === _0xd93611;
            },
            'XTbRz': _0x41c69c(265),
            'eXEeS': 'string match',
            'aoyPC': function (_0x7b0231, _0x3b8383) {
                return _0x7b0231 === _0x3b8383;
            },
            'FJYyq': function (_0x1086b9, _0x5cdfb5) {
                return _0x1086b9 === _0x5cdfb5;
            },
            'oIbXt': function (_0x567a64, _0x61cfc9) {
                return _0x567a64 - _0x61cfc9;
            },
            'HJLJD': function (_0x28e539, _0x5a4e34) {
                return _0x28e539 === _0x5a4e34;
            }
        }, _0x4d92af = this[_0x41c69c(301)];
    this['debug'](_0x2d267f[_0x41c69c(396)], {
        'this': this,
        'file': _0x1b5fcb,
        'pattern': _0x3c4033
    }), this['debug']('matchOne', _0x1b5fcb[_0x41c69c(256)], _0x3c4033['length']);
    for (var _0x4625b8 = 9310 + 118 * 25 + 1226 * -10, _0x2984ad = -758 * -2 + -6397 * 1 + 4881, _0x508b78 = _0x1b5fcb[_0x41c69c(256)], _0x446c63 = _0x3c4033[_0x41c69c(256)]; _0x2d267f[_0x41c69c(397)](_0x4625b8, _0x508b78) && _0x2d267f[_0x41c69c(397)](_0x2984ad, _0x446c63); _0x4625b8++, _0x2984ad++) {
        this['debug'](_0x41c69c(398));
        var _0x5659fb = _0x3c4033[_0x2984ad], _0x3ff03f = _0x1b5fcb[_0x4625b8];
        this[_0x41c69c(281)](_0x3c4033, _0x5659fb, _0x3ff03f);
        if (_0x2d267f[_0x41c69c(399)](_0x5659fb, ![]))
            return ![];
        if (_0x2d267f[_0x41c69c(400)](_0x5659fb, GLOBSTAR)) {
            this[_0x41c69c(281)](_0x2d267f[_0x41c69c(401)], [
                _0x3c4033,
                _0x5659fb,
                _0x3ff03f
            ]);
            var _0x29acdf = _0x4625b8, _0x33f355 = _0x2d267f['qYMNQ'](_0x2984ad, 5410 + 2001 + -195 * 38);
            if (_0x2d267f[_0x41c69c(400)](_0x33f355, _0x446c63)) {
                this[_0x41c69c(281)](_0x2d267f[_0x41c69c(402)]);
                for (; _0x4625b8 < _0x508b78; _0x4625b8++) {
                    if (_0x2d267f[_0x41c69c(403)](_0x1b5fcb[_0x4625b8], '.') || _0x2d267f[_0x41c69c(404)](_0x1b5fcb[_0x4625b8], '..') || !_0x4d92af[_0x41c69c(377)] && _0x2d267f[_0x41c69c(404)](_0x1b5fcb[_0x4625b8][_0x41c69c(294)](-1 * 2669 + -2246 + 5 * 983), '.'))
                        return ![];
                }
                return !![];
            }
            while (_0x29acdf < _0x508b78) {
                var _0x50f800 = _0x1b5fcb[_0x29acdf];
                this[_0x41c69c(281)](_0x2d267f[_0x41c69c(405)], _0x1b5fcb, _0x29acdf, _0x3c4033, _0x33f355, _0x50f800);
                if (this[_0x41c69c(393)](_0x1b5fcb[_0x41c69c(354)](_0x29acdf), _0x3c4033[_0x41c69c(354)](_0x33f355), _0x2af332))
                    return this[_0x41c69c(281)](_0x2d267f[_0x41c69c(406)], _0x29acdf, _0x508b78, _0x50f800), !![];
                else {
                    if (_0x2d267f[_0x41c69c(407)](_0x50f800, '.') || _0x2d267f['veatM'](_0x50f800, '..') || !_0x4d92af[_0x41c69c(377)] && _0x2d267f[_0x41c69c(408)](_0x50f800[_0x41c69c(294)](9667 + -3971 + -5696), '.')) {
                        this[_0x41c69c(281)](_0x41c69c(409), _0x1b5fcb, _0x29acdf, _0x3c4033, _0x33f355);
                        break;
                    }
                    this['debug'](_0x41c69c(410)), _0x29acdf++;
                }
            }
            if (_0x2af332) {
                this[_0x41c69c(281)](_0x2d267f[_0x41c69c(411)], _0x1b5fcb, _0x29acdf, _0x3c4033, _0x33f355);
                if (_0x2d267f[_0x41c69c(412)](_0x29acdf, _0x508b78))
                    return !![];
            }
            return ![];
        }
        var _0x26d8e5;
        _0x2d267f[_0x41c69c(413)](typeof _0x5659fb, _0x2d267f[_0x41c69c(414)]) ? (_0x4d92af[_0x41c69c(318)] ? _0x26d8e5 = _0x2d267f['mFqst'](_0x3ff03f[_0x41c69c(415)](), _0x5659fb[_0x41c69c(415)]()) : _0x26d8e5 = _0x2d267f[_0x41c69c(413)](_0x3ff03f, _0x5659fb), this[_0x41c69c(281)](_0x2d267f['eXEeS'], _0x5659fb, _0x3ff03f, _0x26d8e5)) : (_0x26d8e5 = _0x3ff03f[_0x41c69c(306)](_0x5659fb), this[_0x41c69c(281)](_0x41c69c(416), _0x5659fb, _0x3ff03f, _0x26d8e5));
        if (!_0x26d8e5)
            return ![];
    }
    if (_0x2d267f[_0x41c69c(417)](_0x4625b8, _0x508b78) && _0x2d267f[_0x41c69c(417)](_0x2984ad, _0x446c63))
        return !![];
    else {
        if (_0x4625b8 === _0x508b78)
            return _0x2af332;
        else {
            if (_0x2d267f[_0x41c69c(418)](_0x2984ad, _0x446c63)) {
                var _0x768b3f = _0x4625b8 === _0x2d267f[_0x41c69c(419)](_0x508b78, 3 * 1189 + 1358 + -4924) && _0x2d267f[_0x41c69c(420)](_0x1b5fcb[_0x4625b8], '');
                return _0x768b3f;
            }
        }
    }
    throw new Error(_0x41c69c(421));
};
function globUnescape(_0x52f045) {
    var _0x4080db = _0x670e27;
    return _0x52f045[_0x4080db(346)](/\\(.)/g, '$1');
}
function regExpEscape(_0x3a2a18) {
    var _0x5b191d = _0x670e27, _0x2caa68 = { 'Oasgv': '\\$&' };
    return _0x3a2a18['replace'](/[-[\]{}()*+?.,\\^$|#\s]/g, _0x2caa68[_0x5b191d(422)]);
}