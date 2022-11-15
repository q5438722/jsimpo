const path = require('path'), fs = require('fs-plus'), temp = require('temp')['track'](), commands = [
        'git-diff:toggle-diff-list',
        'git-diff:move-to-next-diff',
        'git-diff:move-to-previous-diff'
    ];
describe('git-diff', () => {
    const _0x346cb6 = {
        'lLpVz': 'git-diff-spec-',
        'LGtMk': 'fixtures',
        'zgyUv': 'working-dir',
        'Vcuck': 'git.git',
        'DAkxZ': '.git',
        'wiFyt': function (_0x43e3ba, _0x3b79f3) {
            return _0x43e3ba(_0x3b79f3);
        },
        'BJTbi': function (_0x20b06f, _0x104ef3) {
            return _0x20b06f(_0x104ef3);
        },
        'Glqjj': 'git-diff',
        'vgdfB': function (_0xa8057, _0x3e01ab, _0x387fd9) {
            return _0xa8057(_0x3e01ab, _0x387fd9);
        },
        'rdUrT': 'removes\x20all\x20registered\x20command\x20hooks\x20after\x20deactivation.',
        'EwjzI': 'When\x20the\x20module\x20is\x20deactivated'
    };
    let _0x50f020, _0x5924d9;
    _0x346cb6['BJTbi'](beforeEach, () => {
        const _0x30a65c = temp['mkdirSync'](_0x346cb6['lLpVz']);
        fs['copySync'](path['join'](__dirname, _0x346cb6['LGtMk'], _0x346cb6['zgyUv']), _0x30a65c), fs['moveSync'](path['join'](_0x30a65c, _0x346cb6['Vcuck']), path['join'](_0x30a65c, _0x346cb6['DAkxZ'])), atom['project']['setPaths']([_0x30a65c]), jasmine['attachToDOM'](atom['workspace']['getElement']()), _0x346cb6['wiFyt'](waitsForPromise, () => atom['workspace']['open']('sample.js')), _0x346cb6['wiFyt'](runs, () => {
            _0x50f020 = atom['workspace']['getActiveTextEditor'](), _0x5924d9 = atom['views']['getView'](_0x50f020);
        });
    }), _0x346cb6['vgdfB'](describe, _0x346cb6['EwjzI'], () => {
        const _0x38ff41 = {
            'dHXOP': function (_0x22683b, _0x2b9f01) {
                return _0x346cb6['BJTbi'](_0x22683b, _0x2b9f01);
            },
            'PDxHy': _0x346cb6['Glqjj']
        };
        _0x346cb6['vgdfB'](it, _0x346cb6['rdUrT'], () => {
            _0x346cb6['wiFyt'](waitsForPromise, () => atom['packages']['activatePackage']('git-diff')), _0x346cb6['wiFyt'](waitsForPromise, () => atom['packages']['deactivatePackage']('git-diff')), _0x346cb6['BJTbi'](runs, () => {
                _0x38ff41['dHXOP'](expect, atom['packages']['isPackageActive'](_0x38ff41['PDxHy']))['toBe'](![]), atom['commands']['findCommands']({ 'target': _0x5924d9 })['filter'](({name: _0x355ce5}) => commands['includes'](_0x355ce5))['forEach'](_0x4f52a8 => expect(commands)['not']['toContain'](_0x4f52a8['name']));
            });
        });
    });
});
