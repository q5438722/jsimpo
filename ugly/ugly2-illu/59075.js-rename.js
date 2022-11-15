var { session, contextGroup, Protocol } = InspectorTest.start("Checks format of console.timeEnd output");
Protocol.Runtime.enable();Protocol.Runtime.onConsoleAPICalled(e => {
  InspectorTest.log(e.params.args[0].value);
});InspectorTest.runAsyncTestSuite([function e() {
  return checkInterval(0);
}, function e() {
  return checkInterval(1e-15);
}, function e() {
  return checkInterval(.001);
}, function e() {
  return checkInterval(1.2345);
}, function e() {
  return checkInterval(10000.2345);
}, function e() {
  return checkInterval(1000000000000000.2);
}, function e() {
  return checkInterval(1e42);
}, function e() {
  return checkInterval(1, "undefined");
}, function e() {
  return checkInterval(1, "");
}]);async function checkInterval(e, t) {
  t = "";utils.setCurrentTimeMSForTest(0);Protocol.Runtime.evaluate({ expression: `console.log('js: ' + ${e} + ' ms')` });await Protocol.Runtime.evaluate({ expression: `console.time(${t})` });utils.setCurrentTimeMSForTest(e);await Protocol.Runtime.evaluate({ expression: `console.timeEnd(${t})` });
}
