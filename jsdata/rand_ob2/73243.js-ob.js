const _0x3f94 = [
    '594430NXMKDB',
    '196Rovrui',
    '1747ixEbwc',
    '485093TnVnLz',
    '28716dpGcec',
    '1321aZIbiK',
    '557IOsIsm',
    '912981ZEXzCc',
    '[data-test-label=\x27landing-header\x27]',
    '[data-test-label=\x27landing-big-cta\x27]',
    '[data-test-label=\x27certifications\x27]',
    '[data-test-label=\x27testimonial-cards\x27]',
    '.landing-page-image',
    'Data\x20Visualization',
    'Back\x20End\x20Development\x20and\x20APIs',
    'Quality\x20Assurance',
    'Scientific\x20Computing\x20with\x20Python',
    'Data\x20Analysis\x20with\x20Python',
    'Information\x20Security',
    'Machine\x20Learning\x20with\x20Python',
    'Should\x20render',
    'should',
    'Learn\x20to\x20Code\x20—\x20For\x20Free\x20—\x20Coding\x20Courses\x20for\x20Busy\x20People',
    'contains',
    'Get\x20started\x20(it\x27s\x20free)',
    'get',
    'callToAction',
    'Has\x20visible\x20header\x20and\x20sub-header',
    'heading',
    'Learn\x20to\x20code\x20—\x20for\x20free.',
    'Build\x20projects.',
    'be.visible',
    'Earn\x20certifications.',
    'Since\x202014,\x20more\x20than\x2040,000\x20freeCodeCamp.org\x20',
    'graduates\x20have\x20gotten\x20jobs\x20at\x20tech\x20companies\x20including:',
    'Has\x205\x20brand\x20logos',
    '.logo-row',
    'children',
    'its',
    'Has\x20`as\x20seens\x20as`\x20section',
    '.big-heading',
    'svg',
    'Has\x20a\x20visible\x20large\x20image\x20on\x20large\x20viewports',
    'viewport',
    'landingPageImage',
    'Has\x20links\x20to\x20all\x20the\x20certifications',
    'certifications',
    'length',
    'wrap',
    'each',
    'testimonials',
    '27085woKsQW',
    '16drOebG'
];
function _0x5a8b(_0x3f720d, _0x3e2e5d) {
    return _0x5a8b = function (_0x3f94a6, _0x5a8b51) {
        _0x3f94a6 = _0x3f94a6 - 0xf7;
        let _0x4f8935 = _0x3f94[_0x3f94a6];
        return _0x4f8935;
    }, _0x5a8b(_0x3f720d, _0x3e2e5d);
}
const _0x3cea2d = _0x5a8b;
(function (_0x4446a5, _0x529546) {
    const _0x2d1b88 = _0x5a8b;
    while (!![]) {
        try {
            const _0x58ad25 = parseInt(_0x2d1b88(0xf7)) * parseInt(_0x2d1b88(0xf8)) + parseInt(_0x2d1b88(0xf9)) + -parseInt(_0x2d1b88(0xfa)) * parseInt(_0x2d1b88(0xfb)) + -parseInt(_0x2d1b88(0xfc)) + parseInt(_0x2d1b88(0xfd)) + -parseInt(_0x2d1b88(0xfe)) * parseInt(_0x2d1b88(0xff)) + parseInt(_0x2d1b88(0x100));
            if (_0x58ad25 === _0x529546)
                break;
            else
                _0x4446a5['push'](_0x4446a5['shift']());
        } catch (_0x4aeb03) {
            _0x4446a5['push'](_0x4446a5['shift']());
        }
    }
}(_0x3f94, 0x632a9));
const selectors = {
        'heading': _0x3cea2d(0x101),
        'callToAction': _0x3cea2d(0x102),
        'certifications': _0x3cea2d(0x103),
        'testimonials': _0x3cea2d(0x104),
        'landingPageImage': _0x3cea2d(0x105)
    }, certifications = [
        'Responsive\x20Web\x20Design',
        'JavaScript\x20Algorithms\x20and\x20Data\x20Structures',
        'Front\x20End\x20Development\x20Libraries',
        _0x3cea2d(0x106),
        _0x3cea2d(0x107),
        _0x3cea2d(0x108),
        _0x3cea2d(0x109),
        _0x3cea2d(0x10a),
        _0x3cea2d(0x10b),
        _0x3cea2d(0x10c)
    ];
