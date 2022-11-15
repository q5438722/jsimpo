var { session, contextGroup, Protocol } = InspectorTest.start("Checks that Runtime.evaluate works with dirty context.");
contextGroup.setupInjectedScriptEnvironment();Protocol.Runtime.enable();Protocol.Runtime.onConsoleAPICalled(InspectorTest.logMessage);Protocol.Runtime.evaluate({ expression: "console.log(42)" }).then(InspectorTest.logMessage).then(InspectorTest.completeTest);
