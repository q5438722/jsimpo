'use strict';
class EntryOptionPlugin {
    ['apply'](_0x572c6e) {
        _0x572c6e['hooks']['entryOption']['tap']('EntryOptionPlugin', (_0x57b479, _0x279a7d) => {
            EntryOptionPlugin['applyEntryOption'](_0x572c6e, _0x57b479, _0x279a7d);
            return !![];
        });
    }
    static ['applyEntryOption'](_0x2fdf65, _0x2d03e9, _0xc5ee5b) {
        if (typeof _0xc5ee5b === 'function') {
            const _0x236c4b = require('./DynamicEntryPlugin');
            new _0x236c4b(_0x2d03e9, _0xc5ee5b)['apply'](_0x2fdf65);
        } else {
            if ('FIUYa' !== 'FIUYa') {
                const _0x14353f = require('./javascript/EnableChunkLoadingPlugin');
                _0x14353f['checkEnabled'](_0x2fdf65, desc['chunkLoading']);
            } else {
                const _0x2d9556 = require('./EntryPlugin');
                for (const _0x3d6a58 of Object['keys'](_0xc5ee5b)) {
                    const _0x5aaf18 = _0xc5ee5b[_0x3d6a58];
                    const _0x554034 = EntryOptionPlugin['entryDescriptionToOptions'](_0x2fdf65, _0x3d6a58, _0x5aaf18);
                    for (const _0xc5ee5b of _0x5aaf18['import']) {
                        if ('MHSzT' !== 'MHSzT') {
                            new _0x2d9556(_0x2d03e9, _0xc5ee5b, _0x554034)['apply'](_0x2fdf65);
                        } else {
                            new _0x2d9556(_0x2d03e9, _0xc5ee5b, _0x554034)['apply'](_0x2fdf65);
                        }
                    }
                }
            }
        }
    }
    static ['entryDescriptionToOptions'](_0x279cfc, _0x410870, _0x5cd145) {
        const _0x270154 = {
            'name': _0x410870,
            'filename': _0x5cd145['filename'],
            'runtime': _0x5cd145['runtime'],
            'layer': _0x5cd145['layer'],
            'dependOn': _0x5cd145['dependOn'],
            'publicPath': _0x5cd145['publicPath'],
            'chunkLoading': _0x5cd145['chunkLoading'],
            'wasmLoading': _0x5cd145['wasmLoading'],
            'library': _0x5cd145['library']
        };
        if (_0x5cd145['layer'] !== undefined && !_0x279cfc['options']['experiments']['layers']) {
            if ('UlsaA' === 'PAQKo') {
                const _0x451164 = require('./wasm/EnableWasmLoadingPlugin');
                _0x451164['checkEnabled'](_0x279cfc, _0x5cd145['wasmLoading']);
            } else {
                throw new Error('\'entryOptions.layer\' is only allowed when \'experiments.layers\' is enabled');
            }
        }
        if (_0x5cd145['chunkLoading']) {
            if ('EMHDE' !== 'RQGsb') {
                const _0x486e31 = require('./javascript/EnableChunkLoadingPlugin');
                _0x486e31['checkEnabled'](_0x279cfc, _0x5cd145['chunkLoading']);
            } else {
                throw new Error('\'entryOptions.layer\' is only allowed when \'experiments.layers\' is enabled');
            }
        }
        if (_0x5cd145['wasmLoading']) {
            const _0x598616 = require('./wasm/EnableWasmLoadingPlugin');
            _0x598616['checkEnabled'](_0x279cfc, _0x5cd145['wasmLoading']);
        }
        if (_0x5cd145['library']) {
            const _0xcedb55 = require('./library/EnableLibraryPlugin');
            _0xcedb55['checkEnabled'](_0x279cfc, _0x5cd145['library']['type']);
        }
        return _0x270154;
    }
}
module['exports'] = EntryOptionPlugin;