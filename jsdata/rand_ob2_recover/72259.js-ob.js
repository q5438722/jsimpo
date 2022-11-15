const RuntimeGlobals = require(_0x4b3e7b(113)), ExportWebpackRequireRuntimeModule = require('./ExportWebpackRequireRuntimeModule'), ModuleChunkLoadingRuntimeModule = require(_0x4b3e7b(114));
class ModuleChunkLoadingPlugin {
    [_0x4b3e7b(115)](_0x30dcdd) {
        const _0x53aae3 = _0x4b3e7b;
        _0x30dcdd[_0x53aae3(116)][_0x53aae3(117)]['tap'](_0x53aae3(118), _0x2e38c1 => {
            const _0x1cf302 = _0x53aae3, _0xc93d88 = _0x2e38c1[_0x1cf302(119)]['chunkLoading'], _0x38a47f = _0x5195ea => {
                    const _0x2f26c2 = _0x1cf302, _0x4a7c57 = _0x5195ea[_0x2f26c2(120)](), _0x20f6e8 = _0x4a7c57 && _0x4a7c57[_0x2f26c2(121)] || _0xc93d88;
                    return _0x20f6e8 === _0x2f26c2(122);
                }, _0x5226c8 = new WeakSet(), _0x5cd9a0 = (_0x26bea4, _0x117500) => {
                    const _0x750b76 = _0x1cf302;
                    if (_0x5226c8['has'](_0x26bea4))
                        return;
                    _0x5226c8[_0x750b76(123)](_0x26bea4);
                    if (!_0x38a47f(_0x26bea4))
                        return;
                    _0x117500['add'](RuntimeGlobals[_0x750b76(124)]), _0x117500[_0x750b76(123)](RuntimeGlobals[_0x750b76(125)]), _0x2e38c1[_0x750b76(126)](_0x26bea4, new ModuleChunkLoadingRuntimeModule(_0x117500));
                };
            _0x2e38c1['hooks'][_0x1cf302(127)]['for'](RuntimeGlobals[_0x1cf302(128)])[_0x1cf302(129)](_0x1cf302(118), _0x5cd9a0), _0x2e38c1[_0x1cf302(116)][_0x1cf302(127)][_0x1cf302(130)](RuntimeGlobals[_0x1cf302(131)])[_0x1cf302(129)](_0x1cf302(118), _0x5cd9a0), _0x2e38c1[_0x1cf302(116)][_0x1cf302(127)]['for'](RuntimeGlobals[_0x1cf302(132)])[_0x1cf302(129)]('ModuleChunkLoadingPlugin', _0x5cd9a0), _0x2e38c1[_0x1cf302(116)][_0x1cf302(127)][_0x1cf302(130)](RuntimeGlobals['onChunksLoaded'])['tap'](_0x1cf302(118), _0x5cd9a0), _0x2e38c1[_0x1cf302(116)][_0x1cf302(127)][_0x1cf302(130)](RuntimeGlobals['externalInstallChunk'])[_0x1cf302(129)](_0x1cf302(118), (_0x17e990, _0x42f1eb) => {
                const _0xec71a8 = _0x1cf302;
                if (!_0x38a47f(_0x17e990))
                    return;
                _0x2e38c1[_0xec71a8(126)](_0x17e990, new ExportWebpackRequireRuntimeModule());
            }), _0x2e38c1[_0x1cf302(116)][_0x1cf302(127)][_0x1cf302(130)](RuntimeGlobals['ensureChunkHandlers'])[_0x1cf302(129)](_0x1cf302(118), (_0x1020c1, _0x2a9c2e) => {
                const _0x155f04 = _0x1cf302;
                if (!_0x38a47f(_0x1020c1))
                    return;
                _0x2a9c2e[_0x155f04(123)](RuntimeGlobals['getChunkScriptFilename']);
            });
        });
    }
}
module['exports'] = ModuleChunkLoadingPlugin;