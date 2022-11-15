const fs = require('fs-extra'), path = require('path'), {promisifiedSpawn} = require('../utils/promisified-spawn'), {registryUrl} = require('./verdaccio-config'), NPMRCContent = registryUrl['replace'](/https?:/g, '') + '/:_authToken=\x22gatsby-dev\x22', {getMonorepoPackageJsonPath} = require('../utils/get-monorepo-package-json-path'), {registerCleanupTask} = require('./cleanup-tasks'), adjustPackageJson = ({
        monoRepoPackageJsonPath: _0xd81107,
        packageName: _0x4ceba3,
        versionPostFix: _0xad7ef2,
        packagesToPublish: _0x2efd85,
        ignorePackageJSONChanges: _0x324648,
        root: _0x5bcd9a
    }) => {
        const _0x446b85 = fs['readFileSync'](_0xd81107, 'utf-8'), _0x4e2620 = JSON['parse'](_0x446b85);
        _0x4e2620['version'] = _0x4e2620['version'] + '-dev-' + _0xad7ef2, _0x2efd85['forEach'](_0x472ab4 => {
            if (_0x4e2620['dependencies'] && _0x4e2620['dependencies'][_0x472ab4]) {
                const _0x4b11bd = JSON['parse'](fs['readFileSync'](getMonorepoPackageJsonPath({
                    'packageName': _0x472ab4,
                    'root': _0x5bcd9a
                }), 'utf-8'))['version'];
                _0x4e2620['dependencies'][_0x472ab4] = _0x4b11bd + '-dev-' + _0xad7ef2;
            }
        });
        const _0x3e9485 = JSON['stringify'](_0x4e2620), _0x2c2cdc = _0x324648(_0x4ceba3, [
                _0x446b85,
                _0x3e9485
            ]);
        return fs['outputFileSync'](_0xd81107, _0x3e9485), {
            'newPackageVersion': _0x4e2620['version'],
            'unadjustPackageJson': registerCleanupTask(() => {
                fs['outputFileSync'](_0xd81107, _0x446b85), _0x2c2cdc();
            })
        };
    }, createTemporaryNPMRC = ({pathToPackage: _0x3facde}) => {
        const _0x2d0d33 = path['join'](_0x3facde, '.npmrc');
        return fs['outputFileSync'](_0x2d0d33, NPMRCContent), registerCleanupTask(() => {
            fs['removeSync'](_0x2d0d33);
        });
    }, publishPackage = async ({
        packageName: _0x35c7f8,
        packagesToPublish: _0x2f2eb0,
        root: _0x35f687,
        versionPostFix: _0x32cec8,
        ignorePackageJSONChanges: _0x146010
    }) => {
        const _0x17fb0d = getMonorepoPackageJsonPath({
                'packageName': _0x35c7f8,
                'root': _0x35f687
            }), {
                unadjustPackageJson: _0x209cc7,
                newPackageVersion: _0x5ca8b5
            } = adjustPackageJson({
                'monoRepoPackageJsonPath': _0x17fb0d,
                'packageName': _0x35c7f8,
                'root': _0x35f687,
                'versionPostFix': _0x32cec8,
                'packagesToPublish': _0x2f2eb0,
                'ignorePackageJSONChanges': _0x146010
            }), _0x12b1b7 = path['dirname'](_0x17fb0d), _0x3dd11d = createTemporaryNPMRC({ 'pathToPackage': _0x12b1b7 }), _0x385daa = [
                'npm',
                [
                    'publish',
                    '--tag',
                    'gatsby-dev',
                    '--registry=' + registryUrl
                ],
                { 'cwd': _0x12b1b7 }
            ];
        console['log']('Publishing\x20' + _0x35c7f8 + '@' + _0x5ca8b5 + '\x20to\x20local\x20registry');
        try {
            await promisifiedSpawn(_0x385daa), console['log']('Published\x20' + _0x35c7f8 + '@' + _0x5ca8b5 + '\x20to\x20local\x20registry');
        } catch (_0x1b71c6) {
            console['error']('Failed\x20to\x20publish\x20' + _0x35c7f8 + '@' + _0x5ca8b5, _0x1b71c6), process['exit'](0x76b + -0x184f * -0x1 + 0x1 * -0x1fb9);
        }
        return _0x3dd11d(), _0x209cc7(), _0x5ca8b5;
    };
exports['publishPackage'] = publishPackage;
