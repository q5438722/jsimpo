const _0x430d = [
    '-dev-',
    'dependencies',
    'readFileSync',
    'stringify',
    'outputFileSync',
    '.npmrc',
    'removeSync',
    'npm',
    'gatsby-dev',
    'Publishing\x20',
    'log',
    'Published\x20',
    'error',
    'Failed\x20to\x20publish\x20',
    'publishPackage',
    '465tjNRGC',
    '629iRdiya',
    '8144htNfvX',
    '22BWTTsM',
    '628319fDnpMK',
    '8meOVvo',
    '162648DETUUi',
    '6zyzQmW',
    '803mhmVdp',
    '563937aCxjEb',
    '1ZibcYd',
    '1359353cPipCR',
    'fs-extra',
    'path',
    '../utils/promisified-spawn',
    './verdaccio-config',
    '/:_authToken=\x22gatsby-dev\x22',
    '../utils/get-monorepo-package-json-path',
    'utf-8',
    'parse',
    'version'
];
function _0x4343(_0x413037, _0x350828) {
    return _0x4343 = function (_0x430d96, _0x4343a9) {
        _0x430d96 = _0x430d96 - 0xd8;
        let _0x454a05 = _0x430d[_0x430d96];
        return _0x454a05;
    }, _0x4343(_0x413037, _0x350828);
}
const _0x3c0f2a = _0x4343;
(function (_0x14ed5a, _0x26aa2f) {
    const _0x1281a8 = _0x4343;
    while (!![]) {
        try {
            const _0x2a2365 = parseInt(_0x1281a8(0xd8)) * -parseInt(_0x1281a8(0xd9)) + -parseInt(_0x1281a8(0xda)) * parseInt(_0x1281a8(0xdb)) + parseInt(_0x1281a8(0xdc)) + parseInt(_0x1281a8(0xdd)) * parseInt(_0x1281a8(0xde)) + -parseInt(_0x1281a8(0xdf)) * -parseInt(_0x1281a8(0xe0)) + parseInt(_0x1281a8(0xe1)) * parseInt(_0x1281a8(0xe2)) + -parseInt(_0x1281a8(0xe3));
            if (_0x2a2365 === _0x26aa2f)
                break;
            else
                _0x14ed5a['push'](_0x14ed5a['shift']());
        } catch (_0x9659c2) {
            _0x14ed5a['push'](_0x14ed5a['shift']());
        }
    }
}(_0x430d, 0xa2e74));
const fs = require(_0x3c0f2a(0xe4)), path = require(_0x3c0f2a(0xe5)), {promisifiedSpawn} = require(_0x3c0f2a(0xe6)), {registryUrl} = require(_0x3c0f2a(0xe7)), NPMRCContent = registryUrl['replace'](/https?:/g, '') + _0x3c0f2a(0xe8), {getMonorepoPackageJsonPath} = require(_0x3c0f2a(0xe9)), {registerCleanupTask} = require('./cleanup-tasks'), adjustPackageJson = ({
        monoRepoPackageJsonPath: _0x400739,
        packageName: _0x19dd6f,
        versionPostFix: _0x1ff486,
        packagesToPublish: _0x38185d,
        ignorePackageJSONChanges: _0x1d6540,
        root: _0xb22fe
    }) => {
        const _0x11d001 = _0x3c0f2a, _0x538c9b = fs['readFileSync'](_0x400739, _0x11d001(0xea)), _0xaa69a9 = JSON[_0x11d001(0xeb)](_0x538c9b);
        _0xaa69a9[_0x11d001(0xec)] = _0xaa69a9[_0x11d001(0xec)] + _0x11d001(0xed) + _0x1ff486, _0x38185d['forEach'](_0xb4da1b => {
            const _0x5bdb2f = _0x11d001;
            if (_0xaa69a9[_0x5bdb2f(0xee)] && _0xaa69a9[_0x5bdb2f(0xee)][_0xb4da1b]) {
                const _0x22d10d = JSON[_0x5bdb2f(0xeb)](fs[_0x5bdb2f(0xef)](getMonorepoPackageJsonPath({
                    'packageName': _0xb4da1b,
                    'root': _0xb22fe
                }), _0x5bdb2f(0xea)))[_0x5bdb2f(0xec)];
                _0xaa69a9[_0x5bdb2f(0xee)][_0xb4da1b] = _0x22d10d + _0x5bdb2f(0xed) + _0x1ff486;
            }
        });
        const _0x59fe66 = JSON[_0x11d001(0xf0)](_0xaa69a9), _0x5146e6 = _0x1d6540(_0x19dd6f, [
                _0x538c9b,
                _0x59fe66
            ]);
        return fs[_0x11d001(0xf1)](_0x400739, _0x59fe66), {
            'newPackageVersion': _0xaa69a9['version'],
            'unadjustPackageJson': registerCleanupTask(() => {
                fs['outputFileSync'](_0x400739, _0x538c9b), _0x5146e6();
            })
        };
    }, createTemporaryNPMRC = ({pathToPackage: _0x5de8e4}) => {
        const _0x2a69e0 = _0x3c0f2a, _0x40362a = path['join'](_0x5de8e4, _0x2a69e0(0xf2));
        return fs[_0x2a69e0(0xf1)](_0x40362a, NPMRCContent), registerCleanupTask(() => {
            const _0x209f7a = _0x2a69e0;
            fs[_0x209f7a(0xf3)](_0x40362a);
        });
    }, publishPackage = async ({
        packageName: _0x4f7682,
        packagesToPublish: _0x131ca1,
        root: _0x508f61,
        versionPostFix: _0x2deb8a,
        ignorePackageJSONChanges: _0x58114d
    }) => {
        const _0x43a7f9 = _0x3c0f2a, _0x3eb6ac = getMonorepoPackageJsonPath({
                'packageName': _0x4f7682,
                'root': _0x508f61
            }), {
                unadjustPackageJson: _0x3cd9db,
                newPackageVersion: _0xf07dd9
            } = adjustPackageJson({
                'monoRepoPackageJsonPath': _0x3eb6ac,
                'packageName': _0x4f7682,
                'root': _0x508f61,
                'versionPostFix': _0x2deb8a,
                'packagesToPublish': _0x131ca1,
                'ignorePackageJSONChanges': _0x58114d
            }), _0x1f581c = path['dirname'](_0x3eb6ac), _0x308e68 = createTemporaryNPMRC({ 'pathToPackage': _0x1f581c }), _0x16e3bc = [
                _0x43a7f9(0xf4),
                [
                    'publish',
                    '--tag',
                    _0x43a7f9(0xf5),
                    '--registry=' + registryUrl
                ],
                { 'cwd': _0x1f581c }
            ];
        console['log'](_0x43a7f9(0xf6) + _0x4f7682 + '@' + _0xf07dd9 + '\x20to\x20local\x20registry');
        try {
            await promisifiedSpawn(_0x16e3bc), console[_0x43a7f9(0xf7)](_0x43a7f9(0xf8) + _0x4f7682 + '@' + _0xf07dd9 + '\x20to\x20local\x20registry');
        } catch (_0x4e44e3) {
            console[_0x43a7f9(0xf9)](_0x43a7f9(0xfa) + _0x4f7682 + '@' + _0xf07dd9, _0x4e44e3), process['exit'](0x1);
        }
        return _0x308e68(), _0x3cd9db(), _0xf07dd9;
    };
exports[_0x3c0f2a(0xfb)] = publishPackage;
