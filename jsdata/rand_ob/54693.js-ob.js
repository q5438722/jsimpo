'use strict';
const _0x2c83 = [
    '16kAHnWt',
    '79614gIFHDc',
    '614028khxdgY',
    '1995919rwLaVy',
    '../common',
    'hasCrypto',
    'skip',
    'missing\x20crypto',
    'tls',
    'nLGRp',
    'createServer',
    'Should\x20not\x20be\x20called',
    'fail',
    'kSNgP',
    'tlsClientError',
    'mustCall',
    'test',
    'message',
    'close',
    'listen',
    'port',
    'any.name',
    'mustNotCall',
    'DIRcX',
    '1389guBbIh',
    '353njlFCV',
    '9FdpxmA',
    '45807IQjOxi',
    '92669wrLWLx',
    '1XuuLui',
    '21163SeTOCl'
];
const _0xb11b = _0x3a2f;
(function (_0x32792a, _0x3484fa) {
    const _0x1db9bb = _0x3a2f;
    while (!![]) {
        try {
            const _0x3ba547 = parseInt(_0x1db9bb(0xd3)) * -parseInt(_0x1db9bb(0xd4)) + parseInt(_0x1db9bb(0xd5)) * -parseInt(_0x1db9bb(0xd6)) + parseInt(_0x1db9bb(0xd7)) * parseInt(_0x1db9bb(0xd8)) + -parseInt(_0x1db9bb(0xd9)) * parseInt(_0x1db9bb(0xda)) + parseInt(_0x1db9bb(0xdb)) + -parseInt(_0x1db9bb(0xdc)) + parseInt(_0x1db9bb(0xdd));
            if (_0x3ba547 === _0x3484fa)
                break;
            else
                _0x32792a['push'](_0x32792a['shift']());
        } catch (_0x150143) {
            _0x32792a['push'](_0x32792a['shift']());
        }
    }
}(_0x2c83, -0x5cb72 + -0x1 * -0x3e785 + 0x6aa87));
const common = require(_0xb11b(0xde));
if (!common[_0xb11b(0xdf)])
    common[_0xb11b(0xe0)](_0xb11b(0xe1));
function _0x3a2f(_0x354273, _0x3c27a8) {
    return _0x3a2f = function (_0x5c69ec, _0x243489) {
        _0x5c69ec = _0x5c69ec - (0xa9a + -0x15cd * 0x1 + 0xc06);
        let _0x343cde = _0x2c83[_0x5c69ec];
        return _0x343cde;
    }, _0x3a2f(_0x354273, _0x3c27a8);
}
const assert = require('assert'), tls = require(_0xb11b(0xe2)), options = {
        'SNICallback': (_0x4fe7d9, _0xbe2d6e) => {
            const _0x48bb98 = _0xb11b, _0x3498a8 = {
                    'nLGRp': function (_0x3d9fb8, _0x303786, _0x2fb5a5) {
                        return _0x3d9fb8(_0x303786, _0x2fb5a5);
                    }
                };
            _0x3498a8[_0x48bb98(0xe3)](_0xbe2d6e, null, tls['createSecureContext']());
        }
    }, server = tls[_0xb11b(0xe4)](options, _0x3228f2 => {
        const _0x456dfb = _0xb11b, _0x567de9 = { 'kSNgP': _0x456dfb(0xe5) };
        assert[_0x456dfb(0xe6)](_0x567de9[_0x456dfb(0xe7)]);
    })['on'](_0xb11b(0xe8), common[_0xb11b(0xe9)]((_0x1b3722, _0x5b939b) => {
        const _0x31ef46 = _0xb11b, _0x2fe2eb = {
                'GXkPg': function (_0x3b67ca, _0x40089d) {
                    return _0x3b67ca(_0x40089d);
                }
            };
        _0x2fe2eb['GXkPg'](assert, /SSL_use_certificate:passed a null parameter/i[_0x31ef46(0xea)](_0x1b3722[_0x31ef46(0xeb)])), server[_0x31ef46(0xec)]();
    }))[_0xb11b(0xed)](-0x2b * 0xa7 + 0x3b * -0x8c + 0x141b * 0x3, common[_0xb11b(0xe9)](() => {
        const _0x12ce21 = _0xb11b, _0x4fbd95 = {
                'DIRcX': function (_0x4faacc, _0x796a9) {
                    return _0x4faacc(_0x796a9);
                },
                'orcbp': 'error'
            }, _0x5d94e6 = tls['connect']({
                'port': server['address']()[_0x12ce21(0xee)],
                'rejectUnauthorized': ![],
                'servername': _0x12ce21(0xef)
            }, common[_0x12ce21(0xf0)]());
        _0x5d94e6['on'](_0x4fbd95['orcbp'], common[_0x12ce21(0xe9)](_0x412fe9 => {
            const _0x2e19be = _0x12ce21;
            _0x4fbd95[_0x2e19be(0xf1)](assert, /Client network socket disconnected/['test'](_0x412fe9[_0x2e19be(0xeb)]));
        }));
    }));
