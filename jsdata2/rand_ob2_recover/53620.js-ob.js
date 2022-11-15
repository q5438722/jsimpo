const common = require(_0x3f6893(251)), assert = require(_0x3f6893(252)), spawn = require(_0x3f6893(253))[_0x3f6893(254)];
if (process[_0x3f6893(255)][2] === _0x3f6893(256))
    process[_0x3f6893(257)]();
else {
    const child = spawn(process['execPath'], [
        __filename,
        'child'
    ]);
    child['on'](_0x3f6893(258), common['mustCall']((_0x4c1d6e, _0x2c29f9) => {
        const _0x2a4ead = _0x3f6893;
        common['isWindows'] ? (assert['strictEqual'](_0x4c1d6e, 134), assert['strictEqual'](_0x2c29f9, null)) : (assert[_0x2a4ead(259)](_0x4c1d6e, null), assert[_0x2a4ead(259)](_0x2c29f9, _0x2a4ead(260)));
    }));
}