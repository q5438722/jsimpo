const fs = require(_0x3c0f2a(228)), path = require(_0x3c0f2a(229)), {promisifiedSpawn} = require(_0x3c0f2a(230)), {registryUrl} = require(_0x3c0f2a(231)), NPMRCContent = registryUrl['replace'](/https?:/g, '') + _0x3c0f2a(232), {getMonorepoPackageJsonPath} = require(_0x3c0f2a(233)), {registerCleanupTask} = require('./cleanup-tasks'), adjustPackageJson = ({
        monoRepoPackageJsonPath: _0x400739,
        packageName: _0x19dd6f,
        versionPostFix: _0x1ff486,
        packagesToPublish: _0x38185d,
        ignorePackageJSONChanges: _0x1d6540,
        root: _0xb22fe
    }) => {
        const _0x11d001 = _0x3c0f2a, _0x538c9b = fs['readFileSync'](_0x400739, _0x11d001(234)), _0xaa69a9 = JSON[_0x11d001(235)](_0x538c9b);
        _0xaa69a9[_0x11d001(236)] = _0xaa69a9[_0x11d001(236)] + _0x11d001(237) + _0x1ff486, _0x38185d['forEach'](_0xb4da1b => {
            const _0x5bdb2f = _0x11d001;
            if (_0xaa69a9[_0x5bdb2f(238)] && _0xaa69a9[_0x5bdb2f(238)][_0xb4da1b]) {
                const _0x22d10d = JSON[_0x5bdb2f(235)](fs[_0x5bdb2f(239)](getMonorepoPackageJsonPath({
                    'packageName': _0xb4da1b,
                    'root': _0xb22fe
                }), _0x5bdb2f(234)))[_0x5bdb2f(236)];
                _0xaa69a9[_0x5bdb2f(238)][_0xb4da1b] = _0x22d10d + _0x5bdb2f(237) + _0x1ff486;
            }
        });
        const _0x59fe66 = JSON[_0x11d001(240)](_0xaa69a9), _0x5146e6 = _0x1d6540(_0x19dd6f, [
                _0x538c9b,
                _0x59fe66
            ]);
        return fs[_0x11d001(241)](_0x400739, _0x59fe66), {
            'newPackageVersion': _0xaa69a9['version'],
            'unadjustPackageJson': registerCleanupTask(() => {
                fs['outputFileSync'](_0x400739, _0x538c9b), _0x5146e6();
            })
        };
    }, createTemporaryNPMRC = ({pathToPackage: _0x5de8e4}) => {
        const _0x2a69e0 = _0x3c0f2a, _0x40362a = path['join'](_0x5de8e4, _0x2a69e0(242));
        return fs[_0x2a69e0(241)](_0x40362a, NPMRCContent), registerCleanupTask(() => {
            const _0x209f7a = _0x2a69e0;
            fs[_0x209f7a(243)](_0x40362a);
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
                _0x43a7f9(244),
                [
                    'publish',
                    '--tag',
                    _0x43a7f9(245),
                    '--registry=' + registryUrl
                ],
                { 'cwd': _0x1f581c }
            ];
        console['log'](_0x43a7f9(246) + _0x4f7682 + '@' + _0xf07dd9 + ' to local registry');
        try {
            await promisifiedSpawn(_0x16e3bc), console[_0x43a7f9(247)](_0x43a7f9(248) + _0x4f7682 + '@' + _0xf07dd9 + ' to local registry');
        } catch (_0x4e44e3) {
            console[_0x43a7f9(249)](_0x43a7f9(250) + _0x4f7682 + '@' + _0xf07dd9, _0x4e44e3), process['exit'](1);
        }
        return _0x308e68(), _0x3cd9db(), _0xf07dd9;
    };
exports[_0x3c0f2a(251)] = publishPackage;