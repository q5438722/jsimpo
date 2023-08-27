import _0x4b81bb from'./.internal/getTag.js';
import _0x4d74cb from'./isObjectLike.js';
import _0x32719f from'./.internal/nodeTypes.js';
;
const nodeIsDate = _0x32719f && _0x32719f['isDate'];
const isDate = nodeIsDate ? value => nodeIsDate(value) : value => _0x4d74cb(value) && _0x4b81bb(value) == '[object Date]';
export default isDate;