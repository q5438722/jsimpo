import _0x3cc950 from './.internal/baseFlatten.js';
import _0x5d9568 from './.internal/baseUniq.js';
import _0x253adf from './isArrayLikeObject.js';
import _0x2ba3cf from './last.js';
function unionWith(..._0x2aaa30) {
    let _0x392ad7 = _0x2ba3cf(_0x2aaa30);
    return _0x392ad7 = typeof _0x392ad7 === 'function' ? _0x392ad7 : undefined, _0x5d9568(_0x3cc950(_0x2aaa30, 1, _0x253adf, !![]), undefined, _0x392ad7);
}
export default unionWith;