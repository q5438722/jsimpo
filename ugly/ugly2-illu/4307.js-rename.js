const browserify = require("../");

const vm = require("vm");

const test = require("tap").test;

const fs = require("fs");

test("stream", function (a) {
  a.plan(2);const r = fs.createReadStream(__dirname + "/stream/main.js");
  const e = browserify(r, { basedir: __dirname + "/stream" });
  e.bundle(function (r, e) {
    vm.runInNewContext(e, { t: a });
  });
});
