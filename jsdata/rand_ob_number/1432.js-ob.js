const path = require('path'), fs = require('fs-plus'), temp = require('temp')['track'](), commands = [
        'git-diff:toggle-diff-list',
        'git-diff:move-to-next-diff',
        'git-diff:move-to-previous-diff'
    ];
describe('git-diff', () => {
    let _0x191c79, _0x544f67;
    beforeEach(() => {
        const _0xcbabcf = temp['mkdirSync']('git-diff-spec-');
        fs['copySync'](path['join'](__dirname, 'fixtures', 'working-dir'), _0xcbabcf), fs['moveSync'](path['join'](_0xcbabcf, 'git.git'), path['join'](_0xcbabcf, '.git')), atom['project']['setPaths']([_0xcbabcf]), jasmine['attachToDOM'](atom['workspace']['getElement']()), waitsForPromise(() => atom['workspace']['open']('sample.js')), runs(() => {
            _0x191c79 = atom['workspace']['getActiveTextEditor'](), _0x544f67 = atom['views']['getView'](_0x191c79);
        });
    }), describe('When\x20the\x20module\x20is\x20deactivated', () => {
        it('removes\x20all\x20registered\x20command\x20hooks\x20after\x20deactivation.', () => {
            waitsForPromise(() => atom['packages']['activatePackage']('git-diff')), waitsForPromise(() => atom['packages']['deactivatePackage']('git-diff')), runs(() => {
                expect(atom['packages']['isPackageActive']('git-diff'))['toBe'](![]), atom['commands']['findCommands']({ 'target': _0x544f67 })['filter'](({name: _0x2285e4}) => commands['includes'](_0x2285e4))['forEach'](_0x317e37 => expect(commands)['not']['toContain'](_0x317e37['name']));
            });
        });
    });
});
