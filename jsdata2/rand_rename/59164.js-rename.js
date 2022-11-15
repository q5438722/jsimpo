let{session,contextGroup,Protocol}=InspectorTest.start("Checks breakProgram,(schedule|cancel)PauseOnNextStatement test API");contextGroup.addScript(`
function callBreakProgram() {
  inspector.breakProgram('reason', JSON.stringify({a: 42}));
}

function foo() {
  return 42;
}`,7,26);session.setupScriptMap();Protocol.Debugger.onPaused(e=>{InspectorTest.log("Stack:");session.logCallFrames(e.params.callFrames);delete e.params.callFrames;InspectorTest.log("Other data:");InspectorTest.logMessage(e);InspectorTest.log("");Protocol.Debugger.resume()});Protocol.Debugger.enable();InspectorTest.runTestSuite([function e(t){Protocol.Runtime.evaluate({expression:"callBreakProgram()"}).then(t)},function e(t){contextGroup.schedulePauseOnNextStatement("reason",JSON.stringify({a:42}));Protocol.Runtime.evaluate({expression:"foo()//# sourceURL=expr1.js"}).then(()=>Protocol.Runtime.evaluate({expression:"foo()//# sourceURL=expr2.js"})).then(()=>contextGroup.cancelPauseOnNextStatement()).then(t)},function e(t){contextGroup.schedulePauseOnNextStatement("reason",JSON.stringify({a:42}));contextGroup.cancelPauseOnNextStatement();Protocol.Runtime.evaluate({expression:"foo()"}).then(t)}]);