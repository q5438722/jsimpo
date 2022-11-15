function _0x3812(_0x2dd968, _0x532df9) {
    return _0x3812 = function (_0xa94660, _0x381255) {
        _0xa94660 = _0xa94660 - 424;
        let _0x2621d8 = _0xa946[_0xa94660];
        return _0x2621d8;
    }, _0x3812(_0x2dd968, _0x532df9);
}
const common = require(_0x3fb202(434));
if (!common['hasCrypto'])
    common[_0x3fb202(435)](_0x3fb202(436));
const assert = require(_0x3fb202(437)), tls = require(_0x3fb202(438)), fixtures = require('../common/fixtures'), options = {
        'key': fixtures[_0x3fb202(439)](_0x3fb202(440)),
        'cert': fixtures['readKey'](_0x3fb202(441))
    }, messageUtf8 = _0x3fb202(442), messageAscii = 'xb\b\x1Aab c', server = tls[_0x3fb202(443)](options, common[_0x3fb202(444)](function (_0x24657f) {
        const _0x565a26 = _0x3fb202;
        console['log'](_0x565a26(445), _0x24657f[_0x565a26(446)]()), _0x24657f[_0x565a26(447)](messageUtf8);
    }));
server[_0x3fb202(448)](0, function () {
    const _0x482093 = _0x3fb202, _0x963180 = tls[_0x482093(449)]({
            'port': this['address']()[_0x482093(450)],
            'rejectUnauthorized': ![]
        });
    let _0x56d357 = '';
    _0x963180['setEncoding'](_0x482093(451)), _0x963180['on'](_0x482093(452), function (_0x556cae) {
        const _0x340805 = _0x482093;
        console[_0x340805(453)](_0x340805(454), _0x556cae), assert['ok'](typeof _0x556cae === _0x340805(455)), _0x56d357 += _0x556cae;
    }), _0x963180['on'](_0x482093(456), common[_0x482093(444)](() => {
        console['log']('client: on secureConnect');
    })), _0x963180['on'](_0x482093(457), common[_0x482093(444)](function () {
        const _0x13aa6a = _0x482093;
        console[_0x13aa6a(453)](_0x13aa6a(458)), assert['strictEqual'](_0x963180[_0x13aa6a(459)], _0x13aa6a(460)), assert['notStrictEqual'](messageUtf8, _0x56d357), assert[_0x13aa6a(461)](messageAscii, _0x56d357), server[_0x13aa6a(457)]();
    }));
});