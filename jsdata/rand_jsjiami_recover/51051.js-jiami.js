'use strict';
const common = require('../common.js');
const bench = common['createBenchmark'](main, {
    'size': [
        16,
        512,
        4096,
        16386
    ],
    'args': [
        1,
        2,
        5
    ],
    'n': [1000000]
});
function main({n, size, args}) {
    const _0x14de77 = Buffer['alloc'](size, 'a');
    const _0x3652a7 = Buffer['alloc'](size, 'a');
    const _0x2b1f27 = _0x14de77['length'];
    const _0x15b200 = _0x3652a7['length'];
    _0x3652a7[size - 1] = 'b'['charCodeAt'](0);
    switch (args) {
    case 2:
        _0x14de77['compare'](_0x3652a7, 0);
        bench['start']();
        for (let _0x540530 = 0; _0x540530 < n; _0x540530++) {
            _0x14de77['compare'](_0x3652a7, 0);
        }
        bench['end'](n);
        break;
    case 3:
        _0x14de77['compare'](_0x3652a7, 0, _0x15b200);
        bench['start']();
        for (let _0x40cb85 = 0; _0x40cb85 < n; _0x40cb85++) {
            _0x14de77['compare'](_0x3652a7, 0, _0x15b200);
        }
        bench['end'](n);
        break;
    case 4:
        _0x14de77['compare'](_0x3652a7, 0, _0x15b200, 0);
        bench['start']();
        for (let _0x2cc7a0 = 0; _0x2cc7a0 < n; _0x2cc7a0++) {
            _0x14de77['compare'](_0x3652a7, 0, _0x15b200, 0);
        }
        bench['end'](n);
        break;
    case 5:
        _0x14de77['compare'](_0x3652a7, 0, _0x15b200, 0, _0x2b1f27);
        bench['start']();
        for (let _0x54135e = 0; _0x54135e < n; _0x54135e++) {
            _0x14de77['compare'](_0x3652a7, 0, _0x15b200, 0, _0x2b1f27);
        }
        bench['end'](n);
        break;
    default:
        _0x14de77['compare'](_0x3652a7);
        bench['start']();
        for (let _0x31916f = 0; _0x31916f < n; _0x31916f++) {
            _0x14de77['compare'](_0x3652a7);
        }
        bench['end'](n);
    }
}