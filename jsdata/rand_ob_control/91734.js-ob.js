const fs = require('fs-extra'), path = require('path'), {promisifiedSpawn} = require('../utils/promisified-spawn'), {registryUrl} = require('./verdaccio-config'), NPMRCContent = registryUrl['replace'](/https?:/g, '') + '/:_authToken=\x22gatsby-dev\x22', {getMonorepoPackageJsonPath} = require('../utils/get-monorepo-package-json-path'), {registerCleanupTask} = require('./cleanup-tasks'), adjustPackageJson = ({
        monoRepoPackageJsonPath: _0x108da5,
        packageName: _0x5c216e,
        versionPostFix: _0x4ac92c,
        packagesToPublish: _0x141b1e,
        ignorePackageJSONChanges: _0x412c30,
        root: _0xab1db9
    }) => {
        const _0x2356ce = {
                'OeKQY': function (_0x3b83e0, _0xd68f14) {
                    return _0x3b83e0(_0xd68f14);
                },
                'LFidt': function (_0x4a0ac1) {
                    return _0x4a0ac1();
                },
                'yYJzh': function (_0x5d4171, _0x42b583, _0x13a35d) {
                    return _0x5d4171(_0x42b583, _0x13a35d);
                }
            }, _0x2f99a6 = fs['readFileSync'](_0x108da5, 'utf-8'), _0x4e7343 = JSON['parse'](_0x2f99a6);
        _0x4e7343['version'] = _0x4e7343['version'] + '-dev-' + _0x4ac92c, _0x141b1e['forEach'](_0x13cebd => {
            if (_0x4e7343['dependencies'] && _0x4e7343['dependencies'][_0x13cebd]) {
                const _0x24a346 = JSON['parse'](fs['readFileSync'](_0x2356ce['OeKQY'](getMonorepoPackageJsonPath, {
                    'packageName': _0x13cebd,
                    'root': _0xab1db9
                }), 'utf-8'))['version'];
                _0x4e7343['dependencies'][_0x13cebd] = _0x24a346 + '-dev-' + _0x4ac92c;
            }
        });
        const _0x2211cf = JSON['stringify'](_0x4e7343), _0x463d50 = _0x2356ce['yYJzh'](_0x412c30, _0x5c216e, [
                _0x2f99a6,
                _0x2211cf
            ]);
        return fs['outputFileSync'](_0x108da5, _0x2211cf), {
            'newPackageVersion': _0x4e7343['version'],
            'unadjustPackageJson': _0x2356ce['OeKQY'](registerCleanupTask, () => {
                fs['outputFileSync'](_0x108da5, _0x2f99a6), _0x2356ce['LFidt'](_0x463d50);
            })
        };
    }, createTemporaryNPMRC = ({pathToPackage: _0x3f26d4}) => {
        const _0x37d449 = {
                'HSSaJ': function (_0x3b5b24, _0x40a94d) {
                    return _0x3b5b24(_0x40a94d);
                }
            }, _0xf94905 = path['join'](_0x3f26d4, '.npmrc');
        return fs['outputFileSync'](_0xf94905, NPMRCContent), _0x37d449['HSSaJ'](registerCleanupTask, () => {
            fs['removeSync'](_0xf94905);
        });
    }, publishPackage = async ({
        packageName: _0x1fdd62,
        packagesToPublish: _0x2a4325,
        root: _0x2bb7c6,
        versionPostFix: _0x21fcf3,
        ignorePackageJSONChanges: _0x13ea96
    }) => {
        const _0x274dcf = {
                'gxjxV': function (_0x323490, _0x596be1) {
                    return _0x323490(_0x596be1);
                },
                'ysBsn': function (_0x195a61, _0x3e817f) {
                    return _0x195a61(_0x3e817f);
                },
                'ItGQr': function (_0x11b22f, _0x1093f5) {
                    return _0x11b22f(_0x1093f5);
                },
                'btdvM': function (_0x2675e6) {
                    return _0x2675e6();
                },
                'xWJMJ': function (_0x3d04a1) {
                    return _0x3d04a1();
                }
            }, _0x5d7f18 = _0x274dcf['gxjxV'](getMonorepoPackageJsonPath, {
                'packageName': _0x1fdd62,
                'root': _0x2bb7c6
            }), {
                unadjustPackageJson: _0x3f395a,
                newPackageVersion: _0x628718
            } = _0x274dcf['ysBsn'](adjustPackageJson, {
                'monoRepoPackageJsonPath': _0x5d7f18,
                'packageName': _0x1fdd62,
                'root': _0x2bb7c6,
                'versionPostFix': _0x21fcf3,
                'packagesToPublish': _0x2a4325,
                'ignorePackageJSONChanges': _0x13ea96
            }), _0x424335 = path['dirname'](_0x5d7f18), _0x5189c9 = _0x274dcf['ItGQr'](createTemporaryNPMRC, { 'pathToPackage': _0x424335 }), _0x1514fc = [
                'npm',
                [
                    'publish',
                    '--tag',
                    'gatsby-dev',
                    '--registry=' + registryUrl
                ],
                { 'cwd': _0x424335 }
            ];
        console['log']('Publishing\x20' + _0x1fdd62 + '@' + _0x628718 + '\x20to\x20local\x20registry');
        try {
            await _0x274dcf['ItGQr'](promisifiedSpawn, _0x1514fc), console['log']('Published\x20' + _0x1fdd62 + '@' + _0x628718 + '\x20to\x20local\x20registry');
        } catch (_0x2fa422) {
            console['error']('Failed\x20to\x20publish\x20' + _0x1fdd62 + '@' + _0x628718, _0x2fa422), process['exit'](0x1);
        }
        return _0x274dcf['btdvM'](_0x5189c9), _0x274dcf['xWJMJ'](_0x3f395a), _0x628718;
    };
exports['publishPackage'] = publishPackage;
