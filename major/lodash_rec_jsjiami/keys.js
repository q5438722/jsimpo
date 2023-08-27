import _0x2903b1 from'./.internal/arrayLikeKeys.js';
import _0x2fc4ea from'./isArrayLike.js';
;
function keys(object) {
    return _0x2fc4ea(object) ? _0x2903b1(object) : Object['keys'](Object(object));
}
export default keys;