describe('Landing\x20page', () => {
    const _0x752b93 = _0x3cea2d;
    it(_0x752b93(0x10d), () => {
        const _0x3ebdf8 = _0x752b93;
        cy['visit']('/'), cy['title']()[_0x3ebdf8(0x10e)]('eq', _0x3ebdf8(0x10f)), cy[_0x3ebdf8(0x110)](selectors['callToAction'], _0x3ebdf8(0x111)), cy[_0x3ebdf8(0x112)](selectors[_0x3ebdf8(0x113)])[_0x3ebdf8(0x10e)]('have.length', 0x2);
    }), it(_0x752b93(0x114), () => {
        const _0x464e11 = _0x752b93;
        cy[_0x464e11(0x110)](selectors[_0x464e11(0x115)], _0x464e11(0x116)), cy[_0x464e11(0x110)](_0x464e11(0x117))[_0x464e11(0x10e)](_0x464e11(0x118)), cy['contains'](_0x464e11(0x119))[_0x464e11(0x10e)](_0x464e11(0x118)), cy[_0x464e11(0x110)](_0x464e11(0x11a) + _0x464e11(0x11b))[_0x464e11(0x10e)](_0x464e11(0x118));
    }), it(_0x752b93(0x11c), () => {
        const _0x16001b = _0x752b93;
        cy['get'](_0x16001b(0x11d))[_0x16001b(0x11e)]()[_0x16001b(0x11f)]('length')[_0x16001b(0x10e)]('eq', 0x5);
    }), it(_0x752b93(0x120), () => {
        const _0x1d1c36 = _0x752b93;
        cy[_0x1d1c36(0x110)](_0x1d1c36(0x117))['should'](_0x1d1c36(0x118)), cy[_0x1d1c36(0x112)](_0x1d1c36(0x121))['siblings']()[_0x1d1c36(0x112)](_0x1d1c36(0x122));
    }), it(_0x752b93(0x123), function () {
        const _0x43e1aa = _0x752b93;
        cy[_0x43e1aa(0x124)](0x4b0, 0x294)['get'](selectors[_0x43e1aa(0x125)])['should'](_0x43e1aa(0x118)), cy[_0x43e1aa(0x124)](0x4af, 0x294)[_0x43e1aa(0x112)](selectors['landingPageImage'])[_0x43e1aa(0x10e)]('not.exist');
    }), it(_0x752b93(0x126), function () {
        const _0x3bd2b1 = _0x752b93;
        cy[_0x3bd2b1(0x112)](selectors[_0x3bd2b1(0x127)])['children']()[_0x3bd2b1(0x11f)](_0x3bd2b1(0x128))[_0x3bd2b1(0x10e)]('eq', 0xa), cy[_0x3bd2b1(0x129)](certifications)[_0x3bd2b1(0x12a)](_0x58d8b0 => {
            const _0x44b3bd = _0x3bd2b1;
            cy[_0x44b3bd(0x112)](selectors[_0x44b3bd(0x127)])[_0x44b3bd(0x110)](_0x58d8b0);
        });
    }), it('Has\x203\x20testimonial\x20cards', function () {
        const _0x52d460 = _0x752b93;
        cy['get'](selectors[_0x52d460(0x12b)])[_0x52d460(0x11e)]()[_0x52d460(0x11f)](_0x52d460(0x128))[_0x52d460(0x10e)]('eq', 0x3);
    });
});
