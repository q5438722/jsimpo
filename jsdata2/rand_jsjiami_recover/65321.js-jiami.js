load('../base.js');
load('tagged-template.js');
load('array-indexof-includes.js');
load('spread-call.js');
load('has-own-property.js');
load('array-map.js');
load('array-reduce.js');
function PrintResult(_0x3cc5f2, _0x4742ed) {
    console['log'](_0x3cc5f2);
    console['log'](_0x3cc5f2 + '-Numbers(Score): ' + _0x4742ed);
}
function PrintError(_0x409c3b, _0x2bc904) {
    PrintResult(_0x409c3b, _0x2bc904);
}
BenchmarkSuite['config']['doWarmup'] = undefined;
BenchmarkSuite['config']['doDeterministic'] = undefined;
BenchmarkSuite['RunSuites']({
    'NotifyResult': PrintResult,
    'NotifyError': PrintError
});