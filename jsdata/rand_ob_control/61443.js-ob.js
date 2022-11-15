function F() {
}
var a = new F();
function f(_0xd6e4b3) {
    return a[_0xd6e4b3]();
}
a['first'] = function () {
    return 0xb;
}, a[0x0] = function () {
    return 0x16;
};
var obj = {};
a[obj] = function () {
    return 0x21;
}, a['foo'] = 0x0, delete a['foo'];
var b = 'first';
f(b), f(b), assertEquals(0xb, f(b)), assertEquals(0x16, f(0x0)), assertEquals(0x21, f(obj));
