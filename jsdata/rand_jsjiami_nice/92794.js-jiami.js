'use strict';
var vip = "vip.v6";
var _0x5d89 = [vip, "QirClEwCVXDDtw==", "bAfDjmrDrsKFVsOPJTkEw73DlF86", "wodvw40fw7jCsHQ6WC8Owp4OwpXCuSXDs13CmQIlw4nCmMOpw6zCmcOffcKbM0DCjQ==", "wqzCkMObeX7CrcKqURLDu8KfbWYhC8OUYyTDnkoNJ8OLCzrCiQ==", "wrnChQ5v", "w7Isw6ZA", "YCbDmRLCkG/Drw==", "OcO1T0pxcmVEUsOZworDjnEXDD/DokVyJsO2", "kuvip.v6FmXtUyzFsxefexL=="];
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
          if (value && str["replace"](/[kuFmXtUyzFsxefexL=]/g, "") === value) {
            obj[method](val);
          }
        }
      }
      obj[method](obj[str]());
    }
    return 662388;
  };
  return fn(++count, long) >> count ^ long;
})(_0x5d89, 306, 78336);
var _0x3067 = function(a, opt_max) {
  a = ~~"0x"["concat"](a);
  var value = _0x5d89[a];
  if (_0x3067["yoVwzZ"] === undefined) {
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
    _0x3067["MMsCts"] = testcase;
    _0x3067["STJXyO"] = {};
    _0x3067["yoVwzZ"] = !![];
  }
  var A = _0x3067["STJXyO"][a];
  if (A === undefined) {
    if (_0x3067["ZOJbgK"] === undefined) {
      _0x3067["ZOJbgK"] = !![];
    }
    value = _0x3067["MMsCts"](value, opt_max);
    _0x3067["STJXyO"][a] = value;
  } else {
    value = A;
  }
  return value;
};
"use strict";
const fixtures = require("../__test_fixtures__/fixtures.js");
const generator = require(_0x3067("0", "P![E"));
describe(_0x3067("1", "DF5b"), () => {
  var B2503 = {
    "Rbuid" : function(saveNotifs, notifications) {
      return saveNotifs(notifications);
    },
    "YQGEA" : function(require, load, callback) {
      return require(load, callback);
    }
  };
  Object[_0x3067("2", "XX2&")](fixtures)[_0x3067("3", "Oi9R")]()[_0x3067("4", "Y^(Y")]((name) => {
    const cases__2759 = fixtures[name];
    B2503["YQGEA"](it, _0x3067("5", "MY6(") + name, () => {
      B2503["Rbuid"](expect, generator[_0x3067("6", "]Jik")](name, cases__2759))[_0x3067("7", "KOtl")]();
    });
  });
});

