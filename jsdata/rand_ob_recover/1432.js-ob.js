function _0x311b(_0x30487f, _0x409801) {
    return _0x311b = function (_0x48b9be, _0x5cec88) {
        _0x48b9be = _0x48b9be - (-8646 + -1 * -6530 + 2233);
        let _0x2aecd2 = _0x2b93[_0x48b9be];
        return _0x2aecd2;
    }, _0x311b(_0x30487f, _0x409801);
}
const path = require('path'), fs = require('fs-plus'), temp = require(_0x51c5df(128))[_0x51c5df(129)](), commands = [
        'git-diff:toggle-diff-list',
        'git-diff:move-to-next-diff',
        _0x51c5df(130)
    ];
describe(_0x51c5df(131), () => {
    const _0x52a8ae = _0x51c5df, _0x2d0a0a = {
            'nLYic': _0x52a8ae(132),
            'WHaRc': _0x52a8ae(133),
            'jdQpj': function (_0x4e37fa, _0x388278) {
                return _0x4e37fa(_0x388278);
            },
            'AKbyX': function (_0x324ccb, _0x22616c) {
                return _0x324ccb(_0x22616c);
            },
            'ZQuEU': function (_0x18fcd4, _0x58c5e1, _0x46e0e9) {
                return _0x18fcd4(_0x58c5e1, _0x46e0e9);
            },
            'xzgLF': _0x52a8ae(134)
        };
    let _0x197ec7, _0x210a52;
    _0x2d0a0a[_0x52a8ae(135)](beforeEach, () => {
        const _0x25c02c = _0x52a8ae, _0x569847 = temp[_0x25c02c(136)](_0x25c02c(137));
        fs[_0x25c02c(138)](path[_0x25c02c(139)](__dirname, _0x2d0a0a['nLYic'], _0x25c02c(140)), _0x569847), fs[_0x25c02c(141)](path['join'](_0x569847, _0x2d0a0a['WHaRc']), path[_0x25c02c(139)](_0x569847, _0x25c02c(142))), atom['project']['setPaths']([_0x569847]), jasmine['attachToDOM'](atom[_0x25c02c(143)][_0x25c02c(144)]()), _0x2d0a0a[_0x25c02c(145)](waitsForPromise, () => atom['workspace']['open'](_0x25c02c(146))), _0x2d0a0a['AKbyX'](runs, () => {
            const _0x40a583 = _0x25c02c;
            _0x197ec7 = atom['workspace'][_0x40a583(147)](), _0x210a52 = atom[_0x40a583(148)]['getView'](_0x197ec7);
        });
    }), _0x2d0a0a[_0x52a8ae(149)](describe, _0x2d0a0a[_0x52a8ae(150)], () => {
        const _0x17d877 = _0x52a8ae, _0x3aac03 = {
                'BXqzu': function (_0x37d5b6, _0x4d24ff) {
                    const _0x3a5e14 = _0x311b;
                    return _0x2d0a0a[_0x3a5e14(135)](_0x37d5b6, _0x4d24ff);
                },
                'dVfJS': _0x17d877(131),
                'JEdYm': function (_0xb2e485, _0x3f5852) {
                    return _0xb2e485(_0x3f5852);
                },
                'sCvef': function (_0x59b0be, _0x2ab4af) {
                    const _0x44b675 = _0x17d877;
                    return _0x2d0a0a[_0x44b675(135)](_0x59b0be, _0x2ab4af);
                }
            };
        _0x2d0a0a['ZQuEU'](it, _0x17d877(151), () => {
            const _0x1f633e = _0x17d877, _0x52d7ac = {
                    'VRaRg': function (_0x2b4536, _0x245356) {
                        return _0x3aac03['BXqzu'](_0x2b4536, _0x245356);
                    },
                    'fugbE': _0x3aac03[_0x1f633e(152)]
                };
            _0x3aac03[_0x1f633e(153)](waitsForPromise, () => atom[_0x1f633e(154)][_0x1f633e(155)](_0x1f633e(131))), _0x3aac03[_0x1f633e(156)](waitsForPromise, () => atom[_0x1f633e(154)][_0x1f633e(157)]('git-diff')), runs(() => {
                const _0x12874a = _0x1f633e;
                _0x52d7ac[_0x12874a(158)](expect, atom[_0x12874a(154)]['isPackageActive'](_0x52d7ac['fugbE']))['toBe'](![]), atom[_0x12874a(159)]['findCommands']({ 'target': _0x210a52 })[_0x12874a(160)](({name: _0x421728}) => commands[_0x12874a(161)](_0x421728))[_0x12874a(162)](_0x4d71c3 => expect(commands)['not']['toContain'](_0x4d71c3[_0x12874a(163)]));
            });
        });
    });
});