var _0x4f06 = [
    '244941lcxaLA',
    '1742035TNlUhC',
    '1KNUhUP',
    'replace',
    '1044072PxWcFS',
    '939020DqdLJs',
    '5mxYRvT',
    '80213rDfDqh',
    '432779vHjfun',
    '574692cerfpP',
    '1VJCRTq'
];
(function (_0x430339, _0x5b501f) {
    var _0x5a6410 = _0x1183;
    while (!![]) {
        try {
            var _0x3e9732 = -parseInt(_0x5a6410(0x1d4)) + -parseInt(_0x5a6410(0x1d5)) + parseInt(_0x5a6410(0x1d6)) * parseInt(_0x5a6410(0x1d7)) + -parseInt(_0x5a6410(0x1d8)) + parseInt(_0x5a6410(0x1d9)) + -parseInt(_0x5a6410(0x1da)) * -parseInt(_0x5a6410(0x1db)) + parseInt(_0x5a6410(0x1dc)) * parseInt(_0x5a6410(0x1dd));
            if (_0x3e9732 === _0x5b501f)
                break;
            else
                _0x430339['push'](_0x430339['shift']());
        } catch (_0x1cfabd) {
            _0x430339['push'](_0x430339['shift']());
        }
    }
}(_0x4f06, 0x8582e));
function _0x1183(_0x36c057, _0x4716e3) {
    return _0x1183 = function (_0x4f0696, _0x11837f) {
        _0x4f0696 = _0x4f0696 - 0x1d4;
        var _0x79287a = _0x4f06[_0x4f0696];
        return _0x79287a;
    }, _0x1183(_0x36c057, _0x4716e3);
}
export default function transformer(_0x7c06a1) {
    var _0x18ad3c = _0x1183;
    return _0x7c06a1['source'][_0x18ad3c(0x1de)](/(theme\.breakpoints|breakpoints)\.width\(['"](.*)['"]\)/gm, '$1.values.$2');
}
