const _0x18ae = ['array instanceof Array', 'array.length', '21803MRFFdK', '5yNBYga', '215661HzGuJE', '1lflQYB', '91464XmSLYk', '13HoFUlG', '6880WhcegP', '1233ZTXFEH', '43CBrxzW', '2wxjCAs', '66829VceGEA', '8255qFOFFY', '19QxSNJg', 'This tests that array construction via a host call works.'];
const _0x8cdf20 = _0x1377;

(function (_0x4120f2, _0x38e23d) {
    const _0x10c136 = _0x1377;

    while (true) {
        try {
            const _0x1e2296 = -parseInt(_0x10c136(0x199)) * -parseInt(_0x10c136(0x19a)) + parseInt(_0x10c136(0x19b)) * parseInt(_0x10c136(0x19c)) + parseInt(_0x10c136(0x19d)) + parseInt(_0x10c136(0x19e)) * parseInt(_0x10c136(0x19f)) + -parseInt(_0x10c136(0x1a0)) * parseInt(_0x10c136(0x1a1)) + -parseInt(_0x10c136(0x1a2)) * parseInt(_0x10c136(0x1a3)) + parseInt(_0x10c136(0x1a4)) * -parseInt(_0x10c136(0x1a5));

            if (_0x1e2296 === _0x38e23d) break;else _0x4120f2.push(_0x4120f2.shift());
        } catch (_0x2cb014) {
            _0x4120f2.push(_0x4120f2.shift());
        }
    }
})(_0x18ae, 162058), description(_0x8cdf20(0x1a6));
function _0x1377(_0x4f0707, _0x4a97d1) {
    return _0x1377 = function (_0x123d07, _0x37b8fb) {
        _0x123d07 = _0x123d07 - 409;
        const _0x46c551 = _0x18ae[_0x123d07];

        return _0x46c551;
    }, _0x1377(_0x4f0707, _0x4a97d1);
}
function constructArray(_0x3b10bf) {
    return new _0x3b10bf(100);
}
for (var i = 0; i < 3; ++i) {
    const array = constructArray(Array);

    shouldBeTrue(_0x8cdf20(0x1a7)), shouldBe(_0x8cdf20(0x1a8), '100');
}
