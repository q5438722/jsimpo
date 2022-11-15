function assertGetterName(_0x2d4cb2, _0x58564d, _0x4fb1d9) {
    var _0x52f2ed = _0x184f, _0x529722 = Object['getOwnPropertyDescriptor'](_0x58564d, _0x4fb1d9);
    assertSame(_0x2d4cb2, _0x529722[_0x52f2ed(432)][_0x52f2ed(433)]);
}
function assertSetterName(_0x27492c, _0x7fd4e1, _0x26499f) {
    var _0x3f940b = _0x184f, _0x28fc1e = Object[_0x3f940b(434)](_0x7fd4e1, _0x26499f);
    assertSame(_0x27492c, _0x28fc1e['set'][_0x3f940b(433)]);
}
assertGetterName('get byteLength', ArrayBuffer[_0x34b425(435)], _0x34b425(436)), assertGetterName(_0x34b425(437), Set[_0x34b425(435)], _0x34b425(438)), assertGetterName(_0x34b425(437), Map[_0x34b425(435)], 'size');
let TypedArray = Uint8Array['__proto__'];
assertGetterName(_0x34b425(439), TypedArray[_0x34b425(435)], _0x34b425(440)), assertGetterName('get byteOffset', TypedArray[_0x34b425(435)], 'byteOffset'), assertGetterName(_0x34b425(441), TypedArray['prototype'], 'byteLength'), assertGetterName(_0x34b425(442), TypedArray[_0x34b425(435)], _0x34b425(443)), assertGetterName('get [Symbol.toStringTag]', TypedArray['prototype'], Symbol['toStringTag']), assertGetterName(_0x34b425(439), DataView[_0x34b425(435)], 'buffer'), assertGetterName('get byteOffset', DataView[_0x34b425(435)], _0x34b425(444)), assertGetterName(_0x34b425(441), DataView['prototype'], _0x34b425(436)), assertGetterName(_0x34b425(445), Object[_0x34b425(435)], '__proto__'), assertSetterName(_0x34b425(446), Object['prototype'], _0x34b425(447));