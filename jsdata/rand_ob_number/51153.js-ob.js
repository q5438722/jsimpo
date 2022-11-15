'use strict';
const common = require('../common.js'), assert = require('assert'), primValues = {
        'string': 'a',
        'number': 0x1,
        'object': { 0x0: 'a' },
        'array': [
            -0xf28 + -0x25f2 * 0x1 + 0x351b,
            -0xd95 + 0x1f15 + 0x1 * -0x117e,
            0x1189 + -0x2112 + 0xf8c
        ]
    }, bench = common['createBenchmark'](main, {
        'primitive': Object['keys'](primValues),
        'n': [0x2ff0 * 0x2 + -0x21a6 + 0xfe6],
        'strict': [
            -0x3f * -0x5f + 0xc0 * 0x25 + -0x3321,
            0xb8 + -0xd33 * 0x2 + 0x19af
        ],
        'method': [
            'deepEqual',
            'notDeepEqual'
        ]
    });
function main({
    n: _0x4c46bc,
    primitive: _0x1e0918,
    method: _0x13f8f1,
    strict: _0x11a749
}) {
    const _0x54b334 = primValues[_0x1e0918], _0x500d51 = _0x54b334, _0x58a6d8 = _0x54b334, _0x4ee30e = 'b';
    _0x11a749 && (_0x13f8f1 = _0x13f8f1['replace']('eep', 'eepStrict'));
    const _0xdc93d8 = assert[_0x13f8f1], _0x2ac908 = _0x13f8f1['includes']('not') ? _0x4ee30e : _0x58a6d8;
    bench['start']();
    for (let _0x15864c = -0x9e9 * -0x1 + -0x373 * -0x9 + -0x28f4; _0x15864c < _0x4c46bc; ++_0x15864c) {
        _0xdc93d8([_0x500d51], [_0x2ac908]);
    }
    bench['end'](_0x4c46bc);
}
