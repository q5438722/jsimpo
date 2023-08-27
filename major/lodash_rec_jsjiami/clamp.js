
;
function clamp(_0x34e307, _0x2078ee, _0x4d5ee8) {
    var _0x526e12 = '5|1|4|0|3|2|6'['split']('|'), _0x103593 = 0;
    while (!![]) {
        switch (_0x526e12[_0x103593++]) {
        case '0':
            _0x2078ee = _0x2078ee === _0x2078ee ? _0x2078ee : 0;
            continue;
        case '1':
            _0x2078ee = +_0x2078ee;
            continue;
        case '2':
            if (_0x34e307 === _0x34e307) {
                _0x34e307 = _0x34e307 <= _0x4d5ee8 ? _0x34e307 : _0x4d5ee8;
                _0x34e307 = _0x34e307 >= _0x2078ee ? _0x34e307 : _0x2078ee;
            }
            continue;
        case '3':
            _0x4d5ee8 = _0x4d5ee8 === _0x4d5ee8 ? _0x4d5ee8 : 0;
            continue;
        case '4':
            _0x4d5ee8 = +_0x4d5ee8;
            continue;
        case '5':
            _0x34e307 = +_0x34e307;
            continue;
        case '6':
            return _0x34e307;
        }
        break;
    }
}
export default clamp;