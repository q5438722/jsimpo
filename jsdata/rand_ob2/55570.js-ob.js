'use strict';
const _0x2c9a = [
    '389279XLaYNy',
    '1828601UxTVrC',
    '1713775RTkNAH',
    '1154297mGAVIX',
    '3DywYna',
    '163021sZtUfA',
    '993391LmyTEW',
    '../common',
    'hasCrypto',
    'skip',
    'missing\x20crypto',
    'crypto',
    'create',
    'mustCall',
    'strictEqual',
    'run',
    'pbkdf2',
    'password',
    'salt',
    'randomBytes',
    '1235637qOWEul'
];
const _0x3d86bf = _0x2d0c;
(function (_0x45787d, _0x462f97) {
    const _0x5f23c8 = _0x2d0c;
    while (!![]) {
        try {
            const _0x3ea473 = -parseInt(_0x5f23c8(0x127)) + parseInt(_0x5f23c8(0x128)) + parseInt(_0x5f23c8(0x129)) + -parseInt(_0x5f23c8(0x12a)) + parseInt(_0x5f23c8(0x12b)) + -parseInt(_0x5f23c8(0x12c)) * parseInt(_0x5f23c8(0x12d)) + parseInt(_0x5f23c8(0x12e));
            if (_0x3ea473 === _0x462f97)
                break;
            else
                _0x45787d['push'](_0x45787d['shift']());
        } catch (_0x5c3411) {
            _0x45787d['push'](_0x45787d['shift']());
        }
    }
}(_0x2c9a, 0xe2575));
const common = require(_0x3d86bf(0x12f));
if (!common[_0x3d86bf(0x130)])
    common[_0x3d86bf(0x131)](_0x3d86bf(0x132));
function _0x2d0c(_0x48055b, _0x44a9c2) {
    return _0x2d0c = function (_0x2c9a4e, _0x2d0c50) {
        _0x2c9a4e = _0x2c9a4e - 0x127;
        let _0x49f75f = _0x2c9a[_0x2c9a4e];
        return _0x49f75f;
    }, _0x2d0c(_0x48055b, _0x44a9c2);
}
const assert = require('assert'), crypto = require(_0x3d86bf(0x133)), domain = require('domain'), test = _0x3f3c00 => {
        const _0x10a8c2 = _0x3d86bf, _0x2d4c9e = new Error('BAM'), _0x4b031a = domain[_0x10a8c2(0x134)]();
        _0x4b031a['on']('error', common[_0x10a8c2(0x135)](function (_0x56f5ab) {
            const _0x229666 = _0x10a8c2;
            assert[_0x229666(0x136)](_0x56f5ab, _0x2d4c9e);
        }));
        const _0x18b3fa = common[_0x10a8c2(0x135)](function () {
            throw _0x2d4c9e;
        });
        _0x4b031a[_0x10a8c2(0x137)](_0x18b3fa);
    };
test(function (_0x5bb183) {
    const _0x40af54 = _0x3d86bf;
    crypto[_0x40af54(0x138)](_0x40af54(0x139), _0x40af54(0x13a), 0x1, 0x8, _0x5bb183);
}), test(function (_0x2a3eaf) {
    const _0x57b693 = _0x3d86bf;
    crypto[_0x57b693(0x13b)](0x20, _0x2a3eaf);
});
