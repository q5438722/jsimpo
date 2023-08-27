import _0x41ae7a from './.internal/baseDifference.js';
import _0x10257a from './.internal/baseFlatten.js';
import _0x2ece21 from './isArrayLikeObject.js';
import _0x476b44 from './last.js';
function differenceBy(_0x40e995, ..._0x2d80ab) {
    let _0x1647b8 = _0x476b44(_0x2d80ab);
    return _0x2ece21(_0x1647b8) && (_0x1647b8 = undefined), _0x2ece21(_0x40e995) ? _0x41ae7a(_0x40e995, _0x10257a(_0x2d80ab, 1, _0x2ece21, !![]), _0x1647b8) : [];
}
export default differenceBy;