const path = require(_0x8bab1b(373)), fs = require(_0x8bab1b(374)), temp = require(_0x8bab1b(375))[_0x8bab1b(376)](), commands = [
        'git-diff:toggle-diff-list',
        'git-diff:move-to-next-diff',
        _0x8bab1b(377)
    ];
function _0x12a6(_0x108c53, _0x505902) {
    return _0x12a6 = function (_0x517700, _0x12a676) {
        _0x517700 = _0x517700 - 364;
        let _0x20789a = _0x5177[_0x517700];
        return _0x20789a;
    }, _0x12a6(_0x108c53, _0x505902);
}
describe('git-diff', () => {
    const _0x6a947f = _0x8bab1b;
    let _0x345b3d, _0x41a504;
    beforeEach(() => {
        const _0x424fd7 = _0x12a6, _0x1418c2 = temp[_0x424fd7(378)]('git-diff-spec-');
        fs[_0x424fd7(379)](path[_0x424fd7(380)](__dirname, 'fixtures', _0x424fd7(381)), _0x1418c2), fs[_0x424fd7(382)](path[_0x424fd7(380)](_0x1418c2, _0x424fd7(383)), path[_0x424fd7(380)](_0x1418c2, _0x424fd7(384))), atom[_0x424fd7(385)]['setPaths']([_0x1418c2]), jasmine[_0x424fd7(386)](atom[_0x424fd7(387)][_0x424fd7(388)]()), waitsForPromise(() => atom[_0x424fd7(387)][_0x424fd7(389)](_0x424fd7(390))), runs(() => {
            const _0x37927a = _0x424fd7;
            _0x345b3d = atom[_0x37927a(387)]['getActiveTextEditor'](), _0x41a504 = atom[_0x37927a(391)]['getView'](_0x345b3d);
        });
    }), describe(_0x6a947f(392), () => {
        it('removes all registered command hooks after deactivation.', () => {
            const _0xec0fc9 = _0x12a6;
            waitsForPromise(() => atom[_0xec0fc9(393)][_0xec0fc9(394)](_0xec0fc9(395))), waitsForPromise(() => atom[_0xec0fc9(393)][_0xec0fc9(396)](_0xec0fc9(395))), runs(() => {
                const _0x2fac27 = _0xec0fc9;
                expect(atom['packages'][_0x2fac27(397)]('git-diff'))[_0x2fac27(398)](![]), atom[_0x2fac27(399)][_0x2fac27(400)]({ 'target': _0x41a504 })[_0x2fac27(401)](({name: _0x3124b8}) => commands['includes'](_0x3124b8))['forEach'](_0x597777 => expect(commands)[_0x2fac27(402)][_0x2fac27(403)](_0x597777['name']));
            });
        });
    });
});