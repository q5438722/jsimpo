'use strict';
const _0x3bc2 = [
    '356751cHdwxY',
    '115740tTGsWC',
    '280301RsgNQx',
    '1IzCsTY',
    '346086nnHTGB',
    'apply',
    'entryOption',
    'tap',
    'EntryOptionPlugin',
    'applyEntryOption',
    './DynamicEntryPlugin',
    './EntryPlugin',
    'entryDescriptionToOptions',
    'runtime',
    'layer',
    'dependOn',
    'publicPath',
    'chunkLoading',
    'wasmLoading',
    'experiments',
    '\x27entryOptions.layer\x27\x20is\x20only\x20allowed\x20when\x20\x27experiments.layers\x27\x20is\x20enabled',
    'checkEnabled',
    './wasm/EnableWasmLoadingPlugin',
    'library',
    './library/EnableLibraryPlugin',
    'type',
    'exports',
    '201936XyZBuM',
    '9672jWNrCj',
    '7MaBJIX',
    '48183KfiinT'
];
const _0x4983d2 = _0x1e16;
(function (_0x59fc56, _0x40c2c9) {
    const _0xc5fa83 = _0x1e16;
    while (!![]) {
        try {
            const _0xf5d4c1 = parseInt(_0xc5fa83(0x1a8)) + -parseInt(_0xc5fa83(0x1a9)) + -parseInt(_0xc5fa83(0x1aa)) * -parseInt(_0xc5fa83(0x1ab)) + -parseInt(_0xc5fa83(0x1ac)) + parseInt(_0xc5fa83(0x1ad)) + -parseInt(_0xc5fa83(0x1ae)) * -parseInt(_0xc5fa83(0x1af)) + -parseInt(_0xc5fa83(0x1b0));
            if (_0xf5d4c1 === _0x40c2c9)
                break;
            else
                _0x59fc56['push'](_0x59fc56['shift']());
        } catch (_0xb2dff3) {
            _0x59fc56['push'](_0x59fc56['shift']());
        }
    }
}(_0x3bc2, 0x3661d));
function _0x1e16(_0x27ff3f, _0x1373de) {
    return _0x1e16 = function (_0x3bc2fe, _0x1e1637) {
        _0x3bc2fe = _0x3bc2fe - 0x1a8;
        let _0x4c29f8 = _0x3bc2[_0x3bc2fe];
        return _0x4c29f8;
    }, _0x1e16(_0x27ff3f, _0x1373de);
}
class EntryOptionPlugin {
    [_0x4983d2(0x1b1)](_0x37cedc) {
        const _0x12363d = _0x4983d2;
        _0x37cedc['hooks'][_0x12363d(0x1b2)][_0x12363d(0x1b3)](_0x12363d(0x1b4), (_0x1c5918, _0x14da77) => {
            const _0x2e05c4 = _0x12363d;
            return EntryOptionPlugin[_0x2e05c4(0x1b5)](_0x37cedc, _0x1c5918, _0x14da77), !![];
        });
    }
    static [_0x4983d2(0x1b5)](_0x335035, _0x44aed1, _0x43490f) {
        const _0xa91f5b = _0x4983d2;
        if (typeof _0x43490f === 'function') {
            const _0x55e205 = require(_0xa91f5b(0x1b6));
            new _0x55e205(_0x44aed1, _0x43490f)[_0xa91f5b(0x1b1)](_0x335035);
        } else {
            const _0x398be6 = require(_0xa91f5b(0x1b7));
            for (const _0x53c6ec of Object['keys'](_0x43490f)) {
                const _0x5cb1d8 = _0x43490f[_0x53c6ec], _0x59a19d = EntryOptionPlugin[_0xa91f5b(0x1b8)](_0x335035, _0x53c6ec, _0x5cb1d8);
                for (const _0x2502b6 of _0x5cb1d8['import']) {
                    new _0x398be6(_0x44aed1, _0x2502b6, _0x59a19d)[_0xa91f5b(0x1b1)](_0x335035);
                }
            }
        }
    }
    static ['entryDescriptionToOptions'](_0x33c427, _0x2874fc, _0x3ffd09) {
        const _0xc6a54d = _0x4983d2, _0x597d8d = {
                'name': _0x2874fc,
                'filename': _0x3ffd09['filename'],
                'runtime': _0x3ffd09[_0xc6a54d(0x1b9)],
                'layer': _0x3ffd09[_0xc6a54d(0x1ba)],
                'dependOn': _0x3ffd09[_0xc6a54d(0x1bb)],
                'publicPath': _0x3ffd09[_0xc6a54d(0x1bc)],
                'chunkLoading': _0x3ffd09[_0xc6a54d(0x1bd)],
                'wasmLoading': _0x3ffd09[_0xc6a54d(0x1be)],
                'library': _0x3ffd09['library']
            };
        if (_0x3ffd09['layer'] !== undefined && !_0x33c427['options'][_0xc6a54d(0x1bf)]['layers'])
            throw new Error(_0xc6a54d(0x1c0));
        if (_0x3ffd09['chunkLoading']) {
            const _0xa5026e = require('./javascript/EnableChunkLoadingPlugin');
            _0xa5026e[_0xc6a54d(0x1c1)](_0x33c427, _0x3ffd09['chunkLoading']);
        }
        if (_0x3ffd09[_0xc6a54d(0x1be)]) {
            const _0x8bb190 = require(_0xc6a54d(0x1c2));
            _0x8bb190['checkEnabled'](_0x33c427, _0x3ffd09['wasmLoading']);
        }
        if (_0x3ffd09[_0xc6a54d(0x1c3)]) {
            const _0x537bc7 = require(_0xc6a54d(0x1c4));
            _0x537bc7[_0xc6a54d(0x1c1)](_0x33c427, _0x3ffd09['library'][_0xc6a54d(0x1c5)]);
        }
        return _0x597d8d;
    }
}
module[_0x4983d2(0x1c6)] = EntryOptionPlugin;
