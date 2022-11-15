const _0x1b75 = [
    '*/index.{js,ts,tsx}',
    'map',
    'dirname',
    'all',
    '../esm',
    'posix',
    'index.js',
    './index.js',
    '../node',
    './index.d.ts',
    'pathExists',
    'types',
    'module',
    'writeFile',
    'stringify',
    'push',
    '\x27types\x27\x20entry\x20\x27',
    '\x27\x20does\x20not\x20exist',
    '\x27module\x27\x20entry\x20\x27',
    'main',
    'length',
    'warn',
    'path\x20',
    'readFile',
    './package.json',
    'utf8',
    'parse',
    'existsSync',
    './node/index.js',
    './esm/index.js',
    'Created\x20package.json\x20in\x20',
    '/**\x20@license\x20Material-UI\x20v',
    '\x0a\x20*\x0a\x20*\x20This\x20source\x20code\x20is\x20licensed\x20under\x20the\x20MIT\x20license\x20found\x20in\x20the\x0a\x20*\x20LICENSE\x20file\x20in\x20the\x20root\x20directory\x20of\x20this\x20source\x20tree.\x0a\x20*/\x0a',
    './modern/index.js',
    './umd/material-ui.development.js',
    './umd/material-ui.production.min.js',
    'ENOENT',
    'Skipped\x20license\x20for\x20',
    'name',
    '../../README.md',
    './README.md',
    '../../CHANGELOG.md',
    '../../LICENSE',
    'error',
    'exit',
    '242399pPBFoZ',
    '1lfutEK',
    '1050309BYDIJJ',
    '2Itgtsv',
    '45347NuAzBa',
    '152194dQCEkr',
    '5jAsseM',
    '1136992pYQKfd',
    '912025voERYL',
    '6DsiIAL',
    '209753xJvKgr',
    'path',
    'cwd',
    'join',
    './build',
    './src',
    'resolve',
    'copy',
    'log',
    'Copied\x20',
    '\x20to\x20',
    'sync'
];
const _0x3c7fbf = _0x4c37;
function _0x4c37(_0x422e7e, _0x5668f8) {
    return _0x4c37 = function (_0x1b75aa, _0x4c3779) {
        _0x1b75aa = _0x1b75aa - 0x106;
        let _0x3d2288 = _0x1b75[_0x1b75aa];
        return _0x3d2288;
    }, _0x4c37(_0x422e7e, _0x5668f8);
}
(function (_0x5a3015, _0x24a960) {
    const _0x3884c9 = _0x4c37;
    while (!![]) {
        try {
            const _0x4c7fac = parseInt(_0x3884c9(0x106)) * -parseInt(_0x3884c9(0x107)) + parseInt(_0x3884c9(0x108)) + -parseInt(_0x3884c9(0x109)) * -parseInt(_0x3884c9(0x10a)) + -parseInt(_0x3884c9(0x10b)) * -parseInt(_0x3884c9(0x10c)) + parseInt(_0x3884c9(0x10d)) + -parseInt(_0x3884c9(0x10e)) + parseInt(_0x3884c9(0x10f)) * -parseInt(_0x3884c9(0x110));
            if (_0x4c7fac === _0x24a960)
                break;
            else
                _0x5a3015['push'](_0x5a3015['shift']());
        } catch (_0x28af14) {
            _0x5a3015['push'](_0x5a3015['shift']());
        }
    }
}(_0x1b75, 0x98d67));
const path = require(_0x3c7fbf(0x111)), fse = require('fs-extra'), glob = require('fast-glob'), packagePath = process[_0x3c7fbf(0x112)](), buildPath = path[_0x3c7fbf(0x113)](packagePath, _0x3c7fbf(0x114)), srcPath = path[_0x3c7fbf(0x113)](packagePath, _0x3c7fbf(0x115));
async function includeFileInBuild(_0x56bc67) {
    const _0x631b0f = _0x3c7fbf, _0x1c59bc = path[_0x631b0f(0x116)](packagePath, _0x56bc67), _0x3c66dd = path[_0x631b0f(0x116)](buildPath, path['basename'](_0x56bc67));
    await fse[_0x631b0f(0x117)](_0x1c59bc, _0x3c66dd), console[_0x631b0f(0x118)](_0x631b0f(0x119) + _0x1c59bc + _0x631b0f(0x11a) + _0x3c66dd);
}
async function createModulePackages({
    from: _0x5e7ff9,
    to: _0x9bf08f
}) {
    const _0x540c7f = _0x3c7fbf, _0x253d28 = glob[_0x540c7f(0x11b)](_0x540c7f(0x11c), { 'cwd': _0x5e7ff9 })[_0x540c7f(0x11d)](path[_0x540c7f(0x11e)]);
    await Promise[_0x540c7f(0x11f)](_0x253d28[_0x540c7f(0x11d)](async _0x3faf86 => {
        const _0x1e4399 = _0x540c7f, _0x50c64b = path[_0x1e4399(0x113)](_0x9bf08f, _0x3faf86, 'package.json'), _0xfeb7bf = await fse['pathExists'](path['resolve'](path[_0x1e4399(0x11e)](_0x50c64b), _0x1e4399(0x120))), _0x155296 = {
                'sideEffects': ![],
                'module': _0xfeb7bf ? path[_0x1e4399(0x121)][_0x1e4399(0x113)](_0x1e4399(0x120), _0x3faf86, _0x1e4399(0x122)) : _0x1e4399(0x123),
                'main': _0xfeb7bf ? './index.js' : path['posix']['join'](_0x1e4399(0x124), _0x3faf86, _0x1e4399(0x122)),
                'types': _0x1e4399(0x125)
            }, [_0x1a622a, _0x3334a6, _0x148c2a] = await Promise[_0x1e4399(0x11f)]([
                fse[_0x1e4399(0x126)](path[_0x1e4399(0x116)](path[_0x1e4399(0x11e)](_0x50c64b), _0x155296[_0x1e4399(0x127)])),
                fse[_0x1e4399(0x126)](path[_0x1e4399(0x116)](path[_0x1e4399(0x11e)](_0x50c64b), _0x155296[_0x1e4399(0x128)])),
                fse['pathExists'](path[_0x1e4399(0x116)](path[_0x1e4399(0x11e)](_0x50c64b), _0x155296['main'])),
                fse[_0x1e4399(0x129)](_0x50c64b, JSON[_0x1e4399(0x12a)](_0x155296, null, 0x2))
            ]), _0x53720e = [];
        !_0x1a622a && _0x53720e[_0x1e4399(0x12b)](_0x1e4399(0x12c) + _0x155296[_0x1e4399(0x127)] + _0x1e4399(0x12d));
        !_0x3334a6 && _0x53720e[_0x1e4399(0x12b)](_0x1e4399(0x12e) + _0x155296['module'] + '\x27\x20does\x20not\x20exist');
        !_0x148c2a && _0x53720e[_0x1e4399(0x12b)]('\x27main\x27\x20entry\x20\x27' + _0x155296[_0x1e4399(0x12f)] + _0x1e4399(0x12d));
        if (_0x53720e[_0x1e4399(0x130)] > 0x0)
            throw new Error(_0x50c64b + ':\x0a' + _0x53720e[_0x1e4399(0x113)]('\x0a'));
        return _0x50c64b;
    }));
}
async function typescriptCopy({
    from: _0x565ef1,
    to: _0xebd659
}) {
    const _0x4ea20a = _0x3c7fbf;
    if (!await fse['pathExists'](_0xebd659))
        return console[_0x4ea20a(0x131)](_0x4ea20a(0x132) + _0xebd659 + '\x20does\x20not\x20exists'), [];
    const _0x16c38b = await glob('**/*.d.ts', { 'cwd': _0x565ef1 }), _0xe7674c = _0x16c38b[_0x4ea20a(0x11d)](_0x436f2a => fse[_0x4ea20a(0x117)](path[_0x4ea20a(0x116)](_0x565ef1, _0x436f2a), path[_0x4ea20a(0x116)](_0xebd659, _0x436f2a)));
    return Promise[_0x4ea20a(0x11f)](_0xe7674c);
}
async function createPackageFile() {
    const _0x460a29 = _0x3c7fbf, _0x1e9d6d = await fse[_0x460a29(0x133)](path[_0x460a29(0x116)](packagePath, _0x460a29(0x134)), _0x460a29(0x135)), {
            nyc: _0x4b2e8b,
            scripts: _0x184a4a,
            devDependencies: _0x7c5ecc,
            workspaces: _0x3143d9,
            ..._0x2b3f27
        } = JSON[_0x460a29(0x136)](_0x1e9d6d), _0x3bcd1e = {
            ..._0x2b3f27,
            'private': ![],
            ..._0x2b3f27['main'] ? {
                'main': fse[_0x460a29(0x137)](path['resolve'](buildPath, _0x460a29(0x138))) ? _0x460a29(0x138) : './index.js',
                'module': fse['existsSync'](path[_0x460a29(0x116)](buildPath, _0x460a29(0x139))) ? _0x460a29(0x139) : _0x460a29(0x123)
            } : {},
            'types': _0x460a29(0x125)
        }, _0x326415 = path[_0x460a29(0x116)](buildPath, _0x460a29(0x134));
    return await fse['writeFile'](_0x326415, JSON[_0x460a29(0x12a)](_0x3bcd1e, null, 0x2), _0x460a29(0x135)), console[_0x460a29(0x118)](_0x460a29(0x13a) + _0x326415), _0x3bcd1e;
}
async function prepend(_0x11f08b, _0x1c598f) {
    const _0x240e9f = _0x3c7fbf, _0x293248 = await fse[_0x240e9f(0x133)](_0x11f08b, _0x240e9f(0x135));
    await fse[_0x240e9f(0x129)](_0x11f08b, _0x1c598f + _0x293248, _0x240e9f(0x135));
}
async function addLicense(_0x4dd2d3) {
    const _0x47e83e = _0x3c7fbf, _0x4471a4 = _0x47e83e(0x13b) + _0x4dd2d3['version'] + _0x47e83e(0x13c);
    await Promise[_0x47e83e(0x11f)]([
        _0x47e83e(0x123),
        './legacy/index.js',
        _0x47e83e(0x13d),
        _0x47e83e(0x138),
        _0x47e83e(0x13e),
        _0x47e83e(0x13f)
    ][_0x47e83e(0x11d)](async _0x1fbef7 => {
        const _0x30e424 = _0x47e83e;
        try {
            await prepend(path[_0x30e424(0x116)](buildPath, _0x1fbef7), _0x4471a4);
        } catch (_0x44092d) {
            if (_0x44092d['code'] === _0x30e424(0x140))
                console[_0x30e424(0x118)](_0x30e424(0x141) + _0x1fbef7);
            else
                throw _0x44092d;
        }
    }));
}
async function run() {
    const _0x30edc1 = _0x3c7fbf;
    try {
        const _0x5038d9 = await createPackageFile();
        await Promise[_0x30edc1(0x11f)]([
            _0x5038d9[_0x30edc1(0x142)] === '@material-ui/core' ? _0x30edc1(0x143) : _0x30edc1(0x144),
            _0x30edc1(0x145),
            _0x30edc1(0x146)
        ]['map'](_0x3678c2 => includeFileInBuild(_0x3678c2))), await addLicense(_0x5038d9), await typescriptCopy({
            'from': srcPath,
            'to': buildPath
        }), await createModulePackages({
            'from': srcPath,
            'to': buildPath
        });
    } catch (_0x18fbed) {
        console[_0x30edc1(0x147)](_0x18fbed), process[_0x30edc1(0x148)](0x1);
    }
}
run();
