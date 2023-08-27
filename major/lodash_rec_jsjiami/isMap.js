import _0x1f02f3 from'./.internal/getTag.js';
import _0x3e0d1a from'./isObjectLike.js';
import _0x2f2b19 from'./.internal/nodeTypes.js';
;
const nodeIsMap = _0x2f2b19 && _0x2f2b19['isMap'];
const isMap = nodeIsMap ? value => nodeIsMap(value) : value => _0x3e0d1a(value) && _0x1f02f3(value) == '[object Map]';
export default isMap;