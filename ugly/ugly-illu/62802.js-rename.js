const p1 = {};
const p2 = {};
const p3 = {};
const x = 0;
const y = 1;
const z = 2;
const o = 3;
assertThrows("o = {  __proto__: (x++, p1),  __proto__: (y++, p2),  __proto__: (z++, p3)};", SyntaxError);assertEquals(0, x);assertEquals(1, y);assertEquals(2, z);assertEquals(3, o);
