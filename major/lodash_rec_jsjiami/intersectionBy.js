import _0x45a9c8 from'./map.js';
import _0xd739f6 from'./.internal/baseIntersection.js';
import _0x34a485 from'./.internal/castArrayLikeObject.js';
import _0x536157 from'./last.js';
;
function intersectionBy(...arrays) {
    let iteratee = _0x536157(arrays);
    const mapped = _0x45a9c8(arrays, _0x34a485);
    if (iteratee === _0x536157(mapped)) {
        iteratee = undefined;
    } else {
        mapped['pop']();
    }
    return mapped['length'] && mapped[0] === arrays[0] ? _0xd739f6(mapped, iteratee) : [];
}
export default intersectionBy;