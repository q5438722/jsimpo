utils.load("test/inspector/wasm-inspector-test.js");var { session, contextGroup, Protocol } = InspectorTest.start("Tests reported code offsets on wasm scripts");
var sentinel = 0;
function addHeader(e, i) {
          e.emit_header();const t = new Binary();
          t.emit_u8(0);t.emit_u8(10);t.emit_string("sentinel");t.emit_bytes([sentinel]);++sentinel;e.emit_bytes(t.trunc_buffer());e.emit_section(kTypeSectionCode, e => {
                    e.emit_u32v(1);e.emit_u8(kWasmFunctionTypeForm);e.emit_u32v(0);e.emit_u32v(0);
          });e.emit_section(kFunctionSectionCode, t => {
                    t.emit_u32v(i);for (let e = 0; e < i; ++e) {
                              t.emit_u32v(0);
                    }
          });
}function createModuleWithNoCodeSection() {
          const e = new Binary();
          addHeader(e, 0);return e.trunc_buffer();
}function createModuleWithEmptyCodeSection() {
          const e = new Binary();
          addHeader(e, 0);e.emit_u8(kCodeSectionCode);e.emit_u32v(1);e.emit_u32v(0);return e.trunc_buffer();
}function createModuleWithFiveByteSectionLength() {
          const e = new Binary();
          addHeader(e, 1);e.emit_u8(kCodeSectionCode);e.emit_bytes([132, 128, 128, 128, 0]);e.emit_u32v(1);e.emit_u32v(2);e.emit_u32v(0);e.emit_bytes([kExprEnd]);return e.trunc_buffer();
}function createModuleWithFiveBytePayload() {
          const e = new Binary();
          addHeader(e, 1);e.emit_u8(kCodeSectionCode);e.emit_bytes([136, 128, 128, 128, 0]);e.emit_bytes([129, 128, 128, 128, 0]);e.emit_u32v(2);e.emit_u32v(0);e.emit_bytes([kExprEnd]);return e.trunc_buffer();
}function compileSync(e) {
          new WebAssembly.Module(new Uint8Array(e));
}function compileAsync(e) {
          WebAssembly.compile(new Uint8Array(e));
}contextGroup.addScript(`${compileSync}${compileAsync}`, 0, 0, "v8://test/compileFunctions");InspectorTest.runAsyncTestSuite([async function e() {
          Protocol.Debugger.enable();const i = new Map();
          const t = [createModuleWithNoCodeSection, createModuleWithEmptyCodeSection, createModuleWithFiveByteSectionLength, createModuleWithFiveBytePayload];
          for (let e of t) {
                    session.Protocol.Runtime.evaluate({ expression: `
          compileSync([${e()}]);
          compileAsync([${e()}]);
        ` });for (let t = 0; t < 2;) {
                              ({ params: params } = await Protocol.Debugger.onceScriptParsed());if (!params.url.startsWith("wasm://")) continue;if (!i.has(params.scriptId)) {
                                        i.set(params.scriptId, i.size);
                              }const e = i.get(params.scriptId);
                              InspectorTest.log(`Wasm script parsed: ID ${e}, startColumn: ${params.startColumn}, endColumn: ${params.endColumn}, codeOffset: ${params.codeOffset}`);++t;
                    }
          }
}]);
