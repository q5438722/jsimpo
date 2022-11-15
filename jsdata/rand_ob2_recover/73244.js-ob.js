const locations = {
    'chalSuper': _0x356781(338),
    'chalBlock': _0x356781(339),
    'chalChallenge': '/challenges/responsive-web-design/basic-html-and-html5/say-hello-to-html-elements',
    'learnSuper': _0x356781(340),
    'learnBlock': '/learn/responsive-web-design/basic-html-and-html5/',
    'learnChallenge': '/learn/responsive-web-design/basic-html-and-html5/say-hello-to-html-elements'
};
describe('challenges/superblock redirect', function () {
    it('redirects to learn/superblock', () => {
        const _0x1ddd04 = _0x281c;
        cy[_0x1ddd04(341)](locations[_0x1ddd04(342)]), cy[_0x1ddd04(343)]()[_0x1ddd04(344)]('eq', _0x1ddd04(345)), cy[_0x1ddd04(346)]()['should'](_0x15ff3c => {
            const _0xf5014e = _0x1ddd04;
            expect(_0x15ff3c[_0xf5014e(347)])['to']['eq'](locations['learnSuper']);
        });
    });
}), describe(_0x356781(348), function () {
    const _0x52b5c0 = _0x356781;
    it(_0x52b5c0(349), () => {
        const _0x24c6dc = _0x52b5c0;
        cy[_0x24c6dc(341)](locations['chalBlock']), cy[_0x24c6dc(343)]()['should']('eq', _0x24c6dc(350)), cy[_0x24c6dc(346)]()['should'](_0x1aaccb => {
            const _0x3f0b83 = _0x24c6dc;
            expect(_0x1aaccb[_0x3f0b83(347)])['to']['eq'](locations[_0x3f0b83(351)]);
        });
    });
}), describe(_0x356781(352), function () {
    it('redirects to learn/superblock/block/challenge', () => {
        const _0x2c25bb = _0x281c;
        cy[_0x2c25bb(341)](locations['chalChallenge']), cy[_0x2c25bb(343)]()[_0x2c25bb(344)]('eq', _0x2c25bb(353)), cy[_0x2c25bb(346)]()['should'](_0x5a8e4a => {
            const _0x5de05c = _0x2c25bb;
            expect(_0x5a8e4a[_0x5de05c(347)])['to']['eq'](locations[_0x5de05c(354)]);
        });
    });
});