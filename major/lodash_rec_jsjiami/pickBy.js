import _0x3ad54a from'./map.js';
import _0x4b4a8b from'./.internal/basePickBy.js';
import _0x5dd186 from'./.internal/getAllKeysIn.js';
;
function pickBy(object, predicate) {
    if (object == null) {
        return {};
    }
    const props = _0x3ad54a(_0x5dd186(object), prop => [prop]);
    return _0x4b4a8b(object, props, (value, path) => predicate(value, path[0]));
}
export default pickBy;