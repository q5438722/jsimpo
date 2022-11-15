const _0x1698 = ['1nOaFCB', '159827xUKCOr', '66445OMUEbs', '117316HBdmBM', '9AGWNDS', '24663cJDHmm', '11jeQMks', '10588CJNVPS', 'image-traced', 'wkhtx', '/traced', 'zMHzu', 'getTestElement', 'find', '.gatsby-image-wrapper > img', 'should', 'data:image/svg+xml', 'include', 'works on png files', '.gatsby-image-wrapper', 'exist', 'works on relative paths outside of src', '193691NbEudA', '98590gtBBrk'];
const _0x1b2fe0 = _0x26c4;

(function (_0xf0f5c8, _0x2c055d) {
    const _0x54587b = _0x26c4;

    while (true) {
        try {
            const _0x4bbf01 = -parseInt(_0x54587b(0xb1)) + -parseInt(_0x54587b(0xb2)) * -parseInt(_0x54587b(0xb3)) + -parseInt(_0x54587b(0xb4)) + -parseInt(_0x54587b(0xb5)) + parseInt(_0x54587b(0xb6)) + parseInt(_0x54587b(0xb7)) * parseInt(_0x54587b(0xb8)) + -parseInt(_0x54587b(0xb9)) * -parseInt(_0x54587b(0xba));

            if (_0x4bbf01 === _0x2c055d) break;else _0xf0f5c8.push(_0xf0f5c8.shift());
        } catch (_0x13b80e) {
            _0xf0f5c8.push(_0xf0f5c8.shift());
        }
    }
})(_0x1698, 134378);

const tracedTestId = _0x1b2fe0(0xbb);

function _0x26c4(_0x2c965b, _0x152953) {
    return _0x26c4 = function (_0x55bb20, _0x27e524) {
        _0x55bb20 = _0x55bb20 - 177;
        const _0x4cf7f9 = _0x1698[_0x55bb20];

        return _0x4cf7f9;
    }, _0x26c4(_0x2c965b, _0x152953);
}
describe('fixed', () => {
    const _0x2d722f = _0x1b2fe0;
    const _0x18253c = {
        'wkhtx': function (_0x42fc1b, _0x47e652) {
            return _0x42fc1b(_0x47e652);
        },
        'zMHzu': function (_0x44b508, _0x4cc633, _0x219012) {
            return _0x44b508(_0x4cc633, _0x219012);
        }
    };

    _0x18253c[_0x2d722f(0xbc)](beforeEach, () => {
        const _0x350b04 = _0x2d722f;

        cy.visit(_0x350b04(0xbd)).waitForRouteChange();
    }), _0x18253c[_0x2d722f(0xbe)](it, 'renders a traced svg', () => {
        const _0x31593d = _0x2d722f;

        cy[_0x31593d(0xbf)](tracedTestId)[_0x31593d(0xc0)](_0x31593d(0xc1))[_0x31593d(0xc2)]('have.attr', 'src').and(_0x3f621b => {
            const _0x5e1eaf = _0x31593d;

            ;
            [_0x5e1eaf(0xc3)].forEach(_0x1a1c65 => expect(_0x3f621b).to[_0x5e1eaf(0xc4)](_0x1a1c65));
        });
    }), _0x18253c[_0x2d722f(0xbe)](it, _0x2d722f(0xc5), () => {
        const _0xd60b10 = _0x2d722f;

        cy[_0xd60b10(0xbf)]('image-traced-png')[_0xd60b10(0xc0)](_0xd60b10(0xc6))[_0xd60b10(0xc2)](_0xd60b10(0xc7));
    }), _0x18253c.zMHzu(it, _0x2d722f(0xc8), () => {
        const _0x2143d0 = _0x2d722f;

        cy[_0x2143d0(0xbf)]('image-traced-relative')[_0x2143d0(0xc0)]('.gatsby-image-wrapper').should('exist');
    });
});
