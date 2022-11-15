load('base.js');
var str, re;
function Exec() {
    re['exec'](str);
}
function Exec1Setup() {
    var _0x5a34b6 = {
        'COIzJ': function (_0x5cd3b7) {
            return _0x5cd3b7();
        }
    };
    re = /[Cz]/, str = _0x5a34b6['COIzJ'](createHaystack);
}
function Exec2Setup() {
    var _0x4a28dc = {
        'xWwds': function (_0x3f7c2b) {
            return _0x3f7c2b();
        }
    };
    re = /[Cz]/g, str = _0x4a28dc['xWwds'](createHaystack);
}
function Exec3Setup() {
    var _0x573fc6 = {
        'uvWPF': function (_0xa74b44) {
            return _0xa74b44();
        }
    };
    re = /([Cz])/y, str = _0x573fc6['uvWPF'](createHaystack);
}
function Exec4Setup() {
    var _0x503eef = {
        'rApfG': function (_0x1358bd) {
            return _0x1358bd();
        }
    };
    re = /[cZ]/, str = _0x503eef['rApfG'](createHaystack);
}
function Exec5Setup() {
    var _0x1aa8b6 = {
        'hcisA': function (_0x270891) {
            return _0x270891();
        }
    };
    re = /[cZ]/g, str = _0x1aa8b6['hcisA'](createHaystack);
}
function Exec6Setup() {
    var _0x360e4f = {
        'lIGzB': function (_0xebd49a) {
            return _0xebd49a();
        }
    };
    re = /([cZ])/y, str = _0x360e4f['lIGzB'](createHaystack);
}
function Exec7Setup() {
    var _0x2f119b = {
        'NIMdQ': function (_0x3c9c32, _0x4abe13) {
            return _0x3c9c32 ** _0x4abe13;
        },
        'Thehe': function (_0x90e437) {
            return _0x90e437();
        }
    };
    re = /[Cz]/gy, re['lastIndex'] = _0x2f119b['NIMdQ'](0x2, 0x20), str = _0x2f119b['Thehe'](createHaystack);
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
