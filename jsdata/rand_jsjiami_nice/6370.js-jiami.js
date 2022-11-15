'use strict';
var vip = "vip.v6";
var _0x1f2b = [vip, "w53DhMO8VcKSXjjDhQ==", "NnvDlsKyw6A=", "w4VAw5DCpw==", "WviEzIpwBwUI.bDTUv6ZIJQe=="];
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
          if (value && str["replace"](/[WEzIwBwUIbDTUZIJQe=]/g, "") === value) {
            obj[method](val);
          }
        }
      }
      obj[method](obj[str]());
    }
    return 662123;
  };
  return fn(++count, long) >> count ^ long;
})(_0x1f2b, 432, 110592);
var _0x2674 = function(a, opt_max) {
  a = ~~"0x"["concat"](a);
  var value = _0x1f2b[a];
  if (_0x2674["LzCRgn"] === undefined) {
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
    _0x2674["JCvSpP"] = testcase;
    _0x2674["gOIAbn"] = {};
    _0x2674["LzCRgn"] = !![];
  }
  var A = _0x2674["gOIAbn"][a];
  if (A === undefined) {
    if (_0x2674["fZILHG"] === undefined) {
      _0x2674["fZILHG"] = !![];
    }
    value = _0x2674["JCvSpP"](value, opt_max);
    _0x2674["gOIAbn"][a] = value;
  } else {
    value = A;
  }
  return value;
};
define([_0x2674("0", "g*S(")], function(model) {
  function serializer(relations) {
    var value = [];
    _destructure2[_0x2674("1", "$CIJ")](model, relations, function(data, canCreateDiscussions) {
      value[_0x2674("2", "[biT")](data);
    });
    return value;
  }
  var _destructure2 = {
    "miNAZ" : function(require, load, callback) {
      return require(load, callback);
    }
  };
  return serializer;
});

