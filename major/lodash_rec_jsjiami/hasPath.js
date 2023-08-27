import _0x222c6c from'./.internal/castPath.js';
import _0x260e08 from'./isArguments.js';
import _0x4197a3 from'./.internal/isIndex.js';
import _0x348741 from'./isLength.js';
import _0x4af9b1 from'./.internal/toKey.js';
;
const hasOwnProperty = Object['prototype']['hasOwnProperty'];
function hasPath(object, path) {
    path = _0x222c6c(path, object);
    let index = -1;
    let {length} = path;
    let result = ![];
    let key;
    while (++index < length) {
        key = _0x4af9b1(path[index]);
        if (!(result = object != null && hasOwnProperty['call'](object, key))) {
            break;
        }
        object = object[key];
    }
    if (result || ++index != length) {
        return result;
    }
    length = object == null ? 0 : object['length'];
    return !!length && _0x348741(length) && _0x4197a3(key, length) && (Array['isArray'](object) || _0x260e08(object));
}
export default hasPath;