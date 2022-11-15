const cacheLoader = require(_0x9b39c6(379));
module[_0x9b39c6(380)] = cacheLoader(function loadWASMBundle(_0x37ab13) {
    const _0x51833a = _0x9b39c6, _0x1f99ab = {
            'IjVof': function (_0x4b379f, _0x495b21) {
                return _0x4b379f(_0x495b21);
            }
        };
    return _0x1f99ab[_0x51833a(381)](fetch, _0x37ab13)['then'](function (_0x50e410) {
        const _0x5a29d7 = _0x51833a;
        return WebAssembly[_0x5a29d7(382)] ? WebAssembly[_0x5a29d7(382)](_0x50e410) : _0x50e410[_0x5a29d7(383)]()['then'](function (_0x35473c) {
            return WebAssembly['instantiate'](_0x35473c);
        });
    })['then'](function (_0x4b81c0) {
        const _0x121bd6 = _0x51833a;
        return _0x4b81c0[_0x121bd6(384)][_0x121bd6(380)];
    });
});