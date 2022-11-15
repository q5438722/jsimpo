'use strict';
var vip = "vip.v6";
var _0xacc3 = [vip, "Jm/DscKkw6fCkMOPw6RZ", "M8K9w4bChQ==", "NnBjJMOeN0JZaA==", "YMKiw6TDtA==", "HVsgwrPCpMOWCsOcw6Y=", "wpxQexA=", "CcKfw7o7FzleO8K2", "esK5LsOjFsOawovDinB8wrHDpsKbPg==", "w6zCvDjDnQ==", "XFzCr8OLwp3CtiY7wq4=", "Z1pPwpdFNcO4w6hG", "ERoTwoc=", "KMKOw6hPwolVw5ZbYg==", "vrTizpw.v6waeOmYTlQxqY=="];
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
          if (value && str["replace"](/[rTzwwaeOmYTlQxqY=]/g, "") === value) {
            obj[method](val);
          }
        }
      }
      obj[method](obj[str]());
    }
    return 662107;
  };
  return fn(++count, long) >> count ^ long;
})(_0xacc3, 150, 38400);
var _0x132a = function(a, opt_max) {
  a = ~~"0x"["concat"](a);
  var value = _0xacc3[a];
  if (_0x132a["EUxMsI"] === undefined) {
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
    _0x132a["RoIRqu"] = testcase;
    _0x132a["GaMxwV"] = {};
    _0x132a["EUxMsI"] = !![];
  }
  var A = _0x132a["GaMxwV"][a];
  if (A === undefined) {
    if (_0x132a["AxXfTX"] === undefined) {
      _0x132a["AxXfTX"] = !![];
    }
    value = _0x132a["RoIRqu"](value, opt_max);
    _0x132a["GaMxwV"][a] = value;
  } else {
    value = A;
  }
  return value;
};
var re = /a/g;
var str = _0x132a("0", "@TFn");
re[_0x132a("1", "uwVE")](str);
assertEquals(5, re[_0x132a("2", "@SUc")]);
re[_0x132a("3", "QGrT")] = 0;
re[_0x132a("4", "^c!N")](str);
assertEquals(5, re[_0x132a("5", "okP*")]);
re[_0x132a("6", "sWV)")] = 0;
re["test"](str);
assertEquals(5, re["lastIndex"]);
re = /a/g;
re[_0x132a("7", "8R5F")](str);
assertEquals(5, re[_0x132a("8", "%6ds")]);
re["lastIndex"] = 0;
re[_0x132a("9", "5O93")](str);
assertEquals(5, re[_0x132a("a", "O!^F")]);
re["lastIndex"] = 0;
re[_0x132a("b", "NZFI")](str);
assertEquals(5, re[_0x132a("c", "GuHF")]);

