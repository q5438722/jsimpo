const _0x380f = ['19015KJJyta', '66553sbDRHk', '3iPYpnn', '1693KDAyxr', '64732YuAlrG', '736398xAoDcZ', 'exports', './SAT', './Pair', '../geometry/Bounds', 'collisions', 'table', 'metrics', 'XGuJo', 'length', 'isStatic', 'isSleeping', 'canCollide', 'collisionFilter', 'overlaps', 'bounds', 'SrBTW', 'parts', 'Usvea', '2|5|4|3|1|0', 'split', 'collided', 'narrowDetections', 'reused', 'narrowphaseTests', 'isActive', 'collision', 'LQqdZ', 'group', 'uxJvS', 'okqHT', 'mask', '1iqAHra', '51469NnGQTx', '122575pCqiQC', '1KRZmxp', '8vsDrom'];
const _0x304cef = _0x55bc;

(function (_0x97676a, _0x10e518) {
    const _0x368178 = _0x55bc;

    while (true) {
        try {
            const _0x1f6414 = -parseInt(_0x368178(0x18b)) * parseInt(_0x368178(0x18c)) + -parseInt(_0x368178(0x18d)) * parseInt(_0x368178(0x18e)) + parseInt(_0x368178(0x18f)) * -parseInt(_0x368178(0x190)) + -parseInt(_0x368178(0x191)) * parseInt(_0x368178(0x192)) + -parseInt(_0x368178(0x193)) + -parseInt(_0x368178(0x194)) + parseInt(_0x368178(0x195));

            if (_0x1f6414 === _0x10e518) break;else _0x97676a.push(_0x97676a.shift());
        } catch (_0x28ac73) {
            _0x97676a.push(_0x97676a.shift());
        }
    }
})(_0x380f, 144150);
const Detector = {};

module[_0x304cef(0x196)] = Detector;

const SAT = require(_0x304cef(0x197));

const Pair = require(_0x304cef(0x198));

const Bounds = require(_0x304cef(0x199));

