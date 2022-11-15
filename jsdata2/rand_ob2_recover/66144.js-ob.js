var colors = require('./colors');
module[_0x296dd5(421)] = function () {
    var _0x41088c = _0x296dd5, _0x5bfe94 = function (_0x4ac6ec, _0xec50a5) {
            var _0x2bb3ad = _0x2332;
            String[_0x2bb3ad(422)][_0x2bb3ad(423)](_0x4ac6ec, _0xec50a5);
        };
    _0x5bfe94(_0x41088c(424), function () {
        var _0x523006 = _0x41088c;
        return colors[_0x523006(424)](this);
    }), _0x5bfe94(_0x41088c(425), function () {
        return colors['strip'](this);
    }), _0x5bfe94('trap', function () {
        var _0x4858c6 = _0x41088c;
        return colors[_0x4858c6(426)](this);
    }), _0x5bfe94(_0x41088c(427), function () {
        return colors['zalgo'](this);
    }), _0x5bfe94(_0x41088c(428), function () {
        var _0x318138 = _0x41088c;
        return colors[_0x318138(428)](this);
    }), _0x5bfe94('rainbow', function () {
        var _0x10f9c5 = _0x41088c;
        return colors[_0x10f9c5(429)](this);
    }), _0x5bfe94(_0x41088c(430), function () {
        var _0x5e1b9a = _0x41088c;
        return colors[_0x5e1b9a(430)](this);
    }), _0x5bfe94(_0x41088c(431), function () {
        return colors['america'](this);
    });
    var _0x4d7739 = Object['keys'](colors[_0x41088c(432)]);
    _0x4d7739[_0x41088c(433)](function (_0xab32d) {
        _0x5bfe94(_0xab32d, function () {
            var _0x464d5e = _0x2332;
            return colors[_0x464d5e(434)](this, _0xab32d);
        });
    });
    function _0x318a7e(_0x3c55a4) {
        var _0x1150a2 = _0x41088c, _0x2476db = [
                _0x1150a2(423),
                _0x1150a2(435),
                _0x1150a2(436),
                _0x1150a2(437),
                'charAt',
                _0x1150a2(438),
                _0x1150a2(439),
                _0x1150a2(440),
                _0x1150a2(441),
                'toLocaleString',
                'toString',
                _0x1150a2(442),
                _0x1150a2(443),
                _0x1150a2(444),
                _0x1150a2(445),
                _0x1150a2(446),
                _0x1150a2(447),
                _0x1150a2(448),
                _0x1150a2(449),
                _0x1150a2(450),
                'search',
                _0x1150a2(451),
                _0x1150a2(452),
                _0x1150a2(453),
                'toLocaleLowerCase',
                'toLocaleUpperCase',
                _0x1150a2(454),
                'toUpperCase',
                _0x1150a2(455),
                _0x1150a2(456),
                _0x1150a2(457)
            ];
        Object[_0x1150a2(458)](_0x3c55a4)['forEach'](function (_0x176da3) {
            var _0x35b641 = _0x1150a2;
            if (_0x2476db[_0x35b641(444)](_0x176da3) !== -1)
                console[_0x35b641(459)]('warn: '[_0x35b641(460)] + (_0x35b641(461) + _0x176da3)[_0x35b641(462)] + _0x35b641(463) + _0x35b641(464));
            else {
                if (typeof _0x3c55a4[_0x176da3] === 'string')
                    colors[_0x176da3] = colors[_0x3c55a4[_0x176da3]], _0x5bfe94(_0x176da3, function () {
                        return colors[_0x176da3](this);
                    });
                else {
                    var _0x5261d2 = function (_0x11f140) {
                        var _0x57f6b1 = _0x35b641, _0x497822 = _0x11f140 || this;
                        for (var _0x1d3c4d = 0; _0x1d3c4d < _0x3c55a4[_0x176da3][_0x57f6b1(446)]; _0x1d3c4d++) {
                            _0x497822 = colors[_0x3c55a4[_0x176da3][_0x1d3c4d]](_0x497822);
                        }
                        return _0x497822;
                    };
                    _0x5bfe94(_0x176da3, _0x5261d2), colors[_0x176da3] = function (_0x2026af) {
                        return _0x5261d2(_0x2026af);
                    };
                }
            }
        });
    }
    colors[_0x41088c(465)] = function (_0x519107) {
        var _0x4e0fe8 = _0x41088c;
        if (typeof _0x519107 === 'string') {
            console[_0x4e0fe8(459)](_0x4e0fe8(466) + _0x4e0fe8(467) + 'caller\'s) responsibility to require the file.  The old syntax ' + _0x4e0fe8(468) + _0x4e0fe8(469) + _0x4e0fe8(470) + _0x4e0fe8(471));
            return;
        } else
            _0x318a7e(_0x519107);
    };
};