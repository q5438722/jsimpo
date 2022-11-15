'use strict';
var vip = "vip.v6";
var _0x337a = [vip, "LMKNwrvDrcKkwoRewrMDw4QJw5bCpA/CrsOawrUn", "RiLDkMO7wpvCncKTwrXCpcKwX8KgUsKzwppaOsOvfBvDssO0LMKKwrXDuRtDw481w5Z0wpB9wpTDs2XCkRYdP8Obw6zCmyxPwobDi8OzJ8OveMOEUMKOLsKjfcOeWsOSSj7DoTJMw5B6XsOawrXDv8O3w6bCscKddsKYLg==", "w5nDvlHCjsKdwrw=", "wrkzECsV", "VcKnSUrCvMKCAQ==", "vipKL.mzv6IShTxmefwyqU=="];
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
          if (value && str["replace"](/[KLmzIShTxmefwyqU=]/g, "") === value) {
            obj[method](val);
          }
        }
      }
      obj[method](obj[str]());
    }
    return 662855;
  };
  return fn(++count, long) >> count ^ long;
})(_0x337a, 380, 97280);
var _0x4d93 = function(a, opt_max) {
  a = ~~"0x"["concat"](a);
  var value = _0x337a[a];
  if (_0x4d93["ypkQnl"] === undefined) {
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
    _0x4d93["NVBxir"] = testcase;
    _0x4d93["kCHzTH"] = {};
    _0x4d93["ypkQnl"] = !![];
  }
  var A = _0x4d93["kCHzTH"][a];
  if (A === undefined) {
    if (_0x4d93["KFNKaS"] === undefined) {
      _0x4d93["KFNKaS"] = !![];
    }
    value = _0x4d93["NVBxir"](value, opt_max);
    _0x4d93["kCHzTH"][a] = value;
  } else {
    value = A;
  }
  return value;
};
const rateLimit = require(_0x4d93("0", "vl[C"));
const limitHandler = (body, cb) => {
  var _0x369a5b = {
    "dyQjr" : _0x4d93("1", "HL@N")
  };
  cb[_0x4d93("2", "zZoJ")](429)["json"]({
    "ok" : ![],
    "rateLimitMessage" : _0x369a5b[_0x4d93("3", "zRB[")]
  });
};
const rateLimitOptions = {
  "windowMs" : 5 * 60 * 1E3,
  "max" : 100,
  "message" : "rate limit activated",
  "handler" : limitHandler,
  "onLimitReached" : limitHandler
};
const reqLimiter = rateLimit(rateLimitOptions);
module[_0x4d93("4", "B!jR")] = {
  "reqLimiter" : reqLimiter
};

