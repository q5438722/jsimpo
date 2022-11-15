const fs = require(_0x17933c(188)), path = require('path'), {promisifiedSpawn} = require('../utils/promisified-spawn'), {registryUrl} = require('./verdaccio-config'), NPMRCContent = registryUrl[_0x17933c(189)](/https?:/g, '') + _0x17933c(190), {getMonorepoPackageJsonPath} = require(_0x17933c(191)), {registerCleanupTask} = require('./cleanup-tasks'), adjustPackageJson = ({
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
            }, _0x323be0 = fs[_0x1268a9(192)](_0x1f821b, _0x1268a9(193)), _0x4dc91b = JSON[_0x1268a9(194)](_0x323be0);
        _0x4dc91b[_0x1268a9(195)] = _0x4dc91b[_0x1268a9(195)] + '-dev-' + _0x2598bb, _0x5b4a5f[_0x1268a9(196)](_0x339f07 => {
            const _0x5b6ee4 = _0x1268a9;
            if (_0x4dc91b[_0x5b6ee4(197)] && _0x4dc91b['dependencies'][_0x339f07]) {
                const _0x3d5aed = JSON[_0x5b6ee4(194)](fs[_0x5b6ee4(192)](getMonorepoPackageJsonPath({
                    'packageName': _0x339f07,
                    'root': _0x471d99
                }), 'utf-8'))[_0x5b6ee4(195)];
                _0x4dc91b[_0x5b6ee4(197)][_0x339f07] = _0x3d5aed + _0x5b6ee4(198) + _0x2598bb;
            }
        });
        const _0x2746d9 = JSON[_0x1268a9(199)](_0x4dc91b), _0xda16c1 = _0xef7ad0[_0x1268a9(200)](_0x1c5d16, _0x42b1ff, [
                _0x323be0,
                _0x2746d9
            ]);
        return fs[_0x1268a9(201)](_0x1f821b, _0x2746d9), {
            'newPackageVersion': _0x4dc91b['version'],
            'unadjustPackageJson': registerCleanupTask(() => {
                const _0x4318f1 = _0x1268a9;
                fs[_0x4318f1(201)](_0x1f821b, _0x323be0), _0xda16c1();
            })
        };
    }, createTemporaryNPMRC = ({pathToPackage: _0x5d4a3e}) => {
        const _0x3fbda6 = _0x17933c, _0x34e6e5 = path[_0x3fbda6(202)](_0x5d4a3e, _0x3fbda6(203));
        return fs[_0x3fbda6(201)](_0x34e6e5, NPMRCContent), registerCleanupTask(() => {
            const _0x4bab0e = _0x3fbda6;
            fs[_0x4bab0e(204)](_0x34e6e5);
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
            }, _0x3b030a = _0x29a695[_0x18ca0f(205)](getMonorepoPackageJsonPath, {
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
            }), _0x469b4e = path[_0x18ca0f(206)](_0x3b030a), _0x3706ea = _0x29a695[_0x18ca0f(205)](createTemporaryNPMRC, { 'pathToPackage': _0x469b4e }), _0x400579 = [
                _0x18ca0f(207),
                [
                    _0x18ca0f(208),
                    _0x18ca0f(209),
                    _0x18ca0f(210),
                    _0x18ca0f(211) + registryUrl
                ],
                { 'cwd': _0x469b4e }
            ];
        console[_0x18ca0f(212)](_0x18ca0f(213) + _0x4ac739 + '@' + _0x402858 + ' to local registry');
        try {
            await promisifiedSpawn(_0x400579), console[_0x18ca0f(212)](_0x18ca0f(214) + _0x4ac739 + '@' + _0x402858 + _0x18ca0f(215));
        } catch (_0x5d738c) {
            console[_0x18ca0f(216)]('Failed to publish ' + _0x4ac739 + '@' + _0x402858, _0x5d738c), process[_0x18ca0f(217)](9568 + 647 * -10 + 1 * -3097);
        }
        return _0x3706ea(), _0x59fec3(), _0x402858;
    };
exports['publishPackage'] = publishPackage;