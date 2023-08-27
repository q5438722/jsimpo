import _0x5b2100 from './isObject.js';
const reRegExpChar = /[\\^$.*+?()[\]{}|]/g, reIsNative = RegExp('^' + Function['prototype']['toString']['call'](Object['prototype']['hasOwnProperty'])['replace'](reRegExpChar, '\\$&')['replace'](/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$');
function isNative(_0x4ece30) {
    return _0x5b2100(_0x4ece30) && reIsNative['test'](_0x4ece30);
}
export default isNative;