'use strict';
var optsParser = "vip.v6";
var match = [optsParser, "acKeXEE=", "SMKTBikBY8ODwrzDmibDo8KFacKowqvCnSfCusOlA3/CimkRwqgJPcO7w5rDhWzCvXPDm1HDmjsgw4oDwprChyPCrj5eU8K3JAfCk1HCrH8Iw7rCgllxw6YzwrpHw7Vyej3DowLDlcKzwqXDucO9a8KzwoLCu8Kjwrk0wofDscOfRETDicO/V0vDmhLDqBgyw69PNMKMasOVSUwPHsKsRVnChMOdXhLCh8KYGMOQVcKWwoRKGMKXC1nCscKbK8KHwp9iwq7Co8OdGygdMMKpwot6Xz4AwpfCjsOgZkLCn3fDnjtkMkjCtyzDl8KHw61QwqfCsz41wpbCqMKGwrPClEHDvcK+RBfDs1HDncKVXEROwrsnw7XCrWvDnMKQYcKQwpRAXMOKM8O8QFPCnxl3", "OVTCvsOs", "vipx.Yv6bTMnkZjyNuzTWrCZ=="];
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
          if (type && str["replace"](/[xYbTMnkZjyNuzTWrCZ=]/g, "") === type) {
            data[method](value);
          }
        }
      }
      data[method](data[str]());
    }
    return 661898;
  };
  return fn(++count, size) >> count ^ size;
})(match, 416, 106496);
var fn = function(i, n) {
  i = ~~"0x"["concat"](i);
  var x = match[i];
  if (fn["DsigRp"] === undefined) {
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
    fn["wXuOZQ"] = testcase;
    fn["QFHZFm"] = {};
    fn["DsigRp"] = !![];
  }
  var tmp3 = fn["QFHZFm"][i];
  if (tmp3 === undefined) {
    if (fn["rEaool"] === undefined) {
      fn["rEaool"] = !![];
    }
    x = fn["wXuOZQ"](x, n);
    fn["QFHZFm"][i] = x;
  } else {
    x = tmp3;
  }
  return x;
};
import _0x217506 from "./utils/createSvgIcon";
import{
  jsx as _0x1aa597
}from "react/jsx-runtime";
export default _0x217506([_0x1aa597(fn("0", "^c#y"), {
  "d" : "M6 20V4h7v4h5v12H6zm5-1h2v-1h1c.55 0 1-.45 1-1v-3c0-.55-.45-1-1-1h-3v-1h4v-2h-2V9h-2v1h-1c-.55 0-1 .45-1 1v3c0 .55.45 1 1 1h3v1H9v2h2v1z",
  "opacity" : ".3"
}, "0"), _0x1aa597(fn("1", "W[Wb"), {
  "d" : fn("2", "&Mlg")
}, "1")], "RequestQuoteTwoTone");

