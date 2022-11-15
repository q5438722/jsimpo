var _0x4e2d = [
    '1xRJWsI',
    '961878XFcUtm',
    '757944kXFUdM',
    '1gAVFtl',
    '1103189nZSEFp',
    '1zXEPAu',
    '35624gwzfyw',
    '497188KetZzO',
    '1592182cKnCAl',
    'test/mjsunit/wasm/wasm-module-builder.js',
    'addGlobal',
    'exportAs',
    'CompileError',
    'foo',
    'addFunction',
    'instantiate',
    'abc',
    'length',
    'concat',
    'Duplicate\x20export\x20name\x20\x27(abc){10,20}ab?c?...\x27\x20for\x20global\x200\x20and\x20global\x200',
    '70469QSdICx'
];
function _0x81ef(_0x506830, _0x5a7321) {
    return _0x81ef = function (_0x4e2d19, _0x81ef33) {
        _0x4e2d19 = _0x4e2d19 - 0xc7;
        var _0x222fe3 = _0x4e2d[_0x4e2d19];
        return _0x222fe3;
    }, _0x81ef(_0x506830, _0x5a7321);
}
var _0x59195f = _0x81ef;
(function (_0x571301, _0x162e7c) {
    var _0x14c650 = _0x81ef;
    while (!![]) {
        try {
            var _0x4c105b = parseInt(_0x14c650(0xc7)) * parseInt(_0x14c650(0xc8)) + -parseInt(_0x14c650(0xc9)) + -parseInt(_0x14c650(0xca)) + parseInt(_0x14c650(0xcb)) * parseInt(_0x14c650(0xcc)) + -parseInt(_0x14c650(0xcd)) * -parseInt(_0x14c650(0xce)) + -parseInt(_0x14c650(0xcf)) + parseInt(_0x14c650(0xd0));
            if (_0x4c105b === _0x162e7c)
                break;
            else
                _0x571301['push'](_0x571301['shift']());
        } catch (_0x3257a2) {
            _0x571301['push'](_0x571301['shift']());
        }
    }
}(_0x4e2d, 0x8eb06), load(_0x59195f(0xd1)), function duplicateGlobalExportName() {
    var _0x4380d7 = _0x59195f, _0x5ee14f = new WasmModuleBuilder();
    _0x5ee14f[_0x4380d7(0xd2)](kWasmI64, ![])[_0x4380d7(0xd3)]('g'), _0x5ee14f[_0x4380d7(0xd2)](kWasmI64, ![])[_0x4380d7(0xd3)]('g'), assertThrows(() => _0x5ee14f['instantiate'](), WebAssembly[_0x4380d7(0xd4)], /Duplicate export name 'g' for global 0 and global 1/);
}(), function exportNameClashWithFunction() {
    var _0x20f490 = _0x59195f, _0x3bed2f = new WasmModuleBuilder();
    _0x3bed2f['addGlobal'](kWasmI64, ![])[_0x20f490(0xd3)](_0x20f490(0xd5)), _0x3bed2f[_0x20f490(0xd6)]('f', kSig_v_v)['addBody']([])['exportAs']('foo'), assertThrows(() => _0x3bed2f[_0x20f490(0xd7)](), WebAssembly[_0x20f490(0xd4)], /Duplicate export name 'foo' for global 0 and function 0/);
}(), function veryLongExportName() {
    var _0x593e78 = _0x59195f, _0x42ebc0 = _0x593e78(0xd8);
    while (_0x42ebc0[_0x593e78(0xd9)] < 0x2000) {
        _0x42ebc0 = _0x42ebc0[_0x593e78(0xda)](_0x42ebc0);
    }
    var _0x25815f = new WasmModuleBuilder(), _0x1415a6 = _0x25815f['addGlobal'](kWasmI64, ![]);
    _0x1415a6['exportAs'](_0x42ebc0), _0x1415a6[_0x593e78(0xd3)](_0x42ebc0);
    var _0x5c71bc = _0x593e78(0xdb);
    assertThrows(() => _0x25815f[_0x593e78(0xd7)](), WebAssembly[_0x593e78(0xd4)], new RegExp(_0x5c71bc));
}());
