function _0x1cbc(_0x20530b, _0x2c0fba) {
    return _0x1cbc = function (_0x271910, _0x1cbc02) {
        _0x271910 = _0x271910 - 342;
        let _0x1d815e = _0x2719[_0x271910];
        return _0x1d815e;
    }, _0x1cbc(_0x20530b, _0x2c0fba);
}
const common = require(_0x56bbe2(352)), assert = require(_0x56bbe2(353)), async_hooks = require(_0x56bbe2(354)), fnsToTest = [
        setTimeout,
        _0x125745 => {
            setImmediate(() => {
                _0x125745(), setImmediate(() => {
                    const _0x5be2b8 = _0x1cbc;
                    hook[_0x5be2b8(355)]();
                });
            });
        },
        _0xf33a77 => {
            setImmediate(() => {
                const _0x5d4905 = _0x1cbc;
                process[_0x5d4905(356)](() => {
                    _0xf33a77(), setImmediate(() => {
                        const _0x1111e9 = _0x1cbc;
                        hook[_0x1111e9(355)](), assert['strictEqual'](fnsToTest['length'], 0);
                    });
                });
            });
        }
    ], hook = async_hooks[_0x56bbe2(357)]({
        'before': common[_0x56bbe2(358)](),
        'after': common[_0x56bbe2(359)](() => {
        }, 3),
        'destroy': common[_0x56bbe2(359)](() => {
            const _0x5f3bbb = _0x56bbe2;
            hook[_0x5f3bbb(355)](), nextTest();
        }, 3)
    });
nextTest();
function nextTest() {
    const _0x200bbb = _0x56bbe2;
    fnsToTest[_0x200bbb(360)] > 0 && fnsToTest[_0x200bbb(361)]()(common[_0x200bbb(359)](() => {
        const _0x1ab9da = _0x200bbb;
        hook[_0x1ab9da(362)]();
    }));
}