function _0x1e16(_0x27ff3f, _0x1373de) {
    return _0x1e16 = function (_0x3bc2fe, _0x1e1637) {
        _0x3bc2fe = _0x3bc2fe - 424;
        let _0x4c29f8 = _0x3bc2[_0x3bc2fe];
        return _0x4c29f8;
    }, _0x1e16(_0x27ff3f, _0x1373de);
}
class EntryOptionPlugin {
    [_0x4983d2(433)](_0x37cedc) {
        const _0x12363d = _0x4983d2;
        _0x37cedc['hooks'][_0x12363d(434)][_0x12363d(435)](_0x12363d(436), (_0x1c5918, _0x14da77) => {
            const _0x2e05c4 = _0x12363d;
            return EntryOptionPlugin[_0x2e05c4(437)](_0x37cedc, _0x1c5918, _0x14da77), !![];
        });
    }
    static [_0x4983d2(437)](_0x335035, _0x44aed1, _0x43490f) {
        const _0xa91f5b = _0x4983d2;
        if (typeof _0x43490f === 'function') {
            const _0x55e205 = require(_0xa91f5b(438));
            new _0x55e205(_0x44aed1, _0x43490f)[_0xa91f5b(433)](_0x335035);
        } else {
            const _0x398be6 = require(_0xa91f5b(439));
            for (const _0x53c6ec of Object['keys'](_0x43490f)) {
                const _0x5cb1d8 = _0x43490f[_0x53c6ec], _0x59a19d = EntryOptionPlugin[_0xa91f5b(440)](_0x335035, _0x53c6ec, _0x5cb1d8);
                for (const _0x2502b6 of _0x5cb1d8['import']) {
                    new _0x398be6(_0x44aed1, _0x2502b6, _0x59a19d)[_0xa91f5b(433)](_0x335035);
                }
            }
        }
    }
    static ['entryDescriptionToOptions'](_0x33c427, _0x2874fc, _0x3ffd09) {
        const _0xc6a54d = _0x4983d2, _0x597d8d = {
                'name': _0x2874fc,
                'filename': _0x3ffd09['filename'],
                'runtime': _0x3ffd09[_0xc6a54d(441)],
                'layer': _0x3ffd09[_0xc6a54d(442)],
                'dependOn': _0x3ffd09[_0xc6a54d(443)],
                'publicPath': _0x3ffd09[_0xc6a54d(444)],
                'chunkLoading': _0x3ffd09[_0xc6a54d(445)],
                'wasmLoading': _0x3ffd09[_0xc6a54d(446)],
                'library': _0x3ffd09['library']
            };
        if (_0x3ffd09['layer'] !== undefined && !_0x33c427['options'][_0xc6a54d(447)]['layers'])
            throw new Error(_0xc6a54d(448));
        if (_0x3ffd09['chunkLoading']) {
            const _0xa5026e = require('./javascript/EnableChunkLoadingPlugin');
            _0xa5026e[_0xc6a54d(449)](_0x33c427, _0x3ffd09['chunkLoading']);
        }
        if (_0x3ffd09[_0xc6a54d(446)]) {
            const _0x8bb190 = require(_0xc6a54d(450));
            _0x8bb190['checkEnabled'](_0x33c427, _0x3ffd09['wasmLoading']);
        }
        if (_0x3ffd09[_0xc6a54d(451)]) {
            const _0x537bc7 = require(_0xc6a54d(452));
            _0x537bc7[_0xc6a54d(449)](_0x33c427, _0x3ffd09['library'][_0xc6a54d(453)]);
        }
        return _0x597d8d;
    }
}
module[_0x4983d2(454)] = EntryOptionPlugin;