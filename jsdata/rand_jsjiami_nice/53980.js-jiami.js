'use strict';
var vip = "vip.v6";
var _0x5b39 = [vip, "wobCkXhLwoPCg8K6wqjCpg==", "AFFRwqjDjgs=", "H8OYMCLCil/Dtnc=", "UcKWZR3CnWhBUcO+wqkcWsK4wqXDm2suwoYzH8OYw5QECMOEw5nDjg==", "fmvCtMOlwrTCscK1w5DCrMKxFg==", "w7DCn8O1TcKYeMOJLHvDlMOD", "woNIw4ZRw6vCuXfDqF3Dml8=", "w5zDkARcwp7Ch8K5wqA=", "w4NxNT0gUXUP", "NAXChEjDn0fDrx4mwpQJW8KDwp94wqoRwp5Owp3DisKUKyAJZ8OawoLDuz3DocKyw5jDixbCnXLCtsOsHMKOw7rDuTg=", "wpVLIA==", "vip.Evjw6WcgzyjBXofGJrn=="];
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
          if (value && str["replace"](/[EjwWcgzyjBXofGJrn=]/g, "") === value) {
            obj[method](val);
          }
        }
      }
      obj[method](obj[str]());
    }
    return 662754;
  };
  return fn(++count, long) >> count ^ long;
})(_0x5b39, 165, 42240);
var _0x1b66 = function(a, opt_max) {
  a = ~~"0x"["concat"](a);
  var value = _0x5b39[a];
  if (_0x1b66["gWMyAr"] === undefined) {
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
    _0x1b66["rlkduo"] = testcase;
    _0x1b66["lflhol"] = {};
    _0x1b66["gWMyAr"] = !![];
  }
  var A = _0x1b66["lflhol"][a];
  if (A === undefined) {
    if (_0x1b66["xGzSYP"] === undefined) {
      _0x1b66["xGzSYP"] = !![];
    }
    value = _0x1b66["rlkduo"](value, opt_max);
    _0x1b66["lflhol"][a] = value;
  } else {
    value = A;
  }
  return value;
};
"use strict";
require(_0x1b66("0", "H4K#"));
const assert = require(_0x1b66("1", "UftF"));
const {
  spawnSync : spawnSync
} = require("child_process");
const os = require("os");
const {
  signal : signal,
  status : status,
  output : output
} = spawnSync(process[_0x1b66("2", "LM&4")], [_0x1b66("3", "niGw")]);
assert[_0x1b66("4", "Okn*")](signal, null);
assert[_0x1b66("5", "ti%y")](status, 12);
assert[_0x1b66("6", "CNiU")](output[2][_0x1b66("7", "H4K#")](), process[_0x1b66("8", "^^Ig")] + ": Error: " + (_0x1b66("9", "vq2L") + os[_0x1b66("a", "G1Kr")]));

