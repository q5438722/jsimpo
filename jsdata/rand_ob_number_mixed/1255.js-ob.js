async function conditionPromise(_0x356370, _0x5cdebf = 'anonymous\x20condition') {
    const _0x21fb5b = Date['now']();
    while (!![]) {
        await timeoutPromise(-0x20 * 0xa5 + 0xd8 + -0x50b * -0x4);
        if (_0x356370['constructor']['name'] !== 'AsyncFunction' && _0x356370())
            return;
        else {
            if (await _0x356370())
                return;
        }
        if (Date['now']() - _0x21fb5b > 0x2 * 0x9b3 + -0x127d + 0x635 * 0x3)
            throw new Error('Timed\x20out\x20waiting\x20on\x20' + _0x5cdebf);
    }
}
function timeoutPromise(_0x1c69ec) {
    return new Promise(_0x2fb1e1 => {
        global['setTimeout'](_0x2fb1e1, _0x1c69ec);
    });
}
function emitterEventPromise(_0x3ecc49, _0x237ba4, _0x1f4ac3 = 0x3e * 0x154 + 0x1 * 0x1c7a + -0x343a) {
    return new Promise((_0x40088f, _0x3aca4f) => {
        const _0x5dcda9 = setTimeout(() => {
            _0x3aca4f(new Error('Timed\x20out\x20waiting\x20for\x20\x27' + _0x237ba4 + '\x27\x20event'));
        }, _0x1f4ac3);
        _0x3ecc49['once'](_0x237ba4, () => {
            clearTimeout(_0x5dcda9), _0x40088f();
        });
    });
}
exports['conditionPromise'] = conditionPromise, exports['emitterEventPromise'] = emitterEventPromise, exports['timeoutPromise'] = timeoutPromise;
