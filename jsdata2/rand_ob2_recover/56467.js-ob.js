const common = require(_0x576eaf(134)), fs = require('fs'), assert = require(_0x576eaf(135)), addon = require('./build/' + common[_0x576eaf(136)] + '/test_general'), path = require(_0x576eaf(137)), v8TestsDir = path['resolve'](__dirname, '..', '..', '..', 'deps', 'v8', 'test', 'mjsunit'), v8TestsDirExists = fs[_0x576eaf(138)](v8TestsDir);
function assertTrue(_0x15bb62) {
    const _0x569231 = _0x576eaf;
    return assert[_0x569231(139)](_0x15bb62, !![]);
}
function assertFalse(_0x39079e) {
    const _0x14f564 = _0x576eaf;
    assert[_0x14f564(139)](_0x39079e, ![]);
}
function assertEquals(_0x3fccb3, _0x5e2d7c) {
    const _0x193bc1 = _0x576eaf;
    assert[_0x193bc1(139)](_0x3fccb3, _0x5e2d7c);
}
function _0x277a(_0x579e1f, _0x3ee406) {
    return _0x277a = function (_0x2e5582, _0x277a8f) {
        _0x2e5582 = _0x2e5582 - 121;
        let _0x4b3432 = _0x2e55[_0x2e5582];
        return _0x4b3432;
    }, _0x277a(_0x579e1f, _0x3ee406);
}
function assertThrows(_0x552c17) {
    const _0x5650f1 = _0x576eaf;
    assert[_0x5650f1(140)](function () {
        eval(_0x552c17);
    }, Error);
}
function testFile(_0x101348) {
    const _0x1111f9 = _0x576eaf;
    try {
        const _0x1be152 = fs['readFileSync'](_0x101348, { 'encoding': _0x1111f9(141) });
        eval(_0x1be152[_0x1111f9(142)](/[(]([^\s(]+)\s+instanceof\s+([^)]+)[)]/g, '(addon.doInstanceOf($1, $2))'));
    } catch (_0x3f1c8f) {
        if (_0x3f1c8f[_0x1111f9(143)] === _0x1111f9(144) && !v8TestsDirExists)
            process[_0x1111f9(145)]('test file ' + _0x101348 + _0x1111f9(146));
        else
            throw _0x3f1c8f;
    }
}
testFile(path[_0x576eaf(147)](v8TestsDir, _0x576eaf(148))), testFile(path[_0x576eaf(147)](v8TestsDir, _0x576eaf(149)));
if (typeof Symbol !== 'undefined' && 'hasInstance' in Symbol && typeof Symbol['hasInstance'] === 'symbol') {
    function compareToNative(_0x13151e, _0x4ce9be) {
        const _0x309539 = _0x576eaf;
        assert[_0x309539(139)](addon[_0x309539(150)](_0x13151e, _0x4ce9be), _0x13151e instanceof _0x4ce9be);
    }
    function MyClass() {
    }
    Object[_0x576eaf(151)](MyClass, Symbol[_0x576eaf(152)], {
        'value': function (_0x2297c) {
            const _0x1a5cc9 = _0x576eaf;
            return _0x1a5cc9(153) in _0x2297c;
        }
    });
    function MySubClass() {
    }
    MySubClass['prototype'] = new MyClass();
    let x = new MySubClass(), y = new MySubClass();
    x['mark'] = !![], compareToNative(x, MySubClass), compareToNative(y, MySubClass), compareToNative(x, MyClass), compareToNative(y, MyClass), x = new MyClass(), y = new MyClass(), x['mark'] = !![], compareToNative(x, MySubClass), compareToNative(y, MySubClass), compareToNative(x, MyClass), compareToNative(y, MyClass);
}