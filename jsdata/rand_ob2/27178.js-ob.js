var _0x5e1e = [
    '532118LGcCsV',
    '1048351GFhMcy',
    '8258YhdfXL',
    '36EkDxly',
    '570417kcQRZk',
    '832631HsDbHz',
    'source',
    '269061OqbxSY',
    '71fJTetc',
    '6863dHaWUG'
];
(function (_0x143b43, _0x257195) {
    var _0x3683db = _0x72b5;
    while (!![]) {
        try {
            var _0x3c3b74 = parseInt(_0x3683db(0x85)) + parseInt(_0x3683db(0x86)) * -parseInt(_0x3683db(0x87)) + -parseInt(_0x3683db(0x88)) + parseInt(_0x3683db(0x89)) + -parseInt(_0x3683db(0x8a)) * -parseInt(_0x3683db(0x8b)) + -parseInt(_0x3683db(0x8c)) + parseInt(_0x3683db(0x8d));
            if (_0x3c3b74 === _0x257195)
                break;
            else
                _0x143b43['push'](_0x143b43['shift']());
        } catch (_0x47abe7) {
            _0x143b43['push'](_0x143b43['shift']());
        }
    }
}(_0x5e1e, 0xd15b3));
function _0x72b5(_0x50cd1a, _0x2131af) {
    return _0x72b5 = function (_0x5e1e80, _0x72b5b0) {
        _0x5e1e80 = _0x5e1e80 - 0x85;
        var _0x4b6c6c = _0x5e1e[_0x5e1e80];
        return _0x4b6c6c;
    }, _0x72b5(_0x50cd1a, _0x2131af);
}
export default function transformer(_0x233de4) {
    var _0x2e0d04 = _0x72b5;
    return _0x233de4[_0x2e0d04(0x8e)]['replace'](/(theme\.breakpoints|breakpoints)\.width\(['"](.*)['"]\)/gm, '$1.values.$2');
}
