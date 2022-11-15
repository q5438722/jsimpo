'use strict';
const _0x593a = [
    '../common',
    'skip',
    'missing\x20crypto',
    'assert',
    'tls',
    '../common/fixtures',
    'agent2-key.pem',
    'readKey',
    'agent2-cert.pem',
    'x√ab\x20c',
    'xb\x08\x1aab\x20c',
    'Server',
    'mustCall',
    'log',
    'server:\x20on\x20secureConnection',
    'getProtocol',
    'end',
    'connect',
    'port',
    'setEncoding',
    'ascii',
    'data',
    'client:\x20on\x20data',
    'string',
    'secureConnect',
    'client:\x20on\x20secureConnect',
    'close',
    'client:\x20on\x20close',
    'strictEqual',
    'readyState',
    'notStrictEqual',
    '513994lCRHka',
    '68298eNULxq',
    '449lpbNKD',
    '206rhslfc',
    '380933OMIPMZ',
    '557359aLpbJc',
    '670176enwUZO',
    '880709tJjzOX',
    '1fMcSIt'
];
function _0x2ba9(_0x3404bc, _0x4e9cdb) {
    return _0x2ba9 = function (_0x593a2c, _0x2ba968) {
        _0x593a2c = _0x593a2c - 0x19b;
        let _0x5861b3 = _0x593a[_0x593a2c];
        return _0x5861b3;
    }, _0x2ba9(_0x3404bc, _0x4e9cdb);
}
const _0x114994 = _0x2ba9;
(function (_0x1542f5, _0x4e72d5) {
    const _0x2ddede = _0x2ba9;
    while (!![]) {
        try {
            const _0x8644d0 = parseInt(_0x2ddede(0x19b)) + -parseInt(_0x2ddede(0x19c)) + -parseInt(_0x2ddede(0x19d)) * parseInt(_0x2ddede(0x19e)) + parseInt(_0x2ddede(0x19f)) + -parseInt(_0x2ddede(0x1a0)) + -parseInt(_0x2ddede(0x1a1)) + parseInt(_0x2ddede(0x1a2)) * parseInt(_0x2ddede(0x1a3));
            if (_0x8644d0 === _0x4e72d5)
                break;
            else
                _0x1542f5['push'](_0x1542f5['shift']());
        } catch (_0xb5902) {
            _0x1542f5['push'](_0x1542f5['shift']());
        }
    }
}(_0x593a, 0x5e8ed));
const common = require(_0x114994(0x1a4));
if (!common['hasCrypto'])
    common[_0x114994(0x1a5)](_0x114994(0x1a6));
const assert = require(_0x114994(0x1a7)), tls = require(_0x114994(0x1a8)), fixtures = require(_0x114994(0x1a9)), options = {
        'key': fixtures['readKey'](_0x114994(0x1aa)),
        'cert': fixtures[_0x114994(0x1ab)](_0x114994(0x1ac))
    }, messageUtf8 = _0x114994(0x1ad), messageAscii = _0x114994(0x1ae), server = tls[_0x114994(0x1af)](options, common[_0x114994(0x1b0)](function (_0x4cc49e) {
        const _0x2a4415 = _0x114994;
        console[_0x2a4415(0x1b1)](_0x2a4415(0x1b2), _0x4cc49e[_0x2a4415(0x1b3)]()), _0x4cc49e[_0x2a4415(0x1b4)](messageUtf8);
    }));
server['listen'](0x0, function () {
    const _0x12cbe9 = _0x114994, _0x122eca = tls[_0x12cbe9(0x1b5)]({
            'port': this['address']()[_0x12cbe9(0x1b6)],
            'rejectUnauthorized': ![]
        });
    let _0x3bbca7 = '';
    _0x122eca[_0x12cbe9(0x1b7)](_0x12cbe9(0x1b8)), _0x122eca['on'](_0x12cbe9(0x1b9), function (_0x16a95a) {
        const _0x208883 = _0x12cbe9;
        console['log'](_0x208883(0x1ba), _0x16a95a), assert['ok'](typeof _0x16a95a === _0x208883(0x1bb)), _0x3bbca7 += _0x16a95a;
    }), _0x122eca['on'](_0x12cbe9(0x1bc), common['mustCall'](() => {
        const _0x541957 = _0x12cbe9;
        console[_0x541957(0x1b1)](_0x541957(0x1bd));
    })), _0x122eca['on'](_0x12cbe9(0x1be), common[_0x12cbe9(0x1b0)](function () {
        const _0x474c74 = _0x12cbe9;
        console['log'](_0x474c74(0x1bf)), assert[_0x474c74(0x1c0)](_0x122eca[_0x474c74(0x1c1)], 'closed'), assert[_0x474c74(0x1c2)](messageUtf8, _0x3bbca7), assert['strictEqual'](messageAscii, _0x3bbca7), server[_0x474c74(0x1be)]();
    }));
});
