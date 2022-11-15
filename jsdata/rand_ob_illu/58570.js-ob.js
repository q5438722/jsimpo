const _0x1bab = ['296MBDSmd', '296bvCRZj', '8tNvelk', '71010ztjyfV', '4slHiBp', '15673hkvEsX', '49jeecEr', '77LCxhBU', '765356FPOHmg', '42923vclvQD', '27MutIVW', '1825031dABqAe', '100'];
const _0x5f3afc = _0x24dc;

(function (_0x376099, _0xd1846c) {
    const _0x4dc516 = _0x24dc;

    while (true) {
        try {
            const _0x2897a1 = -parseInt(_0x4dc516(0x98)) * parseInt(_0x4dc516(0x99)) + parseInt(_0x4dc516(0x9a)) * parseInt(_0x4dc516(0x9b)) + parseInt(_0x4dc516(0x9c)) * parseInt(_0x4dc516(0x9d)) + parseInt(_0x4dc516(0x9e)) * -parseInt(_0x4dc516(0x9f)) + parseInt(_0x4dc516(0xa0)) + parseInt(_0x4dc516(0xa1)) * parseInt(_0x4dc516(0xa2)) + -parseInt(_0x4dc516(0xa3));

            if (_0x2897a1 === _0xd1846c) break;else _0x376099.push(_0x376099.shift());
        } catch (_0x3a629a) {
            _0x376099.push(_0x376099.shift());
        }
    }
})(_0x1bab, 638629), description('This tests that array construction via a host call works.');
function _0x24dc(_0x1a7912, _0x57415b) {
    return _0x24dc = function (_0x1ca7ef, _0x398e2d) {
        _0x1ca7ef = _0x1ca7ef - 152;
        const _0x5b1388 = _0x1bab[_0x1ca7ef];

        return _0x5b1388;
    }, _0x24dc(_0x1a7912, _0x57415b);
}
function constructArray(_0x413e72) {
    return new _0x413e72(100);
}
for (var i = 0; i < 3; ++i) {
    const array = constructArray(Array);

    shouldBeTrue('array instanceof Array'), shouldBe('array.length', _0x5f3afc(0xa4));
}
