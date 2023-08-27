import _0x4fb617 from'./.internal/getTag.js';
import _0x9b1fc5 from'./isObjectLike.js';
;
function isArguments(value) {
    return _0x9b1fc5(value) && _0x4fb617(value) == '[object Arguments]';
}
export default isArguments;