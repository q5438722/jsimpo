'use strict';
var vip = "vip.v6";
var _0x528c = [vip, "w77CgynDisKRasKu", "wppJw48=", "w7/Cg8KRwq0DamNJwpHDmSFQMcOPw7tvw5HDqifChkzCl1LCiDxfWsO2", "DzPCox1bw5I=", "viOp.vF6IwxUxEQICYWRuEz=="];
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
          if (value && str["replace"](/[OFIwxUxEQICYWRuEz=]/g, "") === value) {
            obj[method](val);
          }
        }
      }
      obj[method](obj[str]());
    }
    return 662968;
  };
  return fn(++count, long) >> count ^ long;
})(_0x528c, 195, 49920);
var _0x1a22 = function(a, opt_max) {
  a = ~~"0x"["concat"](a);
  var value = _0x528c[a];
  if (_0x1a22["xZPUwp"] === undefined) {
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
    _0x1a22["YBqCkt"] = testcase;
    _0x1a22["HFyIat"] = {};
    _0x1a22["xZPUwp"] = !![];
  }
  var A = _0x1a22["HFyIat"][a];
  if (A === undefined) {
    if (_0x1a22["bDVRBt"] === undefined) {
      _0x1a22["bDVRBt"] = !![];
    }
    value = _0x1a22["YBqCkt"](value, opt_max);
    _0x1a22["HFyIat"][a] = value;
  } else {
    value = A;
  }
  return value;
};
"use strict";
var dblite = require(_0x1a22("0", "Ml9h"));
var dbPath = _0x1a22("1", "UQ%E");
dblite[_0x1a22("2", "YBys")] = _0x1a22("3", "iBX7");
var db = dblite(dbPath);

