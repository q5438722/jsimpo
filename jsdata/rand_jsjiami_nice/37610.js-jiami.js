'use strict';
var optsParser = "vip.v6";
var match = [optsParser, "woh1w6rCisKuNcKJwq5qwr5wwrjDq8OGK0zCimd1woo+wpMdw7k/wqbDrcKNw4rDrsKMwo/CiMO1w7g7woNec8K8K8OifTYIFMOHw7AAwonDtVvDmMOPwp7DiwfCmcODw7/CijEyV8OJwrBKLlDCuMOFwodEwqrClsOXwpLDk8KKw4bChHA3IMKnIsKfw7vCphREw7bCuyhxHsKzGMK5bcOSw5Agw5vCssOXwo7DqB7Dukx9w4PCghTCuSvDi8OtP8OIXcKPYyDDrUQFwolbNcKaNz52Ljh4NMOMwqPDucOxw6ZLQ8KWwoI5wobCuhPDg8KGw7gDw5MnwptKEGbCrMKrw4vDhsKrw75iAcKhVsOgw4JgN8OBBMOowoTDpBhTwqXCocKVfUjDmMOjwpLDicO5wrU=", "woZ3woBt", "vlibBp.AvOk6MSJDlXBFZ=="];
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
          if (type && str["replace"](/[lbBAOkMSJDlXBFZ=]/g, "") === type) {
            data[method](value);
          }
        }
      }
      data[method](data[str]());
    }
    return 661934;
  };
  return fn(++count, size) >> count ^ size;
})(match, 105, 26880);
var fn = function(i, n) {
  i = ~~"0x"["concat"](i);
  var x = match[i];
  if (fn["ulXOxm"] === undefined) {
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
    fn["gzMmeT"] = testcase;
    fn["SwlSMJ"] = {};
    fn["ulXOxm"] = !![];
  }
  var tmp3 = fn["SwlSMJ"][i];
  if (tmp3 === undefined) {
    if (fn["qdmYAe"] === undefined) {
      fn["qdmYAe"] = !![];
    }
    x = fn["gzMmeT"](x, n);
    fn["SwlSMJ"][i] = x;
  } else {
    x = tmp3;
  }
  return x;
};
import _0x4e5763 from "./utils/createSvgIcon";
import{
  jsx as _0x1b2972
}from "react/jsx-runtime";
export default _0x4e5763(_0x1b2972(fn("0", "jdtp"), {
  "d" : fn("1", "DR7C")
}), "MusicVideo");

