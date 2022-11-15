'use strict';
require("../common");
const assert = require("assert");
const {
  spawnSync : spawnSync
} = require("child_process");
const os = require("os");
const {
  signal : signal,
  status : status,
  output : output
} = spawnSync(process.execPath, ["--security-revert=not-a-cve"]);
assert.strictEqual(signal, null);
assert.strictEqual(status, 12);
assert.strictEqual(output[2].toString(), `${process.execPath}: Error: ` + `Attempt to revert an unknown CVE [not-a-cve]${os.EOL}`);

