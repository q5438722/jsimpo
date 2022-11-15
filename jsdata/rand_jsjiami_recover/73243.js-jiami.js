const selectors = {};
const certifications = [
    'Responsive Web Design',
    'JavaScript Algorithms and Data Structures',
    'Front End Development Libraries',
    'Data Visualization',
    'Back End Development and APIs',
    'Quality Assurance',
    'Scientific Computing with Python',
    'Data Analysis with Python',
    'Information Security',
    'Machine Learning with Python'
];
describe('Landing page', () => {
    it('Should render', () => {
        var _0x260b26 = { 'QkVUw': 'length' };
        if ('qevZn' === 'qevZn') {
            cy['visit']('/');
            cy['title']()['should']('eq', 'Learn to Code \u2014 For Free \u2014 Coding Courses for Busy People');
            cy['contains'](selectors['callToAction'], 'Get started (it\'s free)');
            cy['get'](selectors['callToAction'])['should']('have.length', 2);
        } else {
            cy['get'](selectors['testimonials'])['children']()['its'](_0x260b26['QkVUw'])['should']('eq', 3);
        }
    });
    it('Has visible header and sub-header', () => {
        cy['contains'](selectors['heading'], 'Learn to code \u2014 for free.');
        cy['contains']('Build projects.')['should']('be.visible');
        cy['contains']('Earn certifications.')['should']('be.visible');
        cy['contains']('Since 2014, more than 40,000 freeCodeCamp.org ' + 'graduates have gotten jobs at tech companies including:')['should']('be.visible');
    });
    it('Has 5 brand logos', () => {
        var _0x469458 = {
            'mVuvt': 'be.visible',
            'WOBqn': 'svg'
        };
        if ('QtMXw' === 'QtMXw') {
            cy['get']('.logo-row')['children']()['its']('length')['should']('eq', 5);
        } else {
            cy['contains']('Build projects.')['should'](_0x469458['mVuvt']);
            cy['get']('.big-heading')['siblings']()['get'](_0x469458['WOBqn']);
        }
    });
    it('Has `as seens as` section', () => {
        cy['contains']('Build projects.')['should']('be.visible');
        cy['get']('.big-heading')['siblings']()['get']('svg');
    });
    it('Has a visible large image on large viewports', function () {
        if ('glOrS' === 'RRANY') {
            cy['viewport'](1200, 660)['get'](selectors['landingPageImage'])['should']('be.visible');
            cy['viewport'](1199, 660)['get'](selectors['landingPageImage'])['should']('not.exist');
        } else {
            cy['viewport'](1200, 660)['get'](selectors['landingPageImage'])['should']('be.visible');
            cy['viewport'](1199, 660)['get'](selectors['landingPageImage'])['should']('not.exist');
        }
    });
    it('Has links to all the certifications', function () {
        cy['get'](selectors['certifications'])['children']()['its']('length')['should']('eq', 10);
        cy['wrap'](certifications)['each'](_0xa3d8b0 => {
            cy['get'](selectors['certifications'])['contains'](_0xa3d8b0);
        });
    });
    it('Has 3 testimonial cards', function () {
        if ('NGWnz' === 'NGWnz') {
            cy['get'](selectors['testimonials'])['children']()['its']('length')['should']('eq', 3);
        } else {
            cy['get'](selectors['certifications'])['children']()['its']('length')['should']('eq', 10);
            cy['wrap'](certifications)['each'](_0x1353e2 => {
                cy['get'](selectors['certifications'])['contains'](_0x1353e2);
            });
        }
    });
});