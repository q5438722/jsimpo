import _0x3625da from'./isError.js';
;
function attempt(_0x3aa0e7, ..._0x5bc2f0) {
    try {
        return _0x3aa0e7(..._0x5bc2f0);
    } catch (_0x11cd66) {
        return _0x3625da(_0x11cd66) ? _0x11cd66 : new Error(_0x11cd66);
    }
}
export default attempt;