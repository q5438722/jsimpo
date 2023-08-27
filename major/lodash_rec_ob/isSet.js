import _0x2931e2 from './.internal/getTag.js';
import _0x179b8d from './.internal/nodeTypes.js';
import _0xa04323 from './isObjectLike.js';
const nodeIsSet = _0x179b8d && _0x179b8d['isSet'], isSet = nodeIsSet ? _0x5d5fe9 => nodeIsSet(_0x5d5fe9) : _0x372dc7 => _0xa04323(_0x372dc7) && _0x2931e2(_0x372dc7) == '[object Set]';
export default isSet;