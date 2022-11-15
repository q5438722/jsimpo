description('This tests that array construction via a host call works.');
function constructArray(_0x59a95e) {
    return new _0x59a95e(100);
}
for (var i = 0; i < 3; ++i) {
    var array = constructArray(Array);
    shouldBeTrue('array instanceof Array');
    shouldBe('array.length', '100');
}