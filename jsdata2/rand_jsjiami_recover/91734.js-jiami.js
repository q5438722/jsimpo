const fs = require('fs-extra');
const path = require('path');
const {promisifiedSpawn} = require('../utils/promisified-spawn');
const {registryUrl} = require('./verdaccio-config');
const NPMRCContent = registryUrl['replace'](/https?:/g, '') + '/:_authToken="gatsby-dev"';
const {getMonorepoPackageJsonPath} = require('../utils/get-monorepo-package-json-path');
const {registerCleanupTask} = require('./cleanup-tasks');
const adjustPackageJson = ({monoRepoPackageJsonPath, packageName, versionPostFix, packagesToPublish, ignorePackageJSONChanges, root}) => {
    const _0x233c36 = fs['readFileSync'](monoRepoPackageJsonPath, 'utf-8');
    const _0xeecec6 = JSON['parse'](_0x233c36);
    _0xeecec6['version'] = _0xeecec6['version'] + '-dev-' + versionPostFix;
    packagesToPublish['forEach'](_0x55613b => {
        if (_0xeecec6['dependencies'] && _0xeecec6['dependencies'][_0x55613b]) {
            const _0xd29984 = JSON['parse'](fs['readFileSync'](getMonorepoPackageJsonPath({
                'packageName': _0x55613b,
                'root': root
            }), 'utf-8'))['version'];
            _0xeecec6['dependencies'][_0x55613b] = _0xd29984 + '-dev-' + versionPostFix;
        }
    });
    const _0x4ddb93 = JSON['stringify'](_0xeecec6);
    const _0x44e459 = ignorePackageJSONChanges(packageName, [
        _0x233c36,
        _0x4ddb93
    ]);
    fs['outputFileSync'](monoRepoPackageJsonPath, _0x4ddb93);
    return {
        'newPackageVersion': _0xeecec6['version'],
        'unadjustPackageJson': registerCleanupTask(() => {
            fs['outputFileSync'](monoRepoPackageJsonPath, _0x233c36);
            _0x44e459();
        })
    };
};
const createTemporaryNPMRC = ({pathToPackage}) => {
    const _0x29bba9 = path['join'](pathToPackage, '.npmrc');
    fs['outputFileSync'](_0x29bba9, NPMRCContent);
    return registerCleanupTask(() => {
        fs['removeSync'](_0x29bba9);
    });
};
const publishPackage = async ({packageName, packagesToPublish, root, versionPostFix, ignorePackageJSONChanges}) => {
    const _0x2cd82e = getMonorepoPackageJsonPath({
        'packageName': packageName,
        'root': root
    });
    const {unadjustPackageJson, newPackageVersion} = adjustPackageJson({
        'monoRepoPackageJsonPath': _0x2cd82e,
        'packageName': packageName,
        'root': root,
        'versionPostFix': versionPostFix,
        'packagesToPublish': packagesToPublish,
        'ignorePackageJSONChanges': ignorePackageJSONChanges
    });
    const _0x50a846 = path['dirname'](_0x2cd82e);
    const _0x3a6b0f = createTemporaryNPMRC({ 'pathToPackage': _0x50a846 });
    const _0x58d6bf = [
        'npm',
        [
            'publish',
            '--tag',
            'gatsby-dev',
            '--registry=' + registryUrl
        ],
        { 'cwd': _0x50a846 }
    ];
    console['log']('Publishing ' + packageName + '@' + newPackageVersion + ' to local registry');
    try {
        await promisifiedSpawn(_0x58d6bf);
        console['log']('Published ' + packageName + '@' + newPackageVersion + ' to local registry');
    } catch (_0x4a668f) {
        if ('rYvCO' === 'rYvCO') {
            console['error']('Failed to publish ' + packageName + '@' + newPackageVersion, _0x4a668f);
            process['exit'](1);
        } else {
            const _0x629f10 = JSON['parse'](fs['readFileSync'](getMonorepoPackageJsonPath({
                'packageName': packageThatWillBePublished,
                'root': root
            }), 'utf-8'))['version'];
            monorepoPKGjson['dependencies'][packageThatWillBePublished] = _0x629f10 + '-dev-' + versionPostFix;
        }
    }
    _0x3a6b0f();
    unadjustPackageJson();
    return newPackageVersion;
};
exports['publishPackage'] = publishPackage;