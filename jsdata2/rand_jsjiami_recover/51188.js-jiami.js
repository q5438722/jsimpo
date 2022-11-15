'use strict';
const common = require('../common.js');
const bench = common['createBenchmark'](main, { 'n': [100] });
const vm = require('vm');
const ctxFn = new vm['Script']('\n  var b = Math.random();\n  var c = a + b;\n');
function main({n}) {
    bench['start']();
    let _0x25abb7;
    for (let _0x4217f1 = 0; _0x4217f1 < n; _0x4217f1++) {
        _0x25abb7 = vm['createContext']({ 'a': 'a' });
    }
    bench['end'](n);
    ctxFn['runInContext'](_0x25abb7);
}