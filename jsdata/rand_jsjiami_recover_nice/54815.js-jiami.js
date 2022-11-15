'use strict';
require("../common");
const assert = require("assert");
const fork = require("child_process")["fork"];
if (process["argv"][2] === "child") {
  process["send"]("1");
  setTimeout(function() {
    process["send"]("2");
  }, 200);
  process["on"]("disconnect", function() {
    process["stdout"]["write"]("3");
  });
} else {
  const PL$12 = fork(__filename, ["child"], {
    "silent" : !![]
  });
  const a = [];
  let expected = "";
  PL$12["on"]("message", function(b) {
    a["push"](b);
    if (b === "2") {
      PL$12["disconnect"]();
    }
  });
  PL$12["stdout"]["on"]("data", function(errorMargin) {
    expected = expected + errorMargin;
  });
  PL$12["once"]("exit", function() {
    assert["deepStrictEqual"](a, ["1", "2"]);
    assert["strictEqual"](expected, "3");
  });
}
;
