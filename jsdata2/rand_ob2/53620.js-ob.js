'use strict';
const _0x4a69 = [
    'assert',
    'child_process',
    'spawn',
    'argv',
    'child',
    'abort',
    'exit',
    'strictEqual',
    'SIGABRT',
    '1313789KFyvME',
    '870854UaGzWB',
    '89521AXfVxg',
    '19uuchLi',
    '658050IMnspC',
    '3993qNsAVr',
    '97lKuTQR',
    '165EmonAq',
    '1986vZuUhb',
    '2896191ECqgGy',
    '../common'
];
function _0x3de1(_0x211f79, _0xb0c560) {
    return _0x3de1 = function (_0x4a69f8, _0x3de1e6) {
        _0x4a69f8 = _0x4a69f8 - 0xf1;
        let _0x186073 = _0x4a69[_0x4a69f8];
        return _0x186073;
    }, _0x3de1(_0x211f79, _0xb0c560);
}
const _0x3f6893 = _0x3de1;
(function (_0x53b575, _0x3f3973) {
    const _0x137435 = _0x3de1;
    while (!![]) {
        try {
            const _0x3f5833 = parseInt(_0x137435(0xf1)) + parseInt(_0x137435(0xf2)) + parseInt(_0x137435(0xf3)) * parseInt(_0x137435(0xf4)) + parseInt(_0x137435(0xf5)) + -parseInt(_0x137435(0xf6)) * parseInt(_0x137435(0xf7)) + -parseInt(_0x137435(0xf8)) * parseInt(_0x137435(0xf9)) + -parseInt(_0x137435(0xfa));
            if (_0x3f5833 === _0x3f3973)
                break;
            else
                _0x53b575['push'](_0x53b575['shift']());
        } catch (_0x59e38d) {
            _0x53b575['push'](_0x53b575['shift']());
        }
    }
}(_0x4a69, 0xe3a26));
const common = require(_0x3f6893(0xfb)), assert = require(_0x3f6893(0xfc)), spawn = require(_0x3f6893(0xfd))[_0x3f6893(0xfe)];
if (process[_0x3f6893(0xff)][0x2] === _0x3f6893(0x100))
    process[_0x3f6893(0x101)]();
else {
    const child = spawn(process['execPath'], [
        __filename,
        'child'
    ]);
    child['on'](_0x3f6893(0x102), common['mustCall']((_0x4c1d6e, _0x2c29f9) => {
        const _0x2a4ead = _0x3f6893;
        common['isWindows'] ? (assert['strictEqual'](_0x4c1d6e, 0x86), assert['strictEqual'](_0x2c29f9, null)) : (assert[_0x2a4ead(0x103)](_0x4c1d6e, null), assert[_0x2a4ead(0x103)](_0x2c29f9, _0x2a4ead(0x104)));
    }));
}
