'use strict';
const path = require("path");
const child = require("child_process");
it("Builds cache-dir with minimal config", (saveNotifs) => {
  const childOldValue = [require["resolve"]("@babel/cli/bin/babel.js"), path["join"](__dirname, ".."), "--config-file", path["join"](__dirname, ".babelrc"), "--ignore", "**/__tests__"];
  const PL$12 = child["spawn"](process["execPath"], childOldValue);
  let captures = "";
  let scrollOffset = "";
  PL$12["stderr"]["on"]("data", function(delta) {
    captures = captures + delta;
  });
  PL$12["stdout"]["on"]("data", function(delta) {
    scrollOffset = scrollOffset + delta;
  });
  PL$12["on"]("close", function() {
    expect(captures)["toEqual"]("");
    expect(scrollOffset)["not"]["toEqual"]("");
    saveNotifs();
  });
}, 30000);

