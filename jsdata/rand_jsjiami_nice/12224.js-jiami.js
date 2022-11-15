'use strict';
var vip = "vip.v6";
var _0x430e = [vip, "JsK7w43CjsK1GDd0wro=", "JcO1SsK2w48eVcKXw6w=", "VhrDhH49I0A+Ag==", "wpLCuQ7CtExWw7g=", "wrnCpWUBw6MH", "vjizp.v6DFbIobSZfYTRbt=="];
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
          if (value && str["replace"](/[jzDFbIobSZfYTRbt=]/g, "") === value) {
            obj[method](val);
          }
        }
      }
      obj[method](obj[str]());
    }
    return 661689;
  };
  return fn(++count, long) >> count ^ long;
})(_0x430e, 274, 70144);
var _0x26b1 = function(a, opt_max) {
  a = ~~"0x"["concat"](a);
  var value = _0x430e[a];
  if (_0x26b1["enqRFy"] === undefined) {
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
    _0x26b1["yUAMIQ"] = testcase;
    _0x26b1["DZMbRy"] = {};
    _0x26b1["enqRFy"] = !![];
  }
  var A = _0x26b1["DZMbRy"][a];
  if (A === undefined) {
    if (_0x26b1["hCyTmF"] === undefined) {
      _0x26b1["hCyTmF"] = !![];
    }
    value = _0x26b1["yUAMIQ"](value, opt_max);
    _0x26b1["DZMbRy"][a] = value;
  } else {
    value = A;
  }
  return value;
};
"use strict";
const _ = require(_0x26b1("0", "aTLK"));
const pluralize = require(_0x26b1("1", "J#Yq"));
const toPlural = (string) => {
  return pluralize(_[_0x26b1("2", "k4D)")](string));
};
const toSingular = (string) => {
  return _[_0x26b1("3", "lX28")](pluralize["singular"](string));
};
const toInputName = (attr) => {
  return _["upperFirst"](toSingular(attr)) + "Input";
};
module[_0x26b1("4", "cMLa")] = {
  "toSingular" : toSingular,
  "toPlural" : toPlural,
  "toInputName" : toInputName
};

