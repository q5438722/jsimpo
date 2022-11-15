function _0xec2c(_0x2f2430, _0x454122) {
    return _0xec2c = function (_0x1907ab, _0xec2c5f) {
        _0x1907ab = _0x1907ab - 444;
        let _0x3cc292 = _0x1907[_0x1907ab];
        return _0x3cc292;
    }, _0xec2c(_0x2f2430, _0x454122);
}
const selectors = {
        'heading': _0x24e350(456),
        'callToAction': _0x24e350(457),
        'certifications': '[data-test-label=\'certifications\']',
        'testimonials': _0x24e350(458),
        'landingPageImage': '.landing-page-image'
    }, certifications = [
        _0x24e350(459),
        _0x24e350(460),
        _0x24e350(461),
        _0x24e350(462),
        _0x24e350(463),
        'Quality Assurance',
        _0x24e350(464),
        _0x24e350(465),
        'Information Security',
        _0x24e350(466)
    ];
describe(_0x24e350(467), () => {
    const _0x50d8c4 = _0x24e350;
    it('Should render', () => {
        const _0x336111 = _0xec2c;
        cy[_0x336111(468)]('/'), cy['title']()['should']('eq', _0x336111(469)), cy['contains'](selectors[_0x336111(470)], _0x336111(471)), cy[_0x336111(472)](selectors['callToAction'])['should'](_0x336111(473), 2);
    }), it('Has visible header and sub-header', () => {
        const _0x1fee87 = _0xec2c;
        cy[_0x1fee87(474)](selectors[_0x1fee87(475)], _0x1fee87(476)), cy[_0x1fee87(474)](_0x1fee87(477))['should'](_0x1fee87(478)), cy[_0x1fee87(474)]('Earn certifications.')[_0x1fee87(479)](_0x1fee87(478)), cy[_0x1fee87(474)](_0x1fee87(480) + _0x1fee87(481))['should'](_0x1fee87(478));
    }), it(_0x50d8c4(482), () => {
        const _0x2464c5 = _0x50d8c4;
        cy[_0x2464c5(472)](_0x2464c5(483))[_0x2464c5(484)]()['its'](_0x2464c5(485))['should']('eq', 5);
    }), it(_0x50d8c4(486), () => {
        const _0x37fe1d = _0x50d8c4;
        cy[_0x37fe1d(474)](_0x37fe1d(477))[_0x37fe1d(479)](_0x37fe1d(478)), cy[_0x37fe1d(472)](_0x37fe1d(487))[_0x37fe1d(488)]()['get'](_0x37fe1d(489));
    }), it(_0x50d8c4(490), function () {
        const _0x5869c4 = _0x50d8c4;
        cy[_0x5869c4(491)](1200, 660)[_0x5869c4(472)](selectors[_0x5869c4(492)])[_0x5869c4(479)]('be.visible'), cy[_0x5869c4(491)](1199, 660)[_0x5869c4(472)](selectors['landingPageImage'])[_0x5869c4(479)](_0x5869c4(493));
    }), it(_0x50d8c4(494), function () {
        const _0x3f909d = _0x50d8c4;
        cy[_0x3f909d(472)](selectors[_0x3f909d(495)])['children']()[_0x3f909d(496)](_0x3f909d(485))[_0x3f909d(479)]('eq', 10), cy[_0x3f909d(497)](certifications)[_0x3f909d(498)](_0x47c41a => {
            const _0x93debb = _0x3f909d;
            cy[_0x93debb(472)](selectors[_0x93debb(495)])['contains'](_0x47c41a);
        });
    }), it('Has 3 testimonial cards', function () {
        const _0x34457e = _0x50d8c4;
        cy[_0x34457e(472)](selectors[_0x34457e(499)])['children']()[_0x34457e(496)](_0x34457e(485))['should']('eq', 3);
    });
});