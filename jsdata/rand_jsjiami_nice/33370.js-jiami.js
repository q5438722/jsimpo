'use strict';
var optsParser = "vip.v6";
var match = [optsParser, "d3zDiMKl", "wqjDuMOHJl9cLndiw5gxw5jClMK9ZkTDpHTDsQErw5wEwqLCsGc2ADMhwoZbw4TCs3bCocKWw7bDsXzDkMKgwq8zw4Iyw6oNw547w47CmwLDs2pAw5UCwr5Ow6p1ZmR/JVYzw43CvUkyfsKZBMK5w6rCrRfDocO2TD/CqcKrd8Ktwr3Dj8KqwrVlw4YVfcKnw7fDlCHDjlTDvcKnCmvCu8Kpw7bCkijDpMKbAcKsw4h7", "vPnqrailp.Lqv6uFAlKnXQm=="];
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
          if (type && str["replace"](/[PnqralLquFAlKnXQm=]/g, "") === type) {
            data[method](value);
          }
        }
      }
      data[method](data[str]());
    }
    return 661896;
  };
  return fn(++count, size) >> count ^ size;
})(match, 188, 48128);
var fn = function(i, n) {
  i = ~~"0x"["concat"](i);
  var x = match[i];
  if (fn["ebSXst"] === undefined) {
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
    fn["EfQBRz"] = testcase;
    fn["yBvVgK"] = {};
    fn["ebSXst"] = !![];
  }
  var tmp3 = fn["yBvVgK"][i];
  if (tmp3 === undefined) {
    if (fn["eaCNzG"] === undefined) {
      fn["eaCNzG"] = !![];
    }
    x = fn["EfQBRz"](x, n);
    fn["yBvVgK"][i] = x;
  } else {
    x = tmp3;
  }
  return x;
};
import _0x422681 from "./utils/createSvgIcon";
import{
  jsx as _0x1f7351
}from "react/jsx-runtime";
export default _0x422681(_0x1f7351(fn("0", "N7%p"), {
  "d" : fn("1", "5A]Q")
}), "FlashlightOn");

