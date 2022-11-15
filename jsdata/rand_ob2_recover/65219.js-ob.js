load(_0x17b076(332));
var str, re;
function _0x5e23(_0x5c7ea2, _0x49bf94) {
    return _0x5e23 = function (_0x199d47, _0x5e231f) {
        _0x199d47 = _0x199d47 - 322;
        var _0x381158 = _0x199d[_0x199d47];
        return _0x381158;
    }, _0x5e23(_0x5c7ea2, _0x49bf94);
}
function Exec() {
    re['exec'](str);
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
    var _0x32265a = _0x17b076;
    re = /[Cz]/gy, re[_0x32265a(333)] = 2 ** 32, str = createHaystack();
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