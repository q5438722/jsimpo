import _0x451538 from'./.internal/getTag.js';
import _0x21e6c1 from'./isObjectLike.js';
;
function isBoolean(value) {
    return value === !![] || value === ![] || _0x21e6c1(value) && _0x451538(value) == '[object Boolean]';
}
export default isBoolean;