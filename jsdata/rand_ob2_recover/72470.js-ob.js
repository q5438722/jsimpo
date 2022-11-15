class EntryOptionPlugin {
    [_0x32b927(134)](_0x4cf14e) {
        const _0x388c61 = _0x32b927;
        _0x4cf14e[_0x388c61(135)][_0x388c61(136)]['tap'](_0x388c61(137), (_0x5de677, _0x52a2d1) => {
            const _0x2e7ea5 = _0x388c61;
            return EntryOptionPlugin[_0x2e7ea5(138)](_0x4cf14e, _0x5de677, _0x52a2d1), !![];
        });
    }
    static [_0x32b927(138)](_0x1a3eda, _0x2e042f, _0x3bdf70) {
        const _0x2f5db3 = _0x32b927;
        if (typeof _0x3bdf70 === _0x2f5db3(139)) {
            const _0x3c2232 = require(_0x2f5db3(140));
            new _0x3c2232(_0x2e042f, _0x3bdf70)[_0x2f5db3(134)](_0x1a3eda);
        } else {
            const _0x6328f4 = require('./EntryPlugin');
            for (const _0x13a863 of Object['keys'](_0x3bdf70)) {
                const _0x4b0c32 = _0x3bdf70[_0x13a863], _0x41f4d1 = EntryOptionPlugin['entryDescriptionToOptions'](_0x1a3eda, _0x13a863, _0x4b0c32);
                for (const _0xf4d152 of _0x4b0c32[_0x2f5db3(141)]) {
                    new _0x6328f4(_0x2e042f, _0xf4d152, _0x41f4d1)[_0x2f5db3(134)](_0x1a3eda);
                }
            }
        }
    }
    static [_0x32b927(142)](_0x405243, _0x21f42f, _0x5dc7f2) {
        const _0x28c516 = _0x32b927, _0x50b891 = {
                'name': _0x21f42f,
                'filename': _0x5dc7f2[_0x28c516(143)],
                'runtime': _0x5dc7f2[_0x28c516(144)],
                'layer': _0x5dc7f2[_0x28c516(145)],
                'dependOn': _0x5dc7f2['dependOn'],
                'publicPath': _0x5dc7f2[_0x28c516(146)],
                'chunkLoading': _0x5dc7f2[_0x28c516(147)],
                'wasmLoading': _0x5dc7f2['wasmLoading'],
                'library': _0x5dc7f2[_0x28c516(148)]
            };
        if (_0x5dc7f2[_0x28c516(145)] !== undefined && !_0x405243[_0x28c516(149)][_0x28c516(150)][_0x28c516(151)])
            throw new Error(_0x28c516(152));
        if (_0x5dc7f2['chunkLoading']) {
            const _0x4327d5 = require(_0x28c516(153));
            _0x4327d5[_0x28c516(154)](_0x405243, _0x5dc7f2[_0x28c516(147)]);
        }
        if (_0x5dc7f2[_0x28c516(155)]) {
            const _0x25c45a = require(_0x28c516(156));
            _0x25c45a[_0x28c516(154)](_0x405243, _0x5dc7f2['wasmLoading']);
        }
        if (_0x5dc7f2[_0x28c516(148)]) {
            const _0x4b9acc = require(_0x28c516(157));
            _0x4b9acc[_0x28c516(154)](_0x405243, _0x5dc7f2[_0x28c516(148)][_0x28c516(158)]);
        }
        return _0x50b891;
    }
}
function _0x1761(_0x45d321, _0x32a589) {
    return _0x1761 = function (_0x2476bb, _0x17610a) {
        _0x2476bb = _0x2476bb - 125;
        let _0x4b3f6c = _0x2476[_0x2476bb];
        return _0x4b3f6c;
    }, _0x1761(_0x45d321, _0x32a589);
}
module[_0x32b927(159)] = EntryOptionPlugin;