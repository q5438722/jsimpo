'use strict';
var optsParser = "vip.v6";
var match = [optsParser, "wr3Djn8f", "KsKvRC/CnMKXwolbdwFpw69UwrDDiFYCw6hkw7RTw7F3Tnl+wrbCv27CtcK2asKaQDLCqDRKPCXCvgs+dcOMwo3DvUUbP25HbiHCuFFMw5zDj3DDjMKPwqrCpXxLcRLCukhQF8O0w45FKMKyXHVNP8OZSsOoGcOtwooub01xw6jDk8KvwoPCvMKnwpDDox8nEWoiw4/Dp2QPcsO4YTDCjMKHwqzDicOmw5sXQsKKwqXCosKrfcOpNMKdwo4iw7lKbRQha8Kbw4QEwqF4KjzCmsK3C07Do8O3K8KuQsKew6cVw5ZJPmUyw5Iqw67CgMK5IsKZICLDsGUQw7vCg8K8IHlcwovDqcOPw7t3alBvwrnDscKgw6/DnWpcBRN7DVpZN8KVw7dJwrBiw6TDlTotwpXCuMOyMcKJNkQuw5Avw4vDhsKNScKmEhTDsMOVDQg5SMKXU2HDtcO9w4rCqsKPwpYqRjTDn8Oaw6HCmCYjYXrCqyrChWtLw6RVwoQGw6HDrMK2EAtYwrTCm8Knw7ocacKJwrxbccOyw5TCgcKjHxDDlMKqw4LDjhjCmsOXBQtKwobChMK2wqjCukbDuiXDg8KZwpB0NsObwpfDsWBew4U4wpjDisK0OsOWw4d+dAjCihLCgMKqWcOCwr/Ch8KqNcKgw7TCnTLCiH8/CMOJZMKJKMK5w4/CmF9BX8K2WsOTLVrCm3XDnG5KXsO+wo8Iw4vCtsK4SsOQAG/CpMKPI8KoVybDr8K/Nyx8w7U=", 
"wonDlmUWFMObw6ZBTcKAw6PDol5/w6nDnQQc", "UvipWuqO.vVGdb6rCYZchhk=="];
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
          if (type && str["replace"](/[UWuqOVGdbrCYZchhk=]/g, "") === type) {
            data[method](value);
          }
        }
      }
      data[method](data[str]());
    }
    return 661943;
  };
  return fn(++count, size) >> count ^ size;
})(match, 210, 53760);
var fn = function(i, n) {
  i = ~~"0x"["concat"](i);
  var x = match[i];
  if (fn["vvUhaD"] === undefined) {
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
    fn["ePctsl"] = testcase;
    fn["NuJiat"] = {};
    fn["vvUhaD"] = !![];
  }
  var tmp3 = fn["NuJiat"][i];
  if (tmp3 === undefined) {
    if (fn["yCwtBB"] === undefined) {
      fn["yCwtBB"] = !![];
    }
    x = fn["ePctsl"](x, n);
    fn["NuJiat"][i] = x;
  } else {
    x = tmp3;
  }
  return x;
};
import _0x142adf from "./utils/createSvgIcon";
import{
  jsx as _0x2401cb
}from "react/jsx-runtime";
export default _0x142adf(_0x2401cb(fn("0", "iNv#"), {
  "d" : fn("1", "L86K")
}), fn("2", "iNv#"));

