import _0x115e20 from'./.internal/getTag.js';
import _0x2f8ba1 from'./.internal/nodeTypes.js';
import _0x27056c from'./isObjectLike.js';
;
const reTypedTag = /^\[object (?:Float(?:32|64)|(?:Int|Uint)(?:8|16|32)|Uint8Clamped)Array\]$/;
const nodeIsTypedArray = _0x2f8ba1 && _0x2f8ba1['isTypedArray'];
const isTypedArray = nodeIsTypedArray ? value => nodeIsTypedArray(value) : value => _0x27056c(value) && reTypedTag['test'](_0x115e20(value));
export default isTypedArray;