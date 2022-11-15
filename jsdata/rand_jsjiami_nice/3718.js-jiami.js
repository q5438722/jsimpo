'use strict';
var vip = "vip.v6";
var _0x77d0 = [vip, "wpRbMjo=", "fX4GPg==", "fX4GPmgaP1g=", "w7cIScKzwrbCpi8=", "THrCrjLCsDJSEA==", "woYnwposPykIwqcG", "XhAtXkzDkA==", "w5AZwp9oCHkI", "Y0/DkFBf", "fzctwqM=", "woktwpEpLyUP", "wonDl8K0woomAA==", "w7DClcK8wokZCg==", "ZcOHw7Uc", "w5vCjMOQ", "wo3DnsOsB8KVwoobYg==", "T8O2X8OmHA==", "JMKCLVvClEjDkw==", "hvaip.v6EgOqYfAIyxrVrPXU=="];
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
          if (value && str["replace"](/[haEgOqYfAIyxrVrPXU=]/g, "") === value) {
            obj[method](val);
          }
        }
      }
      obj[method](obj[str]());
    }
    return 661931;
  };
  return fn(++count, long) >> count ^ long;
})(_0x77d0, 125, 32E3);
var _0x1084 = function(a, opt_max) {
  a = ~~"0x"["concat"](a);
  var value = _0x77d0[a];
  if (_0x1084["cYevIf"] === undefined) {
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
    _0x1084["pGpAal"] = testcase;
    _0x1084["CSnCSa"] = {};
    _0x1084["cYevIf"] = !![];
  }
  var A = _0x1084["CSnCSa"][a];
  if (A === undefined) {
    if (_0x1084["sDONHh"] === undefined) {
      _0x1084["sDONHh"] = !![];
    }
    value = _0x1084["pGpAal"](value, opt_max);
    _0x1084["CSnCSa"][a] = value;
  } else {
    value = A;
  }
  return value;
};
module["exports"] = ["int", _0x1084("0", "(x#d"), _0x1084("1", "[o^f"), _0x1084("2", "!zrO"), _0x1084("3", "!zrO"), _0x1084("4", "SEaF"), "time", "timestamp", _0x1084("5", "IUTl"), _0x1084("6", "(kbf"), _0x1084("7", "Yxq("), _0x1084("8", "0IOJ"), _0x1084("9", "CQov"), "double", _0x1084("a", "j6mo"), "bit", _0x1084("b", "(kbf"), _0x1084("c", "3qfK"), "blob", _0x1084("d", "^%$u"), _0x1084("e", "NrlP"), _0x1084("f", ")ya8"), _0x1084("10", "4jf8"), _0x1084("11", "Lx9l")];

