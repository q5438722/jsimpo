var EventEmitter = require('events')['EventEmitter'], spawn = require(_0x123acb(140))[_0x123acb(141)], readlink = require('graceful-readlink')[_0x123acb(142)], path = require(_0x123acb(143)), dirname = path[_0x123acb(144)], basename = path[_0x123acb(145)], fs = require('fs');
exports = module[_0x123acb(146)] = new Command(), exports[_0x123acb(147)] = Command, exports['Option'] = Option;
function Option(_0xe90095, _0x2f6343) {
    var _0x36f2e3 = _0x123acb;
    this['flags'] = _0xe90095, this[_0x36f2e3(148)] = ~_0xe90095['indexOf']('<'), this['optional'] = ~_0xe90095['indexOf']('['), this[_0x36f2e3(149)] = !~_0xe90095[_0x36f2e3(150)](_0x36f2e3(151)), _0xe90095 = _0xe90095['split'](/[ ,|]+/);
    if (_0xe90095[_0x36f2e3(152)] > 1 && !/^[[<]/[_0x36f2e3(153)](_0xe90095[1]))
        this[_0x36f2e3(154)] = _0xe90095[_0x36f2e3(155)]();
    this['long'] = _0xe90095[_0x36f2e3(155)](), this[_0x36f2e3(156)] = _0x2f6343 || '';
}
function _0xb694(_0x1769a0, _0x2a7575) {
    return _0xb694 = function (_0x18763e, _0xb694d0) {
        _0x18763e = _0x18763e - 130;
        var _0xe7872f = _0x1876[_0x18763e];
        return _0xe7872f;
    }, _0xb694(_0x1769a0, _0x2a7575);
}
Option[_0x123acb(157)][_0x123acb(158)] = function () {
    var _0x4ea9b6 = _0x123acb;
    return this[_0x4ea9b6(159)][_0x4ea9b6(160)]('--', '')[_0x4ea9b6(160)]('no-', '');
}, Option['prototype']['is'] = function (_0x5067e1) {
    return _0x5067e1 == this['short'] || _0x5067e1 == this['long'];
};
function Command(_0x4fb90e) {
    var _0x24ffac = _0x123acb;
    this[_0x24ffac(161)] = [], this[_0x24ffac(162)] = [], this[_0x24ffac(163)] = {}, this[_0x24ffac(164)] = ![], this[_0x24ffac(165)] = [], this[_0x24ffac(166)] = _0x4fb90e || '';
}
Command[_0x123acb(157)][_0x123acb(167)] = EventEmitter[_0x123acb(157)], Command['prototype']['command'] = function (_0x2d8907, _0x3654ad, _0x430b90) {
    var _0x40c44c = _0x123acb;
    _0x430b90 = _0x430b90 || {};
    var _0x4f078a = _0x2d8907[_0x40c44c(168)](/ +/), _0x43863c = new Command(_0x4f078a[_0x40c44c(155)]());
    if (_0x3654ad) {
        _0x43863c[_0x40c44c(156)](_0x3654ad), this[_0x40c44c(169)] = !![], this[_0x40c44c(163)][_0x43863c[_0x40c44c(166)]] = !![];
        if (_0x430b90[_0x40c44c(170)])
            this[_0x40c44c(171)] = _0x43863c[_0x40c44c(166)];
    }
    _0x43863c[_0x40c44c(172)] = !!_0x430b90[_0x40c44c(173)], this[_0x40c44c(161)][_0x40c44c(174)](_0x43863c), _0x43863c[_0x40c44c(175)](_0x4f078a), _0x43863c[_0x40c44c(176)] = this;
    if (_0x3654ad)
        return this;
    return _0x43863c;
}, Command[_0x123acb(157)][_0x123acb(177)] = function (_0x1756e5) {
    var _0x3b4329 = _0x123acb;
    return this[_0x3b4329(175)](_0x1756e5[_0x3b4329(168)](/ +/));
}, Command[_0x123acb(157)][_0x123acb(178)] = function () {
    var _0x1f0d3b = _0x123acb;
    this[_0x1f0d3b(179)]('help [cmd]', _0x1f0d3b(180));
}, Command['prototype'][_0x123acb(175)] = function (_0xf5dd43) {
    var _0x46f368 = _0x123acb;
    if (!_0xf5dd43[_0x46f368(152)])
        return;
    var _0x3cd0aa = this;
    return _0xf5dd43[_0x46f368(181)](function (_0x7cbce0) {
        var _0x3da36f = _0x46f368, _0x3b46ce = {
                'required': ![],
                'name': '',
                'variadic': ![]
            };
        switch (_0x7cbce0[0]) {
        case '<':
            _0x3b46ce['required'] = !![], _0x3b46ce[_0x3da36f(158)] = _0x7cbce0[_0x3da36f(182)](1, -1);
            break;
        case '[':
            _0x3b46ce[_0x3da36f(158)] = _0x7cbce0['slice'](1, -1);
            break;
        }
        _0x3b46ce[_0x3da36f(158)][_0x3da36f(152)] > 3 && _0x3b46ce[_0x3da36f(158)][_0x3da36f(182)](-3) === '...' && (_0x3b46ce[_0x3da36f(183)] = !![], _0x3b46ce[_0x3da36f(158)] = _0x3b46ce[_0x3da36f(158)][_0x3da36f(182)](0, -3)), _0x3b46ce[_0x3da36f(158)] && _0x3cd0aa[_0x3da36f(165)][_0x3da36f(174)](_0x3b46ce);
    }), this;
}, Command[_0x123acb(157)][_0x123acb(184)] = function (_0x321717) {
    var _0x148e19 = _0x123acb, _0x5b8cde = this, _0x5eb175 = function (_0x10170a, _0x3f038e) {
            var _0x138933 = _0xb694;
            _0x10170a = _0x10170a || [], _0x3f038e = _0x3f038e || [];
            var _0x29b7e8 = _0x5b8cde[_0x138933(185)](_0x3f038e);
            outputHelpIfNecessary(_0x5b8cde, _0x29b7e8[_0x138933(186)]);
            _0x29b7e8[_0x138933(186)][_0x138933(152)] > 0 && _0x5b8cde[_0x138933(187)](_0x29b7e8[_0x138933(186)][0]);
            if (_0x29b7e8[_0x138933(188)][_0x138933(152)])
                _0x10170a = _0x29b7e8[_0x138933(188)]['concat'](_0x10170a);
            _0x5b8cde[_0x138933(165)]['forEach'](function (_0xc1be69, _0xff573b) {
                var _0x2fb65f = _0x138933;
                if (_0xc1be69['required'] && null == _0x10170a[_0xff573b])
                    _0x5b8cde['missingArgument'](_0xc1be69['name']);
                else
                    _0xc1be69[_0x2fb65f(183)] && (_0xff573b !== _0x5b8cde[_0x2fb65f(165)][_0x2fb65f(152)] - 1 && _0x5b8cde['variadicArgNotLast'](_0xc1be69[_0x2fb65f(158)]), _0x10170a[_0xff573b] = _0x10170a['splice'](_0xff573b));
            }), _0x5b8cde['_args']['length'] ? _0x10170a[_0x5b8cde[_0x138933(165)][_0x138933(152)]] = _0x5b8cde : _0x10170a[_0x138933(174)](_0x5b8cde), _0x321717[_0x138933(189)](_0x5b8cde, _0x10170a);
        }, _0xa90980 = this[_0x148e19(176)] || this, _0x2238cb = _0xa90980 === this ? '*' : this[_0x148e19(166)];
    _0xa90980['on'](_0x2238cb, _0x5eb175);
    if (this[_0x148e19(190)])
        _0xa90980['on'](this[_0x148e19(190)], _0x5eb175);
    return this;
}, Command[_0x123acb(157)][_0x123acb(191)] = function (_0x137acd, _0xee554f, _0x8b59ae, _0x44f4c2) {
    var _0x2818d8 = _0x123acb, _0x46913d = this, _0x12335d = new Option(_0x137acd, _0xee554f), _0x2f76fd = _0x12335d[_0x2818d8(158)](), _0x32ae93 = camelcase(_0x2f76fd);
    if (typeof _0x8b59ae != 'function') {
        if (_0x8b59ae instanceof RegExp) {
            var _0x1b04a8 = _0x8b59ae;
            _0x8b59ae = function (_0x23b2dc, _0x13508a) {
                var _0x458214 = _0x1b04a8['exec'](_0x23b2dc);
                return _0x458214 ? _0x458214[0] : _0x13508a;
            };
        } else
            _0x44f4c2 = _0x8b59ae, _0x8b59ae = null;
    }
    if (![] == _0x12335d['bool'] || _0x12335d[_0x2818d8(192)] || _0x12335d[_0x2818d8(148)]) {
        if (![] == _0x12335d[_0x2818d8(149)])
            _0x44f4c2 = !![];
        if (undefined !== _0x44f4c2)
            _0x46913d[_0x32ae93] = _0x44f4c2;
    }
    return this[_0x2818d8(162)][_0x2818d8(174)](_0x12335d), this['on'](_0x2f76fd, function (_0xfe8e7c) {
        var _0x2d3bb6 = _0x2818d8;
        if (null !== _0xfe8e7c && _0x8b59ae)
            _0xfe8e7c = _0x8b59ae(_0xfe8e7c, undefined === _0x46913d[_0x32ae93] ? _0x44f4c2 : _0x46913d[_0x32ae93]);
        if (_0x2d3bb6(193) == typeof _0x46913d[_0x32ae93] || _0x2d3bb6(194) == typeof _0x46913d[_0x32ae93])
            null == _0xfe8e7c ? _0x46913d[_0x32ae93] = _0x12335d['bool'] ? _0x44f4c2 || !![] : ![] : _0x46913d[_0x32ae93] = _0xfe8e7c;
        else
            null !== _0xfe8e7c && (_0x46913d[_0x32ae93] = _0xfe8e7c);
    }), this;
}, Command[_0x123acb(157)]['allowUnknownOption'] = function (_0x1a636e) {
    return this['_allowUnknownOption'] = arguments['length'] === 0 || _0x1a636e, this;
}, Command[_0x123acb(157)]['parse'] = function (_0xde703c) {
    var _0x4428ae = _0x123acb;
    if (this[_0x4428ae(169)])
        this[_0x4428ae(178)]();
    this[_0x4428ae(195)] = _0xde703c, this[_0x4428ae(166)] = this[_0x4428ae(166)] || basename(_0xde703c[1], _0x4428ae(196));
    this[_0x4428ae(169)] && _0xde703c['length'] < 3 && !this[_0x4428ae(171)] && _0xde703c[_0x4428ae(174)]('--help');
    var _0x2b5bbf = this['parseOptions'](this['normalize'](_0xde703c[_0x4428ae(182)](2))), _0x4e4b04 = this[_0x4428ae(188)] = _0x2b5bbf[_0x4428ae(188)], _0x1df9f6 = this[_0x4428ae(197)](this['args'], _0x2b5bbf[_0x4428ae(186)]), _0x1b9d5d = _0x1df9f6[_0x4428ae(188)][0];
    if (this['_execs'][_0x1b9d5d] && typeof this['_execs'][_0x1b9d5d] != 'function')
        return this['executeSubCommand'](_0xde703c, _0x4e4b04, _0x2b5bbf[_0x4428ae(186)]);
    else {
        if (this[_0x4428ae(171)])
            return _0x4e4b04['unshift'](_0x1b9d5d = this[_0x4428ae(171)]), this[_0x4428ae(198)](_0xde703c, _0x4e4b04, _0x2b5bbf[_0x4428ae(186)]);
    }
    return _0x1df9f6;
}, Command['prototype'][_0x123acb(198)] = function (_0x1a3edd, _0x546f9a, _0x326643) {
    var _0x5ba4bb = _0x123acb;
    _0x546f9a = _0x546f9a[_0x5ba4bb(199)](_0x326643);
    if (!_0x546f9a[_0x5ba4bb(152)])
        this['help']();
    if (_0x5ba4bb(200) == _0x546f9a[0] && 1 == _0x546f9a[_0x5ba4bb(152)])
        this[_0x5ba4bb(200)]();
    'help' == _0x546f9a[0] && (_0x546f9a[0] = _0x546f9a[1], _0x546f9a[1] = _0x5ba4bb(201));
    var _0x543b9f = _0x1a3edd[1], _0x59b882 = basename(_0x543b9f, '.js') + '-' + _0x546f9a[0], _0x4be828, _0x220a82 = readlink(_0x543b9f);
    _0x220a82 !== _0x543b9f && _0x220a82[_0x5ba4bb(202)](0) !== '/' && (_0x220a82 = path[_0x5ba4bb(203)](dirname(_0x543b9f), _0x220a82));
    _0x4be828 = dirname(_0x220a82);
    var _0x246e5c = path[_0x5ba4bb(203)](_0x4be828, _0x59b882), _0x394c59 = ![];
    if (exists(_0x246e5c + '.js'))
        _0x59b882 = _0x246e5c + _0x5ba4bb(196), _0x394c59 = !![];
    else
        exists(_0x246e5c) && (_0x59b882 = _0x246e5c);
    _0x546f9a = _0x546f9a[_0x5ba4bb(182)](1);
    var _0x20bafb;
    process[_0x5ba4bb(204)] !== _0x5ba4bb(205) ? _0x394c59 ? (_0x546f9a['unshift'](_0x246e5c), _0x546f9a = (process[_0x5ba4bb(206)] || [])['concat'](_0x546f9a), _0x20bafb = spawn('node', _0x546f9a, {
        'stdio': 'inherit',
        'customFds': [
            0,
            1,
            2
        ]
    })) : _0x20bafb = spawn(_0x59b882, _0x546f9a, {
        'stdio': _0x5ba4bb(207),
        'customFds': [
            0,
            1,
            2
        ]
    }) : (_0x546f9a[_0x5ba4bb(208)](_0x246e5c), _0x20bafb = spawn(process[_0x5ba4bb(209)], _0x546f9a, { 'stdio': _0x5ba4bb(207) })), _0x20bafb['on'](_0x5ba4bb(210), process['exit'][_0x5ba4bb(211)](process)), _0x20bafb['on'](_0x5ba4bb(212), function (_0x1c10bc) {
        var _0x3cd89b = _0x5ba4bb;
        if (_0x1c10bc[_0x3cd89b(213)] == _0x3cd89b(214))
            console['error'](_0x3cd89b(215), _0x59b882);
        else
            _0x1c10bc[_0x3cd89b(213)] == 'EACCES' && console[_0x3cd89b(212)]('\n  %s(1) not executable. try chmod or run with root\n', _0x59b882);
        process[_0x3cd89b(216)](1);
    }), this['runningCommand'] = _0x20bafb;
}, Command[_0x123acb(157)][_0x123acb(217)] = function (_0x4a962d) {
    var _0x52015b = _0x123acb, _0x55718d = [], _0x1e7d3d, _0x2afd5b, _0x4c7116;
    for (var _0xe24874 = 0, _0x325915 = _0x4a962d['length']; _0xe24874 < _0x325915; ++_0xe24874) {
        _0x1e7d3d = _0x4a962d[_0xe24874];
        _0xe24874 > 0 && (_0x2afd5b = this[_0x52015b(218)](_0x4a962d[_0xe24874 - 1]));
        if (_0x1e7d3d === '--') {
            _0x55718d = _0x55718d['concat'](_0x4a962d[_0x52015b(182)](_0xe24874));
            break;
        } else {
            if (_0x2afd5b && _0x2afd5b[_0x52015b(148)])
                _0x55718d[_0x52015b(174)](_0x1e7d3d);
            else {
                if (_0x1e7d3d[_0x52015b(152)] > 1 && '-' == _0x1e7d3d[0] && '-' != _0x1e7d3d[1])
                    _0x1e7d3d['slice'](1)['split']('')[_0x52015b(181)](function (_0x385240) {
                        _0x55718d['push']('-' + _0x385240);
                    });
                else
                    /^--/[_0x52015b(153)](_0x1e7d3d) && ~(_0x4c7116 = _0x1e7d3d[_0x52015b(150)]('=')) ? _0x55718d[_0x52015b(174)](_0x1e7d3d[_0x52015b(182)](0, _0x4c7116), _0x1e7d3d[_0x52015b(182)](_0x4c7116 + 1)) : _0x55718d[_0x52015b(174)](_0x1e7d3d);
            }
        }
    }
    return _0x55718d;
}, Command[_0x123acb(157)][_0x123acb(197)] = function (_0x386cc9, _0x33fbce) {
    var _0x374f2d = _0x123acb, _0x1dc088;
    return _0x386cc9[_0x374f2d(152)] ? (_0x1dc088 = _0x386cc9[0], this[_0x374f2d(219)](_0x1dc088)['length'] ? this['emit'](_0x386cc9[_0x374f2d(155)](), _0x386cc9, _0x33fbce) : this[_0x374f2d(220)]('*', _0x386cc9)) : (outputHelpIfNecessary(this, _0x33fbce), _0x33fbce[_0x374f2d(152)] > 0 && this['unknownOption'](_0x33fbce[0])), this;
}, Command[_0x123acb(157)][_0x123acb(218)] = function (_0x42ff04) {
    var _0x59ca48 = _0x123acb;
    for (var _0x592ffd = 0, _0x3164cf = this[_0x59ca48(162)][_0x59ca48(152)]; _0x592ffd < _0x3164cf; ++_0x592ffd) {
        if (this[_0x59ca48(162)][_0x592ffd]['is'](_0x42ff04))
            return this[_0x59ca48(162)][_0x592ffd];
    }
}, Command[_0x123acb(157)][_0x123acb(185)] = function (_0x5c511e) {
    var _0x2da4a1 = _0x123acb, _0x54aa97 = [], _0x67c1c8 = _0x5c511e[_0x2da4a1(152)], _0x475d08, _0x362525, _0x19415c, _0x27b8d6 = [];
    for (var _0x1b1ab0 = 0; _0x1b1ab0 < _0x67c1c8; ++_0x1b1ab0) {
        _0x19415c = _0x5c511e[_0x1b1ab0];
        if ('--' == _0x19415c) {
            _0x475d08 = !![];
            continue;
        }
        if (_0x475d08) {
            _0x54aa97[_0x2da4a1(174)](_0x19415c);
            continue;
        }
        _0x362525 = this[_0x2da4a1(218)](_0x19415c);
        if (_0x362525) {
            if (_0x362525[_0x2da4a1(148)]) {
                _0x19415c = _0x5c511e[++_0x1b1ab0];
                if (null == _0x19415c)
                    return this[_0x2da4a1(221)](_0x362525);
                this[_0x2da4a1(220)](_0x362525['name'](), _0x19415c);
            } else
                _0x362525[_0x2da4a1(192)] ? (_0x19415c = _0x5c511e[_0x1b1ab0 + 1], null == _0x19415c || '-' == _0x19415c[0] && '-' != _0x19415c ? _0x19415c = null : ++_0x1b1ab0, this['emit'](_0x362525[_0x2da4a1(158)](), _0x19415c)) : this[_0x2da4a1(220)](_0x362525[_0x2da4a1(158)]());
            continue;
        }
        if (_0x19415c[_0x2da4a1(152)] > 1 && '-' == _0x19415c[0]) {
            _0x27b8d6[_0x2da4a1(174)](_0x19415c);
            _0x5c511e[_0x1b1ab0 + 1] && '-' != _0x5c511e[_0x1b1ab0 + 1][0] && _0x27b8d6[_0x2da4a1(174)](_0x5c511e[++_0x1b1ab0]);
            continue;
        }
        _0x54aa97[_0x2da4a1(174)](_0x19415c);
    }
    return {
        'args': _0x54aa97,
        'unknown': _0x27b8d6
    };
}, Command['prototype'][_0x123acb(222)] = function () {
    var _0x226c1a = _0x123acb, _0x2917c0 = {}, _0x285a8b = this['options'][_0x226c1a(152)];
    for (var _0x430d36 = 0; _0x430d36 < _0x285a8b; _0x430d36++) {
        var _0x55d8cc = camelcase(this[_0x226c1a(162)][_0x430d36][_0x226c1a(158)]());
        _0x2917c0[_0x55d8cc] = _0x55d8cc === _0x226c1a(223) ? this[_0x226c1a(224)] : this[_0x55d8cc];
    }
    return _0x2917c0;
}, Command['prototype'][_0x123acb(225)] = function (_0x260cb7) {
    var _0x4e5c5e = _0x123acb;
    console[_0x4e5c5e(212)](), console[_0x4e5c5e(212)](_0x4e5c5e(226), _0x260cb7), console[_0x4e5c5e(212)](), process[_0x4e5c5e(216)](1);
}, Command[_0x123acb(157)][_0x123acb(221)] = function (_0x29338a, _0x4f6bc5) {
    var _0x2b5d48 = _0x123acb;
    console['error'](), _0x4f6bc5 ? console[_0x2b5d48(212)](_0x2b5d48(227), _0x29338a[_0x2b5d48(228)], _0x4f6bc5) : console[_0x2b5d48(212)](_0x2b5d48(229), _0x29338a['flags']), console[_0x2b5d48(212)](), process['exit'](1);
}, Command[_0x123acb(157)][_0x123acb(187)] = function (_0x30390f) {
    var _0x5975de = _0x123acb;
    if (this[_0x5975de(164)])
        return;
    console[_0x5975de(212)](), console['error'](_0x5975de(230), _0x30390f), console[_0x5975de(212)](), process[_0x5975de(216)](1);
}, Command[_0x123acb(157)]['variadicArgNotLast'] = function (_0x1601d8) {
    var _0x284778 = _0x123acb;
    console[_0x284778(212)](), console[_0x284778(212)](_0x284778(231), _0x1601d8), console[_0x284778(212)](), process[_0x284778(216)](1);
}, Command[_0x123acb(157)][_0x123acb(223)] = function (_0x71dbc, _0x2b1f2a) {
    var _0x217429 = _0x123acb;
    if (0 == arguments[_0x217429(152)])
        return this[_0x217429(224)];
    return this[_0x217429(224)] = _0x71dbc, _0x2b1f2a = _0x2b1f2a || _0x217429(232), this[_0x217429(191)](_0x2b1f2a, _0x217429(233)), this['on'](_0x217429(223), function () {
        var _0x3d8b14 = _0x217429;
        process[_0x3d8b14(234)][_0x3d8b14(235)](_0x71dbc + '\n'), process['exit'](0);
    }), this;
}, Command[_0x123acb(157)]['description'] = function (_0x261432) {
    var _0x47e5f7 = _0x123acb;
    if (0 === arguments['length'])
        return this['_description'];
    return this[_0x47e5f7(236)] = _0x261432, this;
}, Command['prototype'][_0x123acb(237)] = function (_0x3cbff8) {
    var _0xff425b = _0x123acb;
    if (0 == arguments['length'])
        return this[_0xff425b(190)];
    return this['_alias'] = _0x3cbff8, this;
}, Command[_0x123acb(157)]['usage'] = function (_0x13cfd4) {
    var _0x17f049 = _0x123acb, _0xe88324 = this[_0x17f049(165)][_0x17f049(238)](function (_0x1b5bb9) {
            return humanReadableArgName(_0x1b5bb9);
        }), _0x410aa5 = _0x17f049(239) + (this[_0x17f049(161)][_0x17f049(152)] ? _0x17f049(240) : '') + (this[_0x17f049(165)][_0x17f049(152)] ? ' ' + _0xe88324['join'](' ') : '');
    if (0 == arguments[_0x17f049(152)])
        return this['_usage'] || _0x410aa5;
    return this[_0x17f049(241)] = _0x13cfd4, this;
}, Command[_0x123acb(157)][_0x123acb(158)] = function () {
    var _0x566052 = _0x123acb;
    return this[_0x566052(166)];
}, Command[_0x123acb(157)][_0x123acb(242)] = function () {
    var _0x4d5229 = _0x123acb;
    return this['options'][_0x4d5229(243)](function (_0x5cbf40, _0x596e2d) {
        var _0x8a8e2f = _0x4d5229;
        return Math[_0x8a8e2f(244)](_0x5cbf40, _0x596e2d[_0x8a8e2f(228)][_0x8a8e2f(152)]);
    }, 0);
}, Command[_0x123acb(157)][_0x123acb(245)] = function () {
    var _0x3afb0d = _0x123acb, _0x2c3030 = this[_0x3afb0d(242)]();
    return [pad('-h, --help', _0x2c3030) + '  ' + _0x3afb0d(246)][_0x3afb0d(199)](this[_0x3afb0d(162)]['map'](function (_0x37a1d3) {
        var _0x34ac63 = _0x3afb0d;
        return pad(_0x37a1d3[_0x34ac63(228)], _0x2c3030) + '  ' + _0x37a1d3[_0x34ac63(156)];
    }))[_0x3afb0d(203)]('\n');
}, Command[_0x123acb(157)][_0x123acb(247)] = function () {
    var _0x21cb24 = _0x123acb;
    if (!this[_0x21cb24(161)][_0x21cb24(152)])
        return '';
    var _0x7b7c79 = this[_0x21cb24(161)][_0x21cb24(248)](function (_0x4bc10f) {
            var _0x34baa4 = _0x21cb24;
            return !_0x4bc10f[_0x34baa4(172)];
        })[_0x21cb24(238)](function (_0x4165b7) {
            var _0x3ccc3f = _0x21cb24, _0x30476c = _0x4165b7[_0x3ccc3f(165)][_0x3ccc3f(238)](function (_0x3ece06) {
                    return humanReadableArgName(_0x3ece06);
                })[_0x3ccc3f(203)](' ');
            return [
                _0x4165b7['_name'] + (_0x4165b7[_0x3ccc3f(190)] ? '|' + _0x4165b7['_alias'] : '') + (_0x4165b7[_0x3ccc3f(162)][_0x3ccc3f(152)] ? ' [options]' : '') + ' ' + _0x30476c,
                _0x4165b7[_0x3ccc3f(156)]()
            ];
        }), _0x5062f5 = _0x7b7c79[_0x21cb24(243)](function (_0x2eb24a, _0x3733f2) {
            var _0xd9c4a0 = _0x21cb24;
            return Math[_0xd9c4a0(244)](_0x2eb24a, _0x3733f2[0]['length']);
        }, 0);
    return [
        '',
        '  Commands:',
        '',
        _0x7b7c79[_0x21cb24(238)](function (_0x3c6ab3) {
            var _0x947472 = _0x3c6ab3[1] ? '  ' + _0x3c6ab3[1] : '';
            return pad(_0x3c6ab3[0], _0x5062f5) + _0x947472;
        })['join']('\n')['replace'](/^/gm, _0x21cb24(249)),
        ''
    ][_0x21cb24(203)]('\n');
}, Command[_0x123acb(157)]['helpInformation'] = function () {
    var _0x754404 = _0x123acb, _0x5e8a38 = [];
    this[_0x754404(236)] && (_0x5e8a38 = [
        '  ' + this[_0x754404(236)],
        ''
    ]);
    var _0x301fff = this[_0x754404(166)];
    this[_0x754404(190)] && (_0x301fff = _0x301fff + '|' + this[_0x754404(190)]);
    var _0x2e21bb = [
            '',
            _0x754404(250) + _0x301fff + ' ' + this[_0x754404(251)](),
            ''
        ], _0x5772f2 = [], _0x3ea531 = this['commandHelp']();
    if (_0x3ea531)
        _0x5772f2 = [_0x3ea531];
    var _0x383f08 = [
        _0x754404(252),
        '',
        '' + this['optionHelp']()[_0x754404(160)](/^/gm, _0x754404(249)),
        '',
        ''
    ];
    return _0x2e21bb[_0x754404(199)](_0x5772f2)['concat'](_0x5e8a38)[_0x754404(199)](_0x383f08)[_0x754404(203)]('\n');
}, Command[_0x123acb(157)][_0x123acb(253)] = function (_0x368c3e) {
    var _0x4a44ef = _0x123acb;
    !_0x368c3e && (_0x368c3e = function (_0x3df133) {
        return _0x3df133;
    }), process[_0x4a44ef(234)][_0x4a44ef(235)](_0x368c3e(this['helpInformation']())), this[_0x4a44ef(220)](_0x4a44ef(201));
}, Command[_0x123acb(157)][_0x123acb(200)] = function (_0x2c51ab) {
    var _0x5c342e = _0x123acb;
    this['outputHelp'](_0x2c51ab), process[_0x5c342e(216)]();
};
function camelcase(_0x546794) {
    var _0xdb0b23 = _0x123acb;
    return _0x546794['split']('-')[_0xdb0b23(243)](function (_0x1fa907, _0x5e6183) {
        var _0x4f0192 = _0xdb0b23;
        return _0x1fa907 + _0x5e6183[0]['toUpperCase']() + _0x5e6183[_0x4f0192(182)](1);
    });
}
function pad(_0x21a2a3, _0x27f90c) {
    var _0x3d1c6b = _0x123acb, _0x20dc55 = Math[_0x3d1c6b(244)](0, _0x27f90c - _0x21a2a3[_0x3d1c6b(152)]);
    return _0x21a2a3 + Array(_0x20dc55 + 1)[_0x3d1c6b(203)](' ');
}
function outputHelpIfNecessary(_0x109631, _0x5f144e) {
    var _0x559ecb = _0x123acb;
    _0x5f144e = _0x5f144e || [];
    for (var _0x41602e = 0; _0x41602e < _0x5f144e[_0x559ecb(152)]; _0x41602e++) {
        (_0x5f144e[_0x41602e] == _0x559ecb(201) || _0x5f144e[_0x41602e] == '-h') && (_0x109631[_0x559ecb(253)](), process['exit'](0));
    }
}
function humanReadableArgName(_0x207e5f) {
    var _0x218db9 = _0x123acb, _0x3a0099 = _0x207e5f['name'] + (_0x207e5f[_0x218db9(183)] === !![] ? '...' : '');
    return _0x207e5f['required'] ? '<' + _0x3a0099 + '>' : '[' + _0x3a0099 + ']';
}
function exists(_0x54eb1b) {
    var _0x1c4ea3 = _0x123acb;
    try {
        if (fs[_0x1c4ea3(254)](_0x54eb1b)['isFile']())
            return !![];
    } catch (_0x22d302) {
        return ![];
    }
}