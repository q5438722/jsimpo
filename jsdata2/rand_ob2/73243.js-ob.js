const _0x1907 = [
    '2awNrUg',
    '54837BnUCmT',
    '231619pDCXWe',
    '[data-test-label=\x27landing-header\x27]',
    '[data-test-label=\x27landing-big-cta\x27]',
    '[data-test-label=\x27testimonial-cards\x27]',
    'Responsive\x20Web\x20Design',
    'JavaScript\x20Algorithms\x20and\x20Data\x20Structures',
    'Front\x20End\x20Development\x20Libraries',
    'Data\x20Visualization',
    'Back\x20End\x20Development\x20and\x20APIs',
    'Scientific\x20Computing\x20with\x20Python',
    'Data\x20Analysis\x20with\x20Python',
    'Machine\x20Learning\x20with\x20Python',
    'Landing\x20page',
    'visit',
    'Learn\x20to\x20Code\x20—\x20For\x20Free\x20—\x20Coding\x20Courses\x20for\x20Busy\x20People',
    'callToAction',
    'Get\x20started\x20(it\x27s\x20free)',
    'get',
    'have.length',
    'contains',
    'heading',
    'Learn\x20to\x20code\x20—\x20for\x20free.',
    'Build\x20projects.',
    'be.visible',
    'should',
    'Since\x202014,\x20more\x20than\x2040,000\x20freeCodeCamp.org\x20',
    'graduates\x20have\x20gotten\x20jobs\x20at\x20tech\x20companies\x20including:',
    'Has\x205\x20brand\x20logos',
    '.logo-row',
    'children',
    'length',
    'Has\x20`as\x20seens\x20as`\x20section',
    '.big-heading',
    'siblings',
    'svg',
    'Has\x20a\x20visible\x20large\x20image\x20on\x20large\x20viewports',
    'viewport',
    'landingPageImage',
    'not.exist',
    'Has\x20links\x20to\x20all\x20the\x20certifications',
    'certifications',
    'its',
    'wrap',
    'each',
    'testimonials',
    '15880dHCPzg',
    '2vqRcYO',
    '121644GKUBBK',
    '10MtJYdX',
    '12148PCxaSz',
    '1dVAjWo',
    '28517bWEJVr',
    '7JcOMtx',
    '9847EKbzxJ'
];
const _0x24e350 = _0xec2c;
(function (_0xbbcba1, _0x1ca8c5) {
    const _0x383dc1 = _0xec2c;
    while (!![]) {
        try {
            const _0xd22fab = -parseInt(_0x383dc1(0x1bc)) * -parseInt(_0x383dc1(0x1bd)) + -parseInt(_0x383dc1(0x1be)) + parseInt(_0x383dc1(0x1bf)) * parseInt(_0x383dc1(0x1c0)) + -parseInt(_0x383dc1(0x1c1)) * -parseInt(_0x383dc1(0x1c2)) + -parseInt(_0x383dc1(0x1c3)) * parseInt(_0x383dc1(0x1c4)) + -parseInt(_0x383dc1(0x1c5)) * parseInt(_0x383dc1(0x1c6)) + parseInt(_0x383dc1(0x1c7));
            if (_0xd22fab === _0x1ca8c5)
                break;
            else
                _0xbbcba1['push'](_0xbbcba1['shift']());
        } catch (_0x319c50) {
            _0xbbcba1['push'](_0xbbcba1['shift']());
        }
    }
}(_0x1907, 0x1b9e9));
function _0xec2c(_0x2f2430, _0x454122) {
    return _0xec2c = function (_0x1907ab, _0xec2c5f) {
        _0x1907ab = _0x1907ab - 0x1bc;
        let _0x3cc292 = _0x1907[_0x1907ab];
        return _0x3cc292;
    }, _0xec2c(_0x2f2430, _0x454122);
}
const selectors = {
        'heading': _0x24e350(0x1c8),
        'callToAction': _0x24e350(0x1c9),
        'certifications': '[data-test-label=\x27certifications\x27]',
        'testimonials': _0x24e350(0x1ca),
        'landingPageImage': '.landing-page-image'
    }, certifications = [
        _0x24e350(0x1cb),
        _0x24e350(0x1cc),
        _0x24e350(0x1cd),
        _0x24e350(0x1ce),
        _0x24e350(0x1cf),
        'Quality\x20Assurance',
        _0x24e350(0x1d0),
        _0x24e350(0x1d1),
        'Information\x20Security',
        _0x24e350(0x1d2)
    ];
