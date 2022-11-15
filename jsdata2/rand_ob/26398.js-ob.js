const _0x16ea = [
    'cwd',
    'join',
    './build',
    './src',
    'resolve',
    'basename',
    'Copied\x20',
    '../esm',
    '../node',
    './index.d.ts',
    '*/index.{js,ts,tsx}',
    'sync',
    'all',
    'map',
    'package.json',
    'pathExists',
    'dirname',
    'vpaCp',
    'posix',
    'jZyUT',
    'JrbAq',
    'gEobT',
    'types',
    'module',
    'main',
    'writeFile',
    'stringify',
    '\x27types\x27\x20entry\x20\x27',
    '\x27\x20does\x20not\x20exist',
    'push',
    '\x27module\x27\x20entry\x20\x27',
    '\x27main\x27\x20entry\x20\x27',
    'SQedX',
    '**/*.d.ts',
    'path\x20',
    '\x20does\x20not\x20exists',
    'utf8',
    './node/index.js',
    './index.js',
    './esm/index.js',
    'readFile',
    'oUwqO',
    'rudmB',
    'existsSync',
    'uaiHo',
    'wqQBY',
    'IQjEu',
    'SIuIR',
    './package.json',
    'log',
    'VfNcP',
    'CDYYt',
    './umd/material-ui.development.js',
    '/**\x20@license\x20Material-UI\x20v',
    'version',
    '\x0a\x20*\x0a\x20*\x20This\x20source\x20code\x20is\x20licensed\x20under\x20the\x20MIT\x20license\x20found\x20in\x20the\x0a\x20*\x20LICENSE\x20file\x20in\x20the\x20root\x20directory\x20of\x20this\x20source\x20tree.\x0a\x20*/\x0a',
    'nWTUp',
    './legacy/index.js',
    './modern/index.js',
    './umd/material-ui.production.min.js',
    'bKnTm',
    'pTAej',
    'code',
    '../../README.md',
    'name',
    'olsaQ',
    '../../CHANGELOG.md',
    'MVyYZ',
    'error',
    '1PphAGg',
    '113409UHQILl',
    '270537OcHxGo',
    '2ntgLKe',
    '114259GuuigQ',
    '110977uLmrRD',
    '1wHseBF',
    '266230SyvsNB',
    '29410PnxMkT',
    '134243EpLDIf',
    'path',
    'fast-glob'
];
function _0x2127(_0x25b4aa, _0x20512c) {
    return _0x2127 = function (_0x496266, _0x3252f5) {
        _0x496266 = _0x496266 - (-0xc01 + 0x161c + -0x3f * 0x27);
        let _0x1e07dc = _0x16ea[_0x496266];
        return _0x1e07dc;
    }, _0x2127(_0x25b4aa, _0x20512c);
}
const _0x1542d7 = _0x2127;
(function (_0x8a9988, _0x4b97d7) {
    const _0x5d39db = _0x2127;
    while (!![]) {
        try {
            const _0x5cf732 = -parseInt(_0x5d39db(0x82)) * parseInt(_0x5d39db(0x83)) + parseInt(_0x5d39db(0x84)) + -parseInt(_0x5d39db(0x85)) * parseInt(_0x5d39db(0x86)) + parseInt(_0x5d39db(0x87)) * parseInt(_0x5d39db(0x88)) + parseInt(_0x5d39db(0x89)) + -parseInt(_0x5d39db(0x8a)) + -parseInt(_0x5d39db(0x8b));
            if (_0x5cf732 === _0x4b97d7)
                break;
            else
                _0x8a9988['push'](_0x8a9988['shift']());
        } catch (_0x3b43e5) {
            _0x8a9988['push'](_0x8a9988['shift']());
        }
    }
}(_0x16ea, -0x2e86c + -0x10dcb * 0x4 + -0x252bb * -0x4));
const path = require(_0x1542d7(0x8c)), fse = require('fs-extra'), glob = require(_0x1542d7(0x8d)), packagePath = process[_0x1542d7(0x8e)](), buildPath = path[_0x1542d7(0x8f)](packagePath, _0x1542d7(0x90)), srcPath = path['join'](packagePath, _0x1542d7(0x91));
async function includeFileInBuild(_0x2a51a7) {
    const _0x5a59f0 = _0x1542d7, _0x58be70 = path[_0x5a59f0(0x92)](packagePath, _0x2a51a7), _0x4fce95 = path['resolve'](buildPath, path[_0x5a59f0(0x93)](_0x2a51a7));
    await fse['copy'](_0x58be70, _0x4fce95), console['log'](_0x5a59f0(0x94) + _0x58be70 + '\x20to\x20' + _0x4fce95);
}
async function createModulePackages({
    from: _0x49151f,
    to: _0x15ca86
}) {
    const _0x494625 = _0x1542d7, _0x35e558 = {
            'vpaCp': _0x494625(0x95),
            'jZyUT': 'index.js',
            'JrbAq': './index.js',
            'YBGHf': _0x494625(0x96),
            'gEobT': _0x494625(0x97),
            'SQedX': function (_0x324429, _0x420260) {
                return _0x324429 > _0x420260;
            },
            'rinuP': _0x494625(0x98)
        }, _0x539487 = glob[_0x494625(0x99)](_0x35e558['rinuP'], { 'cwd': _0x49151f })['map'](path['dirname']);
    await Promise[_0x494625(0x9a)](_0x539487[_0x494625(0x9b)](async _0x48e661 => {
        const _0x22fe19 = _0x494625, _0x2cfd50 = path[_0x22fe19(0x8f)](_0x15ca86, _0x48e661, _0x22fe19(0x9c)), _0x45d609 = await fse[_0x22fe19(0x9d)](path[_0x22fe19(0x92)](path[_0x22fe19(0x9e)](_0x2cfd50), _0x35e558[_0x22fe19(0x9f)])), _0x130308 = {
                'sideEffects': ![],
                'module': _0x45d609 ? path[_0x22fe19(0xa0)]['join'](_0x35e558[_0x22fe19(0x9f)], _0x48e661, _0x35e558[_0x22fe19(0xa1)]) : _0x35e558[_0x22fe19(0xa2)],
                'main': _0x45d609 ? _0x35e558[_0x22fe19(0xa2)] : path['posix']['join'](_0x35e558['YBGHf'], _0x48e661, _0x35e558[_0x22fe19(0xa1)]),
                'types': _0x35e558[_0x22fe19(0xa3)]
            }, [_0x5a6a84, _0x387ba1, _0x22a0e3] = await Promise[_0x22fe19(0x9a)]([
                fse[_0x22fe19(0x9d)](path[_0x22fe19(0x92)](path['dirname'](_0x2cfd50), _0x130308[_0x22fe19(0xa4)])),
                fse[_0x22fe19(0x9d)](path['resolve'](path[_0x22fe19(0x9e)](_0x2cfd50), _0x130308[_0x22fe19(0xa5)])),
                fse[_0x22fe19(0x9d)](path[_0x22fe19(0x92)](path[_0x22fe19(0x9e)](_0x2cfd50), _0x130308[_0x22fe19(0xa6)])),
                fse[_0x22fe19(0xa7)](_0x2cfd50, JSON[_0x22fe19(0xa8)](_0x130308, null, -0x1856 + -0xd6 + -0x1 * -0x192e))
            ]), _0x3cd5d7 = [];
        !_0x5a6a84 && _0x3cd5d7['push'](_0x22fe19(0xa9) + _0x130308[_0x22fe19(0xa4)] + _0x22fe19(0xaa));
        !_0x387ba1 && _0x3cd5d7[_0x22fe19(0xab)](_0x22fe19(0xac) + _0x130308[_0x22fe19(0xa5)] + _0x22fe19(0xaa));
        !_0x22a0e3 && _0x3cd5d7[_0x22fe19(0xab)](_0x22fe19(0xad) + _0x130308[_0x22fe19(0xa6)] + '\x27\x20does\x20not\x20exist');
        if (_0x35e558[_0x22fe19(0xae)](_0x3cd5d7['length'], 0x2089 + 0xfb5 + -0x303e))
            throw new Error(_0x2cfd50 + ':\x0a' + _0x3cd5d7[_0x22fe19(0x8f)]('\x0a'));
        return _0x2cfd50;
    }));
}
async function typescriptCopy({
    from: _0x595f19,
    to: _0x5cf4b3
}) {
    const _0x3885c3 = _0x1542d7, _0x1b450c = {
            'qtcZa': function (_0x35176f, _0x497746, _0x41653e) {
                return _0x35176f(_0x497746, _0x41653e);
            },
            'LgttE': _0x3885c3(0xaf)
        };
    if (!await fse['pathExists'](_0x5cf4b3))
        return console['warn'](_0x3885c3(0xb0) + _0x5cf4b3 + _0x3885c3(0xb1)), [];
    const _0x5b258f = await _0x1b450c['qtcZa'](glob, _0x1b450c['LgttE'], { 'cwd': _0x595f19 }), _0x5825a5 = _0x5b258f[_0x3885c3(0x9b)](_0x406285 => fse['copy'](path[_0x3885c3(0x92)](_0x595f19, _0x406285), path[_0x3885c3(0x92)](_0x5cf4b3, _0x406285)));
    return Promise['all'](_0x5825a5);
}
async function createPackageFile() {
    const _0xae502e = _0x1542d7, _0x38fb6e = {
            'oUwqO': './package.json',
            'rudmB': _0xae502e(0xb2),
            'uaiHo': _0xae502e(0xb3),
            'wqQBY': _0xae502e(0xb4),
            'IQjEu': _0xae502e(0xb5),
            'SIuIR': _0xae502e(0x97)
        }, _0x4c3865 = await fse[_0xae502e(0xb6)](path[_0xae502e(0x92)](packagePath, _0x38fb6e[_0xae502e(0xb7)]), _0x38fb6e[_0xae502e(0xb8)]), {
            nyc: _0x1260a0,
            scripts: _0x229f2c,
            devDependencies: _0x1655d4,
            workspaces: _0x28951e,
            ..._0x3643d1
        } = JSON['parse'](_0x4c3865), _0x46c0f3 = {
            ..._0x3643d1,
            'private': ![],
            ..._0x3643d1[_0xae502e(0xa6)] ? {
                'main': fse[_0xae502e(0xb9)](path['resolve'](buildPath, _0x38fb6e[_0xae502e(0xba)])) ? _0x38fb6e['uaiHo'] : _0x38fb6e[_0xae502e(0xbb)],
                'module': fse[_0xae502e(0xb9)](path[_0xae502e(0x92)](buildPath, _0x38fb6e['IQjEu'])) ? _0x38fb6e[_0xae502e(0xbc)] : _0x38fb6e['wqQBY']
            } : {},
            'types': _0x38fb6e[_0xae502e(0xbd)]
        }, _0x1a86be = path[_0xae502e(0x92)](buildPath, _0xae502e(0xbe));
    return await fse[_0xae502e(0xa7)](_0x1a86be, JSON[_0xae502e(0xa8)](_0x46c0f3, null, -0x110e + -0x9d0 + 0x1ae0), _0x38fb6e[_0xae502e(0xb8)]), console[_0xae502e(0xbf)]('Created\x20package.json\x20in\x20' + _0x1a86be), _0x46c0f3;
}
async function prepend(_0x2a2f16, _0x3e242c) {
    const _0x2c947f = _0x1542d7, _0x2b52fc = {
            'VfNcP': 'utf8',
            'CDYYt': function (_0x5a7c62, _0x48ff25) {
                return _0x5a7c62 + _0x48ff25;
            }
        }, _0x4e108e = await fse[_0x2c947f(0xb6)](_0x2a2f16, _0x2b52fc[_0x2c947f(0xc0)]);
    await fse[_0x2c947f(0xa7)](_0x2a2f16, _0x2b52fc[_0x2c947f(0xc1)](_0x3e242c, _0x4e108e), _0x2b52fc[_0x2c947f(0xc0)]);
}
async function addLicense(_0x271840) {
    const _0x252605 = _0x1542d7, _0xea0355 = {
            'bKnTm': function (_0xf1e1d6, _0x36c8ec, _0x1e9741) {
                return _0xf1e1d6(_0x36c8ec, _0x1e9741);
            },
            'pTAej': function (_0xc2c9f, _0x3840eb) {
                return _0xc2c9f === _0x3840eb;
            },
            'nWTUp': _0x252605(0xb4),
            'wkbkQ': _0x252605(0xc2)
        }, _0x1afb07 = _0x252605(0xc3) + _0x271840[_0x252605(0xc4)] + _0x252605(0xc5);
    await Promise[_0x252605(0x9a)]([
        _0xea0355[_0x252605(0xc6)],
        _0x252605(0xc7),
        _0x252605(0xc8),
        './node/index.js',
        _0xea0355['wkbkQ'],
        _0x252605(0xc9)
    ][_0x252605(0x9b)](async _0x1e8141 => {
        const _0x514622 = _0x252605;
        try {
            await _0xea0355[_0x514622(0xca)](prepend, path[_0x514622(0x92)](buildPath, _0x1e8141), _0x1afb07);
        } catch (_0x335aea) {
            if (_0xea0355[_0x514622(0xcb)](_0x335aea[_0x514622(0xcc)], 'ENOENT'))
                console[_0x514622(0xbf)]('Skipped\x20license\x20for\x20' + _0x1e8141);
            else
                throw _0x335aea;
        }
    }));
}
async function run() {
    const _0x3d84b2 = _0x1542d7, _0x33119b = {
            'oiVnq': function (_0x63b6da) {
                return _0x63b6da();
            },
            'olsaQ': '@material-ui/core',
            'qkKQH': _0x3d84b2(0xcd),
            'MVyYZ': function (_0x100404, _0x488fad) {
                return _0x100404(_0x488fad);
            }
        };
    try {
        const _0x4974fb = await _0x33119b['oiVnq'](createPackageFile);
        await Promise['all']([
            _0x4974fb[_0x3d84b2(0xce)] === _0x33119b[_0x3d84b2(0xcf)] ? _0x33119b['qkKQH'] : './README.md',
            _0x3d84b2(0xd0),
            '../../LICENSE'
        ][_0x3d84b2(0x9b)](_0x3ae255 => includeFileInBuild(_0x3ae255))), await _0x33119b[_0x3d84b2(0xd1)](addLicense, _0x4974fb), await _0x33119b[_0x3d84b2(0xd1)](typescriptCopy, {
            'from': srcPath,
            'to': buildPath
        }), await _0x33119b[_0x3d84b2(0xd1)](createModulePackages, {
            'from': srcPath,
            'to': buildPath
        });
    } catch (_0x1cdb72) {
        console[_0x3d84b2(0xd2)](_0x1cdb72), process['exit'](-0xd * 0x1b7 + 0x1 * -0x80d + -0x1e59 * -0x1);
    }
}
run();
