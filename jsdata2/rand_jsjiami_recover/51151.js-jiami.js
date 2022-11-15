'use strict';
const common = require('../common.js');
const {PerformanceObserver, performance} = require('perf_hooks');
const bench = common['createBenchmark'](main, {
    'n': [100000],
    'observe': [
        'all',
        'measure'
    ]
});
function test() {
    performance['mark']('a');
    performance['mark']('b');
    performance['measure']('a to b', 'a', 'b');
}
function main({n, observe}) {
    const _0x33f730 = observe === 'all' ? [
        'mark',
        'measure'
    ] : [observe];
    const _0x321b88 = new PerformanceObserver(() => {
        bench['end'](n);
    });
    _0x321b88['observe']({
        'entryTypes': _0x33f730,
        'buffered': !![]
    });
    bench['start']();
    performance['mark']('start');
    for (let _0x195944 = 0; _0x195944 < 100000; _0x195944++)
        test();
}