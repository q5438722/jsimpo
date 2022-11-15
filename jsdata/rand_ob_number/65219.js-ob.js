load('base.js');
var str, re;
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
    re = /[Cz]/gy, re['lastIndex'] = (-0x4 * 0x93a + 0x2 * 0x12d3 + 0x2f * -0x4) ** (0x24f1 + 0x1 * -0xf13 + -0x15be), str = createHaystack();
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
