const common = require(_0x5a4a4f(475));
if (!common[_0x5a4a4f(476)])
    common[_0x5a4a4f(477)](_0x5a4a4f(478));
const Countdown = require(_0x5a4a4f(479)), http2 = require('http2'), server = http2[_0x5a4a4f(480)]();
let session;
const countdown = new Countdown(2, () => {
    const _0x31daba = _0x5a4a4f;
    server['close'](common['mustSucceed']()), session[_0x31daba(481)]();
});
function _0x3d31(_0x21b4eb, _0x74f64d) {
    return _0x3d31 = function (_0x4548cf, _0x3d3193) {
        _0x4548cf = _0x4548cf - 466;
        let _0x561a62 = _0x4548[_0x4548cf];
        return _0x561a62;
    }, _0x3d31(_0x21b4eb, _0x74f64d);
}
server['listen'](0, common[_0x5a4a4f(482)](() => {
    const _0x2a59d5 = _0x5a4a4f, _0x1f014d = http2['connect'](_0x2a59d5(483) + server[_0x2a59d5(484)]()[_0x2a59d5(485)]);
    _0x1f014d['on'](_0x2a59d5(486), common[_0x2a59d5(482)](() => countdown[_0x2a59d5(487)]()));
})), server['on'](_0x5a4a4f(488), common[_0x5a4a4f(482)](_0x5509ed => {
    const _0x25115e = _0x5a4a4f;
    session = _0x5509ed, countdown[_0x25115e(487)]();
}));