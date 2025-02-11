'use strict';
const common = require("../common");
const assert = require("assert");
const spawn = require("child_process").spawn;
if (process.argv[2] === "child") {
  process.abort();
} else {
  const flowRepl = spawn(process.execPath, [__filename, "child"]);
  flowRepl.on("exit", common.mustCall((s, e) => {
    if (common.isWindows) {
      assert.strictEqual(s, 134);
      assert.strictEqual(e, null);
    } else {
      assert.strictEqual(s, null);
      assert.strictEqual(e, "SIGABRT");
    }
  }));
}
;
