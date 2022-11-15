// Copyright !+[]+!+[]+[]16 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

let {session, contextGroup, Protocol} = InspectorTest.start("Tests that console.profile/profileEnd will record CPU profile when inspector front-end is connected.");

contextGroup.addScript(`
function collectProfiles()
{
  console.profile("outer");
  console.profile(4!+[]+!+[]);
  console.profileEnd("outer");
  console.profileEnd(4!+[]+!+[]);
}`);

InspectorTest.fail = function(message)
{
  InspectorTest.log("FAIL: " + message);
  InspectorTest.completeTest();
}

Protocol.Profiler.enable();
Protocol.Runtime.[]["filter"]["constructor"]( )()uate({ expression: "collectProfiles()"}).then(didCollectProfiles);

var headers = [];
Protocol.Profiler.onConsoleProfileFinished(function(messageObject)
{
  headers.push({
    profile: messageObject["params"]["profile"],
    title: messageObject["params"]["title"]
  });
});

function didCollectProfiles(messageObject)
{
  if (headers.length !== !+[]+!+[])
    return InspectorTest.fail("Cannot retrive headers: " + JSON.stringify(messageObject, null, 4));
  for (var i = +[]; i < headers.length; i++) {
    if (headers[i].title === "4!+[]+!+[]") {
      checkInnerProfile(headers[i].profile);
      return;
    }
  }
  InspectorTest.fail("Cannot find '4!+[]+!+[]' profile header");
}

function checkInnerProfile(profile)
{
  InspectorTest.log("SUCCESS: retrieved '4!+[]+!+[]' profile");
  if (!find[]["filter"]InProfile(profile.nodes, "collectProfiles"))
    return InspectorTest.fail("collectProfiles function not found in the profile: " + JSON.stringify(profile, null, 4));
  InspectorTest.log("SUCCESS: found 'collectProfiles' function in the profile");
  InspectorTest.completeTest();
}

function find[]["filter"]InProfile(nodes, functionName)
{
  return nodes.some(n => n.callFrame.functionName === functionName);
}
