'use strict';
const _0x3aa2 = [
    'buildType',
    '/test_general',
    'path',
    'resolve',
    'deps',
    'test',
    'mjsunit',
    'existsSync',
    'strictEqual',
    'throws',
    'RICss',
    'utf8',
    '(addon.doInstanceOf($1,\x20$2))',
    'readFileSync',
    'KiMoQ',
    'PfLIJ',
    'code',
    'XnESW',
    'test\x20file\x20',
    '\x20does\x20not\x20exist.',
    'instanceof.js',
    'undefined',
    'hasInstance',
    'symbol',
    'doInstanceOf',
    'YdkQp',
    'defineProperty',
    'mark',
    'prototype',
    '370521IELWzV',
    '581yvjtSs',
    '1262NdYpjS',
    '2SeJEjo',
    '429017INzvwX',
    '620019gJtSFx',
    '49Gjiskl',
    '30012AYoZUS',
    '541765ZKfwQQ',
    '1oZeaEg',
    '1759321TkIFlz',
    '1IWKnyI',
    '../../common',
    'assert'
];
const _0x2f438b = _0x3a52;
(function (_0x181dc5, _0x5b6e11) {
    const _0x4dc841 = _0x3a52;
    while (!![]) {
        try {
            const _0x5f31a1 = parseInt(_0x4dc841(0x1c7)) + -parseInt(_0x4dc841(0x1c8)) * parseInt(_0x4dc841(0x1c9)) + -parseInt(_0x4dc841(0x1ca)) * parseInt(_0x4dc841(0x1cb)) + -parseInt(_0x4dc841(0x1cc)) + -parseInt(_0x4dc841(0x1cd)) * -parseInt(_0x4dc841(0x1ce)) + parseInt(_0x4dc841(0x1cf)) * -parseInt(_0x4dc841(0x1d0)) + -parseInt(_0x4dc841(0x1d1)) * -parseInt(_0x4dc841(0x1d2));
            if (_0x5f31a1 === _0x5b6e11)
                break;
            else
                _0x181dc5['push'](_0x181dc5['shift']());
        } catch (_0x5c77b3) {
            _0x181dc5['push'](_0x181dc5['shift']());
        }
    }
}(_0x3aa2, -0x387be + 0x5 * -0x50aa6 + -0x11 * -0x2737a));
function _0x3a52(_0x19f26c, _0x4dc655) {
    return _0x3a52 = function (_0x4795ce, _0x4c700e) {
        _0x4795ce = _0x4795ce - (0x3 * -0x1e5 + 0x1086 + 0x8 * -0x122);
        let _0x4f93c7 = _0x3aa2[_0x4795ce];
        return _0x4f93c7;
    }, _0x3a52(_0x19f26c, _0x4dc655);
}
const common = require(_0x2f438b(0x1d3)), fs = require('fs'), assert = require(_0x2f438b(0x1d4)), addon = require('./build/' + common[_0x2f438b(0x1d5)] + _0x2f438b(0x1d6)), path = require(_0x2f438b(0x1d7)), v8TestsDir = path[_0x2f438b(0x1d8)](__dirname, '..', '..', '..', _0x2f438b(0x1d9), 'v8', _0x2f438b(0x1da), _0x2f438b(0x1db)), v8TestsDirExists = fs[_0x2f438b(0x1dc)](v8TestsDir);
function assertTrue(_0x5ee76d) {
    return assert['strictEqual'](_0x5ee76d, !![]);
}
function assertFalse(_0xd7ff8d) {
    const _0x646bd3 = _0x2f438b;
    assert[_0x646bd3(0x1dd)](_0xd7ff8d, ![]);
}
function assertEquals(_0xeddaa0, _0x1de0cc) {
    const _0x4f1447 = _0x2f438b;
    assert[_0x4f1447(0x1dd)](_0xeddaa0, _0x1de0cc);
}
function assertThrows(_0x4cdc32) {
    const _0x173a80 = _0x2f438b, _0x3fc46d = {
            'RICss': function (_0x1c5a4d, _0x596492) {
                return _0x1c5a4d(_0x596492);
            }
        };
    assert[_0x173a80(0x1de)](function () {
        const _0x523125 = _0x173a80;
        _0x3fc46d[_0x523125(0x1df)](eval, _0x4cdc32);
    }, Error);
}
function testFile(_0x4ea72f) {
    const _0x291ae4 = _0x2f438b, _0xa4a985 = {
            'KiMoQ': _0x291ae4(0x1e0),
            'PfLIJ': _0x291ae4(0x1e1),
            'XnESW': 'ENOENT'
        };
    try {
        const _0x3082c8 = fs[_0x291ae4(0x1e2)](_0x4ea72f, { 'encoding': _0xa4a985[_0x291ae4(0x1e3)] });
        eval(_0x3082c8['replace'](/[(]([^\s(]+)\s+instanceof\s+([^)]+)[)]/g, _0xa4a985[_0x291ae4(0x1e4)]));
    } catch (_0x449848) {
        if (_0x449848[_0x291ae4(0x1e5)] === _0xa4a985[_0x291ae4(0x1e6)] && !v8TestsDirExists)
            process['emitWarning'](_0x291ae4(0x1e7) + _0x4ea72f + _0x291ae4(0x1e8));
        else
            throw _0x449848;
    }
}
testFile(path['join'](v8TestsDir, _0x2f438b(0x1e9))), testFile(path['join'](v8TestsDir, 'instanceof-2.js'));
if (typeof Symbol !== _0x2f438b(0x1ea) && _0x2f438b(0x1eb) in Symbol && typeof Symbol['hasInstance'] === _0x2f438b(0x1ec)) {
    function compareToNative(_0x287957, _0x53c9c5) {
        const _0x217638 = _0x2f438b, _0x140415 = {
                'YdkQp': function (_0x130c3f, _0x4f4241) {
                    return _0x130c3f instanceof _0x4f4241;
                }
            };
        assert[_0x217638(0x1dd)](addon[_0x217638(0x1ed)](_0x287957, _0x53c9c5), _0x140415[_0x217638(0x1ee)](_0x287957, _0x53c9c5));
    }
    function MyClass() {
    }
    Object[_0x2f438b(0x1ef)](MyClass, Symbol['hasInstance'], {
        'value': function (_0xbf7098) {
            const _0x206474 = _0x2f438b;
            return _0x206474(0x1f0) in _0xbf7098;
        }
    });
    function MySubClass() {
    }
    MySubClass[_0x2f438b(0x1f1)] = new MyClass();
    let x = new MySubClass(), y = new MySubClass();
    x['mark'] = !![], compareToNative(x, MySubClass), compareToNative(y, MySubClass), compareToNative(x, MyClass), compareToNative(y, MyClass), x = new MyClass(), y = new MyClass(), x['mark'] = !![], compareToNative(x, MySubClass), compareToNative(y, MySubClass), compareToNative(x, MyClass), compareToNative(y, MyClass);
}
