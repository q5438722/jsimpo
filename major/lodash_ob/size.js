function _0x3dea() {
    const _0x55470a = [
        '4881969qiEOQD',
        '10LaEdGC',
        '8801507zOKSMp',
        '[object\x20Map]',
        'length',
        'size',
        'keys',
        '659989dCnvHN',
        '2031646pyhPON',
        '566004YkpMuL',
        '24tmLjDw',
        '135jkqBZS',
        '18324ALebcg',
        '14aLxfXp',
        '1518416lssuwJ'
    ];
    _0x3dea = function () {
        return _0x55470a;
    };
    return _0x3dea();
}
function _0x12a8(_0x246270, _0x559206) {
    const _0x3dea09 = _0x3dea();
    return _0x12a8 = function (_0x12a861, _0x2380b1) {
        _0x12a861 = _0x12a861 - 0xb2;
        let _0x1301af = _0x3dea09[_0x12a861];
        return _0x1301af;
    }, _0x12a8(_0x246270, _0x559206);
}
const _0x395f77 = _0x12a8;
(function (_0x5b05c9, _0x4d3b8d) {
    const _0x219a32 = _0x12a8, _0x50af2d = _0x5b05c9();
    while (!![]) {
        try {
            const _0xf655ca = -parseInt(_0x219a32(0xb2)) / 0x1 + parseInt(_0x219a32(0xb3)) / 0x2 + -parseInt(_0x219a32(0xb4)) / 0x3 * (-parseInt(_0x219a32(0xb5)) / 0x4) + -parseInt(_0x219a32(0xb6)) / 0x5 * (-parseInt(_0x219a32(0xb7)) / 0x6) + -parseInt(_0x219a32(0xb8)) / 0x7 * (-parseInt(_0x219a32(0xb9)) / 0x8) + -parseInt(_0x219a32(0xba)) / 0x9 + -parseInt(_0x219a32(0xbb)) / 0xa * (parseInt(_0x219a32(0xbc)) / 0xb);
            if (_0xf655ca === _0x4d3b8d)
                break;
            else
                _0x50af2d['push'](_0x50af2d['shift']());
        } catch (_0x596628) {
            _0x50af2d['push'](_0x50af2d['shift']());
        }
    }
}(_0x3dea, 0x9445e));
import _0x36673a from './.internal/getTag.js';
import _0x388252 from './isArrayLike.js';
import _0x46519f from './isString.js';
import _0x1aa694 from './.internal/stringSize.js';
const mapTag = _0x395f77(0xbd), setTag = '[object\x20Set]';
function size(_0xacd841) {
    const _0x2b62b0 = _0x395f77;
    if (_0xacd841 == null)
        return 0x0;
    if (_0x388252(_0xacd841))
        return _0x46519f(_0xacd841) ? _0x1aa694(_0xacd841) : _0xacd841[_0x2b62b0(0xbe)];
    const _0x292a14 = _0x36673a(_0xacd841);
    if (_0x292a14 == mapTag || _0x292a14 == setTag)
        return _0xacd841[_0x2b62b0(0xbf)];
    return Object[_0x2b62b0(0xc0)](_0xacd841)[_0x2b62b0(0xbe)];
}
export default size;