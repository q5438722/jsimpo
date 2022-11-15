utils['load']('test/inspector/wasm-inspector-test.js');
let {session, contextGroup, Protocol} = InspectorTest['start']('Tests reported code offsets on wasm scripts');
let sentinel = 0;
function addHeader(_0x1c87c8, _0x57ea4f) {
    _0x1c87c8['emit_header']();
    var _0x1af1d2 = new Binary();
    _0x1af1d2['emit_u8'](0);
    _0x1af1d2['emit_u8'](10);
    _0x1af1d2['emit_string']('sentinel');
    _0x1af1d2['emit_bytes']([sentinel]);
    ++sentinel;
    _0x1c87c8['emit_bytes'](_0x1af1d2['trunc_buffer']());
    _0x1c87c8['emit_section'](kTypeSectionCode, _0x447fcf => {
        _0x447fcf['emit_u32v'](1);
        _0x447fcf['emit_u8'](kWasmFunctionTypeForm);
        _0x447fcf['emit_u32v'](0);
        _0x447fcf['emit_u32v'](0);
    });
    _0x1c87c8['emit_section'](kFunctionSectionCode, _0x5e6f9e => {
        _0x5e6f9e['emit_u32v'](_0x57ea4f);
        for (let _0x458f25 = 0; _0x458f25 < _0x57ea4f; ++_0x458f25) {
            _0x5e6f9e['emit_u32v'](0);
        }
    });
}
function createModuleWithNoCodeSection() {
    let _0x2a429e = new Binary();
    addHeader(_0x2a429e, 0);
    return _0x2a429e['trunc_buffer']();
}
function createModuleWithEmptyCodeSection() {
    let _0x3624db = new Binary();
    addHeader(_0x3624db, 0);
    _0x3624db['emit_u8'](kCodeSectionCode);
    _0x3624db['emit_u32v'](1);
    _0x3624db['emit_u32v'](0);
    return _0x3624db['trunc_buffer']();
}
function createModuleWithFiveByteSectionLength() {
    let _0x18c897 = new Binary();
    addHeader(_0x18c897, 1);
    _0x18c897['emit_u8'](kCodeSectionCode);
    _0x18c897['emit_bytes']([
        132,
        128,
        128,
        128,
        0
    ]);
    _0x18c897['emit_u32v'](1);
    _0x18c897['emit_u32v'](2);
    _0x18c897['emit_u32v'](0);
    _0x18c897['emit_bytes']([kExprEnd]);
    return _0x18c897['trunc_buffer']();
}
function createModuleWithFiveBytePayload() {
    let _0xb40bac = new Binary();
    addHeader(_0xb40bac, 1);
    _0xb40bac['emit_u8'](kCodeSectionCode);
    _0xb40bac['emit_bytes']([
        136,
        128,
        128,
        128,
        0
    ]);
    _0xb40bac['emit_bytes']([
        129,
        128,
        128,
        128,
        0
    ]);
    _0xb40bac['emit_u32v'](2);
    _0xb40bac['emit_u32v'](0);
    _0xb40bac['emit_bytes']([kExprEnd]);
    return _0xb40bac['trunc_buffer']();
}
function compileSync(_0x5dcca2) {
    new WebAssembly['Module'](new Uint8Array(_0x5dcca2));
}
function compileAsync(_0x272e95) {
    WebAssembly['compile'](new Uint8Array(_0x272e95));
}
contextGroup['addScript']('' + compileSync + compileAsync, 0, 0, 'v8://test/compileFunctions');
InspectorTest['runAsyncTestSuite']([async function test() {
        Protocol['Debugger']['enable']();
        let _0x333b63 = new Map();
        let _0x44ee8f = [
            createModuleWithNoCodeSection,
            createModuleWithEmptyCodeSection,
            createModuleWithFiveByteSectionLength,
            createModuleWithFiveBytePayload
        ];
        for (let _0x534318 of _0x44ee8f) {
            if ('zeeVJ' !== 'zeeVJ') {
                WebAssembly['compile'](new Uint8Array(bytes));
            } else {
                session['Protocol']['Runtime']['evaluate']({ 'expression': '\n          compileSync([' + _0x534318() + ']);\n          compileAsync([' + _0x534318() + ']);\n        ' });
                for (let _0x15a46f = 0; _0x15a46f < 2;) {
                    ({params} = await Protocol['Debugger']['onceScriptParsed']());
                    if (!params['url']['startsWith']('wasm://'))
                        continue;
                    if (!_0x333b63['has'](params['scriptId'])) {
                        _0x333b63['set'](params['scriptId'], _0x333b63['size']);
                    }
                    let _0x303f88 = _0x333b63['get'](params['scriptId']);
                    InspectorTest['log']('Wasm script parsed: ID ' + _0x303f88 + ', startColumn: ' + params['startColumn'] + ', endColumn: ' + params['endColumn'] + ', codeOffset: ' + params['codeOffset']);
                    ++_0x15a46f;
                }
            }
        }
    }]);