'use strict';

const _0x3576 = ['end', '224263xEKyPq', '217101YPhnVT', '136897AVvgoF', '1BEEEOr', '187182uFkRqe', '1887LJoTiB', '81nwzZtH', '7427kxSXSz', '11vveoxq', '13267GMcDlL', '1wWQgxy', '../common', 'assert', 'createServer', 'mustCall', 'writeHead', 'listen', 'defaultPort', 'address', 'port', 'localhostIPv4', 'request', 'oSMBG', 'split', 'strictEqual', 'method', 'host', 'close'];
const _0x4b3b98 = _0x2afe;

function _0x2afe(_0x3e17e1, _0x5cb574) {
    return _0x2afe = function (_0x315f11, _0x2ea82) {
        _0x315f11 = _0x315f11 - 167;
        const _0x15c14b = _0x3576[_0x315f11];

        return _0x15c14b;
    }, _0x2afe(_0x3e17e1, _0x5cb574);
}
(function (_0x543148, _0x1af638) {
    const _0xec4e07 = _0x2afe;

    while (true) {
        try {
            const _0xa973df = parseInt(_0xec4e07(0xa7)) + parseInt(_0xec4e07(0xa8)) + -parseInt(_0xec4e07(0xa9)) * -parseInt(_0xec4e07(0xaa)) + -parseInt(_0xec4e07(0xab)) + -parseInt(_0xec4e07(0xac)) * parseInt(_0xec4e07(0xad)) + -parseInt(_0xec4e07(0xae)) * parseInt(_0xec4e07(0xaf)) + -parseInt(_0xec4e07(0xb0)) * parseInt(_0xec4e07(0xb1));

            if (_0xa973df === _0x1af638) break;else _0x543148.push(_0x543148.shift());
        } catch (_0x300f99) {
            _0x543148.push(_0x543148.shift());
        }
    }
})(_0x3576, 143268);

const common = require(_0x4b3b98(0xb2));

const assert = require(_0x4b3b98(0xb3));

const http = require('http');

const server = http[_0x4b3b98(0xb4)](common[_0x4b3b98(0xb5)](function (_0x4e58c0, _0x416a13) {
    const _0x692162 = _0x4b3b98;

    _0x416a13[_0x692162(0xb6)](200), _0x416a13.end('ok');
}));

server[_0x4b3b98(0xb7)](0, function () {
    const _0x37b519 = _0x4b3b98;
    const _0x3ae94d = { 'oSMBG': '4|2|1|3|5|7|6|0' };

    const _0x584abd = new http.Agent();

    _0x584abd[_0x37b519(0xb8)] = this[_0x37b519(0xb9)]()[_0x37b519(0xba)];
    const _0x101495 = {
        'host': undefined,
        'hostname': common[_0x37b519(0xbb)],
        'port': undefined,
        'defaultPort': undefined,
        'path': undefined,
        'method': undefined,
        'agent': _0x584abd
    };

    http[_0x37b519(0xbc)](_0x101495, function (_0x22f95d) {
        const _0x33f0e9 = _0x37b519;

        const _0x158b74 = _0x3ae94d[_0x33f0e9(0xbd)][_0x33f0e9(0xbe)]('|');

        var _0x34699f = 0;

        while (true) {
            switch (_0x158b74[_0x34699f++]) {
                case '0':
                    assert[_0x33f0e9(0xbf)](_0x101495[_0x33f0e9(0xc0)], undefined);
                    continue;
                case '1':
                    assert[_0x33f0e9(0xbf)](_0x101495[_0x33f0e9(0xc1)], undefined);
                    continue;
                case '2':
                    server[_0x33f0e9(0xc2)]();
                    continue;
                case '3':
                    assert[_0x33f0e9(0xbf)](_0x101495.hostname, common[_0x33f0e9(0xbb)]);
                    continue;
                case '4':
                    _0x22f95d.resume();
                    continue;
                case '5':
                    assert.strictEqual(_0x101495[_0x33f0e9(0xba)], undefined);
                    continue;
                case '6':
                    assert[_0x33f0e9(0xbf)](_0x101495.path, undefined);
                    continue;
                case '7':
                    assert.strictEqual(_0x101495[_0x33f0e9(0xb8)], undefined);
                    continue;
            }
            break;
        }
    })[_0x37b519(0xc3)]();
});
