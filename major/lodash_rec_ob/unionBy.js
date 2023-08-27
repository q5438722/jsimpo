import _0x430ac4 from './.internal/baseFlatten.js';
import _0x392506 from './.internal/baseUniq.js';
import _0x2feb84 from './isArrayLikeObject.js';
import _0x5a6e6b from './last.js';
function unionBy(..._0x31d597) {
    let _0x5a1181 = _0x5a6e6b(_0x31d597);
    return _0x2feb84(_0x5a1181) && (_0x5a1181 = undefined), _0x392506(_0x430ac4(_0x31d597, 1, _0x2feb84, !![]), _0x5a1181);
}
export default unionBy;