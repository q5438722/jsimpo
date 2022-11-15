const _0x530d = [
    'instantiateStreaming',
    'arrayBuffer',
    'instance',
    '94rglxHN',
    '6689LSLctl',
    '719394yQyFsA',
    '447802iYlahJ',
    '106091aZvgdr',
    '785061QDvJbW',
    '274LCkutb',
    '1367OKMEvE',
    '14689ILBBqy',
    '124OVbosA',
    '../cacheLoader',
    'exports',
    'IjVof'
];
const _0x9b39c6 = _0x22dd;
function _0x22dd(_0x4c8e92, _0x5c1193) {
    return _0x22dd = function (_0xbce405, _0x3b83a8) {
        _0xbce405 = _0xbce405 - (-0x8 * -0x1e8 + 0xf3a + -0x1d09);
        let _0x5816b0 = _0x530d[_0xbce405];
        return _0x5816b0;
    }, _0x22dd(_0x4c8e92, _0x5c1193);
}
(function (_0x4d4e64, _0x250da8) {
    const _0x323a00 = _0x22dd;
    while (!![]) {
        try {
            const _0x289305 = parseInt(_0x323a00(0x171)) * parseInt(_0x323a00(0x172)) + parseInt(_0x323a00(0x173)) + parseInt(_0x323a00(0x174)) + parseInt(_0x323a00(0x175)) + parseInt(_0x323a00(0x176)) + -parseInt(_0x323a00(0x177)) * parseInt(_0x323a00(0x178)) + parseInt(_0x323a00(0x179)) * -parseInt(_0x323a00(0x17a));
            if (_0x289305 === _0x250da8)
                break;
            else
                _0x4d4e64['push'](_0x4d4e64['shift']());
        } catch (_0x262673) {
            _0x4d4e64['push'](_0x4d4e64['shift']());
        }
    }
}(_0x530d, -0x9f35b + -0x97bc8 + 0x1aed93));
const cacheLoader = require(_0x9b39c6(0x17b));
module[_0x9b39c6(0x17c)] = cacheLoader(function loadWASMBundle(_0x37ab13) {
    const _0x51833a = _0x9b39c6, _0x1f99ab = {
            'IjVof': function (_0x4b379f, _0x495b21) {
                return _0x4b379f(_0x495b21);
            }
        };
    return _0x1f99ab[_0x51833a(0x17d)](fetch, _0x37ab13)['then'](function (_0x50e410) {
        const _0x5a29d7 = _0x51833a;
        return WebAssembly[_0x5a29d7(0x17e)] ? WebAssembly[_0x5a29d7(0x17e)](_0x50e410) : _0x50e410[_0x5a29d7(0x17f)]()['then'](function (_0x35473c) {
            return WebAssembly['instantiate'](_0x35473c);
        });
    })['then'](function (_0x4b81c0) {
        const _0x121bd6 = _0x51833a;
        return _0x4b81c0[_0x121bd6(0x180)][_0x121bd6(0x17c)];
    });
});