function _0x55bc(_0x3bd81c, _0x39cb41) {
    return _0x55bc = function (_0x1a5572, _0x2a9c0c) {
        _0x1a5572 = _0x1a5572 - 395;
        const _0x3d2b03 = _0x380f[_0x1a5572];

        return _0x3d2b03;
    }, _0x55bc(_0x3bd81c, _0x39cb41);
}
(function () {
    const _0x54d781 = _0x304cef;
    const _0x56d599 = {
        'XGuJo': function (_0x2f7695, _0x194192) {
            return _0x2f7695 < _0x194192;
        },
        'SrBTW': function (_0xf1393b, _0x19bfad) {
            return _0xf1393b > _0x19bfad;
        },
        'vcuZN': function (_0x5b8793, _0x5b9877) {
            return _0x5b8793 < _0x5b9877;
        },
        'Usvea': function (_0x1b18a8, _0x2296b9) {
            return _0x1b18a8 === _0x2296b9;
        },
        'LQqdZ': function (_0x11d2a6, _0x39f221) {
            return _0x11d2a6 === _0x39f221;
        },
        'KETft': function (_0x1ee068, _0x186c11) {
            return _0x1ee068 !== _0x186c11;
        },
        'uxJvS': function (_0x528bf9, _0x703e98) {
            return _0x528bf9 & _0x703e98;
        },
        'okqHT': function (_0xe40fcb, _0xd4361) {
            return _0xe40fcb !== _0xd4361;
        }
    };

    Detector[_0x54d781(0x19a)] = function (_0x1c7862, _0x22ccd1) {
        const _0x32ba01 = _0x54d781;
        const _0x13a91c = [];

        const _0x2b4bb4 = _0x22ccd1.pairs[_0x32ba01(0x19b)];

        const _0xb7b6ae = _0x22ccd1[_0x32ba01(0x19c)];

        for (var _0x5e0f5e = 0; _0x56d599[_0x32ba01(0x19d)](_0x5e0f5e, _0x1c7862[_0x32ba01(0x19e)]); _0x5e0f5e++) {
            const _0x324fde = _0x1c7862[_0x5e0f5e][0];
            const _0x225ad3 = _0x1c7862[_0x5e0f5e][1];

            if ((_0x324fde.isStatic || _0x324fde.isSleeping) && (_0x225ad3[_0x32ba01(0x19f)] || _0x225ad3[_0x32ba01(0x1a0)])) continue;
            if (!Detector[_0x32ba01(0x1a1)](_0x324fde[_0x32ba01(0x1a2)], _0x225ad3[_0x32ba01(0x1a2)])) continue;
            _0xb7b6ae['midphaseTests'] += 1;
            if (Bounds[_0x32ba01(0x1a3)](_0x324fde.bounds, _0x225ad3[_0x32ba01(0x1a4)])) for (var _0x5bdf58 = _0x56d599[_0x32ba01(0x1a5)](_0x324fde[_0x32ba01(0x1a6)][_0x32ba01(0x19e)], 1) ? 1 : 0; _0x5bdf58 < _0x324fde[_0x32ba01(0x1a6)].length; _0x5bdf58++) {
                const _0x3b9f48 = _0x324fde[_0x32ba01(0x1a6)][_0x5bdf58];

                for (var _0x59be8a = _0x56d599[_0x32ba01(0x1a5)](_0x225ad3[_0x32ba01(0x1a6)][_0x32ba01(0x19e)], 1) ? 1 : 0; _0x56d599.vcuZN(_0x59be8a, _0x225ad3[_0x32ba01(0x1a6)][_0x32ba01(0x19e)]); _0x59be8a++) {
                    const _0x106601 = _0x225ad3[_0x32ba01(0x1a6)][_0x59be8a];

                    if (_0x3b9f48 === _0x324fde && _0x56d599[_0x32ba01(0x1a7)](_0x106601, _0x225ad3) || Bounds[_0x32ba01(0x1a3)](_0x3b9f48.bounds, _0x106601.bounds)) {
                        const _0x24605b = _0x32ba01(0x1a8)[_0x32ba01(0x1a9)]('|');

                        var _0x444536 = 0;

                        while (true) {
                            switch (_0x24605b[_0x444536++]) {
                                case '0':
                                    _0x4bcdd9[_0x32ba01(0x1aa)] && (_0x13a91c.push(_0x4bcdd9), _0xb7b6ae[_0x32ba01(0x1ab)] += 1);
                                    continue;
                                case '1':
                                    if (_0x4bcdd9[_0x32ba01(0x1ac)]) _0xb7b6ae['narrowReuseCount'] += 1;
                                    continue;
                                case '2':
                                    const _0x33db48 = Pair.id(_0x3b9f48, _0x106601);

                                    const _0x1b217d = _0x2b4bb4[_0x33db48];

                                    var _0x20f95b;

                                    continue;
                                case '3':
                                    _0xb7b6ae[_0x32ba01(0x1ad)] += 1;
                                    continue;
                                case '4':
                                    const _0x4bcdd9 = SAT.collides(_0x3b9f48, _0x106601, _0x20f95b);

                                    continue;
                                case '5':
                                    _0x1b217d && _0x1b217d[_0x32ba01(0x1ae)] ? _0x20f95b = _0x1b217d[_0x32ba01(0x1af)] : _0x20f95b = null;
                                    continue;
                            }
                            break;
                        }
                    }
                }
            }
        }
        return _0x13a91c;
    }, Detector['canCollide'] = function (_0xac2dfe, _0x2e3a99) {
        const _0x297351 = _0x54d781;

        if (_0x56d599[_0x297351(0x1b0)](_0xac2dfe.group, _0x2e3a99[_0x297351(0x1b1)]) && _0x56d599.KETft(_0xac2dfe.group, 0)) return _0x56d599[_0x297351(0x1a5)](_0xac2dfe.group, 0);
        return _0x56d599.KETft(_0x56d599[_0x297351(0x1b2)](_0xac2dfe.mask, _0x2e3a99.category), 0) && _0x56d599[_0x297351(0x1b3)](_0x56d599[_0x297351(0x1b2)](_0x2e3a99[_0x297351(0x1b4)], _0xac2dfe.category), 0);
    };
})();
