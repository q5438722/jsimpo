var { session, contextGroup, Protocol } = InspectorTest.start('Test Counters collection enabling and disabling.');
const source = `
function fib(x) {
  if (x < 2) return 1;
  return fib(x-1) + fib(x-2);
}
fib(5);
`;
function logErrorMessage(e) {
  InspectorTest.log('Expected error: "' + e.error.message + '"');
}(async function e() {
  await Protocol.Runtime.enable();logErrorMessage((await Protocol.Profiler.getCounters()));await Protocol.Profiler.enableCounters();logErrorMessage((await Protocol.Profiler.enableCounters()));await Protocol.Runtime.evaluate({ expression: source, sourceURL: arguments.callee.name, persistScript: true });const o = (await Protocol.Profiler.getCounters()).result.result;
  if (o.length > 0) InspectorTest.log('Some counters reported');await Protocol.Profiler.disableCounters();logErrorMessage((await Protocol.Profiler.getCounters()));await Protocol.Profiler.enableCounters();const r = (await Protocol.Profiler.getCounters()).result.result;
  if (r.length > 0 && r.length < o.length) InspectorTest.log('Less counters reported');await Protocol.Profiler.disableCounters();await Protocol.Runtime.disable();InspectorTest.completeTest();
})().catch(e => InspectorTest.log('caught: ' + e));
