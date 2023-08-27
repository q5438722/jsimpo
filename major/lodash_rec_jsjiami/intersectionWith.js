import _0x2f0211 from'./map.js';
import _0x633bb3 from'./.internal/baseIntersection.js';
import _0x59b159 from'./.internal/castArrayLikeObject.js';
import _0x2a5d48 from'./last.js';
;
function intersectionWith(...arrays) {
    let comparator = _0x2a5d48(arrays);
    const mapped = _0x2f0211(arrays, _0x59b159);
    comparator = typeof comparator === 'function' ? comparator : undefined;
    if (comparator) {
        mapped['pop']();
    }
    return mapped['length'] && mapped[0] === arrays[0] ? _0x633bb3(mapped, undefined, comparator) : [];
}
export default intersectionWith;