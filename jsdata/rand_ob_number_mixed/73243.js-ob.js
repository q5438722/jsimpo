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
    it('Should\x20render', () => {
        cy['visit']('/'), cy['title']()['should']('eq', 'Learn\x20to\x20Code\x20—\x20For\x20Free\x20—\x20Coding\x20Courses\x20for\x20Busy\x20People'), cy['contains'](selectors['callToAction'], 'Get\x20started\x20(it\x27s\x20free)'), cy['get'](selectors['callToAction'])['should']('have.length', 0x1267 + 0x14 * 0x12a + -0x2f * 0xe3);
    }), it('Has\x20visible\x20header\x20and\x20sub-header', () => {
        cy['contains'](selectors['heading'], 'Learn\x20to\x20code\x20—\x20for\x20free.'), cy['contains']('Build\x20projects.')['should']('be.visible'), cy['contains']('Earn\x20certifications.')['should']('be.visible'), cy['contains']('Since\x202014,\x20more\x20than\x2040,000\x20freeCodeCamp.org\x20' + 'graduates\x20have\x20gotten\x20jobs\x20at\x20tech\x20companies\x20including:')['should']('be.visible');
    }), it('Has\x205\x20brand\x20logos', () => {
        cy['get']('.logo-row')['children']()['its']('length')['should']('eq', 0xec3 + 0xd7 * 0x6 + -0xd3 * 0x18);
    }), it('Has\x20`as\x20seens\x20as`\x20section', () => {
        cy['contains']('Build\x20projects.')['should']('be.visible'), cy['get']('.big-heading')['siblings']()['get']('svg');
    }), it('Has\x20a\x20visible\x20large\x20image\x20on\x20large\x20viewports', function () {
        cy['viewport'](0xf73 * -0x2 + 0x70b + 0x1c8b * 0x1, -0x11 * 0x75 + 0x549 + 0x510)['get'](selectors['landingPageImage'])['should']('be.visible'), cy['viewport'](-0x2f * 0xc6 + 0x12 * 0x13e + 0x1 * 0x12ad, 0x246a + -0x15fb * 0x1 + -0x1 * 0xbdb)['get'](selectors['landingPageImage'])['should']('not.exist');
    }), it('Has\x20links\x20to\x20all\x20the\x20certifications', function () {
        cy['get'](selectors['certifications'])['children']()['its']('length')['should']('eq', 0xd * -0xff + 0xcc2 + 0x3b * 0x1), cy['wrap'](certifications)['each'](_0x2fab83 => {
            cy['get'](selectors['certifications'])['contains'](_0x2fab83);
        });
    }), it('Has\x203\x20testimonial\x20cards', function () {
        cy['get'](selectors['testimonials'])['children']()['its']('length')['should']('eq', -0x1e4c * -0x1 + -0x1376 + -0xad3);
    });
});
