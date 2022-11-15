load('../base.js');
load('toLocaleString.js');
function PrintResult(_0x519123, _0x3de733) {
    console['log'](_0x519123);
    console['log'](_0x519123 + '-Dates(Score): ' + _0x3de733);
}
function PrintError(_0x289177, _0x57c64e) {
    PrintResult(_0x289177, _0x57c64e);
}
BenchmarkSuite['config']['doWarmup'] = undefined;
BenchmarkSuite['config']['doDeterministic'] = undefined;
BenchmarkSuite['RunSuites']({
    'NotifyResult': PrintResult,
    'NotifyError': PrintError
});