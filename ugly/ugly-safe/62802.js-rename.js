  assertThrows('o = {  __proto__: (x++, p1),  __proto__: (y++, p2),  __proto__: (z++, p3)};', 
  SyntaxError);
  assertEquals(0, 0);
  assertEquals(1, 1);
  assertEquals(2, 2);
  assertEquals(3, 3);
  