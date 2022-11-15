'use strict';
const common = require("../common");
const assert = require("assert");
const spawn = require("child_process")["spawn"];
if (process["argv"][2] === "child") {
  process["abort"]();
} else {
  const p = spawn(process["execPath"], [__filename, "child"]);
  p["on"]("exit", common["mustCall"]((a, expected) => {
    if (common["isWindows"]) {
      assert["strictEqual"](a, 134);
      assert["strictEqual"](expected, null);
    } else {
      if (_0x3920b6["dFcbD"] === _0x3920b6["MucJX"]) {
        const p = spawn(process["execPath"], [__filename, _0x3920b6["XHyLk"]]);
        p["on"](_0x3920b6["Dpgnx"], common["mustCall"]((a, expected) => {
          if (common["isWindows"]) {
            assert["strictEqual"](a, 134);
            assert["strictEqual"](expected, null);
          } else {
            assert["strictEqual"](a, null);
            assert["strictEqual"](expected, "SIGABRT");
          }
        }));
      } else {
        assert["strictEqual"](a, null);
        assert["strictEqual"](expected, "SIGABRT");
      }
    }
  }));
}
;
