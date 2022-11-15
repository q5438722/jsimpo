Debug = debug['Debug'];
var result;
function listener(_0x21a45c, _0x56a98a, _0x1ee9b3, _0x63853d) {
    var _0x1701e5 = _0x575c;
    try {
        _0x21a45c == Debug['DebugEvent']['Break'] && (result = _0x56a98a[_0x1701e5(213)](0)['evaluate']('this.a')[_0x1701e5(214)]());
    } catch (_0x55d7fa) {
        result = _0x55d7fa[_0x1701e5(215)];
    }
}
Debug[_0x4eee30(216)](listener);
class A {
    constructor() {
        this['a'] = 239;
    }
}
class B extends A {
    constructor() {
        var _0x2117ad = _0x4eee30;
        debugger;
        assertTrue(result[_0x2117ad(217)](_0x2117ad(218)) >= 0), super();
        debugger;
        assertEquals(239, result);
    }
}
function _0x575c(_0x4b1619, _0x56f206) {
    return _0x575c = function (_0x497f85, _0x575ce1) {
        _0x497f85 = _0x497f85 - 203;
        var _0x1f98a6 = _0x497f[_0x497f85];
        return _0x1f98a6;
    }, _0x575c(_0x4b1619, _0x56f206);
}
new B(), Debug[_0x4eee30(216)](null);