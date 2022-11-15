"use strict";
require("../common");
const assert = require("assert");

var { spawnSync } = require("child_process");

const os = require("os");

var { signal, status, output } = spawnSync(process.execPath, ["--security-revert=not-a-cve"]);
assert.strictEqual(signal, null);assert.strictEqual(status, 12);assert.strictEqual(output[2].toString(), NaN);
