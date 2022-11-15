const _0x24dc = ['627730CQnDUa', 'start', 'Tests that Runtime.evaluate can run with breaks disabled.', 'addScript', 'Debugger', 'enable', 'paused', 'log', 'fivZx', '1|5|0|8|13|7|4|9|2|3|10|12|14|6|11', 'Test disableBreaks: true', 'Test Debugger.pause with disableBreaks: false', 'debugger;', 'f();', 'Test calling out with disableBreaks: false', 'split', 'TWJxj', 'Test disableBreaks: false', 'logMessage', 'pause', 'udunD', 'Runtime', 'PRDol', 'evaluate', 'bbkpy', 'completeTest', 'RMiyx', '1694562Htzxqu', '127073XOWPrO', '1315173LpZpDl', '1Snxdax', '1213788HvqFoD', '37jKEZCf', '10267UfHPet', '16327CdMyLT', '83GHDfkC'];
const _0x4abdbd = _0x30d7;

(function (_0x54d0bf, _0x286112) {
    const _0x7bd45a = _0x30d7;

    while (true) {
        try {
            const _0x947c51 = -parseInt(_0x7bd45a(0x8a)) + parseInt(_0x7bd45a(0x8b)) + parseInt(_0x7bd45a(0x8c)) * parseInt(_0x7bd45a(0x8d)) + -parseInt(_0x7bd45a(0x8e)) + parseInt(_0x7bd45a(0x8f)) * parseInt(_0x7bd45a(0x90)) + -parseInt(_0x7bd45a(0x91)) * -parseInt(_0x7bd45a(0x92)) + parseInt(_0x7bd45a(0x93));

            if (_0x947c51 === _0x286112) break;else _0x54d0bf.push(_0x54d0bf.shift());
        } catch (_0x2cb637) {
            _0x54d0bf.push(_0x54d0bf.shift());
        }
    }
})(_0x24dc, 896646);
function _0x30d7(_0x25332f, _0x3e0ba0) {
    return _0x30d7 = function (_0x4a00f4, _0x5bd184) {
        _0x4a00f4 = _0x4a00f4 - 138;
        const _0x52bdc3 = _0x24dc[_0x4a00f4];

        return _0x52bdc3;
    }, _0x30d7(_0x25332f, _0x3e0ba0);
}

var { session, contextGroup, Protocol } = InspectorTest[_0x4abdbd(0x94)](_0x4abdbd(0x95));

session.setupScriptMap(), contextGroup[_0x4abdbd(0x96)]('\n    function f() {\n      debugger;\n    } //# sourceURL=test.js'), Protocol.Runtime.enable(), Protocol[_0x4abdbd(0x97)][_0x4abdbd(0x98)](), Protocol.Debugger.onPaused(_0x2d21eb => {
    const _0x4643e2 = _0x4abdbd;
    const _0x13d75c = { 'fivZx': _0x4643e2(0x99) };

    InspectorTest[_0x4643e2(0x9a)](_0x13d75c[_0x4643e2(0x9b)]), Protocol.Debugger.resume();
}), async function () {
    const _0x312daf = _0x4abdbd;
    const _0x30547e = {
        'FrXFY': _0x312daf(0x9c),
        'TWJxj': _0x312daf(0x9d),
        'RNnct': _0x312daf(0x9e),
        'udunD': 'Test calling out with disableBreaks: true',
        'PRDol': _0x312daf(0x9f),
        'bbkpy': _0x312daf(0xa0),
        'sdSPn': 'Test Debugger.pause with disableBreaks: true',
        'RMiyx': _0x312daf(0xa1)
    };

    const _0x3ec411 = _0x30547e.FrXFY[_0x312daf(0xa2)]('|');

    var _0x4fdeca = 0;

    while (true) {
        switch (_0x3ec411[_0x4fdeca++]) {
            case '0':
                InspectorTest.log(_0x30547e[_0x312daf(0xa3)]);
                continue;
            case '1':
                InspectorTest[_0x312daf(0x9a)](_0x312daf(0xa4));
                continue;
            case '2':
                InspectorTest[_0x312daf(0x9a)](_0x30547e.RNnct);
                continue;
            case '3':
                InspectorTest[_0x312daf(0xa5)]((await Protocol[_0x312daf(0x97)][_0x312daf(0xa6)]()));
                continue;
            case '4':
                InspectorTest.log(_0x30547e[_0x312daf(0xa7)]);
                continue;
            case '5':
                InspectorTest[_0x312daf(0xa5)]((await Protocol[_0x312daf(0xa8)].evaluate({
                    'expression': _0x30547e[_0x312daf(0xa9)],
                    'disableBreaks': false
                })));
                continue;
            case '6':
                InspectorTest[_0x312daf(0xa5)]((await Protocol.Runtime.evaluate({
                    'expression': '1',
                    'disableBreaks': true
                })));
                continue;
            case '7':
                InspectorTest.logMessage((await Protocol[_0x312daf(0xa8)][_0x312daf(0xaa)]({
                    'expression': _0x30547e[_0x312daf(0xab)],
                    'disableBreaks': false
                })));
                continue;
            case '8':
                InspectorTest.logMessage((await Protocol.Runtime[_0x312daf(0xaa)]({
                    'expression': _0x30547e[_0x312daf(0xa9)],
                    'disableBreaks': true
                })));
                continue;
            case '9':
                InspectorTest.logMessage((await Protocol[_0x312daf(0xa8)][_0x312daf(0xaa)]({
                    'expression': _0x30547e[_0x312daf(0xab)],
                    'disableBreaks': true
                })));
                continue;
            case '10':
                InspectorTest[_0x312daf(0xa5)]((await Protocol[_0x312daf(0xa8)].evaluate({
                    'expression': '1',
                    'disableBreaks': false
                })));
                continue;
            case '11':
                InspectorTest[_0x312daf(0xac)]();
                continue;
            case '12':
                InspectorTest[_0x312daf(0x9a)](_0x30547e.sdSPn);
                continue;
            case '13':
                InspectorTest[_0x312daf(0x9a)](_0x30547e[_0x312daf(0xad)]);
                continue;
            case '14':
                InspectorTest[_0x312daf(0xa5)]((await Protocol[_0x312daf(0x97)][_0x312daf(0xa6)]()));
                continue;
        }
        break;
    }
}();
