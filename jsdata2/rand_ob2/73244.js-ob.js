const _0x1d0d = [
    '/learn/responsive-web-design/basic-html-and-html5/say-hello-to-html-elements',
    'redirects\x20to\x20learn/superblock',
    'visit',
    'chalSuper',
    'title',
    'should',
    'Responsive\x20Web\x20Design\x20Certification\x20|\x20freeCodeCamp.org',
    'location',
    'pathname',
    'learnSuper',
    'challenges/superblock/block\x20redirect',
    'redirects\x20to\x20learn/superblock/block',
    'chalBlock',
    'Basic\x20HTML\x20and\x20HTML5\x20|\x20freeCodeCamp.org',
    'learnBlock',
    'challenges/superblock/block/challenge\x20redirect',
    'chalChallenge',
    'Learn\x20Basic\x20HTML\x20and\x20HTML5:\x20Say\x20Hello\x20to\x20HTML\x20Elements\x20|\x20freeCodeCamp.org',
    '2afpAAJ',
    '7307jUzdwL',
    '7463XgHksN',
    '46iKLGIO',
    '450993KuPYev',
    '355735ijbSPY',
    '290821zkFSOv',
    '436788UKusEc',
    '687ClYheQ',
    '2103oxqjAb',
    '/challenges/responsive-web-design/',
    '/challenges/responsive-web-design/basic-html-and-html5/say-hello-to-html-elements',
    '/learn/responsive-web-design/basic-html-and-html5/'
];
const _0x49d657 = _0x19e7;
(function (_0x5b46c9, _0x4bb395) {
    const _0xe35328 = _0x19e7;
    while (!![]) {
        try {
            const _0x5c463d = parseInt(_0xe35328(0x137)) * parseInt(_0xe35328(0x138)) + -parseInt(_0xe35328(0x139)) * parseInt(_0xe35328(0x13a)) + -parseInt(_0xe35328(0x13b)) + -parseInt(_0xe35328(0x13c)) + -parseInt(_0xe35328(0x13d)) + parseInt(_0xe35328(0x13e)) + parseInt(_0xe35328(0x13f)) * parseInt(_0xe35328(0x140));
            if (_0x5c463d === _0x4bb395)
                break;
            else
                _0x5b46c9['push'](_0x5b46c9['shift']());
        } catch (_0x45ae32) {
            _0x5b46c9['push'](_0x5b46c9['shift']());
        }
    }
}(_0x1d0d, 0x6f294));
const locations = {
    'chalSuper': _0x49d657(0x141),
    'chalBlock': '/challenges/responsive-web-design/basic-html-and-html5',
    'chalChallenge': _0x49d657(0x142),
    'learnSuper': '/learn/responsive-web-design/',
    'learnBlock': _0x49d657(0x143),
    'learnChallenge': _0x49d657(0x144)
};
function _0x19e7(_0x4906ef, _0x2c6c31) {
    return _0x19e7 = function (_0x1d0dd1, _0x19e71b) {
        _0x1d0dd1 = _0x1d0dd1 - 0x137;
        let _0x13d919 = _0x1d0d[_0x1d0dd1];
        return _0x13d919;
    }, _0x19e7(_0x4906ef, _0x2c6c31);
}
describe('challenges/superblock\x20redirect', function () {
    const _0x49d230 = _0x49d657;
    it(_0x49d230(0x145), () => {
        const _0x2c601c = _0x49d230;
        cy[_0x2c601c(0x146)](locations[_0x2c601c(0x147)]), cy[_0x2c601c(0x148)]()[_0x2c601c(0x149)]('eq', _0x2c601c(0x14a)), cy[_0x2c601c(0x14b)]()[_0x2c601c(0x149)](_0x460f59 => {
            const _0x5da313 = _0x2c601c;
            expect(_0x460f59[_0x5da313(0x14c)])['to']['eq'](locations[_0x5da313(0x14d)]);
        });
    });
}), describe(_0x49d657(0x14e), function () {
    const _0x562b40 = _0x49d657;
    it(_0x562b40(0x14f), () => {
        const _0x4e6047 = _0x562b40;
        cy[_0x4e6047(0x146)](locations[_0x4e6047(0x150)]), cy[_0x4e6047(0x148)]()[_0x4e6047(0x149)]('eq', _0x4e6047(0x151)), cy[_0x4e6047(0x14b)]()['should'](_0x2c2a42 => {
            const _0x140e55 = _0x4e6047;
            expect(_0x2c2a42['pathname'])['to']['eq'](locations[_0x140e55(0x152)]);
        });
    });
}), describe(_0x49d657(0x153), function () {
    it('redirects\x20to\x20learn/superblock/block/challenge', () => {
        const _0x5d9842 = _0x19e7;
        cy[_0x5d9842(0x146)](locations[_0x5d9842(0x154)]), cy[_0x5d9842(0x148)]()[_0x5d9842(0x149)]('eq', _0x5d9842(0x155)), cy[_0x5d9842(0x14b)]()[_0x5d9842(0x149)](_0x2040fc => {
            const _0x2a9478 = _0x5d9842;
            expect(_0x2040fc[_0x2a9478(0x14c)])['to']['eq'](locations['learnChallenge']);
        });
    });
});
