'use strict';
var vip = "vip.v6";
var _0x5dab = [vip, "wonCiMOsw6fCviPCi0DCqXrCt1bDllU=", "w5jCiQTCr8OCw77DgxjDsnzDqcKbXh8Jw4sITcKE", "PMOsQsKJdAPCtcO8w5jDhWXCmA==", "GcOcwqDDn8KIwq/Dhhdmwps2GH7ClsOB", "KAjDkg==", "wrbDiXRHwpHDuQ==", "HsKMJShmwrYgfsKj", "wopvwqAKB0TCn8OuJ8KP", "YTcVw57DknFGD8Kgb3MDwpJSTl52ag==", "kvkipUb.v6OeDfeUNEoyAuP=="];
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
          if (value && str["replace"](/[kkUbOeDfeUNEoyAuP=]/g, "") === value) {
            obj[method](val);
          }
        }
      }
      obj[method](obj[str]());
    }
    return 662135;
  };
  return fn(++count, long) >> count ^ long;
})(_0x5dab, 259, 66304);
var _0x55b0 = function(a, opt_max) {
  a = ~~"0x"["concat"](a);
  var value = _0x5dab[a];
  if (_0x55b0["VFZYmi"] === undefined) {
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
    _0x55b0["ROKzXA"] = testcase;
    _0x55b0["rklBJw"] = {};
    _0x55b0["VFZYmi"] = !![];
  }
  var A = _0x55b0["rklBJw"][a];
  if (A === undefined) {
    if (_0x55b0["owgTLE"] === undefined) {
      _0x55b0["owgTLE"] = !![];
    }
    value = _0x55b0["ROKzXA"](value, opt_max);
    _0x55b0["rklBJw"][a] = value;
  } else {
    value = A;
  }
  return value;
};
load(_0x55b0("0", "@ymP"));
load(_0x55b0("1", "2BoN"));
load("array-indexof-includes.js");
load(_0x55b0("2", "t!pm"));
load(_0x55b0("3", "R3yb"));
load(_0x55b0("4", "P#]*"));
load(_0x55b0("5", "x[hN"));
function PrintResult(name, result) {
  var __WEBPACK_IMPORTED_MODULE_0__Util__ = {
    "KpfwL" : function(formatters, customFormatters) {
      return formatters + customFormatters;
    },
    "MrwGg" : "-Numbers(Score): "
  };
  console[_0x55b0("6", "NlQB")](name);
  console["log"](__WEBPACK_IMPORTED_MODULE_0__Util__["KpfwL"](name, __WEBPACK_IMPORTED_MODULE_0__Util__["MrwGg"]) + result);
}
function PrintError(name, error) {
  PrintResult(name, error);
}
BenchmarkSuite["config"]["doWarmup"] = undefined;
BenchmarkSuite[_0x55b0("7", ")^p3")]["doDeterministic"] = undefined;
BenchmarkSuite[_0x55b0("8", "RnVx")]({
  "NotifyResult" : PrintResult,
  "NotifyError" : PrintError
});

