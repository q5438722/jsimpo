const _0x3846 = ['wrap', 'Has 3 testimonial cards', '636516NIuyWy', '1FixdXf', '669005miokma', '21ohiBMA', '29492tNvRsa', '516981EBAYDu', '558036RhENGu', '80915NoDYKm', '930176NtBBJc', '[data-test-label=\'landing-big-cta\']', '[data-test-label=\'certifications\']', '[data-test-label=\'testimonial-cards\']', '.landing-page-image', 'JavaScript Algorithms and Data Structures', 'Back End Development and APIs', 'Scientific Computing with Python', 'Data Analysis with Python', 'Information Security', 'Learn to Code \u2014 For Free \u2014 Coding Courses for Busy People', 'Learn to code \u2014 for free.', 'Build projects.', 'Earn certifications.', 'Since 2014, more than 40,000 freeCodeCamp.org ', 'Should render', 'Has visible header and sub-header', 'Has 5 brand logos', 'Has a visible large image on large viewports', 'Has links to all the certifications', 'KGoOq', 'title', 'should', 'zfQhn', 'Get started (it\'s free)', 'get', 'udOKW', 'wEijq', 'pdlkP', 'contains', 'heading', 'fuTfB', 'SOGGa', 'CXbNP', 'TPujj', 'QrWva', 'ygTUi', 'its', 'ZOyxL', 'Has `as seens as` section', 'wFVNc', 'svg', 'landingPageImage', 'not.exist', 'iNATS', 'puElb', 'certifications', 'children'];

function _0x3965(_0x3ea35e, _0x1b25ec) {
    return _0x3965 = function (_0x43bae9, _0x5f4120) {
        _0x43bae9 = _0x43bae9 - 174;
        const _0xc97096 = _0x3846[_0x43bae9];

        return _0xc97096;
    }, _0x3965(_0x3ea35e, _0x1b25ec);
}
const _0x5b2bef = _0x3965;

(function (_0x1a607a, _0x407e27) {
    const _0x26f717 = _0x3965;

    while (true) {
        try {
            const _0x48887c = -parseInt(_0x26f717(0xae)) * parseInt(_0x26f717(0xaf)) + -parseInt(_0x26f717(0xb0)) + parseInt(_0x26f717(0xb1)) * parseInt(_0x26f717(0xb2)) + -parseInt(_0x26f717(0xb3)) + parseInt(_0x26f717(0xb4)) + parseInt(_0x26f717(0xb5)) + parseInt(_0x26f717(0xb6));

            if (_0x48887c === _0x407e27) break;else _0x1a607a.push(_0x1a607a.shift());
        } catch (_0x5ad9af) {
            _0x1a607a.push(_0x1a607a.shift());
        }
    }
})(_0x3846, 365957);
const selectors = {
    'heading': '[data-test-label=\'landing-header\']',
    'callToAction': _0x5b2bef(0xb7),
    'certifications': _0x5b2bef(0xb8),
    'testimonials': _0x5b2bef(0xb9),
    'landingPageImage': _0x5b2bef(0xba)
};
const certifications = ['Responsive Web Design', _0x5b2bef(0xbb), 'Front End Development Libraries', 'Data Visualization', _0x5b2bef(0xbc), 'Quality Assurance', _0x5b2bef(0xbd), _0x5b2bef(0xbe), _0x5b2bef(0xbf), 'Machine Learning with Python'];

