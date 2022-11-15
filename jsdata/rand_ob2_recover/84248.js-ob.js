function _0x2a40(_0x5551df, _0xe2c20d) {
    return _0x2a40 = function (_0x4036ce, _0x2a4096) {
        _0x4036ce = _0x4036ce - 457;
        var _0xc03af0 = _0x4036[_0x4036ce];
        return _0xc03af0;
    }, _0x2a40(_0x5551df, _0xe2c20d);
}
var EventEmitter = require(_0x48c3fe(468))[_0x48c3fe(469)], spawn = require('child_process')[_0x48c3fe(470)], readlink = require('graceful-readlink')[_0x48c3fe(471)], path = require('path'), dirname = path['dirname'], basename = path[_0x48c3fe(472)], fs = require('fs');
exports = module[_0x48c3fe(473)] = new Command(), exports[_0x48c3fe(474)] = Command, exports[_0x48c3fe(475)] = Option;
function Option(_0x4f86be, _0x14696b) {
    var _0x2ee4a4 = _0x48c3fe;
    this[_0x2ee4a4(476)] = _0x4f86be, this['required'] = ~_0x4f86be['indexOf']('<'), this[_0x2ee4a4(477)] = ~_0x4f86be[_0x2ee4a4(478)]('['), this[_0x2ee4a4(479)] = !~_0x4f86be[_0x2ee4a4(478)](_0x2ee4a4(480)), _0x4f86be = _0x4f86be['split'](/[ ,|]+/);
    if (_0x4f86be[_0x2ee4a4(481)] > 1 && !/^[[<]/[_0x2ee4a4(482)](_0x4f86be[1]))
        this['short'] = _0x4f86be[_0x2ee4a4(483)]();
    this[_0x2ee4a4(484)] = _0x4f86be[_0x2ee4a4(483)](), this[_0x2ee4a4(485)] = _0x14696b || '';
}
Option[_0x48c3fe(486)][_0x48c3fe(487)] = function () {
    var _0x1e0afb = _0x48c3fe;
    return this[_0x1e0afb(484)][_0x1e0afb(488)]('--', '')[_0x1e0afb(488)](_0x1e0afb(489), '');
}, Option[_0x48c3fe(486)]['is'] = function (_0x869cc) {
    var _0x55f71d = _0x48c3fe;
    return _0x869cc == this[_0x55f71d(490)] || _0x869cc == this[_0x55f71d(484)];
};
function Command(_0x1b44af) {
    var _0x2d6241 = _0x48c3fe;
    this[_0x2d6241(491)] = [], this[_0x2d6241(492)] = [], this[_0x2d6241(493)] = {}, this[_0x2d6241(494)] = ![], this[_0x2d6241(495)] = [], this[_0x2d6241(496)] = _0x1b44af || '';
}
Command[_0x48c3fe(486)][_0x48c3fe(497)] = EventEmitter[_0x48c3fe(486)], Command[_0x48c3fe(486)][_0x48c3fe(498)] = function (_0x374701, _0x4b3c01, _0x4d4c72) {
    var _0x2b093f = _0x48c3fe;
    _0x4d4c72 = _0x4d4c72 || {};
    var _0x5488a9 = _0x374701[_0x2b093f(499)](/ +/), _0x1bdcc3 = new Command(_0x5488a9[_0x2b093f(483)]());
    if (_0x4b3c01) {
        _0x1bdcc3[_0x2b093f(485)](_0x4b3c01), this[_0x2b093f(500)] = !![], this[_0x2b093f(493)][_0x1bdcc3['_name']] = !![];
        if (_0x4d4c72[_0x2b093f(501)])
            this[_0x2b093f(502)] = _0x1bdcc3[_0x2b093f(496)];
    }
    _0x1bdcc3[_0x2b093f(503)] = !!_0x4d4c72[_0x2b093f(504)], this[_0x2b093f(491)][_0x2b093f(505)](_0x1bdcc3), _0x1bdcc3[_0x2b093f(506)](_0x5488a9), _0x1bdcc3[_0x2b093f(507)] = this;
    if (_0x4b3c01)
        return this;
    return _0x1bdcc3;
}, Command[_0x48c3fe(486)]['arguments'] = function (_0x234911) {
    var _0x532cab = _0x48c3fe;
    return this[_0x532cab(506)](_0x234911[_0x532cab(499)](/ +/));
}, Command[_0x48c3fe(486)][_0x48c3fe(508)] = function () {
    var _0x4663c4 = _0x48c3fe;
    this['command'](_0x4663c4(509), _0x4663c4(510));
}, Command[_0x48c3fe(486)][_0x48c3fe(506)] = function (_0x371c0b) {
    var _0x438b36 = _0x48c3fe;
    if (!_0x371c0b[_0x438b36(481)])
        return;
    var _0x25f0f4 = this;
    return _0x371c0b[_0x438b36(511)](function (_0x2af074) {
        var _0x44b9fe = _0x438b36, _0x53d581 = {
                'required': ![],
                'name': '',
                'variadic': ![]
            };
        switch (_0x2af074[0]) {
        case '<':
            _0x53d581[_0x44b9fe(512)] = !![], _0x53d581[_0x44b9fe(487)] = _0x2af074[_0x44b9fe(513)](1, -1);
            break;
        case '[':
            _0x53d581['name'] = _0x2af074[_0x44b9fe(513)](1, -1);
            break;
        }
        _0x53d581['name'][_0x44b9fe(481)] > 3 && _0x53d581[_0x44b9fe(487)]['slice'](-3) === '...' && (_0x53d581[_0x44b9fe(514)] = !![], _0x53d581['name'] = _0x53d581['name'][_0x44b9fe(513)](0, -3)), _0x53d581[_0x44b9fe(487)] && _0x25f0f4['_args'][_0x44b9fe(505)](_0x53d581);
    }), this;
}, Command[_0x48c3fe(486)][_0x48c3fe(515)] = function (_0xb50bfd) {
    var _0x4a1689 = _0x48c3fe, _0xbeebf5 = this, _0x29e95d = function (_0x1d56d5, _0x594ac1) {
            var _0x1d462f = _0x2a40;
            _0x1d56d5 = _0x1d56d5 || [], _0x594ac1 = _0x594ac1 || [];
            var _0x28bb49 = _0xbeebf5[_0x1d462f(516)](_0x594ac1);
            outputHelpIfNecessary(_0xbeebf5, _0x28bb49[_0x1d462f(517)]);
            _0x28bb49['unknown'][_0x1d462f(481)] > 0 && _0xbeebf5['unknownOption'](_0x28bb49[_0x1d462f(517)][0]);
            if (_0x28bb49['args'][_0x1d462f(481)])
                _0x1d56d5 = _0x28bb49[_0x1d462f(518)][_0x1d462f(519)](_0x1d56d5);
            _0xbeebf5['_args'][_0x1d462f(511)](function (_0x1f9015, _0x35c783) {
                var _0x102c37 = _0x1d462f;
                if (_0x1f9015['required'] && null == _0x1d56d5[_0x35c783])
                    _0xbeebf5[_0x102c37(520)](_0x1f9015['name']);
                else
                    _0x1f9015[_0x102c37(514)] && (_0x35c783 !== _0xbeebf5[_0x102c37(495)][_0x102c37(481)] - 1 && _0xbeebf5[_0x102c37(521)](_0x1f9015['name']), _0x1d56d5[_0x35c783] = _0x1d56d5[_0x102c37(522)](_0x35c783));
            }), _0xbeebf5['_args'][_0x1d462f(481)] ? _0x1d56d5[_0xbeebf5[_0x1d462f(495)][_0x1d462f(481)]] = _0xbeebf5 : _0x1d56d5[_0x1d462f(505)](_0xbeebf5), _0xb50bfd['apply'](_0xbeebf5, _0x1d56d5);
        }, _0x4c2149 = this[_0x4a1689(507)] || this, _0x19e85d = _0x4c2149 === this ? '*' : this[_0x4a1689(496)];
    _0x4c2149['on'](_0x19e85d, _0x29e95d);
    if (this['_alias'])
        _0x4c2149['on'](this[_0x4a1689(523)], _0x29e95d);
    return this;
}, Command[_0x48c3fe(486)]['option'] = function (_0x35ddf8, _0x22b061, _0x58d34b, _0x258a23) {
    var _0x7ecd3a = _0x48c3fe, _0x3310e5 = this, _0x75726 = new Option(_0x35ddf8, _0x22b061), _0x3bc276 = _0x75726[_0x7ecd3a(487)](), _0x27541c = camelcase(_0x3bc276);
    if (typeof _0x58d34b != 'function') {
        if (_0x58d34b instanceof RegExp) {
            var _0x2fdeba = _0x58d34b;
            _0x58d34b = function (_0x5c549d, _0x47cb37) {
                var _0x3d08ff = _0x7ecd3a, _0x325ad7 = _0x2fdeba[_0x3d08ff(524)](_0x5c549d);
                return _0x325ad7 ? _0x325ad7[0] : _0x47cb37;
            };
        } else
            _0x258a23 = _0x58d34b, _0x58d34b = null;
    }
    if (![] == _0x75726[_0x7ecd3a(479)] || _0x75726[_0x7ecd3a(477)] || _0x75726['required']) {
        if (![] == _0x75726[_0x7ecd3a(479)])
            _0x258a23 = !![];
        if (undefined !== _0x258a23)
            _0x3310e5[_0x27541c] = _0x258a23;
    }
    return this[_0x7ecd3a(492)][_0x7ecd3a(505)](_0x75726), this['on'](_0x3bc276, function (_0x17b145) {
        var _0x495067 = _0x7ecd3a;
        if (null !== _0x17b145 && _0x58d34b)
            _0x17b145 = _0x58d34b(_0x17b145, undefined === _0x3310e5[_0x27541c] ? _0x258a23 : _0x3310e5[_0x27541c]);
        if ('boolean' == typeof _0x3310e5[_0x27541c] || _0x495067(525) == typeof _0x3310e5[_0x27541c])
            null == _0x17b145 ? _0x3310e5[_0x27541c] = _0x75726[_0x495067(479)] ? _0x258a23 || !![] : ![] : _0x3310e5[_0x27541c] = _0x17b145;
        else
            null !== _0x17b145 && (_0x3310e5[_0x27541c] = _0x17b145);
    }), this;
}, Command['prototype'][_0x48c3fe(526)] = function (_0x50c289) {
    var _0x144868 = _0x48c3fe;
    return this[_0x144868(494)] = arguments[_0x144868(481)] === 0 || _0x50c289, this;
}, Command[_0x48c3fe(486)][_0x48c3fe(527)] = function (_0x254c68) {
    var _0x4395ed = _0x48c3fe;
    if (this[_0x4395ed(500)])
        this[_0x4395ed(508)]();
    this[_0x4395ed(528)] = _0x254c68, this[_0x4395ed(496)] = this[_0x4395ed(496)] || basename(_0x254c68[1], _0x4395ed(529));
    this[_0x4395ed(500)] && _0x254c68[_0x4395ed(481)] < 3 && !this[_0x4395ed(502)] && _0x254c68[_0x4395ed(505)](_0x4395ed(530));
    var _0x7d204 = this[_0x4395ed(516)](this['normalize'](_0x254c68['slice'](2))), _0xac020 = this[_0x4395ed(518)] = _0x7d204[_0x4395ed(518)], _0xc7ff7 = this[_0x4395ed(531)](this['args'], _0x7d204[_0x4395ed(517)]), _0x20a364 = _0xc7ff7[_0x4395ed(518)][0];
    if (this[_0x4395ed(493)][_0x20a364] && typeof this['_execs'][_0x20a364] != _0x4395ed(532))
        return this[_0x4395ed(533)](_0x254c68, _0xac020, _0x7d204['unknown']);
    else {
        if (this[_0x4395ed(502)])
            return _0xac020[_0x4395ed(534)](_0x20a364 = this['defaultExecutable']), this['executeSubCommand'](_0x254c68, _0xac020, _0x7d204[_0x4395ed(517)]);
    }
    return _0xc7ff7;
}, Command[_0x48c3fe(486)]['executeSubCommand'] = function (_0xffe961, _0x299eba, _0x343ad5) {
    var _0x421db3 = _0x48c3fe;
    _0x299eba = _0x299eba[_0x421db3(519)](_0x343ad5);
    if (!_0x299eba[_0x421db3(481)])
        this[_0x421db3(535)]();
    if (_0x421db3(535) == _0x299eba[0] && 1 == _0x299eba[_0x421db3(481)])
        this['help']();
    _0x421db3(535) == _0x299eba[0] && (_0x299eba[0] = _0x299eba[1], _0x299eba[1] = _0x421db3(530));
    var _0x2241cb = _0xffe961[1], _0x3379a7 = basename(_0x2241cb, '.js') + '-' + _0x299eba[0], _0x4f29e0, _0x6289a6 = readlink(_0x2241cb);
    _0x6289a6 !== _0x2241cb && _0x6289a6[_0x421db3(536)](0) !== '/' && (_0x6289a6 = path[_0x421db3(537)](dirname(_0x2241cb), _0x6289a6));
    _0x4f29e0 = dirname(_0x6289a6);
    var _0x3e079d = path[_0x421db3(537)](_0x4f29e0, _0x3379a7), _0x3fa8f7 = ![];
    if (exists(_0x3e079d + _0x421db3(529)))
        _0x3379a7 = _0x3e079d + _0x421db3(529), _0x3fa8f7 = !![];
    else
        exists(_0x3e079d) && (_0x3379a7 = _0x3e079d);
    _0x299eba = _0x299eba['slice'](1);
    var _0x335755;
    process[_0x421db3(538)] !== _0x421db3(539) ? _0x3fa8f7 ? (_0x299eba['unshift'](_0x3e079d), _0x299eba = (process[_0x421db3(540)] || [])[_0x421db3(519)](_0x299eba), _0x335755 = spawn('node', _0x299eba, {
        'stdio': _0x421db3(541),
        'customFds': [
            0,
            1,
            2
        ]
    })) : _0x335755 = spawn(_0x3379a7, _0x299eba, {
        'stdio': 'inherit',
        'customFds': [
            0,
            1,
            2
        ]
    }) : (_0x299eba['unshift'](_0x3e079d), _0x335755 = spawn(process['execPath'], _0x299eba, { 'stdio': _0x421db3(541) })), _0x335755['on'](_0x421db3(542), process[_0x421db3(543)][_0x421db3(544)](process)), _0x335755['on'](_0x421db3(545), function (_0x273d5e) {
        var _0x345030 = _0x421db3;
        if (_0x273d5e[_0x345030(546)] == 'ENOENT')
            console[_0x345030(545)](_0x345030(547), _0x3379a7);
        else
            _0x273d5e[_0x345030(546)] == 'EACCES' && console['error'](_0x345030(548), _0x3379a7);
        process[_0x345030(543)](1);
    }), this['runningCommand'] = _0x335755;
}, Command[_0x48c3fe(486)][_0x48c3fe(549)] = function (_0x46e890) {
    var _0x3ea708 = _0x48c3fe, _0x60602b = [], _0x5cc15b, _0x3049b0, _0x2aa17d;
    for (var _0x54877a = 0, _0x3f1188 = _0x46e890[_0x3ea708(481)]; _0x54877a < _0x3f1188; ++_0x54877a) {
        _0x5cc15b = _0x46e890[_0x54877a];
        _0x54877a > 0 && (_0x3049b0 = this[_0x3ea708(550)](_0x46e890[_0x54877a - 1]));
        if (_0x5cc15b === '--') {
            _0x60602b = _0x60602b[_0x3ea708(519)](_0x46e890[_0x3ea708(513)](_0x54877a));
            break;
        } else {
            if (_0x3049b0 && _0x3049b0[_0x3ea708(512)])
                _0x60602b['push'](_0x5cc15b);
            else {
                if (_0x5cc15b[_0x3ea708(481)] > 1 && '-' == _0x5cc15b[0] && '-' != _0x5cc15b[1])
                    _0x5cc15b[_0x3ea708(513)](1)['split']('')[_0x3ea708(511)](function (_0x475da3) {
                        var _0x4bcdab = _0x3ea708;
                        _0x60602b[_0x4bcdab(505)]('-' + _0x475da3);
                    });
                else
                    /^--/[_0x3ea708(482)](_0x5cc15b) && ~(_0x2aa17d = _0x5cc15b[_0x3ea708(478)]('=')) ? _0x60602b[_0x3ea708(505)](_0x5cc15b[_0x3ea708(513)](0, _0x2aa17d), _0x5cc15b[_0x3ea708(513)](_0x2aa17d + 1)) : _0x60602b[_0x3ea708(505)](_0x5cc15b);
            }
        }
    }
    return _0x60602b;
}, Command[_0x48c3fe(486)][_0x48c3fe(531)] = function (_0x2ff1d2, _0x3fe82c) {
    var _0x2a87bd = _0x48c3fe, _0x48ce00;
    return _0x2ff1d2[_0x2a87bd(481)] ? (_0x48ce00 = _0x2ff1d2[0], this['listeners'](_0x48ce00)[_0x2a87bd(481)] ? this[_0x2a87bd(551)](_0x2ff1d2[_0x2a87bd(483)](), _0x2ff1d2, _0x3fe82c) : this[_0x2a87bd(551)]('*', _0x2ff1d2)) : (outputHelpIfNecessary(this, _0x3fe82c), _0x3fe82c['length'] > 0 && this[_0x2a87bd(552)](_0x3fe82c[0])), this;
}, Command[_0x48c3fe(486)][_0x48c3fe(550)] = function (_0x392b9f) {
    var _0x328780 = _0x48c3fe;
    for (var _0x27e782 = 0, _0x41f6c5 = this['options'][_0x328780(481)]; _0x27e782 < _0x41f6c5; ++_0x27e782) {
        if (this[_0x328780(492)][_0x27e782]['is'](_0x392b9f))
            return this['options'][_0x27e782];
    }
}, Command[_0x48c3fe(486)][_0x48c3fe(516)] = function (_0x11d718) {
    var _0x1a9da3 = _0x48c3fe, _0x58d91c = [], _0x1baadb = _0x11d718[_0x1a9da3(481)], _0x3cb97f, _0x50da67, _0x4c4059, _0x5d69b8 = [];
    for (var _0x1302dc = 0; _0x1302dc < _0x1baadb; ++_0x1302dc) {
        _0x4c4059 = _0x11d718[_0x1302dc];
        if ('--' == _0x4c4059) {
            _0x3cb97f = !![];
            continue;
        }
        if (_0x3cb97f) {
            _0x58d91c[_0x1a9da3(505)](_0x4c4059);
            continue;
        }
        _0x50da67 = this['optionFor'](_0x4c4059);
        if (_0x50da67) {
            if (_0x50da67[_0x1a9da3(512)]) {
                _0x4c4059 = _0x11d718[++_0x1302dc];
                if (null == _0x4c4059)
                    return this[_0x1a9da3(553)](_0x50da67);
                this[_0x1a9da3(551)](_0x50da67['name'](), _0x4c4059);
            } else
                _0x50da67['optional'] ? (_0x4c4059 = _0x11d718[_0x1302dc + 1], null == _0x4c4059 || '-' == _0x4c4059[0] && '-' != _0x4c4059 ? _0x4c4059 = null : ++_0x1302dc, this[_0x1a9da3(551)](_0x50da67[_0x1a9da3(487)](), _0x4c4059)) : this[_0x1a9da3(551)](_0x50da67[_0x1a9da3(487)]());
            continue;
        }
        if (_0x4c4059[_0x1a9da3(481)] > 1 && '-' == _0x4c4059[0]) {
            _0x5d69b8[_0x1a9da3(505)](_0x4c4059);
            _0x11d718[_0x1302dc + 1] && '-' != _0x11d718[_0x1302dc + 1][0] && _0x5d69b8[_0x1a9da3(505)](_0x11d718[++_0x1302dc]);
            continue;
        }
        _0x58d91c[_0x1a9da3(505)](_0x4c4059);
    }
    return {
        'args': _0x58d91c,
        'unknown': _0x5d69b8
    };
}, Command[_0x48c3fe(486)]['opts'] = function () {
    var _0x153f85 = _0x48c3fe, _0x5d0c6e = {}, _0x21b770 = this[_0x153f85(492)][_0x153f85(481)];
    for (var _0x463db2 = 0; _0x463db2 < _0x21b770; _0x463db2++) {
        var _0xb8a72c = camelcase(this['options'][_0x463db2][_0x153f85(487)]());
        _0x5d0c6e[_0xb8a72c] = _0xb8a72c === 'version' ? this[_0x153f85(554)] : this[_0xb8a72c];
    }
    return _0x5d0c6e;
}, Command[_0x48c3fe(486)][_0x48c3fe(520)] = function (_0x373837) {
    var _0x505e6a = _0x48c3fe;
    console[_0x505e6a(545)](), console[_0x505e6a(545)](_0x505e6a(555), _0x373837), console[_0x505e6a(545)](), process[_0x505e6a(543)](1);
}, Command[_0x48c3fe(486)][_0x48c3fe(553)] = function (_0x2aebd0, _0x2bfb58) {
    var _0x4458c9 = _0x48c3fe;
    console[_0x4458c9(545)](), _0x2bfb58 ? console[_0x4458c9(545)](_0x4458c9(556), _0x2aebd0['flags'], _0x2bfb58) : console['error'](_0x4458c9(557), _0x2aebd0['flags']), console[_0x4458c9(545)](), process[_0x4458c9(543)](1);
}, Command[_0x48c3fe(486)]['unknownOption'] = function (_0x594abf) {
    var _0x1bdb9d = _0x48c3fe;
    if (this[_0x1bdb9d(494)])
        return;
    console[_0x1bdb9d(545)](), console[_0x1bdb9d(545)](_0x1bdb9d(558), _0x594abf), console['error'](), process[_0x1bdb9d(543)](1);
}, Command[_0x48c3fe(486)]['variadicArgNotLast'] = function (_0x4cd181) {
    var _0x1919ca = _0x48c3fe;
    console['error'](), console[_0x1919ca(545)](_0x1919ca(559), _0x4cd181), console[_0x1919ca(545)](), process['exit'](1);
}, Command[_0x48c3fe(486)][_0x48c3fe(560)] = function (_0x221aab, _0x2905e4) {
    var _0x1106e0 = _0x48c3fe;
    if (0 == arguments[_0x1106e0(481)])
        return this[_0x1106e0(554)];
    return this['_version'] = _0x221aab, _0x2905e4 = _0x2905e4 || _0x1106e0(561), this[_0x1106e0(562)](_0x2905e4, _0x1106e0(563)), this['on'](_0x1106e0(560), function () {
        var _0x2df25d = _0x1106e0;
        process[_0x2df25d(564)][_0x2df25d(565)](_0x221aab + '\n'), process[_0x2df25d(543)](0);
    }), this;
}, Command[_0x48c3fe(486)][_0x48c3fe(485)] = function (_0x2fd014) {
    var _0x3ba227 = _0x48c3fe;
    if (0 === arguments[_0x3ba227(481)])
        return this[_0x3ba227(566)];
    return this[_0x3ba227(566)] = _0x2fd014, this;
}, Command[_0x48c3fe(486)][_0x48c3fe(567)] = function (_0x435145) {
    var _0x41b7da = _0x48c3fe;
    if (0 == arguments['length'])
        return this[_0x41b7da(523)];
    return this[_0x41b7da(523)] = _0x435145, this;
}, Command[_0x48c3fe(486)][_0x48c3fe(568)] = function (_0x5d9dc9) {
    var _0x3c3be3 = _0x48c3fe, _0x514e52 = this['_args'][_0x3c3be3(569)](function (_0x100cce) {
            return humanReadableArgName(_0x100cce);
        }), _0x1089df = _0x3c3be3(570) + (this['commands'][_0x3c3be3(481)] ? _0x3c3be3(571) : '') + (this['_args'][_0x3c3be3(481)] ? ' ' + _0x514e52[_0x3c3be3(537)](' ') : '');
    if (0 == arguments[_0x3c3be3(481)])
        return this['_usage'] || _0x1089df;
    return this['_usage'] = _0x5d9dc9, this;
}, Command[_0x48c3fe(486)][_0x48c3fe(487)] = function () {
    var _0x43b67a = _0x48c3fe;
    return this[_0x43b67a(496)];
}, Command['prototype'][_0x48c3fe(572)] = function () {
    var _0x13f2a8 = _0x48c3fe;
    return this[_0x13f2a8(492)][_0x13f2a8(573)](function (_0x5b4872, _0x19b4a3) {
        var _0x1c1299 = _0x13f2a8;
        return Math[_0x1c1299(574)](_0x5b4872, _0x19b4a3[_0x1c1299(476)]['length']);
    }, 0);
}, Command[_0x48c3fe(486)][_0x48c3fe(575)] = function () {
    var _0x3139f5 = _0x48c3fe, _0x2e2e51 = this[_0x3139f5(572)]();
    return [pad('-h, --help', _0x2e2e51) + '  ' + _0x3139f5(576)][_0x3139f5(519)](this['options']['map'](function (_0x35289a) {
        var _0x381212 = _0x3139f5;
        return pad(_0x35289a[_0x381212(476)], _0x2e2e51) + '  ' + _0x35289a[_0x381212(485)];
    }))['join']('\n');
}, Command[_0x48c3fe(486)][_0x48c3fe(577)] = function () {
    var _0x16ec06 = _0x48c3fe;
    if (!this[_0x16ec06(491)][_0x16ec06(481)])
        return '';
    var _0x271e73 = this['commands'][_0x16ec06(578)](function (_0x1a316f) {
            var _0x5b969f = _0x16ec06;
            return !_0x1a316f[_0x5b969f(503)];
        })['map'](function (_0x511498) {
            var _0x29452b = _0x16ec06, _0x2b896c = _0x511498[_0x29452b(495)][_0x29452b(569)](function (_0xccb66b) {
                    return humanReadableArgName(_0xccb66b);
                })[_0x29452b(537)](' ');
            return [
                _0x511498[_0x29452b(496)] + (_0x511498[_0x29452b(523)] ? '|' + _0x511498[_0x29452b(523)] : '') + (_0x511498['options'][_0x29452b(481)] ? ' [options]' : '') + ' ' + _0x2b896c,
                _0x511498[_0x29452b(485)]()
            ];
        }), _0x44e9f4 = _0x271e73['reduce'](function (_0x2556fe, _0xf2ea84) {
            var _0x5190fd = _0x16ec06;
            return Math[_0x5190fd(574)](_0x2556fe, _0xf2ea84[0][_0x5190fd(481)]);
        }, 0);
    return [
        '',
        _0x16ec06(579),
        '',
        _0x271e73[_0x16ec06(569)](function (_0x2f29cf) {
            var _0x57bb27 = _0x2f29cf[1] ? '  ' + _0x2f29cf[1] : '';
            return pad(_0x2f29cf[0], _0x44e9f4) + _0x57bb27;
        })[_0x16ec06(537)]('\n')[_0x16ec06(488)](/^/gm, _0x16ec06(580)),
        ''
    ][_0x16ec06(537)]('\n');
}, Command[_0x48c3fe(486)]['helpInformation'] = function () {
    var _0x3ba511 = _0x48c3fe, _0x403648 = [];
    this[_0x3ba511(566)] && (_0x403648 = [
        '  ' + this[_0x3ba511(566)],
        ''
    ]);
    var _0x2d62ce = this['_name'];
    this[_0x3ba511(523)] && (_0x2d62ce = _0x2d62ce + '|' + this[_0x3ba511(523)]);
    var _0x335534 = [
            '',
            _0x3ba511(581) + _0x2d62ce + ' ' + this[_0x3ba511(568)](),
            ''
        ], _0x269dc5 = [], _0x19b579 = this[_0x3ba511(577)]();
    if (_0x19b579)
        _0x269dc5 = [_0x19b579];
    var _0x31c446 = [
        _0x3ba511(582),
        '',
        '' + this['optionHelp']()[_0x3ba511(488)](/^/gm, _0x3ba511(580)),
        '',
        ''
    ];
    return _0x335534[_0x3ba511(519)](_0x269dc5)[_0x3ba511(519)](_0x403648)['concat'](_0x31c446)[_0x3ba511(537)]('\n');
}, Command[_0x48c3fe(486)][_0x48c3fe(583)] = function (_0x1b3f9c) {
    var _0x1871e2 = _0x48c3fe;
    !_0x1b3f9c && (_0x1b3f9c = function (_0x43b276) {
        return _0x43b276;
    }), process[_0x1871e2(564)][_0x1871e2(565)](_0x1b3f9c(this[_0x1871e2(584)]())), this[_0x1871e2(551)](_0x1871e2(530));
}, Command[_0x48c3fe(486)][_0x48c3fe(535)] = function (_0x3e19c8) {
    var _0x187bcd = _0x48c3fe;
    this[_0x187bcd(583)](_0x3e19c8), process[_0x187bcd(543)]();
};
function camelcase(_0x5c1d86) {
    var _0x39ba5f = _0x48c3fe;
    return _0x5c1d86[_0x39ba5f(499)]('-')[_0x39ba5f(573)](function (_0x3b1d08, _0x2cc224) {
        var _0x278dc8 = _0x39ba5f;
        return _0x3b1d08 + _0x2cc224[0]['toUpperCase']() + _0x2cc224[_0x278dc8(513)](1);
    });
}
function pad(_0x25638c, _0x458ccb) {
    var _0x2860f8 = _0x48c3fe, _0x344c15 = Math[_0x2860f8(574)](0, _0x458ccb - _0x25638c[_0x2860f8(481)]);
    return _0x25638c + Array(_0x344c15 + 1)[_0x2860f8(537)](' ');
}
function outputHelpIfNecessary(_0x27bed0, _0x25414e) {
    var _0x8454d = _0x48c3fe;
    _0x25414e = _0x25414e || [];
    for (var _0x27e235 = 0; _0x27e235 < _0x25414e[_0x8454d(481)]; _0x27e235++) {
        (_0x25414e[_0x27e235] == _0x8454d(530) || _0x25414e[_0x27e235] == '-h') && (_0x27bed0['outputHelp'](), process[_0x8454d(543)](0));
    }
}
function humanReadableArgName(_0x212e6a) {
    var _0x1fe4fb = _0x48c3fe, _0x28d334 = _0x212e6a[_0x1fe4fb(487)] + (_0x212e6a[_0x1fe4fb(514)] === !![] ? _0x1fe4fb(585) : '');
    return _0x212e6a['required'] ? '<' + _0x28d334 + '>' : '[' + _0x28d334 + ']';
}
function exists(_0x16404b) {
    var _0x73207c = _0x48c3fe;
    try {
        if (fs['statSync'](_0x16404b)[_0x73207c(586)]())
            return !![];
    } catch (_0x239983) {
        return ![];
    }
}