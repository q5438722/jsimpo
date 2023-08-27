import _0x20bf48 from './.internal/getTag.js';
import _0x3f9ac7 from './isObjectLike.js';
import _0x886667 from './.internal/nodeTypes.js';
const nodeIsDate = _0x886667 && _0x886667['isDate'], isDate = nodeIsDate ? _0x52b56d => nodeIsDate(_0x52b56d) : _0x583c4a => _0x3f9ac7(_0x583c4a) && _0x20bf48(_0x583c4a) == '[object Date]';
export default isDate;