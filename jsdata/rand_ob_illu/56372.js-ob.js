'use strict';

const _0x5b83 = ['port', 'ibXhK', 'kqhNF', 'StRNp', 'length', 'strictEqual', 'destroy', '518953xIJrkF', '1vIQDvu', '321502IFXgAZ', '2NeBKfM', '106604LzMimy', '455850rsBnSJ', '406867KWLILS', '138zrWsWF', '3153IItszY', '1FHVBOr', '936155JlLvnz', '../common', 'assert', 'http', 'createServer', 'HTTP/1.1 101 Switching Protocols\r\n', 'Transfer-Encoding: chunked\r\n', 'latin1', 'write', 'lCpzR', 'eJKin', 'BdizY', 'BkAiP', 'Upgrade: websocket\r\n', 'RmcnC', 'close', 'upgrade', 'websocket', 'address', 'host'];
const _0x27a348 = _0x165d;

(function (_0x23baae, _0x57911f) {
    const _0x29c0a5 = _0x165d;

    while (true) {
        try {
            const _0xcd7991 = parseInt(_0x29c0a5(0xf8)) * parseInt(_0x29c0a5(0xf9)) + parseInt(_0x29c0a5(0xfa)) + parseInt(_0x29c0a5(0xfb)) * -parseInt(_0x29c0a5(0xfc)) + -parseInt(_0x29c0a5(0xfd)) + -parseInt(_0x29c0a5(0xfe)) + parseInt(_0x29c0a5(0xff)) * -parseInt(_0x29c0a5(0x100)) + parseInt(_0x29c0a5(0x101)) * parseInt(_0x29c0a5(0x102));

            if (_0xcd7991 === _0x57911f) break;else _0x23baae.push(_0x23baae.shift());
        } catch (_0x1f5994) {
            _0x23baae.push(_0x23baae.shift());
        }
    }
})(_0x5b83, 265571);

var { mustCall } = require(_0x27a348(0x103));

const assert = require(_0x27a348(0x104));

const http = require(_0x27a348(0x105));

const net = require('net');

function _0x165d(_0x52ada7, _0x151e20) {
    return _0x165d = function (_0x3e9faf, _0x4e9c6a) {
        _0x3e9faf = _0x3e9faf - 248;
        const _0x150ee4 = _0x5b83[_0x3e9faf];

        return _0x150ee4;
    }, _0x165d(_0x52ada7, _0x151e20);
}
net[_0x27a348(0x106)](mustCall(function (_0x2dba62) {
    const _0x485959 = _0x27a348;
    const _0x2c05db = {
        'lCpzR': function (_0x1b90d6, _0x3755c9) {
            return _0x1b90d6 + _0x3755c9;
        },
        'eJKin': function (_0x413039, _0x4610b0) {
            return _0x413039 + _0x4610b0;
        },
        'BdizY': _0x485959(0x107),
        'BkAiP': 'Connection: upgrade\r\n',
        'NAKVD': _0x485959(0x108),
        'RmcnC': _0x485959(0x109)
    };

    _0x2dba62[_0x485959(0x10a)](_0x2c05db[_0x485959(0x10b)](_0x2c05db[_0x485959(0x10b)](_0x2c05db.eJKin(_0x2c05db[_0x485959(0x10c)](_0x2c05db[_0x485959(0x10c)](_0x2c05db[_0x485959(0x10d)], _0x2c05db[_0x485959(0x10e)]), _0x2c05db.NAKVD), _0x485959(0x10f)), '\r\n'), '\x80'), _0x2c05db[_0x485959(0x110)]), this[_0x485959(0x111)]();
})).listen(0, mustCall(function () {
    const _0x2b2f8a = _0x27a348;
    const _0x3ac15e = {
        'ibXhK': _0x2b2f8a(0x112),
        'kqhNF': _0x2b2f8a(0x113),
        'StRNp': function (_0x3be15e, _0x51d6c4) {
            return _0x3be15e(_0x51d6c4);
        }
    };

    http.get({
        'host': this[_0x2b2f8a(0x114)]()[_0x2b2f8a(0x115)],
        'port': this[_0x2b2f8a(0x114)]()[_0x2b2f8a(0x116)],
        'headers': {
            'Connection': _0x3ac15e[_0x2b2f8a(0x117)],
            'Upgrade': _0x3ac15e[_0x2b2f8a(0x118)]
        }
    }).on('upgrade', _0x3ac15e[_0x2b2f8a(0x119)](mustCall, (_0x2c853c, _0x46314e, _0x27f965) => {
        const _0x1646fc = _0x2b2f8a;

        assert.strictEqual(_0x27f965[_0x1646fc(0x11a)], 1), assert[_0x1646fc(0x11b)](_0x27f965[0], 128), _0x46314e[_0x1646fc(0x11c)]();
    }));
}));
