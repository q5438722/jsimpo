load(_0x5c0243(341));
const builder = new WasmModuleBuilder();
builder[_0x5c0243(342)](makeSig([
    kWasmI32,
    kWasmI32,
    kWasmI32
], [kWasmI32])), builder[_0x5c0243(343)](undefined, 0)[_0x5c0243(344)](kWasmI32, 2)[_0x5c0243(344)](kWasmF32, 2)[_0x5c0243(345)]([
    kExprI32Const,
    0,
    kExprI32Const,
    0,
    kExprI32Const,
    249,
    0,
    kExprI32Ior,
    kExprI32Eqz,
    kExprI32Add,
    kSimdPrefix,
    kExprI32x4Splat,
    kExprF32Const,
    70,
    93,
    0,
    0,
    kExprI32Const,
    131,
    1,
    kExprI32Const,
    131,
    1,
    kExprI32Const,
    131,
    1,
    kExprI32Add,
    kExprI32Add,
    kExprIf,
    kWasmI32,
    kExprI32Const,
    0,
    kExprElse,
    kExprI32Const,
    0,
    kExprEnd,
    kExprIf,
    kWasmI32,
    kExprI32Const,
    0,
    kExprElse,
    kExprI32Const,
    0,
    kExprEnd,
    kExprF32ReinterpretI32,
    kExprF32Max,
    kSimdPrefix,
    kExprF32x4Splat,
    kExprI32Const,
    131,
    1,
    kSimdPrefix,
    kExprI32x4Splat,
    kSimdPrefix,
    kExprI32x4Eq,
    kSimdPrefix,
    kExprI32x4Eq,
    kSimdPrefix,
    kExprV128AnyTrue,
    kExprEnd
]), builder[_0x5c0243(346)](_0x5c0243(347), 0);
const instance = builder[_0x5c0243(348)]();
print(instance[_0x5c0243(349)][_0x5c0243(347)](1, 2, 3));