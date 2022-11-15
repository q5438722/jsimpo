let {session, contextGroup, Protocol} = InspectorTest['start']('Tests that Runtime.evaluate can run with breaks disabled.');
session['setupScriptMap']();
contextGroup['addScript']('\n    function f() {\n      debugger;\n    } //# sourceURL=test.js');
Protocol['Runtime']['enable']();
Protocol['Debugger']['enable']();
Protocol['Debugger']['onPaused'](_0xae4f22 => {
    InspectorTest['log']('paused');
    Protocol['Debugger']['resume']();
});
(async function () {
    InspectorTest['log']('Test disableBreaks: false');
    InspectorTest['logMessage'](await Protocol['Runtime']['evaluate']({
        'expression': 'debugger;',
        'disableBreaks': ![]
    }));
    InspectorTest['log']('Test disableBreaks: true');
    InspectorTest['logMessage'](await Protocol['Runtime']['evaluate']({
        'expression': 'debugger;',
        'disableBreaks': !![]
    }));
    InspectorTest['log']('Test calling out with disableBreaks: false');
    InspectorTest['logMessage'](await Protocol['Runtime']['evaluate']({
        'expression': 'f();',
        'disableBreaks': ![]
    }));
    InspectorTest['log']('Test calling out with disableBreaks: true');
    InspectorTest['logMessage'](await Protocol['Runtime']['evaluate']({
        'expression': 'f();',
        'disableBreaks': !![]
    }));
    InspectorTest['log']('Test Debugger.pause with disableBreaks: false');
    InspectorTest['logMessage'](await Protocol['Debugger']['pause']());
    InspectorTest['logMessage'](await Protocol['Runtime']['evaluate']({
        'expression': '1',
        'disableBreaks': ![]
    }));
    InspectorTest['log']('Test Debugger.pause with disableBreaks: true');
    InspectorTest['logMessage'](await Protocol['Debugger']['pause']());
    InspectorTest['logMessage'](await Protocol['Runtime']['evaluate']({
        'expression': '1',
        'disableBreaks': !![]
    }));
    InspectorTest['completeTest']();
}());