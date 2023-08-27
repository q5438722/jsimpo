import _0x907cab from'./isSymbol.js';
;
function maxBy(_0xf97625, _0x58a6c4) {
    let _0x1b76a2;
    if (_0xf97625 == null) {
        return _0x1b76a2;
    }
    let _0x4c6f99;
    for (const _0x502689 of _0xf97625) {
        const _0x4a0522 = _0x58a6c4(_0x502689);
        if (_0x4a0522 != null && (_0x4c6f99 === undefined ? _0x4a0522 === _0x4a0522 && !_0x907cab(_0x4a0522) : _0x4a0522 > _0x4c6f99)) {
            _0x4c6f99 = _0x4a0522;
            _0x1b76a2 = _0x502689;
        }
    }
    return _0x1b76a2;
}
export default maxBy;