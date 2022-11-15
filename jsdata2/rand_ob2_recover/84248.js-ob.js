var EventEmitter = require(_0x314e4a(134))[_0x314e4a(135)], spawn = require('child_process')['spawn'], readlink = require(_0x314e4a(136))[_0x314e4a(137)], path = require(_0x314e4a(138)), dirname = path[_0x314e4a(139)], basename = path[_0x314e4a(140)], fs = require('fs');
exports = module['exports'] = new Command(), exports[_0x314e4a(141)] = Command, exports[_0x314e4a(142)] = Option;
function Option(_0x49f719, _0x3f87f6) {
    var _0x4786b0 = _0x314e4a;
    this['flags'] = _0x49f719, this[_0x4786b0(143)] = ~_0x49f719[_0x4786b0(144)]('<'), this[_0x4786b0(145)] = ~_0x49f719[_0x4786b0(144)]('['), this[_0x4786b0(146)] = !~_0x49f719[_0x4786b0(144)](_0x4786b0(147)), _0x49f719 = _0x49f719['split'](/[ ,|]+/);
    if (_0x49f719['length'] > 1 && !/^[[<]/[_0x4786b0(148)](_0x49f719[1]))
        this[_0x4786b0(149)] = _0x49f719['shift']();
    this[_0x4786b0(150)] = _0x49f719[_0x4786b0(151)](), this[_0x4786b0(152)] = _0x3f87f6 || '';
}
Option['prototype'][_0x314e4a(153)] = function () {
    var _0x2253b1 = _0x314e4a;
    return this[_0x2253b1(150)]['replace']('--', '')[_0x2253b1(154)](_0x2253b1(155), '');
}, Option['prototype']['is'] = function (_0x57461d) {
    var _0x384e44 = _0x314e4a;
    return _0x57461d == this[_0x384e44(149)] || _0x57461d == this['long'];
};
function Command(_0x42b204) {
    var _0x39c797 = _0x314e4a;
    this[_0x39c797(156)] = [], this[_0x39c797(157)] = [], this[_0x39c797(158)] = {}, this[_0x39c797(159)] = ![], this[_0x39c797(160)] = [], this[_0x39c797(161)] = _0x42b204 || '';
}
Command[_0x314e4a(162)][_0x314e4a(163)] = EventEmitter[_0x314e4a(162)], Command[_0x314e4a(162)][_0x314e4a(164)] = function (_0x3bf99d, _0x583fc9, _0x5e493e) {
    var _0x5f260c = _0x314e4a;
    _0x5e493e = _0x5e493e || {};
    var _0x36cb6e = _0x3bf99d[_0x5f260c(165)](/ +/), _0x627219 = new Command(_0x36cb6e[_0x5f260c(151)]());
    if (_0x583fc9) {
        _0x627219[_0x5f260c(152)](_0x583fc9), this['executables'] = !![], this[_0x5f260c(158)][_0x627219[_0x5f260c(161)]] = !![];
        if (_0x5e493e[_0x5f260c(166)])
            this['defaultExecutable'] = _0x627219[_0x5f260c(161)];
    }
    _0x627219['_noHelp'] = !!_0x5e493e['noHelp'], this[_0x5f260c(156)][_0x5f260c(167)](_0x627219), _0x627219['parseExpectedArgs'](_0x36cb6e), _0x627219['parent'] = this;
    if (_0x583fc9)
        return this;
    return _0x627219;
}, Command[_0x314e4a(162)][_0x314e4a(168)] = function (_0x21af92) {
    var _0x2da95c = _0x314e4a;
    return this[_0x2da95c(169)](_0x21af92['split'](/ +/));
}, Command[_0x314e4a(162)]['addImplicitHelpCommand'] = function () {
    var _0x51fab3 = _0x314e4a;
    this[_0x51fab3(164)](_0x51fab3(170), 'display help for [cmd]');
}, Command[_0x314e4a(162)][_0x314e4a(169)] = function (_0x7c605b) {
    var _0x534eb3 = _0x314e4a;
    if (!_0x7c605b[_0x534eb3(171)])
        return;
    var _0x5b0889 = this;
    return _0x7c605b[_0x534eb3(172)](function (_0x10d619) {
        var _0x17889c = _0x534eb3, _0x4b29d9 = {
                'required': ![],
                'name': '',
                'variadic': ![]
            };
        switch (_0x10d619[0]) {
        case '<':
            _0x4b29d9['required'] = !![], _0x4b29d9['name'] = _0x10d619[_0x17889c(173)](1, -1);
            break;
        case '[':
            _0x4b29d9[_0x17889c(153)] = _0x10d619[_0x17889c(173)](1, -1);
            break;
        }
        _0x4b29d9[_0x17889c(153)][_0x17889c(171)] > 3 && _0x4b29d9[_0x17889c(153)][_0x17889c(173)](-3) === _0x17889c(174) && (_0x4b29d9['variadic'] = !![], _0x4b29d9[_0x17889c(153)] = _0x4b29d9[_0x17889c(153)][_0x17889c(173)](0, -3)), _0x4b29d9['name'] && _0x5b0889['_args'][_0x17889c(167)](_0x4b29d9);
    }), this;
}, Command[_0x314e4a(162)]['action'] = function (_0x30a440) {
    var _0x6696ac = _0x314e4a, _0xce16c8 = this, _0xf326ff = function (_0x56c589, _0x5cfc21) {
            var _0x350b18 = _0x267c;
            _0x56c589 = _0x56c589 || [], _0x5cfc21 = _0x5cfc21 || [];
            var _0xed2c74 = _0xce16c8[_0x350b18(175)](_0x5cfc21);
            outputHelpIfNecessary(_0xce16c8, _0xed2c74[_0x350b18(176)]);
            _0xed2c74[_0x350b18(176)]['length'] > 0 && _0xce16c8[_0x350b18(177)](_0xed2c74[_0x350b18(176)][0]);
            if (_0xed2c74[_0x350b18(178)][_0x350b18(171)])
                _0x56c589 = _0xed2c74[_0x350b18(178)][_0x350b18(179)](_0x56c589);
            _0xce16c8[_0x350b18(160)]['forEach'](function (_0x549c0d, _0x5d6ea2) {
                var _0x5221da = _0x350b18;
                if (_0x549c0d[_0x5221da(143)] && null == _0x56c589[_0x5d6ea2])
                    _0xce16c8[_0x5221da(180)](_0x549c0d['name']);
                else
                    _0x549c0d[_0x5221da(181)] && (_0x5d6ea2 !== _0xce16c8[_0x5221da(160)][_0x5221da(171)] - 1 && _0xce16c8['variadicArgNotLast'](_0x549c0d[_0x5221da(153)]), _0x56c589[_0x5d6ea2] = _0x56c589['splice'](_0x5d6ea2));
            }), _0xce16c8['_args'][_0x350b18(171)] ? _0x56c589[_0xce16c8[_0x350b18(160)][_0x350b18(171)]] = _0xce16c8 : _0x56c589[_0x350b18(167)](_0xce16c8), _0x30a440[_0x350b18(182)](_0xce16c8, _0x56c589);
        }, _0x2dbf32 = this['parent'] || this, _0x4708f8 = _0x2dbf32 === this ? '*' : this[_0x6696ac(161)];
    _0x2dbf32['on'](_0x4708f8, _0xf326ff);
    if (this[_0x6696ac(183)])
        _0x2dbf32['on'](this[_0x6696ac(183)], _0xf326ff);
    return this;
}, Command[_0x314e4a(162)][_0x314e4a(184)] = function (_0x49c023, _0x33c266, _0x53631a, _0x39a182) {
    var _0x1dfab0 = _0x314e4a, _0x338aaf = this, _0x500357 = new Option(_0x49c023, _0x33c266), _0x5b892e = _0x500357[_0x1dfab0(153)](), _0x5e65ce = camelcase(_0x5b892e);
    if (typeof _0x53631a != _0x1dfab0(185)) {
        if (_0x53631a instanceof RegExp) {
            var _0x2ab83e = _0x53631a;
            _0x53631a = function (_0x56c7a7, _0x47006c) {
                var _0x4e66c2 = _0x1dfab0, _0x4da3d = _0x2ab83e[_0x4e66c2(186)](_0x56c7a7);
                return _0x4da3d ? _0x4da3d[0] : _0x47006c;
            };
        } else
            _0x39a182 = _0x53631a, _0x53631a = null;
    }
    if (![] == _0x500357[_0x1dfab0(146)] || _0x500357[_0x1dfab0(145)] || _0x500357[_0x1dfab0(143)]) {
        if (![] == _0x500357[_0x1dfab0(146)])
            _0x39a182 = !![];
        if (undefined !== _0x39a182)
            _0x338aaf[_0x5e65ce] = _0x39a182;
    }
    return this['options'][_0x1dfab0(167)](_0x500357), this['on'](_0x5b892e, function (_0x4ec0e7) {
        var _0x53625b = _0x1dfab0;
        if (null !== _0x4ec0e7 && _0x53631a)
            _0x4ec0e7 = _0x53631a(_0x4ec0e7, undefined === _0x338aaf[_0x5e65ce] ? _0x39a182 : _0x338aaf[_0x5e65ce]);
        if (_0x53625b(187) == typeof _0x338aaf[_0x5e65ce] || _0x53625b(188) == typeof _0x338aaf[_0x5e65ce])
            null == _0x4ec0e7 ? _0x338aaf[_0x5e65ce] = _0x500357[_0x53625b(146)] ? _0x39a182 || !![] : ![] : _0x338aaf[_0x5e65ce] = _0x4ec0e7;
        else
            null !== _0x4ec0e7 && (_0x338aaf[_0x5e65ce] = _0x4ec0e7);
    }), this;
}, Command[_0x314e4a(162)][_0x314e4a(189)] = function (_0x2871d1) {
    var _0x5f070b = _0x314e4a;
    return this['_allowUnknownOption'] = arguments[_0x5f070b(171)] === 0 || _0x2871d1, this;
}, Command[_0x314e4a(162)][_0x314e4a(190)] = function (_0x5287d0) {
    var _0x1bced6 = _0x314e4a;
    if (this[_0x1bced6(191)])
        this[_0x1bced6(192)]();
    this[_0x1bced6(193)] = _0x5287d0, this[_0x1bced6(161)] = this[_0x1bced6(161)] || basename(_0x5287d0[1], _0x1bced6(194));
    this['executables'] && _0x5287d0[_0x1bced6(171)] < 3 && !this['defaultExecutable'] && _0x5287d0[_0x1bced6(167)](_0x1bced6(195));
    var _0x1eae8c = this['parseOptions'](this[_0x1bced6(196)](_0x5287d0['slice'](2))), _0x32cdc8 = this[_0x1bced6(178)] = _0x1eae8c['args'], _0x5cbe11 = this[_0x1bced6(197)](this[_0x1bced6(178)], _0x1eae8c['unknown']), _0x3e172a = _0x5cbe11[_0x1bced6(178)][0];
    if (this['_execs'][_0x3e172a] && typeof this[_0x1bced6(158)][_0x3e172a] != _0x1bced6(185))
        return this[_0x1bced6(198)](_0x5287d0, _0x32cdc8, _0x1eae8c[_0x1bced6(176)]);
    else {
        if (this[_0x1bced6(199)])
            return _0x32cdc8[_0x1bced6(200)](_0x3e172a = this['defaultExecutable']), this[_0x1bced6(198)](_0x5287d0, _0x32cdc8, _0x1eae8c[_0x1bced6(176)]);
    }
    return _0x5cbe11;
}, Command[_0x314e4a(162)][_0x314e4a(198)] = function (_0xa888c, _0x5c4bf9, _0x4cf21c) {
    var _0x5ac64e = _0x314e4a;
    _0x5c4bf9 = _0x5c4bf9[_0x5ac64e(179)](_0x4cf21c);
    if (!_0x5c4bf9['length'])
        this[_0x5ac64e(201)]();
    if (_0x5ac64e(201) == _0x5c4bf9[0] && 1 == _0x5c4bf9[_0x5ac64e(171)])
        this[_0x5ac64e(201)]();
    _0x5ac64e(201) == _0x5c4bf9[0] && (_0x5c4bf9[0] = _0x5c4bf9[1], _0x5c4bf9[1] = _0x5ac64e(195));
    var _0x11442a = _0xa888c[1], _0x1ef736 = basename(_0x11442a, _0x5ac64e(194)) + '-' + _0x5c4bf9[0], _0x486825, _0x1bf412 = readlink(_0x11442a);
    _0x1bf412 !== _0x11442a && _0x1bf412[_0x5ac64e(202)](0) !== '/' && (_0x1bf412 = path[_0x5ac64e(203)](dirname(_0x11442a), _0x1bf412));
    _0x486825 = dirname(_0x1bf412);
    var _0x217911 = path[_0x5ac64e(203)](_0x486825, _0x1ef736), _0x27399c = ![];
    if (exists(_0x217911 + _0x5ac64e(194)))
        _0x1ef736 = _0x217911 + _0x5ac64e(194), _0x27399c = !![];
    else
        exists(_0x217911) && (_0x1ef736 = _0x217911);
    _0x5c4bf9 = _0x5c4bf9[_0x5ac64e(173)](1);
    var _0x13cc07;
    process[_0x5ac64e(204)] !== _0x5ac64e(205) ? _0x27399c ? (_0x5c4bf9['unshift'](_0x217911), _0x5c4bf9 = (process[_0x5ac64e(206)] || [])[_0x5ac64e(179)](_0x5c4bf9), _0x13cc07 = spawn(_0x5ac64e(207), _0x5c4bf9, {
        'stdio': _0x5ac64e(208),
        'customFds': [
            0,
            1,
            2
        ]
    })) : _0x13cc07 = spawn(_0x1ef736, _0x5c4bf9, {
        'stdio': _0x5ac64e(208),
        'customFds': [
            0,
            1,
            2
        ]
    }) : (_0x5c4bf9[_0x5ac64e(200)](_0x217911), _0x13cc07 = spawn(process['execPath'], _0x5c4bf9, { 'stdio': 'inherit' })), _0x13cc07['on'](_0x5ac64e(209), process[_0x5ac64e(210)]['bind'](process)), _0x13cc07['on'](_0x5ac64e(211), function (_0x1a3a6a) {
        var _0xc25908 = _0x5ac64e;
        if (_0x1a3a6a[_0xc25908(212)] == _0xc25908(213))
            console[_0xc25908(211)](_0xc25908(214), _0x1ef736);
        else
            _0x1a3a6a['code'] == _0xc25908(215) && console[_0xc25908(211)]('\n  %s(1) not executable. try chmod or run with root\n', _0x1ef736);
        process[_0xc25908(210)](1);
    }), this[_0x5ac64e(216)] = _0x13cc07;
}, Command['prototype'][_0x314e4a(196)] = function (_0x7ee335) {
    var _0x2d4b5e = _0x314e4a, _0x22be7a = [], _0x4f2904, _0x26e4cc, _0x99c5f6;
    for (var _0x3ab035 = 0, _0x4db803 = _0x7ee335['length']; _0x3ab035 < _0x4db803; ++_0x3ab035) {
        _0x4f2904 = _0x7ee335[_0x3ab035];
        _0x3ab035 > 0 && (_0x26e4cc = this[_0x2d4b5e(217)](_0x7ee335[_0x3ab035 - 1]));
        if (_0x4f2904 === '--') {
            _0x22be7a = _0x22be7a[_0x2d4b5e(179)](_0x7ee335[_0x2d4b5e(173)](_0x3ab035));
            break;
        } else {
            if (_0x26e4cc && _0x26e4cc['required'])
                _0x22be7a[_0x2d4b5e(167)](_0x4f2904);
            else {
                if (_0x4f2904['length'] > 1 && '-' == _0x4f2904[0] && '-' != _0x4f2904[1])
                    _0x4f2904['slice'](1)[_0x2d4b5e(165)]('')[_0x2d4b5e(172)](function (_0x3cc00f) {
                        var _0x4c7f13 = _0x2d4b5e;
                        _0x22be7a[_0x4c7f13(167)]('-' + _0x3cc00f);
                    });
                else
                    /^--/[_0x2d4b5e(148)](_0x4f2904) && ~(_0x99c5f6 = _0x4f2904[_0x2d4b5e(144)]('=')) ? _0x22be7a[_0x2d4b5e(167)](_0x4f2904[_0x2d4b5e(173)](0, _0x99c5f6), _0x4f2904[_0x2d4b5e(173)](_0x99c5f6 + 1)) : _0x22be7a[_0x2d4b5e(167)](_0x4f2904);
            }
        }
    }
    return _0x22be7a;
}, Command[_0x314e4a(162)][_0x314e4a(197)] = function (_0x2794c4, _0x406fe9) {
    var _0x3a13f8 = _0x314e4a, _0xef6486;
    return _0x2794c4['length'] ? (_0xef6486 = _0x2794c4[0], this[_0x3a13f8(218)](_0xef6486)['length'] ? this[_0x3a13f8(219)](_0x2794c4[_0x3a13f8(151)](), _0x2794c4, _0x406fe9) : this['emit']('*', _0x2794c4)) : (outputHelpIfNecessary(this, _0x406fe9), _0x406fe9['length'] > 0 && this['unknownOption'](_0x406fe9[0])), this;
}, Command[_0x314e4a(162)][_0x314e4a(217)] = function (_0x1688f9) {
    var _0x370e85 = _0x314e4a;
    for (var _0x41bf78 = 0, _0x5591e4 = this[_0x370e85(157)][_0x370e85(171)]; _0x41bf78 < _0x5591e4; ++_0x41bf78) {
        if (this[_0x370e85(157)][_0x41bf78]['is'](_0x1688f9))
            return this['options'][_0x41bf78];
    }
}, Command[_0x314e4a(162)]['parseOptions'] = function (_0x355d88) {
    var _0x367c34 = _0x314e4a, _0x35e146 = [], _0x3485f5 = _0x355d88[_0x367c34(171)], _0xc0a657, _0xd8cf8c, _0x7ae9eb, _0x2fec16 = [];
    for (var _0x168c8a = 0; _0x168c8a < _0x3485f5; ++_0x168c8a) {
        _0x7ae9eb = _0x355d88[_0x168c8a];
        if ('--' == _0x7ae9eb) {
            _0xc0a657 = !![];
            continue;
        }
        if (_0xc0a657) {
            _0x35e146['push'](_0x7ae9eb);
            continue;
        }
        _0xd8cf8c = this[_0x367c34(217)](_0x7ae9eb);
        if (_0xd8cf8c) {
            if (_0xd8cf8c['required']) {
                _0x7ae9eb = _0x355d88[++_0x168c8a];
                if (null == _0x7ae9eb)
                    return this[_0x367c34(220)](_0xd8cf8c);
                this['emit'](_0xd8cf8c[_0x367c34(153)](), _0x7ae9eb);
            } else
                _0xd8cf8c[_0x367c34(145)] ? (_0x7ae9eb = _0x355d88[_0x168c8a + 1], null == _0x7ae9eb || '-' == _0x7ae9eb[0] && '-' != _0x7ae9eb ? _0x7ae9eb = null : ++_0x168c8a, this[_0x367c34(219)](_0xd8cf8c[_0x367c34(153)](), _0x7ae9eb)) : this[_0x367c34(219)](_0xd8cf8c['name']());
            continue;
        }
        if (_0x7ae9eb[_0x367c34(171)] > 1 && '-' == _0x7ae9eb[0]) {
            _0x2fec16[_0x367c34(167)](_0x7ae9eb);
            _0x355d88[_0x168c8a + 1] && '-' != _0x355d88[_0x168c8a + 1][0] && _0x2fec16[_0x367c34(167)](_0x355d88[++_0x168c8a]);
            continue;
        }
        _0x35e146[_0x367c34(167)](_0x7ae9eb);
    }
    return {
        'args': _0x35e146,
        'unknown': _0x2fec16
    };
}, Command[_0x314e4a(162)][_0x314e4a(221)] = function () {
    var _0x2732e2 = _0x314e4a, _0x192410 = {}, _0xb03c27 = this[_0x2732e2(157)][_0x2732e2(171)];
    for (var _0x4cd49f = 0; _0x4cd49f < _0xb03c27; _0x4cd49f++) {
        var _0x16301b = camelcase(this['options'][_0x4cd49f][_0x2732e2(153)]());
        _0x192410[_0x16301b] = _0x16301b === 'version' ? this[_0x2732e2(222)] : this[_0x16301b];
    }
    return _0x192410;
}, Command[_0x314e4a(162)][_0x314e4a(180)] = function (_0x138b09) {
    var _0x5a8904 = _0x314e4a;
    console[_0x5a8904(211)](), console[_0x5a8904(211)]('  error: missing required argument `%s\'', _0x138b09), console[_0x5a8904(211)](), process['exit'](1);
}, Command['prototype'][_0x314e4a(220)] = function (_0x52719f, _0x5e4642) {
    var _0x4fd16d = _0x314e4a;
    console['error'](), _0x5e4642 ? console[_0x4fd16d(211)](_0x4fd16d(223), _0x52719f[_0x4fd16d(224)], _0x5e4642) : console[_0x4fd16d(211)]('  error: option `%s\' argument missing', _0x52719f[_0x4fd16d(224)]), console[_0x4fd16d(211)](), process[_0x4fd16d(210)](1);
}, Command['prototype'][_0x314e4a(177)] = function (_0x23afea) {
    var _0xaa6dbf = _0x314e4a;
    if (this[_0xaa6dbf(159)])
        return;
    console[_0xaa6dbf(211)](), console[_0xaa6dbf(211)](_0xaa6dbf(225), _0x23afea), console['error'](), process[_0xaa6dbf(210)](1);
}, Command[_0x314e4a(162)][_0x314e4a(226)] = function (_0xf00a09) {
    var _0x2bc35f = _0x314e4a;
    console[_0x2bc35f(211)](), console[_0x2bc35f(211)](_0x2bc35f(227), _0xf00a09), console['error'](), process[_0x2bc35f(210)](1);
}, Command[_0x314e4a(162)][_0x314e4a(228)] = function (_0x392c62, _0x1fca7f) {
    var _0x26a9ce = _0x314e4a;
    if (0 == arguments[_0x26a9ce(171)])
        return this[_0x26a9ce(222)];
    return this['_version'] = _0x392c62, _0x1fca7f = _0x1fca7f || '-V, --version', this[_0x26a9ce(184)](_0x1fca7f, _0x26a9ce(229)), this['on'](_0x26a9ce(228), function () {
        var _0x4a5e3e = _0x26a9ce;
        process[_0x4a5e3e(230)]['write'](_0x392c62 + '\n'), process[_0x4a5e3e(210)](0);
    }), this;
}, Command[_0x314e4a(162)][_0x314e4a(152)] = function (_0x50347f) {
    var _0x8c5e30 = _0x314e4a;
    if (0 === arguments[_0x8c5e30(171)])
        return this[_0x8c5e30(231)];
    return this['_description'] = _0x50347f, this;
}, Command[_0x314e4a(162)]['alias'] = function (_0x1923f1) {
    var _0x1d0d37 = _0x314e4a;
    if (0 == arguments[_0x1d0d37(171)])
        return this[_0x1d0d37(183)];
    return this['_alias'] = _0x1923f1, this;
}, Command['prototype']['usage'] = function (_0x987ab5) {
    var _0x15de03 = _0x314e4a, _0x2a42a6 = this['_args'][_0x15de03(232)](function (_0x51f5aa) {
            return humanReadableArgName(_0x51f5aa);
        }), _0x516a1c = _0x15de03(233) + (this[_0x15de03(156)][_0x15de03(171)] ? ' [command]' : '') + (this['_args']['length'] ? ' ' + _0x2a42a6[_0x15de03(203)](' ') : '');
    if (0 == arguments['length'])
        return this['_usage'] || _0x516a1c;
    return this[_0x15de03(234)] = _0x987ab5, this;
}, Command['prototype'][_0x314e4a(153)] = function () {
    var _0x8992f6 = _0x314e4a;
    return this[_0x8992f6(161)];
}, Command['prototype'][_0x314e4a(235)] = function () {
    var _0x1f7871 = _0x314e4a;
    return this[_0x1f7871(157)]['reduce'](function (_0x311bb5, _0x3ac139) {
        var _0x173e92 = _0x1f7871;
        return Math[_0x173e92(236)](_0x311bb5, _0x3ac139[_0x173e92(224)][_0x173e92(171)]);
    }, 0);
}, Command['prototype'][_0x314e4a(237)] = function () {
    var _0x1113fa = _0x314e4a, _0x244bcb = this[_0x1113fa(235)]();
    return [pad(_0x1113fa(238), _0x244bcb) + '  ' + _0x1113fa(239)]['concat'](this[_0x1113fa(157)][_0x1113fa(232)](function (_0x4e46b1) {
        var _0x405736 = _0x1113fa;
        return pad(_0x4e46b1[_0x405736(224)], _0x244bcb) + '  ' + _0x4e46b1[_0x405736(152)];
    }))['join']('\n');
}, Command['prototype'][_0x314e4a(240)] = function () {
    var _0x1a31c5 = _0x314e4a;
    if (!this['commands'][_0x1a31c5(171)])
        return '';
    var _0x59fca0 = this[_0x1a31c5(156)]['filter'](function (_0x47ce57) {
            var _0x2bff75 = _0x1a31c5;
            return !_0x47ce57[_0x2bff75(241)];
        })[_0x1a31c5(232)](function (_0x56fe77) {
            var _0xba7c9 = _0x1a31c5, _0x606321 = _0x56fe77[_0xba7c9(160)][_0xba7c9(232)](function (_0x20a966) {
                    return humanReadableArgName(_0x20a966);
                })[_0xba7c9(203)](' ');
            return [
                _0x56fe77[_0xba7c9(161)] + (_0x56fe77['_alias'] ? '|' + _0x56fe77[_0xba7c9(183)] : '') + (_0x56fe77['options'][_0xba7c9(171)] ? _0xba7c9(242) : '') + ' ' + _0x606321,
                _0x56fe77[_0xba7c9(152)]()
            ];
        }), _0xdb5b34 = _0x59fca0['reduce'](function (_0x4ea8b9, _0x1e73ac) {
            var _0x3c88c0 = _0x1a31c5;
            return Math[_0x3c88c0(236)](_0x4ea8b9, _0x1e73ac[0]['length']);
        }, 0);
    return [
        '',
        _0x1a31c5(243),
        '',
        _0x59fca0[_0x1a31c5(232)](function (_0x3c6c7d) {
            var _0x241a26 = _0x3c6c7d[1] ? '  ' + _0x3c6c7d[1] : '';
            return pad(_0x3c6c7d[0], _0xdb5b34) + _0x241a26;
        })[_0x1a31c5(203)]('\n')[_0x1a31c5(154)](/^/gm, _0x1a31c5(244)),
        ''
    ][_0x1a31c5(203)]('\n');
}, Command[_0x314e4a(162)][_0x314e4a(245)] = function () {
    var _0x5c754d = _0x314e4a, _0x49d3f3 = [];
    this['_description'] && (_0x49d3f3 = [
        '  ' + this[_0x5c754d(231)],
        ''
    ]);
    var _0xbbbb19 = this[_0x5c754d(161)];
    this[_0x5c754d(183)] && (_0xbbbb19 = _0xbbbb19 + '|' + this['_alias']);
    var _0x59d7fa = [
            '',
            _0x5c754d(246) + _0xbbbb19 + ' ' + this['usage'](),
            ''
        ], _0x2c8227 = [], _0x1a9fc7 = this[_0x5c754d(240)]();
    if (_0x1a9fc7)
        _0x2c8227 = [_0x1a9fc7];
    var _0x2cc093 = [
        _0x5c754d(247),
        '',
        '' + this[_0x5c754d(237)]()['replace'](/^/gm, _0x5c754d(244)),
        '',
        ''
    ];
    return _0x59d7fa[_0x5c754d(179)](_0x2c8227)['concat'](_0x49d3f3)[_0x5c754d(179)](_0x2cc093)[_0x5c754d(203)]('\n');
}, Command['prototype'][_0x314e4a(248)] = function (_0x21fe64) {
    var _0x112429 = _0x314e4a;
    !_0x21fe64 && (_0x21fe64 = function (_0x5ba354) {
        return _0x5ba354;
    }), process[_0x112429(230)][_0x112429(249)](_0x21fe64(this[_0x112429(245)]())), this['emit'](_0x112429(195));
}, Command[_0x314e4a(162)][_0x314e4a(201)] = function (_0x1f1d76) {
    var _0x361ce4 = _0x314e4a;
    this[_0x361ce4(248)](_0x1f1d76), process['exit']();
};
function camelcase(_0x552f77) {
    var _0x1945e7 = _0x314e4a;
    return _0x552f77[_0x1945e7(165)]('-')[_0x1945e7(250)](function (_0x311cbe, _0x3b09ed) {
        var _0x539190 = _0x1945e7;
        return _0x311cbe + _0x3b09ed[0][_0x539190(251)]() + _0x3b09ed[_0x539190(173)](1);
    });
}
function pad(_0x2bb38d, _0x5ac402) {
    var _0x49cfcb = _0x314e4a, _0x3897fa = Math[_0x49cfcb(236)](0, _0x5ac402 - _0x2bb38d['length']);
    return _0x2bb38d + Array(_0x3897fa + 1)[_0x49cfcb(203)](' ');
}
function outputHelpIfNecessary(_0x1d6ec9, _0x26d0ef) {
    var _0x110829 = _0x314e4a;
    _0x26d0ef = _0x26d0ef || [];
    for (var _0x1b53df = 0; _0x1b53df < _0x26d0ef[_0x110829(171)]; _0x1b53df++) {
        (_0x26d0ef[_0x1b53df] == _0x110829(195) || _0x26d0ef[_0x1b53df] == '-h') && (_0x1d6ec9[_0x110829(248)](), process[_0x110829(210)](0));
    }
}
function humanReadableArgName(_0xb2e3cc) {
    var _0x36f811 = _0x314e4a, _0x507c81 = _0xb2e3cc[_0x36f811(153)] + (_0xb2e3cc[_0x36f811(181)] === !![] ? _0x36f811(174) : '');
    return _0xb2e3cc['required'] ? '<' + _0x507c81 + '>' : '[' + _0x507c81 + ']';
}
function exists(_0x1c4d8d) {
    var _0x3ca440 = _0x314e4a;
    try {
        if (fs[_0x3ca440(252)](_0x1c4d8d)[_0x3ca440(253)]())
            return !![];
    } catch (_0x55d04d) {
        return ![];
    }
}