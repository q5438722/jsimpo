import _0x36663b from './.internal/getTag.js';
import _0x7e1ea7 from './.internal/nodeTypes.js';
import _0x5d5fe7 from './isObjectLike.js';
const reTypedTag = /^\[object (?:Float(?:32|64)|(?:Int|Uint)(?:8|16|32)|Uint8Clamped)Array\]$/, nodeIsTypedArray = _0x7e1ea7 && _0x7e1ea7['isTypedArray'], isTypedArray = nodeIsTypedArray ? _0x164efd => nodeIsTypedArray(_0x164efd) : _0x5c4fb8 => _0x5d5fe7(_0x5c4fb8) && reTypedTag['test'](_0x36663b(_0x5c4fb8));
export default isTypedArray;