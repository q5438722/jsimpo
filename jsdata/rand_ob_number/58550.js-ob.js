description('Test\x20for\x20function.prototype\x27s\x20property\x20descriptor.');
function test(_0x283477) {
    descriptor = Object['getOwnPropertyDescriptor'](_0x283477, 'prototype'), shouldBeTrue('descriptor[\x27writable\x27]'), shouldBeFalse('descriptor[\x27enumerable\x27]'), shouldBeFalse('descriptor[\x27configurable\x27]');
}
function a() {
}
test(a);
function b() {
}
b['prototype'] = {}, test(b);
function c() {
}
shouldThrow('Object.defineProperty(c,\x20\x27prototype\x27,\x20{\x20get:\x20function(){}\x20})'), test(c);
