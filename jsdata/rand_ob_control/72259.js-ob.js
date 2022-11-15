'use strict';
const RuntimeGlobals = require('../RuntimeGlobals'), ExportWebpackRequireRuntimeModule = require('./ExportWebpackRequireRuntimeModule'), ModuleChunkLoadingRuntimeModule = require('./ModuleChunkLoadingRuntimeModule');
class ModuleChunkLoadingPlugin {
    ['apply'](_0x1590b3) {
        const _0x3f9d59 = {
            'eBGag': function (_0x473bf6, _0xaa9ae1) {
                return _0x473bf6 === _0xaa9ae1;
            },
            'THlsp': 'import',
            'vqtFV': '3|1|4|2|5|0',
            'HLlGE': function (_0x446a25, _0x4e1475) {
                return _0x446a25(_0x4e1475);
            },
            'dyoKY': function (_0x177c5c, _0x328ff1) {
                return _0x177c5c(_0x328ff1);
            },
            'GOAep': 'ModuleChunkLoadingPlugin'
        };
        _0x1590b3['hooks']['thisCompilation']['tap'](_0x3f9d59['GOAep'], _0x176225 => {
            const _0x2947d9 = {
                    'oegUc': function (_0x3102fa, _0x515feb) {
                        return _0x3f9d59['dyoKY'](_0x3102fa, _0x515feb);
                    }
                }, _0x4b27b3 = _0x176225['outputOptions']['chunkLoading'], _0x31faa4 = _0x22ec83 => {
                    const _0x15b7b1 = _0x22ec83['getEntryOptions'](), _0x3690c9 = _0x15b7b1 && _0x15b7b1['chunkLoading'] || _0x4b27b3;
                    return _0x3f9d59['eBGag'](_0x3690c9, _0x3f9d59['THlsp']);
                }, _0x175b70 = new WeakSet(), _0x323a1b = (_0x457e1b, _0x30ed83) => {
                    const _0xe8509a = _0x3f9d59['vqtFV']['split']('|');
                    let _0x4b5e7a = 0x0;
                    while (!![]) {
                        switch (_0xe8509a[_0x4b5e7a++]) {
                        case '0':
                            _0x176225['addRuntimeModule'](_0x457e1b, new ModuleChunkLoadingRuntimeModule(_0x30ed83));
                            continue;
                        case '1':
                            _0x175b70['add'](_0x457e1b);
                            continue;
                        case '2':
                            _0x30ed83['add'](RuntimeGlobals['moduleFactoriesAddOnly']);
                            continue;
                        case '3':
                            if (_0x175b70['has'](_0x457e1b))
                                return;
                            continue;
                        case '4':
                            if (!_0x3f9d59['HLlGE'](_0x31faa4, _0x457e1b))
                                return;
                            continue;
                        case '5':
                            _0x30ed83['add'](RuntimeGlobals['hasOwnProperty']);
                            continue;
                        }
                        break;
                    }
                };
            _0x176225['hooks']['runtimeRequirementInTree']['for'](RuntimeGlobals['ensureChunkHandlers'])['tap'](_0x3f9d59['GOAep'], _0x323a1b), _0x176225['hooks']['runtimeRequirementInTree']['for'](RuntimeGlobals['baseURI'])['tap'](_0x3f9d59['GOAep'], _0x323a1b), _0x176225['hooks']['runtimeRequirementInTree']['for'](RuntimeGlobals['externalInstallChunk'])['tap'](_0x3f9d59['GOAep'], _0x323a1b), _0x176225['hooks']['runtimeRequirementInTree']['for'](RuntimeGlobals['onChunksLoaded'])['tap'](_0x3f9d59['GOAep'], _0x323a1b), _0x176225['hooks']['runtimeRequirementInTree']['for'](RuntimeGlobals['externalInstallChunk'])['tap'](_0x3f9d59['GOAep'], (_0x2ddf89, _0x59a6ff) => {
                if (!_0x2947d9['oegUc'](_0x31faa4, _0x2ddf89))
                    return;
                _0x176225['addRuntimeModule'](_0x2ddf89, new ExportWebpackRequireRuntimeModule());
            }), _0x176225['hooks']['runtimeRequirementInTree']['for'](RuntimeGlobals['ensureChunkHandlers'])['tap'](_0x3f9d59['GOAep'], (_0x390421, _0x34be4c) => {
                if (!_0x3f9d59['dyoKY'](_0x31faa4, _0x390421))
                    return;
                _0x34be4c['add'](RuntimeGlobals['getChunkScriptFilename']);
            });
        });
    }
}
module['exports'] = ModuleChunkLoadingPlugin;
