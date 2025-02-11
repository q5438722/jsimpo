const parse = require("../");

const test = require("tape");

test("nums", function (e) {
  const u = parse(["-x", "1234", "-y", "5.67", "-z", "1e7", "-w", "10f", "--hex", "0xdeadbeef", "789"]);
  e.deepEqual(u, { x: 1234, y: 5.67, z: 1e7, w: "10f", hex: 3735928559, _: [789] });e.deepEqual(typeof u.x, "number");e.deepEqual(typeof u.y, "number");e.deepEqual(typeof u.z, "number");e.deepEqual(typeof u.w, "string");e.deepEqual(typeof u.hex, "number");e.deepEqual(typeof u._[0], "number");e.end();
});test("already a number", function (e) {
  const u = parse(["-x", 1234, 789]);
  e.deepEqual(u, { x: 1234, _: [789] });e.deepEqual(typeof u.x, "number");e.deepEqual(typeof u._[0], "number");e.end();
});
