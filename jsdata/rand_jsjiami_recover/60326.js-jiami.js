function f() {
    throw 'boom';
    try {
    } catch (_0x2552ef) {
    }
}
assertThrows(f);