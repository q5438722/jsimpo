import _0x3896df from'./.internal/copyArray.js';
;
function shuffle(_0x3d90cc) {
    const _0x4fe72d = _0x3d90cc == null ? 0 : _0x3d90cc['length'];
    if (!_0x4fe72d) {
        return [];
    }
    let _0xfc8c36 = -1;
    const _0x3ae659 = _0x4fe72d - 1;
    const _0x3478ec = _0x3896df(_0x3d90cc);
    while (++_0xfc8c36 < _0x4fe72d) {
        const _0x33f6c3 = _0xfc8c36 + Math['floor'](Math['random']() * (_0x3ae659 - _0xfc8c36 + 1));
        const _0x37f23e = _0x3478ec[_0x33f6c3];
        _0x3478ec[_0x33f6c3] = _0x3478ec[_0xfc8c36];
        _0x3478ec[_0xfc8c36] = _0x37f23e;
    }
    return _0x3478ec;
}
export default shuffle;