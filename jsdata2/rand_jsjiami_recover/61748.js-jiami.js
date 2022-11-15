function f() {
    try {
        f();
    } catch (_0x4deedb) {
        try {
            Realm['create']();
        } catch (_0x6164e0) {
            quit();
        }
    }
}
f();