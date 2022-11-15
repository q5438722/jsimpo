const common = require(_0x49f176(291)), assert = require('assert'), addon = require('./build/' + common[_0x49f176(292)] + _0x49f176(293));
addon[_0x49f176(294)](function (_0xde6b62) {
    const _0x3d1f8a = _0x49f176;
    assert[_0x3d1f8a(295)](_0xde6b62, _0x3d1f8a(296));
});
function testRecv(_0x13eb0d) {
    const _0x3de6e6 = _0x49f176;
    addon[_0x3de6e6(297)](function () {
        const _0x519e13 = _0x3de6e6;
        assert[_0x519e13(295)](this, _0x13eb0d);
    }, _0x13eb0d);
}
testRecv(undefined), testRecv(null), testRecv(5), testRecv(!![]), testRecv(_0x49f176(298)), testRecv([]), testRecv({});