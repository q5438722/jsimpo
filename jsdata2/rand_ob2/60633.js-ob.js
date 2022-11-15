var _0x1e82 = [
    '21069ZrqhQu',
    '11nnnSkc',
    'prepareStackTrace',
    'some',
    'getFunction',
    'captureStackTrace',
    '//@\x20sourceUrl=foo',
    'toString',
    '898428IZhjpc',
    '1HkiGFV',
    '45415dNMRlg',
    '2DkmDHV',
    '4436VtzWeu',
    '203zJysRu',
    '432373TFZNiU',
    '50hEMqzi',
    '4743nMHfvm',
    '520414JgRbeU'
];
var _0x4b12e4 = _0x4bd6;
(function (_0x371664, _0xfa6bd) {
    var _0x38b976 = _0x4bd6;
    while (!![]) {
        try {
            var _0x3613f1 = -parseInt(_0x38b976(0x170)) * -parseInt(_0x38b976(0x171)) + -parseInt(_0x38b976(0x172)) * -parseInt(_0x38b976(0x173)) + parseInt(_0x38b976(0x174)) * parseInt(_0x38b976(0x175)) + -parseInt(_0x38b976(0x176)) + parseInt(_0x38b976(0x177)) * parseInt(_0x38b976(0x178)) + -parseInt(_0x38b976(0x179)) + parseInt(_0x38b976(0x17a)) * -parseInt(_0x38b976(0x17b));
            if (_0x3613f1 === _0xfa6bd)
                break;
            else
                _0x371664['push'](_0x371664['shift']());
        } catch (_0x2947cc) {
            _0x371664['push'](_0x371664['shift']());
        }
    }
}(_0x1e82, 0xe6122));
var functionToCatch, lineNumber;
function catchLineNumber() {
    var _0x3dc1c0 = _0x4bd6, _0xb14f13 = {};
    return Error[_0x3dc1c0(0x17c)] = function (_0x1d4eb7, _0xe59f68) {
        var _0xf3fa23 = _0x3dc1c0;
        return _0xe59f68[_0xf3fa23(0x17d)](function (_0x38a505) {
            var _0x6a47f0 = _0xf3fa23;
            if (_0x38a505[_0x6a47f0(0x17e)]() == functionToCatch)
                return lineNumber = _0x38a505['getLineNumber'](), !![];
            return ![];
        }), lineNumber;
    }, Error[_0x3dc1c0(0x17f)](_0xb14f13), _0xb14f13['stack'];
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
        _0x1e82c2 = _0x1e82c2 - 0x170;
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
test(test1, 0x3a), test(test2, 0x41), test(test3, 0x48), eval(test1['toString']() + _0x4b12e4(0x180)), eval(test2['toString']() + '//@\x20sourceUrl=foo'), eval(test3[_0x4b12e4(0x181)]() + _0x4b12e4(0x180)), test(test1, 0x2), test(test2, 0x3), test(test3, 0x3);
