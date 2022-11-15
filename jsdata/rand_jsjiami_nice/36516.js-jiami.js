'use strict';
var optsParser = "vip.v6";
var match = [optsParser, "wqzDi8KxZsO+KmARBH9SworCtsKmwr7CssO2AcKCw7J/L1VJRMKmecOFw6pIe8Ocwqgiw6cef8Obb8KxLzDClS9gwpPDhMOlfBZzwo/CryENw7DDp8OeHcKbR3NKwrzCnVnCnDnCp2sPOsKWLQl3e8OswonDjVslLSATCsOfw4hbGHk/QcOKIWvDvsOvLk5mw5fCrQhIbcOrwrvCrsOydcKIfXnDqgQPQ8KFJ8OXHHbCm2NXJXHCth3CiG7CiMKywq7CtRw8e8OnXzEDwp/ClsKiwrFPwrUZw43Dli7CtcOhO8KeL8OJw68wU8O6G09kwoPDo8K4EnZPwqvCkHrCqcKNw5Y8A8OUwovCo8OcEcKCw4rDtsKXwqVAEwbDsMOKJXDDvj4WABMbY8Opw4zCsG0Zw4bCpFvCt8KvciA=", "OgjCu8Ky", "VEviHTp.lv6AJXLPPxBHTX=="];
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
          if (type && str["replace"](/[VEHTlAJXLPPxBHTX=]/g, "") === type) {
            data[method](value);
          }
        }
      }
      data[method](data[str]());
    }
    return 661924;
  };
  return fn(++count, size) >> count ^ size;
})(match, 319, 81664);
var fn = function(i, n) {
  i = ~~"0x"["concat"](i);
  var x = match[i];
  if (fn["kqilzg"] === undefined) {
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
    fn["TtsENo"] = testcase;
    fn["oUFIaQ"] = {};
    fn["kqilzg"] = !![];
  }
  var tmp3 = fn["oUFIaQ"][i];
  if (tmp3 === undefined) {
    if (fn["tCnCCg"] === undefined) {
      fn["tCnCCg"] = !![];
    }
    x = fn["TtsENo"](x, n);
    fn["oUFIaQ"][i] = x;
  } else {
    x = tmp3;
  }
  return x;
};
import _0x17503c from "./utils/createSvgIcon";
import{
  jsx as _0x494224
}from "react/jsx-runtime";
export default _0x17503c(_0x494224(fn("0", "9XxP"), {
  "d" : fn("1", "bQY[")
}), "BorderColorTwoTone");

