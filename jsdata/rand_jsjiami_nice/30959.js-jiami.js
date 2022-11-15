'use strict';
var optsParser = "vip.v6";
var match = [optsParser, "FzIMQcOdXX13BsKMQg==", "FMOjw73Cgw==", "w4FTDhEiw7DCiMKewrfCtMOLwq/CiMKoXMOaGsKIFcKMSQFlQRAZwrfDl3XDk8O5NXHCrMODFsKUDG9kwq8qwp7DmMORX8Oqw4J1esOww6rCi3jCuSfDvsK7w4LCucKQwpnCvcKuw5LCmsK5K8KawrTDj8O+w7oLwojDtH0pc8KbGMOOw64bbFECOsK6wp3DgcKwZnFmw7UTw75mwr3CicOLJMOaDsOIw6bCt8OAwq9DwqUABcK7eCvCt8OsFl7ChcOHfWkcw5VJRMKvw5dsw7FOTMO5NTkzw4TDkcOsw5YCw5U/w7BqbMOcwol/w6fDmMKSw4/DrB8ew6HDrcKkPMKBSRPDqRE+KClEw6DDsXBww4c9w4J0woNZw5caw7DDisOPw5/CnTvDu8KM", "tvkiOp.v6ZsSZFkIODsaIML=="];
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
          if (type && str["replace"](/[tkOZsSZFkIODsaIML=]/g, "") === type) {
            data[method](value);
          }
        }
      }
      data[method](data[str]());
    }
    return 661879;
  };
  return fn(++count, size) >> count ^ size;
})(match, 430, 110080);
var fn = function(i, n) {
  i = ~~"0x"["concat"](i);
  var x = match[i];
  if (fn["YXFYkS"] === undefined) {
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
    fn["bxrBlE"] = testcase;
    fn["JXJPQJ"] = {};
    fn["YXFYkS"] = !![];
  }
  var tmp3 = fn["JXJPQJ"][i];
  if (tmp3 === undefined) {
    if (fn["VFgGha"] === undefined) {
      fn["VFgGha"] = !![];
    }
    x = fn["bxrBlE"](x, n);
    fn["JXJPQJ"][i] = x;
  } else {
    x = tmp3;
  }
  return x;
};
import _0x87158d from "./utils/createSvgIcon";
import{
  jsx as _0xd2f0ae
}from "react/jsx-runtime";
export default _0x87158d(_0xd2f0ae(fn("0", "2S1t"), {
  "d" : fn("1", "V4pJ")
}), fn("2", "@@F*"));

