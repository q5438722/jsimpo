const _0x2c7d = [
    '1193gzleQx',
    'Debug',
    'setListener',
    'Break',
    'frame',
    'Continue',
    'prepareStep',
    'StepAction',
    'stack',
    '758031XahUcn',
    '1YkmNQZ',
    '1429639feOzEg',
    '1gZiXdr',
    '377413LkjJvb',
    '790305vSuArQ',
    '1RwaUpc',
    '134738lDOQht',
    '877356gzmqgJ',
    '863rRrvhP'
];
const _0x525c6e = _0x4e61;
(function (_0x1c9d47, _0x6367b3) {
    const _0x497f43 = _0x4e61;
    while (!![]) {
        try {
            const _0x2befdd = parseInt(_0x497f43(0x1b9)) + parseInt(_0x497f43(0x1ba)) * -parseInt(_0x497f43(0x1bb)) + -parseInt(_0x497f43(0x1bc)) * -parseInt(_0x497f43(0x1bd)) + parseInt(_0x497f43(0x1be)) + -parseInt(_0x497f43(0x1bf)) * -parseInt(_0x497f43(0x1c0)) + -parseInt(_0x497f43(0x1c1)) + parseInt(_0x497f43(0x1c2)) * parseInt(_0x497f43(0x1c3));
            if (_0x2befdd === _0x6367b3)
                break;
            else
                _0x1c9d47['push'](_0x1c9d47['shift']());
        } catch (_0x5a9574) {
            _0x1c9d47['push'](_0x1c9d47['shift']());
        }
    }
}(_0x2c7d, 0xbf2cb));
const Debug = debug[_0x525c6e(0x1c4)];
function _0x4e61(_0x56d71e, _0x27808f) {
    return _0x4e61 = function (_0x2c7d2e, _0x4e61f8) {
        _0x2c7d2e = _0x2c7d2e - 0x1b9;
        let _0x53e605 = _0x2c7d[_0x2c7d2e];
        return _0x53e605;
    }, _0x4e61(_0x56d71e, _0x27808f);
}
let exception = null, step_count = 0x0;
Debug[_0x525c6e(0x1c5)]((_0x3df8f9, _0x27916c, _0x12b7f4, _0x2cbacd) => {
    const _0x1a3251 = _0x525c6e;
    if (_0x3df8f9 != Debug['DebugEvent'][_0x1a3251(0x1c6)])
        return;
    try {
        const _0x204ef2 = _0x27916c[_0x1a3251(0x1c7)](0x0)['sourceLineText']();
        print(_0x204ef2);
        const [_0x8e3737, _0x3e6002, _0x4d8b75] = /\/\/ B(\d) (\w+)$/['exec'](_0x204ef2);
        assertEquals(step_count++, parseInt(_0x3e6002));
        if (_0x4d8b75 != _0x1a3251(0x1c8))
            _0x27916c[_0x1a3251(0x1c9)](Debug[_0x1a3251(0x1ca)][_0x4d8b75]);
    } catch (_0x35574a) {
        print(_0x35574a, _0x35574a[_0x1a3251(0x1cb)]), exception = _0x35574a;
    }
});
function f(_0x360c3c) {
    debugger;
    with ({}) {
        return _0x360c3c;
    }
}
f(0x2a), assertNull(exception), assertEquals(0x4, step_count);
