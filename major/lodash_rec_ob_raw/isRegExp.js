import _0x310869 from './.internal/getTag.js';
import _0x19179f from './isObjectLike.js';
import _0x5eaa30 from './.internal/nodeTypes.js';
const nodeIsRegExp = _0x5eaa30 && _0x5eaa30['isRegExp'], isRegExp = nodeIsRegExp ? _0x3efdec => nodeIsRegExp(_0x3efdec) : _0x34de52 => _0x19179f(_0x34de52) && _0x310869(_0x34de52) == '[object RegExp]';
export default isRegExp;