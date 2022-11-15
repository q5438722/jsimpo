'use strict';
var vip = "vip.v6";
var _0x30d2 = [vip, "A1TCrcOsVsOD", "cn56GcOY", "w7nDp8O5w5LCphlM", "fxNGwoXCiFw=", "FcOKwrd7w53DpsKgbQ==", "VkI9w5nDq8KkwphhwrbCgkPDmF3CjRkGQMKZw7cZEMK0", "Oj8hesKSwr4Gw5AP", "w5A7wrM+DcKJ", "w6wTwrTDg8OMwog=", "wo7DicKNw44=", "FMKMwr1/fA==", "YWVndcOTwroFw4wRwqJGw5VvwqE0GcOLwpFKbV41Mw==", "Wk1aKw==", "LMKnZ1XCkg==", "wrQtwrhl", "wqzDpg7CiTvDiA==", "woYOCzNM", "w6hDwqUywq4=", "OcKwCT0=", "w7DDqcO8dsKnwolJeMKy", "w6jDgMOaw7TCvw==", "Q2JmTMOM", "Ok/CjsKHw68=", "w65AwoUPwpjDvRI=", "GGLChMKYw5YJ", "w5F5woc2wp0=", 
"wrQUw5rCg29Hw6/Dmg==", "wqdtwqBTwqAERMORw5HDmQ==", "Tl1PIsOnwqPDpjjCnMKTAmDDhcOx", "IvRipK.v6QHPjEADdwCtIzqP=="];
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
          if (value && str["replace"](/[IRKQHPjEADdwCtIzqP=]/g, "") === value) {
            obj[method](val);
          }
        }
      }
      obj[method](obj[str]());
    }
    return 662056;
  };
  return fn(++count, long) >> count ^ long;
})(_0x30d2, 238, 60928);
var _0x4f25 = function(c, alpha) {
  c = ~~"0x"["concat"](c);
  var x = _0x30d2[c];
  if (_0x4f25["WmFNjt"] === undefined) {
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
    _0x4f25["yqiRJc"] = testcase;
    _0x4f25["SkjtJz"] = {};
    _0x4f25["WmFNjt"] = !![];
  }
  var e = _0x4f25["SkjtJz"][c];
  if (e === undefined) {
    if (_0x4f25["pcGOqH"] === undefined) {
      _0x4f25["pcGOqH"] = !![];
    }
    x = _0x4f25["yqiRJc"](x, alpha);
    _0x4f25["SkjtJz"][c] = x;
  } else {
    x = e;
  }
  return x;
};
"use strict";
require(_0x4f25("0", "s^6!"));
const {
  Duplex : Duplex
} = require(_0x4f25("1", "MCi("));
const {
  inspect : inspect
} = require("util");
const {
  strictEqual : strictEqual
} = require(_0x4f25("2", "qsdC"));
const {
  REPLServer : REPLServer
} = require(_0x4f25("3", "iBNy"));
let output = "";
const inout = new Duplex({
  "decodeStrings" : ![]
});
inout[_0x4f25("4", "VL!x")] = function() {
  var _0x1c5789 = {
    "htrDd" : _0x4f25("5", "s^6!")
  };
  this[_0x4f25("6", "82Zn")](_0x1c5789[_0x4f25("7", "xxIA")]);
  this[_0x4f25("8", "Zb![")](null);
};
inout[_0x4f25("9", "EJWW")] = function(icons, canCreateDiscussions, aBody) {
  var c = {
    "qixIx" : function(saveNotifs) {
      return saveNotifs();
    }
  };
  output = output + icons;
  c[_0x4f25("a", "@Y)^")](aBody);
};
const repl = new REPLServer({
  "input" : inout,
  "output" : inout,
  "useColors" : !![]
});
inout[_0x4f25("b", "8[bU")] = !![];
const repl2 = new REPLServer({
  "input" : inout,
  "output" : inout
});
process["on"](_0x4f25("c", "*zGo"), function() {
  var keyNames = {
    "hNzhz" : _0x4f25("d", "fU4Y"),
    "ABfpK" : function(require, load, callback) {
      return require(load, callback);
    },
    "PIvPj" : function(require, load, callback) {
      return require(load, callback);
    },
    "XFSZJ" : function(require, load, callback) {
      return require(load, callback);
    }
  };
  var callbackVals = keyNames[_0x4f25("e", "1&zS")][_0x4f25("f", "G4de")]("|");
  var callbackCount = 0;
  for (; !![];) {
    switch(callbackVals[callbackCount++]) {
      case "0":
        keyNames[_0x4f25("10", "uvdh")](strictEqual, repl["writer"][_0x4f25("11", "8[bU")][_0x4f25("12", "uvdh")], !![]);
        continue;
      case "1":
        keyNames[_0x4f25("13", "8[bU")](strictEqual, output[_0x4f25("14", "6upX")](_0x4f25("15", "^toL")), !![]);
        continue;
      case "2":
        strictEqual(inspect[_0x4f25("16", "82Zn")][_0x4f25("17", "*F%T")], ![]);
        continue;
      case "3":
        keyNames[_0x4f25("18", "82Zn")](strictEqual, repl2["writer"][_0x4f25("19", "SiV[")][_0x4f25("1a", "8Ykv")], !![]);
        continue;
      case "4":
        keyNames["XFSZJ"](strictEqual, output[_0x4f25("1b", "EiYx")](_0x4f25("1c", "0O3P")), ![]);
        continue;
    }
    break;
  }
});

