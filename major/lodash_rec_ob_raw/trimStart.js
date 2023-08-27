import _0x5a76a4 from './.internal/castSlice.js';
import _0x15c0c3 from './.internal/charsStartIndex.js';
import _0x2b0fc0 from './.internal/stringToArray.js';
const methodName = ''['trimLeft'] ? 'trimLeft' : 'trimStart';
function trimStart(_0x4d62b8, _0x41a6fa) {
    if (_0x4d62b8 && _0x41a6fa === undefined)
        return _0x4d62b8[methodName]();
    if (!_0x4d62b8 || !_0x41a6fa)
        return _0x4d62b8 || '';
    const _0x45efd6 = _0x2b0fc0(_0x4d62b8), _0x5ca147 = _0x15c0c3(_0x45efd6, _0x2b0fc0(_0x41a6fa));
    return _0x5a76a4(_0x45efd6, _0x5ca147)['join']('');
}
export default trimStart;