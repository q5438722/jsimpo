const _0x3601 = [
    '609005lRcqRz',
    '843397bDfdiD',
    '2485667plXHwo',
    '/challenges/responsive-web-design/',
    '/challenges/responsive-web-design/basic-html-and-html5',
    '/learn/responsive-web-design/',
    'visit',
    'chalSuper',
    'title',
    'should',
    'Responsive\x20Web\x20Design\x20Certification\x20|\x20freeCodeCamp.org',
    'location',
    'pathname',
    'challenges/superblock/block\x20redirect',
    'redirects\x20to\x20learn/superblock/block',
    'Basic\x20HTML\x20and\x20HTML5\x20|\x20freeCodeCamp.org',
    'learnBlock',
    'challenges/superblock/block/challenge\x20redirect',
    'Learn\x20Basic\x20HTML\x20and\x20HTML5:\x20Say\x20Hello\x20to\x20HTML\x20Elements\x20|\x20freeCodeCamp.org',
    'learnChallenge',
    '1424139NlBGhQ',
    '1269254AQOUIq',
    '154041sXaQgH',
    '139093OXKNJQ'
];
function _0x281c(_0x281e08, _0x3a469e) {
    return _0x281c = function (_0x3601b6, _0x281c47) {
        _0x3601b6 = _0x3601b6 - 0x14b;
        let _0x32aac3 = _0x3601[_0x3601b6];
        return _0x32aac3;
    }, _0x281c(_0x281e08, _0x3a469e);
}
const _0x356781 = _0x281c;
(function (_0x298f42, _0x294692) {
    const _0x38d9fb = _0x281c;
    while (!![]) {
        try {
            const _0x26086b = -parseInt(_0x38d9fb(0x14b)) + -parseInt(_0x38d9fb(0x14c)) + -parseInt(_0x38d9fb(0x14d)) + -parseInt(_0x38d9fb(0x14e)) + parseInt(_0x38d9fb(0x14f)) + parseInt(_0x38d9fb(0x150)) + parseInt(_0x38d9fb(0x151));
            if (_0x26086b === _0x294692)
                break;
            else
                _0x298f42['push'](_0x298f42['shift']());
        } catch (_0x507c4f) {
            _0x298f42['push'](_0x298f42['shift']());
        }
    }
}(_0x3601, 0xe84f6));
const locations = {
    'chalSuper': _0x356781(0x152),
    'chalBlock': _0x356781(0x153),
    'chalChallenge': '/challenges/responsive-web-design/basic-html-and-html5/say-hello-to-html-elements',
    'learnSuper': _0x356781(0x154),
    'learnBlock': '/learn/responsive-web-design/basic-html-and-html5/',
    'learnChallenge': '/learn/responsive-web-design/basic-html-and-html5/say-hello-to-html-elements'
};
describe('challenges/superblock\x20redirect', function () {
    it('redirects\x20to\x20learn/superblock', () => {
        const _0x1ddd04 = _0x281c;
        cy[_0x1ddd04(0x155)](locations[_0x1ddd04(0x156)]), cy[_0x1ddd04(0x157)]()[_0x1ddd04(0x158)]('eq', _0x1ddd04(0x159)), cy[_0x1ddd04(0x15a)]()['should'](_0x15ff3c => {
            const _0xf5014e = _0x1ddd04;
            expect(_0x15ff3c[_0xf5014e(0x15b)])['to']['eq'](locations['learnSuper']);
        });
    });
}), describe(_0x356781(0x15c), function () {
    const _0x52b5c0 = _0x356781;
    it(_0x52b5c0(0x15d), () => {
        const _0x24c6dc = _0x52b5c0;
        cy[_0x24c6dc(0x155)](locations['chalBlock']), cy[_0x24c6dc(0x157)]()['should']('eq', _0x24c6dc(0x15e)), cy[_0x24c6dc(0x15a)]()['should'](_0x1aaccb => {
            const _0x3f0b83 = _0x24c6dc;
            expect(_0x1aaccb[_0x3f0b83(0x15b)])['to']['eq'](locations[_0x3f0b83(0x15f)]);
        });
    });
}), describe(_0x356781(0x160), function () {
    it('redirects\x20to\x20learn/superblock/block/challenge', () => {
        const _0x2c25bb = _0x281c;
        cy[_0x2c25bb(0x155)](locations['chalChallenge']), cy[_0x2c25bb(0x157)]()[_0x2c25bb(0x158)]('eq', _0x2c25bb(0x161)), cy[_0x2c25bb(0x15a)]()['should'](_0x5a8e4a => {
            const _0x5de05c = _0x2c25bb;
            expect(_0x5a8e4a[_0x5de05c(0x15b)])['to']['eq'](locations[_0x5de05c(0x162)]);
        });
    });
});
