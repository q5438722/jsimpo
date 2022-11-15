var functionToCatch, lineNumber;
function catchLineNumber() {
    var _0x3dc1c0 = _0x4bd6, _0xb14f13 = {};
    return Error[_0x3dc1c0(380)] = function (_0x1d4eb7, _0xe59f68) {
        var _0xf3fa23 = _0x3dc1c0;
        return _0xe59f68[_0xf3fa23(381)](function (_0x38a505) {
            var _0x6a47f0 = _0xf3fa23;
            if (_0x38a505[_0x6a47f0(382)]() == functionToCatch)
                return lineNumber = _0x38a505['getLineNumber'](), !![];
            return ![];
        }), lineNumber;
    }, Error[_0x3dc1c0(383)](_0xb14f13), _0xb14f13['stack'];
}
function log() {
    catchLineNumber();
}
function foo() {
}
function test1() {
    log(foo() == foo() ? 'a' : 'b');
}
function test2() {
    var _0x5a6cd9 = {
        'foo': function () {
        }
    };
    log(_0x5a6cd9['foo']() == _0x5a6cd9['foo']() ? 'a' : 'b');
}
function _0x4bd6(_0xb41a1d, _0x1728ac) {
    return _0x4bd6 = function (_0x1e82c2, _0x4bd6ac) {
        _0x1e82c2 = _0x1e82c2 - 368;
        var _0x43fc1c = _0x1e82[_0x1e82c2];
        return _0x43fc1c;
    }, _0x4bd6(_0xb41a1d, _0x1728ac);
}
function test3() {
    var _0x4374cd = {
        'log': log,
        'foo': function () {
        }
    };
    _0x4374cd['log'](_0x4374cd['foo']() == _0x4374cd['foo']() ? 'a' : 'b');
}
function test(_0x2c1d6c, _0xfc2817) {
    functionToCatch = _0x2c1d6c, _0x2c1d6c(), assertEquals(_0xfc2817, lineNumber);
}
test(test1, 58), test(test2, 65), test(test3, 72), eval(test1['toString']() + _0x4b12e4(384)), eval(test2['toString']() + '//@ sourceUrl=foo'), eval(test3[_0x4b12e4(385)]() + _0x4b12e4(384)), test(test1, 2), test(test2, 3), test(test3, 3);