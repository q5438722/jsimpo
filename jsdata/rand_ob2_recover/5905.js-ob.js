(function (_0x2d9978) {
    _0x2d9978(function () {
        'use strict';
        var _0x28f7fa = _0x144d;
        var _0x3e817a, _0x38e38d, _0x41fa58;
        _0x3e817a = Array[_0x28f7fa(432)][_0x28f7fa(433)], _0x38e38d = Array[_0x28f7fa(432)][_0x28f7fa(434)];
        function _0x36c413(_0x5d262e) {
            return _0x5d262e;
        }
        _0x36c413[_0x28f7fa(435)] = _0x36c413, _0x36c413['inverse'][_0x28f7fa(435)] = _0x36c413;
        return function (_0x381462) {
            var _0x13946e = _0x28f7fa, _0x4c1f65, _0x15585f, _0x2fcadd;
            if (arguments[_0x13946e(436)] == 0)
                return _0x36c413;
            return _0x15585f = _0x3e817a['apply']([], _0x38e38d[_0x13946e(437)](arguments)), _0x4c1f65 = function () {
                var _0x502674 = _0x13946e, _0x4e49ef = _0x38e38d[_0x502674(437)](arguments);
                for (var _0x34cb4f = 0, _0x3f461f = _0x15585f[_0x502674(436)]; _0x34cb4f < _0x3f461f; _0x34cb4f++) {
                    _0x4e49ef[0] = _0x15585f[_0x34cb4f][_0x502674(438)](_0x41fa58, _0x4e49ef);
                }
                return _0x4e49ef[0];
            }, _0x2fcadd = _0x474909(_0x15585f), _0x2fcadd['length'] && (_0x4c1f65['inverse'] = function () {
                var _0x2128b4 = _0x13946e, _0x4e6ade = _0x38e38d['call'](arguments);
                for (var _0x10f87c = _0x2fcadd[_0x2128b4(436)] - 1; _0x10f87c >= 0; --_0x10f87c) {
                    _0x4e6ade[0] = _0x2fcadd[_0x10f87c][_0x2128b4(438)](_0x41fa58, _0x4e6ade);
                }
                return _0x4e6ade[0];
            }, _0x4c1f65[_0x13946e(435)][_0x13946e(435)] = _0x4c1f65), _0x4c1f65;
        };
        function _0x474909(_0x52e47d) {
            var _0x56f0b1 = _0x28f7fa, _0x510287, _0x45a44e;
            _0x45a44e = [];
            for (var _0x4e3b2a = 0, _0x4836ad = _0x52e47d[_0x56f0b1(436)]; _0x4e3b2a < _0x4836ad; _0x4e3b2a++) {
                _0x510287 = _0x52e47d[_0x4e3b2a][_0x56f0b1(435)];
                if (typeof _0x510287 == _0x56f0b1(439))
                    _0x45a44e['push'](_0x510287);
            }
            if (_0x45a44e[_0x56f0b1(436)] > 0 && _0x45a44e[_0x56f0b1(436)] !== _0x52e47d['length'])
                throw new Error('Either all or none of the supplied transforms must provide an inverse');
            return _0x45a44e;
        }
    });
}(typeof define == _0x58376f(439) ? define : function (_0x3a123c) {
    var _0x18dbb2 = _0x58376f;
    module[_0x18dbb2(440)] = _0x3a123c();
}));