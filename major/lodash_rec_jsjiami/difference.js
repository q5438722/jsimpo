import _0x300266 from'./.internal/baseDifference.js';
import _0x4e5232 from'./.internal/baseFlatten.js';
import _0x71b050 from'./isArrayLikeObject.js';
;
function difference(array, ...values) {
    return _0x71b050(array) ? _0x300266(array, _0x4e5232(values, 1, _0x71b050, !![])) : [];
}
export default difference;