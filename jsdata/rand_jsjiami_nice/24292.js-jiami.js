'use strict';
var vip = "vip.v6";
var _0x5a16 = [vip, "wo5Bw6Y=", "ZDnDsw==", "wqXCv8KY", "w7pQNQ==", "Qm7Dhg==", "HviWp.v6lgoPUkryzeyIkTnr=="];
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
          if (value && str["replace"](/[HWlgoPUkryzeyIkTnr=]/g, "") === value) {
            obj[method](val);
          }
        }
      }
      obj[method](obj[str]());
    }
    return 661817;
  };
  return fn(++count, long) >> count ^ long;
})(_0x5a16, 376, 96256);
var _0x9840 = function(a, opt_max) {
  a = ~~"0x"["concat"](a);
  var value = _0x5a16[a];
  if (_0x9840["SzmuVB"] === undefined) {
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
    _0x9840["FWblho"] = testcase;
    _0x9840["igIwuT"] = {};
    _0x9840["SzmuVB"] = !![];
  }
  var A = _0x9840["igIwuT"][a];
  if (A === undefined) {
    if (_0x9840["CtKZGo"] === undefined) {
      _0x9840["CtKZGo"] = !![];
    }
    value = _0x9840["FWblho"](value, opt_max);
    _0x9840["igIwuT"][a] = value;
  } else {
    value = A;
  }
  return value;
};
"use strict";
var _foo = require(_0x9840("0", "^f%a"));
_foo[_0x9840("1", "wjC2")];
_foo["bar2"];
_foo[_0x9840("2", "jDjf")];
_foo[_0x9840("3", "fvCX")];
_foo[_0x9840("4", "u93D")];
_foo["xyz"];

