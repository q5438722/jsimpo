const {writeFileSync} = require('fs'), yargs = require('yargs'), {getPackages} = require('@lerna/project'), PackageGraph = require('@lerna/package-graph'), semver = require('semver');
let warned = ![];
const argv = yargs['option']('fix', {
    'default': ![],
    'describe': 'Fixes\x20outdated\x20dependencies'
})['option']('allow-next', {
    'default': ![],
    'describe': 'Allow\x20using\x20\x22next\x22\x20versions.\x20Use\x20this\x20only\x20for\x20alpha/beta\x20releases'
})['argv'];
getPackages(process['cwd']())['then'](_0x46d251 => {
    const _0x21a33e = new PackageGraph(_0x46d251, 'allDependencies', !![]);
    _0x21a33e['forEach']((_0x565d86, _0x1d091c) => {
        let _0x9b30d9 = Array['from'](_0x565d86['localDependencies']['values']())['filter'](_0x5a3ac6 => !semver['satisfies'](_0x21a33e['get'](_0x5a3ac6['name'])['version'], _0x5a3ac6['fetchSpec']));
        argv['allow-next'] && (_0x9b30d9 = _0x9b30d9['filter'](_0x5d5bef => _0x5d5bef['fetchSpec'] !== 'next'));
        if (!_0x9b30d9['length'])
            return;
        const _0x594580 = _0x9b30d9['map'](_0x45a8e2 => '\x20\x20Depends\x20on\x20\x22' + _0x45a8e2['name'] + '@' + _0x45a8e2['fetchSpec'] + '\x22\x20\x0a' + ('\x20\x20instead\x20of\x20\x22' + _0x45a8e2['name'] + '@' + _0x21a33e['get'](_0x45a8e2['name'])['version'] + '\x22.\x20\x0a'))['join']('\x0a');
        console['error'](_0x565d86['name'] + ':\x20\x0a' + _0x594580), warned = !![];
        if (argv['fix']) {
            const _0x127f47 = _0x565d86['pkg'], _0x1f8057 = _0x127f47['toJSON'](), _0x1d04ea = [
                    'dependencies',
                    'devDependencies',
                    'peerDependencies'
                ];
            _0x9b30d9['forEach'](_0x523008 => {
                _0x1d04ea['forEach'](_0x390b3f => {
                    _0x127f47[_0x390b3f] && _0x127f47[_0x390b3f][_0x523008['name']] && (_0x1f8057[_0x390b3f][_0x523008['name']] = '^' + _0x21a33e['get'](_0x523008['name'])['version']);
                });
            }), writeFileSync(_0x127f47['location'] + '/package.json', JSON['stringify'](_0x1f8057, null, -0x1 * 0x146f + -0x1 * -0x150b + 0x4d * -0x2));
        }
    }), warned && process['exit'](0x19eb + -0x162d + 0x3 * -0x13f);
});
