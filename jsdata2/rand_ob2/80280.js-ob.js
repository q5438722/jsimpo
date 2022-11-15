const _0x32b9 = [
    '1pasfEY',
    '222231fDGwRj',
    '14aWKbye',
    '48799pIbdoG',
    '622827EhpRVR',
    '527013EZMsHW',
    'create',
    '548542eMDVug',
    '2CUSCjb',
    '1642767GDVfca',
    '64lezPps',
    '3758nPHDJD'
];
function _0x5de3(_0x5b1b4e, _0x1282df) {
    return _0x5de3 = function (_0x32b9e6, _0x5de318) {
        _0x32b9e6 = _0x32b9e6 - 0x112;
        let _0x2f611a = _0x32b9[_0x32b9e6];
        return _0x2f611a;
    }, _0x5de3(_0x5b1b4e, _0x1282df);
}
(function (_0x4d8bb9, _0x12b980) {
    const _0x5eea3b = _0x5de3;
    while (!![]) {
        try {
            const _0x2768b1 = -parseInt(_0x5eea3b(0x112)) * -parseInt(_0x5eea3b(0x113)) + -parseInt(_0x5eea3b(0x114)) + -parseInt(_0x5eea3b(0x115)) * parseInt(_0x5eea3b(0x116)) + parseInt(_0x5eea3b(0x117)) * -parseInt(_0x5eea3b(0x118)) + parseInt(_0x5eea3b(0x119)) * parseInt(_0x5eea3b(0x11a)) + parseInt(_0x5eea3b(0x11b)) + parseInt(_0x5eea3b(0x11c));
            if (_0x2768b1 === _0x12b980)
                break;
            else
                _0x4d8bb9['push'](_0x4d8bb9['shift']());
        } catch (_0x695e58) {
            _0x4d8bb9['push'](_0x4d8bb9['shift']());
        }
    }
}(_0x32b9, 0xc9518));
import { looseEqual } from 'uni-shared';
function setResult(_0x5b4063, _0x57aef7, _0x54ae91) {
    _0x5b4063[_0x57aef7] = _0x54ae91;
}
function diffElmData(_0xaeeccc, _0x10982a) {
    const _0x4e3f3b = _0x5de3;
    let _0x479f21, _0x3712ea, _0x7dd550, _0x52d4cb;
    for (_0x3712ea in _0xaeeccc) {
        _0x7dd550 = _0xaeeccc[_0x3712ea], _0x52d4cb = _0x10982a[_0x3712ea], !looseEqual(_0x52d4cb, _0x7dd550) && setResult(_0x479f21 || (_0x479f21 = Object[_0x4e3f3b(0x11d)](null)), _0x3712ea, _0x7dd550);
    }
    return _0x479f21;
}
export function diff(_0x46fc88, _0x2d2116, _0x13cb5a) {
    let _0x42ed30, _0x472d35, _0x36ee6e;
    for (_0x42ed30 in _0x46fc88) {
        _0x472d35 = _0x46fc88[_0x42ed30], _0x36ee6e = _0x2d2116[_0x42ed30];
        if (!_0x36ee6e) {
            setResult(_0x13cb5a, _0x42ed30, _0x472d35);
            continue;
        }
        const _0x47aece = diffElmData(_0x472d35, _0x36ee6e);
        _0x47aece && setResult(_0x13cb5a, _0x42ed30, _0x47aece);
    }
    return _0x13cb5a;
}
