const _0x8965 = ['isSet', '4|0|3|1|2', 'should return `true` for sets', 'should work with weak sets from another realm', 'split', 'ECIEW', 'xxqnl', 'strictEqual', 'EEPTh', 'PNqlw', 'dXnkk', 'map', 'deepStrictEqual', 'gLptK', 'foecM', 'set', 'should return `false` for non-sets', 'LbiKz', 'iDtgZ', 'JKGeK', 'wZeOS', 'EQRWF', 'ILdmI', 'ixfPH', 'gVFnN', 'Spdbc', '98hjQLmM', '566JPxjEF', '18623KusdBo', '1OcJVZa', '125657adsCRA', '1xAXrox', '62554HwLkBn', '2nGKcNE', '39237ZvJltL', '174899WHUbAt', '1rUTzcC', '40658oNfkBm'];
const _0x5ee3a0 = _0x5398;

function _0x5398(_0x5da60a, _0x374793) {
    return _0x5398 = function (_0x4a033a, _0x12bb3a) {
        _0x4a033a = _0x4a033a - 405;
        const _0x138998 = _0x8965[_0x4a033a];

        return _0x138998;
    }, _0x5398(_0x5da60a, _0x374793);
}
(function (_0x153279, _0x12cdc8) {
    const _0x299a9a = _0x5398;

    while (true) {
        try {
            const _0x37cc1a = parseInt(_0x299a9a(0x195)) * -parseInt(_0x299a9a(0x196)) + parseInt(_0x299a9a(0x197)) * parseInt(_0x299a9a(0x198)) + parseInt(_0x299a9a(0x199)) * parseInt(_0x299a9a(0x19a)) + parseInt(_0x299a9a(0x19b)) * parseInt(_0x299a9a(0x19c)) + parseInt(_0x299a9a(0x19d)) + -parseInt(_0x299a9a(0x19e)) + parseInt(_0x299a9a(0x19f)) * parseInt(_0x299a9a(0x1a0));

            if (_0x37cc1a === _0x12cdc8) break;else _0x153279.push(_0x153279.shift());
        } catch (_0x39460a) {
            _0x153279.push(_0x153279.shift());
        }
    }
})(_0x8965, 118916);
import _0x24905b from 'assert';
import _0x4d3d94 from 'lodash';
import { set, falsey, stubFalse, args, slice, symbol, weakSet, realm } from './utils.js';
import _0x16b57e from '../isSet.js';
describe(_0x5ee3a0(0x1a1), function () {
    const _0x15b2fe = _0x5ee3a0;
    const _0x3aa03a = {
        'ypSPQ': _0x15b2fe(0x1a2),
        'ECIEW': function (_0x34f605, _0x5a8c1c, _0x3aa724) {
            return _0x34f605(_0x5a8c1c, _0x3aa724);
        },
        'xxqnl': _0x15b2fe(0x1a3),
        'PNqlw': function (_0x5caa31, _0x5bf441, _0x51eafb) {
            return _0x5caa31(_0x5bf441, _0x51eafb);
        },
        'MHkYs': 'should work for objects with a non-function `constructor` (test in IE 11)',
        'gLptK': function (_0xac8dcf, _0x30a142, _0x1c98a1) {
            return _0xac8dcf(_0x30a142, _0x1c98a1);
        },
        'foecM': _0x15b2fe(0x1a4),
        'ixfPH': function (_0x46f6a6, _0x4132aa) {
            return _0x46f6a6(_0x4132aa);
        },
        'gVFnN': function (_0x54dc00, _0x4a0273) {
            return _0x54dc00(_0x4a0273);
        },
        'Spdbc': function (_0x21790e, _0xb17089) {
            return _0x21790e(_0xb17089);
        }
    };

    const _0x441aa5 = _0x3aa03a.ypSPQ[_0x15b2fe(0x1a5)]('|');

    var _0x2dd43c = 0;

    while (true) {
        switch (_0x441aa5[_0x2dd43c++]) {
            case '0':
                _0x3aa03a[_0x15b2fe(0x1a6)](it, _0x3aa03a[_0x15b2fe(0x1a7)], function () {
                    const _0x54b4af = _0x15b2fe;

                    Set && _0x24905b[_0x54b4af(0x1a8)](_0x47be62[_0x54b4af(0x1a9)](_0x16b57e, set), true);
                });
                continue;
            case '1':
                _0x3aa03a[_0x15b2fe(0x1aa)](it, _0x3aa03a.MHkYs, function () {
                    const _0x36f777 = _0x15b2fe;
                    const _0x13aaa0 = {
                        'ibAIE': function (_0x144320, _0x38a015) {
                            const _0x4adafa = _0x5398;

                            return _0x47be62[_0x4adafa(0x1ab)](_0x144320, _0x38a015);
                        }
                    };
                    const _0xad9f65 = [false, true];

                    const _0x1e3ac3 = _0x4d3d94[_0x36f777(0x1ac)](_0xad9f65, stubFalse);

                    const _0x773ac6 = _0x4d3d94.map(_0xad9f65, function (_0x28d515) {
                        return _0x13aaa0.ibAIE(_0x16b57e, { 'constructor': _0x28d515 });
                    });

                    _0x24905b[_0x36f777(0x1ad)](_0x773ac6, _0x1e3ac3);
                });
                continue;
            case '2':
                _0x3aa03a[_0x15b2fe(0x1ae)](it, _0x3aa03a[_0x15b2fe(0x1af)], function () {
                    const _0x5991c3 = _0x15b2fe;

                    realm[_0x5991c3(0x1b0)] && _0x24905b[_0x5991c3(0x1a8)](_0x47be62[_0x5991c3(0x1ab)](_0x16b57e, realm.set), true);
                });
                continue;
            case '3':
                it(_0x15b2fe(0x1b1), function () {
                    const _0xdc30a5 = _0x15b2fe;
                    const _0x4b50b4 = {
                        'mfieT': function (_0x4d7e3c, _0x108f0c) {
                            return _0x4d7e3c(_0x108f0c);
                        },
                        'LbiKz': function (_0x2f5e35) {
                            return _0x2f5e35();
                        }
                    };

                    const _0x594f0a = _0x4d3d94[_0xdc30a5(0x1ac)](falsey, stubFalse);

                    const _0x1a1299 = _0x4d3d94[_0xdc30a5(0x1ac)](falsey, function (_0x31b53b, _0x14b19f) {
                        const _0x15a669 = _0xdc30a5;

                        return _0x14b19f ? _0x4b50b4.mfieT(_0x16b57e, _0x31b53b) : _0x4b50b4[_0x15a669(0x1b2)](_0x16b57e);
                    });

                    _0x24905b[_0xdc30a5(0x1ad)](_0x1a1299, _0x594f0a), _0x24905b[_0xdc30a5(0x1a8)](_0x16b57e(args), false), _0x24905b[_0xdc30a5(0x1a8)](_0x47be62[_0xdc30a5(0x1b3)](_0x16b57e, [1, 2, 3]), false), _0x24905b[_0xdc30a5(0x1a8)](_0x47be62[_0xdc30a5(0x1b3)](_0x16b57e, true), false), _0x24905b[_0xdc30a5(0x1a8)](_0x47be62[_0xdc30a5(0x1b4)](_0x16b57e, new Date()), false), _0x24905b[_0xdc30a5(0x1a8)](_0x16b57e(new Error()), false), _0x24905b[_0xdc30a5(0x1a8)](_0x47be62[_0xdc30a5(0x1b5)](_0x16b57e, _), false), _0x24905b.strictEqual(_0x16b57e(slice), false), _0x24905b[_0xdc30a5(0x1a8)](_0x47be62[_0xdc30a5(0x1b6)](_0x16b57e, { 'a': 0x1 }), false), _0x24905b[_0xdc30a5(0x1a8)](_0x47be62[_0xdc30a5(0x1b6)](_0x16b57e, 1), false), _0x24905b[_0xdc30a5(0x1a8)](_0x47be62[_0xdc30a5(0x1b6)](_0x16b57e, /x/), false), _0x24905b[_0xdc30a5(0x1a8)](_0x16b57e('a'), false), _0x24905b.strictEqual(_0x16b57e(symbol), false), _0x24905b[_0xdc30a5(0x1a8)](_0x47be62[_0xdc30a5(0x1b7)](_0x16b57e, weakSet), false);
                });
                continue;
            case '4':
                const _0x47be62 = {
                    'EEPTh': function (_0x29cfda, _0x1cb890) {
                        const _0xfb8a2f = _0x15b2fe;

                        return _0x3aa03a[_0xfb8a2f(0x1b8)](_0x29cfda, _0x1cb890);
                    },
                    'iDtgZ': function (_0xddc9e8, _0x3c8460) {
                        return _0x3aa03a.ixfPH(_0xddc9e8, _0x3c8460);
                    },
                    'JKGeK': function (_0x512595, _0x3810a2) {
                        const _0x3964d5 = _0x15b2fe;

                        return _0x3aa03a[_0x3964d5(0x1b8)](_0x512595, _0x3810a2);
                    },
                    'wZeOS': function (_0x5cbb5e, _0x43250f) {
                        return _0x5cbb5e(_0x43250f);
                    },
                    'EQRWF': function (_0x1c440f, _0x81fb76) {
                        const _0x2a6ebc = _0x15b2fe;

                        return _0x3aa03a[_0x2a6ebc(0x1b9)](_0x1c440f, _0x81fb76);
                    },
                    'ILdmI': function (_0x518260, _0x30a482) {
                        const _0x29c3ae = _0x15b2fe;

                        return _0x3aa03a[_0x29c3ae(0x1b9)](_0x518260, _0x30a482);
                    },
                    'dXnkk': function (_0x4b4eaa, _0x52b4c2) {
                        const _0x3c908c = _0x15b2fe;

                        return _0x3aa03a[_0x3c908c(0x1ba)](_0x4b4eaa, _0x52b4c2);
                    }
                };

                continue;
        }
        break;
    }
});
