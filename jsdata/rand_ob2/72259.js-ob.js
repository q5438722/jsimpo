'use strict';
const _0x297d = [
    '85650KTfQDZ',
    '78EHxPxO',
    '1958QanNir',
    '294641JVxohx',
    '1jtBqmv',
    '80693lRoRJJ',
    '53UsFZJe',
    '3926dFFSWl',
    '../RuntimeGlobals',
    './ModuleChunkLoadingRuntimeModule',
    'apply',
    'hooks',
    'thisCompilation',
    'ModuleChunkLoadingPlugin',
    'outputOptions',
    'getEntryOptions',
    'chunkLoading',
    'import',
    'add',
    'moduleFactoriesAddOnly',
    'hasOwnProperty',
    'addRuntimeModule',
    'runtimeRequirementInTree',
    'ensureChunkHandlers',
    'tap',
    'for',
    'baseURI',
    'externalInstallChunk',
    '165199fvMjYp',
    '204446yMFLwj'
];
const _0x4b3e7b = _0x2926;
function _0x2926(_0xaf8ca9, _0x535eb3) {
    return _0x2926 = function (_0x297db9, _0x29262f) {
        _0x297db9 = _0x297db9 - 0x67;
        let _0x3f75a3 = _0x297d[_0x297db9];
        return _0x3f75a3;
    }, _0x2926(_0xaf8ca9, _0x535eb3);
}
(function (_0x1bbd3b, _0x1ab2cf) {
    const _0x506bec = _0x2926;
    while (!![]) {
        try {
            const _0x113d49 = parseInt(_0x506bec(0x67)) + -parseInt(_0x506bec(0x68)) + -parseInt(_0x506bec(0x69)) + parseInt(_0x506bec(0x6a)) * parseInt(_0x506bec(0x6b)) + -parseInt(_0x506bec(0x6c)) * -parseInt(_0x506bec(0x6d)) + parseInt(_0x506bec(0x6e)) + -parseInt(_0x506bec(0x6f)) * parseInt(_0x506bec(0x70));
            if (_0x113d49 === _0x1ab2cf)
                break;
            else
                _0x1bbd3b['push'](_0x1bbd3b['shift']());
        } catch (_0x4a3e9a) {
            _0x1bbd3b['push'](_0x1bbd3b['shift']());
        }
    }
}(_0x297d, 0x2fa0b));
const RuntimeGlobals = require(_0x4b3e7b(0x71)), ExportWebpackRequireRuntimeModule = require('./ExportWebpackRequireRuntimeModule'), ModuleChunkLoadingRuntimeModule = require(_0x4b3e7b(0x72));
class ModuleChunkLoadingPlugin {
    [_0x4b3e7b(0x73)](_0x30dcdd) {
        const _0x53aae3 = _0x4b3e7b;
        _0x30dcdd[_0x53aae3(0x74)][_0x53aae3(0x75)]['tap'](_0x53aae3(0x76), _0x2e38c1 => {
            const _0x1cf302 = _0x53aae3, _0xc93d88 = _0x2e38c1[_0x1cf302(0x77)]['chunkLoading'], _0x38a47f = _0x5195ea => {
                    const _0x2f26c2 = _0x1cf302, _0x4a7c57 = _0x5195ea[_0x2f26c2(0x78)](), _0x20f6e8 = _0x4a7c57 && _0x4a7c57[_0x2f26c2(0x79)] || _0xc93d88;
                    return _0x20f6e8 === _0x2f26c2(0x7a);
                }, _0x5226c8 = new WeakSet(), _0x5cd9a0 = (_0x26bea4, _0x117500) => {
                    const _0x750b76 = _0x1cf302;
                    if (_0x5226c8['has'](_0x26bea4))
                        return;
                    _0x5226c8[_0x750b76(0x7b)](_0x26bea4);
                    if (!_0x38a47f(_0x26bea4))
                        return;
                    _0x117500['add'](RuntimeGlobals[_0x750b76(0x7c)]), _0x117500[_0x750b76(0x7b)](RuntimeGlobals[_0x750b76(0x7d)]), _0x2e38c1[_0x750b76(0x7e)](_0x26bea4, new ModuleChunkLoadingRuntimeModule(_0x117500));
                };
            _0x2e38c1['hooks'][_0x1cf302(0x7f)]['for'](RuntimeGlobals[_0x1cf302(0x80)])[_0x1cf302(0x81)](_0x1cf302(0x76), _0x5cd9a0), _0x2e38c1[_0x1cf302(0x74)][_0x1cf302(0x7f)][_0x1cf302(0x82)](RuntimeGlobals[_0x1cf302(0x83)])[_0x1cf302(0x81)](_0x1cf302(0x76), _0x5cd9a0), _0x2e38c1[_0x1cf302(0x74)][_0x1cf302(0x7f)]['for'](RuntimeGlobals[_0x1cf302(0x84)])[_0x1cf302(0x81)]('ModuleChunkLoadingPlugin', _0x5cd9a0), _0x2e38c1[_0x1cf302(0x74)][_0x1cf302(0x7f)][_0x1cf302(0x82)](RuntimeGlobals['onChunksLoaded'])['tap'](_0x1cf302(0x76), _0x5cd9a0), _0x2e38c1[_0x1cf302(0x74)][_0x1cf302(0x7f)][_0x1cf302(0x82)](RuntimeGlobals['externalInstallChunk'])[_0x1cf302(0x81)](_0x1cf302(0x76), (_0x17e990, _0x42f1eb) => {
                const _0xec71a8 = _0x1cf302;
                if (!_0x38a47f(_0x17e990))
                    return;
                _0x2e38c1[_0xec71a8(0x7e)](_0x17e990, new ExportWebpackRequireRuntimeModule());
            }), _0x2e38c1[_0x1cf302(0x74)][_0x1cf302(0x7f)][_0x1cf302(0x82)](RuntimeGlobals['ensureChunkHandlers'])[_0x1cf302(0x81)](_0x1cf302(0x76), (_0x1020c1, _0x2a9c2e) => {
                const _0x155f04 = _0x1cf302;
                if (!_0x38a47f(_0x1020c1))
                    return;
                _0x2a9c2e[_0x155f04(0x7b)](RuntimeGlobals['getChunkScriptFilename']);
            });
        });
    }
}
module['exports'] = ModuleChunkLoadingPlugin;
