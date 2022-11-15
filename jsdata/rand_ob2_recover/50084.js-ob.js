(function (_0x223c6d) {
    var _0x43fc52 = _0xab5c;
    if (typeof exports == _0x43fc52(260) && typeof module == _0x43fc52(260))
        _0x223c6d(require(_0x43fc52(261)), require(_0x43fc52(262)));
    else {
        if (typeof define == 'function' && define[_0x43fc52(263)])
            define([
                _0x43fc52(261),
                _0x43fc52(262)
            ], _0x223c6d);
        else
            _0x223c6d(CodeMirror);
    }
}(function (_0x5450bc) {
    var _0x251a6d = _0xab5c, _0x282101 = 0, _0x2cc016 = 1, _0x126198 = 2;
    _0x5450bc['defineMode'](_0x251a6d(264), function (_0xb00351, _0x2de887) {
        var _0x59471 = _0x251a6d, _0x4d1edd = _0x5450bc[_0x59471(265)](_0xb00351, 'yaml'), _0x2c52a3 = _0x5450bc['getMode'](_0xb00351, _0x2de887 && _0x2de887[_0x59471(266)] || _0x59471(267));
        function _0x415bf2(_0x426694) {
            var _0x5c2127 = _0x59471;
            return _0x426694[_0x5c2127(268)] == _0x126198 ? _0x2c52a3 : _0x4d1edd;
        }
        return {
            'startState': function () {
                var _0x7f3e88 = _0x59471;
                return {
                    'state': _0x282101,
                    'inner': _0x5450bc[_0x7f3e88(269)](_0x4d1edd)
                };
            },
            'copyState': function (_0x508f84) {
                var _0xfbda7b = _0x59471;
                return {
                    'state': _0x508f84[_0xfbda7b(268)],
                    'inner': _0x5450bc['copyState'](_0x415bf2(_0x508f84), _0x508f84[_0xfbda7b(270)])
                };
            },
            'token': function (_0x27e918, _0xe4a953) {
                var _0x117c2d = _0x59471;
                if (_0xe4a953[_0x117c2d(268)] == _0x282101)
                    return _0x27e918[_0x117c2d(271)](_0x117c2d(272), ![]) ? (_0xe4a953[_0x117c2d(268)] = _0x2cc016, _0x4d1edd[_0x117c2d(273)](_0x27e918, _0xe4a953[_0x117c2d(270)])) : (_0xe4a953[_0x117c2d(268)] = _0x126198, _0xe4a953[_0x117c2d(270)] = _0x5450bc[_0x117c2d(269)](_0x2c52a3), _0x2c52a3[_0x117c2d(273)](_0x27e918, _0xe4a953[_0x117c2d(270)]));
                else {
                    if (_0xe4a953[_0x117c2d(268)] == _0x2cc016) {
                        var _0x48b025 = _0x27e918['sol']() && _0x27e918['match'](/(---|\.\.\.)/, ![]), _0x19385c = _0x4d1edd[_0x117c2d(273)](_0x27e918, _0xe4a953[_0x117c2d(270)]);
                        return _0x48b025 && (_0xe4a953[_0x117c2d(268)] = _0x126198, _0xe4a953[_0x117c2d(270)] = _0x5450bc[_0x117c2d(269)](_0x2c52a3)), _0x19385c;
                    } else
                        return _0x2c52a3[_0x117c2d(273)](_0x27e918, _0xe4a953[_0x117c2d(270)]);
                }
            },
            'innerMode': function (_0x3bbce4) {
                var _0x21016e = _0x59471;
                return {
                    'mode': _0x415bf2(_0x3bbce4),
                    'state': _0x3bbce4[_0x21016e(270)]
                };
            },
            'blankLine': function (_0x2eb181) {
                var _0x185180 = _0x59471, _0x28f5a0 = _0x415bf2(_0x2eb181);
                if (_0x28f5a0[_0x185180(274)])
                    return _0x28f5a0['blankLine'](_0x2eb181[_0x185180(270)]);
            }
        };
    });
}));