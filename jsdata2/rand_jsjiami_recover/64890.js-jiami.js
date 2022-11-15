const Debug = debug['Debug'];
let exception = null;
let step_count = 0;
Debug['setListener']((_0x3c7698, _0x54e8dc, _0x329eec, _0x5875ba) => {
    if (_0x3c7698 != Debug['DebugEvent']['Break'])
        return;
    try {
        const _0x161307 = _0x54e8dc['frame'](0)['sourceLineText']();
        print(_0x161307);
        const [_0xb37f7d, _0x3086a2, _0x358777] = /\/\/ B(\d) (\w+)$/['exec'](_0x161307);
        assertEquals(step_count++, parseInt(_0x3086a2));
        if (_0x358777 != 'Continue')
            _0x54e8dc['prepareStep'](Debug['StepAction'][_0x358777]);
    } catch (_0x4a03ee) {
        if ('WKSpd' !== 'NHmyt') {
            print(_0x4a03ee, _0x4a03ee['stack']);
            exception = _0x4a03ee;
        } else {
            print(_0x4a03ee, _0x4a03ee['stack']);
            exception = _0x4a03ee;
        }
    }
});
function f(_0xd4d802) {
    debugger;
    with ({}) {
        return _0xd4d802;
    }
}
f(42);
assertNull(exception);
assertEquals(4, step_count);