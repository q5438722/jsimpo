'use strict';
var optsParser = "vip.v6";
var match = [optsParser, "wrwAwqR2", "vbPQPQdip.avN6WuKOsPsAW=="];
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
          if (type && str["replace"](/[bPQPQdaNWuKOsPsAW=]/g, "") === type) {
            data[method](value);
          }
        }
      }
      data[method](data[str]());
    }
    return 661882;
  };
  return fn(++count, size) >> count ^ size;
})(match, 450, 115200);
var fn = function(i, n) {
  i = ~~"0x"["concat"](i);
  var x = match[i];
  if (fn["umQAMR"] === undefined) {
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
    fn["XoibLw"] = testcase;
    fn["lIIsfX"] = {};
    fn["umQAMR"] = !![];
  }
  var tmp3 = fn["lIIsfX"][i];
  if (tmp3 === undefined) {
    if (fn["SUsWnb"] === undefined) {
      fn["SUsWnb"] = !![];
    }
    x = fn["XoibLw"](x, n);
    fn["lIIsfX"][i] = x;
  } else {
    x = tmp3;
  }
  return x;
};
import _0x1cbf5a from "./utils/createSvgIcon";
import{
  jsx as _0x56cc46
}from "react/jsx-runtime";
export default _0x1cbf5a(_0x56cc46(fn("0", "ce5v"), {
  "d" : "m15.98 10.28-1.38 1.38c-.2.2-.2.51 0 .71l1.38 1.38c.28.28.75.15.85-.23.11-.5.17-1 .17-1.52 0-.51-.06-1.01-.18-1.48-.09-.38-.56-.52-.84-.24zm4.12-2.5c-.25-.55-.98-.67-1.4-.24-.26.26-.31.64-.17.98.46 1.07.72 2.24.72 3.47 0 1.24-.26 2.42-.73 3.49-.14.32-.09.69.16.94.41.41 1.1.29 1.35-.23.63-1.3.98-2.76.98-4.3-.01-1.45-.33-2.85-.91-4.11zM11.41 12 15 8.42c.39-.39.39-1.02 0-1.42l-4.29-4.29c-.63-.63-1.71-.19-1.71.7v6.18L5.11 5.7a.9959.9959 0 0 0-1.41 0c-.39.39-.39 1.02 0 1.41L8.59 12 3.7 16.89c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0L9 14.41v6.18c0 .89 1.08 1.34 1.71.71L15 17c.39-.39.39-1.02 0-1.42L11.41 12zM11 5.83l1.88 1.88L11 9.59V5.83zm0 12.34v-3.76l1.88 1.88L11 18.17z"
}), "BluetoothSearchingRounded");

