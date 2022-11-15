'use strict';
const common = require("../common.js");
const assert = require("assert");
const primValues = {
  "object" : {
    0 : "a"
  },
  "array" : [1, 2, 3]
};
const bench = common["createBenchmark"](main, {
  "primitive" : Object["keys"](primValues),
  "n" : [20000],
  "strict" : [0, 1],
  "method" : ["deepEqual", "notDeepEqual"]
});
function main({
  n : to,
  primitive : cc,
  method : name,
  strict : strictComparision
}) {
  const _0x3022c0 = primValues[cc];
  const indexedDB = _0x3022c0;
  const _0x3f27d9 = _0x3022c0;
  const _0xa028a5 = "b";
  if (strictComparision) {
    name = name["replace"](_0x13b81c["ktRgp"], _0x13b81c["rSPan"]);
  }
  const addMemberToDiscussion = assert[name];
  const orange = name["includes"](_0x13b81c["PCFrk"]) ? _0xa028a5 : _0x3f27d9;
  bench["start"]();
  for (let i = 0; i < to; ++i) {
    addMemberToDiscussion([indexedDB], [orange]);
  }
  bench["end"](to);
}
;
