var x_ = 0;
this['__defineSetter__']('x', function (_0x54903c) {
    x_ = _0x54903c;
});
this['__defineGetter__']('x', function () {
    return x_;
});
this['__defineSetter__']('y', function (_0x4ddbe5) {
});
this['__defineGetter__']('y', function () {
    return 7;
});
function f(_0xe85181) {
    x = x + _0xe85181;
    return x;
}
function g(_0x2745d7) {
    y = y + _0x2745d7;
    return y;
}
assertEquals(1, f(1));
assertEquals(3, f(2));
assertEquals(7, g(1));
assertEquals(7, g(2));