const Debug = debug[_0x525c6e(452)];
function _0x4e61(_0x56d71e, _0x27808f) {
    return _0x4e61 = function (_0x2c7d2e, _0x4e61f8) {
        _0x2c7d2e = _0x2c7d2e - 441;
        let _0x53e605 = _0x2c7d[_0x2c7d2e];
        return _0x53e605;
    }, _0x4e61(_0x56d71e, _0x27808f);
}
let exception = null, step_count = 0;
Debug[_0x525c6e(453)]((_0x3df8f9, _0x27916c, _0x12b7f4, _0x2cbacd) => {
    const _0x1a3251 = _0x525c6e;
    if (_0x3df8f9 != Debug['DebugEvent'][_0x1a3251(454)])
        return;
    try {
        const _0x204ef2 = _0x27916c[_0x1a3251(455)](0)['sourceLineText']();
        print(_0x204ef2);
        const [_0x8e3737, _0x3e6002, _0x4d8b75] = /\/\/ B(\d) (\w+)$/['exec'](_0x204ef2);
        assertEquals(step_count++, parseInt(_0x3e6002));
        if (_0x4d8b75 != _0x1a3251(456))
            _0x27916c[_0x1a3251(457)](Debug[_0x1a3251(458)][_0x4d8b75]);
    } catch (_0x35574a) {
        print(_0x35574a, _0x35574a[_0x1a3251(459)]), exception = _0x35574a;
    }
});
function f(_0x360c3c) {
    debugger;
    with ({}) {
        return _0x360c3c;
    }
}
f(42), assertNull(exception), assertEquals(4, step_count);