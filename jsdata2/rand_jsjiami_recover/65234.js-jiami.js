'use strict';
load('../base.js');
load('abstract-equality.js');
var success = !![];
function PrintResult(_0x341c7b, _0x4a97f3) {
    print('Operators-' + _0x341c7b + '(Score): ' + _0x4a97f3);
}
function PrintError(_0x1c11b2, _0x2f3454) {
    PrintResult(_0x1c11b2, _0x2f3454);
    success = ![];
}
BenchmarkSuite['config']['doWarmup'] = undefined;
BenchmarkSuite['config']['doDeterministic'] = undefined;
BenchmarkSuite['RunSuites']({
    'NotifyResult': PrintResult,
    'NotifyError': PrintError
});