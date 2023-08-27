import _0x2bd32d from'./.internal/getTag.js';
import _0x98e7f0 from'./isObjectLike.js';
import _0x2f7bb6 from'./.internal/nodeTypes.js';
;
const nodeIsArrayBuffer = _0x2f7bb6 && _0x2f7bb6['isArrayBuffer'];
const isArrayBuffer = nodeIsArrayBuffer ? value => nodeIsArrayBuffer(value) : value => _0x98e7f0(value) && _0x2bd32d(value) == '[object ArrayBuffer]';
export default isArrayBuffer;