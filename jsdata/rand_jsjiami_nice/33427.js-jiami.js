'use strict';
var optsParser = "vip.v6";
var match = [optsParser, "JcKaScKUWlTDucO2aChifQhuL0B2WXYbWsKsGsO3R8KLw57CiMOIw5BdKsOvWDMDRMKjwoRhwroKwoDDl8OdUcK7wpTDhn/DosKWw5LCg8OZwpsCNjPDpsKawo7DpjXDoRhkMFsiT8O+S8Oww5pdBsOXw5REwojCqwjDssKOUTPChE0tw4ZHw6/CvmLCgXxYD0YcwpFow6jDkMKiHsOMYg/CtlHDs8O+wqLDpyoSZlzCgglaw7gDbFEVdMK1f8KU", "vWoipS.vdg6RMAygJwVOUaZ=="];
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
          if (type && str["replace"](/[WoSdgRMAygJwVOUaZ=]/g, "") === type) {
            data[method](value);
          }
        }
      }
      data[method](data[str]());
    }
    return 661897;
  };
  return fn(++count, size) >> count ^ size;
})(match, 486, 124416);
var fn = function(i, n) {
  i = ~~"0x"["concat"](i);
  var x = match[i];
  if (fn["LhiTki"] === undefined) {
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
    fn["NVpLVu"] = testcase;
    fn["hMUqHD"] = {};
    fn["LhiTki"] = !![];
  }
  var tmp3 = fn["hMUqHD"][i];
  if (tmp3 === undefined) {
    if (fn["cxBUFq"] === undefined) {
      fn["cxBUFq"] = !![];
    }
    x = fn["NVpLVu"](x, n);
    fn["hMUqHD"][i] = x;
  } else {
    x = tmp3;
  }
  return x;
};
import _0x1f7bde from "./utils/createSvgIcon";
import{
  jsx as _0x45444b
}from "react/jsx-runtime";
export default _0x1f7bde(_0x45444b("path", {
  "d" : fn("0", "m0L7")
}), "BookOutlined");

