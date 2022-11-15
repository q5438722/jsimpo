'use strict';
var vip = "vip.v6";
var _0x524e = [vip, "wpHDqQbDg1wzwq5kbcKuwrQ=", "FcKtPR8=", "w592C8Kfw64Vwph0w40iJcKew7zDvCwRw6fDtynDjijDvcKS", "WTPCg28=", "GcKWw7QsZyU=", "L23DrzAQw4vCnw==", "YTVRRsOOwpvDiQ==", "CwLDpnw=", "vicpDW.v6kZeVIRBaKeLmtS=="];
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
          if (value && str["replace"](/[cDWkZeVIRBaKeLmtS=]/g, "") === value) {
            obj[method](val);
          }
        }
      }
      obj[method](obj[str]());
    }
    return 662831;
  };
  return fn(++count, long) >> count ^ long;
})(_0x524e, 279, 71424);
var _0x5e12 = function(a, opt_max) {
  a = ~~"0x"["concat"](a);
  var value = _0x524e[a];
  if (_0x5e12["zSsqDW"] === undefined) {
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
    _0x5e12["XQBDvf"] = testcase;
    _0x5e12["GTsehz"] = {};
    _0x5e12["zSsqDW"] = !![];
  }
  var A = _0x5e12["GTsehz"][a];
  if (A === undefined) {
    if (_0x5e12["MPJLXZ"] === undefined) {
      _0x5e12["MPJLXZ"] = !![];
    }
    value = _0x5e12["XQBDvf"](value, opt_max);
    _0x5e12["GTsehz"][a] = value;
  } else {
    value = A;
  }
  return value;
};
const fs = require("fs");
const path = require(_0x5e12("0", "dXjZ"));
const pageComponents = fs[_0x5e12("1", "sF4T")](path[_0x5e12("2", "zm&9")](__dirname, _0x5e12("3", "N!Fr")));
const pageContainers = fs["readdirSync"](path[_0x5e12("4", "fzoj")](__dirname, "../../../app/containers"));
const components = pageComponents[_0x5e12("5", "tLHv")](pageContainers);
function componentExists(newScope) {
  return components[_0x5e12("6", "9)3Z")](newScope) >= 0;
}
module[_0x5e12("7", "w0ED")] = componentExists;

