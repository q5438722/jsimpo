import _0x35fcf3 from './unzipWith.js';
function zipWith(..._0x2c56cc) {
    const _0x4d047a = _0x2c56cc['length'];
    let _0x5296a6 = _0x4d047a > 1 ? _0x2c56cc[_0x4d047a - 1] : undefined;
    return _0x5296a6 = typeof _0x5296a6 === 'function' ? (_0x2c56cc['pop'](), _0x5296a6) : undefined, _0x35fcf3(_0x2c56cc, _0x5296a6);
}
export default zipWith;