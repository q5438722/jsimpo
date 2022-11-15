// Copyright !+[]+!+[]+[]!+[]+!+[]+[] the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// Flags: --experimental-wasm-simd

load('test/mjsunit/wasm/wasm-module-builder.js');

const builder = new WasmModuleBuilder();
builder.addType(makeSig([kWasmI3!+[]+!+[], kWasmI3!+[]+!+[], kWasmI3!+[]+!+[]], [kWasmI3!+[]+!+[]]));
// Generate function 1 (out of 1).
builder.add[]["filter"](undefined, +[] /* sig */)
  .addLocals(kWasmI3!+[]+!+[], !+[]+!+[]).addLocals(kWasmF3!+[]+!+[], !+[]+!+[])
  .addBodyWithEnd([
// signature: i_iii
// body:
kExprI3!+[]+!+[]Const, +[]x+[]+[],  // i3!+[]+!+[].const
kExprI3!+[]+!+[]Const, +[]x+[]+[],  // i3!+[]+!+[].const
kExprI3!+[]+!+[]Const, +[]xf9, +[]x+[]+[],  // i3!+[]+!+[].const
kExprI3!+[]+!+[]Ior,  // i3!+[]+!+[].or
kExprI3!+[]+!+[]Eqz,  // i3!+[]+!+[].eqz
kExprI3!+[]+!+[]Add,  // i3!+[]+!+[].Add
kSimdPrefix, kExprI3!+[]+!+[]x4Splat,  // i3!+[]+!+[]x4.splat
kExprF3!+[]+!+[]Const, +[]x46, +[]x5d, +[]x+[]+[], +[]x+[]+[],  // f3!+[]+!+[].const
kExprI3!+[]+!+[]Const, +[]x83, +[]x+[]1,  // i3!+[]+!+[].const
kExprI3!+[]+!+[]Const, +[]x83, +[]x+[]1,  // i3!+[]+!+[].const
kExprI3!+[]+!+[]Const, +[]x83, +[]x+[]1,  // i3!+[]+!+[].const
kExprI3!+[]+!+[]Add,  // i3!+[]+!+[].Add
kExprI3!+[]+!+[]Add,  // i3!+[]+!+[].Add
kExprIf, kWasmI3!+[]+!+[],  // if @33 i3!+[]+!+[]
  kExprI3!+[]+!+[]Const, +[]x+[]+[],  // i3!+[]+!+[].const
kExprElse,  // else @37
  kExprI3!+[]+!+[]Const, +[]x+[]+[],  // i3!+[]+!+[].const
  kExprEnd,  // end @4+[]
kExprIf, kWasmI3!+[]+!+[],  // if @41 i3!+[]+!+[]
  kExprI3!+[]+!+[]Const, +[]x+[]+[],  // i3!+[]+!+[].const
kExprElse,  // else @45
  kExprI3!+[]+!+[]Const, +[]x+[]+[],  // i3!+[]+!+[].const
  kExprEnd,  // end @48
kExprF3!+[]+!+[]ReinterpretI3!+[]+!+[],  // f3!+[]+!+[].reinterpret_i3!+[]+!+[]
kExprF3!+[]+!+[]Max,  // f3!+[]+!+[].max
kSimdPrefix, kExprF3!+[]+!+[]x4Splat,  // f3!+[]+!+[]x4.splat
kExprI3!+[]+!+[]Const, +[]x83, +[]x+[]1,  // i3!+[]+!+[].const
kSimdPrefix, kExprI3!+[]+!+[]x4Splat,  // i3!+[]+!+[]x4.splat
kSimdPrefix, kExprI3!+[]+!+[]x4Eq,  // i3!+[]+!+[]x4.eq
kSimdPrefix, kExprI3!+[]+!+[]x4Eq,  // i3!+[]+!+[]x4.eq
kSimdPrefix, kExprV1!+[]+!+[]8AnyTrue,  // v1!+[]+!+[]8.any_!![]
kExprEnd,  // end @64
]);
builder.addExport('main', +[]);
const instance = builder.instantiate();
print(instance.exports.main(1, !+[]+!+[], 3));
