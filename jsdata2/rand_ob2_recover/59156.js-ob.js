let {session, contextGroup, Protocol} = InspectorTest[_0x3c7745(348)](_0x3c7745(349));
contextGroup[_0x3c7745(350)](_0x3c7745(351)), async function test() {
    const _0x3b90b8 = _0x3c7745;
    session[_0x3b90b8(352)](), Protocol[_0x3b90b8(353)][_0x3b90b8(354)]();
    const {
        params: {scriptId: _0x260be0}
    } = await Protocol[_0x3b90b8(353)][_0x3b90b8(355)]();
    InspectorTest['log']('Set breakpoint..');
    const {result: _0x46962b} = await Protocol['Debugger']['setBreakpoint']({
        'location': {
            'scriptId': _0x260be0,
            'lineNumber': 8,
            'columnNumber': 0
        }
    });
    session[_0x3b90b8(356)](_0x46962b[_0x3b90b8(357)]), InspectorTest[_0x3b90b8(358)]();
}();