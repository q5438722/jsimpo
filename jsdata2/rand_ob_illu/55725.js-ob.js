'use strict';

const _0x213a = ['code', 'ClWKO', 'PIPE_NAME', 'inherit', 'message', 'PIPE should have been in use.', 'createServer', 'listen', 'send', 'qUDip', 'hfuAw', 'error', 'end', 'dBVQw', 'once', 'Impossible state', '774282orriSt', '77719wmfPuF', '7tZBwtm', '218640FSJYEh', '7bUOYbU', '5657zptgWR', '30OJuJrI', '18238YWjJWa', '293426iMYXvc', '620601tGReKZ', '2ZMvNwN', '../common', 'assert', 'child_process', 'fork', 'net', 'isPrimary', 'argv', 'length', '../common/tmpdir', 'refresh', 'PIPE', 'mustCall', 'online', 'EADDRINUSE', 'strictEqual'];
const _0x391beb = _0x3389;

function _0x3389(_0x21b01c, _0x91f585) {
    return _0x3389 = function (_0x2af7e5, _0x43e22e) {
        _0x2af7e5 = _0x2af7e5 - 192;
        const _0x2a81f8 = _0x213a[_0x2af7e5];

        return _0x2a81f8;
    }, _0x3389(_0x21b01c, _0x91f585);
}
(function (_0x3d7809, _0x1df72d) {
    const _0x343b16 = _0x3389;

    while (true) {
        try {
            const _0xee0660 = parseInt(_0x343b16(0xc0)) + parseInt(_0x343b16(0xc1)) * parseInt(_0x343b16(0xc2)) + parseInt(_0x343b16(0xc3)) + -parseInt(_0x343b16(0xc4)) * parseInt(_0x343b16(0xc5)) + -parseInt(_0x343b16(0xc6)) * -parseInt(_0x343b16(0xc7)) + -parseInt(_0x343b16(0xc8)) + -parseInt(_0x343b16(0xc9)) * parseInt(_0x343b16(0xca));

            if (_0xee0660 === _0x1df72d) break;else _0x3d7809.push(_0x3d7809.shift());
        } catch (_0x4fd751) {
            _0x3d7809.push(_0x3d7809.shift());
        }
    }
})(_0x213a, 509868);

const common = require(_0x391beb(0xcb));

const assert = require(_0x391beb(0xcc));

const cluster = require('cluster');

const fork = require(_0x391beb(0xcd))[_0x391beb(0xce)];

const net = require(_0x391beb(0xcf));

if (cluster[_0x391beb(0xd0)] && process[_0x391beb(0xd1)][_0x391beb(0xd2)] !== 3) {
    const tmpdir = require(_0x391beb(0xd3));

    tmpdir[_0x391beb(0xd4)]();

    const PIPE_NAME = common[_0x391beb(0xd5)];

    const worker = cluster[_0x391beb(0xce)]({ 'PIPE_NAME': PIPE_NAME });

    cluster.on(_0x391beb(0xce), common[_0x391beb(0xd6)]()), worker.on(_0x391beb(0xd7), common[_0x391beb(0xd6)]()), worker.on('message', common[_0x391beb(0xd6)](function (_0x2f2283) {
        const _0x4ea67e = _0x391beb;
        const _0x3a84d4 = { 'ClWKO': _0x4ea67e(0xd8) };

        worker.disconnect(), assert[_0x4ea67e(0xd9)](_0x2f2283[_0x4ea67e(0xda)], _0x3a84d4[_0x4ea67e(0xdb)]);
    }));
} else {
    if (process.argv[_0x391beb(0xd2)] !== 3) {
        const PIPE_NAME = process.env[_0x391beb(0xdc)];

        const cp = fork(__filename, [process.env[_0x391beb(0xdc)]], { 'stdio': _0x391beb(0xdd) });

        cp.on(_0x391beb(0xde), common[_0x391beb(0xd6)](function () {
            const _0x630865 = _0x391beb;
            const _0x244f5f = {
                'qUDip': 'end',
                'hfuAw': _0x630865(0xdf)
            };

            const _0x339bc5 = net[_0x630865(0xe0)]()[_0x630865(0xe1)](PIPE_NAME, function () {
                const _0x3449e8 = _0x630865;

                cp[_0x3449e8(0xe2)](_0x244f5f[_0x3449e8(0xe3)]), process[_0x3449e8(0xe2)](_0x244f5f[_0x3449e8(0xe4)]);
            });

            _0x339bc5.on(_0x630865(0xe5), function (_0x54299c) {
                const _0x191e0b = _0x630865;

                cp[_0x191e0b(0xe2)](_0x191e0b(0xe6)), process[_0x191e0b(0xe2)](_0x54299c);
            });
        }));
    } else {
        if (process[_0x391beb(0xd1)][_0x391beb(0xd2)] === 3) {
            const PIPE_NAME = process.argv[2];

            const server = net[_0x391beb(0xe0)]().listen(PIPE_NAME, common.mustCall(() => {
                const _0x1057b0 = _0x391beb;
                const _0x2f4dcf = { 'dBVQw': 'listening' };

                process[_0x1057b0(0xe2)](_0x2f4dcf[_0x1057b0(0xe7)]);
            }));

            process[_0x391beb(0xe8)](_0x391beb(0xde), common.mustCall(() => server.close()));
        } else assert.fail(_0x391beb(0xe9));
    }
}
