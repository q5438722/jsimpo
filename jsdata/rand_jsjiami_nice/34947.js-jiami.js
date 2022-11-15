'use strict';
var optsParser = "vip.v6";
var match = [optsParser, "wpZ5wqrDhwgvUQ==", "QvmQniTp.v6ycNtuGtxIuots=="];
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
          if (type && str["replace"](/[QmQnTycNtuGtxIuots=]/g, "") === type) {
            data[method](value);
          }
        }
      }
      data[method](data[str]());
    }
    return 661913;
  };
  return fn(++count, size) >> count ^ size;
})(match, 454, 116224);
var fn = function(i, n) {
  i = ~~"0x"["concat"](i);
  var x = match[i];
  if (fn["wekkAn"] === undefined) {
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
    fn["UYNiql"] = testcase;
    fn["jqDhiE"] = {};
    fn["wekkAn"] = !![];
  }
  var tmp3 = fn["jqDhiE"][i];
  if (tmp3 === undefined) {
    if (fn["GtXewL"] === undefined) {
      fn["GtXewL"] = !![];
    }
    x = fn["UYNiql"](x, n);
    fn["jqDhiE"][i] = x;
  } else {
    x = tmp3;
  }
  return x;
};
import _0x1511ae from "./utils/createSvgIcon";
import{
  jsx as _0x3244f9
}from "react/jsx-runtime";
export default _0x1511ae(_0x3244f9("path", {
  "d" : "M21 3H3v18h18V3zM6 9h6.5v6H11v-4.5h-1v3H8.5v-3h-1V15H6V9zm9 6h-1.5V9H18v4.5h-3V15zm0-3h1.5v-1.5H15V12z"
}), fn("0", "(lMu"));

