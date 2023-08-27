import _0x53741d from'./isSymbol.js';
;
function minBy(_0x981241, _0x1b602c) {
    let _0xb85573;
    if (_0x981241 == null) {
        return _0xb85573;
    }
    let _0x2a3e56;
    for (const _0x2dadc6 of _0x981241) {
        const _0x162c2c = _0x1b602c(_0x2dadc6);
        if (_0x162c2c != null && (_0x2a3e56 === undefined ? _0x162c2c === _0x162c2c && !_0x53741d(_0x162c2c) : _0x162c2c < _0x2a3e56)) {
            _0x2a3e56 = _0x162c2c;
            _0xb85573 = _0x2dadc6;
        }
    }
    return _0xb85573;
}
export default minBy;