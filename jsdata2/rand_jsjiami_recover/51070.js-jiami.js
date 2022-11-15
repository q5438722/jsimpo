'use strict';
const common = require('../common.js');
const bench = common['createBenchmark'](main, {
    'extraSize': [
        1,
        256,
        4 * 256
    ],
    'n': [800000]
});
function main({n, extraSize}) {
    const _0x283af1 = 4;
    const _0x47f41b = 256;
    const _0x1db3c2 = Array['from']({ 'length': _0x283af1 })['fill'](Buffer['allocUnsafe'](_0x47f41b));
    const _0x25ec18 = _0x283af1 * _0x47f41b + extraSize;
    bench['start']();
    for (let _0x45eca2 = 0; _0x45eca2 < n; _0x45eca2++) {
        Buffer['concat'](_0x1db3c2, _0x25ec18);
    }
    bench['end'](n);
}