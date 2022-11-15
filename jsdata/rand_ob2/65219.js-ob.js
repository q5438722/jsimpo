var _0x199d = [
    '100502okeDmX',
    '2YbaEZH',
    '549316mNynzL',
    '691711eEJgzQ',
    '1dkTQpl',
    '217201qUEhFB',
    'base.js',
    'lastIndex',
    '861362unHshG',
    '602926tPQHsI',
    '1mfPisy',
    '484333ivFKZA'
];
var _0x17b076 = _0x5e23;
(function (_0x1a0bf8, _0x52e260) {
    var _0x1409ac = _0x5e23;
    while (!![]) {
        try {
            var _0x2b518f = parseInt(_0x1409ac(0x142)) + parseInt(_0x1409ac(0x143)) * -parseInt(_0x1409ac(0x144)) + parseInt(_0x1409ac(0x145)) + -parseInt(_0x1409ac(0x146)) * parseInt(_0x1409ac(0x147)) + -parseInt(_0x1409ac(0x148)) + parseInt(_0x1409ac(0x149)) + parseInt(_0x1409ac(0x14a)) * -parseInt(_0x1409ac(0x14b));
            if (_0x2b518f === _0x52e260)
                break;
            else
                _0x1a0bf8['push'](_0x1a0bf8['shift']());
        } catch (_0x3abd44) {
            _0x1a0bf8['push'](_0x1a0bf8['shift']());
        }
    }
}(_0x199d, 0x7200f), load(_0x17b076(0x14c)));
var str, re;
function _0x5e23(_0x5c7ea2, _0x49bf94) {
    return _0x5e23 = function (_0x199d47, _0x5e231f) {
        _0x199d47 = _0x199d47 - 0x142;
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
    re = /[Cz]/gy, re[_0x32265a(0x14d)] = 0x2 ** 0x20, str = createHaystack();
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
