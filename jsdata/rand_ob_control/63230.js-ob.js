var i, s = '';
for (i = 0x0; i < 0x400; i++) {
    s = s + (i + (i + 0x1)), s = s['substring'](0x1);
}
assertEquals(0x39, s['charCodeAt'](0x0));
