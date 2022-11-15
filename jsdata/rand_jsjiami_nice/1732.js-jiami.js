'use strict';
var vip = "vip.v6";
var _0x4b8d = [vip, "wqtcw64iw6DDkMOtw7EQDWgkw5LDicOow4k=", "LsOMT8OnwpwOw7A=", "InDDqkIJBcOJwq4HY8OWEsO3w4pZSA==", "RcOawpoSwqFRwqc=", "wqIww6kMIcO6w5bDlcOdQAItwoZBCcOL", "wphjw75yeFvDgcKhwrTDljIUwp7DnMOnwq8=", "vuimpo.vV6YWejSTozBKTV=="];
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
          if (value && str["replace"](/[umoVYWejSTozBKTV=]/g, "") === value) {
            obj[method](val);
          }
        }
      }
      obj[method](obj[str]());
    }
    return 661741;
  };
  return fn(++count, long) >> count ^ long;
})(_0x4b8d, 231, 59136);
var _0x4aa6 = function(a, opt_max) {
  a = ~~"0x"["concat"](a);
  var value = _0x4b8d[a];
  if (_0x4aa6["kfczQb"] === undefined) {
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
    _0x4aa6["pJAXIA"] = testcase;
    _0x4aa6["VytWHd"] = {};
    _0x4aa6["kfczQb"] = !![];
  }
  var A = _0x4aa6["VytWHd"][a];
  if (A === undefined) {
    if (_0x4aa6["ALHVzV"] === undefined) {
      _0x4aa6["ALHVzV"] = !![];
    }
    value = _0x4aa6["pJAXIA"](value, opt_max);
    _0x4aa6["VytWHd"][a] = value;
  } else {
    value = A;
  }
  return value;
};
const path = require("path");
module[_0x4aa6("0", "s5Hh")] = {
  "entry" : {
    "client1" : _0x4aa6("1", "B!YS"),
    "client2" : _0x4aa6("2", "42%x"),
    "client3" : _0x4aa6("3", "cfiF"),
    "client4" : "./src/client4.js"
  },
  "output" : {
    "path" : path[_0x4aa6("4", "p5Y5")](__dirname, "../public"),
    "filename" : _0x4aa6("5", "]32!")
  }
};

