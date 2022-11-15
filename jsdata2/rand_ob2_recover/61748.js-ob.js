function f() {
    try {
        f();
    } catch (_0x49cbb6) {
        try {
            Realm['create']();
        } catch (_0x1188cb) {
            quit();
        }
    }
}
f();