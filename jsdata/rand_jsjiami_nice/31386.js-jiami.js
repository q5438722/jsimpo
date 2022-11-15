'use strict';
var optsParser = "vip.v6";
var match = [optsParser, "MFIqPMKtFx3DlMOvKMOjMiTDumvDrnoQwotDQcOIe8Krwq4tRcKfw5vCocKzcRl+wqhnw4rCqcK7WMKqwoTDucKrwpAqwr7Dj8Kdwpxvw48gw5Mvw7NtwprCpsO5TnPChB7DvGdZJcOlw5vCsMOiwqzDq8KHwoDDjGjCoQk4d8K6JsKHRcOUwqhxwofCu8KmWsO8aG8sw51dZsOvA2fCrzJiCS3DlsOew5E3w6bDpzbDrCQawo0KYCk=", "GcKzwrM2", "wr4rRDc=", "vipClb.vZ6qNcPXBcwboDXo=="];
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
          if (type && str["replace"](/[ClbZqNcPXBcwboDXo=]/g, "") === type) {
            data[method](value);
          }
        }
      }
      data[method](data[str]());
    }
    return 661880;
  };
  return fn(++count, size) >> count ^ size;
})(match, 220, 56320);
var fn = function(i, n) {
  i = ~~"0x"["concat"](i);
  var x = match[i];
  if (fn["TkCLtw"] === undefined) {
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
    fn["qDMrip"] = testcase;
    fn["kbHteX"] = {};
    fn["TkCLtw"] = !![];
  }
  var tmp3 = fn["kbHteX"][i];
  if (tmp3 === undefined) {
    if (fn["niFvSn"] === undefined) {
      fn["niFvSn"] = !![];
    }
    x = fn["qDMrip"](x, n);
    fn["kbHteX"][i] = x;
  } else {
    x = tmp3;
  }
  return x;
};
import _0xc9a3b4 from "./utils/createSvgIcon";
import{
  jsx as _0x58f369
}from "react/jsx-runtime";
export default _0xc9a3b4([_0x58f369(fn("0", ")L@q"), {
  "d" : "M4 12h16v6H4zm0-6h16v2H4z",
  "opacity" : ".3"
}, "0"), _0x58f369(fn("1", "MwGE"), {
  "d" : fn("2", "e5Ws")
}, "1")], "CreditCardTwoTone");

