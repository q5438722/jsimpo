import _0x43b2fa from'./.internal/copyArray.js';
import _0x2bcc30 from'./slice.js';
;
function sampleSize(array, n) {
    n = n == null ? 1 : n;
    const length = array == null ? 0 : array['length'];
    if (!length || n < 1) {
        return [];
    }
    n = n > length ? length : n;
    let index = -1;
    const lastIndex = length - 1;
    const result = _0x43b2fa(array);
    while (++index < n) {
        const rand = index + Math['floor'](Math['random']() * (lastIndex - index + 1));
        const value = result[rand];
        result[rand] = result[index];
        result[index] = value;
    }
    return _0x2bcc30(result, 0, n);
}
export default sampleSize;