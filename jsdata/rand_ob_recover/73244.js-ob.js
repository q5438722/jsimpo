const locations = {
    'chalSuper': '/challenges/responsive-web-design/',
    'chalBlock': _0x10dec7(326),
    'chalChallenge': _0x10dec7(327),
    'learnSuper': _0x10dec7(328),
    'learnBlock': _0x10dec7(329),
    'learnChallenge': _0x10dec7(330)
};
describe('challenges/superblock redirect', function () {
    const _0x10db2a = _0x10dec7, _0x17195f = {
            'pMRCv': 'Responsive Web Design Certification | freeCodeCamp.org',
            'aRwUs': function (_0x1fb9f0, _0x255654, _0x3bbd0c) {
                return _0x1fb9f0(_0x255654, _0x3bbd0c);
            }
        };
    _0x17195f[_0x10db2a(331)](it, _0x10db2a(332), () => {
        const _0x46a40f = _0x10db2a, _0x3d5487 = {
                'kjCoY': function (_0x2da4aa, _0x2dc781) {
                    return _0x2da4aa(_0x2dc781);
                }
            };
        cy[_0x46a40f(333)](locations[_0x46a40f(334)]), cy[_0x46a40f(335)]()[_0x46a40f(336)]('eq', _0x17195f[_0x46a40f(337)]), cy[_0x46a40f(338)]()[_0x46a40f(336)](_0x11def5 => {
            const _0x46fc1d = _0x46a40f;
            _0x3d5487['kjCoY'](expect, _0x11def5[_0x46fc1d(339)])['to']['eq'](locations[_0x46fc1d(340)]);
        });
    });
}), describe('challenges/superblock/block redirect', function () {
    const _0x918c0a = _0x10dec7, _0x5c3279 = {
            'VbNSR': function (_0x540823, _0x456d1b) {
                return _0x540823(_0x456d1b);
            },
            'TUbSF': _0x918c0a(341),
            'DzCLo': _0x918c0a(342)
        };
    it(_0x5c3279[_0x918c0a(343)], () => {
        const _0x242cca = _0x918c0a;
        cy[_0x242cca(333)](locations[_0x242cca(344)]), cy[_0x242cca(335)]()['should']('eq', _0x5c3279[_0x242cca(345)]), cy[_0x242cca(338)]()[_0x242cca(336)](_0x53f7b0 => {
            const _0x248665 = _0x242cca;
            _0x5c3279[_0x248665(346)](expect, _0x53f7b0[_0x248665(339)])['to']['eq'](locations[_0x248665(347)]);
        });
    });
}), describe(_0x10dec7(348), function () {
    const _0x3d830b = _0x10dec7, _0x11a3ee = {
            'uVRjV': _0x3d830b(349),
            'mAQJC': _0x3d830b(350)
        };
    it(_0x11a3ee[_0x3d830b(351)], () => {
        const _0x25a044 = _0x3d830b;
        cy['visit'](locations['chalChallenge']), cy[_0x25a044(335)]()[_0x25a044(336)]('eq', _0x11a3ee[_0x25a044(352)]), cy['location']()[_0x25a044(336)](_0x5efdcc => {
            const _0x372716 = _0x25a044;
            expect(_0x5efdcc['pathname'])['to']['eq'](locations[_0x372716(353)]);
        });
    });
});