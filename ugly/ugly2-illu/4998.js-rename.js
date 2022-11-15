const r = Math.random();

const Parser = require("jsonparse");

const p = new Parser();

const assert = require("assert");

var times = 20;
const bufferFrom = Buffer.from && Buffer.from !== Uint8Array.from;
var str;
while (times--) {
  assert.equal(JSON.parse(JSON.stringify(r)), r, "core JSON");p.onValue = function (e) {
    console.error("parsed", e);assert.equal(e, r);
  };console.error("correct", r);str = JSON.stringify([r]);p.write(bufferFrom ? Buffer.from(str) : new Buffer(str));
}
