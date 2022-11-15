'use strict';
const _0x392b = [
    'createSecureContext',
    'createServer',
    'Should\x20not\x20be\x20called',
    'mustCall',
    'test',
    'message',
    'close',
    'listen',
    'connect',
    'port',
    'error',
    '104088Lleerq',
    '3YWXKNd',
    '27688fKnlRD',
    '158632XRaajd',
    '83048fwHFiv',
    '7kyTlBQ',
    '91735RcKmhk',
    '301239KaAugS',
    '725564IaHzcX',
    '../common',
    'hasCrypto',
    'skip',
    'missing\x20crypto'
];
const _0x41624e = _0x97d6;
(function (_0x215ce9, _0x46dca3) {
    const _0x26c009 = _0x97d6;
    while (!![]) {
        try {
            const _0x2e442b = -parseInt(_0x26c009(0x15b)) * -parseInt(_0x26c009(0x15c)) + parseInt(_0x26c009(0x15d)) + parseInt(_0x26c009(0x15e)) + parseInt(_0x26c009(0x15f)) + parseInt(_0x26c009(0x160)) * -parseInt(_0x26c009(0x161)) + -parseInt(_0x26c009(0x162)) + parseInt(_0x26c009(0x163));
            if (_0x2e442b === _0x46dca3)
                break;
            else
                _0x215ce9['push'](_0x215ce9['shift']());
        } catch (_0x4449b4) {
            _0x215ce9['push'](_0x215ce9['shift']());
        }
    }
}(_0x392b, 0x58d24));
const common = require(_0x41624e(0x164));
function _0x97d6(_0x2f40b7, _0x372cc3) {
    return _0x97d6 = function (_0x392be6, _0x97d65e) {
        _0x392be6 = _0x392be6 - 0x15b;
        let _0x24cca4 = _0x392b[_0x392be6];
        return _0x24cca4;
    }, _0x97d6(_0x2f40b7, _0x372cc3);
}
if (!common[_0x41624e(0x165)])
    common[_0x41624e(0x166)](_0x41624e(0x167));
const assert = require('assert'), tls = require('tls'), options = {
        'SNICallback': (_0x40f582, _0x1a700d) => {
            const _0xca099b = _0x41624e;
            _0x1a700d(null, tls[_0xca099b(0x168)]());
        }
    }, server = tls[_0x41624e(0x169)](options, _0x429e03 => {
        const _0x43a5c5 = _0x41624e;
        assert['fail'](_0x43a5c5(0x16a));
    })['on']('tlsClientError', common[_0x41624e(0x16b)]((_0x495224, _0x399c8a) => {
        const _0x9c1824 = _0x41624e;
        assert(/SSL_use_certificate:passed a null parameter/i[_0x9c1824(0x16c)](_0x495224[_0x9c1824(0x16d)])), server[_0x9c1824(0x16e)]();
    }))[_0x41624e(0x16f)](0x0, common[_0x41624e(0x16b)](() => {
        const _0xeef803 = _0x41624e, _0x1f595f = tls[_0xeef803(0x170)]({
                'port': server['address']()[_0xeef803(0x171)],
                'rejectUnauthorized': ![],
                'servername': 'any.name'
            }, common['mustNotCall']());
        _0x1f595f['on'](_0xeef803(0x172), common[_0xeef803(0x16b)](_0x5c6c33 => {
            const _0x24d13f = _0xeef803;
            assert(/Client network socket disconnected/[_0x24d13f(0x16c)](_0x5c6c33[_0x24d13f(0x16d)]));
        }));
    }));
