let {session, contextGroup, Protocol} = InspectorTest['start']('Breakpoint can be set at line return this.x;');
contextGroup['addScript']('(function outer() {\n  var C = (function C_() {\n    var y = 1;\n    function CC() {\n      this.x = 0;\n    }\n    CC.prototype.f = function CCf() {\n      this.x += y;\n      return this.x;\n    };\n    return CC;\n  })();\n\n  var c = new C(0);\n})');
(async function test() {
    session['setupScriptMap']();
    Protocol['Debugger']['enable']();
    const {
        params: {scriptId}
    } = await Protocol['Debugger']['onceScriptParsed']();
    InspectorTest['log']('Set breakpoint..');
    const {result} = await Protocol['Debugger']['setBreakpoint']({
        'location': {
            'scriptId': scriptId,
            'lineNumber': 8,
            'columnNumber': 0
        }
    });
    session['logSourceLocation'](result['actualLocation']);
    InspectorTest['completeTest']();
}());