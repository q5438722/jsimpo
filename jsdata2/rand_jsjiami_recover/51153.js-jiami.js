'use strict';
const common = require('../common.js');
const assert = require('assert');
const primValues = {
    'object': { 0: 'a' },
    'array': [
        1,
        2,
        3
    ]
};
const bench = common['createBenchmark'](main, {
    'primitive': Object['keys'](primValues),
    'n': [20000],
    'strict': [
        0,
        1
    ],
    'method': [
        'deepEqual',
        'notDeepEqual'
    ]
});
function main({n, primitive, method, strict}) {
    const _0x3022c0 = primValues[primitive];
    const _0x311306 = _0x3022c0;
    const _0x3f27d9 = _0x3022c0;
    const _0xa028a5 = 'b';
    if (strict) {
        method = method['replace']('eep', 'eepStrict');
    }
    const _0x29c594 = assert[method];
    const _0x439a43 = method['includes']('not') ? _0xa028a5 : _0x3f27d9;
    bench['start']();
    for (let _0x2188b5 = 0; _0x2188b5 < n; ++_0x2188b5) {
        _0x29c594([_0x311306], [_0x439a43]);
    }
    bench['end'](n);
}