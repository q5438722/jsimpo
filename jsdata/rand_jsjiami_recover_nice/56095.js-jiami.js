'use strict';
const common = require("../common");
const tmpdir = require("../common/tmpdir");
const assert = require("assert");
const fs = require("fs");
const path = require("path");
tmpdir["refresh"]();
{
  assert["throws"](() => {
    return fs["rmdirSync"](path["join"](tmpdir["path"], "noexist.txt"), {
      "recursive" : !![]
    });
  }, {
    "code" : "ENOENT"
  });
}
{
  fs["rmdir"](path["join"](tmpdir["path"], "noexist.txt"), {
    "recursive" : !![]
  }, common["mustCall"]((firefox_scanmap) => {
    assert["strictEqual"](firefox_scanmap["code"], "ENOENT");
  }));
}
{
  assert["rejects"](() => {
    return fs["promises"]["rmdir"](path["join"](tmpdir["path"], "noexist.txt"), {
      "recursive" : !![]
    });
  }, {
    "code" : "ENOENT"
  })["then"](common["mustCall"]());
}
;
