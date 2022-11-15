'use strict';
const source = _0x17b8cc(417);
let {
  session : session,
  contextGroup : contextGroup,
  Protocol : Protocol
} = InspectorTest[_0x17b8cc(418)](_0x17b8cc(419) + _0x17b8cc(420));
(async function f() {
  const getConcrete = _0x17b8cc;
  await Protocol["Profiler"]["enable"]();
  await Protocol["Profiler"]["startTypeProfile"]();
  Protocol[getConcrete(421)][getConcrete(422)]();
  let {
    result : {
      scriptId : scriptId
    }
  } = await Protocol["Runtime"][getConcrete(423)]({
    "expression" : source,
    "sourceURL" : arguments["callee"][getConcrete(424)],
    "persistScript" : !![]
  });
  Protocol["Runtime"][getConcrete(425)]({
    "scriptId" : scriptId
  });
  await Protocol[getConcrete(426)][getConcrete(427)]();
  let base_c = await Protocol[getConcrete(426)][getConcrete(428)]();
  await session["logTypeProfile"](base_c[getConcrete(429)][getConcrete(429)][-483 + 1684 + -1201 * 1], source);
  Protocol["Profiler"][getConcrete(430)]();
  Protocol[getConcrete(426)]["disable"]();
  await Protocol["Runtime"][getConcrete(431)]();
  InspectorTest[getConcrete(432)]();
})();

