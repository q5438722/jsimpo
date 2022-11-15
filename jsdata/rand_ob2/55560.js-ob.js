'use strict';
const _0xa946 = [
    'strictEqual',
    '52CPlilK',
    '8993SGRUhw',
    '46505ENihru',
    '362901aSocrj',
    '3VHbogt',
    '191676QsmPkm',
    '86501MgQPsZ',
    '4dKfppf',
    '671781JRElLQ',
    '1319720WgApRc',
    '../common',
    'skip',
    'missing\x20crypto',
    'assert',
    'tls',
    'readKey',
    'agent2-key.pem',
    'agent2-cert.pem',
    'x√ab\x20c',
    'Server',
    'mustCall',
    'server:\x20on\x20secureConnection',
    'getProtocol',
    'end',
    'listen',
    'connect',
    'port',
    'ascii',
    'data',
    'log',
    'client:\x20on\x20data',
    'string',
    'secureConnect',
    'close',
    'client:\x20on\x20close',
    'readyState',
    'closed'
];
const _0x3fb202 = _0x3812;
(function (_0x1a9872, _0x236bd8) {
    const _0xf2e565 = _0x3812;
    while (!![]) {
        try {
            const _0x3c6432 = -parseInt(_0xf2e565(0x1a8)) * parseInt(_0xf2e565(0x1a9)) + parseInt(_0xf2e565(0x1aa)) + parseInt(_0xf2e565(0x1ab)) + parseInt(_0xf2e565(0x1ac)) * -parseInt(_0xf2e565(0x1ad)) + parseInt(_0xf2e565(0x1ae)) * parseInt(_0xf2e565(0x1af)) + -parseInt(_0xf2e565(0x1b0)) + parseInt(_0xf2e565(0x1b1));
            if (_0x3c6432 === _0x236bd8)
                break;
            else
                _0x1a9872['push'](_0x1a9872['shift']());
        } catch (_0x247143) {
            _0x1a9872['push'](_0x1a9872['shift']());
        }
    }
}(_0xa946, 0x580ed));
function _0x3812(_0x2dd968, _0x532df9) {
    return _0x3812 = function (_0xa94660, _0x381255) {
        _0xa94660 = _0xa94660 - 0x1a8;
        let _0x2621d8 = _0xa946[_0xa94660];
        return _0x2621d8;
    }, _0x3812(_0x2dd968, _0x532df9);
}
const common = require(_0x3fb202(0x1b2));
if (!common['hasCrypto'])
    common[_0x3fb202(0x1b3)](_0x3fb202(0x1b4));
const assert = require(_0x3fb202(0x1b5)), tls = require(_0x3fb202(0x1b6)), fixtures = require('../common/fixtures'), options = {
        'key': fixtures[_0x3fb202(0x1b7)](_0x3fb202(0x1b8)),
        'cert': fixtures['readKey'](_0x3fb202(0x1b9))
    }, messageUtf8 = _0x3fb202(0x1ba), messageAscii = 'xb\x08\x1aab\x20c', server = tls[_0x3fb202(0x1bb)](options, common[_0x3fb202(0x1bc)](function (_0x24657f) {
        const _0x565a26 = _0x3fb202;
        console['log'](_0x565a26(0x1bd), _0x24657f[_0x565a26(0x1be)]()), _0x24657f[_0x565a26(0x1bf)](messageUtf8);
    }));
server[_0x3fb202(0x1c0)](0x0, function () {
    const _0x482093 = _0x3fb202, _0x963180 = tls[_0x482093(0x1c1)]({
            'port': this['address']()[_0x482093(0x1c2)],
            'rejectUnauthorized': ![]
        });
    let _0x56d357 = '';
    _0x963180['setEncoding'](_0x482093(0x1c3)), _0x963180['on'](_0x482093(0x1c4), function (_0x556cae) {
        const _0x340805 = _0x482093;
        console[_0x340805(0x1c5)](_0x340805(0x1c6), _0x556cae), assert['ok'](typeof _0x556cae === _0x340805(0x1c7)), _0x56d357 += _0x556cae;
    }), _0x963180['on'](_0x482093(0x1c8), common[_0x482093(0x1bc)](() => {
        console['log']('client:\x20on\x20secureConnect');
    })), _0x963180['on'](_0x482093(0x1c9), common[_0x482093(0x1bc)](function () {
        const _0x13aa6a = _0x482093;
        console[_0x13aa6a(0x1c5)](_0x13aa6a(0x1ca)), assert['strictEqual'](_0x963180[_0x13aa6a(0x1cb)], _0x13aa6a(0x1cc)), assert['notStrictEqual'](messageUtf8, _0x56d357), assert[_0x13aa6a(0x1cd)](messageAscii, _0x56d357), server[_0x13aa6a(0x1c9)]();
    }));
});
