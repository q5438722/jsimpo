let {session, contextGroup, Protocol} = InspectorTest[_0x2e74ed(470)]('Checks breakProgram,(schedule|cancel)PauseOnNextStatement test API');
contextGroup[_0x2e74ed(471)]('\nfunction callBreakProgram() {\n  inspector.breakProgram(\'reason\', JSON.stringify({a: 42}));\n}\n\nfunction foo() {\n  return 42;\n}', 7, 26), session[_0x2e74ed(472)](), Protocol[_0x2e74ed(473)][_0x2e74ed(474)](_0x542843 => {
    const _0x51f409 = _0x2e74ed;
    InspectorTest['log'](_0x51f409(475)), session[_0x51f409(476)](_0x542843[_0x51f409(477)]['callFrames']), delete _0x542843[_0x51f409(477)][_0x51f409(478)], InspectorTest[_0x51f409(479)](_0x51f409(480)), InspectorTest[_0x51f409(481)](_0x542843), InspectorTest[_0x51f409(479)](''), Protocol['Debugger']['resume']();
}), Protocol['Debugger'][_0x2e74ed(482)](), InspectorTest[_0x2e74ed(483)]([
    function testBreakProgram(_0x56cbb5) {
        const _0x5072c1 = _0x2e74ed;
        Protocol[_0x5072c1(484)]['evaluate']({ 'expression': _0x5072c1(485) })[_0x5072c1(486)](_0x56cbb5);
    },
    function testSchedulePauseOnNextStatement(_0x427ea6) {
        const _0x9673eb = _0x2e74ed;
        contextGroup[_0x9673eb(487)](_0x9673eb(488), JSON['stringify']({ 'a': 42 })), Protocol[_0x9673eb(484)][_0x9673eb(489)]({ 'expression': 'foo()//# sourceURL=expr1.js' })[_0x9673eb(486)](() => Protocol[_0x9673eb(484)][_0x9673eb(489)]({ 'expression': _0x9673eb(490) }))[_0x9673eb(486)](() => contextGroup[_0x9673eb(491)]())[_0x9673eb(486)](_0x427ea6);
    },
    function testCancelPauseOnNextStatement(_0x5d3576) {
        const _0x3a7d1c = _0x2e74ed;
        contextGroup[_0x3a7d1c(487)]('reason', JSON[_0x3a7d1c(492)]({ 'a': 42 })), contextGroup[_0x3a7d1c(491)](), Protocol['Runtime'][_0x3a7d1c(489)]({ 'expression': _0x3a7d1c(493) })[_0x3a7d1c(486)](_0x5d3576);
    }
]);