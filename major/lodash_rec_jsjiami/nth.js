import _0x3f4c06 from'./.internal/isIndex.js';
;
function nth(_0x490ae6, _0x106f3a) {
    const _0xbba1ac = _0x490ae6 == null ? 0 : _0x490ae6['length'];
    if (!_0xbba1ac) {
        return;
    }
    _0x106f3a += _0x106f3a < 0 ? _0xbba1ac : 0;
    return _0x3f4c06(_0x106f3a, _0xbba1ac) ? _0x490ae6[_0x106f3a] : undefined;
}
export default nth;