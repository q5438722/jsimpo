'use strict';
const _0x2476 = [
    'chunkLoading',
    'library',
    'options',
    'experiments',
    'layers',
    '\x27entryOptions.layer\x27\x20is\x20only\x20allowed\x20when\x20\x27experiments.layers\x27\x20is\x20enabled',
    './javascript/EnableChunkLoadingPlugin',
    'checkEnabled',
    'wasmLoading',
    './wasm/EnableWasmLoadingPlugin',
    './library/EnableLibraryPlugin',
    'type',
    'exports',
    '192418ftlOtv',
    '1145073zPUIVM',
    '516997MPpedd',
    '367331iIRjIM',
    '5hVzqjN',
    '335140VVisKV',
    '504975GnaRRT',
    '19uoSUts',
    '201423QIfYnp',
    'apply',
    'hooks',
    'entryOption',
    'EntryOptionPlugin',
    'applyEntryOption',
    'function',
    './DynamicEntryPlugin',
    'import',
    'entryDescriptionToOptions',
    'filename',
    'runtime',
    'layer',
    'publicPath'
];
const _0x32b927 = _0x1761;
(function (_0x536def, _0x104af2) {
    const _0x28095a = _0x1761;
    while (!![]) {
        try {
            const _0x46a86f = -parseInt(_0x28095a(0x7d)) + -parseInt(_0x28095a(0x7e)) + -parseInt(_0x28095a(0x7f)) + parseInt(_0x28095a(0x80)) * -parseInt(_0x28095a(0x81)) + parseInt(_0x28095a(0x82)) + parseInt(_0x28095a(0x83)) + -parseInt(_0x28095a(0x84)) * -parseInt(_0x28095a(0x85));
            if (_0x46a86f === _0x104af2)
                break;
            else
                _0x536def['push'](_0x536def['shift']());
        } catch (_0x47c035) {
            _0x536def['push'](_0x536def['shift']());
        }
    }
}(_0x2476, 0xee489));
class EntryOptionPlugin {
    [_0x32b927(0x86)](_0x4cf14e) {
        const _0x388c61 = _0x32b927;
        _0x4cf14e[_0x388c61(0x87)][_0x388c61(0x88)]['tap'](_0x388c61(0x89), (_0x5de677, _0x52a2d1) => {
            const _0x2e7ea5 = _0x388c61;
            return EntryOptionPlugin[_0x2e7ea5(0x8a)](_0x4cf14e, _0x5de677, _0x52a2d1), !![];
        });
    }
    static [_0x32b927(0x8a)](_0x1a3eda, _0x2e042f, _0x3bdf70) {
        const _0x2f5db3 = _0x32b927;
        if (typeof _0x3bdf70 === _0x2f5db3(0x8b)) {
            const _0x3c2232 = require(_0x2f5db3(0x8c));
            new _0x3c2232(_0x2e042f, _0x3bdf70)[_0x2f5db3(0x86)](_0x1a3eda);
        } else {
            const _0x6328f4 = require('./EntryPlugin');
            for (const _0x13a863 of Object['keys'](_0x3bdf70)) {
                const _0x4b0c32 = _0x3bdf70[_0x13a863], _0x41f4d1 = EntryOptionPlugin['entryDescriptionToOptions'](_0x1a3eda, _0x13a863, _0x4b0c32);
                for (const _0xf4d152 of _0x4b0c32[_0x2f5db3(0x8d)]) {
                    new _0x6328f4(_0x2e042f, _0xf4d152, _0x41f4d1)[_0x2f5db3(0x86)](_0x1a3eda);
                }
            }
        }
    }
    static [_0x32b927(0x8e)](_0x405243, _0x21f42f, _0x5dc7f2) {
        const _0x28c516 = _0x32b927, _0x50b891 = {
                'name': _0x21f42f,
                'filename': _0x5dc7f2[_0x28c516(0x8f)],
                'runtime': _0x5dc7f2[_0x28c516(0x90)],
                'layer': _0x5dc7f2[_0x28c516(0x91)],
                'dependOn': _0x5dc7f2['dependOn'],
                'publicPath': _0x5dc7f2[_0x28c516(0x92)],
                'chunkLoading': _0x5dc7f2[_0x28c516(0x93)],
                'wasmLoading': _0x5dc7f2['wasmLoading'],
                'library': _0x5dc7f2[_0x28c516(0x94)]
            };
        if (_0x5dc7f2[_0x28c516(0x91)] !== undefined && !_0x405243[_0x28c516(0x95)][_0x28c516(0x96)][_0x28c516(0x97)])
            throw new Error(_0x28c516(0x98));
        if (_0x5dc7f2['chunkLoading']) {
            const _0x4327d5 = require(_0x28c516(0x99));
            _0x4327d5[_0x28c516(0x9a)](_0x405243, _0x5dc7f2[_0x28c516(0x93)]);
        }
        if (_0x5dc7f2[_0x28c516(0x9b)]) {
            const _0x25c45a = require(_0x28c516(0x9c));
            _0x25c45a[_0x28c516(0x9a)](_0x405243, _0x5dc7f2['wasmLoading']);
        }
        if (_0x5dc7f2[_0x28c516(0x94)]) {
            const _0x4b9acc = require(_0x28c516(0x9d));
            _0x4b9acc[_0x28c516(0x9a)](_0x405243, _0x5dc7f2[_0x28c516(0x94)][_0x28c516(0x9e)]);
        }
        return _0x50b891;
    }
}
function _0x1761(_0x45d321, _0x32a589) {
    return _0x1761 = function (_0x2476bb, _0x17610a) {
        _0x2476bb = _0x2476bb - 0x7d;
        let _0x4b3f6c = _0x2476[_0x2476bb];
        return _0x4b3f6c;
    }, _0x1761(_0x45d321, _0x32a589);
}
module[_0x32b927(0x9f)] = EntryOptionPlugin;
