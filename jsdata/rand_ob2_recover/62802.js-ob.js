var p1 = {}, p2 = {}, p3 = {}, x = 0, y = 1, z = 2, o = 3;
assertThrows('o = {' + _0x12c2bd(166) + _0x12c2bd(167) + '  __proto__: (z++, p3)' + '};', SyntaxError), assertEquals(0, x), assertEquals(1, y), assertEquals(2, z), assertEquals(3, o);