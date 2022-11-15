var { session, contextGroup, Protocol } = InspectorTest.start("Tests that console.profile/profileEnd will record CPU profile when inspector front-end is connected.");
contextGroup.addScript(`
function collectProfiles()
{
  console.profile("outer");
  console.profile(42);
  console.profileEnd("outer");
  console.profileEnd(42);
}`);InspectorTest.fail = function (e) {
  InspectorTest.log("FAIL: " + e);InspectorTest.completeTest();
};Protocol.Profiler.enable();Protocol.Runtime.evaluate({ expression: "collectProfiles()" }).then(didCollectProfiles);const headers = [];
Protocol.Profiler.onConsoleProfileFinished(function (e) {
  headers.push({ profile: e.params.profile, title: e.params.title });
});function didCollectProfiles(e) {
  if (headers.length !== 2) return InspectorTest.fail("Cannot retrive headers: " + JSON.stringify(e, null, 4));for (var o = 0; o < headers.length; o++) {
    if (headers[o].title === "42") {
      checkInnerProfile(headers[o].profile);return;
    }
  }InspectorTest.fail("Cannot find '42' profile header");
}function checkInnerProfile(e) {
  InspectorTest.log("SUCCESS: retrieved '42' profile");if (!findFunctionInProfile(e.nodes, "collectProfiles")) return InspectorTest.fail("collectProfiles function not found in the profile: " + JSON.stringify(e, null, 4));InspectorTest.log("SUCCESS: found 'collectProfiles' function in the profile");InspectorTest.completeTest();
}function findFunctionInProfile(e, o) {
  return e.some(e => e.callFrame.functionName === o);
}
