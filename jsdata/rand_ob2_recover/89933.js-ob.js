const tracedTestId = _0x5034c2(134);
function _0x4f50(_0x5aad0a, _0x2ff284) {
    return _0x4f50 = function (_0x577977, _0x4f5065) {
        _0x577977 = _0x577977 - 124;
        let _0x395dfb = _0x5779[_0x577977];
        return _0x395dfb;
    }, _0x4f50(_0x5aad0a, _0x2ff284);
}
describe(_0x5034c2(135), () => {
    const _0x2710ec = _0x5034c2;
    beforeEach(() => {
        const _0x78cbfc = _0x4f50;
        cy['visit'](_0x78cbfc(136))[_0x78cbfc(137)]();
    }), it(_0x2710ec(138), () => {
        const _0x30cd11 = _0x2710ec;
        cy[_0x30cd11(139)](tracedTestId)['find'](_0x30cd11(140))[_0x30cd11(141)](_0x30cd11(142), _0x30cd11(143))[_0x30cd11(144)](_0x4f3dd7 => {
            const _0xfcec5e = _0x30cd11;
            ;
            [_0xfcec5e(145)][_0xfcec5e(146)](_0x334a7c => expect(_0x4f3dd7)['to']['include'](_0x334a7c));
        });
    }), it(_0x2710ec(147), () => {
        const _0x321bcf = _0x2710ec;
        cy[_0x321bcf(139)](_0x321bcf(148))['find'](_0x321bcf(149))[_0x321bcf(141)](_0x321bcf(150));
    }), it(_0x2710ec(151), () => {
        const _0x2fa6ad = _0x2710ec;
        cy[_0x2fa6ad(139)]('image-traced-relative')[_0x2fa6ad(152)](_0x2fa6ad(149))[_0x2fa6ad(141)](_0x2fa6ad(150));
    });
});