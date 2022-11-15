const common = require(_0x23b22b(457)), assert = require('assert'), {internalBinding} = require('internal/test/binding'), cares = internalBinding('cares_wrap'), {promisify} = require(_0x23b22b(458)), originalGetaddrinfo = cares[_0x23b22b(459)], calls = [];
cares[_0x23b22b(459)] = common['mustCallAtLeast']((..._0x232315) => {
    calls['push'](_0x232315), originalGetaddrinfo(..._0x232315);
}, 1);
const dns = require(_0x23b22b(460)), dnsPromises = dns['promises'];
let verbatim;
function allowFailed(_0x296769) {
    const _0x86323a = _0x23b22b;
    return _0x296769[_0x86323a(461)](_0x338895 => {
    });
}
function _0x2592(_0x3a76a0, _0xdc18cd) {
    return _0x2592 = function (_0x28015e, _0x259210) {
        _0x28015e = _0x28015e - 446;
        let _0x19e8f7 = _0x2801[_0x28015e];
        return _0x19e8f7;
    }, _0x2592(_0x3a76a0, _0xdc18cd);
}
(async () => {
    const _0x4987e9 = _0x23b22b;
    let _0x1817c1 = 0;
    const _0x357327 = _0x46851b => {
        const _0x4fbe38 = _0x2592;
        assert[_0x4fbe38(462)](calls[_0x4fbe38(463)], _0x1817c1 + 1), verbatim = calls[_0x1817c1][4], assert[_0x4fbe38(462)](verbatim, _0x46851b), _0x1817c1 += 1;
    };
    await allowFailed(promisify(dns[_0x4987e9(464)])(_0x4987e9(465))), _0x357327(![]), await allowFailed(dnsPromises[_0x4987e9(464)](_0x4987e9(465))), _0x357327(![]), await allowFailed(promisify(dns[_0x4987e9(464)])(_0x4987e9(465), {})), _0x357327(![]), await allowFailed(dnsPromises[_0x4987e9(464)](_0x4987e9(465), {})), _0x357327(![]);
})()[_0x23b22b(466)](common[_0x23b22b(467)]());