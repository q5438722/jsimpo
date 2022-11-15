const common = require(_0x1ec618(200)), assert = require(_0x1ec618(201)), async_hooks = require(_0x1ec618(202)), fnsToTest = [
        setTimeout,
        _0x11751d => {
            setImmediate(() => {
                _0x11751d(), setImmediate(() => {
                    const _0x32761b = _0x55d8;
                    hook[_0x32761b(203)]();
                });
            });
        },
        _0x27f29f => {
            setImmediate(() => {
                const _0x1f6db3 = _0x55d8;
                process[_0x1f6db3(204)](() => {
                    _0x27f29f(), setImmediate(() => {
                        const _0x3cd1ef = _0x55d8;
                        hook[_0x3cd1ef(203)](), assert[_0x3cd1ef(205)](fnsToTest[_0x3cd1ef(206)], 0);
                    });
                });
            });
        }
    ], hook = async_hooks['createHook']({
        'before': common[_0x1ec618(207)](),
        'after': common['mustCall'](() => {
        }, 3),
        'destroy': common['mustCall'](() => {
            const _0x3c0ac8 = _0x1ec618;
            hook[_0x3c0ac8(203)](), nextTest();
        }, 3)
    });
nextTest();
function _0x55d8(_0x248ea0, _0x234ac8) {
    return _0x55d8 = function (_0x5a65d9, _0x55d8ae) {
        _0x5a65d9 = _0x5a65d9 - 191;
        let _0x2aec09 = _0x5a65[_0x5a65d9];
        return _0x2aec09;
    }, _0x55d8(_0x248ea0, _0x234ac8);
}
function nextTest() {
    const _0x228f0a = _0x1ec618;
    fnsToTest[_0x228f0a(206)] > 0 && fnsToTest['shift']()(common[_0x228f0a(208)](() => {
        hook['enable']();
    }));
}