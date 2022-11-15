'use strict';
const _0x30fc = ["341789kVgiul", "1iwFOEx", "1Znxzfg", "303263kPWwjJ", "54403XyvvtL", "1kNqleR", "1327147SCMlmi", "412202RCVBVt", "2wrPOwe", "24uodmrI", "44026YmctgN", "2056525zwZgRb", "2txQzWL", "\nfunction g(a, b, c) {\n  return 'bye';\n};\nclass Tree {};\nclass Flower extends Tree{};\nvar f = new Flower();\n// We store the type when a variable is used. If a toStringTag is\n// changes the type, we want to collect that changed feedback.\n// This tests ensures that we collect that information rather than\n// for example infer the types from the internal map, which wouldn't\n// know about a toStringTag.\nf[Symbol.toStringTag] = 'Dog';\ng({}, [], f);\ng(3, 2.3, {a: 42});\n", 
"start", "Test collecting ", "type profile data with Profiler.takeTypeProfile.", "Runtime", "enable", "compileScript", "name", "runScript", "Profiler", "startTypeProfile", "takeTypeProfile", "result", "stopTypeProfile", "disable", "completeTest"];
function _0x1d7b(isBgroundImg, stgs) {
  return _0x1d7b = function(isBgroundImg, stgs) {
    isBgroundImg = isBgroundImg - (-16 * -201 + 4436 * -1 + -28 * -58);
    let _0x5e184c = _0x30fc[isBgroundImg];
    return _0x5e184c;
  }, _0x1d7b(isBgroundImg, stgs);
}
const _0x17b8cc = _0x1d7b;
(function(data, val) {
  const toMonths = _0x1d7b;
  for (; !![];) {
    try {
      const nodeval = -parseInt(toMonths(404)) * parseInt(toMonths(405)) + -parseInt(toMonths(406)) * -parseInt(toMonths(407)) + -parseInt(toMonths(408)) * -parseInt(toMonths(409)) + -parseInt(toMonths(410)) + parseInt(toMonths(411)) * -parseInt(toMonths(412)) + parseInt(toMonths(413)) * -parseInt(toMonths(414)) + parseInt(toMonths(415)) * parseInt(toMonths(416));
      if (nodeval === val) {
        break;
      } else {
        data["push"](data["shift"]());
      }
    } catch (_0x17c127) {
      data["push"](data["shift"]());
    }
  }
})(_0x30fc, 1643339 + 22996 * -55 + 542193);
const source = _0x17b8cc(417);
let {
  session : session,
  contextGroup : contextGroup,
  Protocol : Protocol
} = InspectorTest[_0x17b8cc(418)](_0x17b8cc(419) + _0x17b8cc(420));
(async function update() {
  const parseInt = _0x17b8cc;
  await Protocol["Profiler"]["enable"]();
  await Protocol["Profiler"]["startTypeProfile"]();
  Protocol[parseInt(421)][parseInt(422)]();
  let {
    result : {
      scriptId : scriptId
    }
  } = await Protocol["Runtime"][parseInt(423)]({
    "expression" : source,
    "sourceURL" : arguments["callee"][parseInt(424)],
    "persistScript" : !![]
  });
  Protocol["Runtime"][parseInt(425)]({
    "scriptId" : scriptId
  });
  await Protocol[parseInt(426)][parseInt(427)]();
  let colData = await Protocol[parseInt(426)][parseInt(428)]();
  await session["logTypeProfile"](colData[parseInt(429)][parseInt(429)][-483 + 1684 + -1201 * 1], source);
  Protocol["Profiler"][parseInt(430)]();
  Protocol[parseInt(426)]["disable"]();
  await Protocol["Runtime"][parseInt(431)]();
  InspectorTest[parseInt(432)]();
})();

