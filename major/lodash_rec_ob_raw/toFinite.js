import _0x4ac4d2 from './toNumber.js';
const INFINITY = 1 / 0, MAX_INTEGER = 1.7976931348623157e+308;
function toFinite(_0x4391ec) {
    if (!_0x4391ec)
        return _0x4391ec === 0 ? _0x4391ec : 0;
    _0x4391ec = _0x4ac4d2(_0x4391ec);
    if (_0x4391ec === INFINITY || _0x4391ec === -INFINITY) {
        const _0x4e0b84 = _0x4391ec < 0 ? -1 : 1;
        return _0x4e0b84 * MAX_INTEGER;
    }
    return _0x4391ec === _0x4391ec ? _0x4391ec : 0;
}
export default toFinite;