const source=`
function g(a, b, c) {
  return 'bye';
};
class Tree {};
class Flower extends Tree{};
var f = new Flower();
// We store the type when a variable is used. If a toStringTag is
// changes the type, we want to collect that changed feedback.
// This tests ensures that we collect that information rather than
// for example infer the types from the internal map, which wouldn't
// know about a toStringTag.
f[Symbol.toStringTag] = 'Dog';
g({}, [], f);
g(3, 2.3, {a: 42});
`;let{session,contextGroup,Protocol}=InspectorTest.start("Test collecting "+"type profile data with Profiler.takeTypeProfile.");(async function e(){await Protocol.Profiler.enable();await Protocol.Profiler.startTypeProfile();Protocol.Runtime.enable();let{result:{scriptId:t}}=await Protocol.Runtime.compileScript({expression:source,sourceURL:arguments.callee.name,persistScript:true});Protocol.Runtime.runScript({scriptId:t});await Protocol.Profiler.startTypeProfile();let o=await Protocol.Profiler.takeTypeProfile();await session.logTypeProfile(o.result.result[0],source);Protocol.Profiler.stopTypeProfile();Protocol.Profiler.disable();await Protocol.Runtime.disable();InspectorTest.completeTest()})();