
;
function mapObject(_0x1a27e9, _0x1a3057) {
    const _0x44e436 = Object['keys'](_0x1a27e9);
    const _0x4ef444 = new Array(_0x44e436['length']);
    _0x44e436['forEach']((_0x1a5812, _0x236da6) => {
        _0x4ef444[_0x236da6] = _0x1a3057(_0x1a27e9[_0x1a5812], _0x1a5812, _0x1a27e9);
    });
    return _0x4ef444;
}
export default mapObject;