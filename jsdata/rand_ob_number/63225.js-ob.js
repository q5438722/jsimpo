var threw = ![];
try {
    var obj = new Function['__proto__']();
} catch (_0x59aa41) {
    assertInstanceof(_0x59aa41, TypeError), threw = !![];
}
assertTrue(threw);
