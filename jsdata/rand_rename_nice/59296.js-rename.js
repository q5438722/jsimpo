'use strict';
let {
  session : session,
  contextGroup : contextGroup,
  Protocol : Protocol
} = InspectorTest.start("Tests that console.profile/profileEnd will record CPU profile when inspector front-end is connected.");
contextGroup.addScript(`\nfunction collectProfiles()\n{\n  console.profile("outer");\n  console.profile(42);\n  console.profileEnd("outer");\n  console.profileEnd(42);\n}`);
InspectorTest.fail = function(num) {
  InspectorTest.log("FAIL: " + num);
  InspectorTest.completeTest();
};
Protocol.Profiler.enable();
Protocol.Runtime.evaluate({
  expression : "collectProfiles()"
}).then(didCollectProfiles);
var headers = [];
Protocol.Profiler.onConsoleProfileFinished(function(messageObject) {
  headers.push({
    profile : messageObject["params"]["profile"],
    title : messageObject["params"]["title"]
  });
});
function didCollectProfiles(messageObject) {
  if (headers.length !== 2) {
    return InspectorTest.fail("Cannot retrive headers: " + JSON.stringify(messageObject, null, 4));
  }
  var i = 0;
  for (; i < headers.length; i++) {
    if (headers[i].title === "42") {
      checkInnerProfile(headers[i].profile);
      return;
    }
  }
  InspectorTest.fail("Cannot find '42' profile header");
}
function checkInnerProfile(profile) {
  InspectorTest.log("SUCCESS: retrieved '42' profile");
  if (!findFunctionInProfile(profile.nodes, "collectProfiles")) {
    return InspectorTest.fail("collectProfiles function not found in the profile: " + JSON.stringify(profile, null, 4));
  }
  InspectorTest.log("SUCCESS: found 'collectProfiles' function in the profile");
  InspectorTest.completeTest();
}
function findFunctionInProfile(nodes, functionName) {
  return nodes.some((details) => {
    return details.callFrame.functionName === functionName;
  });
}
;
