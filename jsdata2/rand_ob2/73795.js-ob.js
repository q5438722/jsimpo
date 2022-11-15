var _0x5ece = [
    '872ovSSGy',
    '156klsxaN',
    '524626XriLVY',
    '1zivvYe',
    '37QfhmJi',
    '405AOJwZk',
    '3425yhomdx',
    '269yyrfiq',
    'length',
    'Stack',
    'times',
    'ListCache',
    'MapCache',
    'test',
    'should\x20implement\x20a\x20`Map`\x20interface\x20for\x20',
    'each',
    'get',
    'delete',
    'strictEqual',
    'set',
    'has',
    'size',
    'clear',
    'every',
    '444dFPOOx',
    '86Iinufu',
    '551297UQjMxK',
    '123476RTOBjl'
];
(function (_0x319710, _0xdb2299) {
    var _0x13c119 = _0x34b9;
    while (!![]) {
        try {
            var _0x14766d = -parseInt(_0x13c119(0x157)) * -parseInt(_0x13c119(0x158)) + parseInt(_0x13c119(0x159)) + parseInt(_0x13c119(0x15a)) + -parseInt(_0x13c119(0x15b)) * -parseInt(_0x13c119(0x15c)) + parseInt(_0x13c119(0x15d)) * parseInt(_0x13c119(0x15e)) + parseInt(_0x13c119(0x15f)) * -parseInt(_0x13c119(0x160)) + -parseInt(_0x13c119(0x161)) * parseInt(_0x13c119(0x162));
            if (_0x14766d === _0xdb2299)
                break;
            else
                _0x319710['push'](_0x319710['shift']());
        } catch (_0x49bbc2) {
            _0x319710['push'](_0x319710['shift']());
        }
    }
}(_0x5ece, 0x6ac39));
import _0x6cd11c from 'assert';
import _0x4761bf from 'lodash';
import {
    symbol,
    noop,
    mapCaches,
    LARGE_ARRAY_SIZE
} from './utils.js';
function _0x34b9(_0x2b87f8, _0x9ca15e) {
    return _0x34b9 = function (_0x5ece80, _0x34b962) {
        _0x5ece80 = _0x5ece80 - 0x157;
        var _0x2b5bb1 = _0x5ece[_0x5ece80];
        return _0x2b5bb1;
    }, _0x34b9(_0x2b87f8, _0x9ca15e);
}
describe('map\x20caches', function () {
    var _0x533acf = [
            null,
            undefined,
            ![],
            !![],
            0x1,
            -Infinity,
            NaN,
            {},
            'a',
            symbol || noop
        ], _0x100ace = _0x4761bf['map'](_0x533acf, function (_0x279664, _0x2ba153) {
            var _0x19a709 = _0x34b9, _0x4f241e = _0x533acf[_0x19a709(0x163)] - 0x1;
            return [
                _0x279664,
                _0x533acf[_0x4f241e - _0x2ba153]
            ];
        });
    function _0x51f4cb(_0x47656d) {
        var _0x2f80fe = _0x34b9, _0x13cfd9 = new mapCaches[(_0x2f80fe(0x164))](_0x47656d), _0x129613 = _0x47656d ? _0x47656d['length'] : 0x0;
        return _0x4761bf[_0x2f80fe(0x165)](LARGE_ARRAY_SIZE - _0x129613, function () {
            _0x13cfd9['set']({}, {});
        }), {
            'hashes': new mapCaches['Hash'](_0x47656d),
            'list\x20caches': new mapCaches[(_0x2f80fe(0x166))](_0x47656d),
            'map\x20caches': new mapCaches[(_0x2f80fe(0x167))](_0x47656d),
            'stack\x20caches': new mapCaches[(_0x2f80fe(0x164))](_0x47656d),
            'large\x20stacks': _0x13cfd9
        };
    }
    _0x4761bf['forOwn'](_0x51f4cb(_0x100ace), function (_0x5a27a2, _0x28f6c5) {
        var _0x434682 = _0x34b9, _0xb1e3ff = /^large/[_0x434682(0x168)](_0x28f6c5);
        it(_0x434682(0x169) + _0x28f6c5, function () {
            var _0x89104e = _0x434682;
            _0x4761bf[_0x89104e(0x16a)](_0x533acf, function (_0x3c1032, _0x24a362) {
                var _0xdbdcc = _0x89104e, _0x4e7f53 = _0x100ace[_0x24a362][0x1];
                _0x6cd11c['deepStrictEqual'](_0x5a27a2[_0xdbdcc(0x16b)](_0x3c1032), _0x4e7f53), _0x6cd11c['strictEqual'](_0x5a27a2['has'](_0x3c1032), !![]), _0x6cd11c['strictEqual'](_0x5a27a2[_0xdbdcc(0x16c)](_0x3c1032), !![]), _0x6cd11c[_0xdbdcc(0x16d)](_0x5a27a2['has'](_0x3c1032), ![]), _0x6cd11c[_0xdbdcc(0x16d)](_0x5a27a2['get'](_0x3c1032), undefined), _0x6cd11c[_0xdbdcc(0x16d)](_0x5a27a2[_0xdbdcc(0x16c)](_0x3c1032), ![]), _0x6cd11c[_0xdbdcc(0x16d)](_0x5a27a2[_0xdbdcc(0x16e)](_0x3c1032, _0x4e7f53), _0x5a27a2), _0x6cd11c['strictEqual'](_0x5a27a2[_0xdbdcc(0x16f)](_0x3c1032), !![]);
            }), _0x6cd11c['strictEqual'](_0x5a27a2[_0x89104e(0x170)], _0xb1e3ff ? LARGE_ARRAY_SIZE : _0x533acf[_0x89104e(0x163)]), _0x6cd11c[_0x89104e(0x16d)](_0x5a27a2[_0x89104e(0x171)](), undefined), _0x6cd11c['ok'](_0x4761bf[_0x89104e(0x172)](_0x533acf, function (_0x15632d) {
                var _0x4be0cc = _0x89104e;
                return !_0x5a27a2[_0x4be0cc(0x16f)](_0x15632d);
            }));
        });
    }), _0x4761bf['forOwn'](_0x51f4cb(), function (_0x2215ff, _0x7ab344) {
        it('should\x20support\x20changing\x20values\x20of\x20' + _0x7ab344, function () {
            _0x4761bf['each'](_0x533acf, function (_0x4e4795) {
                var _0x66fd5 = _0x34b9;
                _0x2215ff[_0x66fd5(0x16e)](_0x4e4795, 0x1)['set'](_0x4e4795, 0x2), _0x6cd11c[_0x66fd5(0x16d)](_0x2215ff['get'](_0x4e4795), 0x2);
            });
        });
    });
});
