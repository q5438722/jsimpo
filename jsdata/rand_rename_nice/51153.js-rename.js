'use strict';
const common = require("../common.js");
const assert = require("assert");
const primValues = {
  string : "a",
  number : 1,
  object : {
    0 : "a"
  },
  array : [1, 2, 3]
};
const bench = common.createBenchmark(main, {
  primitive : Object.keys(primValues),
  n : [2e4],
  strict : [0, 1],
  method : ["deepEqual", "notDeepEqual"]
});
function main({
  n : path,
  primitive : primitive,
  method : name,
  strict : id
}) {
  const c = primValues[primitive];
  const indexedDB = c;
  const o = c;
  const i = "b";
  if (id) {
    name = name.replace("eep", "eepStrict");
  }
  const addMemberToDiscussion = assert[name];
  const orange = name.includes("not") ? i : o;
  bench.start();
  for (let i = 0; i < path; ++i) {
    addMemberToDiscussion([indexedDB], [orange]);
  }
  bench.end(path);
}
;
