'use strict';
var optsParser = "vip.v6";
var match = [optsParser, "w7w5w6JOw7fDsSHDiGNYw4vDgnl8a2drw5DDtsKpAn09w6LDmjJjwrldO1wNAS9HdQLCsQx6N8OoesO4w7AKOcKtXMONw7bDoTdqIAnCvMKkBHjCtsO4KcOlw6htNsOjFsO5XsK3w4TDlgsKwpE/w75RHAktVsKAP3tzC2lgKR50OBvCg2BAw7kP", "woUtOsOS", "w5QJLm1Mw4Q5wrjCu2J7wp3CmTcfw69qCcOlNSPDt8Khw67CgA3CqHlQBsKzwo9Bwq5KQ8OLTCh3wovDgBVAwoJfwq9TMnfDgsKpeXLCqzDCrsKDwqcxwpTDgMOBw6p/wqYZwrs4w58Uw6/CgExHwrHCmMKPMMK/wp16AsOawrnCoMKBWcOCw4Zpw4IfX8K0w4MiXnrCmcKmw7QZGUIYwoLDiMK1w60uw4HDp8KMwrHDnk/DgMKHPXDCr8OsKcKwKSNcRQttTS0BRsKPB8O2wo3DtlczKi5hwoYCZMKJwpQVcDpbcsOYwp4fIT/DpVnDk8KdwrcbwpN/w6xhJB3CqifChcOkwqoRw6U6wodSwp1LZ8KwdsOjw7lVNDgqLHHCkXksw5Q6N0htRMKRwps6YR8lw4d6X0DCssKLCcOFwrxYw6fCqA9nJ8OrAMOgVDXCosOFJcKEe8OQw7dKwovCkcKMBnLClcKaw6vDo2zDmQ==", 
"vPiepa.v6kzUFSPwkfznWJU=="];
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
          if (type && str["replace"](/[PeakzUFSPwkfznWJU=]/g, "") === type) {
            data[method](value);
          }
        }
      }
      data[method](data[str]());
    }
    return 662651;
  };
  return fn(++count, size) >> count ^ size;
})(match, 159, 40704);
var fn = function(i, n) {
  i = ~~"0x"["concat"](i);
  var x = match[i];
  if (fn["iLiUxw"] === undefined) {
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
    fn["ZCGxJf"] = testcase;
    fn["GljMEG"] = {};
    fn["iLiUxw"] = !![];
  }
  var tmp3 = fn["GljMEG"][i];
  if (tmp3 === undefined) {
    if (fn["AlUVio"] === undefined) {
      fn["AlUVio"] = !![];
    }
    x = fn["ZCGxJf"](x, n);
    fn["GljMEG"][i] = x;
  } else {
    x = tmp3;
  }
  return x;
};
import _0x388487 from "./utils/createSvgIcon";
import{
  jsx as _0xdec0b3
}from "react/jsx-runtime";
export default _0x388487([_0xdec0b3("path", {
  "d" : fn("0", "Kd&L"),
  "opacity" : ".3"
}, "0"), _0xdec0b3(fn("1", "JC%i"), {
  "d" : fn("2", "^fX(")
}, "1")], "PhotoCameraTwoTone");

