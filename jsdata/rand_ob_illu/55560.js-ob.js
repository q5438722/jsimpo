'use strict';

const _0xdb9d = ['missing crypto', 'assert', 'tls', '../common/fixtures', 'readKey', 'agent2-key.pem', 'agent2-cert.pem', 'x\u221Aab c', 'xb\b\x1Aab c', 'Server', 'log', 'server: on secureConnection', 'getProtocol', 'end', 'listen', 'client: on data', 'string', 'client: on secureConnect', '3|2|1|0|4', 'ascii', 'data', 'secureConnect', 'connect', 'address', 'port', 'setEncoding', 'MwvTt', 'RsOLp', 'VRtqj', 'otiJI', 'JOnXo', 'mustCall', 'close', 'split', 'strictEqual', 'notStrictEqual', 'readyState', 'rqENu', 'kfgPd', '879389jjDJgy', '1EMDbiP', '735234YpPZwN', '720872SRaOXI', '93606kQfZHw', '229819RqhbPJ', '4QGrtsy', '1039174INshzn', '1873641kTuytM', '../common', 'skip'];
const _0x36f003 = _0x5718;

(function (_0x30fc7b, _0x475a75) {
    const _0x316ecc = _0x5718;

    while (true) {
        try {
            const _0x180a4f = -parseInt(_0x316ecc(0xba)) + -parseInt(_0x316ecc(0xbb)) * -parseInt(_0x316ecc(0xbc)) + parseInt(_0x316ecc(0xbd)) + parseInt(_0x316ecc(0xbe)) + -parseInt(_0x316ecc(0xbf)) * parseInt(_0x316ecc(0xc0)) + -parseInt(_0x316ecc(0xc1)) + parseInt(_0x316ecc(0xc2));

            if (_0x180a4f === _0x475a75) break;else _0x30fc7b.push(_0x30fc7b.shift());
        } catch (_0x1b49f8) {
            _0x30fc7b.push(_0x30fc7b.shift());
        }
    }
})(_0xdb9d, 585514);
function _0x5718(_0x1b3cda, _0x19d879) {
    return _0x5718 = function (_0x5b4391, _0x34c5ac) {
        _0x5b4391 = _0x5b4391 - 186;
        const _0x16ef54 = _0xdb9d[_0x5b4391];

        return _0x16ef54;
    }, _0x5718(_0x1b3cda, _0x19d879);
}

const common = require(_0x36f003(0xc3));

if (!common.hasCrypto) common[_0x36f003(0xc4)](_0x36f003(0xc5));

const assert = require(_0x36f003(0xc6));

const tls = require(_0x36f003(0xc7));

const fixtures = require(_0x36f003(0xc8));

const options = {
    'key': fixtures[_0x36f003(0xc9)](_0x36f003(0xca)),
    'cert': fixtures[_0x36f003(0xc9)](_0x36f003(0xcb))
};

const messageUtf8 = _0x36f003(0xcc);

const messageAscii = _0x36f003(0xcd);

const server = tls[_0x36f003(0xce)](options, common.mustCall(function (_0x24f955) {
    const _0x5df62a = _0x36f003;

    console[_0x5df62a(0xcf)](_0x5df62a(0xd0), _0x24f955[_0x5df62a(0xd1)]()), _0x24f955[_0x5df62a(0xd2)](messageUtf8);
}));

server[_0x36f003(0xd3)](0, function () {
    const _0x4203a2 = _0x36f003;
    const _0x19393b = {
        'VRtqj': _0x4203a2(0xd4),
        'otiJI': _0x4203a2(0xd5),
        'feWtO': _0x4203a2(0xd6),
        'xZaLg': _0x4203a2(0xd7),
        'rqENu': 'closed',
        'kfgPd': 'client: on close',
        'MwvTt': _0x4203a2(0xd8),
        'RsOLp': _0x4203a2(0xd9),
        'JOnXo': _0x4203a2(0xda)
    };

    const _0x4b5a9d = tls[_0x4203a2(0xdb)]({
        'port': this[_0x4203a2(0xdc)]()[_0x4203a2(0xdd)],
        'rejectUnauthorized': false
    });

    var _0x427891 = '';

    _0x4b5a9d[_0x4203a2(0xde)](_0x19393b[_0x4203a2(0xdf)]), _0x4b5a9d.on(_0x19393b[_0x4203a2(0xe0)], function (_0x203833) {
        const _0x3a34f2 = _0x4203a2;

        console.log(_0x19393b[_0x3a34f2(0xe1)], _0x203833), assert.ok(typeof _0x203833 === _0x19393b[_0x3a34f2(0xe2)]), _0x427891 += _0x203833;
    }), _0x4b5a9d.on(_0x19393b[_0x4203a2(0xe3)], common[_0x4203a2(0xe4)](() => {
        const _0x555fa3 = _0x4203a2;

        console[_0x555fa3(0xcf)](_0x19393b.feWtO);
    })), _0x4b5a9d.on(_0x4203a2(0xe5), common.mustCall(function () {
        const _0x362f2d = _0x4203a2;

        const _0xb43b4a = _0x19393b.xZaLg[_0x362f2d(0xe6)]('|');

        var _0x35c1d3 = 0;

        while (true) {
            switch (_0xb43b4a[_0x35c1d3++]) {
                case '0':
                    assert[_0x362f2d(0xe7)](messageAscii, _0x427891);
                    continue;
                case '1':
                    assert[_0x362f2d(0xe8)](messageUtf8, _0x427891);
                    continue;
                case '2':
                    assert[_0x362f2d(0xe7)](_0x4b5a9d[_0x362f2d(0xe9)], _0x19393b[_0x362f2d(0xea)]);
                    continue;
                case '3':
                    console[_0x362f2d(0xcf)](_0x19393b[_0x362f2d(0xeb)]);
                    continue;
                case '4':
                    server[_0x362f2d(0xe5)]();
                    continue;
            }
            break;
        }
    }));
});