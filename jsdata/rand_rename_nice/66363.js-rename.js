'use strict';
var __importDefault = this && this.__importDefault || function(obj) {
  return obj && obj.__esModule ? obj : {
    default : obj
  };
};
Object.defineProperty(exports, "__esModule", {
  value : true
});
const debug_1 = __importDefault(require("debug"));
const debug = debug_1.default("https-proxy-agent:parse-proxy-response");
function parseProxyResponse(f) {
  return new Promise((sucess, r) => {
    function d() {
      const e = f.read();
      if (e) {
        c(e);
      } else {
        f.once("readable", d);
      }
    }
    function buildFromContext() {
      f.removeListener("end", end);
      f.removeListener("error", t);
      f.removeListener("close", e);
      f.removeListener("readable", d);
    }
    function e(n) {
      debug("onclose had error %o", n);
    }
    function end() {
      debug("onend");
    }
    function t(e) {
      buildFromContext();
      debug("onerror %o", e);
      r(e);
    }
    function c(e) {
      i.push(e);
      argsBufLength = argsBufLength + e.length;
      const buffered = Buffer.concat(i, argsBufLength);
      const o = buffered.indexOf("\r\n\r\n");
      if (o === -1) {
        debug("have not received end of HTTP headers yet...");
        d();
        return;
      }
      const n = buffered.toString("ascii", 0, buffered.indexOf("\r\n"));
      const statusCode = +n.split(" ")[1];
      debug("got proxy server response: %o", n);
      sucess({
        statusCode : statusCode,
        buffered : buffered
      });
    }
    let argsBufLength = 0;
    const i = [];
    f.on("error", t);
    f.on("close", e);
    f.on("end", end);
    d();
  });
}
exports.default = parseProxyResponse;

