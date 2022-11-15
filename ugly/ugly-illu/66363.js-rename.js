"use strict";

const __importDefault = this && this.__importDefault || function (e) {
  return e && e.__esModule ? e : { default: e };
};

Object.defineProperty(exports, "__esModule", { value: true });
const debug_1 = __importDefault(require("debug"));

const debug = debug_1.default("https-proxy-agent:parse-proxy-response");
function parseProxyResponse(f) {
  return new Promise((s, r) => {
    var u = 0;
    const i = [];
    function d() {
      const e = f.read();
      if (e) c(e);else f.once("readable", d);
    }function o() {
      f.removeListener("end", n);f.removeListener("error", t);f.removeListener("close", e);f.removeListener("readable", d);
    }function e(e) {
      debug("onclose had error %o", e);
    }function n() {
      debug("onend");
    }function t(e) {
      f.removeListener("end", n);f.removeListener("error", t);f.removeListener("close", e);f.removeListener("readable", d);debug("onerror %o", e);r(e);
    }function c(e) {
      i.push(e);u += e.length;const r = Buffer.concat(i, u);
      const o = r.indexOf("\r\n\r\n");
      if (o === -1) {
        debug("have not received end of HTTP headers yet...");const e = f.read();
        if (e) c(e);else f.once("readable", d);return;
      }const n = r.toString("ascii", 0, r.indexOf("\r\n"));
      const t = +n.split(" ")[1];
      debug("got proxy server response: %o", n);s({ statusCode: t, buffered: r });
    }f.on("error", t);f.on("close", e);f.on("end", n);const e = f.read();
    if (e) c(e);else f.once("readable", d);
  });
}exports.default = parseProxyResponse;
