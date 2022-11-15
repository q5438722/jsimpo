'use strict';
const RuntimeGlobals = require('../RuntimeGlobals');
const ExportWebpackRequireRuntimeModule = require('./ExportWebpackRequireRuntimeModule');
const ModuleChunkLoadingRuntimeModule = require('./ModuleChunkLoadingRuntimeModule');
class ModuleChunkLoadingPlugin {
    ['apply'](_0x469191) {
        _0x469191['hooks']['thisCompilation']['tap']('ModuleChunkLoadingPlugin', _0x45857d => {
            const _0x2ecd61 = _0x45857d['outputOptions']['chunkLoading'];
            const _0x404a81 = _0x3e5bb7 => {
                const _0x11eb4e = _0x3e5bb7['getEntryOptions']();
                const _0x192a35 = _0x11eb4e && _0x11eb4e['chunkLoading'] || _0x2ecd61;
                return _0x192a35 === 'import';
            };
            const _0xe95c72 = new WeakSet();
            const _0x2f0f94 = (_0x522eb8, _0x403079) => {
                var _0x452053 = '1|4|3|5|2|0'['split']('|'), _0x1a90be = 0;
                while (!![]) {
                    switch (_0x452053[_0x1a90be++]) {
                    case '0':
                        _0x45857d['addRuntimeModule'](_0x522eb8, new ModuleChunkLoadingRuntimeModule(_0x403079));
                        continue;
                    case '1':
                        if (_0xe95c72['has'](_0x522eb8))
                            return;
                        continue;
                    case '2':
                        _0x403079['add'](RuntimeGlobals['hasOwnProperty']);
                        continue;
                    case '3':
                        if (!_0x404a81(_0x522eb8))
                            return;
                        continue;
                    case '4':
                        _0xe95c72['add'](_0x522eb8);
                        continue;
                    case '5':
                        _0x403079['add'](RuntimeGlobals['moduleFactoriesAddOnly']);
                        continue;
                    }
                    break;
                }
            };
            _0x45857d['hooks']['runtimeRequirementInTree']['for'](RuntimeGlobals['ensureChunkHandlers'])['tap']('ModuleChunkLoadingPlugin', _0x2f0f94);
            _0x45857d['hooks']['runtimeRequirementInTree']['for'](RuntimeGlobals['baseURI'])['tap']('ModuleChunkLoadingPlugin', _0x2f0f94);
            _0x45857d['hooks']['runtimeRequirementInTree']['for'](RuntimeGlobals['externalInstallChunk'])['tap']('ModuleChunkLoadingPlugin', _0x2f0f94);
            _0x45857d['hooks']['runtimeRequirementInTree']['for'](RuntimeGlobals['onChunksLoaded'])['tap']('ModuleChunkLoadingPlugin', _0x2f0f94);
            _0x45857d['hooks']['runtimeRequirementInTree']['for'](RuntimeGlobals['externalInstallChunk'])['tap']('ModuleChunkLoadingPlugin', (_0x1ce409, _0x388cac) => {
                if (!_0x404a81(_0x1ce409))
                    return;
                _0x45857d['addRuntimeModule'](_0x1ce409, new ExportWebpackRequireRuntimeModule());
            });
            _0x45857d['hooks']['runtimeRequirementInTree']['for'](RuntimeGlobals['ensureChunkHandlers'])['tap']('ModuleChunkLoadingPlugin', (_0x53fb23, _0x1d33fc) => {
                if (!_0x404a81(_0x53fb23))
                    return;
                _0x1d33fc['add'](RuntimeGlobals['getChunkScriptFilename']);
            });
        });
    }
}
module['exports'] = ModuleChunkLoadingPlugin;