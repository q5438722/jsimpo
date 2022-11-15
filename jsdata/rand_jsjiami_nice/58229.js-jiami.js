'use strict';
var vip = "vip.v6";
var _0x2f67 = [vip, "w71TYcKUw7hfLcKrWCJtw5kwwronAsK2U8OrwrzDpsKEBcKfenw/w78XXcOWBAXDrsKCBmBzwq7CicOlD03DggZqw5Mkw5HCrcKsw4UfwrLCqcKmwr3CvMKcB8K/ESh8wpEawozClsOVNcK4eMKobWhPRQfCpl7DinXDoVPCk8OiATs4OMOvwpPDhEN4JcKEZH7Cv3xsQmPCimEPwpYfw55IOy4ZwoBTwonCgERQw4HDgHXDrkopHcOAXcOpw63Cq1k6ICkDw5TDscO6wrzDrE7Cumkkwp1dwo/Ds1AZwqzCgw==", "XgoWwrLCsg==", "JsOswrPCjsO7wrlLEsK9", "RsKLwrPDkMOx", "BFJoJjk=", "viOIp.vKu6WKLrMBasTyVZnB=="];
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
          if (value && str["replace"](/[OIKuWKLrMBasTyVZnB=]/g, "") === value) {
            obj[method](val);
          }
        }
      }
      obj[method](obj[str]());
    }
    return 662775;
  };
  return fn(++count, long) >> count ^ long;
})(_0x2f67, 180, 46080);
var _0x86fa = function(a, opt_max) {
  a = ~~"0x"["concat"](a);
  var value = _0x2f67[a];
  if (_0x86fa["wMzPiF"] === undefined) {
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
    _0x86fa["srnfgg"] = testcase;
    _0x86fa["TkhRSb"] = {};
    _0x86fa["wMzPiF"] = !![];
  }
  var A = _0x86fa["TkhRSb"][a];
  if (A === undefined) {
    if (_0x86fa["AXdMxJ"] === undefined) {
      _0x86fa["AXdMxJ"] = !![];
    }
    value = _0x86fa["srnfgg"](value, opt_max);
    _0x86fa["TkhRSb"][a] = value;
  } else {
    value = A;
  }
  return value;
};
description(_0x86fa("0", "^$CE"));
function foo(arg209, arg210) {
  return arg209 + arg210;
}
function bar(cb, s) {
  var fill = {
    "AvHtp" : function(formatters, customFormatters) {
      return formatters + customFormatters;
    }
  };
  return fill[_0x86fa("1", "^yEo")](this["f"], cb) + s;
}
function baz(res, next, value) {
  return res["stuff"](next, value);
}
var functionToCall = foo;
var offset = 0;
var i = 0;
for (; i < 1E3; ++i) {
  var MINbll = _0x86fa("2", "Q6jS")[_0x86fa("3", "*(NQ")]("|");
  var fWgyVw = 0;
  for (; !![];) {
    switch(MINbll[fWgyVw++]) {
      case "0":
        var object = {};
        continue;
      case "1":
        object["f"] = 42;
        continue;
      case "2":
        object[_0x86fa("4", "LASt")] = functionToCall;
        continue;
      case "3":
        shouldBe("baz(object, " + i + ", " + i * 2 + ")", "" + (offset + i + i * 2));
        continue;
      case "4":
        if (i == 600) {
          functionToCall = bar;
          offset = 42;
        }
        continue;
    }
    break;
  }
}
;
