import _0x18fdce from './.internal/baseToString.js';
import _0xb162fb from './.internal/castSlice.js';
import _0x1d8f5f from './.internal/hasUnicode.js';
import _0x5f07da from './isObject.js';
import _0x47d7a7 from './isRegExp.js';
import _0x1b93ef from './.internal/stringSize.js';
import _0x238ed4 from './.internal/stringToArray.js';
import _0x4f1e7a from './toString.js';
const DEFAULT_TRUNC_LENGTH = 30, DEFAULT_TRUNC_OMISSION = '...', reFlags = /\w*$/;
function truncate(_0x1e2307, _0x407b5b) {
    let _0x974490, _0x5d9150 = DEFAULT_TRUNC_LENGTH, _0x3339e3 = DEFAULT_TRUNC_OMISSION;
    _0x5f07da(_0x407b5b) && (_0x974490 = 'separator' in _0x407b5b ? _0x407b5b['separator'] : _0x974490, _0x5d9150 = 'length' in _0x407b5b ? _0x407b5b['length'] : _0x5d9150, _0x3339e3 = 'omission' in _0x407b5b ? _0x18fdce(_0x407b5b['omission']) : _0x3339e3);
    _0x1e2307 = _0x4f1e7a(_0x1e2307);
    let _0x4cba45, _0x2c8ed4 = _0x1e2307['length'];
    _0x1d8f5f(_0x1e2307) && (_0x4cba45 = _0x238ed4(_0x1e2307), _0x2c8ed4 = _0x4cba45['length']);
    if (_0x5d9150 >= _0x2c8ed4)
        return _0x1e2307;
    let _0x4a4160 = _0x5d9150 - _0x1b93ef(_0x3339e3);
    if (_0x4a4160 < 1)
        return _0x3339e3;
    let _0x3fa0e6 = _0x4cba45 ? _0xb162fb(_0x4cba45, 0, _0x4a4160)['join']('') : _0x1e2307['slice'](0, _0x4a4160);
    if (_0x974490 === undefined)
        return _0x3fa0e6 + _0x3339e3;
    _0x4cba45 && (_0x4a4160 += _0x3fa0e6['length'] - _0x4a4160);
    if (_0x47d7a7(_0x974490)) {
        if (_0x1e2307['slice'](_0x4a4160)['search'](_0x974490)) {
            let _0x521c71, _0x1ee791;
            const _0x424379 = _0x3fa0e6;
            !_0x974490['global'] && (_0x974490 = RegExp(_0x974490['source'], (reFlags['exec'](_0x974490) || '') + 'g'));
            _0x974490['lastIndex'] = 0;
            while (_0x521c71 = _0x974490['exec'](_0x424379)) {
                _0x1ee791 = _0x521c71['index'];
            }
            _0x3fa0e6 = _0x3fa0e6['slice'](0, _0x1ee791 === undefined ? _0x4a4160 : _0x1ee791);
        }
    } else {
        if (_0x1e2307['indexOf'](_0x18fdce(_0x974490), _0x4a4160) != _0x4a4160) {
            const _0x5ebca3 = _0x3fa0e6['lastIndexOf'](_0x974490);
            _0x5ebca3 > -1 && (_0x3fa0e6 = _0x3fa0e6['slice'](0, _0x5ebca3));
        }
    }
    return _0x3fa0e6 + _0x3339e3;
}
export default truncate;