const {browsers} = require(_0x222e7e(401));
function unpackRegion(_0x1969b2) {
    const _0x438f42 = _0x222e7e;
    return Object[_0x438f42(402)](_0x1969b2)['reduce']((_0x19d0fa, _0x3173c7) => {
        const _0x3ac819 = _0x438f42;
        let _0x13dd4e = _0x1969b2[_0x3173c7];
        return _0x19d0fa[browsers[_0x3173c7]] = Object['keys'](_0x13dd4e)[_0x3ac819(403)]((_0x125c0c, _0x48f3d0) => {
            const _0x428d5b = _0x3ac819;
            let _0x36de03 = _0x13dd4e[_0x48f3d0];
            return _0x48f3d0 === '_' ? _0x36de03[_0x428d5b(404)](' ')['forEach'](_0x2daafb => _0x125c0c[_0x2daafb] = null) : _0x125c0c[_0x48f3d0] = _0x36de03, _0x125c0c;
        }, {}), _0x19d0fa;
    }, {});
}
module[_0x222e7e(405)] = unpackRegion, module[_0x222e7e(405)][_0x222e7e(406)] = unpackRegion;