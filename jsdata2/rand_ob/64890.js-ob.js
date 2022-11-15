const _0x2698 = [
    'frame',
    'sourceLineText',
    'VqLzE',
    'exec',
    'JyoTb',
    'vkvyE',
    'obekP',
    'prepareStep',
    'StepAction',
    'stack',
    '654835JWJaMY',
    '1877SCXUBp',
    '457dXyfwM',
    '1099493epDUYn',
    '572568WwbfgO',
    '1154909WWAiry',
    '641063MGSmyJ',
    '5vCGVFg',
    '248801VGtEzG',
    'Debug',
    'setListener',
    'Continue',
    'DebugEvent',
    'Break'
];
const _0x171617 = _0x755e;
(function (_0x12a94b, _0x196bb4) {
    const _0x539665 = _0x755e;
    while (!![]) {
        try {
            const _0x388ec9 = parseInt(_0x539665(0x93)) + -parseInt(_0x539665(0x94)) * parseInt(_0x539665(0x95)) + parseInt(_0x539665(0x96)) + -parseInt(_0x539665(0x97)) + parseInt(_0x539665(0x98)) + parseInt(_0x539665(0x99)) + -parseInt(_0x539665(0x9a)) * parseInt(_0x539665(0x9b));
            if (_0x388ec9 === _0x196bb4)
                break;
            else
                _0x12a94b['push'](_0x12a94b['shift']());
        } catch (_0x5075fb) {
            _0x12a94b['push'](_0x12a94b['shift']());
        }
    }
}(_0x2698, 0x12419c + 0x1825c4 + 0x4d6f5 * -0x6));
const Debug = debug[_0x171617(0x9c)];
let exception = null, step_count = -0xd * 0x71 + -0x361 + 0x91e;
Debug[_0x171617(0x9d)]((_0x39f2fd, _0x379dd2, _0x1e2c33, _0x2a3878) => {
    const _0x24dfd4 = _0x171617, _0x4aefc5 = {
            'VqLzE': function (_0x2ffe01, _0x32016c) {
                return _0x2ffe01(_0x32016c);
            },
            'JyoTb': function (_0x27537c, _0x2355d5) {
                return _0x27537c(_0x2355d5);
            },
            'vkvyE': function (_0x5a2a6e, _0x307683) {
                return _0x5a2a6e != _0x307683;
            },
            'obekP': _0x24dfd4(0x9e)
        };
    if (_0x39f2fd != Debug[_0x24dfd4(0x9f)][_0x24dfd4(0xa0)])
        return;
    try {
        const _0x170943 = _0x379dd2[_0x24dfd4(0xa1)](-0x51 * 0x2 + -0xb94 + 0xc36)[_0x24dfd4(0xa2)]();
        _0x4aefc5[_0x24dfd4(0xa3)](print, _0x170943);
        const [_0x2bae9b, _0x4a5d8b, _0x5c0092] = /\/\/ B(\d) (\w+)$/[_0x24dfd4(0xa4)](_0x170943);
        assertEquals(step_count++, _0x4aefc5[_0x24dfd4(0xa5)](parseInt, _0x4a5d8b));
        if (_0x4aefc5[_0x24dfd4(0xa6)](_0x5c0092, _0x4aefc5[_0x24dfd4(0xa7)]))
            _0x379dd2[_0x24dfd4(0xa8)](Debug[_0x24dfd4(0xa9)][_0x5c0092]);
    } catch (_0xb258ba) {
        print(_0xb258ba, _0xb258ba[_0x24dfd4(0xaa)]), exception = _0xb258ba;
    }
});
function _0x755e(_0x5c814a, _0x599959) {
    return _0x755e = function (_0x1df319, _0x3bb253) {
        _0x1df319 = _0x1df319 - (0x16c6 + 0x8ab + -0x1ede);
        let _0x5cf751 = _0x2698[_0x1df319];
        return _0x5cf751;
    }, _0x755e(_0x5c814a, _0x599959);
}
function f(_0x2a814d) {
    debugger;
    with ({}) {
        return _0x2a814d;
    }
}
f(-0x2608 * -0x1 + 0x4c * -0x7b + -0x15a), assertNull(exception), assertEquals(0x4be + 0x2 * 0xe8f + -0x21d8, step_count);
