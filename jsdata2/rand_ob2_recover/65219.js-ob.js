load(_0x1a70bc(178));
var str, re;
function Exec() {
    var _0x144a90 = _0x1a70bc;
    re[_0x144a90(179)](str);
}
function _0x2711(_0x1460dc, _0x4566c5) {
    return _0x2711 = function (_0x102a9e, _0x2711ba) {
        _0x102a9e = _0x102a9e - 169;
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
    re = /[Cz]/gy, re[_0x44aedb(180)] = 2 ** 32, str = createHaystack();
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