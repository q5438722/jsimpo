'use strict';
const _0x2690 = [
    'push',
    'once',
    '173BxMNNn',
    '1841hNfSeo',
    '5ZScORY',
    '25465mZHGJD',
    '254011obrZgt',
    '2PDWIBd',
    '384317JIlUVF',
    '1lweUmb',
    '41tHuRYH',
    '5818NyyRGp',
    '6TBNYGj',
    '18609PbaNcD',
    '556kOoKVW',
    '1859oYPpBa',
    '../common',
    'assert',
    'fork',
    'argv',
    'child',
    'send',
    'disconnect',
    'stdout',
    'write'
];
const _0x28c00f = _0x3048;
function _0x3048(_0x2b76b2, _0x5e9bd2) {
    return _0x3048 = function (_0x269046, _0x304842) {
        _0x269046 = _0x269046 - 0xae;
        let _0x2fc4bd = _0x2690[_0x269046];
        return _0x2fc4bd;
    }, _0x3048(_0x2b76b2, _0x5e9bd2);
}
(function (_0x59b0c0, _0x26dffa) {
    const _0x20e77a = _0x3048;
    while (!![]) {
        try {
            const _0x1495e0 = parseInt(_0x20e77a(0xae)) * parseInt(_0x20e77a(0xaf)) + parseInt(_0x20e77a(0xb0)) * -parseInt(_0x20e77a(0xb1)) + -parseInt(_0x20e77a(0xb2)) * parseInt(_0x20e77a(0xb3)) + -parseInt(_0x20e77a(0xb4)) * parseInt(_0x20e77a(0xb5)) + -parseInt(_0x20e77a(0xb6)) * -parseInt(_0x20e77a(0xb7)) + -parseInt(_0x20e77a(0xb8)) * parseInt(_0x20e77a(0xb9)) + -parseInt(_0x20e77a(0xba)) * -parseInt(_0x20e77a(0xbb));
            if (_0x1495e0 === _0x26dffa)
                break;
            else
                _0x59b0c0['push'](_0x59b0c0['shift']());
        } catch (_0x38db94) {
            _0x59b0c0['push'](_0x59b0c0['shift']());
        }
    }
}(_0x2690, 0x70235));
require(_0x28c00f(0xbc));
const assert = require(_0x28c00f(0xbd)), fork = require('child_process')[_0x28c00f(0xbe)];
if (process[_0x28c00f(0xbf)][0x2] === _0x28c00f(0xc0))
    process[_0x28c00f(0xc1)]('1'), setTimeout(function () {
        const _0x379a74 = _0x28c00f;
        process[_0x379a74(0xc1)]('2');
    }, 0xc8), process['on'](_0x28c00f(0xc2), function () {
        const _0x2eb1b5 = _0x28c00f;
        process[_0x2eb1b5(0xc3)][_0x2eb1b5(0xc4)]('3');
    });
else {
    const child = fork(__filename, [_0x28c00f(0xc0)], { 'silent': !![] }), ipc = [];
    let stdout = '';
    child['on']('message', function (_0x42ab09) {
        const _0x1f7b6e = _0x28c00f;
        ipc[_0x1f7b6e(0xc5)](_0x42ab09);
        if (_0x42ab09 === '2')
            child[_0x1f7b6e(0xc2)]();
    }), child['stdout']['on']('data', function (_0x494649) {
        stdout += _0x494649;
    }), child[_0x28c00f(0xc6)]('exit', function () {
        assert['deepStrictEqual'](ipc, [
            '1',
            '2'
        ]), assert['strictEqual'](stdout, '3');
    });
}
