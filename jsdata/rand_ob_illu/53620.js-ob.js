'use strict';

const _0x549e = ['7ThqXCA', '4437skHRxi', '235460AKfJDw', '184187yirTSZ', '1XVFHWP', '477630pAhBxS', 'child_process', 'argv', 'child', 'abort', 'execPath', 'exit', 'mustCall', 'SIGABRT', 'isWindows', 'strictEqual', 'sziIK', '217851TfPuRB', '1cPasCa', '15971XjqRBF', '171964kvzIoh'];
const _0x1635cc = _0x457b;

(function (_0x18d467, _0x214956) {
    const _0x3300c1 = _0x457b;

    while (true) {
        try {
            const _0x1555d2 = -parseInt(_0x3300c1(0x101)) + parseInt(_0x3300c1(0x102)) * -parseInt(_0x3300c1(0x103)) + -parseInt(_0x3300c1(0x104)) + parseInt(_0x3300c1(0x105)) * parseInt(_0x3300c1(0x106)) + parseInt(_0x3300c1(0x107)) + -parseInt(_0x3300c1(0x108)) * parseInt(_0x3300c1(0x109)) + parseInt(_0x3300c1(0x10a));

            if (_0x1555d2 === _0x214956) break;else _0x18d467.push(_0x18d467.shift());
        } catch (_0x3576bf) {
            _0x18d467.push(_0x18d467.shift());
        }
    }
})(_0x549e, 154176);
function _0x457b(_0xc8de8f, _0x5952af) {
    return _0x457b = function (_0x198342, _0x48e9c0) {
        _0x198342 = _0x198342 - 257;
        const _0xda8a07 = _0x549e[_0x198342];

        return _0xda8a07;
    }, _0x457b(_0xc8de8f, _0x5952af);
}

const common = require('../common');

const assert = require('assert');

const spawn = require(_0x1635cc(0x10b)).spawn;

if (process[_0x1635cc(0x10c)][2] === _0x1635cc(0x10d)) process[_0x1635cc(0x10e)]();else {
    const child = spawn(process[_0x1635cc(0x10f)], [__filename, _0x1635cc(0x10d)]);

    child.on(_0x1635cc(0x110), common[_0x1635cc(0x111)]((_0x45c3ef, _0x110a94) => {
        const _0x146cc2 = _0x1635cc;
        const _0x2b3f0c = { 'sziIK': _0x146cc2(0x112) };

        common[_0x146cc2(0x113)] ? (assert[_0x146cc2(0x114)](_0x45c3ef, 134), assert[_0x146cc2(0x114)](_0x110a94, null)) : (assert[_0x146cc2(0x114)](_0x45c3ef, null), assert[_0x146cc2(0x114)](_0x110a94, _0x2b3f0c[_0x146cc2(0x115)]));
    }));
}
