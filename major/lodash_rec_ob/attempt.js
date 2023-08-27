import _0x72511c from './isError.js';
function attempt(_0xb9ac4e, ..._0x22b1da) {
    try {
        return _0xb9ac4e(..._0x22b1da);
    } catch (_0x530151) {
        return _0x72511c(_0x530151) ? _0x530151 : new Error(_0x530151);
    }
}
export default attempt;