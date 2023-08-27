import _0x1aa119 from'./unzipWith.js';
;
function zipWith(..._0x333426) {
    const _0x342fe5 = _0x333426['length'];
    let _0x3504eb = _0x342fe5 > 1 ? _0x333426[_0x342fe5 - 1] : undefined;
    _0x3504eb = typeof _0x3504eb === 'function' ? (_0x333426['pop'](), _0x3504eb) : undefined;
    return _0x1aa119(_0x333426, _0x3504eb);
}
export default zipWith;