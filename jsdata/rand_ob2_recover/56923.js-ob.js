const common = require('../common');
if (!common[_0x423c46(479)])
    common[_0x423c46(480)](_0x423c46(481));
const assert = require(_0x423c46(482)), fs = require('fs'), fixtures = require(_0x423c46(483)), tls = require('tls');
function filenamePEM(_0xb2d8c9) {
    const _0x4930c5 = _0x423c46;
    return fixtures[_0x4930c5(484)](_0x4930c5(485), _0xb2d8c9 + _0x4930c5(486));
}
function loadPEM(_0x5c31ec) {
    return fs['readFileSync'](filenamePEM(_0x5c31ec));
}
const caCert = loadPEM('ca1-cert'), opts = {
        'host': _0x423c46(487),
        'port': 443,
        'rejectUnauthorized': !![]
    };
tls[_0x423c46(488)](opts, common[_0x423c46(489)](end)), opts['ca'] = caCert, tls['connect'](opts, fail)['on'](_0x423c46(490), common['mustCall'](_0x5b69bf => {
    const _0x2c1b8d = _0x423c46;
    assert[_0x2c1b8d(491)](_0x5b69bf['message'], _0x2c1b8d(492));
}));
function fail() {
    const _0x4e1512 = _0x423c46;
    assert[_0x4e1512(493)](_0x4e1512(494));
}
function _0xb8c7(_0x4d6924, _0x1c6ae7) {
    return _0xb8c7 = function (_0x10a71e, _0xb8c7b4) {
        _0x10a71e = _0x10a71e - 468;
        let _0x56093e = _0x10a7[_0x10a71e];
        return _0x56093e;
    }, _0xb8c7(_0x4d6924, _0x1c6ae7);
}
opts['secureContext'] = tls['createSecureContext'](), tls['connect'](opts, common['mustCall'](end)), opts[_0x423c46(495)]['context'][_0x423c46(496)](caCert), tls[_0x423c46(488)](opts, common[_0x423c46(489)](end));
function end() {
    const _0x396a0a = _0x423c46;
    this[_0x396a0a(497)]();
}