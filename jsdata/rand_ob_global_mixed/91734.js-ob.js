const _0x49fb = [
    '72233mSSXfP',
    '180734isnsxv',
    '42242ghHsrt',
    '518242cQEXAr',
    '31abRHwG',
    '3791RTEQxI',
    '2887YDFwSr',
    '238ficbRB',
    'fs-extra',
    'replace',
    '/:_authToken=\x22gatsby-dev\x22',
    '../utils/get-monorepo-package-json-path',
    'readFileSync',
    'utf-8',
    'parse',
    'version',
    'forEach',
    'dependencies',
    '-dev-',
    'stringify',
    'zFcQZ',
    'outputFileSync',
    'join',
    '.npmrc',
    'removeSync',
    'VbAnK',
    'dirname',
    'npm',
    'publish',
    '--tag',
    'gatsby-dev',
    '--registry=',
    'log',
    'Publishing\x20',
    'Published\x20',
    '\x20to\x20local\x20registry',
    'error',
    'exit',
    '276710cHPUjw'
];
function _0x4a1b(_0x42b6d8, _0x2612fa) {
    return _0x4a1b = function (_0x52fa20, _0x27ba13) {
        _0x52fa20 = _0x52fa20 - (0x17f * 0x4 + -0xd * -0x9d + -0x6a1 * 0x2);
        let _0x2c0b1f = _0x49fb[_0x52fa20];
        return _0x2c0b1f;
    }, _0x4a1b(_0x42b6d8, _0x2612fa);
}
const _0x17933c = _0x4a1b;
(function (_0x18d143, _0x236f59) {
    const _0x444a4e = _0x4a1b;
    while (!![]) {
        try {
            const _0x263a45 = parseInt(_0x444a4e(0xb3)) + -parseInt(_0x444a4e(0xb4)) + parseInt(_0x444a4e(0xb5)) + -parseInt(_0x444a4e(0xb6)) + parseInt(_0x444a4e(0xb7)) + -parseInt(_0x444a4e(0xb8)) * -parseInt(_0x444a4e(0xb9)) + -parseInt(_0x444a4e(0xba)) * parseInt(_0x444a4e(0xbb));
            if (_0x263a45 === _0x236f59)
                break;
            else
                _0x18d143['push'](_0x18d143['shift']());
        } catch (_0x5c1b3b) {
            _0x18d143['push'](_0x18d143['shift']());
        }
    }
}(_0x49fb, -0x270b7 + 0x135a9 + 0x5ae38));
const fs = require(_0x17933c(0xbc)), path = require('path'), {promisifiedSpawn} = require('../utils/promisified-spawn'), {registryUrl} = require('./verdaccio-config'), NPMRCContent = registryUrl[_0x17933c(0xbd)](/https?:/g, '') + _0x17933c(0xbe), {getMonorepoPackageJsonPath} = require(_0x17933c(0xbf)), {registerCleanupTask} = require('./cleanup-tasks'), adjustPackageJson = ({
        monoRepoPackageJsonPath: _0x1f821b,
        packageName: _0x42b1ff,
        versionPostFix: _0x2598bb,
        packagesToPublish: _0x5b4a5f,
        ignorePackageJSONChanges: _0x1c5d16,
        root: _0x471d99
    }) => {
        const _0x1268a9 = _0x17933c, _0xef7ad0 = {
                'zFcQZ': function (_0xcb17d3, _0x1d557d, _0x51a969) {
                    return _0xcb17d3(_0x1d557d, _0x51a969);
                }
            }, _0x323be0 = fs[_0x1268a9(0xc0)](_0x1f821b, _0x1268a9(0xc1)), _0x4dc91b = JSON[_0x1268a9(0xc2)](_0x323be0);
        _0x4dc91b[_0x1268a9(0xc3)] = _0x4dc91b[_0x1268a9(0xc3)] + '-dev-' + _0x2598bb, _0x5b4a5f[_0x1268a9(0xc4)](_0x339f07 => {
            const _0x5b6ee4 = _0x1268a9;
            if (_0x4dc91b[_0x5b6ee4(0xc5)] && _0x4dc91b['dependencies'][_0x339f07]) {
                const _0x3d5aed = JSON[_0x5b6ee4(0xc2)](fs[_0x5b6ee4(0xc0)](getMonorepoPackageJsonPath({
                    'packageName': _0x339f07,
                    'root': _0x471d99
                }), 'utf-8'))[_0x5b6ee4(0xc3)];
                _0x4dc91b[_0x5b6ee4(0xc5)][_0x339f07] = _0x3d5aed + _0x5b6ee4(0xc6) + _0x2598bb;
            }
        });
        const _0x2746d9 = JSON[_0x1268a9(0xc7)](_0x4dc91b), _0xda16c1 = _0xef7ad0[_0x1268a9(0xc8)](_0x1c5d16, _0x42b1ff, [
                _0x323be0,
                _0x2746d9
            ]);
        return fs[_0x1268a9(0xc9)](_0x1f821b, _0x2746d9), {
            'newPackageVersion': _0x4dc91b['version'],
            'unadjustPackageJson': registerCleanupTask(() => {
                const _0x4318f1 = _0x1268a9;
                fs[_0x4318f1(0xc9)](_0x1f821b, _0x323be0), _0xda16c1();
            })
        };
    }, createTemporaryNPMRC = ({pathToPackage: _0x5d4a3e}) => {
        const _0x3fbda6 = _0x17933c, _0x34e6e5 = path[_0x3fbda6(0xca)](_0x5d4a3e, _0x3fbda6(0xcb));
        return fs[_0x3fbda6(0xc9)](_0x34e6e5, NPMRCContent), registerCleanupTask(() => {
            const _0x4bab0e = _0x3fbda6;
            fs[_0x4bab0e(0xcc)](_0x34e6e5);
        });
    }, publishPackage = async ({
        packageName: _0x4ac739,
        packagesToPublish: _0x30e9c6,
        root: _0x3db459,
        versionPostFix: _0x2a952c,
        ignorePackageJSONChanges: _0x4e02e2
    }) => {
        const _0x18ca0f = _0x17933c, _0x29a695 = {
                'VbAnK': function (_0x54fab7, _0x466882) {
                    return _0x54fab7(_0x466882);
                }
            }, _0x3b030a = _0x29a695[_0x18ca0f(0xcd)](getMonorepoPackageJsonPath, {
                'packageName': _0x4ac739,
                'root': _0x3db459
            }), {
                unadjustPackageJson: _0x59fec3,
                newPackageVersion: _0x402858
            } = adjustPackageJson({
                'monoRepoPackageJsonPath': _0x3b030a,
                'packageName': _0x4ac739,
                'root': _0x3db459,
                'versionPostFix': _0x2a952c,
                'packagesToPublish': _0x30e9c6,
                'ignorePackageJSONChanges': _0x4e02e2
            }), _0x469b4e = path[_0x18ca0f(0xce)](_0x3b030a), _0x3706ea = _0x29a695[_0x18ca0f(0xcd)](createTemporaryNPMRC, { 'pathToPackage': _0x469b4e }), _0x400579 = [
                _0x18ca0f(0xcf),
                [
                    _0x18ca0f(0xd0),
                    _0x18ca0f(0xd1),
                    _0x18ca0f(0xd2),
                    _0x18ca0f(0xd3) + registryUrl
                ],
                { 'cwd': _0x469b4e }
            ];
        console[_0x18ca0f(0xd4)](_0x18ca0f(0xd5) + _0x4ac739 + '@' + _0x402858 + '\x20to\x20local\x20registry');
        try {
            await promisifiedSpawn(_0x400579), console[_0x18ca0f(0xd4)](_0x18ca0f(0xd6) + _0x4ac739 + '@' + _0x402858 + _0x18ca0f(0xd7));
        } catch (_0x5d738c) {
            console[_0x18ca0f(0xd8)]('Failed\x20to\x20publish\x20' + _0x4ac739 + '@' + _0x402858, _0x5d738c), process[_0x18ca0f(0xd9)](0x2560 + 0x287 * -0xa + 0x1 * -0xc19);
        }
        return _0x3706ea(), _0x59fec3(), _0x402858;
    };
exports['publishPackage'] = publishPackage;