describe(_0x24e350(0x1d3), () => {
    const _0x50d8c4 = _0x24e350;
    it('Should\x20render', () => {
        const _0x336111 = _0xec2c;
        cy[_0x336111(0x1d4)]('/'), cy['title']()['should']('eq', _0x336111(0x1d5)), cy['contains'](selectors[_0x336111(0x1d6)], _0x336111(0x1d7)), cy[_0x336111(0x1d8)](selectors['callToAction'])['should'](_0x336111(0x1d9), 0x2);
    }), it('Has\x20visible\x20header\x20and\x20sub-header', () => {
        const _0x1fee87 = _0xec2c;
        cy[_0x1fee87(0x1da)](selectors[_0x1fee87(0x1db)], _0x1fee87(0x1dc)), cy[_0x1fee87(0x1da)](_0x1fee87(0x1dd))['should'](_0x1fee87(0x1de)), cy[_0x1fee87(0x1da)]('Earn\x20certifications.')[_0x1fee87(0x1df)](_0x1fee87(0x1de)), cy[_0x1fee87(0x1da)](_0x1fee87(0x1e0) + _0x1fee87(0x1e1))['should'](_0x1fee87(0x1de));
    }), it(_0x50d8c4(0x1e2), () => {
        const _0x2464c5 = _0x50d8c4;
        cy[_0x2464c5(0x1d8)](_0x2464c5(0x1e3))[_0x2464c5(0x1e4)]()['its'](_0x2464c5(0x1e5))['should']('eq', 0x5);
    }), it(_0x50d8c4(0x1e6), () => {
        const _0x37fe1d = _0x50d8c4;
        cy[_0x37fe1d(0x1da)](_0x37fe1d(0x1dd))[_0x37fe1d(0x1df)](_0x37fe1d(0x1de)), cy[_0x37fe1d(0x1d8)](_0x37fe1d(0x1e7))[_0x37fe1d(0x1e8)]()['get'](_0x37fe1d(0x1e9));
    }), it(_0x50d8c4(0x1ea), function () {
        const _0x5869c4 = _0x50d8c4;
        cy[_0x5869c4(0x1eb)](0x4b0, 0x294)[_0x5869c4(0x1d8)](selectors[_0x5869c4(0x1ec)])[_0x5869c4(0x1df)]('be.visible'), cy[_0x5869c4(0x1eb)](0x4af, 0x294)[_0x5869c4(0x1d8)](selectors['landingPageImage'])[_0x5869c4(0x1df)](_0x5869c4(0x1ed));
    }), it(_0x50d8c4(0x1ee), function () {
        const _0x3f909d = _0x50d8c4;
        cy[_0x3f909d(0x1d8)](selectors[_0x3f909d(0x1ef)])['children']()[_0x3f909d(0x1f0)](_0x3f909d(0x1e5))[_0x3f909d(0x1df)]('eq', 0xa), cy[_0x3f909d(0x1f1)](certifications)[_0x3f909d(0x1f2)](_0x47c41a => {
            const _0x93debb = _0x3f909d;
            cy[_0x93debb(0x1d8)](selectors[_0x93debb(0x1ef)])['contains'](_0x47c41a);
        });
    }), it('Has\x203\x20testimonial\x20cards', function () {
        const _0x34457e = _0x50d8c4;
        cy[_0x34457e(0x1d8)](selectors[_0x34457e(0x1f3)])['children']()[_0x34457e(0x1f0)](_0x34457e(0x1e5))['should']('eq', 0x3);
    });
});
