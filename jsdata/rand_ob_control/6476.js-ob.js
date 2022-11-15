define([
    'can/util/library',
    'can/util/string'
], function (_0x2b5844) {
    var _0x54303b = {
            'ybhvT': function (_0x1e4beb, _0x16bb77) {
                return _0x1e4beb(_0x16bb77);
            },
            'xqTkI': function (_0x34d118, _0x5541ff) {
                return _0x34d118 - _0x5541ff;
            },
            'LJqQw': function (_0x66d276, _0x4b8e31) {
                return _0x66d276 < _0x4b8e31;
            },
            'WUpXg': function (_0x145744, _0x2f062d) {
                return _0x145744 + _0x2f062d;
            },
            'EkPek': function (_0x45a6c5, _0x2345c4) {
                return _0x45a6c5 === _0x2345c4;
            },
            'GXNxU': function (_0x128fe9, _0x1f42ff) {
                return _0x128fe9 === _0x1f42ff;
            }
        }, _0x560565 = /^\d+$/, _0x188418 = /([^\[\]]+)|(\[\])/g, _0x3e5c4b = /([^?#]*)(#.*)?$/, _0x1cb28f = function (_0x597261) {
            return _0x54303b['ybhvT'](decodeURIComponent, _0x597261['replace'](/\+/g, '\x20'));
        };
    return _0x2b5844['extend'](_0x2b5844, {
        'deparam': function (_0x24638b) {
            var _0x52db0f = {
                    'qdelr': function (_0x5b947b, _0x44e838) {
                        return _0x54303b['ybhvT'](_0x5b947b, _0x44e838);
                    },
                    'vqMDc': function (_0x4e7071, _0x51a7c3) {
                        return _0x54303b['xqTkI'](_0x4e7071, _0x51a7c3);
                    },
                    'uPVmZ': function (_0x333b33, _0x163faa) {
                        return _0x54303b['LJqQw'](_0x333b33, _0x163faa);
                    },
                    'dEnBF': function (_0x371e95, _0x37a83a) {
                        return _0x54303b['WUpXg'](_0x371e95, _0x37a83a);
                    },
                    'uRQEM': function (_0x3afbd3, _0x2acd00) {
                        return _0x54303b['EkPek'](_0x3afbd3, _0x2acd00);
                    },
                    'hAcyv': function (_0x45156a, _0x891446) {
                        return _0x54303b['GXNxU'](_0x45156a, _0x891446);
                    }
                }, _0x4baf4a = {}, _0x183278, _0x5e7ddd;
            return _0x24638b && _0x3e5c4b['test'](_0x24638b) && (_0x183278 = _0x24638b['split']('&'), _0x2b5844['each'](_0x183278, function (_0x538bb9) {
                var _0x171132 = _0x538bb9['split']('='), _0x433f41 = _0x52db0f['qdelr'](_0x1cb28f, _0x171132['shift']()), _0x435822 = _0x52db0f['qdelr'](_0x1cb28f, _0x171132['join']('=')), _0x3298a1 = _0x4baf4a;
                if (_0x433f41) {
                    _0x171132 = _0x433f41['match'](_0x188418);
                    for (var _0x4080a5 = 0x0, _0x5c3f90 = _0x52db0f['vqMDc'](_0x171132['length'], 0x1); _0x52db0f['uPVmZ'](_0x4080a5, _0x5c3f90); _0x4080a5++) {
                        !_0x3298a1[_0x171132[_0x4080a5]] && (_0x3298a1[_0x171132[_0x4080a5]] = _0x560565['test'](_0x171132[_0x52db0f['dEnBF'](_0x4080a5, 0x1)]) || _0x52db0f['uRQEM'](_0x171132[_0x52db0f['dEnBF'](_0x4080a5, 0x1)], '[]') ? [] : {}), _0x3298a1 = _0x3298a1[_0x171132[_0x4080a5]];
                    }
                    _0x5e7ddd = _0x171132['pop'](), _0x52db0f['hAcyv'](_0x5e7ddd, '[]') ? _0x3298a1['push'](_0x435822) : _0x3298a1[_0x5e7ddd] = _0x435822;
                }
            })), _0x4baf4a;
        }
    }), _0x2b5844;
});
