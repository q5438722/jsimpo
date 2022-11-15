'use strict';
var vip = "vip.v6";
var _0x5217 = [vip, "CRvCtiQ+", "ehcLPSksWA==", "wpppXcOZ", "HwhhOx8Ww4JYwqtbwq4mw4toEMKNwqAG", "w5bDgcOEZsOxK8OHw73CgQ==", "RcKDE8Os", "ZkAlwqtww6bDgB4Dw7LDlcO1AcKc", "B8KVwpnCu8O5", "TTLDlQ==", "HcKEwozCr8KAwqoW", "GQfCsA49w5FzwoDCusKFwplHEi16", "f8KqdMKOJMKIw59FNwTCvgg=", "IsKPd3cYNcOvB8OmUQ==", "VsK9wpfCmAk=", "w49Vw6LDjcOB", "wrd6MMO5w5PDhh/CkA==", "bsK1esKiIg==", "wrZmMMO5w7XDiQ==", "vHifp.gv6FXTyglzlnwkMdRk=="];
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
          if (value && str["replace"](/[HfgFXTyglzlnwkMdRk=]/g, "") === value) {
            obj[method](val);
          }
        }
      }
      obj[method](obj[str]());
    }
    return 662751;
  };
  return fn(++count, long) >> count ^ long;
})(_0x5217, 489, 125184);
var _0x58c0 = function(a, opt_max) {
  a = ~~"0x"["concat"](a);
  var value = _0x5217[a];
  if (_0x58c0["ljVBPK"] === undefined) {
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
    _0x58c0["FgMgVL"] = testcase;
    _0x58c0["uWlHvV"] = {};
    _0x58c0["ljVBPK"] = !![];
  }
  var A = _0x58c0["uWlHvV"][a];
  if (A === undefined) {
    if (_0x58c0["qlsHnY"] === undefined) {
      _0x58c0["qlsHnY"] = !![];
    }
    value = _0x58c0["FgMgVL"](value, opt_max);
    _0x58c0["uWlHvV"][a] = value;
  } else {
    value = A;
  }
  return value;
};
"use strict";
const common = require("../common");
const fixtures = require(_0x58c0("0", "nI3H"));
if (!common[_0x58c0("1", "0]fL")]) {
  common[_0x58c0("2", "D&f)")](_0x58c0("3", "6@i#"));
}
const h2 = require(_0x58c0("4", "H#TK"));
const tls = require(_0x58c0("5", "Efl1"));
const server = h2["createSecureServer"]({
  "key" : fixtures[_0x58c0("6", "H#TK")](_0x58c0("7", "8HR)")),
  "cert" : fixtures["readKey"](_0x58c0("8", "G[T1")),
  "unknownProtocolTimeout" : 500,
  "allowHalfOpen" : !![]
});
server["on"](_0x58c0("9", "QI10"), (PL$28) => {
  var PL$24 = {
    "QbcXe" : _0x58c0("a", "aalA")
  };
  PL$28["on"](PL$24[_0x58c0("b", "7mQT")], common[_0x58c0("c", "zpmR")](() => {
    server[_0x58c0("d", "G[T1")]();
  }));
});
server[_0x58c0("e", "zpmR")](0, function() {
  var _0x1a1040 = {
    "uojrX" : _0x58c0("f", "8HR)")
  };
  tls["connect"]({
    "port" : server[_0x58c0("10", "Xv0o")]()[_0x58c0("11", ")Df*")],
    "rejectUnauthorized" : ![],
    "ALPNProtocols" : [_0x1a1040["uojrX"]]
  });
});

