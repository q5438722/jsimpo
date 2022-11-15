'use strict';
class EntryOptionPlugin {
    ['apply'](_0x276776) {
        const _0xd76a33 = { 'xTlOu': 'EntryOptionPlugin' };
        _0x276776['hooks']['entryOption']['tap'](_0xd76a33['xTlOu'], (_0x3c2c34, _0x297f1b) => {
            return EntryOptionPlugin['applyEntryOption'](_0x276776, _0x3c2c34, _0x297f1b), !![];
        });
    }
    static ['applyEntryOption'](_0x27027b, _0x2a08be, _0x73a31c) {
        const _0x5d0116 = {
            'VGdWF': function (_0x6449c, _0x1d4aef) {
                return _0x6449c === _0x1d4aef;
            },
            'MTuPG': 'function',
            'kzDIE': function (_0x35eb99, _0x10ffdd) {
                return _0x35eb99(_0x10ffdd);
            },
            'TgYwd': './DynamicEntryPlugin',
            'zNFAI': function (_0x5b284f, _0x14a231) {
                return _0x5b284f(_0x14a231);
            },
            'CuedZ': './EntryPlugin'
        };
        if (_0x5d0116['VGdWF'](typeof _0x73a31c, _0x5d0116['MTuPG'])) {
            const _0x32ff99 = _0x5d0116['kzDIE'](require, _0x5d0116['TgYwd']);
            new _0x32ff99(_0x2a08be, _0x73a31c)['apply'](_0x27027b);
        } else {
            const _0x2ccb6c = _0x5d0116['zNFAI'](require, _0x5d0116['CuedZ']);
            for (const _0x16017c of Object['keys'](_0x73a31c)) {
                const _0x229d20 = _0x73a31c[_0x16017c], _0x149de5 = EntryOptionPlugin['entryDescriptionToOptions'](_0x27027b, _0x16017c, _0x229d20);
                for (const _0x54df8f of _0x229d20['import']) {
                    new _0x2ccb6c(_0x2a08be, _0x54df8f, _0x149de5)['apply'](_0x27027b);
                }
            }
        }
    }
    static ['entryDescriptionToOptions'](_0x519413, _0x8460a6, _0x13a6b2) {
        const _0x4c1c80 = {
                'dATWw': function (_0x3f51f5, _0x358c38) {
                    return _0x3f51f5 !== _0x358c38;
                },
                'Bipbj': '\x27entryOptions.layer\x27\x20is\x20only\x20allowed\x20when\x20\x27experiments.layers\x27\x20is\x20enabled',
                'EdORm': function (_0x2db5ef, _0x482df5) {
                    return _0x2db5ef(_0x482df5);
                },
                'eanwV': './javascript/EnableChunkLoadingPlugin',
                'GMyTj': function (_0x540cb7, _0x8e115b) {
                    return _0x540cb7(_0x8e115b);
                },
                'axXUr': './wasm/EnableWasmLoadingPlugin',
                'lApeI': function (_0x5665ce, _0x38aaa1) {
                    return _0x5665ce(_0x38aaa1);
                },
                'BJElD': './library/EnableLibraryPlugin'
            }, _0x3628c4 = {
                'name': _0x8460a6,
                'filename': _0x13a6b2['filename'],
                'runtime': _0x13a6b2['runtime'],
                'layer': _0x13a6b2['layer'],
                'dependOn': _0x13a6b2['dependOn'],
                'publicPath': _0x13a6b2['publicPath'],
                'chunkLoading': _0x13a6b2['chunkLoading'],
                'wasmLoading': _0x13a6b2['wasmLoading'],
                'library': _0x13a6b2['library']
            };
        if (_0x4c1c80['dATWw'](_0x13a6b2['layer'], undefined) && !_0x519413['options']['experiments']['layers'])
            throw new Error(_0x4c1c80['Bipbj']);
        if (_0x13a6b2['chunkLoading']) {
            const _0x2d22b9 = _0x4c1c80['EdORm'](require, _0x4c1c80['eanwV']);
            _0x2d22b9['checkEnabled'](_0x519413, _0x13a6b2['chunkLoading']);
        }
        if (_0x13a6b2['wasmLoading']) {
            const _0x492d54 = _0x4c1c80['GMyTj'](require, _0x4c1c80['axXUr']);
            _0x492d54['checkEnabled'](_0x519413, _0x13a6b2['wasmLoading']);
        }
        if (_0x13a6b2['library']) {
            const _0x7ad423 = _0x4c1c80['lApeI'](require, _0x4c1c80['BJElD']);
            _0x7ad423['checkEnabled'](_0x519413, _0x13a6b2['library']['type']);
        }
        return _0x3628c4;
    }
}
module['exports'] = EntryOptionPlugin;
