const dalek = require('./dalek');
const Grim = require('grim');
module['exports'] = {
    'activate'() {
        atom['packages']['onDidActivateInitialPackages'](async () => {
            const _0x4e797e = await dalek['enumerate']();
            for (let _0x1e18b5 = 0; _0x1e18b5 < _0x4e797e['length']; _0x1e18b5++) {
                const _0x19db76 = _0x4e797e[_0x1e18b5];
                Grim['deprecate']('You have the core package "' + _0x19db76 + '" installed as a community package. See https://github.com/atom/atom/blob/master/packages/dalek/README.md for how this causes problems and instructions on how to correct the situation.', { 'packageName': _0x19db76 });
            }
        });
    }
};