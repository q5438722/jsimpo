import _0x1ead27 from'./map.js';
import _0x256c03 from'./.internal/baseIntersection.js';
import _0x53fe2a from'./.internal/castArrayLikeObject.js';
;
function intersection(...arrays) {
    const mapped = _0x1ead27(arrays, _0x53fe2a);
    return mapped['length'] && mapped[0] === arrays[0] ? _0x256c03(mapped) : [];
}
export default intersection;