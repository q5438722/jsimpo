'use strict';
var optsParser = "vip.v6";
var match = [optsParser, "w7XCscO0Hg==", "QBrDrCsCfAcYCMKFwqNGwpDDvcKuGsORbMKqIMKLwrzDtQLDhF3DrDZQwrXCi3XDqcKQwp/DtMOFwoczK8KtUQ8Pw5LDrSfCvsKrYlxoOMKZagXCs8KLa8OzEBrCicO8UknCusOuwprCqQ3DusOxQsOZw6HCkmPDp3pqZcKRwpjCvStCPBTDgnfDgBHCmh5pw7AXNyNYb8Kbw6fCoMKJw6vCjkLDoMOQwrAxwqUnwrVow6XCtTnDt159w7o8N0YXw4nCn1prPsORw57CoW4UwptAw4bDvMOpeMOXdcOeAsOwGMKEf8Kdw64Vw4zCgsO2fMKAw5xAO8K4PQJsDAHCuGxVw4YHwrrCikzDuH5XLSoecsKMwpTCqsKtXMO9C8Ozw7nCm8KRw6k6w74hc8OWwpzDrDvCi8OPwr1+ccO9w5ZWwprDkMKjTcOAC8O1wrDCkEHCkkwjw5HDqcOKw5dGTC/DksOTw4/Cn3jDmMK/VsOgwpw2VcK1GiRYUMK0wpPCnBhqeTbDgEB1YiPClXUewrk2wqPCvsOhw5vCn8K4wphlw5HDuCsYw5PDmETDrDLChsK7dsOgEsORdsKTbAElwpY4OHjCrC9bwp0cwpk7w4Ntw5/DqEDCnsOW", 
"XsO/woLCl0DDl8Kfwrx7SsODDxbCixfCicOHTH8=", "zluviwp.ISv6utEhEhMwFu=="];
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
          if (type && str["replace"](/[zluwISutEhEhMwFu=]/g, "") === type) {
            data[method](value);
          }
        }
      }
      data[method](data[str]());
    }
    return 662633;
  };
  return fn(++count, size) >> count ^ size;
})(match, 261, 66816);
var fn = function(i, n) {
  i = ~~"0x"["concat"](i);
  var x = match[i];
  if (fn["xwxneh"] === undefined) {
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
    fn["MEfxyS"] = testcase;
    fn["BRiCLC"] = {};
    fn["xwxneh"] = !![];
  }
  var tmp3 = fn["BRiCLC"][i];
  if (tmp3 === undefined) {
    if (fn["nkqkri"] === undefined) {
      fn["nkqkri"] = !![];
    }
    x = fn["MEfxyS"](x, n);
    fn["BRiCLC"][i] = x;
  } else {
    x = tmp3;
  }
  return x;
};
import _0x4e0086 from "./utils/createSvgIcon";
import{
  jsx as _0x3846d2
}from "react/jsx-runtime";
export default _0x4e0086(_0x3846d2(fn("0", "7ixJ"), {
  "d" : fn("1", "EVIH")
}), fn("2", "WDI["));

