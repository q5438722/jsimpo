'use strict';

const _0x2138 = ['client: on close', 'connect', 'address', 'setEncoding', 'eoJis', 'SKeMy', 'mustCall', 'BSxdm', 'VPqWs', 'XWcoc', 'split', 'strictEqual', 'readyState', 'YiBij', 'close', '434981WhnVwI', '1aNSARt', '1201AxuhBR', '732eqtANG', '7951sIoiul', '164TmmDnd', '1327bptTFa', '119OSHJcr', '347556wGeoDL', '1897844GTZfnb', '1pexqGz', '1587459EqmOrh', 'hasCrypto', 'skip', 'missing crypto', 'assert', 'tls', '../common/fixtures', 'readKey', 'xb\b\x1Aab c', 'Server', 'log', 'getProtocol', 'end', 'listen', 'client: on data', 'client: on secureConnect'];
const _0x3e636f = _0x5866;

(function (_0x2fce18, _0x38fd6d) {
    const _0x1eb4d4 = _0x5866;

    while (true) {
        try {
            const _0x370595 = -parseInt(_0x1eb4d4(0x111)) * -parseInt(_0x1eb4d4(0x112)) + -parseInt(_0x1eb4d4(0x113)) * parseInt(_0x1eb4d4(0x114)) + parseInt(_0x1eb4d4(0x115)) * parseInt(_0x1eb4d4(0x116)) + -parseInt(_0x1eb4d4(0x117)) * -parseInt(_0x1eb4d4(0x118)) + -parseInt(_0x1eb4d4(0x119)) + -parseInt(_0x1eb4d4(0x11a)) * -parseInt(_0x1eb4d4(0x11b)) + -parseInt(_0x1eb4d4(0x11c));

            if (_0x370595 === _0x38fd6d) break;else _0x2fce18.push(_0x2fce18.shift());
        } catch (_0x3ad375) {
            _0x2fce18.push(_0x2fce18.shift());
        }
    }
})(_0x2138, 980555);

const common = require('../common');

function _0x5866(_0x25d73c, _0x26eeb0) {
    return _0x5866 = function (_0x5ac72b, _0x16958d) {
        _0x5ac72b = _0x5ac72b - 273;
        const _0x1a6176 = _0x2138[_0x5ac72b];

        return _0x1a6176;
    }, _0x5866(_0x25d73c, _0x26eeb0);
}
if (!common[_0x3e636f(0x11d)]) common[_0x3e636f(0x11e)](_0x3e636f(0x11f));

const assert = require(_0x3e636f(0x120));

const tls = require(_0x3e636f(0x121));

const fixtures = require(_0x3e636f(0x122));

const options = {
    'key': fixtures[_0x3e636f(0x123)]('agent2-key.pem'),
    'cert': fixtures[_0x3e636f(0x123)]('agent2-cert.pem')
};
const messageUtf8 = 'x\u221Aab c';

const messageAscii = _0x3e636f(0x124);

const server = tls[_0x3e636f(0x125)](options, common.mustCall(function (_0xd445e1) {
    const _0x3dde3e = _0x3e636f;
    const _0x54f148 = { 'pkQrx': 'server: on secureConnection' };

    console[_0x3dde3e(0x126)](_0x54f148.pkQrx, _0xd445e1[_0x3dde3e(0x127)]()), _0xd445e1[_0x3dde3e(0x128)](messageUtf8);
}));

server[_0x3e636f(0x129)](0, function () {
    const _0x328bbe = _0x3e636f;
    const _0x324486 = {
        'eoJis': _0x328bbe(0x12a),
        'JCycV': function (_0x6b013e, _0x27918c) {
            return _0x6b013e === _0x27918c;
        },
        'BSxdm': _0x328bbe(0x12b),
        'XWcoc': '4|0|2|1|3',
        'YiBij': 'closed',
        'KmCFR': _0x328bbe(0x12c),
        'SKeMy': 'secureConnect',
        'VPqWs': 'close'
    };

    const _0x31a426 = tls[_0x328bbe(0x12d)]({
        'port': this[_0x328bbe(0x12e)]().port,
        'rejectUnauthorized': false
    });

    var _0x49e57 = '';

    _0x31a426[_0x328bbe(0x12f)]('ascii'), _0x31a426.on('data', function (_0x5dcf2a) {
        const _0x333ba3 = _0x328bbe;

        console[_0x333ba3(0x126)](_0x324486[_0x333ba3(0x130)], _0x5dcf2a), assert.ok(_0x324486.JCycV(typeof _0x5dcf2a, 'string')), _0x49e57 += _0x5dcf2a;
    }), _0x31a426.on(_0x324486[_0x328bbe(0x131)], common[_0x328bbe(0x132)](() => {
        const _0x79e956 = _0x328bbe;

        console[_0x79e956(0x126)](_0x324486[_0x79e956(0x133)]);
    })), _0x31a426.on(_0x324486[_0x328bbe(0x134)], common[_0x328bbe(0x132)](function () {
        const _0x23a80d = _0x328bbe;

        const _0x2c8a25 = _0x324486[_0x23a80d(0x135)][_0x23a80d(0x136)]('|');

        var _0x89bf31 = 0;

        while (true) {
            switch (_0x2c8a25[_0x89bf31++]) {
                case '0':
                    assert[_0x23a80d(0x137)](_0x31a426[_0x23a80d(0x138)], _0x324486[_0x23a80d(0x139)]);
                    continue;
                case '1':
                    assert[_0x23a80d(0x137)](messageAscii, _0x49e57);
                    continue;
                case '2':
                    assert.notStrictEqual(messageUtf8, _0x49e57);
                    continue;
                case '3':
                    server[_0x23a80d(0x13a)]();
                    continue;
                case '4':
                    console[_0x23a80d(0x126)](_0x324486.KmCFR);
                    continue;
            }
            break;
        }
    }));
});
