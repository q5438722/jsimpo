import _0x5e6912 from './.internal/baseDifference.js';
import _0x2fe06d from './.internal/baseFlatten.js';
import _0x15d8fd from './isArrayLikeObject.js';
import _0x46cf1f from './last.js';
function differenceWith(_0x6a2369, ..._0x378622) {
    let _0x4d7a96 = _0x46cf1f(_0x378622);
    return _0x15d8fd(_0x4d7a96) && (_0x4d7a96 = undefined), _0x15d8fd(_0x6a2369) ? _0x5e6912(_0x6a2369, _0x2fe06d(_0x378622, 1, _0x15d8fd, !![]), undefined, _0x4d7a96) : [];
}
export default differenceWith;