describe('Landing page', () => {
    const _0x55642b = _0x5b2bef;
    const _0x31ce2f = {
        'zfQhn': _0x55642b(0xc0),
        'udOKW': 'have.length',
        'igzsi': _0x55642b(0xc1),
        'wFVNc': _0x55642b(0xc2),
        'fuTfB': 'be.visible',
        'SOGGa': _0x55642b(0xc3),
        'CXbNP': function (_0x1ff61a, _0x1deea8) {
            return _0x1ff61a + _0x1deea8;
        },
        'TPujj': _0x55642b(0xc4),
        'LMvUZ': 'graduates have gotten jobs at tech companies including:',
        'ygTUi': '.logo-row',
        'ZOyxL': 'length',
        'vXwgv': '.big-heading',
        'KGoOq': _0x55642b(0xc5),
        'wEijq': function (_0x5b87a9, _0x23e64c, _0x264e35) {
            return _0x5b87a9(_0x23e64c, _0x264e35);
        },
        'pdlkP': _0x55642b(0xc6),
        'QrWva': _0x55642b(0xc7),
        'taIvT': _0x55642b(0xc8),
        'iNATS': function (_0x47f142, _0x851f2a, _0xbd325b) {
            return _0x47f142(_0x851f2a, _0xbd325b);
        },
        'puElb': _0x55642b(0xc9),
        'tDzNg': function (_0x501292, _0x346136, _0x3d58be) {
            return _0x501292(_0x346136, _0x3d58be);
        }
    };

    it(_0x31ce2f[_0x55642b(0xca)], () => {
        const _0x5dc898 = _0x55642b;

        cy.visit('/'), cy[_0x5dc898(0xcb)]()[_0x5dc898(0xcc)]('eq', _0x31ce2f[_0x5dc898(0xcd)]), cy.contains(selectors.callToAction, _0x5dc898(0xce)), cy[_0x5dc898(0xcf)](selectors.callToAction).should(_0x31ce2f[_0x5dc898(0xd0)], 2);
    }), _0x31ce2f[_0x55642b(0xd1)](it, _0x31ce2f[_0x55642b(0xd2)], () => {
        const _0x4f94cc = _0x55642b;

        cy[_0x4f94cc(0xd3)](selectors[_0x4f94cc(0xd4)], _0x31ce2f.igzsi), cy.contains(_0x31ce2f.wFVNc).should(_0x31ce2f[_0x4f94cc(0xd5)]), cy[_0x4f94cc(0xd3)](_0x31ce2f[_0x4f94cc(0xd6)]).should(_0x31ce2f[_0x4f94cc(0xd5)]), cy[_0x4f94cc(0xd3)](_0x31ce2f[_0x4f94cc(0xd7)](_0x31ce2f[_0x4f94cc(0xd8)], _0x31ce2f.LMvUZ))[_0x4f94cc(0xcc)](_0x31ce2f[_0x4f94cc(0xd5)]);
    }), it(_0x31ce2f[_0x55642b(0xd9)], () => {
        const _0xa83e65 = _0x55642b;

        cy.get(_0x31ce2f[_0xa83e65(0xda)]).children()[_0xa83e65(0xdb)](_0x31ce2f[_0xa83e65(0xdc)]).should('eq', 5);
    }), _0x31ce2f.wEijq(it, _0x55642b(0xdd), () => {
        const _0x4faebb = _0x55642b;

        cy[_0x4faebb(0xd3)](_0x31ce2f[_0x4faebb(0xde)])[_0x4faebb(0xcc)]('be.visible'), cy[_0x4faebb(0xcf)](_0x31ce2f.vXwgv).siblings()[_0x4faebb(0xcf)](_0x4faebb(0xdf));
    }), it(_0x31ce2f.taIvT, function () {
        const _0x3e19ad = _0x55642b;

        cy.viewport(1200, 660)[_0x3e19ad(0xcf)](selectors[_0x3e19ad(0xe0)]).should(_0x31ce2f.fuTfB), cy.viewport(1199, 660)[_0x3e19ad(0xcf)](selectors.landingPageImage)[_0x3e19ad(0xcc)](_0x3e19ad(0xe1));
    }), _0x31ce2f[_0x55642b(0xe2)](it, _0x31ce2f[_0x55642b(0xe3)], function () {
        const _0x4a2023 = _0x55642b;

        cy.get(selectors[_0x4a2023(0xe4)])[_0x4a2023(0xe5)]()[_0x4a2023(0xdb)](_0x31ce2f[_0x4a2023(0xdc)])[_0x4a2023(0xcc)]('eq', 10), cy[_0x4a2023(0xe6)](certifications).each(_0x463d23 => {
            const _0x3c1c09 = _0x4a2023;

            cy[_0x3c1c09(0xcf)](selectors[_0x3c1c09(0xe4)])[_0x3c1c09(0xd3)](_0x463d23);
        });
    }), _0x31ce2f.tDzNg(it, _0x55642b(0xe7), function () {
        const _0x43ede5 = _0x55642b;

        cy[_0x43ede5(0xcf)](selectors.testimonials)[_0x43ede5(0xe5)]()[_0x43ede5(0xdb)](_0x31ce2f[_0x43ede5(0xdc)])[_0x43ede5(0xcc)]('eq', 3);
    });
});
