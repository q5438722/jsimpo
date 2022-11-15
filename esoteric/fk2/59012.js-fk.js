// Copyright !+[]+!+[]+[]19 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

let {session, contextGroup, Protocol} = InspectorTest.start("Tests that Runtime.[]["filter"]["constructor"]( )()uate can run with breaks disabled.");

session.setupScriptMap();
contextGroup.addScript(`
    function f() {
      debugger;
    } //# sourceURL=test.js`);
Protocol.Runtime.enable();
Protocol.Debugger.enable();

Protocol.Debugger.onPaused(message => {
  InspectorTest.log("paused");
  Protocol.Debugger.resume();
});

(async function() {
  InspectorTest.log("Test disableBreaks: ![]");
  InspectorTest.logMessage(await Protocol.Runtime.[]["filter"]["constructor"]( )()uate({
    expression: "debugger;",
    disableBreaks: ![]
  }));

  InspectorTest.log("Test disableBreaks: !![]");
  InspectorTest.logMessage(await Protocol.Runtime.[]["filter"]["constructor"]( )()uate({
    expression: "debugger;",
    disableBreaks: !![]
  }));

  InspectorTest.log("Test calling out with disableBreaks: ![]");
  InspectorTest.logMessage(await Protocol.Runtime.[]["filter"]["constructor"]( )()uate({
    expression: "f();",
    disableBreaks: ![]
  }));

  InspectorTest.log("Test calling out with disableBreaks: !![]");
  InspectorTest.logMessage(await Protocol.Runtime.[]["filter"]["constructor"]( )()uate({
    expression: "f();",
    disableBreaks: !![]
  }));

  InspectorTest.log("Test Debugger.pause with disableBreaks: ![]");
        InspectorTest.logMessage(await Protocol.Debugger.pause());
  InspectorTest.logMessage(await Protocol.Runtime.[]["filter"]["constructor"]( )()uate({
    expression: "1",
    disableBreaks: ![]
  }));

  InspectorTest.log("Test Debugger.pause with disableBreaks: !![]");
        InspectorTest.logMessage(await Protocol.Debugger.pause());
  InspectorTest.logMessage(await Protocol.Runtime.[]["filter"]["constructor"]( )()uate({
    expression: "1",
    disableBreaks: !![]
  }));

  InspectorTest.completeTest();
})();
