const locations = {
    'chalSuper': '/challenges/responsive-web-design/',
    'chalBlock': '/challenges/responsive-web-design/basic-html-and-html5',
    'chalChallenge': '/challenges/responsive-web-design/basic-html-and-html5/say-hello-to-html-elements',
    'learnSuper': '/learn/responsive-web-design/',
    'learnBlock': '/learn/responsive-web-design/basic-html-and-html5/',
    'learnChallenge': '/learn/responsive-web-design/basic-html-and-html5/say-hello-to-html-elements'
};
describe('challenges/superblock\x20redirect', function () {
    it('redirects\x20to\x20learn/superblock', () => {
        cy['visit'](locations['chalSuper']), cy['title']()['should']('eq', 'Responsive\x20Web\x20Design\x20Certification\x20|\x20freeCodeCamp.org'), cy['location']()['should'](_0x2f0b85 => {
            expect(_0x2f0b85['pathname'])['to']['eq'](locations['learnSuper']);
        });
    });
}), describe('challenges/superblock/block\x20redirect', function () {
    it('redirects\x20to\x20learn/superblock/block', () => {
        cy['visit'](locations['chalBlock']), cy['title']()['should']('eq', 'Basic\x20HTML\x20and\x20HTML5\x20|\x20freeCodeCamp.org'), cy['location']()['should'](_0x59e13b => {
            expect(_0x59e13b['pathname'])['to']['eq'](locations['learnBlock']);
        });
    });
}), describe('challenges/superblock/block/challenge\x20redirect', function () {
    it('redirects\x20to\x20learn/superblock/block/challenge', () => {
        cy['visit'](locations['chalChallenge']), cy['title']()['should']('eq', 'Learn\x20Basic\x20HTML\x20and\x20HTML5:\x20Say\x20Hello\x20to\x20HTML\x20Elements\x20|\x20freeCodeCamp.org'), cy['location']()['should'](_0x16290f => {
            expect(_0x16290f['pathname'])['to']['eq'](locations['learnChallenge']);
        });
    });
});
