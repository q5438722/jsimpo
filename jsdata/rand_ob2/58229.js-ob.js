var _0x8cf8 = [
    '441987hLvxBc',
    '165415oObsoB',
    '1327sSJAwm',
    '706HVESLo',
    '124484iLmMPy',
    '924647jDxbne',
    '515894VwuOHd',
    'baz(object,\x20',
    '256526gVQJeO'
];
var _0x5b2330 = _0x4c1a;
(function (_0x25f84d, _0x1d903a) {
    var _0x299ebb = _0x4c1a;
    while (!![]) {
        try {
            var _0x3f1c80 = parseInt(_0x299ebb(0xa0)) + -parseInt(_0x299ebb(0xa1)) + parseInt(_0x299ebb(0xa2)) + parseInt(_0x299ebb(0xa3)) * parseInt(_0x299ebb(0xa4)) + parseInt(_0x299ebb(0xa5)) + -parseInt(_0x299ebb(0xa6)) + parseInt(_0x299ebb(0xa7));
            if (_0x3f1c80 === _0x1d903a)
                break;
            else
                _0x25f84d['push'](_0x25f84d['shift']());
        } catch (_0x2ff9d3) {
            _0x25f84d['push'](_0x25f84d['shift']());
        }
    }
}(_0x8cf8, 0x9a6e3), description('This\x20tests\x20that\x20inlining\x20a\x20function\x20that\x20does\x20not\x20use\x20this\x20does\x20not\x20result\x20in\x20this\x20being\x20lost\x20entirely,\x20if\x20we\x20succeed\x20in\x20doing\x20method\x20check\x20optimizations.'));
function foo(_0x131ecf, _0x3f4d01) {
    return _0x131ecf + _0x3f4d01;
}
function bar(_0x404cae, _0x4732c9) {
    return this['f'] + _0x404cae + _0x4732c9;
}
function baz(_0x3dcdcc, _0x5be435, _0x5d420c) {
    return _0x3dcdcc['stuff'](_0x5be435, _0x5d420c);
}
var functionToCall = foo, offset = 0x0;
function _0x4c1a(_0x52382d, _0x4c5e68) {
    return _0x4c1a = function (_0x8cf8a5, _0x4c1a42) {
        _0x8cf8a5 = _0x8cf8a5 - 0xa0;
        var _0x33eef7 = _0x8cf8[_0x8cf8a5];
        return _0x33eef7;
    }, _0x4c1a(_0x52382d, _0x4c5e68);
}
for (var i = 0x0; i < 0x3e8; ++i) {
    i == 0x258 && (functionToCall = bar, offset = 0x2a);
    var object = {};
    object['stuff'] = functionToCall, object['f'] = 0x2a, shouldBe(_0x5b2330(0xa8) + i + ',\x20' + i * 0x2 + ')', '' + (offset + i + i * 0x2));
}
