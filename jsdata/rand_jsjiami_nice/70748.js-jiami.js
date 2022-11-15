'use strict';
var vip = "vip.v6";
var _0x33c8 = [vip, "dsKtK8Kr", "wqnCmMK7McO3", "w4TCviNFwpfCoHZHw7/Du8K3VVhGw6gOQsKDTMOmccO6LS/DjCzCoUw0fsKqw4Yowq3DkwM3a8KyWMOwZMOkf0vCrwrCpxDDii/CvA==", "AA9vw6NhwpTDh8KAw47CjWEhU1J5", "a8KtwoHDjEg=", "vwiwp.vMssRGhG6UsxGjCWKa=="];
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
          if (value && str["replace"](/[wwMssRGhGUsxGjCWKa=]/g, "") === value) {
            obj[method](val);
          }
        }
      }
      obj[method](obj[str]());
    }
    return 662842;
  };
  return fn(++count, long) >> count ^ long;
})(_0x33c8, 302, 77312);
var _0xc034 = function(a, opt_max) {
  a = ~~"0x"["concat"](a);
  var value = _0x33c8[a];
  if (_0xc034["sUpwRs"] === undefined) {
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
    _0xc034["MadyoR"] = testcase;
    _0xc034["XlXjzH"] = {};
    _0xc034["sUpwRs"] = !![];
  }
  var A = _0xc034["XlXjzH"][a];
  if (A === undefined) {
    if (_0xc034["MCqtBy"] === undefined) {
      _0xc034["MCqtBy"] = !![];
    }
    value = _0xc034["MadyoR"](value, opt_max);
    _0xc034["XlXjzH"][a] = value;
  } else {
    value = A;
  }
  return value;
};
it(_0xc034("0", "IyjD"), function() {
  var _defaultParams2 = {
    "vjxFW" : "utf-8",
    "RQICM" : _0xc034("1", "1rN#")
  };
  var fs = require("fs");
  var slogan = fs["readFileSync"](__filename, _defaultParams2[_0xc034("2", "V]MF")]);
  var allOffersResult = /sourceMappingURL\s*=\s*(.*)/["exec"](slogan);
  expect(allOffersResult[1])[_0xc034("3", "a@[J")](_defaultParams2[_0xc034("4", "#44R")]);
});

