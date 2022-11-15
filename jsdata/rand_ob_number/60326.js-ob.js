function f() {
    throw 'boom';
    try {
    } catch (_0x119217) {
    }
}
assertThrows(f);
