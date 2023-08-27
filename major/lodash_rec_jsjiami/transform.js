import _0x5373af from'./.internal/arrayEach.js';
import _0x353e95 from'./.internal/baseForOwn.js';
import _0x37def4 from'./isBuffer.js';
import _0x16a683 from'./isObject.js';
import _0x263c24 from'./isTypedArray.js';
;
function transform(object, iteratee, accumulator) {
    const isArr = Array['isArray'](object);
    const isArrLike = isArr || _0x37def4(object) || _0x263c24(object);
    if (accumulator == null) {
        const Ctor = object && object['constructor'];
        if (isArrLike) {
            accumulator = isArr ? new Ctor() : [];
        } else if (_0x16a683(object)) {
            accumulator = typeof Ctor === 'function' ? Object['create'](Object['getPrototypeOf'](object)) : {};
        } else {
            accumulator = {};
        }
    }
    (isArrLike ? _0x5373af : _0x353e95)(object, (value, index, object) => iteratee(accumulator, value, index, object));
    return accumulator;
}
export default transform;