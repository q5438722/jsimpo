const common = require(_0x41624e(356));
function _0x97d6(_0x2f40b7, _0x372cc3) {
    return _0x97d6 = function (_0x392be6, _0x97d65e) {
        _0x392be6 = _0x392be6 - 347;
        let _0x24cca4 = _0x392b[_0x392be6];
        return _0x24cca4;
    }, _0x97d6(_0x2f40b7, _0x372cc3);
}
if (!common[_0x41624e(357)])
    common[_0x41624e(358)](_0x41624e(359));
const assert = require('assert'), tls = require('tls'), options = {
        'SNICallback': (_0x40f582, _0x1a700d) => {
            const _0xca099b = _0x41624e;
            _0x1a700d(null, tls[_0xca099b(360)]());
        }
    }, server = tls[_0x41624e(361)](options, _0x429e03 => {
        const _0x43a5c5 = _0x41624e;
        assert['fail'](_0x43a5c5(362));
    })['on']('tlsClientError', common[_0x41624e(363)]((_0x495224, _0x399c8a) => {
        const _0x9c1824 = _0x41624e;
        assert(/SSL_use_certificate:passed a null parameter/i[_0x9c1824(364)](_0x495224[_0x9c1824(365)])), server[_0x9c1824(366)]();
    }))[_0x41624e(367)](0, common[_0x41624e(363)](() => {
        const _0xeef803 = _0x41624e, _0x1f595f = tls[_0xeef803(368)]({
                'port': server['address']()[_0xeef803(369)],
                'rejectUnauthorized': ![],
                'servername': 'any.name'
            }, common['mustNotCall']());
        _0x1f595f['on'](_0xeef803(370), common[_0xeef803(363)](_0x5c6c33 => {
            const _0x24d13f = _0xeef803;
            assert(/Client network socket disconnected/[_0x24d13f(364)](_0x5c6c33[_0x24d13f(365)]));
        }));
    }));