import _0x105972 from'./.internal/arrayEachRight.js';
import _0x224926 from'./.internal/baseEachRight.js';
;
function forEachRight(collection, iteratee) {
    const func = Array['isArray'](collection) ? _0x105972 : _0x224926;
    return func(collection, iteratee);
}
export default forEachRight;