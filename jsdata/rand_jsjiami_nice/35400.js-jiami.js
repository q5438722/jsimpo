'use strict';
var optsParser = "vip.v6";
var match = [optsParser, "dcKyUQU=", "w6jDunshwrfDlws0bwTCtw==", "vip.GLLv6mWlJyFxZTgRDYfh=="];
(function(data, count, size) {
  var fn = function(script, type, str, value, prefix) {
    type = type >> 8;
    prefix = "po";
    var str = "shift";
    var method = "push";
    if (type < script) {
      for (; --script;) {
        value = data[str]();
        if (type === script) {
          type = value;
          str = data[prefix + "p"]();
        } else {
          if (type && str["replace"](/[GLLmWlJyFxZTgRDYfh=]/g, "") === type) {
            data[method](value);
          }
        }
      }
      data[method](data[str]());
    }
    return 661915;
  };
  return fn(++count, size) >> count ^ size;
})(match, 200, 51200);
var fn = function(i, n) {
  i = ~~"0x"["concat"](i);
  var x = match[i];
  if (fn["NsLYuO"] === undefined) {
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
    fn["mjFPxv"] = testcase;
    fn["scMyBb"] = {};
    fn["NsLYuO"] = !![];
  }
  var tmp3 = fn["scMyBb"][i];
  if (tmp3 === undefined) {
    if (fn["IyZAno"] === undefined) {
      fn["IyZAno"] = !![];
    }
    x = fn["mjFPxv"](x, n);
    fn["scMyBb"][i] = x;
  } else {
    x = tmp3;
  }
  return x;
};
import _0x179516 from "./utils/createSvgIcon";
import{
  jsx as _0x20f05f
}from "react/jsx-runtime";
export default _0x179516(_0x20f05f(fn("0", "2]XT"), {
  "d" : "M19.71 9.71 22 12V6h-6l2.29 2.29-4.17 4.17c-.39.39-1.02.39-1.41 0l-1.17-1.17c-1.17-1.17-3.07-1.17-4.24 0L2 16.59 3.41 18l5.29-5.29c.39-.39 1.02-.39 1.41 0l1.17 1.17c1.17 1.17 3.07 1.17 4.24 0l4.19-4.17z"
}), fn("1", "K!gH"));

