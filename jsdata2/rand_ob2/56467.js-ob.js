'use strict';
const _0x2e55 = [
    '455493nbdgev',
    '1pRtqVb',
    '1596001TqjCdL',
    '2tSsche',
    '705409wuWmNv',
    '379wZrgev',
    '3983wHJOGD',
    '111bPasxH',
    '2791voftVW',
    '3rfWgeE',
    '160791xmYbeD',
    '640159zBRhqR',
    '3ePaJCL',
    '../../common',
    'assert',
    'buildType',
    'path',
    'existsSync',
    'strictEqual',
    'throws',
    'utf8',
    'replace',
    'code',
    'ENOENT',
    'emitWarning',
    '\x20does\x20not\x20exist.',
    'join',
    'instanceof.js',
    'instanceof-2.js',
    'doInstanceOf',
    'defineProperty',
    'hasInstance',
    'mark'
];
const _0x576eaf = _0x277a;
(function (_0x292a83, _0x32663a) {
    const _0x33488f = _0x277a;
    while (!![]) {
        try {
            const _0x3bd601 = parseInt(_0x33488f(0x79)) + -parseInt(_0x33488f(0x7a)) * parseInt(_0x33488f(0x7b)) + parseInt(_0x33488f(0x7c)) * parseInt(_0x33488f(0x7d)) + parseInt(_0x33488f(0x7e)) * -parseInt(_0x33488f(0x7f)) + -parseInt(_0x33488f(0x80)) * parseInt(_0x33488f(0x81)) + parseInt(_0x33488f(0x82)) * parseInt(_0x33488f(0x83)) + -parseInt(_0x33488f(0x84)) * -parseInt(_0x33488f(0x85));
            if (_0x3bd601 === _0x32663a)
                break;
            else
                _0x292a83['push'](_0x292a83['shift']());
        } catch (_0x23a216) {
            _0x292a83['push'](_0x292a83['shift']());
        }
    }
}(_0x2e55, 0xd072a));
const common = require(_0x576eaf(0x86)), fs = require('fs'), assert = require(_0x576eaf(0x87)), addon = require('./build/' + common[_0x576eaf(0x88)] + '/test_general'), path = require(_0x576eaf(0x89)), v8TestsDir = path['resolve'](__dirname, '..', '..', '..', 'deps', 'v8', 'test', 'mjsunit'), v8TestsDirExists = fs[_0x576eaf(0x8a)](v8TestsDir);
function assertTrue(_0x15bb62) {
    const _0x569231 = _0x576eaf;
    return assert[_0x569231(0x8b)](_0x15bb62, !![]);
}
function assertFalse(_0x39079e) {
    const _0x14f564 = _0x576eaf;
    assert[_0x14f564(0x8b)](_0x39079e, ![]);
}
function assertEquals(_0x3fccb3, _0x5e2d7c) {
    const _0x193bc1 = _0x576eaf;
    assert[_0x193bc1(0x8b)](_0x3fccb3, _0x5e2d7c);
}
function _0x277a(_0x579e1f, _0x3ee406) {
    return _0x277a = function (_0x2e5582, _0x277a8f) {
        _0x2e5582 = _0x2e5582 - 0x79;
        let _0x4b3432 = _0x2e55[_0x2e5582];
        return _0x4b3432;
    }, _0x277a(_0x579e1f, _0x3ee406);
}
function assertThrows(_0x552c17) {
    const _0x5650f1 = _0x576eaf;
    assert[_0x5650f1(0x8c)](function () {
        eval(_0x552c17);
    }, Error);
}
function testFile(_0x101348) {
    const _0x1111f9 = _0x576eaf;
    try {
        const _0x1be152 = fs['readFileSync'](_0x101348, { 'encoding': _0x1111f9(0x8d) });
        eval(_0x1be152[_0x1111f9(0x8e)](/[(]([^\s(]+)\s+instanceof\s+([^)]+)[)]/g, '(addon.doInstanceOf($1,\x20$2))'));
    } catch (_0x3f1c8f) {
        if (_0x3f1c8f[_0x1111f9(0x8f)] === _0x1111f9(0x90) && !v8TestsDirExists)
            process[_0x1111f9(0x91)]('test\x20file\x20' + _0x101348 + _0x1111f9(0x92));
        else
            throw _0x3f1c8f;
    }
}
testFile(path[_0x576eaf(0x93)](v8TestsDir, _0x576eaf(0x94))), testFile(path[_0x576eaf(0x93)](v8TestsDir, _0x576eaf(0x95)));
if (typeof Symbol !== 'undefined' && 'hasInstance' in Symbol && typeof Symbol['hasInstance'] === 'symbol') {
    function compareToNative(_0x13151e, _0x4ce9be) {
        const _0x309539 = _0x576eaf;
        assert[_0x309539(0x8b)](addon[_0x309539(0x96)](_0x13151e, _0x4ce9be), _0x13151e instanceof _0x4ce9be);
    }
    function MyClass() {
    }
    Object[_0x576eaf(0x97)](MyClass, Symbol[_0x576eaf(0x98)], {
        'value': function (_0x2297c) {
            const _0x1a5cc9 = _0x576eaf;
            return _0x1a5cc9(0x99) in _0x2297c;
        }
    });
    function MySubClass() {
    }
    MySubClass['prototype'] = new MyClass();
    let x = new MySubClass(), y = new MySubClass();
    x['mark'] = !![], compareToNative(x, MySubClass), compareToNative(y, MySubClass), compareToNative(x, MyClass), compareToNative(y, MyClass), x = new MyClass(), y = new MyClass(), x['mark'] = !![], compareToNative(x, MySubClass), compareToNative(y, MySubClass), compareToNative(x, MyClass), compareToNative(y, MyClass);
}
