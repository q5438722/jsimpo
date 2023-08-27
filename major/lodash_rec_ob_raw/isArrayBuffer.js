import _0x4e64bb from './.internal/getTag.js';
import _0x2a9017 from './isObjectLike.js';
import _0x8267cc from './.internal/nodeTypes.js';
const nodeIsArrayBuffer = _0x8267cc && _0x8267cc['isArrayBuffer'], isArrayBuffer = nodeIsArrayBuffer ? _0x1936a1 => nodeIsArrayBuffer(_0x1936a1) : _0x2118fb => _0x2a9017(_0x2118fb) && _0x4e64bb(_0x2118fb) == '[object ArrayBuffer]';
export default isArrayBuffer;