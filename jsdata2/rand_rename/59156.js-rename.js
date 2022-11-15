let{session,contextGroup,Protocol}=InspectorTest.start("Breakpoint can be set at line return this.x;");contextGroup.addScript(`(function outer() {
  var C = (function C_() {
    var y = 1;
    function CC() {
      this.x = 0;
    }
    CC.prototype.f = function CCf() {
      this.x += y;
      return this.x;
    };
    return CC;
  })();

  var c = new C(0);
})`);(async function t(){session.setupScriptMap();Protocol.Debugger.enable();const{params:{scriptId:o}}=await Protocol.Debugger.onceScriptParsed();InspectorTest.log("Set breakpoint..");const{result:e}=await Protocol.Debugger.setBreakpoint({location:{scriptId:o,lineNumber:8,columnNumber:0}});session.logSourceLocation(e.actualLocation);InspectorTest.completeTest()})();