'use strict';
class EntryOptionPlugin {
    ['apply'](_0x10b88b) {
        _0x10b88b['hooks']['entryOption']['tap']('EntryOptionPlugin', (_0x10b795, _0x126c2c) => {
            return EntryOptionPlugin['applyEntryOption'](_0x10b88b, _0x10b795, _0x126c2c), !![];
        });
    }
    static ['applyEntryOption'](_0x4c4ab7, _0x53e7d0, _0x370f87) {
        if (typeof _0x370f87 === 'function') {
            const _0x2b1747 = require('./DynamicEntryPlugin');
            new _0x2b1747(_0x53e7d0, _0x370f87)['apply'](_0x4c4ab7);
        } else {
            const _0x52da8c = require('./EntryPlugin');
            for (const _0x1e4efc of Object['keys'](_0x370f87)) {
                const _0x32b995 = _0x370f87[_0x1e4efc], _0x382c0d = EntryOptionPlugin['entryDescriptionToOptions'](_0x4c4ab7, _0x1e4efc, _0x32b995);
                for (const _0x26dbc6 of _0x32b995['import']) {
                    new _0x52da8c(_0x53e7d0, _0x26dbc6, _0x382c0d)['apply'](_0x4c4ab7);
                }
            }
        }
    }
    static ['entryDescriptionToOptions'](_0x557c65, _0x468de4, _0x41ab45) {
        const _0x2fecfe = {
            'name': _0x468de4,
            'filename': _0x41ab45['filename'],
            'runtime': _0x41ab45['runtime'],
            'layer': _0x41ab45['layer'],
            'dependOn': _0x41ab45['dependOn'],
            'publicPath': _0x41ab45['publicPath'],
            'chunkLoading': _0x41ab45['chunkLoading'],
            'wasmLoading': _0x41ab45['wasmLoading'],
            'library': _0x41ab45['library']
        };
        if (_0x41ab45['layer'] !== undefined && !_0x557c65['options']['experiments']['layers'])
            throw new Error('\x27entryOptions.layer\x27\x20is\x20only\x20allowed\x20when\x20\x27experiments.layers\x27\x20is\x20enabled');
        if (_0x41ab45['chunkLoading']) {
            const _0x382a2d = require('./javascript/EnableChunkLoadingPlugin');
            _0x382a2d['checkEnabled'](_0x557c65, _0x41ab45['chunkLoading']);
        }
        if (_0x41ab45['wasmLoading']) {
            const _0x45c8cd = require('./wasm/EnableWasmLoadingPlugin');
            _0x45c8cd['checkEnabled'](_0x557c65, _0x41ab45['wasmLoading']);
        }
        if (_0x41ab45['library']) {
            const _0x805da0 = require('./library/EnableLibraryPlugin');
            _0x805da0['checkEnabled'](_0x557c65, _0x41ab45['library']['type']);
        }
        return _0x2fecfe;
    }
}
module['exports'] = EntryOptionPlugin;
