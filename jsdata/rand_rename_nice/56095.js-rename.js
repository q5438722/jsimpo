'use strict';
const common = require("../common");
const tmpdir = require("../common/tmpdir");
const assert = require("assert");
const fs = require("fs");
const path = require("path");
tmpdir.refresh();
{
  assert.throws(() => {
    return fs.rmdirSync(path.join(tmpdir.path, "noexist.txt"), {
      recursive : true
    });
  }, {
    code : "ENOENT"
  });
}
{
  fs.rmdir(path.join(tmpdir.path, "noexist.txt"), {
    recursive : true
  }, common.mustCall((t) => {
    assert.strictEqual(t.code, "ENOENT");
  }));
}
{
  assert.rejects(() => {
    return fs.promises.rmdir(path.join(tmpdir.path, "noexist.txt"), {
      recursive : true
    });
  }, {
    code : "ENOENT"
  }).then(common.mustCall());
}
;