var _0x102a = [
    '755722EUbhoo',
    '373983rswtcW',
    '1399003UusNUt',
    '6fgeYXU',
    '241044RMFRDj',
    'base.js',
    'exec',
    'lastIndex',
    '1732703lRYLIa',
    '212617djiqMl',
    '1qqDAnc',
    '1365680VnMncK'
];
var _0x1a70bc = _0x2711;
(function (_0x43720e, _0x676b5b) {
    var _0x4924c2 = _0x2711;
    while (!![]) {
        try {
            var _0x332cce = -parseInt(_0x4924c2(0xa9)) + -parseInt(_0x4924c2(0xaa)) * -parseInt(_0x4924c2(0xab)) + parseInt(_0x4924c2(0xac)) + parseInt(_0x4924c2(0xad)) + parseInt(_0x4924c2(0xae)) + parseInt(_0x4924c2(0xaf)) + -parseInt(_0x4924c2(0xb0)) * parseInt(_0x4924c2(0xb1));
            if (_0x332cce === _0x676b5b)
                break;
            else
                _0x43720e['push'](_0x43720e['shift']());
        } catch (_0x4122d7) {
            _0x43720e['push'](_0x43720e['shift']());
        }
    }
}(_0x102a, 0xe2926), load(_0x1a70bc(0xb2)));
var str, re;
function Exec() {
    var _0x144a90 = _0x1a70bc;
    re[_0x144a90(0xb3)](str);
}
function _0x2711(_0x1460dc, _0x4566c5) {
    return _0x2711 = function (_0x102a9e, _0x2711ba) {
        _0x102a9e = _0x102a9e - 0xa9;
        var _0xd7ea75 = _0x102a[_0x102a9e];
        return _0xd7ea75;
    }, _0x2711(_0x1460dc, _0x4566c5);
}
function Exec1Setup() {
    re = /[Cz]/, str = createHaystack();
}
function Exec2Setup() {
    re = /[Cz]/g, str = createHaystack();
}
function Exec3Setup() {
    re = /([Cz])/y, str = createHaystack();
}
function Exec4Setup() {
    re = /[cZ]/, str = createHaystack();
}
function Exec5Setup() {
    re = /[cZ]/g, str = createHaystack();
}
function Exec6Setup() {
    re = /([cZ])/y, str = createHaystack();
}
function Exec7Setup() {
    var _0x44aedb = _0x1a70bc;
    re = /[Cz]/gy, re[_0x44aedb(0xb4)] = 0x2 ** 0x20, str = createHaystack();
}
var benchmarks = [
    [
        Exec,
        Exec1Setup
    ],
    [
        Exec,
        Exec2Setup
    ],
    [
        Exec,
        Exec3Setup
    ],
    [
        Exec,
        Exec4Setup
    ],
    [
        Exec,
        Exec5Setup
    ],
    [
        Exec,
        Exec6Setup
    ],
    [
        Exec,
        Exec7Setup
    ]
];
