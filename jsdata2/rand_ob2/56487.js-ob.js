'use strict';
const _0xe25f = [
    'Hello',
    '964079wKqzLp',
    '30277Frwwtj',
    '26wucKWi',
    '422487Lblurw',
    '1956RLwXmL',
    '14eoolQm',
    '75498rTHLFK',
    '9knqpFD',
    '481278PCuzcU',
    '462598rIDMXF',
    '1LfmOid',
    '../../common',
    'buildType',
    '/3_callbacks',
    'RunCallback',
    'strictEqual',
    'hello\x20world',
    'RunCallbackWithRecv'
];
const _0x49f176 = _0x3179;
function _0x3179(_0x48814a, _0x2e104f) {
    return _0x3179 = function (_0xe25f73, _0x317992) {
        _0xe25f73 = _0xe25f73 - 0x118;
        let _0x12ae1f = _0xe25f[_0xe25f73];
        return _0x12ae1f;
    }, _0x3179(_0x48814a, _0x2e104f);
}
(function (_0x55fc84, _0x31ae1e) {
    const _0x1606c9 = _0x3179;
    while (!![]) {
        try {
            const _0x2ee2cf = -parseInt(_0x1606c9(0x118)) + parseInt(_0x1606c9(0x119)) * parseInt(_0x1606c9(0x11a)) + parseInt(_0x1606c9(0x11b)) + parseInt(_0x1606c9(0x11c)) * parseInt(_0x1606c9(0x11d)) + -parseInt(_0x1606c9(0x11e)) * parseInt(_0x1606c9(0x11f)) + parseInt(_0x1606c9(0x120)) + -parseInt(_0x1606c9(0x121)) * -parseInt(_0x1606c9(0x122));
            if (_0x2ee2cf === _0x31ae1e)
                break;
            else
                _0x55fc84['push'](_0x55fc84['shift']());
        } catch (_0x50275f) {
            _0x55fc84['push'](_0x55fc84['shift']());
        }
    }
}(_0xe25f, 0x8332c));
const common = require(_0x49f176(0x123)), assert = require('assert'), addon = require('./build/' + common[_0x49f176(0x124)] + _0x49f176(0x125));
addon[_0x49f176(0x126)](function (_0xde6b62) {
    const _0x3d1f8a = _0x49f176;
    assert[_0x3d1f8a(0x127)](_0xde6b62, _0x3d1f8a(0x128));
});
function testRecv(_0x13eb0d) {
    const _0x3de6e6 = _0x49f176;
    addon[_0x3de6e6(0x129)](function () {
        const _0x519e13 = _0x3de6e6;
        assert[_0x519e13(0x127)](this, _0x13eb0d);
    }, _0x13eb0d);
}
testRecv(undefined), testRecv(null), testRecv(0x5), testRecv(!![]), testRecv(_0x49f176(0x12a)), testRecv([]), testRecv({});
