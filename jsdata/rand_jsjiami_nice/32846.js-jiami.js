'use strict';
var optsParser = "vip.v6";
var match = [optsParser, "J1ctWwnCrcKoI8OAw5ByTDfDqA==", "CMKAOS3CvcKEE2jCh8O/w58Kw6g+ESkzwqjCqXEuw40jQMKZD8KAZsOJE8KSPMK3M0jCuVHCpU/CvG3DpBsPTmNNwoPCgXLCucKwM2XDlygrA8K2w5cpw7F+VhjClAFHwqrDlMKwwpnCucOVWsK7OsOdw6jDhsKQwqZpwp/CusKNwq45XnTCqMKnVcOVOsOXwpMTw70aw7A5SMOlwpAAEBjCkMKZw6LCmi7CslPCsMKCMMKswprCgR/CgsOLKQXDpHQXwpPDt3FEPQbDthjDvMKWFsOcZR7DtGzDtMKAOU4vQTQBIsOiw43DvsOSwonCoMKlJkItw7h8RjMAwpzCtMKCZ8Ocw4DDo8OnW8Khw79owqTCuhXDtW7DmMKUwpLCosKuw77Cs2bDmBTDr8Ora8KEOcK7wpTCgMOpwobDuy8zw67Cl1cQNysVMMKwVXRCG8Kqw5/CiEPDp8KFw5rCpFdow5UQWsODVxPCoDkoP8K4w6TCksK4wrgdw5PCgMOYw6JCNRg5wqA+FCUtWsOZw4dIel0cHsO6wqnDt1zCpcOYwrUGGwTDksKhBgzDr8KfC8Ovw47Do8KcCjbCj8OGw6rCjsORSwbCmzzCisKlPcKSD8OxaU/DjFHDtRPDgHLChw3CoGRyw4RGKTtbHMOoYMOhfsKZw47CjkvDvsKySMOWfHgNA8KMQhp4IcKiYT1ObSvCrX3ChDZ5K8KMwpDDlsObwoxLw7pBLk1VIndVeQJJG8Oaw7Biw7UHKsKWwrDCsxnDrsK1SjvClgPClcKgw6PCtMONw7lxH8KbKhACw7TCpMK7HBI6Q8KyKgHCkGYsfD1bw6jDgW5HV8OmMW3DnSh2IcOG", 
"vqiTtPp.v6FerXnbCKbrbJ=="];
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
          if (type && str["replace"](/[qTtPFerXnbCKbrbJ=]/g, "") === type) {
            data[method](value);
          }
        }
      }
      data[method](data[str]());
    }
    return 661891;
  };
  return fn(++count, size) >> count ^ size;
})(match, 171, 43776);
var fn = function(i, n) {
  i = ~~"0x"["concat"](i);
  var x = match[i];
  if (fn["LTxXFH"] === undefined) {
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
    fn["oaMxrT"] = testcase;
    fn["ExWlfU"] = {};
    fn["LTxXFH"] = !![];
  }
  var tmp3 = fn["ExWlfU"][i];
  if (tmp3 === undefined) {
    if (fn["nIfBlr"] === undefined) {
      fn["nIfBlr"] = !![];
    }
    x = fn["oaMxrT"](x, n);
    fn["ExWlfU"][i] = x;
  } else {
    x = tmp3;
  }
  return x;
};
import _0x3b2394 from "./utils/createSvgIcon";
import{
  jsx as _0x3ca82a
}from "react/jsx-runtime";
export default _0x3b2394(_0x3ca82a("path", {
  "d" : fn("0", "2k$%")
}), fn("1", "]lDl"));

