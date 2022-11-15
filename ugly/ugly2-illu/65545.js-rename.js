const t = require("tap");

var { fake: mockNpm } = require("../fixtures/mock-npm");

t.test("pings", t => {
  t.plan(8);const l = "https://registry.npmjs.org";
  var o = 0;
  const e = t.mock("../../lib/ping.js", { "../../lib/utils/ping.js": function (e) {
      t.equal(e.registry, l, "passes flatOptions");return {};
    }, npmlog: { notice: (e, s) => {
        ++o;if (o === 1) {
          t.equal(e, "PING", "should log a PING");t.equal(s, l, "should log the registry url");
        } else {
          t.equal(e, "PONG", "should log a PONG");t.match(s, /\d+ms/, "should log the elapsed milliseconds");
        }
      } } });
  const s = mockNpm({ config: { registry: l }, flatOptions: { registry: l } });
  const n = new e(s);
  n.exec([], e => {
    t.equal(o, 2, "should have logged 2 lines");t.error(e, "npm ping");t.ok("should be able to ping");
  });
});t.test("pings and logs details", l => {
  l.plan(10);const o = "https://registry.npmjs.org";
  const n = { extra: "data" };
  var i = 0;
  const e = l.mock("../../lib/ping.js", { "../../lib/utils/ping.js": function (e) {
      l.equal(e.registry, o, "passes flatOptions");return n;
    }, npmlog: { notice: (e, s) => {
        ++i;if (i === 1) {
          l.equal(e, "PING", "should log a PING");l.equal(s, o, "should log the registry url");
        } else if (i === 2) {
          l.equal(e, "PONG", "should log a PONG");l.match(s, /\d+ms/, "should log the elapsed milliseconds");
        } else {
          l.equal(e, "PONG", "should log a PONG");const t = JSON.parse(s);
          l.match(t, n, "should log JSON stringified details");
        }
      } } });
  const s = mockNpm({ config: { registry: o }, flatOptions: { registry: o } });
  const t = new e(s);
  t.exec([], e => {
    l.equal(i, 3, "should have logged 3 lines");l.error(e, "npm ping");l.ok("should be able to ping");
  });
});t.test("pings and returns json", t => {
  t.plan(11);const l = "https://registry.npmjs.org";
  const o = { extra: "data" };
  var n = 0;
  const e = t.mock("../../lib/ping.js", { "../../lib/utils/ping.js": function (e) {
      t.equal(e.registry, l, "passes flatOptions");return o;
    }, npmlog: { notice: (e, s) => {
        ++n;if (n === 1) {
          t.equal(e, "PING", "should log a PING");t.equal(s, l, "should log the registry url");
        } else {
          t.equal(e, "PONG", "should log a PONG");t.match(s, /\d+ms/, "should log the elapsed milliseconds");
        }
      } } });
  const s = mockNpm({ config: { registry: l, json: true }, flatOptions: { registry: l }, output: function (e) {
      const s = JSON.parse(e);
      t.equal(s.registry, l, "returns the correct registry url");t.match(s.details, o, "prints returned details");t.type(s.time, "number", "returns time as a number");
    } });
  const i = new e(s);
  i.exec([], e => {
    t.equal(n, 2, "should have logged 2 lines");t.error(e, "npm ping");t.ok("should be able to ping");
  });
});
