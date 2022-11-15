'use strict';
const _0x3451 = [
    '../common',
    'child_process',
    'mustCall',
    'strictEqual',
    'code',
    'cmd',
    'includes',
    'does-not-exist',
    'pid',
    'isWindows',
    'number',
    'exec',
    'execFile',
    'undefined',
    '544364OwXNYO',
    '5QavwPn',
    '104779jdJiwD',
    '31473iAJvyt',
    '309iHfaWv',
    '143bxDhnS',
    '302LydUzf',
    '2579ZZWaZF',
    '852675hzQcwV',
    '923GGrPqB',
    '1469ImFgxP'
];
const _0x241239 = _0x4bc4;
(function (_0x3bfe02, _0xcda6d8) {
    const _0x156671 = _0x4bc4;
    while (!![]) {
        try {
            const _0x5545e0 = -parseInt(_0x156671(0xec)) + parseInt(_0x156671(0xed)) * -parseInt(_0x156671(0xee)) + parseInt(_0x156671(0xef)) + parseInt(_0x156671(0xf0)) * parseInt(_0x156671(0xf1)) + parseInt(_0x156671(0xf2)) * -parseInt(_0x156671(0xf3)) + parseInt(_0x156671(0xf4)) + parseInt(_0x156671(0xf5)) * parseInt(_0x156671(0xf6));
            if (_0x5545e0 === _0xcda6d8)
                break;
            else
                _0x3bfe02['push'](_0x3bfe02['shift']());
        } catch (_0x2632f5) {
            _0x3bfe02['push'](_0x3bfe02['shift']());
        }
    }
}(_0x3451, 0x6ab71));
function _0x4bc4(_0x365bcc, _0x1ebf43) {
    return _0x4bc4 = function (_0x3451e1, _0x4bc48b) {
        _0x3451e1 = _0x3451e1 - 0xec;
        let _0x365115 = _0x3451[_0x3451e1];
        return _0x365115;
    }, _0x4bc4(_0x365bcc, _0x1ebf43);
}
const common = require(_0x241239(0xf7)), assert = require('assert'), child_process = require(_0x241239(0xf8));
function test(_0x4056ba, _0x2b8aaa, _0x32e9ef = 'number') {
    const _0x2bdcd4 = _0x241239, _0x3253d4 = _0x4056ba('does-not-exist', common[_0x2bdcd4(0xf9)](function (_0x31eff7) {
            const _0x4186e2 = _0x2bdcd4;
            assert[_0x4186e2(0xfa)](_0x31eff7[_0x4186e2(0xfb)], _0x2b8aaa), assert(_0x31eff7[_0x4186e2(0xfc)][_0x4186e2(0xfd)](_0x4186e2(0xfe)));
        }));
    assert[_0x2bdcd4(0xfa)](typeof _0x3253d4[_0x2bdcd4(0xff)], _0x32e9ef);
}
common[_0x241239(0x100)] ? test(child_process['exec'], 0x1, _0x241239(0x101)) : test(child_process[_0x241239(0x102)], 0x7f, _0x241239(0x101));
test(child_process[_0x241239(0x103)], 'ENOENT', _0x241239(0x104));
