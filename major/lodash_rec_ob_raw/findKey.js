
function findKey(_0x5d736e, _0x5a402d) {
    let _0x5e8717;
    if (_0x5d736e == null)
        return _0x5e8717;
    return Object['keys'](_0x5d736e)['some'](_0x18fc7c => {
        const _0x497b78 = _0x5d736e[_0x18fc7c];
        if (_0x5a402d(_0x497b78, _0x18fc7c, _0x5d736e))
            return _0x5e8717 = _0x18fc7c, !![];
    }), _0x5e8717;
}
export default findKey;