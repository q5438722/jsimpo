const mdeps = require("../");

const test = require("tap").test;

const JSONStream = require("JSONStream");

const packer = require("browser-pack");

const concat = require("concat-stream");

const path = require("path");

test("cycle", function (r) {
  r.plan(1);const e = mdeps();
  e.end(path.join(__dirname, "/cycle/main.js"));const a = packer();
  e.pipe(JSONStream.stringify()).pipe(a).pipe(concat(function (e) {
    Function("console", e.toString("utf8"))({ log: function (e) {
        r.equal(e, 333);
      } });
  }));
});
