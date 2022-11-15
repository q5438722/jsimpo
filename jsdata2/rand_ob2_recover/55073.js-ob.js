function _0x5c95(_0x22b2df, _0x54e5d4) {
    return _0x5c95 = function (_0x28d1d2, _0x5c9571) {
        _0x28d1d2 = _0x28d1d2 - 419;
        let _0x2d4c65 = _0x28d1[_0x28d1d2];
        return _0x2d4c65;
    }, _0x5c95(_0x22b2df, _0x54e5d4);
}
const common = require(_0x1de2f9(431));
if (!common[_0x1de2f9(432)])
    common[_0x1de2f9(433)](_0x1de2f9(434));
const http2 = require('http2');
function testServerTimeout(_0xc4a7f8) {
    const _0x9f2966 = _0x1de2f9, _0x67be34 = http2['createServer']();
    _0xc4a7f8(_0x67be34);
    const _0x1eade3 = common[_0x9f2966(435)](_0x40adb9 => {
        const _0x1b3049 = _0x9f2966;
        _0x40adb9[_0x1b3049(436)]();
    });
    _0x67be34['on'](_0x9f2966(437), common['mustNotCall']()), _0x67be34[_0x9f2966(438)](_0x9f2966(439), _0x1eade3), _0x67be34[_0x9f2966(440)](0, common['mustCall'](() => {
        const _0x20453f = _0x9f2966, _0x6f804c = _0x20453f(441) + _0x67be34[_0x20453f(442)]()[_0x20453f(443)], _0xb5c23c = http2[_0x20453f(444)](_0x6f804c);
        _0xb5c23c['on']('close', common[_0x20453f(435)](() => {
            const _0x35bbad = _0x20453f, _0x5c4593 = http2['connect'](_0x6f804c);
            _0x5c4593['on']('close', common[_0x35bbad(435)](() => _0x67be34[_0x35bbad(436)]()));
        }));
    }));
}
const timeout = common['platformTimeout'](50);
testServerTimeout(_0x281f94 => _0x281f94[_0x1de2f9(445)](timeout)), testServerTimeout(_0x40a8e6 => _0x40a8e6['timeout'] = timeout);