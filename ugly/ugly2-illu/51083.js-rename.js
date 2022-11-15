"use strict";

const common = require("../common.js");

const util = require("util");

const bench = common.createBenchmark(main, { len: [102400, 16777216], type: ["utf", "asc", "buf"], dur: [5] }, { test: { len: 1024 }, flags: ["--expose-internals", "--no-warnings"] });
function main({ dur: n, len: e, type: t }) {
  var { TCP: i, TCPConnectWrap: c, constants: o } = common.binding("tcp_wrap");
  var { WriteWrap: r } = common.binding("stream_wrap");
  const a = common.PORT;
  function s(e, n) {
    throw util._errnoException(e, n);
  }const f = new i(o.SERVER);
  var u = f.bind("127.0.0.1", a);
  if (u) s(u, "bind");u = f.listen(511);if (u) s(u, "listen");f.onconnection = function (t, i) {
    if (t) s(t, "connect");i.onread = function (e) {
      if (!e) s("read");const n = new r();
      n.async = false;t = i.writeBuffer(n, Buffer.from(e));if (t) s(t, "write");n.oncomplete = function (e, n, t) {
        if (t) s(t, "write");
      };
    };i.readStart();
  };var w;
  switch (t) {case "buf":
      w = Buffer.alloc(e, "x");break;case "utf":
      w = "\xFC".repeat(e / 2);break;case "asc":
      w = "x".repeat(e);break;default:
      throw new Error(`invalid type: ${t}`);}const l = new i(o.SOCKET);
  const m = new c();
  var b = 0;
  u = l.connect(m, "127.0.0.1", a);if (u) s(u, "connect");l.onread = function (e) {
    if (!e) s("read");b += e.byteLength;
  };m.oncomplete = function (e) {
    if (e) s(e, "connect");bench.start();l.readStart();setTimeout(() => {
      bench.end(2 * (b * 8) / 1073741824);process.exit(0);
    }, n * 1e3);while (l.writeQueueSize === 0) {
      ;;const e = new r();
      e.oncomplete = d;var n;
      switch (t) {case "buf":
          n = l.writeBuffer(e, w);break;case "utf":
          n = l.writeUtf8String(e, w);break;case "asc":
          n = l.writeAsciiString(e, w);break;}if (n) s(n, "write");
    }
  };function p() {
    ;;const e = new r();
    e.oncomplete = d;var n;
    switch (t) {case "buf":
        n = l.writeBuffer(e, w);break;case "utf":
        n = l.writeUtf8String(e, w);break;case "asc":
        n = l.writeAsciiString(e, w);break;}if (n) s(n, "write");
  }function d(e, n) {
    if (e) s(e, "write");while (l.writeQueueSize === 0) {
      ;;const e = new r();
      e.oncomplete = d;var n;
      switch (t) {case "buf":
          n = l.writeBuffer(e, w);break;case "utf":
          n = l.writeUtf8String(e, w);break;case "asc":
          n = l.writeAsciiString(e, w);break;}if (n) s(n, "write");
    }
  }
}
