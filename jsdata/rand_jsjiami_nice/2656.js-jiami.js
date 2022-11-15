'use strict';
var vip = "vip.v6";
var _0x18a8 = [vip, "aQBgw5VVciYWw4LCtA3Clg==", "HFHCuFzCvMKww5t8wrbDsC/CnsO/wok=", "fRd/w5BSZT8sw4LCoQ==", "nfvieVpbRL.hdOv6loXsRDPC=="];
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
          if (value && str["replace"](/[nfeVbRLhdOloXsRDPC=]/g, "") === value) {
            obj[method](val);
          }
        }
      }
      obj[method](obj[str]());
    }
    return 661841;
  };
  return fn(++count, long) >> count ^ long;
})(_0x18a8, 452, 115712);
var _0x3cc4 = function(a, opt_max) {
  a = ~~"0x"["concat"](a);
  var value = _0x18a8[a];
  if (_0x3cc4["JWmSUE"] === undefined) {
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
    _0x3cc4["CNuPoA"] = testcase;
    _0x3cc4["nzILhQ"] = {};
    _0x3cc4["JWmSUE"] = !![];
  }
  var A = _0x3cc4["nzILhQ"][a];
  if (A === undefined) {
    if (_0x3cc4["GTeurB"] === undefined) {
      _0x3cc4["GTeurB"] = !![];
    }
    value = _0x3cc4["CNuPoA"](value, opt_max);
    _0x3cc4["nzILhQ"][a] = value;
  } else {
    value = A;
  }
  return value;
};
var commerce = {};
module["exports"] = commerce;
commerce["color"] = require("./color");
commerce[_0x3cc4("0", ")pBt")] = require("./department");
commerce[_0x3cc4("1", ")pBt")] = require(_0x3cc4("2", "ehmV"));

