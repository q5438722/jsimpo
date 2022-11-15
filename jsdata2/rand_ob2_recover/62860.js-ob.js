load(_0x59195f(209)), function duplicateGlobalExportName() {
    var _0x4380d7 = _0x59195f, _0x5ee14f = new WasmModuleBuilder();
    _0x5ee14f[_0x4380d7(210)](kWasmI64, ![])[_0x4380d7(211)]('g'), _0x5ee14f[_0x4380d7(210)](kWasmI64, ![])[_0x4380d7(211)]('g'), assertThrows(() => _0x5ee14f['instantiate'](), WebAssembly[_0x4380d7(212)], /Duplicate export name 'g' for global 0 and global 1/);
}(), function exportNameClashWithFunction() {
    var _0x20f490 = _0x59195f, _0x3bed2f = new WasmModuleBuilder();
    _0x3bed2f['addGlobal'](kWasmI64, ![])[_0x20f490(211)](_0x20f490(213)), _0x3bed2f[_0x20f490(214)]('f', kSig_v_v)['addBody']([])['exportAs']('foo'), assertThrows(() => _0x3bed2f[_0x20f490(215)](), WebAssembly[_0x20f490(212)], /Duplicate export name 'foo' for global 0 and function 0/);
}(), function veryLongExportName() {
    var _0x593e78 = _0x59195f, _0x42ebc0 = _0x593e78(216);
    while (_0x42ebc0[_0x593e78(217)] < 8192) {
        _0x42ebc0 = _0x42ebc0[_0x593e78(218)](_0x42ebc0);
    }
    var _0x25815f = new WasmModuleBuilder(), _0x1415a6 = _0x25815f['addGlobal'](kWasmI64, ![]);
    _0x1415a6['exportAs'](_0x42ebc0), _0x1415a6[_0x593e78(211)](_0x42ebc0);
    var _0x5c71bc = _0x593e78(219);
    assertThrows(() => _0x25815f[_0x593e78(215)](), WebAssembly[_0x593e78(212)], new RegExp(_0x5c71bc));
}();