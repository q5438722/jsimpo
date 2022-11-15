let {session, contextGroup, Protocol} = InspectorTest['start']('Checks breakProgram,(schedule|cancel)PauseOnNextStatement test API');
contextGroup['addScript']('\nfunction callBreakProgram() {\n  inspector.breakProgram(\'reason\', JSON.stringify({a: 42}));\n}\n\nfunction foo() {\n  return 42;\n}', 7, 26);
session['setupScriptMap']();
Protocol['Debugger']['onPaused'](_0x5751d1 => {
    var _0x46ca78 = '3|1|2|4|0|6|5'['split']('|'), _0x273fd0 = 0;
    while (!![]) {
        switch (_0x46ca78[_0x273fd0++]) {
        case '0':
            InspectorTest['logMessage'](_0x5751d1);
            continue;
        case '1':
            session['logCallFrames'](_0x5751d1['params']['callFrames']);
            continue;
        case '2':
            delete _0x5751d1['params']['callFrames'];
            continue;
        case '3':
            InspectorTest['log']('Stack:');
            continue;
        case '4':
            InspectorTest['log']('Other data:');
            continue;
        case '5':
            Protocol['Debugger']['resume']();
            continue;
        case '6':
            InspectorTest['log']('');
            continue;
        }
        break;
    }
});
Protocol['Debugger']['enable']();
InspectorTest['runTestSuite']([
    function testBreakProgram(_0x170234) {
        Protocol['Runtime']['evaluate']({ 'expression': 'callBreakProgram()' })['then'](_0x170234);
    },
    function testSchedulePauseOnNextStatement(_0x5dac38) {
        contextGroup['schedulePauseOnNextStatement']('reason', JSON['stringify']({ 'a': 42 }));
        Protocol['Runtime']['evaluate']({ 'expression': 'foo()//# sourceURL=expr1.js' })['then'](() => Protocol['Runtime']['evaluate']({ 'expression': 'foo()//# sourceURL=expr2.js' }))['then'](() => contextGroup['cancelPauseOnNextStatement']())['then'](_0x5dac38);
    },
    function testCancelPauseOnNextStatement(_0x5844c5) {
        contextGroup['schedulePauseOnNextStatement']('reason', JSON['stringify']({ 'a': 42 }));
        contextGroup['cancelPauseOnNextStatement']();
        Protocol['Runtime']['evaluate']({ 'expression': 'foo()' })['then'](_0x5844c5);
    }
]);