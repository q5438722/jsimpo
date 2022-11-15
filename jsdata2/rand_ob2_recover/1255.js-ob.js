async function conditionPromise(_0x23403e, _0x3387ca = 'anonymous condition') {
    const _0xb9cfea = _0xde9f, _0x1adf4f = Date['now']();
    while (!![]) {
        await timeoutPromise(100);
        if (_0x23403e['constructor'][_0xb9cfea(151)] !== _0xb9cfea(152) && _0x23403e())
            return;
        else {
            if (await _0x23403e())
                return;
        }
        if (Date[_0xb9cfea(153)]() - _0x1adf4f > 5000)
            throw new Error(_0xb9cfea(154) + _0x3387ca);
    }
}
function timeoutPromise(_0x549a49) {
    return new Promise(_0x219233 => {
        global['setTimeout'](_0x219233, _0x549a49);
    });
}
function emitterEventPromise(_0xb78cec, _0x52e633, _0x5061b9 = 15000) {
    return new Promise((_0x81f0b0, _0xdf1e60) => {
        const _0x2fa312 = setTimeout(() => {
            const _0x3d2f1a = _0xde9f;
            _0xdf1e60(new Error(_0x3d2f1a(155) + _0x52e633 + '\' event'));
        }, _0x5061b9);
        _0xb78cec['once'](_0x52e633, () => {
            clearTimeout(_0x2fa312), _0x81f0b0();
        });
    });
}
function _0xde9f(_0x48a67a, _0x2d3448) {
    return _0xde9f = function (_0x28fe87, _0xde9fad) {
        _0x28fe87 = _0x28fe87 - 138;
        let _0x3cd0ef = _0x28fe[_0x28fe87];
        return _0x3cd0ef;
    }, _0xde9f(_0x48a67a, _0x2d3448);
}
exports['conditionPromise'] = conditionPromise, exports[_0x4eb3f4(156)] = emitterEventPromise, exports[_0x4eb3f4(157)] = timeoutPromise;