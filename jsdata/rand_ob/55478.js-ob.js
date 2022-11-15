'use strict';
const _0x69c8 = [
    '198447uSLsxR',
    '335520NJVzzF',
    '795295wXYhDY',
    'hasCrypto',
    'skip',
    'missing\x20crypto',
    'http2',
    'close',
    'mustSucceed',
    'listen',
    'mustCall',
    'connect',
    'http://localhost:',
    'port',
    'gSMzx',
    '408WPmYRL',
    '1289bYlvBz',
    '185974ywlEVt',
    '2Avorcs',
    '26279MmALeA',
    '1208QpnlkS',
    '677CDOibX'
];
const _0x63992 = _0xa6b5;
(function (_0x2473b5, _0x4acb87) {
    const _0x3da238 = _0xa6b5;
    while (!![]) {
        try {
            const _0x45b92e = -parseInt(_0x3da238(0xf3)) * parseInt(_0x3da238(0xf4)) + -parseInt(_0x3da238(0xf5)) * -parseInt(_0x3da238(0xf6)) + parseInt(_0x3da238(0xf7)) + -parseInt(_0x3da238(0xf8)) * -parseInt(_0x3da238(0xf9)) + parseInt(_0x3da238(0xfa)) + parseInt(_0x3da238(0xfb)) + -parseInt(_0x3da238(0xfc));
            if (_0x45b92e === _0x4acb87)
                break;
            else
                _0x2473b5['push'](_0x2473b5['shift']());
        } catch (_0x257980) {
            _0x2473b5['push'](_0x2473b5['shift']());
        }
    }
}(_0x69c8, -0x94788 * -0x1 + 0x65611 + -0x91296));
function _0xa6b5(_0x1f694d, _0x49fed2) {
    return _0xa6b5 = function (_0x4ec111, _0x574fdb) {
        _0x4ec111 = _0x4ec111 - (0x178f + -0x894 + -0xe08);
        let _0xa44831 = _0x69c8[_0x4ec111];
        return _0xa44831;
    }, _0xa6b5(_0x1f694d, _0x49fed2);
}
const common = require('../common');
if (!common[_0x63992(0xfd)])
    common[_0x63992(0xfe)](_0x63992(0xff));
const Countdown = require('../common/countdown'), http2 = require(_0x63992(0x100)), server = http2['createServer']();
let session;
const countdown = new Countdown(0xbf8 + -0x1547 + 0x951, () => {
    const _0x5e1a56 = _0x63992;
    server[_0x5e1a56(0x101)](common[_0x5e1a56(0x102)]()), session['destroy']();
});
server[_0x63992(0x103)](-0x17ef + -0xc57 + 0x2446, common[_0x63992(0x104)](() => {
    const _0x458761 = _0x63992, _0x13945b = { 'gSMzx': _0x458761(0x105) }, _0x2f95fc = http2['connect'](_0x458761(0x106) + server['address']()[_0x458761(0x107)]);
    _0x2f95fc['on'](_0x13945b[_0x458761(0x108)], common['mustCall'](() => countdown['dec']()));
})), server['on']('session', common[_0x63992(0x104)](_0x20b365 => {
    session = _0x20b365, countdown['dec']();
}));
