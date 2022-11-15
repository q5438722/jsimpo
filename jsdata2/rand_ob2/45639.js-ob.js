var _0x5226 = [
    '4Jdohoh',
    '54938rBredd',
    'map',
    'length',
    'apply',
    '197523nqgDSy',
    '68PLkSld',
    '4766VNixoR',
    '273274FgghkL',
    '114035sCADBe',
    '189696kCyMZx',
    '100601VWQlKs',
    '3NyfcqX'
];
(function (_0x3d76e2, _0x86da11) {
    var _0x1fa9b8 = _0x2513;
    while (!![]) {
        try {
            var _0x420a2d = -parseInt(_0x1fa9b8(0x15a)) + -parseInt(_0x1fa9b8(0x15b)) * -parseInt(_0x1fa9b8(0x15c)) + parseInt(_0x1fa9b8(0x15d)) + -parseInt(_0x1fa9b8(0x15e)) + -parseInt(_0x1fa9b8(0x15f)) + -parseInt(_0x1fa9b8(0x160)) * -parseInt(_0x1fa9b8(0x161)) + parseInt(_0x1fa9b8(0x162)) * -parseInt(_0x1fa9b8(0x163));
            if (_0x420a2d === _0x86da11)
                break;
            else
                _0x3d76e2['push'](_0x3d76e2['shift']());
        } catch (_0x41739a) {
            _0x3d76e2['push'](_0x3d76e2['shift']());
        }
    }
}(_0x5226, 0x2b7ef));
import _0x320843 from './reduce';
import _0x346979 from './internal/wrapAsync';
import {
    promiseCallback,
    PROMISE_SYMBOL
} from './internal/promiseCallback';
function _0x2513(_0x45dd20, _0x81164e) {
    return _0x2513 = function (_0x522612, _0x251397) {
        _0x522612 = _0x522612 - 0x15a;
        var _0x5ad0d3 = _0x5226[_0x522612];
        return _0x5ad0d3;
    }, _0x2513(_0x45dd20, _0x81164e);
}
export default function seq(..._0x1b76d1) {
    var _0x5789d8 = _0x2513, _0x4579f0 = _0x1b76d1[_0x5789d8(0x164)](_0x346979);
    return function (..._0x50fcfd) {
        var _0x382462 = _0x5789d8, _0x42455a = this, _0xa2366c = _0x50fcfd[_0x50fcfd[_0x382462(0x165)] - 0x1];
        return typeof _0xa2366c == 'function' ? _0x50fcfd['pop']() : _0xa2366c = promiseCallback(), _0x320843(_0x4579f0, _0x50fcfd, (_0xb013b0, _0x588889, _0x574e1b) => {
            var _0x288f0d = _0x382462;
            _0x588889[_0x288f0d(0x166)](_0x42455a, _0xb013b0['concat']((_0x3ca80c, ..._0x45f4f8) => {
                _0x574e1b(_0x3ca80c, _0x45f4f8);
            }));
        }, (_0x2f4748, _0x37d64d) => _0xa2366c(_0x2f4748, ..._0x37d64d)), _0xa2366c[PROMISE_SYMBOL];
    };
}
