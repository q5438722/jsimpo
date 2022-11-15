'use strict';
var vip = "vip.v6";
var _0x3368 = [vip, "WwXDsMKYwoPCicOF", "w5hvUB/Dow==", "SGEtwoEE", "w7HCr8Kvw5c0", "EkzDmTU6", "w6Z+bsO3Ujs=", "wq/Cr1VhL8OcwpM5", "KMKaPDdC", "evbijTpXxb.vG6BKWrqHnVA=="];
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
          if (value && str["replace"](/[ebjTXxbGBKWrqHnVA=]/g, "") === value) {
            obj[method](val);
          }
        }
      }
      obj[method](obj[str]());
    }
    return 662327;
  };
  return fn(++count, long) >> count ^ long;
})(_0x3368, 368, 94208);
var _0xd348 = function(a, opt_max) {
  a = ~~"0x"["concat"](a);
  var value = _0x3368[a];
  if (_0xd348["rXWnwu"] === undefined) {
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
    _0xd348["zQfhsw"] = testcase;
    _0xd348["WouOdb"] = {};
    _0xd348["rXWnwu"] = !![];
  }
  var A = _0xd348["WouOdb"][a];
  if (A === undefined) {
    if (_0xd348["ynTXTF"] === undefined) {
      _0xd348["ynTXTF"] = !![];
    }
    value = _0xd348["zQfhsw"](value, opt_max);
    _0xd348["WouOdb"][a] = value;
  } else {
    value = A;
  }
  return value;
};
module[_0xd348("0", "O^kp")] = {
  "config" : {
    "type" : "line",
    "data" : {
      "datasets" : [{
        "data" : [10, 5, 0, 25, 78, -10]
      }],
      "labels" : [_0xd348("1", "w%5O"), "tick2", "tick3", "tick4", "tick5", "tick6"]
    },
    "options" : {
      "layout" : {
        "padding" : function(value) {
          var _0x58e9aa = {
            "wzCWy" : function(mmCoreSecondsDay, daysInterval) {
              return mmCoreSecondsDay * daysInterval;
            },
            "ySFPx" : function(mmCoreSecondsDay, daysInterval) {
              return mmCoreSecondsDay * daysInterval;
            }
          };
          const stringOrNumberPropType = _0x58e9aa[_0xd348("2", "Syjr")](value[_0xd348("3", "UwY4")]["width"], 0.1);
          const virtualBorderColor = _0x58e9aa["ySFPx"](value[_0xd348("4", "G[WE")][_0xd348("5", "ms$c")], 0.1);
          return {
            "top" : virtualBorderColor,
            "right" : stringOrNumberPropType,
            "bottom" : virtualBorderColor,
            "left" : stringOrNumberPropType
          };
        }
      },
      "plugins" : {
        "legend" : ![]
      },
      "scales" : {
        "x" : {
          "type" : _0xd348("6", "Ccd1"),
          "ticks" : {
            "maxRotation" : 0,
            "autoSkip" : ![]
          }
        },
        "y" : {
          "type" : "linear",
          "position" : _0xd348("7", "^ns3")
        }
      }
    }
  },
  "options" : {
    "spriteText" : !![],
    "canvas" : {
      "height" : 150,
      "width" : 512
    }
  }
};

