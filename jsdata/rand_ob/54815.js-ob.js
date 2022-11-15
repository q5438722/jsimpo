'use strict';
const _0x34ee = [
    'message',
    'push',
    'FkIWT',
    'data',
    'once',
    'exit',
    '709495NkPsDZ',
    '7MjbCVX',
    '498TbxobF',
    '4zlobol',
    '222533PkBznn',
    '906298qHCdaD',
    '839400sKIaRm',
    '227553DwoDRP',
    '592649cUmjAk',
    'assert',
    'child_process',
    'fork',
    'argv',
    'child',
    'send',
    'stdout',
    'write'
];
function _0x1298(_0x2e1f64, _0x2e78ba) {
    return _0x1298 = function (_0x46be53, _0x3f4d32) {
        _0x46be53 = _0x46be53 - (-0x241 * -0xd + 0x1b28 + 0x37cd * -0x1);
        let _0x392625 = _0x34ee[_0x46be53];
        return _0x392625;
    }, _0x1298(_0x2e1f64, _0x2e78ba);
}
const _0x3061b1 = _0x1298;
(function (_0x576d4f, _0x18c38b) {
    const _0x19f7e1 = _0x1298;
    while (!![]) {
        try {
            const _0x953c88 = parseInt(_0x19f7e1(0xa8)) + parseInt(_0x19f7e1(0xa9)) * -parseInt(_0x19f7e1(0xaa)) + parseInt(_0x19f7e1(0xab)) * -parseInt(_0x19f7e1(0xac)) + -parseInt(_0x19f7e1(0xad)) + parseInt(_0x19f7e1(0xae)) + parseInt(_0x19f7e1(0xaf)) + parseInt(_0x19f7e1(0xb0));
            if (_0x953c88 === _0x18c38b)
                break;
            else
                _0x576d4f['push'](_0x576d4f['shift']());
        } catch (_0x1f823a) {
            _0x576d4f['push'](_0x576d4f['shift']());
        }
    }
}(_0x34ee, 0x93a34 + -0x3967c + -0x49d * -0xa9));
require('../common');
const assert = require(_0x3061b1(0xb1)), fork = require(_0x3061b1(0xb2))[_0x3061b1(0xb3)];
if (process[_0x3061b1(0xb4)][-0x341 + -0x1f50 + 0x2293] === _0x3061b1(0xb5))
    process[_0x3061b1(0xb6)]('1'), setTimeout(function () {
        const _0x218ceb = _0x3061b1;
        process[_0x218ceb(0xb6)]('2');
    }, 0xf * 0x117 + 0x144f + 0x47c * -0x8), process['on']('disconnect', function () {
        const _0x27efa = _0x3061b1;
        process[_0x27efa(0xb7)][_0x27efa(0xb8)]('3');
    });
else {
    const child = fork(__filename, [_0x3061b1(0xb5)], { 'silent': !![] }), ipc = [];
    let stdout = '';
    child['on'](_0x3061b1(0xb9), function (_0x598c15) {
        const _0x1e53a0 = _0x3061b1, _0x313f81 = {
                'FkIWT': function (_0x16eadf, _0x25de23) {
                    return _0x16eadf === _0x25de23;
                }
            };
        ipc[_0x1e53a0(0xba)](_0x598c15);
        if (_0x313f81[_0x1e53a0(0xbb)](_0x598c15, '2'))
            child['disconnect']();
    }), child[_0x3061b1(0xb7)]['on'](_0x3061b1(0xbc), function (_0x13136f) {
        stdout += _0x13136f;
    }), child[_0x3061b1(0xbd)](_0x3061b1(0xbe), function () {
        assert['deepStrictEqual'](ipc, [
            '1',
            '2'
        ]), assert['strictEqual'](stdout, '3');
    });
}
