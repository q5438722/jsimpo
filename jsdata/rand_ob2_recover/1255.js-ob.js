async function conditionPromise(_0x3aa844, _0x25a90a = 'anonymous condition') {
    const _0x54d2e6 = _0x4da6, _0x55a3fd = Date[_0x54d2e6(423)]();
    while (!![]) {
        await timeoutPromise(100);
        if (_0x3aa844[_0x54d2e6(424)][_0x54d2e6(425)] !== _0x54d2e6(426) && _0x3aa844())
            return;
        else {
            if (await _0x3aa844())
                return;
        }
        if (Date[_0x54d2e6(423)]() - _0x55a3fd > 5000)
            throw new Error(_0x54d2e6(427) + _0x25a90a);
    }
}
function timeoutPromise(_0x5bf0d3) {
    return new Promise(_0x471c92 => {
        const _0x4f2041 = _0x4da6;
        global[_0x4f2041(428)](_0x471c92, _0x5bf0d3);
    });
}
function emitterEventPromise(_0x52a313, _0x21af88, _0x561d7c = 15000) {
    return new Promise((_0x58c6b1, _0xf857d4) => {
        const _0x339e84 = _0x4da6, _0x2dd67b = setTimeout(() => {
                const _0x7060cf = _0x4da6;
                _0xf857d4(new Error(_0x7060cf(429) + _0x21af88 + _0x7060cf(430)));
            }, _0x561d7c);
        _0x52a313[_0x339e84(431)](_0x21af88, () => {
            clearTimeout(_0x2dd67b), _0x58c6b1();
        });
    });
}
exports[_0x283457(432)] = conditionPromise, exports[_0x283457(433)] = emitterEventPromise, exports['timeoutPromise'] = timeoutPromise;