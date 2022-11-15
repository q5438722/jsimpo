'use strict';
var optsParser = "vip.v6";
var match = [optsParser, "dcOyLU/DrMKQWMOhw7NGwrDCiAE=", "FivDgcKr", "vROqikPep.vl6LdGHFUwQ=="];
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
          if (type && str["replace"](/[ROqkPelLdGHFUwQ=]/g, "") === type) {
            data[method](value);
          }
        }
      }
      data[method](data[str]());
    }
    return 662664;
  };
  return fn(++count, size) >> count ^ size;
})(match, 361, 92416);
var fn = function(i, n) {
  i = ~~"0x"["concat"](i);
  var x = match[i];
  if (fn["aAphAh"] === undefined) {
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
    fn["mIIlMF"] = testcase;
    fn["pFQKJc"] = {};
    fn["aAphAh"] = !![];
  }
  var tmp3 = fn["pFQKJc"][i];
  if (tmp3 === undefined) {
    if (fn["qHYHCy"] === undefined) {
      fn["qHYHCy"] = !![];
    }
    x = fn["mIIlMF"](x, n);
    fn["pFQKJc"][i] = x;
  } else {
    x = tmp3;
  }
  return x;
};
import _0x5d1ed8 from "./utils/createSvgIcon";
import{
  jsx as _0x5e21eb
}from "react/jsx-runtime";
export default _0x5d1ed8(_0x5e21eb(fn("0", "$%aX"), {
  "d" : "M8 12.5h1.5V14H8v-1.5zM8 10h1.5v1.5H8V10zm11-7H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-8 11c0 .55-.45 1-1 1H7.5c-.55 0-1-.45-1-1v-4c0-.55.45-1 1-1H10c.55 0 1 .45 1 1v4zm5.59 1c-.22 0-.42-.1-.55-.27l-1.54-1.98v1.55c0 .39-.31.7-.7.7h-.1c-.39 0-.7-.31-.7-.7V9.7c0-.39.31-.7.7-.7h.09c.39 0 .7.31.7.7v1.55l1.54-1.98c.14-.17.35-.27.56-.27.58 0 .91.66.56 1.12L15.75 12l1.41 1.88c.34.46.01 1.12-.57 1.12z"
}), fn("1", "hYQu"));

