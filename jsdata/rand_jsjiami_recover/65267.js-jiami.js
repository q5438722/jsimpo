load('../base.js');
load('super.js');
load('default-constructor.js');
load('leaf-constructors.js');
var success = !![];
function PrintResult(_0x31a0bc, _0x4f4264) {
    print(_0x31a0bc + '-Classes(Score): ' + _0x4f4264);
}
function PrintError(_0x569646, _0x433d14) {
    PrintResult(_0x569646, _0x433d14);
    success = ![];
}
BenchmarkSuite['config']['doWarmup'] = undefined;
BenchmarkSuite['config']['doDeterministic'] = undefined;
BenchmarkSuite['RunSuites']({
    'NotifyResult': PrintResult,
    'NotifyError': PrintError
});