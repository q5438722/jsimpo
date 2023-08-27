import _0x471e90 from'./isObject.js';
;
const reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
const reIsNative = RegExp('^' + Function['prototype']['toString']['call'](Object['prototype']['hasOwnProperty'])['replace'](reRegExpChar, '\\$&')['replace'](/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$');
function isNative(_0x5aaf7c) {
    return _0x471e90(_0x5aaf7c) && reIsNative['test'](_0x5aaf7c);
}
export default isNative;