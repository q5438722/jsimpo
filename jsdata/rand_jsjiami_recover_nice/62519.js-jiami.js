'use strict';
var global = this;
assertEquals("object", typeof global);
var s = new Set;
s["add"](global);
assertTrue(s["has"](global));
var i = 0;
for (; i < 100; i++) {
  s["add"](i);
}
assertTrue(s["has"](global));

