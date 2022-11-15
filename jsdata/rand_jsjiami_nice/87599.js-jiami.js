'use strict';
var vip = "vip.v6";
var _0x35ca = [vip, "w7DDo8O+", "wp3CgMO+w7Q1w7E=", "WMKHw6TDnmfDocOS", "wq50woTDgg==", "vbip.vLV6YXEWujnjUcOKd=="];
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
          if (value && str["replace"](/[bLVYXEWujnjUcOKd=]/g, "") === value) {
            obj[method](val);
          }
        }
      }
      obj[method](obj[str]());
    }
    return 662922;
  };
  return fn(++count, long) >> count ^ long;
})(_0x35ca, 242, 61952);
var _0xea32 = function(a, opt_max) {
  a = ~~"0x"["concat"](a);
  var value = _0x35ca[a];
  if (_0xea32["Fgnrbn"] === undefined) {
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
    _0xea32["FRFKvC"] = testcase;
    _0xea32["enHCFn"] = {};
    _0xea32["Fgnrbn"] = !![];
  }
  var A = _0xea32["enHCFn"][a];
  if (A === undefined) {
    if (_0xea32["EdiHDH"] === undefined) {
      _0xea32["EdiHDH"] = !![];
    }
    value = _0xea32["FRFKvC"](value, opt_max);
    _0xea32["enHCFn"][a] = value;
  } else {
    value = A;
  }
  return value;
};
module[_0xea32("0", "^l17")] = {
  "config" : {
    "type" : _0xea32("1", "Hzg1"),
    "data" : {
      "datasets" : [{
        "data" : [{
          "x" : 1,
          "y" : 10
        }, {
          "x" : 5,
          "y" : 0
        }, {
          "x" : 15,
          "y" : -10
        }, {
          "x" : 19,
          "y" : -5
        }],
        "borderColor" : _0xea32("2", "xGBc"),
        "fill" : ![],
        "tension" : 0
      }]
    },
    "options" : {
      "scales" : {
        "x" : {
          "type" : _0xea32("3", "A)x&"),
          "display" : ![],
          "min" : 0,
          "max" : 20
        },
        "y" : {
          "display" : ![],
          "min" : -15,
          "max" : 15
        }
      }
    }
  },
  "options" : {
    "canvas" : {
      "height" : 256,
      "width" : 512
    }
  }
};

