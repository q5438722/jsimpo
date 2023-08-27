
function filterObject(_0x4b52c9, _0x9e83be) {
    _0x4b52c9 = Object(_0x4b52c9);
    const _0x22af37 = [];
    return Object['keys'](_0x4b52c9)['forEach'](_0x599e27 => {
        const _0x18e741 = _0x4b52c9[_0x599e27];
        _0x9e83be(_0x18e741, _0x599e27, _0x4b52c9) && _0x22af37['push'](_0x18e741);
    }), _0x22af37;
}
export default filterObject;