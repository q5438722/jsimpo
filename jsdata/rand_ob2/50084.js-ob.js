var _0x2a2a = [
    '1556GqGSRw',
    'object',
    '../../lib/codemirror',
    '../yaml/yaml',
    'amd',
    'yaml-frontmatter',
    'getMode',
    'base',
    'gfm',
    'state',
    'startState',
    'inner',
    'match',
    '---',
    'token',
    'blankLine',
    '101968ulmQsc',
    '3604BuxWRg',
    '62JjTVYy',
    '189194VZDtme',
    '14741SBylYM',
    '36914Xlfgzt',
    '11UJIrPK',
    '94159vVIqlJ',
    '1QTiriF',
    '111vdwMqJ'
];
function _0xab5c(_0x367474, _0x211998) {
    return _0xab5c = function (_0x2a2acc, _0xab5ca0) {
        _0x2a2acc = _0x2a2acc - 0xf9;
        var _0x3de007 = _0x2a2a[_0x2a2acc];
        return _0x3de007;
    }, _0xab5c(_0x367474, _0x211998);
}
(function (_0x8fcd07, _0x58a278) {
    var _0x299240 = _0xab5c;
    while (!![]) {
        try {
            var _0x40818b = -parseInt(_0x299240(0xf9)) + -parseInt(_0x299240(0xfa)) * parseInt(_0x299240(0xfb)) + parseInt(_0x299240(0xfc)) + parseInt(_0x299240(0xfd)) + -parseInt(_0x299240(0xfe)) * -parseInt(_0x299240(0xff)) + parseInt(_0x299240(0x100)) * parseInt(_0x299240(0x101)) + -parseInt(_0x299240(0x102)) * parseInt(_0x299240(0x103));
            if (_0x40818b === _0x58a278)
                break;
            else
                _0x8fcd07['push'](_0x8fcd07['shift']());
        } catch (_0x5c51c1) {
            _0x8fcd07['push'](_0x8fcd07['shift']());
        }
    }
}(_0x2a2a, 0x324c0), function (_0x223c6d) {
    var _0x43fc52 = _0xab5c;
    if (typeof exports == _0x43fc52(0x104) && typeof module == _0x43fc52(0x104))
        _0x223c6d(require(_0x43fc52(0x105)), require(_0x43fc52(0x106)));
    else {
        if (typeof define == 'function' && define[_0x43fc52(0x107)])
            define([
                _0x43fc52(0x105),
                _0x43fc52(0x106)
            ], _0x223c6d);
        else
            _0x223c6d(CodeMirror);
    }
}(function (_0x5450bc) {
    var _0x251a6d = _0xab5c, _0x282101 = 0x0, _0x2cc016 = 0x1, _0x126198 = 0x2;
    _0x5450bc['defineMode'](_0x251a6d(0x108), function (_0xb00351, _0x2de887) {
        var _0x59471 = _0x251a6d, _0x4d1edd = _0x5450bc[_0x59471(0x109)](_0xb00351, 'yaml'), _0x2c52a3 = _0x5450bc['getMode'](_0xb00351, _0x2de887 && _0x2de887[_0x59471(0x10a)] || _0x59471(0x10b));
        function _0x415bf2(_0x426694) {
            var _0x5c2127 = _0x59471;
            return _0x426694[_0x5c2127(0x10c)] == _0x126198 ? _0x2c52a3 : _0x4d1edd;
        }
        return {
            'startState': function () {
                var _0x7f3e88 = _0x59471;
                return {
                    'state': _0x282101,
                    'inner': _0x5450bc[_0x7f3e88(0x10d)](_0x4d1edd)
                };
            },
            'copyState': function (_0x508f84) {
                var _0xfbda7b = _0x59471;
                return {
                    'state': _0x508f84[_0xfbda7b(0x10c)],
                    'inner': _0x5450bc['copyState'](_0x415bf2(_0x508f84), _0x508f84[_0xfbda7b(0x10e)])
                };
            },
            'token': function (_0x27e918, _0xe4a953) {
                var _0x117c2d = _0x59471;
                if (_0xe4a953[_0x117c2d(0x10c)] == _0x282101)
                    return _0x27e918[_0x117c2d(0x10f)](_0x117c2d(0x110), ![]) ? (_0xe4a953[_0x117c2d(0x10c)] = _0x2cc016, _0x4d1edd[_0x117c2d(0x111)](_0x27e918, _0xe4a953[_0x117c2d(0x10e)])) : (_0xe4a953[_0x117c2d(0x10c)] = _0x126198, _0xe4a953[_0x117c2d(0x10e)] = _0x5450bc[_0x117c2d(0x10d)](_0x2c52a3), _0x2c52a3[_0x117c2d(0x111)](_0x27e918, _0xe4a953[_0x117c2d(0x10e)]));
                else {
                    if (_0xe4a953[_0x117c2d(0x10c)] == _0x2cc016) {
                        var _0x48b025 = _0x27e918['sol']() && _0x27e918['match'](/(---|\.\.\.)/, ![]), _0x19385c = _0x4d1edd[_0x117c2d(0x111)](_0x27e918, _0xe4a953[_0x117c2d(0x10e)]);
                        return _0x48b025 && (_0xe4a953[_0x117c2d(0x10c)] = _0x126198, _0xe4a953[_0x117c2d(0x10e)] = _0x5450bc[_0x117c2d(0x10d)](_0x2c52a3)), _0x19385c;
                    } else
                        return _0x2c52a3[_0x117c2d(0x111)](_0x27e918, _0xe4a953[_0x117c2d(0x10e)]);
                }
            },
            'innerMode': function (_0x3bbce4) {
                var _0x21016e = _0x59471;
                return {
                    'mode': _0x415bf2(_0x3bbce4),
                    'state': _0x3bbce4[_0x21016e(0x10e)]
                };
            },
            'blankLine': function (_0x2eb181) {
                var _0x185180 = _0x59471, _0x28f5a0 = _0x415bf2(_0x2eb181);
                if (_0x28f5a0[_0x185180(0x112)])
                    return _0x28f5a0['blankLine'](_0x2eb181[_0x185180(0x10e)]);
            }
        };
    });
}));
