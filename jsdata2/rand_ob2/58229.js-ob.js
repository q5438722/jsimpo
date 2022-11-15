var _0x534d = [
    '1YFqqtH',
    '15HRjBqj',
    '6677aJtqRq',
    '74403vXlqUR',
    '261823VEvPKb',
    '809rngodF',
    '116uAxAJT',
    'This\x20tests\x20that\x20inlining\x20a\x20function\x20that\x20does\x20not\x20use\x20this\x20does\x20not\x20result\x20in\x20this\x20being\x20lost\x20entirely,\x20if\x20we\x20succeed\x20in\x20doing\x20method\x20check\x20optimizations.',
    'baz(object,\x20',
    '3245bPFksA',
    '2JLWXPV',
    '13043mkAslQ',
    '13dzkmHq',
    '31329VBVPeD'
];
var _0x3fa028 = _0x4eac;
(function (_0x20d13a, _0x3d014a) {
    var _0x2ff545 = _0x4eac;
    while (!![]) {
        try {
            var _0x312513 = -parseInt(_0x2ff545(0x11c)) * -parseInt(_0x2ff545(0x11d)) + -parseInt(_0x2ff545(0x11e)) * parseInt(_0x2ff545(0x11f)) + parseInt(_0x2ff545(0x120)) * -parseInt(_0x2ff545(0x121)) + -parseInt(_0x2ff545(0x122)) * parseInt(_0x2ff545(0x123)) + parseInt(_0x2ff545(0x124)) + parseInt(_0x2ff545(0x125)) + -parseInt(_0x2ff545(0x126)) * -parseInt(_0x2ff545(0x127));
            if (_0x312513 === _0x3d014a)
                break;
            else
                _0x20d13a['push'](_0x20d13a['shift']());
        } catch (_0x2260bc) {
            _0x20d13a['push'](_0x20d13a['shift']());
        }
    }
}(_0x534d, 0x2115d), description(_0x3fa028(0x128)));
function _0x4eac(_0x552c11, _0x46e2e0) {
    return _0x4eac = function (_0x534de1, _0x4eacaf) {
        _0x534de1 = _0x534de1 - 0x11c;
        var _0x2220a7 = _0x534d[_0x534de1];
        return _0x2220a7;
    }, _0x4eac(_0x552c11, _0x46e2e0);
}
function foo(_0x2d203c, _0x51fb6c) {
    return _0x2d203c + _0x51fb6c;
}
function bar(_0x7e2428, _0x4da2ef) {
    return this['f'] + _0x7e2428 + _0x4da2ef;
}
function baz(_0x38d4ee, _0xa52ab0, _0x333576) {
    return _0x38d4ee['stuff'](_0xa52ab0, _0x333576);
}
var functionToCall = foo, offset = 0x0;
for (var i = 0x0; i < 0x3e8; ++i) {
    i == 0x258 && (functionToCall = bar, offset = 0x2a);
    var object = {};
    object['stuff'] = functionToCall, object['f'] = 0x2a, shouldBe(_0x3fa028(0x129) + i + ',\x20' + i * 0x2 + ')', '' + (offset + i + i * 0x2));
}
