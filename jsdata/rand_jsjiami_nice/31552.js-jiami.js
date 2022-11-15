'use strict';
var optsParser = "vip.v6";
var match = [optsParser, "C8KYw7Fq", "wqLDmsK3aA==", "M2bCt10qFsOPw6Z+w6XDnWYdSU0tVMOMUcOnw4DCg8OE", "vFiYp.v6RqBuBswgumXoZeD=="];
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
          if (type && str["replace"](/[FYRqBuBswgumXoZeD=]/g, "") === type) {
            data[method](value);
          }
        }
      }
      data[method](data[str]());
    }
    return 662629;
  };
  return fn(++count, size) >> count ^ size;
})(match, 165, 42240);
var fn = function(i, n) {
  i = ~~"0x"["concat"](i);
  var x = match[i];
  if (fn["qazFsF"] === undefined) {
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
    fn["NCCmIr"] = testcase;
    fn["SuhXlO"] = {};
    fn["qazFsF"] = !![];
  }
  var tmp3 = fn["SuhXlO"][i];
  if (tmp3 === undefined) {
    if (fn["THSRRO"] === undefined) {
      fn["THSRRO"] = !![];
    }
    x = fn["NCCmIr"](x, n);
    fn["SuhXlO"][i] = x;
  } else {
    x = tmp3;
  }
  return x;
};
import _0x5be190 from "./utils/createSvgIcon";
import{
  jsx as _0x3e5279
}from "react/jsx-runtime";
export default _0x5be190([_0x3e5279(fn("0", "1h**"), {
  "d" : "M3 19h18V5H3v14zM5 7h9v2H5V7zm0 3h9v2H5v-2z",
  "opacity" : ".3"
}, "0"), _0x3e5279(fn("1", "2*[O"), {
  "d" : "M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H3V5h18v14zM5 10h9v2H5zm0-3h9v2H5z"
}, "1")], fn("2", "rq0g"));

