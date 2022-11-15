'use strict';
var optsParser = "vip.v6";
var match = [optsParser, "woBIVMKIwqFow73DtgjCv8KRw7RmHQ==", "vipqI.v6wPoKsgWmzRRFCf=="];
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
          if (type && str["replace"](/[qIwPoKsgWmzRRFCf=]/g, "") === type) {
            data[method](value);
          }
        }
      }
      data[method](data[str]());
    }
    return 662659;
  };
  return fn(++count, size) >> count ^ size;
})(match, 449, 114944);
var fn = function(i, n) {
  i = ~~"0x"["concat"](i);
  var x = match[i];
  if (fn["TUjUYB"] === undefined) {
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
    fn["dkJFDC"] = testcase;
    fn["aQScOy"] = {};
    fn["TUjUYB"] = !![];
  }
  var tmp3 = fn["aQScOy"][i];
  if (tmp3 === undefined) {
    if (fn["AEkGLP"] === undefined) {
      fn["AEkGLP"] = !![];
    }
    x = fn["dkJFDC"](x, n);
    fn["aQScOy"][i] = x;
  } else {
    x = tmp3;
  }
  return x;
};
import _0x50d8dd from "./utils/createSvgIcon";
import{
  jsx as _0x56157c
}from "react/jsx-runtime";
export default _0x50d8dd(_0x56157c("path", {
  "d" : "M21 3H5.83L21 18.17zM2.81 2.81 1.39 4.22 3 5.83V21h15.17l1.61 1.61 1.41-1.41L2.81 2.81zM6 17l3-4 2.25 3 .82-1.1 2.1 2.1H6z"
}), fn("0", "rlAg"));

