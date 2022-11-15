const selectors = {
        'heading': '[data-test-label=\'landing-header\']',
        'callToAction': _0x5b2bef(183),
        'certifications': _0x5b2bef(184),
        'testimonials': _0x5b2bef(185),
        'landingPageImage': _0x5b2bef(186)
    }, certifications = [
        'Responsive Web Design',
        _0x5b2bef(187),
        'Front End Development Libraries',
        'Data Visualization',
        _0x5b2bef(188),
        'Quality Assurance',
        _0x5b2bef(189),
        _0x5b2bef(190),
        _0x5b2bef(191),
        'Machine Learning with Python'
    ];
describe('Landing page', () => {
    const _0x55642b = _0x5b2bef, _0x31ce2f = {
            'zfQhn': _0x55642b(192),
            'udOKW': 'have.length',
            'igzsi': _0x55642b(193),
            'wFVNc': _0x55642b(194),
            'fuTfB': 'be.visible',
            'SOGGa': _0x55642b(195),
            'CXbNP': function (_0x1ff61a, _0x1deea8) {
                return _0x1ff61a + _0x1deea8;
            },
            'TPujj': _0x55642b(196),
            'LMvUZ': 'graduates have gotten jobs at tech companies including:',
            'ygTUi': '.logo-row',
            'ZOyxL': 'length',
            'vXwgv': '.big-heading',
            'KGoOq': _0x55642b(197),
            'wEijq': function (_0x5b87a9, _0x23e64c, _0x264e35) {
                return _0x5b87a9(_0x23e64c, _0x264e35);
            },
            'pdlkP': _0x55642b(198),
            'QrWva': _0x55642b(199),
            'taIvT': _0x55642b(200),
            'iNATS': function (_0x47f142, _0x851f2a, _0xbd325b) {
                return _0x47f142(_0x851f2a, _0xbd325b);
            },
            'puElb': _0x55642b(201),
            'tDzNg': function (_0x501292, _0x346136, _0x3d58be) {
                return _0x501292(_0x346136, _0x3d58be);
            }
        };
    it(_0x31ce2f[_0x55642b(202)], () => {
        const _0x5dc898 = _0x55642b;
        cy['visit']('/'), cy[_0x5dc898(203)]()[_0x5dc898(204)]('eq', _0x31ce2f[_0x5dc898(205)]), cy['contains'](selectors['callToAction'], _0x5dc898(206)), cy[_0x5dc898(207)](selectors['callToAction'])['should'](_0x31ce2f[_0x5dc898(208)], 8790 + -598 * -16 + -18356);
    }), _0x31ce2f[_0x55642b(209)](it, _0x31ce2f[_0x55642b(210)], () => {
        const _0x4f94cc = _0x55642b;
        cy[_0x4f94cc(211)](selectors[_0x4f94cc(212)], _0x31ce2f['igzsi']), cy['contains'](_0x31ce2f['wFVNc'])['should'](_0x31ce2f[_0x4f94cc(213)]), cy[_0x4f94cc(211)](_0x31ce2f[_0x4f94cc(214)])['should'](_0x31ce2f[_0x4f94cc(213)]), cy[_0x4f94cc(211)](_0x31ce2f[_0x4f94cc(215)](_0x31ce2f[_0x4f94cc(216)], _0x31ce2f['LMvUZ']))[_0x4f94cc(204)](_0x31ce2f[_0x4f94cc(213)]);
    }), it(_0x31ce2f[_0x55642b(217)], () => {
        const _0xa83e65 = _0x55642b;
        cy['get'](_0x31ce2f[_0xa83e65(218)])['children']()[_0xa83e65(219)](_0x31ce2f[_0xa83e65(220)])['should']('eq', 103 * 77 + -6699 + -1227);
    }), _0x31ce2f['wEijq'](it, _0x55642b(221), () => {
        const _0x4faebb = _0x55642b;
        cy[_0x4faebb(211)](_0x31ce2f[_0x4faebb(222)])[_0x4faebb(204)]('be.visible'), cy[_0x4faebb(207)](_0x31ce2f['vXwgv'])['siblings']()[_0x4faebb(207)](_0x4faebb(223));
    }), it(_0x31ce2f['taIvT'], function () {
        const _0x3e19ad = _0x55642b;
        cy['viewport'](-2755 + 3024 + 133 * 7, 330 * -24 + 1966 * 5 + -1250)[_0x3e19ad(207)](selectors[_0x3e19ad(224)])['should'](_0x31ce2f['fuTfB']), cy['viewport'](-4493 * -1 + 5864 + -9158, -3 * 2333 + -5214 + 12873)[_0x3e19ad(207)](selectors['landingPageImage'])[_0x3e19ad(204)](_0x3e19ad(225));
    }), _0x31ce2f[_0x55642b(226)](it, _0x31ce2f[_0x55642b(227)], function () {
        const _0x4a2023 = _0x55642b;
        cy['get'](selectors[_0x4a2023(228)])[_0x4a2023(229)]()[_0x4a2023(219)](_0x31ce2f[_0x4a2023(220)])[_0x4a2023(204)]('eq', 4597 * 1 + 7121 + 5854 * -2), cy[_0x4a2023(230)](certifications)['each'](_0x463d23 => {
            const _0x3c1c09 = _0x4a2023;
            cy[_0x3c1c09(207)](selectors[_0x3c1c09(228)])[_0x3c1c09(211)](_0x463d23);
        });
    }), _0x31ce2f['tDzNg'](it, _0x55642b(231), function () {
        const _0x43ede5 = _0x55642b;
        cy[_0x43ede5(207)](selectors['testimonials'])[_0x43ede5(229)]()[_0x43ede5(219)](_0x31ce2f[_0x43ede5(220)])[_0x43ede5(204)]('eq', 2687 + -325 + -2359 * 1);
    });
});