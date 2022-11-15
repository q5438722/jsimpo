const cacheLoader = require(_0x3cfae0(353));
function _0x1ca4(_0x38df41, _0x10e987) {
    return _0x1ca4 = function (_0x2e5870, _0x1ca41c) {
        _0x2e5870 = _0x2e5870 - 342;
        let _0x3b8e1f = _0x2e58[_0x2e5870];
        return _0x3b8e1f;
    }, _0x1ca4(_0x38df41, _0x10e987);
}
module[_0x3cfae0(354)] = cacheLoader(function loadWASMBundle(_0x5da5cc) {
    const _0xdf27d7 = _0x3cfae0;
    return fetch(_0x5da5cc)[_0xdf27d7(355)](function (_0x28fd4c) {
        const _0x3aa7fe = _0xdf27d7;
        return WebAssembly[_0x3aa7fe(356)] ? WebAssembly[_0x3aa7fe(356)](_0x28fd4c) : _0x28fd4c[_0x3aa7fe(357)]()['then'](function (_0xc623ff) {
            const _0x36ee14 = _0x3aa7fe;
            return WebAssembly[_0x36ee14(358)](_0xc623ff);
        });
    })['then'](function (_0x1584b5) {
        const _0x3c022e = _0xdf27d7;
        return _0x1584b5['instance'][_0x3c022e(354)];
    });
});