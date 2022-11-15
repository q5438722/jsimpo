const tracedTestId = _0x1b2fe0(187);
function _0x26c4(_0x2c965b, _0x152953) {
    return _0x26c4 = function (_0x55bb20, _0x27e524) {
        _0x55bb20 = _0x55bb20 - (3203 + -4892 + 1866);
        let _0x4cf7f9 = _0x1698[_0x55bb20];
        return _0x4cf7f9;
    }, _0x26c4(_0x2c965b, _0x152953);
}
describe('fixed', () => {
    const _0x2d722f = _0x1b2fe0, _0x18253c = {
            'wkhtx': function (_0x42fc1b, _0x47e652) {
                return _0x42fc1b(_0x47e652);
            },
            'zMHzu': function (_0x44b508, _0x4cc633, _0x219012) {
                return _0x44b508(_0x4cc633, _0x219012);
            }
        };
    _0x18253c[_0x2d722f(188)](beforeEach, () => {
        const _0x350b04 = _0x2d722f;
        cy['visit'](_0x350b04(189))['waitForRouteChange']();
    }), _0x18253c[_0x2d722f(190)](it, 'renders a traced svg', () => {
        const _0x31593d = _0x2d722f;
        cy[_0x31593d(191)](tracedTestId)[_0x31593d(192)](_0x31593d(193))[_0x31593d(194)]('have.attr', 'src')['and'](_0x3f621b => {
            const _0x5e1eaf = _0x31593d;
            ;
            [_0x5e1eaf(195)]['forEach'](_0x1a1c65 => expect(_0x3f621b)['to'][_0x5e1eaf(196)](_0x1a1c65));
        });
    }), _0x18253c[_0x2d722f(190)](it, _0x2d722f(197), () => {
        const _0xd60b10 = _0x2d722f;
        cy[_0xd60b10(191)]('image-traced-png')[_0xd60b10(192)](_0xd60b10(198))[_0xd60b10(194)](_0xd60b10(199));
    }), _0x18253c['zMHzu'](it, _0x2d722f(200), () => {
        const _0x2143d0 = _0x2d722f;
        cy[_0x2143d0(191)]('image-traced-relative')[_0x2143d0(192)]('.gatsby-image-wrapper')['should']('exist');
    });
});