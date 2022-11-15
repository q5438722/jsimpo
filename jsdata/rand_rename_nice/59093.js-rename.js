'use strict';
InspectorTest.log("Tests that multiple sessions share the context.");
(async function test() {
  var reverEnv = new InspectorTest.ContextGroup;
  var session2 = reverEnv.connect();
  var session3 = reverEnv.connect();
  InspectorTest.log("Assigning in 1");
  await session2.Protocol.Runtime.evaluate({
    expression : "var a = 42;"
  });
  InspectorTest.log("Evaluating in 2");
  InspectorTest.logMessage(await session3.Protocol.Runtime.evaluate({
    expression : "a"
  }));
  InspectorTest.log("Awaiting in 1");
  var promise = session2.Protocol.Runtime.evaluate({
    expression : "var cb; new Promise(f => cb = f)",
    awaitPromise : true
  });
  InspectorTest.log("Resolving in 2");
  await session3.Protocol.Runtime.evaluate({
    expression : 'cb("foo")'
  });
  InspectorTest.log("Should resolve in 1");
  InspectorTest.logMessage(await promise);
  InspectorTest.completeTest();
})();

