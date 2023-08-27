import _0xc860ba from'./.internal/getTag.js';
import _0x2d14cb from'./isObjectLike.js';
import _0x11c540 from'./.internal/nodeTypes.js';
;
const nodeIsRegExp = _0x11c540 && _0x11c540['isRegExp'];
const isRegExp = nodeIsRegExp ? value => nodeIsRegExp(value) : value => _0x2d14cb(value) && _0xc860ba(value) == '[object RegExp]';
export default isRegExp;