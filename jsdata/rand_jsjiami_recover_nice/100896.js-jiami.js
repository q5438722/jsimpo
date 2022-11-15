'use strict';
const {
  isCI : isCI
} = require("ci-info");
const runPrettier = require("../runPrettier.js");
describe("format correctly if stdin content compatible with stdin-filepath", () => {
  runPrettier(_0x173060["leBSq"], ["--stdin-filepath", _0x173060["xzBwL"]], {
    "input" : ".name { display: none; }"
  })["test"]({
    "status" : 0
  });
});
describe("throw error if stdin content incompatible with stdin-filepath", () => {
  runPrettier(_0x361885["nbPGP"], [_0x361885["CwnGj"], _0x361885["XClQs"]], {
    "input" : _0x361885["JEdhL"]
  })["test"]({
    "status" : "non-zero"
  });
});
describe("gracefully handle stdin-filepath with nonexistent directory", () => {
  var patterns = {};
  runPrettier(patterns["FwYpa"], [patterns["PJgti"], patterns["ULxEx"]], {
    "input" : patterns["FIcKz"]
  })["test"]({
    "status" : 0
  });
});
describe("apply editorconfig for stdin-filepath with nonexistent file", () => {
  runPrettier(_0x5f3b70["CLftC"], [_0x5f3b70["zCuOn"], _0x5f3b70["ctwfi"]], {
    "input" : '\nfunction f() {\n  console.log("should be indented with a tab");\n}\n'["trim"]()
  })["test"]({
    "status" : 0
  });
});
describe("apply editorconfig for stdin-filepath with nonexistent directory", () => {
  runPrettier(_0x1571b0["NdbFS"], ["--stdin-filepath", _0x1571b0["JsGJS"]], {
    "input" : '\nfunction f() {\n  console.log("should be indented with a tab");\n}\n'["trim"]()
  })["test"]({
    "status" : 0
  });
});
describe("apply editorconfig for stdin-filepath with a deep path", () => {
  runPrettier(_0x89dc1a["kNywQ"], [_0x89dc1a["aQFlO"], _0x89dc1a["OnXQB"] + "a/"["repeat"](30) + _0x89dc1a["UKzGb"]], {
    "input" : '\nfunction f() {\n  console.log("should be indented with a tab");\n}\n'["trim"]()
  })["test"]({
    "status" : 0
  });
});
if (isCI) {
  describe("apply editorconfig for stdin-filepath in root", () => {
    const stdout = '\nfunction f() {\n  console.log("should be indented with a tab");\n}\n'["trim"]();
    runPrettier(_0x4f6299["VyeHw"], [_0x4f6299["ZzJPQ"], _0x4f6299["zMrSd"]], {
      "input" : stdout
    })["test"]({
      "status" : 0,
      "stdout" : stdout + "\n",
      "stderr" : "",
      "write" : []
    });
  });
}
describe("apply editorconfig for stdin-filepath with a deep path", () => {
  runPrettier(_0x248a9f["joKoo"], [_0x248a9f["MeCaM"], _0x248a9f["MIxHi"] + "a/"["repeat"](30) + _0x248a9f["EapQE"]], {
    "input" : '\nfunction f() {\n  console.log("should be indented with a tab");\n}\n'["trim"]()
  })["test"]({
    "status" : 0
  });
});
describe("don\u2019t apply editorconfig outside project for stdin-filepath with nonexistent directory", () => {
  runPrettier(_0x1d447d["Zgnye"], [_0x1d447d["kdVKw"], "config/editorconfig/repo-root/nonexistent/one/two/three.js"], {
    "input" : '\nfunction f() {\n  console.log("should be indented with 2 spaces");\n}\n'["trim"]()
  })["test"]({
    "status" : 0
  });
});
describe("output file as-is if stdin-filepath matched patterns in ignore-path", () => {
  runPrettier("cli/stdin-ignore", [_0x1c65be["VjtSR"], _0x1c65be["YrBZf"]], {
    "input" : "hello_world( );"
  })["test"]({
    "stdout" : "hello_world( );",
    "status" : 0
  });
});

