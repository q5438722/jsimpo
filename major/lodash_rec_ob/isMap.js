import _0x5c5c03 from './.internal/getTag.js';
import _0x5ea80b from './isObjectLike.js';
import _0x522f15 from './.internal/nodeTypes.js';
const nodeIsMap = _0x522f15 && _0x522f15['isMap'], isMap = nodeIsMap ? _0x3d4f23 => nodeIsMap(_0x3d4f23) : _0x1dc633 => _0x5ea80b(_0x1dc633) && _0x5c5c03(_0x1dc633) == '[object Map]';
export default isMap;