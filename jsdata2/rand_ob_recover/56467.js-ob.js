function _0x3a52(_0x19f26c, _0x4dc655) {
    return _0x3a52 = function (_0x4795ce, _0x4c700e) {
        _0x4795ce = _0x4795ce - (3 * -485 + 4230 + 8 * -290);
        let _0x4f93c7 = _0x3aa2[_0x4795ce];
        return _0x4f93c7;
    }, _0x3a52(_0x19f26c, _0x4dc655);
}
const common = require(_0x2f438b(467)), fs = require('fs'), assert = require(_0x2f438b(468)), addon = require('./build/' + common[_0x2f438b(469)] + _0x2f438b(470)), path = require(_0x2f438b(471)), v8TestsDir = path[_0x2f438b(472)](__dirname, '..', '..', '..', _0x2f438b(473), 'v8', _0x2f438b(474), _0x2f438b(475)), v8TestsDirExists = fs[_0x2f438b(476)](v8TestsDir);
function assertTrue(_0x5ee76d) {
    return assert['strictEqual'](_0x5ee76d, !![]);
}
function assertFalse(_0xd7ff8d) {
    const _0x646bd3 = _0x2f438b;
    assert[_0x646bd3(477)](_0xd7ff8d, ![]);
}
function assertEquals(_0xeddaa0, _0x1de0cc) {
    const _0x4f1447 = _0x2f438b;
    assert[_0x4f1447(477)](_0xeddaa0, _0x1de0cc);
}
function assertThrows(_0x4cdc32) {
    const _0x173a80 = _0x2f438b, _0x3fc46d = {
            'RICss': function (_0x1c5a4d, _0x596492) {
                return _0x1c5a4d(_0x596492);
            }
        };
    assert[_0x173a80(478)](function () {
        const _0x523125 = _0x173a80;
        _0x3fc46d[_0x523125(479)](eval, _0x4cdc32);
    }, Error);
}
function testFile(_0x4ea72f) {
    const _0x291ae4 = _0x2f438b, _0xa4a985 = {
            'KiMoQ': _0x291ae4(480),
            'PfLIJ': _0x291ae4(481),
            'XnESW': 'ENOENT'
        };
    try {
        const _0x3082c8 = fs[_0x291ae4(482)](_0x4ea72f, { 'encoding': _0xa4a985[_0x291ae4(483)] });
        eval(_0x3082c8['replace'](/[(]([^\s(]+)\s+instanceof\s+([^)]+)[)]/g, _0xa4a985[_0x291ae4(484)]));
    } catch (_0x449848) {
        if (_0x449848[_0x291ae4(485)] === _0xa4a985[_0x291ae4(486)] && !v8TestsDirExists)
            process['emitWarning'](_0x291ae4(487) + _0x4ea72f + _0x291ae4(488));
        else
            throw _0x449848;
    }
}
testFile(path['join'](v8TestsDir, _0x2f438b(489))), testFile(path['join'](v8TestsDir, 'instanceof-2.js'));
if (typeof Symbol !== _0x2f438b(490) && _0x2f438b(491) in Symbol && typeof Symbol['hasInstance'] === _0x2f438b(492)) {
    function compareToNative(_0x287957, _0x53c9c5) {
        const _0x217638 = _0x2f438b, _0x140415 = {
                'YdkQp': function (_0x130c3f, _0x4f4241) {
                    return _0x130c3f instanceof _0x4f4241;
                }
            };
        assert[_0x217638(477)](addon[_0x217638(493)](_0x287957, _0x53c9c5), _0x140415[_0x217638(494)](_0x287957, _0x53c9c5));
    }
    function MyClass() {
    }
    Object[_0x2f438b(495)](MyClass, Symbol['hasInstance'], {
        'value': function (_0xbf7098) {
            const _0x206474 = _0x2f438b;
            return _0x206474(496) in _0xbf7098;
        }
    });
    function MySubClass() {
    }
    MySubClass[_0x2f438b(497)] = new MyClass();
    let x = new MySubClass(), y = new MySubClass();
    x['mark'] = !![], compareToNative(x, MySubClass), compareToNative(y, MySubClass), compareToNative(x, MyClass), compareToNative(y, MyClass), x = new MyClass(), y = new MyClass(), x['mark'] = !![], compareToNative(x, MySubClass), compareToNative(y, MySubClass), compareToNative(x, MyClass), compareToNative(y, MyClass);
}