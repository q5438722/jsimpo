description('This\x20tests\x20that\x20array\x20construction\x20via\x20a\x20host\x20call\x20works.');
function constructArray(_0x182b5c) {
    return new _0x182b5c(0x64);
}
for (var i = 0x0; i < 0x3; ++i) {
    var array = constructArray(Array);
    shouldBeTrue('array\x20instanceof\x20Array'), shouldBe('array.length', '100');
}
