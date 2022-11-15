'use strict';
const _0x4548 = [
    'http://localhost:',
    'address',
    'port',
    'connect',
    'dec',
    'session',
    '576095HweRcz',
    '215020PlhMgA',
    '321684nEktWD',
    '585456jQZJEG',
    '1UNfSBE',
    '547531JZSDBz',
    '1SlggmF',
    '739006varAJe',
    '1017164jUdIBP',
    '../common',
    'hasCrypto',
    'skip',
    'missing\x20crypto',
    '../common/countdown',
    'createServer',
    'destroy',
    'mustCall'
];
const _0x5a4a4f = _0x3d31;
(function (_0x52e9da, _0x3b5fb9) {
    const _0x51d24b = _0x3d31;
    while (!![]) {
        try {
            const _0x5e267b = -parseInt(_0x51d24b(0x1d2)) + -parseInt(_0x51d24b(0x1d3)) + parseInt(_0x51d24b(0x1d4)) + parseInt(_0x51d24b(0x1d5)) + -parseInt(_0x51d24b(0x1d6)) * -parseInt(_0x51d24b(0x1d7)) + parseInt(_0x51d24b(0x1d8)) * parseInt(_0x51d24b(0x1d9)) + -parseInt(_0x51d24b(0x1da));
            if (_0x5e267b === _0x3b5fb9)
                break;
            else
                _0x52e9da['push'](_0x52e9da['shift']());
        } catch (_0x2723eb) {
            _0x52e9da['push'](_0x52e9da['shift']());
        }
    }
}(_0x4548, 0x5e176));
const common = require(_0x5a4a4f(0x1db));
if (!common[_0x5a4a4f(0x1dc)])
    common[_0x5a4a4f(0x1dd)](_0x5a4a4f(0x1de));
const Countdown = require(_0x5a4a4f(0x1df)), http2 = require('http2'), server = http2[_0x5a4a4f(0x1e0)]();
let session;
const countdown = new Countdown(0x2, () => {
    const _0x31daba = _0x5a4a4f;
    server['close'](common['mustSucceed']()), session[_0x31daba(0x1e1)]();
});
function _0x3d31(_0x21b4eb, _0x74f64d) {
    return _0x3d31 = function (_0x4548cf, _0x3d3193) {
        _0x4548cf = _0x4548cf - 0x1d2;
        let _0x561a62 = _0x4548[_0x4548cf];
        return _0x561a62;
    }, _0x3d31(_0x21b4eb, _0x74f64d);
}
server['listen'](0x0, common[_0x5a4a4f(0x1e2)](() => {
    const _0x2a59d5 = _0x5a4a4f, _0x1f014d = http2['connect'](_0x2a59d5(0x1e3) + server[_0x2a59d5(0x1e4)]()[_0x2a59d5(0x1e5)]);
    _0x1f014d['on'](_0x2a59d5(0x1e6), common[_0x2a59d5(0x1e2)](() => countdown[_0x2a59d5(0x1e7)]()));
})), server['on'](_0x5a4a4f(0x1e8), common[_0x5a4a4f(0x1e2)](_0x5509ed => {
    const _0x25115e = _0x5a4a4f;
    session = _0x5509ed, countdown[_0x25115e(0x1e7)]();
}));
