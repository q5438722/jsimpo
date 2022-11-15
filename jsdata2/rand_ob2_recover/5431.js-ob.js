module['exports'] = minimatch, minimatch['Minimatch'] = Minimatch;
var path = { 'sep': '/' };
try {
    path = require(_0x365fd1(441));
} catch (_0x24227f) {
}
var GLOBSTAR = minimatch[_0x365fd1(442)] = Minimatch[_0x365fd1(442)] = {}, expand = require(_0x365fd1(443)), plTypes = {
        '!': {
            'open': '(?:(?!(?:',
            'close': '))[^/]*?)'
        },
        '?': {
            'open': _0x365fd1(444),
            'close': ')?'
        },
        '+': {
            'open': _0x365fd1(444),
            'close': ')+'
        },
        '*': {
            'open': _0x365fd1(444),
            'close': ')*'
        },
        '@': {
            'open': _0x365fd1(444),
            'close': ')'
        }
    }, qmark = _0x365fd1(445), star = qmark + '*?', twoStarDot = _0x365fd1(446), twoStarNoDot = _0x365fd1(447), reSpecials = charSet(_0x365fd1(448));
function charSet(_0x469861) {
    var _0x70f850 = _0x365fd1;
    return _0x469861[_0x70f850(449)]('')[_0x70f850(450)](function (_0x16b98e, _0x25bb5a) {
        return _0x16b98e[_0x25bb5a] = !![], _0x16b98e;
    }, {});
}
var slashSplit = /\/+/;
minimatch[_0x365fd1(451)] = filter;
function filter(_0x2fe4de, _0x32d1a5) {
    return _0x32d1a5 = _0x32d1a5 || {}, function (_0x59b9c7, _0x2e7fb6, _0x18ac40) {
        return minimatch(_0x59b9c7, _0x2fe4de, _0x32d1a5);
    };
}
function ext(_0x440914, _0x18f8e3) {
    var _0xdbafc = _0x365fd1;
    _0x440914 = _0x440914 || {}, _0x18f8e3 = _0x18f8e3 || {};
    var _0x21086f = {};
    return Object[_0xdbafc(452)](_0x18f8e3)['forEach'](function (_0x34eaf0) {
        _0x21086f[_0x34eaf0] = _0x18f8e3[_0x34eaf0];
    }), Object[_0xdbafc(452)](_0x440914)[_0xdbafc(453)](function (_0x7e3a60) {
        _0x21086f[_0x7e3a60] = _0x440914[_0x7e3a60];
    }), _0x21086f;
}
minimatch[_0x365fd1(454)] = function (_0x52d572) {
    var _0x47ec3f = _0x365fd1;
    if (!_0x52d572 || !Object['keys'](_0x52d572)[_0x47ec3f(455)])
        return minimatch;
    var _0x298518 = minimatch, _0xf78d2a = function _0x5bdd4e(_0x58ae95, _0x2bbd95, _0x3c8f46) {
            return _0x298518['minimatch'](_0x58ae95, _0x2bbd95, ext(_0x52d572, _0x3c8f46));
        };
    return _0xf78d2a[_0x47ec3f(456)] = function _0x4c8e69(_0x1bf32b, _0x3dd91d) {
        return new _0x298518['Minimatch'](_0x1bf32b, ext(_0x52d572, _0x3dd91d));
    }, _0xf78d2a;
}, Minimatch[_0x365fd1(454)] = function (_0x3f914c) {
    var _0xbf7807 = _0x365fd1;
    if (!_0x3f914c || !Object['keys'](_0x3f914c)[_0xbf7807(455)])
        return Minimatch;
    return minimatch[_0xbf7807(454)](_0x3f914c)[_0xbf7807(456)];
};
function minimatch(_0x39a78a, _0x10c30c, _0x2457c8) {
    var _0x32ed96 = _0x365fd1;
    if (typeof _0x10c30c !== _0x32ed96(457))
        throw new TypeError(_0x32ed96(458));
    if (!_0x2457c8)
        _0x2457c8 = {};
    if (!_0x2457c8[_0x32ed96(459)] && _0x10c30c[_0x32ed96(460)](0) === '#')
        return ![];
    if (_0x10c30c[_0x32ed96(461)]() === '')
        return _0x39a78a === '';
    return new Minimatch(_0x10c30c, _0x2457c8)[_0x32ed96(462)](_0x39a78a);
}
function Minimatch(_0x540339, _0x3e0bf0) {
    var _0x3c904e = _0x365fd1;
    if (!(this instanceof Minimatch))
        return new Minimatch(_0x540339, _0x3e0bf0);
    if (typeof _0x540339 !== 'string')
        throw new TypeError(_0x3c904e(458));
    if (!_0x3e0bf0)
        _0x3e0bf0 = {};
    _0x540339 = _0x540339['trim'](), path[_0x3c904e(463)] !== '/' && (_0x540339 = _0x540339['split'](path[_0x3c904e(463)])[_0x3c904e(464)]('/')), this['options'] = _0x3e0bf0, this['set'] = [], this['pattern'] = _0x540339, this[_0x3c904e(465)] = null, this['negate'] = ![], this[_0x3c904e(466)] = ![], this[_0x3c904e(467)] = ![], this[_0x3c904e(468)]();
}
Minimatch[_0x365fd1(469)][_0x365fd1(470)] = function () {
}, Minimatch[_0x365fd1(469)][_0x365fd1(468)] = make;
function make() {
    var _0x2d0025 = _0x365fd1;
    if (this[_0x2d0025(471)])
        return;
    var _0x224d63 = this['pattern'], _0x4870a0 = this[_0x2d0025(472)];
    if (!_0x4870a0[_0x2d0025(459)] && _0x224d63['charAt'](0) === '#') {
        this['comment'] = !![];
        return;
    }
    if (!_0x224d63) {
        this[_0x2d0025(467)] = !![];
        return;
    }
    this['parseNegate']();
    var _0x3d3c9f = this[_0x2d0025(473)] = this['braceExpand']();
    if (_0x4870a0[_0x2d0025(470)])
        this[_0x2d0025(470)] = console['error'];
    this['debug'](this[_0x2d0025(474)], _0x3d3c9f), _0x3d3c9f = this[_0x2d0025(475)] = _0x3d3c9f[_0x2d0025(476)](function (_0xeddf10) {
        return _0xeddf10['split'](slashSplit);
    }), this[_0x2d0025(470)](this[_0x2d0025(474)], _0x3d3c9f), _0x3d3c9f = _0x3d3c9f['map'](function (_0x16c8c3, _0x234ad6, _0x482f70) {
        var _0x5ef786 = _0x2d0025;
        return _0x16c8c3[_0x5ef786(476)](this['parse'], this);
    }, this), this['debug'](this[_0x2d0025(474)], _0x3d3c9f), _0x3d3c9f = _0x3d3c9f[_0x2d0025(451)](function (_0x3df732) {
        var _0x5afdca = _0x2d0025;
        return _0x3df732[_0x5afdca(477)](![]) === -1;
    }), this['debug'](this['pattern'], _0x3d3c9f), this[_0x2d0025(478)] = _0x3d3c9f;
}
Minimatch['prototype'][_0x365fd1(479)] = parseNegate;
function parseNegate() {
    var _0x5a266f = _0x365fd1, _0x2382f8 = this[_0x5a266f(474)], _0x30d25f = ![], _0x202960 = this[_0x5a266f(472)], _0x342f52 = 0;
    if (_0x202960['nonegate'])
        return;
    for (var _0x5ddad8 = 0, _0x14f1ff = _0x2382f8[_0x5a266f(455)]; _0x5ddad8 < _0x14f1ff && _0x2382f8['charAt'](_0x5ddad8) === '!'; _0x5ddad8++) {
        _0x30d25f = !_0x30d25f, _0x342f52++;
    }
    if (_0x342f52)
        this[_0x5a266f(474)] = _0x2382f8[_0x5a266f(480)](_0x342f52);
    this['negate'] = _0x30d25f;
}
minimatch[_0x365fd1(481)] = function (_0xb3cc12, _0x38ae12) {
    return braceExpand(_0xb3cc12, _0x38ae12);
}, Minimatch[_0x365fd1(469)][_0x365fd1(481)] = braceExpand;
function braceExpand(_0x2a77b8, _0x5b2820) {
    var _0x3d93a0 = _0x365fd1;
    !_0x5b2820 && (this instanceof Minimatch ? _0x5b2820 = this[_0x3d93a0(472)] : _0x5b2820 = {});
    _0x2a77b8 = typeof _0x2a77b8 === 'undefined' ? this['pattern'] : _0x2a77b8;
    if (typeof _0x2a77b8 === _0x3d93a0(482))
        throw new TypeError(_0x3d93a0(483));
    if (_0x5b2820[_0x3d93a0(484)] || !_0x2a77b8[_0x3d93a0(462)](/\{.*\}/))
        return [_0x2a77b8];
    return expand(_0x2a77b8);
}
Minimatch['prototype'][_0x365fd1(485)] = parse;
function _0x1dc8(_0x3ec48c, _0x44cb92) {
    return _0x1dc8 = function (_0xb2c337, _0x1dc8d5) {
        _0xb2c337 = _0xb2c337 - 431;
        var _0x3bd65b = _0xb2c3[_0xb2c337];
        return _0x3bd65b;
    }, _0x1dc8(_0x3ec48c, _0x44cb92);
}
var SUBPARSE = {};
function parse(_0x2cb846, _0xc436d9) {
    var _0x1ec61c = _0x365fd1;
    if (_0x2cb846[_0x1ec61c(455)] > 1024 * 64)
        throw new TypeError('pattern is too long');
    var _0x2b6dc8 = this[_0x1ec61c(472)];
    if (!_0x2b6dc8[_0x1ec61c(486)] && _0x2cb846 === '**')
        return GLOBSTAR;
    if (_0x2cb846 === '')
        return '';
    var _0x5a8725 = '', _0x462494 = !!_0x2b6dc8[_0x1ec61c(487)], _0x36b85b = ![], _0x18d6e8 = [], _0x6998a0 = [], _0x1a4d24, _0x179b52 = ![], _0xbf2585 = -1, _0x2422d0 = -1, _0xa72344 = _0x2cb846[_0x1ec61c(460)](0) === '.' ? '' : _0x2b6dc8[_0x1ec61c(488)] ? _0x1ec61c(489) : _0x1ec61c(490), _0x32d205 = this;
    function _0x1fffac() {
        var _0x278827 = _0x1ec61c;
        if (_0x1a4d24) {
            switch (_0x1a4d24) {
            case '*':
                _0x5a8725 += star, _0x462494 = !![];
                break;
            case '?':
                _0x5a8725 += qmark, _0x462494 = !![];
                break;
            default:
                _0x5a8725 += '\\' + _0x1a4d24;
                break;
            }
            _0x32d205['debug'](_0x278827(491), _0x1a4d24, _0x5a8725), _0x1a4d24 = ![];
        }
    }
    for (var _0x2767a2 = 0, _0x3e12ce = _0x2cb846[_0x1ec61c(455)], _0x5ccac1; _0x2767a2 < _0x3e12ce && (_0x5ccac1 = _0x2cb846[_0x1ec61c(460)](_0x2767a2)); _0x2767a2++) {
        this[_0x1ec61c(470)](_0x1ec61c(492), _0x2cb846, _0x2767a2, _0x5a8725, _0x5ccac1);
        if (_0x36b85b && reSpecials[_0x5ccac1]) {
            _0x5a8725 += '\\' + _0x5ccac1, _0x36b85b = ![];
            continue;
        }
        switch (_0x5ccac1) {
        case '/':
            return ![];
        case '\\':
            _0x1fffac(), _0x36b85b = !![];
            continue;
        case '?':
        case '*':
        case '+':
        case '@':
        case '!':
            this['debug'](_0x1ec61c(493), _0x2cb846, _0x2767a2, _0x5a8725, _0x5ccac1);
            if (_0x179b52) {
                this[_0x1ec61c(470)]('  in class');
                if (_0x5ccac1 === '!' && _0x2767a2 === _0x2422d0 + 1)
                    _0x5ccac1 = '^';
                _0x5a8725 += _0x5ccac1;
                continue;
            }
            _0x32d205['debug'](_0x1ec61c(494), _0x1a4d24), _0x1fffac(), _0x1a4d24 = _0x5ccac1;
            if (_0x2b6dc8[_0x1ec61c(495)])
                _0x1fffac();
            continue;
        case '(':
            if (_0x179b52) {
                _0x5a8725 += '(';
                continue;
            }
            if (!_0x1a4d24) {
                _0x5a8725 += '\\(';
                continue;
            }
            _0x18d6e8[_0x1ec61c(496)]({
                'type': _0x1a4d24,
                'start': _0x2767a2 - 1,
                'reStart': _0x5a8725[_0x1ec61c(455)],
                'open': plTypes[_0x1a4d24][_0x1ec61c(497)],
                'close': plTypes[_0x1a4d24][_0x1ec61c(498)]
            }), _0x5a8725 += _0x1a4d24 === '!' ? _0x1ec61c(499) : '(?:', this[_0x1ec61c(470)](_0x1ec61c(500), _0x1a4d24, _0x5a8725), _0x1a4d24 = ![];
            continue;
        case ')':
            if (_0x179b52 || !_0x18d6e8[_0x1ec61c(455)]) {
                _0x5a8725 += '\\)';
                continue;
            }
            _0x1fffac(), _0x462494 = !![];
            var _0x1565af = _0x18d6e8[_0x1ec61c(501)]();
            _0x5a8725 += _0x1565af[_0x1ec61c(498)];
            _0x1565af[_0x1ec61c(502)] === '!' && _0x6998a0[_0x1ec61c(496)](_0x1565af);
            _0x1565af['reEnd'] = _0x5a8725[_0x1ec61c(455)];
            continue;
        case '|':
            if (_0x179b52 || !_0x18d6e8['length'] || _0x36b85b) {
                _0x5a8725 += '\\|', _0x36b85b = ![];
                continue;
            }
            _0x1fffac(), _0x5a8725 += '|';
            continue;
        case '[':
            _0x1fffac();
            if (_0x179b52) {
                _0x5a8725 += '\\' + _0x5ccac1;
                continue;
            }
            _0x179b52 = !![], _0x2422d0 = _0x2767a2, _0xbf2585 = _0x5a8725[_0x1ec61c(455)], _0x5a8725 += _0x5ccac1;
            continue;
        case ']':
            if (_0x2767a2 === _0x2422d0 + 1 || !_0x179b52) {
                _0x5a8725 += '\\' + _0x5ccac1, _0x36b85b = ![];
                continue;
            }
            if (_0x179b52) {
                var _0x231924 = _0x2cb846[_0x1ec61c(503)](_0x2422d0 + 1, _0x2767a2);
                try {
                    RegExp('[' + _0x231924 + ']');
                } catch (_0x117503) {
                    var _0x51d914 = this[_0x1ec61c(485)](_0x231924, SUBPARSE);
                    _0x5a8725 = _0x5a8725[_0x1ec61c(480)](0, _0xbf2585) + '\\[' + _0x51d914[0] + '\\]', _0x462494 = _0x462494 || _0x51d914[1], _0x179b52 = ![];
                    continue;
                }
            }
            _0x462494 = !![], _0x179b52 = ![], _0x5a8725 += _0x5ccac1;
            continue;
        default:
            _0x1fffac();
            if (_0x36b85b)
                _0x36b85b = ![];
            else
                reSpecials[_0x5ccac1] && !(_0x5ccac1 === '^' && _0x179b52) && (_0x5a8725 += '\\');
            _0x5a8725 += _0x5ccac1;
        }
    }
    _0x179b52 && (_0x231924 = _0x2cb846[_0x1ec61c(480)](_0x2422d0 + 1), _0x51d914 = this[_0x1ec61c(485)](_0x231924, SUBPARSE), _0x5a8725 = _0x5a8725[_0x1ec61c(480)](0, _0xbf2585) + '\\[' + _0x51d914[0], _0x462494 = _0x462494 || _0x51d914[1]);
    for (_0x1565af = _0x18d6e8[_0x1ec61c(501)](); _0x1565af; _0x1565af = _0x18d6e8['pop']()) {
        var _0x46f231 = _0x5a8725[_0x1ec61c(504)](_0x1565af[_0x1ec61c(505)] + _0x1565af[_0x1ec61c(497)][_0x1ec61c(455)]);
        this[_0x1ec61c(470)](_0x1ec61c(506), _0x5a8725, _0x1565af), _0x46f231 = _0x46f231['replace'](/((?:\\{2}){0,64})(\\?)\|/g, function (_0x4d557c, _0x53ca6c, _0x406306) {
            return !_0x406306 && (_0x406306 = '\\'), _0x53ca6c + _0x53ca6c + _0x406306 + '|';
        }), this[_0x1ec61c(470)]('tail=%j\n   %s', _0x46f231, _0x46f231, _0x1565af, _0x5a8725);
        var _0x58dd37 = _0x1565af[_0x1ec61c(502)] === '*' ? star : _0x1565af[_0x1ec61c(502)] === '?' ? qmark : '\\' + _0x1565af[_0x1ec61c(502)];
        _0x462494 = !![], _0x5a8725 = _0x5a8725[_0x1ec61c(504)](0, _0x1565af[_0x1ec61c(505)]) + _0x58dd37 + '\\(' + _0x46f231;
    }
    _0x1fffac();
    _0x36b85b && (_0x5a8725 += '\\\\');
    var _0x2f5ba4 = ![];
    switch (_0x5a8725[_0x1ec61c(460)](0)) {
    case '.':
    case '[':
    case '(':
        _0x2f5ba4 = !![];
    }
    for (var _0x30df56 = _0x6998a0[_0x1ec61c(455)] - 1; _0x30df56 > -1; _0x30df56--) {
        var _0x16c151 = _0x6998a0[_0x30df56], _0x5d392a = _0x5a8725[_0x1ec61c(504)](0, _0x16c151['reStart']), _0x5a383a = _0x5a8725[_0x1ec61c(504)](_0x16c151[_0x1ec61c(505)], _0x16c151['reEnd'] - 8), _0x5bb779 = _0x5a8725['slice'](_0x16c151['reEnd'] - 8, _0x16c151[_0x1ec61c(507)]), _0x99177f = _0x5a8725[_0x1ec61c(504)](_0x16c151['reEnd']);
        _0x5bb779 += _0x99177f;
        var _0x485e56 = _0x5d392a[_0x1ec61c(449)]('(')[_0x1ec61c(455)] - 1, _0x11695e = _0x99177f;
        for (_0x2767a2 = 0; _0x2767a2 < _0x485e56; _0x2767a2++) {
            _0x11695e = _0x11695e[_0x1ec61c(508)](/\)[+*?]?/, '');
        }
        _0x99177f = _0x11695e;
        var _0x1971df = '';
        _0x99177f === '' && _0xc436d9 !== SUBPARSE && (_0x1971df = '$');
        var _0x234d1b = _0x5d392a + _0x5a383a + _0x99177f + _0x1971df + _0x5bb779;
        _0x5a8725 = _0x234d1b;
    }
    _0x5a8725 !== '' && _0x462494 && (_0x5a8725 = '(?=.)' + _0x5a8725);
    _0x2f5ba4 && (_0x5a8725 = _0xa72344 + _0x5a8725);
    if (_0xc436d9 === SUBPARSE)
        return [
            _0x5a8725,
            _0x462494
        ];
    if (!_0x462494)
        return globUnescape(_0x2cb846);
    var _0x4b3e55 = _0x2b6dc8[_0x1ec61c(487)] ? 'i' : '';
    try {
        var _0x32435c = new RegExp('^' + _0x5a8725 + '$', _0x4b3e55);
    } catch (_0x41a63f) {
        return new RegExp('$.');
    }
    return _0x32435c['_glob'] = _0x2cb846, _0x32435c[_0x1ec61c(509)] = _0x5a8725, _0x32435c;
}
minimatch[_0x365fd1(510)] = function (_0x5b562e, _0x474db6) {
    var _0x1aa61c = _0x365fd1;
    return new Minimatch(_0x5b562e, _0x474db6 || {})[_0x1aa61c(510)]();
}, Minimatch[_0x365fd1(469)][_0x365fd1(510)] = makeRe;
function makeRe() {
    var _0x231312 = _0x365fd1;
    if (this[_0x231312(465)] || this[_0x231312(465)] === ![])
        return this[_0x231312(465)];
    var _0x11a00f = this['set'];
    if (!_0x11a00f[_0x231312(455)])
        return this[_0x231312(465)] = ![], this['regexp'];
    var _0x192cd4 = this[_0x231312(472)], _0x53d998 = _0x192cd4[_0x231312(486)] ? star : _0x192cd4[_0x231312(488)] ? twoStarDot : twoStarNoDot, _0x206282 = _0x192cd4[_0x231312(487)] ? 'i' : '', _0x4272c2 = _0x11a00f[_0x231312(476)](function (_0x4e9eed) {
            var _0x5696e6 = _0x231312;
            return _0x4e9eed[_0x5696e6(476)](function (_0x34f12d) {
                var _0x3014ab = _0x5696e6;
                return _0x34f12d === GLOBSTAR ? _0x53d998 : typeof _0x34f12d === _0x3014ab(457) ? regExpEscape(_0x34f12d) : _0x34f12d['_src'];
            })[_0x5696e6(464)]('\\/');
        })['join']('|');
    _0x4272c2 = '^(?:' + _0x4272c2 + ')$';
    if (this[_0x231312(511)])
        _0x4272c2 = _0x231312(512) + _0x4272c2 + _0x231312(513);
    try {
        this['regexp'] = new RegExp(_0x4272c2, _0x206282);
    } catch (_0x4adbed) {
        this['regexp'] = ![];
    }
    return this[_0x231312(465)];
}
minimatch[_0x365fd1(462)] = function (_0x46e188, _0x387cfc, _0x28680e) {
    var _0x336f4c = _0x365fd1;
    _0x28680e = _0x28680e || {};
    var _0x583df8 = new Minimatch(_0x387cfc, _0x28680e);
    return _0x46e188 = _0x46e188[_0x336f4c(451)](function (_0x219f42) {
        var _0x4d9faa = _0x336f4c;
        return _0x583df8[_0x4d9faa(462)](_0x219f42);
    }), _0x583df8[_0x336f4c(472)][_0x336f4c(514)] && !_0x46e188[_0x336f4c(455)] && _0x46e188[_0x336f4c(496)](_0x387cfc), _0x46e188;
}, Minimatch[_0x365fd1(469)][_0x365fd1(462)] = match;
function match(_0x37e475, _0x26dc33) {
    var _0x27e5de = _0x365fd1;
    this[_0x27e5de(470)]('match', _0x37e475, this[_0x27e5de(474)]);
    if (this['comment'])
        return ![];
    if (this[_0x27e5de(467)])
        return _0x37e475 === '';
    if (_0x37e475 === '/' && _0x26dc33)
        return !![];
    var _0x145622 = this[_0x27e5de(472)];
    path[_0x27e5de(463)] !== '/' && (_0x37e475 = _0x37e475[_0x27e5de(449)](path[_0x27e5de(463)])[_0x27e5de(464)]('/'));
    _0x37e475 = _0x37e475[_0x27e5de(449)](slashSplit), this[_0x27e5de(470)](this['pattern'], 'split', _0x37e475);
    var _0x16b052 = this['set'];
    this[_0x27e5de(470)](this['pattern'], _0x27e5de(478), _0x16b052);
    var _0x2f7ee9, _0x409f84;
    for (_0x409f84 = _0x37e475['length'] - 1; _0x409f84 >= 0; _0x409f84--) {
        _0x2f7ee9 = _0x37e475[_0x409f84];
        if (_0x2f7ee9)
            break;
    }
    for (_0x409f84 = 0; _0x409f84 < _0x16b052[_0x27e5de(455)]; _0x409f84++) {
        var _0x5ab20e = _0x16b052[_0x409f84], _0x56deb3 = _0x37e475;
        _0x145622[_0x27e5de(515)] && _0x5ab20e[_0x27e5de(455)] === 1 && (_0x56deb3 = [_0x2f7ee9]);
        var _0xecb3f1 = this['matchOne'](_0x56deb3, _0x5ab20e, _0x26dc33);
        if (_0xecb3f1) {
            if (_0x145622[_0x27e5de(516)])
                return !![];
            return !this['negate'];
        }
    }
    if (_0x145622[_0x27e5de(516)])
        return ![];
    return this[_0x27e5de(511)];
}
Minimatch[_0x365fd1(469)][_0x365fd1(517)] = function (_0x42fb9c, _0x35f951, _0x55de91) {
    var _0x1ea3d7 = _0x365fd1, _0x52d6bc = this[_0x1ea3d7(472)];
    this[_0x1ea3d7(470)](_0x1ea3d7(517), {
        'this': this,
        'file': _0x42fb9c,
        'pattern': _0x35f951
    }), this['debug'](_0x1ea3d7(517), _0x42fb9c[_0x1ea3d7(455)], _0x35f951[_0x1ea3d7(455)]);
    for (var _0x2c7efe = 0, _0x50082e = 0, _0x351fb9 = _0x42fb9c[_0x1ea3d7(455)], _0x17da5c = _0x35f951[_0x1ea3d7(455)]; _0x2c7efe < _0x351fb9 && _0x50082e < _0x17da5c; _0x2c7efe++, _0x50082e++) {
        this[_0x1ea3d7(470)](_0x1ea3d7(518));
        var _0x1cd1d0 = _0x35f951[_0x50082e], _0x3ac232 = _0x42fb9c[_0x2c7efe];
        this[_0x1ea3d7(470)](_0x35f951, _0x1cd1d0, _0x3ac232);
        if (_0x1cd1d0 === ![])
            return ![];
        if (_0x1cd1d0 === GLOBSTAR) {
            this['debug'](_0x1ea3d7(442), [
                _0x35f951,
                _0x1cd1d0,
                _0x3ac232
            ]);
            var _0x551753 = _0x2c7efe, _0x1e63ec = _0x50082e + 1;
            if (_0x1e63ec === _0x17da5c) {
                this[_0x1ea3d7(470)]('** at the end');
                for (; _0x2c7efe < _0x351fb9; _0x2c7efe++) {
                    if (_0x42fb9c[_0x2c7efe] === '.' || _0x42fb9c[_0x2c7efe] === '..' || !_0x52d6bc['dot'] && _0x42fb9c[_0x2c7efe][_0x1ea3d7(460)](0) === '.')
                        return ![];
                }
                return !![];
            }
            while (_0x551753 < _0x351fb9) {
                var _0x28a8cc = _0x42fb9c[_0x551753];
                this['debug'](_0x1ea3d7(519), _0x42fb9c, _0x551753, _0x35f951, _0x1e63ec, _0x28a8cc);
                if (this[_0x1ea3d7(517)](_0x42fb9c[_0x1ea3d7(504)](_0x551753), _0x35f951[_0x1ea3d7(504)](_0x1e63ec), _0x55de91))
                    return this[_0x1ea3d7(470)]('globstar found match!', _0x551753, _0x351fb9, _0x28a8cc), !![];
                else {
                    if (_0x28a8cc === '.' || _0x28a8cc === '..' || !_0x52d6bc[_0x1ea3d7(488)] && _0x28a8cc[_0x1ea3d7(460)](0) === '.') {
                        this[_0x1ea3d7(470)](_0x1ea3d7(520), _0x42fb9c, _0x551753, _0x35f951, _0x1e63ec);
                        break;
                    }
                    this[_0x1ea3d7(470)](_0x1ea3d7(521)), _0x551753++;
                }
            }
            if (_0x55de91) {
                this[_0x1ea3d7(470)](_0x1ea3d7(522), _0x42fb9c, _0x551753, _0x35f951, _0x1e63ec);
                if (_0x551753 === _0x351fb9)
                    return !![];
            }
            return ![];
        }
        var _0x1d1ce5;
        typeof _0x1cd1d0 === _0x1ea3d7(457) ? (_0x52d6bc[_0x1ea3d7(487)] ? _0x1d1ce5 = _0x3ac232[_0x1ea3d7(523)]() === _0x1cd1d0[_0x1ea3d7(523)]() : _0x1d1ce5 = _0x3ac232 === _0x1cd1d0, this[_0x1ea3d7(470)](_0x1ea3d7(524), _0x1cd1d0, _0x3ac232, _0x1d1ce5)) : (_0x1d1ce5 = _0x3ac232[_0x1ea3d7(462)](_0x1cd1d0), this['debug'](_0x1ea3d7(525), _0x1cd1d0, _0x3ac232, _0x1d1ce5));
        if (!_0x1d1ce5)
            return ![];
    }
    if (_0x2c7efe === _0x351fb9 && _0x50082e === _0x17da5c)
        return !![];
    else {
        if (_0x2c7efe === _0x351fb9)
            return _0x55de91;
        else {
            if (_0x50082e === _0x17da5c) {
                var _0x34fa8b = _0x2c7efe === _0x351fb9 - 1 && _0x42fb9c[_0x2c7efe] === '';
                return _0x34fa8b;
            }
        }
    }
    throw new Error(_0x1ea3d7(526));
};
function globUnescape(_0x34169a) {
    var _0x2db9f6 = _0x365fd1;
    return _0x34169a[_0x2db9f6(508)](/\\(.)/g, '$1');
}
function regExpEscape(_0x5e07b9) {
    var _0x2a44dc = _0x365fd1;
    return _0x5e07b9['replace'](/[-[\]{}()*+?.,\\^$|#\s]/g, _0x2a44dc(527));
}