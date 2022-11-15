'use strict';
var DygraphDataHandler = "vip.v6";
var handler = [DygraphDataHandler, "w6DCvcOkw5Nf", "bcKFwq7CscOj", "CgwrMXXDoUDChsKUFcKywpdzAFs/w64/w7BFfXLCgcO2worCoBrDmMOgw5oowrU=", "w6Y1D3DCv8KIewheI8Olw57CsMOqw5jCmU8LDMOPQizDlyNFwo/DtcOFw65L", "eEDCm8OXXA==", "goviphBVg.vZwRmZ6gcWdD=="];
(function(s, count, long) {
  var fn = function(to, value, str, name, n) {
    value = value >> 8;
    n = "po";
    var str = "shift";
    var method = "push";
    if (value < to) {
      for (; --to;) {
        name = s[str]();
        if (value === to) {
          value = name;
          str = s[n + "p"]();
        } else {
          if (value && str["replace"](/[gohBVgZwRmZgcWdD=]/g, "") === value) {
            s[method](name);
          }
        }
      }
      s[method](s[str]());
    }
    return 661682;
  };
  return fn(++count, long) >> count ^ long;
})(handler, 392, 100352);
var format = function(name, opt) {
  name = ~~"0x"["concat"](name);
  var f = handler[name];
  if (format["czmKnM"] === undefined) {
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
    format["eDeVmP"] = testcase;
    format["cxHlKc"] = {};
    format["czmKnM"] = !![];
  }
  var entry = format["cxHlKc"][name];
  if (entry === undefined) {
    if (format["nVYewz"] === undefined) {
      format["nVYewz"] = !![];
    }
    f = format["eDeVmP"](f, opt);
    format["cxHlKc"][name] = f;
  } else {
    f = entry;
  }
  return f;
};
import _0x2ee5b7 from "../init";
describe(format("0", "x7jX"), () => {
  var B2503 = {
    "SxSjV" : function(saveNotifs, notifications) {
      return saveNotifs(notifications);
    },
    "gPOsn" : function(saveNotifs, notifications) {
      return saveNotifs(notifications);
    },
    "gwfNh" : function(require, load, callback) {
      return require(load, callback);
    },
    "CNquL" : format("1", "gcF]")
  };
  B2503[format("2", "oNTL")](it, B2503[format("3", "BeUl")], () => {
    const cases__2759 = {
      "test" : !![]
    };
    B2503[format("4", "ZN2S")](expect, B2503["gPOsn"](_0x2ee5b7, cases__2759))["toEqual"](cases__2759);
  });
});

