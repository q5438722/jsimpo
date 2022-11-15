var threw = ![];
try {
    var obj = new Function['__proto__']();
} catch (_0x4c9db8) {
    assertInstanceof(_0x4c9db8, TypeError);
    threw = !![];
}
assertTrue(threw);