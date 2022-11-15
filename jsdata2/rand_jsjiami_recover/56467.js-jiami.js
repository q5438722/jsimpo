'use strict';
const common = require('../../common');
const fs = require('fs');
const assert = require('assert');
const addon = require('./build/' + common['buildType'] + '/test_general');
const path = require('path');
const v8TestsDir = path['resolve'](__dirname, '..', '..', '..', 'deps', 'v8', 'test', 'mjsunit');
const v8TestsDirExists = fs['existsSync'](v8TestsDir);
function assertTrue(_0x181523) {
    return assert['strictEqual'](_0x181523, !![]);
}
function assertFalse(_0x1f8f2d) {
    assert['strictEqual'](_0x1f8f2d, ![]);
}
function assertEquals(_0x464175, _0x1db8d9) {
    assert['strictEqual'](_0x464175, _0x1db8d9);
}
function assertThrows(_0x1e9b89) {
    assert['throws'](function () {
        eval(_0x1e9b89);
    }, Error);
}
function testFile(_0x317e28) {
    try {
        const _0x204388 = fs['readFileSync'](_0x317e28, { 'encoding': 'utf8' });
        eval(_0x204388['replace'](/[(]([^\s(]+)\s+instanceof\s+([^)]+)[)]/g, '(addon.doInstanceOf($1, $2))'));
    } catch (_0x329f2c) {
        if (_0x329f2c['code'] === 'ENOENT' && !v8TestsDirExists)
            process['emitWarning']('test file ' + _0x317e28 + ' does not exist.');
        else
            throw _0x329f2c;
    }
}
testFile(path['join'](v8TestsDir, 'instanceof.js'));
testFile(path['join'](v8TestsDir, 'instanceof-2.js'));
if (typeof Symbol !== 'undefined' && 'hasInstance' in Symbol && typeof Symbol['hasInstance'] === 'symbol') {
    function compareToNative(_0x3c201e, _0x326eb0) {
        assert['strictEqual'](addon['doInstanceOf'](_0x3c201e, _0x326eb0), _0x3c201e instanceof _0x326eb0);
    }
    function MyClass() {
    }
    Object['defineProperty'](MyClass, Symbol['hasInstance'], {
        'value': function (_0x559155) {
            return 'mark' in _0x559155;
        }
    });
    function MySubClass() {
    }
    MySubClass['prototype'] = new MyClass();
    let x = new MySubClass();
    let y = new MySubClass();
    x['mark'] = !![];
    compareToNative(x, MySubClass);
    compareToNative(y, MySubClass);
    compareToNative(x, MyClass);
    compareToNative(y, MyClass);
    x = new MyClass();
    y = new MyClass();
    x['mark'] = !![];
    compareToNative(x, MySubClass);
    compareToNative(y, MySubClass);
    compareToNative(x, MyClass);
    compareToNative(y, MyClass);
}