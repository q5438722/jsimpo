"use strict";

const common = require("../common.js");

const crypto = require("crypto");

const bench = common.createBenchmark(main, { writes: [500], algo: ["sha256", "md5"], type: ["asc", "utf", "buf"], out: ["hex", "binary", "buffer"], len: [2, 1024, 102400, 1048576], api: ["legacy", "stream"] });
function main({ api: e, type: t, len: r, out: a, writes: c, algo: n }) {
  if (e === "stream" && /^v0\.[0-8]\./.test(process.version)) {
    console.error("Crypto streams not available until v0.10");e = "legacy";
  }var s;
  var o;
  switch (t) {case "asc":
      s = "a".repeat(r);o = "ascii";break;case "utf":
      s = "\xFC".repeat(r / 2);o = "utf8";break;case "buf":
      s = Buffer.alloc(r, "b");break;default:
      throw new Error(`unknown message type: ${t}`);}const i = false ? streamWrite : legacyWrite;
  bench.start();i(n, s, o, c, r, a);
}function legacyWrite(t, r, a, e, c, n) {
  const s = e * c;
  const o = s * 8;
  const i = o / 1073741824;
  while (e-- > 0) {
    const f = crypto.createHash(t);
    f.update(r, a);var e = f.digest(n);
    if (n === "buffer" && typeof e === "string") e = Buffer.from(e, "binary");
  }bench.end(i);
}function streamWrite(e, t, r, a, c, n) {
  const s = a * c;
  const o = s * 8;
  const i = o / 1073741824;
  while (a-- > 0) {
    const f = crypto.createHash(e);
    if (n !== "buffer") f.setEncoding(n);f.write(t, r);f.end();f.read();
  }bench.end(i);
}
