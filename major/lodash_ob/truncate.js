const _0x1233e6 = _0x1d54;
(function (_0x974e93, _0x5c0d18) {
    const _0x1d766a = _0x1d54, _0x14adaa = _0x974e93();
    while (!![]) {
        try {
            const _0x11b513 = parseInt(_0x1d766a(0x10d)) / 0x1 * (-parseInt(_0x1d766a(0x10e)) / 0x2) + -parseInt(_0x1d766a(0x10f)) / 0x3 * (parseInt(_0x1d766a(0x110)) / 0x4) + -parseInt(_0x1d766a(0x111)) / 0x5 + parseInt(_0x1d766a(0x112)) / 0x6 + parseInt(_0x1d766a(0x113)) / 0x7 + parseInt(_0x1d766a(0x114)) / 0x8 * (-parseInt(_0x1d766a(0x115)) / 0x9) + -parseInt(_0x1d766a(0x116)) / 0xa * (-parseInt(_0x1d766a(0x117)) / 0xb);
            if (_0x11b513 === _0x5c0d18)
                break;
            else
                _0x14adaa['push'](_0x14adaa['shift']());
        } catch (_0x4f5dfb) {
            _0x14adaa['push'](_0x14adaa['shift']());
        }
    }
}(_0x47c8, 0x3a825));
import _0x18fdce from './.internal/baseToString.js';
import _0xb162fb from './.internal/castSlice.js';
import _0x1d8f5f from './.internal/hasUnicode.js';
import _0x5f07da from './isObject.js';
import _0x47d7a7 from './isRegExp.js';
import _0x1b93ef from './.internal/stringSize.js';
import _0x238ed4 from './.internal/stringToArray.js';
function _0x1d54(_0x4c8fbd, _0x3512d2) {
    const _0x47c81f = _0x47c8();
    return _0x1d54 = function (_0x1d545a, _0x1eef80) {
        _0x1d545a = _0x1d545a - 0x10d;
        let _0x4806d9 = _0x47c81f[_0x1d545a];
        return _0x4806d9;
    }, _0x1d54(_0x4c8fbd, _0x3512d2);
}
import _0x4f1e7a from './toString.js';
function _0x47c8() {
    const _0x1f65e7 = [
        'source',
        'exec',
        'lastIndex',
        'indexOf',
        'lastIndexOf',
        '13CjzytM',
        '12222VoLpCJ',
        '336OMHSha',
        '740XQUurB',
        '331365oRJXVe',
        '1844694isYqGP',
        '795018couFmX',
        '910728KxfXtR',
        '36SXiesK',
        '1060vVAjEM',
        '45705HeltVI',
        '...',
        'separator',
        'length',
        'omission',
        'slice',
        'global'
    ];
    _0x47c8 = function () {
        return _0x1f65e7;
    };
    return _0x47c8();
}
const DEFAULT_TRUNC_LENGTH = 0x1e, DEFAULT_TRUNC_OMISSION = _0x1233e6(0x118), reFlags = /\w*$/;
function truncate(_0x1e2307, _0x407b5b) {
    const _0x301507 = _0x1233e6;
    let _0x974490, _0x5d9150 = DEFAULT_TRUNC_LENGTH, _0x3339e3 = DEFAULT_TRUNC_OMISSION;
    _0x5f07da(_0x407b5b) && (_0x974490 = _0x301507(0x119) in _0x407b5b ? _0x407b5b[_0x301507(0x119)] : _0x974490, _0x5d9150 = _0x301507(0x11a) in _0x407b5b ? _0x407b5b[_0x301507(0x11a)] : _0x5d9150, _0x3339e3 = _0x301507(0x11b) in _0x407b5b ? _0x18fdce(_0x407b5b[_0x301507(0x11b)]) : _0x3339e3);
    _0x1e2307 = _0x4f1e7a(_0x1e2307);
    let _0x4cba45, _0x2c8ed4 = _0x1e2307[_0x301507(0x11a)];
    _0x1d8f5f(_0x1e2307) && (_0x4cba45 = _0x238ed4(_0x1e2307), _0x2c8ed4 = _0x4cba45[_0x301507(0x11a)]);
    if (_0x5d9150 >= _0x2c8ed4)
        return _0x1e2307;
    let _0x4a4160 = _0x5d9150 - _0x1b93ef(_0x3339e3);
    if (_0x4a4160 < 0x1)
        return _0x3339e3;
    let _0x3fa0e6 = _0x4cba45 ? _0xb162fb(_0x4cba45, 0x0, _0x4a4160)['join']('') : _0x1e2307[_0x301507(0x11c)](0x0, _0x4a4160);
    if (_0x974490 === undefined)
        return _0x3fa0e6 + _0x3339e3;
    _0x4cba45 && (_0x4a4160 += _0x3fa0e6['length'] - _0x4a4160);
    if (_0x47d7a7(_0x974490)) {
        if (_0x1e2307[_0x301507(0x11c)](_0x4a4160)['search'](_0x974490)) {
            let _0x521c71, _0x1ee791;
            const _0x424379 = _0x3fa0e6;
            !_0x974490[_0x301507(0x11d)] && (_0x974490 = RegExp(_0x974490[_0x301507(0x11e)], (reFlags[_0x301507(0x11f)](_0x974490) || '') + 'g'));
            _0x974490[_0x301507(0x120)] = 0x0;
            while (_0x521c71 = _0x974490[_0x301507(0x11f)](_0x424379)) {
                _0x1ee791 = _0x521c71['index'];
            }
            _0x3fa0e6 = _0x3fa0e6[_0x301507(0x11c)](0x0, _0x1ee791 === undefined ? _0x4a4160 : _0x1ee791);
        }
    } else {
        if (_0x1e2307[_0x301507(0x121)](_0x18fdce(_0x974490), _0x4a4160) != _0x4a4160) {
            const _0x5ebca3 = _0x3fa0e6[_0x301507(0x122)](_0x974490);
            _0x5ebca3 > -0x1 && (_0x3fa0e6 = _0x3fa0e6[_0x301507(0x11c)](0x0, _0x5ebca3));
        }
    }
    return _0x3fa0e6 + _0x3339e3;
}
export default truncate;