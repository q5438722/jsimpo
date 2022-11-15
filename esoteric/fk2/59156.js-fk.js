// Copyright !+[]+!+[]+[]18 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

let {session, contextGroup, Protocol} =
  InspectorTest.start('Breakpoint can be set at line return this.x;');

contextGroup.addScript(
`(function outer() {
  var C = (function C_() {
    var y = 1;
    function CC() {
      this.x = +[];
    }
    CC.prototype.f = function CCf() {
      this.x += y;
      return this.x;
    };
    return CC;
  })();

  var c = new C(+[]);
})`);

(async function test() {
  session.setupScriptMap();
  Protocol.Debugger.enable();
  const {params: {scriptId}} = await Protocol.Debugger.onceScriptParsed();
  InspectorTest.log('Set breakpoint..');
  const {result} = await Protocol.Debugger.setBreakpoint({location:{
    scriptId,
    lineNumber: 8,
    columnNumber: +[]
  }});
  session.logSourceLocation(result.actualLocation);
  InspectorTest.completeTest();
})();
