const common = require(_0xb11b(222));
if (!common[_0xb11b(223)])
    common[_0xb11b(224)](_0xb11b(225));
function _0x3a2f(_0x354273, _0x3c27a8) {
    return _0x3a2f = function (_0x5c69ec, _0x243489) {
        _0x5c69ec = _0x5c69ec - (2714 + -5581 * 1 + 3078);
        let _0x343cde = _0x2c83[_0x5c69ec];
        return _0x343cde;
    }, _0x3a2f(_0x354273, _0x3c27a8);
}
const assert = require('assert'), tls = require(_0xb11b(226)), options = {
        'SNICallback': (_0x4fe7d9, _0xbe2d6e) => {
            const _0x48bb98 = _0xb11b, _0x3498a8 = {
                    'nLGRp': function (_0x3d9fb8, _0x303786, _0x2fb5a5) {
                        return _0x3d9fb8(_0x303786, _0x2fb5a5);
                    }
                };
            _0x3498a8[_0x48bb98(227)](_0xbe2d6e, null, tls['createSecureContext']());
        }
    }, server = tls[_0xb11b(228)](options, _0x3228f2 => {
        const _0x456dfb = _0xb11b, _0x567de9 = { 'kSNgP': _0x456dfb(229) };
        assert[_0x456dfb(230)](_0x567de9[_0x456dfb(231)]);
    })['on'](_0xb11b(232), common[_0xb11b(233)]((_0x1b3722, _0x5b939b) => {
        const _0x31ef46 = _0xb11b, _0x2fe2eb = {
                'GXkPg': function (_0x3b67ca, _0x40089d) {
                    return _0x3b67ca(_0x40089d);
                }
            };
        _0x2fe2eb['GXkPg'](assert, /SSL_use_certificate:passed a null parameter/i[_0x31ef46(234)](_0x1b3722[_0x31ef46(235)])), server[_0x31ef46(236)]();
    }))[_0xb11b(237)](-43 * 167 + 59 * -140 + 5147 * 3, common[_0xb11b(233)](() => {
        const _0x12ce21 = _0xb11b, _0x4fbd95 = {
                'DIRcX': function (_0x4faacc, _0x796a9) {
                    return _0x4faacc(_0x796a9);
                },
                'orcbp': 'error'
            }, _0x5d94e6 = tls['connect']({
                'port': server['address']()[_0x12ce21(238)],
                'rejectUnauthorized': ![],
                'servername': _0x12ce21(239)
            }, common[_0x12ce21(240)]());
        _0x5d94e6['on'](_0x4fbd95['orcbp'], common[_0x12ce21(233)](_0x412fe9 => {
            const _0x2e19be = _0x12ce21;
            _0x4fbd95[_0x2e19be(241)](assert, /Client network socket disconnected/['test'](_0x412fe9[_0x2e19be(235)]));
        }));
    }));