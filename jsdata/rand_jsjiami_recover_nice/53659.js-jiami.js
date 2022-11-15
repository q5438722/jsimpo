'use strict';
const common = require("../common");
const fixtures = require("../common/fixtures");
const assert = require("assert");
const {
  exec : exec
} = require("child_process");
const nodeBinary = process["argv"][0];
if (!common["isMainThread"]) {
  common["skip"]("process.chdir is not available in Workers");
}
const selfRefModule = fixtures["path"]("self_ref_module");
const fixtureA = fixtures["path"]("printA.js");
exec('"' + nodeBinary + '" -r self_ref "' + fixtureA + '"', {
  "cwd" : selfRefModule
}, (a, expected, canCreateDiscussions) => {
  assert["ifError"](a);
  assert["strictEqual"](expected, "A\n");
});

