const {writeFileSync} = require('fs'), yargs = require('yargs'), {getPackages} = require('@lerna/project'), PackageGraph = require('@lerna/package-graph'), semver = require('semver');
let warned = ![];
const argv = yargs['option']('fix', {
    'default': ![],
    'describe': 'Fixes\x20outdated\x20dependencies'
})['option']('allow-next', {
    'default': ![],
    'describe': 'Allow\x20using\x20\x22next\x22\x20versions.\x20Use\x20this\x20only\x20for\x20alpha/beta\x20releases'
})['argv'];
getPackages(process['cwd']())['then'](_0x1a7d29 => {
    const _0x2b99a9 = {
            'AczLa': function (_0x18c7e7, _0x4c83c7, _0x25f37d) {
                return _0x18c7e7(_0x4c83c7, _0x25f37d);
            }
        }, _0x5bd5b9 = new PackageGraph(_0x1a7d29, 'allDependencies', !![]);
    _0x5bd5b9['forEach']((_0x3347e2, _0x52c206) => {
        let _0x5bc950 = Array['from'](_0x3347e2['localDependencies']['values']())['filter'](_0x39bfb5 => !semver['satisfies'](_0x5bd5b9['get'](_0x39bfb5['name'])['version'], _0x39bfb5['fetchSpec']));
        argv['allow-next'] && (_0x5bc950 = _0x5bc950['filter'](_0x29acbc => _0x29acbc['fetchSpec'] !== 'next'));
        if (!_0x5bc950['length'])
            return;
        const _0x2fc5af = _0x5bc950['map'](_0xac6cb5 => '\x20\x20Depends\x20on\x20\x22' + _0xac6cb5['name'] + '@' + _0xac6cb5['fetchSpec'] + '\x22\x20\x0a' + ('\x20\x20instead\x20of\x20\x22' + _0xac6cb5['name'] + '@' + _0x5bd5b9['get'](_0xac6cb5['name'])['version'] + '\x22.\x20\x0a'))['join']('\x0a');
        console['error'](_0x3347e2['name'] + ':\x20\x0a' + _0x2fc5af), warned = !![];
        if (argv['fix']) {
            const _0x6f442e = _0x3347e2['pkg'], _0x4c8247 = _0x6f442e['toJSON'](), _0x53aae3 = [
                    'dependencies',
                    'devDependencies',
                    'peerDependencies'
                ];
            _0x5bc950['forEach'](_0x39d966 => {
                _0x53aae3['forEach'](_0x4cdec0 => {
                    _0x6f442e[_0x4cdec0] && _0x6f442e[_0x4cdec0][_0x39d966['name']] && (_0x4c8247[_0x4cdec0][_0x39d966['name']] = '^' + _0x5bd5b9['get'](_0x39d966['name'])['version']);
                });
            }), _0x2b99a9['AczLa'](writeFileSync, _0x6f442e['location'] + '/package.json', JSON['stringify'](_0x4c8247, null, 0x2));
        }
    }), warned && process['exit'](0x1);
});
