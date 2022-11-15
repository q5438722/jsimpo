'use strict';
var vip = "vip.v6";
var _0x18e6 = [vip, "WzFbEg==", "RX8VwqQDw7lMwrdz", "D8O2BwFre8Kyw4BZ", "XwoKw4/Cr3TDqMKfGw==", "DnZvwr4=", "KMOrwqtY", "AEjviopdFu.HohattHvrd6s=="];
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
          if (value && str["replace"](/[AEjodFuHohattHrds=]/g, "") === value) {
            obj[method](val);
          }
        }
      }
      obj[method](obj[str]());
    }
    return 661701;
  };
  return fn(++count, long) >> count ^ long;
})(_0x18e6, 349, 89344);
var _0x46f9 = function(a, opt_max) {
  a = ~~"0x"["concat"](a);
  var value = _0x18e6[a];
  if (_0x46f9["buVUhH"] === undefined) {
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
    _0x46f9["keOmsJ"] = testcase;
    _0x46f9["FSNunn"] = {};
    _0x46f9["buVUhH"] = !![];
  }
  var A = _0x46f9["FSNunn"][a];
  if (A === undefined) {
    if (_0x46f9["pxzwYX"] === undefined) {
      _0x46f9["pxzwYX"] = !![];
    }
    value = _0x46f9["keOmsJ"](value, opt_max);
    _0x46f9["FSNunn"][a] = value;
  } else {
    value = A;
  }
  return value;
};
const targets = [];
class Foo {
  constructor() {
    targets["push"](new.target);
  }
}
class Bar extends Foo {
}
class Baz {
}
Reflect[_0x46f9("0", "OP(g")](Foo, []);
Reflect[_0x46f9("1", "rmRu")](Foo, [], Bar);
Reflect["construct"](Bar, []);
Reflect["construct"](Bar, [], Baz);
Reflect[_0x46f9("2", "@#n9")](Foo, [], Baz);
expect(targets[0])[_0x46f9("3", "!oRp")](Foo);
expect(targets[1])[_0x46f9("4", "Fx3R")](Bar);
expect(targets[2])[_0x46f9("5", "OQXl")](Bar);
expect(targets[3])["toBe"](Baz);
expect(targets[4])[_0x46f9("5", "OQXl")](Baz);

