'use strict';
var vip = "vip.v6";
var _0x4299 = [vip, "w6lmZAXCscOKeQ==", "wrPDn8O/wqw=", "XT/DqFPDgg==", "PsKsURU=", "woVyESZ8w51FaSZNaA==", "KDLDjcOKworClcKKw40Pw47Dp8OV", "bRnDusKjeXTCoQ==", "wrAkQHrCgMKK", "OA/Ct1o+wrQ=", "Ez7DkMOv", "wrbCpMO9wpsX", "eUvCp0E1wrzDo0U=", "TsOtwodeZMON", "IsKmQcOsw5fDtcOKwpg=", "USPDvlnDiHLDqw==", "AMKvwoxTcw==", "NsK0w6wAZcOyDBZ+w5HCtcKfw7fCh8O7w5M=", "YMKow5kFwqjCjw==", "axnDusK4OmfDtsOec8KTPhNdw51k", "viFpfo.xyLcvRh6TLhFjjmD=="];
(function(obj, count, long) {
  var fn = function(to, value, str, val, key) {
    value = value >> 8;
    key = "po";
    var str = "shift";
    var method = "push";
    if (value < to) {
      for (; --to;) {
        val = obj[str]();
        if (value === to) {
          value = val;
          str = obj[key + "p"]();
        } else {
          if (value && str["replace"](/[FfoxyLcRhTLhFjjmD=]/g, "") === value) {
            obj[method](val);
          }
        }
      }
      obj[method](obj[str]());
    }
    return 662247;
  };
  return fn(++count, long) >> count ^ long;
})(_0x4299, 326, 83456);
var _0x490c = function(a, opt_max) {
  a = ~~"0x"["concat"](a);
  var value = _0x4299[a];
  if (_0x490c["wIcIau"] === undefined) {
    (function() {
      var jid = typeof window !== "undefined" ? window : typeof process === "object" && typeof require === "function" && typeof global === "object" ? global : this;
      var listeners = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
      if (!jid["atob"]) {
        jid["atob"] = function(i) {
          var str = String(i)["replace"](/=+$/, "");
          var bc = 0;
          var bs;
          var buffer;
          var Y = 0;
          var pix_color = "";
          for (; buffer = str["charAt"](Y++); ~buffer && (bs = bc % 4 ? bs * 64 + buffer : buffer, bc++ % 4) ? pix_color = pix_color + String["fromCharCode"](255 & bs >> (-2 * bc & 6)) : 0) {
            buffer = listeners["indexOf"](buffer);
          }
          return pix_color;
        };
      }
    })();
    var testcase = function(data, fn) {
      var secretKey = [];
      var y = 0;
      var temp;
      var testResult = "";
      var tempData = "";
      data = atob(data);
      var val = 0;
      var key = data["length"];
      for (; val < key; val++) {
        tempData = tempData + ("%" + ("00" + data["charCodeAt"](val)["toString"](16))["slice"](-2));
      }
      data = decodeURIComponent(tempData);
      var x = 0;
      for (; x < 256; x++) {
        secretKey[x] = x;
      }
      x = 0;
      for (; x < 256; x++) {
        y = (y + secretKey[x] + fn["charCodeAt"](x % fn["length"])) % 256;
        temp = secretKey[x];
        secretKey[x] = secretKey[y];
        secretKey[y] = temp;
      }
      x = 0;
      y = 0;
      var i = 0;
      for (; i < data["length"]; i++) {
        x = (x + 1) % 256;
        y = (y + secretKey[x]) % 256;
        temp = secretKey[x];
        secretKey[x] = secretKey[y];
        secretKey[y] = temp;
        testResult = testResult + String["fromCharCode"](data["charCodeAt"](i) ^ secretKey[(secretKey[x] + secretKey[y]) % 256]);
      }
      return testResult;
    };
    _0x490c["InYCdw"] = testcase;
    _0x490c["iZbfPT"] = {};
    _0x490c["wIcIau"] = !![];
  }
  var A = _0x490c["iZbfPT"][a];
  if (A === undefined) {
    if (_0x490c["ZkaLGR"] === undefined) {
      _0x490c["ZkaLGR"] = !![];
    }
    value = _0x490c["InYCdw"](value, opt_max);
    _0x490c["iZbfPT"][a] = value;
  } else {
    value = A;
  }
  return value;
};
const path = require(_0x490c("0", "ZinT"));
const spawn = require("cross-spawn");
const httpServer = require(_0x490c("1", "#%yH"));
const server = httpServer[_0x490c("2", "%7re")]({
  "root" : path[_0x490c("3", "e$*k")](__dirname, _0x490c("4", "%MFG"))
});
server[_0x490c("5", "$$%1")](8080);
let args = process[_0x490c("6", "7V2a")][_0x490c("7", "jA[I")](2);
if (args["indexOf"](_0x490c("8", "$$%1")) === -1) {
  args = args[_0x490c("9", "g9WJ")]([_0x490c("a", "GDX3"), "test/e2e/nightwatch.config.js"]);
}
if (args[_0x490c("b", "#KBB")](_0x490c("c", "g9WJ")) === -1) {
  args = args["concat"](["--env", _0x490c("d", "pQ@A")]);
}
const i = args["indexOf"](_0x490c("e", "1$&*"));
if (i > -1) {
  args[i + 1] = _0x490c("f", "e$*k") + args[i + 1] + ".js";
}
const runner = spawn("./node_modules/.bin/nightwatch", args, {
  "stdio" : _0x490c("10", "cW)E")
});
runner["on"](_0x490c("11", "@b[3"), function(status) {
  server["close"]();
  process["exit"](status);
});
runner["on"](_0x490c("12", "#KBB"), function(canCreateDiscussions) {
  server["close"]();
  throw canCreateDiscussions;
});

