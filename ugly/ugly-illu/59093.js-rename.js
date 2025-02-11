InspectorTest.log("Tests that multiple sessions share the context.");(async function e() {
  const t = new InspectorTest.ContextGroup();
  const o = t.connect();
  const s = t.connect();
  InspectorTest.log("Assigning in 1");await o.Protocol.Runtime.evaluate({ expression: "var a = 42;" });InspectorTest.log("Evaluating in 2");InspectorTest.logMessage((await s.Protocol.Runtime.evaluate({ expression: "a" })));InspectorTest.log("Awaiting in 1");const n = o.Protocol.Runtime.evaluate({ expression: "var cb; new Promise(f => cb = f)", awaitPromise: true });
  InspectorTest.log("Resolving in 2");await s.Protocol.Runtime.evaluate({ expression: "cb(\"foo\")" });InspectorTest.log("Should resolve in 1");InspectorTest.logMessage((await n));InspectorTest.completeTest();
})();
