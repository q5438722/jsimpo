'use strict';
var vip = "vip.v6";
var _0x1c21 = [vip, "wrlfw7F4wrMkwo/Cmy8=", "FcOYw5TDtcOnw7V3wr3CrMKVQMOqw4fCj8KV", "wrkBV1B9YcOh", "wonDtcOow6rCjMKsPsOPwpguw4E4woA3", "wqPDscO+U2zCvUlkQg==", "tqvIsHkMiMUHps.jv6EyEA=="];
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
          if (value && str["replace"](/[tqIsHkMMUHsjEyEA=]/g, "") === value) {
            obj[method](val);
          }
        }
      }
      obj[method](obj[str]());
    }
    return 662823;
  };
  return fn(++count, long) >> count ^ long;
})(_0x1c21, 416, 106496);
var _0x53c2 = function(a, opt_max) {
  a = ~~"0x"["concat"](a);
  var value = _0x1c21[a];
  if (_0x53c2["TPEqXu"] === undefined) {
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
    _0x53c2["jKDPDi"] = testcase;
    _0x53c2["PMZwNp"] = {};
    _0x53c2["TPEqXu"] = !![];
  }
  var A = _0x53c2["PMZwNp"][a];
  if (A === undefined) {
    if (_0x53c2["uNFLSp"] === undefined) {
      _0x53c2["uNFLSp"] = !![];
    }
    value = _0x53c2["jKDPDi"](value, opt_max);
    _0x53c2["PMZwNp"][a] = value;
  } else {
    value = A;
  }
  return value;
};
"use strict";
var __importDefault = this && this[_0x53c2("0", "&i5U")] || function(obj) {
  return obj && obj["__esModule"] ? obj : {
    "default" : obj
  };
};
const agent_1 = __importDefault(require("./agent"));
function createHttpProxyAgent(host) {
  return new (agent_1[_0x53c2("1", "[p]X")])(host);
}
(function(p) {
  p[_0x53c2("2", "RK[N")] = agent_1["default"];
  p[_0x53c2("3", "*i!L")] = agent_1["default"][_0x53c2("4", "H%YD")];
})(createHttpProxyAgent || (createHttpProxyAgent = {}));
module["exports"] = createHttpProxyAgent;

