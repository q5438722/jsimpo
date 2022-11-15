'use strict';
const _0x2976 = [
    'hooks',
    'thisCompilation',
    'tap',
    'TPMOb',
    'CYogA',
    'iDTDw',
    'GnOIB',
    'outputOptions',
    'getEntryOptions',
    'chunkLoading',
    'zTWZF',
    'pkXgS',
    'split',
    'add',
    'moduleFactoriesAddOnly',
    'has',
    'hasOwnProperty',
    'qaHZi',
    'addRuntimeModule',
    'runtimeRequirementInTree',
    'for',
    'ensureChunkHandlers',
    'baseURI',
    'onChunksLoaded',
    'externalInstallChunk',
    'QWlWI',
    'exports',
    '93884vJnUYm',
    '2JojIjO',
    '1366wGbgkR',
    '85cfWmXw',
    '3YUnJMS',
    '52713WLoaWi',
    '6447wcHomu',
    '15vzIImh',
    '3821FTmfVL',
    '47YvvYiy',
    '16sVFhpw',
    '1967VQDINh',
    '16hIlcUK',
    '1433wcQQGY',
    '../RuntimeGlobals',
    './ModuleChunkLoadingRuntimeModule',
    'apply',
    'import',
    'ModuleChunkLoadingPlugin'
];
const _0x350ad3 = _0x1953;
(function (_0x28b27c, _0x1879cf) {
    const _0x17fcd9 = _0x1953;
    while (!![]) {
        try {
            const _0x2bff25 = parseInt(_0x17fcd9(0xf7)) * -parseInt(_0x17fcd9(0xf8)) + -parseInt(_0x17fcd9(0xf9)) * -parseInt(_0x17fcd9(0xfa)) + -parseInt(_0x17fcd9(0xfb)) * parseInt(_0x17fcd9(0xfc)) + parseInt(_0x17fcd9(0xfd)) * parseInt(_0x17fcd9(0xfe)) + parseInt(_0x17fcd9(0xff)) * parseInt(_0x17fcd9(0x100)) + parseInt(_0x17fcd9(0x101)) * parseInt(_0x17fcd9(0x102)) + parseInt(_0x17fcd9(0x103)) * parseInt(_0x17fcd9(0x104));
            if (_0x2bff25 === _0x1879cf)
                break;
            else
                _0x28b27c['push'](_0x28b27c['shift']());
        } catch (_0x140663) {
            _0x28b27c['push'](_0x28b27c['shift']());
        }
    }
}(_0x2976, 0x4 * -0xa823 + -0xa9d * -0x16 + 0x107 * 0x32b));
const RuntimeGlobals = require(_0x350ad3(0x105)), ExportWebpackRequireRuntimeModule = require('./ExportWebpackRequireRuntimeModule'), ModuleChunkLoadingRuntimeModule = require(_0x350ad3(0x106));
class ModuleChunkLoadingPlugin {
    [_0x350ad3(0x107)](_0x4de03e) {
        const _0x49d1cd = _0x350ad3, _0x267c9c = {
                'QWlWI': function (_0x512e2f, _0x5abd43) {
                    return _0x512e2f(_0x5abd43);
                },
                'CYogA': _0x49d1cd(0x108),
                'iDTDw': '1|3|4|0|2|5',
                'GnOIB': function (_0x4b3b24, _0x518598) {
                    return _0x4b3b24(_0x518598);
                },
                'TPMOb': _0x49d1cd(0x109)
            };
        _0x4de03e[_0x49d1cd(0x10a)][_0x49d1cd(0x10b)][_0x49d1cd(0x10c)](_0x267c9c[_0x49d1cd(0x10d)], _0x4188e3 => {
            const _0x1065f2 = _0x49d1cd, _0x52c43d = {
                    'zTWZF': _0x267c9c[_0x1065f2(0x10e)],
                    'pkXgS': _0x267c9c[_0x1065f2(0x10f)],
                    'qaHZi': function (_0x182ee1, _0x421808) {
                        const _0x4b69a5 = _0x1065f2;
                        return _0x267c9c[_0x4b69a5(0x110)](_0x182ee1, _0x421808);
                    }
                }, _0x4318e0 = _0x4188e3[_0x1065f2(0x111)]['chunkLoading'], _0xb09364 = _0x33ead3 => {
                    const _0x4f76f3 = _0x1065f2, _0x51c3ab = _0x33ead3[_0x4f76f3(0x112)](), _0x1d29d4 = _0x51c3ab && _0x51c3ab[_0x4f76f3(0x113)] || _0x4318e0;
                    return _0x1d29d4 === _0x52c43d[_0x4f76f3(0x114)];
                }, _0x1f857c = new WeakSet(), _0x11a177 = (_0x51819f, _0x23f827) => {
                    const _0x1b4437 = _0x1065f2, _0x506c1b = _0x52c43d[_0x1b4437(0x115)][_0x1b4437(0x116)]('|');
                    let _0xdb8f90 = 0x1eb1 + 0x68a + -0x1b * 0x161;
                    while (!![]) {
                        switch (_0x506c1b[_0xdb8f90++]) {
                        case '0':
                            _0x23f827[_0x1b4437(0x117)](RuntimeGlobals[_0x1b4437(0x118)]);
                            continue;
                        case '1':
                            if (_0x1f857c[_0x1b4437(0x119)](_0x51819f))
                                return;
                            continue;
                        case '2':
                            _0x23f827[_0x1b4437(0x117)](RuntimeGlobals[_0x1b4437(0x11a)]);
                            continue;
                        case '3':
                            _0x1f857c[_0x1b4437(0x117)](_0x51819f);
                            continue;
                        case '4':
                            if (!_0x52c43d[_0x1b4437(0x11b)](_0xb09364, _0x51819f))
                                return;
                            continue;
                        case '5':
                            _0x4188e3[_0x1b4437(0x11c)](_0x51819f, new ModuleChunkLoadingRuntimeModule(_0x23f827));
                            continue;
                        }
                        break;
                    }
                };
            _0x4188e3[_0x1065f2(0x10a)][_0x1065f2(0x11d)][_0x1065f2(0x11e)](RuntimeGlobals[_0x1065f2(0x11f)])[_0x1065f2(0x10c)](_0x267c9c[_0x1065f2(0x10d)], _0x11a177), _0x4188e3['hooks'][_0x1065f2(0x11d)][_0x1065f2(0x11e)](RuntimeGlobals[_0x1065f2(0x120)])[_0x1065f2(0x10c)](_0x267c9c[_0x1065f2(0x10d)], _0x11a177), _0x4188e3[_0x1065f2(0x10a)][_0x1065f2(0x11d)][_0x1065f2(0x11e)](RuntimeGlobals['externalInstallChunk'])[_0x1065f2(0x10c)](_0x267c9c[_0x1065f2(0x10d)], _0x11a177), _0x4188e3['hooks'][_0x1065f2(0x11d)][_0x1065f2(0x11e)](RuntimeGlobals[_0x1065f2(0x121)])[_0x1065f2(0x10c)](_0x267c9c['TPMOb'], _0x11a177), _0x4188e3[_0x1065f2(0x10a)][_0x1065f2(0x11d)][_0x1065f2(0x11e)](RuntimeGlobals[_0x1065f2(0x122)])[_0x1065f2(0x10c)](_0x267c9c[_0x1065f2(0x10d)], (_0x1e6854, _0x4f8214) => {
                const _0x347f73 = _0x1065f2;
                if (!_0x267c9c[_0x347f73(0x123)](_0xb09364, _0x1e6854))
                    return;
                _0x4188e3[_0x347f73(0x11c)](_0x1e6854, new ExportWebpackRequireRuntimeModule());
            }), _0x4188e3[_0x1065f2(0x10a)]['runtimeRequirementInTree'][_0x1065f2(0x11e)](RuntimeGlobals[_0x1065f2(0x11f)])[_0x1065f2(0x10c)](_0x267c9c[_0x1065f2(0x10d)], (_0x5cfe2d, _0x5354bc) => {
                const _0x117884 = _0x1065f2;
                if (!_0x267c9c['QWlWI'](_0xb09364, _0x5cfe2d))
                    return;
                _0x5354bc[_0x117884(0x117)](RuntimeGlobals['getChunkScriptFilename']);
            });
        });
    }
}
function _0x1953(_0xfa7845, _0x5b09f0) {
    return _0x1953 = function (_0x4a5c5b, _0x250f67) {
        _0x4a5c5b = _0x4a5c5b - (0x213b + 0xac1 + 0x1 * -0x2b05);
        let _0x1d39e4 = _0x2976[_0x4a5c5b];
        return _0x1d39e4;
    }, _0x1953(_0xfa7845, _0x5b09f0);
}
module[_0x350ad3(0x124)] = ModuleChunkLoadingPlugin;
