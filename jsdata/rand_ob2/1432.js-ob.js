const _0x5177 = [
    '130478kpXjPw',
    '49005xStPcN',
    '612399JSaMLE',
    '11RVueJM',
    '17126XslSLX',
    '37153MjAZFu',
    '631lpAQfG',
    '842PtgPFw',
    'path',
    'fs-plus',
    'temp',
    'track',
    'git-diff:move-to-previous-diff',
    'mkdirSync',
    'copySync',
    'join',
    'working-dir',
    'moveSync',
    'git.git',
    '.git',
    'project',
    'attachToDOM',
    'workspace',
    'getElement',
    'open',
    'sample.js',
    'views',
    'When\x20the\x20module\x20is\x20deactivated',
    'packages',
    'activatePackage',
    'git-diff',
    'deactivatePackage',
    'isPackageActive',
    'toBe',
    'commands',
    'findCommands',
    'filter',
    'not',
    'toContain',
    '407010pJesPd'
];
const _0x8bab1b = _0x12a6;
(function (_0x203ae7, _0xf4dfa9) {
    const _0x164b80 = _0x12a6;
    while (!![]) {
        try {
            const _0x3e429e = parseInt(_0x164b80(0x16c)) + parseInt(_0x164b80(0x16d)) + -parseInt(_0x164b80(0x16e)) + parseInt(_0x164b80(0x16f)) + -parseInt(_0x164b80(0x170)) * parseInt(_0x164b80(0x171)) + -parseInt(_0x164b80(0x172)) + -parseInt(_0x164b80(0x173)) * parseInt(_0x164b80(0x174));
            if (_0x3e429e === _0xf4dfa9)
                break;
            else
                _0x203ae7['push'](_0x203ae7['shift']());
        } catch (_0x178fc9) {
            _0x203ae7['push'](_0x203ae7['shift']());
        }
    }
}(_0x5177, 0x53fe9));
const path = require(_0x8bab1b(0x175)), fs = require(_0x8bab1b(0x176)), temp = require(_0x8bab1b(0x177))[_0x8bab1b(0x178)](), commands = [
        'git-diff:toggle-diff-list',
        'git-diff:move-to-next-diff',
        _0x8bab1b(0x179)
    ];
function _0x12a6(_0x108c53, _0x505902) {
    return _0x12a6 = function (_0x517700, _0x12a676) {
        _0x517700 = _0x517700 - 0x16c;
        let _0x20789a = _0x5177[_0x517700];
        return _0x20789a;
    }, _0x12a6(_0x108c53, _0x505902);
}
describe('git-diff', () => {
    const _0x6a947f = _0x8bab1b;
    let _0x345b3d, _0x41a504;
    beforeEach(() => {
        const _0x424fd7 = _0x12a6, _0x1418c2 = temp[_0x424fd7(0x17a)]('git-diff-spec-');
        fs[_0x424fd7(0x17b)](path[_0x424fd7(0x17c)](__dirname, 'fixtures', _0x424fd7(0x17d)), _0x1418c2), fs[_0x424fd7(0x17e)](path[_0x424fd7(0x17c)](_0x1418c2, _0x424fd7(0x17f)), path[_0x424fd7(0x17c)](_0x1418c2, _0x424fd7(0x180))), atom[_0x424fd7(0x181)]['setPaths']([_0x1418c2]), jasmine[_0x424fd7(0x182)](atom[_0x424fd7(0x183)][_0x424fd7(0x184)]()), waitsForPromise(() => atom[_0x424fd7(0x183)][_0x424fd7(0x185)](_0x424fd7(0x186))), runs(() => {
            const _0x37927a = _0x424fd7;
            _0x345b3d = atom[_0x37927a(0x183)]['getActiveTextEditor'](), _0x41a504 = atom[_0x37927a(0x187)]['getView'](_0x345b3d);
        });
    }), describe(_0x6a947f(0x188), () => {
        it('removes\x20all\x20registered\x20command\x20hooks\x20after\x20deactivation.', () => {
            const _0xec0fc9 = _0x12a6;
            waitsForPromise(() => atom[_0xec0fc9(0x189)][_0xec0fc9(0x18a)](_0xec0fc9(0x18b))), waitsForPromise(() => atom[_0xec0fc9(0x189)][_0xec0fc9(0x18c)](_0xec0fc9(0x18b))), runs(() => {
                const _0x2fac27 = _0xec0fc9;
                expect(atom['packages'][_0x2fac27(0x18d)]('git-diff'))[_0x2fac27(0x18e)](![]), atom[_0x2fac27(0x18f)][_0x2fac27(0x190)]({ 'target': _0x41a504 })[_0x2fac27(0x191)](({name: _0x3124b8}) => commands['includes'](_0x3124b8))['forEach'](_0x597777 => expect(commands)[_0x2fac27(0x192)][_0x2fac27(0x193)](_0x597777['name']));
            });
        });
    });
});
