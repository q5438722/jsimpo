import _0x8149d5 from'./.internal/getTag.js';
import _0x44e53e from'./isObjectLike.js';
;
function isNumber(value) {
    return typeof value === 'number' || _0x44e53e(value) && _0x8149d5(value) == '[object Number]';
}
export default isNumber;