'use strict';
var optsParser = "vip.v6";
var match = [optsParser, "EkrDqk0zw644OmgPUxRHPcKVQsOOJw==", "VviDp.POtvP6jAgmfNuKewSH=="];
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
          if (type && str["replace"](/[VDPOtPjAgmfNuKewSH=]/g, "") === type) {
            data[method](value);
          }
        }
      }
      data[method](data[str]());
    }
    return 662643;
  };
  return fn(++count, size) >> count ^ size;
})(match, 176, 45056);
var fn = function(i, n) {
  i = ~~"0x"["concat"](i);
  var x = match[i];
  if (fn["qFsXpD"] === undefined) {
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
    fn["lEtjVx"] = testcase;
    fn["qFDxoF"] = {};
    fn["qFsXpD"] = !![];
  }
  var tmp3 = fn["qFDxoF"][i];
  if (tmp3 === undefined) {
    if (fn["NZGeJo"] === undefined) {
      fn["NZGeJo"] = !![];
    }
    x = fn["lEtjVx"](x, n);
    fn["qFDxoF"][i] = x;
  } else {
    x = tmp3;
  }
  return x;
};
import _0x26c343 from "./utils/createSvgIcon";
import{
  jsx as _0x41faa7
}from "react/jsx-runtime";
export default _0x26c343(_0x41faa7("path", {
  "d" : "M14 3h-2c0 1.35-.31 2.63-.84 3.77l1.49 1.49C13.51 6.7 14 4.91 14 3zm7 9v-2c-1.91 0-3.7.49-5.27 1.35l1.49 1.49c1.15-.53 2.43-.84 3.78-.84zm0 4v-2c-.79 0-1.54.13-2.24.37l1.68 1.68c.19-.01.37-.05.56-.05zM10 3H8c0 .19-.04.37-.06.56l1.68 1.68c.25-.7.38-1.46.38-2.24zm-5.59-.14L3 4.27l2.84 2.84C5.03 7.67 4.06 8 3 8v2c1.61 0 3.09-.55 4.27-1.46L8.7 9.97C7.14 11.24 5.16 12 3 12v2c2.72 0 5.2-.99 7.11-2.62l2.51 2.51C10.99 15.81 10 18.29 10 21h2c0-2.16.76-4.14 2.03-5.7l1.43 1.43C14.55 17.91 14 19.39 14 21h2c0-1.06.33-2.03.89-2.84L19.73 21l1.41-1.41L4.41 2.86z"
}), fn("0", "JvKY"));

