'use strict';
const common = require('../common');
if (!common['hasCrypto'])
    common['skip']('missing\x20crypto');
const Countdown = require('../common/countdown'), http2 = require('http2'), server = http2['createServer']();
let session;
const countdown = new Countdown(0x1 * 0x1f3 + 0x61 * -0x45 + 0x1834, () => {
    server['close'](common['mustSucceed']()), session['destroy']();
});
server['listen'](0x1 * 0x1595 + 0x1d44 + -0x32d9, common['mustCall'](() => {
    const _0x3c3775 = http2['connect']('http://localhost:' + server['address']()['port']);
    _0x3c3775['on']('connect', common['mustCall'](() => countdown['dec']()));
})), server['on']('session', common['mustCall'](_0x178ec0 => {
    session = _0x178ec0, countdown['dec']();
}));
