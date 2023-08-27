import _0x57bece from './.internal/createPadding.js';
import _0x35175a from './.internal/stringSize.js';
function padEnd(_0xff64cd, _0x9486bd, _0x228985) {
    const _0x4e57ae = _0x9486bd ? _0x35175a(_0xff64cd) : 0;
    return _0x9486bd && _0x4e57ae < _0x9486bd ? _0xff64cd + _0x57bece(_0x9486bd - _0x4e57ae, _0x228985) : _0xff64cd || '';
}
export default padEnd;