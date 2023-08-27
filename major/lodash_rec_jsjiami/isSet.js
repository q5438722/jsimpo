import _0x4b81bb from'./.internal/getTag.js';
import _0x4d74cb from'./.internal/nodeTypes.js';
import _0x32719f from'./isObjectLike.js';
;
const nodeIsSet = _0x4d74cb && _0x4d74cb['isSet'];
const isSet = nodeIsSet ? value => nodeIsSet(value) : value => _0x32719f(value) && _0x4b81bb(value) == '[object Set]';
export default isSet;