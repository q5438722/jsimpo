var BN = require('bn.js'), elliptic = require(_0x11b58b(274)), utils = elliptic[_0x11b58b(275)], getNAF = utils[_0x11b58b(276)], getJSF = utils['getJSF'], assert = utils[_0x11b58b(277)];
function _0x2db7(_0x4def3e, _0x1b7049) {
    return _0x2db7 = function (_0x1369ee, _0x2db7de) {
        _0x1369ee = _0x1369ee - 263;
        var _0x574dba = _0x1369[_0x1369ee];
        return _0x574dba;
    }, _0x2db7(_0x4def3e, _0x1b7049);
}
function BaseCurve(_0x3a723e, _0xbe56fd) {
    var _0x1265cd = _0x11b58b;
    this[_0x1265cd(278)] = _0x3a723e, this['p'] = new BN(_0xbe56fd['p'], 16), this['red'] = _0xbe56fd[_0x1265cd(279)] ? BN[_0x1265cd(280)](_0xbe56fd['prime']) : BN[_0x1265cd(281)](this['p']), this[_0x1265cd(282)] = new BN(0)[_0x1265cd(283)](this['red']), this[_0x1265cd(284)] = new BN(1)[_0x1265cd(283)](this[_0x1265cd(280)]), this[_0x1265cd(285)] = new BN(2)[_0x1265cd(283)](this[_0x1265cd(280)]), this['n'] = _0xbe56fd['n'] && new BN(_0xbe56fd['n'], 16), this['g'] = _0xbe56fd['g'] && this[_0x1265cd(286)](_0xbe56fd['g'], _0xbe56fd[_0x1265cd(287)]), this[_0x1265cd(288)] = new Array(4), this[_0x1265cd(289)] = new Array(4), this[_0x1265cd(290)] = new Array(4), this['_wnafT4'] = new Array(4);
    var _0x45bb6d = this['n'] && this['p'][_0x1265cd(291)](this['n']);
    !_0x45bb6d || _0x45bb6d[_0x1265cd(292)](100) > 0 ? this[_0x1265cd(293)] = null : (this[_0x1265cd(294)] = !![], this[_0x1265cd(293)] = this['n'][_0x1265cd(283)](this['red']));
}
module[_0x11b58b(295)] = BaseCurve, BaseCurve['prototype'][_0x11b58b(296)] = function point() {
    var _0x8a257d = _0x11b58b;
    throw new Error(_0x8a257d(297));
}, BaseCurve[_0x11b58b(298)][_0x11b58b(299)] = function validate() {
    var _0x154e7f = _0x11b58b;
    throw new Error(_0x154e7f(297));
}, BaseCurve[_0x11b58b(298)][_0x11b58b(300)] = function _fixedNafMul(_0x49cd42, _0x1cd4dd) {
    var _0x465556 = _0x11b58b;
    assert(_0x49cd42[_0x465556(301)]);
    var _0x53d879 = _0x49cd42[_0x465556(302)](), _0x5055db = getNAF(_0x1cd4dd, 1), _0x302c23 = (1 << _0x53d879['step'] + 1) - (_0x53d879['step'] % 2 === 0 ? 2 : 1);
    _0x302c23 /= 3;
    var _0x33be7a = [];
    for (var _0x2314a6 = 0; _0x2314a6 < _0x5055db[_0x465556(303)]; _0x2314a6 += _0x53d879[_0x465556(304)]) {
        var _0x199773 = 0;
        for (var _0x1cd4dd = _0x2314a6 + _0x53d879['step'] - 1; _0x1cd4dd >= _0x2314a6; _0x1cd4dd--)
            _0x199773 = (_0x199773 << 1) + _0x5055db[_0x1cd4dd];
        _0x33be7a['push'](_0x199773);
    }
    var _0x2fc865 = this['jpoint'](null, null, null), _0x5f29e9 = this[_0x465556(305)](null, null, null);
    for (var _0x2490e8 = _0x302c23; _0x2490e8 > 0; _0x2490e8--) {
        for (var _0x2314a6 = 0; _0x2314a6 < _0x33be7a[_0x465556(303)]; _0x2314a6++) {
            var _0x199773 = _0x33be7a[_0x2314a6];
            if (_0x199773 === _0x2490e8)
                _0x5f29e9 = _0x5f29e9['mixedAdd'](_0x53d879[_0x465556(306)][_0x2314a6]);
            else {
                if (_0x199773 === -_0x2490e8)
                    _0x5f29e9 = _0x5f29e9['mixedAdd'](_0x53d879['points'][_0x2314a6][_0x465556(307)]());
            }
        }
        _0x2fc865 = _0x2fc865[_0x465556(308)](_0x5f29e9);
    }
    return _0x2fc865[_0x465556(309)]();
}, BaseCurve[_0x11b58b(298)][_0x11b58b(310)] = function _wnafMul(_0xc56f23, _0x3cf776) {
    var _0x40c40d = _0x11b58b, _0x1124fb = 4, _0x187446 = _0xc56f23['_getNAFPoints'](_0x1124fb);
    _0x1124fb = _0x187446['wnd'];
    var _0x15906c = _0x187446[_0x40c40d(306)], _0x2bba19 = getNAF(_0x3cf776, _0x1124fb), _0x26e1e5 = this[_0x40c40d(305)](null, null, null);
    for (var _0x2fff83 = _0x2bba19['length'] - 1; _0x2fff83 >= 0; _0x2fff83--) {
        for (var _0x3cf776 = 0; _0x2fff83 >= 0 && _0x2bba19[_0x2fff83] === 0; _0x2fff83--)
            _0x3cf776++;
        if (_0x2fff83 >= 0)
            _0x3cf776++;
        _0x26e1e5 = _0x26e1e5[_0x40c40d(311)](_0x3cf776);
        if (_0x2fff83 < 0)
            break;
        var _0xc980ee = _0x2bba19[_0x2fff83];
        assert(_0xc980ee !== 0);
        if (_0xc56f23[_0x40c40d(278)] === 'affine') {
            if (_0xc980ee > 0)
                _0x26e1e5 = _0x26e1e5[_0x40c40d(312)](_0x15906c[_0xc980ee - 1 >> 1]);
            else
                _0x26e1e5 = _0x26e1e5[_0x40c40d(312)](_0x15906c[-_0xc980ee - 1 >> 1][_0x40c40d(307)]());
        } else {
            if (_0xc980ee > 0)
                _0x26e1e5 = _0x26e1e5[_0x40c40d(308)](_0x15906c[_0xc980ee - 1 >> 1]);
            else
                _0x26e1e5 = _0x26e1e5['add'](_0x15906c[-_0xc980ee - 1 >> 1][_0x40c40d(307)]());
        }
    }
    return _0xc56f23[_0x40c40d(278)] === _0x40c40d(313) ? _0x26e1e5[_0x40c40d(309)]() : _0x26e1e5;
}, BaseCurve[_0x11b58b(298)][_0x11b58b(314)] = function _wnafMulAdd(_0x73a036, _0x24a820, _0x20bb63, _0x25d3f1, _0x50cab2) {
    var _0x16b41a = _0x11b58b, _0x977866 = this[_0x16b41a(288)], _0xc4c14b = this[_0x16b41a(289)], _0x5f1a55 = this[_0x16b41a(290)], _0x9108c3 = 0;
    for (var _0x523040 = 0; _0x523040 < _0x25d3f1; _0x523040++) {
        var _0x371221 = _0x24a820[_0x523040], _0x103474 = _0x371221['_getNAFPoints'](_0x73a036);
        _0x977866[_0x523040] = _0x103474[_0x16b41a(315)], _0xc4c14b[_0x523040] = _0x103474['points'];
    }
    for (var _0x523040 = _0x25d3f1 - 1; _0x523040 >= 1; _0x523040 -= 2) {
        var _0x21d2de = _0x523040 - 1, _0x271d85 = _0x523040;
        if (_0x977866[_0x21d2de] !== 1 || _0x977866[_0x271d85] !== 1) {
            _0x5f1a55[_0x21d2de] = getNAF(_0x20bb63[_0x21d2de], _0x977866[_0x21d2de]), _0x5f1a55[_0x271d85] = getNAF(_0x20bb63[_0x271d85], _0x977866[_0x271d85]), _0x9108c3 = Math[_0x16b41a(316)](_0x5f1a55[_0x21d2de]['length'], _0x9108c3), _0x9108c3 = Math[_0x16b41a(316)](_0x5f1a55[_0x271d85]['length'], _0x9108c3);
            continue;
        }
        var _0x5f3500 = [
            _0x24a820[_0x21d2de],
            null,
            null,
            _0x24a820[_0x271d85]
        ];
        if (_0x24a820[_0x21d2de]['y'][_0x16b41a(317)](_0x24a820[_0x271d85]['y']) === 0)
            _0x5f3500[1] = _0x24a820[_0x21d2de]['add'](_0x24a820[_0x271d85]), _0x5f3500[2] = _0x24a820[_0x21d2de][_0x16b41a(318)]()[_0x16b41a(312)](_0x24a820[_0x271d85]['neg']());
        else
            _0x24a820[_0x21d2de]['y']['cmp'](_0x24a820[_0x271d85]['y'][_0x16b41a(319)]()) === 0 ? (_0x5f3500[1] = _0x24a820[_0x21d2de][_0x16b41a(318)]()[_0x16b41a(312)](_0x24a820[_0x271d85]), _0x5f3500[2] = _0x24a820[_0x21d2de]['add'](_0x24a820[_0x271d85]['neg']())) : (_0x5f3500[1] = _0x24a820[_0x21d2de][_0x16b41a(318)]()['mixedAdd'](_0x24a820[_0x271d85]), _0x5f3500[2] = _0x24a820[_0x21d2de][_0x16b41a(318)]()['mixedAdd'](_0x24a820[_0x271d85][_0x16b41a(307)]()));
        var _0x723c34 = [
                -3,
                -1,
                -5,
                -7,
                0,
                7,
                5,
                1,
                3
            ], _0x30c829 = getJSF(_0x20bb63[_0x21d2de], _0x20bb63[_0x271d85]);
        _0x9108c3 = Math[_0x16b41a(316)](_0x30c829[0][_0x16b41a(303)], _0x9108c3), _0x5f1a55[_0x21d2de] = new Array(_0x9108c3), _0x5f1a55[_0x271d85] = new Array(_0x9108c3);
        for (var _0x1c4b8a = 0; _0x1c4b8a < _0x9108c3; _0x1c4b8a++) {
            var _0x3c032b = _0x30c829[0][_0x1c4b8a] | 0, _0x22d5e3 = _0x30c829[1][_0x1c4b8a] | 0;
            _0x5f1a55[_0x21d2de][_0x1c4b8a] = _0x723c34[(_0x3c032b + 1) * 3 + (_0x22d5e3 + 1)], _0x5f1a55[_0x271d85][_0x1c4b8a] = 0, _0xc4c14b[_0x21d2de] = _0x5f3500;
        }
    }
    var _0x5a6a2b = this['jpoint'](null, null, null), _0x3c3e3b = this['_wnafT4'];
    for (var _0x523040 = _0x9108c3; _0x523040 >= 0; _0x523040--) {
        var _0x3fb013 = 0;
        while (_0x523040 >= 0) {
            var _0x571421 = !![];
            for (var _0x1c4b8a = 0; _0x1c4b8a < _0x25d3f1; _0x1c4b8a++) {
                _0x3c3e3b[_0x1c4b8a] = _0x5f1a55[_0x1c4b8a][_0x523040] | 0;
                if (_0x3c3e3b[_0x1c4b8a] !== 0)
                    _0x571421 = ![];
            }
            if (!_0x571421)
                break;
            _0x3fb013++, _0x523040--;
        }
        if (_0x523040 >= 0)
            _0x3fb013++;
        _0x5a6a2b = _0x5a6a2b[_0x16b41a(311)](_0x3fb013);
        if (_0x523040 < 0)
            break;
        for (var _0x1c4b8a = 0; _0x1c4b8a < _0x25d3f1; _0x1c4b8a++) {
            var _0x3864d2 = _0x3c3e3b[_0x1c4b8a], _0x371221;
            if (_0x3864d2 === 0)
                continue;
            else {
                if (_0x3864d2 > 0)
                    _0x371221 = _0xc4c14b[_0x1c4b8a][_0x3864d2 - 1 >> 1];
                else {
                    if (_0x3864d2 < 0)
                        _0x371221 = _0xc4c14b[_0x1c4b8a][-_0x3864d2 - 1 >> 1]['neg']();
                }
            }
            if (_0x371221[_0x16b41a(278)] === _0x16b41a(313))
                _0x5a6a2b = _0x5a6a2b['mixedAdd'](_0x371221);
            else
                _0x5a6a2b = _0x5a6a2b[_0x16b41a(308)](_0x371221);
        }
    }
    for (var _0x523040 = 0; _0x523040 < _0x25d3f1; _0x523040++)
        _0xc4c14b[_0x523040] = null;
    if (_0x50cab2)
        return _0x5a6a2b;
    else
        return _0x5a6a2b[_0x16b41a(309)]();
};
function BasePoint(_0x5c69e, _0x37a19e) {
    var _0x5cc322 = _0x11b58b;
    this[_0x5cc322(320)] = _0x5c69e, this[_0x5cc322(278)] = _0x37a19e, this[_0x5cc322(301)] = null;
}
BaseCurve[_0x11b58b(321)] = BasePoint, BasePoint[_0x11b58b(298)]['eq'] = function eq() {
    var _0x398f3b = _0x11b58b;
    throw new Error(_0x398f3b(297));
}, BasePoint[_0x11b58b(298)]['validate'] = function validate() {
    var _0x85e5bd = _0x11b58b;
    return this[_0x85e5bd(320)][_0x85e5bd(299)](this);
}, BaseCurve[_0x11b58b(298)]['decodePoint'] = function decodePoint(_0x1723c7, _0x26005e) {
    var _0x4f760d = _0x11b58b;
    _0x1723c7 = utils[_0x4f760d(322)](_0x1723c7, _0x26005e);
    var _0x4c599e = this['p']['byteLength']();
    if ((_0x1723c7[0] === 4 || _0x1723c7[0] === 6 || _0x1723c7[0] === 7) && _0x1723c7[_0x4f760d(303)] - 1 === 2 * _0x4c599e) {
        if (_0x1723c7[0] === 6)
            assert(_0x1723c7[_0x1723c7['length'] - 1] % 2 === 0);
        else {
            if (_0x1723c7[0] === 7)
                assert(_0x1723c7[_0x1723c7[_0x4f760d(303)] - 1] % 2 === 1);
        }
        var _0x3eb12e = this[_0x4f760d(296)](_0x1723c7[_0x4f760d(323)](1, 1 + _0x4c599e), _0x1723c7[_0x4f760d(323)](1 + _0x4c599e, 1 + 2 * _0x4c599e));
        return _0x3eb12e;
    } else {
        if ((_0x1723c7[0] === 2 || _0x1723c7[0] === 3) && _0x1723c7['length'] - 1 === _0x4c599e)
            return this[_0x4f760d(324)](_0x1723c7[_0x4f760d(323)](1, 1 + _0x4c599e), _0x1723c7[0] === 3);
    }
    throw new Error(_0x4f760d(325));
}, BasePoint[_0x11b58b(298)][_0x11b58b(326)] = function encodeCompressed(_0x2a4651) {
    var _0x39a901 = _0x11b58b;
    return this[_0x39a901(327)](_0x2a4651, !![]);
}, BasePoint[_0x11b58b(298)][_0x11b58b(328)] = function _encode(_0x22418b) {
    var _0x30f73c = _0x11b58b, _0x137423 = this[_0x30f73c(320)]['p'][_0x30f73c(329)](), _0x3bba3c = this['getX']()[_0x30f73c(322)]('be', _0x137423);
    if (_0x22418b)
        return [this[_0x30f73c(330)]()[_0x30f73c(331)]() ? 2 : 3]['concat'](_0x3bba3c);
    return [4]['concat'](_0x3bba3c, this[_0x30f73c(330)]()[_0x30f73c(322)]('be', _0x137423));
}, BasePoint[_0x11b58b(298)][_0x11b58b(327)] = function encode(_0x54695d, _0x2c3aac) {
    var _0x13ba1d = _0x11b58b;
    return utils[_0x13ba1d(327)](this[_0x13ba1d(328)](_0x2c3aac), _0x54695d);
}, BasePoint[_0x11b58b(298)][_0x11b58b(332)] = function precompute(_0x8eec0b) {
    var _0x2458a0 = _0x11b58b;
    if (this[_0x2458a0(301)])
        return this;
    var _0x125e40 = {
        'doubles': null,
        'naf': null,
        'beta': null
    };
    return _0x125e40['naf'] = this[_0x2458a0(333)](8), _0x125e40[_0x2458a0(334)] = this[_0x2458a0(302)](4, _0x8eec0b), _0x125e40[_0x2458a0(335)] = this['_getBeta'](), this['precomputed'] = _0x125e40, this;
}, BasePoint[_0x11b58b(298)][_0x11b58b(336)] = function _hasDoubles(_0x53a020) {
    var _0x3ebcd4 = _0x11b58b;
    if (!this[_0x3ebcd4(301)])
        return ![];
    var _0xd4b34 = this[_0x3ebcd4(301)]['doubles'];
    if (!_0xd4b34)
        return ![];
    return _0xd4b34[_0x3ebcd4(306)][_0x3ebcd4(303)] >= Math[_0x3ebcd4(337)]((_0x53a020[_0x3ebcd4(338)]() + 1) / _0xd4b34[_0x3ebcd4(304)]);
}, BasePoint[_0x11b58b(298)][_0x11b58b(302)] = function _getDoubles(_0x2e2f93, _0x639a4b) {
    var _0x154191 = _0x11b58b;
    if (this[_0x154191(301)] && this[_0x154191(301)]['doubles'])
        return this[_0x154191(301)][_0x154191(334)];
    var _0x2580ea = [this], _0x1c71d8 = this;
    for (var _0x3c7b05 = 0; _0x3c7b05 < _0x639a4b; _0x3c7b05 += _0x2e2f93) {
        for (var _0x9aa60c = 0; _0x9aa60c < _0x2e2f93; _0x9aa60c++)
            _0x1c71d8 = _0x1c71d8[_0x154191(339)]();
        _0x2580ea[_0x154191(340)](_0x1c71d8);
    }
    return {
        'step': _0x2e2f93,
        'points': _0x2580ea
    };
}, BasePoint[_0x11b58b(298)][_0x11b58b(333)] = function _getNAFPoints(_0x38342f) {
    var _0x3583f0 = _0x11b58b;
    if (this[_0x3583f0(301)] && this['precomputed'][_0x3583f0(341)])
        return this[_0x3583f0(301)][_0x3583f0(341)];
    var _0x194e37 = [this], _0x40ca57 = (1 << _0x38342f) - 1, _0x9c14c8 = _0x40ca57 === 1 ? null : this[_0x3583f0(339)]();
    for (var _0x50e006 = 1; _0x50e006 < _0x40ca57; _0x50e006++)
        _0x194e37[_0x50e006] = _0x194e37[_0x50e006 - 1]['add'](_0x9c14c8);
    return {
        'wnd': _0x38342f,
        'points': _0x194e37
    };
}, BasePoint[_0x11b58b(298)][_0x11b58b(342)] = function _getBeta() {
    return null;
}, BasePoint['prototype']['dblp'] = function dblp(_0x5108e2) {
    var _0xc67b13 = this;
    for (var _0x2db53c = 0; _0x2db53c < _0x5108e2; _0x2db53c++)
        _0xc67b13 = _0xc67b13['dbl']();
    return _0xc67b13;
};