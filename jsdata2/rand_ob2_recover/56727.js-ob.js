function _0x3be8(_0x898e1b, _0x4dce4d) {
    return _0x3be8 = function (_0x4f02bb, _0x3be86d) {
        _0x4f02bb = _0x4f02bb - 188;
        let _0x2ba5f2 = _0x4f02[_0x4f02bb];
        return _0x2ba5f2;
    }, _0x3be8(_0x898e1b, _0x4dce4d);
}
const common = require(_0x115084(197)), assert = require(_0x115084(198));
if (process[_0x115084(199)][2] !== _0x115084(200)) {
    const spawn = require(_0x115084(201))[_0x115084(202)], child = spawn(process['execPath'], [
            __filename,
            _0x115084(200)
        ], { 'stdio': _0x115084(203) }), timer = setTimeout(function () {
            throw new Error('child is hung');
        }, common['platformTimeout'](3000));
    child['on']('exit', common[_0x115084(204)](function (_0x12a181) {
        const _0x1f9962 = _0x115084;
        assert[_0x1f9962(205)](_0x12a181, 0), clearTimeout(timer);
    }));
} else {
    const domain = require(_0x115084(206)), d = domain[_0x115084(207)]();
    d['on']('error', function () {
        const _0x249374 = _0x115084;
        console[_0x249374(208)]('a'), console[_0x249374(208)]('b'), console[_0x249374(208)]('c'), console[_0x249374(208)]('d'), console[_0x249374(208)]('e'), f();
    });
    function f() {
        const _0x354884 = _0x115084;
        process[_0x354884(209)](function () {
            const _0x583e16 = _0x354884;
            d[_0x583e16(210)](function () {
                throw new Error('x');
            });
        });
    }
    f(), setImmediate(function () {
        const _0x3e00b7 = _0x115084;
        console['error'](_0x3e00b7(211)), process['exit'](0);
    });
}