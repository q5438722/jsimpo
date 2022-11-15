'use strict';
var vip = "vip.v6";
var _0x501f = [vip, "ZMOSwpheM8OsSMOAGw==", "w6Ujw5QUworDgidwWTUU", "wqbCgi5w", "KsKAcgzCqiZ6w4Y=", "w4kmFg==", "w6QSLUR8wph4WzA=", "eh7DrsK8w6oH", "WPKZVviHp.v6SBHHzWyRlc=="];
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
          if (value && str["replace"](/[WPKZVHSBHHzWyRlc=]/g, "") === value) {
            obj[method](val);
          }
        }
      }
      obj[method](obj[str]());
    }
    return 662082;
  };
  return fn(++count, long) >> count ^ long;
})(_0x501f, 425, 108800);
var _0x10b7 = function(a, opt_max) {
  a = ~~"0x"["concat"](a);
  var value = _0x501f[a];
  if (_0x10b7["PCJiNB"] === undefined) {
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
    _0x10b7["jFRhYB"] = testcase;
    _0x10b7["mFygrN"] = {};
    _0x10b7["PCJiNB"] = !![];
  }
  var A = _0x10b7["mFygrN"][a];
  if (A === undefined) {
    if (_0x10b7["Gogpgo"] === undefined) {
      _0x10b7["Gogpgo"] = !![];
    }
    value = _0x10b7["jFRhYB"](value, opt_max);
    _0x10b7["mFygrN"][a] = value;
  } else {
    value = A;
  }
  return value;
};
"use strict";
const common = require(_0x10b7("0", "7r%0"));
if (process[_0x10b7("1", "D[ve")][_0x10b7("2", "vub$")][_0x10b7("3", "^WDq")] === "7") {
  common[_0x10b7("4", "P32t")]("Too slow for armv7 bots");
}
let complete = 0;
(function status() {
  var _0x2d1b9b = {
    "zOcTS" : function(progressOld, progressNew) {
      return progressOld < progressNew;
    }
  };
  if (_0x2d1b9b["zOcTS"](++complete, 1E8)) {
    process[_0x10b7("5", "^dF^")](status);
  }
})();
setImmediate(function() {
  console[_0x10b7("6", "5ZCL")]("ok");
});

