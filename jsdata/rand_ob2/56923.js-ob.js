'use strict';
const _0x10a7 = [
    'strictEqual',
    'unable\x20to\x20get\x20local\x20issuer\x20certificate',
    'fail',
    'should\x20fail\x20to\x20connect',
    'secureContext',
    'addCACert',
    'end',
    '88459DmVAuO',
    '314714nYDlpe',
    '1RBHHwd',
    '105871pAVQoy',
    '131640DvOBum',
    '518845EqBLKk',
    '1nMcuOE',
    '68loNDhy',
    '6754xfXyJm',
    '6nHOrMT',
    '126769InVtio',
    'hasCrypto',
    'skip',
    'missing\x20crypto',
    'assert',
    '../common/fixtures',
    'path',
    'keys',
    '.pem',
    'www.nodejs.org',
    'connect',
    'mustCall',
    'error'
];
const _0x423c46 = _0xb8c7;
(function (_0x207896, _0x49e02c) {
    const _0xc50a54 = _0xb8c7;
    while (!![]) {
        try {
            const _0x558bd7 = -parseInt(_0xc50a54(0x1d4)) + -parseInt(_0xc50a54(0x1d5)) + parseInt(_0xc50a54(0x1d6)) * -parseInt(_0xc50a54(0x1d7)) + parseInt(_0xc50a54(0x1d8)) + -parseInt(_0xc50a54(0x1d9)) * parseInt(_0xc50a54(0x1da)) + -parseInt(_0xc50a54(0x1db)) * -parseInt(_0xc50a54(0x1dc)) + parseInt(_0xc50a54(0x1dd)) * parseInt(_0xc50a54(0x1de));
            if (_0x558bd7 === _0x49e02c)
                break;
            else
                _0x207896['push'](_0x207896['shift']());
        } catch (_0xf223e0) {
            _0x207896['push'](_0x207896['shift']());
        }
    }
}(_0x10a7, 0x4f035));
const common = require('../common');
if (!common[_0x423c46(0x1df)])
    common[_0x423c46(0x1e0)](_0x423c46(0x1e1));
const assert = require(_0x423c46(0x1e2)), fs = require('fs'), fixtures = require(_0x423c46(0x1e3)), tls = require('tls');
function filenamePEM(_0xb2d8c9) {
    const _0x4930c5 = _0x423c46;
    return fixtures[_0x4930c5(0x1e4)](_0x4930c5(0x1e5), _0xb2d8c9 + _0x4930c5(0x1e6));
}
function loadPEM(_0x5c31ec) {
    return fs['readFileSync'](filenamePEM(_0x5c31ec));
}
const caCert = loadPEM('ca1-cert'), opts = {
        'host': _0x423c46(0x1e7),
        'port': 0x1bb,
        'rejectUnauthorized': !![]
    };
tls[_0x423c46(0x1e8)](opts, common[_0x423c46(0x1e9)](end)), opts['ca'] = caCert, tls['connect'](opts, fail)['on'](_0x423c46(0x1ea), common['mustCall'](_0x5b69bf => {
    const _0x2c1b8d = _0x423c46;
    assert[_0x2c1b8d(0x1eb)](_0x5b69bf['message'], _0x2c1b8d(0x1ec));
}));
function fail() {
    const _0x4e1512 = _0x423c46;
    assert[_0x4e1512(0x1ed)](_0x4e1512(0x1ee));
}
function _0xb8c7(_0x4d6924, _0x1c6ae7) {
    return _0xb8c7 = function (_0x10a71e, _0xb8c7b4) {
        _0x10a71e = _0x10a71e - 0x1d4;
        let _0x56093e = _0x10a7[_0x10a71e];
        return _0x56093e;
    }, _0xb8c7(_0x4d6924, _0x1c6ae7);
}
opts['secureContext'] = tls['createSecureContext'](), tls['connect'](opts, common['mustCall'](end)), opts[_0x423c46(0x1ef)]['context'][_0x423c46(0x1f0)](caCert), tls[_0x423c46(0x1e8)](opts, common[_0x423c46(0x1e9)](end));
function end() {
    const _0x396a0a = _0x423c46;
    this[_0x396a0a(0x1f1)]();
}
