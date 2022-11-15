description('Test for function.prototype\'s property descriptor.');
function test(_0x1aba37) {
    descriptor = Object['getOwnPropertyDescriptor'](_0x1aba37, 'prototype');
    shouldBeTrue('descriptor[\'writable\']');
    shouldBeFalse('descriptor[\'enumerable\']');
    shouldBeFalse('descriptor[\'configurable\']');
}
function a() {
}
test(a);
function b() {
}
b['prototype'] = {};
test(b);
function c() {
}
shouldThrow('Object.defineProperty(c, \'prototype\', { get: function(){} })');
test(c);