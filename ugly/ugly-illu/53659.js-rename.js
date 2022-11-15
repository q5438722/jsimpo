"use strict";

const common = require("../common");

const fixtures = require("../common/fixtures");

const assert = require("assert");

var { exec } = require("child_process");

const nodeBinary = process.argv[0];
if (!common.isMainThread) common.skip("process.chdir is not available in Workers");const selfRefModule = fixtures.path("self_ref_module");
const fixtureA = fixtures.path("printA.js");
exec(`"${nodeBinary}" -r self_ref "${fixtureA}"`, { cwd: selfRefModule }, (e, r, s) => {
  assert.ifError(e);assert.strictEqual(r, "A\n");
});
