var threw = ![];
try {
    var obj = new Function['__proto__']();
} catch (_0x5a11ba) {
    assertInstanceof(_0x5a11ba, TypeError), threw = !![];
}
assertTrue(threw);
