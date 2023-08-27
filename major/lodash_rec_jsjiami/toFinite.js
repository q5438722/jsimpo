import _0x18d342 from'./toNumber.js';
;
const INFINITY = 1 / 0;
const MAX_INTEGER = 1.7976931348623157e+308;
function toFinite(_0xe709cc) {
    if (!_0xe709cc) {
        return _0xe709cc === 0 ? _0xe709cc : 0;
    }
    _0xe709cc = _0x18d342(_0xe709cc);
    if (_0xe709cc === INFINITY || _0xe709cc === -INFINITY) {
        const _0x3442f2 = _0xe709cc < 0 ? -1 : 1;
        return _0x3442f2 * MAX_INTEGER;
    }
    return _0xe709cc === _0xe709cc ? _0xe709cc : 0;
}
export default toFinite;