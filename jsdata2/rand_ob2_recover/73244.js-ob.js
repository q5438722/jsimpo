const locations = {
    'chalSuper': _0x49d657(321),
    'chalBlock': '/challenges/responsive-web-design/basic-html-and-html5',
    'chalChallenge': _0x49d657(322),
    'learnSuper': '/learn/responsive-web-design/',
    'learnBlock': _0x49d657(323),
    'learnChallenge': _0x49d657(324)
};
function _0x19e7(_0x4906ef, _0x2c6c31) {
    return _0x19e7 = function (_0x1d0dd1, _0x19e71b) {
        _0x1d0dd1 = _0x1d0dd1 - 311;
        let _0x13d919 = _0x1d0d[_0x1d0dd1];
        return _0x13d919;
    }, _0x19e7(_0x4906ef, _0x2c6c31);
}
describe('challenges/superblock redirect', function () {
    const _0x49d230 = _0x49d657;
    it(_0x49d230(325), () => {
        const _0x2c601c = _0x49d230;
        cy[_0x2c601c(326)](locations[_0x2c601c(327)]), cy[_0x2c601c(328)]()[_0x2c601c(329)]('eq', _0x2c601c(330)), cy[_0x2c601c(331)]()[_0x2c601c(329)](_0x460f59 => {
            const _0x5da313 = _0x2c601c;
            expect(_0x460f59[_0x5da313(332)])['to']['eq'](locations[_0x5da313(333)]);
        });
    });
}), describe(_0x49d657(334), function () {
    const _0x562b40 = _0x49d657;
    it(_0x562b40(335), () => {
        const _0x4e6047 = _0x562b40;
        cy[_0x4e6047(326)](locations[_0x4e6047(336)]), cy[_0x4e6047(328)]()[_0x4e6047(329)]('eq', _0x4e6047(337)), cy[_0x4e6047(331)]()['should'](_0x2c2a42 => {
            const _0x140e55 = _0x4e6047;
            expect(_0x2c2a42['pathname'])['to']['eq'](locations[_0x140e55(338)]);
        });
    });
}), describe(_0x49d657(339), function () {
    it('redirects to learn/superblock/block/challenge', () => {
        const _0x5d9842 = _0x19e7;
        cy[_0x5d9842(326)](locations[_0x5d9842(340)]), cy[_0x5d9842(328)]()[_0x5d9842(329)]('eq', _0x5d9842(341)), cy[_0x5d9842(331)]()[_0x5d9842(329)](_0x2040fc => {
            const _0x2a9478 = _0x5d9842;
            expect(_0x2040fc[_0x2a9478(332)])['to']['eq'](locations['learnChallenge']);
        });
    });
});