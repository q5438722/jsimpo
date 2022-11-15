function _0x30d7(_0x25332f, _0x3e0ba0) {
    return _0x30d7 = function (_0x4a00f4, _0x5bd184) {
        _0x4a00f4 = _0x4a00f4 - (-9871 + -7 * -729 + 4906);
        let _0x52bdc3 = _0x24dc[_0x4a00f4];
        return _0x52bdc3;
    }, _0x30d7(_0x25332f, _0x3e0ba0);
}
let {session, contextGroup, Protocol} = InspectorTest[_0x4abdbd(148)](_0x4abdbd(149));
session['setupScriptMap'](), contextGroup[_0x4abdbd(150)]('\n    function f() {\n      debugger;\n    } //# sourceURL=test.js'), Protocol['Runtime']['enable'](), Protocol[_0x4abdbd(151)][_0x4abdbd(152)](), Protocol['Debugger']['onPaused'](_0x2d21eb => {
    const _0x4643e2 = _0x4abdbd, _0x13d75c = { 'fivZx': _0x4643e2(153) };
    InspectorTest[_0x4643e2(154)](_0x13d75c[_0x4643e2(155)]), Protocol['Debugger']['resume']();
}), async function () {
    const _0x312daf = _0x4abdbd, _0x30547e = {
            'FrXFY': _0x312daf(156),
            'TWJxj': _0x312daf(157),
            'RNnct': _0x312daf(158),
            'udunD': 'Test calling out with disableBreaks: true',
            'PRDol': _0x312daf(159),
            'bbkpy': _0x312daf(160),
            'sdSPn': 'Test Debugger.pause with disableBreaks: true',
            'RMiyx': _0x312daf(161)
        }, _0x3ec411 = _0x30547e['FrXFY'][_0x312daf(162)]('|');
    let _0x4fdeca = 9851 + 4630 + -14481;
    while (!![]) {
        switch (_0x3ec411[_0x4fdeca++]) {
        case '0':
            InspectorTest['log'](_0x30547e[_0x312daf(163)]);
            continue;
        case '1':
            InspectorTest[_0x312daf(154)](_0x312daf(164));
            continue;
        case '2':
            InspectorTest[_0x312daf(154)](_0x30547e['RNnct']);
            continue;
        case '3':
            InspectorTest[_0x312daf(165)](await Protocol[_0x312daf(151)][_0x312daf(166)]());
            continue;
        case '4':
            InspectorTest['log'](_0x30547e[_0x312daf(167)]);
            continue;
        case '5':
            InspectorTest[_0x312daf(165)](await Protocol[_0x312daf(168)]['evaluate']({
                'expression': _0x30547e[_0x312daf(169)],
                'disableBreaks': ![]
            }));
            continue;
        case '6':
            InspectorTest[_0x312daf(165)](await Protocol['Runtime']['evaluate']({
                'expression': '1',
                'disableBreaks': !![]
            }));
            continue;
        case '7':
            InspectorTest['logMessage'](await Protocol[_0x312daf(168)][_0x312daf(170)]({
                'expression': _0x30547e[_0x312daf(171)],
                'disableBreaks': ![]
            }));
            continue;
        case '8':
            InspectorTest['logMessage'](await Protocol['Runtime'][_0x312daf(170)]({
                'expression': _0x30547e[_0x312daf(169)],
                'disableBreaks': !![]
            }));
            continue;
        case '9':
            InspectorTest['logMessage'](await Protocol[_0x312daf(168)][_0x312daf(170)]({
                'expression': _0x30547e[_0x312daf(171)],
                'disableBreaks': !![]
            }));
            continue;
        case '10':
            InspectorTest[_0x312daf(165)](await Protocol[_0x312daf(168)]['evaluate']({
                'expression': '1',
                'disableBreaks': ![]
            }));
            continue;
        case '11':
            InspectorTest[_0x312daf(172)]();
            continue;
        case '12':
            InspectorTest[_0x312daf(154)](_0x30547e['sdSPn']);
            continue;
        case '13':
            InspectorTest[_0x312daf(154)](_0x30547e[_0x312daf(173)]);
            continue;
        case '14':
            InspectorTest[_0x312daf(165)](await Protocol[_0x312daf(151)][_0x312daf(166)]());
            continue;
        }
        break;
    }
}();