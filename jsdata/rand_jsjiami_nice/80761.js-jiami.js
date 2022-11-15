'use strict';
var vip = "vip.v6";
var _0xe53a = [vip, "woEwGW8Z", "PX4lDMKL", "QMK/JMO0wp0=", "w4w6wrzCuMOl", "IVXDiQ==", "w4cjUMKawr3CmA==", "wpXDt0gcw4bDtcOFXFTCklog", "QMKPDMOPwpQ=", "G8OGw6AsdsO3", "wpMGw5bCn0xs", "wrB3w65NwoAH", "w4gqwoHCvsOoCA==", "cjzDn8O/w6DDvltjYg==", "G8OUw6M=", "DcOWw788ecOnwrpOM8O7w75VLMKLw54EXBp6cMK6HWNn", "okrvipEHJ.v6tfCfGayBMwsh=="];
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
          if (value && str["replace"](/[okrEHJtfCfGayBMwsh=]/g, "") === value) {
            obj[method](val);
          }
        }
      }
      obj[method](obj[str]());
    }
    return 662275;
  };
  return fn(++count, long) >> count ^ long;
})(_0xe53a, 447, 114432);
var _0x55aa = function(a, opt_max) {
  a = ~~"0x"["concat"](a);
  var value = _0xe53a[a];
  if (_0x55aa["OKilQT"] === undefined) {
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
    _0x55aa["zPfNRo"] = testcase;
    _0x55aa["GLQfsY"] = {};
    _0x55aa["OKilQT"] = !![];
  }
  var A = _0x55aa["GLQfsY"][a];
  if (A === undefined) {
    if (_0x55aa["kMNLAW"] === undefined) {
      _0x55aa["kMNLAW"] = !![];
    }
    value = _0x55aa["zPfNRo"](value, opt_max);
    _0x55aa["GLQfsY"][a] = value;
  } else {
    value = A;
  }
  return value;
};
var request = require(_0x55aa("0", "$sd*"));
var app = require("../../examples/ejs");
describe(_0x55aa("1", "f#N%"), function() {
  var types = {
    "ahMcn" : function(saveNotifs, notifications) {
      return saveNotifs(notifications);
    },
    "GuJUH" : "text/html; charset=utf-8",
    "GEbnA" : function(require, load, callback) {
      return require(load, callback);
    },
    "qxFVh" : _0x55aa("2", "f#N%"),
    "PocbT" : _0x55aa("3", "Y9o4")
  };
  describe(types[_0x55aa("4", "oR5)")], function() {
    types[_0x55aa("5", "b3HO")](it, types["qxFVh"], function(mmCoreSplitViewBlock) {
      types[_0x55aa("6", "nUu0")](request, app)[_0x55aa("7", "*Ujr")]("/")[_0x55aa("8", "c4S4")](_0x55aa("9", "mOp%"), types[_0x55aa("a", "b3HO")])[_0x55aa("b", "f#N%")](/<li>tobi &lt;tobi@learnboost\.com&gt;<\/li>/)[_0x55aa("c", "81o9")](/<li>loki &lt;loki@learnboost\.com&gt;<\/li>/)[_0x55aa("d", "cavL")](/<li>jane &lt;jane@learnboost\.com&gt;<\/li>/)[_0x55aa("e", "nUu0")](200, mmCoreSplitViewBlock);
    });
  });
});

