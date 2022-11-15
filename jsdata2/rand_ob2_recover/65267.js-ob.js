load('../base.js'), load('super.js'), load('default-constructor.js'), load(_0x233178(448));
function _0xdc12(_0x4141e6, _0x3688f3) {
    return _0xdc12 = function (_0x233e41, _0xdc120a) {
        _0x233e41 = _0x233e41 - 440;
        var _0x511969 = _0x233e[_0x233e41];
        return _0x511969;
    }, _0xdc12(_0x4141e6, _0x3688f3);
}
var success = !![];
function PrintResult(_0x26a8d5, _0x3d94d8) {
    var _0x19ea2c = _0x233178;
    print(_0x26a8d5 + _0x19ea2c(449) + _0x3d94d8);
}
function PrintError(_0x8a2546, _0x281b30) {
    PrintResult(_0x8a2546, _0x281b30), success = ![];
}
BenchmarkSuite['config'][_0x233178(450)] = undefined, BenchmarkSuite[_0x233178(451)]['doDeterministic'] = undefined, BenchmarkSuite[_0x233178(452)]({
    'NotifyResult': PrintResult,
    'NotifyError': PrintError
});