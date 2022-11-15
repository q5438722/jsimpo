load('../base.js'), load('super.js'), load('default-constructor.js'), load('leaf-constructors.js');
var success = !![];
function PrintResult(_0x524c18, _0x3b0663) {
    print(_0x524c18 + '-Classes(Score):\x20' + _0x3b0663);
}
function PrintError(_0x6ea181, _0x5ff52b) {
    PrintResult(_0x6ea181, _0x5ff52b), success = ![];
}
BenchmarkSuite['config']['doWarmup'] = undefined, BenchmarkSuite['config']['doDeterministic'] = undefined, BenchmarkSuite['RunSuites']({
    'NotifyResult': PrintResult,
    'NotifyError': PrintError
});
