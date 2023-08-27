import _0x287642 from './.internal/castSlice.js';
import _0x5f27b9 from './.internal/charsEndIndex.js';
import _0x1cd866 from './.internal/stringToArray.js';
const methodName = ''['trimRight'] ? 'trimRight' : 'trimEnd';
function trimEnd(_0x3f06fd, _0x4d894e) {
    if (_0x3f06fd && _0x4d894e === undefined)
        return _0x3f06fd[methodName]();
    if (!_0x3f06fd || !_0x4d894e)
        return _0x3f06fd || '';
    const _0x2d7b1a = _0x1cd866(_0x3f06fd), _0x4dc370 = _0x5f27b9(_0x2d7b1a, _0x1cd866(_0x4d894e)) + 1;
    return _0x287642(_0x2d7b1a, 0, _0x4dc370)['join']('');
}
export default trimEnd;