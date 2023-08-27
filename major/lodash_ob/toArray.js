const _0x5eaeb0 = _0x49ae;
(function (_0x5a684e, _0x3fd904) {
    const _0x2bed4f = _0x49ae, _0x5dbb03 = _0x5a684e();
    while (!![]) {
        try {
            const _0x42e459 = parseInt(_0x2bed4f(0x1b3)) / 0x1 + -parseInt(_0x2bed4f(0x1b4)) / 0x2 + -parseInt(_0x2bed4f(0x1b5)) / 0x3 * (parseInt(_0x2bed4f(0x1b6)) / 0x4) + -parseInt(_0x2bed4f(0x1b7)) / 0x5 * (parseInt(_0x2bed4f(0x1b8)) / 0x6) + -parseInt(_0x2bed4f(0x1b9)) / 0x7 + parseInt(_0x2bed4f(0x1ba)) / 0x8 * (-parseInt(_0x2bed4f(0x1bb)) / 0x9) + parseInt(_0x2bed4f(0x1bc)) / 0xa;
            if (_0x42e459 === _0x3fd904)
                break;
            else
                _0x5dbb03['push'](_0x5dbb03['shift']());
        } catch (_0x4d5588) {
            _0x5dbb03['push'](_0x5dbb03['shift']());
        }
    }
}(_0x36bf, 0xa5963));
import _0x2d9057 from './.internal/copyArray.js';
import _0x377f39 from './.internal/getTag.js';
function _0x49ae(_0x4b15f5, _0x2728c5) {
    const _0x36bf44 = _0x36bf();
    return _0x49ae = function (_0x49ae8a, _0x2b9d82) {
        _0x49ae8a = _0x49ae8a - 0x1b3;
        let _0x48f72e = _0x36bf44[_0x49ae8a];
        return _0x48f72e;
    }, _0x49ae(_0x4b15f5, _0x2728c5);
}
function _0x36bf() {
    const _0x1527e4 = [
        'iterator',
        '37499rnwyok',
        '556116wekwfJ',
        '2233971sRKysR',
        '4SMNNNz',
        '3542405cIEppS',
        '6CEdbnh',
        '5676048dQwzxu',
        '8qhQdwg',
        '6703191EZPZtK',
        '39276030wCrumE',
        '[object\x20Map]',
        '[object\x20Set]'
    ];
    _0x36bf = function () {
        return _0x1527e4;
    };
    return _0x36bf();
}
import _0x5d00c1 from './isArrayLike.js';
import _0x132456 from './isString.js';
import _0x26cee8 from './.internal/iteratorToArray.js';
import _0x54599f from './.internal/mapToArray.js';
import _0x1647bd from './.internal/setToArray.js';
import _0x1832fe from './.internal/stringToArray.js';
import _0x5255e0 from './values.js';
const mapTag = _0x5eaeb0(0x1bd), setTag = _0x5eaeb0(0x1be), symIterator = Symbol[_0x5eaeb0(0x1bf)];
function toArray(_0x4221f6) {
    if (!_0x4221f6)
        return [];
    if (_0x5d00c1(_0x4221f6))
        return _0x132456(_0x4221f6) ? _0x1832fe(_0x4221f6) : _0x2d9057(_0x4221f6);
    if (symIterator && _0x4221f6[symIterator])
        return _0x26cee8(_0x4221f6[symIterator]());
    const _0x12f2ec = _0x377f39(_0x4221f6), _0x1e4123 = _0x12f2ec == mapTag ? _0x54599f : _0x12f2ec == setTag ? _0x1647bd : _0x5255e0;
    return _0x1e4123(_0x4221f6);
}
export default toArray;
