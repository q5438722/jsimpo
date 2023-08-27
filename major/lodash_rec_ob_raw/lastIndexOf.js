import _0x48a809 from './.internal/baseFindIndex.js';
import _0x36bdfb from './.internal/baseIsNaN.js';
import _0x122efb from './.internal/strictLastIndexOf.js';
import _0x276b8c from './toInteger.js';
function lastIndexOf(_0x4b9739, _0x3298db, _0x4b24ab) {
    const _0x76d8c3 = _0x4b9739 == null ? 0 : _0x4b9739['length'];
    if (!_0x76d8c3)
        return -1;
    let _0x2c28ef = _0x76d8c3;
    return _0x4b24ab !== undefined && (_0x2c28ef = _0x276b8c(_0x4b24ab), _0x2c28ef = _0x2c28ef < 0 ? Math['max'](_0x76d8c3 + _0x2c28ef, 0) : Math['min'](_0x2c28ef, _0x76d8c3 - 1)), _0x3298db === _0x3298db ? _0x122efb(_0x4b9739, _0x3298db, _0x2c28ef) : _0x48a809(_0x4b9739, _0x36bdfb, _0x2c28ef, !![]);
}
export default lastIndexOf;