'use strict';
const RuntimeGlobals = require('../RuntimeGlobals'), ExportWebpackRequireRuntimeModule = require('./ExportWebpackRequireRuntimeModule'), ModuleChunkLoadingRuntimeModule = require('./ModuleChunkLoadingRuntimeModule');
class ModuleChunkLoadingPlugin {
    ['apply'](_0x169a2f) {
        _0x169a2f['hooks']['thisCompilation']['tap']('ModuleChunkLoadingPlugin', _0x2feb65 => {
            const _0x50eab2 = _0x2feb65['outputOptions']['chunkLoading'], _0x312598 = _0x832ef6 => {
                    const _0x1829ad = _0x832ef6['getEntryOptions'](), _0x1a9d64 = _0x1829ad && _0x1829ad['chunkLoading'] || _0x50eab2;
                    return _0x1a9d64 === 'import';
                }, _0x1edfea = new WeakSet(), _0x479805 = (_0x2fd11f, _0x4fe0e0) => {
                    if (_0x1edfea['has'](_0x2fd11f))
                        return;
                    _0x1edfea['add'](_0x2fd11f);
                    if (!_0x312598(_0x2fd11f))
                        return;
                    _0x4fe0e0['add'](RuntimeGlobals['moduleFactoriesAddOnly']), _0x4fe0e0['add'](RuntimeGlobals['hasOwnProperty']), _0x2feb65['addRuntimeModule'](_0x2fd11f, new ModuleChunkLoadingRuntimeModule(_0x4fe0e0));
                };
            _0x2feb65['hooks']['runtimeRequirementInTree']['for'](RuntimeGlobals['ensureChunkHandlers'])['tap']('ModuleChunkLoadingPlugin', _0x479805), _0x2feb65['hooks']['runtimeRequirementInTree']['for'](RuntimeGlobals['baseURI'])['tap']('ModuleChunkLoadingPlugin', _0x479805), _0x2feb65['hooks']['runtimeRequirementInTree']['for'](RuntimeGlobals['externalInstallChunk'])['tap']('ModuleChunkLoadingPlugin', _0x479805), _0x2feb65['hooks']['runtimeRequirementInTree']['for'](RuntimeGlobals['onChunksLoaded'])['tap']('ModuleChunkLoadingPlugin', _0x479805), _0x2feb65['hooks']['runtimeRequirementInTree']['for'](RuntimeGlobals['externalInstallChunk'])['tap']('ModuleChunkLoadingPlugin', (_0x5db691, _0x4cb639) => {
                if (!_0x312598(_0x5db691))
                    return;
                _0x2feb65['addRuntimeModule'](_0x5db691, new ExportWebpackRequireRuntimeModule());
            }), _0x2feb65['hooks']['runtimeRequirementInTree']['for'](RuntimeGlobals['ensureChunkHandlers'])['tap']('ModuleChunkLoadingPlugin', (_0x1a3bef, _0x217c5c) => {
                if (!_0x312598(_0x1a3bef))
                    return;
                _0x217c5c['add'](RuntimeGlobals['getChunkScriptFilename']);
            });
        });
    }
}
module['exports'] = ModuleChunkLoadingPlugin;
