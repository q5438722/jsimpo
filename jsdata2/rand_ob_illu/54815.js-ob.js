'use strict';

const _0x3eee = ['217EntBNQ', '684yDOLBR', '577091jWsjTq', '247832jLoBPV', '6CSyzcN', '40030zEizqu', '31WvykNl', '1ainbuM', '1367895IXTXBb', '2051538dvwKSK', 'child_process', 'fork', 'argv', 'child', 'send', 'write', 'message', 'push', 'HpKBy', 'stdout', 'exit', 'deepStrictEqual', '39279ovBcFv', '17TRfzVb'];

function _0x1033(_0x45e5d3, _0x31a585) {
    return _0x1033 = function (_0xdac0d6, _0x596fa0) {
        _0xdac0d6 = _0xdac0d6 - 248;
        const _0x4b1189 = _0x3eee[_0xdac0d6];

        return _0x4b1189;
    }, _0x1033(_0x45e5d3, _0x31a585);
}
const _0x1a090d = _0x1033;

(function (_0x4160fe, _0x575b91) {
    const _0x2d11d3 = _0x1033;

    while (true) {
        try {
            const _0x5dc87c = -parseInt(_0x2d11d3(0xf8)) * parseInt(_0x2d11d3(0xf9)) + parseInt(_0x2d11d3(0xfa)) * parseInt(_0x2d11d3(0xfb)) + parseInt(_0x2d11d3(0xfc)) + -parseInt(_0x2d11d3(0xfd)) * parseInt(_0x2d11d3(0xfe)) + -parseInt(_0x2d11d3(0xff)) * parseInt(_0x2d11d3(0x100)) + -parseInt(_0x2d11d3(0x101)) * -parseInt(_0x2d11d3(0x102)) + parseInt(_0x2d11d3(0x103));

            if (_0x5dc87c === _0x575b91) break;else _0x4160fe.push(_0x4160fe.shift());
        } catch (_0x44c1c5) {
            _0x4160fe.push(_0x4160fe.shift());
        }
    }
})(_0x3eee, 749287);
require('../common');

const assert = require('assert');

const fork = require(_0x1a090d(0x104))[_0x1a090d(0x105)];

if (process[_0x1a090d(0x106)][2] === _0x1a090d(0x107)) process[_0x1a090d(0x108)]('1'), setTimeout(function () {
    const _0xa81a1b = _0x1a090d;

    process[_0xa81a1b(0x108)]('2');
}, 200), process.on('disconnect', function () {
    const _0x313fe0 = _0x1a090d;

    process.stdout[_0x313fe0(0x109)]('3');
});else {
    const child = fork(__filename, [_0x1a090d(0x107)], { 'silent': true });
    const ipc = [];
    var stdout = '';

    child.on(_0x1a090d(0x10a), function (_0x19f9ed) {
        const _0x5c7c71 = _0x1a090d;
        const _0x53cb50 = {
            'HpKBy': function (_0x71736, _0xc4c838) {
                return _0x71736 === _0xc4c838;
            }
        };

        ipc[_0x5c7c71(0x10b)](_0x19f9ed);
        if (_0x53cb50[_0x5c7c71(0x10c)](_0x19f9ed, '2')) child.disconnect();
    }), child[_0x1a090d(0x10d)].on('data', function (_0x2e97dc) {
        stdout += _0x2e97dc;
    }), child.once(_0x1a090d(0x10e), function () {
        const _0x75cd68 = _0x1a090d;

        assert[_0x75cd68(0x10f)](ipc, ['1', '2']), assert.strictEqual(stdout, '3');
    });
}
