const _0x4df779 = _0x4cad;
function _0x2c53() {
    const _0x3e6e28 = [
        '9uaFquY',
        '839720KoXjLD',
        '393605OHOPNi',
        '30iZsjqT',
        '92295PCpjTb',
        '344yrTBTD',
        '540ZpYbjW',
        '41300aYQnJD',
        '1023ITpUJf',
        '178452pBekWk',
        'prototype',
        'isArray',
        'string',
        'splice',
        'function',
        'length',
        '[object\x20Set]',
        'size',
        'keys',
        '257829nFynlb',
        '1255382upXtlC'
    ];
    _0x2c53 = function () {
        return _0x3e6e28;
    };
    return _0x2c53();
}
(function (_0x577b8b, _0xc83d52) {
    const _0x11bcdb = _0x4cad, _0x17f052 = _0x577b8b();
    while (!![]) {
        try {
            const _0x1e5561 = -parseInt(_0x11bcdb(0xa5)) / 0x1 + parseInt(_0x11bcdb(0xa6)) / 0x2 + -parseInt(_0x11bcdb(0xa7)) / 0x3 * (-parseInt(_0x11bcdb(0xa8)) / 0x4) + parseInt(_0x11bcdb(0xa9)) / 0x5 * (parseInt(_0x11bcdb(0xaa)) / 0x6) + parseInt(_0x11bcdb(0xab)) / 0x7 * (parseInt(_0x11bcdb(0xac)) / 0x8) + parseInt(_0x11bcdb(0xad)) / 0x9 * (-parseInt(_0x11bcdb(0xae)) / 0xa) + -parseInt(_0x11bcdb(0xaf)) / 0xb * (parseInt(_0x11bcdb(0xb0)) / 0xc);
            if (_0x1e5561 === _0xc83d52)
                break;
            else
                _0x17f052['push'](_0x17f052['shift']());
        } catch (_0x474ee1) {
            _0x17f052['push'](_0x17f052['shift']());
        }
    }
}(_0x2c53, 0x506c1));
import _0x655be from './.internal/getTag.js';
import _0x3554fa from './isArguments.js';
import _0x3e25cf from './isArrayLike.js';
import _0x70ff8a from './isBuffer.js';
function _0x4cad(_0x358649, _0x14d6c4) {
    const _0x2c537d = _0x2c53();
    return _0x4cad = function (_0x4cadad, _0x543b9) {
        _0x4cadad = _0x4cadad - 0xa5;
        let _0x101420 = _0x2c537d[_0x4cadad];
        return _0x101420;
    }, _0x4cad(_0x358649, _0x14d6c4);
}
import _0x563c14 from './.internal/isPrototype.js';
import _0x478205 from './isTypedArray.js';
const hasOwnProperty = Object[_0x4df779(0xb1)]['hasOwnProperty'];
function isEmpty(_0x27902d) {
    const _0x5405db = _0x4df779;
    if (_0x27902d == null)
        return !![];
    if (_0x3e25cf(_0x27902d) && (Array[_0x5405db(0xb2)](_0x27902d) || typeof _0x27902d === _0x5405db(0xb3) || typeof _0x27902d[_0x5405db(0xb4)] === _0x5405db(0xb5) || _0x70ff8a(_0x27902d) || _0x478205(_0x27902d) || _0x3554fa(_0x27902d)))
        return !_0x27902d[_0x5405db(0xb6)];
    const _0x8613ec = _0x655be(_0x27902d);
    if (_0x8613ec == '[object\x20Map]' || _0x8613ec == _0x5405db(0xb7))
        return !_0x27902d[_0x5405db(0xb8)];
    if (_0x563c14(_0x27902d))
        return !Object[_0x5405db(0xb9)](_0x27902d)[_0x5405db(0xb6)];
    for (const _0xd04117 in _0x27902d) {
        if (hasOwnProperty['call'](_0x27902d, _0xd04117))
            return ![];
    }
    return !![];
}
export default isEmpty;
