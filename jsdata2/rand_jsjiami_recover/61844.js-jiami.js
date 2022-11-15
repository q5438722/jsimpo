function test() {
    try {
        test(1, test(1));
    } catch (_0x525d5e) {
        if ('nMbqZ' !== 'vifvj') {
            assertFalse(delete _0x525d5e, 'deleting catch variable');
            assertEquals(42, _0x525d5e);
        } else {
            exception = !![];
        }
    }
}
var exception = ![];
try {
    test();
} catch (_0x5e2efe) {
    exception = !![];
}
assertTrue(exception);