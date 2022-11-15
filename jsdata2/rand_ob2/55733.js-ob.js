'use strict';
const _0x2801 = [
    '36939yqGgdW',
    '1777SczIoj',
    '203JxeltE',
    '122375pFWzyb',
    '1VojRag',
    '934539EKRfRD',
    '274301GvIAGU',
    '1cDFRxx',
    '2758553QtRmHn',
    '../common',
    'util',
    'getaddrinfo',
    'dns',
    'catch',
    'strictEqual',
    'length',
    'lookup',
    'example.org',
    'then',
    'mustCall',
    '434387oAOUnb',
    '27CsqJhd'
];
const _0x23b22b = _0x2592;
(function (_0x20d17e, _0xfffebd) {
    const _0x2f5545 = _0x2592;
    while (!![]) {
        try {
            const _0x3fb23d = parseInt(_0x2f5545(0x1be)) + -parseInt(_0x2f5545(0x1bf)) * parseInt(_0x2f5545(0x1c0)) + -parseInt(_0x2f5545(0x1c1)) * parseInt(_0x2f5545(0x1c2)) + -parseInt(_0x2f5545(0x1c3)) + -parseInt(_0x2f5545(0x1c4)) * parseInt(_0x2f5545(0x1c5)) + parseInt(_0x2f5545(0x1c6)) * -parseInt(_0x2f5545(0x1c7)) + parseInt(_0x2f5545(0x1c8));
            if (_0x3fb23d === _0xfffebd)
                break;
            else
                _0x20d17e['push'](_0x20d17e['shift']());
        } catch (_0x59843d) {
            _0x20d17e['push'](_0x20d17e['shift']());
        }
    }
}(_0x2801, 0x7af59));
const common = require(_0x23b22b(0x1c9)), assert = require('assert'), {internalBinding} = require('internal/test/binding'), cares = internalBinding('cares_wrap'), {promisify} = require(_0x23b22b(0x1ca)), originalGetaddrinfo = cares[_0x23b22b(0x1cb)], calls = [];
cares[_0x23b22b(0x1cb)] = common['mustCallAtLeast']((..._0x232315) => {
    calls['push'](_0x232315), originalGetaddrinfo(..._0x232315);
}, 0x1);
const dns = require(_0x23b22b(0x1cc)), dnsPromises = dns['promises'];
let verbatim;
function allowFailed(_0x296769) {
    const _0x86323a = _0x23b22b;
    return _0x296769[_0x86323a(0x1cd)](_0x338895 => {
    });
}
function _0x2592(_0x3a76a0, _0xdc18cd) {
    return _0x2592 = function (_0x28015e, _0x259210) {
        _0x28015e = _0x28015e - 0x1be;
        let _0x19e8f7 = _0x2801[_0x28015e];
        return _0x19e8f7;
    }, _0x2592(_0x3a76a0, _0xdc18cd);
}
(async () => {
    const _0x4987e9 = _0x23b22b;
    let _0x1817c1 = 0x0;
    const _0x357327 = _0x46851b => {
        const _0x4fbe38 = _0x2592;
        assert[_0x4fbe38(0x1ce)](calls[_0x4fbe38(0x1cf)], _0x1817c1 + 0x1), verbatim = calls[_0x1817c1][0x4], assert[_0x4fbe38(0x1ce)](verbatim, _0x46851b), _0x1817c1 += 0x1;
    };
    await allowFailed(promisify(dns[_0x4987e9(0x1d0)])(_0x4987e9(0x1d1))), _0x357327(![]), await allowFailed(dnsPromises[_0x4987e9(0x1d0)](_0x4987e9(0x1d1))), _0x357327(![]), await allowFailed(promisify(dns[_0x4987e9(0x1d0)])(_0x4987e9(0x1d1), {})), _0x357327(![]), await allowFailed(dnsPromises[_0x4987e9(0x1d0)](_0x4987e9(0x1d1), {})), _0x357327(![]);
})()[_0x23b22b(0x1d2)](common[_0x23b22b(0x1d3)]());
