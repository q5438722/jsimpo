var global = this;
assertEquals('object', typeof global);
var s = new Set();
s['add'](global), assertTrue(s['has'](global));
for (var i = 0x1cd * 0x1 + -0x2 * 0xaab + 0x683 * 0x3; i < -0xa99 * -0x1 + 0x13a9 * 0x1 + -0x1dde; i++) {
    s['add'](i);
}
assertTrue(s['has'](global));
