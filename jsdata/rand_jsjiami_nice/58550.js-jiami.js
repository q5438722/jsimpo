'use strict';
var vip = "vip.v6";
var _0x46c5 = [vip, "wrrDnsOrwrUmworCssK0DwDDiwrCuzlzw7HCkF0cwoNDw7LDpsKcw7PDnCFBw7rDosOLf0jDisKNw57Dn0rDlRZBWFUwwotaw6ZiwrHDuCtnJE0Uw4RzYV7DlQ==", "wqwmFcOtWBHDo2geVRvDhC0yfsKLwqccERpdw6jDtsOGwr7DoMOKwqDCuQnCucOHwplmF8OBQBsAwotNXGkHwovDp8OqOsKkXQ==", "wpMERFHDrcOvw4LDhDQ=", "wqhVNQTDozrCo8OPeX3Dq1/DimjCqk8Aw48Wwoh/w5PDgsOsC2o=", "w7LDoVzCpVDDmcOLw6YjwpbDumVzworCpgB7w7gEYW/DnDfCgw==", "PXHCpcOLwr0=", "GsODw7fChcOD", "wqwlMsOeEg==", "HsK3w4DDocOle8KGDg8=", "cvWIipJD.v6eCMendWNMJhlQ=="];
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
          if (value && str["replace"](/[cWIJDeCMendWNMJhlQ=]/g, "") === value) {
            obj[method](val);
          }
        }
      }
      obj[method](obj[str]());
    }
    return 662777;
  };
  return fn(++count, long) >> count ^ long;
})(_0x46c5, 226, 57856);
var _0x42a4 = function(a, opt_max) {
  a = ~~"0x"["concat"](a);
  var value = _0x46c5[a];
  if (_0x42a4["Uddaps"] === undefined) {
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
    _0x42a4["ybqEDq"] = testcase;
    _0x42a4["mgZwrM"] = {};
    _0x42a4["Uddaps"] = !![];
  }
  var A = _0x42a4["mgZwrM"][a];
  if (A === undefined) {
    if (_0x42a4["IOFObT"] === undefined) {
      _0x42a4["IOFObT"] = !![];
    }
    value = _0x42a4["ybqEDq"](value, opt_max);
    _0x42a4["mgZwrM"][a] = value;
  } else {
    value = A;
  }
  return value;
};
description(_0x42a4("0", "XGTM"));
function test(obj) {
  var _0x2187ef = {
    "IMYDu" : _0x42a4("1", "cmj8"),
    "fevnx" : function(saveNotifs, notifications) {
      return saveNotifs(notifications);
    },
    "mAVGc" : "descriptor['enumerable']",
    "TfTGj" : _0x42a4("2", "1%U[")
  };
  descriptor = Object[_0x42a4("3", "EX)O")](obj, _0x2187ef[_0x42a4("4", "Va3v")]);
  _0x2187ef[_0x42a4("5", "dJ]i")](shouldBeTrue, "descriptor['writable']");
  shouldBeFalse(_0x2187ef["mAVGc"]);
  shouldBeFalse(_0x2187ef[_0x42a4("6", "XGTM")]);
}
function a() {
}
test(a);
function b() {
}
b[_0x42a4("7", "8L3!")] = {};
test(b);
function c() {
}
shouldThrow(_0x42a4("8", "ruFG"));
test(c);

