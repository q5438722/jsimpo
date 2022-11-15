'use strict';
const _0x4f02 = [
    'pipe',
    'mustCall',
    'strictEqual',
    'domain',
    'create',
    'log',
    'nextTick',
    'run',
    'broke\x20in!',
    '218121OzVTyf',
    '485563VcaTvB',
    '629655yVcJFo',
    '923441lDuLHE',
    '14mHJFti',
    '58769FRaWXY',
    '10938DlLlgV',
    '6dKJxWW',
    '2603348grMJOQ',
    '../common',
    'assert',
    'argv',
    'child',
    'child_process',
    'spawn'
];
const _0x115084 = _0x3be8;
(function (_0x442b06, _0x59e082) {
    const _0x1fa727 = _0x3be8;
    while (!![]) {
        try {
            const _0x10938f = parseInt(_0x1fa727(0xbc)) + parseInt(_0x1fa727(0xbd)) + parseInt(_0x1fa727(0xbe)) + parseInt(_0x1fa727(0xbf)) + -parseInt(_0x1fa727(0xc0)) * -parseInt(_0x1fa727(0xc1)) + parseInt(_0x1fa727(0xc2)) * parseInt(_0x1fa727(0xc3)) + -parseInt(_0x1fa727(0xc4));
            if (_0x10938f === _0x59e082)
                break;
            else
                _0x442b06['push'](_0x442b06['shift']());
        } catch (_0x37479e) {
            _0x442b06['push'](_0x442b06['shift']());
        }
    }
}(_0x4f02, 0x84482));
function _0x3be8(_0x898e1b, _0x4dce4d) {
    return _0x3be8 = function (_0x4f02bb, _0x3be86d) {
        _0x4f02bb = _0x4f02bb - 0xbc;
        let _0x2ba5f2 = _0x4f02[_0x4f02bb];
        return _0x2ba5f2;
    }, _0x3be8(_0x898e1b, _0x4dce4d);
}
const common = require(_0x115084(0xc5)), assert = require(_0x115084(0xc6));
if (process[_0x115084(0xc7)][0x2] !== _0x115084(0xc8)) {
    const spawn = require(_0x115084(0xc9))[_0x115084(0xca)], child = spawn(process['execPath'], [
            __filename,
            _0x115084(0xc8)
        ], { 'stdio': _0x115084(0xcb) }), timer = setTimeout(function () {
            throw new Error('child\x20is\x20hung');
        }, common['platformTimeout'](0xbb8));
    child['on']('exit', common[_0x115084(0xcc)](function (_0x12a181) {
        const _0x1f9962 = _0x115084;
        assert[_0x1f9962(0xcd)](_0x12a181, 0x0), clearTimeout(timer);
    }));
} else {
    const domain = require(_0x115084(0xce)), d = domain[_0x115084(0xcf)]();
    d['on']('error', function () {
        const _0x249374 = _0x115084;
        console[_0x249374(0xd0)]('a'), console[_0x249374(0xd0)]('b'), console[_0x249374(0xd0)]('c'), console[_0x249374(0xd0)]('d'), console[_0x249374(0xd0)]('e'), f();
    });
    function f() {
        const _0x354884 = _0x115084;
        process[_0x354884(0xd1)](function () {
            const _0x583e16 = _0x354884;
            d[_0x583e16(0xd2)](function () {
                throw new Error('x');
            });
        });
    }
    f(), setImmediate(function () {
        const _0x3e00b7 = _0x115084;
        console['error'](_0x3e00b7(0xd3)), process['exit'](0x0);
    });
}
