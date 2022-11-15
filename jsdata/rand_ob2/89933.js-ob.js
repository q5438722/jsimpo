const _0x5779 = [
    'find',
    '8318NSrKSz',
    '23PDzCPc',
    '409936EOSNwQ',
    '97077fBSEFq',
    '3iTDpsf',
    '287011rRDYNd',
    '1bCtUXy',
    '676201YcubkR',
    '833277GsmARp',
    '1651017qBXcLP',
    'image-traced',
    'fixed',
    '/traced',
    'waitForRouteChange',
    'renders\x20a\x20traced\x20svg',
    'getTestElement',
    '.gatsby-image-wrapper\x20>\x20img',
    'should',
    'have.attr',
    'src',
    'and',
    'data:image/svg+xml',
    'forEach',
    'works\x20on\x20png\x20files',
    'image-traced-png',
    '.gatsby-image-wrapper',
    'exist',
    'works\x20on\x20relative\x20paths\x20outside\x20of\x20src'
];
const _0x5034c2 = _0x4f50;
(function (_0x4100f7, _0x2faf18) {
    const _0x48a1f6 = _0x4f50;
    while (!![]) {
        try {
            const _0x420c42 = parseInt(_0x48a1f6(0x7c)) * parseInt(_0x48a1f6(0x7d)) + -parseInt(_0x48a1f6(0x7e)) + parseInt(_0x48a1f6(0x7f)) + -parseInt(_0x48a1f6(0x80)) * parseInt(_0x48a1f6(0x81)) + -parseInt(_0x48a1f6(0x82)) * parseInt(_0x48a1f6(0x83)) + parseInt(_0x48a1f6(0x84)) + parseInt(_0x48a1f6(0x85));
            if (_0x420c42 === _0x2faf18)
                break;
            else
                _0x4100f7['push'](_0x4100f7['shift']());
        } catch (_0x266267) {
            _0x4100f7['push'](_0x4100f7['shift']());
        }
    }
}(_0x5779, 0xc98ab));
const tracedTestId = _0x5034c2(0x86);
function _0x4f50(_0x5aad0a, _0x2ff284) {
    return _0x4f50 = function (_0x577977, _0x4f5065) {
        _0x577977 = _0x577977 - 0x7c;
        let _0x395dfb = _0x5779[_0x577977];
        return _0x395dfb;
    }, _0x4f50(_0x5aad0a, _0x2ff284);
}
describe(_0x5034c2(0x87), () => {
    const _0x2710ec = _0x5034c2;
    beforeEach(() => {
        const _0x78cbfc = _0x4f50;
        cy['visit'](_0x78cbfc(0x88))[_0x78cbfc(0x89)]();
    }), it(_0x2710ec(0x8a), () => {
        const _0x30cd11 = _0x2710ec;
        cy[_0x30cd11(0x8b)](tracedTestId)['find'](_0x30cd11(0x8c))[_0x30cd11(0x8d)](_0x30cd11(0x8e), _0x30cd11(0x8f))[_0x30cd11(0x90)](_0x4f3dd7 => {
            const _0xfcec5e = _0x30cd11;
            ;
            [_0xfcec5e(0x91)][_0xfcec5e(0x92)](_0x334a7c => expect(_0x4f3dd7)['to']['include'](_0x334a7c));
        });
    }), it(_0x2710ec(0x93), () => {
        const _0x321bcf = _0x2710ec;
        cy[_0x321bcf(0x8b)](_0x321bcf(0x94))['find'](_0x321bcf(0x95))[_0x321bcf(0x8d)](_0x321bcf(0x96));
    }), it(_0x2710ec(0x97), () => {
        const _0x2fa6ad = _0x2710ec;
        cy[_0x2fa6ad(0x8b)]('image-traced-relative')[_0x2fa6ad(0x98)](_0x2fa6ad(0x95))[_0x2fa6ad(0x8d)](_0x2fa6ad(0x96));
    });
});
