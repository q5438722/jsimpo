const selectors = {
        'heading': '[data-test-label=\x27landing-header\x27]',
        'callToAction': '[data-test-label=\x27landing-big-cta\x27]',
        'certifications': '[data-test-label=\x27certifications\x27]',
        'testimonials': '[data-test-label=\x27testimonial-cards\x27]',
        'landingPageImage': '.landing-page-image'
    }, certifications = [
        'Responsive\x20Web\x20Design',
        'JavaScript\x20Algorithms\x20and\x20Data\x20Structures',
        'Front\x20End\x20Development\x20Libraries',
        'Data\x20Visualization',
        'Back\x20End\x20Development\x20and\x20APIs',
        'Quality\x20Assurance',
        'Scientific\x20Computing\x20with\x20Python',
        'Data\x20Analysis\x20with\x20Python',
        'Information\x20Security',
        'Machine\x20Learning\x20with\x20Python'
    ];
describe('Landing\x20page', () => {
    const _0x364f15 = {
        'QJuEP': 'Learn\x20to\x20Code\x20—\x20For\x20Free\x20—\x20Coding\x20Courses\x20for\x20Busy\x20People',
        'Fnnnk': 'Get\x20started\x20(it\x27s\x20free)',
        'pRWtM': 'have.length',
        'gNvus': 'Learn\x20to\x20code\x20—\x20for\x20free.',
        'csnwz': 'Build\x20projects.',
        'tMImM': 'be.visible',
        'STxDV': 'Earn\x20certifications.',
        'XKwfr': function (_0x35ecb8, _0x4fe31a) {
            return _0x35ecb8 + _0x4fe31a;
        },
        'PFfCZ': 'Since\x202014,\x20more\x20than\x2040,000\x20freeCodeCamp.org\x20',
        'PVTGs': 'graduates\x20have\x20gotten\x20jobs\x20at\x20tech\x20companies\x20including:',
        'qyDQD': '.logo-row',
        'JeVLi': 'length',
        'doqMx': '.big-heading',
        'yRdQK': 'svg',
        'xNzZS': 'not.exist',
        'FMsxB': function (_0x3d8fe7, _0x1be7f1, _0x49373a) {
            return _0x3d8fe7(_0x1be7f1, _0x49373a);
        },
        'wIkpM': 'Should\x20render',
        'dKbBp': 'Has\x20visible\x20header\x20and\x20sub-header',
        'jcToP': 'Has\x205\x20brand\x20logos',
        'bTQQA': function (_0x17dc8a, _0x537c25, _0x12eb03) {
            return _0x17dc8a(_0x537c25, _0x12eb03);
        },
        'MeBnK': 'Has\x20`as\x20seens\x20as`\x20section',
        'sMELw': function (_0x163e6e, _0x489811, _0x12d42d) {
            return _0x163e6e(_0x489811, _0x12d42d);
        },
        'Idymx': 'Has\x20a\x20visible\x20large\x20image\x20on\x20large\x20viewports',
        'Slnhw': 'Has\x20links\x20to\x20all\x20the\x20certifications',
        'fcTyd': 'Has\x203\x20testimonial\x20cards'
    };
    _0x364f15['FMsxB'](it, _0x364f15['wIkpM'], () => {
        cy['visit']('/'), cy['title']()['should']('eq', _0x364f15['QJuEP']), cy['contains'](selectors['callToAction'], _0x364f15['Fnnnk']), cy['get'](selectors['callToAction'])['should'](_0x364f15['pRWtM'], 0x2);
    }), _0x364f15['FMsxB'](it, _0x364f15['dKbBp'], () => {
        cy['contains'](selectors['heading'], _0x364f15['gNvus']), cy['contains'](_0x364f15['csnwz'])['should'](_0x364f15['tMImM']), cy['contains'](_0x364f15['STxDV'])['should'](_0x364f15['tMImM']), cy['contains'](_0x364f15['XKwfr'](_0x364f15['PFfCZ'], _0x364f15['PVTGs']))['should'](_0x364f15['tMImM']);
    }), _0x364f15['FMsxB'](it, _0x364f15['jcToP'], () => {
        cy['get'](_0x364f15['qyDQD'])['children']()['its'](_0x364f15['JeVLi'])['should']('eq', 0x5);
    }), _0x364f15['bTQQA'](it, _0x364f15['MeBnK'], () => {
        cy['contains'](_0x364f15['csnwz'])['should'](_0x364f15['tMImM']), cy['get'](_0x364f15['doqMx'])['siblings']()['get'](_0x364f15['yRdQK']);
    }), _0x364f15['sMELw'](it, _0x364f15['Idymx'], function () {
        cy['viewport'](0x4b0, 0x294)['get'](selectors['landingPageImage'])['should'](_0x364f15['tMImM']), cy['viewport'](0x4af, 0x294)['get'](selectors['landingPageImage'])['should'](_0x364f15['xNzZS']);
    }), _0x364f15['sMELw'](it, _0x364f15['Slnhw'], function () {
        cy['get'](selectors['certifications'])['children']()['its'](_0x364f15['JeVLi'])['should']('eq', 0xa), cy['wrap'](certifications)['each'](_0x42c32b => {
            cy['get'](selectors['certifications'])['contains'](_0x42c32b);
        });
    }), _0x364f15['sMELw'](it, _0x364f15['fcTyd'], function () {
        cy['get'](selectors['testimonials'])['children']()['its'](_0x364f15['JeVLi'])['should']('eq', 0x3);
    });
});
