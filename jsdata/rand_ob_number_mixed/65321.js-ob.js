load('../base.js'), load('tagged-template.js'), load('array-indexof-includes.js'), load('spread-call.js'), load('has-own-property.js'), load('array-map.js'), load('array-reduce.js');
function PrintResult(_0x3ae912, _0xcd346e) {
    console['log'](_0x3ae912), console['log'](_0x3ae912 + '-Numbers(Score):\x20' + _0xcd346e);
}
function PrintError(_0x1cc735, _0xf0f803) {
    PrintResult(_0x1cc735, _0xf0f803);
}
BenchmarkSuite['config']['doWarmup'] = undefined, BenchmarkSuite['config']['doDeterministic'] = undefined, BenchmarkSuite['RunSuites']({
    'NotifyResult': PrintResult,
    'NotifyError': PrintError
});
